let meninos = ["renan","kleber","ramon","ademir"]; 
let meninas = ["katia","lorena","solange","ludmilla"];

let i = 0 
let j = 0
let tamanho = meninos.length

console.log;
while(i < meninos.length){
    while(j < meninos.length){
        console.log(meninos[i]+ "  e  " +meninas[j]);
        j++;
    }
    j=0
    console.log("----------------------");
    i++;
}