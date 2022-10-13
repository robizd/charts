import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isin'
})

export class IsInPipe implements PipeTransform {
    public transform(values: any[], key: string | number): boolean { 
        let isIn: boolean = false;
        let value: any = values.find((hotel: any) => {
            return hotel.id === key
        })
        if (value){
            isIn = true;
        }
        
        return isIn;
    }


}
