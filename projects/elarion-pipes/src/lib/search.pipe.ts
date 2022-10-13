import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    private _queryOverItem(item: any, query: string, searchEqualValue: boolean): boolean {
        if (item) {
            if ((typeof item === 'number') || (typeof item === 'string') || (typeof item === 'boolean')) {
                if (searchEqualValue) {
                    return item === query;
                } else {
                    return String(item).toLowerCase().includes(query);
                }
            } else if (Array.isArray(item)) {
                for (const element of item) {
                    if (this._queryOverItem(element, query, searchEqualValue)) {
                        return true;
                    }
                }
            } else if (typeof item === 'object') { 
                for (const key in item) {
                    if (this._queryOverItem(item[key], query, searchEqualValue)) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
    
    public transform(items: any[], query: string, searchEqualValue: boolean = false): any[] {
        if (!items) {
            return [];
        }
        
        if (!query) {
            return items;
        }

        query = query.toLowerCase();

        return items.filter((item: any) => { return this._queryOverItem(item, query, searchEqualValue); });
    }
}
