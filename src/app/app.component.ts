import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { CardComponent } from './card/card.component';
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    IconGridComponent, 
    CardComponent, 
    MainContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected property name
})
export class AppComponent {
  title = 'tazkify';
}
