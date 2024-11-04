class Heroes {
    constructor(nome, idade, tipo){
        this.nome = 'Bison';
        this.idade = 100;
        this.tipo = 'mago';
    }

    atacar(){
        let atacar;

        switch(this.tipo){
            case 'mago':
                atacar = 'usou magia';
                break;
            case 'guerreiro':
                atacar = 'usou espada'; 
                break;
            case 'monge': 
                atacar = 'usou artes marciais'; 
                break; 
            case 'ninja': 
                atacar = 'usou shuriken'; 
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${atacar}`);

    }

}

