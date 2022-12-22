import React, {useState, useRef, useEffect} from 'react'
import styles from "./Content.module.css"
import ScrollReveal from 'scrollreveal'

// icons 
import {AiFillGithub, AiFillLinkedin, AiOutlineCloudDownload, AiFillHtml5, AiOutlineMail, AiOutlineWhatsApp, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
import {DiCss3, DiBootstrap, DiReact, DiNodejsSmall} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io5"
import {SiTypescript, SiMongodb, SiMysql, SiFirebase, SiJasmine} from "react-icons/si"

import Project from '../../components/Projetc'

export default function Content() {

    const [textSkill, setTextSkill] = useState("Sempre aprendo novas tecnologias para melhorar ainda mais como dev.")
    const [skillName, setSkillName] = useState("Habilidades")
    const [expirence, setExprirence] = useState("")
    const [clicked, setClicked] = useState(false)

    const sectionOne = useRef()
    const sectionTwo = useRef()
    const sectionThree = useRef()

    const handleSkills = (skill) => {
        setClicked(true)
        switch(skill){
            case "html":
                setSkillName("HTML")
                setExprirence("2 ano de experiência")
                setTextSkill("Consiste em uma linguagem de marcação utilizada para produção de páginas na web, que permite a criação de documentos que podem ser lidos em praticamente qualquer tipo de computador e transmitidos pela internet.")
            break
            case "css":
                setSkillName("CSS")
                setExprirence("2 ano de experiência")
                setTextSkill("Cascading Style Sheets (abreviado CSS) é um mecanismo para adicionar estilos (cores, fontes, espaçamento, etc.) a uma página web.")
            break
            case "js":
                setSkillName("Javascript")
                setExprirence("2 ano de experiência")
                setTextSkill("Javascript é uma linguagem de programação de alta complexidade, mas de fácil uso, voltada para criar elementos em aplicações web, como sites, aplicativos e sistemas online.")
            break
            case "bootstrap":
                setSkillName("Bootstrap")
                setExprirence("1 ano de experiência")
                setTextSkill("Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript.")
            break
            case "reactjs":
                setSkillName("React JS")
                setExprirence("1 ano de experiência")
                setTextSkill("O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.")
            break
            case "reactnative":
                setSkillName("React Native")
                setExprirence("1 ano de experiência")
                setTextSkill("Baseado no React, framework JS para desenvolvimento web, o React Native possibilita a criação de aplicações móvel multiplataforma (Android e iOS) utilizando apenas Javascript.")
            break
            case "ts":
                setSkillName("Typescript")
                setExprirence("1 ano de experiência")
                setTextSkill("Mais conhecido como um superset do Javascript, ou seja, um conjunto de ferramentas, o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JS")
            break
            case "node":
                setSkillName("Node JS")
                setExprirence("1 ano de experiência")
                setTextSkill("O Node.js pode ser definido como um ambiente de execução Javascript server-side.")
            break
            case "mongo":
                setSkillName("MongoDB")
                setExprirence("1 ano de experiência")
                setTextSkill("MongoDB é um banco de dados de documentos com a escalabilidade e flexibilidade que você deseja junto com a consulta e indexação.")
            break
            case "mysql":
                setSkillName("MySQL")
                setExprirence("1 ano de experiência")
                setTextSkill("O MySQL é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas para gerir suas bases de dados.")
            break
            case "firebase":
                setSkillName("Firebase")
                setExprirence("5 meses de experiência")
                setTextSkill("O Firebase de Google é uma plataforma digital utilizada para facilitar o desenvolvimento de aplicativos web ou móveis, de uma forma efetiva, rápida e simples.")
            break
            case "jasmine":
                setSkillName("Jasmine")
                setExprirence("Estudando")
                setTextSkill("Tendo a sua primeira release publicada em agosto de 2009 no GitHub, o Jasmine é uma biblioteca de testes JavaScript, de código aberto que tem como principal objetivo a execução em qualquer plataforma habilitada ao JavaScript.")
            break
            case "go":
                setSkillName("GOlang")
                setExprirence("Estudando")
                setTextSkill("A GoLang — ou, simplesmente, Go — é uma linguagem de programação de código aberto do Google.")
            break
            default:
                setSkillName("I don't know")
                setTextSkill("Mano, como você chegou aqui! kkkk")
        }
    }

    useEffect(() => {
        ScrollReveal().reveal(sectionOne.current, {
            reset: true,
            duration: 1000,
            delay: 200,
        })
        ScrollReveal().reveal(sectionTwo.current, {
            reset: true,
            duration: 1000,
            delay: 200
        })
        ScrollReveal().reveal(sectionThree.current, {
            reset: true,
            duration: 1000,
            delay: 200
        })
    }, [])

  return (
    <div className={styles.container}>
        <section className={styles.section1} ref={sectionOne}>
            <h1>Sobre Mim</h1>
            <p className={styles.about}>
                Comecei a programar com Python no começo de 2021, e foi amor a primeira vista, com o tempo aprendi javascript e estou buscando minha primeira oportunidade profissional na carreira de desenvolvedor. <br/><br/>
                Hoje estudo além do JavaScript novas linguagens de programação como GoLang e novas tecnologia como BlockChain e Web3.<br/><br/>
                Estudo Engenharia de Software na IESB, compus do Jardim Botanico, Brasília - DF
            </p>
            <p className={styles.commenter}>"Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende."</p>

            <div className={styles.social}>

                <a href="https://github.com/miqueiasbelfort" className={styles.iconsLink}>
                    <span><AiFillGithub/></span>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/miqueias-belfort/" className={styles.iconsLink}>
                    <span><AiFillLinkedin/></span>
                    <span>LinkedIn</span>
                </a>
                <a href='../../src/assets/curriculo.pdf' download="curriculo.pdf" className={styles.iconsLink}>
                    <span><AiOutlineCloudDownload/></span>
                    <span>Curriculo</span>
                </a>

            </div>

        </section>

        <div className={styles.line}></div>

        <section className={styles.section2} ref={sectionTwo}>
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

        <section className={styles.section3} ref={sectionThree}>
            <h1>Conhecimentos</h1>
            <div className={styles.skills}>
                <span onClick={() => handleSkills("html")}><AiFillHtml5/></span>
                <span onClick={() => handleSkills("css")}><DiCss3/></span>
                <span onClick={() => handleSkills("js")}><IoLogoJavascript/></span>
                <span onClick={() => handleSkills("bootstrap")}><DiBootstrap/></span>
                <span onClick={() => handleSkills("reactjs")}><DiReact/></span>
                <span onClick={() => handleSkills("reactnative")}><DiReact/></span>
                <span onClick={() => handleSkills("ts")}><SiTypescript/></span>
                <span onClick={() => handleSkills("node")}><DiNodejsSmall/></span>
                <span onClick={() => handleSkills("mongo")}><SiMongodb/></span>
                <span onClick={() => handleSkills("mysql")}><SiMysql/></span>
                <span onClick={() => handleSkills("firebase")}><SiFirebase/></span>
                <span onClick={() => handleSkills("jasmine")}><SiJasmine/></span>
                <img onClick={() => handleSkills("go")} src="../../../src/assets/golang.svg" alt="go" />
            </div>
            <div className={styles.info}>
                <h3 className={styles.skillsTitle}>{skillName}</h3>
                <p>{textSkill}</p>
                <p className={styles.expirenceSkills}>{expirence}</p>
                {!clicked ? <span>*Clique em uma das tecnologias para ver mais sobre.</span> : ""}
            </div>
        </section>

        <div className={styles.line}></div>

        <section className={styles.section4}>
            <a>
                <AiOutlineMail/>
                <span>miqueiasbelfort8323@gmail.com</span>
            </a>
            <a href='https://github.com/miqueiasbelfort'>
                <AiFillGithub/>
                <span>miqueiasbelfort</span>
            </a>
            <a href='https://api.whatsapp.com/send?phone=5561992254791&text=Hello%20Miqueias%2C%20how%20are%20you%20today%3F'>
                <AiOutlineWhatsApp/>
                <span>(61) 9 9225-4791</span>
            </a>
            <a href='https://www.instagram.com/miqueiasbelfort/'>
                <AiFillInstagram/>
                <span>@miqueiasbelfort</span>
            </a>
            <a href='https://www.youtube.com/channel/UCN2fInEXoFrvJ_yrhqq9Maw'>
                <AiFillYoutube/>
                <span>Mik Belfort</span>
            </a>
        </section>
    </div>
  )
}
