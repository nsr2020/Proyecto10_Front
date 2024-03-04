
import { createMain,  } from "../../../components/main/main"
import { encenderSectionFiltros, limpiarFiltros } from "../../../components/sectionFiltros/sectionFiltros"
import "./update.css"



export const createUpdateMusica = (idMusica, musica) =>{
   
        const sectionGeneral = document.querySelector(".sectionGeneral")
        sectionGeneral.innerHTML = ""
        sectionGeneral.classList.add("sectionPut")
        
        sectionGeneral.innerHTML = `
        <form class="formPut">
            <input type="text" placeholder="url imagen" id="urlPost" />
            <input type="text" id="singerPost" placeholder=" Nombre Cantante" />
            <input type="text" id="albumPost" placeholder="Nombre Album" />
            <input type="number" id="pricePost" placeholder="Precio > 0€" />
            <select id="selectPost" name="opciones" >
            <option value="" disabled selected hidden>Selecciona una opción</option>
            <option value="Pop">Pop</option>
            <option value="Metal">Metal</option>
            <option value="HipHop">HipHop</option>
            <option value="Dance">Dance</option>
            <option value="Bandas Sonoras">Bandas Sonoras</option>
            </select>
             <button id="btnPost">Modificar</button>
        </form>
        `
        document.body.append(sectionGeneral)
        
        const formPut = document.querySelector(".formPut")
        formPut.addEventListener("submit", (event) =>{
            event.preventDefault();
                registerSubmit(idMusica, musica)
        } )
        
 } 

 const registerSubmit = async (idMusica,musica) =>{
    let image = document.querySelector("#urlPost").value || musica.image;
    let singer = document.querySelector("#singerPost").value || musica.singer;
    let album = document.querySelector("#albumPost").value || musica.album;
    let price = document.querySelector("#pricePost").value || musica.price;
    let kind = document.querySelector("#selectPost").value || musica.kind;
  

   if(price<=0){
    alert("Por favor introduce un valor mayor a 0")
    return
   }

    const res = await fetch(`https://proyecto10-back.vercel.app/api/v1/musicas/${idMusica}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PUT",
      body: JSON.stringify({
          image: image,
          singer: singer,
          album: album,
          price: price,
          kind: kind
      }),
    });
    if (res.status === 400) {
        const pError = document.createElement("p");
        pError.classList.add("error")
        pError.textContent = "Error en la solicitud";
        pError.style = "color: red";
  
        const form = document.querySelector(".formPost")
        form.append(pError);
        setTimeout(function(){
          pError.remove()
        },1000)
        return;
    }
    const pError = document.querySelector(".error");
    if (pError) {
        pError.remove();
    }
  
  
  if  (res.status === 200){
    alert(`Se ha modificado correctamente la canción!!!`);
  }
   
    encenderSectionFiltros()  
    limpiarFiltros()
    createMain()
  
  }
