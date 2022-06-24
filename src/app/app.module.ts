import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TriviaInfoComponent } from './component/trivia-info/trivia-info.component';
import { TriviaTestComponent } from './component/trivia-test/trivia-test.component';
import { AngularMaterialModule } from './modules/material.module';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TriviaInfoComponent,
    TriviaTestComponent,
    SafeHtmlPipe,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
