import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component} from '@angular/core';
import { RspiService } from './rspi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weatherapp';
  temperatureIcon:IconProp = ['fas', 'temperature-half'];
  humidityIcon:IconProp = ['fas', 'droplet'];
  presenceIcon:IconProp = ['fas', 'person'];

  temperatureValue:number = 20;
  humidityValue:number = 60;
  presenceValue:number = 0;

  temperatureLabel:string = "°C";
  humidityLabel:string ="%";
  subscription: any;


  constructor(
    private rspi: RspiService,
  ) {
    setInterval(() => {
      this.get_temp_hum();
    }, 5000);
  }

  result:any;
  tempResult:any;
  ledState:any;



  led_onOff():void {
    this.result = this.rspi.led_OnOff()
    console.warn(this.result);
    //this.ledState=this.result.ledOn
  }
  async get_temp_hum(){
    this.tempResult = await this.rspi.get_temp_hum();
    console.warn("*******",this.tempResult);
    this.temperatureValue=this.tempResult.temperature;
    this.humidityValue=this.tempResult.humidity;
    console.warn(this.temperatureValue);
    console.warn(this.humidityValue);
  }



}
interface IInfo{
  temperature: number;
  humidity: number;
}
