import { User as FirebaseUser } from 'firebase/auth';

declare module 'firebase/auth' {
  interface User extends FirebaseUser {
    // Ajoutez ici des propriétés personnalisées si nécessaire
  }
}

// Déclaration pour les variables d'environnement
declare namespace NodeJS {
  interface ProcessEnv {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
  }
}
