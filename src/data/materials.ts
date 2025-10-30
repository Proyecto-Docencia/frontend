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
  inlineHtml?: string; // Contenido HTML inline que se mostrará independientemente de la existencia del PDF
  concepts: string[];
  recommendedUse: string;
}

// Enlaces de video y PDF por material
const videoLinks: Record<number, string> = {
  1: '', // Video local en /public/docs
  2: '',
  3: '/docs/Videos/alfabetizacin-digital-Cap3.mp4', 
  4: '/docs/Videos/pensamiento-crtico-Cap4.mp4', 
  5: '/docs/Videos/Tiempo-autónomo-CAP5.mp4', 
  6: '/docs/Videos/colaboracion-Cap6.mp4', 
  7: '/docs/Videos/Creatividad-(CAP7).mp4', 
};

// Enlaces a podcasts (archivos mp4 con audio – “Podcast de cada capitulo”)
const podcastLinks: Record<number, string> = {
  1: '',
  2: '/docs/Podcast%20de%20cada%20capitulo/Marco_educativo_para_integrar_la_IAGen__(CAP2).mp4',
  3: '/docs/Podcast%20de%20cada%20capitulo/Alfabetizaci%C3%B3n_en_IAGen%20Cap%203.mp4',
  4: '/docs/Podcast%20de%20cada%20capitulo/Pensamiento_Cr%C3%ADtico__Cap4.mp4',
  5: '/docs/Podcast%20de%20cada%20capitulo/Aut%C3%B3nomo__Cap5.mp4',
  6: '/docs/Podcast%20de%20cada%20capitulo/Colaboraci%C3%B3n_(Trabajo%20colaborativo)Cap6.mp4',
  7: '/docs/Podcast%20de%20cada%20capitulo/Creatividad_Aumentada_(CAP7).mp4',
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
  7: '', //Falta el PDF físico capitulo 7
};

