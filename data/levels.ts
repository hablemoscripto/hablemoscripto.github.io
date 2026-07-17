// Level/module metadata (titles, durations, lesson lists) — the lightweight
// catalog used by the landing page, dashboard, course navigation and search.
//
// This is deliberately split from data/courseData.ts: the heavy LESSONS_DATA
// content (~750 KB) lives there and is imported only by the lazy lesson-reading
// path (lessonService / dailyReviewService). Keeping the metadata here means the
// landing/dashboard entry chunk never pulls the full lesson bodies. The LevelData
// type is imported type-only, so this file has no runtime dependency on courseData.
import {
  Banknote,
  BookOpen,
  Wallet,
  BarChart3,
  Search,
  Briefcase,
  Zap,
  Gem,
  Cpu,
} from 'lucide-react';
import type { LevelData } from './courseData';

export const BEGINNER_LEVEL: LevelData = {
  id: 'beginner',
  title: 'Nivel Principiante',
  subtitle: 'Entiende el dinero y tu primera wallet',
  description: 'Olvida lo que sabes sobre el dinero. Aprende por qué la inflación te empobrece, cómo Bitcoin arregla la reserva de valor y cómo Solana democratiza las finanzas.',
  stats: {
    lessons: 19,
    duration: '~8h'
  },
  modules: [
    {
      id: 1,
      title: 'El Dinero Está Roto',
      description: 'La historia oculta de la banca, la inflación y la impresión de dinero',
      icon: Banknote,
      lessons: [
        { id: 1, title: 'Breve Historia del Dinero', description: 'Del trueque al patrón oro y al dinero Fiat.', duration: '18 min', type: 'Video + Historia' },
        { id: 2, title: 'La Trampa de la Inflación', description: 'Cómo la impresión de dinero roba tu tiempo y trabajo.', duration: '22 min', type: 'Video + Gráficos' },
        { id: 3, title: 'El Efecto Cantillon', description: '¿Quién se beneficia realmente cuando imprimen billetes?', duration: '20 min', type: 'Concepto Clave' },
        { id: 4, title: 'Bitcoin: La Salida', description: 'La primera solución matemática a la corrupción monetaria.', duration: '28 min', type: 'Video + Texto' },
      ]
    },
    {
      id: 2,
      title: 'Fundamentos Blockchain',
      description: 'La tecnología detrás de la revolución',
      icon: BookOpen,
      lessons: [
        { id: 5, title: '¿Qué es Blockchain?', description: 'El libro contable que nadie puede manipular.', duration: '25 min', type: 'Video + Texto' },
        { id: 6, title: 'Descentralización vs Centralización', description: 'Por qué importa que nadie tenga el control.', duration: '22 min', type: 'Video + Texto' },
      ]
    },
    {
      id: 3,
      title: 'Tu Banco en el Bolsillo',
      description: 'Configura tu wallet y entiende las redes (Solana vs ETH)',
      icon: Wallet,
      lessons: [
        { id: 7, title: 'Wallets: Tu Llave, Tu Dinero', description: 'Hot vs Cold wallets y la importancia de la custodia.', duration: '25 min', type: 'Video + Texto' },
        { id: 8, title: 'La Frase Semilla (Seed Phrase)', description: 'Las 12 palabras que valen millones. Seguridad extrema.', duration: '28 min', type: 'Video + Práctica' },
        { id: 9, title: 'Instalando Phantom Wallet', description: 'Tu puerta de entrada al ecosistema Solana.', duration: '30 min', type: 'Tutorial Práctico' },
        { id: 10, title: 'Solana vs Ethereum: La Guerra de L1s', description: 'Por qué usamos Solana: Velocidad, costos y comunidad.', duration: '35 min', type: 'Comparativa' },
        { id: 35, title: 'Obteniendo tus Primeros SOL', description: 'Cómo convertir tu dinero local a Cripto usando Exchanges.', duration: '25 min', type: 'Tutorial' },
        { id: 36, title: 'Tu Primera Transacción', description: 'Envía valor a través del mundo en segundos.', duration: '20 min', type: 'Práctica' },
        { id: 37, title: 'Exploradores de Bloques (Solscan)', description: 'Aprende a verificar la verdad.', duration: '18 min', type: 'Herramienta' },
        { id: 38, title: 'Evitar Estafas en Web3', description: 'Aprende a defenderte antes de salir a mar abierto.', duration: '30 min', type: 'Seguridad Vital' },
        { id: 41, title: 'Stablecoins: Tu Dólar Digital', description: 'Qué son USDC y USDT, cómo funcionan, y los riesgos que nadie te cuenta.', duration: '22 min', type: 'Concepto Clave' },
        { id: 39, title: 'Gasta tus Cripto', description: 'Usa tus ganancias en el mundo real con tarjetas cripto.', duration: '25 min', type: 'Herramientas' },
        { id: 42, title: 'DCA: Invierte Sin Estrés', description: 'La estrategia más simple y poderosa para construir riqueza a largo plazo.', duration: '18 min', type: 'Estrategia' },
        { id: 43, title: 'Bitcoin vs Altcoins: Qué Comprar Primero', description: 'Entiende el rol de BTC como reserva de valor vs SOL y ETH como plataformas.', duration: '20 min', type: 'Comparativa' },
        { id: 44, title: 'Tu Plan de Inversión Personal', description: 'Junta todo lo aprendido: portafolio, DCA, seguridad y metas claras.', duration: '22 min', type: 'Práctica' },
      ]
    }
  ]
};

