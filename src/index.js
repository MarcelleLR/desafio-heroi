let nome= ""
let xp = 8000
let lvl= ""

if(xp < 1000){
    nome = "Will"
    lvl = "Ferro"
} else if(xp > 1001 && xp <= 2000){
    nome ="Dustin"
    lvl =  "Bronze"
} else if(xp > 2001 && xp <= 5000){
    nome = "Jonathan"
    lvl =  "Prata"
} else if(xp > 6001 && xp <= 7000){
    nome = "Steve"
    lvl =  "Ouro"
} else if(xp > 7001 && xp <= 8000){
    nome = "Robin"
    lvl =  "Platina"
} else if(xp > 8001 && xp <= 9000){
    nome = "Hopper"
    lvl =  "Ascendente"
} else if(xp > 9001 && xp <= 10000){
    nome = "Max"
    lvl =  "Imortal"
} else if(xp >= 10001 ){ 
    nome ="Eleven"
    lvl =  "Radiante"
} 


console.log(`O herói de nome ${nome} está no nível ${lvl}´)