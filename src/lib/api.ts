
import { MD5 } from './MD5';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
console.log('process.env.NEXT_PUBLIC_API_BASE_URL = ' + process.env.NEXT_PUBLIC_API_BASE_URL)

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  phone: string;
  confirmPassword: string;
}

export interface LoginResponse {
  code: number;
  datas: null;
  data: {
    id: number;
    username: string;
    token: string;
    roles: string[] | null;
    permissions: string[];
    introduction: string | null;
    balance: number | 0.00;
    name: string | null;
    avatar: string | null;
  };
  message: string;
}

export interface RegisterResponse {
  code: number;
  datas: null;
  data: null;
  message: string;
}

// 当前用户信息响应
export interface CurrentUserResponse {
  code: number;
  datas: null;
  data: {
    id: number;
    username: string;
    token: string;
    roles: string[] | null;
    permissions: string[];
    introduction: string | null;
    balance: number | 0.00;
    name: string | null;
    avatar: string | null;
  };
  message: string;
}

// 标签相关接口
export interface Tag {
  id: number;
  name: string;
  color: string;
  userId: number;
  description: string | null;
  createTime: string;
  updateTime: string;
}

export interface TagRequest {
  name: string;
  color: string;
  description?: string;
}

export interface TagListResponse {
  code: number;
  datas: null;
  data: {
    records: Tag[];
    total: number;
    size: number;
    current: number;
    orders: any[];
    optimizeCountSql: boolean;
    searchCount: boolean;
    maxLimit: null | number;
    countId: null | string;
    pages: number;
  };
  message: string;
}

export interface TagResponse {
  code: number;
  datas: null;
  data: boolean;
  message: string;
}

// AI 回复相关接口
export interface AIChatRequest {
  inputs: Record<string, any>;
  query: string;
  responseMode: string;
  conversationId?: string;
  user: string;
}

export interface AIChatResponse {
  code: number;
  datas: null;
  data: {
    mode: string;
    answer: string;
    event: string;
    taskId: string;
    id: string;
    messageId: string;
    conversationId: string;
    createdAt: number;
  };
  message: string;
}

// 联系人相关接口
export interface SaveCustomerRequest {
  id: string;
  nickname: string;
}

export interface SaveCustomerResponse {
  code: number;
  datas: null;
  data: boolean;
  message: string;
}

export interface AddTagsOnCustomerRequest {
  customerId: string;
  tagIds: number[];
}

export interface AddTagsOnCustomerResponse {
  code: number;
  datas: null;
  data: boolean;
  message: string;
}

export interface CustomerTag {
  tagId: number;
  tagName: string;
  color: string;
}

export interface CustomerWithTags {
  customerId: string;
  tags: CustomerTag[];
}

export interface CustomersWithTagsRequest {
  customerIds: string[];
}

export interface CustomersWithTagsResponse {
  code: number;
  datas: null;
  data: CustomerWithTags[];
  message: string;
}

export interface ConversationIdResponse {
  code: number;
  datas: null;
  data: string | null;
  message: string;
}

export interface UpdateConversationIdResponse {
  code: number;
  datas: null;
  data: boolean;
  message: string;
}

export interface ConversationIdResponse {
  code: number;
  datas: null;
  data: string | null;
  message: string;
}

export interface UpdateConversationIdResponse {
  code: number;
  datas: null;
  data: boolean;
  message: string;
}

