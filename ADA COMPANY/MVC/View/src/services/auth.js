// services/auth.js

const AuthService = {
    // Verifica se o usuário está logado com base no token salvo no localStorage
    isLoggedIn() {
      const token = localStorage.getItem('token');
      return !!token; // Retorna verdadeiro se houver um token
    },
  
    // Função para realizar login (simulação)
    login(token) {
      // Salva o token no localStorage
      localStorage.setItem('token', token);
    },
  
    // Função para realizar logout
    logout() {
      // Remove o token do localStorage
      localStorage.removeItem('token');
    }
  };
  
  export default AuthService;
  