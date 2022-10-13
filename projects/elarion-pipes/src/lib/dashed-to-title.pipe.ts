import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dashedToTitle'
})

export class DashedToTitlePipe implements PipeTransform {
    private _titleCasePipe: TitleCasePipe = new TitleCasePipe();

    public transform(value: string, reverse: boolean = false): string {
        if (!reverse) {
            return this._titleCasePipe.transform(value.replace(/-/g, ' '));
        } else {
            return value.toLowerCase().replace(/ /g, '-');
        }
    }
}
