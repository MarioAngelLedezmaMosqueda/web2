let numeroMaquina = Math.floor(Math.random()*(10-1)+1);

let vidas = 5;

function intento(vidas){
        return prompt("Adivinar el numero del 1 al 10, tienes: " + vidas + "vidas restantes");
}

while (vidas > 0){
    let guess = intento(vidas);
    if (guess == numeroMaquina){
        alert("Le atinaste, Ganaste!");
        break;
    }else{
        vidas --;
        if (guess > numeroMaquina){
            alert("intentar de nuevo, tienes: " + vidas + "vidas restantes el numero menor")
        }else (alert("intenta de nuevo, tienes: " + vidas + "vidas restantes. El numero es mayor"))
    }
}
    if (vidas == 0){
        alert("Fallaste el nuevo indicado era " + numeroMaquina);
    }
