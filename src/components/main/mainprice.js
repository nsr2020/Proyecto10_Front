
import { printMusicas } from "../../pages/printMusicas/printMusicas"
import { headerUser } from "../header/header"
import "./main.css"



export const createMainPrice = async (value) =>{
    const estoyenFav = false; 
    const sectionGeneral = document.querySelector(".sectionGeneral")
    sectionGeneral.innerHTML=""
    try {
      const res = await fetch(`https://proyecto10-back.vercel.app/api/v1/musicas/buscar/${value}/`)
      const musicas = await res.json()
     
        printMusicas(musicas, sectionGeneral, estoyenFav)
        headerUser()
    } catch (error) {
        console.log(error);
    }
}