export const INTERMEDIATE_LEVEL: LevelData = {
  id: 'intermediate',
  title: 'Nivel Intermedio',
  subtitle: 'Análisis y Psicología de Mercado',
  description: 'Deja de apostar y empieza a invertir. Domina el análisis técnico, entiende los ciclos de mercado y aprende a gestionar tu riesgo emocional.',
  stats: {
    lessons: 12,
    duration: '~8h'
  },
  modules: [
    {
      id: 1,
      title: 'Lectura de Gráficos',
      description: 'Domina las herramientas para analizar el precio',
      icon: BarChart3,
      lessons: [
        { id: 13, title: 'Velas Japonesas y Tendencias', description: 'El lenguaje visual del mercado.', duration: '25 min', type: 'Video + Práctica' },
        { id: 14, title: 'Soportes y Resistencias', description: 'Dónde comprar y dónde vender.', duration: '30 min', type: 'Video + Práctica' },
        { id: 15, title: 'Indicadores Clave (RSI, EMAs)', description: 'Herramientas matemáticas para confirmar trades.', duration: '28 min', type: 'Video + Práctica' },
        { id: 16, title: 'Estructura de Mercado', description: 'Higher Highs, Lower Lows y cambios de tendencia.', duration: '22 min', type: 'Video + Práctica' },
      ]
    },
    {
      id: 2,
      title: 'Análisis Fundamental',
      description: 'Evalúa el valor real de los proyectos (DYOR)',
      icon: Search,
      lessons: [
        { id: 17, title: 'Tokenomics 101', description: 'Inflación, Supply y Vesting. Evita ser la liquidez de salida.', duration: '35 min', type: 'Concepto' },
        { id: 18, title: 'Ciclos de Mercado (Halving)', description: 'El ritmo de 4 años de Bitcoin y cómo afecta a las Altcoins.', duration: '30 min', type: 'Análisis' },
        { id: 19, title: 'Investigación de Proyectos', description: 'Cómo analizar Whitepapers, Equipos y Githubs.', duration: '35 min', type: 'Casos Prácticos' },
        { id: 20, title: 'Narrativas y Rotación', description: 'IA, Gaming, Meme Coins. Dónde fluye el dinero.', duration: '24 min', type: 'Estrategia' },
      ]
    },
    {
      id: 3,
      title: 'Gestión de Riesgo',
      description: 'La habilidad que separa a los profesionales de los apostadores',
      icon: Briefcase,
      lessons: [
        { id: 21, title: 'Diversificación Inteligente', description: 'No pongas todos los huevos en la misma canasta.', duration: '32 min', type: 'Estrategia' },
        { id: 22, title: 'El Arte del Stop Loss', description: 'Protege tu capital antes de buscar ganancias.', duration: '28 min', type: 'Tutorial Práctico' },
        { id: 23, title: 'Toma de Ganancias (Take Profit)', description: 'Nadie quebró por tomar ganancias. Estrategias de salida.', duration: '25 min', type: 'Tutorial Práctico' },
        { id: 24, title: 'Mentalidad de Trader', description: 'Control emocional, FOMO y disciplina.', duration: '28 min', type: 'Psicología' },
      ]
    }
  ]
};

