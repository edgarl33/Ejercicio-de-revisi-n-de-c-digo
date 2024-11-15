// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "bota-azul.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "zapato-rojo.jpg"}
]
//Se cambio el getElementByName por getElementById ya que lo que se refiere es el id
const li = document.getElementById("lista-de-productos")

const $i = document.querySelector('.input');

//displayProducts no estaba declarado como una función y se encontraba fuera del ciclo for, por lo que el ciclo for no apuntaba a nada, una vez anidado en la función pudo realizarse la busqueda del filtro
function displayProductos(productos){

  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
    
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    
    d.appendChild(ti)
    d.appendChild(imagen)
    
    li.appendChild(d)
  }
  
}


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  