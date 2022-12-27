import React, { useState } from 'react'
import Styles from "./Project.module.css"

export default function Project({title, desc, web = "", github = "", company = "", tecnologis}) {

  return (
    <div className={Styles.container}>
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
      <div className={Styles.linkContainer}>
        {web && <a href={web} className={Styles.link}>Website</a>}
        {github && <a href={github} className={Styles.link}>Github</a>}
        {company && <a href={company} className={Styles.link}>Empresa</a>}
      </div>
      <div className={Styles.hability}>
        {
          tecnologis && tecnologis.map((v, i) => (
            <>  
              <span key={i}>{v}</span>
            </>
          ))
        }
      </div>
    </div>
  )
}
