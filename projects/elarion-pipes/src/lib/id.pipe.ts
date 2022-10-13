import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'id'
})

export class IDPipe implements PipeTransform {
    public transform(items: any[], id: string | number, property?: string): any { 
        if (!items) {
            return [];
        }
        
        const item: any = items.find((_item: any) => {
            if (_item.id) {
                return _item.id === id;
            }

            return false;
        });
                
        return item ? (property ? item[property] : item) : null;
    }
}
