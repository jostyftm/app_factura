import { Injectable } from '@angular/core';
import { Http} from '@capacitor-community/http';
import { HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login = async(email: String, password: String) => {
    const options = {
      url: `${environment.apiURL}/login`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {email, password},
    };
  
    const response: HttpResponse = await Http.post(options);
    console.log(response);

    return response;
  }
}
