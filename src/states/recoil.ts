import { atom } from 'recoil'

export const isLoggedState = atom<boolean>({
  key: '#isLoggedState',
  default: false,
})

export const userState = atom<string | null | undefined>({
  key: '#userState',
  default: '',
})

// { name: 'red', color: '#ead6d6' },
// { name: 'yellow', color: '#eae9d6' },
// { name: 'green', color: '#c2dfdb' },
// { name: 'sky', color: '#d6e6ea' },
// { name: 'purple', color: '#f2ebfd' },
// { name: 'beige', color: '#f5f0ea' },
// { name: 'gray', color: '#c7c7cc' },

export const colorsState = atom<string[]>({
  key: '#colorsState',
  default: ['#ead6d6', '#eae9d6', '#c2dfdb', '#d6e6ea', '#f2ebfd', '#f5f0ea', '#c7c7cc'],
})
