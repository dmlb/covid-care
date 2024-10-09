import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

import { QuestionGroupComponent } from "./question-group/question-group.component";
import { IQuestionGroup } from '../../interfaces/questions';

import * as ScreeningJSON from '../../data/screening.json';
import * as MitigationJSON from '../../data/mitigation.json';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuestionGroupComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  screeningQuestions: IQuestionGroup[] = ScreeningJSON.screening; 
  mitigationQuestions: IQuestionGroup[] = MitigationJSON.mitigation;
  title = 'Quiz'
}
