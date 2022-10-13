import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    public transform(items: any[], key: string | number, value: string | number, exclude?: boolean, single?: boolean): any { 
        
        if (value) {
            let result: any;
    
            if (single) { 
                result = items.find((item: any) => {
                    if (item[key]) {
                        if (exclude) {
                            return item[key] !== value;
                        } else {
                            return item[key] === value;
                        }
                    }
                    else return null
                });  
            } else {
                result = items.filter((item: any) => {
                    if (item[key]) {
                        if (exclude) {
                            return Array.isArray(item[key]) ? (!item[key].includes(value)) : (item[key] !== value);
                        } else {
                            return Array.isArray(item[key]) ? (item[key].includes(value)) : (item[key] === value);
                        }
                    }
                }); 
            }
            
            return result;
        }

        return items;
    }
    // TODO:
    // private _getConditionsResult(item: any, value: string | number | Array<string | number>, key?: string | number, toExclude?: boolean): any {
    //     if (item[key]) {
    //         if (toExclude) {
    //             return Array.isArray(item[key]) ? (!item[key].includes(value)) : (item[key] !== value);
    //         } else {
    //             return Array.isArray(item[key]) ? (item[key].includes(value)) : (item[key] === value);
    //         }
    //     }
    // }
    
    // public transform(items: any[], value: string | number | Array<string | number>, key?: string | number, toGetSingle?: boolean, toExclude?: boolean): any { 
    //     if (!items) {
    //         return [];
    //     }

    //     if (toGetSingle) { 
    //         return items.find((item: any) => {
    //             return this._getConditionsResult(item, value, key, toExclude);
    //         });  
    //     }

    //     return items.filter((item: any) => {
    //         return this._getConditionsResult(item, value, key, toExclude);
    //     }); 
    // }
}
