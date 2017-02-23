import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanoh4 = "51px";


  constructor() {
    this.apellido = "Lema";
    this.nombre = "Santiago";
    console.log("Inició el constructor")
  }

  ngOnInit() {
    this.apellido = "Orquera";
    this.nombre = "Fernando";
    console.log("On Init")
  }

  nombrecompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  hizoclic() {
    console.log("Hizo Click")
  }

  hizofocus()
  {
    console.log("Hizo focus")
  }
}
