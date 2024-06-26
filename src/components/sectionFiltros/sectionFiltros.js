import { createMain } from "../main/main";
import { createMainPrice } from "../main/mainprice";
import { createMainSelectAndPrice } from "../main/mainselecAndPrice";
import { createMainSelect } from "../main/mainselect";
import "./sectionFiltros.css";

export const createSectionFiltros = () => {
    const sectionFiltro = document.createElement("section");
    sectionFiltro.classList.add("sectionFiltro");
    const selectType = document.createElement("select");
    selectType.classList.add("selecType");

    const opcionesTipos = ["Todas", "Pop", "Metal", "HipHop", "Dance", "Bandas Sonoras"];

    opcionesTipos.forEach((tipo) => {
        const opcion = document.createElement("option");
        opcion.textContent = tipo;
        selectType.append(opcion);
    });

    const divPrice = document.createElement("div");
    divPrice.classList.add("divPrice");
    const inputPrice = document.createElement("input");
    inputPrice.type = "number";
    inputPrice.placeholder = "Precio Filtrar";
    inputPrice.classList.add("inputPrice");

    const btnPrice = document.createElement("button");
    btnPrice.classList.add("btnPrice");
    btnPrice.textContent = "Buscar";
    btnPrice.disabled = true;
    btnPrice.style.pointerEvents = "none";

    const btnLimpiarFiltros = document.createElement("button");
    btnLimpiarFiltros.classList.add("btnLimpiar");
    btnLimpiarFiltros.textContent = "Limpiar";
    btnLimpiarFiltros.style.pointerEvents = "none";
    btnLimpiarFiltros.style.userSelect = "none";

    divPrice.append(inputPrice, btnPrice);
    sectionFiltro.append(selectType, divPrice, btnLimpiarFiltros);
    document.body.append(sectionFiltro);

    selectType.addEventListener("change", (e) => {
        const optionvalue = e.target.value;
        const pricevalue = document.querySelector(".inputPrice").value;
        const btnLimpiarFiltros = document.querySelector(".btnLimpiar");

        if (optionvalue === "Todas" && (pricevalue <= 0 || pricevalue === "")) {
            btnLimpiarFiltros.style.pointerEvents = "none";
            return;
        }

        if (optionvalue != "Todas" && pricevalue > 0) {
            createMainSelectAndPrice(optionvalue, pricevalue);
            btnLimpiarFiltros.style.pointerEvents = "auto";
        } else {
            createMainSelect(optionvalue);
        }
    });

    inputPrice.addEventListener("input", () => {
        const inputvalue = document.querySelector(".inputPrice").value;
        const btnPrice = document.querySelector(".btnPrice");
        const btnLimpiarFiltros = document.querySelector(".btnLimpiar");
        if (inputvalue > 0) {
            btnPrice.disabled = false;
            btnPrice.style.pointerEvents = "auto";
            btnLimpiarFiltros.style.pointerEvents = "auto";
        } else if (inputvalue <= 0 || inputvalue === "") {
            btnPrice.disabled = true;
            btnPrice.style.pointerEvents = "none";
            btnLimpiarFiltros.style.pointerEvents = "none";
        }
    });

    btnPrice.addEventListener("click", () => {
        const optionvalue = document.querySelector(".selecType").value;
        const pricevalue = document.querySelector(".inputPrice").value;

        if (pricevalue <= 0 || pricevalue === "") {
            alert("Por favor introduce un numero mayor a 0!!");
            createMain();
            return;
        }

        if (optionvalue != "Todas" && pricevalue > 0) {
            createMainSelectAndPrice(optionvalue, pricevalue);
        } else if (optionvalue === "Todas" && pricevalue > 0) {
            createMainPrice(pricevalue);
        } else {
            createMainPrice(pricevalue);
        }
    });

    btnLimpiarFiltros.addEventListener("click", () => {
        const inputvalue = document.querySelector(".inputPrice").value;
        const selectType = document.querySelector(".selecType").value;

        if (inputvalue === "" && selectType === "Todas") {
            return;
        } else {
            limpiarFiltros();
            createMain();
        }
    });
};

export const limpiarFiltros = () => {
    const inputPrice = document.querySelector(".inputPrice");
    const selectType = document.querySelector(".selecType");
    const btnPrice = document.querySelector(".btnPrice");
    const btnLimpiarFiltros = document.querySelector(".btnLimpiar");

    inputPrice.value = "";
    selectType.value = "Todas";
    btnPrice.disabled = true;
    btnPrice.style.pointerEvents = "none";
    btnLimpiarFiltros.style.pointerEvents = "none";
};

export const apagarSectionFiltros = () => {
    const sectionFiltro = document.querySelector(".sectionFiltro");
    sectionFiltro.style.display = "none";
};

export const encenderSectionFiltros = () => {
    const sectionFiltro = document.querySelector(".sectionFiltro");
    sectionFiltro.style.display = "flex";
    limpiarFiltros();
};

export const desconectarSectionFiltros = () => {
    const inputPrice = document.querySelector(".inputPrice");
    inputPrice.disabled = true;
    const selectType = document.querySelector(".selecType");
    selectType.disabled = true;
    const btnLimpiar = document.querySelector(".btnLimpiar");
    btnLimpiar.disabled = true;
    btnLimpiar.style.pointerEvents = "none";
};

export const conectarSectionFiltros = () => {
    const inputPrice = document.querySelector(".inputPrice");
    inputPrice.disabled = false;
    const selectType = document.querySelector(".selecType");
    selectType.disabled = false;
    const btnLimpiar = document.querySelector(".btnLimpiar");
    btnLimpiar.disabled = false;
    btnLimpiar.style.pointerEvents = "auto";
};
