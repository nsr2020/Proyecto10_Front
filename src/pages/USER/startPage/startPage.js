import { apagarImgMusica, apagarLogin, apagarRegister, createHeader } from "../../../components/header/header"
import { createMain } from "../../../components/main/main"
import { createSectionFiltros, desconectarSectionFiltros } from "../../../components/sectionFiltros/sectionFiltros"
import "./startPage.css"

export const startPage = () =>{
    const divStartPage = document.getElementById("app")
    divStartPage.innerHTML = ""
    divStartPage.classList.add("startPage", "flex-container")
    divStartPage.innerHTML = `
    <p> Let's Dance... </p>
    <img src="https://res.cloudinary.com/dnju3aw4b/image/upload/v1708541667/Proyecto10Musica/logostartMusic_gnganr.png" 
    class="imgStart">
    `  
    const imgStart = document.querySelector(".imgStart")
    imgStart.addEventListener("click", () =>{
        divStartPage.style.display ="none"
      
            const vengoDeInicio = true;

            
            createHeader()
            createSectionFiltros()
            desconectarSectionFiltros()
            apagarImgMusica()
            apagarLogin()
            apagarRegister()
        

            createMain(vengoDeInicio)
            
        
        
    })
}