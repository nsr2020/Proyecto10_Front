

import { printMusicas } from "../../utils/printMusicas/printMusicas"
import { headerUser } from "../header/header"
import "./main.css"

export const sectionGeneral = document.createElement("section")

export const createMain = async () =>{
    const estoyenFav = false; 
    sectionGeneral.innerHTML=""
    sectionGeneral.classList.add("sectionGeneral")
   
    try {
      const res = await fetch("https://proyecto10-back.vercel.app/api/v1/musicas")
      const musicas = await res.json()
        printMusicas(musicas, sectionGeneral,estoyenFav)
        headerUser()
    } catch (error) {
        console.log(error);
    }
}





