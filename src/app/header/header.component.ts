import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
