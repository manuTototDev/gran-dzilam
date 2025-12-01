import Head from 'next/head';
import Link from 'next/link';

export default function AvisoDePrivacidad() {
  return (
    <>
      <Head>
        <title>Aviso de privacidad | Gran Dzilam</title>
        <meta
          name="description"
          content="Conoce cómo Gran Dzilam protege y utiliza tus datos personales."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 lg:py-14">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-amber-200 transition hover:text-amber-100"
            >
              ← Volver al inicio
            </Link>
            <p className="text-sm uppercase tracking-[0.25rem] text-amber-200/80">
              Gran Dzilam
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Aviso de privacidad
            </h1>
            <p className="text-sm text-slate-300">Última actualización: julio 2024</p>
          </div>

          <div className="space-y-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Responsable del tratamiento</h2>
              <p className="text-base text-slate-200">
                Gran Dzilam, como responsable de los datos personales que
                recopilamos, garantiza el uso legítimo, controlado e informado de
                tu información conforme a la legislación aplicable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Datos que recopilamos</h2>
              <p className="text-base text-slate-200">
                Podemos solicitar datos de identificación y contacto (nombre,
                correo electrónico, teléfono), así como información relativa a
                proyectos inmobiliarios o solicitudes de cotización cuando sea
                necesario para responder tus consultas.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Finalidades del tratamiento</h2>
              <ul className="space-y-2 text-base text-slate-200">
                <li>Dar seguimiento a solicitudes de información y cotizaciones.</li>
                <li>Establecer comunicación comercial o técnica cuando la solicites.</li>
                <li>Cumplir obligaciones legales relacionadas con nuestros servicios.</li>
                <li>Mejorar la experiencia en nuestros canales digitales.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Derechos ARCO</h2>
              <p className="text-base text-slate-200">
                Puedes ejercer tus derechos de acceso, rectificación, cancelación
                u oposición enviando un correo a{' '}
                <a
                  href="mailto:privacidad@gran-dzilam.mx"
                  className="font-semibold text-amber-200 underline decoration-amber-200/60 underline-offset-4 hover:text-amber-10"
                >
                  privacidad@gran-dzilam.mx
                </a>
                . También puedes revocar consentimientos otorgados en cualquier
                momento.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Transferencias y resguardo</h2>
              <p className="text-base text-slate-200">
                No transferimos tus datos personales a terceros sin tu
                autorización, salvo cuando sea requerido por ley o necesario para
                la prestación de servicios contratados. Implementamos medidas de
                seguridad administrativas, técnicas y físicas para proteger tu
                información.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Uso de cookies</h2>
              <p className="text-base text-slate-200">
                Utilizamos cookies para recordar tus preferencias y mejorar la
                navegación. Puedes aceptar todas o limitarte a las cookies
                esenciales desde el banner de consentimiento o configurando tu
                navegador.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-amber-100">Conservación y contacto</h2>
              <p className="text-base text-slate-200">
                Conservaremos tus datos únicamente mientras sean necesarios para
                las finalidades descritas y conforme a los plazos legales
                aplicables. Para cualquier duda o solicitud adicional, escribe a{' '}
                <a
                  href="mailto:hola@gran-dzilam.mx"
                  className="font-semibold text-amber-200 underline decoration-amber-200/60 underline-offset-4 hover:text-amber-10"
                >
                  hola@gran-dzilam.mx
                </a>
                , indicando el derecho que deseas ejercer y un medio de contacto
                para recibir respuesta.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
