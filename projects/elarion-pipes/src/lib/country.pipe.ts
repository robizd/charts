import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'country'
})

export class CountryPipe implements PipeTransform {
    // TODO: 
    public transform(value: string): string { 
        const regionNamesInEnglish = new (Intl as any).DisplayNames(['en'], { type: 'region' });

        return regionNamesInEnglish.of(value);
    }
}
