🧱 Gran Dzilam — Backend

Módulo backend del ecosistema digital Gran Dzilam, desarrollado por Totot.
Proporciona los servicios API para el frontend, el CRM, el chatbot y los módulos de inteligencia artificial, garantizando una arquitectura escalable, segura y eficiente.

⚙️ Descripción

El backend gestiona toda la lógica de negocio del proyecto:

Control de usuarios, lotes y cotizaciones.

Integración con el CRM interno.

Comunicación con el chatbot y los servicios de IA generativa.

Administración de datos y seguridad mediante autenticación por tokens.

🧩 Funcionalidades principales

👥 Gestión de usuarios y roles (asesores, administradores, clientes).

🗺️ API para el mapa interactivo (lotes, precios, disponibilidad).

💬 Integración con chatbot inteligente (mensajería, respuestas automáticas).

🧠 Módulo IA: genera descripciones, renders e ideas creativas.

📊 CRM básico: contactos, cotizaciones, seguimiento de leads.

🔐 Autenticación JWT y control de acceso por permisos.

🧾 Endpoints RESTful bien estructurados y documentados.

🏗️ Tecnologías utilizadas

Runtime: Node.js (v18+)

Framework: Express.js

Base de datos: MongoDB (Mongoose ORM)

Autenticación: JSON Web Tokens (JWT)

Servicios externos:

OpenAI API / Replicate / Hugging Face (IA)

SendGrid / Nodemailer (notificaciones)

AWS S3 / Cloudinary (archivos e imágenes)

Testing: Jest + Supertest

Documentación: Swagger / Postman

⚡ Instalación y configuración
1️⃣ Clonar el repositorio
git clone https://github.com/<usuario>/<repo-backend>.git
cd repo-backend

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en la raíz con la siguiente estructura:

PORT=4000
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/grandzilam
JWT_SECRET=tu_clave_secreta
OPENAI_API_KEY=tu_api_key
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
FRONTEND_URL=https://grandzilam.mx

4️⃣ Ejecutar entorno de desarrollo
npm run dev

5️⃣ Desplegar en producción
npm run start

📁 Estructura del proyecto
src/
 ├── config/        # Configuración de base de datos, variables de entorno
 ├── controllers/   # Lógica de cada endpoint
 ├── models/        # Modelos de datos (Mongoose)
 ├── routes/        # Rutas de la API REST
 ├── middleware/    # Autenticación, validaciones, logs
 ├── services/      # Conexión con IA, CRM, Chatbot
 ├── utils/         # Funciones auxiliares
 └── app.js         # Configuración principal del servidor

🧩 Endpoints principales (ejemplo)
Método	Ruta	Descripción
GET	/api/lots	Listar lotes disponibles
POST	/api/quotes	Generar cotización
POST	/api/chat	Interacción con chatbot
POST	/api/ai/generate	Generar contenido IA
GET	/api/users/me	Obtener perfil del usuario
PUT	/api/admin/lots/:id	Actualizar lote (admin)
🧪 Pruebas
npm run test


Ejecuta los tests unitarios y de integración.

🔒 Seguridad y escalabilidad

Validación exhaustiva de datos (Joi / Zod).

Autenticación por tokens y roles.

Control de CORS y cabeceras seguras.

Arquitectura modular, lista para microservicios.

Preparado para despliegue en AWS / Render / Railway.

🧾 Licencia

© 2025 Totot — Proyecto desarrollado para Gran Dzilam.
Uso privado. Todos los derechos reservados.