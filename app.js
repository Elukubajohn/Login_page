const usersData = [
  { email: "john@yahoo.com", password: "presley" },

  { email: "paul@yahoo.com", password: "computer" },
  { email: "emma@yahoo.com", password: "monday" },
  { email: "uche@yahoo.com", password: "tuesday" },
];

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", function validate() {
  const anyEmail = usersData.some(
    (usersData) => usersData.email == emailInput.value
  );
  const anyPassword = usersData.some(
    (usersData) => usersData.password == passwordInput.value
  );
  if (anyEmail === true && anyPassword === true) {
    alert("Login successful");
  } else {
    alert("Login failed, wrong email or password");
  }
});
