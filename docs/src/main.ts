import * as Icons from 'gdsi/svg'

import './style.css'

type IconNames = Array<keyof typeof Icons>

const iconsNames = Object.keys(Icons) as IconNames

const container = document.querySelector<HTMLDivElement>('#app')!
const iconWrapper = document.createElement('div')

function onFilterChange(event: Event) {
  const inputValue = (event.target as HTMLInputElement).value

  if (!inputValue) {
    updateGridItems(iconsNames)

    return
  }

  const matchIcons = iconsNames.filter((key) => {
    return key.toLowerCase().includes(inputValue.toLowerCase())
  })

  updateGridItems(matchIcons, inputValue)
}

function setupFilter(container: HTMLDivElement) {
  const box = Object.assign(document.createElement('div'), { className: 'filter-box' })
  const input = Object.assign(document.createElement('input'), {
    type: 'text',
    placeholder: 'Search',
    className: 'filter-input',
  })

  box.innerHTML = Icons.MagnifyingGlassIcon

  input.addEventListener('input', onFilterChange)

  box.append(input)

  container.append(box)
}

function setupGrid(container: HTMLDivElement) {
  iconWrapper.replaceChildren(
    updateGridItems(Object.keys(Icons) as IconNames),
  )

  container.appendChild(iconWrapper)
}

function updateGridItems(icons: Array<keyof typeof Icons>, highlightKeyword = '') {
  const el = Object.assign(document.createElement('div'), { className: 'container' })

  const highlightRegex = new RegExp(highlightKeyword, 'gi')

  const getHighlight = highlightKeyword
    ? (key: string) => {
        const [_key] = key.match(highlightRegex) || []

        if (_key) {
          return key.replace(new RegExp(_key, 'g'), `<span class="highlight-keyword">${_key}</span>`)
        }

        return key
      }
    : (key: string) => key

  icons.forEach((key) => {
    const item = Object.assign(document.createElement('button'), {
      className: 'icon-item',
    })

    item.innerHTML = `
      ${Icons[key]}
      <div class="icon-name">${(getHighlight(key))}</div>
    `

    el.append(item)
  })

  iconWrapper.replaceChildren(el)

  return el
}

function cleaning() {
  window.addEventListener('unload', () => {
    const input = document.querySelector<HTMLInputElement>('.filter-input')!

    input.removeEventListener('input', onFilterChange)
  }, { once: true })
}

setupFilter(container)
setupGrid(container)

cleaning()
