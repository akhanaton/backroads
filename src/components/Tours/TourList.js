import React, { useState, useEffect } from 'react'

import Title from '../Title'
import Tour from './Tour'
import styles from '../../css/items.module.css'

const TourList = ({ tours }) => {
  const [tourList, setTourList] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    setTourList(tours)
    setSortedTours(tours)
  }, [])

  return (
    <section className={styles.tours}>
          <Title title="our" subtitle="tours" />
          <div className={styles.center}>
            { tourList.map(({ node}) => <Tour tour={node} key={node.id} />)}
          </div>
    </section>
  )
}

export default TourList
