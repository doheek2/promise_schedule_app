import { atom } from 'recoil'

export const isLoggedState = atom<boolean>({
  key: '#isLoggedState',
  default: false,
})
