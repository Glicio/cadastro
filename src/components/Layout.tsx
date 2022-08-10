import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string,
    children?: any,
}


export default function Layout(props: LayoutProps) {
    return <div className="flex flex-col w-2/3 bg-white text-black p-3 rounded-md">
        <Titulo titulo={props.titulo}/>
        <div className="p-6">
            {props.children}
        </div>
    </div>
}