import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    for(const resp of value){
      if(resp.name.indexOf(arg) > -1){
         result.push(resp);
      };
    };
    // console.log(result);
    return result;
  }

}
