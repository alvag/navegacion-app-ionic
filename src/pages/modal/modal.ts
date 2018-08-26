import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component( {
    selector: 'page-modal',
    templateUrl: 'modal.html',
} )
export class ModalPage {

    nombre: string;
    apellido: string;

    constructor( private navParams: NavParams,
                 private viewCtrl: ViewController ) {

        this.nombre = this.navParams.get( 'nombre' );
        this.apellido = this.navParams.get( 'apellido' );

        console.log( this.nombre, this.apellido );
    }


    cerrarConParametros() {
        let data = {
            nombre: 'Juan Carlos',
            edad: 18,
            coords: {
                lat: 10,
                lng: -10
            }
        };
        this.viewCtrl.dismiss( data );
    }

    cerrarSinParametros() {
        this.viewCtrl.dismiss();
    }
}
