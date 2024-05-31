import React from 'react'

import styles from './Search.module.scss'

const Search = () => {
  return (
    <div className={styles.root}>
    <input className={styles.input} placeholder='Поиск реактивной пиццы 😋'/>
    </div>
  )
}

export default Search