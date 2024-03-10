
import { apagarImgMusica, headerUser } from "../../../components/header/header"
import { createMain } from "../../../components/main/main"
import { encenderSectionFiltros } from "../../../components/sectionFiltros/sectionFiltros"
import "./login.css"



export const createLogin = () => {
    const sectionLogin = document.querySelector(".sectionGeneral")
    
    sectionLogin.classList.add("sectionLogin", "flex-container")

    sectionLogin.innerHTML =""

    const loginDiv = document.createElement("div")
    login(loginDiv)
    loginDiv.classList.add("login", "flex-container")

    sectionLogin.append(loginDiv)
    document.body.append(sectionLogin)
}

const login = (nodoPadre) =>{
    const form =document.createElement("form")
    const h1Login = document.createElement("h1")
    const inputUN = document.createElement("input")
    const inputPass = document.createElement("input")
    const btn = document.createElement("button")

    form.classList.add("formLogin", "flex-container")
    h1Login.classList.add("h1Login")
    inputUN.classList.add("inputUN")
    inputPass.classList.add("inputPass")
    btn.classList.add("btnLogin")

    inputUN.required =true;
    inputPass.required = true;
    inputPass.type ="password"
    inputUN.placeholder = "Username";
    inputPass.placeholder = "Password";
    btn.textContent = "Login";
    h1Login.textContent = "Iniciar Sesión"

    form.append(h1Login)
    form.append(inputUN)
    form.append(inputPass)
    form.append(btn)
    nodoPadre.append(form)
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar la recarga de la página por defecto del formulario
        submit(inputUN.value, inputPass.value, form);
    });
}

export const submit = async (userName, password, form) =>{
    
try {
    const objetoFinal = JSON.stringify({
        userName,
        password
    });

    const opciones = {
        method: "POST",
        body: objetoFinal,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch("https://proyecto10-back.vercel.app/api/v1/users/login", opciones)

    if (res.status === 400) {
        const pError = document.createElement("p");
        pError.classList.add("error")
        pError.textContent = "Usuario o contraseña incorrectos";
        pError.style = "color: red";

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

    const respuestaFinal = await res.json();
  
    localStorage.setItem("token", respuestaFinal.token);
    localStorage.setItem("user", JSON.stringify(respuestaFinal.user));
   encenderSectionFiltros()
   createMain()  
   headerUser()
   apagarImgMusica()
} catch (error) {
    console.log(error);
}
    
}


