export interface FunFact {
	index: number;
	text: string;
}

interface FunFactDataElement {
	text: string;
}

export interface FunFactData {
	funfacts: FunFactDataElement[];
}
