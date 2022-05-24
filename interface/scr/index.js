//types (como struct)
var animal = {
    domestico: true,
    nome: 'Cachorro',
    porte: "medio",
    tipo: "terrestre"
};
// interfaces //
/**
  
 interface IAnimal {
   nome: string;
   tipo: 'terrestre' | 'aquático';
   rugido(alturaDecibeis: number): void;
  }
  
  interface IFelino extends IAnimal {
    visaoNoturna: boolean;
  }
  
  const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    rugido: (alturaDecibeis) => ('${alturaDecibeis}dB')
  }
  
  
  const felino: IFelino = {
    nome: 'Gato',
    tipo: 'terrestre',
    visaoNoturna: true,
    rugido: (alturaDecibeis) => ('${alturaDecibeis}dB')
  }
 */
// endInfaces //
/**
 *
 function soma(a: number, b: number){
   return a + b
  }
  
  soma(1, 1)
  
  console.log('TypeScript Testes#004');
  */ 
