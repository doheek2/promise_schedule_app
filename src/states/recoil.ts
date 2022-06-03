import { atom } from 'recoil'

export const isLoggedState = atom<boolean>({
  key: '#isLoggedState',
  default: false,
})

// { name: 'pink', color: '#e09e85' },
// { name: 'green', color: '#c2dfdb' },
// { name: 'mint', color: '#b4dedf' },
// { name: 'purple', color: '#f2ebfd' },
// { name: 'beige', color: '#f5f0ea' },
// { name: 'gray', color: '#c7c7cc' },
// { name: 'black', color: '#2c2c2e' },

export const colorsState = atom<string[]>({
  key: '#colorsState',
  default: ['#e09e85', '#c2dfdb', '#b4dedf', '#f2ebfd', '#f5f0ea', '#c7c7cc', '#2c2c2e'],
})
