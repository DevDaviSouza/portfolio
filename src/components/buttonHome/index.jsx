
import React from "react";

export default function ButtonHome({desc, linkBt}) {
    return(
        <div className="bg-botoes text-3xl w-44 h-12 flex justify-center text-center items-center rounded-xl">
            <a className="scroll-smooth" href={linkBt}>{desc}</a>
        </div>
        
    )
}