import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"demo64pw","appId":"1:352659180846:web:b2327cca0d04920f25bebf","storageBucket":"demo64pw.appspot.com","apiKey":"AIzaSyCBS1YPE1oYbQXWabSUrZvdNKC_Dz8TrfY","authDomain":"demo64pw.firebaseapp.com","messagingSenderId":"352659180846"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
