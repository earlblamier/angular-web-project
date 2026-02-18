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

// copy of app.component.ts with only the necessary imports and template for the home page
// new home component created to separate the home page from the main app component, which will be used for routing and other pages in the future

import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IconGridComponent } from '../icon-grid/icon-grid.component';
import { CardComponent } from '../card/card.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { AboutComponent } from '../about/about.component';
import { MapComponent } from '../map/map.component';
import { FeatureLeftComponent } from '../feature-left/feature-left.component';
import { PreFooterComponent } from '../pre-footer/pre-footer.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    IconGridComponent,
    CardComponent,
    MainContentComponent,
    AboutComponent,
    MapComponent,
    FeatureLeftComponent,
    PreFooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  cardMessage = 'Empowering Communities';
}