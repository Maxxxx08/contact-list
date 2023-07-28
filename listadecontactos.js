//lista de contactos con Informacion en Javascript
console.log("Esta es tu lista de contactos con su informacion respectiva");
let listacontactos = [
  {
   nombres: 'Daniela Gissell',
   apellidos: 'Maradiaga Ortez',
   telefono:'5564897320',
  ubicaciones: ['Tegucigalpa', 'Col.Kennedy'],
  ID:'1',
  },
{
nombres: 'Eduardo Alberto',
 apellidos: 'Canales Lopez',
telefono:'779878776',
 ubicaciones: ['San Pedro Sula', 'Col.Planeta'],
 ID:'2',
 
},
{
nombres: 'Manuel David',
 apellidos: 'Jimenez Hernandez',
 telefono: '584958498',
 ubicaciones: ['Choloma ','Brisas del Norte'],
 ID:'3',
},
{
nombres:'Roberto David',
 apellidos: 'Rodriguez Gonzalez',
 telefono: '85495889',
 ubicaciones: ['Tegucigalpa, El Hato'],
 ID:'4',
},
{
nombres:'David Eduardo',
 apellidos: 'Lopez Gimenez',
 telefono:  '24238492',
ubicaciones: ['Choluteca','Jocote'] ,
ID:'5',
}
]; 
console.log(listacontactos);

//añadir contacto
console.log("Esta es tu lista de contactos actualizada con el nuevo contacto");
function agregarcontacto(nombres, apellidos, ubicaciones, telefono,id) {
  const nuevo = {
    nombres: nombres,
    apellidos: apellidos,
    ubicaciones: ubicaciones,
    telefono: telefono,
    ID:id,
  };
  listacontactos.push(nuevo);
}
agregarcontacto('Susana Horia', 'Sevelinda Parada', '786767865', 'Tegucigalpa, Pedregal','6');
console.log(listacontactos);

//borrar contacto
console.log("Esta es tu lista de contactos con el primer contacto eliminado")
function eliminarContacto(nombres) {
  listacontactos = listacontactos.filter(contacto => contacto.nombres !== nombres);
}
eliminarContacto('Daniela Gissell');
console.log(listacontactos);

//Lista de contactos actualizada
console.log("Esta es tu lista de contactos actual:");
function contactosactualizados() {
  for (const contacto of listacontactos) {
    console.log(
      `Contacto e Informacion:
      nombres: ${contacto.nombres}, 
      apellidos: ${contacto.apellidos}, 
      ubicación: ${contacto.ubicaciones}, 
      teléfono: ${contacto.telefono}
      ID:${contacto.ID}`
    );
  }
}
contactosactualizados();

// editar un contacto
function editarcontacto(buscarcontacto, contactoeditado) 
{
  listacontactos = listacontactos.map(contactos => {
    if (contactos.nombres === buscarcontacto) {
      return { ...contactos, ...contactoeditado 
      };
    }
    return contactos;
  });
}
editarcontacto('Eduardo Alberto',{ //Edite el primer contacto-ID:2
  nombres: 'Eduardo Halberto',
  apellidos: 'Canales Loupes',
  ID:'1',
}
);

console.log(listacontactos);




