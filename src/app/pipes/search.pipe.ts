import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((item: Task) => {
      return JSON.stringify(item.text).toLowerCase().includes(args);
    });
  }
}
