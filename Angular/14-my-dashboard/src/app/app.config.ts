import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,
      withViewTransitions(
        {
          skipInitialTransition: true,
          // onViewTransitionCreated( transitionInfo ){
            //   console.log('onViewTransitionCreated', transitionInfo);
            // }
          }
        )
      ),
      provideHttpClient(),
  ]
};
