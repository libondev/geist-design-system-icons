import { defineComponent, h } from 'vue'

export const LockOpenSmallIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 7V6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6V7H12V8.5V9V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V7H13.5Z" fill="currentColor"></path>',strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",height:"1em",...c.attrs });return () => $ }, { name:'LockOpenSmallIcon' })
