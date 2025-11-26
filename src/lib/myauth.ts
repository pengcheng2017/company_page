const TOKEN_KEY = 'salesup_token';
const USER_KEY = 'salesup_user';

export interface User {
  id: number;
  username: string;
  token: string;
  roles: string[] | null;
  permissions: string[];
  introduction: string | null;
  balance: number | 0.00;
  name: string | null;
  avatar: string | null;
}

export const authService = {
  // 保存用户信息和 token
  setUser(user: User): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, user.token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  // 获取当前用户
  getUser(): User | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    }
    return null;
  },

  // 获取 token
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  },

  // 清除用户信息
  clearUser(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },

  // 检查是否已登录
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  },
};