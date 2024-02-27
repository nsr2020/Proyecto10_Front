import { createMain } from "../components/main/main";

export const addFavorito = async (idMusica) => {
    /* http://localhost:3000/api/v1/users/65797dc3338cc01512ae6e9b */
    /* PUT */
    /* authorization */
    /* id del usuario */
    /* añadir el libro a un array dentro de un objeto y pasarlo a JSON.stringify */
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    user.favoritos = [...user.favoritos, idMusica];
  
    const objetoFinal = JSON.stringify({
      favoritos: [idMusica],
    });
  
    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: objetoFinal
    };
  
    const res = await fetch(
      `http://localhost:8000/api/v1/users/${user._id}`,
      opciones
    );
  
    const respuesta = await res.json();
  
    localStorage.setItem("user", JSON.stringify(user));
    createMain()
  };