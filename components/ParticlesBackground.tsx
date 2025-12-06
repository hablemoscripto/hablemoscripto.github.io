import React, { useEffect, useState, useCallback, memo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

// Crypto-themed particle configuration with golden accents
const PARTICLES_OPTIONS: ISourceOptions = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.8,
          color: '#ffc107',
        },
      },
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ['#ffc107', '#ffffff', '#6366f1'],
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.03,
      },
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 1,
      straight: false,
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.6,
      },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    shape: {
      type: ['circle', 'triangle'],
    },
    size: {
      value: { min: 1, max: 4 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

// Global initialization flag - persists across component remounts
let engineInitialized = false;
let engineReady = false;

const ParticlesBackground: React.FC = memo(() => {
  const [init, setInit] = useState(engineReady);

  useEffect(() => {
    if (engineInitialized) {
      if (engineReady) setInit(true);
      return;
    }
    engineInitialized = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      engineReady = true;
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded successfully
    if (container) {
      console.debug('Particles container loaded');
    }
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-hero"
      particlesLoaded={particlesLoaded}
      options={PARTICLES_OPTIONS}
      className="absolute inset-0 z-0 pointer-events-auto"
    />
  );
});

ParticlesBackground.displayName = 'ParticlesBackground';

export default ParticlesBackground;
