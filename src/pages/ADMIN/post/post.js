
import { createMain } from "../../../components/main/main"
import { encenderSectionFiltros, limpiarFiltros } from "../../../components/sectionFiltros/sectionFiltros"
import "./post.css"

export const createPostRegister =  () => {
const sectionGeneral = document.querySelector(".sectionGeneral")
sectionGeneral.innerHTML = ""
sectionGeneral.classList.add("sectionPost")

sectionGeneral.innerHTML = `
<form class="formPost">
    <input type="text" placeholder="url imagen" id="urlPost" required/>
    <input type="text" id="singerPost" placeholder=" Nombre Cantante" required/>
    <input type="text" id="albumPost" placeholder="Nombre Album" required/>
    <input type="number" id="pricePost" placeholder="Precio > 0€" required/>
    <select id="selectPost" name="opciones" required>
    <option value="" disabled selected hidden>Selecciona una opción</option>
    <option value="Pop">Pop</option>
    <option value="Metal">Metal</option>
    <option value="HipHop">HipHop</option>
    <option value="Dance">Dance</option>
    <option value="Bandas Sonoras">Bandas Sonoras</option>
    </select>
     <button id="btnPost">Enviar</button>
</form>
`
document.body.append(sectionGeneral)

const formPost = document.querySelector(".formPost")
formPost.addEventListener("submit", (event) =>{
    event.preventDefault();
        registerSubmit()
} )

}

const registerSubmit = async () =>{
  const image = document.querySelector("#urlPost").value 
  const singer = document.querySelector("#singerPost").value 
  const album = document.querySelector("#albumPost").value
  const price = document.querySelector("#pricePost").value
  const kind = document.querySelector("#selectPost").value

  console.log(image);
  console.log(singer);
  console.log(album);
  console.log(price);
  console.log(kind);

  if (price<=0){
    alert("Debes introducir un valor superior a 0€")
    return;
  }

  const res = await fetch("http://localhost:8000/api/v1/musicas/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "POST",
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


if  (res.status === 201){
  alert(`Se ha creado correctamente tu nueva canción!!!`);
}
  
  encenderSectionFiltros()  
  limpiarFiltros()
  createMain()
  
}