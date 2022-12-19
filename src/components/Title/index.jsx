import React from 'react'
import styles from "./Title.module.css"

export default function Title() {
  return (
    <div className={styles.container}>
        <h1>Hello Human, I'm <span>Miqueias Belfort</span></h1>
        <p className={styles.subtitle}>Full Stack Developer & Freelancer</p>
        <p className={styles.welcome}>W3lc0m3 t0 M2tr1x</p>

        <a href='#' className={styles.see}>See More</a>
    </div>
  )
}
