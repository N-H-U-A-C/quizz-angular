import {Question} from "./Question";

export type Quizz = {
  questions: Question[],
  category: string,
  size: number,
}
