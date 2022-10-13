import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    public transform(items: any[], key?: string | number, direction: any = 'desc', isBoolean?: boolean): any[] { 
        if (!items) {
            return [];
        }
        
        return items.sort((a: any, b: any) => {
            if (key) {
                if (isBoolean) {
                    a[key] = !!a[key];
                    b[key] = !!b[key];
                }
            
                if (a[key] > b[key]) {
                    return direction === 'desc' ? -1 : 1;
                } else if (a[key] < b[key]) {
                    return direction === 'desc' ? 1 : -1;
                }
            } else {
                if (isBoolean) {
                    a = !!a;
                    b = !!b;
                }
            
                if (a > b) {
                    return direction === 'desc' ? -1 : 1;
                } else if (a < b) {
                    return direction === 'desc' ? 1 : -1;
                }
            }
                
            return 0;
        });
    }
}
