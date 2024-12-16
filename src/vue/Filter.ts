import { defineComponent, h } from 'vue'

export const FilterIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M1 0H1.75H14.25H15V0.75V3V3.31066L14.7803 3.53033L10.5 7.81066V15.25V16H9.75H9H8.7816L8.59734 15.8827L5.84734 14.1327L5.5 13.9117V13.5V7.81066L1.21967 3.53033L1 3.31066V3V0.75V0ZM2.5 1.5V2.68934L6.78033 6.96967L7 7.18934V7.5V13.0883L9 14.361V7.5V7.18934L9.21967 6.96967L13.5 2.68934V1.5H2.5Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'FilterIcon' })
