let Pokedex = {
  [{
"id": 1,
"num": "001",
"name": "Bulbasaur",
"type": [
"Grass",
"Poison"
],
"height": "0.71 m",
"weight": "6.9 kg",
"candy": "Bulbasaur Candy",
"candy_count": 25,
"egg": "2 km",
"spawn_chance": 0.69,
"avg_spawns": 69,
"spawn_time": "20:00",
"multipliers": [1.58],
"weaknesses": [
"Fire",
"Ice",
"Flying",
"Psychic"
],
"next_evolution": [{
"num": "002",
"name": "Ivysaur"
}, {
"num": "003",
"name": "Venusaur"
}]

       $(function () {
           $("button").click(function () {
               showPokedexInfo();
           });

       });

       function showPokedexInfo()
           {
               $("#Pokedex").html("num: " + Pokedex.num
               + "<br>name:" + Pokedex.name + "<br>type:" + Pokedex.type + "<br>height:"
               + Pokedex.height + "<br>weight:" + Pokedex.weight + "<br>candy:" + Pokedex.candy + "<br>candy_count:"
               + Pokedex.candy_count + "<br>egg:" + Pokedex.egg + "<br>spawn_chance:" + Pokedex.spawn_chance
               + "<br>avg_spawns:" + Pokedex.avg_spawns + "<br>spawn_time:" + Pokedex.spawn_time + "<br>multipliers:"
               + Pokedex.multipliers + "<br>weaknesses:" + Pokedex.weaknesses + "<br>next_evolution:" + Pokedex.next_evolution

           }
