function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//consoe.log imprime ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", "12345"]//

/*
Diagrama de T

Variables         Valores
auntContactInfo  ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", "12345"]


*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//console.log imprime ["brocoli", "helado", "croqueta de papa"]//

/*
Diagrama en T

Variable   Valores
produce    ["manzanas", "naranjas"]
frozen     ["brocoli", "helado"]
frozen     ["brocoli", "helado", "croqueta de papa"]
*/ 

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
//console.log imprime ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]//

/*
Diagrama de T

Variables     Valores
movielibrary  ["Bambi", "E.T.", "Toy Story"]
movielibrary  ["Bambi", "E.T.", "Toy Story", "Zoro"]
movielibrary  ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
*/


