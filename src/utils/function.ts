export const NOP: () => void = () => {}

export const addClass = (element: HTMLElement, className: string) => {
  if (element.className.includes(className)) return
  element.className += ` ${className}`
}

export const removeClass = (element: HTMLElement, className: string) => {
  if (!element.className.includes(className)) return
  element.className = element.className
    ?.split(className)
    .map(e => e.trim())
    .join(' ')
    .trim()
}
