const getToken = () => localStorage.getItem('token') || ''

const setToken = (value: string) => {
  localStorage.setItem('token', value)
}

const removeToken = () => {
  localStorage.removeItem('token')
}

export { getToken, setToken, removeToken }
