interface IUsuario {
  id: string;
  email: string;
  cargo: 'funcionario' | 'gerência' | 'coordenação' | 'supervisão';
}

function redirection(usuario: IUsuario) {
  if(usuario.cargo) {
    // redireciona(usuario.cargo)
  }
  // redireciona para Admin Area Usuario
}