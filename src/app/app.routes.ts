import { Routes } from '@angular/router';
import { TrainBookingHomePageComponent } from './components/pages/home/home.page.component';
import { TrainBookingDetailesPageComponent } from './components/pages/details/detailes.page.component';
import { TrainBookingDateSelectPageComponent } from './components/pages/date-select/date-select.page.component';
import { TrainBookingSeatSelectPageComponent } from './components/pages/seat-select/seat-select.page.component';

export const routes: Routes = [
  {path: '', component: TrainBookingHomePageComponent},
  {path: 'detailes', component: TrainBookingDetailesPageComponent},
  {path: 'date-select', component: TrainBookingDateSelectPageComponent},
  {path: 'seat-select', component: TrainBookingSeatSelectPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
