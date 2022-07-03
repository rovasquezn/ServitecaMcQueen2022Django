//const trabajadores = [];      arreglos[], para guardar muchos objetos
//let trabajador = {};           es un objeto {}, permite definir muchas propiedades  
//trabajadores.push(trabajador);    agrega un objeto al final del arrreglo



const trabajadores = [];

const cargarTabla = ()=> {

    //1.- seleccionar el t-body  "  <body id="tabla-tbody">  del archivo html" para usarlo
    const tbody = document.querySelector("#tabla-tboby");
    tbody.innerHTML = ""; // limpia la tabla 
    //2.- recorrer el arreglo de trabajadores ["jose", "pedro", ...]
    for (let i=0; i < trabajadores.length; ++i){
        let t = trabajador[i]; 
        //3.- por cada trabajador generar una fila de la tabla con...(tr)
        let fila = document.createElement("tr");
        //4.- por cada atributo del trabajador (nombre, url, area, etc) se debe generar una celda
        let celdaNombre = document.createElement("td");
        celdaNombre.innerText = t.nombre;
        let celdaUrl = document.createElement("td");
        let celdaCargo = document.createElement("td");
        let celdaArea = document.createElement("td");
        //5.- agregar cada celda a la fila nueva
        fila.appendChild (celdaNombre);
        fila.appendChild (celdaUrl);
        fila.appendChild (celdaCargo);
        fila.appendChild (celdaArea);
    //6.- agregar la fila al cuerpo (body) de la tabla
        tbody.appendChild(fila);
    }
};


//agregar un listener para el evento click
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
   let nombre = document.querySelector("#nombre-txt").value;
   let url = document.querySelector("#url-txt").value;
   let area = document.querySelector("#area-select").value;
   
    let trabajador = {};
    trabajador.nombre = nombre;
    trabajador.url = url;
    trabajador.area = area;

    trabajadores.push(trabajador);
    console.log(trabajadores);

   cargarTabla(); //se llama a la funcion



});