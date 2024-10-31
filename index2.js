//Funções utilizadas no algoritmos
function calculadora(vitorias, derrotas){

//Declaração de variáveis
    let qtdSaldo = vitorias - derrotas;
    let nivel;
    let resultado;

//Utilização de estrutura condicional para definir o nível de cada jogador considerando a quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    }else if(vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    }else if(vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    }else if(vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro";
    }else if(vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    }else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário";
    }else if(vitorias >= 101){
        nivel = "Imortal";
    }  
    
    return `O Herói tem de saldo de ${qtdSaldo} está no nível de ${nivel}`;
}
// Saída com mensagem sobre saldo e nível
resultado = calculadora(35, 05);//Os valores informados servem apenas para teste
console.log(resultado);


