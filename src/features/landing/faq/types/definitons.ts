export interface FaqDataProps {
  id: string;
  title: string;
  questions: FaqQuestionsDataProps[];
}

export interface FaqQuestionsDataProps {
  id: string;
  answer: string;
  question: string;
}
