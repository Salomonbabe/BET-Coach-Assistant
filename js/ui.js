function renderLogin() {
  document.getElementById("app").innerHTML = `
    <h2>Connexion</h2>
    
    <input id="email" placeholder="Email" /><br/><br/>
    <input id="password" type="password" placeholder="Mot de passe" /><br/><br/>
    
    <button onclick="login()">Se connecter</button>
    <button onclick="signup()">Créer un compte</button>
  `;
}