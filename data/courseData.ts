import { 
  Shield, BookOpen, Rocket, Users, Eye, Lock, Coins, BarChart3, Search, Briefcase, Layers, Gem,
  Zap, Globe, Cpu, Key, Smartphone, AlertTriangle, RefreshCw, Link, Target, MousePointer, Anchor,
  CheckCircle, ArrowRight, Clock, TrendingUp, Activity, PieChart, Scale, Network, Server
} from 'lucide-react';

export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: string;
  isLocked?: boolean;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: any;
  lessons: Lesson[];
}

export interface LevelData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stats: {
    lessons: number;
    duration: string;
  };
  modules: Module[];
}

export const BEGINNER_LEVEL: LevelData = {
  id: 'beginner',
  title: 'Nivel Principiante',
  subtitle: 'Fundamentos esenciales del mundo cripto',
  description: 'Construye una base sólida de conocimiento sobre Bitcoin, blockchain y el ecosistema cripto. Aprende los conceptos fundamentales que necesitas para navegar este mundo con confianza.',
  stats: {
    lessons: 18,
    duration: '~6h'
  },
  modules: [
    {
      id: 1,
      title: 'Fundamentos',
      description: 'Comprende qué son las criptomonedas y cómo funcionan',
      icon: BookOpen,
      lessons: [
        { id: 1, title: '¿Qué es Bitcoin?', description: 'Introducción al primer sistema de dinero digital.', duration: '15 min', type: 'Video + Texto' },
        { id: 2, title: '¿Qué es Blockchain?', description: 'La tecnología detrás de todo.', duration: '20 min', type: 'Video + Texto' },
        { id: 3, title: 'Minería y Validación', description: 'Cómo se crean los bitcoins.', duration: '18 min', type: 'Video + Texto' },
        { id: 4, title: 'Descentralización', description: 'Por qué importa que nadie lo controle.', duration: '12 min', type: 'Video + Texto' },
        { id: 5, title: 'Ventajas y Desventajas', description: 'Análisis objetivo.', duration: '16 min', type: 'Video + Texto' },
        { id: 6, title: 'Historia y Evolución', description: 'De 2009 a la actualidad.', duration: '22 min', type: 'Video + Texto' },
      ]
    },
    {
      id: 2,
      title: 'Wallets y Seguridad',
      description: 'Aprende a guardar y proteger tus criptomonedas',
      icon: Shield,
      lessons: [
        { id: 7, title: '¿Qué es una Wallet?', description: 'Tipos de billeteras digitales.', duration: '18 min', type: 'Video + Texto' },
        { id: 8, title: 'Llaves Públicas y Privadas', description: 'Criptografía básica.', duration: '25 min', type: 'Video + Texto' },
        { id: 9, title: 'Configurar tu Primera Wallet', description: 'Guía paso a paso.', duration: '30 min', type: 'Tutorial' },
        { id: 10, title: 'Respaldo y Recuperación', description: 'Seed phrases y seguridad.', duration: '20 min', type: 'Video + Texto' },
        { id: 11, title: 'Buenas Prácticas', description: 'Reglas de oro de seguridad.', duration: '22 min', type: 'Video + Texto' },
        { id: 12, title: 'Evitar Estafas', description: 'Identifica riesgos comunes.', duration: '28 min', type: 'Video + Texto' },
      ]
    },
    {
      id: 3,
      title: 'Primeros Pasos',
      description: 'Tu primera compra, transacción y gestión',
      icon: Rocket,
      lessons: [
        { id: 13, title: 'Exchanges: Dónde Comprar', description: 'Elegir plataforma segura.', duration: '35 min', type: 'Tutorial' },
        { id: 14, title: 'Tu Primera Transacción', description: 'Enviar y recibir.', duration: '25 min', type: 'Tutorial' },
        { id: 15, title: 'Fees y Confirmaciones', description: 'Costos de red explicados.', duration: '18 min', type: 'Video + Texto' },
        { id: 16, title: 'Block Explorers', description: 'Rastrear transacciones.', duration: '15 min', type: 'Tutorial' },
        { id: 17, title: 'Diversificación Básica', description: 'Más allá de Bitcoin.', duration: '30 min', type: 'Video + Texto' },
        { id: 18, title: '¿Qué Sigue?', description: 'Preparación para nivel intermedio.', duration: '12 min', type: 'Video + Texto' },
      ]
    }
  ]
};

export const INTERMEDIATE_LEVEL: LevelData = {
  id: 'intermediate',
  title: 'Nivel Intermedio',
  subtitle: 'Análisis, estrategias y gestión de portfolios',
  description: 'Desarrolla habilidades avanzadas de análisis técnico, fundamental y construcción de portfolios. Aprende a construir portfolios diversificados, gestionar riesgos y aplicar estrategias de inversión profesionales.',
  stats: {
    lessons: 16,
    duration: '~8h'
  },
  modules: [
    {
      id: 1,
      title: 'Análisis Técnico',
      description: 'Domina las herramientas y técnicas para analizar gráficos de precios',
      icon: BarChart3,
      lessons: [
        { id: 19, title: 'Análisis Técnico Básico', description: 'Introducción a gráficos, soportes, resistencias y tendencias de mercado.', duration: '25 min', type: 'Video + Práctica' },
        { id: 20, title: 'Indicadores Técnicos', description: 'RSI, MACD, medias móviles y otros indicadores esenciales.', duration: '30 min', type: 'Video + Práctica' },
        { id: 21, title: 'Patrones de Velas', description: 'Doji, martillo, estrella fugaz y otros patrones de reversión.', duration: '28 min', type: 'Video + Práctica' },
        { id: 22, title: 'Volumen y Momentum', description: 'Análisis de volumen, divergencias y confirmación.', duration: '22 min', type: 'Video + Práctica' },
        { id: 23, title: 'Fibonacci y Elliott Wave', description: 'Retrocesos de Fibonacci y teoría básica de ondas.', duration: '35 min', type: 'Video + Práctica' },
        { id: 24, title: 'Estrategias de Trading', description: 'Configuración de trades, stop loss, take profit.', duration: '32 min', type: 'Video + Práctica' },
      ]
    },
    {
      id: 2,
      title: 'Análisis Fundamental',
      description: 'Evalúa el valor intrínseco de proyectos y activos digitales',
      icon: Search,
      lessons: [
        { id: 25, title: 'Fundamentos de Análisis On-Chain', description: 'Métricas de red, direcciones activas, hash rate.', duration: '28 min', type: 'Video + Herramientas' },
        { id: 26, title: 'Evaluación de Altcoins', description: 'Cómo analizar whitepapers, equipos y tecnología.', duration: '35 min', type: 'Video + Casos Prácticos' },
        { id: 27, title: 'Ciclos de Mercado', description: 'Ciclos de Bitcoin, altcoin seasons y macroeconomía.', duration: '26 min', type: 'Video + Análisis' },
        { id: 28, title: 'Tokenomics Avanzados', description: 'Supply, demanda, burning, staking rewards.', duration: '30 min', type: 'Video + Herramientas' },
        { id: 29, title: 'Noticias y Eventos de Mercado', description: 'Cómo interpretar noticias que afectan precios.', duration: '24 min', type: 'Video + Recursos' },
      ]
    },
    {
      id: 3,
      title: 'Gestión de Portfolio',
      description: 'Construye y gestiona portfolios diversificados con control de riesgo',
      icon: Briefcase,
      lessons: [
        { id: 30, title: 'Diversificación Estratégica', description: 'Allocation por sectores y correlaciones.', duration: '32 min', type: 'Tutorial Práctico' },
        { id: 31, title: 'Gestión de Riesgo', description: 'Posición sizing, riesgo por trade y protección.', duration: '28 min', type: 'Tutorial Práctico' },
        { id: 32, title: 'Rebalanceo de Portfolio', description: 'Cuándo y cómo rebalancear, toma de ganancias.', duration: '25 min', type: 'Tutorial Práctico' },
        { id: 33, title: 'Herramientas y Tracking', description: 'Portfolio trackers y reportes de rendimiento.', duration: '20 min', type: 'Herramientas' },
        { id: 34, title: 'Preparación para Nivel Avanzado', description: 'Introducción a DeFi y trading avanzado.', duration: '18 min', type: 'Video + Recursos' },
      ]
    }
  ]
};

export const ADVANCED_LEVEL: LevelData = {
  id: 'advanced',
  title: 'Nivel Avanzado',
  subtitle: 'DeFi, Web3 y tecnologías emergentes',
  description: 'Domina las innovaciones más recientes del ecosistema cripto. Aprende DeFi, NFTs, Layer 2, yield farming y las tecnologías que están revolucionando las finanzas descentralizadas.',
  stats: {
    lessons: 14,
    duration: '~10h'
  },
  modules: [
    {
      id: 1,
      title: 'DeFi Mastery',
      description: 'Domina las finanzas descentralizadas y protocolos DeFi avanzados',
      icon: Coins,
      lessons: [
        { id: 35, title: 'Introducción a DeFi', description: 'Protocolos fundamentales, AMMs, lending protocols y yield farming básico.', duration: '35 min', type: 'Video + DApps' },
        { id: 36, title: 'Uniswap y AMMs Avanzados', description: 'Liquidity pools, impermanent loss, farming strategies y V3 concentrado.', duration: '42 min', type: 'Tutorial Práctico' },
        { id: 37, title: 'Compound y Aave: Lending DeFi', description: 'Lending, borrowing, flash loans y estrategias de apalancamiento.', duration: '38 min', type: 'Tutorial Práctico' },
        { id: 38, title: 'Yield Farming Avanzado', description: 'Estrategias complejas, riesgos de smart contracts y maximización de APY.', duration: '45 min', type: 'Estrategias Avanzadas' },
        { id: 39, title: 'Riesgos y Seguridad en DeFi', description: 'Auditorías, rug pulls, exploits históricos y mejores prácticas de seguridad.', duration: '32 min', type: 'Seguridad' },
      ]
    },
    {
      id: 2,
      title: 'Layer 2 & Scaling',
      description: 'Soluciones de escalabilidad, rollups y ecosistemas multi-chain',
      icon: Layers,
      lessons: [
        { id: 40, title: 'Ethereum Layer 2: Polygon y Arbitrum', description: 'Rollups optimistas, zk-rollups, bridging y ecosistemas L2.', duration: '40 min', type: 'Tutorial Práctico' },
        { id: 41, title: 'Solana y Ecosistemas Alternativos', description: 'Solana DeFi, Serum, Raydium y comparativa con ecosistemas Ethereum.', duration: '35 min', type: 'Ecosistemas' },
        { id: 42, title: 'Cross-Chain y Bridges', description: 'Protocolos multi-chain, bridges seguros y gestión de activos cross-chain.', duration: '37 min', type: 'Tutorial Avanzado' },
        { id: 43, title: 'MEV y Trading Avanzado', description: 'Maximal Extractable Value, sandwich attacks, arbitraje y protección.', duration: '43 min', type: 'Trading Avanzado' },
      ]
    },
    {
      id: 3,
      title: 'NFTs & Web3',
      description: 'NFTs avanzados, DAOs, GameFi y el futuro de la propiedad digital',
      icon: Gem,
      lessons: [
        { id: 44, title: 'NFTs Más Allá del Arte', description: 'Utility NFTs, gaming, metaversos y casos de uso empresariales reales.', duration: '38 min', type: 'Casos de Uso' },
        { id: 45, title: 'DAOs y Governance', description: 'Organizaciones descentralizadas, voting mechanisms y participación en governance.', duration: '33 min', type: 'Governance' },
        { id: 46, title: 'GameFi y Play-to-Earn', description: 'Gaming blockchain, economías de juego, guilds y sostenibilidad P2E.', duration: '36 min', type: 'Gaming' },
        { id: 47, title: 'Web3 Social y Identity', description: 'ENS, identidad descentralizada, redes sociales Web3 y reputation systems.', duration: '30 min', type: 'Identity' },
        { id: 48, title: 'El Futuro de Web3', description: 'Tendencias emergentes, regulación, adopción institucional y próximas innovaciones.', duration: '28 min', type: 'Futuro' },
      ]
    }
  ]
};

