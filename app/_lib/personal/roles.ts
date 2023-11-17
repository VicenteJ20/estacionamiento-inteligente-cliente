export const getAllRoles = async () => {
  const info = await fetch('/api/roles', {
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
  const res = await info.json()
  return res
}