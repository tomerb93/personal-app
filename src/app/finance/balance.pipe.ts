import { Pipe, PipeTransform } from '@angular/core';
import { Finance } from './finance.model';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(items: Finance[], attr: string) {
    if (!items || !items.length) { return items; }
    return items.reduce((a, b) => a + (b[attr] || 0), 0);
  }


}
