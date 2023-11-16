// https://pokeapi.co/api/v2/pokemon/1/ -> sprites -> (que elija la imagen que quiera)
// front_default, front_shiny

// o entrar a other y elegir
//  dream_world -> front_default o home -> front_default o official-artwork -> front_default

function pepe(arreglo){
    let poke = ""   
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        poke="<div><h1>${element.name}</h1></div><br>"
    }
   }


// Llamada a la función getJSONData con una URL
getJSONData(ability_URL)
  .then(function(result) {
    if (result.status === 'ok') {
        pepe(result.data.results);
       let abilidades = .document.getElementById("ability")
      // Aquí puedes trabajar con los datos obtenidos (result.data)
    } else {
      console.error('Error:', result.data);
      // Manejar el error de alguna manera
    }
  })
  .catch(function(error) {
    console.error('Error al obtener los datos:', error);
    // Manejar el error de conexión u otros errores
  });
