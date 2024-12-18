import { defineComponent, h } from 'vue'

export const RssIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.5C7.90356 2.5 13.5 8.09644 13.5 15H15C15 7.26801 8.73199 1 1 1V2.5ZM8 15C8 11.134 4.86599 8 1 8V6.5C5.69442 6.5 9.5 10.3056 9.5 15H8ZM2.5 15C2.5 14.1716 1.82843 13.5 1 13.5V12C2.65685 12 4 13.3431 4 15H2.5Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'RssIcon' })
