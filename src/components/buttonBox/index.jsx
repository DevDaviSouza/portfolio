export default function ButtonBox({LinkButton, DescButton}) {
    return(
        <div>
            <a className="bg-botoes text-3xl w-44 h-12 flex justify-center text-center items-center rounded-xl" href={LinkButton}>{DescButton}</a>
        </div>
    )
}