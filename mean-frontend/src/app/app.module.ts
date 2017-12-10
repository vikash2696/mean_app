import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/primeng';
import { UserService } from './services/user.service';
import { RouterModule , Routes}  from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


const routes : Routes  = [{
  path:'users',
  component : UserComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,DataTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
