import { Routes } from '@angular/router';
import { CitationsComponent } from './citations/citations.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

import * as CitationsJSON from '../data/citations.json';

export const routes: Routes = [
    {
        path: '',
        title: 'Covid Care: Consent Communication Tool',
        component: HomeComponent
    },
    {
        path: 'citations',
        title: 'Citations',
        component: CitationsComponent,
        data: {
            citations: CitationsJSON.citations
        }
    },
    {
        path: 'quiz',
        title: 'Quiz',
        component: QuizComponent
    },
    {path: '**', component: PageNotFoundComponent}
];
