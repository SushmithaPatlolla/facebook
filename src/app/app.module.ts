import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import {CookieService} from 'ngx-cookie-service';
import { AuthinterceptorService } from './authinterceptor.service';
import { ButtonComponent } from './component/button/button.component';
import { AuuthGuard } from './auuth.guard';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostdetailComponent } from './postdetail/postdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    PostComponent,
    ButtonComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent,canActivate:[AuuthGuard]},
      {path:'post', component:PostComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'post/:title', component:PostdetailComponent},
    ]),
    HttpClientModule,
    FormsModule, 
  ],
  providers: [CookieService, AuuthGuard, AuthinterceptorService,{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthinterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
