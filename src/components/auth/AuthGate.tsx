import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { GoogleIcon } from './Icons';
import { motion } from 'framer-motion';

export const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        >
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Bienvenue sur XPeng Media
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Connectez-vous pour accéder à vos favoris
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={signInWithGoogle}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <GoogleIcon className="h-5 w-5 text-white" />
            </span>
            Se connecter avec Google
          </motion.button>
          
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            En vous connectant, vous acceptez nos conditions d'utilisation
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};

// Composant pour l'icône Google
export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path
        fill="#4285F4"
        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.28426 53.749 C -8.52426 55.229 -9.244 56.519 -10.354 57.329 L -10.354 60.529 L -6.282 60.529 C -4.446 58.889 -3.264 55.709 -3.264 51.509 Z"
      />
      <path
        fill="#34A853"
        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.282 60.529 L -10.354 57.329 C -11.444 58.049 -12.894 58.489 -14.754 58.489 C -17.514 58.489 -19.894 56.599 -20.844 54.059 L -24.994 54.059 L -24.994 57.329 C -22.484 62.229 -17.404 63.239 -14.754 63.239 Z"
      />
      <path
        fill="#FBBC05"
        d="M -20.844 54.059 C -21.144 53.159 -21.334 52.199 -21.334 51.239 C -21.334 50.279 -21.144 49.319 -20.844 48.419 L -20.844 45.149 L -24.994 45.149 C -26.084 47.269 -26.704 49.669 -26.704 52.109 C -26.704 54.549 -26.084 56.949 -24.994 59.069 L -20.844 54.059 Z"
      />
      <path
        fill="#EA4335"
        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.014 42.099 C -8.284 40.029 -11.514 38.739 -14.754 38.739 C -17.404 38.739 -20.484 39.989 -22.494 42.099 L -26.704 38.239 C -22.484 34.239 -16.404 32.109 -9.664 34.239 C -3.524 36.239 0.985999 41.689 0.985999 49.239 C 0.985999 51.239 0.616 53.239 -0.334 55.239 L -9.154 45.239 C -10.404 43.989 -12.414 43.989 -14.754 43.989 Z"
      />
    </g>
  </svg>
);
