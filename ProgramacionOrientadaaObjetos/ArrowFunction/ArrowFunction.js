let Pokemons = [
    {name:"Pikachu", type:"electrico", hp: 50},
    {name:"Charmander", type:"Fuego", hp: 75},
    {name:"Bulbasur", type:"Planta", hp: 85},
    {name:"Squirtle", type:"Agua", hp: 100},
    {name:"Steelix", type:"Hierro Roca", hp: 32},
    {name:"Magmar", type:"Fuego", hp: 53},
    {name:"Electabuzz", type:"Electrico", hp:90}
];

// let Persona={
//     nombre:"Jose Carlos",
//     Apellido:"Gonzalez",

//     LlamarPersona:function(){
//         setTimeout(() =>{
//             console.log(`${this.nombre} ${this.Apellido} Presentarse en la sala de juntas`)
//         }, 3000)
//     }

// }

// Persona.LlamarPersona();
let pokemonsArregloNuevo = [];

// Pokemons.forEach(function(pokemon){
//     pokemonsArregloNuevo.push(pokemon.name)
    
// })

pokemonsArregloNuevo = Pokemons.find((pokemon)=>{
    if(pokemon.name == "Magmar"){
        return pokemon
    }
})
console.log(pokemonsArregloNuevo);
/* ================================
   Find solo funciona para encontrar 1 dato del arreglo
==================================*/
//pokemonsArregloNuevo = Pokemons.find((pokemon)=> pokemon.hp > 60)

/* ================================
   Filter trae un arreglo filtrado por una condicion
==================================*/

// pokemonsArregloNuevo=Pokemons.filter((pokemon)=>pokemon.hp > 50)
// console.log(PokemonsArregloNuevo);    

/* ================================
   Map: es para crear un nuevo array con alguna condicion dada.
==================================*/
// pokemonsArregloNuevo=Pokemons.map((pokemon)=>pokemon.name=="Steelix" ? pokemon.hp: "Este pokemon no es Steelix")
// console.log(pokemonsArregloNuevo);

/* ================================
   Every:
==================================*/
let bandera;
bandera = Pokemons.every((pokemon.hp > 0))
console.log(bandera);

bandera = Pokemons.some((pokemon)=> pokemon.hp < 0)