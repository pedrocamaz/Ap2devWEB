document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio do formulário

      const passwordInput = document.getElementById("password");
      const password = passwordInput.value;

      // Valida a senha
      if (password === "LIBERTADORES") {
          // Redireciona para a página de elencos (main.html)
          window.location.href = "main.html";
      } else {
          alert("Senha incorreta! Tente novamente.");
      }
  });
});


