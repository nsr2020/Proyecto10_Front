import { headerUser } from "../../../components/header/header"
import { createMain } from "../../../components/main/main"
import { encenderSectionFiltros, limpiarFiltros } from "../../../components/sectionFiltros/sectionFiltros"
import "./register.css"

export const createRegister = () =>{
    const sectionGeneral = document.querySelector(".sectionGeneral")
    sectionGeneral.innerHTML = ""
    sectionGeneral.classList.add("sectionRegister")

    sectionGeneral.innerHTML =`
    <form class="formRegister">
    <input type="text" placeholder="Username" id="username" required/>
    <input type="password" id="password" placeholder="Password"  required/>
    <button id="registerbtn">Register</button>
    </form>
    `
    document.body.append(sectionGeneral)

    const formRegister = document.querySelector(".formRegister")
    formRegister.addEventListener("submit", (event) =>{
        event.preventDefault();
        registerSubmit()
    })
}

const registerSubmit = async () => {
    
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
  
  
    const res = await fetch("http://localhost:8000/api/v1/users/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });
    if (res.status === 400) {
        const pError = document.createElement("p");
        pError.classList.add("error")
        pError.textContent = "El usuario ya existe!!!";
        pError.style = "color: red";

        const form = document.querySelector(".formRegister")
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
    alert(`Ya puedes hacer login con tus nuevas credenciales!!!`);
  }
    
    encenderSectionFiltros()
    limpiarFiltros()
    createMain()
    headerUser()
  };