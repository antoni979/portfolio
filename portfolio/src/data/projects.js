export const projectsData = [
  {
    slug: "nexus-intranet",
    title: "Intranet Corporativa 'Nexus'",
    description: "Plataforma integral de gestión de RRHH que centraliza y automatiza operaciones clave: fichajes, vacaciones, bolsa de horas, y más, optimizando la productividad y transparencia.",
    images: [
      "intranet.jpg",
      "intranet2.jpg",
      "intranet3.jpg"
    ],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: null,
    details: {
      problem: "La empresa gestionaba las horas, vacaciones y documentos de forma manual a través de hojas de cálculo y emails, lo que generaba errores, pérdida de tiempo y falta de una fuente única de verdad para los empleados.",
      solution: "Desarrollé una intranet a medida que centraliza toda la información. Los empleados tienen un portal personal para sus gestiones, y RRHH un potente panel de administración para supervisar y generar informes. La automatización de la bolsa de horas y el cálculo de horas extra eliminó el 90% del trabajo manual.",
      challenges: "El mayor desafío fue diseñar una base de datos escalable en PostgreSQL que gestionara las complejas reglas de negocio de la bolsa de horas y los diferentes tipos de contratos. Implementar un sistema de notificaciones en tiempo real para aprobaciones también fue un reto técnico interesante."
    }
  },
  {
    slug: "inspectify-pwa",
    title: "Inspectify - PWA de Auditoría",
    description: "Solución PWA para auditores que digitaliza el registro de incidencias. Permite capturar fotos y genera dinámicamente planos con un sistema de semáforos para visualizar la gravedad y ubicación de cada golpe.",
    images: [
      "placeholder.png" // Reemplaza esto con tus imágenes reales
    ],
    tags: ["PWA", "React", "Supabase", "Cloudinary CDN", "SVG Dinámico"],
    githubUrl: "#",
    liveUrl: "#",
    details: {
      problem: "Los auditores realizaban inspecciones en papel, tomando fotos con sus móviles y luego pasando horas en la oficina transcribiendo datos y creando informes manualmente, un proceso lento y propenso a errores.",
      solution: "Creé una PWA que funciona offline, permitiendo a los auditores registrar incidencias con fotos directamente en el almacén. Al volver a tener conexión, los datos se sincronizan con una base de datos en Supabase. La función más valorada es la generación automática de informes en PDF con planos SVG dinámicos que marcan visualmente cada incidencia.",
      challenges: "La generación de SVG dinámicos a partir de coordenadas y su correcta visualización en el PDF fue el principal reto. Optimizar la subida de imágenes en segundo plano para no interrumpir al usuario y asegurar la funcionalidad offline con Service Workers requirió una planificación cuidadosa."
    }
  },
  {
    slug: "nutrisuite-saas",
    title: "NutriSuite - SaaS para Nutricionistas",
    description: "Potente SaaS que moderniza la consulta de nutricionistas. Centraliza la gestión de clientes, facturación (con Stripe) y seguimiento de progreso (peso, fotos). Incluye IA para análisis y recomendaciones personalizadas.",
    images: [
        "placeholder.png" // Reemplaza esto con tus imágenes reales
    ],
    tags: ["SaaS", "Next.js", "Stripe API", "IA (OpenAI)", "Prisma"],
    githubUrl: null,
    liveUrl: null,
    details: {
      problem: "Los nutricionistas independientes utilizaban múltiples herramientas inconexas (agenda, Excel para dietas, WhatsApp para seguimiento), lo que dificultaba la gestión eficiente de una base de clientes en crecimiento.",
      solution: "NutriSuite ofrece una solución 'todo en uno'. Desde un panel de control, el profesional gestiona citas, crea planes de nutrición, procesa pagos recurrentes con Stripe y visualiza el progreso de cada cliente con gráficos interactivos. La integración con la API de OpenAI permite generar sugerencias de recetas basadas en las preferencias del cliente.",
      challenges: "Integrar la pasarela de pagos de Stripe de forma segura y gestionar las suscripciones fue un gran desafío. Además, asegurar la privacidad y protección de los datos sensibles de los pacientes (RGPD) fue una prioridad absoluta durante todo el desarrollo, implementando encriptación y roles de acceso estrictos."
    }
  },
];