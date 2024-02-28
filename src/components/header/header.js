import { createPostRegister } from "../../pages/ADMIN/post/post"
import { Favoritos } from "../../pages/USER/Favs/favoritos"
import { getMusicPage } from "../../pages/USER/getMusicPage/getMusic"
import {  createLogin } from "../../pages/USER/login/login"
import { createRegister } from "../../pages/USER/register/register"
import { createMain } from "../main/main"
import { apagarSectionFiltros, encenderSectionFiltros } from "../sectionFiltros/sectionFiltros"

import "./header.css"

export const createHeader = () =>{
    const header = document.createElement("header")
    header.innerHTML =""
    header.classList.add("header")

    header.innerHTML = `
    <nav class="navHeader">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1708705843/Proyecto10Musica/MusicHeader_abp3ma.png"
    class="imgMusic">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080032/Proyecto10Musica/contrasena_rqjjer.png"
    class="imgLogin">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080032/Proyecto10Musica/register_nefkco.png"
    class="imgRegister">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1708803826/Proyecto10Musica/favs_dkvjfh.png"
    class="imgFavoritos">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080090/Proyecto10Musica/nuevo_fchres.png"
    class="imgPost">
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1708803320/Proyecto10Musica/585e481dcb11b227491c338c_tboead.png"
    class="imgLogOut">
    </nav>
    `
    document.body.append(header)

    //desactivo las imagenes de logout y favs
    const imgFavoritos = document.querySelector(".imgFavoritos")
    imgFavoritos.style.display="none"
    const imgLogOut = document.querySelector(".imgLogOut")
    imgLogOut.style.display="none"
    const imgPost = document.querySelector(".imgPost")
    imgPost.style.display ="none"

    const imgMusic = document.querySelector(".imgMusic")
    imgMusic.addEventListener("click", () =>{
        encenderSectionFiltros()
        getMusicPage() 
    })

    const imgLogin = document.querySelector(".imgLogin")
    imgLogin.addEventListener("click", () =>{
        apagarSectionFiltros()
        createLogin() 

    })
   
    const imgRegister = document.querySelector(".imgRegister")
    imgRegister.addEventListener("click", () =>{
        apagarSectionFiltros()
        createRegister()
        headerUser()

    })
   const imgLogOut2 = document.querySelector(".imgLogOut")
    imgLogOut2.addEventListener("click", () =>{
        localStorage.clear()
        encenderSectionFiltros()
        headerUser()
        createMain()
        
    })
    const imgFavoritos2 = document.querySelector(".imgFavoritos")
    imgFavoritos2.addEventListener("click", () =>{
        apagarSectionFiltros()
        Favoritos()
        headerUser()
    })

    const imgPost2 = document.querySelector(".imgPost")
    imgPost2.addEventListener("click", () =>{
        apagarSectionFiltros()
        createPostRegister()
        headerUser()
    })
 
}

export const headerUser = () =>{

    const user = JSON.parse(localStorage.getItem("user"));

    if(localStorage.getItem("token") && user.rol ==="user"){
        const imgLogin = document.querySelector(".imgLogin")
        imgLogin.style.display="none"
        const imgRegister = document.querySelector(".imgRegister")
        imgRegister.style.display ="none"  
        const imgPost = document.querySelector(".imgPost")
        imgPost.style.display ="none"
        const imgFavoritos = document.querySelector(".imgFavoritos")
        imgFavoritos.style.display = "flex"
        const imgLogOut = document.querySelector(".imgLogOut")
        imgLogOut.style.display ="flex"

    }else if(localStorage.getItem("token") && user.rol === "admin"){
        const imgLogin = document.querySelector(".imgLogin")
        imgLogin.style.display="none"
        const imgRegister = document.querySelector(".imgRegister")
        imgRegister.style.display ="none"  
        const imgPost = document.querySelector(".imgPost")
        imgPost.style.display ="flex"
        const imgLogOut = document.querySelector(".imgLogOut")
        imgLogOut.style.display ="flex" 
       
    }else{

        const imgLogin = document.querySelector(".imgLogin")
        imgLogin.style.display="flex"
        const imgRegister = document.querySelector(".imgRegister")
        imgRegister.style.display ="flex"  
        const imgPost = document.querySelector(".imgPost")
        imgPost.style.display ="none"
        const imgFavoritos = document.querySelector(".imgFavoritos")
        imgFavoritos.style.display = "none"
        const imgLogOut = document.querySelector(".imgLogOut")
        imgLogOut.style.display ="none"
    }
}