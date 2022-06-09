import { animacaoPadrao } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animacaoPadrao]
})
export class AppComponent {
  title = 'NomeProjeto';

  prepareRoute(outlet: RouterOutlet): any {
    return outlet &&
      outlet.activatedRouteData
  }
}
