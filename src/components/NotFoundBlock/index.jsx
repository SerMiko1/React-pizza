import React from 'react'

import styles from './NotFoundBlock.module.scss';

console.log(styles)

const NotFoundBlock = () => {
  return (
        <h1 className={styles.root}>
         <span>😔</span>
            <br />
            Мы не можем показать сырую пиццу, извини
        </h1>
  )
}

export default NotFoundBlock