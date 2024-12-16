import { defineComponent, h } from 'vue'

export const AsteriskIcon = defineComponent((_,c) => { const $ = h("svg", { innerHTML:'<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 15V11.0311C7.25 10.2613 6.41667 9.78019 5.75 10.1651L2.31287 12.1495L1.56287 10.8505L5.00006 8.86602C5.66673 8.48112 5.66673 7.51886 5.00006 7.13396L1.5629 5.14952L2.3129 3.85048L5.75 5.83489C6.41667 6.21979 7.25 5.73867 7.25 4.96886V1H8.75V4.96894C8.75 5.73874 9.58333 6.21986 10.25 5.83496L13.6872 3.85048L14.4372 5.14952L11.0001 7.13396C10.3334 7.51886 10.3334 8.48112 11.0001 8.86602L14.4373 10.8505L13.6873 12.1495L10.25 10.165C9.58333 9.78012 8.75 10.2612 8.75 11.031V15H7.25Z" fill="currentColor"></path>',height:"16",strokeLinejoin:"round",style:"color:currentColor",viewBox:"0 0 16 16",width:"16",...c.attrs });return () => $ }, { name:'AsteriskIcon' })
