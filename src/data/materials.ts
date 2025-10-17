export interface Material {
  id: number;
  title: string;
  description: string;
  type: 'CAPÍTULO' | 'SIMULADOR' | 'MULTIMEDIA' | 'EJERCICIOS' | string;
  subject: string;
  grade: string;
  isAI: boolean;
  date: string;
  video?: string;
  pdf?: string;
  podcast?: string; // Nuevo: ruta a archivo mp4 (podcast) específico del capítulo
  concepts: string[];
  recommendedUse: string;
}

// Enlaces de video y PDF por material
const videoLinks: Record<number, string> = {
  1: '/docs/Videos/video-inicio-(Creatividad-Cap1).mp4', // Video local en /public/docs
  2: '',
  3: '/docs/Videos/alfabetizacin-digital-Cap3.mp4', // Video local en /public/docs
  4: '/docs/Videos/pensamiento-crtico-Cap4.mp4', // Video local en /public/docs
  5: '/docs/Videos/Tiempo-autónomo-CAP5.mp4', // Video local en /public/docs
  6: '/docs/Videos/colaboracion-Cap6.mp4', // Video local en /public/docs
};

// Enlaces a podcasts (archivos mp4 con audio – “Podcast de cada capitulo”)
// Se codifican espacios y acentos para robustez en servidores estáticos.
const podcastLinks: Record<number, string> = {
  1: '/docs/Podcast%20de%20cada%20capitulo/Creatividad_Cap1.mp4',
  2: '/docs/Podcast%20de%20cada%20capitulo/Marco_educativo_para_integrar_la_IAGen_en_la_docencia_universit_CAP2.mp4',
  3: '/docs/Podcast%20de%20cada%20capitulo/Alfabetizaci%C3%B3n_en_IAGen%20Cap%203.mp4',
  4: '/docs/Podcast%20de%20cada%20capitulo/Pensamiento_Cr%C3%ADtico__Cap4.mp4',
  5: '/docs/Podcast%20de%20cada%20capitulo/Aut%C3%B3nomo__Cap5.mp4',
  6: '/docs/Podcast%20de%20cada%20capitulo/Colaboraci%C3%B3n_(Trabajo%20colaborativo)Cap6.mp4',
};

const pdfLinks: Record<number, string> = {
  // Disponibles físicamente en /public/docs: 2, 3, 4, 5, 6 (notar acentos en algunos archivos)
  1: '',
  2: '/docs/Capitulo2.pdf',
  3: '/docs/Capitulo3.pdf',
  // Archivos en disco: Cápitulo4.pdf (con tilde en la A) y Capítulo5.pdf (tilde en la i)
  4: '/docs/C%C3%A1pitulo4.pdf', // encodeURI('Cápitulo4.pdf')
  5: '/docs/Cap%C3%ADtulo5.pdf', // encodeURI('Capítulo5.pdf')
  6: '/docs/Capitulo6.pdf',
};

