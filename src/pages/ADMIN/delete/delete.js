import { createMain } from "../../../components/main/main";
import { encenderSectionFiltros, limpiarFiltros } from "../../../components/sectionFiltros/sectionFiltros";
import "./delete.css"

export const createDeleteMusica = async (idMusica) =>{
    const res = await fetch(`http://localhost:8000/api/v1/musicas/${idMusica}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    method: "DELETE",
  });
  if (res.status === 400) {
    alert("Error en la solicitud")
  }

if  (res.status === 200){
  alert(`Se ha borrado correctamente la canción seleccionada!!!`);
}
  encenderSectionFiltros()
  limpiarFiltros()
  createMain()
}