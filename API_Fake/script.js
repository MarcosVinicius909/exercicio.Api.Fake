const car1 =`{
    "marca": "Pagani" ,
    "modelo": "Pagani Hyura R" ,
    "categoria": "Hipercarro" ,
    "foto": "<img src='imagens/pagani.jpg' width='400px'>"
}`;

//Carro 2
const car2 =`{
    "marca": "Koenigsegg" ,
    "modelo": "Koenigsegg Jesko Absolut" ,
    "categoria": "Hipercarro" ,
    "foto": "<img src='imagens/jesko.jpg' width='400px'>"
}`;

//Carro 3
const car3 =`{
    "marca": "Devel" ,
    "modelo": "Devel sixteen" ,
    "categoria": "Hipercarro" ,
    "foto": "<img src='imagens/devel.jpg' width='400px'>"
}`;

//Carro 4
const car4 =`{
    "marca": "Aston Martin" ,
    "modelo": "Aston Martin Valkyrie" ,
    "categoria": "Hipercarro" ,
    "foto": "<img src='imagens/Aston-Martin-Valkyrie.jpg' width='400px'>"
}`;

//Carro 5
const car5 =`{
    "marca": "Bugatti" ,
    "modelo": "Bugatti Chiron" ,
    "categoria": "Hipercarro" ,
    "foto": "<img src='imagens/bugatti-chiron.jpg' width='400px'>"
}`;



//Carro 1 
const data = JSON.parse(car1);

const carro1btn = document.getElementById("carro1");
const dadosDiv = document.getElementById("dados");
console.log(data)

carro1btn.addEventListener("click", () => {
    dadosDiv.innerHTML = `
        <h1>Marca: ${data.marca}</h1>
        <h2>Modelo: ${data.modelo}</h2>
        <p>Categoria: ${data.categoria}</p>
        ${data.foto}
    `;
});     

//Carro 2
const data2 = JSON.parse(car2);

const carro2btn = document.getElementById("carro2");
console.log(data2)

carro2btn.addEventListener("click", () => {
    dadosDiv.innerHTML = `
        <h1>Marca: ${data2.marca}</h1>
        <h2>Modelo: ${data2.modelo}</h2>
        <p>Categoria: ${data2.categoria}</p>
        ${data2.foto}
    `;
}); 

//Carro 3
const data3 = JSON.parse(car3);

const carro3btn = document.getElementById("carro3");
console.log(data3)

carro3btn.addEventListener("click", () => {
    dadosDiv.innerHTML = `
        <h1>Marca: ${data3.marca}</h1>
        <h2>Modelo: ${data3.modelo}</h2>
        <p>Categoria: ${data3.categoria}</p>
        ${data3.foto}
    `;
}); 

//Carro 4
const data4 = JSON.parse(car4);

const carro4btn = document.getElementById("carro4");
console.log(data4)

carro4btn.addEventListener("click", () => {
    dadosDiv.innerHTML = `
        <h1>Marca: ${data4.marca}</h1>
        <h2>Modelo: ${data4.modelo}</h2>
        <p>Categoria: ${data4.categoria}</p>
        ${data4.foto}
    `;
}); 

//Carro 5
const data5 = JSON.parse(car5);

const carro5btn = document.getElementById("carro5");
console.log(data5)

carro5btn.addEventListener("click", () => {
    dadosDiv.innerHTML = `
        <h1>Marca: ${data5.marca}</h1>
        <h2>Modelo: ${data5.modelo}</h2>
        <p>Categoria: ${data5.categoria}</p>
        ${data5.foto}
    `;
}); 


