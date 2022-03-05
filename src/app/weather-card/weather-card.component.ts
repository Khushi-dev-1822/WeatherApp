import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  public cityName!: string;

  constructor() { }

  ngOnInit(): void {
    axios({
      method: 'get',
      url: 'http://api.weatherapi.com/v1/forecast.json?key=9466d8d9fff649658ff113923212407&q=india&days=10&aqi=no&alerts=yes',
      responseType: 'stream'
    })
      .then(function (response) {
        const cityName = response.data.location.name;
       console.log(cityName);
      });
  }
  public getApiData() {
    
  }

}