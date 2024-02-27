
import { createMain} from "../../../components/main/main"
import { encenderSectionFiltros, limpiarFiltros } from "../../../components/sectionFiltros/sectionFiltros"

import "./getMusic.css"

export const getMusicPage = () =>{
    encenderSectionFiltros()
    limpiarFiltros()
    createMain()
}