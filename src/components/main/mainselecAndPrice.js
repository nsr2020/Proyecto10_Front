
import { printMusicas } from "../../utils/printMusicas/printMusicas"
import { headerUser } from "../header/header"
import { createMain } from "./main"
import "./main.css"



export const createMainSelectAndPrice = async (selectvalue, pricevalue) =>{
    const estoyenFav = false; 
    if(selectvalue === "Todas"){
        createMain()
        return;
    }

    const sectionGeneral = document.querySelector(".sectionGeneral")
    sectionGeneral.innerHTML =""
    try {
      const res = await fetch(`http://localhost:8000/api/v1/musicas/buscar/${selectvalue}/${pricevalue}`)
      const musicas = await res.json()
    
        printMusicas(musicas, sectionGeneral,estoyenFav)
        headerUser()
    } catch (error) {
        console.log(error);
    }
}