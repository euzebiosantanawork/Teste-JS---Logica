const { soma , somacomposta , multiplicacao , calc } = require ( ` ./math ` ) ;

describe ( ` a funcao de soma ` , () => {

    test ( ` Soma de 1 e 2 deve ser 3  ` , () => {

        expect( soma ( 1 ,2 )). toBe ( 3 ) ;

    } ) ;

    test ( ` Soma de 1 , 2  e 3 deve ser 6 ` , () => {

        expectt( somacomposta  ( 1 , 2 , 3) ) . toBe ( 6 ) ;

    } ) ;

} ) ;

describe ( ` a funcao de multiplicacao ` , () => {

    test ( ` A multiplicacao de 5 e 2 deve ser 10 ` , () => {

        expect ( multiplicacao ( 5 , 2  ) ) .toBe ( 10 ) ;

    } ) ;

} ) ;

describe ( ` a funcao de calculo ` , () => {

    test ( ` O calculo de 1 , 2 e 2 deve ser 6 ` , () => {

        expect ( calc ( 1 , 2 , 2 ) ) . toBe ( 6 ) ;

    } )  ;

} ) ;