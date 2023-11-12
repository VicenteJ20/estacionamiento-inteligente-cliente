export const checkRequest = async (id: string) => {
  try {
    const response = await fetch('/api/checkRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    const data = await response.json()
    return { data, status: response.status }
  } catch (err: any) {
    console.error(err.message)
    return { data: err.message, status: 500 }
  }
}

export const getCollaborators = async () => {
  try {
    const res = await fetch('/api/request', {
      method: 'GET'
    })

    const info = await res.json()
    return { status: res.status, data: info.data }
    
  } catch (err: any) {
    console.log(err)
    return { status: 500 }
  }
}