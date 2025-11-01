🌿 Gran Dzilam — Frontend

Interfaz web interactiva desarrollada para Gran Dzilam, un proyecto inmobiliario sustentable.
Este módulo contiene el frontend de la plataforma, donde los usuarios pueden explorar terrenos, simular inversiones y interactuar con el chatbot y el CRM integrados.

🧠 Descripción

El frontend está diseñado para ofrecer una experiencia inmersiva, clara y estética, conectando tecnología, arte e inteligencia artificial.
Permite navegar en un mapa interactivo 2D, visualizar datos en tiempo real y comunicarse con el sistema mediante un asistente inteligente.

🧩 Características principales

🗺️ Mapa interactivo 2D para explorar y seleccionar terrenos.

💰 Simulador dinámico de precios (enganche, plazo, tipo de lote).

💬 Chatbot integrado para acompañar al usuario durante todo el proceso.

📱 Diseño responsive optimizado para desktop, tablet y móvil.

⚡ Interfaz conectada al backend vía API REST (Node.js / Express).

🎨 UI basada en principios de usabilidad y diseño emocional.

🏗️ Tecnologías utilizadas

Framework: React / Next.js

Librerías:

Zustand / Redux (gestión de estado)

Axios (comunicación con API)

React Router / Next Router

TailwindCSS (estilos)

Framer Motion (animaciones)

Leaflet / Mapbox (mapa interactivo)

Integraciones:

API del backend (CRM, IA y Chatbot)

WebSocket / Socket.io para respuestas en tiempo real

⚙️ Instalación y uso
1️⃣ Clonar el repositorio
git clone https://github.com/<usuario>/<repo-frontend>.git
cd repo-frontend

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env.local en la raíz con los siguientes valores:

NEXT_PUBLIC_API_URL=https://api.grandzilam.mx
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_CHATBOT_URL=https://api.grandzilam.mx/chat

4️⃣ Ejecutar entorno de desarrollo
npm run dev

5️⃣ Compilar para producción
npm run build
npm start

📁 Estructura del proyecto
src/
 ├── components/      # Componentes reutilizables (UI, botones, modales)
 ├── pages/           # Rutas principales del sitio
 ├── hooks/           # Lógica reutilizable (estado, API)
 ├── context/         # Contextos globales
 ├── services/        # Conexión con APIs (CRM, chatbot, IA)
 ├── assets/          # Imágenes, íconos y recursos estáticos
 ├── styles/          # Configuración de Tailwind y estilos globales
 └── utils/           # Funciones auxiliares

🧩 Integración con backend

El frontend se conecta al backend mediante una API REST que provee:

Datos de terrenos y precios

Gestión de usuarios y cotizaciones

Interfaz con el CRM y chatbot

Llamadas a módulos de inteligencia artificial

🧪 Pruebas

Ejecutar las pruebas unitarias y de integración:

npm run test

📜 Licencia

© 2025 Totot — Proyecto desarrollado para Gran Dzilam.
Uso interno y privado. Todos los derechos reservados.