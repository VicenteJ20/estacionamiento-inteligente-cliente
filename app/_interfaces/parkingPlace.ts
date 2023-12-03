export interface ParkingPlaceI {
  id?: number
  manager: number
  latitude: number
  longitude: number
  altitude: number
  region: string
  comuna: string
  ciudad: string
  postalCode: number
  createdAt?: Date
}