import { createMain } from "../../components/main/main";
import { apagarSectionFiltros, encenderSectionFiltros, limpiarFiltros } from "../../components/sectionFiltros/sectionFiltros";
import { createDeleteMusica } from "../../pages/ADMIN/delete/delete";
import { createUpdateMusica } from "../../pages/ADMIN/update/update";
import { addFavorito } from "../addFavorito";
import { removeFavorito } from "../removeFavorito";


export const printMusicas = async (musicas, nodoPadre,estoyenFav) => {

  /*   if(!musicas.length){
        alert("No hay canciones bajo los criterios buscados")
        encenderSectionFiltros()
        limpiarFiltros()
        createMain()
    }
    */
    const divArticlesMusica = document.createElement("div")
    divArticlesMusica.classList.add("divArticlesMusica")

    for (const musica of musicas) {
        const article = document.createElement("article");
        article.classList.add("article");

        const divImg = document.createElement("div");
        divImg.classList.add("divImg");
        const img = document.createElement("img");
        img.src = musica.image;
        divImg.appendChild(img);

        const divInfo = document.createElement("div");
        divInfo.classList.add("divInfo");
        const h3 = document.createElement("h3");
        h3.textContent = musica.singer;
        const h4 = document.createElement("h4");
        h4.textContent = musica.album;
        const p1 = document.createElement("p");
        p1.textContent = `${musica.price}€`;
        const p2 = document.createElement("p");
        p2.textContent = musica.kind;
        divInfo.append(h3,h4,p1,p2);
      

        const like = document.createElement("img");
        like.classList.add("like")

        const deleteMusicFav = document.createElement("img")
        deleteMusicFav.classList.add("deleteMusicFav")
        deleteMusicFav.src ="https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080172/Proyecto10Musica/borrar_qyeohj.png"

        const deleteMusic = document.createElement("img")
        deleteMusic.classList.add("deleteMusic")
        deleteMusic.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080033/Proyecto10Musica/papelera-de-reciclaje_mqckz7.png"
        deleteMusic.style.display = "none"


        const updateMusic = document.createElement("img")
        updateMusic.classList.add("updateMusic")
        updateMusic.src ="https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080032/Proyecto10Musica/actualizar_c93esh.png"
        updateMusic.style.display ="none"
        
        like.addEventListener("click", () => {
            like.style.pointerEvents = "none"
            addFavorito(musica._id)
        });

        deleteMusicFav.addEventListener("click", () =>{
            deleteMusicFav.style.pointerEvents = "none"
            removeFavorito(musica._id)
        })
        updateMusic.addEventListener("click",() =>{
            apagarSectionFiltros()
            createUpdateMusica(musica._id,musica)  
        })
        deleteMusic.addEventListener("click", () =>{
            apagarSectionFiltros()
            createDeleteMusica(musica._id)
        })

        const user = JSON.parse(localStorage.getItem("user"));

        if(!user || user.rol === "admin"){
            like.style.display ="none"
            deleteMusicFav.style.display ="none"
           
        }
        if(user){
            if(user.rol === "admin"){
                deleteMusic.style.display ="flex"
                updateMusic.style.display ="flex"
            }
        }
        
        if (user?.favoritos?.includes(musica._id)) {
            like.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080281/Proyecto10Musica/estrella_ug0psv.png";
            like.style.pointerEvents ="none"
            deleteMusicFav.style.display ="none"
        } else {
            like.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1709080282/Proyecto10Musica/estrellavacia_orqdj7.png";
            deleteMusicFav.style.display ="none"
        }

        if(estoyenFav){
            deleteMusicFav.style.display ="flex" 
        }

        article.appendChild(divImg);
        article.appendChild(divInfo);
        article.append(like, deleteMusicFav, deleteMusic, updateMusic);

        divArticlesMusica.append(article)
        nodoPadre.appendChild(divArticlesMusica);

      document.body.append(nodoPadre) 
    
}
}





