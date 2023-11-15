import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { TiendasComponent } from './pages/tiendas/tiendas.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { DeleteLocationComponent } from './delete-location/delete-location.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { EditarTiendasComponent } from './pages/tiendas/editar-tiendas/editar-tiendas.component';
import { EliminarTiendasComponent } from './pages/tiendas/eliminar-tiendas/eliminar-tiendas.component';
import { CrearTiendasComponent } from './pages/tiendas/crear-tiendas/crear-tiendas.component';
import { ListarTiendasComponent } from './pages/tiendas/listar-tiendas/listar-tiendas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    EditarProductosComponent,
    TiendasComponent,
    EditLocationComponent,
    CreateLocationComponent,
    DeleteLocationComponent,
    LocationTableComponent,
    LocationMapComponent,
    EditarTiendasComponent,
    EliminarTiendasComponent,
    CrearTiendasComponent,
    ListarTiendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