export const LESSONS_DATA: Record<number, any> = {
  1: {
    id: 1,
    title: '¿Qué es Bitcoin?',
    level: 'Principiante',
    number: '1 de 18',
    duration: '15 minutos',
    type: 'Video + Texto',
    description: 'Descubre qué es Bitcoin, cómo funciona y por qué representa una revolución en el sistema financiero mundial.',
    sections: [
      {
        type: 'intro',
        title: 'Introducción',
        content: `Bitcoin es la primera criptomoneda del mundo, creada en 2009 por **Satoshi Nakamoto**. No es solo dinero digital: es una tecnología que permite transferir valor sin intermediarios.`,
        highlight: { title: 'Concepto Clave', text: 'Bitcoin es **dinero digital descentralizado** - no está controlado por ninguna autoridad central.' }
      },
      { type: 'video', title: 'Video: ¿Qué es Bitcoin?', placeholder: 'Video explicativo sobre Bitcoin (15 min)' },
      {
        type: 'main',
        title: '¿Cómo Funciona?',
        content: 'Bitcoin funciona mediante **blockchain**, un libro contable público que registra todas las transacciones.',
        features: [
          { icon: Users, title: 'Descentralizado', text: 'Sin bancos ni gobiernos. Mantenido por la comunidad.' },
          { icon: Eye, title: 'Transparente', text: 'Todas las transacciones son públicas y verificables.' },
          { icon: Lock, title: 'Seguro', text: 'Protegido por criptografía matemática irrompible.' },
          { icon: Coins, title: 'Escaso', text: 'Solo existirán 21 millones de bitcoins.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [ 'Creado en 2009 por Satoshi Nakamoto.', 'Elimina intermediarios (Bancos).', 'Oferta limitada a 21 millones.', 'Opera 24/7 globalmente.' ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Quién controla Bitcoin?', options: [{id:'a',text:'Bancos'},{id:'b',text:'Gobierno'},{id:'c',text:'Nadie (Descentralizado)'},{id:'d',text:'Apple'}], correctAnswer: 'c', explanation: 'Correcto, Bitcoin es descentralizado.' },
        { id: 'q2', question: '¿Cuál es el límite de Bitcoins?', options: [{id:'a',text:'Infinitos'},{id:'b',text:'21 Millones'},{id:'c',text:'100 Millones'}], correctAnswer: 'b', explanation: 'Exacto, solo existirán 21 millones.' },
        { id: 'q3', question: '¿Qué tecnología usa?', options: [{id:'a',text:'Excel'},{id:'b',text:'Blockchain'},{id:'c',text:'SQL'}], correctAnswer: 'b', explanation: 'Funciona sobre la Blockchain.' }
      ]
    }
  },
  2: {
    id: 2,
    title: '¿Qué es Blockchain?',
    level: 'Principiante',
    number: '2 de 18',
    duration: '20 minutos',
    type: 'Video + Texto',
    description: 'Entiende la tecnología subyacente que hace posible a Bitcoin y otras criptomonedas. La cadena de bloques explicada fácil.',
    sections: [
      {
        type: 'intro',
        title: 'La Cadena de Bloques',
        content: 'Imagina un **libro de contabilidad gigante** compartido por miles de computadoras en todo el mundo. Cada vez que alguien hace una transacción, se anota en este libro. Una vez escrita, **nadie puede borrarla**. Eso es Blockchain.',
        highlight: { title: 'Analogía', text: 'Es como un documento de Google Sheets compartido en modo "solo lectura" para el historial, pero donde solo se pueden agregar nuevas filas al final, nunca borrar las anteriores.' }
      },
      { type: 'video', title: 'Video: Entendiendo Blockchain', placeholder: 'Explicación visual de la cadena de bloques' },
      {
        type: 'main',
        title: 'Componentes Principales',
        content: 'Una blockchain está compuesta literalmente por bloques de información digital encadenados cronológicamente.',
        features: [
          { icon: Layers, title: 'Bloques', text: 'Paquetes de datos que contienen transacciones recientes.' },
          { icon: Link, title: 'La Cadena', text: 'Cada bloque contiene una "huella" digital del bloque anterior, uniéndolos matemáticamente.' },
          { icon: Globe, title: 'Red Distribuida', text: 'La copia del libro existe en miles de nodos a la vez, no en un servidor central.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Resumen',
        items: ['Es una base de datos distribuida y segura.', 'Es inmutable: lo que se escribe no se puede borrar.', 'Elimina la necesidad de confianza en un tercero.']
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Se puede borrar una transacción de Bitcoin?', options: [{id:'a',text:'Sí, el banco puede'},{id:'b',text:'No, es inmutable'},{id:'c',text:'Solo si pagas'}], correctAnswer: 'b', explanation: 'Una vez confirmada en la blockchain, es imposible de borrar.' },
        { id: 'q2', question: '¿Dónde se guarda la Blockchain?', options: [{id:'a',text:'En un servidor de Google'},{id:'b',text:'En miles de computadoras (nodos)'},{id:'c',text:'En tu USB'}], correctAnswer: 'b', explanation: 'Está distribuida en miles de nodos alrededor del mundo.' },
        { id: 'q3', question: '¿Qué conecta los bloques?', options: [{id:'a',text:'Cables'},{id:'b',text:'Criptografía (Hash)'},{id:'c',text:'Internet'}], correctAnswer: 'b', explanation: 'Se unen mediante hashes criptográficos.' }
      ]
    }
  },
  3: {
    id: 3,
    title: 'Minería y Validación',
    level: 'Principiante',
    number: '3 de 18',
    duration: '18 minutos',
    type: 'Video + Texto',
    description: 'Descubre cómo se crean nuevos bitcoins, qué hacen los mineros y cómo la red se mantiene segura sin necesidad de un banco central.',
    sections: [
      {
        type: 'intro',
        title: '¿De Dónde Salen los Bitcoins?',
        content: 'A diferencia del dinero tradicional que los bancos centrales imprimen, los bitcoins se **"minan"**. La minería es el proceso mediante el cual computadoras especializadas compiten para resolver problemas matemáticos complejos. El ganador obtiene el derecho de agregar el siguiente bloque a la blockchain y recibe bitcoins nuevos como recompensa.',
        highlight: { title: 'Dato Clave', text: 'Cada 10 minutos aproximadamente, un nuevo bloque se añade a la blockchain de Bitcoin, liberando nuevas monedas al mercado.' }
      },
      { type: 'video', title: 'Video: La Minería Explicada', placeholder: 'Animación explicativa sobre el proceso de minería (18 min)' },
      {
        type: 'main',
        title: '¿Cómo Funciona?',
        content: 'Los mineros compiten para encontrar un número especial (llamado **nonce**) que, combinado con los datos del bloque, produce un **hash** que cumple ciertas condiciones. Es como una lotería donde más poder de cómputo = más boletos.',
        features: [
          { icon: Cpu, title: 'Proof of Work (PoW)', text: 'El mecanismo de consenso de Bitcoin. Requiere trabajo computacional real para validar transacciones.' },
          { icon: Coins, title: 'Recompensa de Bloque', text: 'Actualmente 3.125 BTC por bloque (después del Halving 2024). Se reduce a la mitad cada ~4 años.' },
          { icon: Shield, title: 'Seguridad', text: 'Atacar la red requeriría controlar más del 50% del poder de cómputo mundial dedicado a Bitcoin.' },
          { icon: Zap, title: 'Dificultad Ajustable', text: 'La red ajusta la dificultad cada 2016 bloques para mantener el ritmo de 10 min/bloque.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'La minería crea nuevos bitcoins y valida transacciones simultáneamente.',
          'El Halving reduce la recompensa cada 4 años, haciendo a Bitcoin deflacionario.',
          'No necesitas minar para usar Bitcoin - puedes simplemente comprarlo.',
          'La minería consume energía, pero cada vez más proviene de fuentes renovables.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué reciben los mineros por su trabajo?', options: [{id:'a',text:'Un salario del gobierno'},{id:'b',text:'Bitcoins nuevos + comisiones de transacción'},{id:'c',text:'Acciones de Bitcoin Inc.'},{id:'d',text:'Nada, es voluntario'}], correctAnswer: 'b', explanation: 'Los mineros reciben la recompensa de bloque (BTC nuevos) más las comisiones de las transacciones incluidas.' },
        { id: 'q2', question: '¿Qué es el Halving?', options: [{id:'a',text:'Cuando Bitcoin se divide en dos'},{id:'b',text:'La reducción a la mitad de la recompensa minera cada ~4 años'},{id:'c',text:'Una actualización de software'}], correctAnswer: 'b', explanation: 'El Halving reduce la emisión de nuevos BTC, aumentando su escasez con el tiempo.' },
        { id: 'q3', question: '¿Qué mecanismo de consenso usa Bitcoin?', options: [{id:'a',text:'Proof of Stake'},{id:'b',text:'Proof of Work'},{id:'c',text:'Proof of Authority'}], correctAnswer: 'b', explanation: 'Bitcoin usa Proof of Work (Prueba de Trabajo), que requiere poder computacional.' }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Descentralización',
    level: 'Principiante',
    number: '4 de 18',
    duration: '12 minutos',
    type: 'Video + Texto',
    description: 'Entiende por qué la descentralización es la característica más revolucionaria de Bitcoin y qué problemas resuelve.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Importa Tanto?',
        content: 'La descentralización significa que **ninguna persona, empresa o gobierno** controla Bitcoin. No hay CEO, no hay oficinas centrales, no hay servidor que apagar. Es una red mantenida por miles de participantes voluntarios alrededor del mundo.',
        highlight: { title: 'El Problema que Resuelve', text: 'Históricamente, todo el dinero digital requería un intermediario de confianza (bancos, PayPal). Bitcoin elimina esa necesidad.' }
      },
      { type: 'video', title: 'Video: El Poder de No Tener Jefe', placeholder: 'Explicación visual de la descentralización (12 min)' },
      {
        type: 'comparison',
        title: 'Centralizado vs Descentralizado',
        content: 'Comparemos cómo funciona el dinero tradicional versus Bitcoin.',
        table: [
          { aspect: 'Control', trad: 'Un banco o gobierno decide las reglas.', btc: 'Las reglas están en el código, nadie puede cambiarlas unilateralmente.' },
          { aspect: 'Censura', trad: 'Tu cuenta puede ser congelada.', btc: 'Nadie puede bloquear tus transacciones.' },
          { aspect: 'Punto de Falla', trad: 'Si el servidor cae, el sistema para.', btc: 'Miles de nodos; imposible de apagar.' },
          { aspect: 'Transparencia', trad: 'Auditorías cerradas.', btc: 'Todo el código y transacciones son públicos.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Pilares de la Descentralización',
        features: [
          { icon: Globe, title: 'Nodos Distribuidos', text: 'Más de 50,000 computadoras en todo el mundo mantienen una copia completa de la blockchain.' },
          { icon: Users, title: 'Mineros Independientes', text: 'Miles de mineros compiten, ninguno tiene control mayoritario.' },
          { icon: Shield, title: 'Código Abierto', text: 'Cualquiera puede auditar el código de Bitcoin. Sin secretos.' },
          { icon: Lock, title: 'Resistente a Censura', text: 'Mientras tengas internet, puedes enviar y recibir Bitcoin.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'La descentralización protege contra la censura y la confiscación.',
          'No hay un "dueño" de Bitcoin que pueda cambiar las reglas.',
          'Es la razón por la cual Bitcoin sigue funcionando después de 15+ años.',
          'Es casi imposible de "apagar" - tendrías que apagar todo el internet mundial.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Quién puede congelar tu Bitcoin?', options: [{id:'a',text:'El gobierno'},{id:'b',text:'El CEO de Bitcoin'},{id:'c',text:'Nadie (si controlas tus llaves)'},{id:'d',text:'Los bancos'}], correctAnswer: 'c', explanation: 'Si tú controlas tus llaves privadas, nadie puede confiscar o congelar tus fondos.' },
        { id: 'q2', question: '¿Por qué es casi imposible apagar Bitcoin?', options: [{id:'a',text:'Porque está protegido por el ejército'},{id:'b',text:'Porque funciona en miles de computadoras distribuidas globalmente'},{id:'c',text:'Porque es ilegal apagarlo'}], correctAnswer: 'b', explanation: 'Tendrías que apagar simultáneamente decenas de miles de nodos en todo el mundo.' },
        { id: 'q3', question: '¿Qué significa "código abierto"?', options: [{id:'a',text:'Que es gratis'},{id:'b',text:'Que cualquiera puede ver, auditar y proponer cambios al código'},{id:'c',text:'Que está abierto solo para programadores'}], correctAnswer: 'b', explanation: 'Código abierto (Open Source) significa transparencia total y revisión pública.' }
      ]
    }
  },
  5: {
    id: 5,
    title: 'Ventajas y Desventajas',
    level: 'Principiante',
    number: '5 de 18',
    duration: '16 minutos',
    type: 'Video + Texto',
    description: 'Un análisis honesto y objetivo de los pros y contras de Bitcoin. Conoce tanto su potencial como sus limitaciones.',
    sections: [
      {
        type: 'intro',
        title: 'Una Visión Equilibrada',
        content: 'Bitcoin no es perfecto. Ninguna tecnología lo es. Antes de invertir tiempo o dinero, es crucial entender tanto sus **fortalezas únicas** como sus **limitaciones reales**. Aquí te presentamos un análisis objetivo.',
        highlight: { title: 'Regla de Oro', text: 'Nunca inviertas en algo que no entiendas completamente. Esta lección te ayudará a tomar decisiones informadas.' }
      },
      { type: 'video', title: 'Video: Pros y Contras de Bitcoin', placeholder: 'Análisis equilibrado de Bitcoin (16 min)' },
      {
        type: 'main',
        title: 'Ventajas de Bitcoin',
        features: [
          { icon: Globe, title: 'Acceso Global', text: 'Cualquiera con internet puede usarlo. Sin discriminación bancaria, sin fronteras.' },
          { icon: Lock, title: 'Resistente a Censura', text: 'Ningún gobierno puede congelar tus fondos si controlas tus llaves.' },
          { icon: Coins, title: 'Escasez Programada', text: 'Solo 21 millones existirán. A diferencia del dinero fiat, no se puede imprimir más.' },
          { icon: Clock, title: 'Disponible 24/7', text: 'Opera todos los días del año, sin horarios bancarios ni feriados.' },
          { icon: Eye, title: 'Transparencia Total', text: 'Todas las transacciones son públicas y auditables por cualquiera.' },
          { icon: Shield, title: 'Seguridad Probada', text: '15+ años funcionando sin hackeos al protocolo central.' }
        ]
      },
      {
        type: 'main',
        title: 'Desventajas y Riesgos',
        features: [
          { icon: Activity, title: 'Volatilidad Extrema', text: 'El precio puede subir o bajar 20%+ en un día. No apto para los que necesitan estabilidad.' },
          { icon: AlertTriangle, title: 'Irreversibilidad', text: 'Si envías a la dirección equivocada, no hay banco que revierta la transacción.' },
          { icon: Zap, title: 'Consumo Energético', text: 'La minería requiere mucha electricidad, aunque cada vez más es renovable.' },
          { icon: Clock, title: 'Velocidad Limitada', text: 'La red principal procesa ~7 transacciones/segundo (vs miles de Visa).' },
          { icon: Key, title: 'Responsabilidad Personal', text: 'Si pierdes tu frase semilla, pierdes tus fondos para siempre.' },
          { icon: Search, title: 'Curva de Aprendizaje', text: 'Requiere educación para usarlo de forma segura.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Bitcoin es excelente para ahorro a largo plazo y transferencias internacionales.',
          'No es ideal para gastos diarios pequeños (aún) ni para aversión al riesgo.',
          'La volatilidad es un riesgo, pero históricamente ha favorecido a quienes mantienen largo plazo.',
          'La responsabilidad personal es tanto una ventaja (control) como un riesgo (errores).'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuál es una desventaja REAL de Bitcoin?', options: [{id:'a',text:'Que el gobierno puede imprimir más'},{id:'b',text:'Su alta volatilidad de precio'},{id:'c',text:'Que solo funciona los días laborables'}], correctAnswer: 'b', explanation: 'La volatilidad es real. El precio puede fluctuar dramáticamente en cortos periodos.' },
        { id: 'q2', question: '¿Qué pasa si envías Bitcoin a una dirección incorrecta?', options: [{id:'a',text:'El banco lo revierte'},{id:'b',text:'Bitcoin te lo reembolsa'},{id:'c',text:'Se pierde para siempre (irreversible)'}], correctAnswer: 'c', explanation: 'Las transacciones de Bitcoin son irreversibles. Siempre verifica la dirección.' },
        { id: 'q3', question: '¿Cuántos Bitcoin existirán máximo?', options: [{id:'a',text:'Infinitos'},{id:'b',text:'21 millones'},{id:'c',text:'100 millones'}], correctAnswer: 'b', explanation: 'La escasez programada de 21 millones es una de sus principales propuestas de valor.' }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Historia y Evolución',
    level: 'Principiante',
    number: '6 de 18',
    duration: '22 minutos',
    type: 'Video + Texto',
    description: 'Viaja desde el misterioso Whitepaper de 2008 hasta la adopción institucional de hoy. Una historia fascinante.',
    sections: [
      {
        type: 'intro',
        title: 'De Idea Radical a Activo Global',
        content: 'Bitcoin nació de una crisis financiera y una idea revolucionaria: **¿y si el dinero no necesitara bancos?** Lo que comenzó como un experimento entre criptógrafos es hoy un activo de más de $1 trillón.',
        highlight: { title: 'El Contexto', text: 'Bitcoin se lanzó en enero 2009, semanas después de la mayor crisis financiera desde 1929. No fue coincidencia.' }
      },
      { type: 'video', title: 'Video: La Historia de Bitcoin', placeholder: 'Documental resumido sobre los orígenes (22 min)' },
      {
        type: 'main',
        title: 'Línea del Tiempo',
        content: 'Los momentos que definieron a Bitcoin:',
        features: [
          { icon: BookOpen, title: '2008: El Whitepaper', text: 'Satoshi Nakamoto publica "Bitcoin: A Peer-to-Peer Electronic Cash System".' },
          { icon: Rocket, title: '2009: Bloque Génesis', text: '3 de enero: Se mina el primer bloque. Satoshi incluye un mensaje sobre el rescate bancario.' },
          { icon: Coins, title: '2010: Primera Compra Real', text: '22 de mayo: Laszlo paga 10,000 BTC por 2 pizzas (~$700M hoy). Se celebra el "Bitcoin Pizza Day".' },
          { icon: TrendingUp, title: '2013-2017: Ciclos de Adopción', text: 'Primeros exchanges, hackeos (Mt. Gox), y el bull run que llevó BTC a $20,000.' },
          { icon: Briefcase, title: '2020-2021: Instituciones Entran', text: 'MicroStrategy, Tesla y fondos de inversión compran Bitcoin como reserva de valor.' },
          { icon: Target, title: '2024: ETFs Aprobados', text: 'La SEC aprueba ETFs de Bitcoin spot. Wall Street adopta cripto oficialmente.' }
        ]
      },
      {
        type: 'main',
        title: '¿Quién es Satoshi Nakamoto?',
        content: 'Nadie lo sabe con certeza. Satoshi desapareció en 2011 después de entregar el proyecto a la comunidad. Podría ser una persona o un grupo. Sus ~1 millón de BTC nunca se han movido.',
        highlight: { title: 'El Misterio', text: 'La identidad desconocida de Satoshi es, paradójicamente, una fortaleza: Bitcoin no tiene líder que pueda ser arrestado, sobornado o presionado.' }
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Bitcoin nació como respuesta a la crisis financiera de 2008.',
          'Ha sobrevivido 15+ años, múltiples "muertes" declaradas y crisis.',
          'Pasó de valer $0 a ser adoptado por gobiernos y corporaciones.',
          'Su creador anónimo nunca ha tocado sus monedas.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuándo se minó el primer bloque de Bitcoin?', options: [{id:'a',text:'2005'},{id:'b',text:'3 de enero de 2009'},{id:'c',text:'2012'}], correctAnswer: 'b', explanation: 'El "Bloque Génesis" se minó el 3 de enero de 2009.' },
        { id: 'q2', question: '¿Qué evento se celebra el 22 de mayo?', options: [{id:'a',text:'El cumpleaños de Satoshi'},{id:'b',text:'Bitcoin Pizza Day'},{id:'c',text:'El día del Halving'}], correctAnswer: 'b', explanation: 'Se conmemora la primera compra real con Bitcoin: 10,000 BTC por 2 pizzas.' },
        { id: 'q3', question: '¿Qué pasó con Satoshi Nakamoto?', options: [{id:'a',text:'Fue arrestado'},{id:'b',text:'Desapareció en 2011, identidad desconocida'},{id:'c',text:'Vendió todos sus Bitcoin'}], correctAnswer: 'b', explanation: 'Satoshi entregó el proyecto a la comunidad y desapareció. Nunca ha movido sus monedas.' }
      ]
    }
  },
  7: {
    id: 7,
    title: '¿Qué es una Wallet?',
    level: 'Principiante',
    number: '7 de 18',
    duration: '18 minutos',
    type: 'Video + Texto',
    description: 'Descubre qué son realmente las wallets de criptomonedas, los diferentes tipos que existen y cuál es mejor para ti.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Billetera Digital (Pero No Exactamente)',
        content: 'Contrario a lo que sugiere el nombre, una wallet **no "guarda" tus bitcoins**. Tus monedas siempre están en la blockchain. Una wallet es más como un **llavero digital**: guarda las llaves que te permiten acceder y mover tus fondos.',
        highlight: { title: 'Concepto Clave', text: 'La wallet guarda tus LLAVES, no tus monedas. Es la diferencia más importante que debes entender.' }
      },
      { type: 'video', title: 'Video: Tipos de Wallets', placeholder: 'Guía visual de wallets (18 min)' },
      {
        type: 'main',
        title: 'Tipos de Wallets',
        features: [
          { icon: Smartphone, title: 'Hot Wallets (Calientes)', text: 'Conectadas a internet. Apps móviles (Trust Wallet, MetaMask) o de escritorio. Convenientes pero más vulnerables.' },
          { icon: Shield, title: 'Cold Wallets (Frías)', text: 'Desconectadas de internet. Hardware wallets (Ledger, Trezor). Máxima seguridad para grandes cantidades.' },
          { icon: Key, title: 'Custodial', text: 'Un tercero (exchange) guarda tus llaves. Fácil pero no tienes control real. "Not your keys, not your coins".' },
          { icon: Lock, title: 'Non-Custodial', text: 'TÚ controlas las llaves. Mayor responsabilidad pero verdadera propiedad.' }
        ]
      },
      {
        type: 'comparison',
        title: '¿Cuál Elegir?',
        table: [
          { aspect: 'Para empezar', trad: 'Hot wallet móvil (Trust Wallet, Exodus)', btc: 'Fácil de usar, gratis, suficiente para aprender.' },
          { aspect: 'Cantidades medianas', trad: 'Hot wallet + respaldo seguro', btc: 'Buena seguridad si cuidas tu frase semilla.' },
          { aspect: 'Ahorro largo plazo', trad: 'Hardware wallet (Ledger, Trezor)', btc: 'Inversión de $70-150 que vale la pena.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Las wallets guardan llaves, no monedas.',
          'Hot = conectada = conveniente pero más riesgo.',
          'Cold = desconectada = más segura para cantidades grandes.',
          'Si no controlas las llaves, no controlas realmente tus cripto.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué guarda realmente una wallet?', options: [{id:'a',text:'Tus bitcoins físicamente'},{id:'b',text:'Tus llaves criptográficas'},{id:'c',text:'Una copia de la blockchain'}], correctAnswer: 'b', explanation: 'La wallet guarda las llaves que te permiten acceder a tus fondos en la blockchain.' },
        { id: 'q2', question: '¿Qué tipo de wallet es más segura para grandes cantidades?', options: [{id:'a',text:'Hot wallet en el celular'},{id:'b',text:'La wallet del exchange'},{id:'c',text:'Cold wallet (hardware)'}], correctAnswer: 'c', explanation: 'Las hardware wallets están desconectadas de internet, protegiéndolas de hackeos remotos.' },
        { id: 'q3', question: '¿Qué significa "Not your keys, not your coins"?', options: [{id:'a',text:'Debes hacer copias de tus llaves'},{id:'b',text:'Si otro controla tus llaves, no son realmente tus monedas'},{id:'c',text:'Las llaves son de metal'}], correctAnswer: 'b', explanation: 'Si dejas tus cripto en un exchange, ellos tienen el control real. Pueden congelarte o quebrar.' }
      ]
    }
  },
  8: {
    id: 8,
    title: 'Llaves Públicas y Privadas',
    level: 'Principiante',
    number: '8 de 18',
    duration: '25 minutos',
    type: 'Video + Texto',
    description: 'Entiende la criptografía básica detrás de Bitcoin. Cómo funcionan las direcciones y por qué tu llave privada es sagrada.',
    sections: [
      {
        type: 'intro',
        title: 'El Corazón de la Seguridad',
        content: 'Bitcoin usa **criptografía de clave pública**. Tienes dos llaves matemáticamente relacionadas: una **pública** (tu dirección, que compartes) y una **privada** (tu secreto absoluto, que NUNCA compartes).',
        highlight: { title: 'Analogía', text: 'La llave pública es como tu número de cuenta bancaria (puedes darlo). La llave privada es como el PIN + firma + reconocimiento facial combinados (jamás lo compartas).' }
      },
      { type: 'video', title: 'Video: Criptografía Explicada Simple', placeholder: 'Animación sobre llaves públicas y privadas (25 min)' },
      {
        type: 'main',
        title: '¿Cómo Funcionan?',
        features: [
          { icon: Eye, title: 'Llave Pública / Dirección', text: 'Se deriva de tu llave privada. Es lo que compartes para recibir pagos. Ejemplo: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
          { icon: Lock, title: 'Llave Privada', text: 'Un número secreto de 256 bits. Quien la tenga, controla los fondos. NUNCA la compartas, ni con "soporte técnico".' },
          { icon: Key, title: 'Firma Digital', text: 'Cuando envías Bitcoin, firmas la transacción con tu llave privada. La red verifica con tu llave pública.' }
        ]
      },
      {
        type: 'main',
        title: 'La Matemática Mágica',
        content: 'Es fácil generar una llave pública desde una privada. Pero es **matemáticamente imposible** hacer lo contrario (con la tecnología actual). Esta "función de un solo sentido" es lo que hace seguro a Bitcoin.',
        highlight: { title: 'Dato Técnico', text: 'Romper una llave privada de Bitcoin requeriría más energía de la que existe en el sol. Es seguro.' }
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Llave pública = dirección para recibir (compartible).',
          'Llave privada = control total de tus fondos (SECRETO ABSOLUTO).',
          'Si alguien obtiene tu llave privada, puede robarte todo.',
          'Las wallets modernas manejan esto automáticamente con la frase semilla.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuál llave puedes compartir públicamente?', options: [{id:'a',text:'La llave privada'},{id:'b',text:'La llave pública / dirección'},{id:'c',text:'Ninguna'}], correctAnswer: 'b', explanation: 'La llave pública (dirección) es para recibir pagos. Es seguro compartirla.' },
        { id: 'q2', question: 'Alguien de "soporte" te pide tu llave privada. ¿Qué haces?', options: [{id:'a',text:'Se la doy para que me ayude'},{id:'b',text:'NUNCA - es una estafa 100%'},{id:'c',text:'Solo si es por email oficial'}], correctAnswer: 'b', explanation: 'NADIE legítimo te pedirá jamás tu llave privada o frase semilla. Es estafa siempre.' },
        { id: 'q3', question: '¿Se puede obtener la llave privada desde la pública?', options: [{id:'a',text:'Sí, con software especial'},{id:'b',text:'No, es matemáticamente imposible'},{id:'c',text:'Solo los mineros pueden'}], correctAnswer: 'b', explanation: 'La criptografía de Bitcoin está diseñada para que esto sea imposible.' }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Configurar tu Primera Wallet',
    level: 'Principiante',
    number: '9 de 18',
    duration: '30 minutos',
    type: 'Tutorial',
    description: 'Guía práctica paso a paso para descargar, instalar y configurar tu primera wallet de criptomonedas de forma segura.',
    sections: [
      {
        type: 'intro',
        title: 'Manos a la Obra',
        content: 'Es hora de crear tu primera wallet. Usaremos una **hot wallet móvil** para empezar - es gratis, fácil y perfecta para aprender. Recomendamos **Trust Wallet** o **Exodus** para principiantes.',
        highlight: { title: 'Importante', text: 'Descarga SOLO de fuentes oficiales (App Store, Google Play, sitio web oficial). Hay apps falsas que roban fondos.' }
      },
      { type: 'video', title: 'Video Tutorial: Configuración Paso a Paso', placeholder: 'Tutorial práctico de instalación (30 min)' },
      {
        type: 'main',
        title: 'Pasos de Configuración',
        features: [
          { icon: Smartphone, title: 'Paso 1: Descargar', text: 'Ve a la tienda oficial de tu dispositivo. Busca "Trust Wallet" y verifica el desarrollador (Trust Wallet).' },
          { icon: Key, title: 'Paso 2: Crear Wallet', text: 'Selecciona "Crear nueva wallet". La app generará tu frase semilla de 12-24 palabras.' },
          { icon: BookOpen, title: 'Paso 3: Anotar Frase Semilla', text: 'Escríbela EN PAPEL (nunca digital). Guárdala en lugar seguro. Esta frase ES tu wallet.' },
          { icon: CheckCircle, title: 'Paso 4: Verificar', text: 'La app te pedirá confirmar algunas palabras. Esto asegura que la anotaste correctamente.' },
          { icon: Shield, title: 'Paso 5: Seguridad Extra', text: 'Activa PIN/biometría para abrir la app. Es una capa adicional de protección.' }
        ]
      },
      {
        type: 'main',
        title: 'Errores Comunes a Evitar',
        features: [
          { icon: AlertTriangle, title: 'Screenshot de la frase', text: 'NUNCA tomes foto o screenshot. Los hackers buscan esto en tu galería/nube.' },
          { icon: AlertTriangle, title: 'Guardar en notas/email', text: 'Cualquier formato digital es hackeable. Solo papel físico.' },
          { icon: AlertTriangle, title: 'Descargar de links', text: 'Solo tiendas oficiales. Ignora links en emails, Discord o Telegram.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist Final',
        items: [
          'App descargada de fuente oficial.',
          'Frase semilla escrita en papel (2 copias en lugares diferentes).',
          'Frase verificada correctamente.',
          'PIN/biometría activado.',
          'Listo para recibir tu primer cripto.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Dónde debes guardar tu frase semilla?', options: [{id:'a',text:'En las notas del celular'},{id:'b',text:'Screenshot en Google Photos'},{id:'c',text:'Escrita en papel, en lugar seguro'}], correctAnswer: 'c', explanation: 'El papel no se puede hackear remotamente. Es el método más seguro para principiantes.' },
        { id: 'q2', question: '¿De dónde debes descargar la wallet?', options: [{id:'a',text:'De un link que me enviaron por Telegram'},{id:'b',text:'De la App Store / Google Play oficial'},{id:'c',text:'De cualquier sitio web'}], correctAnswer: 'b', explanation: 'Solo fuentes oficiales. Los estafadores crean apps falsas idénticas.' },
        { id: 'q3', question: '¿Qué representa la frase semilla de 12-24 palabras?', options: [{id:'a',text:'Una contraseña que puedes cambiar'},{id:'b',text:'El acceso completo a todos tus fondos'},{id:'c',text:'Solo un respaldo opcional'}], correctAnswer: 'b', explanation: 'La frase semilla ES tu wallet. Quien la tenga, controla tus fondos.' }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Respaldo y Recuperación',
    level: 'Principiante',
    number: '10 de 18',
    duration: '20 minutos',
    type: 'Video + Texto',
    description: 'Aprende por qué la frase semilla es tu posesión más valiosa y cómo protegerla correctamente.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Seguro de Vida Cripto',
        content: 'Tu teléfono puede romperse, perderse o ser robado. Tu computadora puede fallar. Pero si tienes tu **frase semilla** (seed phrase), puedes recuperar TODOS tus fondos en cualquier dispositivo nuevo.',
        highlight: { title: 'La Verdad Dura', text: 'Se estima que 3-4 millones de Bitcoin están perdidos para siempre porque sus dueños perdieron sus llaves. No seas parte de esa estadística.' }
      },
      { type: 'video', title: 'Video: Protegiendo tu Frase Semilla', placeholder: 'Guía de respaldo seguro (20 min)' },
      {
        type: 'main',
        title: '¿Qué es la Frase Semilla?',
        content: 'Es una lista de 12 o 24 palabras en inglés que representa matemáticamente tu llave privada de forma legible. Fue creada para que humanos podamos respaldar nuestras llaves sin memorizar números enormes.',
        features: [
          { icon: Key, title: 'BIP-39', text: 'El estándar que usan casi todas las wallets. 2048 palabras posibles, orden específico.' },
          { icon: RefreshCw, title: 'Recuperación Universal', text: 'Puedes importar tu frase en cualquier wallet compatible (Trust, Exodus, Ledger, etc.).' },
          { icon: Shield, title: 'Determinística', text: 'La misma frase siempre genera las mismas llaves y direcciones.' }
        ]
      },
      {
        type: 'main',
        title: 'Métodos de Respaldo',
        features: [
          { icon: BookOpen, title: 'Papel (Básico)', text: 'Escribe en papel resistente. 2+ copias en ubicaciones diferentes (casa, caja fuerte, familiar de confianza).' },
          { icon: Shield, title: 'Metal (Avanzado)', text: 'Placas de acero grabadas. Resisten fuego, agua e inundaciones. Recomendado para cantidades grandes.' },
          { icon: AlertTriangle, title: 'NUNCA Digital', text: 'Ni fotos, ni notas, ni email, ni nube. Los hackers automatizan búsqueda de frases semilla.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Plan de Respaldo Recomendado',
        items: [
          'Escribe la frase 2-3 veces en papel de calidad.',
          'Guarda copias en ubicaciones físicas separadas.',
          'Considera placas de metal para cantidades significativas.',
          'Testea la recuperación: restaura en otra wallet para verificar.',
          'Nunca la compartas. Ni familia, ni "soporte", ni nadie.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuántas copias de tu frase semilla deberías tener?', options: [{id:'a',text:'Solo 1, para que nadie la encuentre'},{id:'b',text:'2-3 en ubicaciones físicas diferentes'},{id:'c',text:'10 copias en la nube'}], correctAnswer: 'b', explanation: 'Múltiples copias físicas protegen contra pérdida. Nunca digital.' },
        { id: 'q2', question: '¿Qué pasa si pierdes tu frase semilla y tu teléfono?', options: [{id:'a',text:'Llamas a soporte de Bitcoin'},{id:'b',text:'Pierdes acceso a tus fondos PARA SIEMPRE'},{id:'c',text:'El banco te ayuda'}], correctAnswer: 'b', explanation: 'Sin la frase semilla, no hay forma de recuperar tus fondos. No existe "soporte de Bitcoin".' },
        { id: 'q3', question: '¿Puedes usar tu frase semilla en diferentes apps de wallet?', options: [{id:'a',text:'No, solo funciona en la app original'},{id:'b',text:'Sí, es un estándar universal (BIP-39)'},{id:'c',text:'Solo si pagas'}], correctAnswer: 'b', explanation: 'El estándar BIP-39 permite importar tu frase en cualquier wallet compatible.' }
      ]
    }
  },
  11: {
    id: 11,
    title: 'Buenas Prácticas de Seguridad',
    level: 'Principiante',
    number: '11 de 18',
    duration: '22 minutos',
    type: 'Video + Texto',
    description: 'Hábitos esenciales de seguridad digital para proteger tus criptomonedas de amenazas comunes.',
    sections: [
      {
        type: 'intro',
        title: 'La Seguridad es un Hábito',
        content: 'En cripto, **tú eres tu propio banco**. Eso significa que también eres tu propio equipo de seguridad. La mayoría de robos no son por hackeos sofisticados, sino por errores evitables del usuario.',
        highlight: { title: 'Estadística Real', text: 'El 90% de los fondos robados en cripto son por phishing, ingeniería social o errores del usuario, no por vulnerabilidades técnicas.' }
      },
      { type: 'video', title: 'Video: Seguridad Cripto 101', placeholder: 'Mejores prácticas de seguridad (22 min)' },
      {
        type: 'main',
        title: 'Reglas de Oro',
        features: [
          { icon: Lock, title: 'Contraseñas Únicas', text: 'Usa un gestor de contraseñas (Bitwarden, 1Password). Nunca repitas contraseñas entre servicios.' },
          { icon: Smartphone, title: '2FA Siempre', text: 'Activa autenticación de 2 factores. Preferiblemente app (Google Authenticator), NO SMS.' },
          { icon: Eye, title: 'Verifica URLs', text: 'Phishing usa dominios similares (bìnance.com vs binance.com). Usa bookmarks para sitios importantes.' },
          { icon: Shield, title: 'Dispositivo Limpio', text: 'No descargues software pirata. Puede contener malware que roba llaves.' },
          { icon: AlertTriangle, title: 'WiFi Público = Peligro', text: 'Nunca hagas transacciones en WiFi público. Usa datos móviles o VPN.' }
        ]
      },
      {
        type: 'main',
        title: 'Señales de Alerta',
        features: [
          { icon: AlertTriangle, title: '"Urgente: Verifica tu cuenta"', text: 'Los exchanges reales nunca te presionan por DM. Es estafa.' },
          { icon: AlertTriangle, title: '"Envía X para recibir 2X"', text: 'NADIE regala dinero. Ni Elon Musk ni ningún famoso.' },
          { icon: AlertTriangle, title: '"Soporte" te contacta primero', text: 'El soporte real NUNCA te escribe primero. Tú inicias el contacto.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist de Seguridad',
        items: [
          'Gestor de contraseñas instalado y usado.',
          '2FA activado en todos los exchanges y emails.',
          'Frase semilla guardada offline, nunca digital.',
          'Verificas URLs antes de conectar wallet.',
          'Desconfías de cualquier mensaje no solicitado.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué tipo de 2FA es más seguro?', options: [{id:'a',text:'SMS al teléfono'},{id:'b',text:'App de autenticación (Google Authenticator)'},{id:'c',text:'Email'}], correctAnswer: 'b', explanation: 'SMS puede ser interceptado (SIM swapping). Las apps de autenticación son más seguras.' },
        { id: 'q2', question: 'Recibes un DM de "Binance Support" pidiendo verificar tu cuenta. ¿Qué haces?', options: [{id:'a',text:'Les doy mis datos para verificar'},{id:'b',text:'Ignoro - el soporte real nunca contacta por DM'},{id:'c',text:'Les pido que me llamen'}], correctAnswer: 'b', explanation: 'El soporte legítimo NUNCA te contacta primero por DM. Es estafa 100%.' },
        { id: 'q3', question: '¿Por qué no deberías usar WiFi público para transacciones?', options: [{id:'a',text:'Es más lento'},{id:'b',text:'Pueden interceptar tu información'},{id:'c',text:'No hay problema'}], correctAnswer: 'b', explanation: 'El WiFi público puede tener atacantes monitoreando el tráfico.' }
      ]
    }
  },
  12: {
    id: 12,
    title: 'Evitar Estafas',
    level: 'Principiante',
    number: '12 de 18',
    duration: '28 minutos',
    type: 'Video + Texto',
    description: 'Conoce las estafas más comunes en el mundo cripto y cómo identificarlas antes de ser víctima.',
    sections: [
      {
        type: 'intro',
        title: 'El Lado Oscuro de Cripto',
        content: 'Donde hay dinero, hay estafadores. El mundo cripto atrae especialmente a criminales porque las transacciones son **irreversibles** y parcialmente anónimas. Conocer las tácticas te protegerá.',
        highlight: { title: 'Regla #1', text: 'Si suena demasiado bueno para ser verdad, es una estafa. Siempre. Sin excepciones.' }
      },
      { type: 'video', title: 'Video: Las Estafas Más Comunes', placeholder: 'Casos reales y cómo evitarlos (28 min)' },
      {
        type: 'main',
        title: 'Tipos de Estafas',
        features: [
          { icon: Coins, title: 'Giveaway Falso', text: '"Envía 0.1 BTC y recibe 0.2 BTC". Nadie regala dinero. Ni Elon, ni exchanges, ni nadie.' },
          { icon: Users, title: 'Suplantación de Identidad', text: 'Cuentas falsas de famosos/influencers promocionando "oportunidades". Verifican el check azul.' },
          { icon: TrendingUp, title: 'Pump & Dump', text: 'Grupos que inflan artificialmente una moneda y venden dejándote con pérdidas.' },
          { icon: Lock, title: 'Phishing', text: 'Sitios web falsos idénticos a exchanges reales. Roban tus credenciales.' },
          { icon: AlertTriangle, title: 'Rug Pull', text: 'Proyectos nuevos que recolectan inversión y desaparecen con el dinero.' },
          { icon: Smartphone, title: 'Romance Scam', text: 'Conexiones románticas online que eventualmente piden cripto para "emergencias".' }
        ]
      },
      {
        type: 'main',
        title: 'Banderas Rojas Universales',
        features: [
          { icon: AlertTriangle, title: 'Retornos Garantizados', text: '"10% diario garantizado" = estafa. Nadie puede garantizar retornos.' },
          { icon: AlertTriangle, title: 'Urgencia Artificial', text: '"Solo 24 horas" o "últimos lugares" presionan para que no pienses.' },
          { icon: AlertTriangle, title: 'Piden tu Frase Semilla', text: 'NUNCA. Ningún servicio legítimo la necesita. Es robo inmediato.' },
          { icon: AlertTriangle, title: 'Solo Testimonios Positivos', text: 'Comunidades donde no se permite ninguna crítica son cultos o estafas.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Cómo Protegerte',
        items: [
          'Investiga antes de invertir (DYOR - Do Your Own Research).',
          'Si te contactan primero ofreciendo dinero, es estafa.',
          'Verifica URLs letra por letra antes de ingresar datos.',
          'Desconfía de retornos "garantizados" o urgencias.',
          'Tu frase semilla es solo tuya. NUNCA la compartas.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '"Elon Musk" te pide enviar 0.5 BTC para recibir 1 BTC de vuelta. ¿Qué es?', options: [{id:'a',text:'Una oportunidad única'},{id:'b',text:'Una estafa (Giveaway Scam)'},{id:'c',text:'Marketing de Tesla'}], correctAnswer: 'b', explanation: 'Los giveaways falsos son extremadamente comunes. Ningún famoso regala cripto así.' },
        { id: 'q2', question: '¿Qué es un "Rug Pull"?', options: [{id:'a',text:'Un tipo de análisis técnico'},{id:'b',text:'Cuando los creadores de un proyecto huyen con los fondos'},{id:'c',text:'Una caída normal del mercado'}], correctAnswer: 'b', explanation: 'Rug pull es cuando desarrolladores abandonan un proyecto llevándose la liquidez.' },
        { id: 'q3', question: 'Un proyecto promete 10% de retorno DIARIO garantizado. ¿Es legítimo?', options: [{id:'a',text:'Sí, si tiene muchos seguidores'},{id:'b',text:'No, retornos garantizados no existen en inversiones'},{id:'c',text:'Depende del proyecto'}], correctAnswer: 'b', explanation: 'Nadie puede garantizar retornos. 10% diario es matemáticamente insostenible y siempre es estafa (esquema Ponzi).' }
      ]
    }
  },
  13: {
    id: 13,
    title: 'Exchanges: Dónde Comprar',
    level: 'Principiante',
    number: '13 de 18',
    duration: '35 minutos',
    type: 'Tutorial',
    description: 'Conoce los diferentes tipos de exchanges, cómo elegir uno seguro y las diferencias entre CEX, DEX y P2P.',
    sections: [
      {
        type: 'intro',
        title: '¿Dónde Compro Mi Primer Bitcoin?',
        content: 'Los **exchanges** son plataformas donde puedes comprar, vender e intercambiar criptomonedas. Son tu puerta de entrada al ecosistema cripto. Existen varios tipos y es crucial elegir uno confiable.',
        highlight: { title: 'Recuerda', text: 'Los exchanges son para comprar/vender. Una vez comprado, considera mover tus fondos a tu propia wallet para máxima seguridad.' }
      },
      { type: 'video', title: 'Video: Comparativa de Exchanges', placeholder: 'Guía de plataformas recomendadas (35 min)' },
      {
        type: 'main',
        title: 'Tipos de Exchanges',
        features: [
          { icon: Briefcase, title: 'CEX (Centralizados)', text: 'Binance, Coinbase, Kraken. Fáciles de usar, requieren verificación (KYC). Ellos custodian tus fondos.' },
          { icon: RefreshCw, title: 'DEX (Descentralizados)', text: 'Uniswap, dYdX. Sin registro, conectas tu wallet. Más privacidad pero más complejo para principiantes.' },
          { icon: Users, title: 'P2P (Persona a Persona)', text: 'Binance P2P, LocalBitcoins. Compras directamente a otro usuario. Útil donde hay restricciones bancarias.' }
        ]
      },
      {
        type: 'comparison',
        title: 'CEX vs DEX vs P2P',
        table: [
          { aspect: 'Facilidad', trad: 'CEX: Muy fácil, como una app de banco', btc: 'Ideal para empezar.' },
          { aspect: 'Privacidad', trad: 'DEX: Sin KYC, máxima privacidad', btc: 'Requiere conocimiento técnico.' },
          { aspect: 'Métodos de pago', trad: 'P2P: Transferencia local, efectivo', btc: 'Bueno donde no hay acceso bancario fácil.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Elegir un Exchange Seguro',
        features: [
          { icon: Shield, title: 'Reputación', text: 'Años de operación, volumen de trading, historial de hackeos.' },
          { icon: Lock, title: 'Seguridad', text: '2FA obligatorio, cold storage para fondos, auditorías públicas.' },
          { icon: Globe, title: 'Disponibilidad', text: 'Que opere legalmente en tu país.' },
          { icon: Coins, title: 'Liquidez', text: 'Mayor volumen = mejores precios y ejecución rápida.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Recomendaciones para Empezar',
        items: [
          'Principiantes: Binance, Coinbase o Kraken (CEX confiables).',
          'Siempre activa 2FA inmediatamente después de registrarte.',
          'Empieza con cantidades pequeñas para aprender.',
          'Una vez cómodo, mueve a tu wallet personal (not your keys...).',
          'Compara fees antes de elegir - varían significativamente.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué tipo de exchange requiere verificación de identidad (KYC)?', options: [{id:'a',text:'DEX (Descentralizado)'},{id:'b',text:'CEX (Centralizado)'},{id:'c',text:'Ninguno'}], correctAnswer: 'b', explanation: 'Los exchanges centralizados (Binance, Coinbase) requieren KYC por regulaciones.' },
        { id: 'q2', question: '¿Dónde es más seguro guardar grandes cantidades a largo plazo?', options: [{id:'a',text:'En el exchange'},{id:'b',text:'En tu propia wallet (self-custody)'},{id:'c',text:'Da igual'}], correctAnswer: 'b', explanation: 'Los exchanges pueden ser hackeados o quebrar. Tu wallet personal es más segura para cantidades significativas.' },
        { id: 'q3', question: '¿Qué es P2P en el contexto de exchanges?', options: [{id:'a',text:'Un tipo de criptomoneda'},{id:'b',text:'Compra/venta directa entre personas'},{id:'c',text:'Un método de minería'}], correctAnswer: 'b', explanation: 'P2P (Peer-to-Peer) permite transacciones directas entre usuarios, sin intermediario.' }
      ]
    }
  },
  14: {
    id: 14,
    title: 'Tu Primera Transacción',
    level: 'Principiante',
    number: '14 de 18',
    duration: '25 minutos',
    type: 'Tutorial',
    description: 'Guía práctica paso a paso para enviar y recibir criptomonedas de forma segura.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento de la Verdad',
        content: 'Has configurado tu wallet, entiendes las llaves y la seguridad. Es hora de hacer tu primera transacción real. Tranquilo, es más fácil de lo que parece - pero hay detalles importantes.',
        highlight: { title: 'Consejo de Oro', text: 'Tu primera transacción debería ser una cantidad PEQUEÑA. Aprende con poco antes de mover cantidades grandes.' }
      },
      { type: 'video', title: 'Video Tutorial: Primera Transacción', placeholder: 'Demostración en vivo paso a paso (25 min)' },
      {
        type: 'main',
        title: 'Recibir Criptomonedas',
        features: [
          { icon: Eye, title: 'Paso 1: Obtén tu dirección', text: 'En tu wallet, busca "Recibir" o "Receive". Copia tu dirección o muestra el código QR.' },
          { icon: Target, title: 'Paso 2: Verifica la red', text: '¡CRÍTICO! Si recibes BTC, usa dirección de Bitcoin. Si recibes ETH, usa Ethereum. Red incorrecta = fondos perdidos.' },
          { icon: Users, title: 'Paso 3: Comparte la dirección', text: 'Envía tu dirección al pagador. Puedes compartirla - es pública y segura.' },
          { icon: Clock, title: 'Paso 4: Espera confirmaciones', text: 'La transacción aparecerá como "pendiente" hasta que la red la confirme.' }
        ]
      },
      {
        type: 'main',
        title: 'Enviar Criptomonedas',
        features: [
          { icon: Target, title: 'Paso 1: Dirección destino', text: 'Obtén la dirección del receptor. VERIFICA que sea de la misma red/criptomoneda.' },
          { icon: CheckCircle, title: 'Paso 2: Triple verificación', text: 'Revisa los primeros y últimos 4-6 caracteres de la dirección. El malware puede cambiar direcciones copiadas.' },
          { icon: Coins, title: 'Paso 3: Cantidad y fee', text: 'Ingresa cuánto enviar. La wallet calculará el fee de red automáticamente.' },
          { icon: Lock, title: 'Paso 4: Confirma y firma', text: 'Revisa todo. Una vez enviado, es IRREVERSIBLE. Tu wallet firma con tu llave privada.' }
        ]
      },
      {
        type: 'main',
        title: 'Errores Fatales a Evitar',
        features: [
          { icon: AlertTriangle, title: 'Red incorrecta', text: 'Enviar BTC a dirección de Ethereum = perdido para siempre.' },
          { icon: AlertTriangle, title: 'Dirección incorrecta', text: 'Un solo carácter mal = fondos van a otra persona (o a nadie).' },
          { icon: AlertTriangle, title: 'Copiar sin verificar', text: 'Existe malware que cambia direcciones en el clipboard. Siempre verifica visualmente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist de Transacción',
        items: [
          'Red correcta (Bitcoin a Bitcoin, Ethereum a Ethereum, etc.).',
          'Dirección verificada carácter por carácter.',
          'Cantidad correcta antes de confirmar.',
          'Fee adecuado (no demasiado bajo o tardará).',
          'Primera vez = cantidad pequeña de prueba.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué debes verificar SIEMPRE antes de enviar cripto?', options: [{id:'a',text:'El clima'},{id:'b',text:'Que la dirección y la red sean correctas'},{id:'c',text:'Que sea de día'}], correctAnswer: 'b', explanation: 'Una dirección o red incorrecta significa perder tus fondos permanentemente.' },
        { id: 'q2', question: '¿Puedes revertir una transacción de Bitcoin si cometiste un error?', options: [{id:'a',text:'Sí, llamando al banco'},{id:'b',text:'Sí, pagando una multa'},{id:'c',text:'No, las transacciones son irreversibles'}], correctAnswer: 'c', explanation: 'Una vez confirmada, una transacción de Bitcoin no se puede revertir. Por eso la verificación es crucial.' },
        { id: 'q3', question: '¿Por qué enviar una cantidad pequeña primero?', options: [{id:'a',text:'Para pagar menos fees'},{id:'b',text:'Para verificar que todo funciona antes de arriesgar más'},{id:'c',text:'No es necesario'}], correctAnswer: 'b', explanation: 'Una transacción de prueba pequeña confirma que tienes la dirección y red correctas.' }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Fees y Confirmaciones',
    level: 'Principiante',
    number: '15 de 18',
    duration: '18 minutos',
    type: 'Video + Texto',
    description: 'Entiende por qué pagamos comisiones, cómo funcionan las confirmaciones y cómo optimizar costos.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Pago Comisiones?',
        content: 'Cuando envías Bitcoin, compites con otras transacciones por espacio en el siguiente bloque. Los mineros priorizan transacciones que pagan **más fees**. Es un mercado de oferta y demanda.',
        highlight: { title: 'No es un Impuesto', text: 'Los fees van a los mineros que validan tu transacción, no a ninguna empresa. Es el costo de usar una red descentralizada.' }
      },
      { type: 'video', title: 'Video: Fees y Confirmaciones', placeholder: 'Explicación de comisiones de red (18 min)' },
      {
        type: 'main',
        title: '¿Cómo se Calculan los Fees?',
        features: [
          { icon: BarChart3, title: 'Congestión de Red', text: 'Más transacciones pendientes = fees más altos. Los fines de semana suelen ser más baratos.' },
          { icon: Layers, title: 'Tamaño de la Transacción', text: 'En Bitcoin, el fee depende del tamaño en bytes, no del monto. Una tx de $10 y una de $10M pueden costar lo mismo.' },
          { icon: Zap, title: 'Prioridad Elegida', text: 'La mayoría de wallets te dejan elegir: rápido (caro), normal, o económico (lento).' }
        ]
      },
      {
        type: 'main',
        title: 'Confirmaciones: ¿Cuándo Está "Listo"?',
        content: 'Una transacción pasa por estados hasta ser irreversible:',
        features: [
          { icon: Clock, title: '0 confirmaciones', text: 'Pendiente en la mempool. Aún puede fallar.' },
          { icon: CheckCircle, title: '1 confirmación', text: 'Incluida en un bloque. Para cantidades pequeñas, usualmente suficiente.' },
          { icon: Shield, title: '3-6 confirmaciones', text: 'Estándar de la industria para cantidades medianas/grandes. Prácticamente irreversible.' }
        ]
      },
      {
        type: 'main',
        title: 'Tips para Ahorrar en Fees',
        features: [
          { icon: Clock, title: 'Timing', text: 'Evita horas pico (mercado muy activo). Fines de semana suelen ser más baratos.' },
          { icon: Layers, title: 'Batching', text: 'Si debes hacer múltiples envíos, agrúpalos en una sola transacción.' },
          { icon: Zap, title: 'Layer 2', text: 'Para pagos pequeños, usa Lightning Network (Bitcoin) o L2s (Ethereum). Fees de fracciones de centavo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Los fees van a mineros, no a empresas.',
          'Fees varían según congestión de red - no son fijos.',
          '1 confirmación = incluida en blockchain. 6 = prácticamente irreversible.',
          'Para pagos pequeños frecuentes, considera soluciones Layer 2.',
          'Siempre verifica el fee antes de confirmar - puede sorprenderte en momentos de alta congestión.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿A quién van las comisiones (fees) de transacción?', options: [{id:'a',text:'A Bitcoin Inc.'},{id:'b',text:'A los mineros/validadores'},{id:'c',text:'Al gobierno'}], correctAnswer: 'b', explanation: 'Los fees compensan a los mineros que incluyen tu transacción en un bloque.' },
        { id: 'q2', question: '¿Cuántas confirmaciones se recomiendan para cantidades grandes?', options: [{id:'a',text:'0 (instantáneo)'},{id:'b',text:'1'},{id:'c',text:'3-6 confirmaciones'}], correctAnswer: 'c', explanation: 'Para cantidades significativas, esperar 3-6 confirmaciones hace la transacción prácticamente irreversible.' },
        { id: 'q3', question: '¿Qué pasa si pones un fee muy bajo?', options: [{id:'a',text:'La transacción es gratis'},{id:'b',text:'Puede tardar mucho o nunca confirmarse'},{id:'c',text:'Es ilegal'}], correctAnswer: 'b', explanation: 'Los mineros priorizan fees altos. Un fee muy bajo puede dejar tu transacción "atorada" por horas o días.' }
      ]
    }
  },
  16: {
    id: 16,
    title: 'Block Explorers',
    level: 'Principiante',
    number: '16 de 18',
    duration: '15 minutos',
    type: 'Tutorial',
    description: 'Aprende a usar exploradores de bloques para rastrear transacciones y verificar información en la blockchain.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Ventana a la Blockchain',
        content: 'Un **block explorer** es un sitio web que te permite ver toda la información pública de una blockchain: transacciones, direcciones, bloques, etc. Es como Google para la blockchain.',
        highlight: { title: 'Transparencia Total', text: 'Cualquiera puede verificar cualquier transacción. Esto es lo que hace a Bitcoin tan transparente y auditable.' }
      },
      { type: 'video', title: 'Video: Usando Block Explorers', placeholder: 'Tutorial práctico con ejemplos reales (15 min)' },
      {
        type: 'main',
        title: 'Exploradores Populares',
        features: [
          { icon: Search, title: 'Bitcoin', text: 'mempool.space (hermoso UI), blockchain.com, blockstream.info' },
          { icon: Search, title: 'Ethereum', text: 'etherscan.io (el estándar), ethplorer.io' },
          { icon: Search, title: 'Multi-chain', text: 'blockchair.com soporta múltiples blockchains.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Puedes Ver?',
        features: [
          { icon: ArrowRight, title: 'Estado de Transacción', text: 'Pendiente, confirmada, cantidad de confirmaciones. Útil para saber si "ya llegó".' },
          { icon: Eye, title: 'Balance de Direcciones', text: 'Ver cuánto tiene cualquier dirección pública (sin saber quién es el dueño).' },
          { icon: Layers, title: 'Información de Bloques', text: 'Qué transacciones incluyó, quién lo minó, cuándo.' },
          { icon: Activity, title: 'Fees Actuales', text: 'mempool.space muestra fees recomendados en tiempo real.' }
        ]
      },
      {
        type: 'main',
        title: 'Casos de Uso Prácticos',
        features: [
          { icon: Clock, title: 'Rastrear un envío', text: '"¿Ya llegó mi Bitcoin?" Pega el txid o tu dirección y verifica.' },
          { icon: Shield, title: 'Verificar un pago recibido', text: 'Confirma que la transacción existe antes de entregar un producto/servicio.' },
          { icon: Search, title: 'Investigar proyectos', text: 'Ver si una dirección tiene fondos reales o es sospechosa.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Puntos Clave',
        items: [
          'Block explorers permiten ver CUALQUIER transacción pública.',
          'Usa mempool.space para Bitcoin, Etherscan para Ethereum.',
          'Puedes verificar pagos, rastrear envíos y ver fees.',
          'La información es pública pero pseudónima (direcciones, no nombres).',
          'Son herramientas esenciales - familiarízate con ellas.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué puedes ver en un block explorer?', options: [{id:'a',text:'El nombre real del dueño de una dirección'},{id:'b',text:'Transacciones, balances y estado de confirmaciones'},{id:'c',text:'Las llaves privadas de otros'}], correctAnswer: 'b', explanation: 'Los exploradores muestran datos públicos de la blockchain, pero no identidades reales ni llaves privadas.' },
        { id: 'q2', question: '¿Cuál es un block explorer popular para Bitcoin?', options: [{id:'a',text:'Google.com'},{id:'b',text:'mempool.space'},{id:'c',text:'Facebook.com'}], correctAnswer: 'b', explanation: 'mempool.space es uno de los exploradores más completos y visuales para Bitcoin.' },
        { id: 'q3', question: '¿Para qué sirve verificar una transacción en el explorer?', options: [{id:'a',text:'Para hackear la red'},{id:'b',text:'Para confirmar que un pago realmente existe y está confirmado'},{id:'c',text:'No sirve para nada'}], correctAnswer: 'b', explanation: 'Verificar en el explorer te da certeza de que la transacción existe y su estado actual.' }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Diversificación Básica',
    level: 'Principiante',
    number: '17 de 18',
    duration: '30 minutos',
    type: 'Video + Texto',
    description: 'Introducción al ecosistema más allá de Bitcoin: Ethereum, stablecoins y los principales tipos de criptoactivos.',
    sections: [
      {
        type: 'intro',
        title: 'Más Allá de Bitcoin',
        content: 'Bitcoin fue el primero, pero hoy existen miles de criptoactivos con diferentes propósitos. No necesitas invertir en todos, pero **entenderlos** te hará un inversor más informado.',
        highlight: { title: 'Advertencia', text: 'El 99% de las "altcoins" fallarán a largo plazo. La diversificación es buena, pero la investigación previa es esencial.' }
      },
      { type: 'video', title: 'Video: El Ecosistema Cripto', placeholder: 'Mapa del ecosistema de criptoactivos (30 min)' },
      {
        type: 'main',
        title: 'Categorías Principales',
        features: [
          { icon: Coins, title: 'Bitcoin (BTC)', text: 'Oro digital. Reserva de valor, la más segura y descentralizada. ~50% del mercado total.' },
          { icon: Cpu, title: 'Ethereum (ETH)', text: 'Plataforma para aplicaciones descentralizadas (DeFi, NFTs). "La computadora mundial".' },
          { icon: Shield, title: 'Stablecoins', text: 'USDT, USDC, DAI. Valor estable ~$1. Útiles para trading y refugio temporal.' },
          { icon: Layers, title: 'Layer 1s Alternativas', text: 'Solana, Avalanche, Cardano. Compiten con Ethereum en velocidad/costo.' },
          { icon: Zap, title: 'Tokens DeFi', text: 'UNI, AAVE, LINK. Gobiernan protocolos de finanzas descentralizadas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Bitcoin vs Ethereum',
        table: [
          { aspect: 'Propósito', trad: 'BTC: Dinero/Reserva de valor', btc: 'ETH: Plataforma de aplicaciones' },
          { aspect: 'Oferta', trad: 'BTC: Fija (21M)', btc: 'ETH: Variable (con quema)' },
          { aspect: 'Consenso', trad: 'BTC: Proof of Work', btc: 'ETH: Proof of Stake' },
          { aspect: 'Velocidad', trad: 'BTC: ~7 tx/seg', btc: 'ETH: ~15 tx/seg (L2s más rápidas)' }
        ]
      },
      {
        type: 'main',
        title: 'Stablecoins: Tu Refugio',
        content: 'Las stablecoins mantienen paridad con el dólar. Son útiles para:',
        features: [
          { icon: Shield, title: 'Refugio de Volatilidad', text: 'Cuando el mercado cae, puedes moverte a stables sin vender a fiat.' },
          { icon: RefreshCw, title: 'Trading', text: 'Pares de trading más estables. Evitas ir a banco cada vez.' },
          { icon: Globe, title: 'Remesas', text: 'Enviar dólares digitales instantáneamente a cualquier parte del mundo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Estrategia para Principiantes',
        items: [
          'Empieza con BTC + ETH. Son los más establecidos.',
          'Usa stablecoins (USDC) para tener "cash" cripto disponible.',
          'No persigas "la próxima moonshot" sin investigar.',
          'El 80%+ de tu portafolio cripto debería estar en activos establecidos.',
          'Diversifica, pero no demasiado - mejor pocas posiciones bien investigadas.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuál es la principal diferencia entre Bitcoin y Ethereum?', options: [{id:'a',text:'BTC es reserva de valor, ETH es plataforma de aplicaciones'},{id:'b',text:'Son exactamente iguales'},{id:'c',text:'ETH es más viejo que BTC'}], correctAnswer: 'a', explanation: 'Bitcoin se enfoca en ser dinero duro. Ethereum es una plataforma para construir aplicaciones descentralizadas.' },
        { id: 'q2', question: '¿Para qué sirven las stablecoins?', options: [{id:'a',text:'Para ganar 100% seguro'},{id:'b',text:'Mantener valor estable (~$1) y usabilidad sin volatilidad'},{id:'c',text:'Son ilegales'}], correctAnswer: 'b', explanation: 'Las stablecoins permiten mantener valor en dólares digitalmente, sin la volatilidad de BTC/ETH.' },
        { id: 'q3', question: '¿Qué porcentaje de altcoins se espera que sobrevivan a largo plazo?', options: [{id:'a',text:'99%'},{id:'b',text:'50%'},{id:'c',text:'Muy pocas (1-5%)'}], correctAnswer: 'c', explanation: 'Históricamente, la gran mayoría de altcoins pierden valor o desaparecen. La investigación es crucial.' }
      ]
    }
  },
  18: {
    id: 18,
    title: '¿Qué Sigue?',
    level: 'Principiante',
    number: '18 de 18',
    duration: '12 minutos',
    type: 'Video + Texto',
    description: 'Felicidades por completar el nivel principiante. Resumen de lo aprendido y preparación para el análisis técnico.',
    sections: [
      {
        type: 'intro',
        title: '¡Lo Lograste!',
        content: 'Has completado el **Nivel Principiante** de Hablemos Cripto. Ahora entiendes los fundamentos que el 95% de las personas en cripto ignoran. Eso te pone en una posición de ventaja.',
        highlight: { title: 'Recuerda', text: 'El conocimiento es tu mejor inversión. Los que entienden la tecnología toman mejores decisiones.' }
      },
      { type: 'video', title: 'Video: Resumen y Próximos Pasos', placeholder: 'Recap del nivel y preview del siguiente (12 min)' },
      {
        type: 'main',
        title: 'Lo Que Aprendiste',
        features: [
          { icon: BookOpen, title: 'Fundamentos', text: 'Qué es Bitcoin, blockchain, minería y por qué la descentralización importa.' },
          { icon: Shield, title: 'Seguridad', text: 'Wallets, llaves, frase semilla y cómo proteger tus activos.' },
          { icon: Rocket, title: 'Práctica', text: 'Cómo comprar, enviar, recibir y verificar transacciones.' }
        ]
      },
      {
        type: 'main',
        title: 'El Nivel Intermedio Te Espera',
        content: 'En el siguiente nivel aprenderás a **analizar el mercado** y tomar decisiones de inversión más informadas:',
        features: [
          { icon: BarChart3, title: 'Análisis Técnico', text: 'Leer gráficos, identificar tendencias, soportes y resistencias.' },
          { icon: Search, title: 'Análisis Fundamental', text: 'Evaluar proyectos, entender ciclos de mercado y tokenomics.' },
          { icon: Briefcase, title: 'Gestión de Portfolio', text: 'Diversificación, riesgo y cuándo tomar ganancias.' }
        ]
      },
      {
        type: 'main',
        title: 'Acciones Recomendadas Antes de Continuar',
        features: [
          { icon: CheckCircle, title: 'Configura tu wallet', text: 'Si no lo has hecho, crea tu wallet y guarda tu frase semilla.' },
          { icon: CheckCircle, title: 'Haz tu primera compra', text: 'Aunque sea $10-20, la experiencia práctica es invaluable.' },
          { icon: CheckCircle, title: 'Únete a la comunidad', text: 'El Discord de Hablemos Cripto para preguntas y actualizaciones.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Mentalidad para el Éxito',
        items: [
          'Nunca inviertas más de lo que puedas perder.',
          'El mercado premia la paciencia, no la prisa.',
          'Sigue aprendiendo - este es solo el comienzo.',
          'Desconfía de quien promete ganancias garantizadas.',
          'La comunidad está aquí para ayudarte. Pregunta sin miedo.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuál es la regla #1 de inversión en cripto?', options: [{id:'a',text:'Invertir todo tu salario'},{id:'b',text:'Nunca invertir más de lo que puedas perder'},{id:'c',text:'Seguir a influencers ciegamente'}], correctAnswer: 'b', explanation: 'El mercado cripto es volátil. Invierte solo lo que no afectaría tu vida si lo perdieras.' },
        { id: 'q2', question: '¿Qué aprenderás en el Nivel Intermedio?', options: [{id:'a',text:'Cómo crear tu propia criptomoneda'},{id:'b',text:'Análisis técnico, fundamental y gestión de portfolio'},{id:'c',text:'Cómo hackear Bitcoin'}], correctAnswer: 'b', explanation: 'El nivel intermedio se enfoca en análisis de mercado y toma de decisiones de inversión informadas.' },
        { id: 'q3', question: '¿Por qué es importante practicar con cantidades pequeñas primero?', options: [{id:'a',text:'Porque los fees son menores'},{id:'b',text:'Para ganar experiencia sin riesgo significativo'},{id:'c',text:'No es importante'}], correctAnswer: 'b', explanation: 'La experiencia práctica con cantidades pequeñas te prepara para manejar cantidades mayores con confianza.' }
      ]
    }
  },
  
  // INTERMEDIATE LESSONS (19-34)
  19: {
    id: 19,
    title: 'Análisis Técnico Básico',
    level: 'Intermedio',
    number: '1 de 16',
    duration: '25 minutos',
    type: 'Video + Práctica',
    description: 'Aprende a leer gráficos de precios, identificar soportes, resistencias y tendencias clave para tomar mejores decisiones de inversión.',
    sections: [
      { type: 'intro', title: 'El Lenguaje del Mercado', content: 'El análisis técnico (AT) es el estudio de la acción del precio histórica para predecir movimientos futuros.' },
      { type: 'main', title: 'Conceptos Fundamentales', features: [ { icon: TrendingUp, title: 'Tendencias', text: 'El mercado se mueve en direcciones: Alcista (Higher Highs), Bajista (Lower Lows) o Lateral.' }, { icon: Activity, title: 'Soportes y Resistencias', text: 'Zonas donde el precio suele rebotar ("piso") o ser rechazado ("techo").' }, { icon: BarChart3, title: 'Velas Japonesas', text: 'Representación visual que muestra apertura, cierre, máximo y mínimo en un periodo.' } ] }
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué es un soporte?', options: [{id:'a',text:'Un precio donde la compra supera a la venta (piso)'},{id:'b',text:'Un techo imposible de romper'},{id:'c',text:'Un indicador'}], correctAnswer: 'a', explanation: 'Es una zona de demanda donde el precio tiende a detener su caída.' } ] }
  },
  20: {
    id: 20,
    title: 'Indicadores Técnicos',
    level: 'Intermedio',
    number: '2 de 16',
    duration: '30 minutos',
    type: 'Video + Práctica',
    description: 'Domina herramientas como RSI, MACD y Medias Móviles para confirmar tus análisis.',
    sections: [ { type: 'intro', title: 'Ayudas Matemáticas', content: 'Los indicadores procesan datos de precio y volumen para dar señales visuales.' }, { type: 'main', title: 'Los Imprescindibles', features: [ { icon: Activity, title: 'RSI', text: 'Mide si el activo está sobrecomprado (>70) o sobrevendido (<30).' }, { icon: TrendingUp, title: 'Medias Móviles (MA)', text: 'Suavizan el precio para mostrar la tendencia promedio (MA 50, MA 200).' } ] } ],
    quiz: { questions: [ { id: 'q1', question: 'Un RSI arriba de 70 indica...', options: [{id:'a',text:'Sobreventa'},{id:'b',text:'Sobrecompra'},{id:'c',text:'Volumen bajo'}], correctAnswer: 'b', explanation: 'Indica que el precio ha subido mucho muy rápido y podría corregir.' } ] }
  },
  21: {
    id: 21, title: 'Patrones de Velas', level: 'Intermedio', number: '3 de 16', duration: '28 min', type: 'Video + Práctica', description: 'Interpreta la psicología del mercado a través de las formas de las velas.',
    sections: [ { type: 'main', title: 'Patrones de Reversión', features: [ { icon: BarChart3, title: 'Martillo (Hammer)', text: 'Señal alcista tras una caída.' }, { icon: Activity, title: 'Estrella Fugaz', text: 'Señal bajista tras una subida.' } ] } ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué indica una mecha larga inferior?', options: [{id:'a',text:'Rechazo de precios bajos (fuerza compradora)'},{id:'b',text:'Fuerza vendedora'},{id:'c',text:'Indecisión'}], correctAnswer: 'a', explanation: 'Significa que los compradores empujaron el precio hacia arriba desde el mínimo.' } ] }
  },
  22: {
    id: 22, title: 'Volumen y Momentum', level: 'Intermedio', number: '4 de 16', duration: '22 min', type: 'Video + Práctica', description: 'El combustible del mercado. Sin volumen, el movimiento no es confiable.',
    sections: [ { type: 'intro', title: 'La Verdad del Mercado', content: 'El precio puede mentir, el volumen no. Una subida de precio con poco volumen es sospechosa.' } ],
    quiz: { questions: [ { id: 'q1', question: 'Ruptura de resistencia con bajo volumen...', options: [{id:'a',text:'Es muy confiable'},{id:'b',text:'Es probable que sea una trampa (Fakeout)'},{id:'c',text:'No importa'}], correctAnswer: 'b', explanation: 'El volumen confirma la fuerza de la ruptura.' } ] }
  },
  23: {
    id: 23,
    title: 'Fibonacci y Elliott Wave',
    level: 'Intermedio',
    number: '5 de 16',
    duration: '35 min',
    type: 'Video + Práctica',
    description: 'Herramientas avanzadas para medir retrocesos y proyecciones.',
    sections: [
        { type: 'intro', title: 'La Proporción Áurea', content: 'Los mercados financieros, al ser producto de la psicología humana, tienden a moverse en patrones geométricos naturales. La secuencia de Fibonacci (0.618) es el nivel de retroceso más importante.' },
        { type: 'main', title: 'Niveles Clave', features: [
            { icon: TrendingUp, title: 'Retrocesos (Retracement)', text: 'Zonas donde el precio "descansa" antes de seguir la tendencia: 0.382, 0.5 y 0.618 (Golden Pocket).' },
            { icon: Activity, title: 'Extensiones', text: 'Objetivos de precio después de romper un máximo histórico (1.618).' }
        ]},
        { type: 'video', title: 'Video: Cómo trazar Fibonacci', placeholder: 'Tutorial de TradingView (35 min)' }
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Cuál es el Golden Pocket?', options: [{id:'a',text:'0.5'},{id:'b',text:'Entre 0.618 y 0.65'},{id:'c',text:'1.0'}], correctAnswer: 'b', explanation: 'Es la zona de mayor probabilidad de reversión.' } ] }
  },
  24: { id: 24, title: 'Estrategias de Trading', level: 'Intermedio', number: '6 de 16', duration: '32 min', type: 'Video + Práctica', description: 'Cómo entrar y salir del mercado. Setup, Stop Loss y Take Profit.', sections: [], quiz: { questions: [] } },
  25: { id: 25, title: 'Fundamentos de Análisis On-Chain', level: 'Intermedio', number: '7 de 16', duration: '28 min', type: 'Video + Herramientas', description: 'Mirando "bajo el capó" de la blockchain. Datos que no mienten.', sections: [], quiz: { questions: [] } },
  26: { id: 26, title: 'Evaluación de Altcoins', level: 'Intermedio', number: '8 de 16', duration: '35 min', type: 'Video + Casos Prácticos', description: 'DYOR: Cómo investigar un proyecto antes de invertir un centavo.', sections: [], quiz: { questions: [] } },
  27: { id: 27, title: 'Ciclos de Mercado', level: 'Intermedio', number: '9 de 16', duration: '26 min', type: 'Video + Análisis', description: 'El Halving de Bitcoin y la psicología de los ciclos de 4 años.', sections: [], quiz: { questions: [] } },
  28: { id: 28, title: 'Tokenomics Avanzados', level: 'Intermedio', number: '10 de 16', duration: '30 min', type: 'Video + Herramientas', description: 'Inflación, Deflación, Vesting schedules y distribución de tokens.', sections: [], quiz: { questions: [] } },
  29: { id: 29, title: 'Noticias y Eventos de Mercado', level: 'Intermedio', number: '11 de 16', duration: '24 min', type: 'Video + Recursos', description: 'Buy the rumor, sell the news. Cómo operar eventos.', sections: [], quiz: { questions: [] } },
  30: { id: 30, title: 'Diversificación Estratégica', level: 'Intermedio', number: '12 de 16', duration: '32 min', type: 'Tutorial Práctico', description: 'No pongas todos los huevos en la misma canasta. Correlación de activos.', sections: [], quiz: { questions: [] } },
  31: { id: 31, title: 'Gestión de Riesgo', level: 'Intermedio', number: '13 de 16', duration: '28 min', type: 'Tutorial Práctico', description: 'La habilidad #1 del trader rentable: Proteger el capital.', sections: [], quiz: { questions: [] } },
  32: { id: 32, title: 'Rebalanceo de Portfolio', level: 'Intermedio', number: '14 de 16', duration: '25 min', type: 'Tutorial Práctico', description: 'Cuándo tomar ganancias y rotar capital.', sections: [], quiz: { questions: [] } },
  33: { id: 33, title: 'Herramientas y Tracking', level: 'Intermedio', number: '15 de 16', duration: '20 min', type: 'Herramientas', description: 'Apps para llevar el control de tus inversiones.', sections: [], quiz: { questions: [] } },
  34: {
    id: 34,
    title: 'Preparación para Nivel Avanzado',
    level: 'Intermedio',
    number: '16 de 16',
    duration: '18 minutos',
    type: 'Video + Recursos',
    description: 'Has dominado el análisis y la gestión. Estás listo para DeFi.',
    sections: [ { type: 'intro', title: 'Siguiente Paso: DeFi', content: 'Ahora que sabes analizar y gestionar riesgo, entraremos a la madriguera del conejo: Finanzas Descentralizadas, donde tú eres el banco.' } ],
    quiz: { questions: [ { id: 'q1', question: '¿Cuál es la clave para sobrevivir?', options: [{id:'a',text:'Apalancamiento x100'},{id:'b',text:'Gestión de Riesgo'},{id:'c',text:'Seguir influencers'}], correctAnswer: 'b', explanation: 'Sin gestión de riesgo, perderás todo eventualmente.' } ] }
  },

  // ADVANCED LESSONS (35-48)
  35: {
    id: 35,
    title: 'Introducción a DeFi',
    level: 'Avanzado',
    number: '1 de 14',
    duration: '35 minutos',
    type: 'Video + DApps',
    description: 'Bienvenido a las Finanzas Descentralizadas. Un sistema financiero alternativo, abierto y sin permisos construido sobre Ethereum y otras blockchains.',
    sections: [
      { 
        type: 'intro', 
        title: '¿Qué es DeFi?', 
        content: 'DeFi (Decentralized Finance) es un ecosistema de aplicaciones financieras construidas sobre redes blockchain. A diferencia de las finanzas tradicionales (CeFi), en DeFi **no hay intermediarios**; las reglas están escritas en código (**Smart Contracts**).' 
      },
      {
        type: 'comparison',
        title: 'DeFi vs Banca Tradicional',
        content: 'La principal diferencia radica en la custodia y la ejecución.',
        table: [
          { aspect: 'Acceso', trad: 'Requiere KYC, historial crediticio, ubicación.', btc: 'Universal, solo necesitas una wallet e internet.' },
          { aspect: 'Custodia', trad: 'El banco custodia tu dinero.', btc: 'Tú tienes el control total (Self-custody).' },
          { aspect: 'Transparencia', trad: 'Libros cerrados y opacos.', btc: 'Código abierto y transacciones auditables en tiempo real.' },
          { aspect: 'Horario', trad: 'Horario bancario (L-V).', btc: '24/7/365.' }
        ]
      },
      {
        type: 'main',
        title: 'Pilares de DeFi',
        features: [
            { icon: Coins, title: 'Stablecoins', text: 'Criptomonedas pegadas al valor de fiat (USDC, DAI) para estabilidad.' },
            { icon: RefreshCw, title: 'DEXs (Exchanges)', text: 'Intercambio de tokens sin registrarse (Uniswap).' },
            { icon: Briefcase, title: 'Lending', text: 'Prestar y pedir prestado usando colateral cripto (Aave).' }
        ]
      }
    ],
    quiz: {
        questions: [
            { id: 'q1', question: '¿Quién custodia los fondos en DeFi?', options: [{id:'a',text:'El CEO de DeFi'},{id:'b',text:'Smart Contracts y el usuario'},{id:'c',text:'El banco central'}], correctAnswer: 'b', explanation: 'En DeFi, los fondos están en contratos inteligentes, pero tú controlas las llaves de acceso.' },
            { id: 'q2', question: '¿Qué se necesita para usar DeFi?', options: [{id:'a',text:'Pasaporte y cuenta bancaria'},{id:'b',text:'Wallet y conexión a internet'},{id:'c',text:'Permiso del gobierno'}], correctAnswer: 'b', explanation: 'Es un sistema sin permisos (Permissionless).' }
        ]
    }
  },
  36: {
    id: 36,
    title: 'Uniswap y AMMs Avanzados',
    level: 'Avanzado',
    number: '2 de 14',
    duration: '42 minutos',
    type: 'Tutorial Práctico',
    description: 'Profundizamos en el funcionamiento de los Automated Market Makers (AMMs), la liquidez concentrada y el riesgo de Impermanent Loss.',
    sections: [
      {
        type: 'intro',
        title: 'El Motor de los DEXs: AMMs',
        content: 'A diferencia de un libro de órdenes tradicional (Order Book) donde compradores y vendedores deben coincidir, los AMMs usan **Liquidity Pools**. La fórmula clásica es `x * y = k`, donde `x` es la cantidad del token A y `y` es la cantidad del token B. `k` siempre debe permanecer constante.'
      },
      {
        type: 'main',
        title: 'Impermanent Loss (Pérdida Impermanente)',
        content: 'Al proveer liquidez, te conviertes en un Market Maker. Si el precio de un activo cambia drásticamente comparado al otro, el AMM rebalancea tu posición vendiendo el activo ganador y comprando el perdedor. Esto puede resultar en tener menos valor que si solo hubieras hecho HODL.',
        highlight: { title: 'Concepto Avanzado', text: 'El **Impermanent Loss** solo se realiza si retiras tu liquidez. Si los precios vuelven a su estado original, la pérdida desaparece. Debes calcular si los fees ganados superan esta pérdida potencial.' }
      },
      {
         type: 'main',
         title: 'Uniswap V3: Liquidez Concentrada',
         content: 'En V3, los proveedores pueden elegir un rango de precios específico para su liquidez. Esto aumenta masivamente la eficiencia del capital (ganas más fees con menos dinero) pero aumenta el riesgo de Impermanent Loss si el precio se sale de tu rango.'
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué pasa si el precio de ETH sube mucho mientras provees liquidez ETH/USDC?', options: [{id:'a',text:'Ganas más ETH'},{id:'b',text:'El pool vende tu ETH por USDC'},{id:'c',text:'Nada'}], correctAnswer: 'b', explanation: 'Para mantener el balance del pool, el contrato vende el activo que se aprecia.' },
        { id: 'q2', question: '¿Qué significa liquidez concentrada?', options: [{id:'a',text:'Liquidez en un solo token'},{id:'b',text:'Liquidez en un rango de precios específico'},{id:'c',text:'Liquidez bloqueada por 1 año'}], correctAnswer: 'b', explanation: 'Permite asignar capital solo donde el precio se está moviendo.' }
      ]
    }
  },
  37: {
    id: 37,
    title: 'Compound y Aave: Lending DeFi',
    level: 'Avanzado',
    number: '3 de 14',
    duration: '38 minutos',
    type: 'Tutorial Práctico',
    description: 'Aprende a usar tu cripto como colateral para pedir préstamos, apalancarte o ganar interés pasivo.',
    sections: [
        { type: 'intro', title: 'Banca sin Banco', content: 'Protocolos como Aave permiten depositar activos para ganar interés (Supply APY) y usar esos depósitos como garantía para pedir prestado otros activos (Borrow APY).' },
        { type: 'main', title: 'Conceptos Críticos', features: [
            { icon: Scale, title: 'LTV (Loan to Value)', text: 'El % máximo que puedes pedir prestado. Si depositas $1000 ETH y el LTV es 80%, puedes pedir $800 USDC.' },
            { icon: AlertTriangle, title: 'Liquidación', text: 'Si el valor de tu colateral cae (o tu deuda sube) y superas el umbral de liquidación, el protocolo vende tu colateral para pagar la deuda, más una multa.' },
            { icon: Zap, title: 'Flash Loans', text: 'Préstamos instantáneos sin colateral que deben pedirse y pagarse en la misma transacción de bloque. Usados para arbitraje.' }
        ]}
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué ocurre si tu Health Factor cae debajo de 1.0?', options: [{id:'a',text:'Te cobran una multa pequeña'},{id:'b',text:'Eres liquidado (pierdes colateral)'},{id:'c',text:'Nada'}], correctAnswer: 'b', explanation: 'El protocolo protege a los prestamistas liquidando posiciones riesgosas automáticamente.' } ] }
  },
  38: { id: 38, title: 'Yield Farming Avanzado', level: 'Avanzado', number: '4 de 14', duration: '45 min', type: 'Estrategias', description: 'Maximiza retornos "cultivando" rendimientos en múltiples protocolos.', sections: [ { type: 'intro', title: 'La Agricultura de Rendimiento', content: 'Consiste en mover capital entre diferentes protocolos para maximizar el retorno (APY). Estrategia común: Proveer liquidez -> Recibir LP Tokens -> Stakear LP Tokens en una "Farm" para ganar el token de gobernanza del protocolo.' } ], quiz: { questions: [ { id: 'q1', question: '¿Cuál es el riesgo principal de farms con APY de 10,000%?', options: [{id:'a',text:'Que el token de recompensa se vaya a cero'},{id:'b',text:'Demasiadas ganancias'},{id:'c',text:'No hay riesgo'}], correctAnswer: 'a', explanation: 'La inflación del token suele ser masiva, devaluando el precio rápidamente.' } ] } },
  39: { id: 39, title: 'Riesgos y Seguridad en DeFi', level: 'Avanzado', number: '5 de 14', duration: '32 min', type: 'Seguridad', description: 'Cómo evitar perderlo todo por hacks, exploits o errores de usuario.', sections: [ { type: 'main', title: 'Vectores de Ataque', features: [ { icon: Lock, title: 'Smart Contract Risk', text: 'Bugs en el código que hackers explotan.' }, { icon: Key, title: 'Infinite Approval', text: 'Dar permiso ilimitado a un contrato malicioso para gastar tus tokens.' }, { icon: AlertTriangle, title: 'Rug Pull', text: 'Los desarrolladores retiran toda la liquidez y huyen.' } ] } ], quiz: { questions: [ { id: 'q1', question: '¿Cómo revocar permisos de contratos?', options: [{id:'a',text:'No se puede'},{id:'b',text:'Usando herramientas como Revoke.cash'},{id:'c',text:'Borrando la wallet'}], correctAnswer: 'b', explanation: 'Es vital revisar y revocar permisos antiguos regularmente.' } ] } },
  40: {
    id: 40,
    title: 'Ethereum Layer 2: Polygon y Arbitrum',
    level: 'Avanzado',
    number: '6 de 14',
    duration: '40 minutos',
    type: 'Tutorial Práctico',
    description: 'Escalando Ethereum. Entiende la diferencia entre Sidechains, Optimistic Rollups y ZK-Rollups.',
    sections: [
        { type: 'intro', title: 'El Trilema de la Escalabilidad', content: 'Es difícil tener Seguridad, Descentralización y Escalabilidad al mismo tiempo. Ethereum L1 prioriza Seguridad y Descentralización. Las L2s se encargan de la Escalabilidad.' },
        { type: 'main', title: 'Tecnologías de Escalado', features: [
            { icon: Layers, title: 'Optimistic Rollups (Arbitrum/Optimism)', text: 'Asumen que las transacciones son válidas. Tienen un periodo de desafío de 7 días para retiros a L1.' },
            { icon: Cpu, title: 'ZK-Rollups', text: 'Usan pruebas matemáticas complejas (Zero Knowledge) para verificar validez instantáneamente. Más rápidos pero más difíciles de construir.' },
            { icon: Network, title: 'Sidechains (Polygon PoS)', text: 'Blockchains independientes que corren en paralelo a Ethereum. Menos seguras que los Rollups.' }
        ]}
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué heredan los Rollups de Ethereum L1?', options: [{id:'a',text:'Velocidad'},{id:'b',text:'Seguridad'},{id:'c',text:'Nada'}], correctAnswer: 'b', explanation: 'Los Rollups publican sus datos en L1, heredando su seguridad.' } ] }
  },
  41: { id: 41, title: 'Solana y Ecosistemas Alternativos', level: 'Avanzado', number: '7 de 14', duration: '35 min', type: 'Ecosistemas', description: 'Blockchains monolíticas vs modulares. Proof of History y la velocidad de Solana.', sections: [ { type: 'intro', title: 'Alta Velocidad', content: 'Solana usa Proof of History (PoH) para ordenar transacciones antes de incluirlas en bloques, permitiendo miles de TPS y costos de fracción de centavo, ideal para trading de alta frecuencia y gaming.' } ], quiz: { questions: [ { id: 'q1', question: '¿Qué lenguaje usa Solana?', options: [{id:'a',text:'Solidity'},{id:'b',text:'Rust'},{id:'c',text:'Python'}], correctAnswer: 'b', explanation: 'Rust permite mayor rendimiento y seguridad de memoria.' } ] } },
  42: { id: 42, title: 'Cross-Chain y Bridges', level: 'Avanzado', number: '8 de 14', duration: '37 min', type: 'Tutorial Avanzado', description: 'Moviendo activos entre cadenas. Riesgos de los puentes.', sections: [ { type: 'intro', title: 'El Eslabón Débil', content: 'Los Bridges suelen ser el punto más atacado. Funcionan bloqueando activos en la cadena A y emitiendo una versión "envuelta" (Wrapped) en la cadena B.' } ], quiz: { questions: [ { id: 'q1', question: '¿Qué es WBTC?', options: [{id:'a',text:'Bitcoin real'},{id:'b',text:'Un token en Ethereum respaldado 1:1 por Bitcoin'},{id:'c',text:'Una copia pirata'}], correctAnswer: 'b', explanation: 'Es Wrapped Bitcoin, permitiendo usar valor de BTC en DeFi de Ethereum.' } ] } },
  43: {
    id: 43,
    title: 'MEV y Trading Avanzado',
    level: 'Avanzado',
    number: '9 de 14',
    duration: '43 minutos',
    type: 'Trading Avanzado',
    description: 'El bosque oscuro de Ethereum. Front-running, Sandwich attacks y cómo protegerte.',
    sections: [
        { type: 'intro', title: 'Maximal Extractable Value (MEV)', content: 'Los validadores/mineros tienen el poder de reordenar transacciones dentro de un bloque. Bots sofisticados escanean la mempool para explotar tus operaciones.' },
        { type: 'main', title: 'Tipos de Ataques MEV', features: [
            { icon: MousePointer, title: 'Sandwich Attack', text: 'Un bot ve tu orden de compra grande. Compra antes que tú (subiendo el precio) y te vende inmediatamente después (con ganancia).' },
            { icon: Zap, title: 'Front-running', text: 'Copiar tu operación rentable pagando más gas para ser ejecutado primero.' }
        ]},
        { type: 'takeaways', title: 'Protección', items: ['Usar Slippage bajo.', 'Usar Flashbots RPC para evitar la mempool pública.', 'Usar Aggregators como 1inch o CowSwap.'] }
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué hace un Sandwich Attack?', options: [{id:'a',text:'Te invita a comer'},{id:'b',text:'Manipula el precio comprando antes y vendiendo después de ti'},{id:'c',text:'Cancela tu transacción'}], correctAnswer: 'b', explanation: 'Extrae valor a costa de darte un peor precio de ejecución.' } ] }
  },
  44: { id: 44, title: 'NFTs Más Allá del Arte', level: 'Avanzado', number: '10 de 14', duration: '38 min', type: 'Casos de Uso', description: 'Utility NFTs, Token Gating y Real World Assets (RWA).', sections: [ { type: 'main', title: 'Utilidad Real', content: 'Los NFTs son certificados de propiedad digital únicos. Usos: Entradas a eventos, identidad digital, títulos de propiedad inmobiliaria tokenizados (RWA) y membresías exclusivas.' } ], quiz: { questions: [ { id: 'q1', question: '¿Qué estándar usa Ethereum para NFTs únicos?', options: [{id:'a',text:'ERC-20'},{id:'b',text:'ERC-721'},{id:'c',text:'ERC-404'}], correctAnswer: 'b', explanation: 'ERC-721 es el estándar para Non-Fungible Tokens.' } ] } },
  45: { id: 45, title: 'DAOs y Governance', level: 'Avanzado', number: '11 de 14', duration: '33 min', type: 'Governance', description: 'Organizaciones Autónomas Descentralizadas. El futuro de las empresas.', sections: [ { type: 'intro', title: 'Coordinación Global', content: 'Una DAO es una organización gestionada por código y propiedad de sus miembros. Las decisiones se toman mediante votaciones on-chain usando tokens de gobernanza.' } ], quiz: { questions: [ { id: 'q1', question: '¿Qué necesitas para votar en una DAO?', options: [{id:'a',text:'Ser empleado'},{id:'b',text:'Tener el Governance Token'},{id:'c',text:'Pagar una suscripción'}], correctAnswer: 'b', explanation: 'El poder de voto suele ser proporcional a la cantidad de tokens.' } ] } },
  46: {
    id: 46,
    title: 'GameFi y Play-to-Earn',
    level: 'Avanzado',
    number: '12 de 14',
    duration: '36 min',
    type: 'Gaming',
    description: 'Economías digitales dentro de videojuegos. Propiedad real de items.',
    sections: [
        { type: 'intro', title: 'Jugar para Ganar', content: 'GameFi combina Gaming + DeFi. Los jugadores ganan tokens y NFTs por su habilidad y tiempo invertido. A diferencia de los juegos tradicionales, aquí tú eres dueño de tus items (espadas, skins, tierras) y puedes venderlos por dinero real.' },
        { type: 'main', title: 'Conceptos Clave', features: [
            { icon: Coins, title: 'Economía Circular', text: 'Los jugadores ganan tokens que sirven para mejorar sus personajes o hacer "breeding", quemando el token y manteniendo la demanda.' },
            { icon: Users, title: 'Guilds', text: 'Organizaciones que becan a jugadores (Scholars) prestándoles los NFTs necesarios para jugar a cambio de un % de las ganancias.' }
        ]},
        { type: 'takeaways', title: 'Retos', items: ['Sostenibilidad de la economía.', 'Barrera de entrada (costo de NFTs).', 'Jugabilidad vs Ganancia.'] }
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué diferencia a GameFi de juegos normales?', options: [{id:'a',text:'Mejores gráficos'},{id:'b',text:'Propiedad real de activos (NFTs) y ganancias'},{id:'c',text:'Son más fáciles'}], correctAnswer: 'b', explanation: 'La propiedad digital y la posibilidad de monetizar el tiempo son fundamentales.' } ] }
  },
  47: { id: 47, title: 'Web3 Social y Identity', level: 'Avanzado', number: '13 de 14', duration: '30 min', type: 'Identity', description: 'Ser dueño de tu grafo social. ENS, Lens Protocol y Farcaster.', sections: [ { type: 'intro', title: 'Tu Identidad es Tuya', content: 'En Web2 (Twitter/FB), la plataforma es dueña de tus datos. En Web3, tú eres dueño de tu perfil y seguidores, y puedes llevarlos de una app a otra.' } ], quiz: { questions: [ { id: 'q1', question: '¿Qué es ENS?', options: [{id:'a',text:'Un banco'},{id:'b',text:'Ethereum Name Service (.eth)'},{id:'c',text:'Una moneda'}], correctAnswer: 'b', explanation: 'Convierte direcciones complejas (0x...) en nombres legibles.' } ] } },
  48: {
    id: 48,
    title: 'El Futuro de Web3',
    level: 'Avanzado',
    number: '14 de 14',
    duration: '28 minutos',
    type: 'Futuro',
    description: 'Hacia dónde vamos: Account Abstraction, Adopción Institucional y Regulación.',
    sections: [
        { type: 'intro', title: 'Account Abstraction (ERC-4337)', content: 'El fin de las frases semilla complicadas. Permite "Smart Accounts" con recuperación social, 2FA real y pago de gas con cualquier token. Es la clave para la adopción masiva.' },
        { type: 'main', title: 'Tendencias', features: [
            { icon: Target, title: 'Tokenización masiva', text: 'Bonos del tesoro, acciones y bienes raíces on-chain.' },
            { icon: Server, title: 'Infraestructura Descentralizada', text: 'DePIN (Decentralized Physical Infrastructure Networks).' }
        ]}
    ],
    quiz: { questions: [ { id: 'q1', question: '¿Qué permite el Account Abstraction?', options: [{id:'a',text:'Eliminar el gas'},{id:'b',text:'Recuperación social de cuentas y mejor UX'},{id:'c',text:'Minería gratis'}], correctAnswer: 'b', explanation: 'Mejora drásticamente la experiencia de usuario eliminando la complejidad de las keys.' } ] }
  }
};