import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaInfoComponent } from './component/trivia-info/trivia-info.component';
import { TriviaTestComponent } from './component/trivia-test/trivia-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/triviaInfo', pathMatch: 'full' },
  {
    path: 'triviaInfo',
    component: TriviaInfoComponent,
  },
  {
    path: 'startTrivia',
    component: TriviaTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
