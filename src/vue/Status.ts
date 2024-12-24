import { defineComponent, h } from 'vue'
export const StatusIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" fill="currentColor"></path>',strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",height:"1em",...c.attrs });return () => $ }, { name:'StatusIcon' })
