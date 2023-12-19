import mongoose from 'mongoose'

const sensorConnection = async () => {
  const URI = process.env.MONGODB_URI as string

  try {
    await mongoose.connect(URI)
    console.log('CONNECTED TO MONGODB')
  } catch (err) {
    console.log(err)
  }
}

export {
  sensorConnection
}