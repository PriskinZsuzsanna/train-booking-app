import { Component } from '@angular/core';
import { TrainBookingHomeDepartureComponent } from '../../component-items/main-departure/home-departure.component';

@Component ({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  imports: [TrainBookingHomeDepartureComponent]
})

export class TrainBookingHomePageComponent {
  
}