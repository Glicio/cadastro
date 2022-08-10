import Cliente from "../core/Cliente";
import { IconeEdit, IconeLixo } from "./Icons";

interface TabelaProps {
    clientes: Cliente[]
}


export default function Tabela(props: TabelaProps) {
    return(
        <table className="w-full bg-slate-500 text-white rounded-xl overflow-hidden">
            <thead className="bg-gray-900">
                <tr>
                    <th className="text-left px-4">
                        ID
                    </th>
                    <th className="text-left px-4">
                        NOME
                    </th>
                    <th className="text-left px-4">
                        IDADE
                    </th>
                    <th>
                        AÇÕES
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {props.clientes?.map((curr, index) => {
                    return(
                        <tr key={curr.id} className={`${index % 2 === 0 ? "bg-slate-600" : "bg-slate-500"}`}>
                            <td className="px-3">
                                {curr.id}
                            </td>
                            <td>
                                {curr.nome}
                            </td>
                            <td>
                                {curr.idade}
                            </td>
                            <td className="flex justify-center">
                                <button className="hover:bg-slate-50 rounded-full">{<IconeLixo color="#cc0000"/>}</button>
                                <button className="hover:bg-slate-50 rounded-full">{<IconeEdit color="green"/>}</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}