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
  TrendingUp,
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
    duration: '18 minutos',
    type: 'Video + Historia',
    description: 'Para entender por qué Bitcoin existe, primero debemos entender qué es el dinero, por qué lo inventamos, y cómo los gobiernos lo corrompieron. Esta es la historia que no te enseñaron en la escuela.',
    sections: [
      {
        type: 'intro',
        title: 'El Invento Más Importante de la Humanidad',
        content: 'Imagina que eres un pescador en el año 3000 a.C. Tienes pescado fresco, pero necesitas sandalias. Vas donde el zapatero, pero él no quiere pescado—quiere trigo. Entonces buscas al agricultor, pero él quiere leña. Pasas el día entero buscando a alguien que quiera exactamente lo que tienes y tenga exactamente lo que necesitas. Este problema se llama la **"doble coincidencia de deseos"**, y frenó el progreso humano durante milenios. El dinero lo resolvió. No es solo "algo para comprar cosas". El dinero es una **tecnología para almacenar y transferir valor** a través del tiempo y el espacio. Es tan revolucionario como la rueda, la escritura o el internet.',
        highlight: {
          title: 'Reflexión Fundamental',
          text: 'El dinero es tiempo humano cristalizado. Cada billete representa horas de trabajo de alguien. Cuando un gobierno devalúa el dinero, literalmente te está robando horas de vida que ya trabajaste y que nunca recuperarás.'
        }
      },
      {
        type: 'main',
        title: 'Las 6 Propiedades del Dinero Perfecto',
        content: 'Durante 5,000 años de prueba y error, la humanidad descubrió que el buen dinero debe cumplir 6 propiedades fundamentales. Cualquier cosa que usemos como dinero será tan buena como su capacidad de cumplir estas características:',
        image: '/images/lessons/lesson-1/lesson1-1.webp',
        imageAlt: 'Las 6 propiedades del dinero perfecto: escasez, divisibilidad, durabilidad, portabilidad, fungibilidad y verificabilidad'
      },
      {
        type: 'main',
        title: 'El Experimento de 5,000 Años: Del Trueque al Oro',
        content: 'La humanidad probó de todo antes de encontrar el oro:',
        image: '/images/lessons/lesson-1/lesson1-2.webp',
        imageAlt: 'El experimento de 5,000 años: del trueque al oro - conchas, sal, ganado y oro'
      },
      {
        type: 'main',
        title: 'El Papel Moneda: Una Promesa de Oro',
        content: 'Cargar oro era peligroso y poco práctico. En China (siglo VII) y luego en Europa, surgió una solución elegante: los **certificados de depósito**. Depositabas tu oro en un banco seguro y recibías un papel que decía "Este papel es canjeable por X gramos de oro". El papel era más fácil de cargar, pero su valor dependía de una PROMESA: que el banco realmente tenía el oro. Este sistema funcionó durante siglos... hasta que los bancos descubrieron que podían imprimir más papeles de los que tenían oro para respaldar.',
        features: [
          { icon: Landmark, title: 'El Patrón Oro', text: 'Hasta 1971, el dólar estadounidense estaba respaldado por oro en Fort Knox. Cada dólar era un certificado que podías canjear por oro real.' },
          { icon: Globe, title: 'Bretton Woods (1944)', text: 'Después de la Segunda Guerra Mundial, el mundo acordó usar el dólar como moneda de reserva mundial, porque el dólar estaba respaldado por oro. Otras monedas se anclaban al dólar.' }
        ]
      },
      {
        type: 'main',
        title: 'La Ruptura de 1971: El Día que Cambió Todo',
        content: 'El 15 de agosto de 1971, el presidente Richard Nixon apareció en televisión y anunció que Estados Unidos "temporalmente" suspendía la convertibilidad del dólar en oro. Francia y otros países estaban exigiendo su oro (sabían que USA había impreso más dólares de los que podía respaldar), y las reservas de Fort Knox se vaciaban. Nixon rompió la promesa "temporalmente". 54 años después, sigue rota. Desde ese día, el dólar—y por extensión todas las monedas del mundo—no están respaldadas por nada tangible. Solo por la "confianza" en el gobierno emisor.',
        highlight: {
          title: 'El Resultado Matemático',
          text: 'Desde 1971, el dólar ha perdido el 98% de su poder adquisitivo. Una casa que costaba $25,000 en 1971 hoy cuesta $400,000+. Un auto que costaba $3,500 hoy cuesta $48,000. No es que las cosas sean mejores—es que tu dinero vale menos.'
        }
      },
      {
        type: 'comparison',
        title: 'Antes vs Después de 1971',
        leftSide: {
          title: 'Antes de 1971 (Patrón Oro)',
          points: [
            'Cada dólar representaba oro real',
            'Los gobiernos no podían imprimir dinero a voluntad',
            'Un salario mínimo compraba 5+ onzas de oro',
            'Una familia vivía con un solo sueldo',
            'Los precios eran estables por décadas'
          ]
        },
        rightSide: {
          title: 'Después de 1971 (Dinero Fiat)',
          points: [
            'El dólar es un papel sin respaldo tangible',
            'Los gobiernos imprimen trillones cuando quieren',
            'Un salario mínimo compra 0.15 onzas de oro',
            'Ambos padres trabajan y apenas alcanzan',
            'Los precios suben cada año sin excepción'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Qué es el Dinero Fiat?',
        content: '"Fiat" viene del latín y significa "hágase" o "por decreto". El dinero fiat es dinero que vale porque un gobierno DICE que vale, no porque esté respaldado por algo escaso. Tu billete de 50,000 pesos colombianos no representa oro, plata, ni nada tangible. Es un papel (o número digital) que tiene valor solo porque el gobierno obliga a aceptarlo y porque todos acordamos creer en él. Es un acto de fe colectiva.',
        features: [
          { icon: AlertTriangle, title: 'El Problema Fundamental', text: 'Si el valor del dinero depende de la "confianza" en los políticos, ¿qué pasa cuando los políticos imprimen para ganar elecciones, rescatar amigos, o financiar guerras? La historia tiene la respuesta: SIEMPRE lo hacen, y SIEMPRE destruyen el valor del dinero eventualmente.' },
          { icon: TrendingDown, title: 'Dato Histórico', text: 'De las 775 monedas fiat que han existido en la historia, NINGUNA ha sobrevivido a largo plazo. El promedio de vida de una moneda fiat es 27 años. El dólar actual tiene 54 años desde 1971.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Por qué Esta Historia Importa para Bitcoin',
        items: [
          'El dinero no es un invento del gobierno—es una tecnología que el mercado desarrolló durante milenios para resolver el problema del intercambio de valor.',
          'El buen dinero debe cumplir 6 propiedades: escasez, divisibilidad, durabilidad, portabilidad, fungibilidad y verificabilidad.',
          'El oro dominó 5,000 años porque cumple estas propiedades naturalmente. Nadie puede "imprimir" más oro.',
          'En 1971, los gobiernos rompieron la última conexión del dinero con algo escaso. Desde entonces, vivimos en un experimento de dinero por decreto (fiat).',
          'Bitcoin es el primer dinero en la historia que cumple las 6 propiedades del dinero perfecto de forma DIGITAL, con escasez ABSOLUTA (21 millones máximo), y que NADIE puede manipular.',
          'No es solo tecnología—es una revolución monetaria comparable a la invención del papel moneda o del propio concepto de dinero.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un pescador necesita sandalias. El zapatero no quiere pescado. ¿Cómo se llama este problema que el dinero resolvió?',
          options: [
            { id: 'a', text: 'El problema del trueque' },
            { id: 'b', text: 'La doble coincidencia de deseos' },
            { id: 'c', text: 'La escasez de bienes' },
            { id: 'd', text: 'El problema de portabilidad' }
          ],
          correctAnswer: 'b',
          explanation: 'La "doble coincidencia de deseos" requiere que dos personas quieran exactamente lo que la otra tiene. El dinero elimina este problema al servir como medio de intercambio universal.'
        },
        {
          id: 'q2',
          question: '¿Por qué el oro se convirtió en dinero durante 5,000 años mientras las conchas de mar dejaron de funcionar?',
          options: [
            { id: 'a', text: 'Porque los gobiernos lo decretaron' },
            { id: 'b', text: 'Porque el oro es más bonito' },
            { id: 'c', text: 'Porque el oro es genuinamente escaso y nadie puede "imprimir" más, mientras las conchas podían recolectarse en masa' },
            { id: 'd', text: 'Porque el oro es más fácil de encontrar' }
          ],
          correctAnswer: 'c',
          explanation: 'El mercado, no los gobiernos, eligió el oro durante milenios porque cumple naturalmente las 6 propiedades del buen dinero, especialmente la escasez. Las conchas fallaron cuando se descubrieron nuevas fuentes.'
        },
        {
          id: 'q3',
          question: '¿Qué pasó exactamente el 15 de agosto de 1971?',
          options: [
            { id: 'a', text: 'Se creó Bitcoin' },
            { id: 'b', text: 'Nixon rompió la promesa de canjear dólares por oro, creando el sistema de dinero fiat actual' },
            { id: 'c', text: 'Empezó la Gran Depresión' },
            { id: 'd', text: 'Se fundó la Reserva Federal' }
          ],
          correctAnswer: 'b',
          explanation: 'Ese día nació el dinero fiat puro. Nixon cerró la "ventanilla del oro" porque USA había impreso más dólares de los que podía respaldar. Desde entonces, el dinero no está respaldado por nada tangible.'
        },
        {
          id: 'q4',
          question: 'Un trabajador en Venezuela ahorró durante 10 años. En 2018 sus ahorros valían $50,000. En 2020 valían $50. ¿Qué propiedad del dinero falló catastróficamente?',
          options: [
            { id: 'a', text: 'Divisibilidad' },
            { id: 'b', text: 'Portabilidad' },
            { id: 'c', text: 'Escasez (el gobierno imprimió tanto que destruyó el valor)' },
            { id: 'd', text: 'Verificabilidad' }
          ],
          correctAnswer: 'c',
          explanation: 'La hiperinflación de Venezuela ocurrió porque el gobierno imprimió dinero sin límite. Cuando el dinero no es escaso, pierde su capacidad de almacenar valor. El trabajo de toda una vida se evaporó.'
        },
        {
          id: 'q5',
          question: 'Si el dinero es "tiempo humano cristalizado", ¿qué significa cuando un gobierno imprime trillones de la nada?',
          options: [
            { id: 'a', text: 'Crea riqueza para todos' },
            { id: 'b', text: 'No afecta a nadie porque es solo un número' },
            { id: 'c', text: 'Roba silenciosamente horas de vida a todos los que ahorraron en esa moneda' },
            { id: 'd', text: 'Solo afecta a los ricos' }
          ],
          correctAnswer: 'c',
          explanation: 'Imprimir dinero diluye el valor de todo el dinero existente. Es un impuesto oculto que roba el tiempo de trabajo que la gente ya invirtió. Por eso Bitcoin tiene un límite de 21 millones: nadie puede "imprimir" más.'
        }
      ]
    }
  },
  2: {
    id: 2,
    title: 'La Trampa de la Inflación',
    level: 'Principiante',
    number: '2 de 20',
    duration: '22 minutos',
    type: 'Video + Gráficos',
    description: 'Te han enseñado que la inflación es "natural" y "necesaria". Es mentira. La inflación es una política deliberada que transfiere tu riqueza a otros mientras duermes. Aprende cómo funciona realmente la máquina de crear dinero.',
    sections: [
      {
        type: 'intro',
        title: 'El Robo Silencioso que Nadie Te Explicó',
        content: 'Tu abuela podía comprar una casa con el sueldo de 3 años. Hoy necesitas 15 años o más. ¿La gente de antes trabajaba más duro? ¿Las casas de hoy son 5 veces mejores? No. La diferencia es simple: **tu dinero vale menos cada año**. La inflación no es un fenómeno natural como el clima. No es inevitable. Es una **política deliberada** de los gobiernos que, año tras año, transfiere riqueza silenciosamente de los que ahorran a los que imprimen y a los que reciben el dinero nuevo primero.',
        highlight: {
          title: 'El Dato que Deberías Tatuarte',
          text: 'En 1971, un salario mínimo en Estados Unidos compraba 5 onzas de oro. Hoy, ese mismo salario mínimo compra 0.15 onzas de oro. Mismas horas de trabajo, 97% MENOS poder adquisitivo. No trabajamos menos—nos pagan en dinero que vale menos.'
        }
      },
      {
        type: 'main',
        title: 'La Gran Mentira: "El Dinero Está Respaldado"',
        content: 'Pregúntale a cualquier persona en la calle: "¿Por qué el dinero tiene valor?" Casi todos responderán algo como "porque está respaldado por el gobierno" o "porque hay oro en algún banco". **Ambas respuestas son incorrectas.** Desde 1971, tu dinero no está respaldado por absolutamente nada tangible. Es un número en una computadora (o un papel pintado) que tiene valor únicamente porque: 1) El gobierno te obliga a aceptarlo para pagar impuestos, y 2) Todos acordamos creer en él colectivamente.',
        features: [
          { icon: Landmark, title: 'El Mito del Respaldo', text: 'No hay oro en Fort Knox respaldando tu dinero. No hay petróleo. No hay nada. El "respaldo" es la promesa de un político de no abusar del poder de imprimir. ¿Confías en esa promesa?' },
          { icon: AlertTriangle, title: 'La Prueba', text: 'Si el dinero estuviera respaldado por algo, los gobiernos no podrían crear trillones de la nada en semanas como hicieron en 2020. Simplemente NO TENDRÍAN ese "algo" para respaldar el dinero nuevo.' }
        ]
      },
      {
        type: 'main',
        title: 'La Máquina de Crear Dinero (Cómo Funciona Realmente)',
        content: 'Aquí es donde la mayoría se pierde, porque el sistema está diseñado para ser confuso. Vamos a simplificarlo. El dinero se crea principalmente de DOS formas:'
      },
      {
        type: 'main',
        title: '1. El Banco Central Imprime',
        image: '/images/lessons/lesson-2/lesson2-1.webp',
        imageAlt: 'Cómo el banco central crea dinero de la nada'
      },
      {
        type: 'main',
        title: '2. Los Bancos Multiplican (Reserva Fraccionaria)',
        image: '/images/lessons/lesson-2/lesson2-2.webp',
        imageAlt: 'Sistema de reserva fraccionaria y multiplicación del dinero'
      },
      {
        type: 'main',
        title: '3. El Resultado Matemático',
        image: '/images/lessons/lesson-2/lesson2-3.webp',
        imageAlt: 'El resultado matemático de la creación de dinero'
      },
      {
        type: 'main',
        title: '4. La Ilusión del Aumento de Sueldo',
        image: '/images/lessons/lesson-2/lesson2-4.webp',
        imageAlt: 'La ilusión del aumento de sueldo vs la inflación real'
      },
      {
        type: 'main',
        title: 'Por Qué los Gobiernos AMAN la Inflación',
        content: 'La inflación no es un error—es una política deliberada. Los gobiernos tienen incentivos muy claros para mantener inflación moderada (y a veces no tan moderada):',
        features: [
          { icon: Landmark, title: 'Licuar la Deuda', text: 'Si el gobierno debe $1 trillón, puede imprimirlo y pagar. Técnicamente "pagó" su deuda, pero el dinero ahora vale menos. Transfirió su deuda a todos los que tienen esa moneda.' },
          { icon: Users, title: 'Financiar Sin Impuestos Visibles', text: 'Subir impuestos es impopular. Pero imprimir dinero es invisible para la mayoría. Es un "impuesto oculto" que la gente no entiende y no protesta.' },
          { icon: TrendingDown, title: 'Manipular las Estadísticas', text: '¿Sabías que los gobiernos cambian constantemente cómo calculan la inflación? Cuando la inflación "oficial" es 4%, la inflación REAL (lo que tú sientes en el supermercado) suele ser el doble o más.' }
        ]
      },
      {
        type: 'main',
        title: 'La Inflación Real vs La Inflación Oficial',
        content: 'Los gobiernos tienen trucos para hacer que la inflación "oficial" parezca más baja de lo que realmente es:',
        features: [
          { icon: AlertTriangle, title: 'Sustitución', text: 'Si el bistec sube 30%, asumen que "la gente comprará pollo". Así no cuentan la subida completa del bistec. Pero tú querías bistec, no pollo.' },
          { icon: AlertTriangle, title: 'Ajuste Hedónico', text: 'Si tu computadora nueva cuesta lo mismo que la de hace 5 años pero es más rápida, dicen que "en realidad bajó de precio". Pero tu billetera pagó lo mismo.' },
          { icon: AlertTriangle, title: 'Exclusiones Convenientes', text: 'Muchos índices excluyen comida y energía por ser "muy volátiles". Pero... ¿no son exactamente las cosas que más compras?' }
        ],
        highlight: {
          title: 'El Test del Supermercado',
          text: 'La próxima vez que el gobierno diga "inflación 4%", ve al supermercado y compara los precios con hace un año. Compara el alquiler. La gasolina. La electricidad. Tu experiencia personal es más honesta que cualquier estadística oficial.'
        }
      },
      {
        type: 'main',
        title: 'Casos Reales: Cuando la Inflación Destruye Países',
        content: 'Esto no es teoría. No es algo que "podría pasar". Ha pasado decenas de veces en la historia y está pasando AHORA MISMO mientras lees esto:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela (2016-2020)', text: 'Inflación de 1,000,000% anual. El salario mínimo mensual no alcanzaba para comprar un kilo de carne. La clase media se volvió mendiga en meses. Doctores y abogados huyeron del país con lo puesto. Todo porque el gobierno decidió "imprimir su camino fuera de los problemas".' },
          { icon: AlertTriangle, title: 'Argentina (2023-2024)', text: '140%+ de inflación anual. Los abuelos ven sus pensiones de toda una vida evaporarse en meses. La gente corre a comprar cualquier cosa el día de cobro porque mañana estará más caro. Los supermercados cambian precios DURANTE el día.' },
          { icon: AlertTriangle, title: 'Turquía (2021-2023)', text: 'La lira perdió 80% de su valor en 2 años. La clase media turca, que había construido vidas estables, se encontró de pronto sin poder pagar la renta. Todo por políticas monetarias del gobierno.' },
          { icon: AlertTriangle, title: 'Líbano (2020-2023)', text: 'El sistema bancario colapsó. La gente no podía sacar su propio dinero de los bancos. La libra libanesa perdió 98% de su valor. Familias de clase media alta se volvieron pobres literalmente de la noche a la mañana.' }
        ]
      },
      {
        type: 'main',
        title: '¿Y Colombia? ¿Y México? ¿Y España?',
        content: 'Quizás pienses: "Eso pasa en países con gobiernos locos, aquí no pasará." Pero mira los datos:',
        features: [
          { icon: TrendingDown, title: 'Colombia', text: 'El peso colombiano ha perdido 85%+ de su valor contra el dólar desde el año 2000. Y el dólar TAMBIÉN pierde valor. Estás perdiendo contra una moneda que está perdiendo.' },
          { icon: TrendingDown, title: 'México', text: 'El peso mexicano valía 12 por dólar en 2008. Llegó a 24 en 2020. Aunque ha recuperado algo, la tendencia histórica es clara: devaluación constante.' },
          { icon: TrendingDown, title: 'El Dólar Mismo', text: 'El "rey" de las monedas ha perdido 96% de su poder adquisitivo desde 1913 (cuando se creó la Reserva Federal). Si el dólar se devalúa, ¿qué crees que pasa con las monedas ancladas a él?' }
        ],
        highlight: {
          title: 'La Pregunta Incómoda',
          text: '¿Por qué las generaciones de tus abuelos podían comprar casa, carro, educar hijos y ahorrar con UN solo sueldo... y hoy dos personas trabajando apenas llegan a fin de mes? ¿Es que antes trabajaban más? ¿O es que les pagaban en dinero que valía algo?'
        }
      },
      {
        type: 'takeaways',
        title: 'La Verdad Incómoda y La Salida',
        items: [
          'La inflación no es natural ni inevitable—es una política deliberada que transfiere riqueza de ahorradores a deudores y de ciudadanos a gobiernos.',
          'El dinero que tienes en el banco está perdiendo valor cada día. Los intereses bancarios NUNCA compensan la inflación real.',
          'Desde 1971, NO existe ninguna moneda nacional respaldada por algo tangible. Todas dependen de promesas de políticos.',
          'El historial es claro: TODOS los gobiernos eventualmente abusan del poder de imprimir. Es solo cuestión de tiempo y grado.',
          'Bitcoin fue creado específicamente para resolver este problema: solo existirán 21 millones. Nadie—ni Satoshi, ni los mineros, ni ningún gobierno—puede crear más.',
          'No se trata de "invertir para hacerse rico". Se trata de PROTEGER el valor de tu trabajo de un sistema diseñado para devaluarlo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu abuela compró su casa en 1975 con 3 años de sueldo. Hoy la misma casa cuesta 15+ años de sueldo. ¿Cuál es la explicación REAL?',
          options: [
            { id: 'a', text: 'Las casas de hoy son 5 veces mejores' },
            { id: 'b', text: 'La gente de antes trabajaba más duro' },
            { id: 'c', text: 'El dinero ha perdido 80%+ de su poder adquisitivo por la creación constante de dinero nuevo' },
            { id: 'd', text: 'Es una coincidencia económica' }
          ],
          correctAnswer: 'c',
          explanation: 'Las casas no son 5x mejores. La gente no trabaja menos. Simplemente, desde 1971 los gobiernos han diluido el valor del dinero constantemente. Tu sueldo nominal sube, pero tu poder real de compra baja.'
        },
        {
          id: 'q2',
          question: 'Tienes $100,000 pesos ahorrados en un país con 50% de inflación anual. Los dejas en el banco que te paga 10% de interés. Después de 1 año, ¿cuánto PODER DE COMPRA tienes realmente?',
          options: [
            { id: 'a', text: '$110,000 (ganaste 10% de interés)' },
            { id: 'b', text: '$100,000 (quedaste igual)' },
            { id: 'c', text: 'Aproximadamente $73,000 de poder de compra real (perdiste 27%)' },
            { id: 'd', text: '$150,000 (la inflación te ayuda)' }
          ],
          correctAnswer: 'c',
          explanation: 'Tienes $110,000 nominales, pero los precios subieron 50%. $110,000/1.5 = $73,333 de poder de compra real. Ganaste 10% pero perdiste 50% = -27% neto. Los intereses bancarios NUNCA compensan inflación alta.'
        },
        {
          id: 'q3',
          question: 'En 2020, la Reserva Federal de USA creó $4.5 trillones. ¿De dónde salió ese dinero?',
          options: [
            { id: 'a', text: 'De los impuestos de los ciudadanos' },
            { id: 'b', text: 'De reservas de oro en Fort Knox' },
            { id: 'c', text: 'De préstamos de China' },
            { id: 'd', text: 'De la nada—literalmente teclearon números en una computadora' }
          ],
          correctAnswer: 'd',
          explanation: 'El dinero fiat se crea de la nada. La Fed aumenta un número en una base de datos y ese "dinero" existe. No hay oro, no hay impuestos, no hay nada respaldándolo. Pero el efecto es muy real: tu dinero existente ahora vale menos.'
        },
        {
          id: 'q4',
          question: '¿Por qué los gobiernos "aman" la inflación moderada y nunca la eliminan completamente?',
          options: [
            { id: 'a', text: 'Porque beneficia a todos los ciudadanos' },
            { id: 'b', text: 'Porque es un fenómeno natural imposible de controlar' },
            { id: 'c', text: 'Porque licúa la deuda pública, permite gastar sin subir impuestos, y la mayoría de ciudadanos no entiende que los está empobreciendo' },
            { id: 'd', text: 'Porque los bancos centrales son incompetentes' }
          ],
          correctAnswer: 'c',
          explanation: 'La inflación es un "impuesto invisible". Permite a los gobiernos gastar más de lo que recaudan, pagar deudas con dinero devaluado, y transferir riqueza silenciosamente. Es política deliberada, no error.'
        },
        {
          id: 'q5',
          question: 'En Venezuela, Argentina, Turquía y Líbano, la clase media fue destruida por la inflación. ¿Qué tienen en común todos estos casos?',
          options: [
            { id: 'a', text: 'Guerras civiles' },
            { id: 'b', text: 'Desastres naturales' },
            { id: 'c', text: 'Gobiernos que imprimieron dinero masivamente para financiar sus gastos' },
            { id: 'd', text: 'Sanciones internacionales únicamente' }
          ],
          correctAnswer: 'c',
          explanation: 'El patrón es siempre el mismo: gobierno gasta más de lo que tiene → imprime para cubrir el déficit → el dinero pierde valor → los ciudadanos pierden sus ahorros. Es la historia de TODAS las monedas fiat eventualmente.'
        }
      ]
    }
  },
  3: {
    id: 3,
    title: 'El Efecto Cantillon',
    level: 'Principiante',
    number: '3 de 20',
    duration: '20 minutos',
    type: 'Concepto Clave',
    description: 'El secreto mejor guardado de la economía moderna: cuando se imprime dinero, no llega a todos al mismo tiempo. Los primeros en recibirlo se enriquecen. Los últimos se empobrecen. Aprende dónde estás tú en esta cadena.',
    sections: [
      {
        type: 'intro',
        title: 'El Secreto de 300 Años que Explica la Desigualdad Moderna',
        content: 'En 1730, un economista irlandés-francés llamado **Richard Cantillon** descubrió algo que los gobiernos prefieren que no sepas: **el dinero nuevo no es neutral**. Cuando un banco central "imprime" dinero, ese dinero no aparece mágicamente en los bolsillos de todos al mismo tiempo. Alguien lo recibe PRIMERO. Y ese "alguien" tiene una ventaja enorme: puede comprar activos a precios VIEJOS antes de que los precios suban. Para cuando el dinero llega a ti (si es que llega), los precios ya subieron. Compraste tarde. Pagaste más. Perdiste.',
        highlight: {
          title: 'La Metáfora del Río',
          text: 'Imagina que el dinero nuevo es un río. Los que están cerca de la naciente (bancos, gobierno, grandes corporaciones) beben agua limpia y abundante. Para cuando el agua llega río abajo (trabajadores, pensionados, ahorradores), está sucia y hay menos. Tú estás río abajo.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: El Camino del Dinero Nuevo',
        content: 'Vamos a rastrear exactamente qué pasa cuando un banco central "crea" $1 trillón de la nada. Este es el camino real que recorre ese dinero:',
        features: [
          { icon: Landmark, title: 'Paso 1: El Banco Central', text: 'La Reserva Federal (o el banco central de tu país) crea dinero digitalmente. Compra bonos del gobierno o activos de bancos privados. El dinero nuevo ahora está en los bancos comerciales.' },
          { icon: Briefcase, title: 'Paso 2: Los Bancos Grandes', text: 'JP Morgan, Goldman Sachs, y los grandes bancos reciben el dinero fresco. ¿Qué hacen? Lo prestan a sus mejores clientes (grandes corporaciones, fondos de inversión) a tasas bajas. O lo usan ellos mismos para comprar activos.' },
          { icon: TrendingUp, title: 'Paso 3: Corporaciones y Fondos', text: 'Las corporaciones usan el dinero barato para recomprar sus propias acciones (subiendo el precio), adquirir otras empresas, o comprar bienes raíces. Los precios de estos activos SUBEN. Los ricos (que ya tenían estos activos) se vuelven más ricos.' },
          { icon: Users, title: 'Paso 4: El Efecto Goteo (Meses/Años Después)', text: 'Eventualmente, algo de ese dinero llega a la economía "real" en forma de salarios ligeramente más altos o más empleos. Pero para entonces...' },
          { icon: TrendingDown, title: 'Paso 5: Tú (Último en la Fila)', text: 'Para cuando recibes un aumento del 5%, los precios de las casas subieron 30%, la bolsa subió 40%, y la comida subió 15%. Tu "aumento" en realidad es una REDUCCIÓN de tu poder de compra relativo.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Los Ganadores vs Los Perdedores',
        leftSide: {
          title: 'Quienes Ganan (Cerca de la Impresora)',
          points: [
            'Bancos centrales y comerciales',
            'Gobierno (puede gastar el dinero nuevo primero)',
            'Grandes corporaciones con acceso a crédito barato',
            'Fondos de inversión y hedge funds',
            'Dueños de activos: acciones, bienes raíces, Bitcoin',
            'Personas con DEUDAS grandes (la deuda se licúa)',
            'Los muy ricos que tienen asesores para anticipar la inflación'
          ]
        },
        rightSide: {
          title: 'Quienes Pierden (Lejos de la Impresora)',
          points: [
            'Trabajadores asalariados (tu sueldo se ajusta último)',
            'Pensionados y jubilados (ingresos fijos)',
            'Ahorradores en efectivo o cuentas bancarias',
            'Clase media sin activos significativos',
            'Jóvenes tratando de comprar su primera casa',
            'Cualquiera que guarde dinero "para el futuro"',
            'Pequeños negocios sin acceso a crédito barato'
          ]
        }
      },
      {
        type: 'main',
        title: 'Ejemplo Concreto: La Pandemia 2020-2022',
        content: 'El Efecto Cantillon no es teoría abstracta. Lo vivimos en tiempo real durante la pandemia:',
        features: [
          { icon: Landmark, title: 'Marzo 2020', text: 'La Fed anuncia que imprimirá trillones para "salvar la economía". Los mercados, que habían caído 30%, empiezan a subir ESE MISMO DÍA. Los que tenían efectivo para comprar acciones en el fondo multiplicaron su dinero.' },
          { icon: TrendingUp, title: '2020-2021', text: 'El S&P 500 sube 100%. Las casas en USA suben 30-40%. Bitcoin sube de $5,000 a $69,000. Los que ya tenían estos activos vieron su riqueza explotar.' },
          { icon: Users, title: 'Mientras Tanto...', text: 'Millones perdieron empleos. Los "cheques de estímulo" ($1,200-$3,200) ayudaron a sobrevivir pero no a comprar activos. La clase media usó ese dinero para pagar renta y comida.' },
          { icon: TrendingDown, title: '2022-2023', text: 'La inflación llega al 9%+. Los precios de todo explotan. Los salarios suben 3-5%. Los que vivían de sueldo ahora no llegan a fin de mes. El "estímulo" que los ayudó a sobrevivir ahora los empobrece.' }
        ],
        highlight: {
          title: 'El Resultado Final',
          text: 'Entre 2020-2022, los billonarios del mundo aumentaron su riqueza en $5 TRILLONES. La clase media vio sus ahorros evaporarse por la inflación. El dinero no llegó a todos igual. Los primeros en la fila ganaron. Los últimos perdieron.'
        }
      },
      {
        type: 'main',
        title: 'El Mapa de Cantillon: ¿Dónde Estás Tú?',
        content: 'Vamos a ser honestos sobre tu posición en este sistema. Responde mentalmente:',
        features: [
          { icon: CheckCircle, title: '¿Tienes acceso a crédito institucional a tasas bajas?', text: 'Si no eres corporación o ultra-rico, probablemente no. Tú pagas 15-30% en tu tarjeta de crédito. BlackRock paga 2%.' },
          { icon: CheckCircle, title: '¿Puedes comprar activos ANTES de que el dinero nuevo llegue al mercado?', text: 'Los fondos de inversión tienen traders que actúan en SEGUNDOS cuando la Fed anuncia algo. Tú te enteras días después.' },
          { icon: CheckCircle, title: '¿Tu ingreso se ajusta automáticamente con la inflación?', text: 'Probablemente no. Tienes que PEDIR aumento y esperar que te lo den. Los precios no esperan.' },
          { icon: CheckCircle, title: '¿La mayor parte de tu riqueza está en activos que suben con la inflación?', text: 'Si tu "riqueza" está en una cuenta de ahorros, estás perdiendo cada día. Si está en casa propia, acciones o Bitcoin, estás parcialmente protegido.' }
        ]
      },
      {
        type: 'main',
        title: 'Por Qué la Brecha de Riqueza Crece y Crece',
        content: 'Desde 1971 (fin del patrón oro), la desigualdad de riqueza ha explotado en TODO el mundo. ¿Coincidencia? No. Es el Efecto Cantillon acumulándose década tras década:',
        features: [
          { icon: TrendingUp, title: 'Los Activos Suben Más que los Salarios', text: 'Desde 1971, el S&P 500 ha subido 3,000%+. Los salarios reales han subido menos de 20%. Si tenías acciones, te hiciste rico. Si solo tenías tu sueldo, te quedaste atrás.' },
          { icon: Landmark, title: 'La Vivienda se Volvió Imposible', text: 'En 1970, una casa promedio costaba 2-3 años de salario mediano. Hoy cuesta 7-10 años. El dinero nuevo fluyó hacia bienes raíces, haciendo imposible comprar para las nuevas generaciones.' },
          { icon: Users, title: 'Los Ricos Tienen Asesores', text: 'Cuando se anuncia impresión de dinero, los ultra-ricos llaman a sus banqueros y mueven su capital a activos que se beneficiarán. Tú te enteras en las noticias semanas después.' }
        ],
        highlight: {
          title: 'La Verdad Incómoda',
          text: 'No es que los ricos "trabajen más duro". Es que están posicionados cerca de la fuente del dinero nuevo. Cada ronda de impresión los hace MÁS ricos y a ti te hace MÁS pobre en términos relativos. El juego está estructuralmente amañado.'
        }
      },
      {
        type: 'main',
        title: 'Latinoamérica: Efecto Cantillon en Esteroides',
        content: 'En LATAM, el Efecto Cantillon es aún más brutal porque nuestras monedas se devalúan contra el dólar, que a su vez se devalúa contra activos reales:',
        features: [
          { icon: AlertTriangle, title: 'Colombia', text: 'El peso se devalúa → los que tienen dólares o activos dolarizados preservan riqueza → los que tienen pesos pierden. ¿Quién tiene acceso a comprar dólares fácilmente? Los ricos, los bancos, las empresas grandes.' },
          { icon: AlertTriangle, title: 'Argentina', text: 'Caso extremo: los que pueden comprar dólar blue preservan algo. Los que dependen del peso oficial ven sus ahorros evaporarse. El acceso al dólar ES un privilegio de clase.' },
          { icon: AlertTriangle, title: 'Venezuela', text: 'Los conectados al gobierno recibieron dólares preferenciales y se enriquecieron obscenamente. La clase media y baja recibió bolívares que se volvieron papel higiénico.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin: La Primera Salida del Sistema Cantillon',
        content: 'Ahora entiendes por qué Bitcoin existe y por qué importa:',
        features: [
          { icon: Lock, title: 'Nadie Está "Cerca de la Impresora"', text: 'No hay banco central de Bitcoin. No hay "dinero nuevo" que fluya primero a los privilegiados. Los 21 millones de BTC se emiten según reglas matemáticas predecibles que nadie puede cambiar.' },
          { icon: Users, title: 'Acceso Igualitario', text: 'Cualquier persona con internet puede comprar Bitcoin. No necesitas ser cliente VIP de un banco. No necesitas conexiones políticas. No necesitas estar en el primer mundo.' },
          { icon: Shield, title: 'Protección Contra la Devaluación', text: 'Cuando los gobiernos imprimen dinero fiat, Bitcoin no se diluye. Su escasez es absoluta. Por eso, históricamente, ha subido cuando los bancos centrales imprimen.' }
        ],
        highlight: {
          title: 'El Cambio de Paradigma',
          text: 'Por primera vez en la historia, existe un activo monetario donde NADIE tiene ventaja de acceso privilegiado. No hay "insiders" de Bitcoin. No hay Cantillon en Bitcoin. Es el primer dinero verdaderamente justo de la historia.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'El Efecto Cantillon explica por qué la desigualdad crece cuando se imprime dinero: los primeros en recibirlo ganan, los últimos pierden.',
          'Tú estás al FINAL de la cadena. Para cuando el dinero nuevo llega a tu sueldo, los precios ya subieron.',
          'Los ganadores del sistema actual: bancos, gobiernos, corporaciones, dueños de activos, ultra-ricos con acceso a crédito barato.',
          'Los perdedores: asalariados, pensionados, ahorradores en efectivo, jóvenes sin activos, clase media latinoamericana.',
          'La brecha de riqueza no es coincidencia—es el resultado matemático de 50+ años de impresión monetaria beneficiando siempre a los mismos.',
          'Bitcoin es el primer sistema monetario donde NO existe el Efecto Cantillon. No hay privilegiados. No hay "cerca de la impresora". Escasez absoluta para todos por igual.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'El banco central imprime $1 trillón para "estimular la economía". ¿Quién recibe ese dinero PRIMERO?',
          options: [
            { id: 'a', text: 'Los trabajadores asalariados' },
            { id: 'b', text: 'Los pensionados' },
            { id: 'c', text: 'Los bancos comerciales y grandes instituciones financieras' },
            { id: 'd', text: 'Se reparte equitativamente entre todos los ciudadanos' }
          ],
          correctAnswer: 'c',
          explanation: 'El Efecto Cantillon: el dinero nuevo fluye primero a bancos e instituciones cercanas al banco central. Ellos compran activos a precios viejos. Para cuando llega al ciudadano común, los precios ya subieron.'
        },
        {
          id: 'q2',
          question: 'En 2020, la Fed imprimió trillones. El S&P 500 subió 100%, las casas subieron 30-40%. Los salarios subieron 5%. ¿Quién ganó y quién perdió?',
          options: [
            { id: 'a', text: 'Todos ganaron por igual' },
            { id: 'b', text: 'Los dueños de activos (acciones, casas) ganaron. Los que solo tenían sueldo perdieron poder de compra relativo' },
            { id: 'c', text: 'Los trabajadores ganaron más porque recibieron estímulos' },
            { id: 'd', text: 'Nadie ganó, fue una crisis' }
          ],
          correctAnswer: 'b',
          explanation: 'Ejemplo perfecto del Efecto Cantillon en tiempo real. Los que tenían activos vieron su riqueza explotar. Los que dependían de salarios vieron su poder de compra erosionarse. Los billonarios ganaron $5 trillones mientras la clase media recibía cheques de $1,200.'
        },
        {
          id: 'q3',
          question: 'Un joven de 25 años en Colombia quiere comprar su primera casa. Desde que nació, el peso se ha devaluado 85%+ y las casas han subido de precio mucho más que los salarios. ¿Por qué le es casi imposible comprar?',
          options: [
            { id: 'a', text: 'Porque no trabaja suficiente' },
            { id: 'b', text: 'Porque las casas de hoy son mucho mejores' },
            { id: 'c', text: 'Porque el Efecto Cantillon ha inflado los precios de activos mucho más rápido que los salarios durante décadas' },
            { id: 'd', text: 'Porque los constructores son codiciosos' }
          ],
          correctAnswer: 'c',
          explanation: 'Cada vez que se imprime dinero, fluye hacia activos (casas, acciones) antes que hacia salarios. Después de décadas de esto, los activos están fuera del alcance de quienes empiezan desde cero. No es falta de trabajo—es posición en el sistema.'
        },
        {
          id: 'q4',
          question: 'Un banco grande puede pedir prestado al 2% de interés. Tú pagas 25% en tu tarjeta de crédito. ¿Qué ventaja tiene el banco?',
          options: [
            { id: 'a', text: 'Ninguna, es el mismo dinero' },
            { id: 'b', text: 'El banco está más cerca de la "impresora" y accede a dinero nuevo a tasas privilegiadas, mientras tú pagas el precio de mercado retail' },
            { id: 'c', text: 'El banco trabaja más duro' },
            { id: 'd', text: 'Es solo porque tiene más dinero' }
          ],
          correctAnswer: 'b',
          explanation: 'Esto ES el Efecto Cantillon en acción. Los cercanos a la fuente del dinero (bancos) acceden a crédito casi gratis. Lo prestan a ti al 25%. La diferencia es ganancia para ellos, costo para ti. El acceso privilegiado al dinero nuevo es la ventaja.'
        },
        {
          id: 'q5',
          question: '¿Por qué Bitcoin es considerado una "salida" del Efecto Cantillon?',
          options: [
            { id: 'a', text: 'Porque Satoshi recibe Bitcoin nuevo primero' },
            { id: 'b', text: 'Porque los mineros tienen ventaja sobre los demás' },
            { id: 'c', text: 'Porque NO HAY impresión privilegiada—los 21 millones de BTC se emiten según reglas matemáticas predecibles que nadie puede cambiar, sin "cercanos a la impresora"' },
            { id: 'd', text: 'Porque Bitcoin siempre sube' }
          ],
          correctAnswer: 'c',
          explanation: 'Bitcoin es el primer dinero donde nadie tiene acceso privilegiado a la emisión. No hay banco central que imprima para amigos. Las reglas son iguales para todos. Cualquier persona con internet puede participar en igualdad de condiciones.'
        },
        {
          id: 'q6',
          question: 'Desde 1971, la brecha entre ricos y pobres ha crecido dramáticamente en casi todos los países. Según el Efecto Cantillon, ¿cuál es la causa estructural?',
          options: [
            { id: 'a', text: 'Los pobres se volvieron más perezosos' },
            { id: 'b', text: 'La tecnología eliminó empleos' },
            { id: 'c', text: 'Décadas de impresión monetaria han inflado activos (que poseen los ricos) mucho más que salarios (de los que dependen los demás)' },
            { id: 'd', text: 'Los impuestos bajaron para los ricos' }
          ],
          correctAnswer: 'c',
          explanation: 'El S&P 500 subió 3000%+ desde 1971. Los salarios reales subieron menos de 20%. Si tenías activos, multiplicaste tu riqueza. Si dependías de tu sueldo, te quedaste atrás. No es coincidencia—es el Efecto Cantillon acumulándose durante 50 años.'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Bitcoin: La Salida',
    level: 'Principiante',
    number: '4 de 20',
    duration: '28 minutos',
    type: 'Video + Texto',
    description: 'Después de entender cómo el sistema monetario te empobrece silenciosamente, es hora de conocer la solución. Bitcoin no es una "inversión especulativa"—es la primera alternativa real al dinero corrupto en 5,000 años de historia.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Génesis: 3 de Enero de 2009',
        content: 'El mundo se desmoronaba. La crisis financiera de 2008 había expuesto la corrupción del sistema bancario: préstamos irresponsables, derivados tóxicos, codicia institucional. Los gobiernos respondieron rescatando a los bancos culpables con TRILLONES de dólares del contribuyente. Los ejecutivos que causaron la crisis recibieron bonos millonarios mientras millones perdían sus casas. En medio de este caos, el 3 de enero de 2009, alguien bajo el seudónimo **Satoshi Nakamoto** minó el primer bloque de Bitcoin. En ese bloque, grabó para siempre un mensaje: **"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"** (Canciller al borde de un segundo rescate para los bancos). No era coincidencia. Era una declaración de intenciones.',
        highlight: {
          title: 'El Mensaje Eterno',
          text: 'Ese titular del Times está grabado PARA SIEMPRE en la blockchain de Bitcoin. Nadie puede borrarlo. Cada vez que alguien mina el bloque génesis, lee ese mensaje: los bancos causan crisis, los gobiernos los rescatan con TU dinero, y la gente común paga la factura. Bitcoin nació como respuesta directa a esa injusticia.'
        }
      },
      {
        type: 'main',
        title: 'No es Solo Tecnología: Es Una Revolución Monetaria',
        content: 'Muchos piensan que Bitcoin es "solo tecnología" o "una inversión". Es mucho más profundo que eso. Por primera vez en 5,000 años, alguien resolvió un problema que parecía imposible: crear dinero que nadie pudiera corromper. Para entender por qué esto importa, recuerda las lecciones anteriores:',
        features: [
          { icon: AlertTriangle, title: 'El Problema del Dinero Fiat', text: 'Depende de promesas de políticos. TODOS los gobiernos eventualmente abusan del poder de imprimir. 100% de las monedas fiat en la historia han fracasado o se han devaluado masivamente.' },
          { icon: AlertTriangle, title: 'El Problema del Oro', text: 'Es difícil de transportar, dividir, verificar, y almacenar de forma segura. Los gobiernos lo han confiscado históricamente (USA en 1933). No funciona para la era digital.' },
          { icon: Zap, title: 'La Solución Bitcoin', text: 'Escasez absoluta como el oro (o mejor), pero completamente digital. Transportable a cualquier lugar del mundo en minutos. Imposible de confiscar si guardas bien tus llaves.' }
        ]
      },
      {
        type: 'main',
        title: 'Las 4 Innovaciones que Cambian Todo',
        content: 'Bitcoin combina varias innovaciones que, juntas, crean algo que nunca antes existió:',
        features: [
          { icon: Lock, title: '1. Escasez Digital Absoluta', text: 'Solo existirán **21 millones de Bitcoin**. NUNCA. JAMÁS. Esta cantidad está grabada en el código y nadie puede cambiarla—ni Satoshi, ni los mineros, ni ningún gobierno. Es la primera vez en la historia que existe algo verdaderamente escaso en el mundo digital. Antes de Bitcoin, todo lo digital podía copiarse infinitamente.' },
          { icon: Network, title: '2. Descentralización Real', text: 'No hay CEO de Bitcoin. No hay servidor central. No hay empresa que demandar o presionar. Miles de computadoras en más de 100 países mantienen la red simultáneamente. Para "apagar" Bitcoin, tendrías que apagar todas estas computadoras al mismo tiempo en todo el mundo—y otras nuevas aparecerían.' },
          { icon: Shield, title: '3. Inmutabilidad', text: 'Una vez que una transacción se confirma en la blockchain, es PERMANENTE. Nadie puede revertirla, censurarla, o modificarla. Ni Satoshi. Ni los mineros. Ni ningún gobierno. El historial de Bitcoin es matemáticamente inalterable.' },
          { icon: Globe, title: '4. Sin Fronteras ni Permisos', text: 'Puedes enviar $1 o $1 billón a cualquier país del mundo, 24/7, sin pedir permiso a nadie. No hay bancos que aprobar tu transacción. No hay límites arbitrarios. No hay "horario bancario". El dinero llega en minutos, no días.' }
        ]
      },
      {
        type: 'main',
        title: 'Entendiendo la Escasez: ¿Por Qué Solo 21 Millones?',
        content: 'La escasez de Bitcoin no es arbitraria—está matemáticamente garantizada por el código y el proceso de emisión:',
        features: [
          { icon: Clock, title: 'El Halving (Reducción a la Mitad)', text: 'Aproximadamente cada 4 años, la cantidad de Bitcoin nuevo que se crea se reduce A LA MITAD. En 2009, se creaban 50 BTC cada 10 minutos. Hoy (después de 4 halvings), se crean solo 3.125 BTC cada 10 minutos. En 2140, no se creará ninguno más.' },
          { icon: TrendingDown, title: 'Emisión Decreciente', text: 'A diferencia del dinero fiat (que se imprime cada vez MÁS), Bitcoin se emite cada vez MENOS. Es deflación programada vs inflación garantizada. Mientras los bancos centrales crean trillones, la emisión de Bitcoin se reduce matemáticamente.' },
          { icon: Lock, title: 'Verificación Distribuida', text: 'Miles de computadoras (nodos) en todo el mundo verifican constantemente que las reglas se cumplan. Si alguien intentara crear más de 21 millones, su versión sería rechazada por toda la red instantáneamente.' }
        ],
        highlight: {
          title: 'La Matemática de la Escasez',
          text: 'Solo 21 millones de Bitcoin para 8 mil millones de personas. Si cada millonario del mundo quisiera 1 BTC, no habría suficientes. Y cada 4 años, se vuelven más difíciles de obtener. Es la primera vez que la humanidad tiene acceso a escasez absoluta y verificable.'
        }
      },
      {
        type: 'comparison',
        title: 'Bitcoin vs Oro vs Dólar: La Comparación Definitiva',
        leftSide: {
          title: 'Oro (5,000 años de historia)',
          points: [
            'Escaso pero no absolutamente (se sigue minando)',
            'Difícil de dividir (no puedes pagar café con pepitas)',
            'Costoso de almacenar y asegurar',
            'Imposible de enviar por internet',
            'Confiscable (USA lo hizo en 1933)',
            'Difícil de verificar autenticidad',
            'Pesado y poco portable'
          ]
        },
        rightSide: {
          title: 'Bitcoin (Dinero del Siglo XXI)',
          points: [
            'Escasez ABSOLUTA (21 millones máximo, verificable)',
            'Divisible hasta 8 decimales (satoshis)',
            'Almacenable gratis en tu memoria (frase semilla)',
            'Enviable a cualquier lugar en minutos',
            'Imposible de confiscar sin tu clave',
            'Verificación instantánea y gratuita',
            'Cabe en tu bolsillo (o tu cabeza)'
          ]
        }
      },
      {
        type: 'main',
        title: 'Por Qué los Gobiernos NO Pueden Detener Bitcoin',
        content: 'China prohibió Bitcoin en 2013, 2017, 2019 y 2021. India lo prohibió y revirtió. Nigeria lo prohibió y es el país #2 en adopción per cápita. Turquía intentó restringirlo mientras su moneda colapsaba. ¿Por qué NINGUNA prohibición funciona?',
        features: [
          { icon: Network, title: 'No Hay Servidor que Cerrar', text: 'Bitcoin corre en más de 15,000 nodos en 100+ países. No hay "sede central", no hay CEO, no hay empresa. Para apagar Bitcoin tendrías que apagar internet en TODO el mundo simultáneamente.' },
          { icon: Shield, title: 'Criptografía de Grado Militar', text: 'Tus bitcoins están protegidos por la misma matemática que protege secretos nucleares. Romper una clave privada de Bitcoin tomaría más energía de la que produce el sol en toda su vida. No es exageración—es matemática.' },
          { icon: Users, title: 'Efecto de Red Imparable', text: 'Cada nuevo usuario hace a Bitcoin más valioso y más resistente. Ya hay más de 100 millones de usuarios globales. Prohibirlo es como prohibir el email en 1995—solo te quedas atrás mientras el mundo avanza.' },
          { icon: Globe, title: 'Internet es Global', text: 'Mientras exista internet, Bitcoin existe. Y si cierran internet, también cierran la economía moderna. Ningún gobierno puede permitirse eso.' }
        ],
        highlight: {
          title: 'El Precedente de China',
          text: 'China ha "prohibido" Bitcoin más de 10 veces desde 2013. Resultado: Bitcoin sigue funcionando perfectamente, ahora vale 100x más que en 2013, y millones de chinos siguen usándolo a través de VPNs. No puedes prohibir matemáticas.'
        }
      },
      {
        type: 'main',
        title: 'Bitcoin en Tiempos de Crisis: Casos Reales',
        content: 'Bitcoin no es teoría—está salvando vidas y fortunas ahora mismo:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela', text: 'Mientras el bolívar perdía 99.99% de su valor, los venezolanos que tenían Bitcoin preservaron su riqueza. Muchos pudieron emigrar llevando su dinero en una frase de 12 palabras memorizada—imposible de confiscar en la frontera.' },
          { icon: AlertTriangle, title: 'Ucrania 2022', text: 'Cuando Rusia invadió y los bancos cerraron, el gobierno ucraniano recibió $100+ millones en donaciones de Bitcoin en DÍAS. Dinero que llegó directo, sin intermediarios, sin demoras burocráticas.' },
          { icon: AlertTriangle, title: 'Líbano', text: 'Los bancos congelaron los ahorros de todos. La gente literalmente no podía acceder a SU dinero. Los que tenían Bitcoin seguían teniendo control total de sus fondos.' },
          { icon: AlertTriangle, title: 'Argentina', text: 'Con 140%+ de inflación, muchos argentinos convierten sus pesos a Bitcoin el mismo día de cobro. Es la única forma de que su salario no pierda valor mientras duermen.' }
        ]
      },
      {
        type: 'main',
        title: 'Lo Que Bitcoin NO Es',
        content: 'Es importante despejar mitos que impiden entender Bitcoin correctamente:',
        features: [
          { icon: AlertTriangle, title: 'NO es un "esquema para hacerse rico rápido"', text: 'Bitcoin es volátil a corto plazo. Puede subir 50% o bajar 50% en meses. NO es para el dinero que necesitas mañana. Es para proteger el valor de tu trabajo a LARGO PLAZO (5-10+ años).' },
          { icon: AlertTriangle, title: 'NO es "dinero de criminales"', text: 'Menos del 1% de transacciones de Bitcoin son ilícitas (vs 2-5% del sistema bancario tradicional). Y la blockchain es PÚBLICA—cada transacción queda registrada para siempre. Es el peor dinero posible para criminales.' },
          { icon: AlertTriangle, title: 'NO es "una burbuja"', text: 'Ha sido declarado "muerto" más de 450 veces desde 2010. Cada vez vuelve más fuerte. Las burbujas no sobreviven 15+ años, no son adoptadas por países como moneda legal, ni son compradas por fondos de inversión institucionales.' },
          { icon: AlertTriangle, title: 'NO necesitas comprar un Bitcoin entero', text: 'Bitcoin es divisible hasta 8 decimales. Puedes empezar con $10, $50, $100. Cada satoshi (0.00000001 BTC) es tuyo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Por Qué Bitcoin Importa Para TU Vida',
        items: [
          'Por primera vez en la historia, existe dinero que NINGÚN gobierno, banco o corporación puede devaluar, confiscar o censurar.',
          'No necesitas permiso de nadie para guardar y mover TU dinero. Tu banco puede cerrar. Tu gobierno puede colapsar. Tu Bitcoin sigue siendo tuyo.',
          'El halving reduce la emisión a la mitad cada 4 años. En abril 2024 fue el 4to halving. Cada vez hay menos Bitcoin nuevo, mientras la demanda crece.',
          'No es "inversión especulativa"—es protección contra un sistema monetario diseñado para empobrecerte lentamente a través de la inflación.',
          'La pregunta no es "¿debería comprar Bitcoin?" sino "¿cuánto de mi trabajo quiero proteger del sistema fiat que ya demostró que me está robando?"',
          'Empezar es más fácil de lo que crees. En las próximas lecciones aprenderás exactamente cómo hacerlo de forma segura.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué mensaje grabó Satoshi Nakamoto en el primer bloque de Bitcoin y por qué es significativo?',
          options: [
            { id: 'a', text: '"Hello World" - es tradición de programadores' },
            { id: 'b', text: 'Un titular sobre bancos siendo rescatados con dinero público - marcando que Bitcoin es una respuesta a la corrupción del sistema financiero' },
            { id: 'c', text: 'Su nombre real y dirección' },
            { id: 'd', text: 'Nada, el primer bloque estaba vacío' }
          ],
          correctAnswer: 'b',
          explanation: 'Satoshi grabó "Chancellor on brink of second bailout for banks" del Times del 3 de enero de 2009. Este mensaje permanece para siempre en la blockchain, declarando que Bitcoin nació como respuesta directa al rescate de bancos corruptos con dinero de los contribuyentes.'
        },
        {
          id: 'q2',
          question: '¿Por qué decimos que Bitcoin tiene "escasez digital absoluta" y por qué esto importa?',
          options: [
            { id: 'a', text: 'Porque es difícil de comprar' },
            { id: 'b', text: 'Porque el código garantiza matemáticamente que solo existirán 21 millones, verificado por miles de nodos, y nadie puede cambiar eso—a diferencia del dinero fiat que se imprime infinitamente' },
            { id: 'c', text: 'Porque Satoshi decidió ese número arbitrariamente y puede cambiarlo' },
            { id: 'd', text: 'Porque los mineros votan cada año sobre el límite' }
          ],
          correctAnswer: 'b',
          explanation: 'El límite de 21 millones está grabado en el código y verificado por más de 15,000 nodos globalmente. Cambiarlo requeriría que TODOS aceptaran—matemáticamente imposible. Es la primera vez que existe escasez absoluta en el mundo digital.'
        },
        {
          id: 'q3',
          question: '¿Qué es el "halving" de Bitcoin y por qué es importante para el valor a largo plazo?',
          options: [
            { id: 'a', text: 'Cuando el precio baja 50%' },
            { id: 'b', text: 'Cada 4 años la emisión de nuevos BTC se reduce a la mitad, creando deflación programada mientras el dinero fiat tiene inflación garantizada' },
            { id: 'c', text: 'Cuando los mineros dividen sus ganancias' },
            { id: 'd', text: 'Un error en el código que ocurre cada 4 años' }
          ],
          correctAnswer: 'b',
          explanation: 'El halving es deflación programada. En 2009 se creaban 50 BTC cada 10 min, ahora solo 3.125 BTC. Mientras los bancos centrales imprimen más cada año, Bitcoin produce MENOS. Para 2140, no habrá emisión nueva.'
        },
        {
          id: 'q4',
          question: 'China ha prohibido Bitcoin múltiples veces (2013, 2017, 2019, 2021). ¿Cuál fue el resultado?',
          options: [
            { id: 'a', text: 'Bitcoin desapareció en China y el precio colapsó' },
            { id: 'b', text: 'Bitcoin siguió funcionando perfectamente, vale 100x más que en 2013, y millones de chinos lo siguen usando con VPNs' },
            { id: 'c', text: 'Los mineros entregaron sus máquinas al gobierno' },
            { id: 'd', text: 'Se creó una versión china de Bitcoin controlada por el gobierno' }
          ],
          correctAnswer: 'b',
          explanation: 'No puedes prohibir matemáticas. Bitcoin no tiene servidor central que cerrar, corre en 100+ países. Cada prohibición china solo demostró que Bitcoin es imparable. El precio hoy es 100x mayor que en la primera prohibición.'
        },
        {
          id: 'q5',
          question: 'Un refugiado venezolano necesita cruzar la frontera con sus ahorros de toda la vida. ¿Cuál es la forma más segura?',
          options: [
            { id: 'a', text: 'Efectivo escondido en la ropa' },
            { id: 'b', text: 'Transferencia bancaria' },
            { id: 'c', text: 'Una frase semilla de 12 palabras memorizada que representa sus Bitcoin—imposible de confiscar porque existe solo en su mente' },
            { id: 'd', text: 'Joyas de oro' }
          ],
          correctAnswer: 'c',
          explanation: 'Miles de venezolanos han cruzado fronteras con su riqueza en Bitcoin, memorizada como 12-24 palabras. El efectivo se puede confiscar, las transferencias se pueden bloquear, el oro se puede detectar. Pero nadie puede quitarte lo que está en tu memoria.'
        },
        {
          id: 'q6',
          question: 'Si Bitcoin es tan bueno, ¿por qué el precio es tan volátil?',
          options: [
            { id: 'a', text: 'Porque es una estafa que eventualmente colapsará' },
            { id: 'b', text: 'Porque está en fase de adopción temprana—como cualquier tecnología nueva, el precio fluctúa mientras el mercado descubre su valor real a largo plazo' },
            { id: 'c', text: 'Porque los creadores manipulan el precio' },
            { id: 'd', text: 'Porque no tiene valor real' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin está en fase de "price discovery". Como internet en los 90s, el mercado aún está descubriendo su valor real. La volatilidad es el precio de la adopción temprana. A largo plazo (5-10 años), la tendencia histórica ha sido consistentemente alcista.'
        }
      ]
    }
  },
  5: {
    id: 5,
    title: '¿Qué es Blockchain?',
    level: 'Principiante',
    number: '5 de 20',
    duration: '25 minutos',
    type: 'Video + Texto',
    description: 'La blockchain es la tecnología que hace posible Bitcoin, pero ¿cómo funciona realmente? Aprende cómo miles de computadoras mantienen un registro que nadie puede falsificar, sin necesidad de confiar en ninguna autoridad central.',
    sections: [
      {
        type: 'intro',
        title: 'El Problema que Nadie Había Resuelto',
        content: 'Antes de la blockchain, había un problema fundamental en el mundo digital: **¿cómo pruebas que algo es tuyo si todo se puede copiar?** Si te mando una foto por email, yo sigo teniendo la foto y tú también la tienes. No puedo "enviarte" la foto de forma que yo deje de tenerla. Esto es un problema para el dinero digital. Si te "envío" un dólar digital, ¿cómo sabes que no me lo quedé también? ¿Cómo sabes que no se lo envié a otras 10 personas? Este es el famoso **"problema del doble gasto"** (double spending). Antes de Bitcoin, la única solución era un intermediario de confianza (un banco, PayPal, Visa) que lleva el registro de quién tiene qué. La blockchain resuelve esto sin intermediarios.',
        highlight: {
          title: 'El Avance Histórico',
          text: 'Satoshi Nakamoto resolvió un problema que científicos informáticos habían intentado resolver durante 30 años: crear escasez digital verificable sin necesidad de confiar en nadie. La blockchain es esa solución.'
        }
      },
      {
        type: 'main',
        title: 'La Analogía del Libro Contable Mágico',
        content: 'Imagina un libro de contabilidad con propiedades mágicas:',
        features: [
          { icon: Users, title: 'Miles de Copias Idénticas', text: 'Este libro no existe en un solo lugar. Existen miles de copias exactamente iguales, cada una en una computadora diferente en todo el mundo. Cuando escribes algo en una, automáticamente aparece en TODAS las demás.' },
          { icon: Lock, title: 'Tinta Indeleble', text: 'Una vez que escribes algo en este libro, es IMPOSIBLE borrarlo o modificarlo. La tinta se vuelve permanente después de unos minutos. Ni siquiera el creador del libro puede cambiar lo escrito.' },
          { icon: Link, title: 'Páginas Encadenadas', text: 'Cada página está matemáticamente conectada a la anterior. Si alguien intenta cambiar algo en la página 50, todas las páginas siguientes (51, 52, 53...) quedarían "rotas" y todos notarían la manipulación inmediatamente.' },
          { icon: Globe, title: 'Público y Transparente', text: 'Cualquier persona en el mundo puede ver el libro completo, verificar cualquier entrada, y confirmar que todo está en orden. No hay secretos.' }
        ],
        highlight: {
          title: '¿Ves el Poder?',
          text: 'Acabas de describir un sistema donde nadie puede mentir, nadie puede robar, y nadie puede censurar—porque TODOS tienen el mismo libro y TODOS pueden verificar. Eso es blockchain.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un "Bloque" y qué es la "Cadena"?',
        content: 'Vamos a descomponer el nombre "blockchain" (cadena de bloques):',
        features: [
          { icon: Layers, title: '¿Qué es un Bloque?', text: 'Un bloque es como una página del libro. Contiene un grupo de transacciones (por ejemplo: "Ana envió 0.5 BTC a Carlos", "Pedro envió 1 BTC a María"). En Bitcoin, un nuevo bloque se crea aproximadamente cada 10 minutos. En Solana, cada 400 milisegundos.' },
          { icon: Link, title: '¿Qué es la Cadena?', text: 'Cada bloque contiene una "huella digital" (hash) del bloque anterior. Esto los conecta en una CADENA. El bloque 100 contiene el hash del bloque 99, que contiene el hash del 98, y así hasta el bloque génesis (el primero).' },
          { icon: Shield, title: '¿Por Qué Esto Importa?', text: 'Si alguien intenta cambiar una transacción en el bloque 50, el hash de ese bloque cambia. Pero el bloque 51 tiene el hash VIEJO del bloque 50, así que ya no coincide. Tendrías que cambiar TODOS los bloques desde el 50 hasta el actual. Y hacerlo más rápido que toda la red. Prácticamente imposible.' }
        ]
      },
      {
        type: 'main',
        title: 'El Hash: La Huella Digital Matemática',
        content: 'El **hash** es el concepto más importante para entender por qué la blockchain es segura. Es una función matemática que convierte CUALQUIER cantidad de datos en un código de longitud fija.',
        features: [
          { icon: Zap, title: 'Ejemplo de Hash', text: 'Si escribes "Hola" y lo pasas por el algoritmo SHA-256 (el que usa Bitcoin), obtienes: "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969". Ese código ES el hash de "Hola".' },
          { icon: AlertTriangle, title: 'Cambio Mínimo = Hash Totalmente Diferente', text: 'Si cambias "Hola" por "hola" (solo la mayúscula), el hash es completamente diferente: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824". Ni un solo carácter igual.' },
          { icon: Lock, title: 'Irreversible', text: 'Es matemáticamente imposible reconstruir el dato original a partir del hash. Solo puedes ir de "Hola" → hash, nunca de hash → "Hola". Es una función de un solo sentido.' }
        ],
        highlight: {
          title: 'Aplicación en Blockchain',
          text: 'Cada bloque contiene el hash del bloque anterior. Esto significa que cada bloque está matemáticamente conectado a TODA la historia anterior. Cambiar algo del pasado requeriría recalcular TODOS los hashes de TODOS los bloques siguientes. Es computacionalmente imposible en la práctica.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo se Agrega un Nuevo Bloque? (Consenso)',
        content: 'Si miles de computadoras tienen el libro, ¿quién decide qué se escribe en la siguiente página? Aquí es donde entra el **mecanismo de consenso**—las reglas para que miles de desconocidos se pongan de acuerdo sin confiar entre sí.',
        features: [
          { icon: Cpu, title: 'Proof of Work (Bitcoin)', text: 'Los "mineros" compiten resolviendo un acertijo matemático extremadamente difícil. El primero en resolverlo gana el derecho de escribir el siguiente bloque (y recibir la recompensa). Esto requiere gastar electricidad real—es el "costo" de escribir en el libro.' },
          { icon: Lock, title: 'Proof of Stake (Solana, Ethereum)', text: 'En vez de gastar electricidad, los "validadores" ponen sus propias monedas como garantía. Si intentan hacer trampa, pierden su dinero. Es como un depósito de seguridad: "Apuesto mi dinero a que esta transacción es legítima".' },
          { icon: CheckCircle, title: 'El Resultado', text: 'Ambos sistemas logran lo mismo: un acuerdo entre desconocidos sin necesidad de confiar en nadie. Las reglas matemáticas reemplazan la confianza humana.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Proof of Work vs Proof of Stake',
        leftSide: {
          title: 'Proof of Work (Bitcoin)',
          points: [
            'Seguridad respaldada por energía física real',
            'Más probado en el tiempo (15+ años)',
            'Cualquiera puede minar (descentralizado)',
            'Alto consumo energético',
            'Bloques cada ~10 minutos',
            'Usado por: Bitcoin, Litecoin, Dogecoin'
          ]
        },
        rightSide: {
          title: 'Proof of Stake (Solana)',
          points: [
            'Seguridad respaldada por capital en riesgo',
            'Más eficiente energéticamente (99%+ menos)',
            'Necesitas tokens para validar',
            'Mucho más rápido',
            'Bloques cada ~400 milisegundos en Solana',
            'Usado por: Solana, Ethereum, Cardano'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Por Qué es Prácticamente Imposible Hackear?',
        content: 'Vamos a entender por qué atacar una blockchain como Bitcoin es económicamente absurdo:',
        features: [
          { icon: Shield, title: 'El Ataque del 51%', text: 'El único ataque teórico viable es controlar más del 50% del poder de cómputo (en PoW) o del stake (en PoS). Así podrías escribir bloques fraudulentos más rápido que el resto de la red.' },
          { icon: TrendingDown, title: 'El Costo es Absurdo', text: 'Para atacar Bitcoin necesitarías más poder de cómputo que todos los mineros del mundo combinados. Hoy eso costaría decenas de MILES DE MILLONES de dólares en hardware y electricidad. Y solo podrías hacer "double spend" de tus propias monedas, no robar las de otros.' },
          { icon: AlertTriangle, title: 'El Incentivo No Existe', text: 'Si gastas billones para atacar Bitcoin, el ataque se detectaría inmediatamente, el precio colapsaría, y tu botín valdría nada. Es más rentable usar ese poder de cómputo para minar honestamente.' }
        ],
        highlight: {
          title: 'La Genialidad del Diseño',
          text: 'Satoshi diseñó un sistema donde el comportamiento honesto siempre es más rentable que el comportamiento deshonesto. Los incentivos económicos protegen la red—no la confianza en la buena voluntad de nadie.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Nodo?',
        content: 'Un **nodo** es simplemente una computadora que tiene una copia completa de la blockchain y verifica que todo esté correcto.',
        features: [
          { icon: Server, title: 'Full Node', text: 'Tiene toda la historia de la blockchain desde el bloque génesis. Verifica CADA transacción y CADA bloque. No confía en nadie más—verifica todo por sí mismo. Cualquiera puede correr un full node en su casa.' },
          { icon: Cpu, title: 'Nodo Minero/Validador', text: 'Además de verificar, también CREA nuevos bloques. Estos son los que compiten para agregar la siguiente página al libro. Reciben recompensas por su trabajo.' },
          { icon: Smartphone, title: 'Light Node', text: 'No tiene toda la blockchain—solo los headers de los bloques. Confía en otros nodos para verificaciones detalladas. Es lo que usa tu wallet móvil.' }
        ],
        highlight: {
          title: '¿Por Qué Importan los Nodos?',
          text: 'Mientras más nodos independientes existan, más descentralizada y resistente es la red. Bitcoin tiene ~15,000+ nodos. Ethereum tiene ~10,000+. Solana tiene ~3,000+. Cada nodo es un "voto" que valida las reglas.'
        }
      },
      {
        type: 'main',
        title: 'Lo Que La Blockchain PUEDE y NO PUEDE Hacer',
        content: 'Es importante entender los límites de esta tecnología:',
        features: [
          { icon: CheckCircle, title: 'PUEDE: Probar Propiedad Digital', text: 'La blockchain puede probar irrefutablemente que ciertos tokens están en cierta dirección. Es un registro de propiedad incorruptible.' },
          { icon: CheckCircle, title: 'PUEDE: Ejecutar Reglas Automáticamente', text: 'Los "smart contracts" son programas que se ejecutan en la blockchain. Si pasa X, automáticamente ocurre Y. Sin intermediarios que puedan decir "no".' },
          { icon: AlertTriangle, title: 'NO PUEDE: Garantizar Verdad del Mundo Real', text: 'La blockchain sabe que "Ana tiene 1 BTC". No sabe si "Ana dice la verdad sobre su producto". Si alguien mete datos falsos, la blockchain los guardará fielmente (garbage in, garbage out).' },
          { icon: AlertTriangle, title: 'NO PUEDE: Ser Perfectamente Rápida Y Descentralizada', text: 'Hay un "trilema": puedes tener máximo 2 de 3 entre Seguridad, Descentralización, y Escalabilidad. Bitcoin elige seguridad y descentralización (lento). Solana elige escalabilidad y seguridad (menos descentralizado que Bitcoin).' }
        ]
      },
      {
        type: 'main',
        title: 'El Trilema de la Blockchain',
        content: 'Vitalik Buterin (creador de Ethereum) describió el **trilema de la blockchain**: ninguna blockchain puede maximizar simultáneamente las tres propiedades:',
        features: [
          { icon: Shield, title: 'Seguridad', text: '¿Qué tan difícil es atacar la red? Bitcoin es extremadamente seguro—tiene 15 años sin un ataque exitoso.' },
          { icon: Network, title: 'Descentralización', text: '¿Cuántos nodos independientes mantienen la red? ¿Qué tan distribuido está el poder?' },
          { icon: Zap, title: 'Escalabilidad', text: '¿Cuántas transacciones por segundo puede procesar? ¿Qué tan barato es usarla?' }
        ],
        highlight: {
          title: 'Las Elecciones',
          text: 'Bitcoin maximiza seguridad y descentralización, sacrificando velocidad (~7 TPS). Solana maximiza escalabilidad y seguridad, requiriendo hardware más potente para los validadores (menos descentralizado). No hay solución perfecta—solo trade-offs.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'La blockchain resuelve el problema del doble gasto: permite probar propiedad digital sin intermediarios de confianza.',
          'Es un libro contable distribuido en miles de computadoras, donde cada "página" (bloque) está matemáticamente conectada a la anterior.',
          'El hash es la "huella digital" que conecta los bloques. Cambiar algo del pasado requeriría recalcular TODOS los hashes siguientes.',
          'Los mecanismos de consenso (Proof of Work, Proof of Stake) permiten que desconocidos se pongan de acuerdo sin confiar entre sí.',
          'El ataque del 51% es teóricamente posible pero económicamente absurdo—es más rentable ser honesto.',
          'Los nodos son las computadoras que verifican todo. Más nodos = más descentralización = más resistencia a censura.',
          'Existe un "trilema": ninguna blockchain puede ser máxima en seguridad, descentralización y escalabilidad simultáneamente.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Antes de Bitcoin, ¿cuál era el único método conocido para evitar que alguien "gastara dos veces" el mismo dinero digital?',
          options: [
            { id: 'a', text: 'No existía dinero digital' },
            { id: 'b', text: 'Un intermediario de confianza (banco, PayPal) que lleva el registro de quién tiene qué' },
            { id: 'c', text: 'La policía' },
            { id: 'd', text: 'Contraseñas muy seguras' }
          ],
          correctAnswer: 'b',
          explanation: 'El "problema del doble gasto" requería un intermediario central de confianza. La blockchain de Bitcoin fue la primera solución descentralizada: miles de nodos verifican independientemente que nadie gaste lo que no tiene.'
        },
        {
          id: 'q2',
          question: 'El hash del texto "Hola" es completamente diferente al hash de "hola". ¿Por qué esto es crucial para la seguridad de la blockchain?',
          options: [
            { id: 'a', text: 'No es importante, es solo un detalle técnico' },
            { id: 'b', text: 'Porque cualquier cambio mínimo en un bloque cambia su hash, rompiendo la conexión con todos los bloques siguientes y haciendo el fraude detectable inmediatamente' },
            { id: 'c', text: 'Porque hace que los hashes sean más largos' },
            { id: 'd', text: 'Para que nadie pueda leerlos' }
          ],
          correctAnswer: 'b',
          explanation: 'La sensibilidad extrema del hash significa que cualquier manipulación—por pequeña que sea—es inmediatamente visible. Un solo bit cambiado produce un hash completamente diferente, alertando a toda la red.'
        },
        {
          id: 'q3',
          question: 'Un hacker quiere modificar una transacción que ocurrió hace 100 bloques en Bitcoin. ¿Qué tendría que hacer?',
          options: [
            { id: 'a', text: 'Hackear la computadora de Satoshi' },
            { id: 'b', text: 'Cambiar ese bloque y luego recalcular y reescribir los 100 bloques siguientes, más rápido que toda la red mundial de mineros combinada' },
            { id: 'c', text: 'Pedirle permiso a los mineros' },
            { id: 'd', text: 'Simplemente editar la transacción en la base de datos' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada bloque contiene el hash del anterior. Cambiar un bloque antiguo requiere recalcular TODOS los bloques siguientes y hacerlo más rápido que el resto de la red. Con el hashrate actual de Bitcoin, esto es físicamente imposible.'
        },
        {
          id: 'q4',
          question: 'Bitcoin usa Proof of Work, Solana usa Proof of Stake. ¿Cuál es la diferencia fundamental?',
          options: [
            { id: 'a', text: 'No hay diferencia, son lo mismo' },
            { id: 'b', text: 'PoW gasta energía real para crear bloques; PoS pone dinero (tokens) como garantía' },
            { id: 'c', text: 'PoW es legal y PoS es ilegal' },
            { id: 'd', text: 'PoW es nuevo y PoS es viejo' }
          ],
          correctAnswer: 'b',
          explanation: 'Ambos son mecanismos para que desconocidos se pongan de acuerdo sin confianza. PoW "prueba" honestidad con electricidad gastada. PoS "prueba" honestidad con capital en riesgo. Diferentes trade-offs, mismo objetivo.'
        },
        {
          id: 'q5',
          question: '¿Por qué no tiene sentido económico ejecutar un ataque del 51% contra Bitcoin?',
          options: [
            { id: 'a', text: 'Porque es ilegal' },
            { id: 'b', text: 'Porque costaría decenas de billones de dólares, sería detectado inmediatamente, el precio colapsaría, y tu botín valdría nada' },
            { id: 'c', text: 'Porque Satoshi lo impediría' },
            { id: 'd', text: 'Porque los mineros son muy amigables' }
          ],
          correctAnswer: 'b',
          explanation: 'Satoshi diseñó un sistema donde la honestidad siempre es más rentable. Si gastas billones en atacar, el ataque se detecta, el precio colapsa, y pierdes todo. Es más rentable usar ese poder de cómputo para minar honestamente.'
        },
        {
          id: 'q6',
          question: '¿Qué es el "trilema de la blockchain"?',
          options: [
            { id: 'a', text: 'Un problema de programación' },
            { id: 'b', text: 'Que ninguna blockchain puede maximizar simultáneamente seguridad, descentralización y escalabilidad—debe sacrificar al menos una' },
            { id: 'c', text: 'Un tipo de ataque' },
            { id: 'd', text: 'Una criptomoneda nueva' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin elige seguridad y descentralización (lento, 7 TPS). Solana elige seguridad y escalabilidad (menos nodos, pero 65,000 TPS). No hay blockchain perfecta—solo diferentes trade-offs para diferentes usos.'
        }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Descentralización vs Centralización',
    level: 'Principiante',
    number: '6 de 20',
    duration: '22 minutos',
    type: 'Video + Texto',
    description: '¿Por qué importa que nadie tenga el control? La descentralización no es solo un buzzword técnico—es la diferencia entre libertad y permiso, entre propiedad real y acceso revocable. Entiende los trade-offs reales.',
    sections: [
      {
        type: 'intro',
        title: 'La Pregunta Fundamental: ¿Quién Tiene el Poder?',
        content: 'Cada sistema que usas para manejar tu dinero o tus datos tiene una arquitectura de poder. Alguien, en algún lugar, puede presionar un botón y cambiar las reglas. La pregunta es: **¿quién tiene ese botón?** En los sistemas tradicionales (tu banco, tu red social, tu gobierno), ese botón lo tiene una entidad central. Pueden congelar tu cuenta, censurar tu contenido, o cambiar las reglas sin tu permiso. En los sistemas descentralizados (Bitcoin, Solana), ese botón está distribuido entre miles de participantes. Nadie individualmente puede presionarlo. Esa distribución del poder es lo que llamamos **descentralización**.',
        highlight: {
          title: 'No es Teoría—Es Tu Realidad',
          text: 'En 2022, Canadá congeló las cuentas bancarias de personas que donaron $50 a protestas de camioneros. Sin juicio, sin apelación. Un burócrata decidió. Si esas donaciones hubieran sido en Bitcoin, nadie podría haberlas congelado. Esa es la diferencia práctica.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Significa Realmente "Centralizado"?',
        content: 'Un sistema centralizado tiene un único punto de control. Una autoridad que puede tomar decisiones unilaterales sobre todos los participantes.',
        features: [
          { icon: Landmark, title: 'Tu Banco', text: 'El banco puede congelar tu cuenta, rechazar transferencias, reportarte a las autoridades, cobrarte comisiones arbitrarias, o simplemente cerrar tu cuenta "por política interna". No necesitan tu permiso.' },
          { icon: Server, title: 'Facebook/Instagram', text: 'Meta puede borrar tu cuenta con 10 años de fotos, censurarte sin explicación, cambiar el algoritmo para que nadie vea tu contenido, o vender tus datos. Aceptaste los "términos y condiciones".' },
          { icon: Globe, title: 'Tu Gobierno', text: 'Puede devaluar tu moneda imprimiendo más, confiscar tus activos "por el bien común", impedirte sacar tu dinero del país, o cambiar las leyes retroactivamente.' },
          { icon: Smartphone, title: 'Apple/Google', text: 'Pueden eliminar apps de sus tiendas (y de tu teléfono), bloquearte de sus servicios, o cambiar las reglas de un día para otro.' }
        ],
        highlight: {
          title: 'El Patrón Común',
          text: 'En todos estos casos, TÚ eres un usuario con acceso REVOCABLE. Ellos son los dueños con control TOTAL. Tu relación con tu dinero/datos depende de su buena voluntad. No tienes derechos—tienes permisos.'
        }
      },
      {
        type: 'main',
        title: 'Casos Reales de Abuso Centralizado',
        content: 'Esto no es paranoia ni teoría conspirativa. Son eventos documentados que ya ocurrieron:',
        features: [
          { icon: AlertTriangle, title: 'Canadá 2022', text: 'El gobierno invocó la Ley de Emergencias y ordenó a los bancos congelar cuentas de personas que donaron a protestas. Sin orden judicial. Sin proceso legal. Miles de ciudadanos perdieron acceso a su dinero por decisión ejecutiva.' },
          { icon: AlertTriangle, title: 'Grecia 2015', text: 'El gobierno impuso un "corralito": límite de €60/día en retiros. La gente hacía filas para sacar migajas de su propio dinero. Las cuentas estaban congeladas "temporalmente" durante semanas.' },
          { icon: AlertTriangle, title: 'Chipre 2013', text: 'El gobierno confiscó hasta 47.5% de los depósitos mayores a €100,000 para "rescatar" a los bancos. Un día tenías €200,000, al siguiente tenías €105,000. Así de simple.' },
          { icon: AlertTriangle, title: 'China (continuo)', text: 'El "social credit score" afecta acceso a servicios financieros. Si el gobierno no aprueba tu comportamiento, puedes perder acceso a crédito, viajes, o incluso tu cuenta bancaria.' },
          { icon: AlertTriangle, title: 'Nigeria 2021', text: 'El banco central prohibió a los bancos procesar transacciones cripto. De un día para otro, millones perdieron acceso a una industria completa. Por decreto.' },
          { icon: AlertTriangle, title: 'PayPal (frecuente)', text: 'Congela cuentas por "actividad sospechosa" y retiene fondos durante meses. No hay recurso efectivo—estás a su merced.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Significa Realmente "Descentralizado"?',
        content: 'Un sistema descentralizado distribuye el poder entre muchos participantes independientes. Ninguno individualmente puede controlar el sistema o cambiar las reglas unilateralmente.',
        features: [
          { icon: Network, title: 'Miles de Nodos', text: 'Bitcoin tiene ~15,000 nodos en todo el mundo. Cada uno verifica independientemente TODAS las transacciones. Para "hackear" Bitcoin, necesitarías comprometer miles de computadoras en decenas de países simultáneamente.' },
          { icon: Users, title: 'Nadie es "El Jefe"', text: 'No hay CEO de Bitcoin. No hay sede central. No hay servidor principal. Satoshi desapareció hace años y la red sigue funcionando perfectamente. El sistema no depende de ninguna persona o empresa.' },
          { icon: Lock, title: 'Reglas Inmutables', text: 'Las reglas de Bitcoin (21 millones máximo, halving cada 4 años, etc.) están grabadas en el código que ejecutan TODOS los nodos. Cambiarlas requeriría que todos se pongan de acuerdo—algo que no pasa.' },
          { icon: Shield, title: 'Resistencia a Censura', text: 'Si el gobierno de USA ordena censurar ciertas transacciones, los nodos en Japón, Brasil, Nigeria y otros 100 países las procesarán igual. No hay jurisdicción única que pueda censurar Bitcoin.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Centralizado vs Descentralizado: Comparación Directa',
        leftSide: {
          title: 'Sistema Centralizado (Tu Banco)',
          points: [
            'Una entidad controla todo',
            'Puede congelar tu cuenta sin tu permiso',
            'Puede cambiar las reglas unilateralmente',
            'Único punto de fallo: si el servidor cae, todo cae',
            'Eficiente y rápido',
            'Requiere confiar en la entidad central',
            'Tu "propiedad" es realmente un permiso revocable'
          ]
        },
        rightSide: {
          title: 'Sistema Descentralizado (Bitcoin)',
          points: [
            'Miles de participantes independientes',
            'NADIE puede congelar tu wallet',
            'Cambiar reglas requiere consenso casi imposible',
            'Sin punto único de fallo: si un nodo cae, hay 14,999 más',
            'Puede ser más lento (pero mejorando)',
            'No necesitas confiar en nadie específico',
            'Tu propiedad es TUYA si controlas tus llaves'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Espectro de la Descentralización',
        content: 'La descentralización no es binaria—es un espectro. Diferentes proyectos hacen diferentes trade-offs:',
        features: [
          { icon: Lock, title: 'Bitcoin: Máxima Descentralización', text: '~15,000 nodos. Cualquiera con $300 en hardware puede correr uno. Cambios de protocolo requieren años de debate y consenso casi unánime. Inmunidad casi total a censura y captura.' },
          { icon: Zap, title: 'Solana: Descentralización Pragmática', text: '~3,000 validadores. Requiere hardware más potente (~$5,000+). Más fácil de coordinar cambios. Trade-off consciente: menos descentralización a cambio de 65,000+ TPS y fees de centavos.' },
          { icon: Server, title: 'Ethereum: Término Medio', text: '~10,000 nodos. Hardware moderado. Transición a Proof of Stake completada. Balance entre descentralización y escalabilidad.' },
          { icon: AlertTriangle, title: 'Binance Smart Chain: Más Centralizada', text: '21 validadores aprobados por Binance. Muy eficiente pero dependiente de una empresa. Si Binance quiere censurar algo, puede hacerlo.' }
        ],
        highlight: {
          title: 'No Hay Respuesta "Correcta"',
          text: 'Bitcoin prioriza descentralización absoluta para ser "oro digital" inconfiscable. Solana prioriza velocidad para aplicaciones de consumo masivo. Ethereum intenta un balance. Cada uno tiene su lugar.'
        }
      },
      {
        type: 'main',
        title: 'El Coeficiente de Nakamoto',
        content: 'Para medir descentralización de forma objetiva, existe el **Coeficiente de Nakamoto**: el número mínimo de entidades que necesitarían coordinarse para comprometer el sistema.',
        features: [
          { icon: Landmark, title: 'Tu Banco: Coeficiente = 1', text: 'Una sola entidad (el banco, o el gobierno que lo regula) puede hacer lo que quiera con tu cuenta.' },
          { icon: Network, title: 'Bitcoin: Coeficiente = Muy Alto', text: 'Para controlar 51% del hashrate necesitarías coordinación de los 4-5 pools de minería más grandes, ubicados en diferentes países con diferentes jurisdicciones e incentivos.' },
          { icon: Zap, title: 'Solana: Coeficiente = ~19-31', text: 'Se necesitarían ~31 validadores coordinándose para controlar 33% del stake (suficiente para detener la red). Es menor que Bitcoin, pero sigue siendo resistente.' },
          { icon: AlertTriangle, title: 'BSC: Coeficiente = ~7', text: 'Solo ~7 de los 21 validadores necesitarían coordinarse. Y todos están aprobados por Binance. Mucho más centralizado.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Trade-offs Honestos de la Descentralización',
        content: 'Sería deshonesto decir que la descentralización no tiene costos. Tiene trade-offs reales que debes entender:',
        features: [
          { icon: TrendingDown, title: 'Puede Ser Más Lenta', text: 'Coordinar miles de nodos toma más tiempo que un servidor central. Bitcoin confirma cada 10 minutos. Tu banco confirma en segundos. Aunque Solana resuelve esto (400ms), sigue siendo un trade-off arquitectónico.' },
          { icon: TrendingDown, title: 'Puede Ser Más Cara', text: 'En momentos de congestión, las fees de Ethereum han llegado a $50-100 por transacción. La descentralización tiene costo de coordinación.' },
          { icon: TrendingDown, title: 'No Hay "Soporte al Cliente"', text: 'Si pierdes tus llaves, nadie puede ayudarte. No hay "recuperar contraseña". La auto-soberanía implica auto-responsabilidad.' },
          { icon: TrendingDown, title: 'La Gobernanza es Lenta', text: 'Cambios en Bitcoin toman años de debate. No hay CEO que diga "esto se hace así". Puede ser frustrante cuando se necesitan mejoras urgentes.' }
        ],
        highlight: {
          title: 'La Pregunta Correcta',
          text: '¿Estás dispuesto a aceptar estos trade-offs a cambio de propiedad real, resistencia a censura, y libertad de permiso? Para muchos, la respuesta es sí. Para otros, no. Ambas respuestas son válidas—lo importante es entender qué estás eligiendo.'
        }
      },
      {
        type: 'main',
        title: '¿Solana es "Suficientemente" Descentralizada?',
        content: 'Esta es una pregunta frecuente y legítima. Vamos a analizarla honestamente:',
        features: [
          { icon: AlertTriangle, title: 'Las Críticas Válidas', text: 'Solana ha tenido varias "caídas" donde la red se detuvo y requirió reinicio coordinado de validadores. Esto sugiere cierta centralización operativa. El hardware requerido para validar es costoso, lo que limita quién puede participar.' },
          { icon: CheckCircle, title: 'La Defensa Válida', text: 'Solana tiene ~3,000 validadores en múltiples países y jurisdicciones. Ninguna entidad única controla la red. Las caídas fueron bugs técnicos, no censura deliberada. La red sigue siendo permissionless: cualquiera puede transaccionar.' },
          { icon: Zap, title: 'El Trade-off Consciente', text: 'Solana prioriza escalabilidad para aplicaciones de consumo masivo. Si quieres la descentralización máxima de Bitcoin, usa Bitcoin. Si quieres 65,000 TPS y fees de centavos para DeFi y pagos, usa Solana.' }
        ],
        highlight: {
          title: 'La Perspectiva Correcta',
          text: 'Solana no pretende ser Bitcoin. Pretende ser la blockchain donde corren las aplicaciones del futuro. Es significativamente más descentralizada que cualquier alternativa de Web2 (Visa, AWS, etc.). Para sus casos de uso, el trade-off es razonable.'
        }
      },
      {
        type: 'main',
        title: 'Custodial vs No-Custodial: Donde La Descentralización Te Afecta',
        content: 'La descentralización de una red no importa si TÚ no controlas tus llaves. Aquí es donde esto se vuelve personal:',
        features: [
          { icon: AlertTriangle, title: 'Exchange Centralizado (Binance, Coinbase)', text: 'Aunque Bitcoin sea descentralizado, si tienes tu BTC en Binance, Binance tiene las llaves. Pueden congelarte, quebrar, o ser hackeados. El colapso de FTX demostró esto: millones perdieron todo.' },
          { icon: CheckCircle, title: 'Wallet No-Custodial (Phantom, Ledger)', text: 'TÚ tienes las llaves. Nadie puede congelar tu wallet. Nadie puede confiscar tus fondos. Si Phantom (la empresa) desaparece mañana, tus fondos siguen ahí—solo necesitas otra wallet compatible.' }
        ],
        highlight: {
          title: 'La Regla de Oro',
          text: '"Not your keys, not your coins" (No son tus llaves, no son tus monedas). La descentralización solo te protege si EJERCES esa descentralización teniendo tus propias llaves. Si las tiene un exchange, estás en un sistema centralizado con piel de cripto.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Centralización significa que alguien tiene el poder de cambiarte las reglas sin tu permiso. En tu banco, en tus redes sociales, en tu gobierno.',
          'Descentralización distribuye ese poder entre muchos participantes independientes. Nadie individualmente puede controlarte o censurarte.',
          'Los abusos de sistemas centralizados son reales y frecuentes: Canadá 2022, Grecia 2015, Chipre 2013, China hoy, PayPal constantemente.',
          'La descentralización es un espectro: Bitcoin es máximo, Solana es pragmático, BSC es mínimo. Diferentes trade-offs para diferentes usos.',
          'Los costos de la descentralización son reales: puede ser más lenta, más cara, sin "soporte al cliente". Es el precio de la libertad.',
          'Solana hace un trade-off consciente: menos descentralización que Bitcoin a cambio de velocidad y escalabilidad. Para sus casos de uso, es razonable.',
          '"Not your keys, not your coins": la descentralización de la red no te protege si tus llaves están en un exchange centralizado.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'En 2022, Canadá congeló cuentas bancarias de personas que donaron a protestas. ¿Por qué esto NO podría pasar con Bitcoin en una wallet no-custodial?',
          options: [
            { id: 'a', text: 'Porque Bitcoin es ilegal en Canadá' },
            { id: 'b', text: 'Porque no hay entidad central que pueda ejecutar la orden—miles de nodos en 100+ países seguirían procesando transacciones' },
            { id: 'c', text: 'Porque Satoshi lo impediría' },
            { id: 'd', text: 'Porque Canadá no sabe de Bitcoin' }
          ],
          correctAnswer: 'b',
          explanation: 'Un sistema descentralizado no tiene "el botón" que un gobierno pueda presionar. Los nodos en Japón, Brasil, y otros 100 países no obedecen al gobierno canadiense. Esa es resistencia a censura.'
        },
        {
          id: 'q2',
          question: 'Tienes 10,000 USD en Bitcoin. ¿Dónde estás MÁS protegido por la descentralización?',
          options: [
            { id: 'a', text: 'En tu cuenta de Binance' },
            { id: 'b', text: 'En tu cuenta de Coinbase' },
            { id: 'c', text: 'En una wallet hardware (Ledger) donde TÚ controlas las llaves privadas' },
            { id: 'd', text: 'En cualquier exchange—todos son iguales' }
          ],
          correctAnswer: 'c',
          explanation: '"Not your keys, not your coins". En Binance o Coinbase, ELLOS tienen las llaves. Pueden congelarte, quebrar, o ser hackeados. En un Ledger, TÚ tienes las llaves. Nadie más puede tocar tus fondos.'
        },
        {
          id: 'q3',
          question: '¿Por qué Solana tiene "solo" ~3,000 validadores mientras Bitcoin tiene ~15,000 nodos?',
          options: [
            { id: 'a', text: 'Porque Solana es una estafa' },
            { id: 'b', text: 'Porque nadie quiere validar Solana' },
            { id: 'c', text: 'Porque validar Solana requiere hardware más potente ($5,000+), un trade-off consciente para lograr mayor velocidad' },
            { id: 'd', text: 'Porque Solana es nueva' }
          ],
          correctAnswer: 'c',
          explanation: 'Solana prioriza escalabilidad (65,000 TPS, fees de centavos). Para lograrlo, requiere hardware potente que menos personas pueden costear. Es un trade-off explícito, no un defecto. Bitcoin hace el trade-off opuesto: cualquiera con $300 puede correr un nodo.'
        },
        {
          id: 'q4',
          question: '¿Qué es el Coeficiente de Nakamoto?',
          options: [
            { id: 'a', text: 'El precio de Bitcoin' },
            { id: 'b', text: 'El número mínimo de entidades que necesitarían coordinarse para comprometer un sistema' },
            { id: 'c', text: 'La cantidad de Bitcoin que tiene Satoshi' },
            { id: 'd', text: 'Una medida de velocidad' }
          ],
          correctAnswer: 'b',
          explanation: 'El Coeficiente de Nakamoto mide descentralización objetivamente. Tu banco = 1 (una entidad decide todo). Bitcoin = muy alto (necesitarías coordinar múltiples pools de minería en diferentes países). Mayor número = más descentralizado.'
        },
        {
          id: 'q5',
          question: 'Un crítico dice: "La descentralización es ineficiente, los sistemas centralizados son mejores". ¿Cuál es la respuesta más honesta?',
          options: [
            { id: 'a', text: 'Es falso, la descentralización es siempre mejor' },
            { id: 'b', text: 'Es parcialmente cierto: la descentralización TIENE costos (velocidad, complejidad), pero a cambio obtienes propiedad real y resistencia a censura. Es un trade-off, no superioridad absoluta.' },
            { id: 'c', text: 'La descentralización es solo para criminales' },
            { id: 'd', text: 'Los sistemas centralizados nunca fallan' }
          ],
          correctAnswer: 'b',
          explanation: 'La honestidad requiere reconocer los trade-offs. La descentralización puede ser más lenta, más cara, y sin "soporte al cliente". El beneficio es que NADIE puede quitarte lo tuyo o censurarte. Cada persona decide si el trade-off vale la pena para su situación.'
        },
        {
          id: 'q6',
          question: 'FTX era un exchange "cripto" que colapsó en 2022 y millones perdieron sus fondos. ¿Qué lección demuestra esto sobre la descentralización?',
          options: [
            { id: 'a', text: 'Que las criptomonedas son una estafa' },
            { id: 'b', text: 'Que la descentralización de Bitcoin/Solana no te protege si TÚ usas un intermediario centralizado (exchange) que tiene tus llaves' },
            { id: 'c', text: 'Que debes usar exchanges más grandes' },
            { id: 'd', text: 'Que el gobierno debería regular más' }
          ],
          correctAnswer: 'b',
          explanation: 'FTX no era descentralizado—era un intermediario centralizado con el MISMO modelo de tu banco: ellos controlan las llaves, tú confías en ellos. La blockchain de Bitcoin siguió funcionando perfectamente. Los que perdieron fueron los que dejaron sus fondos en FTX en vez de en wallets propias.'
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