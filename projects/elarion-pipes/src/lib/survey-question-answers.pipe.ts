import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'surveyQuestionAnswers'
})

export class SurveyQuestionAnswersPipe implements PipeTransform {
    public transform(surveyTakes: any[], value: string | number): any {
        if (value) {
            let result: any[] = [];
            
            surveyTakes.forEach((surveyTake: any) => {
                const surveyTakeAnswers: any = surveyTake.answers.find((surveyTakeAnswer: any) => {return surveyTakeAnswer.questionID === value });

                if (surveyTakeAnswers) {
                    if (surveyTakeAnswers.answer['rating']) {
                        if (surveyTakeAnswers.answer.rating.length > 0 ||surveyTakeAnswers.answer.rating.length > 0 || surveyTakeAnswers.answer.length > 0) {
                            result.push(surveyTakeAnswers);
                        }
                    } else if (surveyTakeAnswers.answer.length > 0) {
                        result.push(surveyTakeAnswers);
                    }
                }
            });
            
            return result;
        }
    }
}
