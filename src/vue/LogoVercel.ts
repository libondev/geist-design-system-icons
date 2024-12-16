import { defineComponent, h } from 'vue'

export const LogoVercelIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'LogoVercelIcon' })
