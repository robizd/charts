import { NgModule } from '@angular/core';
import { ElarionPipesComponent } from './elarion-pipes.component';
import { ABSPipe } from './abs.pipe';
import { CountryPipe } from './country.pipe';
import { DashedToTitlePipe } from './dashed-to-title.pipe';
import { FilterPipe } from './filter.pipe';
import { IDPipe } from './id.pipe';
import { InPipe } from './in.pipe';
import { IsInPipe } from './isIn.pipe';
import { ReplaceSubstringPipe } from './replace-substring.pipe';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { SplicePipe } from './splice.pipe';
import { SumPipe } from './sum.pipe';
import { SurveyQuestionAnswersPipe } from './survey-question-answers.pipe';


@NgModule({
  declarations: [
    ElarionPipesComponent,
    ABSPipe,
    CountryPipe,
    DashedToTitlePipe,
    FilterPipe,
    IDPipe,
    InPipe,
    SearchPipe,
    SortPipe,
    SplicePipe,
    SumPipe,
    SurveyQuestionAnswersPipe,ReplaceSubstringPipe,
    IsInPipe
  ],
  imports: [
  ],
  exports: [
    ElarionPipesComponent,
    ABSPipe,
    CountryPipe,
    DashedToTitlePipe,
    FilterPipe,
    IDPipe,
    InPipe,
    SearchPipe,
    SortPipe,
    SplicePipe,
    SumPipe,
    SurveyQuestionAnswersPipe,
    ReplaceSubstringPipe,
    IsInPipe
  ]
})
export class ElarionPipesModule { }
