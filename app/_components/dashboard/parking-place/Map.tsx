'use client'

import { FiMapPin } from "react-icons/fi"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from "react"
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

const iconPopup = Leaflet.divIcon({
  className: 'custom-div-icon',
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" stroke="darkred" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="3" fill="white"></circle></svg>`,
  iconSize: [30, 30],
})

const ParkingPlaceMap = () => {
  const [markers, setMarkers] = useState([]) as any;
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [show, setShow] = useState(false)

  const addMarker = (e: any) => {
    const newMarkers = [...markers, e.latlng];
    setMarkers(newMarkers);
  }

  useEffect(() => {
    async function GetLocation() {
      navigator.geolocation.getCurrentPosition((position: any) => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setShow(true)
      }, (error: any) => {
        console.log(error)
      })
    }

    GetLocation()
  }, [])
  return (
    <>
      {
        show ? (
          <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={iconPopup}>
              <Popup>
                <span>Esta es su ubicación actual</span>
              </Popup>
            </Marker>
          </MapContainer>
        ) : null
      }
    </>
  )
}

export { ParkingPlaceMap }