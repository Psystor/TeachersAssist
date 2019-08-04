import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PupilsComponent } from './components/pupils/pupils.component';
import { AddComponent } from './components/pupils/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskAddComponent } from './components/tasks/add/add.component';
import { RecordsComponent } from './components/records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    PupilsComponent,
    AddComponent,
    TasksComponent,
    TaskAddComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
