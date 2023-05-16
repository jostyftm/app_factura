import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: String = '';
  public password: String = '';

  constructor(
    public authService: AuthServiceService
  ) { }

  async ngOnInit() {

    const token = await Preferences.get('token');

    console.log(token)
  }

  handleLogin = () => {
    this.authService.login(this.email, this.password).then(async(res) => {
      console.log(res)
      await Preferences.set({
        key: 'token',
        value: res.data?.token
      });
    })
  }
}
