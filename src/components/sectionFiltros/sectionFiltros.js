import { createMain } from "../main/main";
import { createMainPrice } from "../main/mainprice";
import { createMainSelectAndPrice } from "../main/mainselecAndPrice";
import { createMainSelect } from "../main/mainselect";
import "./sectionFiltros.css"

export const createSectionFiltros =()=>{
    
const sectionFiltro = document.createElement("section");
sectionFiltro.classList.add("sectionFiltro")
const selectType = document.createElement("select")
selectType.classList.add("selecType")

const opcionesTipos = ["All", "Pop", "Metal", "HipHop", "Dance", "Bandas Sonoras"];

opcionesTipos.forEach((tipo) => {
    const opcion = document.createElement("option");
    opcion.text = tipo;
    opcion.value =tipo;
    selectType.appendChild(opcion);
});


const divPrice = document.createElement("div")
divPrice.classList.add("divPrice");
const inputPrice = document.createElement("input");
inputPrice.type = "number";
inputPrice.placeholder = "Precio Filtrar";
inputPrice.classList.add("inputPrice");

const btnPrice = document.createElement("button");
btnPrice.classList.add("btnPrice")
btnPrice.textContent = "Buscar";
btnPrice.disabled = true;
btnPrice.style.pointerEvents = "none"

const btnLimpiarFiltros = document.createElement("button")
btnLimpiarFiltros.classList.add("btnLimpiar")
btnLimpiarFiltros.textContent ="🆑"

divPrice.append(inputPrice, btnPrice);
sectionFiltro.append(selectType, divPrice,btnLimpiarFiltros);
document.body.append(sectionFiltro)

selectType.addEventListener("change",(e) =>{
    const optionvalue = e.target.value;
    const pricevalue = document.querySelector(".inputPrice").value

    if(optionvalue!="Todas" && pricevalue > 0){
        createMainSelectAndPrice(optionvalue,pricevalue)
    }else{
        createMainSelect(optionvalue)
    }
    
})
inputPrice.addEventListener("input", () =>{
    const inputvalue = document.querySelector(".inputPrice").value
    const btnPrice = document.querySelector(".btnPrice")
    if(inputvalue > 0){
        btnPrice.disabled = false;
        btnPrice.style.pointerEvents = "auto"
    }else if(inputvalue <=0 || inputvalue === ""){
        btnPrice.disabled =true;
        btnPrice.style.pointerEvents = "none"
    }
})
btnPrice.addEventListener("click", () =>{
    const optionvalue = document.querySelector(".selecType").value;
    const pricevalue = document.querySelector(".inputPrice").value;

    if(pricevalue <= 0 || pricevalue === ""){
        alert("Por favor introduce un numero mayor a 0!!")
        createMain()
        
    }

    if (optionvalue!="Todas" && pricevalue > 0) {
        createMainSelectAndPrice(optionvalue, pricevalue);
    } else {
            createMainPrice(pricevalue);  
    }
});

btnLimpiarFiltros.addEventListener("click", ()=>{
   limpiarFiltros()
    createMain()
})

}

export const limpiarFiltros = () =>{
    const inputPrice = document.querySelector(".inputPrice")
    const selectType = document.querySelector(".selecType")
    const btnPrice = document.querySelector(".btnPrice")

    inputPrice.value = ""
    selectType.value = "Todas"
    btnPrice.disabled = true;
    btnPrice.style.pointerEvents = "none"
}

export const apagarSectionFiltros = () =>{
    const sectionFiltro = document.querySelector(".sectionFiltro")
    sectionFiltro.style.display = "none"
}

export const encenderSectionFiltros = () =>{
    const sectionFiltro = document.querySelector(".sectionFiltro")
    sectionFiltro.style.display = "flex"
    limpiarFiltros()
}