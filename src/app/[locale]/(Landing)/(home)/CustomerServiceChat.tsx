// home/CustomerServiceChat.tsx
'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Language from "@/lib/language";
import dictionary from "@/assets/locale/dictionary.json";
import styles from './CustomerServiceChat.module.css';

interface Message {
  id: string;
  content: string | string[];
  sender: 'user' | 'bot';
  timestamp?: number;
}

interface ChatResponse {
  code: number;
  data: {
    answer: string;
    conversationId: string;
    messageId: string;
  };
  message: string;
}

const CustomerServiceChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 初始化时从本地存储获取会话ID和欢迎消息
  useEffect(() => {
    const savedConversationId = localStorage.getItem('customerServiceConversationId');
    if (savedConversationId) {
      setConversationId(savedConversationId);
    }
    // 设置初始欢迎消息
    const initialMessage: Message = {
      id: 'welcome',
      content: 'Hello! I am your AI customer service assistant, how can I help you today?',
      sender: 'bot',
    };
    setMessages([initialMessage]);
  }, []);

  // 当有新的会话ID时保存到本地存储
  useEffect(() => {
    if (conversationId) {
      localStorage.setItem('customerServiceConversationId', conversationId);
    }
  }, [conversationId]);

  // 自动滚动到底部
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    
    // 添加用户消息到列表
    const userMsg: Message = {
      id: Date.now().toString(),
      content: userMessage,
      sender: 'user',
      timestamp: Date.now(),
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // 准备请求数据
      const requestData = {
        conversationId: conversationId || '',
        inputs: {},
        query: userMessage,
        response_mode: 'blocking' as const,
        user: 'user',
      };

      const response = await fetch('http://localhost:8080/backend/open/customer-service/dify/chat-messages-customer-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data: ChatResponse = await response.json();

      if (data.code === 200 && data.data) {
        // 添加AI回复到列表
        const botMsg: Message = {
          id: data.data.messageId,
          content: data.data.answer,
          sender: 'bot',
          timestamp: Date.now(),
        };
        
        setMessages(prev => [...prev, botMsg]);
        
        // 保存会话ID
        if (data.data.conversationId && !conversationId) {
          setConversationId(data.data.conversationId);
        }
      } else {
        // 错误处理
        const errorMsg: Message = {
          id: 'error_' + Date.now().toString(),
          content: Language(dictionary.chat_server_error),
          sender: 'bot',
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, errorMsg]);
      }
    } catch (error) {
      console.error('发送消息失败:', error);
      const errorMsg: Message = {
        id: 'error_' + Date.now().toString(),
        content: Language(dictionary.chat_network_error),
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const clearChat = () => {
    // 重置为欢迎消息
    const welcomeMessage: Message = {
      id: 'welcome',
      content: Language(dictionary.chat_empty_chat_message),
      sender: 'bot',
    };
    setMessages([welcomeMessage]);
    setConversationId('');
    localStorage.removeItem('customerServiceConversationId');
  };

  return (
    <>
      {/* 客服按钮 */}
      <button 
        className={styles.chatButton}
        onClick={() => setIsOpen(true)}
        aria-label='AI Customer Service Assistant'
        title='AI Customer Service Assistant'
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* 聊天窗口 */}
      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h3>{Language(dictionary.chat_title)}</h3>
            <div className={styles.headerActions}>
              <button 
                onClick={clearChat}
                className={styles.clearButton}
                title='Clear'
              >
                {Language(dictionary.chat_clear_button)}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
                aria-label='Close chat'
                title='Close chat'
              >
                ×
              </button>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.sender === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
                <div className={styles.messageTime}>
                  {message.timestamp && new Date(message.timestamp).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={styles.loadingMessage}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder='Please enter your question...'
              disabled={isLoading}
              className={styles.messageInput}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className={styles.sendButton}
              title='Send message'
              aria-label='Send message'
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" 
                      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CustomerServiceChat;