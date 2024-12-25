export const shallowEqual = (prevProps: any, nextProps: any): boolean => {
  if (
    (!prevProps || Object.keys(prevProps).length === 0) &&
    (!nextProps || Object.keys(nextProps).length === 0)
  ) {
    return true
  }
  return Object.keys(prevProps).length === Object.keys(nextProps).length &&
    Object.keys(prevProps).every(key => prevProps[key] === nextProps[key])
}