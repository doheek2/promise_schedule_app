import { Map, MapMarker, MapTypeId } from 'react-kakao-maps-sdk'
import { HiLocationMarker } from 'react-icons/hi'
import { useState } from 'react'

import styles from './kakaoMap.module.scss'

const KakaoMap = () => {
  const [mapTypeId] = useState<kakao.maps.MapTypeId>()
  const [lat, setLat] = useState(33.450701)
  const [lng, setLng] = useState(126.570667)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
    })
  }

  return (
    <div className={styles.maps}>
      <div className={styles.searchPlaceWrapper}>
        <HiLocationMarker />
        <input type='text' placeholder='Search Place' />
      </div>
      <Map className={styles.mapWrapper} center={{ lat, lng }}>
        <MapMarker position={{ lat, lng }} />
        {/* <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker> */}
        {mapTypeId && <MapTypeId type={mapTypeId} />}
      </Map>
    </div>
  )
}

export default KakaoMap
