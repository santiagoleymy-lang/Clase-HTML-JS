console.log("heeeey");
console.log("Holaaaaaaa");
let name = "Santiago";
let lastname = "Ley";
let fullName = `Nombre: ${name} | Apellido: ${lastname}`;
let fullName2 = "Nombre: " + name + " | Apellido: " + lastname;
console.log(fullName);
console.log(fullName2);

let videojuegos =["GTA VI", "Pokemon", "Skyrim"];
console.log(videojuegos);

function saludar(nombre){console.log(`Hola, ${nombre}`);}
saludar(name);
const saludarFlecha = (nombre) => {console.log(`(Flecha)Hola, ${nombre}`);}
saludarFlecha(lastname);

const toggleButton = document.querySelector("#toggle-button");
const hiddenMessage = document.querySelector("#hidden-message");
toggleButton.addEventListener("click", () => {
  console.log("Button clicked");

  hiddenMessage.classList.toggle("hidden");
});
console.log({ toggleButton, hiddenMessage });