export const ADVANCED_LEVEL: LevelData = {
  id: 'advanced',
  title: 'Nivel Avanzado',
  subtitle: 'DeFi, NFTs y el Ecosistema Solana',
  description: 'Domina las finanzas descentralizadas. Aprende a usar Jupiter, proveer liquidez, entender los NFTs más allá del arte y navegar el ecosistema Solana como un experto.',
  stats: {
    lessons: 13,
    duration: '~11h'
  },
  modules: [
    {
      id: 1,
      title: 'Solana DeFi Mastery',
      description: 'Finanzas sin bancos: Swaps, Liquidez y Yield',
      icon: Zap,
      lessons: [
        { id: 25, title: 'Jupiter: El Rey de los DEXs', description: 'Swaps, Limit Orders y DCA en el mejor agregador del mundo.', duration: '35 min', type: 'Tutorial Práctico' },
        { id: 40, title: 'Staking SOL: Gana por Asegurar la Red', description: 'Entiende validadores, epochs y cómo ganar ~5-7% anual delegando.', duration: '30 min', type: 'Tutorial + Concepto' },
        { id: 26, title: 'Liquidez y Yield Farming', description: 'Raydium, Orca y Meteora. Gana fees con tus activos.', duration: '42 min', type: 'Estrategias' },
        { id: 27, title: 'Lending & Borrowing', description: 'Kamino y MarginFi. Usa tus activos como colateral.', duration: '38 min', type: 'Tutorial Práctico' },
        { id: 28, title: 'Riesgos de DeFi (Impermanent Loss)', description: 'Entiende los peligros matemáticos antes de invertir.', duration: '32 min', type: 'Seguridad' },
        { id: 45, title: 'MEV: El Impuesto Invisible', description: 'Cómo los bots extraen valor de cada swap que haces y cómo protegerte.', duration: '28 min', type: 'Seguridad + Concepto' },
      ]
    },
    {
      id: 2,
      title: 'NFTs & Web3 Social',
      description: 'Propiedad digital, comunidades y airdrops',
      icon: Gem,
      lessons: [
        { id: 29, title: 'NFTs en Solana', description: 'Magic Eden, Tensor y por qué los NFTs de Solana son diferentes.', duration: '30 min', type: 'Mercado' },
        { id: 30, title: 'Airdrops y Farming', description: 'Cómo posicionarte para recompensas retroactivas legítimas.', duration: '35 min', type: 'Estrategia' },
        { id: 31, title: 'DePIN: Infraestructura Física', description: 'Helium, Hivemapper. El mundo real en la blockchain.', duration: '28 min', type: 'Tendencias' },
      ]
    },
    {
      id: 3,
      title: 'Escalabilidad y Futuro',
      description: 'Hacia dónde va la tecnología',
      icon: Cpu,
      lessons: [
        { id: 32, title: 'Monolítico vs Modular', description: 'Por qué Solana escala en L1 vs el enfoque de L2s de Ethereum.', duration: '30 min', type: 'Técnico' },
        { id: 33, title: 'Firedancer & El Futuro', description: 'Cliente validador independiente de Jump Crypto. Por qué la diversidad de clientes aumenta la resiliencia de Solana.', duration: '25 min', type: 'Futuro' },
        { id: 34, title: 'Seguridad Operacional Avanzada', description: 'Burner wallets, Ledger y Revoke.cash.', duration: '30 min', type: 'Seguridad' },
        { id: 46, title: 'Gobernanza DAO: Tu Voto Importa', description: 'Tokens de gobernanza, mecanismos de votación y cómo participar en decisiones que afectan tus inversiones.', duration: '25 min', type: 'Concepto + Práctica' },
      ]
    }
  ]
};
