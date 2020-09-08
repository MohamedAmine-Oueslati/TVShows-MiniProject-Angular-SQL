import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "episode",
})
export class EpisodesPipe implements PipeTransform {
  transform(value: any, args?: any) {
    if (!value) {
      return null;
    } else {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    }
  }
}
