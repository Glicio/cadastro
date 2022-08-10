

export default function Titulo(props: {titulo: string}) {
    return(
        <div>
            <h1 className="border-spacing-1">{props.titulo}</h1>
            <hr className="border-emerald-500"/>
        </div>
    )
}