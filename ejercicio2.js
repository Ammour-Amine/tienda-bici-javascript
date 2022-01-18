let myHeader = document.createElement("header");
let myH1 = document.createElement("h1");
let textTitulo = document.createTextNode("Bici Huercal");

myH1.appendChild(textTitulo);
myHeader.appendChild(myH1);
document.body.appendChild(myHeader);

let myContenedor = document.createElement("div");

let miFragmento = document.createDocumentFragment();
let i=1;

datos.forEach((e)=>{
    let myArticle = document.createElement("article");
    let nombre = document.createElement("h3");
    let descripcion = document.createElement("p");
    let precio = document.createElement("p");
    let imagen = document.createElement("img");


    nombre.appendChild(document.createTextNode(e.nombre));
    descripcion.appendChild(document.createTextNode(e.descripcion));
    precio.appendChild(document.createTextNode(e.precio+"€"));
    imagen.setAttribute("src", e.imagen);
    imagen.setAttribute("alt", ("bici")+i); i++;

    myArticle.appendChild(nombre);
    myArticle.appendChild(descripcion);
    myArticle.appendChild(precio);
    myArticle.appendChild(imagen);

    myContenedor.appendChild(myArticle);
    miFragmento.appendChild(myContenedor);

});

document.body.appendChild(miFragmento);


myContenedor.classList.add("container");