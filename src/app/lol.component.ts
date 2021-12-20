import { Component, Input } from '@angular/core';

@Component({
  selector: 'lol',
  template: `<h1>ciao questo è il component lol</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class LolComponent  {
  @Input() name: string;
}
