interface Gato {
	nome: string;
	idade: number;
	camaFavorita?: string;
}

type GatoSomenteLeitura = {
	readonly [k in keyof Gato]-?: Gato[k]; // -? para remover tipos opicionais
}

class MeuGato implements GatoSomenteLeitura {
	idade;
	nome;
  camaFavorita;

	construct(nome, idade){
	this.nome = nome;
	this.idade = idade;
	}
}