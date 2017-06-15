import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {CameraComponent} from './components/camera/camera.component';
import {UserService} from "./services/user.service";
import {DataService} from "./services/data.service";
import {MaterialModule} from "@angular/material";
import {LoginComponent} from './components/login/login.component';
import {SettingsComponent} from './components/settings/settings.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpService} from "./services/http.service";
import {InfoComponent} from './components/info/info.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddItemComponent} from './components/admin/items/add-item/add-item.component';
import {ItemsComponent} from './components/admin/items/items.component';
import {ModelsComponent} from './components/admin/models/models.component';
import {UsersComponent} from './components/admin/users/users.component';
import {AddUserComponent} from './components/admin/users/add-user/add-user.component';
import { EditItemComponent } from './components/admin/items/edit-item/edit-item.component';
import {DeleteComponent} from "./components/admin/delete/delete.component";
import {AdminGuard} from "./guards/admin.guard";
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export function httpFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    CameraComponent,
    LoginComponent,
    SettingsComponent,
    InfoComponent,
    AdminComponent,
    AddItemComponent,
    DeleteComponent,
    ItemsComponent,
    ModelsComponent,
    UsersComponent,
    AddUserComponent,
    EditItemComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    DataService,
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    AdminGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [
    AddUserComponent,
    EditItemComponent,
    DeleteComponent,
    AddItemComponent
  ]
})
export class AppModule {
}
