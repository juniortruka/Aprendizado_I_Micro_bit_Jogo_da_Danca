// Jogo  da dança  com as  setas;
//  Função  quando pressionar  o  botão A
input.onButtonPressed(Button.A, function () {
    
    // Função de repetição  4  vezes das setas do jogo de dança; 

    for (let index = 0; index < 4; index++) {
       //  Mostrar  seta  para esquerda;
        // [Pular para  esquerda]
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        // Pausa de   1 segundo;

        basic.pause(1000)
       //  Mostrar  seta  para direita;
       // [Pular para  direita]
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)

        // Pausa de   1 segundo;
        basic.pause(1000)
        //  Mostrar  seta  para cima;
       // [Pular para  cima]
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
         // Pausa de   1 segundo;
        basic.pause(1000)
        //  Mostrar  seta  para baixo;
       // [Descer a mão para  baixo]
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
         // Pausa de   1 segundo;
        basic.pause(1000)
    }
    basic.clearScreen()
})
