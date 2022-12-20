import React from 'react'
import Styles from "./Project.module.css"

export default function Project() {
  return (
    <div className={Styles.container}>
      <h3>Name</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, esse recusandae vitae, rerum aut sed dolorum veritatis itaque placeat cupiditate incidunt natus nostrum commodi neque explicabo vero facilis unde necessitatibus.
      </p>
      <div className={Styles.linkContainer}>
        <a href="#" className={Styles.link}>Website</a>
        <a href="#" className={Styles.link}>Github</a>
        <a href="#" className={Styles.link}>Empresa</a>
      </div>
      <div className={Styles.hability}>
        <span>React JS</span>
        <span>CSS</span>
        <span>React Router Dom</span>
      </div>
    </div>
  )
}
