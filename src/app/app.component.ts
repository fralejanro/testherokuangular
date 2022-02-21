import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public message :string = '';
  public empresas : any[] = [];

  constructor(private httpClient:HttpClient){
   this.httpClient.get<any>(`http://poll-app-uq.herokuapp.com/empleados`).subscribe(
    results=>{
      this.empresas = results;
    },
    error=>{
      this.message = "El API de Miguel no funciona"
    }
   )
  }


}
