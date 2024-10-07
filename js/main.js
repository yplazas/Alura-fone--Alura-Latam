const listaTeclas = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (const tecla of listaTeclas) {
    tecla.onclick = () => {
        inputTel.value += tecla.value;
    }
}

