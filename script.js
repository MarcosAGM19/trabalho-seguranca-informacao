// Usuário "falso" apenas para o protótipo
const VALID_USER = "aluno";
const VALID_PASS = "SenhaSegura123!";

// Função para sanitizar entrada (mitigar XSS básico)
function sanitize(input) {
  return input.replace(/[<>&"'`]/g, "");
}

// Login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let username = sanitize(document.getElementById("username").value);
      let password = sanitize(document.getElementById("password").value);

      if (username === VALID_USER && password === VALID_PASS) {
        // Cria "sessão" simples
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
      } else {
        alert("Credenciais inválidas.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    });

    // Protege página interna: só acessa se estiver logado
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
      window.location.href = "index.html";
    }
  }
});