import { defineStore } from 'pinia'
import { User } from '../types/user'
import { RegisterRequest, LoginRequest } from '../types/user'

import { authService } from '../services/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {} as User,
    token: '',

    registerRequest: {} as RegisterRequest,
    loginRequest: {} as LoginRequest,
  }),

  actions: {
    setUser(user: User) {
      this.user = user;
    },

    setToken(token: string) {
      this.token = token;
    },

    login({ username, password }: LoginRequest) {
      return authService.login({ username, password });
    },
  },
})