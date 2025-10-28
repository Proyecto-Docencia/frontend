import React from 'react';
import { BookOpen, Calendar, MessageSquare, UserCircle } from 'lucide-react';
import '../css/Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-background-wrapper">
      <div className="welcome-page">
        <header className="welcome-header">
          {/* Header placed inside a card to match other cards */}
          <div className="welcome-card" style={{ padding: '22px' }}>
            <h1>Bienvenido al Portal Docente USS</h1>
            <p>
              Este espacio centraliza tus materiales, planificación académica, herramientas de apoyo con IA y gestión
              de perfil. Tras iniciar sesión, utiliza el menú lateral para acceder rápidamente a cada módulo.
            </p>
          </div>
        </header>

        {/* Video de introducción adaptada al estilo actual */}
        <section className="welcome-video-section">
          <div className="welcome-video-container">
            <div className="relative" style={{ position: 'relative' }}>
              <div className="absolute" style={{ inset: 0, opacity: 0.08 }}>
                {/* decorative svg background kept subtle */}
                <svg className="w-full h-full" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="100" r="80" fill="currentColor" className="text-purple-400" />
                  <circle cx="650" cy="350" r="100" fill="currentColor" className="text-blue-400" />
                  <path d="M 100 300 Q 250 200 400 300 T 700 300" stroke="currentColor" strokeWidth="3" fill="none" className="text-blue-300" />
                </svg>
              </div>

              <video
                controls
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className="welcome-video"
                poster="/docs/FondoPortalUSS.jpg"
              >
                <source src="/docs/Videos/Marco-educativo-resumen-de-la-web.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid - reuse welcome-card styles to keep consistent look */}
        <section className="welcome-cards">
          <div className="welcome-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen style={{ width: 20, height: 20, color: 'rgb(99 102 241)' }} />
              </div>
              <div>
                <h3>Materiales</h3>
                <p className="text-sm">Administra y revisa recursos PDF y contenido con soporte de audio y etiquetas.</p>
              </div>
            </div>
          </div>

          <div className="welcome-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(139,92,246,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar style={{ width: 20, height: 20, color: 'rgb(139 92 246)' }} />
              </div>
              <div>
                <h3>Planificaciones</h3>
                <p className="text-sm">Crea, edita y consulta tus planificaciones académicas en un solo lugar.</p>
              </div>
            </div>
          </div>

          <div className="welcome-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(16,185,129,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageSquare style={{ width: 20, height: 20, color: 'rgb(16 185 129)' }} />
              </div>
              <div>
                <h3>Asistente IA</h3>
                <p className="text-sm">Accede a herramientas asistidas para apoyo pedagógico y generación de ideas.</p>
              </div>
            </div>
          </div>

          <div className="welcome-card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(250,204,21,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserCircle style={{ width: 20, height: 20, color: 'rgb(245 158 11)' }} />
              </div>
              <div>
                <h3>Perfil</h3>
                <p className="text-sm">Mantén actualizados tus datos institucionales y preferencias.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Start Section - reuse welcome-block styling */}
        <section className="welcome-block">
          <h2>Cómo empezar</h2>
          <ol>
            <li>Dirígete a Materiales para explorar o registrar nuevos recursos.</li>
            <li>Crea tu primera planificación desde el menú “Crear Planificación”.</li>
            <li>Prueba el Chat para recibir sugerencias asistidas.</li>
            <li>Completa o ajusta tus datos en la sección Perfil.</li>
          </ol>
          <p>Este portal se encuentra en evolución continua: nuevas funciones de análisis y apoyo docente se irán integrando.</p>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
