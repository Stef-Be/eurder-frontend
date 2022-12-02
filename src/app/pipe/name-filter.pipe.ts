import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(values: Item[], searchString: string): any[] {
    let lowerCaseSearchString = searchString.toLowerCase();

    return values.filter(values => {
      return values.name.toLocaleLowerCase().startsWith(lowerCaseSearchString)})
  }

}
