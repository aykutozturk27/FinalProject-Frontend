import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})

//elimizdeki veriyi daha farklı göstermek için pipe kullanılır.
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value + (value * rate / 100);
  }

}
