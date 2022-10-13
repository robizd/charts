import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceSubstring'
})

export class ReplaceSubstringPipe implements PipeTransform {
    public transform(content: string): any {
        let s = "&#39;"
        if(content){

            if (content.includes(s)) {
                let regex = new RegExp(s, "g")
                content = content.replace(regex, '\'');
            }
        }
        return content;
        
    }
}
