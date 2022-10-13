import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splice'
})

export class SplicePipe implements PipeTransform {
    // TODO:
    public transform(items: any[], refferals: any[], identifier: { keyA: string | number, keyB: string | number }, key: string | number, value: any): any[] { 
        const result: any[] = [];

        if (identifier && key && value) {
            items.forEach((item: any) => {
                refferals.forEach((refferal: any) => {
                    if (item[identifier.keyA] === refferal[identifier.keyB]) {
                        if (refferal[key] === value) {
                            result.push(item);
                        }
                    }
                });
            });
        }

        return result;
    }
}
