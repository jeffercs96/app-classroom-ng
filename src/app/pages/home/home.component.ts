import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { WeatherForecast } from 'src/app/interfaces/WeatherForecast';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  weatherForecasts: WeatherForecast[] | undefined;
  weatherForecastsCopy: WeatherForecast[] | undefined;
  constructor(public _httpClient: HttpClient){
    this.getData();
  }

  async getData(){
    await this._httpClient.get<any>(environment.apiUrl + "/WeatherForecast")
    .subscribe(res => {
      this.weatherForecasts = res.map(({date, summary, temperatureC, temperatureF}:WeatherForecast)=> {
        return {
          date: date,
          summary: summary,
          temperatureC: temperatureC,
          temperatureF: temperatureF
        }
      });
      this.weatherForecastsCopy = this.weatherForecasts;
    })
  }
  filter(e:any) {
    const search: string = e.target.value;
    console.log({search})
    this.weatherForecasts = this.weatherForecastsCopy?.filter(({summary}: WeatherForecast ) => {
       return summary.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}
