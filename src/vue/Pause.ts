import { defineComponent, h } from 'vue'

export const PauseIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 2.5V1.75H4V2.5V13.5V14.25H5.5V13.5V2.5ZM12 2.5V1.75H10.5V2.5V13.5V14.25H12V13.5V2.5Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'PauseIcon' })
