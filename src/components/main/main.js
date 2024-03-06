

import { printMusicas } from "../../utils/printMusicas/printMusicas"
import { encenderLogin, encenderRegister, headerUser } from "../header/header"
import { conectarSectionFiltros} from "../sectionFiltros/sectionFiltros"
import "./main.css"

export const sectionGeneral = document.createElement("section")

export const createMain = async (vengoDeInicio=false) =>{
    const estoyenFav = false; 
    sectionGeneral.innerHTML=""
    sectionGeneral.classList.add("sectionGeneral")

    if(vengoDeInicio){
    const loadingpic = document.createElement("img")
    loadingpic.src="../../../public/load1.gif"
    loadingpic.classList.add("cargando")
    sectionGeneral.append(loadingpic)
    document.body.append(sectionGeneral) 
    }
   
    try {
      const res = await fetch("https://proyecto10-back.vercel.app/api/v1/musicas")
      const musicas = await res.json()
      if(vengoDeInicio){
      setTimeout(function () {
        printMusicas(musicas, sectionGeneral,estoyenFav)
        headerUser()
        encenderLogin()
        encenderRegister()
        conectarSectionFiltros()
      },1000)
    } else {
        printMusicas(musicas, sectionGeneral,estoyenFav)
        headerUser()
        encenderLogin()
        encenderRegister()
        conectarSectionFiltros()
    }
        
    } catch (error) {
        console.log(error);
    }
}





