import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "summary",
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, args?: any) {
    if (!value) {
      return null;
    } else {
      var arr = value.split("");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "<" && arr[i + 1] === "/") {
          arr.splice(i, 4);
          i--;
        } else if (arr[i] === "<") {
          arr.splice(i, 3);
          i--;
        }
      }
      return arr.join("");
    }
  }
}
