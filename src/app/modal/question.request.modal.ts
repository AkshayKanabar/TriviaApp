export interface IQuestionRequest {
    amount: number;
    category:number;
    difficulty: string;
    type: string;
}

export class QuestionRequest implements IQuestionRequest {
    amount!: number;
    category!:number;
    difficulty!: string;
    type!: string;
}