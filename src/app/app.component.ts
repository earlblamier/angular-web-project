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

/*
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';
import { CardComponent } from './card/card.component';
import { MainContentComponent } from "./main-content/main-content.component";
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { FeatureLeftComponent } from "./feature-left/feature-left.component";
import { PreFooterComponent } from './pre-footer/pre-footer.component';

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
    MapComponent, 
    FeatureLeftComponent,
    PreFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected property name
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'tazkify';
  cardMessage = 'Empowering Communities';
}

*/

// version 18 Feb 2026
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tazkify';
}