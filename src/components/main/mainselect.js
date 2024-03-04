
import { printMusicas } from "../../utils/printMusicas/printMusicas"
import { headerUser } from "../header/header"
import { createMain } from "./main"
import "./main.css"



export const createMainSelect = async (selectvalue) =>{
    const estoyenFav = false; 
    if(selectvalue === "Todas"){
        createMain()
        return;
    }

    const sectionGeneral = document.querySelector(".sectionGeneral")
    sectionGeneral.innerHTML =""
    try {
      const res = await fetch(`https://proyecto10-back.vercel.app/api/v1/musicas/kind/${selectvalue}`)
      const musicas = await res.json()
    
        printMusicas(musicas, sectionGeneral,estoyenFav)
        headerUser()
    } catch (error) {
        console.log(error);
    }
}