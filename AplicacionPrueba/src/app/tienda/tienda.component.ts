import { Component, OnInit } from '@angular/core';

import {MasterURLService} from "../services/master-url.service";
import {Response, Http} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda = {};
  tiendasss = [];
  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Tienda")
      .subscribe(
        (res: Response) => {
          this.tiendasss = res.json().
          map((value)=>
          {
            value.formularioCerrado = true;
            return value;
          });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearTienda(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Tienda", {
      nombre: formulario.value.nombre
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.tiendasss.push(res.json());
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );


    //
    // .post("http://localhost:1337/Tienda", formulario.valores)
    // .subscribe(
    //   res=>console.log('Respuesta: ',res),
    //   err=>console.log('Error: ',err),
    //   ()=>{
    //     console.log("Se completo la accion")
    //   }
    // );
  }

  borrarTienda(id: number) {
    this._http.delete(this._masterURL.url + "Tienda/" + id)
      .subscribe(
        (res) => {
          let tiendaBorrada = res.json();
          this.tiendasss = this.tiendasss.filter(value => tiendaBorrada.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarTienda(tiendita: any) {
    let parametos = {
      nombre: tiendita.nombre
    };
    this._http.put(this._masterURL.url + "Tienda/" + tiendita.id, parametos)
      .subscribe(
        (res: Response) => {
          tiendita.formularioCerrado = !tiendita.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }


}
