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
  Anchor,
  Scissors,
  Landmark,
  Percent,
  TrendingDown,
  Users,
  Server,
  Network,
  Smartphone,
  Shield,
  Globe,
  CheckCircle,
  AlertTriangle,
  Link,
  Activity,
  Clock,
  Layers,
  RefreshCw,
  Lock,
  PiggyBank,
  Award
} from 'lucide-react';

export interface Referral {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  code?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: string;
  isLocked?: boolean;
  videoId?: string;
  referrals?: Referral[];
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
  subtitle: 'Entiende el dinero y tu primera wallet',
  description: 'Olvida lo que sabes sobre el dinero. Aprende por qué la inflación te empobrece, cómo Bitcoin arregla la reserva de valor y cómo Solana democratiza las finanzas.',
  stats: {
    lessons: 20, // Increased count
    duration: '~7h'
  },
  modules: [
    {
      id: 1,
      title: 'El Dinero Está Roto', // NEW MODULE
      description: 'La historia oculta de la banca, la inflación y la impresión de dinero',
      icon: Banknote, // You might need to import 'Banknote' or 'Landmark' from lucide-react
      lessons: [
        { id: 1, title: 'Breve Historia del Dinero', description: 'Del trueque al patrón oro y al dinero Fiat.', duration: '15 min', type: 'Video + Historia' },
        { id: 2, title: 'La Trampa de la Inflación', description: 'Cómo la impresión de dinero roba tu tiempo y trabajo.', duration: '20 min', type: 'Video + Gráficos' },
        { id: 3, title: 'El Efecto Cantillon', description: '¿Quién se beneficia realmente cuando imprimen billetes?', duration: '15 min', type: 'Concepto Clave' },
        { id: 4, title: 'Bitcoin: La Salida', description: 'La primera solución matemática a la corrupción monetaria.', duration: '18 min', type: 'Video + Texto' },
      ]
    },
    {
      id: 2,
      title: 'Fundamentos Blockchain',
      description: 'La tecnología detrás de la revolución',
      icon: BookOpen,
      lessons: [
        { id: 5, title: '¿Qué es Blockchain?', description: 'El libro contable que nadie puede manipular.', duration: '20 min', type: 'Video + Texto' },
        { id: 6, title: 'Descentralización vs Centralización', description: 'Por qué importa que nadie tenga el control.', duration: '12 min', type: 'Video + Texto' },
        // Moved Mining to later or simplified it
      ]
    },
    {
      id: 3,
      title: 'Tu Banco en el Bolsillo',
      description: 'Configura tu wallet y entiende las redes (Solana vs ETH)',
      icon: Wallet,
      lessons: [
        { id: 7, title: 'Wallets: Tu Llave, Tu Dinero', description: 'Hot vs Cold wallets y la importancia de la custodia.', duration: '18 min', type: 'Video + Texto' },
        { id: 8, title: 'La Frase Semilla (Seed Phrase)', description: 'Las 12 palabras que valen millones. Seguridad extrema.', duration: '25 min', type: 'Video + Práctica' },
        { id: 9, title: 'Instalando Phantom Wallet', description: 'Tu puerta de entrada al ecosistema Solana.', duration: '30 min', type: 'Tutorial Práctico' },
        { id: 10, title: 'Solana vs Ethereum: La Guerra de L1s', description: 'Por qué usamos Solana: Velocidad, costos y comunidad.', duration: '35 min', type: 'Comparativa' },
        { id: 35, title: 'Obteniendo tus Primeros SOL', description: 'Cómo convertir tu dinero local a Cripto usando Exchanges.', duration: '25 min', type: 'Tutorial' },
        { id: 36, title: 'Tu Primera Transacción', description: 'Envía valor a través del mundo en segundos.', duration: '20 min', type: 'Práctica' },
        { id: 37, title: 'Exploradores de Bloques (Solscan)', description: 'Aprende a verificar la verdad.', duration: '15 min', type: 'Herramienta' },
        { id: 38, title: 'Evitar Estafas en Web3', description: 'Aprende a defenderte antes de salir a mar abierto.', duration: '30 min', type: 'Seguridad Vital' },
        { id: 39, title: 'Gasta tus Cripto', description: 'Usa tus ganancias en el mundo real con tarjetas cripto.', duration: '20 min', type: 'Herramientas' },
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
    lessons: 14,
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
        { id: 18, title: 'Ciclos de Mercado (Halving)', description: 'El ritmo de 4 años de Bitcoin y cómo afecta a las Altcoins.', duration: '26 min', type: 'Análisis' },
        { id: 19, title: 'Investigación de Proyectos', description: 'Cómo analizar Whitepapers, Equipos y Githubs.', duration: '30 min', type: 'Casos Prácticos' },
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
        { id: 24, title: 'Mentalidad de Trader', description: 'Control emocional, FOMO y disciplina.', duration: '20 min', type: 'Psicología' },
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
    lessons: 14,
    duration: '~10h'
  },
  modules: [
    {
      id: 1,
      title: 'Solana DeFi Mastery',
      description: 'Finanzas sin bancos: Swaps, Liquidez y Yield',
      icon: Zap,
      lessons: [
        { id: 25, title: 'Jupiter: El Rey de los DEXs', description: 'Swaps, Limit Orders y DCA en el mejor agregador del mundo.', duration: '35 min', type: 'Tutorial Práctico' },
        { id: 40, title: 'Staking SOL: Gana por Asegurar la Red', description: 'Entiende validadores, epochs y cómo ganar ~7% anual delegando.', duration: '30 min', type: 'Tutorial + Concepto' },
        { id: 26, title: 'Liquidez y Yield Farming', description: 'Raydium, Orca y Meteora. Gana fees con tus activos.', duration: '42 min', type: 'Estrategias' },
        { id: 27, title: 'Lending & Borrowing', description: 'Kamino y MarginFi. Usa tus activos como colateral.', duration: '38 min', type: 'Tutorial Práctico' },
        { id: 28, title: 'Riesgos de DeFi (Impermanent Loss)', description: 'Entiende los peligros matemáticos antes de invertir.', duration: '32 min', type: 'Seguridad' },
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
        { id: 31, title: 'DePIN: Infraestructura Física', description: 'Helium, Hivemapper. El mundo real en la blockchain.', duration: '25 min', type: 'Tendencias' },
      ]
    },
    {
      id: 3,
      title: 'Escalabilidad y Futuro',
      description: 'Hacia dónde va la tecnología',
      icon: Cpu,
      lessons: [
        { id: 32, title: 'Monolítico vs Modular', description: 'Por qué Solana escala en L1 vs el enfoque de L2s de Ethereum.', duration: '30 min', type: 'Técnico' },
        { id: 33, title: 'Firedancer & El Futuro', description: 'El nuevo cliente que hará a Solana imparable.', duration: '20 min', type: 'Futuro' },
        { id: 34, title: 'Seguridad Operacional Avanzada', description: 'Burner wallets, Ledger y Revoke.cash.', duration: '25 min', type: 'Seguridad' },
      ]
    }
  ]
};

export const LESSONS_DATA: Record<number, any> = {
  1: {
    id: 1,
    title: 'Breve Historia del Dinero',
    level: 'Principiante',
    number: '1 de 20',
    duration: '15 minutos',
    type: 'Video + Historia',
    description: 'Para entender el futuro (Crypto), primero debemos entender el pasado. ¿Por qué usamos papel pintado como valor?',
    sections: [
      {
        type: 'intro',
        title: 'El Invento Más Importante de la Humanidad',
        content: 'Antes del dinero, un pescador que quería pan tenía que encontrar un panadero que quisiera pescado. Esta "doble coincidencia de deseos" frenaba el comercio. El dinero resolvió esto: es una **tecnología para almacenar y transferir valor** a través del tiempo y el espacio. Es tan importante como la rueda o el lenguaje escrito.',
        highlight: { title: 'Reflexión Profunda', text: 'El dinero es tiempo humano cristalizado. Cuando alguien devalúa tu dinero, te está robando horas de tu vida que ya trabajaste.' }
      },
      {
        type: 'main',
        title: 'Las 5 Propiedades del Dinero Perfecto',
        content: 'Durante 5,000 años, la humanidad descubrió que el buen dinero debe ser: **Escaso** (difícil de crear), **Divisible** (puedes pagar cantidades pequeñas), **Durable** (no se pudre), **Portable** (fácil de mover), y **Fungible** (cada unidad es igual a otra). El oro cumplía todo esto naturalmente.',
        features: [
          { icon: Shield, title: 'Conchas, Sal, Ganado', text: 'Fallaron como dinero porque no eran suficientemente escasos o durables.' },
          { icon: Anchor, title: 'Oro y Plata', text: 'Dominaron 5,000 años porque cumplen todas las propiedades. Nadie puede "imprimir" más oro.' }
        ]
      },
      {
        type: 'main',
        title: 'La Ruptura de 1971: El Día que Cambió Todo',
        content: 'Hasta 1971, cada dólar representaba oro real en Fort Knox. Podías ir al banco y cambiar tu papel por metal. Pero el 15 de agosto de 1971, Nixon rompió esta promesa "temporalmente" (para siempre). Desde entonces, vivimos en un experimento de **Dinero Fiat**: dinero por decreto, respaldado solo por la confianza en los políticos.',
        highlight: { title: 'El Resultado', text: 'Desde 1971, el dólar ha perdido 98% de su poder adquisitivo. Una casa que costaba $25,000 ahora cuesta $400,000. Tu dinero se derrite.' }
      },
      {
        type: 'takeaways',
        title: 'Por qué Esto Importa para Crypto',
        items: [
          'Bitcoin es el primer dinero en la historia que cumple TODAS las propiedades del dinero perfecto, incluyendo escasez absoluta (21 millones máximo).',
          'Por primera vez, la humanidad tiene dinero que ningún gobierno puede devaluar.',
          'No es solo tecnología: es una revolución monetaria comparable a la invención del papel moneda.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué el oro fue dinero durante miles de años y el papel no lo fue hasta hace muy poco?',
          options: [
            { id: 'a', text: 'Porque los gobiernos lo obligaron' },
            { id: 'b', text: 'Porque el oro es escaso, divisible, durable, portable y difícil de falsificar' },
            { id: 'c', text: 'Porque brilla más' },
            { id: 'd', text: 'Porque los bancos no existían' }
          ],
          correctAnswer: 'b',
          explanation: 'El oro cumple las 5–6 propiedades del buen dinero. El papel solo las cumple cuando está respaldado por algo escaso (oro, petróleo, confianza militar…).'
        },
        {
          id: 'q2',
          question: '¿Qué pasó exactamente el 15 de agosto de 1971?',
          options: [
            { id: 'a', text: 'Se creó Bitcoin' },
            { id: 'b', text: 'Nixon cerró la ventanilla del oro: los dólares ya no se podían cambiar por oro físico' },
            { id: 'c', text: 'Empezó la inflación del 8 % anual' },
            { id: 'd', text: 'Se inventó el petro-dólar' }
          ],
          correctAnswer: 'b',
          explanation: 'Ese día nació el dinero fiat 100 % puro. Desde entonces, la oferta monetaria depende solo de decisiones políticas.'
        },
        {
          id: 'q3',
          question: 'Un trabajador en Venezuela ahorró 10 años para comprar una casa. En 2018, sus ahorros valían $50,000. En 2020 valían $50. ¿Qué pasó?',
          options: [
            { id: 'a', text: 'Mala suerte' },
            { id: 'b', text: 'El gobierno imprimió tanto dinero que destruyó el valor de sus ahorros (hiperinflación)' },
            { id: 'c', text: 'El banco le robó' },
            { id: 'd', text: 'Los precios de las casas bajaron' }
          ],
          correctAnswer: 'b',
          explanation: 'La hiperinflación de Venezuela destruyó el trabajo de millones de personas. Esto es lo que pasa cuando el dinero no es escaso.'
        },
        {
          id: 'q4',
          question: 'Si el dinero es "tiempo humano cristalizado", ¿qué significa que un gobierno imprima dinero?',
          options: [
            { id: 'a', text: 'Crea riqueza para todos' },
            { id: 'b', text: 'Roba tiempo de vida a los ahorradores para dárselo a los primeros en recibir el dinero nuevo' },
            { id: 'c', text: 'No afecta a nadie' },
            { id: 'd', text: 'Solo afecta a los ricos' }
          ],
          correctAnswer: 'b',
          explanation: 'Imprimir dinero es un impuesto oculto. Diluye el valor de tu trabajo pasado para financiar el gasto presente del gobierno.'
        }
      ]
    }
  },
  2: {
    id: 2,
    title: 'La Trampa de la Inflación',
    level: 'Principiante',
    number: '2 de 20',
    duration: '20 minutos',
    type: 'Video + Gráficos',
    description: 'Descubre cómo funciona realmente el sistema bancario moderno y por qué tus ahorros pierden valor cada año.',
    sections: [
      {
        type: 'intro',
        title: 'El Robo Silencioso',
        content: 'Tu abuela podía comprar una casa con el sueldo de 3 años. Hoy necesitas 15 años. ¿La gente trabaja menos? No. **Tu dinero vale menos**. La inflación no es un accidente natural: es una política deliberada que transfiere riqueza de los que ahorran a los que imprimen.',
        highlight: { title: 'Dato Escalofriante', text: 'En 1971, un salario mínimo en USA compraba 5 onzas de oro. Hoy compra 0.15 onzas. Mismas horas de trabajo, 97% menos poder adquisitivo.' }
      },
      {
        type: 'main',
        title: 'La Máquina de Crear Dinero',
        content: 'La mayoría cree que el dinero está respaldado por algo. Falso. Desde 1971, el dinero se crea de la nada, principalmente cuando alguien pide un préstamo. Sí, leíste bien: **tu banco crea dinero de la nada cuando te da un crédito**.',
        features: [
          { icon: Landmark, title: 'Bancos Centrales', text: 'En 2020, la Fed "imprimió" $4 trillones en meses. Ese dinero no existía. Ahora tus dólares valen menos.' },
          { icon: Percent, title: 'Reserva Fraccionaria', text: 'Por cada $100 que depositas, el banco presta $90 a otros (creando $90 nuevos). El dinero se multiplica de la nada.' },
          { icon: TrendingDown, title: 'Dilución Perpetua', text: 'Más dólares persiguiendo los mismos bienes = precios más altos. Tu sueldo sube 3%, los precios suben 8%. Cada año eres más pobre.' }
        ]
      },
      {
        type: 'main',
        title: 'El Juego Amañado: ¿Quién Gana y Quién Pierde?',
        content: 'Cuando el banco central "imprime" dinero, no te llega a ti primero. Llega a los bancos, que lo prestan a corporaciones, que compran activos. Para cuando los precios suben y tú pides un aumento, ya perdiste.',
        features: [
          { icon: Users, title: 'Los Ganadores', text: 'Bancos, fondos de inversión, gobiernos, y dueños de activos (acciones, casas, Bitcoin). El dinero nuevo les llega PRIMERO.' },
          { icon: TrendingDown, title: 'Los Perdedores', text: 'Asalariados, pensionados, y cualquiera que ahorre en efectivo. Reciben el dinero ÚLTIMO, cuando ya perdió valor.' }
        ],
        highlight: { title: 'Efecto Cantillon', text: 'Este fenómeno tiene 300 años de historia. Los más cercanos a la "impresora" siempre ganan. Los más lejanos siempre pierden.' }
      },
      {
        type: 'main',
        title: 'Casos Reales: Cuando la Inflación Destruye Vidas',
        content: 'Esto no es teoría. Ha pasado docenas de veces en la historia, y sigue pasando HOY:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela 2018', text: 'Inflación de 1,000,000%. El trabajo de toda una vida se volvió papel sin valor en meses.' },
          { icon: AlertTriangle, title: 'Argentina 2023', text: '140% de inflación anual. Los abuelos ven sus pensiones evaporarse mientras los políticos viven en lujo.' },
          { icon: AlertTriangle, title: 'Turquía 2022', text: 'La lira perdió 80% de su valor en 2 años. La clase media se convirtió en clase pobre.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'La Salida: Por qué Bitcoin Existe',
        items: [
          'Bitcoin tiene exactamente 21 millones de unidades. Nunca habrá más. Nadie puede "imprimir" Bitcoin para rescatar bancos.',
          'Por primera vez en la historia, existe dinero que NINGÚN gobierno, banco o corporación puede devaluar.',
          'No es inversión especulativa: es protección contra un sistema diseñado para empobrecerte lentamente.',
          'Cada día que mantienes tu riqueza en pesos o dólares, estás perdiendo contra la inflación. Es matemática, no opinión.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu abuela compró su casa en 1970 con el equivalente a 3 años de sueldo. Hoy la misma casa cuesta 15 años de sueldo. ¿Qué pasó?',
          options: [
            { id: 'a', text: 'Las casas son mejores ahora' },
            { id: 'b', text: 'El dinero perdió 80%+ de su poder adquisitivo por la impresión monetaria' },
            { id: 'c', text: 'La gente gana menos' },
            { id: 'd', text: 'Es coincidencia' }
          ],
          correctAnswer: 'b',
          explanation: 'Desde que abandonamos el patrón oro, los gobiernos han diluido el valor del dinero constantemente. Tu sueldo nominal sube, pero tu poder real de compra baja.'
        },
        {
          id: 'q2',
          question: 'Tienes $100,000 ahorrados en Argentina con 60% de inflación anual. ¿Cuánto poder de compra te queda después de 3 años?',
          options: [
            { id: 'a', text: '$100,000 (el número no cambia)' },
            { id: 'b', text: 'Aproximadamente $24,000 de poder de compra real' },
            { id: 'c', text: '$70,000' },
            { id: 'd', text: 'Más, porque el banco paga intereses' }
          ],
          correctAnswer: 'b',
          explanation: '$100,000 / 1.6 / 1.6 / 1.6 = ~$24,400. En 3 años pierdes 76% del poder adquisitivo. Los intereses bancarios NUNCA compensan inflación alta.'
        },
        {
          id: 'q3',
          question: 'En 2020, la Reserva Federal de USA "imprimió" $4 trillones. ¿De dónde salió ese dinero?',
          options: [
            { id: 'a', text: 'De los impuestos que pagaste' },
            { id: 'b', text: 'De reservas de oro' },
            { id: 'c', text: 'De la nada, literalmente creado con teclas de computadora' },
            { id: 'd', text: 'De préstamos de China' }
          ],
          correctAnswer: 'c',
          explanation: 'El dinero fiat se crea de la nada. La Fed aumenta un número en una computadora y ese "dinero" existe. Pero el efecto es real: tu dinero ahora vale menos.'
        },
        {
          id: 'q4',
          question: '¿Por qué los ricos se vuelven MÁS ricos durante períodos de alta inflación?',
          options: [
            { id: 'a', text: 'Porque trabajan más duro' },
            { id: 'b', text: 'Porque tienen activos (casas, acciones, Bitcoin) que suben de precio, mientras sus deudas se devalúan' },
            { id: 'c', text: 'Porque ahorran más' },
            { id: 'd', text: 'Porque pagan menos impuestos' }
          ],
          correctAnswer: 'b',
          explanation: 'La inflación es un impuesto oculto que castiga a los ahorradores y premia a los deudores con activos. Los ricos tienen activos y deuda. Los pobres tienen efectivo.'
        }
      ]
    }
  },
  3: {
    id: 3,
    title: 'El Efecto Cantillon',
    level: 'Principiante',
    number: '3 de 20',
    duration: '15 min',
    type: 'Concepto Clave',
    description: '¿Quién se beneficia realmente cuando imprimen billetes?',
    sections: [
      {
        type: 'intro',
        title: 'El Dinero no es Neutral',
        content: 'Cuando el banco central imprime dinero, no llega a todos al mismo tiempo. Los primeros en recibirlo (bancos, gobierno) compran activos a precios bajos. Los últimos (tú) pagan precios altos.'
      },
      {
        type: 'main',
        title: 'La Transferencia de Riqueza',
        content: 'La inflación es una transferencia de riqueza de los pobres (que tienen efectivo) a los ricos (que tienen activos y deuda).'
      },
      {
        type: 'main',
        title: 'Ejemplo Práctico',
        content: 'Si el gobierno imprime 1 trillón para rescatar bancos, los bancos reciben ese dinero y compran acciones. Las acciones suben. Tú no recibiste nada, pero ahora la comida es más cara porque hay más dinero persiguiendo los mismos bienes.',
        features: [
          { icon: Landmark, title: 'Los Ganadores', text: 'Bancos, Gobierno, Grandes Corporaciones.' },
          { icon: TrendingDown, title: 'Los Perdedores', text: 'Asalariados, Pensionados, Ahorradores.' }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: 'El gobierno imprime 1 trillón de pesos para pagar deuda. ¿Quién compra casas y autos a precios bajos?', options: [{ id: 'a', text: 'Los asalariados' }, { id: 'b', text: 'Los bancos y empresarios cercanos al gobierno' }, { id: 'c', text: 'Los jubilados' }], correctAnswer: 'b', explanation: 'Ellos reciben el dinero nuevo primero y compran activos antes de que suban los precios.' },
        { id: 'q2', question: '¿Quién paga la inflación?', options: [{ id: 'a', text: 'Los ricos' }, { id: 'b', text: 'Los que tienen su riqueza en efectivo o salario' }, { id: 'c', text: 'Nadie' }], correctAnswer: 'b', explanation: 'La inflación es un impuesto oculto que castiga más a quien tiene efectivo y menos activos.' },
        { id: 'q3', question: '¿Por qué los ricos se vuelven más ricos en períodos de alta inflación?', options: [{ id: 'a', text: 'Porque trabajan más' }, { id: 'b', text: 'Porque tienen deuda y activos que suben de precio' }, { id: 'c', text: 'Porque ahorran más' }], correctAnswer: 'b', explanation: 'La deuda se licúa y los activos (casas, acciones, Bitcoin) suben más que la inflación.' },
        { id: 'q4', question: '¿Qué activo histórico ha ganado siempre contra el Efecto Cantillon a largo plazo?', options: [{ id: 'a', text: 'Plazo fijo' }, { id: 'b', text: 'Bitcoin' }, { id: 'c', text: 'Dólar blue' }], correctAnswer: 'b', explanation: 'Escasez absoluta + adopción global = la única salida demostrada contra la impresión ilimitada.' }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Bitcoin: La Salida',
    level: 'Principiante',
    number: '4 de 20',
    duration: '25 minutos',
    type: 'Video + Texto',
    description: 'Ante la corrupción del dinero Fiat, surge una solución matemática, descentralizada e inmutable.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Génesis',
        content: 'El 3 de enero de 2009, mientras el mundo se desmoronaba por la crisis financiera causada por bancos irresponsables, alguien bajo el seudónimo **Satoshi Nakamoto** minó el primer bloque de Bitcoin. En ese bloque grabó para siempre: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks". Un mensaje eterno: los bancos causan crisis, los gobiernos los rescatan con TU dinero, y tú pagas la factura.',
        highlight: { title: 'No fue Coincidencia', text: 'Bitcoin nació exactamente cuando el sistema financiero demostró su corrupción. No es tecnología random: es una respuesta directa al robo institucionalizado.' }
      },
      {
        type: 'main',
        title: 'Las 4 Innovaciones que Cambian Todo',
        content: 'Bitcoin no es solo "dinero digital". Es la primera vez en 5,000 años que alguien resuelve 4 problemas que parecían imposibles:',
        features: [
          { icon: Lock, title: 'Escasez Digital Absoluta', text: 'Solo existirán 21 millones de BTC. NUNCA. JAMÁS. Nadie puede crear más, ni Satoshi, ni los mineros, ni ningún gobierno. Es la primera vez que existe algo digitalmente escaso.' },
          { icon: Network, title: 'Descentralización Real', text: 'No hay CEO, no hay servidor central, no hay empresa. Miles de computadoras en todo el mundo mantienen la red. Para "apagar" Bitcoin tendrías que apagar el internet global.' },
          { icon: Shield, title: 'Inmutabilidad', text: 'Una vez que una transacción se confirma, es permanente. Nadie puede revertirla, censurarla o confiscarla. Tu dinero es TUYO.' },
          { icon: Globe, title: 'Sin Fronteras ni Permisos', text: 'Puedes enviar $1 millón a cualquier país del mundo en 10 minutos, sin pedir permiso a nadie. Domingos, festivos, a las 3am. No importa.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin vs Oro vs Dólar',
        content: 'Comparemos las propiedades del dinero perfecto:',
        features: [
          { icon: Anchor, title: 'Oro', text: 'Escaso pero difícil de dividir, transportar y verificar. No puedes mandar oro por internet. Confiscable (USA lo hizo en 1933).' },
          { icon: Landmark, title: 'Dólar', text: 'Fácil de usar pero infinitamente inflable. Los políticos SIEMPRE imprimen más. Pierde 96% de valor cada 50 años.' },
          { icon: Zap, title: 'Bitcoin', text: 'Escaso como el oro, portable como el dólar, verificable instantáneamente, divisible hasta 8 decimales, imposible de confiscar si guardas bien tus llaves.' }
        ],
        highlight: { title: 'El Upgrade Monetario', text: 'Bitcoin es lo que el oro siempre quiso ser: dinero perfecto para la era digital.' }
      },
      {
        type: 'main',
        title: 'Por qué los Gobiernos NO Pueden Detenerlo',
        content: 'China prohibió Bitcoin en 2013, 2017, 2019 y 2021. Hoy hay más actividad Bitcoin en China que nunca. India lo prohibió y revirtió. Nigeria lo prohibió y es el país #2 en adopción per cápita. ¿Por qué no funciona prohibirlo?',
        features: [
          { icon: Network, title: 'No hay Servidor que Cerrar', text: 'Bitcoin corre en miles de computadoras en 100+ países. No hay "sede central" que allanar.' },
          { icon: Shield, title: 'Encriptación Militar', text: 'Tus bitcoins están protegidos por la misma matemática que protege secretos nucleares. Sin tu clave, nadie accede.' },
          { icon: Globe, title: 'Internet es Global', text: 'Mientras exista internet (o radio, o satélites), Bitcoin funciona. No puedes cerrar internet sin destruir tu economía.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo que Bitcoin Significa para Ti',
        items: [
          'Por primera vez en tu vida, puedes tener un activo que NINGÚN gobierno puede devaluar, confiscar o censurar.',
          'No necesitas permiso de bancos, políticos ni empresas para guardar y mover TU dinero.',
          'El halving reduce la emisión de Bitcoin a la mitad cada 4 años. En 2024 fue el 4to halving. Para 2140, no habrá más emisión.',
          'Mientras los bancos centrales imprimen trillones, Bitcoin sigue su código predecible. Es la única certeza monetaria en un mundo de manipulación.',
          'No es "hacerse rico rápido": es proteger tu trabajo de toda una vida de la corrosión del dinero fiat.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué mensaje grabó Satoshi en el primer bloque de Bitcoin y por qué es significativo?',
          options: [
            { id: 'a', text: '"Hello World" - porque es tradición de programadores' },
            { id: 'b', text: 'Un titular sobre bancos siendo rescatados - para marcar que Bitcoin es una respuesta a la corrupción financiera' },
            { id: 'c', text: 'Su nombre real' },
            { id: 'd', text: 'Nada, el primer bloque estaba vacío' }
          ],
          correctAnswer: 'b',
          explanation: 'Satoshi grabó "Chancellor on brink of second bailout for banks" para que quede claro: Bitcoin existe porque el sistema actual está corrupto.'
        },
        {
          id: 'q2',
          question: '¿Por qué decimos que Bitcoin tiene "escasez digital absoluta"?',
          options: [
            { id: 'a', text: 'Porque es difícil de comprar' },
            { id: 'b', text: 'Porque el código garantiza matemáticamente que solo existirán 21 millones, y nadie puede cambiar eso' },
            { id: 'c', text: 'Porque Satoshi lo decidió así y puede cambiarlo' },
            { id: 'd', text: 'Porque los mineros votan cada año' }
          ],
          correctAnswer: 'b',
          explanation: 'El límite de 21 millones está grabado en el código y verificado por miles de nodos. Cambiarlo requeriría convencer al 100% de la red - matemáticamente imposible.'
        },
        {
          id: 'q3',
          question: 'China ha prohibido Bitcoin múltiples veces (2013, 2017, 2019, 2021). ¿Qué pasó?',
          options: [
            { id: 'a', text: 'Bitcoin desapareció en China' },
            { id: 'b', text: 'Bitcoin siguió funcionando y China sigue siendo un mercado activo' },
            { id: 'c', text: 'El precio cayó a cero' },
            { id: 'd', text: 'Los mineros chinos entregaron sus máquinas al gobierno' }
          ],
          correctAnswer: 'b',
          explanation: 'No puedes prohibir matemáticas. Bitcoin es un protocolo descentralizado sin servidor central. Mientras exista internet, Bitcoin existe.'
        },
        {
          id: 'q4',
          question: '¿Qué es el "halving" de Bitcoin y por qué importa?',
          options: [
            { id: 'a', text: 'Cuando el precio baja 50%' },
            { id: 'b', text: 'Cada 4 años la emisión de nuevos BTC se reduce a la mitad, haciendo a Bitcoin más escaso con el tiempo' },
            { id: 'c', text: 'Cuando se dividen los bitcoins en partes más pequeñas' },
            { id: 'd', text: 'Un bug en el código' }
          ],
          correctAnswer: 'b',
          explanation: 'El halving es deflación programada. Mientras la Fed imprime más dólares cada año, Bitcoin produce MENOS cada 4 años. Para 2140, no habrá emisión nueva.'
        },
        {
          id: 'q5',
          question: 'Un dictador quiere confiscar tus bitcoins. ¿Qué necesita?',
          options: [
            { id: 'a', text: 'Una orden judicial' },
            { id: 'b', text: 'Acceso a tu frase semilla de 12-24 palabras (que puede estar solo en tu memoria)' },
            { id: 'c', text: 'Contactar a Satoshi' },
            { id: 'd', text: 'Llamar al banco de Bitcoin' }
          ],
          correctAnswer: 'b',
          explanation: 'Tus bitcoins están protegidos por encriptación militar. Sin tu clave privada, ni toda la fuerza militar del mundo puede acceder a ellos. Puedes cruzar fronteras con tu riqueza en la memoria.'
        }
      ]
    }
  },
  5: {
    id: 5,
    title: '¿Qué es Blockchain?',
    level: 'Principiante',
    number: '5 de 20',
    duration: '20 minutos',
    type: 'Video + Texto',
    description: 'La tecnología que hace posible la confianza sin intermediarios.',
    sections: [
      {
        type: 'intro',
        title: 'El Libro Contable Universal',
        content: 'Imagina un libro de contabilidad compartido por millones de computadoras. Cada página es un "bloque". Una vez escrita una página, es matemáticamente imposible borrarla o modificarla. Eso es Blockchain.',
        features: [
          { icon: Users, title: 'Distribuido', text: 'No está en un servidor de Google. Está en miles de nodos alrededor del mundo.' },
          { icon: Lock, title: 'Inmutable', text: 'Lo que pasa en la blockchain, se queda en la blockchain para siempre.' }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Por qué nadie puede modificar una transacción ya confirmada en Bitcoin?', options: [{ id: 'a', text: 'Porque el banco no deja' }, { id: 'b', text: 'Porque requiere cambiar todos los bloques siguientes y ganar una guerra de hashrate' }, { id: 'c', text: 'Porque es ilegal' }], correctAnswer: 'b', explanation: 'La inmutabilidad cuesta energía real. Eso la hace creíble.' },
        { id: 'q2', question: '¿Qué pasa si el 51% de los mineros se ponen de acuerdo para reescribir la historia?', options: [{ id: 'a', text: 'Pueden robar todos los bitcoins' }, { id: 'b', text: 'Pueden censurar transacciones o hacer double-spend, pero no robar wallets privadas' }, { id: 'c', text: 'Nada' }], correctAnswer: 'b', explanation: 'Ataque del 51% es caro y detectable. Nunca ha ocurrido en Bitcoin.' },
        { id: 'q3', question: '¿Por qué decimos que la blockchain es "confianza minimizada"?', options: [{ id: 'a', text: 'Porque confías en Satoshi' }, { id: 'b', text: 'Porque no necesitas confiar en nadie — solo en matemáticas y reglas públicas' }], correctAnswer: 'b', explanation: 'Don\'t trust, verify.' }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Descentralización vs Centralización',
    level: 'Principiante',
    number: '6 de 20',
    duration: '12 min',
    type: 'Video + Texto',
    description: 'Por qué importa que nadie tenga el control.',
    sections: [
      {
        type: 'intro',
        title: 'El Problema del Intermediario',
        content: 'En un sistema centralizado (Banco, Facebook), una sola entidad controla tus datos y tu dinero. Pueden censurarte o congelar tu cuenta.'
      },
      {
        type: 'main',
        title: 'La Solución Descentralizada',
        content: 'En una red descentralizada (Bitcoin, Solana), nadie tiene el control absoluto. Son miles de computadoras poniéndose de acuerdo. Es incensurable.',
        features: [
          { icon: Server, title: 'Centralizado', text: 'Un punto de fallo. Si el servidor cae, todo cae.' },
          { icon: Network, title: 'Descentralizado', text: 'Resiliente. Si un nodo cae, los demás siguen funcionando.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Quién controla Bitcoin?',
          options: [
            { id: 'a', text: 'El CEO de Bitcoin' },
            { id: 'b', text: 'Nadie (es descentralizado)' },
            { id: 'c', text: 'El gobierno' },
            { id: 'd', text: 'Los mineros' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin no tiene CEO, ni servidor central, ni autoridad que pueda censurarte. Esa es su ventaja estratégica.'
        },
        {
          id: 'q2',
          question: 'Tu banco te congela la cuenta "por sospecha de lavado". ¿Podría pasar lo mismo con una wallet descentralizada?',
          options: [
            { id: 'a', text: 'Sí, Phantom puede congelar tu wallet' },
            { id: 'b', text: 'No, nadie puede congelar una wallet no-custodial' },
            { id: 'c', text: 'Solo si lo pide la policía' }
          ],
          correctAnswer: 'b',
          explanation: 'En una wallet descentralizada (Phantom, Ledger), solo TÚ tienes las llaves. Nadie puede congelar ni confiscar tus fondos.'
        },
        {
          id: 'q3',
          question: '¿Cuál es el trade-off real de la descentralización?',
          options: [
            { id: 'a', text: 'Es más lenta y más cara que un sistema central (a veces)' },
            { id: 'b', text: 'No tiene ninguna desventaja' },
            { id: 'c', text: 'Es ilegal en la mayoría de países' }
          ],
          correctAnswer: 'a',
          explanation: 'Coordinar miles de nodos es más costoso que un servidor. Bitcoin tarda 10 min en confirmar. Pero a cambio, nadie puede censurarte.'
        }
      ]
    }
  },
  7: {
    id: 7,
    title: 'Wallets: Tu Llave, Tu Dinero',
    level: 'Principiante',
    number: '7 de 20',
    duration: '18 minutos',
    type: 'Video + Texto',
    description: 'Entiende la diferencia crítica entre tener cripto en un exchange y tenerlo en tu propia wallet.',
    sections: [
      {
        type: 'intro',
        title: 'Not Your Keys, Not Your Coins',
        content: 'Si compras Bitcoin en Binance o Coinbase, ellos tienen el dinero, no tú. Si ellos quiebran (como FTX), pierdes todo. Una **Wallet** te da la custodia real. Tú eres tu propio banco.',
        highlight: { title: 'Regla de Oro', text: 'Los exchanges son para comprar y vender, NO para ahorrar a largo plazo.' }
      },
      {
        type: 'comparison',
        title: 'Tipos de Custodia',
        table: [
          { aspect: 'Exchange (Binance)', trad: 'Fácil, recuperable', btc: 'Riesgo de hackeo/corralito. No es tuyo.' },
          { aspect: 'Hot Wallet (Phantom)', trad: 'En tu celular/PC', btc: 'Control total. Conveniente. Riesgo medio.' },
          { aspect: 'Cold Wallet (Ledger)', trad: 'Desconectado', btc: 'Máxima seguridad. Para ahorros de vida.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué pasa si dejas tu dinero en un exchange y este quiebra?',
          options: [
            { id: 'a', text: 'El gobierno te lo devuelve' },
            { id: 'b', text: 'Probablemente lo pierdas' },
            { id: 'c', text: 'No pasa nada' }
          ],
          correctAnswer: 'b',
          explanation: 'En un exchange, eres un acreedor no garantizado. La autocustodia es vital.'
        },
        {
          id: 'q2',
          question: 'Tienes 10 000 $ en SOL. ¿Dónde lo guardas?',
          options: [
            { id: 'a', text: 'Todo en Binance (fácil de vender)' },
            { id: 'b', text: 'Todo en Phantom (hot wallet)' },
            { id: 'c', text: 'La mayor parte en Ledger (cold wallet) + algo en Phantom para operar' }
          ],
          correctAnswer: 'c',
          explanation: 'Para montos grandes: cold wallet. Para DeFi y operativa diaria: hot wallet. Exchanges solo para trading activo.'
        },
        {
          id: 'q3',
          question: 'Un amigo perdió su teléfono con Phantom instalado. ¿Perdió sus fondos?',
          options: [
            { id: 'a', text: 'Sí, el dinero estaba en el teléfono' },
            { id: 'b', text: 'No, si tiene su frase semilla guardada' },
            { id: 'c', text: 'Depende si tenía Touch ID activado' }
          ],
          correctAnswer: 'b',
          explanation: 'La wallet es solo una interfaz. El verdadero acceso lo da la seed phrase. Sin ella, adiós fondos.'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'La Frase Semilla (Seed Phrase)',
    level: 'Principiante',
    number: '8 de 20',
    duration: '25 minutos',
    type: 'Práctica Obligatoria',
    description: 'El secreto más importante de tu vida financiera digital. Cómo guardarla y protegerla.',
    sections: [
      {
        type: 'intro',
        title: '12 Palabras para Gobernarlos a Todos',
        content: 'Tu wallet generará 12 o 24 palabras. Estas palabras SON tu dinero. Quien las tenga, tiene acceso total. Si pierdes el celular, con estas palabras recuperas todo. Si pierdes las palabras, pierdes todo.',
        highlight: { title: 'Protocolo de Seguridad', text: 'NUNCA escribas la frase semilla en digital (notas, foto, email). SOLO papel o metal.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu frase semilla de 12 palabras está escrita en un papel y guardada en tu casa. Un ladrón entra y la roba. ¿Qué puede hacer?',
          options: [
            { id: 'a', text: 'Nada, necesita tu contraseña también' },
            { id: 'b', text: 'Vaciar todas tus wallets al instante' },
            { id: 'c', text: 'Solo ver el saldo' },
            { id: 'd', text: 'Solo si también tiene tu celular' }
          ],
          correctAnswer: 'b',
          explanation: 'La frase semilla = llave maestra total. Quien la tenga controla el 100 % de los fondos para siempre.'
        },
        {
          id: 'q2',
          question: '¿Cuál de estas opciones es la forma MÁS segura de guardar tu seed phrase en 2025?',
          options: [
            { id: 'a', text: 'Foto en el celular encriptada' },
            { id: 'b', text: 'Google Drive con 2FA' },
            { id: 'c', text: 'Placa de acero grabada guardada en caja de seguridad + otra parte con familiar de confianza (Shamir Secret Sharing)' },
            { id: 'd', text: 'Memorizarla y no escribirla' }
          ],
          correctAnswer: 'c',
          explanation: 'Nunca confíes tu futuro financiero a una empresa o a tu memoria. Metal + distribución física es el estándar de los whales.'
        },
        {
          id: 'q3',
          question: 'Te llega un mail de "Phantom Support" diciendo que tu wallet está en riesgo y te pide confirmar tu frase semilla. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Contesto rápido para no perder todo' },
            { id: 'b', text: 'Ignoro y marco como spam. Phantom NUNCA pide la seed phrase' },
            { id: 'c', text: 'Le mando solo las últimas 4 palabras "por seguridad"' }
          ],
          correctAnswer: 'b',
          explanation: 'Regla de oro: quien te pida la seed phrase = 100 % estafa. Siempre.'
        }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Instalando Phantom Wallet',
    level: 'Principiante',
    number: '9 de 20',
    duration: '30 minutos',
    type: 'Tutorial Práctico',
    description: 'Entra al mundo de Solana con la mejor wallet del mercado. UX superior y seguridad integrada.',
    sections: [
      {
        type: 'intro',
        title: 'Por qué Phantom',
        content: 'Para usar Solana, recomendamos **Phantom**. Es intuitiva, rápida y tiene características de seguridad que te avisan antes de firmar transacciones peligrosas. Es el estándar de oro en Solana.',
        highlight: { title: 'Paso 1', text: 'Ve a phantom.app (Verifica siempre la URL). Instala la extensión de navegador o la app móvil.' }
      },
      {
        type: 'main',
        title: 'Configuración',
        content: 'Sigue los pasos para crear nueva wallet. Anota la frase semilla en papel. Verifica. ¡Listo! Ahora tienes una dirección de Solana que empieza por letras y números.',
        features: [
          { icon: Smartphone, title: 'Móvil y Desktop', text: 'Sincronizados perfectamente.' },
          { icon: Shield, title: 'Detector de Scams', text: 'Phantom te alerta si intentas conectarte a un sitio web malicioso conocido.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿De dónde debes descargar Phantom?',
          options: [
            { id: 'a', text: 'Cualquier link de Google' },
            { id: 'b', text: 'Sitio oficial phantom.app o App Stores oficiales' },
            { id: 'c', text: 'Un archivo que te mandaron por Telegram' }
          ],
          correctAnswer: 'b',
          explanation: 'Siempre verifica la fuente oficial para evitar versiones falsas que roban fondos.'
        },
        {
          id: 'q2',
          question: 'Instalaste Phantom. ¿Qué es lo PRIMERO que debes hacer antes de depositar fondos?',
          options: [
            { id: 'a', text: 'Conectarla a cualquier dApp para probar' },
            { id: 'b', text: 'Guardar la frase semilla de forma segura (papel/metal)' },
            { id: 'c', text: 'Mandarle SOL para probar' }
          ],
          correctAnswer: 'b',
          explanation: 'Sin backup de tu seed phrase, un formateo del celular = pérdida total.'
        },
        {
          id: 'q3',
          question: 'Un sitio web te pide "Conectar Wallet". ¿Qué significa eso?',
          options: [
            { id: 'a', text: 'Le estás dando permiso para ver tu dirección pública (solo lectura)' },
            { id: 'b', text: 'Le estás dando tu frase semilla' },
            { id: 'c', text: 'Le estás dando permiso para vaciar tu wallet' }
          ],
          correctAnswer: 'a',
          explanation: 'Conectar wallet ≠ aprobar transacción. Solo muestra tu dirección pública. Siempre debes aprobar cada firma.'
        }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Solana vs Ethereum: La Guerra de L1s',
    level: 'Principiante',
    number: '10 de 20',
    duration: '35 min',
    type: 'Comparativa',
    description: 'Por qué somos "Solana Bulls". Velocidad, costos y la mejor experiencia de usuario en crypto.',
    sections: [
      {
        type: 'intro',
        title: 'El Problema de Ethereum',
        content: 'Ethereum es revolucionario, pero tiene un problema fatal para el usuario común: **es lento y caro**. Pagar $50 dólares para enviar $20 es absurdo. Para que crypto sea global, debe ser rápido y barato. Aquí entra Solana.',
        highlight: { title: 'La Visión', text: 'Solana no quiere ser solo una "capa de liquidación". Quiere ser la blockchain donde ocurra toda la actividad financiera del mundo a la velocidad de la luz (Nasdaq on-chain).' }
      },
      {
        type: 'comparison',
        title: 'David vs Goliat',
        table: [
          { aspect: 'Transacciones por Segundo', trad: 'Ethereum: ~15-30 TPS', btc: 'Solana: ~3,000 - 65,000 TPS' },
          { aspect: 'Costo por Transacción', trad: 'Ethereum: $2.00 - $100.00+', btc: 'Solana: $0.00025 (Menos de un centavo)' },
          { aspect: 'Tiempo de Bloque', trad: 'Ethereum: 12 segundos', btc: 'Solana: 400 milisegundos (Casi instantáneo)' },
          { aspect: 'Experiencia de Usuario', trad: 'Lenta, costosa, compleja (L2s)', btc: 'Fluida, rápida, todo en una capa (L1)' }
        ]
      },
      {
        type: 'main',
        title: 'El Superpoder de Solana: Su Comunidad y DApps',
        content: 'La tecnología es genial, pero la comunidad es lo que gana. El ecosistema de Solana tiene las aplicaciones más fáciles de usar:',
        features: [
          { icon: Zap, title: 'Jupiter (JUP)', text: 'El mejor agregador de DEX del mundo. Te da siempre el mejor precio, tiene Limit Orders y DCA integrado. UX superior a Uniswap.' },
          { icon: Wallet, title: 'Phantom Wallet', text: 'La wallet más amigable. Te avisa si una transacción parece estafa antes de firmar. Mucho mejor UX que MetaMask.' },
          { icon: Users, title: 'La Comunidad', text: 'Developers hambrientos, hackathons constantes y una vibra de "construir a pesar del ruido". Superteam y DRiP están cambiando el juego.' },
          { icon: Globe, title: 'DePIN', text: 'Redes de infraestructura física (Helium, Hivemapper) eligen Solana porque es la única chain que aguanta su volumen.' }
        ]
      },
      {
        type: 'takeaways',
        title: '¿Por qué somos Bullish en Solana?',
        items: [
          'Es la única chain monolítica capaz de escalar a millones de usuarios hoy.',
          'Firedancer (el nuevo cliente) la hará aún más rápida y segura.',
          'La experiencia móvil en Solana está años luz por delante.',
          'Es usable para micropagos, juegos y pagos reales, no solo para ballenas.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la principal ventaja de usuario de Solana sobre ETH?',
          options: [
            { id: 'a', text: 'Es más viejo' },
            { id: 'b', text: 'Costos de fracción de centavo y velocidad instantánea' },
            { id: 'c', text: 'Es más difícil de usar' }
          ],
          correctAnswer: 'b',
          explanation: 'La usabilidad (bajos costos + velocidad) hace que Solana sea viable para el uso diario masivo.'
        },
        {
          id: 'q2',
          question: '¿Qué herramienta de Solana reemplaza a Uniswap con mejores funciones?',
          options: [
            { id: 'a', text: 'Jupiter (JUP)' },
            { id: 'b', text: 'Pancakeswap' },
            { id: 'c', text: 'Curve' }
          ],
          correctAnswer: 'a',
          explanation: 'Jupiter es el agregador líder en Solana, ofreciendo DCA, órdenes límite y swaps con la mejor ruta.'
        },
        {
          id: 'q3',
          question: 'Quieres usar DeFi con 100 $ para aprender. ¿Qué blockchain te permite hacerlo sin gastar 30 $ en gas?',
          options: [
            { id: 'a', text: 'Ethereum Layer 1' },
            { id: 'b', text: 'Solana (transacciones cuestan $0.0002)' },
            { id: 'c', text: 'Bitcoin' }
          ],
          correctAnswer: 'b',
          explanation: 'En Ethereum L1, podrías gastar 30 % de tu capital solo en fees. Solana te permite experimentar con riesgo mínimo.'
        },
        {
          id: 'q4',
          question: '¿Qué significa que Solana sea "monolítica" (no modular como Ethereum + L2s)?',
          options: [
            { id: 'a', text: 'Es más lenta' },
            { id: 'b', text: 'Todo ocurre en una sola capa (no necesitas bridges ni fragmentación)' },
            { id: 'c', text: 'Es más cara' }
          ],
          correctAnswer: 'b',
          explanation: 'Solana pone toda la ejecución, consenso y data availability en L1. No necesitas L2s, evitando complejidad y riesgos de bridges.'
        }
      ]
    }
  },
  // Orphaned Lessons (Moved from 9-12)
  35: {
    id: 35,
    title: 'Obteniendo tus Primeros SOL',
    level: 'Principiante',
    number: '11 de 20',
    duration: '25 minutos',
    type: 'Tutorial',
    description: 'Cómo convertir tu dinero local (Pesos, Dólares) a Cripto (USDC/SOL) usando Exchanges.',
    referrals: [
      {
        title: 'Backpack Exchange',
        description: 'El exchange más seguro y regulado para comprar cripto. Obtén descuentos en fees usando este link.',
        link: 'https://backpack.exchange/join/cbas',
        buttonText: 'Crear Cuenta en Backpack'
      }
    ],
    sections: [
      {
        type: 'intro',
        title: 'El Puente Fiat-Cripto',
        content: 'Necesitas un Exchange Centralizado (CEX) como Binance, Coinbase o Kraken para tu primera compra. Haces una transferencia bancaria o usas tarjeta, compras SOL, y lo RETIRAS a tu Phantom Wallet.',
        highlight: { title: 'Paso Crítico', text: 'Al retirar, asegúrate de seleccionar la red **SOLANA**. Si eliges otra red, tus fondos no llegarán a Phantom.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Al retirar SOL de Binance a Phantom, ¿qué red eliges?',
          options: [
            { id: 'a', text: 'Ethereum (ERC20)' },
            { id: 'b', text: 'Solana (SOL)' },
            { id: 'c', text: 'Bitcoin' }
          ],
          correctAnswer: 'b',
          explanation: 'Debes usar la red nativa de la wallet destino. Phantom es una wallet de Solana.'
        },
        {
          id: 'q2',
          question: 'Compras 100 $ de SOL en Binance. ¿Dónde deberías guardarlos a largo plazo?',
          options: [
            { id: 'a', text: 'Dejarlos en Binance (es más fácil)' },
            { id: 'b', text: 'Retirarlos a tu Phantom wallet (autocustodia)' },
            { id: 'c', text: 'Mandárselos a un amigo' }
          ],
          correctAnswer: 'b',
          explanation: 'Not your keys, not your coins. Los exchanges son para comprar/vender, NO para custodiar.'
        },
        {
          id: 'q3',
          question: 'Vas a retirar de Kraken a tu Phantom. Te cobran 0.01 SOL de fee. ¿Por qué?',
          options: [
            { id: 'a', text: 'Es el fee de la red blockchain' },
            { id: 'b', text: 'Es el fee del exchange (no de Solana)' },
            { id: 'c', text: 'Te están estafando' }
          ],
          correctAnswer: 'b',
          explanation: 'Los exchanges cobran fees de retiro (son ellos). El fee real de Solana es <$0.001.'
        }
      ]
    }
  },
  36: {
    id: 36,
    title: 'Tu Primera Transacción',
    level: 'Principiante',
    number: '12 de 20',
    duration: '20 minutos',
    type: 'Práctica',
    description: 'Envía valor a través del mundo en segundos. Experimenta la magia de la blockchain.',
    sections: [
      {
        type: 'intro',
        title: 'Enviando Valor',
        content: 'Vamos a hacer una prueba. Envía una pequeña cantidad de SOL a un amigo o a una segunda wallet tuya. Verás que en Solana es casi instantáneo y casi gratis.',
        highlight: { title: 'Checklist', text: '1. Copia la dirección destino. 2. Verifica los primeros y últimos 4 caracteres. 3. Envía una prueba pequeña primero.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué debes hacer antes de enviar una cantidad grande?',
          options: [
            { id: 'a', text: 'Rezar' },
            { id: 'b', text: 'Enviar una transacción de prueba pequeña' },
            { id: 'c', text: 'Enviar todo rápido' }
          ],
          correctAnswer: 'b',
          explanation: 'Siempre prueba la dirección con un monto mínimo para asegurar que todo esté correcto.'
        },
        {
          id: 'q2',
          question: 'Vas a enviar 5 SOL a un amigo. ¿Qué datos te debe dar?',
          options: [
            { id: 'a', text: 'Su dirección pública de Solana (empieza con letras/números)' },
            { id: 'b', text: 'Su frase semilla' },
            { id: 'c', text: 'Su contraseña de Phantom' }
          ],
          correctAnswer: 'a',
          explanation: 'Solo necesitas su dirección pública. Nunca pidas ni compartas seed phrases o contraseñas.'
        },
        {
          id: 'q3',
          question: 'Enviaste SOL pero te equivocaste en la dirección. ¿Puedes cancelar?',
          options: [
            { id: 'a', text: 'Sí, llamas a soporte de Solana' },
            { id: 'b', text: 'No. Las transacciones en blockchain son irreversibles' },
            { id: 'c', text: 'Sí, Phantom puede revertirla' }
          ],
          correctAnswer: 'b',
          explanation: 'Por eso es VITAL verificar la dirección 2-3 veces antes de enviar.'
        }
      ]
    }
  },
  37: {
    id: 37,
    title: 'Exploradores de Bloques (Solscan)',
    level: 'Principiante',
    number: '13 de 20',
    duration: '15 minutos',
    type: 'Herramienta',
    description: 'Aprende a verificar la verdad. No confíes, verifica.',
    sections: [
      {
        type: 'intro',
        title: 'Solscan.io',
        content: 'Si Phantom dice "Enviado" pero tu amigo dice "No llegó", ¿quién miente? La Blockchain nunca miente. Copia el ID de transacción (Signature) en Solscan.io y verás el estado real.',
        features: [
          { icon: Search, title: 'Transparencia', text: 'Puedes ver el balance y movimientos de cualquier cuenta.' },
          { icon: CheckCircle, title: 'Confirmaciones', text: 'Si dice "Success" en Solscan, el dinero llegó. Punto.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Para qué sirve Solscan?',
          options: [
            { id: 'a', text: 'Para minar' },
            { id: 'b', text: 'Para verificar transacciones y cuentas en la blockchain' },
            { id: 'c', text: 'Para chatear' }
          ],
          correctAnswer: 'b',
          explanation: 'Es el explorador de bloques de Solana, la fuente de verdad de la red.'
        },
        {
          id: 'q2',
          question: 'Enviaste SOL hace 5 minutos y tu amigo dice que no llegó. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Reenviar' },
            { id: 'b', text: 'Copiar el Signature (TX ID) y buscarlo en Solscan para verificar el estado' },
            { id: 'c', text: 'Llamar al CEO de Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'La blockchain es la fuente de verdad. Si Solscan dice "Success", el dinero llegó.'
        },
        {
          id: 'q3',
          question: 'Quieres saber si una wallet tiene mucho SOL antes de hacer un trade P2P. ¿Cómo lo verificas?',
          options: [
            { id: 'a', text: 'Le pides una captura de pantalla' },
            { id: 'b', text: 'Pegas su dirección pública en Solscan y ves su balance en tiempo real' },
            { id: 'c', text: 'Confías en su palabra' }
          ],
          correctAnswer: 'b',
          explanation: 'Todas las wallets son públicas. Solscan te muestra el balance y el historial completo.'
        }
      ]
    }
  },
  38: {
    id: 38,
    title: 'Evitar Estafas en Web3',
    level: 'Principiante',
    number: '14 de 20',
    duration: '30 minutos',
    type: 'Seguridad Vital',
    description: 'El mundo cripto está lleno de depredadores. Aprende a defenderte antes de salir a mar abierto.',
    sections: [
      {
        type: 'intro',
        title: 'Paranoia Saludable',
        content: 'En Cripto, las transacciones son irreversibles. Si te roban, no hay soporte técnico. Debes ser escéptico.',
        features: [
          { icon: AlertTriangle, title: 'DMs de Soporte', text: 'Nadie de soporte te escribirá primero por Telegram/Discord. Son estafas.' },
          { icon: Link, title: 'Phishing', text: 'Cuidado con los anuncios de Google que llevan a sitios falsos de Phantom o Jupiter.' },
          { icon: Zap, title: 'Tokens Falsos', text: 'Cualquiera puede crear un token llamado "USDC". Verifica siempre el Contract Address (CA).' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Recibes un NFT gratis desconocido en tu wallet que dice "Visita esta web para reclamar $1000". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Visito la web rápido' },
            { id: 'b', text: 'Lo ignoro y lo quemo/oculto (Es Scam)' },
            { id: 'c', text: 'Se lo mando a un amigo' }
          ],
          correctAnswer: 'b',
          explanation: 'Es una estafa común. Si interactúas con la web, drenarán tu wallet.'
        },
        {
          id: 'q2',
          question: 'Un "admin" de Discord te escribe diciendo que tu wallet está en peligro y te pide tu seed phrase para "protegerla". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Se la doy rápido para no perder todo' },
            { id: 'b', text: 'Bloqueo y reporto. Ningún admin legítimo NUNCA te pedirá la seed phrase' },
            { id: 'c', text: 'Le doy solo 6 palabras para confirmar' }
          ],
          correctAnswer: 'b',
          explanation: 'Regla de oro: quien te pida la seed phrase = estafador. Siempre.'
        },
        {
          id: 'q3',
          question: 'Ves un anuncio en Google de "phantom-app-secure.com" que ofrece una versión "mejorada" de Phantom. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Lo descargo (suena mejor)' },
            { id: 'b', text: 'Ignoro. El sitio oficial SOLO es phantom.app' },
            { id: 'c', text: 'Lo pruebo en una wallet secundaria' }
          ],
          correctAnswer: 'b',
          explanation: 'Los scammers compran ads en Google con URLs muy similares. SIEMPRE verifica la URL exacta.'
        },
        {
          id: 'q4',
          question: 'Quieres comprar el token BONK. Hay 5 tokens con ese nombre en Jupiter. ¿Cómo sabes cuál es el real?',
          options: [
            { id: 'a', text: 'El que tiene más holders' },
            { id: 'b', text: 'Verifico el Contract Address (CA) oficial en CoinGecko o el sitio web del proyecto' },
            { id: 'c', text: 'El primero que aparece' }
          ],
          correctAnswer: 'b',
          explanation: 'Cualquiera puede crear un token falso con el mismo nombre. Solo el CA es único e irrefutable.'
        }
      ]
    }
  },
  13: {
    id: 13,
    title: 'Velas Japonesas y Tendencias',
    level: 'Intermedio',
    number: '1 de 12',
    duration: '25 min',
    type: 'Video + Práctica',
    description: 'Aprende a leer el lenguaje del mercado. Velas verdes, rojas y qué significan.',
    sections: [
      { type: 'intro', title: 'Lectura de Precio', content: 'Las velas nos cuentan la historia de la batalla entre compradores (Toros) y vendedores (Osos).' },
      { type: 'main', title: 'Componentes', features: [{ icon: BarChart3, title: 'Cuerpo', text: 'Rango entre apertura y cierre.' }, { icon: Activity, title: 'Mechas', text: 'Precios máximos y mínimos alcanzados (rechazos).' }] }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Una vela roja con cuerpo muy grande y mechas casi inexistentes después de una subida fuerte indica...',
          options: [
            { id: 'a', text: 'Acumulación silenciosa' },
            { id: 'b', text: 'Distribución agresiva — posible techo' }
          ],
          correctAnswer: 'b',
          explanation: 'Los grandes jugadores vendieron todo el día y cerraron cerca del mínimo.'
        },
        {
          id: 'q2',
          question: '¿Qué patrón de 3 velas es el más fiable para reversión bajista?',
          options: [
            { id: 'a', text: 'Tres soldados blancos' },
            { id: 'b', text: 'Evening Star (estrella vespertina)' }
          ],
          correctAnswer: 'b',
          explanation: 'Evening Star muestra pérdida de momentum alcista y toma de control bajista.'
        },
        {
          id: 'q3',
          question: 'Una mecha inferior muy larga en soporte + volumen alto =',
          options: [
            { id: 'a', text: 'Trampa de osos' },
            { id: 'b', text: 'Hammer real — posible suelo fuerte' }
          ],
          correctAnswer: 'b',
          explanation: 'El volumen alto confirma que hay compradores defendiendo la zona con convicción.'
        },
        {
          id: 'q4',
          question: '¿En qué timeframe son más fiables las velas japonesas?',
          options: [
            { id: 'a', text: '1 minuto' },
            { id: 'b', text: '4h y diario' }
          ],
          correctAnswer: 'b',
          explanation: 'Ruido en timeframes bajos mata la señal.'
        }
      ]
    }
  },
  14: {
    id: 14,
    title: 'Soportes y Resistencias',
    level: 'Intermedio',
    number: '2 de 12',
    duration: '30 min',
    type: 'Video + Práctica',
    description: 'Identifica las zonas donde el precio rebota. Pisos y techos del mercado.',
    sections: [{ type: 'intro', title: 'Memoria del Mercado', content: 'El precio tiene memoria. Donde rebotó antes, es probable que rebote de nuevo.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'El precio rompe una resistencia con volumen 5× superior al promedio y cierra fuerte. ¿Qué ocurre con esa resistencia rota?',
          options: [
            { id: 'a', text: 'Desaparece' },
            { id: 'b', text: 'Se convierte en soporte (role reversal)' }
          ],
          correctAnswer: 'b',
          explanation: 'Flip S/R: El techo roto se convierte en el nuevo piso cuando hay confirmación con volumen.'
        },
        {
          id: 'q2',
          question: '¿Dónde colocas tu stop loss en una compra en soporte?',
          options: [
            { id: 'a', text: 'Justo encima del soporte' },
            { id: 'b', text: 'Debajo del mínimo más reciente + filtro' }
          ],
          correctAnswer: 'b',
          explanation: 'Si rompe el soporte, tu tesis falló. El stop debe estar donde invalida tu idea.'
        },
        {
          id: 'q3',
          question: 'El precio lleva 4 toques exactos en 150$. ¿Qué es más probable?',
          options: [
            { id: 'a', text: 'Quinto toque y rompe' },
            { id: 'b', text: 'Cuanto más toca, más débil se vuelve — ruptura inminente' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada toque gasta órdenes → la quinta suele romper.'
        },
        {
          id: 'q4',
          question: '¿Qué es una "fakeout" o trampa?',
          options: [
            { id: 'a', text: 'Rompe y vuelve rápido adentro' },
            { id: 'b', text: 'No rompe nunca' }
          ],
          correctAnswer: 'a',
          explanation: 'Los market makers barren stops y luego revierten. Por eso esperamos confirmación.'
        }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Indicadores Clave (RSI, EMAs)',
    level: 'Intermedio',
    number: '3 de 12',
    duration: '28 min',
    type: 'Video + Práctica',
    description: 'Usa matemáticas para confirmar tu intuición. RSI para sobrecompra/venta y Medias Móviles para tendencia.',
    sections: [{ type: 'intro', title: 'Ayudas Visuales', content: 'No operes solo por indicadores, úsalos para confirmar lo que ves en el precio.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'RSI 14 en 78 + precio haciendo nuevos highs. ¿Qué indica?',
          options: [
            { id: 'a', text: 'Fuerte tendencia alcista' },
            { id: 'b', text: 'Divergencia bajista oculta — posible corrección' }
          ],
          correctAnswer: 'b',
          explanation: 'RSI extremo mientras precio sube puede indicar debilidad interna próxima.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la EMA más usada por instituciones en cripto?',
          options: [
            { id: 'a', text: 'EMA 21' },
            { id: 'b', text: 'EMA 200' }
          ],
          correctAnswer: 'b',
          explanation: 'La EMA 200 diario es la línea entre bull y bear market.'
        },
        {
          id: 'q3',
          question: 'Precio cruza de abajo hacia arriba la EMA 55 en gráfico diario con volumen creciente. ¿Qué operación tomas?',
          options: [
            { id: 'a', text: 'Short' },
            { id: 'b', text: 'Long con stop bajo la EMA' }
          ],
          correctAnswer: 'b',
          explanation: 'Cruce alcista de EMA con volumen es señal de continuación alcista.'
        },
        {
          id: 'q4',
          question: 'RSI <30 + precio en soporte histórico =',
          options: [
            { id: 'a', text: 'Vender más' },
            { id: 'b', text: 'Zona de posible suelo — entrada agresiva' }
          ],
          correctAnswer: 'b',
          explanation: 'RSI sobreventa en soporte fuerte = confluencia de señales alcistas.'
        }
      ]
    }
  },
  16: {
    id: 16,
    title: 'Estructura de Mercado',
    level: 'Intermedio',
    number: '4 de 12',
    duration: '22 min',
    type: 'Video + Práctica',
    description: 'La habilidad más importante: Saber si estamos subiendo, bajando o laterales.',
    sections: [{ type: 'main', title: 'Tendencia Alcista', content: 'Se define por Altos más Altos (HH) y Bajos más Altos (HL).' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cómo se define una tendencia alcista limpia?',
          options: [
            { id: 'a', text: 'Velas verdes' },
            { id: 'b', text: 'Higher Highs + Higher Lows' }
          ],
          correctAnswer: 'b',
          explanation: 'La estructura de HH + HL define tendencia alcista objetivamente.'
        },
        {
          id: 'q2',
          question: 'El precio hace un Lower Low por primera vez después de meses alcistas. ¿Qué acaba de pasar?',
          options: [
            { id: 'a', text: 'Nada importante' },
            { id: 'b', text: 'Break of Market Structure — posible cambio de tendencia' }
          ],
          correctAnswer: 'b',
          explanation: 'El primer LL rompe la estructura alcista y señala debilidad.'
        },
        {
          id: 'q3',
          question: 'Estás largo y el precio rompe el último Higher Low. ¿Qué haces?',
          options: [
            { id: 'a', text: 'HODL' },
            { id: 'b', text: 'Sales o reduces inmediatamente' }
          ],
          correctAnswer: 'b',
          explanation: 'La ruptura de estructura invalida tu tesis alcista.'
        },
        {
          id: 'q4',
          question: '¿Qué es un "Change of Character" (CHOCH)?',
          options: [
            { id: 'a', text: 'Cambio de color' },
            { id: 'b', text: 'Cuando la estructura cambia de alcista a bajista (o viceversa) rompiendo estructura previa' }
          ],
          correctAnswer: 'b',
          explanation: 'CHOCH marca el momento donde el control del mercado cambia de manos.'
        }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Tokenomics 101',
    level: 'Intermedio',
    number: '5 de 12',
    duration: '35 min',
    type: 'Concepto',
    description: 'No compres solo por el logo. Entiende la oferta, la demanda y la inflación.',
    sections: [
      { type: 'intro', title: 'La Economía del Token', content: 'Si un token tiene inflación infinita, su precio tenderá a cero. Analiza el Supply Circulante vs Total.' },
      { type: 'comparison', title: 'Red Flags', table: [{ aspect: 'Vesting', trad: 'Corto o inexistente', btc: 'Largo plazo para el equipo' }, { aspect: 'Distribución', trad: '50% para el equipo', btc: 'Mayoría para la comunidad' }] }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Escenario: Encuentras un token a $0.01. Supply circulante: 10M. Supply total: 10B. Fully Diluted Valuation (FDV): $100M. ¿Cuál es el market cap real?',
          options: [
            { id: 'a', text: '$100M (el FDV)' },
            { id: 'b', text: '$100K — Solo 10M tokens están en el mercado × $0.01' },
            { id: 'c', text: 'No se puede calcular' }
          ],
          correctAnswer: 'b',
          explanation: 'Market cap = supply circulante × precio. El FDV es lo que valdría si todo el supply existiera. Aquí hay 1000× diferencia — el 99.9% aún no se ha desbloqueado.'
        },
        {
          id: 'q2',
          question: 'Escenario: Proyecto A tiene 15% para el equipo con 4 años de vesting. Proyecto B tiene 30% para el equipo con 6 meses cliff. Ambos tienen tecnología similar. ¿Cuál compras?',
          options: [
            { id: 'a', text: 'Proyecto B porque el equipo tiene más skin in the game' },
            { id: 'b', text: 'Proyecto A — menos tokens para insiders y vesting largo = más alineado con holders' },
            { id: 'c', text: 'Ninguno, el % del equipo no importa' }
          ],
          correctAnswer: 'b',
          explanation: 'Vesting largo alinea incentivos del equipo con el éxito a largo plazo. 6 meses cliff = pueden dumpearte en menos de un año.'
        },
        {
          id: 'q3',
          question: 'Escenario: Un protocolo emite 5% de nuevo supply anualmente pero quema 3% en fees. ¿Es inflacionario o deflacionario?',
          options: [
            { id: 'a', text: 'Deflacionario porque quema tokens' },
            { id: 'b', text: 'Inflacionario al 2% neto (5% emisión - 3% quema)' },
            { id: 'c', text: 'Neutral' }
          ],
          correctAnswer: 'b',
          explanation: 'Lo que importa es la inflación NETA. Si se crean más tokens de los que se destruyen, el supply crece = presión bajista.'
        },
        {
          id: 'q4',
          question: 'Escenario: Dos memecoins. $DOGE tiene supply infinito (sigue emitiendo). $BONK quemó el 50% de su supply. ¿Cuál tiene mejor tokenomics para apreciación de precio?',
          options: [
            { id: 'a', text: '$DOGE porque es más conocido' },
            { id: 'b', text: '$BONK — supply decreciente con demanda estable = precio sube' },
            { id: 'c', text: 'Ambos iguales, son memecoins' }
          ],
          correctAnswer: 'b',
          explanation: 'La fama no supera las matemáticas. Supply infinito diluye holders eternamente. Supply que decrece crea escasez artificial.'
        },
        {
          id: 'q5',
          question: 'Escenario: Ves un airdrop farming. El protocolo dará tokens gratis a usuarios. ¿Qué pasa normalmente con el precio post-airdrop?',
          options: [
            { id: 'a', text: 'Sube porque más gente tiene el token' },
            { id: 'b', text: 'Cae fuerte — los farmers venden inmediatamente su airdrop gratis' },
            { id: 'c', text: 'Se mantiene estable' }
          ],
          correctAnswer: 'b',
          explanation: 'Los airdrops crean presión de venta masiva. Los farmers no tienen convicción, solo quieren cash. Espera el dump post-airdrop para comprar.'
        }
      ]
    }
  },
  18: {
    id: 18,
    title: 'Ciclos de Mercado (Halving)',
    level: 'Intermedio',
    number: '6 de 12',
    duration: '30 min',
    type: 'Análisis + Estrategia',
    description: 'Todo en cripto se mueve al ritmo de Bitcoin. Entiende los ciclos de 4 años y cómo posicionarte.',
    sections: [
      {
        type: 'intro',
        title: 'El Director de Orquesta',
        content: 'Bitcoin dirige el mercado. Cuando BTC estornuda, las Altcoins se resfrían. Entiende el flujo de dinero: **BTC → ETH → Large Caps → Mid Caps → Memecoins**. El ciclo de 4 años existe porque el halving reduce la emisión de nuevos BTC a la mitad, creando un shock de oferta predecible.',
        highlight: {
          title: 'El Patrón Que Se Repite',
          text: 'Desde 2012, cada halving ha sido seguido por un bull market 12-18 meses después. No es coincidencia. Es matemáticas.'
        }
      },
      {
        type: 'main',
        title: 'Las 4 Fases del Ciclo',
        features: [
          { icon: TrendingDown, title: '1. Bear Market', text: '-70% a -85% desde ATH. Duración: 12-18 meses. El momento de acumular.' },
          { icon: Activity, title: '2. Acumulación', text: 'Precio lateral. Volumen bajo. Los informados compran, los retail ignoran.' },
          { icon: Zap, title: '3. Bull Market', text: 'Halving ocurre → precio rompe ATH → euforia crece → altseason explota.' },
          { icon: AlertTriangle, title: '4. Distribución', text: 'Pico de euforia. Taxi drivers hablan de crypto. Es hora de vender.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Escenario: Estamos en diciembre 2025. El halving fue en abril 2024. Bitcoin superó su ATH. ¿En qué fase estamos?',
          options: [
            { id: 'a', text: 'Acumulación — todavía es temprano' },
            { id: 'b', text: 'Bull market maduro — probablemente en la segunda mitad del ciclo alcista' },
            { id: 'c', text: 'Bear market — mejor esperar' }
          ],
          correctAnswer: 'b',
          explanation: 'Abril 2024 + 18 meses = Octubre 2025. Para diciembre 2025 estamos en fase avanzada del bull. Históricamente, el pico llega 12-18 meses post-halving.'
        },
        {
          id: 'q2',
          question: 'Escenario: Bitcoin dominancia está en 60%. Tu amigo te dice que compres altcoins. ¿Qué le dices?',
          options: [
            { id: 'a', text: '¡Vamos! Las alts van a explotar' },
            { id: 'b', text: 'Todavía temprano para alts. BTC domina. Espera dominancia <55% para rotar fuerte a alts' },
            { id: 'c', text: 'Las alts nunca superan a BTC' }
          ],
          correctAnswer: 'b',
          explanation: 'Altseason histórica comienza cuando Bitcoin dominancia cae bajo ~55%. Con 60%, el capital aún fluye hacia BTC. Paciencia.'
        },
        {
          id: 'q3',
          question: 'Escenario: Tu tía que nunca habló de inversiones te pregunta cómo comprar Dogecoin porque lo vio en TikTok. ¿Qué significa esto?',
          options: [
            { id: 'a', text: 'Es hora de comprar más — el retail está entrando' },
            { id: 'b', text: 'Señal de techo cercano — cuando el mainstream entra masivamente, los informados venden' },
            { id: 'c', text: 'No significa nada' }
          ],
          correctAnswer: 'b',
          explanation: 'El indicador de la "tía/taxista/peluquero" es real. Cuando gente sin conocimiento financiero quiere entrar, significa que estamos cerca del pico de euforia.'
        },
        {
          id: 'q4',
          question: 'Escenario: Bitcoin cae 35% en una semana durante un bull market confirmado. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo, el bear market comenzó' },
            { id: 'b', text: 'Corrección normal en bull market. Evalúo comprar más si tengo liquidez' },
            { id: 'c', text: 'Espero a que recupere el ATH para comprar' }
          ],
          correctAnswer: 'b',
          explanation: 'Correcciones del 30-40% son NORMALES en bull markets. El ciclo 2017 tuvo 6 correcciones de +30%. El ciclo 2021 igual. No confundas corrección con cambio de tendencia.'
        },
        {
          id: 'q5',
          question: 'Escenario: Compraste SOL a $20 y ahora está en $200 (10x). Bitcoin está en ATH. ¿Cuál es la jugada inteligente?',
          options: [
            { id: 'a', text: 'HODL forever, nunca vender' },
            { id: 'b', text: 'Tomar ganancias parciales (ej: sacar la inversión inicial + algo de profit) y dejar el resto correr' },
            { id: 'c', text: 'Vender todo y esperar el bear' }
          ],
          correctAnswer: 'b',
          explanation: 'Nadie quebró tomando ganancias. Sacar tu inversión inicial te deja jugando con "dinero gratis". El resto puede correr sin estrés.'
        }
      ]
    }
  },
  19: {
    id: 19,
    title: 'Investigación On-Chain y DYOR',
    level: 'Intermedio',
    number: '7 de 12',
    duration: '35 min',
    type: 'Casos Prácticos + Herramientas',
    description: 'DYOR (Do Your Own Research). Aprende a leer la blockchain como los profesionales.',
    sections: [
      {
        type: 'intro',
        title: 'El Superpoder de las Blockchains Públicas',
        content: 'A diferencia de los mercados tradicionales donde los grandes jugadores operan en la oscuridad, en crypto **todo queda registrado en la blockchain**. Puedes ver exactamente qué hacen las ballenas, cuánto dinero entra a un protocolo, y dónde está la liquidez. Los que dominan el análisis on-chain tienen ventaja sobre los que solo miran gráficos.',
        highlight: {
          title: 'La Verdad en los Datos',
          text: 'El precio puede mentir (manipulación), Twitter puede mentir (marketing), pero la blockchain no miente. Aprende a leerla.'
        }
      },
      {
        type: 'main',
        title: 'Arsenal de Herramientas On-Chain',
        content: 'Estas son las herramientas que usan los traders profesionales y fondos de inversión:',
        features: [
          { icon: Search, title: 'DefiLlama', text: 'TVL, fees, revenue de cada protocolo. Si un protocolo genera fees, tiene demanda real.' },
          { icon: Activity, title: 'Dune Analytics', text: 'Dashboards con datos on-chain. Busca dashboards de proyectos específicos.' },
          { icon: Users, title: 'Arkham / Nansen', text: 'Rastrea wallets de VCs, fondos y ballenas. Ve qué están comprando los que saben.' },
          { icon: Clock, title: 'TokenUnlocks.app', text: 'Calendario de desbloqueos. Saber cuándo entra más supply al mercado es crítico.' }
        ]
      },
      {
        type: 'main',
        title: 'Métricas On-Chain que Importan',
        content: 'No te ahogues en datos. Enfócate en estas métricas clave:',
        features: [
          { icon: Landmark, title: 'TVL (Total Value Locked)', text: 'Dinero depositado en el protocolo. TVL subiendo = confianza. TVL cayendo = alarma.' },
          { icon: Zap, title: 'Fees / Revenue', text: 'Los fees son demanda real pagada por usuarios. Revenue = Fees que van al protocolo/holders.' },
          { icon: Users, title: 'Active Wallets', text: 'Usuarios únicos interactuando. Más usuarios = más actividad orgánica.' },
          { icon: TrendingDown, title: 'Whale Accumulation', text: 'Cuando las ballenas acumulan en silencio, suele preceder subidas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Señales On-Chain: Bullish vs Bearish',
        leftSide: {
          title: 'Bullish (Comprar)',
          points: [
            'TVL creciendo mientras precio baja (acumulación)',
            'Whales comprando post-caída',
            'Fees creciendo mes a mes',
            'Exchange outflows (sacan de exchanges = HODL)'
          ]
        },
        rightSide: {
          title: 'Bearish (Precaución)',
          points: [
            'TVL cayendo mientras precio sube (distribución)',
            'Insiders moviendo tokens a exchanges',
            'Unlock grande próximo (presión de venta)',
            'Exchange inflows masivos (preparan para vender)'
          ]
        }
      },
      {
        type: 'takeaways',
        title: 'Checklist de Investigación',
        items: [
          '1. DefiLlama: ¿El protocolo genera revenue real?',
          '2. TokenUnlocks: ¿Hay un unlock grande próximo?',
          '3. Arkham/Nansen: ¿Qué hacen las wallets de insiders?',
          '4. Dune: ¿Los usuarios activos crecen o caen?',
          '5. Twitter/Discord: ¿La comunidad está viva o muerta?'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Escenario: Encontraste un token nuevo. En DefiLlama ves que genera $2M en fees mensuales con solo $50M de market cap. ¿Qué significa esto?',
          options: [
            { id: 'a', text: 'Está sobrevalorado, debería valer menos' },
            { id: 'b', text: 'Posiblemente infravalorado — genera ingresos reales con baja valoración' },
            { id: 'c', text: 'Los fees no importan para valorar proyectos' }
          ],
          correctAnswer: 'b',
          explanation: 'Un protocolo que genera $24M anuales en fees con $50M market cap tiene múltiplos muy atractivos. Compara con competidores.'
        },
        {
          id: 'q2',
          question: 'Escenario: Ves en Arkham que 5 wallets de VCs conocidos movieron sus tokens a Binance ayer. El precio aún no cayó. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro el dip antes de que suban' },
            { id: 'b', text: 'Alerta roja: se preparan para vender. Reduzco exposición o pongo stop loss ajustado' },
            { id: 'c', text: 'Es información irrelevante' }
          ],
          correctAnswer: 'b',
          explanation: 'Mover tokens a exchanges es paso previo a vender. Los VCs tienen info privilegiada. Actúa antes de que el precio refleje la venta.'
        },
        {
          id: 'q3',
          question: 'Escenario: TokenUnlocks muestra que en 2 semanas se desbloquea el 15% del supply total. El precio ha subido 40% este mes. ¿Qué opinas?',
          options: [
            { id: 'a', text: 'Perfecto timing para comprar más' },
            { id: 'b', text: 'Pump antes del unlock = distribución. Los insiders están vendiendo a los retails que compran el hype' },
            { id: 'c', text: 'Los unlocks no afectan el precio' }
          ],
          correctAnswer: 'b',
          explanation: 'Patrón clásico: el precio sube antes del unlock para dar liquidez de salida a los insiders. Post-unlock suele corregir fuerte.'
        },
        {
          id: 'q4',
          question: 'Escenario: Un nuevo DEX en Solana tiene $500M TVL pero en Dune ves que solo 200 wallets generan el 95% del volumen. ¿Qué significa?',
          options: [
            { id: 'a', text: 'Usuarios muy comprometidos' },
            { id: 'b', text: 'Wash trading o farming de puntos. No hay usuarios orgánicos reales' },
            { id: 'c', text: 'Es normal en DeFi' }
          ],
          correctAnswer: 'b',
          explanation: 'Concentración extrema de actividad = bots/insiders inflando métricas. Un protocolo sano tiene miles de usuarios activos.'
        },
        {
          id: 'q5',
          question: 'Escenario: El precio de un token cae 30% pero en DefiLlama ves que el TVL sube 20% en la misma semana. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'El proyecto está muriendo' },
            { id: 'b', text: 'Divergencia bullish: las ballenas están acumulando mientras el retail vende en pánico' },
            { id: 'c', text: 'El TVL es irrelevante' }
          ],
          correctAnswer: 'b',
          explanation: 'Cuando el precio cae pero el capital depositado sube, alguien con convicción está comprando. Es señal de acumulación institucional.'
        }
      ]
    }
  },
  20: {
    id: 20,
    title: 'Narrativas y Rotación',
    level: 'Intermedio',
    number: '8 de 12',
    duration: '24 min',
    type: 'Estrategia',
    description: 'El mercado se mueve por atención. Identifica la narrativa caliente (IA, Gaming, Meme) temprano.',
    sections: [{ type: 'intro', title: 'La Economía de la Atención', content: 'En cripto, la tecnología importa, pero la atención importa más a corto plazo. Sigue la narrativa, no te cases con tus bolsas.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'En 2025 la narrativa más caliente es IA + agentes. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Apeo todo lo que diga "AI"' },
            { id: 'b', text: 'Busco proyectos con producto real y bajo market cap' }
          ],
          correctAnswer: 'b',
          explanation: 'Las narrativas calientes son reales, pero debes filtrar vapor de proyectos serios.'
        },
        {
          id: 'q2',
          question: '¿Cuándo es el mejor momento para entrar en una narrativa?',
          options: [
            { id: 'a', text: 'Cuando está en todos los diarios' },
            { id: 'b', text: 'Cuando solo los degenerados de CT hablan de ella' }
          ],
          correctAnswer: 'b',
          explanation: 'Crypto Twitter (CT) ve las narrativas meses antes que los medios mainstream.'
        },
        {
          id: 'q3',
          question: '¿Qué narrativa dominó 2024 y sigue fuerte 2025?',
          options: [
            { id: 'a', text: 'Metaverso' },
            { id: 'b', text: 'Memecoins + atención retail' }
          ],
          correctAnswer: 'b',
          explanation: 'Los memes capturan atención y liquidez retail de forma única en Solana.'
        }
      ]
    }
  },
  21: {
    id: 21,
    title: 'Diversificación Inteligente',
    level: 'Intermedio',
    number: '9 de 12',
    duration: '32 min',
    type: 'Estrategia',
    description: 'Construye un portafolio que sobreviva a cualquier caída. Barbell Strategy.',
    sections: [{ type: 'main', title: 'Estructura Sólida', content: 'Base segura (BTC/SOL) + Apuestas asimétricas (Memes/Low caps) + Liquidez (USDC para comprar caídas).' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes 10 000 USD. ¿Cuál es la asignación más inteligente 2025?',
          options: [
            { id: 'a', text: '100% en una memecoin' },
            { id: 'b', text: '60% BTC/ETH/SOL — 30% narrativas — 10% USDC' }
          ],
          correctAnswer: 'b',
          explanation: 'Base sólida + apuestas asimétricas + liquidez para oportunidades = balance óptimo.'
        },
        {
          id: 'q2',
          question: '¿Cuántas posiciones máximo posiciones deberías tener?',
          options: [
            { id: 'a', text: '50+' },
            { id: 'b', text: '8–12 máximo' }
          ],
          correctAnswer: 'b',
          explanation: 'Más = imposible seguir bien.'
        },
        {
          id: 'q3',
          question: '¿Por qué tener 10–20% en USDC es obligatorio?',
          options: [
            { id: 'a', text: 'Porque es seguro' },
            { id: 'b', text: 'Para comprar la próxima caída del 50% con descuento' }
          ],
          correctAnswer: 'b',
          explanation: 'Cash is a position. Liquidez = optionalidad para aprovechar pánico del mercado.'
        }
      ]
    }
  },
  22: {
    id: 22,
    title: 'El Arte del Stop Loss',
    level: 'Intermedio',
    number: '10 de 12',
    duration: '28 min',
    type: 'Tutorial Práctico',
    description: 'Sobrevivir es lo primero. Aprende a cortar las pérdidas rápido.',
    sections: [{ type: 'intro', title: 'Tu Seguro de Vida', content: 'Un Stop Loss no es una pérdida, es el costo de hacer negocios. Te protege de la ruina total.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la regla de oro del stop loss?',
          options: [
            { id: 'a', text: 'Ponerlo cuando ya perdiste 20%' },
            { id: 'b', text: 'Definirlo ANTES de entrar y nunca moverlo hacia abajo' }
          ],
          correctAnswer: 'b',
          explanation: 'El stop es no-negociable. Moverlo hacia abajo = muerte lenta garantizada.'
        },
        {
          id: 'q2',
          question: 'Compras SOL a 180$ con stop en 162$. ¿Cuánto arriesgas por operación si tu cuenta es 10k USD?',
          options: [
            { id: 'a', text: 'Todo' },
            { id: 'b', text: 'Máximo 100–200 USD (1–2%)' }
          ],
          correctAnswer: 'b',
          explanation: 'Riesgo máximo 1-2% por trade = puedes perder 50 veces seguidas y sobrevivir.'
        },
        {
          id: 'q3',
          question: 'El precio toca tu stop y rebota fuerte. ¿Qué hiciste bien?',
          options: [
            { id: 'a', text: 'Nada, perdí' },
            { id: 'b', text: 'Protegí mi capital — puedo volver a entrar más barato' }
          ],
          correctAnswer: 'b',
          explanation: 'Sobrevivir > tener razón.'
        }
      ]
    }
  },
  23: {
    id: 23,
    title: 'Toma de Ganancias (Take Profit)',
    level: 'Intermedio',
    number: '11 de 12',
    duration: '25 min',
    type: 'Tutorial Práctico',
    description: 'Las ganancias no son reales hasta que vendes. Aprende a vender escalonadamente.',
    sections: [{ type: 'intro', title: 'Vende en la Euforia', content: 'Cuando estés tomando capturas de pantalla de tus ganancias para presumir, es momento de vender.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu posición está +300% en 3 días. ¿Qué haces?',
          options: [
            { id: 'a', text: 'HODL hasta la luna' },
            { id: 'b', text: 'Vendo 50–70% y dejo el resto con stop en break-even' }
          ],
          correctAnswer: 'b',
          explanation: 'Tomas ganancias reales y dejas correr el resto sin riesgo. Best of both worlds.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la estrategia de salida más usada por traders rentables?',
          options: [
            { id: 'a', text: 'Vender todo cuando llegue a target' },
            { id: 'b', text: 'Escalada: 30% en +50%, 30% en +100%, 20% en +200%, 20% moonbag' }
          ],
          correctAnswer: 'b',
          explanation: 'Scaling out asegura ganancias en cada nivel mientras mantienes upside ilimitado.'
        },
        {
          id: 'q3',
          question: '¿Por qué nunca debes mover tu take profit hacia arriba después de entrar?',
          options: [
            { id: 'a', text: 'Porque no pasa nada' },
            { id: 'b', text: 'Porque te vuelve emocional y reduces tu ratio riesgo/beneficio' }
          ],
          correctAnswer: 'b',
          explanation: 'Plan definido pre-trade = decisiones objetivas. Cambiarlo mid-trade = emociones.'
        }
      ]
    }
  },
  24: {
    id: 24,
    title: 'Mentalidad de Trader',
    level: 'Intermedio',
    number: '12 de 12',
    duration: '20 min',
    type: 'Psicología',
    description: 'Tú eres tu peor enemigo. Controla el FOMO, la avaricia y el miedo.',
    sections: [{ type: 'intro', title: 'Psicología > Técnica', content: 'Puedes tener la mejor estrategia, pero si no tienes disciplina, perderás dinero.' }],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Pierdes 5 trades seguidos respetando tu plan. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Aumento el tamaño' },
            { id: 'b', text: 'Sigo exactamente igual — la racha negativa es normal' }
          ],
          correctAnswer: 'b',
          explanation: 'Incluso con 60% win rate, 5 pérdidas seguidas pasa. No cambies el sistema por varianza.'
        },
        {
          id: 'q2',
          question: 'La mejor forma de controlar el FOMO es:',
          options: [
            { id: 'a', text: 'No mirar precios' },
            { id: 'b', text: 'Tener un plan escrito y seguirlo aunque duela' }
          ],
          correctAnswer: 'b',
          explanation: 'Un plan claro te ancla cuando las emociones gritan "¡compra ahora!"'
        },
        {
          id: 'q3',
          question: '¿Cuál es la frase que más dinero ha perdido en cripto?',
          options: [
            { id: 'a', text: 'Buy the dip' },
            { id: 'b', text: 'This time is different' }
          ],
          correctAnswer: 'b',
          explanation: 'Los ciclos se repiten. La codicia hace que la gente crea que "esta vez sí" en el pico.'
        },
        {
          id: 'q4',
          question: '¿Cuántos trades necesitas para evaluar si tu estrategia funciona?',
          options: [
            { id: 'a', text: '10' },
            { id: 'b', text: 'Mínimo 100–200 trades' }
          ],
          correctAnswer: 'b',
          explanation: 'Menos = pura suerte o mala suerte.'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Jupiter: El Rey de los DEXs',
    level: 'Avanzado',
    number: '1 de 10',
    duration: '35 min',
    type: 'Tutorial Práctico',
    description: 'Olvida los exchanges centralizados. Jupiter (JUP) en Solana ofrece mejor precio, DCA y órdenes límite.',
    sections: [
      {
        type: 'intro',
        title: 'El Agregador Definitivo',
        content: 'Jupiter busca en todos los mercados de liquidez de Solana para darte el mejor precio posible. Es más eficiente que Binance para swaps on-chain.',
        highlight: { title: 'Herramientas Pro', text: 'Jupiter permite hacer **DCA automático** (comprar poco a poco) y **Limit Orders** (comprar a precio específico) descentralizadamente.' }
      },
      {
        type: 'main',
        title: 'Cómo usarlo',
        content: 'Conecta tu Phantom wallet a jup.ag. Selecciona tus tokens. Revisa la ruta. Swap. Listo en segundos.',
        features: [
          { icon: Zap, title: 'Mejor Precio', text: 'Divide tu orden entre múltiples pools (Raydium, Orca, Phoenix).' },
          { icon: Clock, title: 'DCA', text: 'Programa compras automáticas sin dar tus fondos a nadie.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Quieres cambiar 500 USDC → SOL con el menor slippage posible. ¿Qué opción eliges en Jupiter?',
          options: [
            { id: 'a', text: 'Fast (default)' },
            { id: 'b', text: 'Jito Tips + Exact Out + Limit Order' },
            { id: 'c', text: 'Cualquier ruta, da igual' }
          ],
          correctAnswer: 'b',
          explanation: 'En 2025 el modo "Exact Out" + Jito Tips te da el mejor precio real del mercado (frente a bots).'
        },
        {
          id: 'q2',
          question: 'Estás haciendo DCA diario de 50 $ en SOL. ¿Cuál es la forma más eficiente en Jupiter?',
          options: [
            { id: 'a', text: 'Hacer el swap manual todos los días' },
            { id: 'b', text: 'Crear un DCA automático en Jupiter (0 comisiones extra)' },
            { id: 'c', text: 'Usar un bot externo de Telegram' }
          ],
          correctAnswer: 'b',
          explanation: 'Jupiter tiene DCA nativo gratuito y sin riesgo de custodia.'
        }
      ]
    }
  },
  26: {
    id: 26,
    title: 'Liquidez y Yield Farming',
    level: 'Avanzado',
    number: '2 de 10',
    duration: '42 min',
    type: 'Estrategias',
    description: 'Pon tus criptos a trabajar. Provee liquidez en Raydium o Meteora y gana comisiones.',
    sections: [
      {
        type: 'intro',
        title: 'Siendo el Banco',
        content: 'En DeFi, tú eres quien facilita el cambio de moneda. A cambio, recibes comisiones. Esto se llama proveer liquidez (LP).',
        highlight: { title: 'Meteora DLMM', text: 'Herramientas avanzadas como Meteora permiten concentrar tu liquidez donde está la acción, ganando muchos más fees que el estándar.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Proporcionas 10 000 $ en el pool SOL-USDC. SOL sube 100 %. ¿Cuánto tienes al final (aprox) si no hay fees?',
          options: [
            { id: 'a', text: '20 000 $' },
            { id: 'b', text: '13 400 $ (pérdida impermanente)' },
            { id: 'c', text: '10 000 $' }
          ],
          correctAnswer: 'b',
          explanation: 'Fórmula aproximada: √2 × valor inicial ≈ 1.41 → pierdes ≈27 % vs HODL cuando un activo sube 100 %.'
        },
        {
          id: 'q2',
          question: '¿En qué caso sí vale la pena proveer liquidez aunque haya impermanent loss?',
          options: [
            { id: 'a', text: 'Nunca' },
            { id: 'b', text: 'Cuando los fees generados superan la IL (pools estables o pools de memecoins volátiles)' },
            { id: 'c', text: 'Solo en bear markets' }
          ],
          correctAnswer: 'b',
          explanation: 'Ejemplo real: pool PENGU-USDC en Raydium genera 300–1000 % APY en fees durante hype.'
        },
        {
          id: 'q3',
          question: 'Estás en un pool concentrado (Meteora DLMM). El precio sale de tu rango. ¿Qué pasa?',
          options: [
            { id: 'a', text: 'Pierdes todo' },
            { id: 'b', text: 'Tu posición se convierte 100 % al stable side y dejas de ganar fees' },
            { id: 'c', text: 'El protocolo te liquida' }
          ],
          correctAnswer: 'b',
          explanation: 'Eso es exactamente lo que hace DLMM: fuera de rango = 100 % USDC y cero fees.'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: 'Lending & Borrowing',
    level: 'Avanzado',
    number: '3 de 10',
    duration: '38 min',
    type: 'Tutorial Práctico',
    description: 'Pide prestado contra tus activos sin venderlos usando Kamino o MarginFi.',
    sections: [
      {
        type: 'intro',
        title: 'Liquidez sin Venta',
        content: '¿Necesitas efectivo pero no quieres vender tus SOL porque crees que subirán? Deposita SOL, pide prestado USDC. Mantienes la exposición a la subida de SOL.',
        highlight: { title: 'Riesgo de Liquidación', text: 'Si el precio de SOL cae mucho, el protocolo venderá tus activos para pagar la deuda. Mantén tu salud de préstamo alta.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Depositas 10 SOL como colateral en Kamino y pides prestado 500 USDC. SOL cae 40 %. ¿Qué pasa con más probabilidad?',
          options: [
            { id: 'a', text: 'Nada, todo bien' },
            { id: 'b', text: 'Te liquidan y pierdes parte o todo tu SOL' },
            { id: 'c', text: 'Kamino te regala más SOL' }
          ],
          correctAnswer: 'b',
          explanation: 'Health rate < 1 = liquidación automática. Nunca pidas prestado más del 50–60 % LTV en activos volátiles.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la estrategia más usada por whales en Solana 2025 para hacer yield sin vender?',
          options: [
            { id: 'a', text: 'Borrow USDC → Swap a SOL → Depositar más SOL → Loop (hasta 3–4x)' },
            { id: 'b', text: 'Solo HODL' },
            { id: 'c', text: 'Stakear en Marinade' }
          ],
          correctAnswer: 'a',
          explanation: 'Se llama "leverage looping" o "points farming con apalancamiento". Jito + Kamino/Marginfi = 30–70 % APY real + puntos.'
        }
      ]
    }
  },
  28: {
    id: 28,
    title: 'Riesgos de DeFi (Impermanent Loss)',
    level: 'Avanzado',
    number: '4 de 10',
    duration: '32 min',
    type: 'Seguridad',
    description: 'El riesgo matemático de proveer liquidez. Cuándo es mejor solo hacer HODL.',
    sections: [
      {
        type: 'intro',
        title: 'La Pérdida Impermanente',
        content: 'Si provees liquidez a un par (ej: SOL-USDC) y SOL sube mucho, el pool venderá tus SOL por USDC. Terminarás con menos SOL que si solo los hubieras guardado en la wallet.',
        highlight: { title: 'Cálculo', text: 'Solo provee liquidez si los fees que ganas superan esta pérdida potencial.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿En qué tipo de pool la Impermanent Loss es casi cero aunque un token suba 10x?',
          options: [
            { id: 'a', text: 'Pool SOL-USDC' },
            { id: 'b', text: 'Pool USDC-USDT (stable)' },
            { id: 'c', text: 'Pool BONK-SOL' }
          ],
          correctAnswer: 'b',
          explanation: 'En pools de stablecoins la IL es prácticamente nula porque el precio relativo no cambia.'
        },
        {
          id: 'q2',
          question: 'Estás en un pool concentrado (DLMM) y el precio se va a la mierda. ¿Qué estrategia minimiza pérdidas?',
          options: [
            { id: 'a', text: 'No hacer nada' },
            { id: 'b', text: 'Retirar liquidez y volver a poner en nuevo rango' },
            { id: 'c', text: 'Añadir más liquidez' }
          ],
          correctAnswer: 'b',
          explanation: 'Rebalancing manual o automático es obligatorio en pools concentrados.'
        }
      ]
    }
  },
  29: {
    id: 29,
    title: 'NFTs en Solana',
    level: 'Avanzado',
    number: '5 de 10',
    duration: '30 min',
    type: 'Mercado',
    description: 'Comunidades, Utilidad y Arte. Tensor y Magic Eden.',
    sections: [
      {
        type: 'intro',
        title: 'Cultura y Utilidad',
        content: 'En Solana, los NFTs son más que JPEGs. Son acceso a comunidades (Mad Lads), herramientas (Tensorians) o juegos. El costo bajo de la red permite innovaciones que en Ethereum son imposibles.',
        features: [
          { icon: Gem, title: 'cNFTs', text: 'NFTs comprimidos. Solana puede mintear 1 millón de NFTs por unos pocos dólares.' },
          { icon: Users, title: 'Comunidades', text: 'Los proyectos top como Mad Lads actúan como "sub-DAOs" impulsando el ecosistema.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué permite la tecnología de compresión de Solana (cNFTs)?',
          options: [
            { id: 'a', text: 'Imágenes borrosas' },
            { id: 'b', text: 'Crear millones de NFTs a costo casi cero' },
            { id: 'c', text: 'Nada nuevo' }
          ],
          correctAnswer: 'b',
          explanation: 'Esto habilita casos de uso masivos como tickets, recibos y gaming que antes eran muy caros.'
        },
        {
          id: 'q2',
          question: 'Quieres comprar un NFT en Solana. ¿Cuál es el marketplace más usado en 2025?',
          options: [
            { id: 'a', text: 'OpenSea (Ethereum)' },
            { id: 'b', text: 'Tensor o Magic Eden' },
            { id: 'c', text: 'Amazon' }
          ],
          correctAnswer: 'b',
          explanation: 'Tensor es el exchange profesional de NFTs en Solana. Magic Eden es el más mainstream.'
        },
        {
          id: 'q3',
          question: '¿Por qué los NFTs de Solana son más baratos de mintear que en Ethereum?',
          options: [
            { id: 'a', text: 'Porque valen menos' },
            { id: 'b', text: 'Porque los fees de Solana son <$0.001 vs $30-$100 en Ethereum' },
            { id: 'c', text: 'Son igual de caros' }
          ],
          correctAnswer: 'b',
          explanation: 'Esto permite experimentación masiva en gaming, arte generativo y utilidad on-chain.'
        }
      ]
    }
  },
  30: {
    id: 30,
    title: 'Airdrops y Farming',
    level: 'Avanzado',
    number: '6 de 10',
    duration: '35 min',
    type: 'Estrategia',
    description: 'Cómo ser recompensado por ser un usuario temprano. El caso de Jito y Jupiter.',
    sections: [
      {
        type: 'intro',
        title: 'Dinero Gratis (Por Trabajo)',
        content: 'Los protocolos necesitan usuarios. A menudo, recompensan a los primeros usuarios con tokens de gobernanza. Solana ha tenido los airdrops más grandes de la historia (JTO, JUP, PYTH).',
        highlight: { title: 'Cómo Calificar', text: 'Usa los protocolos genuinamente. Haz volumen. Sé constante. No seas un bot (sybil).' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la mejor forma de calificar para airdrops?',
          options: [
            { id: 'a', text: 'Crear 1000 wallets con $1' },
            { id: 'b', text: 'Ser un usuario real, constante y con volumen orgánico' },
            { id: 'c', text: 'Pedir al dev por DM' }
          ],
          correctAnswer: 'b',
          explanation: 'Los protocolos filtran a los bots. El uso orgánico y real es lo que más se premia.'
        },
        {
          id: 'q2',
          question: 'Usaste Jupiter y Kamino desde hace 1 año. Ambos anuncian airdrop. ¿Qué esperas recibir?',
          options: [
            { id: 'a', text: 'Nada, fue suerte' },
            { id: 'b', text: 'Tokens (JUP, KMNO) proporcionales a tu uso histórico del protocolo' },
            { id: 'c', text: 'Un NFT' }
          ],
          correctAnswer: 'b',
          explanation: 'Los airdrops recompensan a los early adopters y usuarios fieles con tokens de gobernanza.'
        },
        {
          id: 'q3',
          question: '¿Qué es "sybil farming"?',
          options: [
            { id: 'a', text: 'Agricultura tradicional' },
            { id: 'b', text: 'Crear muchas wallets falsas para manipular airdrops (está penalizado)' },
            { id: 'c', text: 'Un tipo de staking' }
          ],
          correctAnswer: 'b',
          explanation: 'Los protocolos usan análisis on-chain para detectar y excluir a los sybils. No vale la pena.'
        }
      ]
    }
  },
  31: {
    id: 31,
    title: 'DePIN: Infraestructura Física',
    level: 'Avanzado',
    number: '7 de 10',
    duration: '25 min',
    type: 'Tendencias',
    description: 'Decentralized Physical Infrastructure Networks. Helium, Hivemapper y Render.',
    sections: [
      {
        type: 'intro',
        title: 'Crypto en el Mundo Real',
        content: 'Solana es el hogar de DePIN. Proyectos que usan tokens para incentivar a la gente a construir infraestructura física: mapas (Hivemapper), wifi (Helium), renderizado GPU (Render).',
        highlight: { title: 'Por qué Solana', text: 'Solo Solana tiene la velocidad para procesar los datos de millones de dispositivos físicos en tiempo real.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es DePIN?',
          options: [
            { id: 'a', text: 'Un memecoin' },
            { id: 'b', text: 'Redes de infraestructura física descentralizada' },
            { id: 'c', text: 'Un exchange' }
          ],
          correctAnswer: 'b',
          explanation: 'Es el uso de crypto para coordinar construcción de infraestructura real (mapas, telecomunicaciones, etc).'
        },
        {
          id: 'q2',
          question: 'Instalas una cámara dashcam de Hivemapper en tu auto. ¿Qué obtienes?',
          options: [
            { id: 'a', text: 'Nada' },
            { id: 'b', text: 'Tokens HONEY por cada kilómetro que mapeas (contribuyes a Google Maps descentralizado)' },
            { id: 'c', text: 'Un NFT' }
          ],
          correctAnswer: 'b',
          explanation: 'DePIN recompensa a la gente por construir infraestructura con tokens. Hivemapper mapea el mundo real.'
        },
        {
          id: 'q3',
          question: '¿Por qué Solana es la blockchain favorita para DePIN?',
          options: [
            { id: 'a', text: 'Porque es amarilla' },
            { id: 'b', text: 'Porque puede procesar millones de micro-transacciones de sensores IoT a costo casi cero' },
            { id: 'c', text: 'Porque es la más cara' }
          ],
          correctAnswer: 'b',
          explanation: 'Proyectos como Helium migraron a Solana porque Ethereum L1 no puede manejar ese volumen.'
        }
      ]
    }
  },
  32: {
    id: 32,
    title: 'Monolítico vs Modular',
    level: 'Avanzado',
    number: '8 de 10',
    duration: '30 min',
    type: 'Técnico',
    description: 'La tesis de escalabilidad. Por qué Solana apuesta por una sola capa gigante.',
    sections: [
      {
        type: 'intro',
        title: 'La Visión Integrada',
        content: 'Ethereum apuesta por fragmentarse en capas (L2s: Arbitrum, Optimism, Base), lo que rompe la liquidez y complica la UX. Solana apuesta por ser **Monolítica**: una sola cadena gigante, rápida y sincronizada.',
        features: [
          { icon: Layers, title: 'Componibilidad', text: 'En Solana, todas las apps pueden hablar entre sí instantáneamente en la misma transacción.' },
          { icon: Server, title: 'Ley de Moore', text: 'Solana se vuelve más rápida a medida que el hardware de las computadoras mejora. No necesita software complejo.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la ventaja de una chain Monolítica como Solana?',
          options: [
            { id: 'a', text: 'Es más lenta' },
            { id: 'b', text: 'Toda la liquidez y apps están en el mismo lugar (Componibilidad sincrónica)' },
            { id: 'c', text: 'Es más cara' }
          ],
          correctAnswer: 'b',
          explanation: 'Elimina la necesidad de bridges complejos y fragmentación que sufren los ecosistemas modulares.'
        },
        {
          id: 'q2',
          question: 'Ethereum usa L2s (Arbitrum, Base, Optimism). ¿Qué problema crea esto?',
          options: [
            { id: 'a', text: 'Fragmenta la liquidez y complica mover dinero entre capas (bridges)' },
            { id: 'b', text: 'Ninguno, es perfecto' },
            { id: 'c', text: 'Es más barato' }
          ],
          correctAnswer: 'a',
          explanation: 'Cada L2 es una isla con su propia liquidez. Necesitas bridges (riesgosos y lentos) para moverte entre ellas.'
        },
        {
          id: 'q3',
          question: 'Quieres hacer un swap y luego depositar en un lending protocol. En Solana:',
          options: [
            { id: 'a', text: 'Necesitas cambiar de red (bridge)' },
            { id: 'b', text: 'Todo ocurre en la misma transacción atómica en L1' },
            { id: 'c', text: 'Necesitas esperar 1 hora' }
          ],
          correctAnswer: 'b',
          explanation: 'Componibilidad sincrónica = todas las apps hablan entre sí instantáneamente en una sola transacción.'
        }
      ]
    }
  },
  33: {
    id: 33,
    title: 'Firedancer & El Futuro',
    level: 'Avanzado',
    number: '9 de 10',
    duration: '20 min',
    type: 'Futuro',
    description: 'El nuevo cliente validador que llevará a Solana a 1 millón de TPS.',
    sections: [
      {
        type: 'intro',
        title: 'El Segundo Cliente',
        content: 'Firedancer es un nuevo software para validadores de Solana construido por Jump Crypto (expertos en trading de alta frecuencia). Promete aumentar la capacidad teórica de Solana masivamente y eliminar caídas de red.',
        highlight: { title: 'Resiliencia', text: 'Tener un segundo cliente de software hace que la red sea mucho más segura contra bugs.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es Firedancer?',
          options: [
            { id: 'a', text: 'Un nuevo token' },
            { id: 'b', text: 'Un nuevo cliente de software para hacer Solana más rápida y segura' },
            { id: 'c', text: 'Un juego' }
          ],
          correctAnswer: 'b',
          explanation: 'Es una reescritura completa del código base de Solana optimizada para rendimiento extremo.'
        },
        {
          id: 'q2',
          question: '¿Quién está construyendo Firedancer?',
          options: [
            { id: 'a', text: 'Jump Crypto (expertos en trading de alta frecuencia)' },
            { id: 'b', text: 'Ethereum Foundation' },
            { id: 'c', text: 'Un developer anónimo' }
          ],
          correctAnswer: 'a',
          explanation: 'Jump Crypto construye infraestructura de trading que procesa millones de órdenes por segundo. Están aplicando esa expertise a Solana.'
        },
        {
          id: 'q3',
          question: '¿Por qué es importante tener un segundo cliente (Firedancer + Labs client)?',
          options: [
            { id: 'a', text: 'No importa' },
            { id: 'b', text: 'Diversidad de clientes = menos riesgo. Si un cliente tiene un bug, la red sigue funcionando' },
            { id: 'c', text: 'Para competir' }
          ],
          correctAnswer: 'b',
          explanation: 'Ethereum aprendió esto. Un bug en el cliente mayoritario puede tumbar toda la red. Dos clientes = resiliencia.'
        }
      ]
    }
  },
  34: {
    id: 34,
    title: 'Seguridad Operacional Avanzada',
    level: 'Avanzado',
    number: '10 de 10',
    duration: '25 min',
    type: 'Seguridad',
    description: 'Cómo duermen tranquilos los millonarios cripto. Burner wallets y revocación.',
    sections: [
      {
        type: 'intro',
        title: 'Higiene Digital',
        content: 'Nunca conectes tu billetera principal (donde ahorras) a sitios nuevos. Usa "Burner Wallets" (billeteras temporales con poco dinero) para interactuar con dApps riesgosas.',
        features: [
          { icon: Shield, title: 'Cold Storage', text: 'Tus ahorros grandes deben estar en un Ledger/Trezor, desconectados.' },
          { icon: RefreshCw, title: 'Revoke.cash', text: 'Herramienta para quitar permisos a contratos antiguos que ya no usas.' }
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Para qué usar una "Burner Wallet"?',
          options: [
            { id: 'a', text: 'Para quemar dinero' },
            { id: 'b', text: 'Para interactuar con sitios de riesgo sin exponer tus ahorros principales' },
            { id: 'c', text: 'Es ilegal' }
          ],
          correctAnswer: 'b',
          explanation: 'Aísla el riesgo. Si la burner es hackeada, solo pierdes lo que tenía esa wallet, no tu patrimonio.'
        },
        {
          id: 'q2',
          question: 'Tienes 50 000 $ en cripto. ¿Cuál es la mejor estrategia de seguridad?',
          options: [
            { id: 'a', text: 'Todo en una sola hot wallet (Phantom en tu celular)' },
            { id: 'b', text: 'La mayor parte en Ledger (cold wallet) + algo en Phantom para operar + burner wallet para dApps nuevas' },
            { id: 'c', text: 'Todo en Binance' }
          ],
          correctAnswer: 'b',
          explanation: 'Separación de fondos: Cold (ahorro), Hot (operativa), Burner (experimentación). Nunca pongas todos los huevos en una canasta.'
        },
        {
          id: 'q3',
          question: 'Conectaste tu wallet a 15 dApps el año pasado. ¿Qué debes hacer?',
          options: [
            { id: 'a', text: 'Nada, es automático' },
            { id: 'b', text: 'Usar revoke.cash (Ethereum) o similar para revocar permisos antiguos' },
            { id: 'c', text: 'Crear una wallet nueva' }
          ],
          correctAnswer: 'b',
          explanation: 'Algunos contratos maliciosos pueden tener permisos de "gasto infinito". Revoca lo que no uses activamente.'
        }
      ]
    }
  },
  39: {
    id: 39,
    title: 'Gasta tus Cripto',
    level: 'Principiante',
    number: '15 de 20',
    duration: '20 min',
    type: 'Herramientas',
    description: 'No necesitas vender a tu banco para gastar. Usa tarjetas cripto directamente.',
    referrals: [
      {
        title: 'Kast',
        description: 'Tarjeta virtual y física para gastar tus stablecoins (USDC/USDT) en cualquier lugar.',
        link: 'https://go.kast.xyz/VqVO/NGUCNBNA',
        buttonText: 'Solicitar Tarjeta Kast'
      },
      {
        title: 'Avici',
        description: 'Tarjeta cripto premium. Obtén 10% de descuento en la compra de tu tarjeta.',
        link: 'https://avici.app',
        buttonText: 'Ir a Avici',
        code: '9EULQP'
      }
    ],
    sections: [
      {
        type: 'intro',
        title: 'Viviendo en Cripto',
        content: 'La meta final es no tener que volver al sistema bancario tradicional. Hoy en día existen tarjetas Visa/Mastercard que se recargan con Cripto.',
        highlight: { title: 'Ventaja', text: 'Evitas la burocracia de los bancos y usas tu dinero libremente.' }
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué ventaja tiene una tarjeta cripto?',
          options: [
            { id: 'a', text: 'Es de metal' },
            { id: 'b', text: 'Permite gastar tus activos sin pasar por un banco tradicional' },
            { id: 'c', text: 'Es gratis' }
          ],
          correctAnswer: 'b',
          explanation: 'Conectan el mundo DeFi con el sistema de pagos tradicional Visa/Mastercard.'
        },
        {
          id: 'q2',
          question: 'Tienes 1000 USDC en tu Phantom. ¿Puedes comprar en Amazon directamente?',
          options: [
            { id: 'a', text: 'Sí, Amazon acepta USDC' },
            { id: 'b', text: 'No, necesitas transferir USDC a una tarjeta cripto (Kast, Avici) que convierte a fiat al momento del pago' },
            { id: 'c', text: 'Solo si compras NFTs' }
          ],
          correctAnswer: 'b',
          explanation: 'Las tarjetas cripto actúan de puente: tú pagas en cripto, el comercio recibe fiat.'
        },
        {
          id: 'q3',
          question: '¿Por qué muchos prefieren gastar USDC en vez de SOL?',
          options: [
            { id: 'a', text: 'USDC es más rápido' },
            { id: 'b', text: 'USDC es estable (= $1 siempre). Gastar SOL es gastar un activo que puede subir de precio' },
            { id: 'c', text: 'SOL no se puede gastar' }
          ],
          correctAnswer: 'b',
          explanation: 'Gastar SOL cuando vale $100 y verlo subir a $200 duele. Los stablecoins son mejores para gastos diarios.'
        }
      ]
    }
  },
  40: {
    id: 40,
    title: 'Staking SOL: Gana por Asegurar la Red',
    level: 'Avanzado',
    number: '11 de 11',
    duration: '30 min',
    type: 'Tutorial + Concepto',
    description: 'Entiende validadores, epochs y cómo ganar ~7% anual delegando tu SOL.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Te Pagan por Hacer Staking?',
        content: 'Bitcoin tiene mineros que gastan electricidad para asegurar la red. Solana tiene **validadores** que ponen SOL como garantía. Si hacen trampa, pierden su dinero. **Proof of Stake** reemplaza energía por capital en riesgo. Cuando haces staking, estás diciendo: "Confío en este validador para que sea honesto". A cambio, recibes parte de las recompensas que la red paga por procesar transacciones.',
        highlight: {
          title: 'La Magia del Staking',
          text: 'Mientras tu banco te da 0.1% anual, tu SOL en staking genera ~7% APY. Y lo mejor: nunca pierdes la custodia de tus tokens.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Epochs y Delegación',
        content: 'Solana divide el tiempo en **epochs** (~2-3 días). Al final de cada epoch, se distribuyen las recompensas. **Delegar** significa asignar tu SOL a un validador sin enviárselo. Tu SOL nunca sale de tu wallet, solo le das "peso de voto" al validador.',
        features: [
          { icon: RefreshCw, title: 'Epochs', text: 'Periodos de ~2 días donde se procesan transacciones y se calculan recompensas.' },
          { icon: Shield, title: 'Slashing (Corte)', text: 'Si un validador hace trampa, pierde parte de su stake. Solana aún no tiene slashing activo, pero está en el roadmap.' },
          { icon: Award, title: 'Comisión del Validador', text: 'Los validadores cobran 0-10% de las recompensas. Busca validadores con <5% comisión.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Elegir un Buen Validador',
        content: 'No todos los validadores son iguales. Un mal validador puede tener alto downtime (no procesa transacciones) o cobrar comisiones abusivas. Usa **StakeWiz** o **Solana Beach** para analizar validadores.',
        features: [
          { icon: Zap, title: 'Uptime', text: 'Busca >98% uptime. Si el validador está offline, no ganas recompensas.' },
          { icon: Users, title: 'Stake Concentración', text: 'Delegar a validadores pequeños ayuda a descentralizar la red. Evita los top 10 gigantes.' },
          { icon: PiggyBank, title: 'APY Estimado', text: 'Varía entre 6-8% dependiendo del validador y las condiciones de la red.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Staking Nativo vs Liquid Staking',
        leftSide: {
          title: 'Staking Nativo (Phantom/Solflare)',
          points: [
            'Delegas directamente a un validador',
            'Tu SOL está "bloqueado" hasta que lo retires',
            'Retiro toma ~2-3 días (período de cooldown)',
            'Control total, sin intermediarios'
          ]
        },
        rightSide: {
          title: 'Liquid Staking (Marinade, Jito)',
          points: [
            'Recibes un token (mSOL, jitoSOL) que representa tu stake',
            'Puedes usar ese token en DeFi mientras ganas staking rewards',
            'Liquidez instantánea (puedes vender el token)',
            'Riesgo adicional del protocolo de liquid staking'
          ]
        }
      },
      {
        type: 'main',
        title: 'Tutorial: Hacer Staking en Phantom',
        content: '1. Abre Phantom → Tu saldo de SOL → "Start Earning SOL"\n2. Explora la lista de validadores (revisa comisión y uptime)\n3. Selecciona un validador y elige la cantidad de SOL\n4. Confirma la transacción (~0.000005 SOL de fee)\n5. ¡Listo! Tus recompensas empiezan a acumularse cada epoch.',
        highlight: {
          title: 'Tip Importante',
          text: 'Siempre deja 0.1-0.5 SOL sin stakear para pagar fees de transacciones futuras.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Staking = poner tu SOL a trabajar asegurando la red',
          'Tu SOL nunca sale de tu wallet al delegar',
          'Busca validadores con <5% comisión y >98% uptime',
          'Liquid staking (mSOL, jitoSOL) te da flexibilidad pero añade riesgo',
          'Siempre deja algo de SOL líquido para fees'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué Solana te paga por hacer staking?',
          options: [
            { id: 'a', text: 'Es un regalo de la Solana Foundation' },
            { id: 'b', text: 'Porque estás ayudando a asegurar la red con tu capital como garantía' },
            { id: 'c', text: 'Porque minaste bloques' }
          ],
          correctAnswer: 'b',
          explanation: 'En Proof of Stake, los validadores (y sus delegadores) ponen capital en riesgo. Las recompensas compensan ese riesgo y el servicio de procesar transacciones.'
        },
        {
          id: 'q2',
          question: '¿Qué pasa con tu SOL cuando lo delegas a un validador?',
          options: [
            { id: 'a', text: 'Se lo envías al validador y confías en que te lo devuelva' },
            { id: 'b', text: 'Nunca sale de tu wallet. Solo le das poder de voto al validador' },
            { id: 'c', text: 'Lo quema la red' }
          ],
          correctAnswer: 'b',
          explanation: 'Delegación ≠ envío. Tu SOL sigue siendo tuyo, solo está "comprometido" con ese validador. Puedes retirarlo cuando quieras (después del cooldown).'
        },
        {
          id: 'q3',
          question: 'Un validador tiene 2% comisión y 99.5% uptime. Otro tiene 8% comisión y 95% uptime. ¿Cuál eliges?',
          options: [
            { id: 'a', text: 'El de 8% comisión porque gana más dinero' },
            { id: 'b', text: 'El de 2% comisión y 99.5% uptime porque maximiza mis recompensas' },
            { id: 'c', text: 'Da igual, todos pagan lo mismo' }
          ],
          correctAnswer: 'b',
          explanation: 'Menor comisión = más recompensas para ti. Mayor uptime = el validador está activo más tiempo procesando transacciones (genera más rewards).'
        },
        {
          id: 'q4',
          question: 'Tienes 100 SOL y quieres usar DeFi mientras haces staking. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Staking nativo en Phantom' },
            { id: 'b', text: 'Liquid staking en Marinade (recibes mSOL que puedes usar en DeFi)' },
            { id: 'c', text: 'No se puede hacer las dos cosas' }
          ],
          correctAnswer: 'b',
          explanation: 'Liquid staking te da un token derivado (mSOL, jitoSOL) que representa tu stake. Puedes depositar ese token en protocolos DeFi mientras sigues ganando staking rewards.'
        },
        {
          id: 'q5',
          question: '¿Qué es un "epoch" en Solana?',
          options: [
            { id: 'a', text: 'Un periodo de ~2-3 días donde se procesan transacciones y se distribuyen recompensas de staking' },
            { id: 'b', text: 'El nombre de un token' },
            { id: 'c', text: 'Una actualización de software' }
          ],
          correctAnswer: 'a',
          explanation: 'Solana divide el tiempo en epochs. Al final de cada epoch, los validadores reciben sus recompensas proporcionales al stake delegado.'
        }
      ]
    }
  }
};