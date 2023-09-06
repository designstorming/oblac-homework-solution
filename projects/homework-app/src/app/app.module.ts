import { ScrollingModule } from '@angular/cdk/scrolling';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { DeviceComponent } from '@homework-lib/components/device';
import { DeviceParameterComponent } from '@homework-lib/components/device-parameter';
import { ContentTypeInterceptor, HttpStatusInterceptor } from '@homework-lib/interceptors';
import { DevicesFacade, ParametersFacade, appEffects, appStore } from '@homework-lib/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot(appEffects),
    ReactiveFormsModule,
    HttpClientModule,
    DeviceParameterComponent,
    DeviceComponent,
    ScrollingModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: ContentTypeInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpStatusInterceptor,
      multi: true
    },
    DevicesFacade,
    ParametersFacade,
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
