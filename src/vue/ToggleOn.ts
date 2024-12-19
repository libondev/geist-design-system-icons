import { defineComponent, h } from 'vue'

export const ToggleOnIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M7.42928 11.5C6.54516 10.5981 6 9.36273 6 8C6 6.63727 6.54516 5.40188 7.42928 4.5H5C3.067 4.5 1.5 6.067 1.5 8C1.5 9.933 3.067 11.5 5 11.5H7.42928ZM0 8C0 5.23858 2.23858 3 5 3H11C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13H5C2.23858 13 0 10.7614 0 8Z" fill="currentColor"></path>',strokeLinejoin:"round",viewBox:"0 0 16 16",width:"1em",height:"1em",...c.attrs });return () => $ }, { name:'ToggleOnIcon' })