export const materials: Material[] = [
  {
    id: 1,
    title: 'Capítulo 1 - Creatividad',
    description:
      'Guía para diseñar experiencias colaborativas en el aula integrando IA generativa como miembro activo del equipo.',
    type: 'CAPÍTULO',
    subject: 'Educación universitaria / Transversal',
    grade: 'N/A',
    isAI: true,
    date: 'Hace 3 días',
    video: videoLinks[1],
    pdf: pdfLinks[1],
    podcast: podcastLinks[1],
    concepts: [
      'Roles colaborativos de la IA',
      'Ciclo de integración en el aula',
      'Evaluación del trabajo colaborativo',
      'Ejemplos por disciplina',
      'Competencias desarrolladas',
    ],
    recommendedUse:
      'Diseño de clases activas, proyectos grupales, formación docente en innovación educativa',
  },
  {
    id: 2,
    title: 'Capítulo 2 - Ciclo de Experiencias de Aprendizaje con IAGen',
    description:
      'Modelo paso a paso para diseñar, ejecutar y evaluar experiencias de aprendizaje universitarias integrando IA generativa como mediador pedagógico.',
    type: 'CAPÍTULO',
    subject: 'Educación universitaria / Transversal',
    grade: 'N/A',
    isAI: true,
    date: 'Hace 1 semana',
    video: videoLinks[2],
    pdf: pdfLinks[2],
    podcast: podcastLinks[2],
    concepts: [
      'Diagnóstico inicial de habilidades',
      'Planificación didáctica con IA',
      'Ejecución y monitoreo del aprendizaje',
      'Reflexión y asimilación de aprendizajes',
      'Evaluación del ciclo completo',
    ],
    recommendedUse:
      'Diseño de clases activas, formación docente, rediseño curricular con enfoque en competencias digitales',
  },
  {
    id: 3,
    title: 'Capítulo 3 - Alfabetización Digital en IAGen',
    description:
      'Guía práctica para desarrollar competencias en el uso ético, crítico y efectivo de herramientas de IA generativa en la educación superior.',
    type: 'CAPÍTULO',
    subject: 'Educación universitaria / Transversal',
    grade: 'N/A',
    isAI: false,
    date: 'Hace 5 días',
    video: videoLinks[3],
    pdf: pdfLinks[3],
    podcast: podcastLinks[3],
    concepts: [
      'Alfabetización digital en IAGen',
      'Uso ético y crítico de IA',
      'Diseño de prompts efectivos',
      'Evaluación de sesgos y limitaciones',
      'Ciclo de integración en el aula',
    ],
    recommendedUse:
      'Formación docente, introducción a IA en asignaturas, desarrollo de competencias digitales',
  },
  {
    id: 4,
    title: 'Capítulo 4 - Pensamiento Crítico',
    description:
      'Explora el desarrollo del pensamiento crítico en contextos universitarios mediante el uso de IA generativa. Presenta estrategias para fomentar el análisis, la argumentación y la toma de decisiones informadas, integrando la IA como herramienta para enriquecer debates, evaluar posturas y promover la reflexión ética.',
    type: 'CAPÍTULO',
    subject: 'Química',
    grade: '5° Secundaria',
    isAI: true,
    date: 'Hace 6 días',
    video: videoLinks[4],
    pdf: pdfLinks[4],
    podcast: podcastLinks[4],
    concepts: ['Reacciones químicas', 'Simulación interactiva'],
    recommendedUse: 'Laboratorio virtual, prácticas de química',
  },
  {
    id: 5,
    title: 'Capítulo 5 - Trabajo Autónomo',
    description:
      'Propone un enfoque para fortalecer el trabajo autónomo en estudiantes universitarios con apoyo de IA generativa. Detalla fases de planificación, ejecución y evaluación individual, destacando el rol de la IA en la organización de tareas, generación de ideas, retroalimentación personalizada y mejora continua del aprendizaje.',
    type: 'CAPÍTULO',
    subject: 'Historia',
    grade: '3° Secundaria',
    isAI: true,
    date: 'Hace 3 días',
    video: videoLinks[5],
    pdf: pdfLinks[5],
    podcast: podcastLinks[5],
    concepts: ['Revolución Industrial', 'Línea de tiempo', 'Mapas interactivos'],
    recommendedUse: 'Clases de historia, recursos multimedia',
  },
  {
    id: 6,
    title: 'Capítulo 6 - Trabajo Colaborativo',
    description:
      'Guía práctica para integrar la IA generativa como miembro activo en equipos de trabajo colaborativo universitario. Propone un ciclo de planificación, ejecución y evaluación centrado en habilidades como co-creación, pensamiento crítico y comunicación, con énfasis en el rol ético y estratégico de la IA en procesos de aprendizaje compartido.',
    type: 'CAPÍTULO',
    subject: 'Educación universitaria / Transversal',
    grade: 'N/A',
    isAI: true,
    date: 'Hace 2 días',
    video: videoLinks[6],
    pdf: pdfLinks[6],
    podcast: podcastLinks[6],
    concepts: [
      'Rúbricas asistidas por IA',
      'Retroalimentación formativa',
      'Evidencias de aprendizaje',
      'Ética y transparencia en evaluación',
    ],
    recommendedUse:
      'Evaluación de cursos, diseño de rúbricas, formación docente en retroalimentación efectiva',
  },
];

export function getMaterialById(id: number): Material | undefined {
  return materials.find((m) => m.id === id);
}
