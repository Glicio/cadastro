import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes: Array<Cliente> = [
    new Cliente("1","João",50),
    new Cliente("2","Pedro",20),
    new Cliente("3","Ana",29),
    new Cliente("4","Fernanda",22),
  ]


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-800 to-cyan-600">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}/>
      </Layout>  
    </div>
  );
}
