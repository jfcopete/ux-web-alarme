import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    const matIconRegistry = appRef.injector.get(MatIconRegistry);
    const domSanitizer = appRef.injector.get(DomSanitizer);
    // Registrar un icono personalizado
    matIconRegistry.addSvgIcon(
      'facebook',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/facebook.svg')
    );
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/instagram.svg')
    );
    matIconRegistry.addSvgIcon(
      'twitter',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/twitter.svg')
    );
    matIconRegistry.addSvgIcon(
      'youtube',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/youtube.svg')
    );
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('icons/linkedin.svg')
    );
  })
  .catch((err) => console.error(err));
