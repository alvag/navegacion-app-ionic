import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component( {
    selector: 'page-ajustes',
    templateUrl: 'ajustes.html',
} )
export class AjustesPage {

    constructor( public navCtrl: NavController, public navParams: NavParams ) {
    }

    activarPrincipal() {
        this.navCtrl.parent.select( 2 );
    }
}
