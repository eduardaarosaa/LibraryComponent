import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponenteComponent } from './botao-componente/botao-componente.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponenteComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
