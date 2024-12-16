import { defineComponent, h } from 'vue'

export const GpsIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path d="M1 6L15 1L10 15L7.65955 8.91482C7.55797 8.65073 7.34927 8.44203 7.08518 8.34045L1 6Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel" fill="transparent"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'GpsIcon' })
