import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';


@Component( {
    selector: 'page-pagina3',
    templateUrl: 'pagina3.html',
} )
export class Pagina3Page {

    mutante: any = {};

    constructor( private navParams: NavParams,
                 private navCtrl: NavController ) {
        this.mutante = this.navParams.get( 'mutante' );
        console.log( this.mutante );
    }

    irAtras() {
        this.navCtrl.pop();
    }

    irRoot() {
        this.navCtrl.popToRoot();
    }
}
