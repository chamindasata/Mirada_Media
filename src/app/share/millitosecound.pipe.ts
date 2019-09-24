import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millitosecound'
})
export class MillitosecoundPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
   transform(s: number): string {
  
    var secs = s % 60;
    s =  (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + ':' + mins + ':' +Math.round( secs) ;   
    // const secound: number = value / 1000;

    //    const minutes: number = Math.floor(secound / 60);
    //    return minutes + ':' + (secound - minutes * 60);
    }
}
