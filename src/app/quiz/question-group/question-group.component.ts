import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IQuestionGroup } from '../../../interfaces/questions';

@Component({
  selector: 'app-question-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-group.component.html',
  styleUrl: './question-group.component.css'
})
export class QuestionGroupComponent {
  questionGroup = input.required<IQuestionGroup[]>()
}
