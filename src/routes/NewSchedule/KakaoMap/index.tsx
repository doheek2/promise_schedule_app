import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { HiLocationMarker } from 'react-icons/hi'
import { ChangeEvent, Dispatch, forwardRef, SetStateAction, useState } from 'react'

import styles from './kakaoMap.module.scss'

interface IProps {
  place: string
  setPlace: Dispatch<SetStateAction<string>>
}
// eslint-disable-next-line react/display-name
const KakaoMap = forwardRef<HTMLInputElement, IProps>(({ place, setPlace }, ref) => {
  const [lat, setLat] = useState(33.450701)
  const [lng, setLng] = useState(126.570667)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    })
  }

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setPlace(e.currentTarget.value)

  return (
    <div className={styles.maps}>
      <div className={styles.searchPlaceWrapper}>
        <HiLocationMarker />
        <input type='text' placeholder='Search Place' value={place} ref={ref} onChange={searchChangeHandler} />
      </div>
      <Map className={styles.mapWrapper} center={{ lat, lng }} level={4}>
        <MapMarker position={{ lat, lng }} />
      </Map>
    </div>
  )
})

export default KakaoMap
