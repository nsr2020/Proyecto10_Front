
import { printMusicas } from "../../utils/printMusicas/printMusicas"
import { headerUser } from "../header/header"
import "./main.css"



export const createMainPrice = async (value) =>{
    const estoyenFav = false; 
    const sectionGeneral = document.querySelector(".sectionGeneral")
    sectionGeneral.innerHTML=""
    try {
      const res = await fetch(`http://localhost:8000/api/v1/musicas/price/${value}/`)
      const musicas = await res.json()
     
        printMusicas(musicas, sectionGeneral, estoyenFav)
        headerUser()
    } catch (error) {
        console.log(error);
    }
}