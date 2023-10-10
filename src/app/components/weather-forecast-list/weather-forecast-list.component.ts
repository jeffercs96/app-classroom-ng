import { Component, Input } from '@angular/core';
import { WeatherForecast } from 'src/app/interfaces/WeatherForecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.scss']
})
export class WeatherForecastListComponent {
  @Input() weatherForecast!: WeatherForecast;

}
