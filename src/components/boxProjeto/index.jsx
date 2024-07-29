import ButtonBox from "../buttonBox"
import './index.css'
import BgBox from '../../images/bgbox.jpeg'
import { useState } from "react"

export default function BoxProjeto({Titulo, Desc, DescButton, LinkButton}) {
    const [bg, setBg] = useState(false)

    function mostrarItens(){
        setBg(true)
    }

    const ocultarItens = () => {
        setBg(false)
    }

    return(
        <div id="box" className="w-80 h-102 border items-center text-center justify-between flex flex-col rounded-3xl px-11 z-1" onMouseOver={mostrarItens} onMouseOut={ocultarItens}>
            <h3 className={bg ? "mt-9 z-10 text-5xl" : "hidden"}> {Titulo}</h3>
            <p className={bg ? "text-xl z-10" : "hidden"}>{Desc}</p>

            <img className="absolute flex z-0 "  src={BgBox} alt="" />

            <div className={bg ? "z-10 mb-9" : "hidden"}>
                <ButtonBox 
                    LinkButton={LinkButton}
                    DescButton={DescButton}
                />
            </div>
        </div>
    )
}
