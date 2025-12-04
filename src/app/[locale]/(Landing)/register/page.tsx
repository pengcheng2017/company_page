'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from 'lucide-react'
import { apiService } from '../../../../lib/api'
import { authService } from '../../../../lib/myauth'

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    invitationCode: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // 印尼手机号码验证函数
  const validateIndonesianPhone = (phone: string): boolean => {
    // 移除所有非数字字符
    const cleanedPhone = phone.replace(/\D/g, '')
    
    // 印尼手机号码格式：
    // 1. 以08开头，后面跟8-10位数字（总长度10-12位）
    // 2. 或者以+62开头，后面跟8-11位数字
    // 3. 或者以62开头（不带+），后面跟8-11位数字
    
    const indonesianPhoneRegex = /^(?:\+62|62|0)8[1-9][0-9]{6,9}$/
    
    return indonesianPhoneRegex.test(cleanedPhone)
  }

  // 格式化手机号码显示
  const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '')
    
    if (cleaned.startsWith('62')) {
      return `+${cleaned}`
    } else if (cleaned.startsWith('08')) {
      return `+62${cleaned.substring(1)}`
    } else if (cleaned.startsWith('8')) {
      return `+62${cleaned}`
    }
    
    return phone
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    // 前端验证
    if (!formData.username || !formData.phone  || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

        // 验证印尼手机号码
    if (!validateIndonesianPhone(formData.phone)) {
      setError('Please enter a valid Indonesian phone number (e.g., 081234567890, +6281234567890)')
      setIsLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      setIsLoading(false)
      return
    }

    try {
            // 格式化手机号码为统一格式
      const formattedPhone = formatPhoneNumber(formData.phone)
      // 调用后端注册接口
      const response = await apiService.register({
        username: formData.username,
        password: formData.password,
        invitationCode: formData.invitationCode,
        phone: formData.phone,
        confirmPassword: formData.confirmPassword
      })

      if (response.code === 200) {
        // 注册成功
        setSuccess('Registration successful! Redirecting to login page...')
        
        // 3秒后跳转到登录页面
        setTimeout(() => {
          //router.push('/login')
        }, 3000)
      } else {
        setError(response.message || 'Registration failed')
      }
    } catch (error: any) {
      console.error('Register error:', error)
      if (error.message && error.message.includes('HTTP error')) {
        setError('Network error, please check if the backend service is running')
      } else {
        setError(error.message || 'Registration failed, please try again')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // 清除错误信息当用户开始输入时
    if (error) setError('')
  }

  return (
    <div className="register-container">
      <div className="card">
        <div className="logo">
          <h1>salesUp.AI</h1>
          <p>{Language(dictionary.register_section)}</p>
          {/* <p>Start Your Intelligent Sales Journey</p> */}
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={20} />
              {success}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">{Language(dictionary.register_username_section)}</label>
            <div className="input-with-icon">
              <User size={20} className="input-icon" />
              <input
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your account name"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{Language(dictionary.register_phone_section)}</label>
            <div className="input-with-icon">
              <User size={20} className="input-icon" />
              <input
                type="text"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{Language(dictionary.register_invitation_code_section)}</label>
            <div className="input-with-icon">
              <User size={20} className="input-icon" />
              <input
                type="text"
                name="invitationCode"
                className="form-input"
                placeholder="Enter your invitation code"
                value={formData.invitationCode}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{Language(dictionary.register_password_section)}</label>
            <div className="input-with-icon">
              <Lock size={20} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-input"
                placeholder="Enter password (at least 6 characters)"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">{Language(dictionary.register_confirm_password_section)}</label>
            <div className="input-with-icon">
              <Lock size={20} className="input-icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                className="form-input"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer'
                }}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>


        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#9ca3af',
          padding: '10px',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
        </div>
      </div>
    </div>
  )
}