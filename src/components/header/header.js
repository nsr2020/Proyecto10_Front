
import { createPostRegister } from "../../pages/ADMIN/post/post"
import { Favoritos } from "../../pages/USER/Favs/favoritos"
import { getMusicPage } from "../../pages/USER/getMusicPage/getMusic"
import {  createLogin } from "../../pages/USER/login/login"
import { createRegister } from "../../pages/USER/register/register"
import { createMain } from "../main/main"
import { apagarSectionFiltros, conectarSectionFiltros, desconectarSectionFiltros, encenderSectionFiltros } from "../sectionFiltros/sectionFiltros"

import "./header.css"

export const createHeader = () =>{
    const header = document.createElement("header")
    header.innerHTML =""
    header.classList.add("header")

    header.innerHTML = `
    <nav class="navHeader">
    <h1 class="imgMusic">Home</h1>
    <h1 class="imgLogin">Login</h1>
    <h1 class="imgRegister">Register</h1>
    <h1 class="imgFavoritos">Favoritos</h1>
    <h1 class="imgPost">Post</h1>
    <h1 class="imgLogOut">Log-Out</h1>
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
        conectarSectionFiltros()
        getMusicPage()
        apagarImgMusica()
        encenderImgFavs()
        encenderPost()
    })

    const imgLogin = document.querySelector(".imgLogin")
    imgLogin.addEventListener("click", () =>{
        apagarSectionFiltros()
        createLogin() 
        encenderImgMusica()
        encenderRegister()
        apagarLogin()

    })
   
    const imgRegister = document.querySelector(".imgRegister")
    imgRegister.addEventListener("click", () =>{
        apagarSectionFiltros()
        createRegister()
        headerUser()
        encenderImgMusica()
        apagarRegister()
        encenderLogin()

    })
   const imgLogOut2 = document.querySelector(".imgLogOut")
    imgLogOut2.addEventListener("click", () =>{
        localStorage.clear()
        encenderSectionFiltros()
        conectarSectionFiltros()
        headerUser()
        createMain()
        apagarImgMusica()
       
        
    })
    const imgFavoritos2 = document.querySelector(".imgFavoritos")
    imgFavoritos2.addEventListener("click", () =>{
        desconectarSectionFiltros()
        apagarSectionFiltros()
        Favoritos()
        headerUser()
        encenderImgMusica()
        apagarImgFavs()
    })

    const imgPost2 = document.querySelector(".imgPost")
    imgPost2.addEventListener("click", () =>{
        apagarSectionFiltros()
        createPostRegister()
        headerUser()
        encenderImgMusica()
        apagarPost()
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

//Estos interruptores los he realizado para controlar click no deseados y que si ya estás dentro de un apartado no puedas hacer click otra vez


 export const apagarImgMusica = () =>{
    const imgMusic = document.querySelector(".imgMusic")
    imgMusic.style.pointerEvents = "none";
}

export const encenderImgMusica = () =>{
    const imgMusic = document.querySelector(".imgMusic")
    imgMusic.style.pointerEvents = "auto";
}

export const apagarImgFavs = () =>{
    const imgFav = document.querySelector(".imgFavoritos")
    imgFav.style.pointerEvents = "none";
}

export const encenderImgFavs = () =>{
    const imgFav = document.querySelector(".imgFavoritos")
    imgFav.style.pointerEvents = "auto";
}
export const encenderLogin = () =>{
    const imgLogin = document.querySelector(".imgLogin")
    imgLogin.style.pointerEvents = "auto";
}

export const apagarLogin = () =>{
    const imgLogin = document.querySelector(".imgLogin")
    imgLogin.style.pointerEvents = "none";
}
export const encenderRegister =() =>{
    const imgRegister = document.querySelector(".imgRegister")
    imgRegister.style.pointerEvents = "auto";
}

export const apagarRegister = () =>{
    const imgRegister = document.querySelector(".imgRegister")
    imgRegister.style.pointerEvents = "none";
}

export const encenderPost = () =>{
    const imgPost = document.querySelector(".imgPost")
    imgPost.style.pointerEvents = "auto";
}
export const apagarPost = () =>{
    const imgPost = document.querySelector(".imgPost")
    imgPost.style.pointerEvents = "none";
}
