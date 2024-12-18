import { defineComponent, h } from 'vue'

export const BarChartIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill="currentColor" fill-rule="evenodd" d="M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1H1Zm8.5 2.75V3H8v9h1.5V3.75ZM6 8v4H4.5V8H6Zm7-1.25V6h-1.5v6H13V6.75Z" clip-rule="evenodd"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'BarChartIcon' })
