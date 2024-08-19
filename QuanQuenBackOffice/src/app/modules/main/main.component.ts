import { Component } from '@angular/core';
import { ApiService } from 'src/app/_shared/_services/ApiService';
import { AuthService } from 'src/app/_shared/_services/AuthService';
import { environments } from 'src/environments/configuration';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private apiService: ApiService, private authenService: AuthService){}

  ngOnInit(){
    this.apiService.Login('identity/api/VsiriusUser/Login', environments.Identity.Account).subscribe(
      response => {
        this.authenService.SetToken(response['token']);
        console.log(this.authenService.GetToken());
      }, error => {
        console.log(error);
      } 
    )
  }
}
