async function checkUser() {
  const { data } = await SUPA.auth.getUser();
  
  if (data.user) {
    APP_STATE.user = data.user;
    renderDashboard();
  } else {
    renderLogin();
  }
}
checkUser()
async function login() {
  alert("Login à implémenter");
}
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await SUPA.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    APP_STATE.user = data.user;
    renderDashboard();
  }
}
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await SUPA.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Compte créé !");
  }
}