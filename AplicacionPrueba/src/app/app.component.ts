import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";

  error:string ="No hay errores";

  nuevaTienda: any = {};


  constructor(private _http: Http, private _masterURL: MasterURLService) {
    this.apellido = "Lema";
    this.nombre = "Santiago";
    console.log("Inició el constructor")
  }

  ngOnInit() {
    this.apellido = "Orquera";
    this.nombre = "Fernando";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick() {
    console.log("Hizo Click");
    console.log()
  }

  hizoFocus() {
    console.log("Hizo focus");
  }


  crearTienda(formulario) {
    console.log(formulario);
    this._http
      .post(this._masterURL.url+"Tienda", {
        nombre: formulario.value.nombre

      }).subscribe(
      (res)=>{
        console.log("No hubo errores");
        console.log (res);
        this.nuevaTienda = {}
      },
      (err)=>
      {
        console.log("Ocurrió un error", err);
      },
      ()=>
      {
        console.log("Terminó la función")
      }

      );
  }
}
