export const getEnterprises = async () => {
  try {
    const res = await fetch('/api/enterprise', {
      method: 'GET'
    })

    const info = await res.json()
    return { status: res.status, data: info.data }
  } catch (err: any) {
    console.log(err)
    return { status: 500}
  }
}