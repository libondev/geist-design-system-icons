import { defineComponent, h } from 'vue'

export const FunctionIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 4C8.75 2.61929 9.86929 1.5 11.25 1.5H12V0H11.25C9.04086 0 7.25 1.79086 7.25 4V6H4.75H4V7.5H4.75H7.25V12C7.25 13.3807 6.13071 14.5 4.75 14.5H4V16H4.75C6.95914 16 8.75 14.2091 8.75 12V7.5H11.25H12V6H11.25H8.75V4Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'FunctionIcon' })
