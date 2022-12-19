const scriptURL = "https://script.google.com/macros/s/AKfycbzhRdYGz7UdpBxVMKnzqp3CmBt2SswZ6b7BfIeMA5snRxi1Qpb8erIYtRZlk2J3EBKU/exec";
const form = document.forms["realino-corp-admin"];
const btnKirim = document.querySelector(".login__button");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika tombol submit diklik
  // tampilkan tombol loading

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim , hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

function myFunction2() {
  myAlert.style.display = "none";
}
