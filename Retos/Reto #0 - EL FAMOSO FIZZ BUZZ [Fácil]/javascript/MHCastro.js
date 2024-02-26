class App{

    constructor(){
         this.numeros = []

         this.iniciar()
    }

    iniciar(){
        for (let i = 1; i <= 100; i++) {
            if(i % 3 == 0 && i % 5 == 0)
                this.numeros[i]= "fizzbuzz"
            else if(i % 3 == 0)
                this.numeros[i]= "fizz"
            else if(i % 5 == 0)
                this.numeros[i]= "buzz"     
            else
                this.numeros[i] = i

            console.log(this.numeros[i])    
        }
        
    }

    localizarMultiplosdeTres(array){


    }
}

new App()
