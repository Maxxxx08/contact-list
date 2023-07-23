//lista de contactos
let listacontactos = ['Juan Perez','Eduardo Lopez','Manuel Jimenez','Roberto Rodriguez','Susana Horia']; //Agregar los contactos//

console.log("Esta es tu lista de contactos");
console.log(listacontactos);

//añadir contacto
function nuevocontacto(contacto){
  console.log("Esta es tu lista de contactos actualizada con el nuevo contacto")
listacontactos.push(contacto);
}
nuevocontacto("Hector Gonzalez");
console.log(listacontactos);

//borrar contacto
function eliminarContacto(eliminar) {
  const indice = listacontactos.indexOf(eliminar);
  console.log("Esta es tu lista de contactos con el primer contacto eliminado:")
  if (indice !== -1) {
    listacontactos.splice(indice, 1);
}
}
eliminarContacto("Juan Perez");
console.log(listacontactos);

//Imprimir lista de contactos
console.log("Esta es tu lista de contactos actual:")
  listacontactos.forEach(function(nombre, array) {
    
    console.log(nombre);
})
