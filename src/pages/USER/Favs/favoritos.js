import { printMusicas } from "../../../pages/printMusicas/printMusicas";
import "./favoritos.css"



export const Favoritos = async () => {
  const estoyenFav = true; 
    const sectionFavs = document.querySelector(".sectionGeneral");
    sectionFavs.innerHTML = "";
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    const res = await fetch(`https://proyecto10-back.vercel.app/api/v1/users/${user._id}`);
  
    const usuario = await res.json();
  
    printMusicas(usuario.favoritos, sectionFavs,estoyenFav); 
    
    //estoyenFav siginica que va a estar en el listado de favoritos y podré añadir el borrado
  };