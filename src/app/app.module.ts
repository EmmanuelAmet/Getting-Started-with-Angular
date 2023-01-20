import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './component/header/header.component';
import {UserListComponent} from "./component/user-list/user-list.component";
import { CounterComponent } from './component/counter/counter.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';
import { IfElseConditionComponent } from './component/if-else-condition/if-else-condition.component';
import { SwitchCaseComponent } from './component/switch-case/switch-case.component';
import { LoopComponent } from './component/loop/loop.component';
import { NestedForLoopComponent } from './component/nested-for-loop/nested-for-loop.component';
import { StyleBindingComponent } from './component/style-binding/style-binding.component';
import { BasicFormComponent } from './component/basic-form/basic-form.component';
import {FormsModule} from "@angular/forms";
import { ToggleElementComponent } from './component/toggle-element/toggle-element.component';
import { BootstrapComponent } from './component/bootstrap/bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiComponent } from './component/material-ui/material-ui.component';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        UserListComponent,
        UserListComponent,
        CounterComponent,
        PropertyBindingComponent,
        IfElseConditionComponent,
        SwitchCaseComponent,
        LoopComponent,
        NestedForLoopComponent,
        StyleBindingComponent,
        BasicFormComponent,
        ToggleElementComponent,
        BootstrapComponent,
        MaterialUiComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
