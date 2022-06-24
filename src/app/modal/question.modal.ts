export interface IQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    selected_answer: string;
    correct_answer: string;
    incorrect_answers: string[];
    options:string[];
}

export class Question implements IQuestion {
    category!: string;
    type!: string;
    difficulty!: string;
    question!: string;
    selected_answer!: string;
    correct_answer!: string;
    incorrect_answers!: string[];
    options!:string[];
}