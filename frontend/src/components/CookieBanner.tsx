import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_STORAGE_KEY = 'gd-cookie-consent';

type ConsentLevel = 'all' | 'essential';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(
      CONSENT_STORAGE_KEY,
    ) as ConsentLevel | null;
    if (!storedConsent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (level: ConsentLevel) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, level);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-slate-700 bg-slate-800/95 p-4 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-3 text-left md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-50">
            Uso de cookies
          </p>
          <p className="text-sm text-slate-200">
            Utilizamos cookies para mejorar la experiencia y recordar tus
            preferencias. Puedes aceptar todas o limitarte a las cookies
            esenciales. Selecciona una opción para continuar navegando o ajusta
            tus preferencias más adelante limpiando las cookies del navegador.
            Consulta el{' '}
            <Link
              href="/aviso-de-privacidad"
              className="font-semibold text-amber-300 underline decoration-amber-200/70 decoration-2 underline-offset-4 hover:text-amber-200"
            >
              aviso de privacidad
            </Link>{' '}
            para más detalles.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <button
            type="button"
            onClick={() => handleConsent('essential')}
            className="rounded-xl border border-amber-200/60 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:text-amber-50"
          >
            Aceptar solo esenciales
          </button>
          <button
            type="button"
            onClick={() => handleConsent('all')}
            className="rounded-xl bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-amber-200"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