class ApiService {
  private redirectToLogin() {
    if (typeof window === 'undefined') return;
    const href = window.location.href;
    const path = window.location.pathname;
    // Already on login page? (handle both web and file builds)
    if (
      path === '/login' ||
      path.endsWith('/login') ||
      path.endsWith('/login/') ||
      href.endsWith('/login') ||
      href.endsWith('/login/') ||
      href.endsWith('/login/index.html') ||
      href.includes('/login/index.html')
    ) {
      return;
    }
    // Prevent rapid multiple redirects (common when paths contain spaces)
    try {
      const flag = sessionStorage.getItem('redirecting_to_login');
      if (flag === '1') return;
      sessionStorage.setItem('redirecting_to_login', '1');
      setTimeout(() => {
        try { sessionStorage.removeItem('redirecting_to_login'); } catch {}
      }, 2000);
    } catch {}
    const isFile = window.location.protocol === 'file:';
    if (isFile) {
      // Resolve to login directory so RSC relative fetches (__next._tree.txt) resolve under /login/
      const targetUrl = new URL('./login/', window.location.href).toString();
      window.location.replace(targetUrl);
    } else {
      window.location.replace('/login');
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}, skipAuthRedirect: boolean = false): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // 获取 token
    const token = typeof window !== 'undefined' ? localStorage.getItem('salesup_token') : null;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      // 处理 401 未授权错误（登录和注册接口不需要跳转）
      if (response.status === 401 && !skipAuthRedirect) {
        // 清除本地存储的 token 和用户信息
        if (typeof window !== 'undefined') {
          localStorage.removeItem('salesup_token');
          localStorage.removeItem('salesup_user');
          // 跳转到登录页面（考虑 file:// 场景使用相对路径）
          const currentPath = window.location.pathname;
          const href = window.location.href;
          const alreadyOnLogin =
            currentPath === '/login' ||
            currentPath.endsWith('/login') ||
            currentPath.endsWith('/login/') ||
            href.endsWith('/login') ||
            href.endsWith('/login/') ||
            href.endsWith('/login/index.html') ||
            href.includes('/login/index.html');
          const alreadyOnRegister =
            currentPath === '/register' ||
            currentPath.endsWith('/register') ||
            currentPath.endsWith('/register/') ||
            href.endsWith('/register') ||
            href.endsWith('/register/') ||
            href.endsWith('/register/index.html') ||
            href.includes('/register/index.html');
          if (!alreadyOnLogin && !alreadyOnRegister) {
            this.redirectToLogin();
          }
        }
        throw new Error('Unauthorized: Please login again');
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    credentials.password = MD5.instance.hex_md5(credentials.password);
    // 登录接口不需要 token，跳过 401 跳转
    return this.request<LoginResponse>('/backend/user/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }, true);
  }

  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    // 注册接口不需要 token，跳过 401 跳转
    return this.request<RegisterResponse>('/backend/user/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }, true);
  }

  // 获取当前用户信息
  async getCurrentUser(): Promise<CurrentUserResponse> {
    const response = await this.request<CurrentUserResponse>('/backend/user/current', {
      method: 'GET',
    });
    
    // 检查响应体中的 code，如果是 401，清除本地信息并跳转
    if (response.code === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('salesup_token');
        localStorage.removeItem('salesup_user');
        const currentPath = window.location.pathname;
        if (currentPath !== '/login' && currentPath !== '/register') {
          this.redirectToLogin();
        }
      }
      throw new Error('Unauthorized: Please login again');
    }
    
    return response;
  }

  // 标签管理接口
  async getTags(page: number = 1, limit: number = 10): Promise<TagListResponse> {
    return this.request<TagListResponse>(`/backend/api/tag?page=${page}&limit=${limit}`);
  }

  async createTag(tag: TagRequest): Promise<TagResponse> {
    return this.request<TagResponse>('/backend/api/tag', {
      method: 'POST',
      body: JSON.stringify(tag),
    });
  }

  async updateTag(id: number, tag: TagRequest): Promise<TagResponse> {
    return this.request<TagResponse>(`/backend/api/tag/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tag),
    });
  }

  async deleteTag(id: number): Promise<TagResponse> {
    return this.request<TagResponse>(`/backend/api/tag/${id}`, {
      method: 'DELETE',
    });
  }

  // AI 聊天接口
  async sendAIChat(request: AIChatRequest): Promise<AIChatResponse> {
    return this.request<AIChatResponse>('/backend/api/chat/dify/chat-messages', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  // 联系人相关接口
  async saveCustomer(customer: SaveCustomerRequest): Promise<SaveCustomerResponse> {
    return this.request<SaveCustomerResponse>('/backend/api/customer', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }

  async addTagsOnCustomer(request: AddTagsOnCustomerRequest): Promise<AddTagsOnCustomerResponse> {
    return this.request<AddTagsOnCustomerResponse>('/backend/api/customer/addTagsOnCustomer', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  async getCustomersWithTags(customerIds: string[]): Promise<CustomersWithTagsResponse> {
    return this.request<CustomersWithTagsResponse>('/backend/api/customer/customersWithTags', {
      method: 'POST',
      body: JSON.stringify(customerIds),
    });
  }

  async getConversationId(customerId: string): Promise<ConversationIdResponse> {
    const encodedId = encodeURIComponent(customerId);
    return this.request<ConversationIdResponse>(`/backend/api/customer/getConversationId?customerId=${encodedId}`, {
      method: 'GET',
    });
  }

  async updateConversationId(customerId: string, conversationId: string): Promise<UpdateConversationIdResponse> {
    const encodedCustomerId = encodeURIComponent(customerId);
    const encodedConversationId = encodeURIComponent(conversationId);
    return this.request<UpdateConversationIdResponse>(`/backend/api/customer/updateConversationId?customerId=${encodedCustomerId}&conversationId=${encodedConversationId}`, {
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();