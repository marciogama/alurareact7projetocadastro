function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos !" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos !" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarNome(nome) {
  if (nome.length < 4 || nome.length > 120) {
    return { valido: false, texto: "Nome deve ter entre 4 e 120 dígitos !" };
  } else {
    return { valido: true, texto: "" };
  }
}
export { validarCPF, validarSenha, validarNome };
