
export const createAccount = async ( type: number, commercialName: string, rut: string, alias: string, address: string ) => {
  try {
    const response = await fetch('/api/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        commercialName,
        rut,
        alias,
        address
      })
    })
    const res = await response.json()
    return { status: response.status, message: res.message}
  } catch (err: any) {
    return { status: 500 }}
}

export const askForAccess = async ( enterprise: string, type: number ) => {
  try {
    const response = await fetch('/api/welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        enterprise
      })
    })
    const res = await response.json()

    return { status: response.status, message: res.message}
  } catch (err: any) {
    return { status: 500 }
  }
}