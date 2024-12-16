import { defineComponent, h } from 'vue'

export const MinusIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.25H2.75H13.25H14V8.75H13.25H2.75H2V7.25Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'MinusIcon' })
