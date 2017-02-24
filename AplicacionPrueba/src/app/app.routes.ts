import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TiendaComponent} from "./tienda/tienda.component";
import {ProductoComponent} from "./producto/producto.component";
export const routes: Routes = [
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: 'home', component: HomeComponent
    }
    ,
    {
      path: 'tienda', component: TiendaComponent
    },
    {
      path: 'producto/:idProducto', component: ProductoComponent
    }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
