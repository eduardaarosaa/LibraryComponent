import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponenteComponent } from './botao-componente/botao-componente.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponenteComponent,
    MenuNavComponent,
    InputComponentComponent,
    AlbumComponentComponent,
    NavBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
