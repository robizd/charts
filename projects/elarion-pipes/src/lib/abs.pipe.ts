import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abs'
})

export class ABSPipe implements PipeTransform {
    public transform(value: number | string): number { 
        if (typeof value === 'string') {
            value = Number(value);
        }

        return Math.abs(value);
    }
}
