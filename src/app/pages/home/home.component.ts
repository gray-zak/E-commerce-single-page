import { Component } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';
import { CarsoulComponent } from '../../units/carsoul/carsoul.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarsoulComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
