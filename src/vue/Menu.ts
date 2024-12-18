import { defineComponent, h } from 'vue'

export const MenuIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 4H1V5.5H1.75H14.25H15V4H14.25H1.75ZM1.75 10.5H1V12H1.75H14.25H15V10.5H14.25H1.75Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'MenuIcon' })
