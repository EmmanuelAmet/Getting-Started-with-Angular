import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
        ToggleElementComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
