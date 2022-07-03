

//Primer intento para consumir api (la muestra solo por consola pero no en el index.html)
////////////////////////  FERIADOS  /////////////////////////////////////////////////



let url = 'https://api.victorsanmartin.com/feriados/en.json';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data.data)
    let body = ""
    for (var i = 0; i < data.data.length; i++) {      
       body+=`<tr><td>${data.data[i].date}</td><td>${data.data[i].title}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}




//Segundo intento para consumir api (la muestra solo por consola pero no en el index.html)
/////////////////////////////// FARMACIAS DE TURNO /////////////////////////////////////

/*
let url = 'https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].fecha}</td><td>${data[i].local_nombre}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
*/


//Tercer intento para consumir api (muestra los datos correctamente en el index.html)
/////////////////////////////// SISMOLOGIA /////////////////////////////////////

/*
let url = 'https://api.gael.cloud/general/public/sismos';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].Fecha}</td><td>${data[i].RefGeografica}</td><td>${data[i].Magnitud}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
*/


//Cuarto intento para consumir api (muestra los datos correctamente en el index.html)
///////////////////// API DE PRUEBA (TRABAJADORES) //////////////////////////////

/*
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
*/

//Quinto intento para consumir api (muestra los datos correctamente en el index.html)
///////////////////// VALORES DE MONEDAS //////////////////////////////

/*
let url = 'https://api.gael.cloud/general/public/monedas';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {    
        
       body+=`<tr><td>${data[i].Codigo}</td><td>${data[i].Nombre}</td><td>${data[i].Valor}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
*/

//Sexto intento para consumir api (muestra los datos correctamente en el index.html)
///////////////////// API DE CLIMA //////////////////////////////

/*
let url = 'https://api.gael.cloud/general/public/clima';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].Estacion}</td><td>${data[i].Temp}</td><td>${data[i].Estado}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}

*/