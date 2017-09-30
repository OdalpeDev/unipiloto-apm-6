import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dialogs: Dialogs) {

    

  }


  public loadAlert(msg: string) {
    this.dialogs.alert(msg, 'titulo', 'Aceptar')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
}

public loadConfirmAlert(msg: string) {
this.dialogs.confirm(msg, 'titulo', ['Aceptar', 'Cancelar'])
  .then((option: number) => console.log(option))
  .catch(e => console.log('Error displaying dialog', e));
}

public loadPromptAlert(msg: string) {
this.dialogs.prompt(msg, 'titulo', ['Aceptar', 'Cancelar'], 'Mensaje por defecto')
  .then((obj: any) => console.log(obj))
  .catch(e => console.log('Error displaying dialog', e));
}

}
