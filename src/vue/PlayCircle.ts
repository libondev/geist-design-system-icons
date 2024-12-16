import { defineComponent, h } from 'vue'

export const PlayCircleIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill="#666" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z" clip-rule="evenodd" style="fill:currentColor;"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'PlayCircleIcon' })
