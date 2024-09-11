import {Answer} from "./Answer";

export type Question = {
  id:number,
  question:string ,
  category: string,
  answers: Answer[],
}
