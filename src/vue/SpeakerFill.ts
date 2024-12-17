import { defineComponent, h } from 'vue'

export const SpeakerFillIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path d="M2 11V5C2 4.44772 2.44772 4 3 4H6L14 0V16L6 12H3C2.44772 12 2 11.5523 2 11Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'SpeakerFillIcon' })