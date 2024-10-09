export interface IQuestionGroup {
    title: string;
    questions: IQuestion[];
}

export interface IQuestion {
    question: string;
    description: string;
    type: string;
    answers: IAnswer[];
}

export interface IAnswer {
    answer: string;
    value: number;
}