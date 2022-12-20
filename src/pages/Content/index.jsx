import React from 'react'
import styles from "./Content.module.css"

// icons 
import {AiFillGithub, AiFillLinkedin, AiOutlineCloudDownload, AiFillHtml5} from "react-icons/ai"
import {DiCss3, DiBootstrap, DiReact, DiNodejsSmall} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io5"
import {SiTypescript, SiMongodb, SiMysql, SiFirebase, SiJasmine} from "react-icons/si"

import Project from '../../components/Projetc'

export default function Content() {
  return (
    <div className={styles.container}>
        <section className={styles.section1}>
            <h1>Sobre Mim</h1>
            <p className={styles.about}>
                Comecei a programar com Python no começo de 2021, e foi amor a primeira vista, com o tempo aprendi javascript e estou buscando minha primeira oportunidade profissional na carreira de desenvolvedor. <br/><br/>
                Hoje estudo além do JavaScript novas linguagens de programação como GoLang e novas tecnologia como BlockChain e Web3.<br/><br/>
                Estudo Engenharia de Software na IESB, compus do Jardim Botanico, Brasília - DF
            </p>
            <p className={styles.commenter}>"Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende."</p>

            <div className={styles.social}>

                <a href="#" className={styles.iconsLink}>
                    <span><AiFillGithub/></span>
                    <span>GitHub</span>
                </a>
                <a href="#" className={styles.iconsLink}>
                    <span><AiFillLinkedin/></span>
                    <span>LinkedIn</span>
                </a>
                <a href="#" className={styles.iconsLink}>
                    <span><AiOutlineCloudDownload/></span>
                    <span>Curriculo</span>
                </a>

            </div>

        </section>
        <div className={styles.line}></div>
        <section className={styles.section2}>
            <h1>Projetos</h1>
            <div className={styles.projects}>
                <div className={styles.gridContent}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </section>
        <div className={styles.line}></div>
        <section className={styles.section3}>
            <h1>Conhecimentos</h1>
            <div className={styles.skills}>
                <span><AiFillHtml5/></span>
                <span><DiCss3/></span>
                <span><IoLogoJavascript/></span>
                <span><DiBootstrap/></span>
                <span><DiReact/></span>
                <span><DiReact/></span>
                <span><SiTypescript/></span>
                <span><DiNodejsSmall/></span>
                <span><SiMongodb/></span>
                <span><SiMysql/></span>
                <span><SiFirebase/></span>
                <span><SiJasmine/></span>
                <img src="../../../src/assets/golang.svg" alt="go" />
            </div>
        </section>
    </div>
  )
}
