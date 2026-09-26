/* ==========================================================================
   Configuración Oficial de Partículas (particles.js) - Portal Ambystoma
   Efecto interactivo de partículas Deep Tech basado en el estilo de FalconMasters
   ========================================================================== */

function initAmbystomaParticles() {
  if (typeof particlesJS === 'undefined') {
    console.warn('[Ambystoma Particles] particlesJS no está cargado aún.');
    return;
  }

  particlesJS('particles-js', {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 850
        }
      },
      color: {
        value: '#38bdf8'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.65,
        random: true,
        anim: {
          enable: true,
          speed: 0.8,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 145,
        color: '#38bdf8',
        opacity: 0.28,
        width: 1.15
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 185,
          line_linked: {
            opacity: 0.85
          }
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8
        },
        repulse: {
          distance: 140,
          duration: 0.4
        },
        push: {
          particles_nb: 3
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAmbystomaParticles);
} else {
  initAmbystomaParticles();
}
