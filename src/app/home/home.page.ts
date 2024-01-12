import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private firebaseSvc:FirebaseService
  ) {

  }

  async newDoc(){

    var id = await this.firebaseSvc.createDocument("Tasks", {dato1:"valor 1", dato2: "valor2"})
    await this.firebaseSvc.updateDocument("Tasks", id, {data3:"valor3", data4:"valor4"});
    console.log(id);
  }
}
