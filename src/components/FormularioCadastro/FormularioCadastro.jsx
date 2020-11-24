import React, { useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";


function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      <DadosUsuarios />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