export const materials: Material[] = [
  {
    id: 1,
    title: 'Capítulo 1 - Faltante',
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
    inlineHtml: `
      <h2>Capítulo 2.- Ciclo de Experiencias de Aprendizaje mediadas con IAGen en la educación Superior</h2>
      <p>El ciclo de experiencias de aprendizaje mediadas con IAGen (Inteligencia Artificial Generativa) orienta el trabajo educativo que los académicos deben desarrollar para lograr una docencia efectiva en la integración de la IAGen en su asignatura. Busca que las experiencias de aprendizaje implementadas contribuyan al logro de los resultados de aprendizaje de su programa y estén alineadas con el perfil de egreso de la carrera a la cual pertenece.</p>

      <p>Las etapas del ciclo, descritas a continuación de manera global, son una orientación que debe replicarse para cada una de las habilidades desarrolladas en este marco educativo:</p>
      <ul>
        <li>Alfabetización digital.</li>
        <li>Pensamiento crítico.</li>
        <li>Trabajo autónomo.</li>
        <li>Colaboración.</li>
        <li>Creatividad.</li>
      </ul>

      <h3>Etapa 1.- Identificar la Experiencia de Aprendizaje</h3>
      <p><strong>Preguntas clave:</strong></p>
      <p>¿Cuál es el estado inicial personal y de mi curso?</p>
      <p>¿Cuál es la experiencia de aprendizaje que necesito desarrollar en mi asignatura que puede ser mediada positivamente con el uso de la IAGen?</p>
      <p><strong>Descripción:</strong> En esta fase, el académico (como facilitador) debe reflexionar para identificar el estado o las necesidades a desarrollar en sí mismo y en sus estudiantes con relación a cada habilidad. Esta etapa consiste en realizar un diagnóstico para explorar y definir cómo la IAGen puede ser un catalizador o mediador de aprendizaje. A partir de esta autoevaluación, el académico identifica el desafío o acción necesaria y define qué hará. Este ejercicio reflexivo levantará un estado inicial en cada habilidad de los cursos que lidere. El diagnóstico debe permitir que el desafío contemple las fortalezas y debilidades personales y las de sus estudiantes, para abordar integralmente el trabajo a realizar. La integración de tecnología en el proceso de enseñanza debe ser paso a paso y en conjunto con los estudiantes, buscando rediseñar y transformar el proceso.</p>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_1_CAP2.png" alt="Esquema Etapa 1" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <h3>Etapa 2.- Planificar la experiencia de aprendizaje</h3>
      <p><strong>Pregunta clave:</strong></p>
      <p>¿Cómo será el paso a paso de la experiencia de enseñanza y aprendizaje?</p>
      <p><strong>Descripción:</strong> En esta etapa se diseña o planifica la experiencia de aprendizaje, siguiendo una secuencia didáctica general y transversal a todas las disciplinas:</p>
      <ul>
        <li>Seleccionar qué habilidad se desea abordar primero.</li>
        <li>Identificar dentro del Syllabus o cronograma cuándo es oportuno realizar la experiencia.</li>
        <li>Ajustar el objetivo identificado, el cual debe estar alineado con el programa de la asignatura.</li>
        <li>Determinar los indicadores de evaluación.</li>
        <li>Determinar contenidos y/o actitudes que se buscan desarrollar.</li>
        <li>Diseñar la o las actividades necesarias para el inicio, desarrollo y cierre de la experiencia.</li>
        <li>Identificar cuánto tiempo tomará la ejecución y ajustar al cronograma.</li>
        <li>Identificar, seleccionar o crear los recursos y materiales necesarios.</li>
        <li>Elaborar un instrumento para evaluar la experiencia considerando los indicadores ya elaborados.</li>
      </ul>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_2_CAP2.png" alt="Esquema Etapa 2" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>Puntos clave en la planificación:</strong></p>
      <ul>
        <li>El uso e integración de la IAGen es un mediador, un gatillador, no el fin en sí mismo.</li>
        <li>Integrar la IAGen tiene el foco en desarrollar habilidades superiores relacionadas con la asignatura.</li>
        <li>Al planificar, es necesario tener presentes los pilares del modelo:</li>
      </ul>
      <ul>
        <li>Integridad académica y uso ético de la inteligencia artificial.</li>
        <li>Formación en alfabetización en IAG y desarrollo de competencias digitales.</li>
        <li>Diseño y evaluación de estrategias de enseñanza y aprendizaje.</li>
        <li>Privacidad, seguridad y protección de datos.</li>
      </ul>

      <h3>Etapa 3. Ejecución de la experiencia de aprendizaje</h3>
      <p><strong>Preguntas clave:</strong></p>
      <p>¿Se está logrando el objetivo definido?</p>
      <p>¿Puedo observar y medir los indicadores de evaluación definidos?</p>
      <p><strong>Descripción:</strong> Es el momento donde la experiencia de aprendizaje se lleva a cabo y se implementa según la planificación. El académico podrá apreciar las reacciones, desempeños y reflexiones de sus estudiantes. Es necesario cerrar la actividad para poder evaluar el logro del objetivo y comparar el resultado con el análisis realizado en la primera etapa del ciclo. Esta etapa requiere la preparación y disposición positiva del docente, lo cual es fundamental para motivar y desarrollar un ambiente positivo y favorable para el aprendizaje.</p>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_3_CAP2.png" alt="Esquema Etapa 3" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <h4>Proceso de Ejecución:</h4>
      <ol>
        <li>Implementar Plan: Poner el plan diseñado en acción.</li>
        <li>Monitorear Progreso: Seguir el progreso de la ejecución.</li>
        <li>Recopilar Datos: Recopilar datos relevantes para la evaluación.</li>
        <li>Evaluar Impacto: Evaluar el impacto de la experiencia.</li>
        <li>Verificar Objetivos: Confirmar si se están cumpliendo los objetivos.</li>
        <li>Medir Indicadores: Asegurar que se estén midiendo los indicadores.</li>
      </ol>

      <h3>Etapa 4. Reflexión de la Experiencia</h3>
      <p><strong>Pregunta clave:</strong> ¿Qué avances se lograron?</p>
      <p><strong>Descripción:</strong> Después de la ejecución, el profesor debe reflexionar sobre la experiencia vivida. La reflexión contempla el nivel de logro de la actividad, pero va más allá, ya que es el momento para evaluar y comparar el estado inicial identificado en la primera etapa del ciclo. Esto implica hacerse preguntas orientadoras para una reflexión personal y conjunta , y para proyectar el aprendizaje conectándolo con el perfil de egreso y la disciplina de manera transversal.</p>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_4_CAP2.png" alt="Esquema Etapa 4" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>Focos de la Reflexión:</strong></p>
      <ul>
        <li>Analizar resultados.</li>
        <li>Identificar éxitos.</li>
        <li>Reconocer desafíos.</li>
        <li>Mejorar la experiencia.</li>
      </ul>

      <h3>Etapa 5. Asimilación de la experiencia de aprendizaje</h3>
      <p><strong>Preguntas clave:</strong></p>
      <p>¿De qué manera mis estudiantes están transfiriendo técnicas, habilidades o aprendizajes desarrollados en la experiencia de aprendizaje?</p>
      <p>¿Qué cambios ha generado este proceso en mi práctica docente?</p>
      <p><strong>Descripción:</strong> Tras la reflexión y las conclusiones, se establece un período para monitorear cómo se está instalando el objetivo planteado en el docente y los estudiantes. Asimilar un aprendizaje requiere tiempo, espacio para integrar, monitoreo, apoyos, y mantener el objetivo propuesto en la memoria de los estudiantes o en el hacer de la clase. El docente debe verificar el nivel de asimilación, adquisición o incorporación de lo realizado en la actividad, evaluando el impacto real que tuvo en el aprendizaje de sus estudiantes y el cambio que ha generado en él.</p>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_5_CAP2.png" alt="Esquema Etapa 5" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <h4>Proceso de Asimilación:</h4>
      <ul>
        <li>Aprendizaje Inicial: Nuevas habilidades y conocimientos.</li>
        <li>Transferencia: Aplicación a otros contextos.</li>
        <li>Integración: Incorporación a la práctica.</li>
        <li>Práctica docente mejorada: Habilidades y conocimientos integrados.</li>
      </ul>

      <h3>Etapa 6. Evaluación del ciclo.</h3>
      <p><strong>Preguntas clave:</strong></p>
      <p>¿Qué barreras y facilitadores se visibilizan en el ciclo completo?</p>
      <p>¿Cómo fue la experiencia y el impacto en el proceso de enseñanza del docente y aprendizaje en los estudiantes?</p>
      <p>¿Qué nuevas experiencias se pueden iniciar en el corto o largo plazo?</p>
      <p><strong>Descripción:</strong> Esta es la etapa final, donde el profesor evalúa el proceso completo. Se analiza si el ciclo identificado se ha cerrado, si falta algún elemento, o si esta experiencia abre una nueva oportunidad para otro proceso más complejo o el reinicio de una nueva acción. Se sugiere el uso de preguntas orientadoras para guiar esta revisión y ajuste en relación con lo identificado en la primera etapa.</p>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP2/esquema_etapa_6_CAP2.png" alt="Esquema Etapa 6" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <h4>Proceso de Evaluación del Ciclo:</h4>
      <ol>
        <li>Identificar Experiencia: Reconocer la experiencia inicial para el análisis.</li>
        <li>Analizar Proceso: Examinar el proceso completo desde el inicio hasta la asimilación.</li>
        <li>Identificar Barreras y Facilitadores: Determinar los factores que influyen en el éxito o el fracaso.</li>
        <li>Evaluar Impacto: Evaluar el impacto en la enseñanza y el aprendizaje.</li>
        <li>Planificar Futuras Experiencias: Desarrollar planes para futuras experiencias basadas en la evaluación.</li>
      </ol>
    `,
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
    inlineHtml: `
      <h2>Capítulo 3. Alfabetización Digital en Inteligencia Artificial Generativa (IAGen)</h2>

      <p>La irrupción de la IAGen ha abierto un nuevo horizonte en la educación superior. Este capítulo es una guía para navegar este ecosistema tecnológico y empoderar a los estudiantes en su uso, ofreciendo conceptos claves, orientaciones didácticas y ejemplos.</p>

      <h3>¿Qué es la alfabetización digital en IAGen?</h3>
      <p>La alfabetización en IAGen es un concepto dinámico que se construye sobre la alfabetización digital y la IA en general, adaptándose a los modelos generativos. Va más allá del simple uso de herramientas, siendo la capacidad de comprender, evaluar críticamente y utilizar las tecnologías de IAGen de manera efectiva, ética y responsable.</p>

      <p>Se entiende como el conjunto de habilidades que capacita a estudiantes y académicos para:</p>
      <ul>
        <li>Comprender los principios y el funcionamiento de las herramientas de IAGen.</li>
        <li>Evaluar críticamente sus capacidades y limitaciones.</li>
        <li>Utilizarlas de manera efectiva y ética en su disciplina.</li>
        <li>Aplicar prácticas responsables y seguras en el uso de la IAGen.</li>
      </ul>

      <h3>Fundamentos de la Alfabetización en IAGen</h3>
      <ul>
        <li><strong>Comprender:</strong> Comprender los conceptos y capacidades de la IAGen.</li>
        <li><strong>Reconocer:</strong> Reconocer las limitaciones y riesgos éticos de la IAGen.</li>
        <li><strong>Utilizar:</strong> Usar herramientas de IAGen de manera efectiva para fines académicos y profesionales.</li>
        <li><strong>Aplicar:</strong> Aplicar prácticas responsables y seguras en el uso de la IAGen.</li>
      </ul>

      <div class="esquema-etapa">
        <img src="/docs/Esquemas%20PDF/CAP3/esquema_inicio_del_CAP3.png" alt="Esquema inicial Capítulo 3" style="max-width:100%;height:auto;margin-top:1rem;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.08);" />
      </div>

      <h3>La Importancia de la Alfabetización en IAGen</h3>
      <p>Es esencial que los estudiantes sean ciudadanos y profesionales alfabetizados digitalmente en IAGen, capaces de comprender, utilizar de forma efectiva y navegar de manera ética en este nuevo ecosistema tecnológico. Este desarrollo es un pilar fundamental para:</p>
      <ul>
        <li>La integración eficiente de la IAGen en la docencia.</li>
        <li>Fomentar el pensamiento crítico al enfatizar sus limitaciones y sesgos.</li>
        <li>Disminuir la brecha entre la adopción de la tecnología y las respuestas educativas institucionales.</li>
        <li>Transformar el rol del profesor de usuario a guía, y de evaluador de producto a transformador y evaluador de proceso.</li>
      </ul>

      <h3>Competencias que desarrollan los estudiantes</h3>
      <p>Cuando los profesores implementan la alfabetización digital en IAGen, los estudiantes desarrollan:</p>
      <ul>
        <li><strong>Uso de la IAGen con propósito:</strong> Utilizar herramientas de IAGen de manera efectiva y eficiente para propósitos académicos y profesionales de la disciplina.</li>
        <li><strong>Comprensión de su funcionamiento e implicancias:</strong> Entender qué es y cómo funciona la IAGen a nivel conceptual, sus capacidades e implicaciones éticas y sociales, asumiendo la responsabilidad en su uso.</li>
        <li><strong>Pensamiento crítico:</strong> Reconocer limitaciones, riesgos y desafíos éticos, siendo capaces de analizar y evaluar críticamente el contenido, identificando falencias, alucinaciones y sesgos.</li>
        <li><strong>Toma de decisiones informadas y responsables:</strong> Aplicar prácticas de uso responsable, transparente y seguro.</li>
        <li><strong>Gestión de la privacidad y seguridad:</strong> Comprender la responsabilidad sobre el contenido creado y resguardar los datos proporcionados en los prompts.</li>
      </ul>

      <h3>Aspectos a abordar para desarrollar la Alfabetización en IAGen</h3>
      <ul>
        <li>Incorporar la alfabetización en IAGen en las metodologías de enseñanza.</li>
        <li>Asegurar que los estudiantes tengan acceso a las herramientas apropiadas.</li>
        <li>Emplear competencias digitales con base en indicadores reconocidos (por ejemplo OCDE).</li>
        <li>Evaluar las políticas de seguridad y privacidad.</li>
        <li>Transparentar el uso de IAGen en la asignatura.</li>
        <li>Analizar los sesgos y fomentar una actitud crítica ante las respuestas.</li>
      </ul>

      <h3>Aplicación del Ciclo de Integración a la Alfabetización Digital</h3>
      <p>El ciclo de experiencias de aprendizaje mediadas con IAGen se aplica como guía para lograr una docencia efectiva en la integración de la IAGen en la asignatura.</p>

      <h4>Paso 1. Identificar el estado inicial</h4>
      <p><strong>Objetivo:</strong> Determinar un diagnóstico y definir el objetivo a desarrollar.</p>
      <p><strong>Diagnóstico (Ejemplos):</strong> ¿Qué conocimientos tienen mis estudiantes sobre IAGen? ¿Pueden diferenciar IAGen de otras IA? ¿Saben para qué sirve un prompt? ¿Han utilizado IAGen para resolver algún desafío?</p>

      <p><strong>Método:</strong> Diálogo abierto, plenario estructurado, cuestionario u otra actividad.</p>
      <p><strong>Resultado:</strong> Definir el objetivo de aprendizaje adaptado al contexto (ej. trabajo en equipo para analizar beneficios, sesgos y barreras).</p>

      <h4>Paso 2. Planificar la experiencia de aprendizaje</h4>
      <p><strong>Objetivo:</strong> Diseñar la actividad en coherencia con el syllabus.</p>
      <p><strong>Elementos a determinar:</strong> Indicadores de evaluación, tiempo, escenario, estrategia metodológica, contenidos, materiales y recursos de IAGen, diseño de actividades de inicio/desarrollo/cierre.</p>

      <h4>Paso 3. Ejecutar la experiencia</h4>
      <p><strong>Rol del docente:</strong> Facilitador y observador. Acciones: guiar, motivar la experimentación, comparar y reflexionar sobre resultados. Registrar hallazgos y monitorear indicadores.</p>

      <h4>Paso 4. Evaluar la actividad</h4>
      <p><strong>Propósito:</strong> Reflexionar sobre la experiencia y usar instrumentos de evaluación (rúbricas, pautas) para retroalimentar a estudiantes y docentes.</p>

      <h4>Paso 5. Asimilación</h4>
      <p>Reforzar acciones en clases, elaborar ejercicios acotados para consolidar, y hacer seguimiento de la transferencia del aprendizaje.</p>

      <h4>Paso 6. Evaluación del ciclo completo</h4>
      <p><strong>Objetivo:</strong> Revisar el ciclo para identificar mejoras, aciertos y proyecciones futuras.</p>

      <h3>Indicadores concretos sugeridos</h3>
      <ul>
        <li>Participa en la evaluación del potencial educativo de recursos de IAGen.</li>
        <li>Ejercita la elaboración de prompts y analiza su efectividad.</li>
        <li>Utiliza al menos una estrategia de diseño de prompts.</li>
        <li>Identifica limitaciones y sesgos en contenidos generados.</li>
        <li>Utiliza el recurso de IAGen definido para la asignatura.</li>
        <li>Evalúa la calidad de la información recibida y toma decisiones éticas.</li>
        <li>Declara explícitamente cómo y con qué propósito utilizó IAGen en su trabajo.</li>
      </ul>
    `,
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
      inlineHtml: `
        <h2>Capítulo 4. Pensamiento Crítico</h2>

        <p>En la era de la Inteligencia Artificial Generativa (IAGen), donde la generación de contenido es instantánea, el Pensamiento Crítico (PC) es un imperativo ético y profesional. Este capítulo guía la integración de la IAGen como una herramienta poderosa para desarrollar la capacidad de los estudiantes de analizar, evaluar y mejorar sus propios razonamientos y los resultados de la IA, cultivando un juicio profesional.</p>

        <h3>¿Qué es el Pensamiento Crítico?</h3>
        <p>El Pensamiento Crítico es la habilidad intelectualmente disciplinada para conceptualizar, analizar, sintetizar y/o evaluar información como guía para la creencia y la acción.</p>

        <h3>Perspectivas complementarias para el aula con IAGen</h3>
        <p><strong>Habilidades y Disposiciones (Faccione):</strong> El PC se define como un juicio autorregulado y con propósito. Se manifiesta en seis habilidades cognitivas clave:</p>
        <ul>
          <li><strong>Interpretación:</strong> Entender el significado de datos e información.</li>
          <li><strong>Análisis:</strong> Identificar las relaciones de inferencia reales y supuestas.</li>
          <li><strong>Evaluación:</strong> Valorar la credibilidad de las afirmaciones y la fuerza lógica de las relaciones.</li>
          <li><strong>Inferencia:</strong> Identificar y asegurar los elementos necesarios para llegar a conclusiones razonables.</li>
          <li><strong>Explicación:</strong> Presentar los resultados del razonamiento de manera coherente y convincente.</li>
          <li><strong>Autorregulación:</strong> Monitorear y corregir el propio juicio.</li>
        </ul>

        <p><strong>Estándares Intelectuales (Paul & Elder):</strong> Se enfocan en aplicar estándares universales al proceso de pensamiento para evaluar los outputs de una IAGen. El estudiante debe juzgar si el texto es claro, preciso, relevante, lógico y justo.</p>

        <h3>¿Por qué es necesario desarrollarlo en la docencia universitaria?</h3>
        <p>Navegación en la Información Asistida por IA: Los estudiantes deben evaluar y depurar el contenido generado por un algoritmo a una velocidad sin precedentes. Necesitan PC para identificar sesgos algorítmicos, información falsa (alucinaciones) y falacias lógicas que la IA puede amplificar.</p>
        <p>Desarrollo de Juicio Profesional: El PC es la base para la toma de decisiones éticas y fundamentadas. La IA no reemplazará la responsabilidad final y el juicio contextual de un experto; la docencia debe asegurar que el estudiante use la IA para aumentar su capacidad analítica, no para sustituirla.</p>
        <p>Conexión con el Perfil de Egreso: El PC es una competencia transversal clave en la mayoría de los perfiles de egreso universitarios. Abordarlo a través de la IAGen garantiza que esta habilidad se desarrolle en un contexto tecnológico actual.</p>

        <h3>Competencias que desarrollan los estudiantes</h3>
        <ul>
          <li><strong>Alfabetización Crítica en IAGen:</strong> Comprender cómo funciona la IA, sus limitaciones y la necesidad de intervención humana para validar sus resultados.</li>
          <li><strong>Análisis Multimodal de Evidencia:</strong> Contrastar la evidencia generada por la IAGen con fuentes académicas tradicionales.</li>
          <li><strong>Meta-cognición y Autorregulación:</strong> Monitorear el propio razonamiento al corregir el producto de la IA.</li>
          <li><strong>Proactividad y Prompt Engineering Crítico:</strong> Formular prompts precisos y estratégicos que exigen claridad en objetivo, contexto y criterios de éxito.</li>
        </ul>

        <h3>Aspectos a abordar</h3>
        <ul>
          <li>Ética y responsabilidad en el uso: autoría y honestidad académica.</li>
          <li>Privacidad de datos: riesgos al ingresar información sensible a modelos de IA.</li>
          <li>Sesgos algorítmicos: evaluar si la información generada reproduce o amplifica prejuicios.</li>
          <li>El juicio humano como filtro final: diseñar tareas que obliguen al estudiante a debatir, corregir y mejorar el output de la IA.</li>
        </ul>

        <h3>Ciclo de Integración de IAGen para fomentar PC (6 fases)</h3>
        <ol>
          <li><strong>Paso 1:</strong> Identificar el estado inicial respecto al pensamiento crítico del grupo curso.</li>
          <li><strong>Paso 2:</strong> Planificar la experiencia de aprendizaje centrada en habilidades de PC.</li>
          <li><strong>Paso 3:</strong> Ejecutar la experiencia con el docente como facilitador.</li>
          <li><strong>Paso 4:</strong> Evaluar la actividad en conjunto con estudiantes.</li>
          <li><strong>Paso 5:</strong> Asimilar la experiencia y promover la metacognición.</li>
          <li><strong>Paso 6:</strong> Evaluación del ciclo completo y ajuste para la mejora continua.</li>
        </ol>

        <h3>Indicadores de logro</h3>
        <ul>
          <li>Analiza supuestos implícitos y explícitos en textos generados por la IAGen.</li>
          <li>Juzga la credibilidad de fuentes y propone correcciones justificadas al output de la IA.</li>
          <li>Articula explicaciones claras sobre por qué un contenido es insuficiente o incorrecto.</li>
        </ul>

        <h3>Experiencias prácticas</h3>
        <ul>
          <li><strong>El Abogado del Diablo Algorítmico:</strong> Analizar y refutar argumentos generados por la IAGen.</li>
          <li><strong>Desafío de Relevancia:</strong> Identificar información redundante y reescribir prompts.</li>
          <li><strong>El "Caso Alucinado":</strong> Verificar bibliografías y detectar alucinaciones en referencias propuestas por la IAGen.</li>
        </ul>
      `,
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
      inlineHtml: `
        <h2>Capítulo 5. Trabajo Autónomo</h2>

        <p>El ingreso a la universidad exige a los estudiantes equilibrar su desarrollo profesional y personal. El tiempo fuera de clase a menudo se convierte en una carga compleja de distribuir y coordinar, observándose dificultades en el manejo del tiempo autónomo para lograr aprendizajes efectivos, profundos y autorregulados. Bajo este escenario, la IAGen emerge como una aliada estratégica.</p>

        <p>El objetivo es orientar sobre los apoyos que se pueden entregar a los estudiantes, integrando experiencias de aprendizaje mediadas con IAGen como una extensión personalizada del acompañamiento docente, siempre bajo un uso ético, crítico, consciente y productivo.</p>

        <h3>¿Qué es el trabajo autónomo en el contexto universitario?</h3>
        <p>El tiempo autónomo se refiere a los espacios y momentos en que los estudiantes realizan diversas acciones asociadas a su formación fuera del tiempo de clases. El aprendizaje autónomo es un proceso que requiere de estrategias cognitivas y conductuales que permitan al alumno planificar, organizar y reestructurar sus recursos y contexto para llevar a cabo sus metas.</p>

        <h3>Principios y rol del docente</h3>
        <p>El proceso intelectual del aprendizaje autónomo implica la ejecución de estrategias cognitivas y metacognitivas, secuenciales y formalizadas para obtener conocimientos estratégicos. El docente pasa de explicar contenidos a modelar procesos, mediar en la resolución de problemas, acompañar en el análisis, la evaluación y la cocreación en equipos.</p>

        <h3>¿Por qué orientar a los estudiantes en el uso de la IAGen en su tiempo autónomo?</h3>
        <ul>
          <li><strong>Disponibilidad y personalización:</strong> La IAGen está disponible 24/7 y puede personalizar la experiencia al ritmo y nivel del estudiante.</li>
          <li><strong>Extensión docente:</strong> Un recurso de IAGen seleccionado por el docente actúa como extensión del acompañamiento en tiempo y espacio.</li>
          <li><strong>Optimización del tiempo:</strong> Resúmenes, mapas mentales, explicaciones y adaptaciones de contenido ayudan a optimizar el estudio autónomo.</li>
          <li><strong>Desafío:</strong> El estudiante debe juzgar cuándo el uso es justificable y evitar depender pasivamente de las respuestas de la máquina.</li>
        </ul>

        <h3>Competencias desarrolladas</h3>
        <ul>
          <li><strong>Autorregulación:</strong> Planificar, organizar y gestionar recursos para lograr metas de aprendizaje.</li>
          <li><strong>Reflexión y pensamiento crítico:</strong> Evaluar la eficacia de planes y la calidad de productos.</li>
          <li><strong>Colaboración:</strong> Comunicar resultados y resolver desafíos en conjunto cuando corresponda.</li>
        </ul>

        <h3>El Ciclo de Zimmerman y la mediación de la IAGen</h3>
        <p>La IAGen puede mediar las fases del ciclo: premeditación (descomponer tareas y planificar), desempeño (retroalimentación y apoyo en la ejecución) y autorreflexión (simular evaluaciones y apoyar la autoevaluación).</p>

        <h3>Cómo integrar el ciclo en el tiempo autónomo</h3>
        <ol>
          <li><strong>Paso 1:</strong> Identificar el estado inicial del estudiante respecto al uso del tiempo autónomo (diagnóstico).</li>
          <li><strong>Paso 2:</strong> Planificar experiencias acotadas mediadas por IAGen con indicadores claros.</li>
          <li><strong>Paso 3:</strong> Ejecutar la experiencia modelando el uso en clase y dejando tiempo autónomo para practicar.</li>
          <li><strong>Paso 4:</strong> Evaluar la actividad y levantar reportes de la experiencia.</li>
          <li><strong>Paso 5:</strong> Asimilar y reforzar lo aprendido con apoyos y seguimiento.</li>
          <li><strong>Paso 6:</strong> Evaluar el ciclo completo y cocrear mejoras futuras.</li>
        </ol>

        <h3>Indicadores sugeridos</h3>
        <ul>
          <li>Define la tarea y el tiempo a utilizar.</li>
          <li>Organiza su proceso de trabajo y utiliza la IA para ajustar y clarificar su plan.</li>
          <li>Evalúa la efectividad de su plan y reflexiona sobre mejoras.</li>
        </ul>

        <h3>Experiencias prácticas</h3>
        <ul>
          <li><strong>Micro tutorías con IAGen:</strong> Chatbots o tutorías diseñadas por el docente con bibliografía seleccionada.</li>
          <li><strong>Revisiones autónomas de textos:</strong> Retroalimentación automatizada para practicar y mejorar.</li>
          <li><strong>Autoevaluaciones simuladas:</strong> Pruebas y ejercicios para practicar la evaluación propia con apoyo de IAGen.</li>
          <li><strong>Plantillas de iteración:</strong> Herramientas para proyectos y comparación entre respuestas personales y las generadas por la IAGen.</li>
        </ul>
      `,
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
    date: 'Hace 3 días',
  video: videoLinks[6],
  pdf: pdfLinks[6],
  podcast: podcastLinks[6],
    inlineHtml: `
      <h2>Capítulo 6. Trabajo Colaborativo</h2>

      <p>La colaboración efectiva es una habilidad indispensable en el mundo actual y el ámbito laboral. Es clave incorporar herramientas tecnológicas para optimizar los procesos colaborativos. El objetivo es generar oportunidades para la co-creación y el logro de metas comunes adoptando el uso de la IAGen.</p>

      <p>Este capítulo guía a los académicos en el diseño de experiencias colaborativas donde el equipo reflexiona sobre cómo la IAGen puede ser un miembro más para potenciar al grupo. La IAGen puede facilitar la ideación, el prototipado, la reflexión y el aporte de puntos de vista.</p>

      <h3>¿Qué es el trabajo colaborativo con IAGen?</h3>
      <p>Se entenderá por trabajo colaborativo a todo tipo de actividad interaccional desarrollada por una comunidad o grupo con el propósito de identificar y resolver problemáticas mediante diseño, creación o nuevos instrumentos. En el contexto de IAGen, se trata de equipos de análisis que colaboran para elaborar prompts, evaluar salidas y iterar con el integrante denominado "compañero IAGen".</p>

      <h3>¿Por qué desarrollar estas habilidades?</h3>
      <ul>
        <li><strong>Amplificación de la producción:</strong> La IAGen aumenta la capacidad productiva y comunicativa del grupo.</li>
        <li><strong>Intercambio y aprendizaje colectivo:</strong> Facilita el intercambio de conocimientos entre pares y con el docente.</li>
        <li><strong>Comportamiento digital ético:</strong> Promueve normas y responsabilidad en espacios digitales colaborativos.</li>
      </ul>

      <h3>Funciones y beneficios de la IAGen en colaboración</h3>
      <ul>
        <li><strong>Asistente de tareas:</strong> Resumir, visualizar y categorizar discusiones.</li>
        <li><strong>Asistente de participación:</strong> Apoyar la igualdad en las contribuciones del equipo.</li>
        <li><strong>Asistente de procesos:</strong> Mantener la continuidad y estimular nuevas discusiones.</li>
        <li><strong>Asistente de interacción:</strong> Categorizaciones y estímulo al diálogo.</li>
      </ul>

      <h3>Atributos útiles de la IAGen</h3>
      <ul>
        <li><strong>Ideación y creatividad:</strong> Ofrece prototipos e ideas múltiples para iterar.</li>
        <li><strong>Productividad y eficiencia:</strong> Acelera tareas de síntesis y categorización liberando tiempo para pensamiento profundo.</li>
      </ul>

      <h3>Aspectos a abordar y pautas docentes</h3>
      <ul>
        <li>Definir previamente en qué actividades se acepta el uso de la IAGen.</li>
        <li>Establecer el rol de la IAGen: el equipo decide etapas y responsabilidades o el docente delimita tareas.</li>
        <li>Monitorear uso responsable: verificación de fuentes, análisis de sesgos y respeto disciplinar.</li>
      </ul>

      <h3>Ciclo de integración para fomentar la colaboración</h3>
      <ol>
        <li><strong>Paso 1:</strong> Identificar estado inicial sobre colaboración y uso de tecnología.</li>
        <li><strong>Paso 2:</strong> Planificar experiencias (ABP, estudios de caso, debates asistidos) y definir indicadores.</li>
        <li><strong>Paso 3:</strong> Ejecutar con observación activa del docente y uso guiado de la IAGen.</li>
        <li><strong>Paso 4:</strong> Evaluar entregables y procesos colaborativos con transparencia en el uso de la IAGen.</li>
        <li><strong>Paso 5:</strong> Asimilar y transferir prácticas colaborativas a nuevos contextos.</li>
        <li><strong>Paso 6:</strong> Evaluación final y mejora continua del ciclo.</li>
      </ol>

      <h3>Preguntas orientadoras para la docencia</h3>
      <ul>
        <li>¿Qué rol asignaremos a la IAGen en la actividad colaborativa?</li>
        <li>¿Cómo garantizamos contribuciones equitativas y verificación crítica de las salidas?</li>
        <li>¿Qué indicadores medirán el éxito colaborativo (co-creación, negociación, comunicación)?</li>
      </ul>

      <p>Este capítulo propone diseñar actividades donde la IAGen actúe como catalizador, sin reemplazar la interacción humana; su uso debe potenciar el pensamiento colectivo, la creatividad y la responsabilidad ética del equipo.</p>
    `,
    concepts: ['Revolución Industrial', 'Línea de tiempo', 'Mapas interactivos'],
    recommendedUse: 'Clases de historia, recursos multimedia',
  },
  {
    id: 7,
    title: 'Capítulo 7 - Creatividad',
    description:
      'Guía para diseñar experiencias colaborativas en el aula integrando IA generativa como miembro activo del equipo.',
    type: 'CAPÍTULO',
    subject: 'Educación universitaria / Transversal',
    grade: 'N/A',
    isAI: true,
    date: 'Hace 3 días',
  video: videoLinks[7],
  pdf: pdfLinks[7],
  podcast: podcastLinks[7],
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
];

export function getMaterialById(id: number): Material | undefined {
  return materials.find((m) => m.id === id);
}
