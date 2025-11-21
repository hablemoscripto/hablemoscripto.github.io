import React, { useEffect, useState, useMemo, useCallback, useRef, memo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, ISourceOptions } from '@tsparticles/engine';

// Particle options defined outside component
const PARTICLES_OPTIONS: ISourceOptions = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: { enable: true },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
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
    // Particles loaded
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-hero"
      particlesLoaded={particlesLoaded}
      options={PARTICLES_OPTIONS}
      className="absolute inset-0 z-0"
    />
  );
});

ParticlesBackground.displayName = 'ParticlesBackground';

export default ParticlesBackground;
