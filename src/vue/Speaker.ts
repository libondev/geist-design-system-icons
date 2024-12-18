import { defineComponent, h } from 'vue'

export const SpeakerIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.5L6.67082 10.6584L12.5 13.5729V2.42705L6.67082 5.34164L6 5.5H3.5V10.5H6ZM12.5 0.75L6 4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H6L12.5 15.25L14 16V14.3229V1.67705V0L12.5 0.75Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'SpeakerIcon' })
