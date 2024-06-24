import { Component } from '@angular/core';
import { TrainBookingHomeDepartureComponent } from '../../component-items/main-departure/home-departure.component';
import { TrainDepartureMainTicketsComponent } from '../../component-items/main-tickets/main-tickets.component';

@Component ({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  imports: [
    TrainBookingHomeDepartureComponent,
    TrainDepartureMainTicketsComponent
  ]
})

export class TrainBookingHomePageComponent {
  
}