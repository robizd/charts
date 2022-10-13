import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sum'
})

export class SumPipe implements PipeTransform {
    public transform(items: any[], key?: string, excludes?: { [exclude: string]: any[]; }): any { 
        return items.reduce((sum: number, item: any) => {
            let shouldBeExcluded: boolean = false;

            if (excludes) {
                for (const exclude in excludes) {
                    if (excludes[exclude].includes(item[exclude])) {
                        shouldBeExcluded = true;
                        
                        break;
                    }
                }
            }

            if (shouldBeExcluded) {
                return sum;
            } else {
                return sum + (key ? item[key] : item);
            }
        }, 0);
    }
}
