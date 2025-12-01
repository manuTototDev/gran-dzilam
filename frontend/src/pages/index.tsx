import Head from 'next/head';
import Link from 'next/link';
import { CookieBanner } from '@/components/CookieBanner';
import { HealthStatus } from '@/components/HealthStatus';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gran Dzilam</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-50">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.25rem] text-amber-200/80">
              Gran Dzilam
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Plataforma de monitoreo y gestión
            </h1>
          </div>
          <Link
            href="/aviso-de-privacidad"
            className="rounded-full border border-amber-300/70 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:text-amber-50"
          >
            Aviso de privacidad
          </Link>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16">
          <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25rem] text-amber-200">
                Salud del proyecto
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Supervisión en tiempo real del backend
              </h2>
              <p className="text-lg text-slate-200">
                Observa el estado de los servicios críticos y actúa rápidamente
                con información confiable. Este panel mantiene visibilidad sobre
                la infraestructura técnica que respalda Gran Dzilam.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">Health checks</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">Monitoreo continuo</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">Alertas preventivas</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-inner">
              <HealthStatus />
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25rem] text-amber-200/80">
                Cotizar macro terreno
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Solicita un estimado preliminar para tu proyecto inmobiliario
              </h3>
              <p className="text-base text-slate-200">
                Comparte la dimensión del terreno, ubicación y necesidades clave
                para recibir una representación inicial de costos y
                disponibilidad. Nuestro equipo revisará tu solicitud y dará
                seguimiento personalizado.
              </p>
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="text-sm font-semibold text-amber-100">
                  Importante
                </p>
                <p className="text-sm leading-relaxed text-slate-200">
                  Esta estimación es una representación informativa y no
                  constituye una oferta oficial o legal. Los montos y términos
                  finales se confirmarán tras un análisis completo con nuestro
                  equipo comercial.
                </p>
                <p className="text-xs text-amber-200">
                  El cálculo preliminar no sustituye una propuesta formal, está
                  sujeto a validación técnica y a la firma de acuerdos
                  comerciales.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="mailto:hola@gran-dzilam.mx?subject=Cotizaci%C3%B3n%20macro%20terreno"
                  className="rounded-xl bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-amber-200"
                >
                  Enviar detalles por correo
                </Link>
                <Link
                  href="tel:+521234567890"
                  className="rounded-xl border border-amber-200/70 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:text-amber-50"
                >
                  Llamar al equipo comercial
                </Link>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h4 className="text-lg font-semibold">Información recomendada</h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Superficie aproximada y uso previsto del terreno
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Ubicación, accesos principales y restricciones relevantes
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Servicios requeridos (infraestructura, urbanización, energía)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Horizonte de tiempo y disponibilidad de inversión
                </li>
              </ul>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25rem] text-amber-200/80">
                Protección de datos
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Transparencia y control sobre tu información
              </h3>
              <p className="text-base text-slate-200">
                Consulta nuestro aviso de privacidad para conocer cómo
                protegemos tus datos, las bases legales de uso y tus derechos
                para solicitar aclaraciones o eliminar información.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/aviso-de-privacidad"
                  className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
                >
                  Leer aviso de privacidad
                </Link>
                <Link
                  href="mailto:privacidad@gran-dzilam.mx"
                  className="rounded-xl border border-amber-200/70 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:text-amber-50"
                >
                  Contactar por datos personales
                </Link>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <h4 className="text-lg font-semibold">Tus controles</h4>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Solicitar acceso, rectificación o eliminación de tus datos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Limitar el uso de datos para fines de marketing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  Revocar consentimientos otorgados cuando lo desees
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800 bg-slate-950/60 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-400 md:flex-row">
            <span>© {new Date().getFullYear()} Gran Dzilam. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <Link
                href="/aviso-de-privacidad"
                className="font-semibold text-amber-200 transition hover:text-amber-100"
              >
                Aviso de privacidad
              </Link>
              <Link
                href="mailto:hola@gran-dzilam.mx"
                className="transition hover:text-slate-200"
              >
                Contacto
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <CookieBanner />
    </>
  );
}
