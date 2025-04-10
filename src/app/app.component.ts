/**
 * @file Main component of the Tazkify application.
 * @description This file contains the main component of the Tazkify application, which serves as the root component.
 * @version 1.0.0
 * @date February 28, 2025
 * @author Earl Lamier
 * 
 * Full Stack .NET Developer Program - Humber
 * Project: Angular Web Project
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { CardComponent } from './card/card.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    IconGridComponent, 
    CardComponent, 
    MainContentComponent,
    AboutComponent,
    MapComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected property name
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'tazkify';
  cardMessage = 'Empowering Communities';
}
