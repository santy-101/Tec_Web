import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
import {NgForRow} from "@angular/common/src/directives/ng_for";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Bienvenido a Ingresar Tiendas";

  nuevaTienda = {};
  tiendasss = [];
  disabledButtons =
    {
      NuevaTiendaFormSubmitButton : false
    };

  constructor(private _http: Http, private _masterURL: MasterURLService) {

  }

  ngOnInit() {
    this._http.get(this._masterURL.url+"Tienda")
      .subscribe(
        (res:Response)=>
        {

          this.tiendasss = res.json();
        },
        (err)=>
        {
          console.log(err)
        }
      )
  }


  crearTienda(formulario: NgForm) {
    this.disabledButtons.NuevaTiendaFormSubmitButton = true;
    console.log(formulario);
    this._http
      .post(this._masterURL.url+"Tienda", {
        nombre: formulario.value.nombre

      }).subscribe(
      (res)=>{
        console.log("No hubo errores");
        console.log (res);
        this.nuevaTienda = {};
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      (err)=>
      {
        console.log("Ocurrió un error", err);
        this.disabledButtons.NuevaTiendaFormSubmitButton = false;
      },
      ()=>
      {
        console.log("Terminó la función")
      }

      );
  }
}
