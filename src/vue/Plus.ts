import { defineComponent, h } from 'vue'

export const PlusIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'PlusIcon' })
