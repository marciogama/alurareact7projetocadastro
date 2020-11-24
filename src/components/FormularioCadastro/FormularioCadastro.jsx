import React, { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual,setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuarios aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>,
    <DadosEntrega aoEnviar={aoEnviar}/>
  ];

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }
 
  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
