import React, { useState, memo } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

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
          color: '#f59e0b',
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
      value: ['#f59e0b', '#ffffff', '#fbbf24'],
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

const initializeParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

// The particles canvas animates continuously; skip it entirely for users who
// asked for less motion or less data. matchMedia can't stop a canvas via CSS,
// so the gate must live here, not in a stylesheet.
const particlesDisabled = (): boolean => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
};

const ParticlesBackground: React.FC = memo(() => {
  const [disabled] = useState(particlesDisabled);

  if (disabled) return null;

  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles
        id="tsparticles-hero"
        options={PARTICLES_OPTIONS}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    </ParticlesProvider>
  );
});

ParticlesBackground.displayName = 'ParticlesBackground';

export default ParticlesBackground;
