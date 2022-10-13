import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'in'
})

export class InPipe implements PipeTransform {
    public transform(values: any[], array: any[], key?: string | number): any[] { 
        let results = [];
        
        if (key) {
            results = values.filter((value: any) => {
                return (array.indexOf(value[key]) > -1);
            });
        } else {
            results = values.filter((value: any) => {
                return (array.indexOf(value) > -1);
            });
        }
        
        return results;
    }

    // TODO:
/*     public transform(items: any[], inArray: any[], key: string | number, inKey?: string | number): any[] { 
        if (!items) {
            return [];
        }

        return items.filter((item: any) => {
            if (Array.isArray(item[key])) {
                for (const value of item[key]) {
                    if (inArray.find((element: any) => { return (inKey ? (element[inKey] === value) : (element === value)); })) {
                        return true;
                    }
                }
            } else {
                return !!inArray.find((element: any) => {
                    return (inKey ? (element[inKey] === item[key]) : (element === item[key]));
                });
            }
        });
    } */
}
