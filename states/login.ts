import { atom } from 'recoil'

interface ILoginState {
  isLoggedIn: boolean
}

export const loginState = atom<ILoginState>({
  key: '#loginState',
  default: {
    isLoggedIn: true,
  },
})
