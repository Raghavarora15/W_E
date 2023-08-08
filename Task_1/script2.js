document.addEventListener("DOMContentLoaded", function () {
  const dynamicEmail = document.getElementById("dynamicEmail");
  const dynamicContact = document.getElementById("dynamicContact");
  const temp = new URLSearchParams(window.location.search);
  dynamicEmail.innerText = temp.get("email");
  dynamicContact.innerText = temp.get("mobile");
});
