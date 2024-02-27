import { Favoritos } from "../pages/USER/Favs/favoritos";


export const removeFavorito = async (idMusica)=>{
    const user = JSON.parse(localStorage.getItem("user"));
    user.favoritos = user.favoritos.filter((favId) => favId !== idMusica);
    localStorage.setItem("user", JSON.stringify(user));

    const objetoFinal = JSON.stringify({
        favoritos: [idMusica],
      });

      const opciones = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: objetoFinal
      };
      const res = await fetch(
        `http://localhost:8000/api/v1/users/remove-favs/${user._id}`,
        opciones
      );
      const respuesta = await res.json();
      
      Favoritos()

}