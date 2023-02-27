import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RspiService {
  API_ROOT_URL =environment.SERVER_ADDR
  constructor(private http: HttpClient) { }
  res:any;

  public led_OnOff():any{
    const res = this.http.get(this.API_ROOT_URL+'/').subscribe(data => {
    console.log(data);
    return data
  });

  }
  public async get_temp_hum(){
    try{
      const res = await this.http.get(this.API_ROOT_URL+'/temp_hum').subscribe(data => {
        this.res = data
        console.log(this.res);
      });
      return this.res
    }catch(error){
      console.log(error);
      return error
    }


  }

}
