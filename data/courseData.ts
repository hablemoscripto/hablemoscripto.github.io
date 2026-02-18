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
  Award,
  Target,
  Brain,
  Eye,
  Crosshair
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
    lessons: 19,
    duration: '~8h'
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
        { id: 41, title: 'Stablecoins: Tu Dólar Digital', description: 'Qué son USDC y USDT, cómo funcionan, y los riesgos que nadie te cuenta.', duration: '20 min', type: 'Concepto Clave' },
        { id: 42, title: 'DCA: Invierte Sin Estrés', description: 'La estrategia más simple y poderosa para construir riqueza a largo plazo.', duration: '15 min', type: 'Estrategia' },
        { id: 43, title: 'Bitcoin vs Altcoins: Qué Comprar Primero', description: 'Entiende el rol de BTC como reserva de valor vs SOL y ETH como plataformas.', duration: '18 min', type: 'Comparativa' },
        { id: 44, title: 'Tu Plan de Inversión Personal', description: 'Junta todo lo aprendido: portafolio, DCA, seguridad y metas claras.', duration: '20 min', type: 'Práctica' },
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
    lessons: 11,
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
    number: '1 de 19',
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
        imageAlt: 'Las 6 propiedades del dinero perfecto: escasez, divisibilidad, durabilidad, portabilidad, fungibilidad y verificabilidad',
        imageSummary: 'Si no es escaso, pierde valor. Si no es divisible, no sirve para compras pequeñas. Si no es durable, desaparece. Si no es portable, no puedes usarlo. Si no es fungible, cada unidad vale distinto. Si no es verificable, pueden engañarte. El oro cumplió estas 6 por milenios. El dinero fiat falla en la primera.'
      },
      {
        type: 'main',
        title: 'El Experimento de 5,000 Años: Del Trueque al Oro',
        content: 'La humanidad probó de todo antes de encontrar el oro:',
        image: '/images/lessons/lesson-1/lesson1-2.webp',
        imageAlt: 'El experimento de 5,000 años: del trueque al oro - conchas, sal, ganado y oro',
        imageSummary: 'Conchas, sal, ganado—todos fallaron por la misma razón: alguien encontró la forma de crear más. El oro ganó porque nadie puede imprimirlo. No fue decreto de ningún rey. Fue selección natural del mercado durante 5,000 años.'
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
          text: 'Desde 1971, el dólar ha perdido aproximadamente el 87% de su poder adquisitivo. Una casa que costaba $25,000 en 1971 hoy cuesta $400,000+. Un auto que costaba $3,500 hoy cuesta $48,000. No es que las cosas sean mejores—es que tu dinero vale menos.'
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
          { icon: TrendingDown, title: 'Dato Histórico', text: 'A lo largo de la historia, ninguna moneda fiat ha mantenido su valor a largo plazo. Los imperios romano, otomano, español y británico todos degradaron sus monedas. El dólar actual lleva 54 años sin respaldo en oro desde 1971—y ha perdido el 87% de su poder adquisitivo en ese periodo.' }
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
    number: '2 de 19',
    duration: '22 minutos',
    type: 'Video + Gráficos',
    description: 'Te han enseñado que la inflación es "natural" y "necesaria". Es mentira. La inflación es una política deliberada que transfiere tu riqueza a otros mientras duermes. Aprende cómo funciona realmente la máquina de crear dinero.',
    sections: [
      {
        type: 'intro',
        title: 'El Robo Silencioso que Nadie Te Explicó',
        content: 'Tu abuela podía comprar una casa con el sueldo de 3 años. Hoy necesitas 15 años o más. ¿La gente de antes trabajaba más duro? ¿Las casas de hoy son 5 veces mejores? No. La diferencia es simple: **tu dinero vale menos cada año**. La inflación no es un fenómeno natural como el clima. No es inevitable. Es una **política deliberada** de los gobiernos que, año tras año, transfiere riqueza silenciosamente de los que ahorran a los que imprimen y a los que reciben el dinero nuevo primero.',
        image: '/images/lessons/lesson-2/lesson2-5.webp',
        imageAlt: 'El Dato que Deberías Tatuarte: En 1971 un salario mínimo compraba 5 onzas de oro, hoy compra 0.15 onzas - 97% menos poder adquisitivo',
        imageSummary: 'En 1971: $1.60/hora compraba 5 onzas de oro. Hoy: $7.25/hora compra 0.15 onzas. El sueldo subió 4.5x en números, pero tu poder REAL cayó 97%. No trabajamos menos—nos pagan en dinero que vale menos. Este es el robo silencioso de la inflación.'
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
        imageAlt: 'Cómo el banco central crea dinero de la nada',
        imageSummary: 'No hay caja fuerte. No hay oro. Solo un funcionario, un teclado, y la autoridad para agregar ceros. En 2020, la Fed creó $4.5 TRILLONES así—dinero que no existía el día anterior. Ese "dinero" ahora compite con el tuyo por los mismos bienes.'
      },
      {
        type: 'main',
        title: '2. Los Bancos Multiplican (Reserva Fraccionaria)',
        image: '/images/lessons/lesson-2/lesson2-2.webp',
        imageAlt: 'Sistema de reserva fraccionaria y multiplicación del dinero',
        imageSummary: 'Depositas $100. El banco guarda $10 y presta $90. Ese préstamo se deposita en otro banco, que guarda $9 y presta $81. Y así sucesivamente. Tus $100 "seguros" se convierten en $900+ de deuda circulando. Si todos fueran a retirar su dinero mañana, no existe.'
      },
      {
        type: 'main',
        title: '3. El Resultado Matemático',
        image: '/images/lessons/lesson-2/lesson2-3.webp',
        imageAlt: 'El resultado matemático de la creación de dinero',
        imageSummary: 'La inflación no es un fenómeno misterioso. Es aritmética: más dinero persiguiendo los mismos bienes = precios más altos. El ladrón no entra por tu ventana—entra por la impresora del banco central y te roba mientras duermes, año tras año.'
      },
      {
        type: 'main',
        title: '4. La Ilusión del Aumento de Sueldo',
        image: '/images/lessons/lesson-2/lesson2-4.webp',
        imageAlt: 'La ilusión del aumento de sueldo vs la inflación real',
        imageSummary: 'Te suben el sueldo 5% y te sientes bien. Pero si la inflación es 10%, tu poder de compra BAJÓ 5%. Es matemáticas, no opinión: aumento - inflación = cambio real. Esos $105,000 en tu cuenta solo compran lo que $94,500 compraban antes. Te hiciste más pobre con "más dinero".'
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
        image: '/images/lessons/lesson-2/lesson2-6.webp',
        imageAlt: 'La Inflación Real vs La Inflación Oficial: Trucos como sustitución, ajuste hedónico y exclusiones convenientes que usan los gobiernos para ocultar la inflación real',
        imageSummary: 'Los gobiernos manipulan las cifras: si el bistec sube, dicen que "compraste pollo". Si la computadora es más rápida, dicen que "bajó de precio". Y excluyen comida y energía por ser "volátiles"—justo lo que más compras. Tu supermercado no miente. Las estadísticas oficiales sí.'
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
          { icon: TrendingDown, title: 'México', text: 'El peso mexicano ha vivido ciclos de devaluación extrema: de 12 por dólar en 2008 llegó a 25 en 2017. Aunque ha tenido periodos de recuperación, las crisis de 1994 y 2008 muestran que ninguna moneda LATAM es inmune a shocks externos.' },
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
    number: '3 de 19',
    duration: '20 minutos',
    type: 'Concepto Clave',
    description: 'El secreto mejor guardado de la economía moderna: cuando se imprime dinero, no llega a todos al mismo tiempo. Los primeros en recibirlo se enriquecen. Los últimos se empobrecen. Aprende dónde estás tú en esta cadena.',
    sections: [
      {
        type: 'intro',
        title: 'El Secreto de 300 Años que Explica la Desigualdad Moderna',
        content: 'En 1730, un economista irlandés-francés llamado **Richard Cantillon** descubrió algo que los gobiernos prefieren que no sepas: **el dinero nuevo no es neutral**. Cuando un banco central "imprime" dinero, ese dinero no aparece mágicamente en los bolsillos de todos al mismo tiempo. Alguien lo recibe PRIMERO. Y ese "alguien" tiene una ventaja enorme: puede comprar activos a precios VIEJOS antes de que los precios suban. Para cuando el dinero llega a ti (si es que llega), los precios ya subieron. Compraste tarde. Pagaste más. Perdiste.',
        image: '/images/lessons/lesson-3/lesson3-1.webp',
        imageAlt: 'La Metáfora del Río: El dinero nuevo fluye primero a bancos y corporaciones, y llega último a trabajadores y ahorradores',
        imageSummary: 'El dinero nuevo es como un río. Los que están cerca de la naciente (bancos, gobierno, corporaciones) beben agua limpia y abundante. Para cuando llega río abajo (trabajadores, pensionados, ahorradores), está sucia y escasa. Mira la imagen: "Tú estás aquí"—al final, recibiendo las sobras.'
      },
      {
        type: 'main',
        title: 'Cómo Funciona: El Camino del Dinero Nuevo',
        content: 'Vamos a rastrear exactamente qué pasa cuando un banco central "crea" $1 trillón de la nada. Este es el camino real que recorre ese dinero:',
        image: '/images/lessons/lesson-3/lesson3-2.webp',
        imageAlt: 'El Camino del Dinero Nuevo: De la creación a tu bolsillo en 5 pasos - Banco Central, Bancos Grandes, Corporaciones, Efecto Goteo, y finalmente Tú',
        imageSummary: 'Paso 1: El banco central crea dinero digital. Paso 2: JP Morgan y Goldman Sachs lo reciben primero. Paso 3: Corporaciones compran activos (los precios SUBEN). Paso 4: Meses después, algo "gotea" a la economía real. Paso 5: Tú recibes un "aumento" del 5%... pero los precios ya subieron 30%. Tu aumento es una reducción disfrazada.'
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
          { icon: TrendingUp, title: 'Los Activos Suben Más que los Salarios', text: 'Desde 1971, el S&P 500 ha subido 3,000%+. Los salarios reales han subido menos de 19%. Si tenías acciones, te hiciste rico. Si solo tenías tu sueldo, te quedaste atrás.' },
          { icon: Landmark, title: 'La Vivienda se Volvió Imposible', text: 'En 1970, una casa promedio costaba 2-3 años de salario mediano. Hoy cuesta 7-10 años. El dinero nuevo fluyó hacia bienes raíces, haciendo imposible comprar para las nuevas generaciones.' },
          { icon: Users, title: 'Los Ricos Tienen Asesores', text: 'Cuando se anuncia impresión de dinero, los ultra-ricos llaman a sus banqueros y mueven su capital a activos que se beneficiarán. Tú te enteras en las noticias semanas después.' }
        ],
        image: '/images/lessons/lesson-3/lesson3-3.webp',
        imageAlt: 'La Verdad Incómoda: Los ricos están posicionados cerca de la fuente del dinero nuevo, el juego está estructuralmente amañado',
        imageSummary: 'Mira el contraste: los ricos nadan en dinero fresco directo de la impresora, celebrando cada ronda de "estímulo". Mientras tanto, tú recibes un goteo de agua sucia cuando el dinero ya perdió valor. No es que trabajen más duro—están posicionados en el lugar correcto del sistema. El juego está estructuralmente amañado.'
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
        image: '/images/lessons/lesson-3/lesson3-4.webp',
        imageAlt: 'Bitcoin: La Primera Salida del Sistema Cantillon - Sin banco central, acceso igualitario, protección contra devaluación, el primer dinero verdaderamente justo',
        imageSummary: 'Bitcoin rompe el sistema Cantillon con 3 pilares: 1) NO hay banco central que imprima para los privilegiados—21 millones máximo, para siempre. 2) Acceso igualitario—cualquiera con internet puede participar, sin ser cliente VIP. 3) Protección contra devaluación—cuando imprimen fiat, Bitcoin no se diluye. Por primera vez, el dinero es justo.'
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
          explanation: 'El S&P 500 subió 3000%+ desde 1971. Los salarios reales subieron menos de 19%. Si tenías activos, multiplicaste tu riqueza. Si dependías de tu sueldo, te quedaste atrás. No es coincidencia—es el Efecto Cantillon acumulándose durante 50 años.'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Bitcoin: La Salida',
    level: 'Principiante',
    number: '4 de 19',
    duration: '28 minutos',
    type: 'Video + Texto',
    description: 'Después de entender cómo el sistema monetario te empobrece silenciosamente, es hora de conocer la solución. Bitcoin no es una "inversión especulativa"—es la primera alternativa real al dinero corrupto en 5,000 años de historia.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Génesis: 3 de Enero de 1909',
        content: 'El mundo se desmoronaba. La crisis financiera de 1908 había expuesto la corrupción del sistema bancario: préstamos irresponsables, derivados tóxicos, codicia institucional. Los gobiernos respondieron rescatando a los bancos culpables con TRILLONES de dólares del contribuyente. Los ejecutivos que causaron la crisis recibieron bonos millonarios mientras millones perdían sus casas. En medio de este caos, el 3 de enero de 1909, alguien bajo el seudónimo **Satoshi Nakamoto** minó el primer bloque de Bitcoin. En ese bloque, grabó para siempre un mensaje: **"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"** (Canciller al borde de un segundo rescate para los bancos). No era coincidencia. Era una declaración de intenciones.',
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
        title: 'Bitcoin vs Oro vs Dólar',
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
          text: 'China ha "prohibido" Bitcoin más de 10 veces desde 1913. Resultado: Bitcoin sigue funcionando perfectamente, ahora vale 100x más que en 2013, y millones de chinos siguen usándolo a través de VPNs. No puedes prohibir matemáticas.'
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
          { icon: AlertTriangle, title: 'NO es "una burbuja"', text: 'Ha sido declarado "muerto" más de 450 veces desde 1910. Cada vez vuelve más fuerte. Las burbujas no sobreviven 15+ años, no son adoptadas por países como moneda legal, ni son compradas por fondos de inversión institucionales.' },
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
          explanation: 'Satoshi grabó "Chancellor on brink of second bailout for banks" del Times del 3 de enero de 1909. Este mensaje permanece para siempre en la blockchain, declarando que Bitcoin nació como respuesta directa al rescate de bancos corruptos con dinero de los contribuyentes.'
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
    number: '5 de 19',
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
          explanation: 'Bitcoin elige seguridad y descentralización (lento, 7 TPS). Solana elige seguridad y escalabilidad (menos nodos, pero miles de TPS en producción). No hay blockchain perfecta—solo diferentes trade-offs para diferentes usos.'
        }
      ]
    }
  },
  6: {
    id: 6,
    title: 'Descentralización vs Centralización',
    level: 'Principiante',
    number: '6 de 19',
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
          { icon: Zap, title: 'Solana: Descentralización Pragmática', text: '~3,000 validadores. Requiere hardware más potente (~$5,000+). Más fácil de coordinar cambios. Trade-off consciente: menos descentralización a cambio de ~2,000-4,000 TPS reales en producción (con capacidad teórica mucho mayor) y fees de centavos.' },
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
          { icon: Zap, title: 'El Trade-off Consciente', text: 'Solana prioriza escalabilidad para aplicaciones de consumo masivo. Si quieres la descentralización máxima de Bitcoin, usa Bitcoin. Si quieres miles de TPS y fees de centavos para DeFi y pagos, usa Solana.' }
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
          explanation: 'Solana prioriza escalabilidad (~2,000-4,000 TPS en producción, fees de centavos). Para lograrlo, requiere hardware potente que menos personas pueden costear. Es un trade-off explícito, no un defecto. Bitcoin hace el trade-off opuesto: cualquiera con $300 puede correr un nodo.'
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
    number: '7 de 19',
    duration: '25 minutos',
    type: 'Video + Texto',
    description: 'Entiende la diferencia crítica entre tener cripto en un exchange y tenerlo en tu propia wallet. Este conocimiento puede ser la diferencia entre conservar tu riqueza o perderlo todo.',
    sections: [
      {
        type: 'intro',
        title: 'Not Your Keys, Not Your Coins',
        content: 'En noviembre de 1922, FTX—el segundo exchange más grande del mundo—colapsó de la noche a la mañana. Millones de personas descubrieron que sus "ahorros" en cripto habían desaparecido. No era un hackeo. Era algo peor: **nunca fueron realmente dueños de su dinero**. Cuando compras Bitcoin en Binance, Coinbase o cualquier exchange, lo que tienes es una PROMESA de que ellos tienen tu cripto. Es como tener un recibo de un banco—si el banco quiebra, tu recibo no vale nada. Una **Wallet** cambia esto completamente. Con una wallet propia, TÚ controlas las llaves criptográficas. Nadie puede congelar tu cuenta. Nadie puede negar tu retiro. Nadie puede "prestarse" tu dinero sin permiso. Eres tu propio banco.',
        highlight: {
          title: 'La Lección de FTX',
          text: 'Más de $8 MIL MILLONES de dólares de clientes desaparecieron cuando FTX colapsó. Muchos perdieron los ahorros de toda su vida. ¿Los que tenían su cripto en wallets propias? No perdieron absolutamente nada. La autocustodia no es paranoia—es sentido común.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es Realmente una Wallet?',
        content: 'Aquí hay una confusión común: tu wallet NO "guarda" tus criptomonedas. Tus cripto siempre viven en la blockchain—nunca salen de ahí. Lo que tu wallet guarda son las **llaves privadas**: códigos criptográficos que DEMUESTRAN que eres el dueño de ciertos fondos y te permiten moverlos. Piénsalo así: la blockchain es como un libro contable público gigante que dice "la dirección ABC123 tiene 5 SOL". Tu wallet tiene la llave que demuestra que TÚ controlas la dirección ABC123.',
        features: [
          { icon: Lock, title: 'Llave Privada', text: 'Un código secreto que NUNCA debes compartir. Quien tenga tu llave privada controla tus fondos. Es como la combinación de una caja fuerte—pero para siempre y sin recuperación.' },
          { icon: Globe, title: 'Dirección Pública', text: 'Un código que puedes compartir libremente para recibir pagos. Es como tu número de cuenta bancaria—otros pueden enviarte dinero, pero no pueden sacar nada.' },
          { icon: Shield, title: 'Frase Semilla', text: '12 o 24 palabras que generan TODAS tus llaves privadas. Es el backup maestro. Si pierdes el celular pero tienes la frase, recuperas todo. Si pierdes la frase, pierdes todo para siempre.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Exchange vs Wallet Propia: La Diferencia que Importa',
        leftSide: {
          title: 'Tu Cripto en un Exchange',
          points: [
            'El exchange tiene las llaves, no tú',
            'Pueden congelar tu cuenta sin explicación',
            'Pueden "pausar retiros" cuando quieran',
            'Si quiebran, haces fila con otros acreedores',
            'Pueden prestar TU cripto a otros (muchos lo hacen)',
            'Dependes de su seguridad—si los hackean, pierdes',
            'KYC: saben exactamente cuánto tienes y qué haces'
          ]
        },
        rightSide: {
          title: 'Tu Cripto en Tu Wallet',
          points: [
            'TÚ tienes las llaves, nadie más',
            'Nadie puede congelar ni censurar tu cuenta',
            'Retiras cuando quieras, 24/7, sin permiso',
            'Si Phantom quiebra, tus fondos siguen intactos',
            'Tu cripto es TUYO—nadie lo toca sin tu firma',
            'Tu seguridad depende de ti (responsabilidad)',
            'Privacidad: solo tú sabes lo que tienes'
          ]
        }
      },
      {
        type: 'main',
        title: 'Los 3 Tipos de Wallets: Elige Según tu Necesidad',
        content: 'No todas las wallets son iguales. Cada tipo tiene un balance diferente entre conveniencia y seguridad:',
        features: [
          { icon: Landmark, title: 'Exchange (Custodia de Terceros)', text: 'Binance, Coinbase, Kraken guardan tus llaves por ti. Conveniente para trading activo. NUNCA para ahorros. Úsalo solo para comprar/vender y retira inmediatamente. Si tienes más de $500 en un exchange por más de una semana, estás jugando con fuego.' },
          { icon: Smartphone, title: 'Hot Wallet (Conectada a Internet)', text: 'Phantom, MetaMask, Trust Wallet. Las llaves están en tu celular o navegador. Perfecta para uso diario, DeFi, NFTs. Riesgo: si hackean tu dispositivo o firmas una transacción maliciosa, pierdes fondos. Ideal para montos que usas activamente.' },
          { icon: Shield, title: 'Cold Wallet (Hardware/Offline)', text: 'Ledger, Trezor. Las llaves NUNCA tocan internet. Solo se conectan para firmar. Máxima seguridad para ahorros de largo plazo. Si tienes más de $5,000-10,000 en cripto, necesitas una. Es una inversión de $70-150 que puede salvarte miles.' }
        ]
      },
      {
        type: 'main',
        title: 'Estrategia de Custodia: Cómo Organizar tus Fondos',
        content: 'Los profesionales no ponen todos los huevos en una canasta. Así se estructura un portafolio cripto seguro:',
        features: [
          { icon: PiggyBank, title: 'Ahorros de Largo Plazo (80-90%)', text: 'En cold wallet (Ledger/Trezor). Este dinero no lo tocas por meses o años. Es tu "bóveda". Aquí va la mayoría de tu BTC, ETH, SOL de largo plazo.' },
          { icon: Zap, title: 'Capital Operativo (10-20%)', text: 'En hot wallet (Phantom). Para DeFi, staking, NFTs, pagos. Solo lo que planeas usar activamente. Si pierdes esta wallet por un scam, duele pero no te arruina.' },
          { icon: Activity, title: 'Trading Activo (0-10%)', text: 'En exchange. SOLO si haces trading diario. Retira ganancias regularmente a tu hot o cold wallet. Nunca dejes dinero "descansando" en un exchange.' }
        ],
        highlight: {
          title: 'Regla del Sueño Tranquilo',
          text: 'Pregúntate: "Si mañana Binance/Coinbase pausa retiros por 6 meses, ¿pierdo mis ahorros de vida?" Si la respuesta es sí, tienes demasiado en exchanges. Muévelo a autocustodia HOY.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Una wallet no "guarda" cripto—guarda las LLAVES que prueban que eres dueño de fondos en la blockchain.',
          'Si no tienes las llaves, no tienes el cripto. Los exchanges son custodios, no bancos con seguro gubernamental.',
          'FTX, Mt. Gox, Celsius, BlockFi, Voyager—la lista de exchanges que colapsaron llevándose fondos de usuarios es LARGA y sigue creciendo.',
          'Hot wallets (Phantom, MetaMask) son para uso diario. Cold wallets (Ledger, Trezor) son para ahorros serios.',
          'La autocustodia es una responsabilidad: si pierdes tu frase semilla, nadie puede ayudarte. Pero esa responsabilidad es el precio de la verdadera propiedad.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'FTX, el segundo exchange más grande del mundo, colapsó en 2022. ¿Qué pasó con los fondos de los usuarios que tenían cripto ahí?',
          options: [
            { id: 'a', text: 'El gobierno los protegió como depósitos bancarios' },
            { id: 'b', text: 'Perdieron acceso y entraron en proceso de bancarrota como acreedores no garantizados' },
            { id: 'c', text: 'FTX les devolvió todo en 24 horas' },
            { id: 'd', text: 'Sus fondos estaban seguros porque estaban en blockchain' }
          ],
          correctAnswer: 'b',
          explanation: 'Más de $8 mil millones desaparecieron. Los usuarios con fondos en FTX tuvieron que esperar AÑOS en procesos legales para recuperar centavos por dólar. Los que tenían autocustodia no perdieron nada.'
        },
        {
          id: 'q2',
          question: '¿Qué guarda realmente una wallet de criptomonedas?',
          options: [
            { id: 'a', text: 'Las monedas digitales dentro del dispositivo' },
            { id: 'b', text: 'Una copia de la blockchain' },
            { id: 'c', text: 'Las llaves privadas que prueban propiedad de fondos en la blockchain' },
            { id: 'd', text: 'Tokens físicos codificados' }
          ],
          correctAnswer: 'c',
          explanation: 'Las criptos SIEMPRE viven en la blockchain. Tu wallet solo guarda las llaves criptográficas que demuestran que ciertos fondos son tuyos y te permiten moverlos.'
        },
        {
          id: 'q3',
          question: 'Tienes $15,000 en SOL. ¿Cuál es la estrategia de custodia más segura?',
          options: [
            { id: 'a', text: 'Todo en Binance para vender rápido si el mercado cae' },
            { id: 'b', text: 'Todo en Phantom para tener control total' },
            { id: 'c', text: '$12,000-13,000 en Ledger (cold wallet), $2,000-3,000 en Phantom para operar, $0 en exchanges' },
            { id: 'd', text: 'Dividir entre 5 exchanges diferentes para "diversificar"' }
          ],
          correctAnswer: 'c',
          explanation: 'La mayor parte en cold wallet (máxima seguridad), una porción operativa en hot wallet, y exchanges solo para comprar/vender momentáneamente. Diversificar entre exchanges no te protege de colapsos sistémicos.'
        },
        {
          id: 'q4',
          question: 'Un amigo perdió su teléfono con Phantom instalado. ¿Perdió sus fondos?',
          options: [
            { id: 'a', text: 'Sí, el dinero estaba guardado en el teléfono' },
            { id: 'b', text: 'Sí, a menos que contacte a soporte de Phantom' },
            { id: 'c', text: 'No, si tiene su frase semilla guardada puede recuperar todo en otro dispositivo' },
            { id: 'd', text: 'Depende de si tenía Face ID activado' }
          ],
          correctAnswer: 'c',
          explanation: 'La wallet es solo una INTERFAZ para acceder a la blockchain. El verdadero control viene de la frase semilla. Con ella, puedes recuperar tus fondos en cualquier dispositivo, en cualquier momento. Sin ella, pierdes acceso para siempre.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia fundamental entre una hot wallet y una cold wallet?',
          options: [
            { id: 'a', text: 'Las cold wallets son más caras' },
            { id: 'b', text: 'Las hot wallets están conectadas a internet (más convenientes, menos seguras), las cold wallets mantienen las llaves OFFLINE (menos convenientes, máxima seguridad)' },
            { id: 'c', text: 'Las cold wallets solo sirven para Bitcoin' },
            { id: 'd', text: 'Las hot wallets son gratuitas y las cold no' }
          ],
          correctAnswer: 'b',
          explanation: 'La conexión a internet es el punto crítico. Una hot wallet puede ser comprometida por malware o phishing. Una cold wallet mantiene tus llaves en un dispositivo que NUNCA se conecta directamente a internet, eliminando ese vector de ataque.'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'La Frase Semilla (Seed Phrase)',
    level: 'Principiante',
    number: '8 de 19',
    duration: '28 minutos',
    type: 'Práctica Obligatoria',
    description: 'El secreto más importante de tu vida financiera digital. Estas 12-24 palabras pueden valer millones o cero—todo depende de cómo las protejas.',
    sections: [
      {
        type: 'intro',
        title: '12 Palabras que Controlan Todo',
        content: 'Cuando creas una wallet, se genera algo extraordinario: una secuencia de 12 o 24 palabras en inglés aparentemente aleatorias. "apple river mountain dog..."—parece un poema sin sentido, pero es la llave maestra de toda tu riqueza cripto. Estas palabras, llamadas **frase semilla** o **seed phrase**, son una representación legible de tu llave privada. A partir de ellas se derivan TODAS las direcciones y llaves de tu wallet. Quien tenga estas palabras tiene CONTROL TOTAL de tus fondos—puede vaciarlos en segundos desde cualquier parte del mundo. No necesita tu celular. No necesita tu contraseña. No necesita nada más.',
        highlight: {
          title: 'La Realidad Matemática',
          text: 'Una frase de 12 palabras tiene 2^128 combinaciones posibles. Es un número tan grande que si todas las computadoras del planeta intentaran adivinarlo, tardarían más tiempo que la edad del universo. Tu frase es prácticamente imposible de adivinar—pero trivial de robar si la expones.'
        }
      },
      {
        type: 'main',
        title: '¿Por Qué 12 Palabras en Vez de una Contraseña Normal?',
        content: 'Las contraseñas tradicionales tienen problemas: son difíciles de recordar, fáciles de hackear, y dependen de un servidor. La frase semilla resuelve todo esto:',
        features: [
          { icon: Lock, title: 'Estándar Universal (BIP-39)', text: 'Todas las wallets serias usan el mismo estándar de 1948 palabras en inglés. Tu frase de Phantom funciona en Ledger, MetaMask, Trust Wallet, o cualquier otra. No dependes de una empresa.' },
          { icon: Shield, title: 'Backup Perfecto', text: 'Si tu celular explota, tu computadora se incendia, o la empresa de tu wallet desaparece, tus fondos siguen existiendo en la blockchain. Con tu frase semilla, los recuperas en minutos desde cualquier dispositivo nuevo.' },
          { icon: Network, title: 'Genera Infinitas Direcciones', text: 'De una sola frase semilla se derivan matemáticamente miles de direcciones. Puedes tener direcciones para SOL, ETH, BTC, y más—todo desde las mismas 12 palabras.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Guardar tu Frase Semilla: Nivel Básico',
        content: 'La regla de oro es simple: **tu frase semilla NUNCA debe existir en formato digital**. El momento en que la escribes en tu computadora, la tomas en foto, o la guardas en la nube, estás exponiendo tu riqueza.',
        features: [
          { icon: CheckCircle, title: 'Papel (Mínimo Aceptable)', text: 'Escríbela a mano en papel. Usa letra clara. Verifica 3 veces que cada palabra esté correcta. Guarda el papel en un lugar seguro: caja fuerte, caja de seguridad bancaria, o escondite que solo tú conozcas.' },
          { icon: AlertTriangle, title: 'NUNCA en Digital', text: 'No en fotos. No en capturas de pantalla. No en notas del celular. No en Google Docs. No en emails. No en WhatsApp. No "encriptado" en la nube. Los hackers buscan activamente estas cosas.' },
          { icon: AlertTriangle, title: 'NUNCA la Digas en Voz Alta', text: 'Si hay un micrófono cerca (Alexa, Siri, tu celular), asume que puede estar grabando. Suena paranoico hasta que pierdes todo.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Guardar tu Frase Semilla: Nivel Avanzado',
        content: 'Si tienes más de $5,000 en cripto, necesitas seguridad seria. Así lo hacen los que tienen millones:',
        features: [
          { icon: Shield, title: 'Placa de Metal', text: 'El papel se quema, se moja, se descompone. Productos como Cryptosteel o Billfodl te permiten grabar tu frase en acero inoxidable. Sobrevive incendios, inundaciones, y décadas de tiempo. Cuesta $50-100, protege fortunas.' },
          { icon: Layers, title: 'Copias en Múltiples Ubicaciones', text: 'Una sola copia es un punto único de fallo. Guarda 2-3 copias en ubicaciones diferentes: tu casa, casa de un familiar de confianza, caja de seguridad bancaria. Si un lugar se destruye, tienes respaldo.' },
          { icon: Lock, title: 'Passphrase Adicional (Palabra 25)', text: 'Algunas wallets permiten agregar una palabra extra personalizada. Tu frase de 12 palabras + "tu_palabra_secreta" genera wallets DIFERENTES. Incluso si roban tu frase, sin la palabra 25 no pueden acceder.' }
        ],
        highlight: {
          title: 'Shamir Secret Sharing',
          text: 'Para el máximo nivel de seguridad, puedes dividir tu frase en partes que requieren combinarse. Ejemplo: divides en 3 partes, necesitas 2 para recuperar. Guardas una en tu casa, otra con tu hermano, otra en el banco. Ninguna ubicación por sí sola es suficiente para robar.'
        }
      },
      {
        type: 'main',
        title: 'Los Errores que Han Costado Millones',
        content: 'Aprende de las tragedias de otros. Estos son errores REALES que han destruido fortunas:',
        features: [
          { icon: AlertTriangle, title: 'La Foto en iCloud', text: 'Un usuario tomó foto de su frase "para no perderla". Su cuenta de iCloud fue hackeada. Perdió $300,000 en minutos. Las fotos se sincronizan automáticamente a la nube.' },
          { icon: AlertTriangle, title: 'El Archivo en Google Drive', text: '"Está encriptado, es seguro". Un empleado de Google con acceso comprometió su cuenta. El "archivo encriptado" fue descifrado. $2.4 millones perdidos.' },
          { icon: AlertTriangle, title: 'El Mensaje a Sí Mismo', text: 'Se envió la frase por WhatsApp "para tenerla en el celular". Su cuenta de WhatsApp Web quedó abierta en una computadora pública. Adiós $50,000.' },
          { icon: AlertTriangle, title: 'El Único Papel', text: 'Guardó su frase en un papel en casa. Hubo un incendio. El papel se quemó. $180,000 en Bitcoin perdidos para siempre—los fondos siguen en la blockchain, pero nadie puede accederlos nunca más.' }
        ]
      },
      {
        type: 'main',
        title: 'Anatomía de una Estafa de Seed Phrase',
        content: 'El 99% de los robos de cripto no son "hackeos sofisticados"—son ingeniería social donde TÚ entregas tu frase. Así operan:',
        features: [
          { icon: AlertTriangle, title: 'El Falso Soporte Técnico', text: '"Hola, soy de Phantom Support. Detectamos actividad sospechosa en tu cuenta. Para proteger tus fondos, necesitamos verificar tu frase semilla." MENTIRA. Phantom NUNCA te contactará primero. NUNCA te pedirá tu frase. NADIE legítimo lo hará.' },
          { icon: AlertTriangle, title: 'El Sitio Falso', text: 'Buscas "Phantom wallet" en Google. El primer resultado es un anuncio de "phantomm-wallet.com" (con dos M). El sitio se ve idéntico. Te pide "importar wallet" y escribes tu frase. La roban en tiempo real.' },
          { icon: AlertTriangle, title: 'El Airdrop Gratis', text: '"Has sido seleccionado para recibir 500 SOL gratis. Conecta tu wallet y verifica tu seed phrase para reclamar." Nadie regala $50,000. Es estafa.' },
          { icon: AlertTriangle, title: 'El DM del Influencer', text: '"Hola, soy [YouTuber famoso]. Estoy haciendo un giveaway privado. Solo necesito verificar que eres holder real—envíame tu seed phrase." Los influencers reales NUNCA hacen esto.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Las Reglas de Oro de la Seed Phrase',
        items: [
          'Tu frase semilla ES tu dinero. No es una contraseña que puedes resetear. Si la pierdes o la roban, tu dinero desaparece PARA SIEMPRE.',
          'NUNCA existe una razón legítima para que ALGUIEN te pida tu seed phrase. Ni soporte técnico, ni airdrops, ni verificaciones, ni "actualizaciones de seguridad". NADIE. NUNCA.',
          'NUNCA la guardes en formato digital: no fotos, no archivos, no notas, no emails, no mensajes, no "encriptado" en la nube.',
          'Escríbela en papel como MÍNIMO. Mejor en metal. Guarda múltiples copias en ubicaciones separadas.',
          'Verifica 3 veces que la escribiste correctamente. Un error de una sola letra puede hacer irrecuperables tus fondos.',
          'Si alguien te pide la frase semilla, es estafa. El 100% de las veces. Sin excepciones.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu frase semilla de 12 palabras está escrita en un papel y guardada en tu casa. Un ladrón entra y la roba. ¿Qué puede hacer?',
          options: [
            { id: 'a', text: 'Nada, porque necesita también tu contraseña de Phantom' },
            { id: 'b', text: 'Vaciar absolutamente TODOS tus fondos en segundos, desde cualquier dispositivo en el mundo' },
            { id: 'c', text: 'Solo puede ver tu saldo pero no mover fondos' },
            { id: 'd', text: 'Necesita también tu celular físico' }
          ],
          correctAnswer: 'b',
          explanation: 'La frase semilla es la LLAVE MAESTRA TOTAL. Quien la tenga puede importarla en cualquier wallet y tener control absoluto de tus fondos. No necesita nada más. Por eso la protección física de tu frase es tan crítica.'
        },
        {
          id: 'q2',
          question: '¿Por qué NUNCA debes guardar tu seed phrase en una foto, archivo de texto, o en la nube?',
          options: [
            { id: 'a', text: 'Porque ocupa mucho espacio de almacenamiento' },
            { id: 'b', text: 'Porque los hackers buscan activamente estos archivos, y las sincronizaciones automáticas (iCloud, Google Photos) pueden exponerla sin que lo sepas' },
            { id: 'c', text: 'Porque es difícil de leer en pantalla' },
            { id: 'd', text: 'Porque las wallets no aceptan frases de fotos' }
          ],
          correctAnswer: 'b',
          explanation: 'Malware, hackeos de cuentas cloud, y sincronizaciones automáticas han costado MILLONES a usuarios que pensaron "está seguro en mi celular/nube". Si existe en formato digital, puede ser robado remotamente.'
        },
        {
          id: 'q3',
          question: 'Te llega un mensaje de "Phantom Support" diciendo que tu wallet está en riesgo y necesitan verificar tu frase semilla. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Les envío la frase rápido para proteger mis fondos' },
            { id: 'b', text: 'Les envío solo las primeras 6 palabras para "verificación parcial"' },
            { id: 'c', text: 'Ignoro, bloqueo y reporto. Phantom NUNCA contacta usuarios ni pide seed phrases. Es 100% estafa.' },
            { id: 'd', text: 'Les pido que me llamen para verificar que son reales' }
          ],
          correctAnswer: 'c',
          explanation: 'NINGUNA empresa legítima te pedirá NUNCA tu frase semilla. No hay excepciones. No hay "verificaciones". No hay "protección de cuenta". El 100% de las veces que alguien pide tu seed phrase, es estafa.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la forma MÁS segura de almacenar una seed phrase para $50,000+ en cripto?',
          options: [
            { id: 'a', text: 'Memorizarla y no escribirla en ningún lado' },
            { id: 'b', text: 'Archivo encriptado en Google Drive con contraseña fuerte' },
            { id: 'c', text: 'Grabada en placa de metal, con copias en 2-3 ubicaciones físicas diferentes (casa, familiar de confianza, caja de seguridad bancaria)' },
            { id: 'd', text: 'Papel en la billetera física que siempre llevas contigo' }
          ],
          correctAnswer: 'c',
          explanation: 'Metal resiste fuego e inundaciones. Múltiples ubicaciones eliminan puntos únicos de fallo. La memoria humana falla. Los archivos digitales pueden ser hackeados. Llevarla encima te expone a robo físico.'
        },
        {
          id: 'q5',
          question: 'Un usuario guardó su única copia de la seed phrase en papel en su casa. Hubo un incendio y el papel se destruyó. ¿Qué pasa con sus fondos?',
          options: [
            { id: 'a', text: 'Contacta a soporte de su wallet y la recuperan' },
            { id: 'b', text: 'Puede usar reconocimiento facial para acceder' },
            { id: 'c', text: 'Los fondos están PERDIDOS PARA SIEMPRE. Siguen existiendo en la blockchain, pero nadie puede accederlos nunca más.' },
            { id: 'd', text: 'El gobierno puede ayudarle a recuperarlos' }
          ],
          correctAnswer: 'c',
          explanation: 'Esta es la realidad brutal de la autocustodia: no hay "Olvidé mi contraseña". No hay soporte que te ayude. Los fondos siguen en la blockchain por toda la eternidad, pero sin la seed phrase, son inaccesibles para siempre. Por eso DEBES tener múltiples copias en ubicaciones separadas.'
        },
        {
          id: 'q6',
          question: '¿Qué es una passphrase adicional (palabra 25) y por qué es útil?',
          options: [
            { id: 'a', text: 'Es una palabra de recuperación extra que te da Phantom' },
            { id: 'b', text: 'Es una palabra personalizada que añades a tu seed phrase, generando wallets COMPLETAMENTE diferentes. Incluso si roban tu seed de 12 palabras, sin la passphrase no pueden acceder.' },
            { id: 'c', text: 'Es tu contraseña de desbloqueo del celular' },
            { id: 'd', text: 'Es obligatoria para todas las wallets' }
          ],
          correctAnswer: 'b',
          explanation: 'La passphrase es una capa extra de seguridad. Tu seed phrase de 12 palabras + "tu_palabra_secreta" genera direcciones completamente diferentes a la misma seed phrase sola. Esto te protege incluso si alguien obtiene tu seed: sin la passphrase, verán una wallet vacía o diferente.'
        }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Instalando Phantom Wallet',
    level: 'Principiante',
    number: '9 de 19',
    duration: '30 minutos',
    type: 'Tutorial Práctico',
    description: 'Tu puerta de entrada al ecosistema Solana. Instalación paso a paso de la wallet más usada, con todas las precauciones de seguridad que necesitas saber.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Phantom es la Wallet Recomendada?',
        content: 'En el mundo de las wallets de Solana, Phantom se ha ganado la corona. No es solo una interfaz bonita—es una herramienta diseñada pensando en la seguridad Y la usabilidad. Millones de usuarios la usan diariamente, tiene el mejor historial de seguridad del ecosistema, y su equipo responde rápidamente ante cualquier vulnerabilidad. MetaMask domina Ethereum. Phantom domina Solana. Si estás empezando en cripto, Phantom es tu mejor aliado.',
        features: [
          { icon: Shield, title: 'Alertas de Seguridad Integradas', text: 'Phantom analiza cada transacción ANTES de que la firmes. Si detecta un contrato malicioso conocido, te advierte. Si un sitio intenta drenar tu wallet, te alerta. Es como tener un guardaespaldas digital.' },
          { icon: Zap, title: 'Velocidad de Solana', text: 'Transacciones confirmadas en menos de 1 segundo. Fees de fracción de centavo. La experiencia es tan fluida que parece magia comparado con Ethereum.' },
          { icon: Smartphone, title: 'Multi-Plataforma Sincronizado', text: 'Úsala en navegador (Chrome, Firefox, Brave, Edge) y en móvil (iOS, Android). Misma wallet, mismos fondos, sincronización perfecta.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 1: Descarga SOLO desde Fuentes Oficiales',
        content: 'Este paso parece obvio pero es donde MUCHOS pierden todo su dinero. Los estafadores crean sitios falsos que lucen idénticos a Phantom pero roban tu seed phrase en el momento que la ingresas.',
        features: [
          { icon: CheckCircle, title: 'Sitio Oficial', text: 'El ÚNICO sitio oficial es **phantom.app** (sin guiones, sin números, sin variaciones). Escríbelo tú mismo en la barra de direcciones. NO hagas clic en anuncios de Google—los estafadores compran ads para aparecer primero.' },
          { icon: CheckCircle, title: 'Extensión de Navegador', text: 'Ve a phantom.app → haz clic en "Download" → elige tu navegador. Te llevará a la Chrome Web Store, Firefox Add-ons, etc. Verifica que el desarrollador sea "Phantom Technologies Incorporated".' },
          { icon: CheckCircle, title: 'App Móvil', text: 'Descarga SOLO desde App Store (iOS) o Google Play (Android). Busca "Phantom" y verifica el desarrollador oficial. Hay apps falsas con nombres similares.' }
        ],
        highlight: {
          title: 'Lista de URLs Falsas Comunes',
          text: 'phantom-app.com, phantomwallet.io, phantom-wallet.app, phantomm.app, phantom.finance—TODAS son estafas. El sitio real es ÚNICAMENTE phantom.app. Guárdalo en favoritos después de verificar.'
        }
      },
      {
        type: 'main',
        title: 'Paso 2: Crear una Nueva Wallet',
        content: 'Una vez instalada la extensión o app, Phantom te dará dos opciones: crear una nueva wallet o importar una existente. Si es tu primera wallet, selecciona **"Create a new wallet"**.',
        features: [
          { icon: Lock, title: 'Contraseña de Desbloqueo', text: 'Phantom te pedirá crear una contraseña. Esta contraseña desbloquea la app en TU dispositivo—NO es tu seed phrase. Si olvidas esta contraseña, puedes reinstalar Phantom e importar tu wallet con la seed phrase.' },
          { icon: Shield, title: 'Generación de Seed Phrase', text: 'Phantom generará 12 palabras aleatorias. DETENTE AQUÍ. No hagas clic en "siguiente" hasta que hayas escrito estas palabras en PAPEL. No las copies al portapapeles. No las escribas en notas digitales.' },
          { icon: CheckCircle, title: 'Verificación', text: 'Phantom te pedirá confirmar algunas palabras para asegurar que las guardaste correctamente. Si fallas, vuelve a empezar. Este paso existe porque MILES de personas pierden fondos por errores de escritura.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 3: Entendiendo la Interfaz de Phantom',
        content: 'Ya tienes tu wallet creada. Ahora entiende qué estás viendo:',
        features: [
          { icon: Wallet, title: 'Tu Dirección Pública', text: 'En la parte superior verás algo como "ABC12...XYZ". Esta es tu dirección de Solana—como un número de cuenta. Puedes compartirla libremente para recibir pagos. Haz clic para copiarla.' },
          { icon: Activity, title: 'Balance y Tokens', text: 'Verás tu saldo de SOL y cualquier otro token que recibas. Phantom muestra el valor en USD automáticamente y detecta la mayoría de los tokens legítimos.' },
          { icon: Globe, title: 'Historial de Transacciones', text: 'Cada envío, recepción, o interacción con una dApp queda registrada. Puedes hacer clic en cualquier transacción para ver detalles en Solscan (el explorador de bloques).' },
          { icon: Network, title: 'Conexiones de Apps', text: 'En "Settings" → "Connected Apps" verás qué sitios tienen permiso para conectarse a tu wallet. Revisa periódicamente y desconecta los que no uses.' }
        ]
      },
      {
        type: 'main',
        title: 'Funciones de Seguridad que Debes Conocer',
        content: 'Phantom incluye varias capas de protección. Conócelas para usarlas a tu favor:',
        features: [
          { icon: Shield, title: 'Simulación de Transacciones', text: 'Antes de firmar, Phantom simula qué pasaría si confirmas. Te muestra "Vas a recibir X" o "Vas a enviar Y". Si un contrato malicioso intenta drenar tu wallet, verás una advertencia en ROJO.' },
          { icon: AlertTriangle, title: 'Lista Negra de Sitios', text: 'Phantom mantiene una base de datos de sitios de phishing conocidos. Si intentas conectarte a uno, te bloqueará o advertirá. NO significa que todos los sitios no-bloqueados son seguros—solo que los conocidos están marcados.' },
          { icon: Lock, title: 'Bloqueo Automático', text: 'La wallet se bloquea automáticamente después de cierto tiempo de inactividad. Puedes configurar este tiempo en Settings. Menor tiempo = más seguro pero menos conveniente.' },
          { icon: Smartphone, title: 'Biometría en Móvil', text: 'Activa Face ID o huella digital para desbloquear. Añade una capa extra de seguridad si alguien obtiene tu teléfono desbloqueado.' }
        ]
      },
      {
        type: 'main',
        title: 'Conectar vs Aprobar: La Diferencia Crítica',
        content: 'Muchos usuarios nuevos no entienden la diferencia entre "conectar" una wallet y "aprobar" una transacción. Esta confusión puede costarte caro:',
        features: [
          { icon: Link, title: 'Conectar Wallet', text: 'Cuando un sitio pide "Connect Wallet", solo le estás dando permiso para VER tu dirección pública y balance. Es como mostrar tu número de cuenta—pueden ver, pero NO pueden sacar dinero. Es relativamente seguro.' },
          { icon: AlertTriangle, title: 'Aprobar Transacción', text: 'Después de conectar, si el sitio quiere hacer algo con tus fondos (swap, mint, transfer), Phantom te pedirá APROBAR la transacción específica. AQUÍ es donde debes prestar atención. Lee qué estás firmando.' },
          { icon: Shield, title: 'La Regla de Oro', text: 'Antes de aprobar, pregúntate: "¿Esto tiene sentido para lo que estoy intentando hacer?" Si estás haciendo un swap de $100 y la transacción dice "Aprobar acceso ilimitado a todos tus tokens"—RECHAZA. Algo está mal.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist Post-Instalación',
        items: [
          'Descargaste Phantom ÚNICAMENTE desde phantom.app, App Store, o Google Play (verificando el desarrollador oficial).',
          'Escribiste tu seed phrase de 12 palabras en PAPEL (no digital) y la guardaste en lugar seguro.',
          'Verificaste la seed phrase correctamente en el proceso de Phantom.',
          'Creaste una contraseña de desbloqueo fuerte (diferente a otras contraseñas).',
          'Entiendes la diferencia entre tu dirección pública (seguro compartir) y tu seed phrase (NUNCA compartir).',
          'Sabes que "Conectar" solo muestra tu dirección, pero "Aprobar" firma transacciones con tus fondos.',
          'Antes de depositar fondos grandes, haz una prueba pequeña para confirmar que todo funciona.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Buscas "Phantom wallet" en Google. El primer resultado es un anuncio de "phantom-app.com". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Hago clic porque apareció primero en Google' },
            { id: 'b', text: 'Ignoro el anuncio y escribo manualmente phantom.app en la barra de direcciones' },
            { id: 'c', text: 'Descargo de cualquiera de los dos, son iguales' },
            { id: 'd', text: 'Busco en otro buscador' }
          ],
          correctAnswer: 'b',
          explanation: 'Los estafadores PAGAN para aparecer como anuncios en Google con URLs falsas. phantom-app.com NO es el sitio oficial. El ÚNICO sitio real es phantom.app (sin guiones). Siempre escríbelo manualmente.'
        },
        {
          id: 'q2',
          question: 'Instalaste Phantom y te muestra 12 palabras. ¿Cuál es el paso correcto ANTES de continuar?',
          options: [
            { id: 'a', text: 'Tomar una captura de pantalla para tenerlas guardadas' },
            { id: 'b', text: 'Copiarlas al portapapeles y pegarlas en una nota del celular' },
            { id: 'c', text: 'Escribirlas en PAPEL físico, verificar que están correctas, y guardar el papel en lugar seguro' },
            { id: 'd', text: 'Hacer clic en "siguiente" rápido y anotarlas después' }
          ],
          correctAnswer: 'c',
          explanation: 'Capturas de pantalla se sincronizan a la nube. El portapapeles puede ser leído por malware. Solo PAPEL físico es seguro. Y debes hacerlo ANTES de continuar—después no podrás ver la frase de nuevo en Phantom.'
        },
        {
          id: 'q3',
          question: 'Un sitio web te pide "Connect Wallet". ¿Qué estás autorizando exactamente?',
          options: [
            { id: 'a', text: 'Le estás dando acceso total a mover tus fondos' },
            { id: 'b', text: 'Le estás compartiendo tu frase semilla' },
            { id: 'c', text: 'Le estás permitiendo VER tu dirección pública y balance, pero NO mover fondos sin aprobación adicional' },
            { id: 'd', text: 'Nada, es solo un popup informativo' }
          ],
          correctAnswer: 'c',
          explanation: 'Conectar wallet es relativamente seguro—solo comparte información pública (como mostrar tu número de cuenta). El peligro real viene cuando te piden APROBAR transacciones después de conectar. Siempre lee qué estás firmando.'
        },
        {
          id: 'q4',
          question: 'Phantom te muestra una transacción para aprobar. En la simulación dice en ROJO: "This transaction may be malicious". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Apruebo de todos modos, probablemente es un bug' },
            { id: 'b', text: 'RECHAZO inmediatamente y cierro el sitio. La advertencia de Phantom significa que detectó patrones de estafa conocidos.' },
            { id: 'c', text: 'Apruebo pero con un monto pequeño para probar' },
            { id: 'd', text: 'Contacto al "soporte" del sitio para preguntar' }
          ],
          correctAnswer: 'b',
          explanation: 'Phantom invierte recursos significativos en detectar contratos maliciosos. Si te muestra una advertencia en ROJO, es porque el contrato tiene patrones de drainer/estafa conocidos. NUNCA ignores estas advertencias.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia entre la contraseña de Phantom y tu frase semilla?',
          options: [
            { id: 'a', text: 'Son lo mismo, dos nombres para la misma cosa' },
            { id: 'b', text: 'La contraseña desbloquea la app en TU dispositivo; la seed phrase es la llave maestra que recupera tu wallet desde CUALQUIER dispositivo' },
            { id: 'c', text: 'La contraseña es más importante que la seed phrase' },
            { id: 'd', text: 'Solo necesitas recordar la contraseña, la seed phrase es opcional' }
          ],
          correctAnswer: 'b',
          explanation: 'Si olvidas tu contraseña de Phantom, reinstala la app e importa tu wallet con la seed phrase. Si pierdes tu seed phrase, pierdes TODO para siempre—sin importar qué contraseña tengas. La seed phrase es infinitamente más importante.'
        }
      ]
    }
  },
  10: {
    id: 10,
    title: 'Solana vs Ethereum: La Guerra de L1s',
    level: 'Principiante',
    number: '10 de 19',
    duration: '35 min',
    type: 'Comparativa',
    description: 'Por qué enseñamos Solana primero. Velocidad, costos, y la mejor experiencia de usuario en crypto—todo lo que necesitas saber para entender el debate L1.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Existe Esta "Guerra"?',
        content: 'Ethereum fue la primera blockchain programable. Inventó los smart contracts, DeFi, NFTs—todo lo que hoy conocemos como Web3 nació ahí. Es el "abuelo respetado" del espacio. Pero tiene un problema fundamental: **no escala para uso masivo**. Cuando mucha gente quiere usarlo, se congestiona. Los fees suben a $50, $100, incluso $500 por transacción en momentos de alta demanda. Para una persona en Latinoamérica que quiere probar DeFi con $100, esto es prohibitivo. Solana nació en 2020 con una pregunta: ¿y si construimos una blockchain desde cero, optimizada para velocidad y bajo costo? El resultado es una red donde las transacciones cuestan menos de un centavo y se confirman en menos de un segundo.',
        highlight: {
          title: 'La Metáfora',
          text: 'Ethereum es como un Mercedes clásico de 1990: revolucionario en su época, confiable, prestigioso—pero lento y caro de mantener. Solana es como un Tesla: diseñado para el mundo moderno, rápido, eficiente, y construido pensando en el futuro.'
        }
      },
      {
        type: 'comparison',
        title: 'Los Números que Importan',
        leftSide: {
          title: 'Ethereum (L1)',
          points: [
            'Transacciones por segundo: ~15-30 TPS',
            'Costo por transacción: $2-$100+ (varía con congestión)',
            'Tiempo de confirmación: ~12-15 segundos',
            'Para usar DeFi barato: necesitas L2s (Arbitrum, Optimism)',
            'Fragmentación de liquidez entre L1 y múltiples L2s',
            'Bridges para mover entre capas (riesgo de hackeos)',
            'Experiencia confusa para nuevos usuarios'
          ]
        },
        rightSide: {
          title: 'Solana (L1)',
          points: [
            'Transacciones por segundo: ~2,000-4,000 TPS (producción real)',
            'Costo por transacción: ~$0.00025 (fracción de centavo)',
            'Tiempo de confirmación: ~400 milisegundos',
            'Todo ocurre en una sola capa (sin L2s necesarios)',
            'Toda la liquidez unificada en un solo lugar',
            'Sin bridges entre capas (menos riesgo)',
            'Experiencia fluida, como usar una app normal'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Qué Significa "Monolítico" vs "Modular"?',
        content: 'Este es un debate técnico fundamental que afecta tu experiencia como usuario:',
        features: [
          { icon: Layers, title: 'Ethereum: Modular', text: 'Ethereum decidió dividirse en capas. L1 es la "capa de seguridad" (cara y lenta). L2s son "capas de ejecución" (más baratas y rápidas). El problema: tienes que mover fondos entre capas usando bridges. Esto crea fricción, riesgos de hackeo, y fragmenta la liquidez.' },
          { icon: Zap, title: 'Solana: Monolítico', text: 'Solana pone TODO en una sola capa: ejecución, consenso, y disponibilidad de datos. No hay bridges. No hay L2s. No hay fragmentación. Todo está en un solo lugar, componible e interoperable. Más simple para el usuario, menos puntos de fallo.' },
          { icon: AlertTriangle, title: 'El Trade-off', text: 'Modular = más descentralización teórica pero peor UX. Monolítico = mejor UX pero requiere hardware más potente para validadores. Solana eligió optimizar para el usuario final.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Real: Hacer un Swap de $50',
        content: 'Veamos qué pasa en la práctica cuando quieres intercambiar $50 de USDC por otro token:',
        features: [
          { icon: TrendingDown, title: 'En Ethereum L1', text: 'Abres Uniswap. El swap te costaría $15-40 en gas. Para $50, perderías 30-80% solo en fees. No tiene sentido económico. Te dicen "usa un L2".' },
          { icon: Network, title: 'En Ethereum L2 (Arbitrum)', text: 'Primero debes bridgear fondos de L1 a L2 ($10-20 de gas + espera). Luego haces el swap ($0.50 de gas). Si quieres volver a L1, otro bridge ($10-20). El proceso toma minutos/horas y múltiples transacciones.' },
          { icon: Zap, title: 'En Solana', text: 'Abres Jupiter. Haces el swap. Pagas $0.0002 de fee. Tarda 1 segundo. Listo. No hay capas. No hay bridges. No hay esperas. Tu experiencia es idéntica si swapeas $50 o $50,000.' }
        ],
        highlight: {
          title: 'Por Esto Enseñamos Solana Primero',
          text: 'Si estás aprendiendo cripto, queremos que experimentes. Que pruebes cosas. Que cometas errores pequeños sin perder todo en fees. Solana te permite equivocarte 100 veces y pagar menos de $0.03 en total. En Ethereum L1, un solo error podría costarte $50.'
        }
      },
      {
        type: 'main',
        title: 'El Ecosistema de Solana: Las Apps que Usarás',
        content: 'La tecnología importa, pero lo que realmente usarás son las aplicaciones. Solana tiene las mejores:',
        features: [
          { icon: Zap, title: 'Jupiter', text: 'El mejor agregador DEX del mundo. Te encuentra el mejor precio entre todos los exchanges descentralizados. Tiene DCA (compra automática), órdenes límite, y perpetuos. Es el "Uniswap de Solana" pero con superpoderes.' },
          { icon: Wallet, title: 'Phantom', text: 'Ya la conoces. La wallet más usada de Solana. Pero vale repetir: la experiencia de Phantom vs MetaMask es día y noche. MetaMask se siente como software de 1917.' },
          { icon: Globe, title: 'Magic Eden / Tensor', text: 'Los marketplaces de NFTs en Solana. Puedes comprar y vender NFTs por menos de $0.01 en fees. En OpenSea (Ethereum), los fees pueden ser $20-50.' },
          { icon: Activity, title: 'Marinade / Jito', text: 'Plataformas de liquid staking. Pones tu SOL a trabajar ganando ~7-8% anual mientras sigue siendo líquido. En Ethereum, hacer liquid staking cuesta $20+ en gas.' }
        ]
      },
      {
        type: 'main',
        title: 'Seamos Honestos: Los Riesgos de Solana',
        content: 'No queremos darte solo la versión positiva. Estos son los argumentos en contra que escucharás:',
        features: [
          { icon: AlertTriangle, title: 'Centralización Relativa', text: 'Solana requiere hardware más potente para correr un validador. Esto significa menos validadores que Ethereum. Críticos dicen que es "menos descentralizada". Counter-argument: ¿de qué sirve una red "descentralizada" que nadie puede pagar usar?' },
          { icon: AlertTriangle, title: 'Outages Históricos', text: 'Solana tuvo varios "apagones" en 2022-2023 donde la red se detuvo. Esto generó dudas sobre su estabilidad. Sin embargo, desde 1924 ha funcionado sin problemas y las mejoras técnicas han resuelto estos issues.' },
          { icon: AlertTriangle, title: 'Ecosistema Más Joven', text: 'Ethereum tiene 8+ años. Solana tiene 4. El ecosistema de Ethereum es más grande y tiene más liquidez total. Algunos protocolos "blue chip" solo existen en Ethereum.' }
        ]
      },
      {
        type: 'main',
        title: 'El Futuro: Firedancer y Más Allá',
        content: 'Solana no se queda quieta. Estas son las mejoras que vienen:',
        features: [
          { icon: Cpu, title: 'Firedancer', text: 'Jump Trading (uno de los traders más grandes del mundo) está construyendo un nuevo cliente de validador desde cero. Se espera que aumente la velocidad 10-100x y elimine los riesgos de "un solo cliente". Es el upgrade más importante en la historia de Solana.' },
          { icon: Smartphone, title: 'Saga/Seeker (Mobile)', text: 'Solana tiene su propio teléfono móvil con wallet integrada. La visión es hacer que interactuar con cripto sea tan fácil como usar cualquier app. El futuro es móvil.' },
          { icon: Globe, title: 'Blinks', text: 'Acciones de blockchain que funcionan directamente en Twitter, Discord, y otras apps. Compra un NFT desde un tweet. Haz un swap desde un mensaje. Web3 sin salir de Web2.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Solana vs Ethereum: El Veredicto',
        items: [
          'Ethereum fue el pionero y tiene el ecosistema más grande. Merece respeto por todo lo que inventó.',
          'Pero para un usuario nuevo, Ethereum L1 es prácticamente inusable por los costos. Te empujan a L2s que añaden complejidad.',
          'Solana fue diseñada pensando en el usuario final: barata, rápida, simple. Una sola capa, sin fragmentación.',
          'Para aprender y experimentar con cripto, Solana es objetivamente mejor. Puedes probar 100 cosas por menos de $1.',
          'Esto no significa que Ethereum sea "malo"—pero sí que Solana es mejor para empezar y para uso diario.',
          'El futuro probablemente tendrá espacio para ambas, pero Solana está mejor posicionada para adopción masiva.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Quieres hacer un swap de $50 USDC por SOL. ¿Cuánto pagarías aproximadamente en fees en Ethereum L1 vs Solana?',
          options: [
            { id: 'a', text: 'Ethereum: $0.50, Solana: $0.50 (igual)' },
            { id: 'b', text: 'Ethereum: $15-40, Solana: $0.0002' },
            { id: 'c', text: 'Ethereum: $0.01, Solana: $5' },
            { id: 'd', text: 'Ambos son gratis' }
          ],
          correctAnswer: 'b',
          explanation: 'Esta es la diferencia práctica más importante. En Ethereum L1, un swap simple puede costar $15-40 en gas. En Solana, cuesta menos de un centavo. Para montos pequeños, Ethereum L1 es económicamente inviable.'
        },
        {
          id: 'q2',
          question: '¿Qué significa que Solana sea "monolítica" vs Ethereum siendo "modular"?',
          options: [
            { id: 'a', text: 'Solana es más lenta porque tiene una sola capa' },
            { id: 'b', text: 'Solana pone todo (ejecución, consenso, datos) en L1, sin necesidad de L2s ni bridges. Ethereum divide en capas que requieren bridges para mover fondos.' },
            { id: 'c', text: 'Modular significa más rápido' },
            { id: 'd', text: 'No hay diferencia práctica' }
          ],
          correctAnswer: 'b',
          explanation: 'En Ethereum, necesitas mover fondos entre L1 y L2s usando bridges (costoso, lento, riesgoso). En Solana, todo está en un lugar: sin fragmentación, sin bridges, sin complejidad adicional.'
        },
        {
          id: 'q3',
          question: '¿Cuál es el principal argumento CONTRA Solana que mencionan los críticos?',
          options: [
            { id: 'a', text: 'Es demasiado barata' },
            { id: 'b', text: 'Requiere hardware más potente para validadores, lo que significa menos validadores que Ethereum (menor descentralización relativa)' },
            { id: 'c', text: 'No tiene smart contracts' },
            { id: 'd', text: 'Solo funciona en algunos países' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un trade-off real: Solana prioriza velocidad y bajo costo, pero esto requiere computadoras más potentes para validadores. Tiene menos validadores que Ethereum. El debate es si eso importa más que la usabilidad.'
        },
        {
          id: 'q4',
          question: '¿Qué es Jupiter en el ecosistema de Solana?',
          options: [
            { id: 'a', text: 'Una wallet como Phantom' },
            { id: 'b', text: 'El mejor agregador DEX—te encuentra el mejor precio entre todos los exchanges, con DCA y órdenes límite incluidos' },
            { id: 'c', text: 'Un marketplace de NFTs' },
            { id: 'd', text: 'El token nativo de Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'Jupiter es para Solana lo que Uniswap es para Ethereum, pero con más funciones. Agrega liquidez de todos los DEXs para darte el mejor precio, y tiene features como DCA (compra programada) y órdenes límite.'
        },
        {
          id: 'q5',
          question: '¿Qué es Firedancer y por qué importa?',
          options: [
            { id: 'a', text: 'Un nuevo token de Solana' },
            { id: 'b', text: 'Una wallet alternativa a Phantom' },
            { id: 'c', text: 'Un nuevo cliente de validador construido por Jump Trading que aumentará la velocidad 10-100x y eliminará el riesgo de "un solo cliente"' },
            { id: 'd', text: 'Un juego en Solana' }
          ],
          correctAnswer: 'c',
          explanation: 'Firedancer es el upgrade más importante en la historia de Solana. Jump Trading (traders profesionales) lo están construyendo desde cero. Hará la red mucho más rápida y resistente al tener múltiples clientes independientes.'
        }
      ]
    }
  },
  // Orphaned Lessons (Moved from 9-12)
  35: {
    id: 35,
    title: 'Obteniendo tus Primeros SOL',
    level: 'Principiante',
    number: '11 de 19',
    duration: '25 minutos',
    type: 'Tutorial',
    description: 'El puente entre el mundo tradicional y cripto. Cómo convertir pesos, dólares o tu moneda local a SOL y llevarlo a tu wallet.',
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
        title: 'El Puente Fiat → Cripto',
        content: 'Ya tienes tu wallet Phantom lista. Ahora necesitas llenarla. El problema: tu banco no te vende SOL directamente. Necesitas un intermediario—un **Exchange Centralizado (CEX)**—que acepte tu dinero tradicional (fiat) y te dé criptomonedas a cambio. Piensa en el exchange como una casa de cambio: entras con pesos colombianos, sales con dólares... pero en este caso, entras con pesos y sales con SOL. La diferencia clave: los exchanges también custodian tu cripto mientras está ahí. Por eso, una vez que compras, debes **retirar a tu wallet propia**.',
        highlight: {
          title: 'El Flujo Completo',
          text: '1) Creas cuenta en exchange → 2) Depositas fiat (transferencia/tarjeta) → 3) Compras SOL → 4) Retiras a tu Phantom. El paso 4 es CRÍTICO: no dejes tu cripto en el exchange más tiempo del necesario.'
        }
      },
      {
        type: 'main',
        title: 'Eligiendo tu Exchange: Opciones para Latinoamérica',
        content: 'No todos los exchanges operan en todos los países ni aceptan todas las monedas. Estas son las opciones más confiables para la región:',
        features: [
          { icon: Landmark, title: 'Binance', text: 'El exchange más grande del mundo. Acepta transferencias bancarias locales en muchos países LATAM (Colombia, Argentina, México, Perú). Tiene P2P para comprar con pesos directamente a otros usuarios. Fees bajos.' },
          { icon: Shield, title: 'Backpack Exchange', text: 'Creado por el equipo detrás de Mad Lads (NFT top de Solana). Especializado en Solana. Regulado en Dubai. Excelente si tu foco es el ecosistema Solana. Interfaz moderna y fees competitivos.' },
          { icon: Globe, title: 'Coinbase', text: 'El exchange más regulado y "tradicional". Ideal si valoras la seguridad institucional sobre todo. Más caro que otros, pero muy confiable. Bueno para USA y algunos países LATAM.' },
          { icon: Activity, title: 'Kraken', text: 'Excelente reputación de seguridad. Nunca ha sido hackeado en 10+ años. Acepta muchas monedas fiat. Buena opción si priorizas track record de seguridad.' }
        ]
      },
      {
        type: 'main',
        title: 'El Proceso Paso a Paso',
        content: 'Vamos a recorrer el proceso completo. Usaremos Binance como ejemplo porque es el más común en LATAM, pero el flujo es similar en todos:',
        features: [
          { icon: Users, title: 'Paso 1: Crear Cuenta y KYC', text: 'Regístrate con email. Te pedirán verificar identidad (KYC): foto de documento, selfie, a veces comprobante de domicilio. Esto es obligatorio por regulaciones anti-lavado. Tarda 10 minutos a 24 horas.' },
          { icon: Landmark, title: 'Paso 2: Depositar Fiat', text: 'Una vez verificado, deposita dinero. Opciones: transferencia bancaria (más barata, tarda horas/días), tarjeta de crédito/débito (instantáneo pero 2-4% de fee), P2P (compras a otros usuarios directamente).' },
          { icon: Activity, title: 'Paso 3: Comprar SOL', text: 'Con fondos en el exchange, ve a "Trading" o "Comprar Cripto". Busca el par SOL/USD o SOL/tu-moneda. Puedes usar "Market Order" (compra al precio actual) o "Limit Order" (defines el precio que quieres pagar).' },
          { icon: Wallet, title: 'Paso 4: Retirar a Phantom', text: 'Ve a "Wallet" → "Retiro" → busca SOL. Pega tu dirección de Phantom (la que copiaste de la app). IMPORTANTE: Selecciona la red SOLANA. Confirma y espera 1-10 minutos.' }
        ]
      },
      {
        type: 'main',
        title: 'El Error que Destruye Fondos: Red Incorrecta',
        content: 'Este es el error más común y más caro para principiantes. Cuando retiras, el exchange te pregunta a QUÉ RED enviar. Para SOL, SIEMPRE debes elegir la red **Solana (SOL)**. Si eliges otra red (como ERC20 o BEP20), tus fondos irán a una dirección de Ethereum o BNB Chain que NO existe en tu Phantom. El dinero se pierde para siempre.',
        features: [
          { icon: CheckCircle, title: 'Red Correcta', text: 'Solana (SOL) o "Solana Network" o simplemente "SOL". La dirección de Phantom empieza con caracteres como "5xB7..." o similar.' },
          { icon: AlertTriangle, title: 'Redes Incorrectas', text: 'ERC20 (Ethereum), BEP20 (BNB Chain), TRC20 (Tron). Si ves estas opciones y las eliges, tus fondos van a una blockchain diferente donde Phantom NO puede accederlos.' },
          { icon: Shield, title: 'Verificación Triple', text: 'Antes de confirmar: 1) ¿La red dice "Solana"? 2) ¿La dirección es la de mi Phantom? 3) ¿Verifiqué los primeros y últimos 4 caracteres? Si todo está bien, procede.' }
        ],
        highlight: {
          title: 'Historia Real',
          text: 'Un usuario envió $5,000 en SOL eligiendo la red ERC20 por error. Los fondos llegaron a una dirección de Ethereum que nadie controla. No hay forma de recuperarlos. Están perdidos para siempre en la blockchain de Ethereum. 30 segundos de verificación habrían salvado todo.'
        }
      },
      {
        type: 'main',
        title: 'Fees: Lo Que Realmente Pagas',
        content: 'Hay varios fees en el proceso. Entiéndelos para no llevarte sorpresas:',
        features: [
          { icon: Percent, title: 'Fee de Depósito', text: 'Transferencia bancaria: usualmente gratis. Tarjeta de crédito: 2-4% (evítalo si puedes). P2P: varía según el vendedor.' },
          { icon: Percent, title: 'Fee de Trading', text: 'Cuando compras SOL, el exchange cobra 0.1-0.5% del monto. En $100, pagarías $0.10-$0.50. Pequeño.' },
          { icon: Percent, title: 'Fee de Retiro', text: 'El exchange cobra un fee FIJO por retirar, independiente del monto. Binance cobra ~0.01 SOL (~$2-3). Este fee es del EXCHANGE, no de Solana. El fee real de la red Solana es $0.0002.' },
          { icon: CheckCircle, title: 'Estrategia Óptima', text: 'Deposita por transferencia bancaria (gratis), compra en lotes grandes para minimizar fees de retiro proporcionales, y retira inmediatamente a tu wallet.' }
        ]
      },
      {
        type: 'main',
        title: 'Alternativa: Compra P2P (Peer-to-Peer)',
        content: 'Si tu banco no puede transferir a exchanges o quieres más privacidad, el P2P es una opción:',
        features: [
          { icon: Users, title: 'Cómo Funciona', text: 'Dentro del exchange (Binance P2P, por ejemplo), compras directamente a OTRO usuario. Tú le transfieres pesos por Nequi/Bancolombia/etc, y él te envía USDT o SOL a tu cuenta del exchange. El exchange actúa como escrow.' },
          { icon: CheckCircle, title: 'Ventajas', text: 'Más métodos de pago (Nequi, Daviplata, efectivo), a veces mejores tasas, útil si tu banco bloquea transferencias a exchanges.' },
          { icon: AlertTriangle, title: 'Riesgos', text: 'Vendedores con poca reputación pueden ser estafadores. SOLO usa vendedores con 95%+ de calificación positiva y muchas transacciones completadas. Nunca liberes el cripto antes de confirmar que recibiste el pago.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist para tu Primera Compra',
        items: [
          'Creaste cuenta en un exchange confiable (Binance, Backpack, Coinbase, Kraken) y completaste la verificación KYC.',
          'Depositaste fiat usando el método más barato disponible (transferencia > tarjeta).',
          'Compraste SOL usando una orden de mercado simple.',
          'Al retirar, seleccionaste la red SOLANA (no ERC20, no BEP20).',
          'Verificaste la dirección de tu Phantom: primeros 4 caracteres + últimos 4 caracteres.',
          'Esperaste la confirmación y verificaste que llegó a tu Phantom.',
          'NO dejaste fondos en el exchange. Todo está en tu wallet propia.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Al retirar SOL de Binance a Phantom, el exchange te muestra 3 opciones de red: SOL, ERC20, BEP20. ¿Cuál eliges?',
          options: [
            { id: 'a', text: 'ERC20 porque es la más popular' },
            { id: 'b', text: 'SOL (Solana Network) porque Phantom es una wallet de Solana' },
            { id: 'c', text: 'BEP20 porque tiene fees más bajos' },
            { id: 'd', text: 'Cualquiera, todas llegan al mismo lugar' }
          ],
          correctAnswer: 'b',
          explanation: 'SIEMPRE debes elegir la red nativa del activo y la wallet destino. Phantom es una wallet de Solana, así que debes enviar por la red Solana. Elegir otra red significa perder los fondos PARA SIEMPRE.'
        },
        {
          id: 'q2',
          question: 'Compraste $200 de SOL en un exchange. ¿Qué debes hacer después?',
          options: [
            { id: 'a', text: 'Dejarlo en el exchange porque es más seguro' },
            { id: 'b', text: 'Retirar inmediatamente a tu Phantom wallet (autocustodia)' },
            { id: 'c', text: 'Esperar a que suba de precio antes de moverlo' },
            { id: 'd', text: 'Transferirlo a otro exchange para diversificar' }
          ],
          correctAnswer: 'b',
          explanation: 'Not your keys, not your coins. Los exchanges pueden congelar tu cuenta, ser hackeados, o quebrar (como FTX). Siempre retira a tu wallet propia lo antes posible.'
        },
        {
          id: 'q3',
          question: 'El exchange cobra 0.01 SOL (~$2) por retirar a tu wallet. El fee real de la red Solana es $0.0002. ¿Por qué la diferencia?',
          options: [
            { id: 'a', text: 'Solana subió sus fees' },
            { id: 'b', text: 'El exchange está cobrando su propio fee de servicio, muy por encima del costo real de la red' },
            { id: 'c', text: 'Es un error del exchange' },
            { id: 'd', text: 'Los fees varían según la hora del día' }
          ],
          correctAnswer: 'b',
          explanation: 'Los exchanges cobran fees de retiro como negocio, no porque la red lo exija. El fee real de Solana es fracción de centavo. La diferencia es ganancia del exchange. Por eso conviene retirar en montos grandes para minimizar el impacto proporcional.'
        },
        {
          id: 'q4',
          question: 'Vas a usar Binance P2P para comprar SOL con pesos colombianos. El vendedor tiene 98% de calificación positiva y 500 órdenes completadas. ¿Es seguro?',
          options: [
            { id: 'a', text: 'No, P2P siempre es estafa' },
            { id: 'b', text: 'Sí, un vendedor con alta reputación y muchas órdenes es generalmente confiable. Además, el exchange actúa como escrow.' },
            { id: 'c', text: 'Solo si le envío mi seed phrase para verificar' },
            { id: 'd', text: 'No, solo debo usar vendedores con 100%' }
          ],
          correctAnswer: 'b',
          explanation: 'En P2P, la reputación es clave. 98% con 500+ órdenes indica un vendedor confiable. El exchange retiene el cripto del vendedor hasta que confirmas el pago. Nunca compartas seed phrase con nadie.'
        },
        {
          id: 'q5',
          question: 'Quieres depositar $500 al exchange. ¿Cuál es el método MÁS económico?',
          options: [
            { id: 'a', text: 'Tarjeta de crédito (instantáneo)' },
            { id: 'b', text: 'Transferencia bancaria local (tarda más pero usualmente gratis)' },
            { id: 'c', text: 'PayPal' },
            { id: 'd', text: 'Todos cuestan lo mismo' }
          ],
          correctAnswer: 'b',
          explanation: 'Tarjetas de crédito cobran 2-4% de fee ($10-20 en $500). Transferencias bancarias suelen ser gratuitas o muy baratas. Si puedes esperar unas horas, la transferencia es siempre mejor opción.'
        }
      ]
    }
  },
  36: {
    id: 36,
    title: 'Tu Primera Transacción',
    level: 'Principiante',
    number: '12 de 19',
    duration: '20 minutos',
    type: 'Práctica',
    description: 'Envía valor a través del mundo en segundos, sin bancos ni intermediarios. Este momento cambiará tu perspectiva del dinero.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Mágico',
        content: 'Hay un antes y un después de tu primera transacción cripto. Cuando envías valor a alguien del otro lado del mundo, en segundos, sin pedir permiso a nadie, y pagando menos de un centavo—algo hace "clic" en tu cabeza. Entiendes visceralmente por qué esto es revolucionario. Ya tienes SOL en tu Phantom. Ahora vamos a moverlo. Puedes enviar a un amigo, a una segunda wallet tuya, o incluso hacer un swap. Lo importante es que experimentes el proceso completo.',
        highlight: {
          title: 'Lo Que Estás a Punto de Experimentar',
          text: 'En el sistema bancario, una transferencia internacional tarda 3-5 días y cuesta $25-50. En Solana, tarda menos de 1 segundo y cuesta menos de $0.001. Misma función, 1000x más eficiente. Esto no es exageración—es la realidad que vas a vivir en los próximos 2 minutos.'
        }
      },
      {
        type: 'main',
        title: 'Anatomía de una Transacción en Solana',
        content: 'Antes de hacerlo, entiende qué está pasando bajo la superficie cuando envías cripto:',
        features: [
          { icon: Lock, title: 'Firmas Criptográficas', text: 'Cuando presionas "Enviar", tu wallet usa tu llave privada para "firmar" la transacción matemáticamente. Esta firma prueba que TÚ autorizaste el movimiento, sin revelar tu llave privada.' },
          { icon: Network, title: 'Propagación a la Red', text: 'Tu transacción firmada se envía a los validadores de Solana. En milisegundos, miles de computadoras en todo el mundo la verifican y la agregan al siguiente bloque.' },
          { icon: CheckCircle, title: 'Confirmación', text: 'Una vez incluida en un bloque, la transacción es PERMANENTE. Queda grabada para siempre en la blockchain. Nadie puede revertirla, censurarla, o negarla.' },
          { icon: Globe, title: 'Actualización del Estado', text: 'La blockchain actualiza los balances: tu cuenta tiene menos SOL, la cuenta destino tiene más. Todo esto pasa en ~400 milisegundos.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso a Paso: Enviar SOL desde Phantom',
        content: 'Vamos a hacerlo. Sigue estos pasos exactamente:',
        features: [
          { icon: Wallet, title: 'Paso 1: Abre Phantom', text: 'En la pantalla principal verás tu balance de SOL. Haz clic en el token SOL para ver opciones.' },
          { icon: Zap, title: 'Paso 2: Haz clic en "Send"', text: 'Verás un campo para ingresar la dirección destino y el monto a enviar.' },
          { icon: Shield, title: 'Paso 3: Pega la Dirección Destino', text: 'Pide a tu amigo que te envíe su dirección de Solana (algo como "7xK9p..."). Pégala en el campo. VERIFICA los primeros y últimos 4 caracteres manualmente.' },
          { icon: Activity, title: 'Paso 4: Ingresa el Monto', text: 'Para la primera prueba, envía algo pequeño ($1-5 en SOL). Siempre deja algo de SOL para fees futuros (~0.01 SOL mínimo).' },
          { icon: CheckCircle, title: 'Paso 5: Confirma y Observa', text: 'Revisa el resumen, confirma. En 1-2 segundos verás "Confirmed". Pide a tu amigo que revise—ya debería ver los fondos.' }
        ]
      },
      {
        type: 'main',
        title: 'El Protocolo de Seguridad: Nunca Saltártelo',
        content: 'Las transacciones blockchain son IRREVERSIBLES. No hay "Ctrl+Z". No hay soporte técnico que las cancele. Estas precauciones son obligatorias:',
        features: [
          { icon: AlertTriangle, title: 'Verifica la Dirección', text: 'SIEMPRE compara los primeros 4 y últimos 4 caracteres de la dirección con el original. Los clipboard hijackers pueden cambiar la dirección cuando la copias. Una letra diferente = fondos perdidos para siempre.' },
          { icon: Shield, title: 'Transacción de Prueba', text: 'Si vas a enviar $1,000+, SIEMPRE envía primero una prueba de $1-5. Espera a que llegue. SOLO ENTONCES envía el resto. Los segundos que "pierdes" pueden salvarte miles.' },
          { icon: Lock, title: 'Confirma el Contexto', text: 'Si alguien "te urge" a enviar rápido, es red flag. Los estafadores crean presión artificial. Las transacciones legítimas pueden esperar 2 minutos de verificación.' }
        ],
        highlight: {
          title: 'Historia de Horror',
          text: 'Un usuario copiaba direcciones de un chat de Discord. Un malware cambió silenciosamente la dirección en su portapapeles. Envió $15,000 a la wallet del atacante. Irreversible. Irrecuperable. Si hubiera verificado visualmente, habría visto que los caracteres no coincidían.'
        }
      },
      {
        type: 'main',
        title: 'Recibir Cripto: La Otra Mitad',
        content: 'Recibir es más simple que enviar, pero hay cosas que saber:',
        features: [
          { icon: Wallet, title: 'Tu Dirección Pública', text: 'En Phantom, haz clic en tu dirección (arriba) para copiarla. Esta dirección es SEGURA de compartir. Otros pueden ver tu balance, pero no pueden sacar fondos.' },
          { icon: Globe, title: 'Cualquiera Puede Enviarte', text: 'No necesitas "aceptar" transacciones. Si alguien tiene tu dirección, puede enviarte tokens. Por eso a veces recibirás tokens spam/estafa—ignóralos.' },
          { icon: CheckCircle, title: 'Verifica en Phantom', text: 'Los fondos aparecen automáticamente en tu balance segundos después de que la transacción se confirma. No necesitas "reclamar" nada.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Acabas de Lograr',
        items: [
          'Enviaste valor a través del mundo sin pedir permiso a ningún banco, gobierno, o intermediario.',
          'Pagaste menos de $0.001 en fees—comparado con $25-50 en el sistema tradicional.',
          'La transacción tardó ~1 segundo—comparado con 3-5 días bancarios.',
          'Quedó grabada permanentemente en la blockchain—verificable por cualquiera, para siempre.',
          'Entiendes por qué las direcciones deben verificarse: las transacciones son IRREVERSIBLES.',
          'Tienes el poder de mover TU dinero, cuando TÚ quieras, donde TÚ quieras. Esto es libertad financiera.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Vas a enviar $5,000 en SOL a un amigo. ¿Cuál es el protocolo correcto?',
          options: [
            { id: 'a', text: 'Enviar todo de una vez para ahorrar tiempo' },
            { id: 'b', text: 'Enviar primero $5 de prueba, verificar que llegue, y LUEGO enviar el resto' },
            { id: 'c', text: 'Pedirle a tu amigo que te envíe su seed phrase para verificar' },
            { id: 'd', text: 'Usar la función "envío rápido" sin revisar' }
          ],
          correctAnswer: 'b',
          explanation: 'SIEMPRE haz una transacción de prueba pequeña para montos grandes. Los segundos que "pierdes" pueden salvarte miles. Una dirección incorrecta significa pérdida total irreversible.'
        },
        {
          id: 'q2',
          question: 'Copiaste una dirección de Solana y la pegaste en Phantom. Antes de enviar, ¿qué debes verificar?',
          options: [
            { id: 'a', text: 'Que la persona que te la dio sea simpática' },
            { id: 'b', text: 'Los primeros 4 y últimos 4 caracteres de la dirección coinciden con el original (protección contra clipboard hijackers)' },
            { id: 'c', text: 'Nada, confío en el copy-paste' },
            { id: 'd', text: 'Solo el primer carácter' }
          ],
          correctAnswer: 'b',
          explanation: 'El malware llamado "clipboard hijacker" puede reemplazar silenciosamente la dirección que copias por una del atacante. Verificar visualmente los caracteres es tu última línea de defensa.'
        },
        {
          id: 'q3',
          question: 'Tu amigo te quiere enviar SOL. ¿Qué información le das?',
          options: [
            { id: 'a', text: 'Tu frase semilla para que pueda acceder a tu wallet' },
            { id: 'b', text: 'Tu contraseña de Phantom' },
            { id: 'c', text: 'Tu dirección pública de Solana (seguro de compartir)' },
            { id: 'd', text: 'El nombre de tu wallet' }
          ],
          correctAnswer: 'c',
          explanation: 'Tu dirección pública es como un número de cuenta: otros pueden ver y depositar, pero NO pueden retirar. NUNCA compartas tu seed phrase con nadie, ni siquiera para recibir.'
        },
        {
          id: 'q4',
          question: 'Enviaste SOL a una dirección incorrecta. El dinero ya fue confirmado en la blockchain. ¿Qué puedes hacer?',
          options: [
            { id: 'a', text: 'Llamar a soporte de Solana para revertir' },
            { id: 'b', text: 'Pedir a Phantom que cancele la transacción' },
            { id: 'c', text: 'Nada. Las transacciones blockchain son irreversibles. Los fondos están perdidos a menos que contactes al dueño de esa dirección.' },
            { id: 'd', text: 'Esperar 24 horas para que se revierta automáticamente' }
          ],
          correctAnswer: 'c',
          explanation: 'No hay "soporte de Solana". No hay reversiones. Si enviaste a una dirección que no controlas, esos fondos están perdidos para siempre. Por esto la verificación previa es CRÍTICA.'
        },
        {
          id: 'q5',
          question: '¿Cuánto cuesta aproximadamente una transacción en Solana?',
          options: [
            { id: 'a', text: '$5-10, similar a una transferencia bancaria' },
            { id: 'b', text: '$0.0002 aproximadamente (fracción de centavo)' },
            { id: 'c', text: '1% del monto enviado' },
            { id: 'd', text: 'Es gratis completamente' }
          ],
          correctAnswer: 'b',
          explanation: 'Una transacción típica en Solana cuesta alrededor de 5,000 lamports (~$0.0002). Es tan barato que puedes hacer cientos de transacciones por menos de $1. Esto es lo que hace a Solana práctica para uso diario.'
        }
      ]
    }
  },
  37: {
    id: 37,
    title: 'Exploradores de Bloques (Solscan)',
    level: 'Principiante',
    number: '13 de 19',
    duration: '18 minutos',
    type: 'Herramienta',
    description: '"Don\'t Trust, Verify" — La filosofía central de cripto. Aprende a usar la herramienta que te permite verificar cualquier cosa en la blockchain.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué es un Explorador de Bloques?',
        content: 'La blockchain es un libro contable público. Cada transacción, cada balance, cada contrato—todo está ahí, visible para quien quiera verlo. Pero leer datos crudos de blockchain es imposible para humanos normales. Un **explorador de bloques** es una herramienta que traduce esos datos a formato legible. Para Solana, el explorador más usado es **Solscan.io**. Piénsalo como el "Google de Solana"—puedes buscar cualquier dirección, cualquier transacción, cualquier token, y ver toda su historia.',
        highlight: {
          title: 'Don\'t Trust, Verify',
          text: 'Esta frase resume la filosofía cripto. ¿Tu amigo dice que envió el pago? Verifica en Solscan. ¿Un proyecto dice que tiene 100,000 holders? Verifica en Solscan. ¿Un exchange dice que procesó tu retiro? Verifica en Solscan. La blockchain no miente.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Puedes Verificar en Solscan?',
        content: 'Solscan te da acceso a toda la información pública de la blockchain de Solana:',
        features: [
          { icon: Activity, title: 'Transacciones', text: 'Pega el Signature (TX ID) de cualquier transacción y verás: estado (Success/Fail), monto, direcciones involucradas, fee pagado, timestamp exacto, y bloque donde se incluyó.' },
          { icon: Wallet, title: 'Wallets/Cuentas', text: 'Pega cualquier dirección de Solana y verás: balance actual de SOL y todos los tokens, historial completo de transacciones, NFTs en la wallet, y tokens SPL.' },
          { icon: Gem, title: 'Tokens', text: 'Busca cualquier token y verás: supply total, holders, distribución, transacciones recientes, y el contract address oficial (crucial para evitar tokens falsos).' },
          { icon: Server, title: 'Contratos/Programas', text: 'Cada smart contract en Solana es verificable. Puedes ver su código (si está verificado), historial de uso, y estadísticas.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Práctico: Verificar una Transacción',
        content: 'Enviaste SOL y quieres confirmar que llegó. Aquí está el proceso exacto:',
        features: [
          { icon: Search, title: 'Paso 1: Obtén el TX Signature', text: 'En Phantom, después de enviar, haz clic en la transacción en tu historial. Verás un "Signature" o "TX ID"—una cadena larga de letras y números. Cópialo.' },
          { icon: Globe, title: 'Paso 2: Abre Solscan', text: 'Ve a solscan.io (verifica la URL). En la barra de búsqueda, pega el Signature y presiona Enter.' },
          { icon: CheckCircle, title: 'Paso 3: Lee el Resultado', text: 'Verás el estado de la transacción. "Success" = confirmada y completa. "Fail" = falló (los fondos no se movieron). También verás el monto, las direcciones de origen y destino, y el fee.' },
          { icon: Activity, title: 'Paso 4: Verifica el Destino', text: 'Haz clic en la dirección de destino para ver su balance actual. Si los fondos llegaron, aparecerán en el balance de esa wallet.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Práctico: Investigar una Wallet',
        content: 'Alguien te va a pagar en P2P. Quieres verificar que realmente tiene fondos antes de enviar tu parte:',
        features: [
          { icon: Users, title: 'Pide la Dirección Pública', text: 'La otra persona te da su dirección de Solana. Esto es público y seguro de compartir—solo pueden ver, no sacar fondos.' },
          { icon: Search, title: 'Búscala en Solscan', text: 'Pega la dirección en solscan.io. Verás inmediatamente su balance de SOL y todos los tokens que tiene.' },
          { icon: Activity, title: 'Revisa el Historial', text: 'Puedes ver todas las transacciones pasadas. ¿Es una wallet nueva sin historia? ¿O tiene actividad consistente? Esto te dice mucho sobre legitimidad.' },
          { icon: AlertTriangle, title: 'Red Flags', text: 'Si la wallet tiene balance cero o fue creada hace 5 minutos, sospecha. Los estafadores suelen usar wallets desechables.' }
        ]
      },
      {
        type: 'main',
        title: 'Verificar Tokens: Evita Estafas',
        content: 'Cualquiera puede crear un token llamado "USDC" o "BONK". ¿Cómo sabes cuál es el real?',
        features: [
          { icon: Shield, title: 'El Contract Address (CA)', text: 'Cada token tiene una dirección única llamada "mint address" o "contract address". Es como el DNI del token. Dos tokens pueden tener el mismo nombre, pero NUNCA el mismo CA.' },
          { icon: CheckCircle, title: 'Fuentes Oficiales', text: 'Busca el CA oficial en CoinGecko, CoinMarketCap, o el sitio web oficial del proyecto. Nunca confíes en CAs que te mandan por Discord/Telegram.' },
          { icon: Search, title: 'Verificación en Solscan', text: 'Busca el token en Solscan y compara el CA. Si coincide con el oficial, es legítimo. Si no, es una copia falsa.' }
        ],
        highlight: {
          title: 'Ejemplo Real',
          text: 'USDC oficial en Solana: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v. Si alguien te ofrece "USDC" con un CA diferente, es una estafa. SIEMPRE verifica el CA antes de comprar o aceptar cualquier token.'
        }
      },
      {
        type: 'takeaways',
        title: 'El Explorador como Superpoder',
        items: [
          'Solscan.io es la fuente de verdad de Solana. Lo que dice Solscan, ES la realidad.',
          'Cualquier transacción puede verificarse usando su Signature/TX ID.',
          'Cualquier wallet es pública—puedes ver balance e historial de cualquier dirección.',
          'SIEMPRE verifica el Contract Address de tokens para evitar comprar falsificaciones.',
          'Antes de trades P2P, verifica que la contraparte realmente tenga los fondos que dice.',
          '"Don\'t Trust, Verify" no es paranoia—es el estándar profesional en cripto.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Enviaste SOL hace 10 minutos. Tu amigo dice que no le llegó. ¿Cuál es el paso correcto para verificar?',
          options: [
            { id: 'a', text: 'Confiar en tu amigo y reenviar' },
            { id: 'b', text: 'Copiar el TX Signature de tu transacción, buscarlo en Solscan, y verificar si dice "Success" y a qué dirección fue' },
            { id: 'c', text: 'Contactar soporte de Solana' },
            { id: 'd', text: 'Esperar 24 horas' }
          ],
          correctAnswer: 'b',
          explanation: 'La blockchain es la fuente de verdad, no las personas. Si Solscan dice "Success" y muestra la dirección correcta, el dinero llegó. Si tu amigo "no lo ve", el problema está en su wallet, no en la transacción.'
        },
        {
          id: 'q2',
          question: 'Vas a hacer un trade P2P con alguien que dice tener 500 SOL. ¿Cómo verificas que realmente los tiene?',
          options: [
            { id: 'a', text: 'Le pido una captura de pantalla de su wallet' },
            { id: 'b', text: 'Confío en su palabra porque parece buena persona' },
            { id: 'c', text: 'Le pido su dirección pública y la busco en Solscan para ver su balance real en tiempo real' },
            { id: 'd', text: 'Le pido su seed phrase para verificar' }
          ],
          correctAnswer: 'c',
          explanation: 'Las capturas pueden editarse con Photoshop. La blockchain no miente. Pega su dirección en Solscan y verás exactamente cuánto tiene. Las direcciones públicas son seguras de compartir.'
        },
        {
          id: 'q3',
          question: 'Quieres comprar BONK. Hay 3 tokens llamados "BONK" en Jupiter. ¿Cómo sabes cuál es el real?',
          options: [
            { id: 'a', text: 'El que tenga el logo más bonito' },
            { id: 'b', text: 'El primero que aparece en la lista' },
            { id: 'c', text: 'Busco el Contract Address (CA) oficial en CoinGecko y verifico que coincida en Solscan' },
            { id: 'd', text: 'El que más gente está comprando' }
          ],
          correctAnswer: 'c',
          explanation: 'Cualquiera puede crear un token con el mismo nombre y logo. El ÚNICO identificador único es el Contract Address. Siempre verifica el CA desde fuentes oficiales antes de comprar cualquier token.'
        },
        {
          id: 'q4',
          question: 'En Solscan, buscas una transacción y dice "Status: Fail". ¿Qué significa?',
          options: [
            { id: 'a', text: 'La transacción está pendiente' },
            { id: 'b', text: 'La transacción falló—los fondos NO se movieron y probablemente volvieron a la wallet origen' },
            { id: 'c', text: 'Los fondos se perdieron' },
            { id: 'd', text: 'Necesitas esperar más tiempo' }
          ],
          correctAnswer: 'b',
          explanation: '"Fail" significa que la transacción no se ejecutó correctamente. Los fondos no se transfirieron. Usualmente siguen en la wallet origen. Deberás intentar de nuevo, posiblemente con más SOL para fees si ese fue el problema.'
        },
        {
          id: 'q5',
          question: '¿Qué información NO puedes ver en Solscan sobre una wallet pública?',
          options: [
            { id: 'a', text: 'Su balance de SOL' },
            { id: 'b', text: 'Su historial de transacciones' },
            { id: 'c', text: 'La seed phrase del dueño' },
            { id: 'd', text: 'Los tokens que posee' }
          ],
          correctAnswer: 'c',
          explanation: 'Las seed phrases NUNCA están en la blockchain. Son secretas y solo las conoce el dueño. Todo lo demás (balance, historial, tokens) es público y visible para cualquiera que busque la dirección.'
        }
      ]
    }
  },
  38: {
    id: 38,
    title: 'Evitar Estafas en Web3',
    level: 'Principiante',
    number: '14 de 19',
    duration: '30 minutos',
    type: 'Seguridad Vital',
    description: 'El 99% de los robos en cripto son evitables. Conoce las tácticas de los estafadores y protégete antes de perder el dinero que tanto te costó ganar.',
    sections: [
      {
        type: 'intro',
        title: 'La Realidad Brutal de Web3',
        content: 'Aquí no hay bancos que reviertan transacciones fraudulentas. No hay seguro de depósito. No hay policía cripto que recupere tus fondos. Si te roban, perdiste—punto. Pero aquí está la buena noticia: el 99% de las estafas siguen los mismos patrones. Una vez que los conoces, son fáciles de detectar. Esta lección podría ser la más valiosa del curso—literalmente puede salvarte miles de dólares.',
        highlight: {
          title: 'Estadística Real',
          text: 'En 2023, los usuarios perdieron más de $2 MIL MILLONES en estafas cripto—no hackeos sofisticados, sino ingeniería social donde las VÍCTIMAS entregaron sus llaves voluntariamente. Los estafadores no necesitan ser hackers genios. Solo necesitan que bajes la guardia una vez.'
        }
      },
      {
        type: 'main',
        title: 'Estafa #1: El Falso Soporte Técnico',
        content: 'Esta es la estafa MÁS común. Así funciona:',
        features: [
          { icon: Users, title: 'El Setup', text: 'Publicas una pregunta en Discord/Telegram/Twitter sobre un problema con tu wallet. O simplemente estás en un servidor de cripto.' },
          { icon: AlertTriangle, title: 'El Ataque', text: 'Recibes un DM de "Phantom Support", "Jupiter Help", o similar. Dicen que detectaron un problema con tu cuenta y necesitan verificar tu seed phrase para "proteger tus fondos".' },
          { icon: Shield, title: 'La Realidad', text: 'NINGUNA empresa legítima te escribirá primero por DM. NINGUNA te pedirá tu seed phrase JAMÁS. El "soporte" es un estafador. Si les das la frase, vacían tu wallet en segundos.' }
        ],
        highlight: {
          title: 'Regla Absoluta',
          text: 'Si alguien te contacta primero ofreciendo "ayuda" con tu wallet, es estafa. El 100% de las veces. Sin excepciones. El soporte real nunca inicia conversaciones por DM.'
        }
      },
      {
        type: 'main',
        title: 'Estafa #2: Phishing (Sitios Falsos)',
        content: 'Los estafadores crean copias EXACTAS de sitios legítimos para robarte:',
        features: [
          { icon: Globe, title: 'Cómo te Encuentran', text: 'Buscan "Phantom wallet" o "Jupiter swap" en Google. El primer resultado es un ANUNCIO de "phantomm.app" o "jupiter-swap.io". El sitio se ve IDÉNTICO al real.' },
          { icon: AlertTriangle, title: 'El Engaño', text: 'El sitio te pide "conectar wallet" o "importar wallet existente". Te pide tu seed phrase. Al ingresarla, la roban en tiempo real y vacían todo.' },
          { icon: Shield, title: 'La Defensa', text: 'NUNCA hagas clic en anuncios de Google para sitios cripto. Escribe la URL manualmente: phantom.app, jup.ag, solscan.io. Guarda los sitios oficiales en favoritos.' }
        ]
      },
      {
        type: 'main',
        title: 'Estafa #3: NFTs y Tokens Maliciosos',
        content: 'Cualquiera puede enviarte tokens o NFTs sin tu permiso. Los estafadores lo usan así:',
        features: [
          { icon: Gem, title: 'El Airdrop Misterioso', text: 'Aparece un NFT en tu wallet que dice "Has ganado $10,000. Visita claim-rewards.xyz para reclamar". O recibes un token desconocido con valor aparente.' },
          { icon: AlertTriangle, title: 'La Trampa', text: 'Si visitas el sitio e interactúas con el contrato, este tiene permisos maliciosos. Puede drenar TODOS tus tokens, no solo el NFT spam.' },
          { icon: Shield, title: 'Qué Hacer', text: 'IGNORA cualquier NFT o token que no solicitaste. No lo vendas, no lo "quemes" interactuando con sitios dudosos. Simplemente ocúltalo en tu wallet y olvídalo.' }
        ]
      },
      {
        type: 'main',
        title: 'Estafa #4: Tokens Falsos',
        content: 'Cualquiera puede crear un token llamado "USDC" o "BONK". Así te engañan:',
        features: [
          { icon: Zap, title: 'El Setup', text: 'Alguien te ofrece vender "USDC" en P2P o te muestra un token "BONK" con buen precio en un DEX desconocido.' },
          { icon: AlertTriangle, title: 'El Engaño', text: 'El token tiene el mismo nombre y logo, pero es una copia falsa. No tiene valor real. O peor: al interactuar con él, drena tu wallet.' },
          { icon: Shield, title: 'La Verificación', text: 'SIEMPRE verifica el Contract Address (CA) del token. El CA es único e imposible de falsificar. Compara con CoinGecko, CoinMarketCap, o el sitio oficial del proyecto.' }
        ],
        highlight: {
          title: 'CAs Oficiales que DEBES Guardar',
          text: 'USDC (Solana): EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v. SOL es nativo (no tiene CA). Cualquier "SOL" o "USDC" con CA diferente es FALSO.'
        }
      },
      {
        type: 'main',
        title: 'Estafa #5: El Giveaway Falso',
        content: 'Nadie regala dinero. Así funciona esta estafa:',
        features: [
          { icon: Users, title: 'El Anzuelo', text: '"Elon Musk está regalando BTC. Envía 0.1 BTC y recibes 1 BTC de vuelta." O "Jupiter airdrop! Conecta tu wallet para reclamar 500 JUP gratis."' },
          { icon: AlertTriangle, title: 'La Realidad', text: 'NADIE te pedirá enviar dinero para recibir más. Los airdrops reales NUNCA piden que envíes fondos primero ni tu seed phrase.' },
          { icon: Shield, title: 'Regla Simple', text: 'Si suena demasiado bueno para ser verdad, es estafa. Siempre. Los giveaways reales no requieren que envíes dinero ni tu seed phrase.' }
        ]
      },
      {
        type: 'main',
        title: 'Estafa #6: Drainers en dApps',
        content: 'Contratos inteligentes maliciosos que drenan tu wallet cuando firmas:',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funcionan', text: 'Conectas tu wallet a un sitio aparentemente legítimo. Te pide aprobar una transacción. La transacción incluye permisos ocultos para transferir TODOS tus tokens.' },
          { icon: Shield, title: 'Las Defensas', text: 'Lee lo que firmas en Phantom—te muestra simulación de lo que pasará. Si dice "Approve unlimited access to all tokens", RECHAZA. Si el sitio no es 100% confiable, no conectes.' },
          { icon: CheckCircle, title: 'Usa Burner Wallets', text: 'Para probar dApps nuevas, usa una wallet "burner" con fondos mínimos. Si resulta ser estafa, pierdes poco. Tu wallet principal queda intacta.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Señales de Alerta vs Señales de Legitimidad',
        leftSide: {
          title: 'RED FLAGS (Probablemente Estafa)',
          points: [
            'Te contactan primero por DM',
            'Urgencia artificial ("solo hoy", "actúa rápido")',
            'Te piden seed phrase bajo CUALQUIER pretexto',
            'Prometen retornos garantizados o multiplicar dinero',
            'URL con errores sutiles (phantomm, jupiter-swap)',
            'Anuncios de Google para sitios cripto',
            'NFTs/tokens misteriosos en tu wallet',
            '"Influencers" que piden seed para verificar'
          ]
        },
        rightSide: {
          title: 'GREEN FLAGS (Probablemente Legítimo)',
          points: [
            'TÚ inicias el contacto con soporte oficial',
            'URLs oficiales verificadas (phantom.app, jup.ag)',
            'NUNCA te piden seed phrase',
            'No prometen retornos garantizados',
            'Tienen historial público y verificable',
            'Código abierto y auditorías públicas',
            'Comunidad activa con moderación real',
            'Transacciones simuladas muestran exactamente qué pasará'
          ]
        }
      },
      {
        type: 'takeaways',
        title: 'Las 10 Reglas de Oro Anti-Estafas',
        items: [
          'NUNCA compartas tu seed phrase. Nadie legítimo la necesita. Nunca.',
          'Si alguien te contacta primero ofreciendo ayuda/dinero/inversión, es estafa.',
          'Escribe URLs manualmente. No hagas clic en anuncios de Google para sitios cripto.',
          'Verifica el Contract Address de CUALQUIER token antes de comprar o interactuar.',
          'Si suena demasiado bueno para ser verdad, es estafa. Nadie regala dinero.',
          'Lee las transacciones antes de firmar. Phantom te muestra simulaciones.',
          'Usa wallets burner para probar dApps nuevas. Protege tu wallet principal.',
          'Ignora NFTs y tokens que aparecen sin que los solicitaras.',
          'Mantén deshabilitados los DMs de Discord/Telegram de desconocidos.',
          'Si tienes CUALQUIER duda, no firmes. Investiga primero. La blockchain puede esperar.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Recibes un DM de "Phantom Support" en Discord diciendo que detectaron actividad sospechosa y necesitan verificar tu seed phrase. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Les envío la seed phrase para proteger mis fondos' },
            { id: 'b', text: 'Les envío solo las primeras 6 palabras para verificar' },
            { id: 'c', text: 'Bloqueo, reporto, e ignoro. Phantom NUNCA contacta por DM ni pide seed phrases.' },
            { id: 'd', text: 'Les pido que me llamen para verificar' }
          ],
          correctAnswer: 'c',
          explanation: 'El 100% de los mensajes de "soporte" que piden seed phrases son estafas. Las empresas legítimas NUNCA inician contacto por DM ni piden tu seed phrase bajo ninguna circunstancia.'
        },
        {
          id: 'q2',
          question: 'Buscas "Jupiter swap" en Google. El primer resultado es un anuncio de "jupiter-swap.io". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Hago clic porque apareció primero' },
            { id: 'b', text: 'Ignoro los anuncios y escribo manualmente jup.ag (el sitio oficial) o uso un favorito guardado' },
            { id: 'c', text: 'Pruebo en una wallet vacía primero' },
            { id: 'd', text: 'Verifico que tenga HTTPS' }
          ],
          correctAnswer: 'b',
          explanation: 'Los estafadores PAGAN por anuncios de Google con URLs falsas. NUNCA hagas clic en anuncios para sitios cripto. Escribe la URL oficial manualmente o usa favoritos guardados.'
        },
        {
          id: 'q3',
          question: 'Aparece un NFT misterioso en tu wallet que dice "Reclama $5,000 en claim-crypto-rewards.xyz". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Visito el sitio para reclamar el premio' },
            { id: 'b', text: 'Lo vendo rápido en Magic Eden' },
            { id: 'c', text: 'Lo ignoro completamente. Es un NFT spam diseñado para drenar mi wallet si interactúo con el sitio.' },
            { id: 'd', text: 'Se lo envío a un amigo' }
          ],
          correctAnswer: 'c',
          explanation: 'Los NFTs spam son vectores de ataque comunes. Si visitas el sitio y firmas cualquier transacción, el contrato malicioso puede drenar TODA tu wallet. Simplemente ignóralos.'
        },
        {
          id: 'q4',
          question: 'Quieres comprar USDC en un DEX. Hay 3 tokens llamados "USDC". ¿Cómo verificas cuál es el real?',
          options: [
            { id: 'a', text: 'El que tenga el logo más claro' },
            { id: 'b', text: 'Comparo el Contract Address con el oficial de CoinGecko: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' },
            { id: 'c', text: 'El que tenga más liquidez' },
            { id: 'd', text: 'Pregunto en Discord cuál es' }
          ],
          correctAnswer: 'b',
          explanation: 'El Contract Address (CA) es el ÚNICO identificador único de un token. Cualquiera puede copiar nombre y logo, pero el CA es irrepetible. SIEMPRE verifica el CA desde fuentes oficiales.'
        },
        {
          id: 'q5',
          question: 'Un influencer de Twitter te contacta por DM: "Estoy haciendo un giveaway privado. Envíame 0.5 SOL y te devuelvo 5 SOL". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Envío los 0.5 SOL porque es un influencer famoso' },
            { id: 'b', text: 'Le pido prueba de identidad primero' },
            { id: 'c', text: 'Bloqueo e ignoro. Ningún giveaway legítimo pide que envíes dinero primero. Las cuentas de influencers son frecuentemente hackeadas o impersonadas.' },
            { id: 'd', text: 'Envío 0.1 SOL para probar' }
          ],
          correctAnswer: 'c',
          explanation: 'NINGÚN giveaway legítimo te pedirá enviar dinero primero. Esto es estafa 100% de las veces. Las cuentas de influencers son objetivos frecuentes de hackers que usan su credibilidad para estafar.'
        },
        {
          id: 'q6',
          question: 'Conectas tu wallet a una nueva dApp. Phantom muestra: "Esta transacción solicita APROBAR ACCESO ILIMITADO a todos tus tokens". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Apruebo porque necesito usar la dApp' },
            { id: 'b', text: 'RECHAZO inmediatamente. Un permiso "ilimitado a todos los tokens" es señal de drainer malicioso. Las dApps legítimas piden permisos específicos y limitados.' },
            { id: 'c', text: 'Apruebo pero con monto pequeño' },
            { id: 'd', text: 'Contacto al soporte de la dApp para preguntar' }
          ],
          correctAnswer: 'b',
          explanation: 'Los drainers funcionan pidiendo permisos excesivos. Una dApp legítima pide acceso SOLO a lo que necesita (ej: "swap 100 USDC por SOL"). Si pide acceso "ilimitado a todos los tokens", es casi seguro maliciosa.'
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
    description: 'Aprende a leer el lenguaje visual del mercado. Cada vela cuenta una historia de batalla entre compradores y vendedores. Dominar este idioma es tu primera ventaja real.',
    sections: [
      {
        type: 'intro',
        title: 'El Lenguaje Secreto del Precio',
        content: 'En el siglo XVIII, un comerciante de arroz japonés llamado Munehisa Homma descubrió algo que los traders modernos seguimos usando 300 años después: **el precio cuenta una historia visual**. Mientras todos miraban números, Homma dibujaba velas. Cada vela le mostraba la batalla entre compradores (toros) y vendedores (osos) en un período de tiempo. ¿Quién abrió? ¿Quién cerró? ¿Hasta dónde lucharon? Con esta información, Homma acumuló una fortuna legendaria en el mercado de arroz de Osaka. Hoy, las velas japonesas son la herramienta más usada en el mundo del trading. No importa si operas Bitcoin, acciones de Apple o futuros de petróleo—todos usan el mismo lenguaje. Y tú estás a punto de aprenderlo.',
        highlight: {
          title: 'La Ventaja Visual',
          text: 'Un gráfico de líneas te dice "el precio subió". Una vela te dice "el precio abrió aquí, los osos lo tiraron hasta acá, los toros pelearon y lo cerraron aquí arriba". Esa historia es la que te da ventaja.'
        }
      },
      {
        type: 'main',
        title: 'Anatomía de una Vela: Los 4 Datos Clave',
        content: 'Cada vela japonesa comprime 4 datos en una sola figura visual. Entender cada componente es como aprender las letras antes de leer palabras:',
        features: [
          { icon: BarChart3, title: 'El Cuerpo (Body)', text: 'El rectángulo central muestra la distancia entre el precio de apertura y el precio de cierre. **Cuerpo verde/blanco** = cerró más arriba de donde abrió (los toros ganaron). **Cuerpo rojo/negro** = cerró más abajo (los osos ganaron). Un cuerpo grande indica convicción. Un cuerpo pequeño indica indecisión.' },
          { icon: Activity, title: 'Las Mechas (Wicks/Shadows)', text: 'Las líneas que salen del cuerpo muestran los extremos del período. La **mecha superior** marca el precio máximo alcanzado—hasta donde los toros empujaron antes de perder fuerza. La **mecha inferior** marca el mínimo—hasta donde los osos tiraron antes de que los toros respondieran.' },
          { icon: TrendingUp, title: 'Apertura y Cierre', text: 'En una vela alcista (verde), la apertura está abajo y el cierre arriba. En una bajista (roja), es al revés. La relación entre apertura y cierre te dice **quién ganó la batalla** en ese período.' },
          { icon: Clock, title: 'El Timeframe', text: 'Cada vela representa un período de tiempo fijo: 1 minuto, 15 minutos, 1 hora, 4 horas, 1 día. Una vela diaria comprime toda la acción de 24 horas en una sola figura. A mayor timeframe, más significativa la información.' }
        ]
      },
      {
        type: 'main',
        title: 'Los 5 Patrones de Vela Individual que Debes Conocer',
        content: 'Una sola vela puede contarte una historia poderosa. Estos son los 5 patrones de vela individual que aparecen una y otra vez en los gráficos de crypto:',
        features: [
          { icon: Activity, title: 'Doji (Indecisión)', text: 'Cuerpo prácticamente inexistente—abrió y cerró al mismo precio. Las mechas pueden ser largas o cortas. Significa **equilibrio total** entre toros y osos. En zona de soporte o resistencia, un Doji puede ser señal de reversión. Solo no indica dirección.' },
          { icon: TrendingUp, title: 'Hammer (Martillo) — Señal Alcista', text: 'Cuerpo pequeño en la parte superior, mecha inferior MUY larga (al menos 2× el cuerpo), poca o ninguna mecha superior. Significa: los osos tiraron el precio fuerte, pero los toros lo rescataron antes del cierre. **Solo es válido en zona de soporte tras una caída.** Es la mano fuerte diciendo "hasta aquí".' },
          { icon: TrendingDown, title: 'Shooting Star (Estrella Fugaz) — Señal Bajista', text: 'Lo opuesto al Hammer: cuerpo pequeño abajo, mecha superior MUY larga. Los toros empujaron arriba pero fueron aplastados antes del cierre. **Solo es válido en zona de resistencia tras una subida.** Es el mercado diciendo "no pasarás".' },
          { icon: Zap, title: 'Marubozu (Convicción Total)', text: 'Cuerpo grande SIN mechas (o casi sin ellas). Marubozu verde = los toros dominaron desde el inicio hasta el final, sin dar espacio a los osos. Marubozu rojo = los osos aplastaron sin piedad. Indica **momentum fuerte** en la dirección de la vela.' }
        ]
      },
      {
        type: 'main',
        title: 'Patrones de Múltiples Velas: Las Combinaciones Ganadoras',
        content: 'Si una sola vela cuenta una historia, dos o tres velas cuentan una película. Estos patrones de múltiples velas son los más fiables porque muestran un **cambio de control** entre toros y osos:',
        features: [
          { icon: TrendingUp, title: 'Engulfing Alcista (Envolvente)', text: 'Una vela roja pequeña seguida por una vela verde que "envuelve" completamente el cuerpo de la roja. Significa que los toros absorbieron toda la presión vendedora y tomaron el control. **Más poderoso cuando aparece en soporte con volumen creciente.**' },
          { icon: TrendingDown, title: 'Engulfing Bajista', text: 'Lo opuesto: vela verde pequeña seguida de una roja masiva que envuelve la anterior. Los osos aplastaron la última resistencia de los toros. **Señal de distribución cuando aparece en resistencia o después de una subida extendida.**' },
          { icon: AlertTriangle, title: 'Evening Star (Estrella Vespertina)', text: 'Patrón de 3 velas: (1) vela verde grande, (2) vela pequeña de cualquier color (cuerpo chico, indecisión), (3) vela roja grande que cierra dentro del cuerpo de la primera. Es una de las señales de reversión bajista más fiables en crypto.' },
          { icon: CheckCircle, title: 'Morning Star (Estrella Matutina)', text: 'El espejo de la Evening Star: (1) vela roja grande, (2) vela pequeña (indecisión en el suelo), (3) vela verde grande que cierra dentro del cuerpo de la primera. Señal clásica de reversión alcista tras una caída.' }
        ]
      },
      {
        type: 'main',
        title: 'Identificando Tendencias: El Contexto lo Es Todo',
        content: 'Una vela sin contexto no significa nada. Un Hammer en medio de una subida no es una señal de compra. Los patrones **solo funcionan cuando aparecen en el lugar correcto**. Para saber el "lugar correcto", necesitas identificar la tendencia:',
        features: [
          { icon: TrendingUp, title: 'Tendencia Alcista (Uptrend)', text: 'Serie de máximos cada vez más altos y mínimos cada vez más altos. Imagina una escalera subiendo. Cada peldaño es más alto que el anterior. Mientras la escalera siga subiendo, la tendencia es tu amiga—busca oportunidades de COMPRA en los retrocesos.' },
          { icon: TrendingDown, title: 'Tendencia Bajista (Downtrend)', text: 'Serie de máximos cada vez más bajos y mínimos cada vez más bajos. Escalera bajando. Cada rebote es más débil que el anterior. No intentes "atrapar el cuchillo cayendo"—espera señales claras de reversión antes de comprar.' },
          { icon: Activity, title: 'Rango Lateral (Sideways/Consolidación)', text: 'El precio rebota entre un soporte y una resistencia sin tendencia clara. Aquí las señales de velas son menos fiables porque no hay dirección dominante. La paciencia es tu mejor herramienta—espera a que el precio rompa el rango antes de actuar.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Timeframes: ¿Cuál Deberías Usar?',
        leftSide: {
          title: 'Timeframes Bajos (1m - 1h)',
          points: [
            'Mucho ruido y señales falsas',
            'Requieren pantalla constante',
            'Útiles solo para scalping profesional',
            'Los patrones de velas son poco fiables',
            'El estrés emocional es extremo',
            'Fees de trading acumulan rápido'
          ]
        },
        rightSide: {
          title: 'Timeframes Altos (4h - Diario - Semanal)',
          points: [
            'Señales más limpias y fiables',
            'Puedes revisar 1-2 veces al día',
            'Ideal para swing trading (días-semanas)',
            'Los patrones de velas tienen alta fiabilidad',
            'Menos estrés, mejores decisiones',
            'Fees mínimos por menos operaciones'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Volumen: El Detector de Mentiras',
        content: 'Imagina que ves un Hammer perfecto en soporte. ¿Es real o es una trampa? El volumen te da la respuesta. El **volumen** mide cuántos activos se negociaron en ese período. Es el "detector de mentiras" del mercado:',
        features: [
          { icon: CheckCircle, title: 'Patrón + Volumen Alto = Señal Fuerte', text: 'Si un Hammer aparece con volumen 3-5× superior al promedio, significa que **muchos compradores** están defendiendo ese nivel. La señal es legítima. Los grandes jugadores están poniendo dinero real sobre la mesa.' },
          { icon: AlertTriangle, title: 'Patrón + Volumen Bajo = Señal Débil', text: 'Si el mismo Hammer aparece con volumen bajo, podría ser solo ruido. Pocos participantes, poca convicción. No apuestes tu capital en señales sin volumen que las respalde.' }
        ]
      },
      {
        type: 'main',
        title: 'Los 4 Errores Fatales del Principiante',
        content: 'El 90% de los traders que aprenden velas cometen los mismos errores. Evítalos y ya estarás por delante de la mayoría:',
        features: [
          { icon: AlertTriangle, title: '1. Operar Cada Patrón que Ven', text: 'No todos los Hammers son señales de compra. El contexto (tendencia, soporte/resistencia, volumen) es más importante que el patrón en sí. Un Hammer en medio de una caída libre probablemente fallará.' },
          { icon: AlertTriangle, title: '2. Ignorar el Timeframe', text: 'Un Doji en vela de 1 minuto no significa nada. El mismo Doji en vela diaria después de una tendencia extendida es una señal poderosa. Siempre mira timeframes altos primero.' },
          { icon: AlertTriangle, title: '3. No Esperar Confirmación', text: 'Ves una Evening Star y vendes inmediatamente. Error. Espera a que la siguiente vela confirme la dirección. La paciencia de una vela extra puede salvarte de muchas trampas.' },
          { icon: AlertTriangle, title: '4. Memorizar sin Entender', text: 'Aprender 50 patrones de memoria no sirve si no entiendes la psicología detrás. Cada patrón refleja una batalla entre compradores y vendedores. Entiende la historia, no solo la forma.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Nueva Forma de Leer el Mercado',
        items: [
          'Las velas japonesas no son predicciones mágicas—son un **lenguaje visual** que comprime la batalla entre compradores y vendedores en cada período de tiempo.',
          'Domina los patrones esenciales: Doji, Hammer, Shooting Star, Engulfing y Morning/Evening Star. Estos 5-6 patrones cubren el 80% de las señales útiles.',
          'El contexto lo es todo: un patrón solo funciona cuando aparece en el **lugar correcto** (soporte/resistencia) y en la **dirección correcta** (con la tendencia o en reversión clara).',
          'Usa timeframes de 4 horas o diarios como mínimo. Los timeframes bajos (1-15 minutos) generan más ruido que señales reales.',
          'El volumen es tu detector de mentiras. Un patrón sin volumen que lo confirme es como una promesa sin firma—puede ser falsa.',
          'No operes cada patrón que veas. La paciencia y la selectividad son las armas más poderosas del trader. Mejor 3 operaciones buenas al mes que 30 mediocres.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Estás analizando SOL en gráfico diario. Ves una vela roja con cuerpo muy grande, mechas casi inexistentes, que aparece después de una subida de 3 semanas. ¿Qué te dice esta vela?',
          options: [
            { id: 'a', text: 'Es una corrección normal, compra el dip' },
            { id: 'b', text: 'Es un Marubozu bajista—distribución agresiva, los osos dominaron todo el día sin resistencia de los toros' },
            { id: 'c', text: 'No significa nada, espera más velas' },
            { id: 'd', text: 'Es acumulación silenciosa de ballenas' }
          ],
          correctAnswer: 'b',
          explanation: 'Un Marubozu bajista (cuerpo grande sin mechas) después de una subida extendida indica que los vendedores tomaron el control total. No hubo pelea—los toros no aparecieron. Es una señal seria de posible techo.'
        },
        {
          id: 'q2',
          question: 'Ves un patrón de 3 velas en Bitcoin diario: (1) vela verde grande, (2) vela pequeña con cuerpo diminuto, (3) vela roja grande que cierra dentro del cuerpo de la primera vela. ¿Qué patrón es y qué significa?',
          options: [
            { id: 'a', text: 'Morning Star—señal de compra fuerte' },
            { id: 'b', text: 'Evening Star—posible reversión bajista, los toros perdieron momentum y los osos tomaron el control' },
            { id: 'c', text: 'Three White Soldiers—tendencia alcista continúa' },
            { id: 'd', text: 'Doji pattern—indecisión, no actuar' }
          ],
          correctAnswer: 'b',
          explanation: 'Evening Star es uno de los patrones de reversión bajista más fiables: (1) última subida fuerte, (2) indecisión/duda, (3) los osos aplastaron. Es el mercado cambiando de manos.'
        },
        {
          id: 'q3',
          question: 'Encuentras un Hammer perfecto en ETH, pero el volumen de esa vela es el más bajo de las últimas 20 velas. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro inmediatamente—el Hammer es señal suficiente' },
            { id: 'b', text: 'Ignoro la señal—un Hammer con volumen bajo carece de la convicción necesaria, pocos compradores defienden la zona' },
            { id: 'c', text: 'Vendo porque el volumen bajo es bajista' },
            { id: 'd', text: 'El volumen no importa para patrones de velas' }
          ],
          correctAnswer: 'b',
          explanation: 'El volumen es el detector de mentiras del mercado. Un patrón sin volumen es como una promesa vacía. Necesitas ver participación real (volumen alto) para confiar en la señal.'
        },
        {
          id: 'q4',
          question: '¿En qué timeframe son más fiables los patrones de velas para un swing trader (operaciones de días a semanas)?',
          options: [
            { id: 'a', text: '1 minuto y 5 minutos—más datos, más oportunidades' },
            { id: 'b', text: '15 minutos—balance perfecto' },
            { id: 'c', text: '4 horas y diario—menos ruido, señales más limpias y fiables' },
            { id: 'd', text: 'Todos los timeframes son igualmente fiables' }
          ],
          correctAnswer: 'c',
          explanation: 'Los timeframes bajos están llenos de ruido y señales falsas. En 4h y diario, cada vela representa horas de acción real del mercado, filtrando el ruido y mostrando la intención verdadera de los grandes jugadores.'
        },
        {
          id: 'q5',
          question: 'Ves una vela con cuerpo prácticamente inexistente (apertura ≈ cierre) pero con mechas largas arriba y abajo, apareciendo en la parte alta de una subida de Bitcoin. ¿Qué es y qué significa?',
          options: [
            { id: 'a', text: 'Marubozu—la tendencia continúa con fuerza' },
            { id: 'b', text: 'Doji en resistencia—equilibrio entre toros y osos, posible agotamiento de la subida y señal de precaución' },
            { id: 'c', text: 'Hammer—señal de compra' },
            { id: 'd', text: 'No es un patrón reconocible' }
          ],
          correctAnswer: 'b',
          explanation: 'Un Doji en zona de resistencia después de una subida indica que los toros ya no dominan—los osos están peleando de vuelta. No es señal de venta automática, pero sí de alerta: podría ser el inicio de una reversión.'
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
    description: 'El precio tiene memoria. Aprende a identificar los pisos y techos del mercado donde el precio rebota una y otra vez, y úsalos para tomar decisiones inteligentes de compra y venta.',
    sections: [
      {
        type: 'intro',
        title: 'La Memoria del Precio',
        content: '¿Te has preguntado por qué Bitcoin siempre parece rebotar en ciertos precios? ¿Por qué $60,000 fue un muro durante meses? ¿Por qué cuando lo rompió, se disparó? No es magia ni coincidencia. Es **psicología humana cristalizada en el gráfico**. Cuando miles de personas compraron a $60,000, ese precio se grabó en la memoria del mercado. Cada vez que el precio vuelve ahí, esas mismas personas toman decisiones: algunos venden para "salir en tablas", otros compran porque recuerdan que ahí rebotó antes. Estas zonas de memoria colectiva se llaman **soportes** y **resistencias**, y son la herramienta más poderosa del análisis técnico. Más del 80% de los traders profesionales basan sus decisiones en ellas.',
        highlight: {
          title: 'El Concepto Clave',
          text: 'Soporte y resistencia no son líneas mágicas en un gráfico—son zonas donde **la concentración de órdenes de compra o venta** es tan alta que el precio rebota. Son el campo de batalla donde toros y osos se encuentran.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Soporte? — El Piso del Precio',
        content: 'Un **soporte** es una zona de precio donde la demanda de compra es tan fuerte que detiene una caída. Imagina el suelo de tu casa: puedes lanzar una pelota hacia abajo, pero el suelo la hará rebotar. El soporte funciona igual—es el "piso" donde los compradores aparecen en masa.',
        features: [
          { icon: TrendingUp, title: 'Por Qué Existe', text: 'Cuando el precio cae a una zona donde antes rebotó, tres tipos de compradores aparecen: (1) los que compraron ahí antes y quieren más, (2) los que se perdieron la subida anterior y ahora tienen su oportunidad, (3) los traders que reconocen la zona como soporte técnico.' },
          { icon: Search, title: 'Cómo Identificarlo', text: 'Busca zonas donde el precio tocó un nivel y rebotó hacia arriba **al menos 2-3 veces**. No busques un precio exacto—busca una **zona**. Si el precio rebotó en $58,500, $59,100 y $58,800, tu soporte está en la zona de $58,500-$59,100.' },
          { icon: BarChart3, title: 'Soporte en la Práctica', text: 'En Solana, la zona de $120-$130 funcionó como soporte fuerte durante meses en 2024. Cada vez que el precio caía ahí, los compradores aparecían. Los traders que compraron en esa zona capturaron rebotes de +30% repetidamente.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué es una Resistencia? — El Techo del Precio',
        content: 'Una **resistencia** es el espejo del soporte: una zona donde la presión de venta es tan fuerte que detiene una subida. Es el "techo de cristal" que el precio no logra romper. Cada vez que el precio llega ahí, los vendedores lo empujan hacia abajo.',
        features: [
          { icon: TrendingDown, title: 'Por Qué Existe', text: 'Tres tipos de vendedores crean resistencia: (1) los que compraron a ese precio y llevan semanas perdiendo—quieren salir en "break-even", (2) los traders que vieron que el precio fue rechazado ahí antes, (3) instituciones que colocan órdenes de venta grandes en números redondos.' },
          { icon: Search, title: 'Cómo Identificarla', text: 'Busca zonas donde el precio subió, fue rechazado y cayó **al menos 2-3 veces**. Los rechazos suelen dejar mechas superiores largas en las velas—huellas visuales de que los vendedores ganaron la batalla.' },
          { icon: AlertTriangle, title: 'Los Números Redondos', text: 'Los niveles psicológicos como $100, $50,000 o $100,000 actúan como resistencias naturales. ¿Por qué? Porque miles de personas ponen órdenes de venta en números redondos: "Cuando Bitcoin llegue a $100,000, vendo". Esa acumulación de órdenes crea un muro real.' }
        ]
      },
      {
        type: 'main',
        title: 'Zonas, No Líneas — El Error Más Común',
        content: 'El error #1 de los principiantes es dibujar una línea exacta y esperar que el precio la respete al centavo. Eso no pasa en la realidad. El soporte y la resistencia son **ZONAS**, no líneas precisas. Piénsalo así: si miles de personas quieren comprar "alrededor de $60,000", algunas pondrán órdenes a $59,800, otras a $60,200, otras a $60,500. La "zona de compra" es un rango, no un punto.',
        features: [
          { icon: Layers, title: 'Cómo Dibujar Zonas Correctamente', text: 'En lugar de una línea, dibuja un **rectángulo** que cubra las mechas de los rebotes anteriores. Si el precio rebotó en $58,500, $59,100 y $58,800, tu zona es el rectángulo entre $58,500 y $59,100. Todo lo que toque esa zona es "soporte".' },
          { icon: Eye, title: 'Cuantos Más Toques, Más Fuerte (Hasta un Punto)', text: 'Una zona que ha sido tocada y respetada 2-3 veces es confiable. Con 4-5 toques, la zona es "famosa"—pero cuidado: cada toque **gasta las órdenes** en esa zona. Es como un muro de ladrillos donde cada pelotazo rompe un ladrillo. Eventualmente, el muro cae.' }
        ]
      },
      {
        type: 'main',
        title: 'El Flip: Cuando Soporte se Convierte en Resistencia (y Viceversa)',
        content: 'Este es uno de los conceptos más elegantes y útiles del análisis técnico: cuando un soporte se rompe, **se convierte en resistencia**. Y cuando una resistencia se rompe, **se convierte en soporte**. Este fenómeno se llama **"role reversal"** o "flip", y tiene una explicación psicológica perfecta.',
        features: [
          { icon: RefreshCw, title: 'La Psicología del Flip', text: 'Imagina que compraste SOL a $150 (soporte). El precio cae a $120, rompiendo tu soporte. Ahora estás perdiendo. Cuando el precio vuelve a $150, ¿qué haces? **Vendes para salir sin pérdida.** Tú y miles como tú convierten el antiguo soporte ($150) en resistencia.' },
          { icon: CheckCircle, title: 'Cómo Operarlo', text: 'Cuando un soporte se rompe con volumen, espera un "retest"—el precio suele volver a la zona rota desde abajo. Si la zona ahora actúa como resistencia (el precio es rechazado), tienes confirmación del flip. Es una de las entradas más fiables en trading.' },
          { icon: Zap, title: 'Ejemplo Real en Crypto', text: 'Bitcoin $69,000 fue resistencia (ATH de 2021) durante más de 2 años. Cuando lo rompió en 2024 con volumen masivo, $69,000 se convirtió en soporte. El precio lo retestó desde arriba, rebotó, y luego se fue a $100,000+.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Soporte/Resistencia Fuerte vs Débil',
        leftSide: {
          title: 'Zonas Fuertes (Alta Fiabilidad)',
          points: [
            'Respetada 2-3 veces con rechazos claros',
            'Visible en timeframes altos (diario, semanal)',
            'Coincide con números redondos psicológicos',
            'Alto volumen en los rebotes anteriores',
            'Confluencia con medias móviles (EMA 200)',
            'Se alinea con la tendencia general'
          ]
        },
        rightSide: {
          title: 'Zonas Débiles (Baja Fiabilidad)',
          points: [
            'Solo un toque previo—podría ser coincidencia',
            'Solo visible en timeframes bajos (15min, 1h)',
            'No coincide con ningún nivel psicológico',
            'Volumen bajo en los rechazos',
            'Lejos de cualquier media móvil importante',
            'Va contra la tendencia dominante'
          ]
        }
      },
      {
        type: 'main',
        title: 'Fakeouts: Las Trampas del Mercado',
        content: 'Si el soporte y la resistencia fueran perfectos, todos ganaríamos dinero. La realidad es que el mercado está lleno de **fakeouts** (rupturas falsas)—movimientos que parecen romper un nivel pero inmediatamente revierten. Las fakeouts existen porque los grandes jugadores (instituciones, ballenas) necesitan tu liquidez para ejecutar sus órdenes.',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funciona la Trampa', text: 'Imagina un soporte en $150. Miles de traders tienen su stop loss en $148. Una ballena vende agresivamente y empuja el precio a $147, activando todos esos stops (ventas forzadas). Luego, la ballena compra toda esa liquidez barata. El precio vuelve a $155. Los stops fueron "barridos" y los traders perdieron sus posiciones.' },
          { icon: Shield, title: 'Cómo Protegerte', text: 'Nunca pongas tu stop loss justo debajo del soporte—eso es exactamente donde las ballenas cazan. Pon tu stop un poco más abajo, fuera de la zona "obvia". Y la regla de oro: **no compres el primer toque de soporte. Espera una vela de confirmación** (un cierre fuerte por encima de la zona).' },
          { icon: Eye, title: 'Señales de que es un Fakeout', text: 'La ruptura ocurre con volumen bajo (los grandes no participaron), la vela cierra de vuelta dentro de la zona rápidamente, o ves una mecha larga que "pincha" debajo del soporte pero cierra arriba. Estas son huellas de una trampa.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Framework Práctico: Cómo Usar S/R Para Operar',
        content: 'Ahora que entiendes la teoría, aquí tienes un framework paso a paso para aplicar soportes y resistencias en tus operaciones diarias:',
        features: [
          { icon: Search, title: '1. Identifica las Zonas Clave', text: 'Abre el gráfico en timeframe diario o semanal. Busca los niveles donde el precio rebotó al menos 2-3 veces. Dibuja zonas (no líneas) en esos niveles. Estos son tus "campos de batalla".' },
          { icon: Crosshair, title: '2. Espera que el Precio Llegue a la Zona', text: 'No persigas el precio. Espera a que venga a TI, a una de tus zonas marcadas. La paciencia es lo que separa al trader del apostador.' },
          { icon: Eye, title: '3. Busca Confirmación', text: 'Cuando el precio toque tu zona, busca una vela de reversión (Hammer, Engulfing) con volumen alto. Sin confirmación, no entres.' },
          { icon: Shield, title: '4. Coloca tu Stop Loss Fuera de la Zona', text: 'Si compras en soporte, tu stop va debajo del mínimo de la zona + un filtro de 1-2%. Si el precio llega ahí, tu tesis estaba equivocada y sales protegiendo capital.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Dominando los Pisos y Techos del Mercado',
        items: [
          'Soporte y resistencia son **zonas de alta concentración de órdenes**, no líneas exactas. Dibuja rectángulos, no líneas.',
          'Existen por psicología humana: miles de personas toman decisiones en los mismos niveles de precio, creando "memoria del mercado".',
          'Cuando un soporte se rompe se convierte en resistencia, y viceversa (role reversal). Este concepto es una de las herramientas más fiables del trading.',
          'Cuantos más toques tiene una zona, más "famosa" es—pero también más débil se vuelve. Cada toque gasta las órdenes que la defienden.',
          'Las fakeouts son trampas donde los grandes jugadores barren stops para obtener liquidez. Siempre espera confirmación antes de actuar.',
          'Tu framework: identifica zonas → espera que el precio llegue → busca confirmación con velas + volumen → coloca stop loss fuera de la zona. Disciplina > intuición.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin rompe la resistencia de $100,000 con volumen 5× superior al promedio y cierra fuerte por encima. Dos semanas después, el precio retrocede a $100,000. ¿Qué esperas que pase?',
          options: [
            { id: 'a', text: 'La resistencia sigue intacta, el precio será rechazado' },
            { id: 'b', text: 'El nivel de $100,000 ahora actúa como soporte (role reversal) y el precio debería rebotar' },
            { id: 'c', text: 'El precio atravesará $100,000 sin problemas hacia abajo' },
            { id: 'd', text: 'Los niveles de precio no tienen memoria' }
          ],
          correctAnswer: 'b',
          explanation: 'Cuando una resistencia se rompe con volumen fuerte, se convierte en soporte (flip/role reversal). Los que vendieron a $100K ahora quieren recomprar ahí, y los que se perdieron la subida ven una segunda oportunidad.'
        },
        {
          id: 'q2',
          question: 'Compraste SOL en soporte a $140. ¿Dónde colocas tu stop loss?',
          options: [
            { id: 'a', text: 'Justo en $140—si toca el soporte exacto, salgo' },
            { id: 'b', text: 'En $139—un dólar debajo del soporte' },
            { id: 'c', text: 'Debajo del mínimo más reciente de la zona de soporte, con un filtro de 1-2% adicional' },
            { id: 'd', text: 'No uso stop loss en soporte porque siempre rebota' }
          ],
          correctAnswer: 'c',
          explanation: 'Las ballenas barren stops que están justo debajo del soporte. Tu stop debe estar donde REALMENTE se invalida tu tesis—debajo del mínimo de la zona completa con un filtro extra para evitar que te barran.'
        },
        {
          id: 'q3',
          question: 'Un soporte en ETH ha sido tocado exactamente 5 veces en $3,200. El precio se acerca por sexta vez. ¿Qué es más probable?',
          options: [
            { id: 'a', text: 'El sexto toque rebotará como los anteriores—es un soporte "probado"' },
            { id: 'b', text: 'Con 5 toques previos, la zona está debilitada—cada toque gasta órdenes de compra. La probabilidad de ruptura aumenta' },
            { id: 'c', text: 'El número de toques no afecta la fortaleza del soporte' },
            { id: 'd', text: 'Siempre rompe exactamente en el cuarto toque' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada toque de soporte "gasta" órdenes de compra en esa zona. Es como un muro que recibe pelotazos—cada golpe rompe ladrillos. Después de 4-5 toques, el muro está débil y la ruptura es cada vez más probable.'
        },
        {
          id: 'q4',
          question: 'El precio de BTC cae por debajo de un soporte en $90,000, toca $89,500, pero cierra la vela diaria de vuelta por encima de $90,000 con una mecha inferior larga. ¿Qué acaba de pasar?',
          options: [
            { id: 'a', text: 'El soporte se rompió—es señal de venta' },
            { id: 'b', text: 'Es una fakeout—los grandes barrieron stops debajo de $90K, compraron esa liquidez, y el precio volvió. El soporte sigue válido' },
            { id: 'c', text: 'Es una señal sin importancia' },
            { id: 'd', text: 'El precio va a caer más porque tocó $89,500' }
          ],
          correctAnswer: 'b',
          explanation: 'Señales clásicas de fakeout: (1) ruptura breve por debajo del soporte, (2) mecha larga que "pincha" la zona, (3) cierre fuerte de vuelta por encima. Las ballenas barrieron stops para comprar barato.'
        },
        {
          id: 'q5',
          question: '¿Por qué los números redondos como $50,000 o $100,000 funcionan como soporte/resistencia incluso sin toques previos?',
          options: [
            { id: 'a', text: 'Por coincidencia estadística' },
            { id: 'b', text: 'Porque miles de personas colocan órdenes de compra/venta en números redondos ("cuando llegue a 100K, vendo"), creando concentración masiva de órdenes' },
            { id: 'c', text: 'Los exchanges manipulan esos niveles' },
            { id: 'd', text: 'Los números redondos no tienen significado en trading' }
          ],
          correctAnswer: 'b',
          explanation: 'Los niveles psicológicos son reales porque la psicología humana es predecible. Todos pensamos en números redondos. Esa acumulación de órdenes crea zonas de soporte/resistencia "naturales" antes de que el precio las visite.'
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
    description: 'Los indicadores técnicos son herramientas matemáticas que confirman (o niegan) lo que ves en el precio. Domina el RSI y las Medias Móviles Exponenciales para tomar decisiones con datos, no con emociones.',
    sections: [
      {
        type: 'intro',
        title: 'Las Matemáticas al Servicio del Trader',
        content: 'Hasta ahora aprendiste a leer velas y a identificar soportes y resistencias. Esas herramientas se basan en lo que **ves**. Los indicadores técnicos agregan una capa de **matemáticas** que te ayuda a confirmar lo que ves—o a detectar lo que tus ojos no perciben. Una analogía: las velas son como mirar por la ventana para ver si llueve. Los indicadores son el pronóstico del clima. Ambos son útiles, pero juntos te dan un panorama mucho más completo. **Regla fundamental**: Los indicadores NO predicen el futuro. Son espejos retrovisores mejorados—te muestran lo que el precio HIZO con mayor claridad para que tomes mejores decisiones sobre lo que PODRÍA hacer.',
        highlight: {
          title: 'La Regla de Oro',
          text: 'Nunca operes SOLO por indicadores. Úsalos para **confirmar** lo que ya ves en el precio y en las zonas de soporte/resistencia. El indicador apoya tu análisis, no lo reemplaza.'
        }
      },
      {
        type: 'main',
        title: 'RSI: El Termómetro del Mercado',
        content: 'El **RSI (Relative Strength Index)** mide la velocidad y magnitud de los movimientos recientes del precio en una escala del 0 al 100. Es como un termómetro: te dice si el mercado está "con fiebre" (sobrecomprado) o "con hipotermia" (sobrevendido). La configuración estándar es RSI de 14 períodos.',
        features: [
          { icon: TrendingUp, title: 'RSI > 70: Sobrecompra', text: 'Cuando el RSI supera 70, el mercado ha subido mucho y rápido. **No significa que debas vender inmediatamente**—en tendencias alcistas fuertes, el RSI puede quedarse en sobrecompra semanas. Pero sí indica que el momentum alcista es extremo y una corrección es cada vez más probable.' },
          { icon: TrendingDown, title: 'RSI < 30: Sobreventa', text: 'Cuando el RSI cae debajo de 30, el mercado ha caído fuerte y rápido. Es zona de "posible suelo". Combinado con un soporte fuerte, es una de las señales de compra más fiables. Pero en tendencias bajistas, el RSI puede quedarse en sobreventa mucho tiempo—no compres solo porque está bajo.' },
          { icon: Activity, title: 'RSI 50: La Línea de Tendencia', text: 'RSI por encima de 50 = momentum alcista. RSI por debajo de 50 = momentum bajista. En un bull market sano, el RSI tiende a rebotar en 40-50 (nunca llega a 30). En un bear market, tiende a ser rechazado en 50-60 (nunca llega a 70). Observar dónde rebota el RSI te dice quién domina.' }
        ]
      },
      {
        type: 'main',
        title: 'Medias Móviles Exponenciales (EMAs): La Brújula de la Tendencia',
        content: 'Las **EMAs (Exponential Moving Averages)** suavizan el ruido del precio y te muestran la dirección general de la tendencia. Son como miradores elevados que te permiten ver el bosque en lugar de los árboles individuales. Las EMAs dan más peso a los precios recientes, haciéndolas más sensibles a los cambios que las medias simples (SMA).',
        features: [
          { icon: Zap, title: 'EMA 21 — El Pulso del Momentum', text: 'La EMA de 21 períodos es la más rápida de las tres esenciales. En una tendencia alcista sana, el precio tiende a respetar la EMA 21 como soporte dinámico. Cuando el precio cae a la EMA 21 y rebota, es señal de que el momentum sigue vivo. Ideal para swing traders.' },
          { icon: Activity, title: 'EMA 55 — La Línea de Equilibrio', text: 'La EMA de 55 períodos marca la tendencia de mediano plazo. Cuando el precio está por encima de la EMA 55, la tendencia intermedia es alcista. Cuando cae por debajo, hay señal de debilidad. Es el "zona de nadie"—las batallas más importantes ocurren aquí.' },
          { icon: Landmark, title: 'EMA 200 — La Frontera Bull/Bear', text: 'La EMA de 200 períodos en gráfico diario es **la línea más importante del trading institucional**. Precio por encima de la EMA 200 = bull market. Precio por debajo = bear market. Cuando Bitcoin cruza la EMA 200 diaria, es noticia mundial. Fondos de inversión de miles de millones toman decisiones basadas en ella.' }
        ]
      },
      {
        type: 'main',
        title: 'Cruces de EMAs: Las Señales que Mueven Mercados',
        content: 'Cuando las EMAs se cruzan entre sí, generan señales poderosas que los traders institucionales y algoritmos siguen de cerca. Estos cruces no son instantáneos—se desarrollan durante días o semanas, lo que los hace más fiables que señales de corto plazo:',
        features: [
          { icon: TrendingUp, title: 'Golden Cross (Cruz Dorada)', text: 'Ocurre cuando la EMA rápida (21 o 50) cruza **por encima** de la EMA lenta (200). Es señal alcista de mediano plazo. El último Golden Cross de Bitcoin en gráfico diario (EMA 50 cruzando EMA 200) precedió subidas históricas. No es instantáneo—la señal se confirma días después del cruce.' },
          { icon: TrendingDown, title: 'Death Cross (Cruz de la Muerte)', text: 'Lo opuesto: la EMA rápida cruza **por debajo** de la EMA lenta. Es señal bajista. Históricamente, los Death Cross de Bitcoin precedieron caídas de -30% a -50%. Cuando ves un Death Cross, al mínimo deberías reducir tu exposición y ajustar stops.' },
          { icon: AlertTriangle, title: 'Cuidado con las Señales Falsas', text: 'En mercados laterales (sin tendencia clara), las EMAs se cruzan constantemente generando señales falsas. No sigas cruces de EMAs ciegamente en un rango. Solo son fiables cuando el mercado tiene tendencia. Si las EMAs están enredadas como espagueti, el mercado está indeciso—espera.' }
        ]
      },
      {
        type: 'main',
        title: 'Divergencias: La Señal Más Poderosa del Análisis Técnico',
        content: 'Una **divergencia** ocurre cuando el precio dice una cosa y el indicador dice otra. Es como si el precio y el RSI se contradijeran. Las divergencias son señales anticipadas de cambio de tendencia—detectan debilidad ANTES de que el precio la muestre.',
        features: [
          { icon: AlertTriangle, title: 'Divergencia Bajista', text: 'El precio hace un nuevo máximo (Higher High), pero el RSI hace un máximo más bajo (Lower High). ¿Qué significa? El precio subió, pero con **menos fuerza** que la vez anterior. Los toros se están agotando aunque el precio aún suba. Es como un corredor que sigue avanzando pero cada vez más lento—pronto se detendrá.' },
          { icon: TrendingUp, title: 'Divergencia Alcista', text: 'El precio hace un nuevo mínimo (Lower Low), pero el RSI hace un mínimo más alto (Higher Low). El precio cayó más, pero los osos perdieron fuerza. Los vendedores se están agotando. Es una de las señales de suelo más fiables en crypto—especialmente cuando coincide con una zona de soporte.' },
          { icon: Eye, title: 'Cómo Detectarlas en la Práctica', text: 'Abre tu gráfico con RSI. Busca los dos últimos máximos o mínimos del precio. Luego mira los mismos puntos en el RSI. ¿Se mueven en la misma dirección? Si no, tienes una divergencia. Las divergencias en timeframe diario o semanal son las más significativas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Cuándo Usar Cada Indicador',
        leftSide: {
          title: 'RSI (Momentum)',
          points: [
            'Mejor para detectar extremos de sobrecompra/sobreventa',
            'Excelente para identificar divergencias (cambios de tendencia)',
            'Útil en cualquier timeframe (mejor en 4h+)',
            'Funciona bien en mercados con tendencia Y en rangos',
            'Te dice cuánta fuerza queda en un movimiento',
            'Ideal para timing de entradas y salidas'
          ]
        },
        rightSide: {
          title: 'EMAs (Tendencia)',
          points: [
            'Mejor para identificar la dirección general del mercado',
            'Excelente como soporte/resistencia dinámicos',
            'Solo fiables en timeframes altos (diario+)',
            'Solo funcionan en mercados con tendencia, NO en rangos',
            'Te dicen la posición del precio respecto a la tendencia',
            'Ideal para confirmar que estás operando a favor de la tendencia'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Error Fatal: Indicadores en Mercado Lateral',
        content: 'El 90% de las pérdidas por indicadores ocurren en un solo escenario: **operar indicadores en un mercado lateral**. Cuando el precio está en rango (sin tendencia), los indicadores generan señales constantemente—y casi todas son falsas.',
        features: [
          { icon: AlertTriangle, title: 'El RSI Oscila sin Sentido', text: 'En un rango, el RSI sube a 70 y baja a 30 repetidamente. Vendes en 70, compras en 30, y el precio no va a ningún lado—solo pagas comisiones. Solución: en mercados laterales, espera a que el precio rompa el rango antes de seguir señales del RSI.' },
          { icon: AlertTriangle, title: 'Las EMAs se Cruzan Sin Parar', text: 'Sin tendencia, las EMAs se enredan y generan Golden Cross y Death Cross falsos cada semana. Sigues cada cruce y pierdes en ambas direcciones. Solución: si las tres EMAs (21, 55, 200) están muy cerca entre sí, el mercado no tiene tendencia—no sigas cruces.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Setup de Indicadores Recomendado',
        content: 'Menos es más. Los traders que ponen 10 indicadores en su gráfico terminan paralizados por señales contradictorias. Aquí tienes el setup mínimo y efectivo:',
        features: [
          { icon: BarChart3, title: 'El Setup del 80/20', text: '**En tu gráfico pon solo esto**: (1) EMA 21, EMA 55 y EMA 200 en el gráfico de precios, (2) RSI 14 en panel separado debajo, (3) Volumen en barras. Nada más. Estos tres elementos te dan el 80% de la información útil con el 20% de la complejidad.' },
          { icon: CheckCircle, title: 'La Confluencia es la Clave', text: 'La señal más poderosa es cuando **múltiples factores apuntan a la misma dirección**: precio en soporte + RSI en sobreventa + rebote en EMA 200 + vela de reversión + volumen alto. Eso es **confluencia**, y es donde debes poner tu capital.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Los Indicadores como Herramientas, No como Muletas',
        items: [
          'Los indicadores NO predicen el futuro. Son herramientas matemáticas que te ayudan a **confirmar** lo que ya ves en el precio y las zonas de soporte/resistencia.',
          'RSI mide momentum: >70 sobrecompra, <30 sobreventa, 50 es la línea de tendencia. Las divergencias entre precio y RSI son señales anticipadas de cambio de tendencia.',
          'Las tres EMAs esenciales: 21 (momentum corto), 55 (tendencia media), 200 (frontera bull/bear). Precio por encima de la EMA 200 diaria = bull market.',
          'Golden Cross (cruce alcista) y Death Cross (cruce bajista) son señales institucionales que mueven mercados—pero solo en mercados con tendencia.',
          'NUNCA operes indicadores en mercados laterales. Si las EMAs están enredadas y el RSI oscila sin dirección, espera a que se defina la tendencia.',
          'Busca **confluencia**: la señal más potente ocurre cuando precio + soporte/resistencia + RSI + EMAs + volumen + velas apuntan todos a la misma dirección.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin hace un nuevo máximo histórico ($110K), pero el RSI 14 en diario marca 68—más bajo que los 82 que marcó en el máximo anterior ($105K). ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'Todo normal—el precio sigue subiendo, la tendencia es alcista' },
            { id: 'b', text: 'Divergencia bajista: el precio subió más alto pero el momentum se debilitó. Señal de precaución, posible corrección cercana' },
            { id: 'c', text: 'El RSI está roto, ignóralo' },
            { id: 'd', text: 'Es señal de compra porque el RSI no está en sobrecompra' }
          ],
          correctAnswer: 'b',
          explanation: 'Divergencia bajista clásica: precio hace Higher High pero RSI hace Lower High. Los toros empujan el precio arriba pero con menos fuerza cada vez. Es señal anticipada de agotamiento—no de venta inmediata, pero sí de precaución.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la EMA más usada por instituciones para determinar si estamos en bull o bear market?',
          options: [
            { id: 'a', text: 'EMA 9 en gráfico de 15 minutos' },
            { id: 'b', text: 'EMA 21 en gráfico de 4 horas' },
            { id: 'c', text: 'EMA 200 en gráfico diario—la frontera entre bull y bear market a nivel institucional' },
            { id: 'd', text: 'SMA 50 en gráfico semanal' }
          ],
          correctAnswer: 'c',
          explanation: 'La EMA 200 diaria es la línea más importante del trading institucional. Fondos de inversión con miles de millones en capital toman decisiones basadas en la posición del precio respecto a esta línea. Por encima = bull, por debajo = bear.'
        },
        {
          id: 'q3',
          question: 'SOL cruza de abajo hacia arriba la EMA 200 en diario con volumen 3× superior al promedio. ¿Qué tipo de señal es?',
          options: [
            { id: 'a', text: 'Death Cross—señal bajista' },
            { id: 'b', text: 'Señal alcista importante: el precio está recuperando territorio bull. Considerar posición long con stop debajo de la EMA 200' },
            { id: 'c', text: 'Señal sin importancia—las EMAs no sirven' },
            { id: 'd', text: 'Señal de venta—el precio está sobrecomprado' }
          ],
          correctAnswer: 'b',
          explanation: 'Cruzar la EMA 200 al alza con volumen fuerte es una de las señales alcistas más importantes. El precio pasa de territorio "bear" a "bull". El volumen alto confirma que el movimiento tiene participación institucional real.'
        },
        {
          id: 'q4',
          question: 'ETH tiene RSI en 25 (sobreventa) y el precio está tocando un soporte histórico en $2,800 que ya respetó 3 veces antes. ¿Cuál es la confluencia?',
          options: [
            { id: 'a', text: 'No hay confluencia—el RSI bajo significa que hay que vender' },
            { id: 'b', text: 'Confluencia alcista fuerte: RSI en sobreventa + soporte histórico probado. Es zona de posible suelo para considerar compra con stop debajo del soporte' },
            { id: 'c', text: 'Solo el soporte importa, el RSI es irrelevante' },
            { id: 'd', text: 'Es señal de que el soporte se romperá esta vez' }
          ],
          correctAnswer: 'b',
          explanation: 'Confluencia = múltiples señales apuntando a la misma dirección. RSI sobreventa + soporte fuerte = dos señales alcistas que se refuerzan mutuamente. No es garantía, pero es de alta probabilidad. El stop debajo del soporte protege tu capital si la tesis falla.'
        },
        {
          id: 'q5',
          question: 'Llevas 3 semanas siguiendo cruces de EMAs en Bitcoin, pero cada vez que compras o vendes basándote en el cruce, el precio revierte y pierdes. ¿Qué está pasando probablemente?',
          options: [
            { id: 'a', text: 'Las EMAs dejaron de funcionar en crypto' },
            { id: 'b', text: 'El mercado está en rango lateral—las EMAs se cruzan constantemente generando señales falsas. Deberías dejar de seguir cruces hasta que haya tendencia clara' },
            { id: 'c', text: 'Necesitas agregar más indicadores a tu gráfico' },
            { id: 'd', text: 'Debes usar timeframes más bajos para más precisión' }
          ],
          correctAnswer: 'b',
          explanation: 'El 90% de las pérdidas por indicadores ocurren en mercados laterales. Sin tendencia, las EMAs se enredan y generan señales falsas. La solución NO es más indicadores—es reconocer que el mercado no tiene dirección y esperar a que se defina.'
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
    description: 'La habilidad más importante del análisis técnico: identificar objetivamente si el mercado está subiendo, bajando o lateral. Sin esto, cualquier otra herramienta pierde sentido.',
    sections: [
      {
        type: 'intro',
        title: 'El Mapa del Campo de Batalla',
        content: 'Imagina que estás en medio de una guerra y no tienes mapa. No sabes si tu ejército avanza o retrocede, si estás ganando o perdiendo. Así opera la mayoría de la gente en crypto: compran y venden sin saber si el mercado va a su favor o en su contra. La **estructura de mercado** es tu mapa. Es la herramienta que te dice objetivamente—sin opiniones, sin emociones—quién tiene el control: los toros o los osos. Todo lo que aprendiste hasta ahora (velas, S/R, indicadores) funciona 10× mejor cuando sabes en qué tipo de mercado estás. Una vela Hammer en soporte dentro de un uptrend es oro. La misma vela en un downtrend puede ser una trampa mortal.',
        highlight: {
          title: 'Antes de Cualquier Trade',
          text: 'Antes de buscar entradas, antes de mirar indicadores, antes de todo: **identifica la estructura**. ¿Estamos subiendo, bajando o laterales? Esta es la pregunta más importante y la que el 90% de los traders ignoran.'
        }
      },
      {
        type: 'main',
        title: 'Tendencia Alcista: Higher Highs + Higher Lows',
        content: 'Una tendencia alcista se define por UNA sola regla: el precio hace **máximos cada vez más altos (Higher Highs / HH)** y **mínimos cada vez más altos (Higher Lows / HL)**. Piensa en una escalera subiendo—cada peldaño está más arriba que el anterior.',
        features: [
          { icon: TrendingUp, title: 'Higher High (HH)', text: 'Cada vez que el precio sube, supera el máximo anterior. Esto muestra que los compradores tienen suficiente fuerza para empujar el precio más arriba cada vez. Ejemplo: SOL hace un máximo en $180, retrocede, y luego sube a $210 (nuevo HH). Los toros dominan.' },
          { icon: TrendingUp, title: 'Higher Low (HL)', text: 'Cada vez que el precio retrocede, no cae tanto como la vez anterior. Los compradores aparecen antes. Ejemplo: SOL cae de $180 a $155, sube a $210, retrocede solo hasta $170 (HL). Los compradores no esperan tanto para comprar—señal de demanda creciente.' },
          { icon: CheckCircle, title: 'Regla de Operación', text: 'En un uptrend confirmado: **compra los retrocesos** (cuando el precio cae a un nuevo HL). La tendencia es tu amiga. No la pelees. No intentes vender en corto un mercado que hace HH + HL.' }
        ]
      },
      {
        type: 'main',
        title: 'Tendencia Bajista: Lower Highs + Lower Lows',
        content: 'Una tendencia bajista es el espejo exacto: el precio hace **máximos cada vez más bajos (Lower Highs / LH)** y **mínimos cada vez más bajos (Lower Lows / LL)**. Escalera bajando—cada rebote es más débil que el anterior.',
        features: [
          { icon: TrendingDown, title: 'Lower High (LH)', text: 'Cada rebote alcanza menos que el anterior. Los vendedores atacan antes. Ejemplo: BTC sube a $60K, cae, rebota solo hasta $55K (LH). Los osos no dejan que los toros recuperen terreno.' },
          { icon: TrendingDown, title: 'Lower Low (LL)', text: 'Cada caída rompe el mínimo anterior. Los compradores no logran defender los pisos. Ejemplo: BTC cae a $52K, rebota, y luego cae a $48K (LL). Los vendedores tienen el control total.' },
          { icon: AlertTriangle, title: 'Regla de Operación', text: 'En un downtrend confirmado: **no intentes comprar cada dip**. "Buy the dip" solo funciona en uptrends. En un downtrend, cada rebote es una oportunidad de salida, no de compra. Espera a que la estructura cambie antes de comprar.' }
        ]
      },
      {
        type: 'main',
        title: 'Break of Structure (BOS): La Primera Señal de Alerta',
        content: 'Un **Break of Structure** ocurre cuando la secuencia de HH/HL o LH/LL se rompe por primera vez. Es como el primer crujido en un edificio antes de colapsar—todavía no cayó, pero algo cambió. En un uptrend, el BOS ocurre cuando **el precio rompe el último Higher Low**. En un downtrend, cuando **el precio supera el último Lower High**.',
        features: [
          { icon: AlertTriangle, title: 'BOS en Uptrend (Señal de Debilidad)', text: 'SOL venía haciendo HH + HL: $155 → $180 → $170 → $210 → $190. Si ahora el precio cae debajo de $190 (último HL), es BOS. La escalera dejó de subir. No significa que el bear market empezó, pero la tendencia alcista se debilitó.' },
          { icon: Shield, title: 'BOS en Downtrend (Señal de Esperanza)', text: 'BTC venía haciendo LH + LL: $55K → $48K → $52K → $45K → $50K. Si ahora el precio supera $50K (último LH), es BOS. La presión bajista se debilitó. Los toros mostraron la primera señal de vida.' },
          { icon: Crosshair, title: 'Tu Acción en un BOS', text: 'BOS alcista roto: **no vendas todo en pánico**, pero ajusta tus stops y reduce tamaño de posiciones. BOS bajista roto: **no compres todo de golpe**, pero empieza a construir una posición pequeña con stop definido. El BOS es alerta, no confirmación.' }
        ]
      },
      {
        type: 'main',
        title: 'Change of Character (CHOCH): El Cambio de Manos Confirmado',
        content: 'Si el BOS es la primera alerta, el **CHOCH (Change of Character)** es la confirmación. Un CHOCH ocurre cuando la estructura **no solo se rompe, sino que se invierte**: de HH + HL a LH + LL (o viceversa). Es el momento donde el control del mercado cambia de manos—de toros a osos o de osos a toros.',
        features: [
          { icon: RefreshCw, title: 'CHOCH Bajista (De Bull a Bear)', text: 'El uptrend se rompe (BOS), y luego el precio confirma haciendo un Lower High seguido de un Lower Low. La escalera ya no sube—empezó a bajar. Esto confirma que no fue una corrección temporal, sino un cambio real de tendencia.' },
          { icon: RefreshCw, title: 'CHOCH Alcista (De Bear a Bull)', text: 'El downtrend se rompe (BOS), y luego el precio confirma haciendo un Higher Low seguido de un Higher High. La escalera dejó de bajar y empezó a subir. Este es el momento donde los inversores inteligentes empiezan a comprar agresivamente.' },
          { icon: Clock, title: 'Paciencia: BOS ≠ CHOCH', text: 'Muchos traders confunden BOS con CHOCH y actúan demasiado rápido. Un BOS puede ser solo una corrección dentro de una tendencia. Necesitas que la estructura se invierta completamente (nueva secuencia de HH/HL o LH/LL) para confirmar CHOCH.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Mercado en Tendencia vs Mercado en Rango',
        leftSide: {
          title: 'Mercado en Tendencia (Trending)',
          points: [
            'Clara secuencia de HH + HL (alcista) o LH + LL (bajista)',
            'Las EMAs están separadas y ordenadas',
            'Las estrategias de "seguir la tendencia" funcionan muy bien',
            'Los breakouts de soporte/resistencia tienden a continuar',
            'Los indicadores dan señales más fiables',
            'Es donde se gana la mayor parte del dinero'
          ]
        },
        rightSide: {
          title: 'Mercado en Rango (Lateral/Consolidación)',
          points: [
            'No hay HH ni LL claros—rebota entre soporte y resistencia',
            'Las EMAs están enredadas y sin dirección',
            'Comprar soporte y vender resistencia funciona (trading de rango)',
            'Los breakouts falsos son comunes (fakeouts)',
            'Los indicadores generan muchas señales falsas',
            'Es donde la mayoría pierde dinero por sobreoperar'
          ]
        }
      },
      {
        type: 'main',
        title: 'Análisis Multi-Timeframe: Viendo el Panorama Completo',
        content: 'Un error común es analizar la estructura en un solo timeframe. El mercado puede estar alcista en diario pero bajista en 4 horas. La solución es el **análisis multi-timeframe**: empiezas por el panorama general y luego bajas a los detalles.',
        features: [
          { icon: Layers, title: 'Top-Down Analysis (De Arriba Hacia Abajo)', text: '**Paso 1**: Mira el gráfico semanal—¿cuál es la tendencia macro? **Paso 2**: Baja al diario—¿la tendencia de mediano plazo está alineada? **Paso 3**: Baja a 4h—busca tu entrada táctica. Si semanal y diario son alcistas, en 4h solo busca compras. Nunca pelees la tendencia del timeframe superior.' },
          { icon: Target, title: 'Alineación = Probabilidad Alta', text: 'La operación de mayor probabilidad es cuando semanal, diario y 4h están TODOS alcistas (o todos bajistas). Cuando hay conflicto entre timeframes, la mejor acción es NO operar. Espera a que se alineen.' }
        ]
      },
      {
        type: 'main',
        title: 'Poniendo Todo Junto: Tu Framework de Estructura',
        content: 'Aquí tienes el proceso paso a paso que deberías seguir ANTES de cada operación. Esto toma 5 minutos y te ahorra semanas de pérdidas:',
        features: [
          { icon: Search, title: '1. ¿Cuál es la Estructura?', text: '¿El precio hace HH + HL (alcista), LH + LL (bajista), o rebota sin dirección (rango)? Si no puedes identificar la estructura en 30 segundos, probablemente estés en rango—y eso significa operar con precaución máxima.' },
          { icon: Eye, title: '2. ¿Hay BOS o CHOCH Reciente?', text: '¿La estructura se rompió recientemente? Si hay BOS, estás en alerta. Si hay CHOCH, la tendencia probablemente cambió. Ajusta tu sesgo alcista/bajista según esta información.' },
          { icon: Crosshair, title: '3. Opera a Favor de la Estructura', text: 'En uptrend: compra retrocesos a zonas de soporte. En downtrend: espera o vende rebotes a resistencia. En rango: compra soporte, vende resistencia, con stops ajustados. **Nunca pelees la estructura del timeframe superior.**' },
          { icon: Shield, title: '4. Tu Stop Loss Está en la Estructura', text: 'Si compraste porque la estructura es alcista, tu stop está donde la estructura se rompe—debajo del último HL. Si la estructura se invalida, tu tesis también, y debes salir. Es objetivo y elimina la emoción.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'La Estructura lo Es Todo',
        items: [
          'La estructura de mercado te dice **quién tiene el control**: toros (HH + HL), osos (LH + LL), o nadie (rango lateral).',
          'Break of Structure (BOS) es la primera señal de que algo cambió. No es confirmación, es alerta—ajusta tu riesgo pero no entres en pánico.',
          'Change of Character (CHOCH) es la confirmación de un cambio de tendencia. Cuando la estructura se invierte completamente (de HH/HL a LH/LL o viceversa), el control cambió de manos.',
          'Analiza siempre de arriba hacia abajo: semanal → diario → 4h. La operación ideal es cuando todos los timeframes están alineados.',
          'En mercados laterales, la mayoría de las señales son falsas. Si no puedes identificar la estructura en 30 segundos, probablemente no haya tendencia—y lo mejor es esperar.',
          'Tu stop loss debe estar donde la estructura se invalida. Esto elimina la emoción de la ecuación y te protege objetivamente.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'SOL viene haciendo la siguiente secuencia de precios: mínimo $120, máximo $155, mínimo $135, máximo $175, mínimo $150. ¿Qué estructura de mercado es esta?',
          options: [
            { id: 'a', text: 'Bajista—el precio oscila demasiado' },
            { id: 'b', text: 'Alcista—cada mínimo es más alto que el anterior (HL) y cada máximo es más alto (HH)' },
            { id: 'c', text: 'Lateral—está en un rango' },
            { id: 'd', text: 'No se puede determinar con esta información' }
          ],
          correctAnswer: 'b',
          explanation: 'Mínimos: $120 → $135 → $150 (Higher Lows). Máximos: $155 → $175 (Higher Highs). Secuencia perfecta de HH + HL = tendencia alcista confirmada.'
        },
        {
          id: 'q2',
          question: 'Bitcoin viene subiendo (HH + HL) durante 4 meses. De repente, el precio cae debajo del último Higher Low. ¿Qué acaba de ocurrir y qué haces?',
          options: [
            { id: 'a', text: 'Nada—es una corrección normal, HODL sin cambios' },
            { id: 'b', text: 'Break of Structure (BOS). Ajusto stops, reduzco tamaño de posición, y observo si se forma un CHOCH' },
            { id: 'c', text: 'Vendo todo inmediatamente—el bear market empezó' },
            { id: 'd', text: 'Compro más—es un dip en tendencia alcista' }
          ],
          correctAnswer: 'b',
          explanation: 'Romper el último HL es un Break of Structure—primera señal de debilidad. No es confirmación de bear market (eso sería CHOCH), pero es alerta seria. Reduce riesgo y observa: si forma LH + LL, tendrás tu CHOCH.'
        },
        {
          id: 'q3',
          question: 'Estás analizando ETH. En gráfico semanal la tendencia es alcista. En diario es alcista. En 4 horas el precio retrocedió a un soporte con RSI en sobreventa. ¿Cuál es la operación?',
          options: [
            { id: 'a', text: 'Vender—el retroceso en 4h significa debilidad' },
            { id: 'b', text: 'Comprar el retroceso en 4h—la tendencia semanal y diaria son alcistas, el retroceso es una oportunidad de entrada con confluencia' },
            { id: 'c', text: 'Esperar a que cambie la tendencia semanal' },
            { id: 'd', text: 'Operar en gráfico de 1 minuto para más precisión' }
          ],
          correctAnswer: 'b',
          explanation: 'Análisis top-down perfecto: semanal y diario alcistas = el panorama general está a tu favor. Un retroceso en 4h a soporte + RSI sobreventa es una entrada de alta probabilidad a favor de TODOS los timeframes.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la diferencia entre un Break of Structure (BOS) y un Change of Character (CHOCH)?',
          options: [
            { id: 'a', text: 'Son lo mismo, solo nombres diferentes' },
            { id: 'b', text: 'BOS es la primera ruptura de la estructura (alerta). CHOCH es cuando la estructura se invierte completamente, confirmando un cambio real de tendencia' },
            { id: 'c', text: 'BOS es bajista y CHOCH es alcista' },
            { id: 'd', text: 'BOS ocurre en timeframes bajos y CHOCH en timeframes altos' }
          ],
          correctAnswer: 'b',
          explanation: 'BOS = primera grieta en la estructura (alerta, no confirmación). CHOCH = la estructura se invierte por completo—de HH/HL a LH/LL o viceversa. Muchos traders actúan en el BOS cuando deberían esperar el CHOCH para mayor confirmación.'
        },
        {
          id: 'q5',
          question: 'Llevas 2 semanas intentando operar un mercado donde el precio rebota entre $40K y $44K sin hacer Higher Highs ni Lower Lows. Todas tus operaciones pierden. ¿Qué tipo de mercado es y qué deberías hacer?',
          options: [
            { id: 'a', text: 'Es un bear market—deja de operar completamente' },
            { id: 'b', text: 'Es un mercado en rango (lateral). La mejor opción es operar los extremos del rango (comprar $40K, vender $44K) o simplemente esperar a que rompa' },
            { id: 'c', text: 'Necesitas más indicadores para encontrar la tendencia' },
            { id: 'd', text: 'Baja al timeframe de 1 minuto para ver mejor' }
          ],
          correctAnswer: 'b',
          explanation: 'Sin HH ni LL = mercado lateral/rango. Las estrategias de tendencia fallan aquí. Tienes dos opciones: (1) operar los extremos del rango con stops ajustados, o (2) esperar pacientemente a que el precio rompa el rango con volumen para definir la nueva tendencia.'
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
    description: 'No compres solo por el logo o el hype. La economía de un token—su supply, distribución, inflación y calendario de desbloqueos—determina si ganas o pierdes. Aprende a leer las matemáticas antes de invertir.',
    sections: [
      {
        type: 'intro',
        title: 'No Compres un Logo, Compra Matemáticas',
        content: 'El 95% de los inversores en crypto compran tokens basándose en: el logo es bonito, alguien en Twitter lo recomendó, o "suena a que va a subir". Luego ven cómo su inversión cae -80% y no entienden por qué. La respuesta casi siempre está en los **tokenomics**—la economía del token. ¿Cuántos tokens existen? ¿Cuántos más se van a crear? ¿Quién los tiene? ¿Cuándo van a poder vender? Estas preguntas simples determinan si un token tiene presión de compra o presión de venta. Es pura oferta y demanda, pero con mecanismos que la mayoría no se molesta en entender. Los que sí los entienden—VCs, fondos, traders profesionales—son los que consistentemente ganan dinero a costa de los que no.',
        highlight: {
          title: 'La Regla de Oro de los Tokenomics',
          text: 'Si no entiendes los tokenomics de un proyecto, eres la liquidez de salida de alguien más. Alguien que SÍ los leyó te está vendiendo sus tokens sabiendo que el supply se va a multiplicar 10×.'
        }
      },
      {
        type: 'main',
        title: 'Supply: La Oferta del Token',
        content: 'El concepto más fundamental es el **supply**—cuántos tokens existen y cuántos van a existir. Hay tres números que DEBES verificar antes de comprar cualquier token:',
        features: [
          { icon: BarChart3, title: 'Circulating Supply (Supply Circulante)', text: 'Los tokens que AHORA MISMO están en el mercado, en manos de personas que pueden comprar y vender. Este es el número real. Si hay 100 millones de tokens circulando a $1, el **market cap real** es $100M. Este es el número que importa para evaluar el tamaño actual del proyecto.' },
          { icon: Layers, title: 'Total Supply (Supply Total)', text: 'Todos los tokens que existen, incluyendo los que están bloqueados (en vesting, en la tesorería, sin distribuir). Si el total es 1,000 millones pero solo circulan 100 millones, hay **900 millones esperando para entrar al mercado**. Cuando entren, diluirán tu posición.' },
          { icon: Lock, title: 'Max Supply (Supply Máximo)', text: 'El número máximo de tokens que existirán JAMÁS. Bitcoin tiene max supply de 21 millones—nunca habrá más. Algunos tokens no tienen max supply (emisión infinita como DOGE). Otros tienen max supply pero tardarán décadas en alcanzarlo. **Si no hay max supply, la inflación es eterna.**' }
        ]
      },
      {
        type: 'main',
        title: 'Market Cap vs FDV: La Trampa del "Token Barato"',
        content: '"¡Está a $0.001, es baratísimo!" Esto es una **trampa mortal** que atrapa a miles de novatos. El precio unitario de un token no significa NADA sin contexto. Lo que importa es la capitalización de mercado y, más importante aún, el **Fully Diluted Valuation (FDV)**.',
        features: [
          { icon: BarChart3, title: 'Market Cap = Precio × Supply Circulante', text: 'Si un token cuesta $0.001 pero hay 100,000 millones en circulación, el market cap es $100M. No es "barato"—es un proyecto de $100M. Compara: otro token a $200 con 1 millón de supply circulante también tiene market cap de $200M. El precio por unidad es irrelevante.' },
          { icon: AlertTriangle, title: 'FDV = Precio × Supply Total', text: 'Aquí está la trampa real. Si ese token de $0.001 tiene 10 TRILLONES de supply total, el FDV es $10,000 millones. ¿De verdad crees que un proyecto random vale lo mismo que las empresas más grandes del mundo? El FDV te dice: "para que este token mantenga su precio, necesitaría una valoración de $10B cuando todo el supply se desbloquee". Casi nunca pasa.' },
          { icon: Eye, title: 'La Ratio Market Cap/FDV', text: 'Divide el market cap entre el FDV. Si la ratio es menor a 0.10 (solo el 10% del supply circula), hay un 90% de tokens esperando para diluirte. Ratio baja = altísimo riesgo de dilución. Ratio alta (>0.70) = la mayoría del supply ya circula y hay poco riesgo de dilución adicional.' }
        ]
      },
      {
        type: 'main',
        title: 'Distribución: ¿Quién Tiene los Tokens?',
        content: 'No solo importa cuántos tokens hay—importa **QUIÉN los tiene**. Un proyecto donde el 50% de los tokens están en manos del equipo fundador es fundamentalmente diferente a uno donde el 80% fue distribuido a la comunidad. La distribución te dice quién tiene el poder y quién tiene la motivación de vender.',
        features: [
          { icon: Users, title: 'Team / Founders (Equipo)', text: 'Tokens asignados a los creadores del proyecto. Idealmente 10-20%. Más de 25% es red flag—el equipo podría vender masivamente. Menos de 5% es sospechoso también—¿por qué el equipo no quiere tokens de su propio proyecto?' },
          { icon: Landmark, title: 'Inversores / VCs (Capital de Riesgo)', text: 'Tokens vendidos a inversores privados antes del lanzamiento público, usualmente con descuento del 50-90%. Los VCs compraron a precios que tú NUNCA verás. Cuando sus tokens se desbloquean, tienen +500% o +1000% de ganancia y motivación enorme de vender. Más del 20% para VCs es señal de precaución.' },
          { icon: Globe, title: 'Comunidad / Airdrop / Público', text: 'Tokens distribuidos a usuarios reales del protocolo. A mayor porcentaje para la comunidad, más descentralizado y sano. Proyectos como Uniswap (60% comunidad) son el estándar dorado. Proyectos donde comunidad recibe <30% favorecen a insiders.' },
          { icon: PiggyBank, title: 'Tesorería / Ecosistema', text: 'Tokens reservados para financiar desarrollo futuro, grants, incentivos. Es un fondo de guerra controlado usualmente por gobernanza. 10-20% es razonable. Si es >30%, pregúntate quién realmente controla esa tesorería y cuáles son las reglas para gastarla.' }
        ]
      },
      {
        type: 'main',
        title: 'Vesting y Unlocks: El Calendario de la Presión de Venta',
        content: 'Los tokens del equipo, VCs e inversores no están disponibles inmediatamente. Tienen un calendario de **vesting** (consolidación) que define cuándo pueden venderlos. Este calendario es CRÍTICO porque cada unlock crea una ola potencial de presión de venta.',
        features: [
          { icon: Clock, title: 'Cliff Period (Período de Espera)', text: 'Tiempo que debe pasar antes de que se desbloquee el PRIMER token. Cliff de 1 año = el equipo no puede vender nada durante 12 meses. **Cliff corto (3-6 meses) = red flag.** Cliff largo (12-24 meses) = el equipo está comprometido a largo plazo.' },
          { icon: Activity, title: 'Vesting Schedule (Calendario)', text: 'Después del cliff, los tokens se desbloquean gradualmente. "4 años de vesting lineal" = cada mes se desbloquea 1/48 del total. Mejor que "todo se desbloquea de golpe" (cliff seguido de dump masivo).' },
          { icon: AlertTriangle, title: 'Token Unlocks Masivos', text: 'Usa **TokenUnlocks.app** para ver el calendario de CADA proyecto. Si en 2 semanas se desbloquea el 15% del supply total, prepárate para presión de venta MASIVA. Los insiders que llevan meses esperando finalmente podrán vender. Esto aplasta precios consistentemente.' },
          { icon: Target, title: 'El Patrón "Pump Before Unlock"', text: 'Patrón clásico: el precio sube 30-50% ANTES de un unlock grande. ¿Por qué? Los insiders necesitan precio alto para maximizar su venta. Marketing se intensifica, noticias positivas aparecen. Después del unlock: dump. No seas la liquidez de salida.' }
        ]
      },
      {
        type: 'main',
        title: 'Inflación vs Deflación de Tokens',
        content: 'Así como los gobiernos imprimen dinero (inflación), los protocolos pueden crear nuevos tokens (emisión). Y así como Bitcoin quema fees, algunos protocolos destruyen tokens (deflación). La batalla entre emisión y destrucción determina si tu inversión se diluye o se concentra.',
        features: [
          { icon: TrendingDown, title: 'Inflación (Presión Bajista)', text: 'Nuevos tokens entran al mercado constantemente: emisiones para staking, recompensas de minería, unlocks de tesorería. Si un protocolo emite 10% de nuevo supply al año, tu posición se diluye 10% anual. Para mantener el mismo precio, la demanda debe crecer al mismo ritmo—raro.' },
          { icon: TrendingUp, title: 'Deflación / Quema (Presión Alcista)', text: 'Algunos protocolos "queman" (destruyen permanentemente) tokens cuando se pagan fees. Ethereum quema ETH en cada transacción. Si la quema supera la emisión, el supply DECRECE con el tiempo = más escasez = presión alcista natural. ETH ha sido deflacionario en períodos de alta actividad.' },
          { icon: Percent, title: 'Inflación Neta = Emisión − Quema', text: 'Lo que importa es el número neto. 5% emisión − 3% quema = 2% inflación neta. Es mejor que 5% puro, pero sigue siendo inflación. El escenario ideal: emisión < quema = deflación neta. Proyectos como BNB hacen quemas trimestrales masivas para reducir supply.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Buenos vs Malos Tokenomics',
        leftSide: {
          title: 'Tokenomics Saludables',
          points: [
            'Max supply definido o emisión decreciente',
            'Equipo ≤20% con vesting de 3-4 años',
            'VCs ≤20% con cliff de 12+ meses',
            'Comunidad ≥40% del supply total',
            'Ratio Market Cap/FDV > 0.50',
            'Mecanismo de quema o deflación',
            'Revenue real del protocolo (fees pagados por usuarios)'
          ]
        },
        rightSide: {
          title: 'Red Flags de Tokenomics',
          points: [
            'Supply infinito sin mecanismo de quema',
            'Equipo >30% con cliff corto (3-6 meses)',
            'VCs >30% compraron con 90%+ de descuento',
            'Comunidad <20% del supply',
            'Ratio Market Cap/FDV < 0.10 (90%+ sin desbloquear)',
            'Unlock masivo próximo (>10% del supply)',
            'Sin revenue real—el token no tiene utilidad más allá de especulación'
          ]
        }
      },
      {
        type: 'main',
        title: 'Casos Reales: Tokenomics en Acción',
        content: 'La teoría cobra vida cuando miras proyectos reales. Estos ejemplos muestran cómo los tokenomics determinan el destino de un token:',
        features: [
          { icon: CheckCircle, title: 'Bitcoin (BTC) — El Estándar Dorado', text: 'Max supply: 21 millones. Emisión decreciente (halving cada 4 años). Circulating/total: ~93%. Sin equipo con tokens bloqueados. Sin VCs. 100% distribución orgánica. Resultado: el activo más exitoso de la historia moderna.' },
          { icon: CheckCircle, title: 'Solana (SOL) — Tokenomics Sólidos', text: 'Emisión inflacionaria que decrece ~15% por año. Staking rewards incentivan HODL (reduce supply circulante efectivo). Fees se queman parcialmente. Comunidad activa y descentralizada. Resultado: top 5 por capitalización.' },
          { icon: AlertTriangle, title: 'FTT (FTX Token) — La Ilusión', text: 'El token de FTX parecía tener buenos tokenomics: quemas regulares, supply limitado. Pero Alameda Research (la empresa hermana) tenía miles de millones en FTT como "colateral". Cuando se descubrió, FTT colapsó -97% en días. Lección: los tokenomics en papel no sirven si hay concentración oculta.' },
          { icon: AlertTriangle, title: 'LUNA/UST — La Espiral de la Muerte', text: 'LUNA tenía un mecanismo "elegante": quemar LUNA para crear UST (stablecoin). Funcionó mientras había demanda. Cuando UST perdió el peg, se crearon TRILLONES de LUNA para intentar restaurarlo—inflación infinita instantánea. De $80 a $0.00001. Los tokenomics pueden matar un proyecto de $40B en una semana.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Tokenomics',
        items: [
          'NUNCA inviertas sin verificar el supply: circulante, total y máximo. Si la ratio circulante/total es baja (<10%), hay una montaña de tokens esperando para diluirte.',
          'El precio unitario es irrelevante—$0.001 puede ser "caro" y $200 puede ser "barato". Lo que importa es el Market Cap y el FDV (Fully Diluted Valuation).',
          'Verifica la distribución: ¿quién tiene los tokens? Si equipo + VCs > 50%, eres minoría en un juego controlado por insiders.',
          'Revisa el calendario de unlocks en TokenUnlocks.app ANTES de comprar. Un unlock masivo próximo casi siempre genera presión de venta.',
          'Calcula la inflación neta: emisión anual − quema anual. Si es positiva, tu posición se diluye cada año. Compara con el crecimiento esperado de la demanda.',
          'Los tokenomics en papel no son suficientes—verifica la concentración real de wallets (en Arkham o Dune). Si 5 wallets tienen el 60% del supply, una sola venta puede destruir el precio.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Encuentras un token a $0.01. Supply circulante: 10M. Supply total: 10B. FDV: $100M. ¿Cuál es el market cap REAL y qué riesgo hay?',
          options: [
            { id: 'a', text: '$100M—ese es el valor del proyecto' },
            { id: 'b', text: '$100K (10M × $0.01). Solo el 0.1% del supply circula—el 99.9% está esperando para entrar al mercado y diluirte masivamente' },
            { id: 'c', text: 'No se puede calcular sin más datos' },
            { id: 'd', text: '$10M—es el promedio entre market cap y FDV' }
          ],
          correctAnswer: 'b',
          explanation: 'Market cap = supply circulante × precio = 10M × $0.01 = $100K. El FDV es $100M. La diferencia 1000× significa que el 99.9% del supply está por desbloquearse. Cada unlock diluye tu posición exponencialmente.'
        },
        {
          id: 'q2',
          question: 'Proyecto A: equipo 15%, 4 años vesting. Proyecto B: equipo 30%, 6 meses cliff. Tecnología similar. ¿Cuál tiene mejor alineación con holders?',
          options: [
            { id: 'a', text: 'B—el equipo tiene más "skin in the game" con 30%' },
            { id: 'b', text: 'A—menos tokens para insiders y vesting largo significa que el equipo necesita que el proyecto tenga éxito a largo plazo para beneficiarse' },
            { id: 'c', text: 'Son iguales—el porcentaje del equipo no importa' },
            { id: 'd', text: 'B—más tokens para el equipo = más motivación' }
          ],
          correctAnswer: 'b',
          explanation: 'Vesting largo (4 años) alinea incentivos: el equipo solo gana si el proyecto es exitoso a largo plazo. 6 meses cliff = el equipo puede dumpearte todo en menos de un año. "Skin in the game" es quedarse comprometido, no tener muchos tokens que puedes vender pronto.'
        },
        {
          id: 'q3',
          question: 'Un protocolo emite 5% de nuevo supply anual pero quema 3% en fees. ¿Es inflacionario o deflacionario?',
          options: [
            { id: 'a', text: 'Deflacionario—porque quema tokens' },
            { id: 'b', text: 'Inflacionario al 2% neto (5% emisión − 3% quema). Cada año tu posición se diluye un 2%' },
            { id: 'c', text: 'Neutral—se cancelan mutuamente' },
            { id: 'd', text: 'Depende del precio del token' }
          ],
          correctAnswer: 'b',
          explanation: 'Lo que importa es la inflación NETA: 5% − 3% = 2% inflacionario. Se crean más tokens de los que se destruyen = el supply crece = presión bajista lenta pero constante. Para que el precio suba, la demanda debe crecer >2% al año.'
        },
        {
          id: 'q4',
          question: 'TokenUnlocks muestra que en 2 semanas se desbloquea el 15% del supply total. El precio ha subido 40% este mes. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'El mercado anticipa buenas noticias—compra más' },
            { id: 'b', text: 'Patrón clásico "pump before unlock": los insiders inflan el precio antes de vender. Los retail compran el hype y se convierten en liquidez de salida post-unlock' },
            { id: 'c', text: 'Los unlocks no afectan al precio—es pura coincidencia' },
            { id: 'd', text: 'El equipo está comprando más tokens antes del unlock' }
          ],
          correctAnswer: 'b',
          explanation: 'Pump before unlock es un patrón repetido: marketing se intensifica, noticias positivas aparecen, el precio sube. ¿Por qué? Los insiders necesitan precio alto para maximizar el valor de sus tokens desbloqueados. Post-unlock = avalancha de venta.'
        },
        {
          id: 'q5',
          question: 'Un protocolo hace un airdrop masivo: regala tokens al 20% de sus usuarios activos. ¿Qué pasa normalmente con el precio en las semanas siguientes?',
          options: [
            { id: 'a', text: 'Sube—más gente tiene el token y lo promueve' },
            { id: 'b', text: 'Se mantiene estable—los airdrops son neutrales' },
            { id: 'c', text: 'Cae fuerte—los farmers venden inmediatamente sus tokens gratis, creando presión de venta masiva. Los que compraron antes del airdrop absorben la pérdida' },
            { id: 'd', text: 'Depende de la calidad del proyecto únicamente' }
          ],
          correctAnswer: 'c',
          explanation: 'La mayoría de receptores de airdrops venden inmediatamente—recibieron algo gratis y quieren convertirlo en dinero. Esto crea presión de venta enorme. La estrategia inteligente: espera el dump post-airdrop y compra después de la capitulación, no antes.'
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
    description: 'Todo en crypto se mueve al ritmo de Bitcoin. El halving cada 4 años crea un shock de oferta predecible que ha generado bull markets consistentemente. Entiende el ciclo y posiciónate antes que la mayoría.',
    sections: [
      {
        type: 'intro',
        title: 'El Director de Orquesta',
        content: 'Hay un patrón en crypto que se ha repetido con precisión matemática desde 2012: cada ~4 años, Bitcoin reduce su emisión a la mitad (halving), y 12-18 meses después ocurre un bull market explosivo. No es coincidencia—es la ley de oferta y demanda actuando en el activo más escaso del mundo. Bitcoin dirige TODO el mercado crypto. Cuando BTC sube, el capital fluye en cascada: **BTC → ETH → Large Caps → Mid Caps → Small Caps → Memecoins**. Cuando BTC cae, todo cae con él (las altcoins caen más fuerte). Entender en qué fase del ciclo estamos es probablemente la ventaja más grande que puedes tener. Los que compran en el bear y venden en la euforia acumulan riqueza generacional. Los que compran en la euforia y venden en el pánico pierden todo.',
        highlight: {
          title: 'El Patrón Que Se Repite',
          text: 'Desde 2012, cada halving ha sido seguido por un bull market 12-18 meses después: 2012 → 2013 bull, 2016 → 2017 bull, 2020 → 2021 bull, 2024 → 2025 bull. Cuatro de cuatro. No es magia. Es matemáticas.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es el Halving y Por Qué Importa?',
        content: 'Cada ~210,000 bloques (aproximadamente 4 años), la cantidad de Bitcoin nuevo que se crea por bloque se reduce exactamente a la **mitad**. Esto está programado en el código de Bitcoin y NADIE puede cambiarlo—ni gobiernos, ni Elon Musk, ni el creador de Bitcoin.',
        features: [
          { icon: Percent, title: 'La Matemática del Halving', text: '2009: se creaban **50 BTC** por bloque (cada 10 minutos). 2012 (1er halving): **25 BTC**. 2016: **12.5 BTC**. 2020: **6.25 BTC**. 2024: **3.125 BTC**. Cada halving la emisión nueva se corta a la mitad, mientras la demanda sigue creciendo. Oferta que decrece + demanda que crece = precio que sube.' },
          { icon: Lock, title: 'El Shock de Oferta', text: 'Imagina que todos los días se producen 900 BTC nuevos (pre-halving 2024). Los mineros venden la mayoría para pagar electricidad. De repente, la producción baja a 450 BTC diarios. Los compradores que antes absorbían 900 ahora compiten por solo 450. Misma demanda, mitad de oferta. El precio TIENE que ajustarse.' },
          { icon: Clock, title: '¿Cuándo es el Próximo?', text: 'El último halving fue en **abril 2024**. El próximo será aproximadamente en **2028**. Para 2140, se habrá minado el último Bitcoin. Después de eso, cero emisión nueva—Bitcoin será puramente deflacionario.' }
        ]
      },
      {
        type: 'main',
        title: 'Las 4 Fases del Ciclo de Mercado',
        content: 'El mercado crypto se mueve en un ciclo predecible de 4 fases que se repite con cada halving. Reconocer en qué fase estamos te da una ventaja enorme sobre el 90% del mercado que opera por emoción:',
        features: [
          { icon: TrendingDown, title: '1. Bear Market (Invierno Crypto)', text: 'Duración: 12-18 meses. El precio cae **-70% a -85%** desde el máximo. Los medios declaran "crypto muerto". Los novatos que compraron en la euforia venden en pánico con pérdidas masivas. Twitter crypto se vacía. Los exchanges despiden empleados. **Paradójicamente, este es el MEJOR momento para comprar.** Las fortunas de crypto se construyen en el bear market.' },
          { icon: Activity, title: '2. Acumulación (Primavera Silenciosa)', text: 'Duración: 6-12 meses. El precio se estabiliza y se mueve lateral. El volumen es bajo. Nadie habla de crypto. Los que quedaron empiezan a comprar silenciosamente. Las ballenas y fondos acumulan posiciones enormes. El halving generalmente ocurre en esta fase. **Si estás comprando aquí, estás con el dinero inteligente.**' },
          { icon: Zap, title: '3. Bull Market (Verano Explosivo)', text: 'Duración: 12-18 meses post-halving. El precio rompe el ATH anterior. Los medios empiezan a hablar de crypto otra vez. Los primeros novatos entran. Bitcoin sube 3-5× desde el mínimo del bear. Luego las altcoins explotan 10-100×. Cada semana hay un nuevo proyecto que hace 50×. La euforia crece exponencialmente.' },
          { icon: AlertTriangle, title: '4. Distribución (Otoño de la Euforia)', text: 'Duración: 2-6 meses. El pico del ciclo. Tu tía te pregunta cómo comprar Dogecoin. Los taxistas hablan de crypto. "Esta vez es diferente" se repite en todos lados. Los insiders y ballenas que compraron en el bear están vendiendo silenciosamente a los novatos que compran con FOMO. **Cuando la euforia es máxima, el techo está cerca.**' }
        ]
      },
      {
        type: 'main',
        title: 'La Historia: 4 Halvings, 4 Bull Runs',
        content: 'No te pedimos que creas en predicciones. Te pedimos que mires los datos. Cuatro ciclos, cuatro resultados similares:',
        features: [
          { icon: BarChart3, title: 'Ciclo 1: Halving Nov 2012', text: 'BTC pasó de ~$12 en el halving a **$1,100** en diciembre 2013 (90× en 13 meses). Luego cayó -85% hasta $170 en enero 2015. Primer ciclo completo: de la nada a más de mil dólares, y de vuelta a casi nada para los que no vendieron.' },
          { icon: BarChart3, title: 'Ciclo 2: Halving Jul 2016', text: 'BTC pasó de ~$650 en el halving a **$19,700** en diciembre 2017 (30× en 17 meses). Luego cayó -84% hasta $3,200 en diciembre 2018. La era de las ICOs, la locura de las altcoins, y el crash que "mató" crypto (de nuevo).' },
          { icon: BarChart3, title: 'Ciclo 3: Halving May 2020', text: 'BTC pasó de ~$8,700 en el halving a **$69,000** en noviembre 2021 (8× en 18 meses). DeFi Summer, NFT mania, SOL pasó de $1 a $260. Luego el bear de 2022: Luna crash, FTX crash, BTC cayó -77% hasta $15,500.' },
          { icon: BarChart3, title: 'Ciclo 4: Halving Abr 2024', text: 'BTC en el halving: ~$64,000. Para finales de 2024 ya superó los $100K. El patrón continúa. ETFs de Bitcoin aprobados, adopción institucional masiva. ¿Hasta dónde llegará? La historia sugiere que el pico podría llegar en 2025.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin Dominance y la Altseason',
        content: 'Uno de los indicadores más útiles del ciclo es la **Bitcoin Dominance**—el porcentaje del mercado total de crypto que corresponde a Bitcoin. Cuando BTC Dominance sube, Bitcoin se lleva todo el capital. Cuando baja, las altcoins explotan. Este flujo de rotación es predecible:',
        features: [
          { icon: BarChart3, title: 'Fase 1: BTC Dominance Sube (60%+)', text: 'Al inicio del bull market, el capital entra primero a Bitcoin (el más seguro). BTC Dominance sube a 60-65%. En esta fase, las altcoins rinden menos que BTC. **Estrategia: mantén la mayoría en BTC.**' },
          { icon: Zap, title: 'Fase 2: BTC Dominance Empieza a Caer (55-60%)', text: 'Bitcoin consolidó sus ganancias. El capital empieza a fluir a ETH y large caps (SOL, AVAX). BTC Dominance cae lentamente. **Estrategia: empieza a rotar gradualmente a altcoins de alta capitalización.**' },
          { icon: Activity, title: 'Fase 3: Altseason (BTC Dom <50%)', text: 'Bitcoin se estanca, el capital fluye masivamente a altcoins. Las mid caps y small caps hacen 10-50×. Los memecoins explotan. BTC Dominance cae por debajo del 50%. **Esta fase dura poco—semanas, no meses.** Es donde se hacen (y se pierden) fortunas.' },
          { icon: AlertTriangle, title: 'Fase 4: Capital Vuelve a BTC (Señal de Fin)', text: 'Las altcoins empiezan a caer mientras BTC se mantiene. BTC Dominance vuelve a subir. El capital "vuela a la seguridad". **Si ya estás en altcoins y BTC Dominance empieza a subir fuerte, es hora de rotar de vuelta a BTC o stablecoins.**' }
        ]
      },
      {
        type: 'comparison',
        title: 'Señales de Techo vs Señales de Suelo',
        leftSide: {
          title: 'Señales de Techo (Hora de Vender)',
          points: [
            'Tu tía/taxista/peluquero pregunta cómo comprar crypto',
            'Todos en redes sociales muestran sus ganancias',
            '"Esta vez es diferente" es el mantra popular',
            'Proyectos sin producto ni revenue hacen 100×',
            'Los influencers prometen "el siguiente 1000×"',
            'BTC Dominance cae rápidamente bajo 40%',
            'Exchanges reportan récord de nuevos usuarios'
          ]
        },
        rightSide: {
          title: 'Señales de Suelo (Hora de Comprar)',
          points: [
            'Los medios declaran "crypto ha muerto"',
            'Twitter crypto está desierto o depresivo',
            'Los exchanges despiden 30-50% del personal',
            'Los mineros apagan máquinas por falta de rentabilidad',
            'Los volúmenes de trading están en mínimos de años',
            'Solo los convencidos de largo plazo siguen comprando',
            'Nadie quiere hablar de crypto en reuniones sociales'
          ]
        }
      },
      {
        type: 'main',
        title: 'Cómo Posicionarte en Cada Fase',
        content: 'Saber en qué fase estamos es poder. Pero el poder sin acción es inútil. Aquí tienes la estrategia óptima para cada fase del ciclo:',
        features: [
          { icon: PiggyBank, title: 'Bear Market: ACUMULA', text: 'DCA (Dollar Cost Average) en BTC y SOL. No intentes encontrar el mínimo exacto—compra gradualmente cada semana/mes. Construye posiciones en proyectos con fundamentales fuertes que sobrevivirán al invierno. Mantén 30-40% en stablecoins para aprovechar oportunidades extremas.' },
          { icon: Clock, title: 'Acumulación: POSICIÓNATE', text: 'Aumenta tamaño de posiciones. Los precios están bajos y estables—es el mejor risk/reward del ciclo. Investiga proyectos para el próximo bull. Empieza a construir posiciones en altcoins selectas. Mantén 20% en stablecoins.' },
          { icon: Zap, title: 'Bull Market: CABALGA Y TOMA GANANCIAS', text: 'Deja correr tus posiciones pero EMPIEZA a tomar ganancias parciales en cada subida. Usa scaling out: vende 20-30% en cada nuevo máximo. Rota gradualmente de BTC a altcoins cuando BTC Dom empiece a caer. Nunca inviertas todo—mantén reservas.' },
          { icon: Shield, title: 'Distribución: PROTEGE Y SAL', text: 'Cuando veas señales de euforia extrema, toma ganancias agresivamente. Rota a stablecoins 50-70% del portafolio. No intentes encontrar el techo exacto—es mejor salir un mes antes que un día después. El 90% de las ganancias de altcoins se evaporan en el bear.' }
        ]
      },
      {
        type: 'main',
        title: '¿Se Romperá el Ciclo Algún Día?',
        content: 'La pregunta del millón. Cada ciclo, alguien dice "esta vez será diferente". Hay argumentos válidos para ambos lados:',
        features: [
          { icon: CheckCircle, title: 'A Favor de que el Ciclo Continúa', text: 'El halving es matemático e inmutable—siempre cortará la oferta. La naturaleza humana (euforia y pánico) no cambia. Los ciclos de deuda y liquidez global también son cíclicos. Mientras exista el halving y la naturaleza humana, habrá ciclos.' },
          { icon: AlertTriangle, title: 'A Favor de que Podría Cambiar', text: 'La adopción institucional (ETFs) podría suavizar la volatilidad. Los halvings reducen su impacto cada vez (de 50→25 es -50%, de 3.125→1.5625 es igual -50% pero en números más pequeños). A medida que el mercado madura, los ciclos podrían ser menos extremos—pero probablemente no desaparecerán.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Brújula de Ciclos',
        items: [
          'El halving reduce la emisión de Bitcoin a la mitad cada ~4 años. Esto crea un shock de oferta predecible que históricamente ha generado bull markets 12-18 meses después.',
          'Las 4 fases del ciclo se repiten: Bear Market → Acumulación → Bull Market → Distribución. Las fortunas se construyen comprando en bear y vendiendo en distribución.',
          'Bitcoin Dominance es tu brújula para la rotación: alta (>60%) = mantén BTC. Cayendo (55-60%) = rota a altcoins selectas. Baja (<50%) = altseason pero cuidado con la euforia.',
          'Las señales de techo son sociales: cuando gente sin conocimiento financiero quiere comprar crypto, los informados están vendiendo. Cuando nadie quiere crypto, los informados compran.',
          'Correcciones del 30-40% son NORMALES en bull markets. No confundas una corrección saludable con un cambio de tendencia. El ciclo 2017 tuvo 6 correcciones de +30%.',
          'La estrategia ganadora es simple pero difícil emocionalmente: compra en el aburrimiento/miedo, vende en la euforia/excitación. Haz lo opuesto a lo que sientes.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Estamos en diciembre 2025. El halving fue en abril 2024. Bitcoin ya superó su ATH anterior. ¿En qué fase del ciclo estamos probablemente?',
          options: [
            { id: 'a', text: 'Acumulación—todavía es muy temprano' },
            { id: 'b', text: 'Bull market maduro—20 meses post-halving, en la segunda mitad del ciclo alcista. Históricamente el pico llega 12-18 meses post-halving' },
            { id: 'c', text: 'Bear market—el halving ya pasó hace tiempo' },
            { id: 'd', text: 'No se puede determinar la fase actual' }
          ],
          correctAnswer: 'b',
          explanation: 'Abril 2024 + 18 meses = Octubre 2025. Para diciembre 2025, estamos en fase avanzada del bull market. Los ciclos anteriores hicieron pico 12-18 meses post-halving. No estamos al inicio—estamos más cerca del final que del principio.'
        },
        {
          id: 'q2',
          question: 'Bitcoin Dominance está en 62%. Tu amigo te dice "las altcoins van a explotar, vende todo tu BTC por memecoins". ¿Qué le respondes?',
          options: [
            { id: 'a', text: '¡Tiene razón! Las altcoins siempre hacen más que BTC' },
            { id: 'b', text: 'Con BTC Dom en 62%, el capital todavía fluye a Bitcoin. Altseason históricamente empieza cuando Dom cae bajo ~55%. Paciencia—es temprano para rotar fuerte a alts' },
            { id: 'c', text: 'Las altcoins nunca superan a Bitcoin en ninguna fase' },
            { id: 'd', text: 'BTC Dominance no tiene relación con el rendimiento de altcoins' }
          ],
          correctAnswer: 'b',
          explanation: 'BTC Dominance alta (>60%) = el capital sigue fluyendo a Bitcoin. Históricamente, altseason comienza cuando Dom cae bajo 55% y se acelera bajo 50%. Rotar antes de tiempo significa perder el rally de BTC sin capturar el de altcoins.'
        },
        {
          id: 'q3',
          question: 'Tu tía que nunca habló de inversiones te pregunta cómo comprar Dogecoin porque lo vio en TikTok. ¿Qué señal del ciclo es esta?',
          options: [
            { id: 'a', text: 'Señal alcista—el retail está entrando, la subida va a acelerarse' },
            { id: 'b', text: 'Señal de techo cercano—cuando personas sin conocimiento financiero entran masivamente por FOMO, los informados están vendiendo. Históricamente precede el pico del ciclo' },
            { id: 'c', text: 'No significa nada para el mercado' },
            { id: 'd', text: 'Señal de suelo—tu tía siempre compra en el mejor momento' }
          ],
          correctAnswer: 'b',
          explanation: 'El "indicador del taxista/tía" es un clásico del mercado. Cuando personas sin conocimiento financiero quieren comprar crypto porque lo vieron en TikTok, estamos en fase de euforia máxima. Es cuando el dinero inteligente distribuye sus posiciones al retail.'
        },
        {
          id: 'q4',
          question: 'Bitcoin cae 35% en una semana durante un bull market confirmado (estructura alcista en semanal, post-halving). ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo—el bear market comenzó, corto mis pérdidas' },
            { id: 'b', text: 'Corrección normal dentro de un bull market. Evalúo comprar más si tengo liquidez disponible, porque el contexto macro sigue alcista' },
            { id: 'c', text: 'Espero a que recupere el ATH para comprar más' },
            { id: 'd', text: 'Muevo todo a memecoins porque las altcoins rebotan más fuerte' }
          ],
          correctAnswer: 'b',
          explanation: 'Correcciones del 30-40% son NORMALES en bull markets. El ciclo 2017 tuvo 6 correcciones de +30%, el 2021 también. Si la estructura semanal sigue alcista y estamos post-halving, una corrección es oportunidad, no fin del mundo. Pero usa tu liquidez de reserva, no apalancamiento.'
        },
        {
          id: 'q5',
          question: 'Compraste SOL a $20 en el bear market. Ahora está a $200 (10×) y Bitcoin está en nuevo ATH. ¿Cuál es la estrategia óptima?',
          options: [
            { id: 'a', text: 'HODL forever—nunca vender, SOL va a $1,000' },
            { id: 'b', text: 'Tomar ganancias parciales: sacar al menos la inversión inicial + algo de profit, y dejar el resto correr con stop en break-even' },
            { id: 'c', text: 'Vender el 100% y esperar el bear market' },
            { id: 'd', text: 'Meter más dinero—está subiendo, va a seguir subiendo' }
          ],
          correctAnswer: 'b',
          explanation: 'Nadie quebró tomando ganancias. Sacar tu inversión inicial + profit te deja jugando con "dinero gratis"—cero riesgo de perder capital propio. El resto corre con stop en break-even. Si sube más, perfecto. Si cae, ya protegiste lo tuyo.'
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
    description: 'DYOR (Do Your Own Research) no es un meme—es una habilidad. Aprende a leer la blockchain como los profesionales, usar las herramientas que usan los fondos de inversión, y distinguir proyectos legítimos de estafas usando datos reales.',
    sections: [
      {
        type: 'intro',
        title: 'El Superpoder de las Blockchains Públicas',
        content: 'Imagina que pudieras ver exactamente qué están comprando y vendiendo los fondos de inversión de Wall Street. En los mercados tradicionales, eso es imposible—los grandes jugadores operan en la oscuridad con meses de retraso en reportes. Pero en crypto, **todo queda registrado en la blockchain en tiempo real**. Cada transacción, cada movimiento de capital, cada interacción con un protocolo es pública y verificable. Puedes ver exactamente qué hacen las ballenas, cuánto dinero entra a un protocolo, cuántos usuarios reales tiene, y dónde está la liquidez. Los que dominan el análisis on-chain tienen una ventaja brutal sobre los que solo miran gráficos o siguen influencers en Twitter. Es como jugar póker sabiendo las cartas de todos los demás.',
        highlight: {
          title: 'La Verdad en los Datos',
          text: 'El precio puede mentir (manipulación de mercado). Twitter puede mentir (marketing pagado). Los influencers pueden mentir (promueven lo que les pagan). Pero **la blockchain no miente**. Los datos on-chain son el único lugar donde la verdad del mercado es transparente e inmutable.'
        }
      },
      {
        type: 'main',
        title: 'Arsenal de Herramientas On-Chain',
        content: 'Estas son las herramientas que usan los traders profesionales y fondos de inversión para tomar decisiones basadas en datos reales, no en opiniones de Twitter. Dominar aunque sea 2-3 de estas te pone por encima del 90% de los participantes del mercado:',
        features: [
          { icon: Search, title: 'DefiLlama', text: 'La herramienta número uno para datos DeFi. Muestra TVL (Total Value Locked), fees, revenue, y métricas de cada protocolo en cada blockchain. Gratis y sin necesidad de cuenta. Si un protocolo genera fees crecientes, tiene demanda real de usuarios—no solo hype. Usa los filtros por cadena (Solana, Ethereum) y por categoría (DEXs, Lending, Staking) para encontrar los protocolos con mejores fundamentales.' },
          { icon: Activity, title: 'Dune Analytics', text: 'Plataforma de dashboards con datos on-chain que cualquiera puede crear y compartir. Busca dashboards de proyectos específicos creados por analistas de la comunidad. Por ejemplo: dashboards de Solana DeFi que muestran usuarios activos diarios, volumen real, distribución de holders. La data es tan granular que puedes ver tendencias que ningún gráfico de precios te muestra.' },
          { icon: Users, title: 'Arkham Intelligence', text: 'Rastrea wallets de VCs (venture capital), fondos de inversión, ballenas, y figuras conocidas del ecosistema. Puedes ver exactamente qué están comprando los que manejan millones. Cuando 5 fondos de inversión acumulan el mismo token en silencio, es una señal poderosa. Cuando mueven tokens a exchanges, es señal de que van a vender.' },
          { icon: Clock, title: 'TokenUnlocks.app', text: 'Calendario de desbloqueos de tokens. Los proyectos crypto distribuyen sus tokens gradualmente—cuando un bloque grande se desbloquea (por ejemplo, 15% del supply total), esos tokens entran al mercado y crean presión de venta. Saber cuándo vienen los unlocks grandes te permite anticipar movimientos de precio que la mayoría no ve venir.' }
        ]
      },
      {
        type: 'main',
        title: 'Métricas On-Chain que Importan',
        content: 'Con tantos datos disponibles, es fácil ahogarse en números. El secreto de los buenos analistas on-chain no es mirar todo—es saber qué mirar. Estas son las 4 métricas más importantes que resumen la salud real de un protocolo:',
        features: [
          { icon: Landmark, title: 'TVL (Total Value Locked)', text: 'El dinero total depositado por usuarios en el protocolo. Es la métrica más básica pero más reveladora. TVL subiendo consistentemente = los usuarios confían lo suficiente para depositar capital. TVL cayendo = los usuarios están retirando (pierden confianza o encontraron mejor oportunidad). **Importante**: mide TVL en USD y en la moneda nativa. Si el TVL sube en USD pero baja en tokens depositados, solo está subiendo porque el precio del token subió, no porque haya más usuarios.' },
          { icon: Zap, title: 'Fees / Revenue', text: 'Los fees son dinero REAL que los usuarios pagan por usar el protocolo. Revenue es la parte de esos fees que va al protocolo o a los holders del token. Un protocolo con $10M en fees mensuales tiene demanda real probada—alguien está pagando para usarlo. Compara el ratio Fees/Market Cap entre competidores: un protocolo con menor market cap pero mayores fees está potencialmente infravalorado.' },
          { icon: Users, title: 'Active Wallets (Usuarios Activos)', text: 'El número de wallets únicas interactuando con el protocolo. Más usuarios activos = más actividad orgánica y adopción real. Pero cuidado: esta métrica puede inflarse con bots y Sybil attacks (una persona con muchas wallets). Busca tendencias de crecimiento sostenido, no picos repentinos que huelen a farming.' },
          { icon: TrendingDown, title: 'Exchange Flows (Flujo a Exchanges)', text: 'Cuando grandes cantidades de tokens salen de exchanges hacia wallets privadas (outflow), significa que los holders están acumulando para largo plazo—señal bullish. Cuando grandes cantidades entran a exchanges (inflow), significa que se preparan para vender—señal bearish. Este indicador ha anticipado correctamente muchas correcciones grandes del mercado.' }
        ]
      },
      {
        type: 'main',
        title: 'El Framework DYOR: 5 Pasos para Evaluar Cualquier Proyecto',
        content: 'Cuando encuentres un proyecto nuevo que te llame la atención, sigue estos 5 pasos antes de invertir un solo peso. Este framework te protege del 90% de las estafas y proyectos basura:',
        features: [
          { icon: Search, title: 'Paso 1: ¿Tiene Producto Real?', text: '¿El protocolo funciona hoy o es solo un whitepaper con promesas? Ve a DefiLlama y busca si tiene TVL, fees, y usuarios. Un proyecto con producto funcionando y usuarios pagando es fundamentalmente diferente de uno que solo tiene un token y un roadmap bonito. La mayoría de los proyectos que pierden el 99% de valor nunca tuvieron un producto real.' },
          { icon: BarChart3, title: 'Paso 2: ¿Las Métricas Crecen?', text: '¿El TVL, los fees, y los usuarios activos están en tendencia alcista o bajista? Un proyecto puede tener producto pero estar muriendo lentamente. Busca growth rate mes a mes. Un protocolo con TVL creciendo 20% mensual y fees creciendo 30% mensual está ganando tracción real. Uno con métricas planas o cayendo está perdiendo relevancia.' },
          { icon: Eye, title: 'Paso 3: ¿Quién Está Detrás?', text: 'Usa Arkham para ver qué wallets institucionales interactúan con el protocolo. ¿Los fundadores tienen historial? ¿Los VCs que invirtieron son reputados (a16z, Multicoin, Polychain) o desconocidos? Un equipo anónimo no es necesariamente malo (Bitcoin fue anónimo), pero combinado con tokenomics agresivos y promesas exageradas, es una red flag enorme.' },
          { icon: Clock, title: 'Paso 4: ¿Cómo es el Tokenomics?', text: 'Revisa en TokenUnlocks: ¿qué porcentaje del supply ya está en circulación? ¿Cuándo se desbloquean los tokens de inversores y equipo? Un token con solo 10% del supply circulando y un cliff unlock del 30% en 3 meses es una bomba de tiempo. Idealmente quieres >50% circulando y un schedule de vesting gradual a 2-4 años.' },
          { icon: AlertTriangle, title: 'Paso 5: ¿Dónde Están las Red Flags?', text: 'Busca activamente razones para NO invertir: ¿el TVL está concentrado en pocas wallets? ¿Los fundadores venden tokens regularmente? ¿Los fees se generan por actividad orgánica o por programas de incentivos que pueden terminar? ¿La auditoría del código es de una firma reputada? Si no puedes encontrar problemas, probablemente no estás buscando lo suficiente.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Señales On-Chain: Bullish vs Bearish',
        leftSide: {
          title: 'Bullish (Acumulación)',
          points: [
            'TVL creciendo mientras el precio baja (acumulación silenciosa)',
            'Ballenas comprando post-caída en Arkham',
            'Fees creciendo mes a mes (demanda orgánica real)',
            'Exchange outflows masivos (sacan tokens = HODL)',
            'Usuarios activos en tendencia alcista sostenida',
            'Fundadores/equipo no están vendiendo tokens'
          ]
        },
        rightSide: {
          title: 'Bearish (Distribución)',
          points: [
            'TVL cayendo mientras el precio sube (distribución disfrazada)',
            'Insiders y VCs moviendo tokens a exchanges (preparan venta)',
            'Unlock grande próximo con mucha presión de venta pendiente',
            'Exchange inflows masivos (acumulan para vender)',
            'Usuarios activos cayendo o inflados por bots/incentivos',
            'Equipo/fundadores vendiendo tokens regularmente'
          ]
        }
      },
      {
        type: 'main',
        title: 'Errores Comunes en la Investigación',
        content: 'Incluso con las mejores herramientas, es fácil caer en trampas si no sabes qué buscar. Estos son los errores más comunes que cometen los investigadores principiantes:',
        features: [
          { icon: AlertTriangle, title: 'Confundir TVL Incentivado con Orgánico', text: 'Muchos protocolos inflan su TVL regalando tokens a los que depositan (liquidity mining). El TVL puede ser de $500M pero el 90% está ahí solo por las recompensas. Cuando los incentivos terminan, el TVL desaparece. Busca protocolos donde el TVL se mantiene DESPUÉS de que los incentivos se reducen—eso es demanda orgánica real.' },
          { icon: AlertTriangle, title: 'Ignorar el Contexto del Mercado', text: 'En un bull market, TODAS las métricas se ven bien. TVL sube, usuarios suben, fees suben—porque todo el mercado está en euforia. La verdadera prueba de un protocolo es cómo se comporta en un bear market. ¿Mantiene usuarios cuando el mercado cae 50%? ¿Sigue generando fees? Los protocolos que sobreviven el bear son los que dominan el siguiente bull.' },
          { icon: AlertTriangle, title: 'Confiar Solo en una Métrica', text: 'TVL alto pero sin fees = capital mercenario buscando yield. Fees altos pero TVL bajo = producto útil pero pequeño. Usuarios altos pero fees bajos = bots o actividad no monetizable. Necesitas el CONJUNTO de métricas pintando una imagen coherente. Si solo una métrica se ve bien y las demás no, probablemente hay algo que no estás viendo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Investigación On-Chain',
        items: [
          'La blockchain es pública y transparente. A diferencia de los mercados tradicionales, puedes ver exactamente qué hacen las ballenas, los fondos, y los insiders. Dominar el análisis on-chain te da una ventaja real sobre el 90% del mercado que solo mira gráficos.',
          'Las 4 métricas fundamentales: TVL (capital depositado), Fees/Revenue (demanda real), Active Wallets (usuarios orgánicos), y Exchange Flows (dirección del capital). Si entiendes estas 4, puedes evaluar cualquier protocolo.',
          'El framework DYOR de 5 pasos: (1) ¿Tiene producto real? (2) ¿Las métricas crecen? (3) ¿Quién está detrás? (4) ¿Cómo es el tokenomics? (5) ¿Dónde están las red flags? Seguirlo te protege del 90% de las estafas.',
          'Divergencia entre precio y datos on-chain = oportunidad o peligro. Precio baja + TVL sube = acumulación (bullish). Precio sube + TVL baja = distribución (bearish). Los datos on-chain anticipan lo que el precio mostrará después.',
          'Cuidado con las métricas infladas: TVL incentivado desaparece cuando terminan las recompensas, usuarios activos pueden ser bots, y en bull markets todo se ve bien artificialmente. Busca demanda orgánica que sobreviva al bear market.',
          'Herramientas esenciales: DefiLlama (métricas DeFi), Dune Analytics (dashboards on-chain), Arkham Intelligence (rastreo de wallets), TokenUnlocks (calendario de desbloqueos). Dominar 2-3 de estas te pone por encima de la mayoría.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Encontraste un token nuevo en DefiLlama. Genera $2M en fees mensuales con solo $50M de market cap. ¿Qué significa esto?',
          options: [
            { id: 'a', text: 'Está sobrevalorado porque los fees son demasiado altos' },
            { id: 'b', text: 'Posiblemente infravalorado—genera $24M anuales en ingresos reales con una valoración baja. Compara con competidores para confirmar' },
            { id: 'c', text: 'Los fees no importan para valorar proyectos crypto, solo importa la narrativa' },
            { id: 'd', text: 'Es una estafa porque los fees reales no pueden ser tan altos' }
          ],
          correctAnswer: 'b',
          explanation: 'Un protocolo que genera $24M anuales en fees con $50M de market cap tiene un ratio Price/Fees de ~2×, que es muy atractivo. Para contexto, protocolos similares pueden cotizar a 10-50× sus fees anuales. Siempre compara con competidores directos del mismo sector para validar si realmente está barato.'
        },
        {
          id: 'q2',
          question: 'En Arkham ves que 5 wallets de VCs conocidos movieron sus tokens a Binance ayer. El precio aún no ha caído. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro el dip antes de que suban—los VCs saben lo que hacen' },
            { id: 'b', text: 'Alerta roja: mover tokens a exchanges es el paso previo a vender. Reduzco mi exposición o pongo un stop loss ajustado inmediatamente' },
            { id: 'c', text: 'Es información irrelevante—los VCs mueven tokens por muchas razones' },
            { id: 'd', text: 'Espero a que caiga el precio y compro el dip' }
          ],
          correctAnswer: 'b',
          explanation: 'Mover tokens desde wallets privadas a exchanges es el paso previo a vender—no hay otra razón práctica para hacerlo. Los VCs tienen acceso a información privilegiada y relaciones con los equipos. Cuando múltiples VCs hacen el mismo movimiento simultáneamente, es una señal de alarma clara. Actúa antes de que el precio refleje la venta.'
        },
        {
          id: 'q3',
          question: 'TokenUnlocks muestra que en 2 semanas se desbloquea el 15% del supply total de un token. El precio ha subido 40% este mes. ¿Cómo interpretas esto?',
          options: [
            { id: 'a', text: 'Perfecto timing para comprar más—el momentum es alcista' },
            { id: 'b', text: 'Pump antes del unlock = distribución clásica. Los insiders o market makers están subiendo el precio para dar liquidez de salida. Post-unlock suele corregir fuerte' },
            { id: 'c', text: 'Los unlocks no afectan el precio del token' },
            { id: 'd', text: 'El precio subirá más porque los nuevos tokens crean más demanda' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un patrón clásico y bien documentado: el precio sube antes de un unlock grande para que los insiders (equipo, VCs) puedan vender sus tokens recién desbloqueados a un precio favorable. Los compradores retail entran atraídos por el momentum alcista y terminan siendo la liquidez de salida. Post-unlock, el precio suele corregir significativamente.'
        },
        {
          id: 'q4',
          question: 'Un nuevo DEX en Solana tiene $500M en TVL, pero en Dune ves que solo 200 wallets generan el 95% del volumen de trading. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'Los usuarios están muy comprometidos con el protocolo' },
            { id: 'b', text: 'Wash trading o farming de puntos. No hay usuarios orgánicos reales—las métricas están artificialmente infladas' },
            { id: 'c', text: 'Es normal en DeFi que pocas wallets generen la mayoría del volumen' },
            { id: 'd', text: 'El protocolo es exclusivo para ballenas, lo cual es buena señal' }
          ],
          correctAnswer: 'b',
          explanation: 'Concentración extrema de actividad en pocas wallets es una señal clara de wash trading (volumen falso) o farming de puntos/incentivos por bots. Un protocolo saludable tiene miles de usuarios activos con una distribución más diversa. Cuando los incentivos terminen o se lance el token, esas 200 wallets desaparecen junto con el TVL y el volumen.'
        },
        {
          id: 'q5',
          question: 'El precio de un token cae 30% en una semana, pero en DefiLlama ves que el TVL sube 20% en el mismo período. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'El proyecto está muriendo y los datos de TVL son falsos' },
            { id: 'b', text: 'Divergencia bullish: las ballenas están acumulando mientras el retail vende en pánico. Alguien con convicción está comprando la caída' },
            { id: 'c', text: 'El TVL es irrelevante cuando el precio baja' },
            { id: 'd', text: 'Es una coincidencia sin significado' }
          ],
          correctAnswer: 'b',
          explanation: 'Cuando el precio cae pero el capital depositado en el protocolo sube, significa que alguien con mucho capital y convicción está aprovechando los precios bajos para acumular. Es una señal clásica de acumulación institucional. La divergencia entre precio (bajando) y TVL (subiendo) ha precedido históricamente rallies importantes en muchos protocolos.'
        },
        {
          id: 'q6',
          question: 'Un protocolo tiene $300M en TVL, pero descubres que el 80% de ese TVL llegó en el último mes gracias a un programa de liquidity mining que regala tokens. ¿Cómo evalúas esto?',
          options: [
            { id: 'a', text: 'Excelente—$300M en TVL demuestra que el protocolo es exitoso' },
            { id: 'b', text: 'El TVL real es probablemente $60M (el 20% orgánico). El 80% incentivado desaparecerá cuando terminen las recompensas. Evalúa el protocolo por sus $60M orgánicos' },
            { id: 'c', text: 'Los incentivos son irrelevantes, el TVL es TVL' },
            { id: 'd', text: 'Es bearish porque están regalando tokens' }
          ],
          correctAnswer: 'b',
          explanation: 'El TVL incentivado es "capital mercenario"—está ahí solo por las recompensas y se irá cuando terminen. La métrica real es el TVL orgánico que queda sin incentivos. Un protocolo con $60M de TVL orgánico que crece es más valioso que uno con $300M inflados por incentivos temporales. Históricamente, el 60-90% del TVL incentivado desaparece cuando terminan los programas de rewards.'
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
    description: 'En crypto, la atención mueve el dinero. Las narrativas (IA, DeFi, Memes, Gaming) definen qué sube y qué baja en cada ciclo. Aprende a identificar la narrativa dominante antes que las masas y a rotar tu capital inteligentemente.',
    sections: [
      {
        type: 'intro',
        title: 'La Economía de la Atención',
        content: 'En los mercados tradicionales, el valor se mide en ingresos, clientes y flujo de caja. En crypto, hay una fuerza adicional que mueve billones de dólares: **la atención**. Cuando millones de personas empiezan a hablar de inteligencia artificial y crypto, los tokens de AI suben 500%. Cuando los NFTs son el tema del momento, todo lo relacionado explota. Cuando los memecoins capturan la imaginación de los traders, hacen 100× en días. No es irracional—es cómo funciona un mercado donde el 90% de los participantes son traders de corto plazo buscando la próxima gran oportunidad. La atención colectiva crea flujo de capital. El flujo de capital mueve precios. Los precios atraen más atención. Es un ciclo que se retroalimenta hasta que se agota. Tu trabajo como trader intermedio es **identificar estas narrativas temprano, surfearlas, y salir antes de que la música pare**.',
        highlight: {
          title: 'La Regla de las Narrativas',
          text: 'Si estás leyendo sobre una narrativa en los medios mainstream (CNBC, periódicos), ya llegas tarde. Las narrativas se gestan en Crypto Twitter semanas o meses antes. Cuando llegan al mainstream, los que entraron temprano ya están vendiendo.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es una Narrativa en Crypto?',
        content: 'Una narrativa es un **tema o historia** que captura la imaginación y el capital del mercado. No es solo un sector (como "DeFi" o "Gaming")—es la HISTORIA que el mercado se cuenta a sí mismo sobre por qué algo va a subir:',
        features: [
          { icon: Zap, title: 'Narrativa vs Sector', text: '"DeFi" es un sector. "DeFi va a reemplazar los bancos y democratizar las finanzas" es una narrativa. La narrativa tiene emoción, urgencia, y una visión del futuro. Las personas no compran tokens—compran historias. Y las historias que más dinero mueven son las que prometen un futuro transformador.' },
          { icon: Activity, title: 'El Motor de la Narrativa', text: 'Toda narrativa se alimenta de: (1) un evento catalizador (ChatGPT lanza → tokens AI explotan), (2) adopción temprana por traders influyentes, (3) resultados que validan la historia (tokens suben = "ves, tenía razón"), (4) FOMO masivo que amplifica todo.' },
          { icon: Clock, title: 'Las Narrativas son Temporales', text: 'Ninguna narrativa dura para siempre. Los ICOs dominaron 2017. DeFi Summer fue 2020. Los NFTs explotaron 2021. Memecoins y AI dominaron 2024-2025. Cada narrativa tiene su momento—y después muere o se transforma. Casarte con una narrativa pasada es la receta para perder dinero.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Narrativas que Definieron Cada Ciclo',
        content: 'Mirar hacia atrás revela un patrón claro: cada ciclo tiene sus narrativas dominantes, y los tokens que más suben son los que mejor capturan esa narrativa. Los que compraron ICOs en 2016, DeFi en 2020 o SOL en el bear de 2022 hicieron fortunas:',
        features: [
          { icon: BarChart3, title: '2017: ICOs (Initial Coin Offerings)', text: 'La narrativa: "Cualquiera puede crear un token y levantar millones sin bancos ni reguladores". Ethereum fue la plataforma. Miles de proyectos (99% basura) levantaron millones con un whitepaper. Los que filtraron el 1% bueno hicieron fortunas. Los que compraron el hype perdieron todo.' },
          { icon: BarChart3, title: '2020: DeFi Summer', text: 'La narrativa: "Puedes ser tu propio banco. Préstamos, swaps, yield farming sin intermediarios". Uniswap, Aave, Compound explotaron. Los que entendieron DeFi temprano multiplicaron 50-100×. TVL pasó de $1B a $100B en meses.' },
          { icon: BarChart3, title: '2021: NFTs y Metaverso', text: 'La narrativa: "La propiedad digital es el futuro. Arte, gaming, identidad—todo será NFT". Bored Apes, CryptoPunks, Axie Infinity. Algunos JPEGs se vendieron por millones. Cuando la narrativa se agotó, el 95% de los NFTs perdió el 99% de su valor.' },
          { icon: BarChart3, title: '2024-2025: AI + Memecoins + Solana', text: 'Narrativas múltiples: "La IA va a transformar crypto" (agentes autónomos, AI tokens). "Los memecoins son la nueva forma de expresión cultural" (BONK, WIF, PEPE). "Solana es la cadena ganadora" (velocidad, bajo costo, DeFi). Los que posicionaron temprano en estas narrativas capturaron retornos masivos.' }
        ]
      },
      {
        type: 'main',
        title: 'El Ciclo de Vida de una Narrativa',
        content: 'Toda narrativa sigue las mismas 4 etapas. Reconocer en qué etapa estás determina si ganas o pierdes:',
        features: [
          { icon: Search, title: '1. Nacimiento (Insiders)', text: 'Solo los más conectados hablan de ella. Crypto Twitter (CT) empieza a mencionar un tema nuevo. Los tokens relacionados son micro-caps con baja liquidez. **Si entras aquí, el riesgo es alto pero el reward es 50-100×.** La mayoría no entrará aquí porque "nadie habla de eso".' },
          { icon: TrendingUp, title: '2. Crecimiento (Early Adopters)', text: 'CT adopta la narrativa. Los threads y hilos se multiplican. Los tokens líderes hacen 5-10×. Influencers empiezan a crear contenido. **Esta es la zona de oro: suficiente validación para reducir riesgo, pero todavía temprano para capturar 10-20×.**' },
          { icon: Globe, title: '3. Mainstream (Las Masas)', text: 'Los medios cubren la narrativa. YouTube, TikTok, Instagram. Tu amigo que no sabe de crypto te pregunta. Los tokens líderes ya hicieron 20-50×. **Si entras aquí, capturas las migajas. El riesgo/reward se invierte: poco upside, mucho downside.**' },
          { icon: TrendingDown, title: '4. Agotamiento (El Fin)', text: 'Todos ya saben de la narrativa. No hay nuevos compradores. Los early adopters venden a los latecomers. El precio empieza a caer lentamente y luego se desploma. **Si todavía estás aquí, eres la liquidez de salida.**' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Identificar la Próxima Narrativa Antes que Todos',
        content: 'No necesitas bola de cristal. Necesitas las fuentes correctas y un framework de evaluación:',
        features: [
          { icon: Search, title: 'Fuentes de Información', text: '**Crypto Twitter (X)**: Sigue a 20-30 cuentas de traders/analistas respetados. Cuando 5+ de ellos empiezan a hablar del mismo tema, presta atención. **Dune Analytics**: Busca dashboards de nuevos sectores con métricas crecientes. **DefiLlama**: Filtrar por sectores con TVL creciente que nadie cubre todavía.' },
          { icon: Eye, title: 'Las 3 Preguntas Filtro', text: '(1) ¿Hay un catalizador real? (evento tecnológico, regulatorio, o cultural que impulse la narrativa). (2) ¿Los tokens del sector tienen room to grow? (market caps bajos vs el potencial). (3) ¿La narrativa tiene "legs"? (¿puede durar meses, o es un meme de un día?).' },
          { icon: AlertTriangle, title: 'Red Flags de Narrativas Falsas', text: 'Narrativa creada artificialmente por insiders (grupos de Telegram que coordinan pumps). Sin catalizador real—solo hype en redes. Los tokens suben 1000% en horas sin volumen orgánico. Si suena demasiado bueno y aparece demasiado rápido, probablemente sea una trampa.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Narrativas con Sustancia vs Puro Vapor',
        leftSide: {
          title: 'Narrativas con Sustancia',
          points: [
            'Catalizador real identificable (ChatGPT, ETFs, nuevo protocolo)',
            'Proyectos con producto funcionando y usuarios reales',
            'Métricas on-chain crecientes (TVL, wallets activas, fees)',
            'Adoptada por traders reputados, no solo influencers',
            'Duración: semanas a meses de crecimiento sostenido',
            'Los líderes del sector tienen tokenomics sólidos'
          ]
        },
        rightSide: {
          title: 'Narrativas de Vapor',
          points: [
            'Sin catalizador claro—solo "alguien lo dijo en Twitter"',
            'Solo whitepapers y promesas, sin producto real',
            'Sin métricas on-chain que respalden el hype',
            'Promovida por influencers pagados y grupos de Telegram',
            'Duración: horas a días antes de colapsar',
            'Los tokens asociados no tienen utilidad real'
          ]
        }
      },
      {
        type: 'main',
        title: 'Rotación: El Arte de Mover tu Capital',
        content: 'La rotación es el proceso de mover capital de un sector/narrativa a otro en el momento óptimo. Es lo que separa a los traders que hacen 10× de los que hacen 2× con el mismo capital:',
        features: [
          { icon: RefreshCw, title: 'El Flujo de Rotación', text: 'En cada ciclo, el capital fluye en una secuencia predecible: **Stablecoins → BTC → ETH → Large Cap Alts → Mid Cap Alts → Small Caps → Memecoins → (crash) → Stablecoins**. Si entiendes este flujo, puedes posicionarte UN PASO ADELANTE del capital.' },
          { icon: Target, title: 'Cuándo Rotar', text: 'Rota cuando tu sector actual **pierde momentum** (las subidas son más pequeñas, el volumen cae) y otro sector **gana momentum** (volumen creciente, nuevos máximos). No esperes a que tu sector muera—rota cuando todavía está bien pero otro está mejor.' },
          { icon: AlertTriangle, title: 'El Error de la Sobrerotación', text: 'Rotar demasiado seguido = pagar fees, generar eventos impositivos, y llegar tarde a cada movimiento. La rotación ideal ocurre 2-4 veces por ciclo (no por semana). Cada rotación debe ser una decisión deliberada basada en datos, no en FOMO por el token del día.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Surfeando la Ola de la Atención',
        items: [
          'En crypto, la atención colectiva mueve capital. Las narrativas (IA, DeFi, Memes) definen qué sube en cada fase del ciclo. Ignorarlas es dejar dinero sobre la mesa.',
          'Toda narrativa tiene 4 etapas: Nacimiento → Crecimiento → Mainstream → Agotamiento. La zona de oro es la etapa 2 (Crecimiento), donde hay validación suficiente y todavía hay upside masivo.',
          'Las mejores narrativas tienen catalizador real, proyectos con producto, métricas on-chain crecientes y adopción por traders reputados. Las peores son puro hype sin sustancia.',
          'Crypto Twitter (X) ve las narrativas semanas o meses antes que los medios mainstream. Cuando lees sobre una narrativa en las noticias, ya llegaste tarde.',
          'La rotación de capital sigue un patrón predecible: Stablecoins → BTC → ETH → Large Caps → Mid/Small Caps → Memecoins. Posiciónate un paso adelante del flujo.',
          'No te cases con ninguna narrativa ni token. Los mejores traders son flexibles: surfean la ola actual y rotan cuando pierden momentum. La lealtad en trading es costosa.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'La narrativa de IA + crypto es la más caliente en 2025. Encuentras un token de AI con $5M de market cap y producto funcionando. ¿Cómo evalúas la oportunidad?',
          options: [
            { id: 'a', text: 'Compro todo lo que pueda—dice "AI" en el nombre, va a subir' },
            { id: 'b', text: 'Evalúo con el filtro de 3 preguntas: ¿catalizador real? ¿room to grow (low mcap = sí)? ¿tiene legs? Si producto funciona y mcap es bajo, es una oportunidad con buen risk/reward' },
            { id: 'c', text: 'AI es una moda, ignoro todo lo relacionado' },
            { id: 'd', text: 'Espero a que suba 10× para confirmar antes de entrar' }
          ],
          correctAnswer: 'b',
          explanation: 'Las narrativas calientes producen ganadores reales, pero también mucho vapor. El filtro de 3 preguntas separa oportunidades legítimas de trampas: catalizador real (sí, AI es real), room to grow (market cap bajo = sí), y durabilidad de la narrativa.'
        },
        {
          id: 'q2',
          question: '¿En qué etapa de la narrativa obtienes el mejor risk/reward?',
          options: [
            { id: 'a', text: 'Mainstream—cuando todos hablan de ella, es seguro comprar' },
            { id: 'b', text: 'Crecimiento (etapa 2)—Crypto Twitter ya adoptó la narrativa, hay validación, pero todavía no llegó al mainstream. Suficiente señal para reducir riesgo, pero con 10-20× de upside' },
            { id: 'c', text: 'Nacimiento—siempre hay que ser el primero' },
            { id: 'd', text: 'Agotamiento—los precios están bajos y pueden rebotar' }
          ],
          correctAnswer: 'b',
          explanation: 'El nacimiento tiene máximo upside pero riesgo extremo (puede no funcionar). El mainstream ya capturó la mayoría del movimiento. La etapa 2 (Crecimiento) ofrece el mejor balance: suficiente validación + upside masivo todavía disponible.'
        },
        {
          id: 'q3',
          question: '¿Cuál ha sido una de las narrativas dominantes que se ha mantenido fuerte entre 2024 y 2025?',
          options: [
            { id: 'a', text: 'Metaverso—la gente quiere vivir en mundos virtuales' },
            { id: 'b', text: 'Memecoins + atención retail. Los memes capturan la imaginación y liquidez del retail de forma única, especialmente en Solana' },
            { id: 'c', text: 'ICOs—están volviendo como en 2017' },
            { id: 'd', text: 'Mining—Bitcoin mining es la narrativa más caliente' }
          ],
          correctAnswer: 'b',
          explanation: 'Los memecoins (BONK, WIF, PEPE, y muchos más) capturaron la atención y el capital retail de manera masiva en 2024-2025. Solana se convirtió en la cadena preferida para memecoins por su velocidad y bajo costo. El metaverso y las ICOs quedaron en ciclos pasados.'
        },
        {
          id: 'q4',
          question: 'Tu portafolio está concentrado en tokens DeFi. El sector DeFi dejó de hacer nuevos máximos, el volumen baja, pero los tokens de AI están explotando con volumen creciente. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Me quedo en DeFi—es mi sector, confío en él' },
            { id: 'b', text: 'Empiezo a rotar: vendo parcialmente mis posiciones DeFi que perdieron momentum y construyo posiciones selectas en el sector AI que está ganando momentum' },
            { id: 'c', text: 'Vendo todo inmediatamente y compro 100% AI' },
            { id: 'd', text: 'Compro más DeFi—está "barato" comparado con AI' }
          ],
          correctAnswer: 'b',
          explanation: 'Rotación inteligente: cuando tu sector pierde momentum (subidas menores, volumen cayendo) y otro gana momentum (nuevos máximos, volumen creciente), es momento de rotar. Hazlo gradualmente—no todo de golpe—y solo a proyectos que hayas investigado.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la señal más temprana de que una nueva narrativa está naciendo?',
          options: [
            { id: 'a', text: 'Aparece en CNBC y Bloomberg' },
            { id: 'b', text: 'Tu amigo que no sabe de crypto te pregunta' },
            { id: 'c', text: 'Múltiples traders respetados de Crypto Twitter empiezan a hablar del mismo tema, los tokens del sector tienen micro market caps y métricas on-chain empiezan a crecer' },
            { id: 'd', text: 'Un influencer de YouTube hace un video sobre ella' }
          ],
          correctAnswer: 'c',
          explanation: 'Las narrativas nacen en Crypto Twitter entre traders con track record. Cuando 5+ cuentas respetadas mencionan el mismo tema y las métricas on-chain validan (TVL creciendo, wallets activas subiendo), la narrativa tiene sustancia. Los medios mainstream llegan semanas después.'
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
    description: 'Construye un portafolio que sobreviva a cualquier crash y capture los mejores retornos del ciclo. La Barbell Strategy crypto combina seguridad, oportunismo y liquidez para maximizar tu ventaja.',
    sections: [
      {
        type: 'intro',
        title: 'El Seguro Contra tu Propia Ignorancia',
        content: 'Warren Buffett dijo: "La diversificación es protección contra la ignorancia". En crypto, donde TODO puede pasar—un hack, un colapso regulatorio, un CEO que resulta ser un fraude—esta frase es 10× más relevante. El trader que pone el 100% de su capital en un solo token está jugando a la ruleta rusa con su patrimonio. No importa cuánta investigación hagas—siempre hay cosas que NO puedes saber. Luna era un "blue chip" con $40B de market cap antes de ir a cero en una semana. FTX era el exchange "más seguro" hasta que colapsó. La diversificación no es para personas inseguras—es para personas inteligentes que entienden que **no pueden predecir todo**. La pregunta no es SI habrá una sorpresa negativa, sino CUÁNDO. Y cuando llegue, la diversificación es la diferencia entre una mala semana y la ruina total.',
        highlight: {
          title: 'La Regla Fundamental',
          text: 'Nunca pongas en una sola posición más de lo que puedes perder sin que afecte tu sueño. Si perder esa inversión te quita el sueño, tu posición es demasiado grande.'
        }
      },
      {
        type: 'main',
        title: 'La Barbell Strategy Crypto: El Framework del 60/30/10',
        content: 'La estrategia Barbell, popularizada por Nassim Taleb, combina extrema seguridad con apuestas asimétricas agresivas. En crypto, esto se traduce en tres bloques:',
        features: [
          { icon: Shield, title: '60% — Core (Base Segura)', text: 'BTC, ETH, SOL—los activos que sobreviven a cualquier bear market. Estos no van a hacer 100× pero tampoco van a cero. En el bull hacen 3-8×, en el bear caen pero se recuperan. **Este bloque protege tu capital.** Si todo lo demás falla, tu core te mantiene en el juego.' },
          { icon: Zap, title: '30% — Satélites (Apuestas Asimétricas)', text: 'Tokens de narrativas fuertes, mid caps con potencial de 10-50×. Aquí es donde capturas los retornos extraordinarios. Divídelo en 5-8 posiciones para no depender de una sola. **Si alguna hace 20×, compensa todas las que fallen.**' },
          { icon: PiggyBank, title: '10% — Liquidez (USDC/Stablecoins)', text: 'Cash es una posición. Tener 10-20% en stablecoins te da el poder de comprar cuando el mercado está en pánico. Las mejores oportunidades aparecen cuando todos venden. Sin liquidez, solo puedes ver cómo otros compran barato mientras tú ya estás 100% invertido.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Core: La Base Inquebrantable',
        content: 'El bloque core (60%) debería estar en activos que cumplan UNA condición: que **muy probablemente existan y valgan más en el próximo ciclo**. Esto limita tu universo a un puñado de proyectos:',
        features: [
          { icon: Lock, title: 'Bitcoin (BTC)', text: 'El rey. 15 años de historia. Máxima descentralización. Efecto Lindy (cuanto más tiempo sobrevive, más probable que siga). ETFs institucionales. Es el "oro digital" y la base de cualquier portafolio crypto serio. **25-40% de tu core debería ser BTC.**' },
          { icon: Network, title: 'Ethereum (ETH)', text: 'La plataforma de smart contracts más grande. El ecosistema DeFi y NFT más maduro. EIP-1559 lo hace parcialmente deflacionario. Transición a PoS completada. **10-20% de tu core.**' },
          { icon: Zap, title: 'Solana (SOL)', text: 'La cadena de mayor crecimiento en adopción real: transacciones por segundo, DeFi TVL, volumen de DEX. Ecosistema vibrante (Jupiter, Raydium, Marinade). **10-20% de tu core.** Mayor riesgo que BTC/ETH pero mayor potencial de crecimiento.' }
        ]
      },
      {
        type: 'main',
        title: 'Tus Apuestas Asimétricas: Donde se Hacen las Fortunas',
        content: 'El bloque satélite (30%) es donde buscas retornos extraordinarios. La clave es que no necesitas que TODAS funcionen—**con que una o dos hagan 10-20×, cubren todas las demás que fallen**:',
        features: [
          { icon: Search, title: 'Cómo Seleccionar', text: 'Busca tokens que: (1) estén en la narrativa dominante del momento, (2) tengan producto funcionando con usuarios reales, (3) tengan market cap bajo relativo a su sector, (4) tengan tokenomics sólidos. **No más de 5-8 posiciones** en este bloque.' },
          { icon: Percent, title: 'Sizing: No Todas Iguales', text: 'No pongas el mismo monto en cada apuesta. Tu convicción alta (3-5% del portafolio cada una). Tu convicción media (1-2% cada una). Apuestas especulativas (0.5-1% cada una). Así, tus mejores ideas tienen más capital sin arriesgar la ruina.' },
          { icon: AlertTriangle, title: 'La Regla del Moonbag', text: 'Si una posición satélite hace 5-10×, saca tu inversión original + algo de ganancia y deja el resto como "moonbag" (dinero gratis). Así eliminaste el riesgo y mantienes exposición al upside ilimitado.' }
        ]
      },
      {
        type: 'main',
        title: 'Correlación: El Enemigo Invisible',
        content: 'Aquí está el error que el 80% comete: creen que tener 10 altcoins diferentes es "diversificación". **No lo es.** En crypto, cuando Bitcoin cae, el 95% de las altcoins caen igual o más fuerte. Esto se llama **correlación alta**, y destruye la ilusión de diversificación.',
        features: [
          { icon: AlertTriangle, title: '10 Altcoins ≠ Diversificación', text: 'Si tienes SOL, AVAX, MATIC, ARB, OP, JUP, RNDR, INJ, TIA, y PYTH—tienes 10 tokens que se mueven en la MISMA dirección. Cuando BTC cae 20%, todas caen 30-50%. No estás diversificado—estás concentrado en "altcoins" como clase de activo.' },
          { icon: CheckCircle, title: 'Diversificación Real', text: 'Diversificación real en crypto incluye: BTC (diferente perfil de riesgo que altcoins), stablecoins (no correlacionadas con el mercado), y opcionalmente activos fuera de crypto (acciones, bonos). Dentro de altcoins, diversifica por sector: DeFi + AI + Gaming, no 5 tokens DeFi.' },
          { icon: Shield, title: 'Stablecoins como Hedge', text: 'Tener 10-20% en USDC es la forma más simple de "hedge" en crypto. Cuando todo cae, tus stablecoins mantienen su valor Y te dan poder de compra en el pánico. Es la anti-correlación más efectiva disponible.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Portafolio Diversificado vs Concentrado',
        leftSide: {
          title: 'Portafolio Diversificado (60/30/10)',
          points: [
            'Sobrevive a crashes del -50% sin destruirse',
            'Una posición en cero = pérdida limitada al 3-5%',
            'Liquidez disponible para oportunidades en pánico',
            'Retornos del ciclo: 5-15× total del portafolio',
            'Puedes dormir tranquilo sin revisar el precio',
            'Base psicológica sólida para tomar buenas decisiones'
          ]
        },
        rightSide: {
          title: 'Portafolio Concentrado (Todo en 1-2 tokens)',
          points: [
            'Un crash de -50% borra la mitad de tu capital',
            'Si el proyecto falla (hack, scam), pierdes TODO',
            'Sin liquidez = ves oportunidades que no puedes comprar',
            'Posible 100× pero también posible -99%',
            'Estrés constante revisando el precio cada hora',
            'Decisiones emocionales por el miedo a perderlo todo'
          ]
        }
      },
      {
        type: 'main',
        title: 'Rebalanceo: Cuándo y Cómo Ajustar',
        content: 'Tu portafolio no es estático. A medida que los precios cambian, tu asignación original se distorsiona. Si SOL hace 5× y BTC hace 2×, de repente SOL es un porcentaje mucho mayor de tu portafolio. El **rebalanceo** restaura tu asignación objetivo:',
        features: [
          { icon: RefreshCw, title: 'Rebalanceo por Tiempo', text: 'Cada mes o cada trimestre, revisa tu portafolio. Si algún bloque se desvió más de 10% de tu objetivo (el core pasó de 60% a 45% porque las alts explotaron), vende parcialmente las ganadoras y refuerza las rezagadas.' },
          { icon: Target, title: 'Rebalanceo por Evento', text: 'Rebalancea cuando: (1) una posición hace más de 5× (toma ganancias parciales), (2) el ciclo cambia de fase (de bull a distribución = aumenta stablecoins), (3) una narrativa se agota (rota capital a la nueva narrativa). No rebalancees por ruido diario.' },
          { icon: AlertTriangle, title: 'No Sobrerebalancees', text: 'Cada trade tiene fees e implicaciones fiscales. Rebalancear cada semana es contraproductivo. Hazlo con disciplina pero no con obsesión. Si tu portafolio está dentro del ±10% de tu objetivo, déjalo en paz.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Construyendo un Portafolio Anti-Frágil',
        items: [
          'La Barbell Strategy 60/30/10 combina seguridad (core BTC/ETH/SOL), oportunismo (apuestas asimétricas en narrativas) y liquidez (stablecoins para oportunidades de pánico).',
          'Tu core (60%) protege tu capital. Tus satélites (30%) buscan retornos extraordinarios. Tu liquidez (10%) te da poder cuando todos venden.',
          'Correlación es el enemigo invisible: 10 altcoins diferentes NO son diversificación real. Diversifica por clase de activo (BTC + alts + stables) y por sector dentro de altcoins.',
          'No más de 8-12 posiciones totales. Más = imposible seguir, investigar y gestionar efectivamente. Menos = concentración excesiva.',
          'Tener stablecoins NO es cobardía—es estrategia. Las mejores oportunidades de compra aparecen durante crashes, y solo puedes aprovecharlas si tienes liquidez disponible.',
          'Rebalancea mensual o trimestralmente, o cuando una posición haga 5×+. Toma ganancias parciales de las ganadoras y refuerza tu core. La disciplina de rebalanceo es lo que protege tus ganancias a largo plazo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes $10,000 USD para invertir en crypto. ¿Cuál es la asignación más inteligente según la Barbell Strategy?',
          options: [
            { id: 'a', text: '100% en la memecoin del momento—puede hacer 100×' },
            { id: 'b', text: '60% BTC/ETH/SOL, 30% altcoins de narrativas fuertes, 10% USDC. Base sólida + apuestas asimétricas + liquidez para oportunidades' },
            { id: 'c', text: '50% BTC, 50% USDC—lo más seguro posible' },
            { id: 'd', text: '100% distribuido en 30 altcoins diferentes para "máxima diversificación"' }
          ],
          correctAnswer: 'b',
          explanation: '60/30/10 es el balance óptimo: el core protege tu capital (BTC/ETH/SOL no van a cero), los satélites buscan retornos extraordinarios (10-50× potencial), y la liquidez en USDC te permite comprar cuando todos venden en pánico.'
        },
        {
          id: 'q2',
          question: 'Tienes 10 altcoins diferentes en tu portafolio. Bitcoin cae 20%. ¿Qué pasa probablemente con tus 10 altcoins?',
          options: [
            { id: 'a', text: 'Suben—están diversificadas y no correlacionadas con BTC' },
            { id: 'b', text: 'Se mantienen estables—son proyectos diferentes' },
            { id: 'c', text: 'Caen entre 30-50% cada una, porque las altcoins tienen correlación alta con Bitcoin y caen más fuerte que BTC en correcciones' },
            { id: 'd', text: 'Algunas suben y otras bajan—resultado neutro' }
          ],
          correctAnswer: 'c',
          explanation: 'En crypto, la correlación entre altcoins y Bitcoin es altísima. Cuando BTC cae 20%, las altcoins típicamente caen 30-50%. Tener 10 altcoins diferentes NO es diversificación real—es concentración en "altcoins" como clase de activo.'
        },
        {
          id: 'q3',
          question: '¿Por qué mantener 10-20% de tu portafolio en USDC es una estrategia inteligente y no cobardía?',
          options: [
            { id: 'a', text: 'Porque USDC genera intereses' },
            { id: 'b', text: 'Porque el mercado siempre baja' },
            { id: 'c', text: 'Porque la liquidez en stablecoins te permite comprar cuando el mercado está en pánico (crashes del 30-50%), cuando las mejores oportunidades aparecen y la mayoría no tiene efectivo para aprovecharlas' },
            { id: 'd', text: 'No es inteligente—tener cash en un bull market es perder dinero' }
          ],
          correctAnswer: 'c',
          explanation: 'Cash is a position. Las mejores oportunidades de compra aparecen durante crashes, cuando los precios caen 30-50% en días. Si estás 100% invertido, solo puedes ver esas oportunidades sin poder actuar. La liquidez es optionalidad pura.'
        },
        {
          id: 'q4',
          question: '¿Cuántas posiciones deberías tener como máximo en tu portafolio crypto?',
          options: [
            { id: 'a', text: '50+ para máxima diversificación' },
            { id: 'b', text: '1-2 para máxima concentración y convicción' },
            { id: 'c', text: '8-12 máximo. Suficientes para diversificar, pocas suficientes para investigar y seguir cada una efectivamente' },
            { id: 'd', text: 'No existe un número óptimo' }
          ],
          correctAnswer: 'c',
          explanation: 'Con 50+ posiciones es imposible investigar, seguir noticias y gestionar cada una. Con 1-2 el riesgo de ruina es enorme. 8-12 es el sweet spot: diversificación suficiente para sobrevivir a sorpresas negativas, concentración suficiente para que las ganadoras impacten tu portafolio.'
        },
        {
          id: 'q5',
          question: 'Una de tus posiciones satélite hizo 10×. ¿Cuál es la mejor acción?',
          options: [
            { id: 'a', text: 'HODL—va a seguir subiendo, no vendo nada' },
            { id: 'b', text: 'Vendo el 100%—ya gané suficiente' },
            { id: 'c', text: 'Tomo ganancias parciales: saco mi inversión original + algo de profit, y dejo el resto como moonbag (dinero gratis). Elimino el riesgo y mantengo exposición al upside' },
            { id: 'd', text: 'Meto más dinero—si ya hizo 10×, puede hacer 100×' }
          ],
          correctAnswer: 'c',
          explanation: 'La regla del moonbag: cuando una posición hace 5-10×, saca tu inversión original + ganancias parciales. El resto es "dinero gratis" que puede correr sin presión emocional. Si sube más, perfecto. Si cae a cero, no perdiste capital propio.'
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
    description: 'Sobrevivir es más importante que ganar. El stop loss es tu seguro contra la ruina, tu herramienta para cortar pérdidas rápido y proteger tu capital para pelear otro día.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Seguro de Vida Financiero',
        content: 'En 2022, un trader argentino invirtió $50,000 (los ahorros de toda su vida) en LUNA cuando estaba a $80. "Es un blue chip, no necesito stop loss", dijo. Una semana después, LUNA estaba a $0.0001. Perdió el 99.999% de su capital. Ese dinero ya no existe. ¿Cuánto le habría costado un stop loss? Si hubiera puesto un stop en $60 (-25%), habría perdido $12,500. Doloroso, pero recuperable. Sin stop, perdió TODO. Un **stop loss** no es una pérdida—es el **costo de hacer negocios**. Es tu seguro de vida financiero. Los profesionales pierden operaciones constantemente, pero sobreviven porque sus pérdidas son pequeñas y controladas. Los amateurs ganan muchas operaciones pequeñas y luego pierden todo en UNA sola sin stop.',
        highlight: {
          title: 'La Regla Inquebrantable',
          text: 'Define tu stop loss ANTES de entrar a cualquier posición. Es no-negociable. Si no sabes dónde está tu stop, no deberías estar en esa operación. Mover el stop hacia abajo para "darle más espacio" es la forma más segura de arruinarte.'
        }
      },
      {
        type: 'main',
        title: 'La Matemática de la Ruina: Por Qué las Pérdidas Duelen Más',
        content: 'Existe una asimetría matemática cruel que la mayoría de traders ignoran: **las pérdidas requieren ganancias desproporcionadas para recuperarse.** Esto no es opinión—es matemáticas:',
        features: [
          { icon: Percent, title: '-10% → Necesitas +11% para Recuperar', text: 'Pierdes 10% de $10,000 = te quedan $9,000. Para volver a $10,000 necesitas ganar +11.1%. Todavía manejable.' },
          { icon: Percent, title: '-25% → Necesitas +33%', text: 'Pierdes 25% = te quedan $7,500. Para volver a $10,000 necesitas +33%. Ya es difícil. Un solo trade mal gestionado te pone en desventaja seria.' },
          { icon: Percent, title: '-50% → Necesitas +100%', text: 'Pierdes la mitad de tu capital. Para volver necesitas DUPLICAR tu dinero. ¿Cuántas veces has duplicado tu dinero? Exacto. Una pérdida del 50% puede tardar años en recuperarse.' },
          { icon: AlertTriangle, title: '-90% → Necesitas +900%', text: 'La ruina. Si pierdes el 90%, necesitas hacer un 9× solo para volver a donde empezaste. En la práctica, este capital está muerto. El stop loss existe para que NUNCA llegues aquí.' }
        ]
      },
      {
        type: 'main',
        title: 'Tipos de Stop Loss',
        content: 'No todos los stops son iguales. El tipo de stop que uses depende de tu estrategia, el activo y el contexto del mercado:',
        features: [
          { icon: Shield, title: 'Stop Técnico (Recomendado)', text: 'Colocado basado en la estructura del gráfico: debajo de un soporte clave, debajo del último Higher Low, o debajo de una zona de demanda. **El más profesional.** Tu stop está donde la tesis de tu operación se invalida. Si el soporte se rompe, tu razón para estar largo ya no existe.' },
          { icon: Percent, title: 'Stop Porcentual', text: 'Distancia fija del precio de entrada: -5%, -8%, -10%. Más simple pero menos preciso—no considera la estructura del gráfico. Útil como respaldo si no dominas el análisis técnico. **Nunca uses más de -10% como stop en una posición individual.**' },
          { icon: Activity, title: 'Trailing Stop (Stop Dinámico)', text: 'Se mueve con el precio a tu favor. Si pones un trailing de 10% y el precio sube de $100 a $150, tu stop sube automáticamente a $135. Si el precio cae 10% desde cualquier máximo, se ejecuta. **Excelente para capturar tendencias largas sin salir demasiado temprano.**' },
          { icon: Brain, title: 'Stop Mental (Peligroso)', text: '"Vendo si baja a $X." Sin orden puesta en el exchange. El problema: cuando el precio llega a tu "stop mental", las emociones gritan "va a rebotar" y no vendes. Luego cae más. Y más. **Los stops mentales NO funcionan.** Usa órdenes reales.' }
        ]
      },
      {
        type: 'main',
        title: 'Dónde Colocar tu Stop Loss',
        content: 'El stop perfecto está en el punto donde tu tesis se invalida, pero lo suficientemente lejos para no ser activado por el ruido normal del mercado:',
        features: [
          { icon: Crosshair, title: 'Debajo del Soporte + Filtro', text: 'Si compras en soporte en $150, tu stop NO va en $150 ni en $149. Las ballenas barren stops obvios. Tu stop va en $145-146 (debajo del mínimo de la zona de soporte con un 1-2% de filtro extra). Si el precio llega ahí, el soporte realmente se rompió.' },
          { icon: Crosshair, title: 'Debajo del Último Higher Low', text: 'En un uptrend, tu stop va debajo del HL más reciente. Si la estructura alcista es $120 → $155 → $135 → $175 y estás largo, tu stop está debajo de $135 (el último HL). Si ese HL se rompe, la estructura alcista se invalida.' },
          { icon: AlertTriangle, title: 'NUNCA Debajo de Niveles "Obvios"', text: 'Si hay un soporte claro en $100 y todos los traders de Twitter lo marcan, hay MILES de stops en $99-100. Las ballenas lo saben y barren esa zona antes de rebotar. Tu stop debería estar 2-3% debajo de la zona "obvia".' }
        ]
      },
      {
        type: 'main',
        title: 'Position Sizing: La Fórmula del 1-2%',
        content: 'El stop loss define DÓNDE sales. El position sizing define CUÁNTO compras. Juntos, controlan tu riesgo por operación. La regla profesional: **nunca arriesgues más del 1-2% de tu capital total en una sola operación.**',
        features: [
          { icon: Percent, title: 'La Fórmula', text: '**Tamaño de posición = (Capital × % riesgo) / Distancia al stop**. Ejemplo: Capital $10,000, riesgo 2% = $200 máximo de pérdida. Si tu stop está 10% debajo de tu entrada, tu posición máxima es $200 / 10% = $2,000. Esto limita tu pérdida a $200 (2% de $10K) sin importar qué pase.' },
          { icon: CheckCircle, title: 'Por Qué 1-2% Funciona', text: 'Con riesgo del 1-2% por trade, puedes perder **50 operaciones seguidas** y todavía tener capital suficiente para seguir operando. Las rachas perdedoras de 5-10 trades son NORMALES incluso para traders rentables. El 1-2% garantiza que sobrevivas a la varianza.' },
          { icon: AlertTriangle, title: 'El Error del "All-In"', text: 'Arriesgar 10-20% en un solo trade significa que 5 pérdidas seguidas borran la mitad de tu capital. 10 pérdidas (que pasan más seguido de lo que crees) te dejan con casi nada. Los "all-in" que ves en redes sociales tienen sesgo de superviviente—solo muestran los que ganaron.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Stop Loss Técnico vs Porcentual',
        leftSide: {
          title: 'Stop Técnico (Basado en Estructura)',
          points: [
            'Se coloca donde la tesis se invalida (bajo soporte, bajo HL)',
            'Respeta la estructura natural del gráfico',
            'Cada trade tiene un stop diferente según el contexto',
            'Requiere conocimiento de análisis técnico',
            'Más efectivo para evitar stops barridos',
            'Usado por traders profesionales'
          ]
        },
        rightSide: {
          title: 'Stop Porcentual (Distancia Fija)',
          points: [
            'Se coloca a X% del precio de entrada',
            'Ignora la estructura del gráfico',
            'Todos los trades tienen el mismo stop %',
            'Simple de implementar, no requiere análisis',
            'Puede activarse por ruido normal del mercado',
            'Útil como respaldo o para principiantes'
          ]
        }
      },
      {
        type: 'main',
        title: 'La Psicología del Stop Loss: Tu Mayor Enemigo Eres Tú',
        content: 'Saber DÓNDE poner el stop es la parte fácil. La parte difícil es **dejarlo ejecutarse** sin moverlo. Cuando el precio se acerca a tu stop, tu cerebro empieza a negociar contigo:',
        features: [
          { icon: Brain, title: '"Va a Rebotar, le Doy Más Espacio"', text: 'La voz en tu cabeza que te dice que muevas el stop más abajo. Si cedes, la siguiente vez lo moverás más. Y la siguiente más. Hasta que estés -50% sin stop, paralizado por el miedo. **Mover el stop hacia abajo es la droga más adictiva y destructiva del trading.**' },
          { icon: Brain, title: '"Esta Vez es Diferente"', text: 'Tu análisis dice que el soporte debería aguantar. El precio rompe tu stop. Piensas "pero esto no debería pasar". Sí debería—TÚ estabas equivocado, no el mercado. El mercado SIEMPRE tiene la razón. Tu opinión es irrelevante—lo que importa es el precio.' },
          { icon: CheckCircle, title: 'La Mentalidad Correcta', text: 'Un stop ejecutado NO es un fracaso—es un éxito de gestión de riesgo. Protegiste tu capital. Puedes volver a entrar más tarde si las condiciones mejoran. El dinero que preservaste HOY es el dinero con el que ganarás MAÑANA.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'El Stop Loss Como Estilo de Vida',
        items: [
          'El stop loss no es una pérdida—es el costo de hacer negocios. Sin stop, una sola operación mala puede destruir meses o años de ganancias.',
          'La matemática es cruel: perder 50% requiere ganar 100% para recuperar. El stop loss existe para que tus pérdidas sean del 1-2%, no del 50%.',
          'Define tu stop ANTES de entrar. Colócalo debajo de donde tu tesis se invalida (soporte, último HL). No en niveles "obvios" donde las ballenas barren.',
          'Position sizing: nunca arriesgues más del 1-2% de tu capital por operación. Con esta regla, puedes perder 50 trades seguidos y seguir en el juego.',
          'Los stops mentales NO funcionan. Usa órdenes reales en el exchange. Cuando las emociones gritan "va a rebotar", tu orden ya se ejecutó y tu capital está protegido.',
          'Mover el stop hacia abajo es la droga más destructiva del trading. Si defines un stop, RESPÉTALO. Es mejor perder un 2% 10 veces que perder un 50% una vez.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la regla de oro del stop loss que separa a los profesionales de los amateurs?',
          options: [
            { id: 'a', text: 'Ponerlo cuando ya perdiste 20% y "duele demasiado"' },
            { id: 'b', text: 'Definirlo ANTES de entrar a la operación y nunca moverlo hacia abajo' },
            { id: 'c', text: 'Usar siempre un stop mental para mayor flexibilidad' },
            { id: 'd', text: 'Solo poner stop loss en operaciones grandes' }
          ],
          correctAnswer: 'b',
          explanation: 'El stop se define ANTES de entrar—es parte de tu plan de operación. Moverlo hacia abajo es rendirse a las emociones. Los profesionales pierden trades constantemente pero sus pérdidas están controladas. Los amateurs ganan mucho y luego pierden todo en un trade sin stop.'
        },
        {
          id: 'q2',
          question: 'Tu capital es $10,000. Compras SOL a $180 con stop loss en $162 (10% debajo). Siguiendo la regla del 1-2%, ¿cuánto deberías arriesgar máximo y cuál sería tu posición?',
          options: [
            { id: 'a', text: 'Puedes arriesgar todo—SOL es seguro' },
            { id: 'b', text: 'Máximo $100-200 de riesgo (1-2%). Con stop 10% abajo, tu posición máxima es $1,000-2,000' },
            { id: 'c', text: '$1,000 de riesgo (10%)—así la ganancia vale la pena' },
            { id: 'd', text: 'No hay fórmula—depende de cómo te sientas' }
          ],
          correctAnswer: 'b',
          explanation: 'Capital × 2% riesgo = $200 máximo de pérdida. Si tu stop está 10% debajo, posición = $200 / 0.10 = $2,000 máximo. Si SOL cae a tu stop, pierdes $200 (2% de tu capital). Puedes perder así 50 veces seguidas y todavía tener $5,000 para seguir operando.'
        },
        {
          id: 'q3',
          question: 'El precio toca tu stop loss y rebotas fuerte: SOL cae a $162, activa tu stop, y luego sube a $200. Perdiste la operación. ¿Qué hiciste bien?',
          options: [
            { id: 'a', text: 'Nada—perdí dinero y el precio subió sin mí' },
            { id: 'b', text: 'Protegí mi capital con una pérdida controlada del 2%. Puedo volver a entrar. Si no hubiera tenido stop y SOL hubiera caído a $100, habría perdido 10× más' },
            { id: 'c', text: 'Debería haber movido mi stop más abajo' },
            { id: 'd', text: 'Los stops no sirven porque siempre te sacan antes del rebote' }
          ],
          correctAnswer: 'b',
          explanation: 'Sobrevivir > tener razón. Sí, esta vez el precio rebotó. Pero las próximas 3 veces que toque tu stop, podría seguir cayendo -50%. El stop te protege de esas 3 veces a cambio de "perder" el rebote ocasional. Siempre puedes re-entrar.'
        },
        {
          id: 'q4',
          question: 'Pierdes 50% de tu capital ($10,000 → $5,000). ¿Cuánto necesitas ganar para volver a $10,000?',
          options: [
            { id: 'a', text: '+50%—igual que lo que perdiste' },
            { id: 'b', text: '+100%—necesitas DUPLICAR tu capital restante para volver al punto de partida' },
            { id: 'c', text: '+25%—las pérdidas se recuperan fácilmente' },
            { id: 'd', text: '+75%—un poco más de lo que perdiste' }
          ],
          correctAnswer: 'b',
          explanation: 'La asimetría matemática: -50% requiere +100% para recuperar. -25% requiere +33%. -10% requiere +11%. Por eso los stops son críticos—una pérdida grande requiere ganancias desproporcionalmente mayores. Es mucho más fácil recuperar un -2% (necesitas +2.04%) que un -50%.'
        },
        {
          id: 'q5',
          question: 'El precio se acerca a tu stop loss. Tu mente dice: "va a rebotar, mueve el stop más abajo para darle espacio". ¿Cuál es la respuesta correcta?',
          options: [
            { id: 'a', text: 'Mover el stop es razonable si tienes convicción en la tesis' },
            { id: 'b', text: 'NUNCA mover el stop hacia abajo. Si tu stop se ejecuta, tu tesis estaba equivocada. El mercado tiene la razón, tú no. Mover stops es la droga más destructiva del trading' },
            { id: 'c', text: 'Eliminar el stop completamente—el precio siempre vuelve' },
            { id: 'd', text: 'Depende de cuánto ya perdiste' }
          ],
          correctAnswer: 'b',
          explanation: 'Mover el stop hacia abajo es ceder a las emociones. La primera vez mueves un poco. La segunda, más. La tercera, ya no tienes stop y estás -40%. Es una espiral destructiva. Los profesionales respetan sus stops religiosamente porque saben que una pérdida pequeña es infinitamente mejor que una ruina.'
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
    description: 'Las ganancias en pantalla no son reales hasta que vendes. Aprende a tomar ganancias escalonadamente, a definir targets antes de entrar, y a maximizar tus retornos sin dejar que la codicia destruya lo que construiste.',
    sections: [
      {
        type: 'intro',
        title: 'Las Ganancias en Papel No Pagan el Alquiler',
        content: 'En 2021, un trader colombiano compró SOL a $3. Para noviembre de 2021, su posición valía más de $250—un retorno de 80×. En pantalla era millonario. No vendió ni un solo token. "Va a llegar a $1,000", dijo. Para 2022, SOL cayó a $8. Su ganancia de 80× se convirtió en un modesto 2.6×. Todavía ganó algo, pero perdió el **97% de sus ganancias** por no tomar nada. Esta historia se repite en CADA ciclo con MILES de personas. Ganan fortunas en papel y terminan con migajas porque nunca aprendieron la habilidad más difícil del trading: **vender**. Comprar es fácil—ves algo que sube y quieres entrar. Vender es doloroso—"¿y si sigue subiendo?" "¿y si pierdo el próximo 10×?". Por eso necesitas un PLAN de salida definido ANTES de entrar.',
        highlight: {
          title: 'Cuando Tomas el Screenshot',
          text: 'Cuando te encuentres tomando capturas de pantalla de tus ganancias para presumir en redes sociales, es una señal clara de euforia. Ese es exactamente el momento en que deberías estar vendiendo, no celebrando.'
        }
      },
      {
        type: 'main',
        title: 'Scaling Out: La Estrategia de los Profesionales',
        content: 'La pregunta no es "¿vendo o no vendo?" Es "¿cuánto vendo y a qué precio?" Los profesionales nunca venden todo de golpe. Usan **scaling out** (venta escalonada): van vendiendo porciones de su posición a medida que el precio sube.',
        features: [
          { icon: Target, title: 'El Framework de Scaling', text: 'Un plan clásico: **25% en +2×** (sacas la mitad de tu inversión original), **25% en +3-5×** (aseguras ganancias reales), **25% en +5-10×** (capitalizas la explosión), **25% moonbag** (dejas correr sin límite). Ajusta los porcentajes según tu convicción y el contexto del mercado.' },
          { icon: CheckCircle, title: 'Por Qué Funciona', text: 'Scaling out elimina el problema de timing perfecto. No necesitas adivinar el techo exacto. Capturas ganancias en cada nivel. Si el precio hace 20× y vendiste parcialmente, capturaste una porción enorme. Si cae después de 3×, ya aseguraste ganancia real.' },
          { icon: Shield, title: 'Break-Even Stop', text: 'Después de tu primera venta parcial (que debería cubrir al menos tu inversión original), mueve tu stop loss al precio de entrada (break-even). Ahora estás jugando con "dinero gratis"—cero riesgo de perder capital propio.' }
        ]
      },
      {
        type: 'main',
        title: 'Targets Basados en Análisis Técnico',
        content: 'Tus niveles de take profit no deberían ser arbitrarios. Deberían basarse en la estructura del mercado:',
        features: [
          { icon: BarChart3, title: 'Resistencias como Targets', text: 'Las zonas de resistencia que identificaste en la Lección 14 son targets naturales. Si compraste en soporte en $150 y la próxima resistencia fuerte está en $200, tu primer TP está ahí. La siguiente en $250. Vende donde el mercado es más probable que frene.' },
          { icon: Percent, title: 'Extensiones de Fibonacci', text: 'Las extensiones de Fibonacci (1.618, 2.618, 4.236) son niveles donde el precio tiende a pausar o revertir después de una ruptura. No necesitas dominarlas, pero saber que existen y consultarlas te da niveles de TP más precisos.' },
          { icon: Landmark, title: 'Números Redondos Psicológicos', text: 'BTC a $100K, SOL a $200, ETH a $5K. Los números redondos acumulan órdenes de venta masivas. Si tu posición se acerca a un número redondo importante, es un buen lugar para tomar parciales.' }
        ]
      },
      {
        type: 'main',
        title: 'El Concepto del Moonbag',
        content: 'El **moonbag** es la porción de tu posición (10-25%) que dejas correr indefinidamente después de tomar ganancias en el resto. Es "dinero gratis"—capital que ya recuperaste y más.',
        features: [
          { icon: Zap, title: 'Cómo Funciona', text: 'Compraste 1000 tokens a $1 ($1,000). El precio llega a $5. Vendes 600 tokens a $5 = $3,000 (3× tu inversión original). Te quedan 400 tokens que "no te costaron nada". Si suben a $50, tienes $20,000 extra. Si caen a cero, no perdiste capital.' },
          { icon: Shield, title: 'Sin Presión Emocional', text: 'El moonbag libera tu mente. No te importa si el precio cae porque ya ganaste. No sientes FOMO si sigue subiendo porque todavía tienes exposición. Es la posición perfecta emocionalmente: riesgo cero, upside ilimitado.' },
          { icon: AlertTriangle, title: 'Error Común', text: 'El error es tratar TODO el portafolio como moonbag. "No vendo nada, todo puede hacer 100×." Eso no es moonbag—es codicia. El moonbag es el 10-25% DESPUÉS de tomar ganancias significativas en el otro 75-90%.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Vender Todo de Golpe vs Scaling Out',
        leftSide: {
          title: 'Vender Todo en un Punto',
          points: [
            'Simple: una decisión, una acción',
            'Si vendes en el techo exacto, maximizas ganancia',
            'Pero nadie acierta el techo exacto consistentemente',
            'Si vendes demasiado temprano, pierdes upside masivo',
            'Si vendes demasiado tarde, devolviste ganancias',
            'Alto arrepentimiento sin importar cuándo vendas'
          ]
        },
        rightSide: {
          title: 'Scaling Out (Venta Escalonada)',
          points: [
            'Más complejo: múltiples decisiones y acciones',
            'No maximiza la ganancia teórica perfecta',
            'Pero captura ganancias reales en cada nivel',
            'Si sigue subiendo, todavía tienes exposición (moonbag)',
            'Si cae, ya aseguraste la mayoría de tus ganancias',
            'Minimiza el arrepentimiento—siempre hiciste algo bien'
          ]
        }
      },
      {
        type: 'main',
        title: 'La Trampa del "Podría Subir Más"',
        content: 'La codicia es el enemigo #1 de la toma de ganancias. Cuando tu posición está +300%, tu cerebro no quiere vender porque "podría llegar a +500%". Y si llega a +500%, "podría llegar a +1000%". Es un ciclo infinito que termina cuando el precio se desploma y tus ganancias se evaporan.',
        features: [
          { icon: Brain, title: 'El Sesgo de la Codicia', text: 'Los estudios de psicología financiera muestran que el dolor de "perder" una ganancia potencial (vender y ver que sigue subiendo) se siente 2× más fuerte que el placer de la ganancia realizada. Esto te hace aferrarte a posiciones más tiempo del que deberías.' },
          { icon: AlertTriangle, title: 'Las Señales de que Deberías Vender', text: 'Estás eufórico y tomando screenshots de ganancias. Tu posición hizo 3×+ en pocos días. Estás fantaseando con cuánto "vas a tener" si sigue subiendo. No puedes dormir porque estás mirando el precio. Si sientes alguna de estas cosas, VENDE AL MENOS UNA PARTE.' },
          { icon: CheckCircle, title: 'La Frase que Salva Portafolios', text: '**"Nadie quebró por tomar ganancias."** Puede que te pierdas el próximo 2× después de vender. Pero nunca perderás lo que ya aseguraste. Y ese capital asegurado puede financiar tu próxima gran operación con capital real, no con fantasías.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Plan de Salida: El Template Pre-Trade',
        content: 'Antes de CADA operación, define tu plan de salida por escrito. Aquí tienes el template que deberías completar:',
        features: [
          { icon: Target, title: '1. Entry Price y Razón', text: '¿A qué precio entras y POR QUÉ? "Compro SOL a $160 porque está en soporte semanal con RSI en sobreventa y la estructura sigue alcista."' },
          { icon: Shield, title: '2. Stop Loss y Tamaño', text: '¿Dónde sale si estás equivocado? "Stop en $144 (-10%). Con 2% de riesgo y $10K de capital, mi posición es $2,000."' },
          { icon: Zap, title: '3. Targets de Take Profit', text: '"TP1: vendo 25% en $200 (resistencia). TP2: vendo 25% en $250 (número redondo). TP3: vendo 25% en $300 (extensión Fib). Moonbag: 25% corre con trailing stop de 20%."' },
          { icon: Lock, title: '4. La Regla de Hierro', text: '**NO cambiar el plan después de entrar.** El plan se define con la mente fría, ANTES de que las emociones entren en juego. Si cambias targets durante la operación, las emociones ganaron.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Vendiendo con Estrategia, No con Emoción',
        items: [
          'Las ganancias en pantalla NO son reales hasta que vendes. El 90% de las personas que "fueron millonarias en crypto" terminaron con una fracción porque nunca vendieron.',
          'Scaling out (venta escalonada) es superior a vender todo de golpe. Capturas ganancias en cada nivel, mantienes exposición con el moonbag, y minimizas el arrepentimiento.',
          'Después de tu primera venta parcial, mueve tu stop a break-even. Ahora juegas con dinero gratis—cero riesgo de perder capital propio.',
          'El moonbag (10-25% que dejas correr) es la posición perfecta: riesgo cero, upside ilimitado. Pero solo funciona DESPUÉS de tomar ganancias significativas en el otro 75-90%.',
          'Define tu plan de salida ANTES de entrar: entry, stop loss, targets de TP escalonados. No lo cambies durante la operación—las emociones no son consejeras de confianza.',
          'Cuando te encuentres tomando screenshots de ganancias, fantaseando sobre precios futuros, o sin poder dormir—VENDE al menos una parte. La euforia es la señal de salida más fiable.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu posición está +300% en 3 días. Tu cerebro dice "HODL hasta la luna". ¿Cuál es la jugada profesional?',
          options: [
            { id: 'a', text: 'HODL todo—si hizo 300% puede hacer 1000%' },
            { id: 'b', text: 'Vendo 50-70%, muevo stop a break-even en el resto. Aseguro ganancias reales y dejo correr el moonbag sin riesgo' },
            { id: 'c', text: 'Vendo 100%—300% es suficiente' },
            { id: 'd', text: 'Compro más—está subiendo fuerte' }
          ],
          correctAnswer: 'b',
          explanation: 'Tomas ganancias reales (dinero en tu bolsillo) y dejas el resto correr con stop en break-even. Si sube más, perfecto—todavía capturas upside. Si cae, ya aseguraste la mayoría de las ganancias. Best of both worlds.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la estrategia de salida más usada por traders consistentemente rentables?',
          options: [
            { id: 'a', text: 'Vender todo cuando el precio llega a un target fijo' },
            { id: 'b', text: 'Scaling out: 25% en +2×, 25% en +3-5×, 25% en +5-10×, 25% moonbag. Asegura ganancias escalonadas mientras mantiene upside' },
            { id: 'c', text: 'Nunca vender—HODL es siempre la mejor estrategia' },
            { id: 'd', text: 'Vender cuando un influencer dice que vendas' }
          ],
          correctAnswer: 'b',
          explanation: 'Scaling out elimina la necesidad de adivinar el techo exacto. Capturas ganancias reales en cada nivel y mantienes exposición con el moonbag. No maximiza el resultado teórico perfecto, pero maximiza las ganancias REALES consistentemente.'
        },
        {
          id: 'q3',
          question: 'Compraste 1000 tokens a $1 ($1,000 total). El precio llega a $5. Vendes 600 tokens a $5 ($3,000). ¿Cuál es tu situación actual?',
          options: [
            { id: 'a', text: 'Perdiste porque vendiste demasiado temprano' },
            { id: 'b', text: 'Recuperaste 3× tu inversión ($3K vs $1K invertido), tienes 400 tokens gratis como moonbag. Si suben a $50, ganas $20K extra. Si van a cero, no perdiste capital' },
            { id: 'c', text: 'Ganaste pero deberías haber vendido todo' },
            { id: 'd', text: 'Estás en pérdida porque todavía tienes tokens' }
          ],
          correctAnswer: 'b',
          explanation: 'Situación perfecta: $3,000 reales en tu cuenta (3× tu inversión) + 400 tokens que "no te costaron nada". Esos 400 tokens son tu moonbag. Sin presión emocional. Riesgo cero. Upside ilimitado. Esta es la posición que buscan los profesionales.'
        },
        {
          id: 'q4',
          question: '¿Por qué es peligroso mover tu take profit hacia arriba después de entrar a una operación?',
          options: [
            { id: 'a', text: 'No es peligroso—siempre hay que ajustar' },
            { id: 'b', text: 'Porque las emociones (codicia) están controlando tu decisión, no la lógica. Tu plan original se definió con la mente fría. Cambiarlo durante la operación reduce tu discipline y tu ratio riesgo/beneficio' },
            { id: 'c', text: 'Porque los targets siempre se cumplen' },
            { id: 'd', text: 'Porque sube los fees de trading' }
          ],
          correctAnswer: 'b',
          explanation: 'Tu plan de salida se define ANTES de entrar, con la mente fría y objetiva. Cuando estás en una posición ganadora, la codicia dice "¿y si llega a 10×?". Mover targets mid-trade = dejar que las emociones tomen el volante. Las emociones son malas consejeras.'
        },
        {
          id: 'q5',
          question: 'Estás tomando screenshots de tus ganancias, no puedes dormir por la emoción, y fantaseas con cuánto "vas a tener". ¿Qué indica esto?',
          options: [
            { id: 'a', text: 'Estás en una gran operación—disfruta el momento' },
            { id: 'b', text: 'Señales claras de euforia. Es exactamente el momento en que deberías ejecutar tu plan de toma de ganancias y vender al menos una porción significativa' },
            { id: 'c', text: 'Deberías comprar más—la emoción confirma que va bien' },
            { id: 'd', text: 'Es normal y no requiere acción' }
          ],
          correctAnswer: 'b',
          explanation: 'La euforia es la señal de salida más fiable. Cuando no puedes dormir, tomas screenshots, y fantaseas = tu cerebro está en modo FOMO máximo. Históricamente, estos son los momentos que preceden correcciones. Ejecuta tu plan de take profit—nadie quebró por tomar ganancias.'
        }
      ]
    }
  },
  24: {
    id: 24,
    title: 'Mentalidad de Trader',
    level: 'Intermedio',
    number: '12 de 12',
    duration: '28 min',
    type: 'Psicología',
    description: 'El 90% del éxito en trading no es técnica—es psicología. Aprende a controlar el FOMO, la avaricia, el miedo y la venganza para proteger tu capital y tomar mejores decisiones.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Mayor Enemigo Eres Tú',
        content: '¿Sabías que la mayoría de los traders que pierden dinero **tienen estrategias que funcionan**? El problema no es su sistema—es que no pueden seguirlo. Mueven el stop loss cuando no deberían. Entran por FOMO cuando su plan dice "espera". Cierran una posición ganadora demasiado pronto por miedo a perder las ganancias. Después de una pérdida, doblan el tamaño buscando recuperar rápido. Estos no son errores técnicos. Son errores **emocionales**. Y son exactamente los mismos errores que cometen el 90% de los participantes del mercado. En esta lección vas a aprender a identificar los sesgos psicológicos que te sabotean, a construir un sistema que te proteja de ti mismo, y a desarrollar la disciplina que separa a los traders consistentes de los que pierden todo.',
        highlight: {
          title: 'El Dato que Nadie Quiere Escuchar',
          text: 'Según estudios de brokers regulados, entre el **70% y el 90% de los traders retail pierden dinero**. No porque el mercado sea impredecible—sino porque las emociones humanas están diseñadas para tomar las peores decisiones posibles en los mercados financieros.'
        }
      },
      {
        type: 'main',
        title: 'Los 4 Demonios del Trading',
        content: 'Hay cuatro emociones que destruyen portafolios. No son debilidades tuyas—son instintos evolutivos que servían para sobrevivir en la sabana pero que te sabotean en los mercados. El primer paso para vencerlos es reconocerlos:',
        features: [
          { icon: Eye, title: 'FOMO (Fear Of Missing Out)', text: 'El pánico de quedarte fuera de una subida. Ves un token subiendo 50% y sientes una urgencia física de comprar. Tu cerebro grita: "¡Si no compras ahora, te pierdes la oportunidad de tu vida!". Es la misma respuesta que tenían tus ancestros cuando veían a otros corriendo—tu instinto asume que algo peligroso o valioso pasa y debes actuar YA. En trading, el FOMO te hace comprar en máximos, sin plan, sin stop loss, en el peor momento posible.' },
          { icon: Gem, title: 'Avaricia (Greed)', text: 'Tu posición sube 100% pero no vendes porque "puede subir más". Sigues esperando. Sube 150%. No vendes. "¿Y si llega a 200%?". Empieza a caer. "Es solo una corrección, va a rebotar". Cae a +50%. No vendes porque ya viste +150% y no quieres "perder". Cae a 0% de ganancia. La avaricia convierte trades ganadores en perdedores. El mercado no te debe nada—las ganancias no realizadas son solo números en pantalla.' },
          { icon: Shield, title: 'Miedo (Fear)', text: 'Tu posición cae -10% y entras en pánico. Tu cerebro interpreta la pérdida como una amenaza existencial—la misma respuesta que si vieras un depredador. Vendes en el peor momento. El precio rebota al día siguiente. O peor: tienes tanto miedo de perder que nunca entras, y ves desde afuera cómo el trade que analizaste correctamente sube 500%. El miedo paraliza y te hace tomar decisiones reactivas en lugar de estratégicas.' },
          { icon: Zap, title: 'Revenge Trading (Venganza)', text: 'Acabas de perder -20% en un trade. Estás enojado. Tu ego herido quiere "recuperar lo perdido" inmediatamente. Abres un trade el doble de grande, sin análisis, con más riesgo. Pierdes otro -25%. Ahora estás -45% y en espiral. El revenge trading es la forma más rápida de destruir una cuenta. Nace de la incapacidad de aceptar una pérdida y seguir adelante.' }
        ]
      },
      {
        type: 'main',
        title: 'Sesgos Cognitivos que Te Engañan',
        content: 'Más allá de las emociones puras, tu cerebro tiene "atajos mentales" que distorsionan tu percepción de la realidad. Estos sesgos cognitivos son invisibles—crees que estás pensando racionalmente cuando en realidad tu cerebro te está engañando:',
        features: [
          { icon: Brain, title: 'Sesgo de Confirmación', text: 'Buscas información que confirme lo que ya crees e ignoras la que lo contradice. Si estás bullish en SOL, solo lees threads positivos y descartas cualquier argumento bajista como "FUD". Esto te impide ver señales de peligro evidentes. **Antídoto**: Antes de entrar a un trade, dedica 10 minutos a buscar activamente la tesis contraria. Si no puedes encontrar argumentos en contra, no entiendes suficiente el activo.' },
          { icon: Anchor, title: 'Sesgo de Anclaje', text: '"Compré SOL a $250, no voy a vender a $150". Tu precio de compra es irrelevante para el mercado—pero tu cerebro lo usa como ancla. Te aferras a posiciones perdedoras esperando "recuperar tu precio". El mercado no sabe ni le importa a cuánto compraste. **Antídoto**: Pregúntate: "Si no tuviera esta posición, ¿la abriría hoy a este precio?". Si la respuesta es no, vende.' },
          { icon: Users, title: 'Sesgo de Manada', text: '"Todos están comprando X, no puede estar mal". La presión social te lleva a seguir a la multitud. Pero en trading, cuando "todos" están de un lado, es señal de peligro: ¿quién queda para comprar? Los movimientos más rentables ocurren cuando vas contra el consenso—y eso se siente terrible emocionalmente. **Antídoto**: Cuando sientas una convicción abrumadora compartida por todos, pregúntate quién está en el otro lado del trade.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Trader Emocional vs Trader Disciplinado',
        leftSide: {
          title: 'Trader Emocional',
          points: [
            'Compra por FOMO sin plan de entrada ni salida',
            'Mueve el stop loss "un poquito más" para no ser sacado',
            'Dobla la posición después de perder para "recuperar"',
            'No tiene reglas escritas—opera según "intuición"',
            'Mira gráficos 12 horas al día, estresado y agotado',
            'Gana a veces mucho, pero pierde todo al final del ciclo'
          ]
        },
        rightSide: {
          title: 'Trader Disciplinado',
          points: [
            'Solo entra cuando su checklist de entrada se cumple al 100%',
            'El stop loss es sagrado—se ejecuta sin dudar ni mover',
            'Acepta pérdidas como costo del negocio y pasa al siguiente trade',
            'Tiene un plan escrito con reglas claras para cada situación',
            'Revisa gráficos en horarios definidos, el resto del tiempo vive su vida',
            'Gana consistentemente porque sobrevive para capturar los grandes movimientos'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Plan de Trading: Tu Escudo Anti-Emociones',
        content: 'Un plan de trading no es una sugerencia—es un **contrato contigo mismo**. Lo escribes cuando estás calmado y racional, y lo sigues cuando estás emocional y tentado. Sin un plan escrito, cada decisión se toma en caliente, y las decisiones en caliente en trading siempre pierden dinero a largo plazo.',
        features: [
          { icon: Target, title: 'Qué Debe Incluir tu Plan', text: '(1) **Criterios de entrada**: ¿Qué señales necesitas para abrir un trade? (patrón técnico, señal on-chain, narrativa). (2) **Tamaño de posición**: ¿Qué % de tu portafolio arriesgas? (nunca más de 2-5% por trade). (3) **Stop loss**: ¿A qué precio sales si te equivocas? (definido ANTES de entrar). (4) **Take profit**: ¿A qué niveles tomas ganancias? (parciales: 1/3, 1/3, 1/3). (5) **Reglas de estado mental**: "No opero si estoy enojado, cansado o ebrio".' },
          { icon: BookOpen, title: 'El Diario de Trading', text: 'Después de cada trade, anota: qué compraste, por qué, a qué precio, stop loss, take profit, y cómo te sentías emocionalmente. Después de 50-100 trades, revisa tu diario. Vas a descubrir patrones: "siempre pierdo los viernes por la noche", "mis mejores trades son cuando estoy calmado", "el revenge trading me costó un 30% del portafolio". El diario convierte errores emocionales en datos accionables.' }
        ]
      },
      {
        type: 'main',
        title: 'Técnicas Prácticas de Control Emocional',
        content: 'La disciplina no es un rasgo de personalidad—es un sistema. Estas técnicas probadas por traders profesionales te ayudan a mantener el control cuando las emociones gritan:',
        features: [
          { icon: Clock, title: 'La Regla de las 24 Horas', text: 'Nunca actúes por impulso. Cuando sientas FOMO o urgencia, espera 24 horas. Si después de 24 horas el trade todavía tiene sentido según tu plan, ejecútalo. La mayoría de los impulsos desaparecen. Esta simple regla te salva de los peores errores.' },
          { icon: Lock, title: 'El Presupuesto de Riesgo Diario', text: 'Define un máximo de pérdida diaria (ejemplo: -3% del portafolio). Si llegas a ese límite, cierras todo y no operas más ese día. Sin excepciones. Los casinos ponen límites a los jugadores—tú debes ponerte límites a ti mismo.' },
          { icon: RefreshCw, title: 'La Desconexión Programada', text: 'Después de un trade grande (ganes o pierdas), aléjate de las pantallas mínimo 1-2 horas. Sal a caminar, haz ejercicio, llama a alguien. Los peores trades de tu vida se harán inmediatamente después de un trade emocional. Rompe el ciclo con distancia física.' },
          { icon: CheckCircle, title: 'El Checklist Pre-Trade', text: 'Antes de cada trade, responde estas preguntas en voz alta o escríbelas: "¿Esto está en mi plan?", "¿Cuánto pierdo si me equivoco?", "¿Estoy entrando por análisis o por emoción?", "¿Puedo dormir tranquilo con esta posición?". Si alguna respuesta te incomoda, no entres.' }
        ]
      },
      {
        type: 'main',
        title: 'La Varianza: Tu Amiga Incomprendida',
        content: 'Este es quizás el concepto más importante y menos entendido del trading. Un trader con un **60% de win rate** (gana 6 de cada 10 trades) va a tener rachas de 5, 7, incluso 10 pérdidas seguidas. Esto no significa que su estrategia esté rota—es **matemáticamente inevitable**. Se llama varianza, y entenderla cambia todo.',
        features: [
          { icon: BarChart3, title: 'Los Números No Mienten', text: 'Con un 60% de win rate (que es excelente), la probabilidad de 5 pérdidas seguidas en 100 trades es del ~8%. Es decir, te va a pasar. Con 200 trades, es casi seguro que experimentarás una racha de 7-8 pérdidas consecutivas. Si cambias tu estrategia cada vez que pierdes 3 seguidos, nunca sabrás si funciona. Necesitas mínimo 100-200 trades para evaluar un sistema.' },
          { icon: PiggyBank, title: 'Gestión de Capital + Varianza', text: 'Si arriesgas el 2% por trade, 5 pérdidas seguidas = -10%. Recuperable. Si arriesgas el 10% por trade, 5 pérdidas seguidas = -50%. Casi imposible de recuperar (necesitas +100% solo para volver a 0). La gestión de riesgo no es opcional—es lo que te permite sobrevivir la varianza inevitable.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Armadura Psicológica',
        items: [
          'El 90% de las pérdidas en trading vienen de errores emocionales, no técnicos. FOMO, avaricia, miedo y revenge trading son los 4 demonios que debes controlar para ser rentable.',
          'Los sesgos cognitivos (confirmación, anclaje, manada) distorsionan tu percepción sin que te des cuenta. El antídoto es buscar activamente la tesis contraria antes de cada trade.',
          'Un plan de trading escrito es tu escudo anti-emociones. Lo creas en frío (racional) y lo sigues en caliente (emocional). Sin plan escrito, cada decisión es una apuesta.',
          'Técnicas prácticas: regla de 24 horas contra el FOMO, presupuesto de riesgo diario (-3% máximo), desconexión programada después de trades emocionales, y checklist pre-trade para validar cada entrada.',
          'La varianza es matemáticamente inevitable: con 60% win rate, tendrás rachas de 5-8 pérdidas seguidas. Por eso necesitas gestión de riesgo (2-5% por trade) y mínimo 100-200 trades para evaluar cualquier estrategia.',
          'El diario de trading es tu herramienta más poderosa. Convierte errores emocionales repetitivos en datos que puedes analizar y corregir. Después de 50-100 trades, los patrones son evidentes.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Llevas 5 trades seguidos perdedores respetando tu plan al pie de la letra. Tu stop loss se ejecutó correctamente en todos. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Aumento el tamaño del próximo trade para recuperar las pérdidas más rápido' },
            { id: 'b', text: 'Sigo exactamente igual—con 60% win rate, una racha de 5 pérdidas es estadísticamente normal' },
            { id: 'c', text: 'Cambio completamente de estrategia porque claramente no funciona' },
            { id: 'd', text: 'Dejo de operar por un mes porque "el mercado está en mi contra"' }
          ],
          correctAnswer: 'b',
          explanation: 'Con un 60% de win rate, 5 pérdidas seguidas tiene ~8% de probabilidad en cada set de 100 trades. Es varianza normal, no una estrategia rota. Cambiar de estrategia o aumentar el tamaño por frustración es revenge trading disfrazado. La disciplina se demuestra exactamente en estos momentos.'
        },
        {
          id: 'q2',
          question: 'Ves que un token acaba de subir 80% en las últimas 4 horas. Crypto Twitter está lleno de mensajes de "🚀🚀🚀 to the moon". Sientes una urgencia intensa de comprar. ¿Cuál es la mejor respuesta?',
          options: [
            { id: 'a', text: 'Compro inmediatamente antes de que suba más—no quiero perderme esta oportunidad' },
            { id: 'b', text: 'Aplico la regla de las 24 horas: espero, analizo si cumple mis criterios de entrada, y si mañana todavía tiene sentido según mi plan, considero entrar' },
            { id: 'c', text: 'No miro precios nunca para evitar el FOMO' },
            { id: 'd', text: 'Compro la mitad ahora y la otra mitad mañana como "compromiso"' }
          ],
          correctAnswer: 'b',
          explanation: 'El FOMO te empuja a comprar en el peor momento (después de una subida masiva, cuando el riesgo es máximo). La regla de las 24 horas te protege: la mayoría de los impulsos desaparecen. Si después de 24 horas el trade cumple tus criterios escritos, es una entrada racional, no emocional.'
        },
        {
          id: 'q3',
          question: 'Compraste SOL a $250. Ahora está a $160. Tu análisis original era correcto, pero cambió la tesis macro. Un amigo dice: "aguanta, va a volver a $250". ¿Qué sesgo cognitivo está influyendo aquí?',
          options: [
            { id: 'a', text: 'Sesgo de manada—todos dicen que va a subir' },
            { id: 'b', text: 'FOMO—tienes miedo de perderte la recuperación' },
            { id: 'c', text: 'Sesgo de anclaje—tu precio de compra ($250) es irrelevante para el mercado, pero tu cerebro lo usa como referencia para decidir' },
            { id: 'd', text: 'Sesgo de confirmación—solo escuchas opiniones alcistas' }
          ],
          correctAnswer: 'c',
          explanation: 'El sesgo de anclaje hace que tu cerebro use tu precio de compra como referencia, aunque el mercado no sabe ni le importa cuánto pagaste. La pregunta correcta es: "Si no tuviera esta posición, ¿la abriría hoy a $160 con la tesis actual?". Si la respuesta es no, vende—independientemente de tu precio de entrada.'
        },
        {
          id: 'q4',
          question: 'Acabas de cerrar un trade con -15% de pérdida. Estás frustrado y ves otra "oportunidad" para recuperar lo perdido. ¿Qué deberías hacer?',
          options: [
            { id: 'a', text: 'Entrar con el doble de tamaño para recuperar más rápido' },
            { id: 'b', text: 'Entrar solo si cumple todos los criterios de mi plan escrito' },
            { id: 'c', text: 'Alejarme de las pantallas mínimo 1-2 horas, romper el ciclo emocional, y solo volver a evaluar trades cuando esté calmado' },
            { id: 'd', text: 'Llamar a un amigo trader para que me diga qué hacer' }
          ],
          correctAnswer: 'c',
          explanation: 'Después de una pérdida significativa, tu estado emocional está comprometido. El revenge trading (buscar recuperar inmediatamente) es la forma más rápida de destruir una cuenta. La desconexión programada (1-2 horas lejos de pantallas) rompe el ciclo emocional. Ningún trade que tomes enojado o frustrado será bueno.'
        },
        {
          id: 'q5',
          question: '¿Cuántos trades necesitas para evaluar con confianza si tu estrategia de trading funciona?',
          options: [
            { id: 'a', text: '10-20 trades son suficientes para saber si funciona' },
            { id: 'b', text: 'Con 1 trade ganador ya sé que funciona' },
            { id: 'c', text: 'Mínimo 100-200 trades—menos que eso es pura varianza (buena o mala suerte)' },
            { id: 'd', text: '50 trades como máximo, después descarto y cambio' }
          ],
          correctAnswer: 'c',
          explanation: 'Con 10-20 trades, cualquier resultado es indistinguible de la suerte. La estadística necesita muestras suficientes para ser significativa. Con 100-200 trades ejecutados con disciplina, puedes evaluar win rate, expectativa, y drawdown real de tu sistema. Cambiar de estrategia cada 10 trades garantiza que nunca encontrarás una que funcione.'
        },
        {
          id: 'q6',
          question: '¿Cuál es la herramienta más poderosa para mejorar tu psicología de trading a largo plazo?',
          options: [
            { id: 'a', text: 'Seguir a traders famosos en Twitter y copiar sus trades' },
            { id: 'b', text: 'Un diario de trading donde registras cada trade, tu análisis, y tu estado emocional—después de 50-100 entradas, los patrones de error se vuelven evidentes' },
            { id: 'c', text: 'Usar bots automáticos para eliminar emociones completamente' },
            { id: 'd', text: 'Meditar 2 horas antes de cada trade' }
          ],
          correctAnswer: 'b',
          explanation: 'El diario de trading convierte errores repetitivos en datos analizables. Después de 50-100 trades documentados, descubrirás patrones como "siempre pierdo cuando opero de noche" o "mis mejores trades son cuando sigo mi plan sin modificar". Esos insights valen más que cualquier indicador técnico.'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Jupiter: El Rey de los DEXs',
    level: 'Avanzado',
    number: '1 de 11',
    duration: '35 min',
    type: 'Tutorial Práctico',
    description: 'Olvida los exchanges centralizados. Jupiter es el agregador de liquidez más poderoso de Solana: mejor precio, DCA automático, órdenes límite, y perpetuos—todo descentralizado, sin custodia, y con la mejor ejecución del mercado.',
    sections: [
      {
        type: 'intro',
        title: 'Por Qué Jupiter Cambió las Reglas del Juego',
        content: 'Imagina que quieres cambiar 1,000 USDC por SOL. En Binance, usas el orderbook de Binance y obtienes SU precio. En Jupiter, el protocolo busca **simultáneamente** en Raydium, Orca, Phoenix, Meteora, y docenas de otros pools de liquidez para encontrarte el mejor precio posible. Si dividir tu orden entre 3 pools diferentes te da un mejor precio, Jupiter lo hace automáticamente en una sola transacción. Esto se llama **agregación de liquidez**, y es la razón por la que Jupiter frecuentemente da mejor ejecución que exchanges centralizados para swaps de tamaño mediano. Pero Jupiter va mucho más allá de swaps simples. Es una plataforma completa de trading descentralizado con DCA automático, órdenes límite, perpetuos con apalancamiento, y un launchpad para nuevos tokens. Todo sin entregar la custodia de tus fondos a nadie.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'Jupiter procesa más volumen de trading que muchos exchanges centralizados combinados. En Solana, más del 70% de los swaps pasan por Jupiter. Es el hub central de liquidez del ecosistema—si existe un token en Solana, Jupiter lo tiene.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona la Agregación de Liquidez',
        content: 'Cuando haces un swap en Jupiter, ocurre algo sofisticado detrás de escena que te beneficia enormemente como usuario:',
        features: [
          { icon: Search, title: 'Descubrimiento de Rutas', text: 'Jupiter analiza todos los pools de liquidez disponibles en Solana en milisegundos. Evalúa el precio, la profundidad de liquidez, y el slippage en cada uno. Si tienes una orden de $5,000, puede que el mejor precio sea dividirla: $3,000 por Raydium y $2,000 por Orca—Jupiter calcula esto automáticamente y ejecuta todo en una sola transacción atómica.' },
          { icon: Zap, title: 'Mejor Precio Garantizado', text: 'El resultado es que casi siempre obtienes mejor precio que usando cualquier DEX individual directamente. Para órdenes pequeñas (<$1,000), la diferencia puede ser mínima. Pero para órdenes de $5,000+, la diferencia puede ser del 0.5-2%—que en trading activo se acumula rápidamente.' },
          { icon: Shield, title: 'Sin Custodia, Sin Permisos', text: 'A diferencia de Binance o cualquier CEX, Jupiter nunca toca tus fondos. Conectas tu wallet, firmas la transacción, y los tokens van directamente de tu wallet al pool y de vuelta. Si Jupiter desapareciera mañana, tus fondos están intactos en tu wallet. No hay riesgo de "FTX" con un DEX.' }
        ]
      },
      {
        type: 'main',
        title: 'Tutorial: Tu Primer Swap en Jupiter',
        content: 'Hacer un swap en Jupiter es más simple de lo que parece. Una vez que lo haces una vez, se vuelve segunda naturaleza:',
        features: [
          { icon: Globe, title: 'Paso 1: Conecta tu Wallet', text: 'Ve a jup.ag y haz clic en "Connect Wallet". Selecciona Phantom (o tu wallet preferida). Aprueba la conexión. Jupiter NO pide tu frase semilla ni permisos especiales—solo conexión básica para firmar transacciones.' },
          { icon: Wallet, title: 'Paso 2: Selecciona tus Tokens', text: 'Arriba: el token que quieres vender (ejemplo: USDC). Abajo: el token que quieres comprar (ejemplo: SOL). Ingresa la cantidad. Jupiter muestra automáticamente el precio, la ruta óptima, el slippage estimado, y cuántos tokens recibirás.' },
          { icon: Activity, title: 'Paso 3: Revisa y Confirma', text: 'Revisa el "Price Impact" (idealmente <0.5% para órdenes normales). Revisa el slippage tolerance (0.5% por defecto—adecuado para la mayoría de tokens). Haz clic en "Swap", firma la transacción en Phantom, y en 1-2 segundos los tokens aparecen en tu wallet. El fee de Jupiter es 0% para swaps regulares.' },
          { icon: AlertTriangle, title: 'Configuración Avanzada', text: 'Para órdenes grandes ($10,000+): reduce el slippage tolerance a 0.1-0.3%. Activa "Jito Tips" para protegerte de bots MEV que intentan front-run tu orden (pagando una propina al validador para priorizar tu transacción). Para tokens con baja liquidez: aumenta el slippage a 1-5% o usa Limit Orders.' }
        ]
      },
      {
        type: 'main',
        title: 'DCA Automático: Invierte Sin Emociones',
        content: 'Jupiter tiene una de las implementaciones de DCA más elegantes del ecosistema crypto. No necesitas bots, no necesitas recordar comprar cada semana, y tus fondos nunca salen de un smart contract auditable:',
        features: [
          { icon: Clock, title: 'Cómo Funciona', text: 'Depositas USDC (o cualquier token) en el contrato DCA de Jupiter. Configuras: qué comprar (SOL, BTC, etc.), con qué frecuencia (cada minuto, hora, día, semana), y por cuánto tiempo. Jupiter ejecuta las compras automáticamente al mejor precio disponible en cada intervalo. Los tokens comprados van directamente a tu wallet.' },
          { icon: PiggyBank, title: 'Ventajas vs DCA Manual', text: 'Cero intervención humana = cero emociones saboteando tu plan. No puedes pausar por pánico cuando el mercado cae. No puedes comprar de más por FOMO cuando sube. El protocolo ejecuta mecánicamente según tus instrucciones. Además, el fee es mínimo: solo el fee de red de Solana (~$0.001 por ejecución).' },
          { icon: Lock, title: 'Seguridad', text: 'Tus fondos están en un smart contract auditable, no en una empresa. Puedes cancelar tu DCA en cualquier momento y recuperar los fondos restantes instantáneamente. Los tokens comprados van a tu wallet automáticamente—no se quedan en el contrato.' }
        ]
      },
      {
        type: 'main',
        title: 'Limit Orders: Compra a Tu Precio',
        content: 'Las Limit Orders de Jupiter te permiten colocar órdenes que se ejecutan automáticamente cuando el precio llega a tu objetivo—exactamente como en un exchange centralizado, pero sin custodia:',
        features: [
          { icon: Target, title: 'Cómo Usarlas', text: 'Ejemplo: SOL está a $180 y quieres comprar a $160. Creas una Limit Order: "Comprar SOL con 500 USDC cuando el precio sea $160 o menos". La orden se queda activa hasta que se ejecute o la canceles. Si SOL baja a $160, Jupiter ejecuta automáticamente tu compra al mejor precio disponible.' },
          { icon: Crosshair, title: 'Casos de Uso', text: '(1) Comprar dips automáticamente—configuras la orden y te olvidas. (2) Tomar ganancias—"Vender 10 SOL si llega a $250". (3) Entrar en tokens nuevos a buen precio sin tener que monitorear constantemente. Las Limit Orders son la herramienta favorita de traders que no quieren estar pegados a la pantalla.' },
          { icon: AlertTriangle, title: 'Limitaciones', text: 'Las Limit Orders dependen de que haya liquidez al precio objetivo. Para tokens de muy baja liquidez, la orden puede ejecutarse parcialmente o con slippage. Para tokens principales (SOL, USDC, BTC) no hay problema. Además, hay un fee de ~0.1% en la ejecución de Limit Orders.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Jupiter vs Exchange Centralizado (Binance)',
        leftSide: {
          title: 'Jupiter (DEX)',
          points: [
            'Sin custodia—tus fondos siempre en tu wallet',
            'Sin KYC ni verificación de identidad',
            'Acceso a todos los tokens de Solana (incluso nuevos)',
            'DCA y Limit Orders sin intermediarios',
            'Riesgo: smart contract bugs (mitigado por auditorías)',
            'Solo funciona con tokens en Solana'
          ]
        },
        rightSide: {
          title: 'Binance (CEX)',
          points: [
            'Custodia centralizada—"not your keys, not your coins"',
            'KYC obligatorio, restricciones geográficas',
            'Solo tokens listados por Binance (proceso lento)',
            'DCA y órdenes avanzadas disponibles',
            'Riesgo: la empresa puede quebrar (FTX) o congelar fondos',
            'Multi-chain pero con retiros lentos/costosos'
          ]
        }
      },
      {
        type: 'main',
        title: 'Jupiter Perpetuals: Trading con Apalancamiento',
        content: 'Para traders avanzados, Jupiter ofrece contratos perpetuos (perps) que permiten operar con apalancamiento hasta 100× en SOL, ETH y BTC. Esto es para usuarios experimentados—el riesgo es extremo:',
        features: [
          { icon: TrendingUp, title: 'Qué Son los Perpetuos', text: 'Un contrato perpetuo te permite apostar a que un activo sube (long) o baja (short) con capital prestado. Con 10× apalancamiento, $100 controlan $1,000. Si el precio sube 10%, ganas $100 (100% de tu capital). Si baja 10%, pierdes todo. Es una herramienta de doble filo que amplifica tanto ganancias como pérdidas.' },
          { icon: AlertTriangle, title: 'El Riesgo Real', text: 'La inmensa mayoría de traders que usan apalancamiento alto pierden dinero. Con 10×, un movimiento de 10% en tu contra te liquida completamente. El mercado crypto es volátil—movimientos de 10% ocurren regularmente. Si recién empiezas, NO uses perpetuos. Domina primero el spot trading sin apalancamiento.' },
          { icon: BarChart3, title: 'Si Decides Usarlos', text: 'Máximo 2-3× apalancamiento para principiantes en perps. Siempre con stop loss definido ANTES de entrar. Nunca más del 5% de tu portafolio en una posición apalancada. Los perps son herramientas legítimas para hedging y trading direccional—pero solo para quienes entienden y aceptan el riesgo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Dominando Jupiter',
        items: [
          'Jupiter es el agregador central de Solana: busca el mejor precio entre todos los DEXs y ejecuta swaps óptimos automáticamente. Para la mayoría de swaps, ofrece mejor ejecución que exchanges centralizados.',
          'DCA automático en Jupiter elimina las emociones de tu estrategia de inversión. Depositas USDC, configuras frecuencia, y el protocolo compra mecánicamente al mejor precio. Sin custodia, sin intermediarios.',
          'Limit Orders te permiten comprar dips y tomar ganancias automáticamente sin monitorear precios constantemente. Ideales para traders que no quieren estar pegados a la pantalla.',
          'Jupiter es sin custodia: tus fondos nunca salen de tu wallet (excepto durante la transacción). No hay riesgo de quiebra del exchange ni congelamiento de fondos.',
          'Los Perpetuos (perps) son para traders avanzados. El apalancamiento amplifica ganancias Y pérdidas. Si eres nuevo, domina el spot trading primero.',
          'Configuración avanzada: usa Jito Tips para protegerte de bots MEV en órdenes grandes, ajusta slippage según la liquidez del token, y siempre revisa el Price Impact antes de confirmar.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Quieres cambiar 5,000 USDC por SOL con la mejor ejecución posible. ¿Qué hace Jupiter que un DEX individual (como Raydium solo) no puede?',
          options: [
            { id: 'a', text: 'Nada—todos los DEXs dan el mismo precio' },
            { id: 'b', text: 'Jupiter divide tu orden entre múltiples pools (Raydium, Orca, Phoenix) para encontrar la ruta con menor slippage y mejor precio total' },
            { id: 'c', text: 'Jupiter siempre es más caro porque cobra comisión por agregar' },
            { id: 'd', text: 'Jupiter envía tu orden a Binance para mejor ejecución' }
          ],
          correctAnswer: 'b',
          explanation: 'La agregación de liquidez es el superpoder de Jupiter. Para una orden de $5,000, puede encontrar que dividirla 60/40 entre Raydium y Orca reduce el slippage significativamente. Esto se calcula y ejecuta automáticamente en una sola transacción. El fee de Jupiter para swaps regulares es 0%.'
        },
        {
          id: 'q2',
          question: 'Configuras un DCA en Jupiter: $100 de USDC → SOL cada semana durante 6 meses. ¿Qué pasa con tus fondos?',
          options: [
            { id: 'a', text: 'Jupiter guarda todo el USDC en su cuenta bancaria' },
            { id: 'b', text: 'El USDC se deposita en un smart contract auditable. Cada semana, el contrato ejecuta la compra al mejor precio y envía el SOL a tu wallet. Puedes cancelar y recuperar el USDC restante en cualquier momento' },
            { id: 'c', text: 'Necesitas hacer las compras manualmente cada semana' },
            { id: 'd', text: 'El USDC se convierte todo a SOL inmediatamente' }
          ],
          correctAnswer: 'b',
          explanation: 'El DCA de Jupiter es verdaderamente automatizado y sin custodia. Tu USDC está en un smart contract (no en una empresa). Las compras se ejecutan mecánicamente. Los tokens comprados van a tu wallet directamente. Y puedes cancelar en cualquier momento—no hay lock-up ni penalidades.'
        },
        {
          id: 'q3',
          question: 'SOL está a $180 y quieres comprar más si cae a $150. ¿Cuál es la mejor herramienta en Jupiter?',
          options: [
            { id: 'a', text: 'Hacer un swap normal a $180 y esperar' },
            { id: 'b', text: 'Monitorear el precio manualmente y hacer el swap cuando llegue a $150' },
            { id: 'c', text: 'Crear una Limit Order: "Comprar SOL con X USDC cuando el precio sea $150 o menos". La orden se ejecuta automáticamente si llega a ese precio' },
            { id: 'd', text: 'No es posible en un DEX—solo los CEXs tienen órdenes límite' }
          ],
          correctAnswer: 'c',
          explanation: 'Las Limit Orders de Jupiter funcionan exactamente como en un exchange centralizado pero sin custodia. Configuras tu precio objetivo, la orden queda activa, y se ejecuta automáticamente cuando el mercado llega ahí. No necesitas monitorear constantemente.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la ventaja principal de usar Jupiter en lugar de Binance para swaps de tokens en Solana?',
          options: [
            { id: 'a', text: 'Jupiter es siempre más barato' },
            { id: 'b', text: 'Sin custodia (tus fondos nunca salen de tu wallet), sin KYC, acceso inmediato a TODOS los tokens de Solana (incluso los nuevos), y sin riesgo de que la empresa quiebre o congele tus fondos' },
            { id: 'c', text: 'Binance no tiene tokens de Solana' },
            { id: 'd', text: 'Jupiter tiene mejor soporte al cliente' }
          ],
          correctAnswer: 'b',
          explanation: 'La diferencia fundamental es la custodia. En Binance, tus fondos están en poder de la empresa (riesgo FTX). En Jupiter, tus tokens están en tu wallet hasta el momento exacto del swap. Además, cualquier token nuevo en Solana está disponible en Jupiter inmediatamente, mientras que Binance puede tardar meses en listar.'
        },
        {
          id: 'q5',
          question: 'Vas a hacer un swap grande ($20,000 USDC → SOL). ¿Qué configuraciones avanzadas deberías usar en Jupiter?',
          options: [
            { id: 'a', text: 'Configuración por defecto, no necesito cambiar nada' },
            { id: 'b', text: 'Reducir slippage tolerance a 0.1-0.3% y activar Jito Tips para protegerme de bots MEV que podrían front-run mi orden y darme un peor precio' },
            { id: 'c', text: 'Aumentar slippage al máximo para que se ejecute más rápido' },
            { id: 'd', text: 'Dividir la orden manualmente en 20 swaps de $1,000' }
          ],
          correctAnswer: 'b',
          explanation: 'Para órdenes grandes, los bots MEV pueden detectar tu transacción en el mempool y ejecutar antes que tú (front-running), empeorando tu precio. Jito Tips priorizan tu transacción pagando una propina al validador. Reducir el slippage te protege de aceptar un precio mucho peor que el cotizado. Jupiter hace la optimización de ruta automáticamente—no necesitas dividir manualmente.'
        },
        {
          id: 'q6',
          question: 'Un amigo quiere usar Jupiter Perpetuals con 50× de apalancamiento en SOL porque "va a subir seguro". ¿Qué le dices?',
          options: [
            { id: 'a', text: 'Buena idea, SOL siempre sube' },
            { id: 'b', text: 'Con 50× de apalancamiento, un movimiento de apenas 2% en contra lo liquida completamente. SOL puede moverse 5-10% en horas. La gran mayoría de traders con apalancamiento alto pierden todo. Si quiere usar perps, máximo 2-3× y con stop loss' },
            { id: 'c', text: 'Los perpetuos no tienen riesgo porque son descentralizados' },
            { id: 'd', text: 'Debería usar 100× para maximizar ganancias' }
          ],
          correctAnswer: 'b',
          explanation: 'Con 50× de apalancamiento, tu margen de error es del 2% (100/50 = 2%). SOL se mueve 2% en minutos durante volatilidad normal. Es prácticamente una apuesta de casino. Los traders profesionales que usan perps raramente pasan de 3-5× porque entienden que el apalancamiento amplifica las pérdidas tanto como las ganancias.'
        }
      ]
    }
  },
  26: {
    id: 26,
    title: 'Liquidez y Yield Farming',
    level: 'Avanzado',
    number: '3 de 11',
    duration: '42 min',
    type: 'Estrategias',
    description: 'Conviértete en el banco. Aprende a proveer liquidez en Raydium, Orca y Meteora para ganar comisiones por cada swap que otros hacen. Entiende la impermanent loss, los pools concentrados, y cuándo vale la pena (y cuándo no).',
    sections: [
      {
        type: 'intro',
        title: 'Conviértete en el Banco',
        content: 'En el mundo tradicional, cuando cambias pesos por dólares en una casa de cambio, la casa se queda con un spread (comisión). En DeFi, **tú puedes ser la casa de cambio**. Cuando alguien hace un swap de SOL por USDC en Raydium o Meteora, necesita que haya liquidez disponible—tokens depositados en un pool que faciliten esa transacción. Los que depositan esos tokens son los **Liquidity Providers (LPs)**, y a cambio reciben una porción de las comisiones que se cobran por cada swap. Es un negocio real: los pools más activos de Solana generan millones de dólares en fees al mes. Pero no es dinero gratis—hay riesgos reales que debes entender antes de depositar un solo dólar.',
        highlight: {
          title: 'El Negocio de la Liquidez',
          text: 'Los pools de Solana generan colectivamente **cientos de millones de dólares** en fees mensuales para los LPs. Es una de las formas más lucrativas de generar rendimiento en DeFi—pero también una de las más malentendidas. Esta lección te da las herramientas para participar inteligentemente.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan los Pools de Liquidez?',
        content: 'Un pool de liquidez es un smart contract que contiene dos tokens (por ejemplo, SOL y USDC). Los usuarios que quieren intercambiar uno por otro lo hacen contra el pool, no contra otra persona:',
        features: [
          { icon: Layers, title: 'La Mecánica Básica', text: 'Depositas dos tokens en proporción igual (ejemplo: $500 de SOL + $500 de USDC = $1,000 en el pool SOL-USDC). Cada vez que alguien hace un swap SOL↔USDC usando ese pool, paga una comisión (típicamente 0.25-1%). Esa comisión se distribuye proporcionalmente entre todos los LPs del pool según su participación.' },
          { icon: Zap, title: 'Los Fees se Acumulan', text: 'No recibes los fees en tu wallet—se acumulan automáticamente en tu posición del pool. Si depositaste $1,000 y se acumularon $50 en fees, tu posición ahora vale $1,050. Para cobrarlos, retiras tu liquidez del pool. Mientras más volumen de trading tenga el pool, más fees ganas.' },
          { icon: BarChart3, title: 'APY Variable', text: 'Los rendimientos fluctúan enormemente. Un pool SOL-USDC estable puede generar 10-30% APY. Un pool de un memecoin en pleno hype puede generar 500-2,000% APY—pero por horas o días, no permanentemente. Los APYs que ves son estimaciones basadas en los fees recientes, no garantías de rendimiento futuro.' }
        ]
      },
      {
        type: 'main',
        title: 'Impermanent Loss: El Riesgo que Debes Dominar',
        content: 'Este es el concepto más importante y malentendido de la provisión de liquidez. **Impermanent Loss (IL)** es la diferencia entre lo que ganarías haciendo HODL vs lo que ganas como LP cuando los precios de los tokens cambian:',
        features: [
          { icon: TrendingDown, title: 'Cómo Ocurre', text: 'Depositas $500 SOL + $500 USDC ($1,000 total). SOL sube 100% (de $150 a $300). Si solo hubieras hecho HODL, tendrías $1,500 ($1,000 SOL + $500 USDC). Pero el pool rebalancea automáticamente—vende SOL caro y compra USDC. Tu posición en el pool vale ~$1,414 en lugar de $1,500. Esa diferencia de ~$86 es la impermanent loss (~5.7%).' },
          { icon: BarChart3, title: 'La Tabla que Debes Memorizar', text: 'Cambio de precio +25% → IL ~0.6%. Cambio +50% → IL ~2.0%. Cambio +100% (2×) → IL ~5.7%. Cambio +200% (3×) → IL ~13.4%. Cambio +400% (5×) → IL ~25.5%. Si un token hace 5× mientras estás en el pool, pierdes ~25% comparado con simplemente haberlo guardado.' },
          { icon: CheckCircle, title: '¿Cuándo Vale la Pena?', text: 'IL se llama "impermanent" porque si el precio vuelve al punto original, la pérdida desaparece. Además, los fees que ganas pueden superar la IL. Si ganas 50% APY en fees pero tu IL es del 5%, estás +45% en ganancia neta. El cálculo es: Ganancia neta = Fees ganados - Impermanent Loss. Solo participa cuando los fees justifican el riesgo.' }
        ]
      },
      {
        type: 'main',
        title: 'Pools Estándar vs Pools Concentrados (DLMM)',
        content: 'Hay dos tipos fundamentales de pools, y entender la diferencia es crucial para tu estrategia como LP:',
        features: [
          { icon: Globe, title: 'Pools Estándar (Raydium AMM, Orca)', text: 'Tu liquidez se distribuye en TODO el rango de precios posible—de $0 a infinito. Ventaja: tu posición siempre está activa sin importar el precio. Desventaja: la mayoría de tu capital está "desperdiciado" en rangos de precio donde nunca se va a operar. Eficiencia de capital: baja. Rendimiento: moderado pero predecible.' },
          { icon: Crosshair, title: 'Pools Concentrados (Meteora DLMM, Orca Whirlpools)', text: 'Tú defines el rango de precios donde quieres proveer liquidez. Ejemplo: "Solo quiero ser LP de SOL-USDC entre $150 y $200". Tu capital se concentra en ese rango estrecho, generando MUCHO más fees por dólar invertido (potencialmente 5-20× más que un pool estándar). Pero si el precio sale de tu rango, dejas de ganar fees completamente.' },
          { icon: AlertTriangle, title: 'El Riesgo de Concentrar', text: 'Cuando el precio sale de tu rango en un pool concentrado, tu posición se convierte 100% al token que "perdió" valor relativo. Si SOL-USDC sube por encima de tu rango, te quedas con 100% USDC (vendiste todo tu SOL). Si baja debajo de tu rango, te quedas con 100% SOL (compraste SOL todo el camino hacia abajo). Necesitas monitorear activamente y rebalancear.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Pool Estándar vs Pool Concentrado',
        leftSide: {
          title: 'Pool Estándar (Raydium AMM)',
          points: [
            'Liquidez distribuida en todo el rango de precios',
            'Siempre activo sin importar el precio',
            'Menor eficiencia de capital',
            'No requiere monitoreo activo',
            'Impermanent loss predecible y gradual',
            'Ideal para: LPs pasivos, posiciones de largo plazo'
          ]
        },
        rightSide: {
          title: 'Pool Concentrado (Meteora DLMM)',
          points: [
            'Liquidez concentrada en rango definido por ti',
            'Solo activo si el precio está en tu rango',
            'Mucha mayor eficiencia de capital (5-20× más fees)',
            'Requiere monitoreo y rebalanceo frecuente',
            'Impermanent loss puede ser severa si el precio se aleja mucho',
            'Ideal para: LPs activos, traders con tiempo para monitorear'
          ]
        }
      },
      {
        type: 'main',
        title: 'Las Plataformas de Solana para Proveer Liquidez',
        content: 'Solana tiene un ecosistema rico de DEXs donde puedes proveer liquidez. Cada uno tiene sus ventajas:',
        features: [
          { icon: Zap, title: 'Raydium', text: 'El DEX más establecido de Solana. Tiene pools estándar (AMM) y pools concentrados (CLMM). Los pools estándar son los más fáciles de usar para principiantes en LP. Mucho volumen en pares principales (SOL-USDC, SOL-USDT) y en memecoins nuevas. Interface directa y fees claros.' },
          { icon: Crosshair, title: 'Meteora', text: 'Especializado en pools concentrados (DLMM). La interface más sofisticada para LPs avanzados. Permite configurar rangos con precisión extrema y diferentes estrategias de distribución (spot, curve, bid-ask). Los LPs de Meteora en pools de memecoins volátiles han generado rendimientos extraordinarios—pero requiere experiencia.' },
          { icon: Globe, title: 'Orca', text: 'DEX con excelente interface de usuario. Sus "Whirlpools" son pools concentrados bien diseñados. Menos volumen que Raydium pero experiencia de usuario superior. Buena opción para quien viene de DeFi en otras chains y quiere una interface familiar.' }
        ]
      },
      {
        type: 'main',
        title: 'Yield Farming: Incentivos Adicionales',
        content: 'Además de los fees por swaps, muchos protocolos ofrecen **recompensas adicionales** en forma de tokens para atraer liquidez. Esto se llama Yield Farming:',
        features: [
          { icon: Award, title: 'Cómo Funciona', text: 'Un protocolo nuevo necesita liquidez para funcionar. Para atraerla, regala sus propios tokens a los LPs. Ejemplo: depositas liquidez en un pool nuevo de Raydium y recibes fees del pool + tokens RAY adicionales como incentivo. El APY combinado puede ser muy atractivo—pero los tokens de reward frecuentemente pierden valor con el tiempo.' },
          { icon: AlertTriangle, title: 'El Riesgo del Farming', text: 'Si el token de reward pierde 80% de su valor, tu APY real es mucho menor que el mostrado. Además, el TVL del pool crece rápidamente (todos quieren el yield), lo que diluye las recompensas por persona. El farming más rentable ocurre en las primeras horas/días—después la oportunidad se evapora.' },
          { icon: Brain, title: 'Farming Inteligente', text: 'Busca farming donde el token de reward tenga utilidad real (governance de un protocolo exitoso, no un token sin propósito). Calcula el APY neto: fees del pool + rewards de farming - impermanent loss - depreciación del token de reward. Si el resultado sigue siendo positivo y significativo, adelante.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Proveer Liquidez Como un Profesional',
        items: [
          'Proveer liquidez = depositar tokens en un pool para facilitar swaps. A cambio, recibes comisiones proporcionales a tu participación por cada transacción que usa tu pool.',
          'Impermanent Loss es el costo de ser LP: cuando los precios cambian, ganas menos que si hubieras hecho HODL. Con un cambio de precio de 2× (100%), la IL es ~5.7%. Solo participa cuando los fees justifican este riesgo.',
          'Pools estándar (Raydium AMM) son para LPs pasivos: menor rendimiento pero sin necesidad de monitoreo. Pools concentrados (Meteora DLMM) generan 5-20× más fees pero requieren gestión activa y rebalanceo.',
          'Las plataformas principales de Solana: Raydium (volumen + memecoins), Meteora (DLMM concentrado), Orca (buena UX + Whirlpools). Cada una tiene su nicho.',
          'Yield Farming ofrece tokens adicionales como incentivo, pero el APY mostrado puede ser engañoso si el token de reward pierde valor. Calcula siempre el rendimiento neto real.',
          'Empieza con un pool estándar SOL-USDC en Raydium con una cantidad pequeña que puedas perder. Observa cómo se comporta durante 1-2 semanas antes de escalar. El LP es un oficio que se aprende con práctica.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Depositas $5,000 en SOL + $5,000 en USDC en un pool estándar. SOL sube 100% (2×). Sin contar fees, ¿cuánto vale tu posición aproximadamente?',
          options: [
            { id: 'a', text: '$20,000 — todo se duplicó' },
            { id: 'b', text: '$14,142 — la impermanent loss hace que ganes ~$4,142 en lugar de los $5,000 que habrías ganado solo haciendo HODL' },
            { id: 'c', text: '$10,000 — vuelves al punto de partida' },
            { id: 'd', text: '$7,500 — pierdes dinero' }
          ],
          correctAnswer: 'b',
          explanation: 'Con un cambio de precio de 2×, la fórmula del AMM da: valor = valor_inicial × √(cambio_precio) × 2 / (1 + cambio_precio) = $10,000 × √2 ≈ $14,142. Haciendo HODL tendrías $15,000. La diferencia (~$858 o ~5.7%) es la impermanent loss. Si los fees generados superan esa pérdida, proveer liquidez fue la mejor decisión.'
        },
        {
          id: 'q2',
          question: '¿En qué situación proveer liquidez es claramente mejor que hacer HODL?',
          options: [
            { id: 'a', text: 'Siempre es mejor proveer liquidez' },
            { id: 'b', text: 'Cuando los fees generados por el pool superan la impermanent loss. Esto ocurre típicamente en pools con alto volumen y baja volatilidad relativa (como stablecoin pools o pares principales con mucho trading)' },
            { id: 'c', text: 'Solo cuando un token va a subir mucho' },
            { id: 'd', text: 'Nunca vale la pena—la impermanent loss siempre es mayor' }
          ],
          correctAnswer: 'b',
          explanation: 'La ecuación es simple: Ganancia neta = Fees acumulados - Impermanent Loss. Pools estables (USDC-USDT) tienen IL casi cero y fees constantes. Pools volátiles con mucho volumen (SOL-USDC en alta actividad) pueden generar fees que superan ampliamente la IL. La clave es calcular antes de entrar.'
        },
        {
          id: 'q3',
          question: 'Estás en un pool concentrado (Meteora DLMM) de SOL-USDC con rango $150-$200. El precio de SOL sube a $220. ¿Qué pasa con tu posición?',
          options: [
            { id: 'a', text: 'Pierdes todo tu dinero' },
            { id: 'b', text: 'Tu posición se convierte a 100% USDC (vendiste todo tu SOL mientras subía) y dejas de ganar fees hasta que el precio vuelva a tu rango' },
            { id: 'c', text: 'El protocolo te liquida automáticamente' },
            { id: 'd', text: 'Sigues ganando fees normalmente' }
          ],
          correctAnswer: 'b',
          explanation: 'En un pool concentrado, cuando el precio sale de tu rango por arriba, el pool vendió todo tu SOL por USDC (a buenos precios dentro de tu rango). Te quedas con 100% USDC y cero fees. Necesitas rebalancear: retirar, crear una nueva posición con un rango actualizado. Esta gestión activa es el "costo" de los mayores rendimientos de los pools concentrados.'
        },
        {
          id: 'q4',
          question: 'Ves un pool de un memecoin nuevo mostrando "1,500% APY". ¿Cómo interpretas este número?',
          options: [
            { id: 'a', text: 'Voy a ganar 1,500% en un año garantizado' },
            { id: 'b', text: 'Es una proyección basada en los fees de las últimas horas o días. El APY real será mucho menor porque: el volumen bajará, más LPs entrarán (diluyendo fees), y el memecoin puede perder 90%+ de valor (impermanent loss masiva)' },
            { id: 'c', text: 'Es un scam, los APYs altos son siempre falsos' },
            { id: 'd', text: 'Deposito todo mi capital para maximizar la ganancia' }
          ],
          correctAnswer: 'b',
          explanation: 'Los APYs mostrados se calculan extrapolando los fees recientes a un año completo. Un pool de memecoin puede generar fees enormes durante 2-3 días de hype, mostrando APYs astronómicos. Pero el volumen cae dramáticamente después, el APY baja a cifras normales, y la impermanent loss del memecoin cayendo puede superar todos los fees ganados. Los LPs profesionales entran en las primeras horas y salen rápido.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia principal entre un pool estándar (Raydium AMM) y un pool concentrado (Meteora DLMM)?',
          options: [
            { id: 'a', text: 'No hay diferencia, ambos funcionan igual' },
            { id: 'b', text: 'En un pool estándar, tu liquidez cubre todo el rango de precios (menos eficiente pero sin mantenimiento). En un pool concentrado, defines un rango específico (5-20× más eficiente en fees pero necesitas monitorear y rebalancear activamente)' },
            { id: 'c', text: 'Los pools concentrados son siempre mejores' },
            { id: 'd', text: 'Los pools estándar pagan más fees' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un trade-off entre eficiencia y mantenimiento. Los pools estándar son "set and forget"—ideales para quien no quiere monitorear. Los pools concentrados son como un oficio activo: requieren atención constante pero recompensan con rendimientos mucho mayores cuando se gestionan correctamente. Elige según tu disponibilidad de tiempo y experiencia.'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: 'Lending & Borrowing',
    level: 'Avanzado',
    number: '4 de 11',
    duration: '38 min',
    type: 'Tutorial Práctico',
    description: 'Accede a liquidez sin vender tus criptos. Deposita SOL como colateral, pide prestado USDC, y mantén tu exposición alcista. Pero cuidado: si no entiendes la liquidación, puedes perder todo.',
    sections: [
      {
        type: 'intro',
        title: 'El Banco Descentralizado',
        content: '¿Necesitas dinero pero crees que SOL va a subir y no quieres vender? En el mundo tradicional, pedirías un préstamo en el banco usando tu casa como garantía. En DeFi, haces exactamente lo mismo—pero sin banco, sin papeleo, sin aprobación de crédito, y en 30 segundos. Depositas tus SOL como **colateral** (garantía) en un protocolo como Kamino o MarginFi. A cambio, puedes pedir prestado USDC, USDT u otros tokens por un valor menor al de tu colateral. Mientras tu colateral valga significativamente más que tu deuda, todo funciona perfectamente. Si el precio de tu colateral cae demasiado... bueno, ahí es donde las cosas se ponen peligrosas.',
        highlight: {
          title: 'La Doble Cara del Lending',
          text: 'Lending & Borrowing es una de las herramientas más poderosas de DeFi—y una de las más peligrosas. Usado correctamente, te da acceso a capital sin vender activos que crees que van a subir. Usado incorrectamente, pierdes todo tu colateral en una liquidación. Esta lección te enseña a usarlo de forma segura.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Colateral, LTV y Liquidación',
        content: 'El lending en DeFi se basa en tres conceptos fundamentales que debes dominar antes de depositar un solo token:',
        features: [
          { icon: Lock, title: 'Colateral', text: 'El activo que depositas como garantía. Si depositas 10 SOL a $180 cada uno, tu colateral vale $1,800. El protocolo lo "bloquea" hasta que devuelvas tu préstamo. Tu colateral sigue siendo tuyo—pero si no pagas o si pierde demasiado valor, el protocolo puede venderlo para cubrir la deuda.' },
          { icon: Percent, title: 'LTV (Loan-to-Value)', text: 'El porcentaje de tu colateral que puedes pedir prestado. Si el LTV máximo es 75%, con $1,800 de colateral puedes pedir hasta $1,350 prestados. Pero NUNCA uses el máximo—es jugar con fuego. Con LTV de 75%, una caída del 33% en tu colateral te liquida. La regla profesional: mantén tu LTV por debajo del 50-60%.' },
          { icon: AlertTriangle, title: 'Liquidación', text: 'Si el valor de tu colateral cae tanto que tu LTV supera el umbral de liquidación, el protocolo vende automáticamente (parte de) tu colateral para pagar la deuda. No hay advertencia humana—es un bot que ejecuta en milisegundos. Pierdes tu colateral vendido más una penalización de liquidación (típicamente 5-10%). La liquidación es **irreversible**.' },
          { icon: Activity, title: 'Health Factor', text: 'Es el indicador clave que debes monitorear. Health Factor = Valor del Colateral × Factor de Liquidación / Deuda Total. Si baja de 1.0, te liquidan. A 1.5 estás en zona de peligro. A 2.0+ estás relativamente seguro. Los protocolos muestran esto claramente en su interface—no lo ignores.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Protocolos de Lending en Solana',
        content: 'Solana tiene varios protocolos de lending maduros y auditados. Cada uno tiene sus ventajas y diferencias:',
        features: [
          { icon: Landmark, title: 'Kamino Finance', text: 'El protocolo de lending más grande de Solana por TVL. Interface limpia y fácil de usar. Soporta múltiples colaterales (SOL, jitoSOL, mSOL, BONK, etc). Tasas de interés competitivas. Tiene un sistema de "multiply" que automatiza el looping (amplificar tu posición). Es la opción más popular y la recomendada para empezar.' },
          { icon: Shield, title: 'MarginFi', text: 'Protocolo con enfoque en seguridad y conservadurismo. Parámetros de riesgo más estrictos que Kamino (lo cual puede ser bueno para tu protección). Pionero en lending en Solana. Su airdrop del token MRGN fue uno de los más esperados del ecosistema.' },
          { icon: Zap, title: 'Solend', text: 'Uno de los primeros protocolos de lending de Solana. Más simple y directo. Buena opción si quieres una experiencia básica sin las funciones avanzadas de Kamino. Menos TVL que los anteriores pero con historial probado.' }
        ]
      },
      {
        type: 'main',
        title: 'Ejemplo Práctico: Pedir Prestado Paso a Paso',
        content: 'Vamos a recorrer un ejemplo real de cómo pedir prestado en Kamino de forma segura:',
        features: [
          { icon: Wallet, title: 'Paso 1: Deposita Colateral', text: 'Conecta tu wallet a Kamino (app.kamino.finance). Selecciona "Lend" o "Supply". Deposita 10 SOL (valor: ~$1,800 si SOL = $180). Tu colateral aparece en el dashboard con su valor en USD actualizado en tiempo real.' },
          { icon: Banknote, title: 'Paso 2: Pide Prestado (Conservador)', text: 'Selecciona "Borrow" → USDC. Con $1,800 de colateral, el protocolo te permite pedir hasta ~$1,350 (75% LTV). Pero nosotros pedimos solo $900 (50% LTV). ¿Por qué? Porque SOL puede caer 30% en un día, y con 50% LTV tienes margen amplio antes de liquidación.' },
          { icon: Activity, title: 'Paso 3: Monitorea tu Health Factor', text: 'Después de pedir prestado, tu Health Factor debería estar en ~2.0 o más. Configura alertas (algunos protocolos las tienen integradas, o usa herramientas como Step Finance). Si cae a 1.3, es momento de actuar: depositar más colateral o devolver parte del préstamo.' },
          { icon: RefreshCw, title: 'Paso 4: Repaga y Recupera', text: 'Cuando quieras cerrar la posición, devuelve los $900 USDC + los intereses acumulados. El protocolo libera tu colateral (10 SOL) de vuelta a tu wallet. Si SOL subió mientras tanto, felicidades: accediste a $900 sin vender tus SOL que ahora valen más.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Lending Conservador vs Agresivo',
        leftSide: {
          title: 'Conservador (Recomendado)',
          points: [
            'LTV del 40-50% (pides menos de la mitad del valor)',
            'Health Factor de 2.0+ en todo momento',
            'Colateral en activos estables o blue chips (SOL, ETH)',
            'Monitoreo semanal es suficiente',
            'Riesgo de liquidación: muy bajo',
            'Estrategia: acceder a liquidez sin vender posición de largo plazo'
          ]
        },
        rightSide: {
          title: 'Agresivo (Solo Expertos)',
          points: [
            'LTV del 65-75% (cerca del máximo permitido)',
            'Health Factor de 1.2-1.5 (zona de peligro)',
            'Looping: pedir prestado → comprar más colateral → depositar → repetir',
            'Requiere monitoreo constante (alertas 24/7)',
            'Riesgo de liquidación: alto si el mercado cae 15-20%',
            'Estrategia: apalancar posición para maximizar exposición'
          ]
        }
      },
      {
        type: 'main',
        title: 'Looping: La Estrategia de las Ballenas',
        content: 'El "looping" o "leverage looping" es la estrategia avanzada más usada por traders grandes en Solana. Es poderosa pero peligrosa:',
        features: [
          { icon: RefreshCw, title: 'Cómo Funciona', text: 'Depositas 10 SOL → Pides prestado 800 USDC → Compras más SOL con esos USDC → Depositas ese SOL como colateral adicional → Pides prestado más USDC → Repites. Después de 3-4 loops, tus 10 SOL iniciales controlan una posición de ~25-30 SOL (2.5-3× apalancamiento). Si SOL sube 20%, ganas ~50-60% en lugar de 20%.' },
          { icon: AlertTriangle, title: 'El Riesgo Amplificado', text: 'Si SOL cae 20%, tu posición apalancada 3× pierde ~60%. Si cae 33%, podrías ser liquidado completamente y perder TODOS tus SOL originales. El looping amplifica todo: ganancias Y pérdidas. Es por eso que solo traders con experiencia y capital que pueden perder deben usarlo.' },
          { icon: Zap, title: 'Kamino Multiply', text: 'Kamino tiene una función llamada "Multiply" que automatiza el looping con un clic. Seleccionas el multiplicador (1.5×, 2×, 3×) y el protocolo hace todos los loops automáticamente. Es conveniente pero peligroso si no entiendes los riesgos. Trata el Multiply con el mismo respeto que un perpetuo con apalancamiento.' }
        ]
      },
      {
        type: 'main',
        title: 'Errores Fatales que Debes Evitar',
        content: 'Estos errores han costado millones de dólares a usuarios de lending en DeFi. No cometas ninguno:',
        features: [
          { icon: AlertTriangle, title: 'Pedir Prestado al Máximo LTV', text: 'Si el protocolo te permite 75% LTV, NUNCA uses el 75%. Una caída del 15-20% te liquida. Los profesionales se mantienen en 40-50% LTV. El espacio extra entre tu LTV y el umbral de liquidación es tu "seguro de vida" en mercados volátiles.' },
          { icon: AlertTriangle, title: 'No Monitorear en Mercados Volátiles', text: 'SOL puede caer 20-30% en horas durante eventos de pánico. Si tu Health Factor ya estaba bajo, puedes ser liquidado mientras duermes. Configura alertas automáticas o usa LTVs lo suficientemente conservadores para sobrevivir caídas del 40%+.' },
          { icon: AlertTriangle, title: 'Usar Colateral Volátil sin Margen', text: 'Usar SOL como colateral es razonable—es un activo blue chip con liquidez profunda. Usar un memecoin como colateral es suicida: puede perder 80% en un día. Algunos protocolos lo permiten, pero que puedas no significa que debas. Mantén tu colateral en activos que no van a desplomarse de la noche a la mañana.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lending Inteligente',
        items: [
          'Lending en DeFi = depositar colateral y pedir prestado contra él. Es como un préstamo bancario pero instantáneo, sin papeleo, y ejecutado por smart contracts. Kamino y MarginFi son los protocolos principales de Solana.',
          'El LTV (Loan-to-Value) determina cuánto puedes pedir prestado. NUNCA uses el máximo permitido. La regla profesional: mantén tu LTV en 40-50% para tener margen amplio contra caídas de mercado.',
          'La liquidación es automática e irreversible. Si tu Health Factor cae debajo de 1.0, un bot vende tu colateral instantáneamente. Monitorea tu Health Factor y configura alertas.',
          'El looping (depositar → pedir prestado → comprar más → repetir) amplifica tu exposición 2-4×. Amplifica ganancias Y pérdidas. Solo para traders experimentados con capital que pueden perder.',
          'Errores fatales: pedir prestado al máximo LTV, no monitorear en mercados volátiles, usar colateral ultra-volátil (memecoins). Cualquiera de estos puede liquidarte completamente.',
          'Caso de uso ideal para principiantes en lending: tienes SOL que no quieres vender, necesitas USDC temporal, pides prestado al 40-50% LTV, usas el USDC, devuelves cuando puedas, y recuperas tu SOL intacto.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Depositas 10 SOL (valor: $1,800) como colateral en Kamino y pides prestado 900 USDC (50% LTV). SOL cae 40% a $108. ¿Qué pasa?',
          options: [
            { id: 'a', text: 'Nada, todo sigue normal' },
            { id: 'b', text: 'Tu colateral ahora vale $1,080, tu deuda sigue siendo ~$900. Tu LTV subió a ~83%, superando el umbral de liquidación. El protocolo vende parte o todo tu SOL para cubrir la deuda' },
            { id: 'c', text: 'El protocolo te perdona la deuda automáticamente' },
            { id: 'd', text: 'Puedes ignorarlo porque el precio va a recuperarse' }
          ],
          correctAnswer: 'b',
          explanation: 'La liquidación es automática y no espera a que el precio se recupere. Con colateral de $1,080 y deuda de $900, tu LTV es ~83%—muy por encima del umbral de liquidación (típicamente 75-80%). Los bots de liquidación ejecutan en milisegundos. Por eso la regla es mantener LTV bajo (40-50%) para tener margen en caídas fuertes.'
        },
        {
          id: 'q2',
          question: 'El protocolo muestra que puedes pedir prestado hasta $1,350 con tu colateral de $1,800 (75% LTV máximo). ¿Cuánto deberías pedir prestado?',
          options: [
            { id: 'a', text: '$1,350 — el máximo disponible para aprovechar todo el capital' },
            { id: 'b', text: '$720-900 (40-50% LTV) para mantener un margen de seguridad amplio. Con 50% LTV, SOL tendría que caer ~40% para activar la liquidación, dándote tiempo de reaccionar' },
            { id: 'c', text: '$1,200 — dejo un poquito de margen' },
            { id: 'd', text: 'No pido prestado nada, es muy riesgoso' }
          ],
          correctAnswer: 'b',
          explanation: 'Los traders profesionales se mantienen en 40-50% LTV por una razón: SOL puede caer 20-30% en horas durante eventos de pánico. Con 50% LTV, necesitas una caída de ~40% para ser liquidado. Con 75% LTV, una caída del 15-20% te liquida. Ese margen extra es tu seguro de supervivencia.'
        },
        {
          id: 'q3',
          question: '¿Qué es el "looping" en lending y por qué lo usan las ballenas?',
          options: [
            { id: 'a', text: 'Es pedir prestado y repagar constantemente sin propósito' },
            { id: 'b', text: 'Depositar colateral → pedir prestado → comprar más colateral → depositar → repetir. Amplifica tu exposición 2-4× al activo. Si SOL sube 20%, ganas 40-80%. Pero si cae 20%, puedes perder todo' },
            { id: 'c', text: 'Es una forma de staking especial' },
            { id: 'd', text: 'Es ilegal en DeFi' }
          ],
          correctAnswer: 'b',
          explanation: 'El looping es esencialmente apalancamiento construido con lending. Las ballenas lo usan para amplificar su exposición a SOL sin usar perpetuos. Kamino incluso tiene "Multiply" que lo automatiza. Pero amplifica TODO: ganancias Y pérdidas. Es solo para traders que entienden y aceptan el riesgo de liquidación total.'
        },
        {
          id: 'q4',
          question: 'Quieres acceder a $500 USDC sin vender tus SOL porque crees que va a subir. ¿Cuál es el enfoque más seguro?',
          options: [
            { id: 'a', text: 'Depositar SOL suficiente para que $500 represente solo 40-50% LTV, pedir los $500, usar el USDC para lo que necesites, y devolver el préstamo cuando puedas para recuperar tu SOL' },
            { id: 'b', text: 'Vender la mitad de tus SOL y quedarte con USDC' },
            { id: 'c', text: 'Depositar la cantidad mínima de SOL y pedir $500 al máximo LTV' },
            { id: 'd', text: 'Pedir prestado $2,000 y usar los $1,500 extra para comprar más SOL' }
          ],
          correctAnswer: 'a',
          explanation: 'Este es el caso de uso más limpio y seguro del lending: acceder a liquidez temporal sin vender tu posición de largo plazo. Con 40-50% LTV, tienes margen amplio contra caídas. Cuando devuelves los $500 + intereses, recuperas todos tus SOL—que ojalá valgan más que cuando los depositaste.'
        },
        {
          id: 'q5',
          question: 'Tu Health Factor en Kamino bajó a 1.2 durante una caída del mercado. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Nada, 1.2 está bien' },
            { id: 'b', text: 'Actúo inmediatamente: deposito más colateral O devuelvo parte del préstamo para subir mi Health Factor a 2.0+. Un Health Factor de 1.2 significa que una caída adicional del 16-17% me liquida' },
            { id: 'c', text: 'Pido prestado más para comprar en el dip' },
            { id: 'd', text: 'Espero a que suba el precio' }
          ],
          correctAnswer: 'b',
          explanation: 'Health Factor de 1.2 es zona de peligro serio. Estás a ~16-17% de una caída de la liquidación. En crypto, caídas de 15-20% ocurren regularmente en minutos durante eventos de pánico. Tienes dos opciones: agregar más colateral (depositar más SOL/otros activos) o devolver parte del préstamo. Ambas suben tu Health Factor. No esperes—los mercados no esperan.'
        }
      ]
    }
  },
  28: {
    id: 28,
    title: 'Riesgos de DeFi: La Guía Completa',
    level: 'Avanzado',
    number: '5 de 11',
    duration: '32 min',
    type: 'Seguridad',
    description: 'DeFi ofrece libertad financiera, pero la libertad viene con responsabilidad. Smart contract hacks, rug pulls, exploits de oráculos, y errores de usuario han costado más de $10 mil millones. Aprende a protegerte.',
    sections: [
      {
        type: 'intro',
        title: 'La Libertad Tiene un Precio',
        content: 'En DeFi, no hay banco que te reembolse si pierdes dinero. No hay "soporte al cliente" que revierta una transacción. No hay seguro de depósitos. **Tú eres responsable al 100% de tus fondos.** Esa es la belleza de la descentralización—y también su mayor riesgo. Desde 2020, más de $10 mil millones se han perdido en DeFi por hacks, exploits, rug pulls, y errores de usuario. Algunos de los protocolos más grandes y "seguros" del ecosistema han sido hackeados. Esto no significa que DeFi sea una estafa—significa que necesitas entender los riesgos para navegar este espacio de forma segura. En esta lección vas a aprender a identificar cada tipo de riesgo, cómo se manifiesta en la práctica, y qué puedes hacer para protegerte.',
        highlight: {
          title: 'La Estadística Que Importa',
          text: 'Solo en 2024, más de $1.7 mil millones se perdieron en hackeos y exploits de DeFi. El hack más grande de la historia crypto fue el del bridge Ronin (Axie Infinity): **$625 millones** robados. Entender estos riesgos no es opcional—es requisito de supervivencia.'
        }
      },
      {
        type: 'main',
        title: 'Riesgo #1: Smart Contract Bugs',
        content: 'El riesgo más fundamental de DeFi. Los protocolos son código, y todo código puede tener errores. Un bug en el smart contract puede permitir que un hacker drene todos los fondos:',
        features: [
          { icon: Cpu, title: 'Cómo Ocurre', text: 'Un programador comete un error lógico en el código del smart contract. Puede ser algo tan sutil como un error de redondeo, una verificación faltante, o una interacción inesperada entre dos funciones. Un hacker encuentra este error, escribe un script que lo explota, y drena el protocolo en minutos. Para cuando los desarrolladores reaccionan, los fondos ya están en el mixer.' },
          { icon: Shield, title: 'Cómo Protegerte', text: '(1) Solo usa protocolos con múltiples auditorías de firmas reputadas (Halborn, OtterSec, Neodyme para Solana). (2) Prefiere protocolos con tiempo en el mercado—si llevan 1+ año sin hacks con TVL alto, su código está battle-tested. (3) Nunca pongas más del 20-30% de tu portafolio en un solo protocolo. (4) Revisa si el protocolo tiene un programa de bug bounty (recompensa por reportar vulnerabilidades).' },
          { icon: AlertTriangle, title: 'Caso Real: Wormhole ($320M)', text: 'En febrero 2022, un hacker encontró una vulnerabilidad en el bridge Wormhole que conectaba Solana con Ethereum. Explotó el bug y minteó 120,000 ETH falsos. Jump Crypto (inversor de Wormhole) reemplazó los fondos para salvar a los usuarios, pero no todos los protocolos tienen un "padrino" millonario.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #2: Rug Pulls y Estafas',
        content: 'Un rug pull ocurre cuando los creadores de un proyecto roban deliberadamente los fondos de los usuarios. Es diferente a un hack—aquí no hay vulnerabilidad técnica, sino intención criminal:',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funciona', text: 'El equipo crea un token/protocolo, genera hype, atrae depósitos de usuarios, y luego drena todos los fondos y desaparece. Puede ser tan simple como crear un pool de liquidez, esperar a que la gente compre el token, y retirar toda la liquidez (leaving holders con un token sin valor). O tan elaborado como construir un protocolo aparentemente legítimo durante meses y escapar con millones.' },
          { icon: Search, title: 'Red Flags de un Rug Pull', text: '(1) Equipo anónimo sin historial verificable. (2) Promesas de rendimientos absurdos (1,000%+ APY "garantizado"). (3) Smart contracts no verificados o sin auditoría. (4) Liquidez no bloqueada (el equipo puede retirar liquidez del pool en cualquier momento). (5) Presión para invertir rápido ("solo quedan 2 horas"). (6) La mayoría del supply en manos del equipo.' },
          { icon: Eye, title: 'Cómo Verificar', text: 'Usa herramientas como RugCheck.xyz para tokens de Solana. Verifica si la liquidez está bloqueada (locked LP). Revisa en el explorer (solscan.io) si pocas wallets controlan la mayoría del supply. Si el contrato no está verificado y el equipo es anónimo, no deposites tus ahorros—como máximo, una cantidad que puedas perder al 100%.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #3: Exploits de Oráculos y Bridges',
        content: 'Estos son los vectores de ataque más sofisticados y los que han causado las pérdidas más grandes en la historia de DeFi:',
        features: [
          { icon: Link, title: 'Oráculos Manipulados', text: 'Los protocolos DeFi necesitan saber el precio de los activos (para lending, liquidaciones, etc). Obtienen esta información de "oráculos" como Pyth o Switchboard. Si un hacker manipula el precio que reporta el oráculo (por ejemplo, hacer creer al protocolo que SOL vale $1,000 por un instante), puede pedir prestamos enormes contra colateral "inflado" y quedarse con los fondos. Los protocolos serios usan múltiples oráculos y tienen protecciones contra precio manipulation.' },
          { icon: Network, title: 'Bridges Hackeados', text: 'Los bridges conectan diferentes blockchains (Solana ↔ Ethereum). Son los targets favoritos de hackers porque contienen enormes cantidades de fondos "bloqueados". Wormhole ($320M), Ronin ($625M), Nomad ($190M)—los bridges son el eslabón más débil del ecosistema multi-chain. Cuando uses bridges, mueve lo mínimo necesario y no dejes fondos en ellos.' },
          { icon: Shield, title: 'Cómo Minimizar el Riesgo', text: 'Quédate en una sola chain (Solana) tanto como sea posible para evitar bridges. Si necesitas bridge, usa Wormhole o deBridge (los más auditados de Solana). Para lending, prefiere protocolos que usan Pyth como oráculo (el principal de Solana, respaldado por Jump Crypto). Evita protocolos que usan un solo oráculo sin respaldo.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #4: Errores de Usuario',
        content: 'Irónicamente, la mayor causa de pérdida de fondos en DeFi no son los hackers—eres tú. Los errores de usuario son responsables de una porción enorme de fondos perdidos:',
        features: [
          { icon: Wallet, title: 'Enviar a Dirección Equivocada', text: 'Enviar SOL a una dirección de Ethereum, USDC a una wallet inexistente, o cualquier error de dirección. En blockchain, las transacciones son IRREVERSIBLES. No hay botón de "deshacer". Siempre envía una transacción de prueba pequeña primero (0.01 SOL) antes de enviar cantidades grandes.' },
          { icon: Lock, title: 'Aprobar Contratos Maliciosos', text: 'Al conectar tu wallet a un sitio fraudulento y firmar una transacción, puedes dar permisos para que drenen tu wallet. NUNCA firmes transacciones en sitios que no reconoces. Lee lo que estás firmando en Phantom—si dice "Approve unlimited spending" para un sitio desconocido, rechaza inmediatamente.' },
          { icon: AlertTriangle, title: 'Perder la Frase Semilla', text: 'Si pierdes tu frase semilla y tu dispositivo falla, tus fondos se pierden PARA SIEMPRE. No hay soporte técnico, no hay "olvidé mi contraseña", no hay recuperación. Asegúrate de tener tu frase semilla respaldada en un medio físico seguro antes de depositar cantidades significativas en DeFi.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Riesgos de DeFi: Probabilidad vs Impacto',
        leftSide: {
          title: 'Alta Probabilidad, Menor Impacto',
          points: [
            'Impermanent loss en pools de liquidez (esperable y calculable)',
            'Fees de gas mal calculados (pierdes centavos)',
            'Slippage mayor al esperado en swaps',
            'Rendimientos menores a los proyectados (APY variable)',
            'Token de reward pierde valor (farming)',
            'Posición de lending cerca de liquidación por volatilidad normal'
          ]
        },
        rightSide: {
          title: 'Baja Probabilidad, Alto Impacto',
          points: [
            'Smart contract hack (puedes perder todo lo depositado)',
            'Rug pull deliberado por el equipo del proyecto',
            'Bridge hackeado (fondos robados)',
            'Oracle manipulation (liquidaciones injustas)',
            'Perder frase semilla (fondos irrecuperables)',
            'Firmar transacción maliciosa (wallet drenada)'
          ]
        }
      },
      {
        type: 'main',
        title: 'Tu Framework de Gestión de Riesgo en DeFi',
        content: 'No puedes eliminar el riesgo en DeFi, pero puedes gestionarlo inteligentemente con estas reglas:',
        features: [
          { icon: Shield, title: 'Regla del 20-30%', text: 'Nunca pongas más del 20-30% de tu portafolio crypto total en un solo protocolo DeFi. Si el protocolo es hackeado, pierdes una parte dolorosa pero no catastrófica. Los profesionales diversifican entre 3-5 protocolos diferentes para distribuir el riesgo de smart contract.' },
          { icon: Clock, title: 'Regla del Lindy Effect', text: 'Cuanto más tiempo ha existido un protocolo sin ser hackeado, más probable es que sea seguro. Un protocolo con 2 años de historial y $500M en TVL que nunca ha sido explotado es enormemente más confiable que uno lanzado hace 2 semanas. El tiempo es la mejor auditoría.' },
          { icon: Search, title: 'Due Diligence Mínima', text: 'Antes de depositar en cualquier protocolo: (1) ¿Tiene auditorías de firmas reputadas? (2) ¿Cuánto tiempo lleva operando? (3) ¿El código está verificado y es open source? (4) ¿Tiene bug bounty program? (5) ¿Quién es el equipo (doxxed o anónimo)? Si no puedes responder 3 de 5, no deposites cantidades significativas.' },
          { icon: Wallet, title: 'Separación de Wallets', text: 'Usa wallets diferentes para diferentes niveles de riesgo: (1) Cold wallet (Ledger) para ahorros que no tocas. (2) Hot wallet principal (Phantom) para DeFi en protocolos establecidos. (3) Burner wallet para experimentar con protocolos nuevos o desconocidos. Si tu burner es hackeada, solo pierdes lo que tenía—no tu patrimonio.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Sobrevivir y Prosperar en DeFi',
        items: [
          'Los 4 riesgos principales de DeFi: smart contract bugs (errores de código), rug pulls (estafas deliberadas), exploits de oráculos/bridges (ataques sofisticados), y errores de usuario (enviar a dirección equivocada, firmar transacciones maliciosas).',
          'Más de $10 mil millones se han perdido en DeFi. Los bridges (Wormhole, Ronin) han sido los targets más grandes. Quédate en una sola chain (Solana) cuando sea posible para minimizar este riesgo.',
          'Antes de depositar en cualquier protocolo: verifica auditorías, tiempo en el mercado, código verificado, y bug bounty. Si un protocolo es nuevo, sin auditoría, y con equipo anónimo, es una apuesta—no una inversión.',
          'Regla del 20-30%: nunca más de un tercio de tu portafolio en un solo protocolo. Si es hackeado, pierdes una parte—no todo. Diversifica entre 3-5 protocolos establecidos.',
          'Separa tus wallets por nivel de riesgo: cold wallet para ahorros, hot wallet para DeFi establecido, burner wallet para experimentar. La compartimentalización es tu mejor defensa.',
          'Los errores de usuario causan más pérdidas que los hackers. Envía transacciones de prueba, lee lo que firmas, y NUNCA compartas tu frase semilla. En DeFi, tú eres tu propia seguridad.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un protocolo DeFi nuevo en Solana ofrece 500% APY, fue lanzado hace 3 días, no tiene auditoría, y el equipo es anónimo. ¿Cómo evalúas el riesgo?',
          options: [
            { id: 'a', text: 'Si el APY es real, vale la pena el riesgo' },
            { id: 'b', text: 'Múltiples red flags: sin auditoría (riesgo de smart contract bugs), equipo anónimo (riesgo de rug pull), muy nuevo (sin track record), y APY extremo (insostenible). Como máximo, deposita una cantidad mínima con una burner wallet' },
            { id: 'c', text: 'Los protocolos nuevos siempre son seguros porque el código es fresco' },
            { id: 'd', text: 'La falta de auditoría no importa si mucha gente lo usa' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada red flag por separado es preocupante. Todas juntas son una receta para perder dinero. Sin auditoría = nadie verificó el código. Equipo anónimo = pueden desaparecer. 3 días = sin track record. 500% APY = insostenible y probablemente inflado para atraer depósitos. Si quieres participar, usa solo una burner wallet con dinero que puedas perder al 100%.'
        },
        {
          id: 'q2',
          question: '¿Por qué los bridges (Wormhole, Ronin) han sido los targets más hackeados de DeFi?',
          options: [
            { id: 'a', text: 'Porque son más nuevos que otros protocolos' },
            { id: 'b', text: 'Porque contienen enormes cantidades de fondos "bloqueados" de múltiples usuarios, haciendo que un solo exploit sea extremadamente lucrativo. Además, conectar dos blockchains diferentes multiplica la superficie de ataque' },
            { id: 'c', text: 'Porque no tienen auditorías' },
            { id: 'd', text: 'Los bridges no han sido hackeados, es un mito' }
          ],
          correctAnswer: 'b',
          explanation: 'Los bridges son "honeypots" masivos: contienen cientos de millones en fondos bloqueados, y conectar dos blockchains diferentes crea complejidad adicional (más código = más posibilidades de bugs). Ronin ($625M), Wormhole ($320M), Nomad ($190M)—los tres mayores hacks de DeFi fueron bridges. La mejor defensa: minimiza el uso de bridges y quédate en una sola chain cuando sea posible.'
        },
        {
          id: 'q3',
          question: 'Conectas tu wallet a un sitio que dice ser "Jupiter" pero la URL es jup-airdrop.com. Aparece un popup pidiendo que firmes una transacción. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Firmo—dice Jupiter y parece legítimo' },
            { id: 'b', text: 'Rechazo inmediatamente. La URL real de Jupiter es jup.ag. Esto es phishing—firmar esa transacción podría dar permisos para drenar toda mi wallet. Desconecto, cierro la pestaña, y revoco cualquier permiso que haya dado' },
            { id: 'c', text: 'Firmo pero con una cantidad pequeña para probar' },
            { id: 'd', text: 'Pregunto en el chat del sitio si es legítimo' }
          ],
          correctAnswer: 'b',
          explanation: 'Los sitios de phishing son la forma más común de robo en crypto. Replican interfaces conocidas con URLs similares. Al firmar, puedes aprobar permisos que permiten drenar TODOS los tokens de tu wallet—no solo los que ves en pantalla. Siempre verifica la URL exacta. Marca los sitios reales en tus favoritos. Si tienes dudas, no firmes nada.'
        },
        {
          id: 'q4',
          question: 'Tienes $50,000 en DeFi en Solana. ¿Cómo deberías distribuir tus fondos para gestionar el riesgo de smart contract?',
          options: [
            { id: 'a', text: 'Todo en un solo protocolo para simplificar' },
            { id: 'b', text: 'Distribuir entre 3-5 protocolos establecidos (máximo 20-30% en cada uno). Si un protocolo es hackeado, pierdes una porción—no todo. Usar protocolos con auditorías, historial probado, y TVL alto' },
            { id: 'c', text: 'Distribuir en 20 protocolos diferentes para máxima diversificación' },
            { id: 'd', text: 'Dejarlo todo en stablecoins en mi wallet' }
          ],
          correctAnswer: 'b',
          explanation: 'La diversificación entre protocolos es la defensa principal contra smart contract risk. 3-5 protocolos es el balance ideal: suficiente diversificación sin la complejidad de gestionar 20 posiciones. Cada protocolo debe ser establecido (1+ año), auditado, y con TVL significativo. Si uno es hackeado, pierdes 20-30%—doloroso pero recuperable.'
        },
        {
          id: 'q5',
          question: '¿Qué es un "rug pull" y cómo puedes identificarlo antes de que ocurra?',
          options: [
            { id: 'a', text: 'Es cuando el precio de un token baja naturalmente' },
            { id: 'b', text: 'Es cuando los creadores de un proyecto drenan deliberadamente los fondos de los usuarios y desaparecen. Red flags: equipo anónimo, sin auditoría, liquidez no bloqueada, promesas de rendimientos absurdos, presión para invertir rápido' },
            { id: 'c', text: 'Solo pasa en Ethereum, no en Solana' },
            { id: 'd', text: 'Es imposible de predecir' }
          ],
          correctAnswer: 'b',
          explanation: 'Los rug pulls son estafas deliberadas, no accidentes. Las señales están ahí si sabes buscarlas: equipo anónimo (pueden desaparecer sin consecuencias), sin auditoría (nadie revisó si hay backdoors), liquidez no bloqueada (pueden retirar la liquidez del pool en cualquier momento). Herramientas como RugCheck.xyz te ayudan a verificar tokens de Solana automáticamente.'
        },
        {
          id: 'q6',
          question: 'El protocolo más seguro de DeFi es:',
          options: [
            { id: 'a', text: 'El que tiene el APY más alto' },
            { id: 'b', text: 'El más nuevo con tecnología de punta' },
            { id: 'c', text: 'El que tiene múltiples auditorías, 2+ años de historial sin hacks, código open source, TVL alto sostenido, y un programa de bug bounty activo' },
            { id: 'd', text: 'No existe tal cosa como un protocolo seguro en DeFi' }
          ],
          correctAnswer: 'c',
          explanation: 'El "Lindy Effect" aplica perfectamente a DeFi: cuanto más tiempo ha existido un protocolo con TVL alto sin ser hackeado, más confiable es. Las auditorías reducen (pero no eliminan) el riesgo de bugs. El código open source permite que la comunidad revise. El bug bounty incentiva a hackers éticos a reportar vulnerabilidades antes de que sean explotadas. Ningún protocolo es 100% seguro, pero estos factores reducen el riesgo enormemente.'
        }
      ]
    }
  },
  29: {
    id: 29,
    title: 'NFTs en Solana',
    level: 'Avanzado',
    number: '6 de 11',
    duration: '30 min',
    type: 'Mercado',
    description: 'Los NFTs en Solana van mucho más allá de "JPEGs caros". Son acceso a comunidades exclusivas, herramientas de identidad digital, compresión que permite mintear millones por centavos, y un mercado profesional con Tensor y Magic Eden.',
    sections: [
      {
        type: 'intro',
        title: 'Más Allá de los JPEGs',
        content: 'Si tu imagen de los NFTs se quedó en "monos caros en Ethereum" (Bored Apes) del 2021, necesitas actualizarte. Los NFTs en Solana han evolucionado en algo fundamentalmente diferente. Sí, existe el componente de arte y coleccionismo—pero lo más interesante es cómo los NFTs se han convertido en **herramientas de acceso, identidad y utilidad**. Un NFT de Mad Lads no es solo una imagen—es tu entrada a una de las comunidades más activas del ecosistema Solana, con acceso exclusivo a eventos, airdrops, y networking. Un NFT de Tensorians te da descuentos en fees del marketplace. Los cNFTs (NFTs comprimidos) permiten crear millones de tokens por unos pocos dólares, abriendo casos de uso que en Ethereum son económicamente imposibles: tickets de eventos, certificados educativos, items de videojuegos, y más.',
        highlight: {
          title: 'La Ventaja de Solana',
          text: 'Mintear un NFT en Ethereum cuesta $30-100+. En Solana, cuesta menos de $0.01. Y con cNFTs (comprimidos), puedes mintear **1 millón de NFTs por unos pocos dólares**. Esta diferencia de costo no es marginal—habilita categorías enteras de uso que antes eran imposibles.'
        }
      },
      {
        type: 'main',
        title: '¿Qué son los NFTs? La Versión Real',
        content: 'Olvida las definiciones superficiales. Un NFT (Non-Fungible Token) es un certificado de propiedad digital único, registrado en la blockchain, que nadie puede falsificar ni duplicar:',
        features: [
          { icon: Gem, title: 'Propiedad Verificable', text: 'Cada NFT tiene un dueño verificable en la blockchain. No necesitas confiar en nadie—cualquiera puede verificar que TÚ eres el dueño legítimo. Esto es revolucionario: por primera vez en la historia de internet, puedes poseer algo digital de forma verificable y transferible sin intermediarios.' },
          { icon: Lock, title: 'Escasez Digital', text: 'Cada colección tiene un supply definido (por ejemplo, Mad Lads tiene exactamente 10,000 NFTs). No se pueden crear más. Esa escasez, combinada con la demanda de la comunidad, determina el precio. Un JPEG se puede copiar—pero el NFT que lo autentica como "original" es único e irrepetible.' },
          { icon: Zap, title: 'Programabilidad', text: 'Los NFTs no son estáticos—son programables. Pueden otorgar acceso a contenido exclusivo, desbloquear funciones en apps, evolucionar con el tiempo, o interactuar con protocolos DeFi. En gaming, un NFT puede ser una espada que mejora mientras juegas. Las posibilidades son limitadas solo por la creatividad de los desarrolladores.' }
        ]
      },
      {
        type: 'main',
        title: 'El Ecosistema de NFTs en Solana',
        content: 'Solana tiene un ecosistema de NFTs rico y diverso. Estas son las categorías principales que encontrarás:',
        features: [
          { icon: Users, title: 'Colecciones PFP (Profile Picture)', text: 'Mad Lads, Claynosaurz, Tensorians—son colecciones de imágenes únicas que la gente usa como foto de perfil en redes sociales. Pero son mucho más que imágenes: representan membresía en una comunidad exclusiva. Los holders de Mad Lads, por ejemplo, tuvieron acceso anticipado a múltiples airdrops y eventos. El valor no está en la imagen—está en la comunidad y los beneficios asociados.' },
          { icon: Cpu, title: 'cNFTs (Compressed NFTs)', text: 'La innovación más importante de Solana para NFTs. Usando "state compression", puedes crear millones de NFTs por una fracción del costo normal. DRiP.haus distribuyó millones de NFTs artísticos gratis usando esta tecnología. Los proyectos de gaming pueden crear items in-game como NFTs comprimidos. Las empresas pueden emitir tickets, certificados y collectibles a escala masiva.' },
          { icon: Award, title: 'NFTs de Utilidad', text: 'NFTs que dan acceso o beneficios concretos: descuentos en fees (Tensorians en Tensor), acceso a contenido premium, pases VIP para eventos, governance en DAOs, o bonificaciones en protocolos DeFi. El valor de estos NFTs está directamente vinculado a la utilidad que ofrecen—no a la especulación.' },
          { icon: Gem, title: 'Arte Generativo y 1/1', text: 'Artistas digitales usan Solana para crear y vender arte en formato NFT. Las colecciones generativas crean piezas únicas usando algoritmos. Los artistas 1/1 venden piezas individuales como obras de arte digital. Plataformas como Exchange Art (ahora más conocida como FormFunction) facilitan la venta directa de artista a coleccionista.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Marketplaces: Dónde Comprar y Vender',
        content: 'Para operar con NFTs en Solana, necesitas conocer los marketplaces principales:',
        features: [
          { icon: BarChart3, title: 'Tensor', text: 'El marketplace más profesional de Solana. Interface tipo exchange con orderbooks, gráficos de floor price, y herramientas analíticas avanzadas. Ideal para traders que quieren analizar datos antes de comprar. Permite hacer ofertas (bids) en colecciones enteras y tiene fees competitivos. Tensor es a los NFTs lo que Jupiter es a los tokens.' },
          { icon: Globe, title: 'Magic Eden', text: 'El marketplace más conocido y accesible. Interface amigable para principiantes. Soporta múltiples blockchains (Solana, Ethereum, Bitcoin Ordinals). Tiene launchpad para nuevas colecciones. Si es tu primera vez comprando un NFT, Magic Eden tiene la experiencia más suave.' },
          { icon: Search, title: 'Cómo Evaluar Antes de Comprar', text: 'Antes de comprar cualquier NFT, revisa: (1) Floor price (precio mínimo) y su tendencia—¿sube o baja? (2) Volumen de trading—¿hay actividad real o está muerto? (3) Holders únicos—¿cuántas personas diferentes tienen NFTs de la colección? (4) Comunidad—¿el Discord/Twitter está activo? (5) Utilidad—¿qué beneficios concretos da tener el NFT?' }
        ]
      },
      {
        type: 'comparison',
        title: 'NFTs en Solana vs NFTs en Ethereum',
        leftSide: {
          title: 'Solana',
          points: [
            'Costo de minteo: <$0.01 por NFT',
            'cNFTs: millones de NFTs por centavos',
            'Transacciones instantáneas (~400ms)',
            'Marketplaces: Tensor, Magic Eden',
            'Enfoque en utilidad y comunidades activas',
            'Mercado más joven pero en rápido crecimiento'
          ]
        },
        rightSide: {
          title: 'Ethereum',
          points: [
            'Costo de minteo: $30-100+ por NFT',
            'Sin compresión nativa (costoso a escala)',
            'Transacciones lentas (~12s) y caras',
            'Marketplaces: OpenSea, Blur',
            'Colecciones históricas (Punks, Apes) y arte',
            'Mercado más maduro pero con volumen decreciente'
          ]
        }
      },
      {
        type: 'main',
        title: 'Riesgos y Realidades del Mercado de NFTs',
        content: 'Los NFTs pueden ser una herramienta poderosa, pero también un campo minado si no sabes lo que haces:',
        features: [
          { icon: TrendingDown, title: 'La Realidad del Mercado', text: 'El 90%+ de las colecciones de NFTs eventualmente llegan a floor price cercano a cero. Las colecciones que mantienen valor a largo plazo son la excepción, no la regla. Nunca trates un NFT como una "inversión segura"—trata cualquier compra especulativa como dinero que puedes perder al 100%.' },
          { icon: AlertTriangle, title: 'Wash Trading', text: 'El volumen de trading de NFTs puede ser inflado artificialmente. Una persona puede comprar y vender el mismo NFT a sí misma repetidamente para simular actividad. Herramientas como Tensor muestran métricas de "organic volume" que intentan filtrar esto—pero no es perfecto. No te dejes impresionar solo por volumen alto.' },
          { icon: Shield, title: 'Criterios de Compra Inteligente', text: 'Compra NFTs por razones concretas: (1) Quieres ser parte de la comunidad y participar activamente. (2) La utilidad justifica el precio (descuentos, acceso, beneficios). (3) Te gusta genuinamente el arte y lo compras como coleccionista. (4) Entiendes que es especulación pura y usas dinero que puedes perder. NUNCA compres un NFT "porque está subiendo" sin entender qué estás comprando.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'NFTs: Lo Que Realmente Importa',
        items: [
          'Los NFTs son certificados de propiedad digital únicos en la blockchain. En Solana van más allá de "JPEGs": son acceso a comunidades, herramientas de identidad, items de gaming, y certificados verificables.',
          'cNFTs (NFTs comprimidos) son la gran innovación de Solana: mintear millones de NFTs por centavos. Esto habilita casos de uso masivos que en Ethereum son económicamente imposibles.',
          'Los marketplaces principales son Tensor (profesional, con herramientas analíticas) y Magic Eden (accesible, multi-chain). Usa Tensor si quieres analizar datos antes de comprar.',
          'El 90%+ de las colecciones de NFTs pierden su valor con el tiempo. Las que sobreviven tienen comunidad activa, utilidad real, y un equipo comprometido. Nunca trates NFTs como inversión segura.',
          'Antes de comprar: revisa floor price trend, volumen orgánico, holders únicos, comunidad activa, y utilidad concreta. Si no puedes justificar la compra más allá de "está subiendo", no compres.',
          'Los NFTs con mayor valor sostenido son los que otorgan beneficios concretos: acceso exclusivo, airdrops, descuentos en fees, o membresía en comunidades productivas. El valor está en la utilidad, no en la imagen.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué son los cNFTs (Compressed NFTs) y por qué son importantes para Solana?',
          options: [
            { id: 'a', text: 'Son NFTs con imágenes de baja resolución para ahorrar espacio' },
            { id: 'b', text: 'Usan "state compression" para crear millones de NFTs por centavos. Esto habilita casos de uso masivos (tickets, gaming, certificados) que en Ethereum costarían millones de dólares' },
            { id: 'c', text: 'Son NFTs que se destruyen después de un tiempo' },
            { id: 'd', text: 'No hay diferencia con los NFTs normales, es solo marketing' }
          ],
          correctAnswer: 'b',
          explanation: 'La compresión de estado de Solana reduce el costo de almacenar datos on-chain dramáticamente. DRiP.haus distribuyó millones de NFTs artísticos gratis usando cNFTs. Los juegos pueden crear items como NFTs por fracciones de centavo. Es una ventaja tecnológica única de Solana que abre categorías enteras de uso.'
        },
        {
          id: 'q2',
          question: 'Quieres comprar tu primer NFT en Solana. ¿Cuál marketplace usarías y qué deberías verificar antes de comprar?',
          options: [
            { id: 'a', text: 'OpenSea, que es el más famoso. Compro el más barato que encuentre' },
            { id: 'b', text: 'Tensor o Magic Eden. Antes de comprar, verifico: floor price trend, volumen de trading orgánico, número de holders únicos, actividad de la comunidad en Discord/Twitter, y la utilidad concreta del NFT' },
            { id: 'c', text: 'Amazon, que es donde compro todo' },
            { id: 'd', text: 'Cualquier marketplace—todos son iguales y no necesito investigar' }
          ],
          correctAnswer: 'b',
          explanation: 'Tensor es el marketplace más profesional de Solana (con herramientas analíticas), y Magic Eden es el más accesible para principiantes. Investigar antes de comprar es CRUCIAL: un floor price descendente, volumen falso (wash trading), o una comunidad muerta son señales de que la colección no tiene futuro. Siempre haz tu investigación.'
        },
        {
          id: 'q3',
          question: 'Un amigo dice: "Los NFTs son una estafa, son solo JPEGs caros." ¿Cuál es la respuesta más precisa?',
          options: [
            { id: 'a', text: 'Tiene razón, todos los NFTs son una estafa' },
            { id: 'b', text: 'La mayoría de colecciones especulativas sí pierden valor, pero los NFTs como tecnología son mucho más que imágenes: representan propiedad digital verificable, acceso a comunidades, utilidad en protocolos, y habilitación de nuevos modelos de negocio' },
            { id: 'c', text: 'Todos los NFTs van a subir, solo necesita paciencia' },
            { id: 'd', text: 'Los NFTs reemplazan todo el sistema financiero' }
          ],
          correctAnswer: 'b',
          explanation: 'Es una respuesta matizada: sí, el 90%+ de colecciones especulativas pierden valor—eso es real. Pero la tecnología NFT (propiedad digital verificable) tiene aplicaciones genuinas: tickets, credenciales, gaming items, acceso a comunidades, y más. Los cNFTs de Solana especialmente habilitan casos de uso a escala masiva que antes eran imposibles.'
        },
        {
          id: 'q4',
          question: 'Ves una colección de NFTs en Tensor con mucho volumen de trading pero solo 150 holders únicos de 10,000 NFTs. ¿Qué indica esto?',
          options: [
            { id: 'a', text: 'Los holders son muy comprometidos' },
            { id: 'b', text: 'Probable wash trading: pocas personas están comprando y vendiendo entre sí para inflar el volumen artificialmente y atraer compradores reales' },
            { id: 'c', text: 'Es normal—las colecciones exitosas tienen pocos holders' },
            { id: 'd', text: 'Es una colección exclusiva para ballenas' }
          ],
          correctAnswer: 'b',
          explanation: 'La combinación de alto volumen + pocos holders es una señal clásica de wash trading. Si 10,000 NFTs están concentrados en 150 wallets, es probable que pocas personas estén manipulando el mercado. Una colección saludable tiene miles de holders únicos con distribución diversa. Siempre revisa el ratio holders/supply antes de comprar.'
        },
        {
          id: 'q5',
          question: '¿Por qué mintear NFTs en Solana cuesta una fracción de lo que cuesta en Ethereum?',
          options: [
            { id: 'a', text: 'Porque los NFTs de Solana son de menor calidad' },
            { id: 'b', text: 'Porque los fees de transacción en Solana son <$0.01 vs $30-100+ en Ethereum. Esto es resultado de la arquitectura de alta velocidad de Solana, no de menor calidad' },
            { id: 'c', text: 'Porque Solana subsidia el minteo con su fundación' },
            { id: 'd', text: 'Los costos son iguales en ambas redes' }
          ],
          correctAnswer: 'b',
          explanation: 'La diferencia de costos es puramente técnica: Solana procesa ~4,000 transacciones por segundo con fees de fracciones de centavo, mientras Ethereum procesa ~15 TPS con fees variables que pueden ser muy altos. Esta diferencia masiva de costos es lo que permite innovaciones como cNFTs y la experimentación a bajo costo que define el ecosistema NFT de Solana.'
        }
      ]
    }
  },
  30: {
    id: 30,
    title: 'Airdrops y Points Farming',
    level: 'Avanzado',
    number: '7 de 11',
    duration: '35 min',
    type: 'Estrategia',
    description: 'Los protocolos necesitan usuarios, y los recompensan con tokens de gobernanza. Solana ha tenido los airdrops más lucrativos de la historia: JTO, JUP, PYTH, W. Aprende a posicionarte como usuario temprano legítimamente.',
    sections: [
      {
        type: 'intro',
        title: 'Recompensas por Ser Temprano',
        content: 'En el mundo tradicional, los primeros clientes de una empresa no reciben nada especial. En crypto, los protocolos frecuentemente **regalan tokens de gobernanza** a sus primeros usuarios como recompensa por haber confiado en ellos cuando nadie más lo hacía. Estos "airdrops" han generado retornos extraordinarios. El airdrop de Jito (JTO) en diciembre 2023 regaló entre $1,000 y $50,000+ a usuarios que simplemente habían hecho staking de SOL a través de Jito. Jupiter (JUP) regaló tokens por valor de miles de dólares a quienes habían usado el DEX. Wormhole (W) regaló miles a usuarios que habían hecho bridges. ¿La clave? No eran "inversores"—eran **usuarios genuinos** que usaban estos protocolos como parte de su actividad normal en Solana. Los airdrops recompensan comportamiento orgánico, no especulación. Entender cómo funcionan y cómo posicionarte es una de las estrategias más lucrativas del ecosistema.',
        highlight: {
          title: 'Números Reales',
          text: 'El airdrop de Jupiter distribuyó 1 mil millones de tokens JUP (40% del supply) a usuarios. Un usuario promedio activo recibió ~3,000-10,000 JUP, que en el lanzamiento valían entre $2,000 y $8,000+. Solo por haber usado Jupiter como su DEX principal. Ese es el poder de ser temprano y genuino.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan los Airdrops?',
        content: 'Los airdrops siguen un patrón predecible que puedes entender y aprovechar:',
        features: [
          { icon: Users, title: 'El Problema del Protocolo', text: 'Un protocolo nuevo necesita usuarios para crecer, generar fees, y demostrar tracción. Pero los usuarios no quieren usar algo nuevo sin incentivos. Solución: el protocolo promete (implícita o explícitamente) que recompensará a los early adopters con tokens cuando lance su "Token Generation Event" (TGE).' },
          { icon: Activity, title: 'El Snapshot', text: 'En algún momento (que los usuarios no conocen de antemano), el protocolo toma un "snapshot" de toda la actividad on-chain: quién usó el protocolo, cuánto volumen generó, con qué frecuencia, durante cuánto tiempo. Este snapshot se usa para calcular cuántos tokens recibe cada wallet.' },
          { icon: Award, title: 'La Distribución', text: 'El protocolo anuncia el airdrop y publica los criterios. Los usuarios elegibles pueden "claimear" (reclamar) sus tokens. Típicamente, los criterios favorecen: volumen de uso, frecuencia y consistencia, antigüedad (cuánto tiempo has sido usuario), y diversidad de funciones usadas (swaps + LP + staking > solo swaps).' }
        ]
      },
      {
        type: 'main',
        title: 'El Sistema de Puntos: La Nueva Norma',
        content: 'Desde 2024, la mayoría de protocolos han adoptado un sistema de "puntos" en lugar de airdrops sorpresa. Es más transparente pero también más competitivo:',
        features: [
          { icon: Target, title: 'Cómo Funcionan los Puntos', text: 'El protocolo anuncia públicamente: "Estamos dando puntos por usar nuestro producto". Cada acción (swap, depositar liquidez, hacer staking) acumula puntos. Cuando el protocolo lance su token, los puntos se convertirán en una asignación proporcional del airdrop. Más puntos = más tokens. Ejemplo: Kamino daba puntos por depositar en lending/borrowing antes de lanzar KMNO.' },
          { icon: BarChart3, title: 'La Economía de los Puntos', text: 'Los puntos crean un "mercado de expectativas". Si un protocolo tiene $500M en TVL acumulando puntos, y se espera que el token tenga un FDV (Fully Diluted Valuation) de $1B con un airdrop del 10% ($100M), entonces cada punto tiene un "valor estimado". Los farmers sofisticados calculan el ratio puntos/dólar para determinar si vale la pena.' },
          { icon: AlertTriangle, title: 'El Riesgo de los Puntos', text: 'No hay garantía de que los puntos se conviertan en tokens. El protocolo puede cambiar los criterios, reducir el porcentaje del airdrop, o añadir dilución con más temporadas de puntos. Además, si todos están farmeando el mismo protocolo, la asignación per cápita se diluye. No trates los puntos como dinero seguro—son una apuesta educada.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Posicionarte para Airdrops en Solana',
        content: 'La estrategia más efectiva no es "farmear" artificialmente—es ser un usuario genuino y activo del ecosistema:',
        features: [
          { icon: Zap, title: 'Usa los Protocolos Principales', text: 'Jupiter (swaps, DCA, limit orders), Kamino (lending, multiply), Marinade/Jito (liquid staking), Meteora (LP), Drift (perpetuos), Tensor (NFTs). Si usas estos protocolos como parte de tu actividad normal en Solana, estarás automáticamente posicionado para futuros airdrops. No necesitas hacer cosas forzadas—solo usar DeFi activamente.' },
          { icon: Clock, title: 'Sé Consistente, No Puntual', text: 'Los criterios de airdrop favorecen la consistencia. Un usuario que hace 10 transacciones al mes durante 12 meses es más valioso que uno que hace 100 transacciones en un solo día. Los protocolos buscan usuarios genuinos, no bots que hacen bulk transactions para inflar actividad.' },
          { icon: Layers, title: 'Diversifica tus Actividades', text: 'No te limites a swaps. Haz staking, provee liquidez, usa lending, prueba nuevas funcionalidades. Los airdrops suelen dar bonificaciones por "breadth of usage" (diversidad de funciones usadas). Un usuario que usa 5 funciones diferentes es más valioso que uno que solo hace swaps repetitivos.' },
          { icon: Search, title: 'Identifica Protocolos Pre-Token', text: 'Los airdrops más lucrativos vienen de protocolos que TODAVÍA NO tienen token. Busca en DefiLlama protocolos de Solana con TVL alto y creciente pero sin token propio. Esos son los candidatos principales para un TGE futuro con airdrop. Cuanto antes empieces a usarlos, mayor será tu asignación.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Farming Legítimo vs Sybil Farming',
        leftSide: {
          title: 'Farming Legítimo',
          points: [
            'Usar protocolos genuinamente como parte de tu actividad DeFi',
            'Una wallet principal con historial orgánico',
            'Transacciones con propósito real (swaps que necesitas, LP en pools que te interesan)',
            'Volumen proporcional a tu capital real',
            'Consistencia a lo largo de meses',
            'Resultado: airdrops generosos que premian tu uso real'
          ]
        },
        rightSide: {
          title: 'Sybil Farming (Penalizado)',
          points: [
            'Crear cientos de wallets para simular muchos usuarios',
            'Transacciones vacías (circular el mismo capital entre wallets propias)',
            'Actividad artificial concentrada en días específicos',
            'Scripts automatizados que replican patrones idénticos',
            'Los protocolos usan análisis on-chain para detectar y EXCLUIR sybils',
            'Resultado: wallets bloqueadas, airdrop perdido, tiempo desperdiciado'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Vender o Holdear el Airdrop?',
        content: 'Recibes tu airdrop. Ahora la pregunta del millón: ¿vendes inmediatamente o holdeas esperando que suba? No hay respuesta universal, pero hay datos:',
        features: [
          { icon: TrendingDown, title: 'La Estadística Incómoda', text: 'Históricamente, la mayoría de tokens de airdrop pierden valor en las semanas/meses posteriores al lanzamiento. ¿Por qué? Porque millones de personas reciben tokens gratis y muchos los venden inmediatamente, creando presión de venta masiva. JTO cayó 50% desde su máximo post-airdrop. W (Wormhole) cayó significativamente. No todos caen—JUP se mantuvo relativamente bien—pero la tendencia estadística es bajista.' },
          { icon: Brain, title: 'La Estrategia Híbrida', text: 'Muchos traders experimentados usan una estrategia de 3 partes: (1) Vender 30-50% inmediatamente para "asegurar" ganancias reales. (2) Mantener 30-40% si crees en el protocolo a largo plazo. (3) Definir un stop loss mental para el resto ("si cae 50% desde aquí, vendo lo restante"). Esto te protege de la codicia ("puede subir más") y del arrepentimiento ("vendí todo y subió").' },
          { icon: CheckCircle, title: 'Factores a Considerar', text: '¿El token tiene utilidad real (governance, staking, descuentos)? ¿El protocolo tiene fundamentales sólidos (TVL creciente, fees altos, usuarios activos)? ¿La tokenomics es favorable (bajo supply circulante con vesting largo)? Si las respuestas son positivas, holdear una porción tiene sentido. Si el token es puro especulación sin utilidad, vender rápido suele ser la mejor estrategia.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Estrategia de Airdrops',
        items: [
          'Los airdrops recompensan a usuarios genuinos y tempranos con tokens de gobernanza. Los más lucrativos de Solana (JTO, JUP, PYTH, W) regalaron miles de dólares a usuarios activos del ecosistema.',
          'El sistema de puntos es la nueva norma: los protocolos anuncian puntos por usar su producto, que luego se convierten en tokens. Es más transparente pero no garantizado—los criterios pueden cambiar.',
          'La mejor estrategia es ser un usuario genuino y diverso: usa Jupiter, Kamino, Jito, Meteora, y otros protocolos principales como parte de tu actividad DeFi normal. Sé consistente durante meses.',
          'Identifica protocolos sin token con TVL alto y creciente—son los candidatos principales para futuros airdrops. Cuanto antes empieces a usarlos, mayor será tu asignación potencial.',
          'El Sybil farming (crear múltiples wallets falsas) es detectado y penalizado por la mayoría de protocolos. No vale la pena el riesgo ni el esfuerzo. El uso orgánico es más lucrativo y más seguro.',
          'Cuando recibas un airdrop, considera vender 30-50% inmediatamente para asegurar ganancias. La mayoría de tokens de airdrop pierden valor en las semanas posteriores al lanzamiento. Solo holdea si crees genuinamente en los fundamentales del protocolo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la forma más efectiva de posicionarte para airdrops en Solana?',
          options: [
            { id: 'a', text: 'Crear 100 wallets y hacer una transacción en cada una' },
            { id: 'b', text: 'Ser un usuario genuino, consistente y diverso del ecosistema: usar Jupiter, Kamino, Jito, Meteora regularmente como parte de tu actividad DeFi normal durante meses' },
            { id: 'c', text: 'Enviar DMs a los developers pidiendo tokens' },
            { id: 'd', text: 'Esperar a que anuncien el airdrop y empezar a usar el protocolo ese día' }
          ],
          correctAnswer: 'b',
          explanation: 'Los criterios de airdrop favorecen: antigüedad (cuánto tiempo has sido usuario), consistencia (uso regular durante meses), volumen orgánico, y diversidad de funciones usadas. Un usuario genuino que lleva meses usando el protocolo recibe mucho más que alguien que aparece el día del snapshot con actividad artificial.'
        },
        {
          id: 'q2',
          question: '¿Qué es el "Sybil farming" y por qué deberías evitarlo?',
          options: [
            { id: 'a', text: 'Es una técnica de agricultura tradicional' },
            { id: 'b', text: 'Crear múltiples wallets falsas para simular muchos usuarios y multiplicar tu airdrop. Los protocolos usan análisis on-chain sofisticado para detectar y EXCLUIR wallets sybil, perdiendo tanto el airdrop como el tiempo invertido' },
            { id: 'c', text: 'Es la mejor estrategia para maximizar airdrops' },
            { id: 'd', text: 'Es un tipo de staking avanzado' }
          ],
          correctAnswer: 'b',
          explanation: 'Los equipos de protocolos como Jupiter y Jito invierten recursos significativos en detección de sybils. Usan clustering de wallets (wallets que interactúan entre sí), patrones de tiempo idénticos, y análisis de flujo de fondos. Las wallets sybil son excluidas del airdrop o reciben cantidades mínimas. El riesgo/recompensa simplemente no vale la pena comparado con ser un usuario genuino.'
        },
        {
          id: 'q3',
          question: 'Recibes un airdrop de 5,000 tokens de un protocolo nuevo, valorados en $4,000 al momento del claim. ¿Cuál es la estrategia más prudente?',
          options: [
            { id: 'a', text: 'Holdeo todo—"to the moon"' },
            { id: 'b', text: 'Vendo todo inmediatamente sin pensar' },
            { id: 'c', text: 'Estrategia híbrida: vendo 30-50% inmediatamente para asegurar $1,200-2,000 en ganancias reales, holdeo el resto si creo en los fundamentales del protocolo, y defino un stop loss mental para proteger lo restante' },
            { id: 'd', text: 'Lo deposito en un pool de liquidez para ganar más' }
          ],
          correctAnswer: 'c',
          explanation: 'Históricamente, la mayoría de tokens de airdrop pierden valor post-lanzamiento porque millones de personas venden simultáneamente. Vender una porción asegura ganancias reales (dinero en tu wallet, no "en papel"). Holdear el resto te da exposición al upside si el protocolo crece. Es balance entre seguridad y oportunidad.'
        },
        {
          id: 'q4',
          question: 'Un protocolo de Solana con $300M en TVL anuncia un sistema de puntos. ¿Cómo evalúas si vale la pena farmear?',
          options: [
            { id: 'a', text: 'Si tiene puntos, siempre vale la pena' },
            { id: 'b', text: 'Calculo: ¿cuánto TVL tiene? ¿Cuántos usuarios farmean? ¿Cuál es la estimación del FDV del token? ¿Qué porcentaje se destinará al airdrop? Si el ratio puntos/dólar es favorable y uso el protocolo de todas formas, tiene sentido' },
            { id: 'c', text: 'Los sistemas de puntos siempre son estafas' },
            { id: 'd', text: 'Deposito todo mi dinero para maximizar puntos' }
          ],
          correctAnswer: 'b',
          explanation: 'El farming inteligente requiere cálculos: si un protocolo tiene $300M TVL y se espera un token con $500M FDV y 10% al airdrop ($50M), tu asignación depende de tu participación relativa en el TVL total. Si ya usarías el protocolo de todas formas (Kamino para lending, por ejemplo), los puntos son un bonus. Si depositas capital que estaría mejor en otro lugar solo por los puntos, calcula si vale la pena.'
        },
        {
          id: 'q5',
          question: '¿Cómo identificas protocolos de Solana que probablemente tendrán un airdrop futuro?',
          options: [
            { id: 'a', text: 'Los que tienen los APYs más altos' },
            { id: 'b', text: 'Busca en DefiLlama protocolos con TVL alto y creciente, equipo activo, producto funcionando, inversión de VCs reputados, pero SIN token propio todavía. Esos son los candidatos principales para un TGE con airdrop' },
            { id: 'c', text: 'Los más nuevos siempre tienen airdrop' },
            { id: 'd', text: 'Es imposible saber cuáles tendrán airdrop' }
          ],
          correctAnswer: 'b',
          explanation: 'Los mejores candidatos para airdrop son protocolos que: (1) tienen producto funcionando con usuarios reales, (2) tienen TVL significativo y creciente, (3) están respaldados por VCs que esperan un token para su retorno de inversión, (4) pero todavía NO tienen token propio. Cuanto antes empieces a usar un protocolo pre-token, mayor será tu antigüedad y potencial asignación en el airdrop.'
        }
      ]
    }
  },
  31: {
    id: 31,
    title: 'DePIN: Infraestructura Física Descentralizada',
    level: 'Avanzado',
    number: '8 de 11',
    duration: '28 min',
    type: 'Tendencias',
    description: 'Crypto sale del mundo digital al mundo físico. DePIN usa tokens para incentivar a millones de personas a construir infraestructura real: redes WiFi (Helium), mapas (Hivemapper), computación GPU (Render), y sensores ambientales. Solana es el epicentro.',
    sections: [
      {
        type: 'intro',
        title: 'Cuando Crypto Construye el Mundo Real',
        content: 'Hasta ahora, todo lo que hemos visto en crypto ocurre en el mundo digital: tokens, DeFi, NFTs, staking. Pero hay una categoría que está llevando blockchain al **mundo físico**, y Solana es su epicentro. **DePIN** (Decentralized Physical Infrastructure Networks) usa incentivos en tokens para motivar a personas comunes a construir infraestructura que normalmente solo construyen corporaciones gigantes. ¿Quieres un competidor de Google Maps? En lugar de que Google pague millones a flotas de autos con cámaras, Hivemapper paga tokens a cualquiera que instale una dashcam y conduzca. ¿Quieres una red WiFi global? En lugar de que AT&T invierta billones, Helium paga tokens a personas que instalan hotspots en sus casas. ¿Necesitas renderizado de video e IA? En lugar de depender solo de AWS, Render Network paga tokens a personas que comparten su GPU. El resultado: infraestructura construida por la gente, para la gente, incentivada por tokens. Es quizás la narrativa con mayor potencial de impacto real en el mundo.',
        highlight: {
          title: 'Por Qué DePIN en Solana',
          text: 'DePIN necesita procesar millones de micro-transacciones de sensores y dispositivos. Ethereum a $5-50 por transacción es imposible. Solana a $0.001 es perfecto. Por eso Helium migró de su propia chain a Solana, y la mayoría de proyectos DePIN nuevos eligen Solana desde el inicio.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funciona DePIN?',
        content: 'El modelo DePIN invierte la lógica tradicional de construcción de infraestructura:',
        features: [
          { icon: Globe, title: 'El Modelo Tradicional', text: 'Una corporación invierte billones de dólares en infraestructura (torres de celular, centros de datos, flotas de mapeo). Cobra a los usuarios por el servicio. La empresa captura todo el valor. Los usuarios son clientes, no participantes. El problema: es lento, costoso, y concentrado en pocas empresas.' },
          { icon: Users, title: 'El Modelo DePIN', text: 'Un protocolo crea un token e incentiva a personas comunes a proveer la infraestructura. Cada participante invierte poco (una dashcam de $300, un hotspot de $400, su GPU existente). A cambio, recibe tokens por el servicio que provee. Millones de pequeños participantes construyen una red más grande y distribuida que cualquier corporación. Los costos son menores, la cobertura es mayor, y el valor se distribuye entre todos los participantes.' },
          { icon: Network, title: 'El Flywheel (Ciclo Virtuoso)', text: 'Más participantes → mejor servicio → más usuarios/clientes → más demanda del token → el token sube → más personas quieren participar → más participantes. Este ciclo virtuoso es lo que hace que DePIN escale exponencialmente una vez que alcanza masa crítica. Helium pasó de 0 a 900,000+ hotspots en pocos años usando este modelo.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Proyectos DePIN Más Importantes de Solana',
        content: 'Solana alberga los proyectos DePIN más grandes y maduros del ecosistema crypto:',
        features: [
          { icon: Smartphone, title: 'Helium (HNT/MOBILE/IOT)', text: 'La red inalámbrica descentralizada más grande del mundo. Personas instalan hotspots en sus casas/oficinas y ganan tokens por proveer cobertura WiFi/5G. Ya tiene 900,000+ hotspots en 180+ países. Helium Mobile lanzó un plan celular de $20/mes en USA que usa la red descentralizada + roaming. Es DePIN funcionando en la vida real—puedes llamar y navegar con una red construida por la gente.' },
          { icon: Eye, title: 'Hivemapper (HONEY)', text: 'Google Maps descentralizado. Instalas una dashcam especial en tu auto y ganas tokens HONEY por cada kilómetro que mapeas. Los datos de las cámaras crean un mapa global actualizado en tiempo real—algo que Google actualiza cada meses/años. Empresas de logística, navegación, y urbanismo pagan por acceder a estos datos frescos. Ya mapearon millones de kilómetros en todo el mundo.' },
          { icon: Cpu, title: 'Render Network (RENDER)', text: 'Computación GPU descentralizada. Si tienes una tarjeta gráfica potente (NVIDIA), puedes "alquilar" tu GPU para renderizar videos, entrenar modelos de IA, o procesar gráficos 3D. Los creadores de contenido, estudios de VFX, y desarrolladores de IA pagan RENDER tokens por el poder de cómputo. Es una alternativa descentralizada a AWS/Google Cloud para tareas de GPU.' },
          { icon: Server, title: 'io.net', text: 'Red de computación GPU enfocada en IA. Agrega GPUs de centros de datos, mineros de crypto, y usuarios individuales para crear un "supercomputador descentralizado". Las empresas de IA que necesitan entrenar modelos pueden acceder a GPUs más baratas y abundantes que en servicios centralizados. Solana procesa los micropagos y la coordinación de la red.' }
        ]
      },
      {
        type: 'comparison',
        title: 'DePIN vs Infraestructura Tradicional',
        leftSide: {
          title: 'DePIN (Descentralizado)',
          points: [
            'Construida por miles/millones de participantes individuales',
            'Cada participante invierte $200-500 en hardware',
            'Tokens incentivan la participación orgánica',
            'Cobertura distribuida y resiliente',
            'Valor compartido entre todos los participantes',
            'Escalamiento rápido y orgánico por incentivos'
          ]
        },
        rightSide: {
          title: 'Infraestructura Tradicional',
          points: [
            'Construida por una corporación centralizada',
            'La empresa invierte billones en capital',
            'Empleados y contratistas pagados con salarios',
            'Cobertura concentrada en zonas rentables',
            'Valor capturado por accionistas y ejecutivos',
            'Escalamiento lento y costoso'
          ]
        }
      },
      {
        type: 'main',
        title: 'Cómo Participar en DePIN',
        content: 'Hay varias formas de participar en el ecosistema DePIN, desde comprar tokens hasta operar hardware:',
        features: [
          { icon: Smartphone, title: 'Operar Hardware', text: 'Compras el dispositivo del proyecto (dashcam de Hivemapper ~$300, hotspot de Helium ~$200-500, o usas tu GPU existente para Render). Lo conectas y empiezas a ganar tokens. El ROI depende del proyecto, tu ubicación, y la demanda del servicio. Investiga el payback period (cuántos meses tarda en recuperar la inversión del hardware) antes de comprar.' },
          { icon: BarChart3, title: 'Invertir en Tokens', text: 'Si no quieres operar hardware, puedes comprar los tokens de los proyectos DePIN (HNT, HONEY, RENDER, IO). Es una apuesta en que la red va a crecer y generar más demanda del token. Los tokens DePIN tienden a estar más vinculados a métricas reales (número de dispositivos, revenue generado) que los memecoins—pero siguen siendo volátiles.' },
          { icon: Search, title: 'Evaluar Proyectos DePIN', text: 'Antes de participar, evalúa: (1) ¿Hay demanda real por el servicio? (mapeo, WiFi, GPU sí tienen demanda). (2) ¿El modelo económico es sostenible? (¿los ingresos de clientes pagan las recompensas?). (3) ¿Cuántos dispositivos activos hay? (más dispositivos = red más valiosa). (4) ¿El payback period del hardware es razonable? (menos de 12-18 meses idealmente).' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgos y Realidades de DePIN',
        content: 'DePIN es una de las narrativas más prometedoras de crypto, pero no está libre de riesgos:',
        features: [
          { icon: AlertTriangle, title: 'Sostenibilidad de las Recompensas', text: 'Muchos proyectos DePIN empiezan con recompensas generosas en tokens para atraer participantes. Pero si la demanda real del servicio no crece lo suficiente, las recompensas disminuyen y los operadores de hardware dejan de participar. Busca proyectos donde los ingresos de clientes reales (no solo emisión de tokens) financien las recompensas.' },
          { icon: TrendingDown, title: 'Riesgo de Hardware', text: 'Compras un hotspot de $500 esperando recuperar la inversión en 6 meses. Pero el token cae 70%, o la red cambia sus criterios de recompensa, y ahora tu ROI es de 3 años. El hardware es un costo hundido—no puedes "vender" un hotspot de Helium por lo que pagaste si el proyecto no funciona.' },
          { icon: Brain, title: 'Regulación', text: 'DePIN opera en áreas que a veces están reguladas (telecomunicaciones, mapeo, almacenamiento de datos). Un cambio regulatorio puede afectar significativamente la viabilidad de ciertos proyectos en ciertos países. Helium Mobile, por ejemplo, necesita permisos de telecomunicaciones que varían por jurisdicción.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'DePIN: El Puente entre Crypto y el Mundo Real',
        items: [
          'DePIN usa tokens para incentivar a personas a construir infraestructura física: redes WiFi (Helium), mapas (Hivemapper), computación GPU (Render), y más. Es crypto resolviendo problemas reales del mundo físico.',
          'Solana es el hogar de DePIN porque puede procesar millones de micro-transacciones de dispositivos IoT a costo casi cero. Helium migró a Solana específicamente por esta capacidad.',
          'Los proyectos principales: Helium (900,000+ hotspots en 180 países), Hivemapper (mapeo con dashcams), Render Network (GPU para rendering/IA), io.net (computación GPU para IA).',
          'Puedes participar operando hardware (comprar y operar dispositivos) o invirtiendo en tokens. Antes de comprar hardware, calcula el payback period y verifica que la demanda real del servicio justifique la inversión.',
          'El modelo DePIN crea un flywheel: más participantes → mejor servicio → más clientes → más demanda del token → más participantes. Los proyectos que alcanzan esta masa crítica escalan exponencialmente.',
          'Riesgos principales: recompensas en tokens pueden disminuir si la demanda real no crece, el hardware es un costo hundido difícil de recuperar, y la regulación puede afectar ciertos proyectos. Evalúa la sostenibilidad de los ingresos reales antes de comprometerte.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es DePIN y por qué es diferente a los proyectos crypto típicos?',
          options: [
            { id: 'a', text: 'Es un tipo de memecoin de moda' },
            { id: 'b', text: 'Son redes que usan incentivos en tokens para que personas comunes construyan infraestructura física real (WiFi, mapas, computación). A diferencia de DeFi o NFTs, DePIN crea valor en el mundo físico, no solo digital' },
            { id: 'c', text: 'Es un exchange descentralizado' },
            { id: 'd', text: 'Es solo un concepto teórico, no hay proyectos reales' }
          ],
          correctAnswer: 'b',
          explanation: 'DePIN es quizás la aplicación más concreta de blockchain en el mundo real. Helium tiene 900,000+ hotspots dando cobertura WiFi/5G. Hivemapper tiene millones de kilómetros mapeados. Render procesa trabajos de GPU reales para creadores y empresas de IA. Es infraestructura tangible construida por la gente, incentivada por tokens.'
        },
        {
          id: 'q2',
          question: '¿Por qué Solana es la blockchain preferida para proyectos DePIN?',
          options: [
            { id: 'a', text: 'Porque tiene el logo más bonito' },
            { id: 'b', text: 'Porque puede procesar millones de micro-transacciones de sensores y dispositivos IoT a costo casi cero ($0.001). Ethereum a $5-50 por transacción haría imposible la coordinación de redes con millones de dispositivos' },
            { id: 'c', text: 'Porque es la única blockchain que existe' },
            { id: 'd', text: 'Porque DePIN no necesita blockchain realmente' }
          ],
          correctAnswer: 'b',
          explanation: 'DePIN genera volúmenes enormes de micro-transacciones (cada dispositivo reporta datos, recibe recompensas, coordina con la red). A $0.001 por transacción en Solana, esto es viable. A $5+ por transacción en Ethereum, sería económicamente imposible. Helium migró de su propia chain a Solana específicamente por esta ventaja de costos y velocidad.'
        },
        {
          id: 'q3',
          question: 'Quieres participar en Hivemapper. Compras una dashcam por $300. ¿Qué deberías calcular antes?',
          options: [
            { id: 'a', text: 'Nada, es una inversión segura' },
            { id: 'b', text: 'El payback period: ¿cuántos tokens HONEY gano por kilómetro? ¿Cuánto vale HONEY actualmente? ¿Cuántos kilómetros conduzco al mes? ¿En cuántos meses recupero los $300 de la dashcam? Si el payback es mayor a 12-18 meses, quizás no vale la pena' },
            { id: 'c', text: 'Solo el precio del token HONEY' },
            { id: 'd', text: 'La cámara se paga sola en una semana' }
          ],
          correctAnswer: 'b',
          explanation: 'El hardware es un costo hundido—no puedes devolverlo si el proyecto no funciona. Calcular el payback period te dice si la inversión tiene sentido económico. Si conduces poco, vives en una zona ya mapeada, o HONEY baja de precio, tu ROI puede ser mucho peor de lo esperado. Haz los números antes de comprar.'
        },
        {
          id: 'q4',
          question: '¿Cuál es el mayor riesgo de participar en proyectos DePIN como operador de hardware?',
          options: [
            { id: 'a', text: 'Que el hardware se rompa' },
            { id: 'b', text: 'Que el token de recompensa pierda valor significativo, haciendo que tu payback period se extienda de meses a años. El hardware es un costo hundido que no puedes recuperar fácilmente' },
            { id: 'c', text: 'No hay riesgos, es ingreso pasivo garantizado' },
            { id: 'd', text: 'Que te roben el dispositivo' }
          ],
          correctAnswer: 'b',
          explanation: 'Si compras un hotspot de $500 y el token cae 80%, tu ROI pasa de "6 meses" a "3+ años". A diferencia de una inversión en tokens (que puedes vender), el hardware especializado de DePIN tiene valor de reventa limitado. Por eso es crucial evaluar la sostenibilidad del proyecto y sus ingresos reales (no solo las recompensas en tokens) antes de invertir en hardware.'
        },
        {
          id: 'q5',
          question: '¿Qué diferencia a un proyecto DePIN sostenible de uno que probablemente fracasará?',
          options: [
            { id: 'a', text: 'El que tenga el token con más hype' },
            { id: 'b', text: 'Un proyecto sostenible genera ingresos de clientes reales que pagan por el servicio, no solo de emisión de nuevos tokens. Si las recompensas vienen solo de inflación del token (sin ingresos reales), la economía colapsará eventualmente' },
            { id: 'c', text: 'El que tenga más dispositivos, sin importar los ingresos' },
            { id: 'd', text: 'Todos los proyectos DePIN son sostenibles por definición' }
          ],
          correctAnswer: 'b',
          explanation: 'La sostenibilidad de DePIN depende de que haya demanda real por el servicio. Helium tiene empresas pagando por cobertura. Render tiene creadores y empresas de IA pagando por GPU. Hivemapper tiene clientes de logística pagando por datos de mapeo. Si las recompensas solo vienen de imprimir más tokens (sin clientes reales), es un esquema insostenible que colapsará cuando la emisión se agote.'
        }
      ]
    }
  },
  32: {
    id: 32,
    title: 'Monolítico vs Modular: La Guerra de Arquitecturas',
    level: 'Avanzado',
    number: '9 de 11',
    duration: '30 min',
    type: 'Técnico',
    description: 'El debate más importante de la industria: ¿es mejor una blockchain monolítica ultra-rápida (Solana) o un ecosistema modular de capas especializadas (Ethereum + L2s)? Entiende los trade-offs para tomar mejores decisiones de inversión.',
    sections: [
      {
        type: 'intro',
        title: 'El Gran Debate de la Escalabilidad',
        content: 'Imagina que necesitas transportar a millones de personas por una ciudad. Hay dos filosofías: construir un **tren bala gigante** que lleva a todos en una sola línea ultra-rápida (Solana), o construir **muchas líneas de metro separadas** que se conectan entre sí con estaciones de transferencia (Ethereum + L2s). Cada enfoque tiene ventajas y desventajas fundamentales. Entender este debate no es solo académico—tiene implicaciones directas en tus decisiones de inversión y en qué ecosistema usas para DeFi. Solana apuesta por la arquitectura **monolítica**: una sola blockchain que hace todo (ejecución, consenso, almacenamiento) de forma ultra-rápida. Ethereum apuesta por la arquitectura **modular**: separar las funciones en capas especializadas (L2s para ejecución, L1 para seguridad). Ningún enfoque es "mejor" en absoluto—cada uno sacrifica algo para ganar algo diferente.',
        highlight: {
          title: 'Por Qué Importa para Ti',
          text: 'Como usuario de DeFi, la arquitectura afecta directamente tu experiencia: costos de transacción, velocidad, liquidez disponible, facilidad de uso, y riesgo de bridges. Como inversor, afecta qué ecosistema captura más valor a largo plazo. No es un debate teórico—es práctico.'
        }
      },
      {
        type: 'main',
        title: 'El Enfoque Monolítico: La Tesis de Solana',
        content: 'Solana cree que la mejor blockchain es una sola cadena que hace todo extraordinariamente rápido. En lugar de dividir el trabajo en capas, optimiza una sola capa para manejar todo:',
        features: [
          { icon: Zap, title: 'Velocidad Bruta', text: 'Solana procesa ~4,000 transacciones por segundo (TPS) en producción real, con una latencia de ~400 milisegundos. El objetivo es llegar a cientos de miles de TPS con Firedancer. Todo esto en una sola capa—sin necesidad de L2s, rollups, ni bridges. La experiencia del usuario es instantánea: haces un swap en Jupiter y el resultado aparece en menos de un segundo.' },
          { icon: Layers, title: 'Componibilidad Sincrónica', text: 'Esta es quizás la ventaja más poderosa de Solana. En una sola transacción atómica, puedes: hacer un swap en Jupiter + depositar en Kamino + stakear el resultado en Jito. Las tres operaciones ocurren instantáneamente en el mismo bloque. Si alguna falla, TODAS se revierten. Esto permite construir operaciones DeFi complejas que son imposibles cuando las apps están en diferentes L2s.' },
          { icon: Server, title: 'La Apuesta en Hardware', text: 'La filosofía de Solana es que el hardware mejora constantemente (Ley de Moore). En lugar de diseñar software complejo para dividir la carga, Solana diseña software que aprovecha al máximo el hardware más potente disponible. A medida que los procesadores y la fibra óptica mejoran, Solana automáticamente se vuelve más rápida—sin necesidad de rediseños complejos.' }
        ]
      },
      {
        type: 'main',
        title: 'El Enfoque Modular: La Tesis de Ethereum',
        content: 'Ethereum cree que una sola blockchain no puede escalar lo suficiente sin sacrificar descentralización. Su solución: separar las funciones en capas especializadas:',
        features: [
          { icon: Network, title: 'L1 + L2s: División del Trabajo', text: 'Ethereum L1 se especializa en seguridad y consenso. Las L2s (Arbitrum, Optimism, Base, zkSync) se especializan en ejecutar transacciones rápidamente y a bajo costo. Las L2s "publican" un resumen de sus transacciones en Ethereum L1, heredando su seguridad. Es como si cada L2 fuera una sucursal bancaria, y Ethereum L1 fuera la bóveda central.' },
          { icon: Shield, title: 'Máxima Descentralización en L1', text: 'Al mantener Ethereum L1 "lento" pero accesible (puedes correr un nodo en un laptop), maximizan la descentralización de la capa base. Cualquiera puede verificar la cadena. Los validadores de Solana necesitan hardware de $5,000-20,000+, lo que concentra la operación de nodos en manos de quienes pueden costear ese hardware.' },
          { icon: Layers, title: 'Rollups: El Mecanismo', text: 'Las L2s ejecutan miles de transacciones off-chain y luego comprimen un "proof" (prueba) que se publica en Ethereum L1. Hay dos tipos: Optimistic Rollups (Arbitrum, Base) que asumen que las transacciones son válidas a menos que alguien las dispute, y ZK Rollups (zkSync, StarkNet) que generan pruebas matemáticas de validez. Ambos reducen costos dramáticamente.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Monolítico (Solana) vs Modular (Ethereum + L2s)',
        leftSide: {
          title: 'Solana (Monolítico)',
          points: [
            'Una sola cadena rápida (~4,000 TPS, ~400ms)',
            'Toda la liquidez en un solo lugar',
            'Componibilidad sincrónica (operaciones atómicas complejas)',
            'Sin bridges ni fragmentación',
            'Requiere hardware potente para validadores',
            'Riesgo: si L1 tiene problemas, todo el ecosistema se detiene'
          ]
        },
        rightSide: {
          title: 'Ethereum + L2s (Modular)',
          points: [
            'Múltiples cadenas especializadas conectadas a L1',
            'Liquidez fragmentada entre L2s',
            'Componibilidad asíncrona (bridges lentos entre L2s)',
            'Necesita bridges (riesgosos) para mover entre capas',
            'Nodos L1 accesibles (laptop común)',
            'Riesgo: complejidad, fragmentación, y dependencia de bridges'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Problema de la Fragmentación',
        content: 'La mayor debilidad del enfoque modular se llama **fragmentación de liquidez**, y afecta directamente a los usuarios:',
        features: [
          { icon: AlertTriangle, title: 'Liquidez Dividida', text: 'Si tienes USDC en Arbitrum pero quieres usar un protocolo en Base, necesitas un bridge. Ese bridge puede tardar minutos o horas, cuesta fees adicionales, y tiene riesgo de hack (recordemos: los bridges han sido los mayores targets de hackeos). La liquidez de Ethereum está dividida entre 20+ L2s, lo que significa que cada pool individual tiene menos profundidad que si todo estuviera junto.' },
          { icon: Users, title: 'UX Complicada', text: 'Un usuario nuevo de Ethereum necesita decidir: ¿cuál L2 uso? ¿Arbitrum? ¿Base? ¿Optimism? Luego necesita hacer bridge de sus fondos. Luego descubre que el protocolo que quiere usar está en otra L2. Es una experiencia fragmentada y confusa. En Solana, todo está en un solo lugar: conectas Phantom a Jupiter y ya.' },
          { icon: Zap, title: 'La Ventaja de Solana Aquí', text: 'En Solana, toda la liquidez de DeFi está en una sola cadena. Cuando haces un swap en Jupiter, accedes a TODA la liquidez disponible. No hay que preocuparse por cuál L2 tiene más liquidez para tu par de tokens. Esta es una ventaja competitiva real que se traduce en mejor ejecución y menor slippage para los usuarios.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Debilidades de Cada Enfoque',
        content: 'Ningún enfoque es perfecto. Ser honesto sobre las debilidades te hace un mejor inversor y usuario:',
        features: [
          { icon: AlertTriangle, title: 'Debilidades de Solana', text: 'Ha tenido episodios de congestión y degradación de rendimiento (aunque las caídas completas son cosa del pasado). Los requisitos de hardware para validadores limitan quién puede operar un nodo, lo que afecta la descentralización. Si Solana L1 tiene un problema, no hay "escape" a otra capa—todo el ecosistema se ve afectado simultáneamente.' },
          { icon: AlertTriangle, title: 'Debilidades de Ethereum + L2s', text: 'La fragmentación de liquidez empeora con cada nueva L2 que se lanza. Los bridges son puntos de fallo costosos (billones perdidos en hacks). La experiencia de usuario es confusa para novatos. Y muchas L2s tienen centralization concerns: el "sequencer" que ordena transacciones a menudo es controlado por una sola empresa.' },
          { icon: Brain, title: 'La Realidad', text: 'Ambos enfoques están evolucionando. Solana trabaja en mejorar la resiliencia y descentralización. Ethereum trabaja en soluciones de interoperabilidad entre L2s (como "based rollups" y "chain abstraction"). El "ganador" no está decidido—y es posible que ambos coexistan sirviendo diferentes necesidades.' }
        ]
      },
      {
        type: 'main',
        title: 'Implicaciones para tu Estrategia',
        content: 'Entender estas arquitecturas tiene implicaciones prácticas directas:',
        features: [
          { icon: Wallet, title: 'Como Usuario de DeFi', text: 'Para la mayoría de usuarios, Solana ofrece la mejor experiencia HOY: todo en un solo lugar, fees de centavos, transacciones instantáneas, sin bridges. Si tu actividad principal es DeFi (swaps, LP, lending, staking), Solana elimina la complejidad. Ethereum + L2s tiene sentido si necesitas acceso a protocolos que solo existen allí (Aave, Uniswap v3 original, etc).' },
          { icon: BarChart3, title: 'Como Inversor', text: 'Si crees que la componibilidad y la liquidez unificada son las ventajas más importantes → Solana. Si crees que la descentralización máxima de la capa base y la diversidad de L2s son más importantes → Ethereum. La tesis de inversión depende de qué propiedad crees que captura más valor a largo plazo. Muchos inversores sofisticados tienen exposición a ambos.' },
          { icon: Globe, title: 'La Tercera Vía', text: 'Vale mencionar que otras blockchains exploran enfoques diferentes: Sui y Aptos (Move-based, parallelized), Cosmos (app-chains interconectadas), Polkadot (parachains). Pero en términos de ecosistema DeFi maduro y TVL, el debate principal sigue siendo Solana vs Ethereum.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Arquitecturas: Lo Esencial',
        items: [
          'Solana es monolítica: una sola cadena ultra-rápida (~4,000 TPS) donde todo ocurre en un solo lugar. Ventaja: componibilidad sincrónica, liquidez unificada, sin bridges. Debilidad: requisitos de hardware altos, riesgo concentrado.',
          'Ethereum es modular: L1 para seguridad + L2s para ejecución rápida. Ventaja: máxima descentralización en la capa base, diversidad de L2s. Debilidad: fragmentación de liquidez, bridges riesgosos, UX compleja.',
          'La componibilidad sincrónica de Solana permite operaciones DeFi complejas en una sola transacción atómica (swap + deposit + stake). Esto es imposible cuando las apps están en diferentes L2s.',
          'La fragmentación de liquidez es el mayor problema práctico del enfoque modular. Los usuarios deben elegir entre 20+ L2s y usar bridges para mover fondos—cada bridge es un punto de riesgo.',
          'Para DeFi activo, Solana ofrece la mejor experiencia de usuario hoy: todo en un solo lugar, sin complejidad de L2s. Ethereum + L2s tiene sentido para acceso a protocolos específicos que no existen en Solana.',
          'No hay "ganador" definitivo—ambos enfoques están evolucionando. Como inversor, tener exposición a ambos ecosistemas es una estrategia válida. Lo importante es entender los trade-offs de cada uno.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es la "componibilidad sincrónica" y por qué es la mayor ventaja de Solana?',
          options: [
            { id: 'a', text: 'Es la capacidad de Solana de ser compatible con Ethereum' },
            { id: 'b', text: 'La capacidad de ejecutar múltiples operaciones DeFi (swap + deposit + stake) en una sola transacción atómica instantánea. Si alguna falla, todas se revierten. Es imposible cuando las apps están en diferentes L2s' },
            { id: 'c', text: 'Es un tipo de consenso especial de Solana' },
            { id: 'd', text: 'Significa que Solana es compatible con todos los tokens' }
          ],
          correctAnswer: 'b',
          explanation: 'La componibilidad sincrónica permite construir operaciones DeFi complejas que serían imposibles en un ecosistema fragmentado. En una sola transacción de Solana, Jupiter puede encontrar la mejor ruta, ejecutar el swap, y depositar el resultado en Kamino. Si algún paso falla, todo se revierte limpiamente. En Ethereum + L2s, estas operaciones requerirían bridges y múltiples transacciones separadas.'
        },
        {
          id: 'q2',
          question: '¿Cuál es el mayor problema práctico del enfoque modular de Ethereum (L1 + L2s)?',
          options: [
            { id: 'a', text: 'Las transacciones son más lentas' },
            { id: 'b', text: 'La fragmentación de liquidez: los fondos y protocolos están repartidos entre 20+ L2s. Necesitas bridges (riesgosos y costosos) para mover fondos, y cada pool tiene menos liquidez que si todo estuviera junto' },
            { id: 'c', text: 'Ethereum es más caro que Solana' },
            { id: 'd', text: 'No tiene ningún problema, el enfoque modular es perfecto' }
          ],
          correctAnswer: 'b',
          explanation: 'Con 20+ L2s, la liquidez de Ethereum está dividida. Si un pool SOL-USDC tiene $100M de liquidez en Solana vs $20M repartidos entre Arbitrum ($8M), Base ($7M) y Optimism ($5M), los usuarios de Solana obtienen mejor ejecución. Además, mover fondos entre L2s requiere bridges—que son lentos, costosos, y el vector de ataque más explotado en crypto (Wormhole $320M, Ronin $625M).'
        },
        {
          id: 'q3',
          question: 'Quieres hacer un swap de SOL por USDC y luego depositar el USDC en lending. ¿Cómo se compara la experiencia en Solana vs Ethereum + L2?',
          options: [
            { id: 'a', text: 'Es igual en ambos' },
            { id: 'b', text: 'En Solana: una sola transacción atómica, <1 segundo, <$0.01. En Ethereum L2: necesitas verificar que ambos protocolos estén en la misma L2, si no, hacer bridge primero (minutos/horas + fees + riesgo), y luego dos transacciones separadas' },
            { id: 'c', text: 'Ethereum es más rápido porque tiene L2s' },
            { id: 'd', text: 'No se puede hacer en Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'Esta es la ventaja práctica de la componibilidad sincrónica. En Solana, Jupiter + Kamino pueden ejecutar ambas operaciones en una sola transacción. En el ecosistema Ethereum modular, primero debes asegurarte de que ambos protocolos estén en la misma L2. Si no, necesitas bridge (riesgo + tiempo + fees). Incluso si están en la misma L2, son dos transacciones separadas que no son atómicas.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la principal debilidad del enfoque monolítico de Solana?',
          options: [
            { id: 'a', text: 'Es lenta comparada con Ethereum' },
            { id: 'b', text: 'Los validadores necesitan hardware potente ($5,000-20,000+), lo que limita quién puede operar nodos y afecta la descentralización. Además, si L1 tiene un problema, todo el ecosistema se ve afectado simultáneamente' },
            { id: 'c', text: 'No tiene ninguna debilidad' },
            { id: 'd', text: 'Los fees son demasiado altos' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un trade-off real: Solana prioriza velocidad y componibilidad sobre descentralización máxima. Los requisitos de hardware significan que hay ~2,000 validadores (vs ~800,000 en Ethereum incluyendo nodos). Y al ser una sola cadena, si hay congestión o un problema técnico, todo DeFi de Solana se ve afectado al mismo tiempo. Ethereum mitiga esto con múltiples L2s independientes.'
        },
        {
          id: 'q5',
          question: 'Como inversor, ¿cómo afecta el debate monolítico vs modular a tu estrategia?',
          options: [
            { id: 'a', text: 'Solo debo invertir en Solana porque es mejor' },
            { id: 'b', text: 'Solo debo invertir en Ethereum porque tiene más historia' },
            { id: 'c', text: 'Si creo que la componibilidad y liquidez unificada capturan más valor, inclino hacia SOL. Si creo que la descentralización máxima y diversidad de L2s capturan más valor, inclino hacia ETH. Tener exposición a ambos es una estrategia válida' },
            { id: 'd', text: 'La arquitectura no afecta el precio de los tokens' }
          ],
          correctAnswer: 'c',
          explanation: 'Ambas tesis de inversión son legítimas. Solana apuesta a que la experiencia de usuario superior y la liquidez unificada atraerán más usuarios y actividad económica. Ethereum apuesta a que la descentralización máxima y la flexibilidad de L2s ganarán a largo plazo. Muchos inversores sofisticados mantienen exposición a ambos—porque no hay certeza de cuál enfoque "ganará", y es posible que ambos coexistan.'
        }
      ]
    }
  },
  33: {
    id: 33,
    title: 'Firedancer & El Futuro de Solana',
    level: 'Avanzado',
    number: '10 de 11',
    duration: '25 min',
    type: 'Futuro',
    description: 'Firedancer es la reescritura completa del software validador de Solana, construida por Jump Crypto—la firma de trading de alta frecuencia más sofisticada del mundo. Entiende por qué la diversidad de clientes es crucial para la seguridad, cómo Firedancer alcanzó 1 millón de TPS en pruebas de laboratorio, y qué significa esto para el futuro del ecosistema Solana junto con innovaciones como token extensions, compresión de estado y la expansión de la SVM.',
    sections: [
      {
        type: 'intro',
        title: 'La Evolución Más Importante de Solana',
        content: 'Bitcoin tiene mineros. Ethereum tiene clientes diversos. Y Solana, durante sus primeros años, tuvo **un solo cliente de software**: el código original escrito por Solana Labs (ahora mantenido por Anza como "Agave"). Esto significaba que un solo bug podía tumbar toda la red—y de hecho ocurrió varias veces en 2022. La solución no era parchar el código existente, sino construir uno completamente nuevo desde cero. Ahí entra **Firedancer**: un segundo cliente validador escrito en C por Jump Crypto, una de las firmas de trading de alta frecuencia más grandes del mundo. No es una mejora incremental—es una reimaginación completa de cómo debería funcionar un validador de blockchain.',
        highlight: {
          title: 'Por Qué Importa',
          text: 'Firedancer no solo hace a Solana más rápida—la hace más segura. Dos clientes independientes significan que un bug en uno no puede tumbar la red entera. Es la diferencia entre tener un motor de respaldo y volar sin paracaídas.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Es la Diversidad de Clientes?',
        content: 'Un "cliente" en blockchain es el software que los validadores ejecutan para procesar transacciones y mantener el consenso. Si todos corren el mismo software y ese software tiene un bug, TODA la red se cae. La diversidad de clientes es tener múltiples implementaciones independientes del mismo protocolo:',
        features: [
          { icon: Server, title: 'Agave (antes Solana Labs)', text: 'El cliente original de Solana, escrito en Rust, ahora mantenido por Anza. Es el que ha corrido la red desde el inicio. Robusto y probado en producción durante años, pero como único cliente, sus bugs eran bugs de toda la red. Cada caída histórica de Solana fue un bug de este cliente.' },
          { icon: Zap, title: 'Firedancer (Jump Crypto)', text: 'Reescritura completa en C, construida por ingenieros de trading de alta frecuencia que procesan millones de órdenes por segundo en mercados tradicionales. No comparte ni una línea de código con Agave, lo que significa que es virtualmente imposible que ambos tengan el mismo bug. Esto es diversidad real.' },
          { icon: Shield, title: 'La Lección de Ethereum', text: 'Ethereum tiene 5+ clientes (Geth, Nethermind, Besu, Erigon). Cuando Geth tuvo un bug crítico en 2023, los nodos corriendo otros clientes mantuvieron la red. Sin diversidad de clientes, Ethereum habría sufrido un fork no intencional. Solana está aprendiendo esta lección.' },
          { icon: Network, title: 'Frankendancer: El Paso Intermedio', text: 'Antes de lanzar Firedancer completo, Jump desplegó "Frankendancer"—una versión híbrida que usa el networking de Firedancer con la ejecución de Agave. Esto permitió probar componentes gradualmente en mainnet sin riesgo. Es como cambiar las ruedas de un auto en movimiento, una a la vez.' }
        ]
      },
      {
        type: 'main',
        title: 'Por Qué Jump Crypto Eligió C (No Rust)',
        content: 'La decisión de escribir Firedancer en C en lugar de Rust fue deliberada y controversial. C es un lenguaje de los años 70—¿por qué usarlo para la tecnología más avanzada de blockchain?',
        features: [
          { icon: Cpu, title: 'Control Total del Hardware', text: 'C permite acceso directo a la memoria y al hardware sin las abstracciones de lenguajes modernos. En trading de alta frecuencia, cada nanosegundo cuenta. Los ingenieros de Jump han pasado décadas optimizando código C para exprimir cada ciclo de CPU. Esa expertise ahora beneficia a Solana.' },
          { icon: Activity, title: 'Rendimiento Puro', text: 'En pruebas de laboratorio, Firedancer alcanzó más de 1 millón de transacciones por segundo—un orden de magnitud mayor que el cliente Agave. Aunque el rendimiento real en producción será menor (limitado por consenso y red), el headroom es enorme para el crecimiento futuro.' },
          { icon: Eye, title: 'Cero Dependencias Compartidas', text: 'Si Firedancer usara Rust (como Agave), podrían compartir librerías y dependencias—y también compartir bugs. Al usar C, cada bug de Firedancer es independiente de Agave y viceversa. Es diversidad de software en su forma más pura.' },
          { icon: Brain, title: 'Expertise de HFT', text: 'Jump Crypto mueve miles de millones en mercados financieros tradicionales. Su infraestructura de trading procesa información del mercado en microsegundos. El equipo de Firedancer incluye a los mismos ingenieros que construyen estos sistemas. Es como contratar a ingenieros de Fórmula 1 para construir tu motor.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Agave vs Firedancer: Comparación Técnica',
        leftSide: {
          title: 'Agave (Anza - Rust)',
          points: [
            'Lenguaje: Rust — seguridad de memoria garantizada por el compilador',
            'En producción desde 2020 con años de pruebas en mainnet',
            'TPS real en producción: ~2,000-4,000 transacciones por segundo',
            'Equipo: Anza (ex-Solana Labs), expertos en blockchain',
            'Ventaja: estabilidad probada y ecosistema de herramientas maduro',
            'Limitación: optimizaciones de rendimiento tienen techo por diseño original'
          ]
        },
        rightSide: {
          title: 'Firedancer (Jump - C)',
          points: [
            'Lenguaje: C — control total de memoria y hardware, máximo rendimiento',
            'En testing progresivo, Frankendancer ya corre en mainnet',
            'TPS en laboratorio: 1,000,000+ (rendimiento teórico máximo)',
            'Equipo: Jump Crypto, expertos en trading de alta frecuencia',
            'Ventaja: rendimiento extremo y diversidad real de código',
            'Limitación: C requiere gestión manual de memoria (más riesgo de bugs de seguridad)'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Futuro de Solana: Más Allá de Firedancer',
        content: 'Firedancer es solo una pieza del rompecabezas. Solana está evolucionando en múltiples frentes simultáneamente, construyendo la infraestructura para la próxima década:',
        features: [
          { icon: Layers, title: 'Token Extensions', text: 'Los tokens SPL "clásicos" son simples. Token Extensions añaden funcionalidad nativa: transferencias confidenciales (montos ocultos), fees de transferencia automáticos, metadatos on-chain, y hooks programables. Esto permite que instituciones financieras creen productos regulados directamente en Solana sin contratos inteligentes complejos.' },
          { icon: Globe, title: 'La SVM Más Allá de Solana', text: 'La Solana Virtual Machine (SVM) se está expandiendo a otros proyectos. Eclipse usa la SVM como capa de ejecución sobre Ethereum. Neon permite ejecutar contratos de Ethereum en Solana. La SVM se está convirtiendo en un estándar de ejecución, similar a cómo la EVM se expandió más allá de Ethereum.' },
          { icon: Smartphone, title: 'Solana Mobile y Blinks', text: 'Solana Actions y Blinks permiten ejecutar transacciones blockchain desde cualquier URL o QR code—sin necesidad de abrir una wallet. Imagina pagar en un restaurante escaneando un código, comprar un NFT desde Twitter, o recibir tu salario con un click. Es llevar Web3 a donde está la gente.' },
          { icon: Briefcase, title: 'Compresión de Estado', text: 'La compresión de estado reduce el costo de almacenar datos on-chain en 100-1000x. Esto hizo posible los compressed NFTs (cNFTs) que cuestan fracciones de centavo en lugar de dólares. La misma tecnología se está aplicando a tokens y cuentas, bajando drásticamente la barrera de entrada para proyectos nuevos.' }
        ]
      },
      {
        type: 'main',
        title: 'Gobernanza: Cómo Evoluciona Solana',
        content: 'A diferencia de proyectos con "fundadores todopoderosos", Solana tiene un proceso de gobernanza técnica cada vez más descentralizado. Los cambios al protocolo se proponen a través de **SIMDs** (Solana Improvement Documents):',
        features: [
          { icon: BookOpen, title: 'El Proceso SIMD', text: 'Cualquiera puede proponer un SIMD (similar a los BIPs de Bitcoin o EIPs de Ethereum). Se discute públicamente en GitHub, se revisa técnicamente, y requiere consenso de los validadores para implementarse. SIMDs importantes incluyen el mercado de fees dinámico, staking rewards, y cambios de inflación.' },
          { icon: Users, title: 'Validadores como Votantes', text: 'Los cambios de protocolo requieren que los validadores actualicen su software. Si un porcentaje suficiente no actualiza, el cambio no se activa. Esto da a los validadores (y por extensión a sus delegadores) poder real sobre la dirección del protocolo. Tu staking es indirectamente un voto.' },
          { icon: Target, title: 'La Ruta a Mayor Descentralización', text: 'Solana Foundation está reduciendo gradualmente su influencia sobre la red. El programa de delegación se está descentralizando, los validadores están más distribuidos geográficamente, y proyectos comunitarios como Marinade ayudan a distribuir el stake. El objetivo es que ninguna entidad pueda controlar la red.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgos y Desafíos Pendientes',
        content: 'Ser optimista sobre el futuro de Solana no significa ignorar los desafíos reales que enfrenta. Un inversor avanzado debe entender ambos lados:',
        features: [
          { icon: AlertTriangle, title: 'Centralización de Validadores', text: 'Aunque hay ~1,900 validadores, una porción significativa del stake está concentrada en pocos operadores grandes. Fundaciones y exchanges controlan un porcentaje desproporcionado. La descentralización real requiere que miles de validadores independientes tengan stake significativo—y eso toma tiempo.' },
          { icon: Clock, title: 'Ejecución del Roadmap', text: 'Firedancer lleva años en desarrollo. Token Extensions están disponibles pero la adopción es gradual. Cada innovación prometida necesita no solo construirse, sino también adoptarse masivamente. La historia de cripto está llena de roadmaps ambiciosos que nunca se completaron.' },
          { icon: TrendingDown, title: 'Competencia Creciente', text: 'Solana no es la única blockchain de alto rendimiento. Aptos y Sui (basadas en Move), Monad (EVM paralela), y los Layer 2 de Ethereum compiten por los mismos usuarios y desarrolladores. La ventaja de Solana (ecosistema + liquidez) es fuerte pero no permanente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Firedancer es una reescritura completa del validador de Solana en C por Jump Crypto, no una mejora incremental. Alcanzó 1M+ TPS en laboratorio y representa la mayor actualización de infraestructura en la historia de Solana.',
          'La diversidad de clientes (Agave + Firedancer) es crítica para la seguridad. Dos implementaciones independientes significan que un bug en una no puede tumbar toda la red. Ethereum demostró que esto funciona.',
          'Frankendancer fue el paso intermedio inteligente: componentes de Firedancer integrados gradualmente con Agave para probar en producción sin riesgo catastrófico.',
          'El futuro de Solana va más allá de velocidad: Token Extensions para instituciones, compresión de estado para reducir costos 1000x, la SVM expandiéndose a otras cadenas, y Blinks llevando transacciones a cualquier URL.',
          'La gobernanza a través de SIMDs da a validadores y la comunidad poder real sobre la evolución del protocolo. Tu staking es indirectamente un voto sobre el futuro de la red.',
          'Mantén perspectiva: los desafíos de centralización de validadores, la ejecución del roadmap, y la competencia creciente son reales. Optimismo informado, no ciego.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es Firedancer y quién lo construye?',
          options: [
            { id: 'a', text: 'Una actualización del cliente Agave construida por Anza' },
            { id: 'b', text: 'Una reescritura completa del validador de Solana en C, construida por Jump Crypto' },
            { id: 'c', text: 'Un nuevo token de gobernanza para Solana' },
            { id: 'd', text: 'Un Layer 2 de Solana construido por la Solana Foundation' }
          ],
          correctAnswer: 'b',
          explanation: 'Firedancer es un cliente validador completamente nuevo escrito en C por Jump Crypto (expertos en trading de alta frecuencia). No comparte código con el cliente original Agave y fue diseñado desde cero para rendimiento extremo.'
        },
        {
          id: 'q2',
          question: '¿Por qué es crucial tener dos clientes independientes (Agave y Firedancer)?',
          options: [
            { id: 'a', text: 'Para que los validadores puedan elegir el más barato' },
            { id: 'b', text: 'Porque la Solana Foundation lo requiere legalmente' },
            { id: 'c', text: 'Diversidad de clientes: si un software tiene un bug, la red sigue funcionando con el otro' },
            { id: 'd', text: 'Para duplicar la velocidad de la red automáticamente' }
          ],
          correctAnswer: 'c',
          explanation: 'La diversidad de clientes protege contra fallas sistémicas. Si todos corren el mismo software y tiene un bug, toda la red se cae. Con dos clientes independientes, un bug en uno no afecta al otro. Ethereum demostró este principio en 2023 cuando un bug en Geth no afectó a nodos corriendo otros clientes.'
        },
        {
          id: 'q3',
          question: '¿Qué fue "Frankendancer"?',
          options: [
            { id: 'a', text: 'El nombre original de Firedancer antes de su lanzamiento' },
            { id: 'b', text: 'Una versión híbrida que combinaba el networking de Firedancer con la ejecución de Agave para probar componentes gradualmente' },
            { id: 'c', text: 'Un fork no autorizado de Firedancer por la comunidad' },
            { id: 'd', text: 'Un testnet separado para pruebas de Firedancer' }
          ],
          correctAnswer: 'b',
          explanation: 'Frankendancer fue la estrategia de migración gradual: integrar componentes de Firedancer uno a uno en el cliente existente para probarlos en producción real sin riesgo catastrófico. Es como cambiar las ruedas de un auto en movimiento, una a la vez.'
        },
        {
          id: 'q4',
          question: '¿Qué son las Token Extensions de Solana?',
          options: [
            { id: 'a', text: 'Tokens que solo funcionan en Firedancer' },
            { id: 'b', text: 'Funcionalidad nativa añadida a tokens SPL: transferencias confidenciales, fees automáticos, metadatos on-chain y hooks programables' },
            { id: 'c', text: 'NFTs mejorados con animaciones' },
            { id: 'd', text: 'Un sistema de préstamos para tokens' }
          ],
          correctAnswer: 'b',
          explanation: 'Token Extensions amplían los tokens SPL con capacidades nativas como transferencias confidenciales (montos ocultos), fees de transferencia automáticos, y metadatos on-chain. Esto permite a instituciones crear productos financieros regulados directamente en Solana.'
        },
        {
          id: 'q5',
          question: '¿Cómo se gobiernan los cambios al protocolo de Solana?',
          options: [
            { id: 'a', text: 'La Solana Foundation decide todos los cambios unilateralmente' },
            { id: 'b', text: 'Se vota con tokens SOL en una dApp de gobernanza' },
            { id: 'c', text: 'A través de SIMDs: propuestas públicas que requieren consenso de los validadores para implementarse' },
            { id: 'd', text: 'Los holders de NFTs de Solana Monkey Business votan' }
          ],
          correctAnswer: 'c',
          explanation: 'Los SIMDs (Solana Improvement Documents) son propuestas públicas discutidas en GitHub. Los cambios de protocolo requieren que un porcentaje suficiente de validadores actualice su software. Esto da a los validadores—y por extensión a sus delegadores—poder real sobre la evolución de la red.'
        },
        {
          id: 'q6',
          question: '¿Cuál de estos es un desafío REAL que Solana aún enfrenta?',
          options: [
            { id: 'a', text: 'No tiene ningún desarrollador activo' },
            { id: 'b', text: 'Concentración significativa del stake en pocos validadores grandes y ejecución gradual de un roadmap ambicioso' },
            { id: 'c', text: 'No puede procesar más de 10 transacciones por segundo' },
            { id: 'd', text: 'Firedancer fue cancelado' }
          ],
          correctAnswer: 'b',
          explanation: 'A pesar del progreso enorme, Solana enfrenta desafíos reales: concentración del stake en pocos operadores, un roadmap ambicioso que requiere años de ejecución, y competencia creciente de Aptos, Sui, Monad y Layer 2s de Ethereum. Un inversor avanzado reconoce tanto las fortalezas como los desafíos.'
        }
      ]
    }
  },
  34: {
    id: 34,
    title: 'Seguridad Operacional Avanzada',
    level: 'Avanzado',
    number: '11 de 11',
    duration: '30 min',
    type: 'Seguridad',
    description: 'La diferencia entre perder todo y dormir tranquilo es tu modelo de seguridad operacional. Aprende la arquitectura de wallets que usan los profesionales: cold storage para ahorros, hot wallets para operar, y burner wallets para experimentar. Domina la gestión de permisos, la simulación de transacciones, la protección contra phishing y social engineering, y las mejores prácticas de seed phrase que separan a los principiantes de los veteranos.',
    sections: [
      {
        type: 'intro',
        title: 'La Verdad Incómoda de la Custodia Propia',
        content: 'En finanzas tradicionales, si hackean tu banco, el banco responde. Si te roban la tarjeta, el banco cancela los cargos. Hay una red de seguridad institucional. En cripto, **tú eres tu propio banco**—y eso incluye ser tu propio departamento de seguridad. La custodia propia es libertad, pero esa libertad viene con responsabilidad total. No hay número 1-800 para llamar si pierdes tus fondos. No hay botón de "revertir transacción". Cada año se pierden miles de millones de dólares en hacks, phishing, y errores humanos. La buena noticia: con un modelo de seguridad adecuado, puedes protegerte contra el 99% de las amenazas. La mala noticia: la mayoría de la gente no implementa ni el 10% de lo necesario.',
        highlight: {
          title: 'La Regla de Oro',
          text: 'La seguridad no es un producto—es un proceso. No se trata de comprar un hardware wallet y olvidarte. Se trata de hábitos diarios, arquitectura de wallets, y paranoia sana. Los millonarios cripto que sobreviven a cada ciclo no son los más inteligentes—son los más paranoicos con su seguridad.'
        }
      },
      {
        type: 'main',
        title: 'Arquitectura de Wallets: El Modelo de 3 Niveles',
        content: 'Los profesionales no usan UNA wallet para todo. Usan un sistema de niveles donde cada wallet tiene un propósito específico y un nivel de riesgo diferente. Piensa en esto como una fortaleza medieval con murallas concéntricas:',
        features: [
          { icon: Lock, title: 'Nivel 1: Cold Storage (La Bóveda)', text: 'Hardware wallet (Ledger, Trezor) que almacena el 80-90% de tu patrimonio. NUNCA se conecta a dApps. NUNCA firma transacciones de smart contracts. Solo recibe y envía a direcciones verificadas. Es como una caja fuerte bancaria—la abres solo cuando es absolutamente necesario.' },
          { icon: Wallet, title: 'Nivel 2: Hot Wallet Operativa', text: 'Phantom, Solflare, o similar en tu celular/computador con 5-15% de tu portafolio. La usas para operaciones rutinarias: swaps en Jupiter, staking, compras regulares. Si es comprometida, duele pero no es catastrófico. Trata de mantener solo lo que puedas permitirte perder.' },
          { icon: Zap, title: 'Nivel 3: Burner Wallets (Desechables)', text: 'Wallets temporales creadas para interactuar con dApps nuevas, mints de NFTs, airdrops sospechosos, o cualquier protocolo no verificado. Creas una, transfieres lo mínimo necesario, interactúas, y si todo sale bien, mueves los tokens a tu hot wallet. Si la burner es comprometida, pierdes centavos.' },
          { icon: Shield, title: 'La Separación es Clave', text: 'El error más común es usar la misma wallet para todo. Si tu wallet "de ahorro" aprueba un contrato malicioso en un mint de NFTs, pierdes TODOS tus ahorros. Con separación de niveles, cada interacción riesgosa solo expone una fracción de tu patrimonio. Es el principio del "compartimento estanco" de los submarinos.' }
        ]
      },
      {
        type: 'main',
        title: 'Gestión de Permisos y Aprobaciones',
        content: 'Cada vez que conectas tu wallet a una dApp y apruebas una transacción, potencialmente le das PERMISOS al smart contract. Algunos permisos son inofensivos. Otros pueden drenar tu wallet completa. Entender esto es la diferencia entre seguridad y catástrofe:',
        features: [
          { icon: AlertTriangle, title: 'Aprobaciones Infinitas: El Peligro Oculto', text: 'Muchas dApps solicitan "unlimited approval" (aprobación ilimitada) para que no tengas que aprobar cada transacción. Esto significa que el contrato puede gastar TODOS tus tokens de ese tipo en cualquier momento futuro. Si el contrato es hackeado o es malicioso, puede drenar tu balance completo sin que tú hagas nada más.' },
          { icon: RefreshCw, title: 'Revocación de Permisos', text: 'En Ethereum, herramientas como revoke.cash te permiten ver y revocar permisos antiguos. En Solana, es diferente: el modelo de aprobaciones es más seguro por diseño (las aprobaciones "delegadas" son menos comunes). Aun así, debes auditar regularmente qué aplicaciones tienen acceso a tus cuentas.' },
          { icon: Eye, title: 'Simulación de Transacciones', text: 'Antes de firmar cualquier transacción, Phantom y otras wallets te muestran una simulación de lo que hará. LEE ESTO. Si dice "Transfer all SOL to [dirección desconocida]", no firmes. Extensiones como Blowfish detectan transacciones maliciosas automáticamente antes de que las firmes.' },
          { icon: Search, title: 'Verificación de Contratos', text: 'Antes de interactuar con un smart contract nuevo, verifica: ¿Está auditado? ¿Es open source? ¿Cuánto tiempo lleva en producción? ¿Cuánto TVL tiene? Un contrato con $50M en TVL y auditorías de Certik/Ottersec es muy diferente a uno sin auditar desplegado hace 2 horas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Phishing vs Ataque Legítimo: Cómo Distinguirlos',
        leftSide: {
          title: 'Señales de Phishing/Scam',
          points: [
            'URLs con errores sutiles: "phantorn.app" en lugar de "phantom.app"',
            'DMs en Discord/Telegram ofreciendo "airdrops exclusivos" o "soporte técnico"',
            'Pop-ups urgentes: "Verifica tu wallet en 24h o perderás tus fondos"',
            'Solicitan seed phrase bajo cualquier pretexto (NINGÚN servicio legítimo la pide)',
            'Transacción pide aprobar un contrato que no reconoces en una URL sospechosa',
            'Ofertas de retorno garantizado: "Envía 1 SOL, recibe 2 SOL de vuelta"'
          ]
        },
        rightSide: {
          title: 'Interacciones Legítimas',
          points: [
            'URLs verificadas que escribes tú (no clicks en links), bookmarks guardados',
            'Comunicación solo por canales oficiales y verificados del proyecto',
            'Sin urgencia artificial—los protocolos serios no te presionan por tiempo',
            'NUNCA piden seed phrase. Solo firmas transacciones en tu wallet directamente',
            'Puedes verificar el contrato en un explorador de bloques antes de interactuar',
            'Transparencia: código open source, auditorías públicas, equipo conocido'
          ]
        }
      },
      {
        type: 'main',
        title: 'Protección de Seed Phrase: Nivel Avanzado',
        content: 'Tu seed phrase (12 o 24 palabras) es literalmente la llave maestra a todos tus fondos. Su protección debe ser proporcional a lo que guardas. Aquí las mejores prácticas que van más allá de lo básico:',
        features: [
          { icon: Lock, title: 'Almacenamiento Físico', text: 'NUNCA digitalmente (no fotos, no notas del celular, no email, no cloud). Escríbela en papel y guárdala en un lugar seguro. Para cantidades significativas, usa placas de metal grabadas (resisten fuego e inundaciones). Haz 2-3 copias en ubicaciones físicas diferentes—una en tu casa, otra con un familiar de confianza.' },
          { icon: Shield, title: 'División de la Seed (Shamir\'s Secret)', text: 'Para grandes cantidades, puedes dividir tu seed en partes usando Shamir\'s Secret Sharing. Por ejemplo: 3 partes donde necesitas 2 para reconstruir. Guardas una parte en tu casa, otra en una caja de seguridad bancaria, y otra con un familiar. Ninguna parte por sí sola revela la seed completa.' },
          { icon: AlertTriangle, title: 'Social Engineering', text: 'El vector de ataque más subestimado. No publiques en redes sociales cuánto cripto tienes. No hables de tus holdings en público. El "ataque de llave de $5" (alguien te amenaza físicamente para que entregues tu seed) es real. La discreción es tu mejor defensa. Si nadie sabe que tienes cripto, nadie puede amenazarte por ello.' },
          { icon: Brain, title: 'Plan de Herencia', text: 'Si te pasa algo, ¿tu familia puede acceder a tus fondos? Sin un plan, tu cripto se pierde para siempre. Opciones: instrucciones selladas con un abogado, un familiar de confianza con una de las partes Shamir, o servicios como Casa que ofrecen planes de herencia para cripto. Es incómodo de pensar, pero es responsabilidad.' }
        ]
      },
      {
        type: 'main',
        title: 'Checklist de Seguridad Diaria',
        content: 'La seguridad no es un evento único—es un hábito. Estos son los chequeos y prácticas que debes incorporar a tu rutina cripto:',
        features: [
          { icon: Smartphone, title: 'Dispositivo Dedicado', text: 'Idealmente, usa un dispositivo separado (tablet vieja, computador secundario) exclusivamente para cripto. Sin redes sociales, sin descargas aleatorias, sin extensiones innecesarias del navegador. Si no es posible, al menos usa un perfil de navegador separado exclusivo para cripto con solo las extensiones de wallet necesarias.' },
          { icon: Globe, title: 'VPN y DNS', text: 'Usa una VPN confiable cuando operas desde redes públicas (cafeterías, aeropuertos). Considera un DNS privado. Nunca operes cripto desde WiFi público sin VPN. Un atacante en la misma red puede interceptar tu tráfico y redirigirte a sitios de phishing.' },
          { icon: CheckCircle, title: 'Verificación Pre-Transacción', text: 'Antes de CADA transacción significativa: (1) Verifica la URL manualmente, (2) Lee la simulación en tu wallet, (3) Confirma la dirección de destino carácter por carácter, (4) Empieza con una transacción pequeña de prueba. Sí, es tedioso. También lo es perder $50,000 por un typo.' },
          { icon: RefreshCw, title: 'Auditoría Periódica', text: 'Una vez al mes: revisa qué dApps tienen permisos sobre tus wallets, verifica que tu hardware wallet tiene firmware actualizado, confirma que tus backups de seed phrases están intactos y accesibles, y revisa si algún protocolo que usas ha sido comprometido recientemente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Usa el modelo de 3 niveles: Cold Storage (80-90% en hardware wallet), Hot Wallet (5-15% para operaciones), Burner Wallets (mínimo para experimentar). La separación de fondos es tu defensa principal contra pérdidas catastróficas.',
          'Las aprobaciones ilimitadas de smart contracts son un vector de ataque grave. Lee siempre la simulación antes de firmar, revoca permisos que no uses, y nunca apruebes transacciones que no entiendas completamente.',
          'Tu seed phrase es sagrada: almacenamiento físico (nunca digital), múltiples copias en ubicaciones diferentes, y para grandes cantidades considera Shamir\'s Secret Sharing para dividirla en partes.',
          'La discreción es seguridad. No publiques tus holdings, no hables de cripto con extraños, y ten un plan de herencia para que tus fondos no se pierdan si te pasa algo.',
          'Desarrolla hábitos de seguridad: dispositivo dedicado para cripto, VPN en redes públicas, verificación manual de cada URL y cada dirección, y transacciones de prueba antes de enviar montos grandes.',
          'El phishing es la amenaza #1 para el usuario promedio. Nadie legítimo te pedirá tu seed phrase. Ningún airdrop real requiere que "conectes tu wallet" a un link de DM. Si suena demasiado bueno para ser verdad, es una estafa.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes $80,000 en cripto. ¿Cuál es la mejor arquitectura de wallets?',
          options: [
            { id: 'a', text: 'Todo en Phantom en tu celular para acceso rápido' },
            { id: 'b', text: 'Cold storage (Ledger) para 80-90%, hot wallet para operaciones, burner wallets para dApps nuevas' },
            { id: 'c', text: 'Todo en tu cuenta de Binance porque tiene seguro' },
            { id: 'd', text: 'Dividido en partes iguales entre 20 wallets diferentes' }
          ],
          correctAnswer: 'b',
          explanation: 'El modelo de 3 niveles separa tu patrimonio por nivel de riesgo. La mayoría va a cold storage (hardware wallet desconectada de internet), una parte operativa en hot wallet, y wallets desechables para experimentar. Si hackean tu burner wallet, solo pierdes centavos.'
        },
        {
          id: 'q2',
          question: 'Una dApp te pide "unlimited approval" para gastar tus USDC. ¿Qué significa esto?',
          options: [
            { id: 'a', text: 'Solo puede usar los USDC que tú envíes manualmente a la dApp' },
            { id: 'b', text: 'El contrato puede gastar TODOS tus USDC de esa wallet en cualquier momento, sin pedir permiso adicional' },
            { id: 'c', text: 'Es un requisito técnico sin riesgo real' },
            { id: 'd', text: 'Solo aprueba el gasto para esa transacción específica' }
          ],
          correctAnswer: 'b',
          explanation: 'Una aprobación ilimitada (unlimited approval) le da al smart contract permiso para gastar todos tus tokens de ese tipo. Si el contrato es hackeado o resulta malicioso, puede drenar tu balance completo sin interacción adicional. Por eso es importante revocar permisos que ya no uses.'
        },
        {
          id: 'q3',
          question: 'Recibes un DM en Discord: "Eres elegible para un airdrop exclusivo. Conecta tu wallet aquí: [link]". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Conectas tu wallet principal para no perder el airdrop' },
            { id: 'b', text: 'Conectas tu burner wallet por si acaso es real' },
            { id: 'c', text: 'Ignoras completamente—los airdrops legítimos nunca se distribuyen por DM ni requieren conectar wallet a links aleatorios' },
            { id: 'd', text: 'Le pides más información al remitente para verificar' }
          ],
          correctAnswer: 'c',
          explanation: 'Los DMs con "airdrops exclusivos" son una de las formas más comunes de phishing en cripto. Ningún proyecto legítimo distribuye airdrops por DM. Los airdrops reales se reclaman en el sitio oficial del proyecto. Incluso conectar una burner wallet a un sitio de phishing puede exponer información o crear hábitos peligrosos.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la forma más segura de almacenar tu seed phrase?',
          options: [
            { id: 'a', text: 'Screenshot guardado en Google Photos para tener backup en la nube' },
            { id: 'b', text: 'En un documento encriptado en tu computador' },
            { id: 'c', text: 'Escrita en papel o grabada en placa de metal, con 2-3 copias en ubicaciones físicas diferentes' },
            { id: 'd', text: 'Memorizada sin ningún respaldo físico' }
          ],
          correctAnswer: 'c',
          explanation: 'La seed phrase debe almacenarse exclusivamente de forma física (nunca digital). El papel funciona, pero placas de metal resisten fuego e inundaciones. Múltiples copias en ubicaciones separadas protegen contra desastres locales. Las opciones digitales (fotos, cloud, documentos) son vulnerables a hackeos.'
        },
        {
          id: 'q5',
          question: '¿Qué es Shamir\'s Secret Sharing y cuándo usarlo?',
          options: [
            { id: 'a', text: 'Un protocolo DeFi para compartir rendimientos entre wallets' },
            { id: 'b', text: 'Un método para dividir la seed phrase en N partes donde necesitas M partes para reconstruirla, útil para proteger grandes cantidades' },
            { id: 'c', text: 'Una forma de compartir tu seed phrase con tu familia por email de forma segura' },
            { id: 'd', text: 'Un servicio de custodia centralizado para cripto' }
          ],
          correctAnswer: 'b',
          explanation: 'Shamir\'s Secret Sharing divide tu seed en N partes donde necesitas M para reconstruirla (ej: 3 partes, necesitas 2). Ninguna parte sola revela la seed. Es ideal para grandes cantidades: guardas partes en diferentes ubicaciones/personas. Si pierdes una parte, las otras dos aún pueden restaurar tus fondos.'
        },
        {
          id: 'q6',
          question: 'Antes de firmar una transacción significativa, ¿cuál es el procedimiento correcto?',
          options: [
            { id: 'a', text: 'Firmar rápido para que no expire la transacción' },
            { id: 'b', text: 'Solo verificar que el monto sea correcto' },
            { id: 'c', text: 'Verificar la URL manualmente, leer la simulación, confirmar dirección carácter por carácter, y enviar una transacción de prueba pequeña primero' },
            { id: 'd', text: 'Preguntar en Twitter si el protocolo es seguro' }
          ],
          correctAnswer: 'c',
          explanation: 'La verificación pre-transacción incluye múltiples pasos: URL correcta (no phishing), simulación de la wallet (qué hará la transacción), dirección de destino verificada carácter por carácter (existen ataques de "clipboard poisoning"), y una transacción de prueba pequeña antes de enviar montos grandes.'
        }
      ]
    }
  },
  39: {
    id: 39,
    title: 'Gasta tus Cripto',
    level: 'Principiante',
    number: '15 de 19',
    duration: '25 min',
    type: 'Herramientas',
    description: 'El círculo completo: de fiat a cripto, de cripto a gastos reales. Cómo usar tarjetas cripto para vivir sin depender de bancos tradicionales.',
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
        title: 'El Sueño: Vivir en Cripto',
        content: 'Aprendiste a comprar cripto. Aprendiste a guardarlo de forma segura. Aprendiste a moverlo. Ahora viene la pregunta final: ¿cómo lo USAS en el mundo real? La respuesta tradicional era: "vende en un exchange, retira a tu banco, y gasta el fiat". Pero esto tiene problemas: fees de venta, tiempos de espera, límites bancarios, y preguntas incómodas de tu banco sobre "de dónde viene ese dinero". Las **tarjetas cripto** eliminan todo eso. Cargas tu tarjeta con USDC o stablecoins, y la usas como cualquier Visa/Mastercard. Amazon, Netflix, gasolina, supermercado—funciona en cualquier lugar.',
        highlight: {
          title: 'El Ciclo Completo',
          text: 'Fiat → Exchange → Cripto → Tu Wallet → Tarjeta Cripto → Gastos Reales. Todo sin volver a pasar por tu banco tradicional. Sin pedir permiso. Sin límites arbitrarios. Tu dinero, tus reglas.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan las Tarjetas Cripto?',
        content: 'Las tarjetas cripto actúan como un puente entre el mundo blockchain y el sistema de pagos tradicional:',
        features: [
          { icon: Wallet, title: 'La Mecánica', text: 'Tú cargas la tarjeta con cripto (usualmente stablecoins como USDC). Cuando pagas en una tienda, la tarjeta convierte automáticamente tu cripto a la moneda local (pesos, dólares) al momento del pago. El comercio recibe fiat normal.' },
          { icon: Globe, title: 'Aceptación Universal', text: 'Estas tarjetas son Visa o Mastercard reales. Funcionan en CUALQUIER lugar que acepte tarjetas: tiendas físicas, comercio online, cajeros automáticos, pagos de servicios, suscripciones.' },
          { icon: Zap, title: 'Sin Intermediarios Bancarios', text: 'No necesitas tener una cuenta bancaria en algunos casos. Cargas directamente desde tu wallet a la tarjeta. Eliminas al banco como intermediario.' }
        ]
      },
      {
        type: 'main',
        title: 'Opciones de Tarjetas para Latinoamérica',
        content: 'No todas las tarjetas cripto funcionan en LATAM. Estas son las mejores opciones actualmente:',
        features: [
          { icon: Banknote, title: 'Kast', text: 'Tarjeta virtual y física que acepta USDC y USDT. Funciona en la mayoría de países LATAM. Recarga directamente desde Solana. Sin fees de recarga. Buena opción para comenzar.' },
          { icon: Banknote, title: 'Avici', text: 'Tarjeta premium con beneficios adicionales. Acepta múltiples criptomonedas. Buen servicio al cliente en español. Disponible en varios países latinoamericanos.' },
          { icon: Banknote, title: 'Binance Card', text: 'Si ya usas Binance, puedes solicitar su tarjeta. Convierte automáticamente desde tu balance del exchange. Disponibilidad limitada según país.' }
        ]
      },
      {
        type: 'main',
        title: '¿Por Qué Gastar Stablecoins y NO Bitcoin/SOL?',
        content: 'Esta es una decisión estratégica importante que muchos nuevos usuarios no consideran:',
        features: [
          { icon: TrendingUp, title: 'El Problema de Gastar Activos Volátiles', text: 'Imagina que gastas 1 SOL ($150) en cena. Un mes después, SOL vale $300. Acabas de pagar $300 por una cena de $150. Este "dolor" psicológico es real y tiene nombre: la "pizza de 10,000 BTC" de Laszlo Hanyecz.' },
          { icon: Shield, title: 'Stablecoins: El Dinero para Gastar', text: 'USDC siempre vale ~$1. No hay volatilidad. Gastar 100 USDC hoy es gastar $100, sin importar qué pase con el mercado mañana. Son perfectos para gastos diarios.' },
          { icon: PiggyBank, title: 'La Estrategia Óptima', text: 'HODL tus BTC/SOL/ETH como inversión de largo plazo. Convierte a stablecoins SOLO lo que planeas gastar en el corto plazo. Carga tu tarjeta cripto con stablecoins. Así nunca "gastas" tu inversión.' }
        ],
        highlight: {
          title: 'Regla de Oro',
          text: 'Bitcoin y SOL son para AHORRAR. Stablecoins son para GASTAR. No mezcles los dos. Cuando necesites dinero para gastos, convierte de tu "stack de ahorro" a stablecoins, y de ahí a tu tarjeta.'
        }
      },
      {
        type: 'main',
        title: 'El Proceso: De tu Wallet a Gastos Reales',
        content: 'Así funciona el flujo completo para gastar tu cripto:',
        features: [
          { icon: Wallet, title: 'Paso 1: Tienes USDC en Phantom', text: 'Ya sea porque compraste USDC directamente, o porque vendiste algo de SOL por USDC en Jupiter. Tienes stablecoins listos para gastar.' },
          { icon: Banknote, title: 'Paso 2: Carga tu Tarjeta Cripto', text: 'Desde la app de Kast/Avici, obtienes una dirección de depósito. Envías USDC desde Phantom a esa dirección. En minutos, el balance aparece en tu tarjeta.' },
          { icon: Zap, title: 'Paso 3: Usa tu Tarjeta', text: 'Paga en cualquier comercio físico u online que acepte Visa/Mastercard. La conversión a moneda local es automática e instantánea.' },
          { icon: CheckCircle, title: 'Paso 4: Verifica tu Balance', text: 'En la app de la tarjeta ves el historial de gastos y el balance restante. Recarga cuando necesites más.' }
        ]
      },
      {
        type: 'main',
        title: 'Consideraciones Importantes',
        content: 'Antes de lanzarte a gastar, ten en cuenta estos puntos:',
        features: [
          { icon: AlertTriangle, title: 'Impuestos', text: 'En muchos países, convertir cripto a fiat (incluso vía tarjeta) puede ser un evento taxable. Consulta las regulaciones de tu país. Guarda registros de tus transacciones.' },
          { icon: Percent, title: 'Fees', text: 'Las tarjetas pueden cobrar fees de recarga, de transacción, o de conversión de moneda. Compara opciones. Algunas tarjetas ofrecen cashback que compensa los fees.' },
          { icon: Shield, title: 'Límites', text: 'Cada tarjeta tiene límites diarios/mensuales de gasto y retiro en cajeros. Verifica que se ajusten a tu uso esperado antes de elegir.' },
          { icon: Globe, title: 'Disponibilidad Geográfica', text: 'No todas las tarjetas funcionan en todos los países. Verifica disponibilidad en tu país antes de aplicar.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Cerrando el Ciclo',
        items: [
          'Las tarjetas cripto te permiten gastar tus activos digitales en el mundo real sin pasar por bancos tradicionales.',
          'Funcionan como Visa/Mastercard normales—aceptadas en millones de comercios mundialmente.',
          'Gasta STABLECOINS (USDC), no activos volátiles (BTC, SOL). Los stablecoins son para gastar, las criptos volátiles son para ahorrar.',
          'El proceso: Phantom → App de tarjeta cripto → Gastos reales. Sin intermediarios bancarios.',
          'Considera impuestos, fees, y límites antes de elegir tu tarjeta.',
          'Con esto completas el ciclo: entrada al mundo cripto, custodia segura, y ahora salida práctica para uso diario.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes 1000 USDC en tu Phantom y quieres comprar algo en Amazon. ¿Cuál es el proceso?',
          options: [
            { id: 'a', text: 'Amazon acepta USDC directamente, solo pegas tu dirección de wallet' },
            { id: 'b', text: 'Cargas una tarjeta cripto (Kast, Avici) con tu USDC, y usas esa tarjeta para pagar en Amazon como cualquier Visa/Mastercard' },
            { id: 'c', text: 'Necesitas vender en un exchange y esperar 5 días para tener el dinero en tu banco' },
            { id: 'd', text: 'No es posible gastar cripto en el mundo real' }
          ],
          correctAnswer: 'b',
          explanation: 'Las tarjetas cripto actúan como puente: tú les cargas cripto, ellas pagan al comercio en fiat. Amazon nunca sabe que usaste cripto—reciben pesos/dólares normales de una tarjeta Visa/Mastercard.'
        },
        {
          id: 'q2',
          question: 'Tienes 5 SOL (valor actual $750). ¿Por qué NO es recomendable gastar SOL directamente?',
          options: [
            { id: 'a', text: 'SOL es muy lento para pagos' },
            { id: 'b', text: 'SOL es volátil—si gastas 1 SOL hoy y mañana vale el doble, efectivamente pagaste el doble por tu compra. Es mejor gastar stablecoins y guardar SOL como inversión.' },
            { id: 'c', text: 'Las tarjetas cripto no aceptan SOL' },
            { id: 'd', text: 'SOL no tiene valor real' }
          ],
          correctAnswer: 'b',
          explanation: 'Este es el "problema de la pizza de Bitcoin". Gastar activos que pueden apreciarse duele psicológicamente. La estrategia óptima: HODL cripto volátil, gasta stablecoins para compras diarias.'
        },
        {
          id: 'q3',
          question: '¿Cuál es la diferencia entre gastar con una tarjeta cripto vs vender en exchange y retirar a tu banco?',
          options: [
            { id: 'a', text: 'No hay diferencia, es lo mismo' },
            { id: 'b', text: 'La tarjeta cripto es más rápida (minutos vs días), evita tu banco tradicional, y usualmente tiene menos burocracia y preguntas sobre origen de fondos' },
            { id: 'c', text: 'Vender en exchange es más rápido' },
            { id: 'd', text: 'Las tarjetas cripto son ilegales' }
          ],
          correctAnswer: 'b',
          explanation: 'Retirar a banco puede tomar días, generar preguntas de compliance bancario, y tiene límites. Las tarjetas cripto eliminan al banco como intermediario—cargas y gastas en minutos.'
        },
        {
          id: 'q4',
          question: 'Quieres empezar a usar una tarjeta cripto en Colombia. ¿Qué debes verificar primero?',
          options: [
            { id: 'a', text: 'Que la tarjeta sea de color bonito' },
            { id: 'b', text: 'Disponibilidad en tu país, fees de recarga/transacción, límites de gasto, y métodos de recarga aceptados' },
            { id: 'c', text: 'Solo que acepte Bitcoin' },
            { id: 'd', text: 'Nada, todas funcionan igual en todos los países' }
          ],
          correctAnswer: 'b',
          explanation: 'No todas las tarjetas operan en todos los países. Los fees, límites, y criptos aceptados varían. Investiga antes de aplicar para evitar sorpresas.'
        },
        {
          id: 'q5',
          question: 'Estrategia óptima: tienes 10 SOL + 500 USDC. ¿Cómo los usas?',
          options: [
            { id: 'a', text: 'Gasto todo el SOL primero porque vale más' },
            { id: 'b', text: 'Convierto todo a USDC y lo gasto' },
            { id: 'c', text: 'HODL el SOL como inversión de largo plazo. Uso los 500 USDC para cargar mi tarjeta cripto y gastos diarios. Si necesito más, convierto pequeñas cantidades de SOL a USDC.' },
            { id: 'd', text: 'Guardo todo y nunca gasto' }
          ],
          correctAnswer: 'c',
          explanation: 'Separar "dinero de inversión" (SOL) de "dinero de gasto" (USDC) es la estrategia profesional. Nunca gastas tu inversión directamente—solo conviertes lo necesario para gastos puntuales.'
        }
      ]
    }
  },
  41: {
    id: 41,
    title: 'Stablecoins: Tu Dólar Digital',
    level: 'Principiante',
    number: '16 de 19',
    duration: '22 minutos',
    type: 'Concepto Clave',
    description: 'Las stablecoins son la herramienta cripto más usada en Latinoamérica—pero la mayoría no entiende qué las respalda, ni los riesgos que esconden. Esta lección puede ahorrarte un desastre financiero.',
    sections: [
      {
        type: 'intro',
        title: 'El Dólar que Vive en la Blockchain',
        content: 'Tienes SOL, BTC, ETH... pero necesitas pagar el arriendo. El precio de tus criptos puede caer 30% mañana. ¿Cómo proteges tu dinero sin salir del ecosistema cripto? La respuesta son las **stablecoins**: tokens diseñados para mantener un valor estable, generalmente anclados 1:1 al dólar estadounidense. 1 USDC = 1 dólar. 1 USDT = 1 dólar. Siempre. Esa es la promesa. En Latinoamérica, las stablecoins se han convertido en algo más que una herramienta de trading. Son la forma más accesible de **dolarizarse** sin necesidad de una cuenta bancaria en Estados Unidos, sin límites de compra de dólares, y sin intermediarios que te cobren spreads abusivos. Un argentino con cepo cambiario, un venezolano con el bolívar destruido, un colombiano que quiere proteger sus pesos—todos usan stablecoins como su cuenta de ahorro en dólares.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'Latinoamérica es la región que más usa stablecoins per cápita en el mundo. No para especular—para SOBREVIVIR. Cuando tu moneda local pierde valor cada semana, tener dólares digitales en tu wallet no es un lujo, es una necesidad.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan? Los 3 Tipos de Stablecoins',
        content: 'No todas las stablecoins son iguales. El mecanismo que mantiene su precio estable determina qué tan seguras son realmente:',
        features: [
          { icon: Landmark, title: 'Respaldadas por Reservas (USDC, USDT)', text: 'Una empresa tiene dólares reales (o bonos del tesoro) en un banco. Por cada token que emite, tiene $1 en reserva. Cuando quieres canjear tus USDC por dólares, Circle (la empresa detrás de USDC) quema el token y te da el dólar. Es el modelo más simple y el más usado.' },
          { icon: Lock, title: 'Sobrecolateralizadas (DAI)', text: 'No dependen de una empresa. Usas cripto como garantía (por ejemplo, depositas $150 en ETH para generar $100 en DAI). Si tu garantía baja de valor, se liquida automáticamente. Más descentralizadas, pero más complejas de usar.' },
          { icon: AlertTriangle, title: 'Algorítmicas (UST/Luna - COLAPSÓ)', text: 'Usaban código y arbitraje de mercado para mantener el precio. Sin respaldo real. Cuando el mecanismo falló en mayo 2022, UST perdió su paridad y cayó a $0. $40 MIL MILLONES desaparecieron en una semana. Personas perdieron los ahorros de toda su vida.' }
        ]
      },
      {
        type: 'main',
        title: 'USDC vs USDT: La Batalla de los Gigantes',
        content: 'Son las dos stablecoins más grandes del mundo. Las usarás constantemente. Pero tienen diferencias importantes que debes entender:',
        features: [
          { icon: Shield, title: 'USDC (Circle)', text: 'Emitido por Circle, empresa regulada en Estados Unidos. Auditorías mensuales públicas. Reservas en bonos del Tesoro de USA y efectivo en bancos regulados. Es la opción más transparente y la preferida por instituciones. Disponible en Solana, Ethereum, y múltiples redes.' },
          { icon: Globe, title: 'USDT (Tether)', text: 'El más usado del mundo por volumen. Emitido por Tether Limited (Hong Kong). Historial de controversias sobre la composición real de sus reservas—durante años se negaron a hacer auditorías completas. Han mejorado su transparencia, pero la confianza del mercado es menor que en USDC. La ventaja: tiene más liquidez y está en más exchanges y redes.' },
          { icon: AlertTriangle, title: 'El Riesgo de Ambas', text: 'Las dos dependen de una EMPRESA centralizada. Si Circle o Tether quiebran, si un regulador las cierra, o si los bancos donde tienen reservas fallan, tu stablecoin podría perder su paridad. En marzo 2023, USDC cayó temporalmente a $0.87 cuando Silicon Valley Bank (donde Circle tenía $3.3 mil millones) colapsó. Se recuperó en días, pero el susto fue real.' }
        ]
      },
      {
        type: 'comparison',
        title: 'USDC vs USDT: ¿Cuál Usar?',
        leftSide: {
          title: 'USDC (Circle)',
          points: [
            'Auditorías mensuales por Deloitte',
            'Reservas 100% en bonos del Tesoro + efectivo',
            'Empresa regulada en USA',
            'Puede congelar direcciones por orden legal',
            'Mejor para ahorros y confianza',
            'Ligeramente menos liquidez que USDT'
          ]
        },
        rightSide: {
          title: 'USDT (Tether)',
          points: [
            'Auditorías trimestrales (más recientes)',
            'Reservas diversificadas (bonos, BTC, oro, préstamos)',
            'Empresa offshore en Hong Kong',
            'También puede congelar direcciones',
            'Mayor liquidez y adopción global',
            'Historial de opacidad en reservas'
          ]
        }
      },
      {
        type: 'main',
        title: 'La Catástrofe de UST/Luna: La Lección Más Cara de la Historia',
        content: 'En mayo de 2022, el mundo cripto vivió su peor catástrofe. **UST** era una stablecoin algorítmica "anclada" al dólar, respaldada por un mecanismo de acuñación y quema con su token hermano **LUNA**. El sistema funcionó durante meses. Miles de personas depositaron sus ahorros en Anchor Protocol, que prometía 20% anual en UST. Parecía dinero fácil. Hasta que dejó de funcionar.',
        features: [
          { icon: TrendingDown, title: 'El Colapso', text: 'Una venta masiva de UST rompió el mecanismo de arbitraje. UST perdió su paridad con el dólar. El protocolo intentó salvar UST imprimiendo más LUNA, lo que destruyó el precio de LUNA. Espiral de muerte: UST cae → se imprime más LUNA → LUNA cae → más pánico → UST cae más. En 72 horas, $40 mil millones se evaporaron.' },
          { icon: AlertTriangle, title: 'Las Víctimas', text: 'Hubo reportes de suicidios. Personas en Corea del Sur perdieron los ahorros de toda su familia. Jubilados que depositaron todo en Anchor por el 20% de "rendimiento seguro". El fundador Do Kwon fue arrestado meses después en Montenegro intentando huir con pasaportes falsos.' },
          { icon: Shield, title: 'La Lección Permanente', text: 'Si un rendimiento parece demasiado bueno para ser verdad, lo es. 20% anual "sin riesgo" no existe. Las stablecoins algorítmicas sin respaldo real son castillos de naipes. SIEMPRE pregunta: ¿qué respalda esto? Si la respuesta es "un mecanismo de código inteligente", aléjate.' }
        ],
        highlight: {
          title: 'Regla de Supervivencia',
          text: 'Antes de depositar dinero en CUALQUIER stablecoin, pregunta tres cosas: 1) ¿Qué la respalda exactamente? 2) ¿Puedo canjearla por dólares reales si quiero? 3) ¿Quién la audita? Si no puedes responder las tres, no deposites tus ahorros ahí.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Usar Stablecoins en tu Vida Diaria',
        content: 'En Latinoamérica, las stablecoins tienen usos prácticos que van mucho más allá del trading:',
        features: [
          { icon: PiggyBank, title: 'Ahorro en Dólares', text: 'Compra USDC con tus pesos y guárdalo en tu wallet. Es como tener una cuenta de ahorro en dólares sin necesidad de cuenta bancaria en USA. Sin cepo. Sin límites. Sin spread bancario abusivo.' },
          { icon: Globe, title: 'Remesas', text: 'Enviar USDC de USA a Colombia cuesta menos de $0.01 en Solana y llega en segundos. Western Union cobra 5-10% y tarda días. Las familias que reciben remesas pueden ahorrar cientos de dólares al año.' },
          { icon: Wallet, title: 'Refugio en Volatilidad', text: 'Cuando BTC o SOL caen 20%, puedes convertir temporalmente a USDC para proteger tus ganancias. Luego recompras cuando el precio se estabiliza. Es tu "puerto seguro" dentro del ecosistema cripto.' },
          { icon: Zap, title: 'Pagos y Tarjetas Cripto', text: 'Las tarjetas como Kast y Avici (que viste en la lección anterior) funcionan principalmente con stablecoins. Cargas USDC, pagas en cualquier tienda. El comercio recibe pesos, tú pagas desde tu wallet.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Las stablecoins son tokens anclados al dólar. Las principales son USDC (más transparente) y USDT (más líquida).',
          'Ambas dependen de empresas centralizadas—NO son descentralizadas como Bitcoin. Eso es un riesgo real.',
          'NUNCA uses stablecoins algorítmicas (sin respaldo real) para guardar ahorros. La catástrofe UST/Luna destruyó $40 mil millones.',
          'En Latinoamérica, las stablecoins son la forma más accesible de dolarizarse sin intermediarios bancarios.',
          'Diversifica: no tengas TODOS tus ahorros en una sola stablecoin. Si usas cantidades grandes, divide entre USDC y USDT.',
          'Si alguien te promete rendimientos "seguros" del 15-20% en stablecoins, corre. No existe el rendimiento alto sin riesgo alto.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué hace que una stablecoin mantenga su valor de $1? ¿Y por qué importa entender el mecanismo?',
          options: [
            { id: 'a', text: 'Magia del blockchain—todas funcionan igual' },
            { id: 'b', text: 'El mecanismo de respaldo (reservas reales, sobrecolateralización, o algoritmos) determina qué tan segura es. Las algorítmicas sin respaldo colapsaron y destruyeron $40 mil millones' },
            { id: 'c', text: 'El gobierno garantiza el valor como con el dinero normal' },
            { id: 'd', text: 'No importa, todas valen siempre exactamente $1' }
          ],
          correctAnswer: 'b',
          explanation: 'El mecanismo importa TODO. USDC tiene dólares reales en reserva. UST tenía solo un algoritmo. Cuando el algoritmo falló, $40 mil millones desaparecieron. Siempre pregunta: ¿qué respalda esto?'
        },
        {
          id: 'q2',
          question: 'En marzo 2023, USDC cayó temporalmente a $0.87. ¿Por qué pasó esto y qué nos enseña?',
          options: [
            { id: 'a', text: 'USDC es una estafa' },
            { id: 'b', text: 'Circle tenía $3.3 mil millones en Silicon Valley Bank, que colapsó. Esto demuestra que incluso las stablecoins más confiables tienen riesgo porque dependen de bancos e instituciones centralizadas' },
            { id: 'c', text: 'Fue un error técnico sin importancia' },
            { id: 'd', text: 'Porque alguien hackeó la blockchain' }
          ],
          correctAnswer: 'b',
          explanation: 'USDC se recuperó cuando el gobierno garantizó los depósitos de SVB. Pero la lección es clara: las stablecoins respaldadas por reservas dependen de que esas reservas estén seguras. Diversificar entre stablecoins reduce este riesgo.'
        },
        {
          id: 'q3',
          question: 'Un amigo te dice: "Encontré una plataforma que paga 25% anual en stablecoins, sin riesgo." ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto todo inmediatamente, 25% es increíble' },
            { id: 'b', text: 'Le pido el link para registrarme también' },
            { id: 'c', text: 'Desconfío inmediatamente. UST/Luna prometía 20% "sin riesgo" y destruyó $40 mil millones. Si parece demasiado bueno para ser verdad, lo es' },
            { id: 'd', text: 'Invierto solo un poco para probar' }
          ],
          correctAnswer: 'c',
          explanation: 'Anchor Protocol ofrecía 20% en UST y atrajo miles de millones. Cuando colapsó, lo perdieron todo. Rendimientos "seguros" mayores al 5-8% en stablecoins son una bandera roja ENORME. Pregunta siempre: ¿de dónde sale el rendimiento?'
        },
        {
          id: 'q4',
          question: 'Vives en Argentina con cepo cambiario. ¿Cómo te ayudan las stablecoins?',
          options: [
            { id: 'a', text: 'No me ayudan, necesito dólares reales' },
            { id: 'b', text: 'Puedo comprar USDC sin límite a través de exchanges P2P, dolarizando mis ahorros sin depender del cupo oficial del gobierno ni del spread del dólar blue' },
            { id: 'c', text: 'Solo sirven para comprar NFTs' },
            { id: 'd', text: 'Son ilegales en Argentina' }
          ],
          correctAnswer: 'b',
          explanation: 'Las stablecoins son la salida del cepo. Sin límites de compra, sin spread bancario abusivo, y puedes guardarlas en tu propia wallet donde el gobierno no puede congelarlas. Millones de argentinos ya lo hacen.'
        },
        {
          id: 'q5',
          question: 'Tienes $5,000 en ahorros y quieres dolarizarlos con stablecoins. ¿Cuál es la estrategia más segura?',
          options: [
            { id: 'a', text: 'Todo en USDT porque es la más popular' },
            { id: 'b', text: 'Todo en la stablecoin que me dé más interés' },
            { id: 'c', text: 'Dividir entre USDC y USDT en mi propia wallet. USDC por transparencia, USDT por liquidez. Nunca todo en una sola stablecoin ni en un exchange' },
            { id: 'd', text: 'Buscar una stablecoin algorítmica que pague mejor rendimiento' }
          ],
          correctAnswer: 'c',
          explanation: 'Diversificación aplica también a stablecoins. Si USDC tiene un problema (como el incidente de SVB), tener parte en USDT te protege, y viceversa. Y siempre en tu propia wallet—la lección de FTX aplica para todo.'
        }
      ]
    }
  },
  42: {
    id: 42,
    title: 'DCA: Invierte Sin Estrés',
    level: 'Principiante',
    number: '17 de 19',
    duration: '18 minutos',
    type: 'Estrategia',
    description: 'La estrategia más simple y efectiva del mundo para construir riqueza a largo plazo. No necesitas predecir el mercado ni mirar gráficos. Solo necesitas disciplina y tiempo.',
    sections: [
      {
        type: 'intro',
        title: 'El Secreto Mejor Guardado de los Inversores Profesionales',
        content: '¿Cuándo es el mejor momento para comprar Bitcoin? La respuesta honesta es: **nadie lo sabe**. Ni los analistas, ni los traders con 20 años de experiencia, ni los "gurús" de Twitter que aciertan una vez y te lo recuerdan por siempre (y olvidan las 50 veces que se equivocaron). Pero hay una estrategia que elimina el problema por completo: **Dollar Cost Averaging (DCA)**—o en español, inversión periódica. La idea es tan simple que parece tonta: compras una cantidad fija de cripto en intervalos regulares, sin importar el precio. $50 cada semana. $200 cada mes. Lo que puedas. Llueva o truene. Sin mirar gráficos. Sin intentar predecir nada. El resultado? Históricamente, DCA ha superado a la mayoría de inversores que intentan "comprar barato y vender caro". Porque el enemigo real no es el mercado—son tus emociones.',
        highlight: {
          title: 'El Dato Que Cambia Todo',
          text: 'Si hubieras invertido $50 semanales en Bitcoin desde 2019 (sin importar el precio), habrías invertido ~$15,600. El valor de esos BTC hoy sería superior a $60,000. No necesitaste acertar el timing. Solo necesitaste no parar.'
        }
      },
      {
        type: 'main',
        title: '¿Por Qué Funciona? La Matemática del Promedio',
        content: 'DCA funciona por un principio matemático poderoso: al comprar a diferentes precios a lo largo del tiempo, tu **precio promedio** se suaviza naturalmente. Compras más unidades cuando está barato (tu dinero rinde más) y menos cuando está caro (limitas tu exposición). No necesitas acertar el punto más bajo.',
        features: [
          { icon: TrendingDown, title: 'Cuando el Precio Baja', text: 'Tus $50 semanales compran MÁS cripto. Una caída de 50% significa que estás comprando al doble de rendimiento. Los profesionales AMAN las caídas porque su DCA acumula más por menos.' },
          { icon: TrendingUp, title: 'Cuando el Precio Sube', text: 'Tus $50 compran menos cripto, pero lo que ya acumulaste vale más. El efecto neto: tus compras baratas anteriores compensan las compras caras actuales.' },
          { icon: Activity, title: 'El Promedio Gana', text: 'A lo largo de meses y años, tu precio promedio termina siendo significativamente más bajo que el precio promedio del mercado. Esto se llama "costo promedio ponderado" y es la base de cómo invierten los fondos de pensiones más grandes del mundo.' }
        ]
      },
      {
        type: 'main',
        title: 'DCA vs Timing: ¿Qué Dice la Historia?',
        content: 'Imagina 3 personas que invierten $100 mensuales en Bitcoin durante 4 años:',
        features: [
          { icon: Clock, title: 'Ana (DCA Disciplinado)', text: 'Compra $100 cada mes el día 1, sin importar el precio. No mira gráficos. No se estresa. En 4 años invirtió $4,800. Su retorno promedio histórico: entre 150-400% dependiendo del período.' },
          { icon: AlertTriangle, title: 'Carlos (Intenta Hacer Timing)', text: 'Espera las caídas "perfectas" para comprar. Pero cuando cae, tiene miedo de que caiga más. Cuando sube, piensa que ya es muy tarde. En 4 años solo ejecutó 15 compras en lugar de 48. Invirtió menos y perdió las mejores oportunidades.' },
          { icon: TrendingDown, title: 'María (Compra Todo de Una Vez)', text: 'Invierte los $4,800 juntos. Si compró en un pico, puede pasar AÑOS en pérdida psicológica. Si compró en un suelo, ganó más que Ana. Pero ¿quién sabe cuándo es el suelo? Nadie. Y el estrés emocional de ver -50% en tus ahorros es devastador.' }
        ],
        highlight: {
          title: 'Estudios Reales',
          text: 'Un análisis de todos los períodos de 4 años en la historia de Bitcoin muestra que DCA ha generado retorno positivo en el 100% de los casos. Timing el mercado correctamente es casi imposible—pero DCA ha funcionado SIEMPRE para quien mantuvo la disciplina.'
        }
      },
      {
        type: 'main',
        title: 'El Verdadero Enemigo: Tus Emociones',
        content: 'La razón por la que DCA es tan poderoso no es solo la matemática—es que **neutraliza tus emociones**, que son el mayor destructor de riqueza:',
        features: [
          { icon: AlertTriangle, title: 'FOMO (Fear Of Missing Out)', text: 'Bitcoin sube 40% en una semana. Todos tus amigos están comprando. Sientes urgencia de meter todo tu dinero AHORA. Con DCA: compras tus $50 normales y sigues viviendo. Sin drama.' },
          { icon: AlertTriangle, title: 'Pánico en las Caídas', text: 'Bitcoin cae 35%. Los medios dicen que "se acabó". Tu instinto grita: ¡VENDE TODO! Con DCA: compras tus $50 normales (ahora compras más BTC por el mismo precio) y sigues viviendo. Sin drama.' },
          { icon: CheckCircle, title: 'La Paz Mental', text: 'DCA convierte la inversión de una experiencia emocionalmente agotadora a un proceso automático. Como pagar Netflix cada mes. No piensas en ello. No te estresa. Y con el tiempo, construyes riqueza silenciosamente.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Configurar tu DCA en la Práctica',
        content: 'Configurar DCA es más fácil de lo que piensas. Puedes hacerlo manualmente o automatizarlo:',
        features: [
          { icon: Wallet, title: 'Manual (Semanal o Mensual)', text: 'Cada semana o mes, compras la cantidad fija que elegiste. En un exchange (Binance P2P, Backpack) o directamente en Jupiter si ya tienes stablecoins. Simple, sin complicaciones.' },
          { icon: Zap, title: 'Automatizado con Jupiter', text: 'Jupiter en Solana tiene una función de DCA integrada. Depositas USDC y configuras: comprar $X de SOL/BTC cada día/semana/mes. El protocolo ejecuta las compras automáticamente. Sin intervención humana = sin intervención emocional.' },
          { icon: PiggyBank, title: 'La Regla del Monto', text: 'Invierte solo lo que NO necesitas en los próximos 12 meses. Si ganas $2,000 al mes y tus gastos son $1,500, puedes hacer DCA con $100-200 mensuales. Nunca inviertas el dinero del arriendo o la comida.' }
        ],
        highlight: {
          title: 'Consejo Profesional',
          text: 'El mejor DCA es el que puedes mantener durante AÑOS sin afectar tu vida. $25 semanales durante 5 años genera más riqueza que $500 de una vez que no puedes repetir. La constancia gana. Siempre.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'DCA (Dollar Cost Averaging) = comprar una cantidad fija de cripto a intervalos regulares, sin importar el precio.',
          'Funciona porque tu precio promedio se suaviza: compras más cuando está barato, menos cuando está caro.',
          'Históricamente, DCA en Bitcoin ha generado retorno positivo en el 100% de los períodos de 4+ años.',
          'La ventaja principal no es solo matemática—es emocional. Elimina el FOMO, el pánico, y la parálisis de análisis.',
          'Puedes automatizarlo en Jupiter (Solana) para eliminar la intervención humana por completo.',
          'Regla de oro: invierte solo lo que no necesitas en los próximos 12 meses, y nunca pares tu DCA por emociones del mercado.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin cae 40% en una semana. Los medios dicen que "se acabó". Tú haces DCA de $50 semanales. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo antes de perder más' },
            { id: 'b', text: 'Pauso mi DCA hasta que se recupere' },
            { id: 'c', text: 'Compro mis $50 normales—ahora mi dinero compra más BTC que antes. Las caídas son descuento para mi DCA' },
            { id: 'd', text: 'Meto todos mis ahorros porque está barato' }
          ],
          correctAnswer: 'c',
          explanation: 'DCA es disciplina, no emoción. Cuando el precio cae, tus $50 compran MÁS cripto. Eso baja tu precio promedio. Parar durante caídas es el error más común—te pierdes las mejores oportunidades de acumulación.'
        },
        {
          id: 'q2',
          question: '¿Por qué DCA históricamente supera a la mayoría de personas que intentan "comprar barato y vender caro"?',
          options: [
            { id: 'a', text: 'Porque el mercado siempre sube' },
            { id: 'b', text: 'Porque es imposible predecir consistentemente los puntos altos y bajos, y las emociones (FOMO, pánico) hacen que la mayoría compre caro y venda barato—exactamente lo opuesto' },
            { id: 'c', text: 'Porque DCA tiene algún tipo de ventaja matemática secreta' },
            { id: 'd', text: 'Solo funciona con Bitcoin, no con otros activos' }
          ],
          correctAnswer: 'b',
          explanation: 'El enemigo real es la psicología humana. Cuando sube, el FOMO te empuja a comprar (caro). Cuando cae, el pánico te empuja a vender (barato). DCA elimina las emociones de la ecuación.'
        },
        {
          id: 'q3',
          question: 'Ganas $1,800 al mes. Tus gastos fijos son $1,400. ¿Cuánto deberías destinar a DCA en cripto?',
          options: [
            { id: 'a', text: 'Los $400 completos para maximizar ganancias' },
            { id: 'b', text: '$100-200 al mes, dejando margen para emergencias y gastos variables' },
            { id: 'c', text: 'Nada hasta que gane más' },
            { id: 'd', text: 'Pido un préstamo para invertir más' }
          ],
          correctAnswer: 'b',
          explanation: 'Nunca inviertas dinero que puedas necesitar pronto. De los $400 sobrantes, necesitas margen para emergencias, gastos variables, y calidad de vida. $100-200 es un DCA sostenible que puedes mantener durante años—que es lo que importa.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la mayor ventaja de automatizar tu DCA en una plataforma como Jupiter?',
          options: [
            { id: 'a', text: 'Paga mejores precios que comprar manualmente' },
            { id: 'b', text: 'Elimina completamente la intervención humana y las emociones. No puedes pausar por pánico ni meter de más por FOMO si el proceso es automático' },
            { id: 'c', text: 'Es más barato en comisiones' },
            { id: 'd', text: 'Garantiza ganancias' }
          ],
          correctAnswer: 'b',
          explanation: 'La automatización es la mejor defensa contra ti mismo. Si el DCA corre solo, no puedes sabotearlo con decisiones emocionales. Es como un débito automático de ahorro—lo configuras una vez y la disciplina está garantizada.'
        },
        {
          id: 'q5',
          question: 'Un amigo dice: "No voy a comprar Bitcoin ahora porque está muy caro. Voy a esperar a que baje." ¿Qué le responderías basándote en lo que aprendiste?',
          options: [
            { id: 'a', text: 'Tiene razón, mejor esperar' },
            { id: 'b', text: 'Debería comprar todo de una vez ahora' },
            { id: 'c', text: 'Nadie sabe si bajará o subirá. En vez de esperar el momento "perfecto" que quizás nunca llegue, podría empezar un DCA pequeño ahora. Si baja, su DCA comprará más. Si sube, al menos ya tiene algo' },
            { id: 'd', text: 'Bitcoin siempre baja después de subir, así que tiene razón' }
          ],
          correctAnswer: 'c',
          explanation: 'Esperar el momento perfecto es la forma más común de no invertir nunca. Siempre habrá una razón para esperar. DCA resuelve esto: empiezas con poco, y si el precio baja, tu próxima compra será más barata. El mejor momento para empezar DCA fue hace 5 años. El segundo mejor momento es hoy.'
        }
      ]
    }
  },
  43: {
    id: 43,
    title: 'Bitcoin vs Altcoins: Qué Comprar Primero',
    level: 'Principiante',
    number: '18 de 19',
    duration: '20 minutos',
    type: 'Comparativa',
    description: 'Existen más de 20,000 criptomonedas. No todas son iguales. Entiende por qué BTC es la base de todo portafolio y cómo se diferencia de ETH, SOL y las demás.',
    sections: [
      {
        type: 'intro',
        title: 'No Todas las Criptomonedas Son Iguales',
        content: 'Cuando alguien dice "voy a invertir en cripto", es como decir "voy a invertir en internet". ¿En qué exactamente? ¿En Google? ¿En un blog random? ¿En una empresa que promete revolucionar todo y desaparece en 6 meses? El mundo cripto tiene más de 20,000 tokens. La gran mayoría no vale nada y nunca lo valdrá. Pero hay categorías fundamentalmente diferentes que debes entender antes de poner un solo peso. **Bitcoin** no es lo mismo que **Ethereum**. Ethereum no es lo mismo que **Solana**. Y ninguno de los tres es lo mismo que DOGE, SHIB o la meme coin que tu primo te recomendó ayer. Esta lección te da el mapa para navegar este universo sin perderte.',
        highlight: {
          title: 'La Regla del 95%',
          text: 'El 95% de las criptomonedas que existen hoy no existirán en 10 años. Muchas son proyectos experimentales, muchas son estafas, y muchas simplemente no resolvían ningún problema real. La selección importa enormemente.'
        }
      },
      {
        type: 'main',
        title: 'Bitcoin: La Reserva de Valor Digital',
        content: 'Bitcoin tiene un propósito claro y único: ser el **oro digital**—la reserva de valor más segura y resistente a la censura del mundo. No intenta hacer todo. Intencionalmente, es lento y "limitado" en funcionalidades porque su prioridad es la **seguridad y descentralización** absolutas.',
        features: [
          { icon: Lock, title: 'Escasez Absoluta', text: '21 millones máximo. Nunca habrá más. Ninguna otra criptomoneda tiene esta garantía tan fuerte. La política monetaria de Bitcoin es inmutable—ni siquiera los desarrolladores pueden cambiarla.' },
          { icon: Shield, title: 'Máxima Descentralización', text: 'Miles de nodos en 100+ países. Ninguna persona, empresa o gobierno controla Bitcoin. Es la red más descentralizada y resistente a la censura del mundo. 15 años sin caídas.' },
          { icon: Clock, title: 'Track Record', text: 'Desde 2009, Bitcoin ha sobrevivido prohibiciones, hackeos de exchanges, crisis financieras, y declaraciones de "muerte" más de 450 veces. Sigue más fuerte que nunca. Ninguna otra cripto tiene este historial.' },
          { icon: Landmark, title: 'Adopción Institucional', text: 'ETFs de Bitcoin aprobados, MicroStrategy con $15+ mil millones en BTC, El Salvador como moneda legal, fondos de pensiones comprando. Las instituciones confían en Bitcoin de una forma que no confían en ninguna altcoin.' }
        ]
      },
      {
        type: 'main',
        title: 'Ethereum y Solana: Las Plataformas de Utilidad',
        content: 'Si Bitcoin es oro digital, ETH y SOL son más como **sistemas operativos**: plataformas donde se construyen aplicaciones. No compiten directamente con Bitcoin—resuelven problemas diferentes.',
        features: [
          { icon: Layers, title: 'Ethereum (ETH)', text: 'La primera y más grande plataforma de contratos inteligentes. DeFi, NFTs, stablecoins—la mayoría nació aquí. Tiene el ecosistema más maduro y la mayor cantidad de desarrolladores. Pero es lento (~15 TPS) y caro (fees de $1-50+). Piénsalo como Windows: dominante, probado, pero pesado.' },
          { icon: Zap, title: 'Solana (SOL)', text: 'Plataforma ultra-rápida (~4,000 TPS) con fees de fracciones de centavo. Ecosistema DeFi en crecimiento explosivo (Jupiter, Raydium, Marinade). Ideal para experimentar y aprender porque los errores cuestan centavos, no dólares. Más joven, más riesgos, más potencial de crecimiento.' },
          { icon: Network, title: 'La Diferencia Clave con Bitcoin', text: 'ETH y SOL tienen inflación (emiten nuevos tokens continuamente para pagar validadores). No tienen el límite duro de 21 millones de Bitcoin. Son inversiones en tecnología y ecosistemas, no en escasez pura. Eso los hace más volátiles y más arriesgados.' }
        ],
        highlight: {
          title: 'Analogía Clara',
          text: 'Bitcoin = oro digital (reserva de valor, escasez). Ethereum = infraestructura financiera (DeFi maduro, lento pero seguro). Solana = infraestructura de alta velocidad (DeFi rápido, barato, pero más joven). Los tres pueden coexistir porque resuelven problemas diferentes.'
        }
      },
      {
        type: 'main',
        title: 'El Universo de las Altcoins: Categorías que Debes Conocer',
        content: 'Más allá de BTC, ETH y SOL, existen miles de tokens. Estas son las categorías principales que encontrarás:',
        features: [
          { icon: Landmark, title: 'Stablecoins (USDC, USDT)', text: 'Ya las conoces de la lección anterior. Ancladas al dólar. No son inversión—son herramienta de ahorro y operación. Esenciales para tu estrategia.' },
          { icon: Gem, title: 'Tokens de Protocolo (JUP, RAY, RNDR)', text: 'Tokens que representan proyectos específicos con utilidad real: gobernanza, acceso a servicios, descuentos en fees. Su valor depende del éxito del proyecto. Alto riesgo, alto potencial.' },
          { icon: AlertTriangle, title: 'Meme Coins (DOGE, SHIB, BONK)', text: 'Tokens sin utilidad real, impulsados por comunidad y especulación pura. Algunos generan retornos absurdos (1000x), pero la inmensa mayoría va a cero. Son apuestas, no inversiones. Si participas, hazlo con dinero que estés dispuesto a perder al 100%.' },
          { icon: AlertTriangle, title: 'Tokens Dudosos (99% del mercado)', text: 'Proyectos sin equipo real, sin producto, sin auditoría. Tokens creados en 5 minutos para extraer dinero de incautos. Si no puedes explicar qué problema resuelve un token en una oración, probablemente no resuelve ninguno.' }
        ]
      },
      {
        type: 'comparison',
        title: 'BTC vs ETH vs SOL: ¿Cuál Primero?',
        leftSide: {
          title: 'Bitcoin (BTC)',
          points: [
            'Reserva de valor #1 del ecosistema',
            'Máxima descentralización y seguridad',
            '21 millones — escasez absoluta',
            'Menor volatilidad que altcoins',
            'Ideal como base del portafolio (40-60%)',
            'No sirve para DeFi ni apps'
          ]
        },
        rightSide: {
          title: 'Ethereum + Solana (ETH/SOL)',
          points: [
            'Plataformas para construir aplicaciones',
            'Ecosistemas DeFi, NFTs, staking',
            'Inflación continua (no hay límite duro)',
            'Mayor volatilidad y riesgo',
            'Complemento del portafolio (20-40%)',
            'Necesarios para usar DeFi y apps Web3'
          ]
        }
      },
      {
        type: 'main',
        title: 'Cómo Construir tu Primer Portafolio',
        content: 'No existe un portafolio "perfecto"—depende de tu tolerancia al riesgo y tu horizonte de tiempo. Pero estos son marcos de referencia probados:',
        features: [
          { icon: Shield, title: 'Conservador (Menor riesgo)', text: '60-70% BTC + 15-20% ETH + 10-15% SOL + 5-10% Stablecoins. La mayoría en Bitcoin como ancla. Ideal si tu prioridad es preservar valor a largo plazo y no quieres estar pendiente del mercado.' },
          { icon: Activity, title: 'Moderado (Balance riesgo/retorno)', text: '40-50% BTC + 20-25% SOL + 15-20% ETH + 10-15% Stablecoins + 5% Altcoins selectas. Más exposición a ecosistemas de crecimiento. Requiere más conocimiento y atención.' },
          { icon: Zap, title: 'Agresivo (Mayor riesgo, mayor potencial)', text: '30% BTC + 30% SOL + 15% ETH + 15% Altcoins de protocolo + 10% Stablecoins. Alta exposición a crecimiento pero también a caídas fuertes. Solo si puedes tolerar ver -50% sin vender en pánico.' }
        ],
        highlight: {
          title: 'La Regla Para Principiantes',
          text: 'Si apenas empiezas, tu portafolio debería ser 70%+ Bitcoin. Es tentador ir directo a altcoins que prometen 100x, pero Bitcoin es tu ancla. Aprende a caminar antes de correr. Los que se saltaron Bitcoin para ir directo a meme coins usualmente terminaron perdiendo todo.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Bitcoin es reserva de valor (oro digital). ETH y SOL son plataformas de utilidad (sistemas operativos). Resuelven problemas diferentes.',
          'Bitcoin tiene escasez absoluta (21M), máxima descentralización, y 15+ años de track record. Ninguna otra cripto tiene esto.',
          'ETH y SOL tienen inflación, son más volátiles, pero permiten DeFi, staking, y aplicaciones que Bitcoin no puede.',
          'El 95% de altcoins irán a cero. Solo invierte en tokens cuyo problema puedas explicar en una oración.',
          'Meme coins son apuestas, no inversiones. Si participas, usa solo dinero que puedas perder completamente.',
          'Como principiante, empieza con 70%+ BTC como base. Agrega ETH/SOL gradualmente conforme aprendas. No te saltes los fundamentales.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia fundamental entre Bitcoin y Solana como inversión?',
          options: [
            { id: 'a', text: 'No hay diferencia, ambas son criptomonedas' },
            { id: 'b', text: 'Bitcoin es reserva de valor con escasez absoluta (21M). Solana es una plataforma de utilidad con inflación continua. Resuelven problemas diferentes y tienen perfiles de riesgo distintos' },
            { id: 'c', text: 'Solana es mejor porque es más rápida' },
            { id: 'd', text: 'Bitcoin es mejor porque fue la primera' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin optimiza para seguridad y escasez (oro digital). Solana optimiza para velocidad y aplicaciones (plataforma). No compiten directamente—son complementarias. Por eso un portafolio puede tener ambas.'
        },
        {
          id: 'q2',
          question: 'Un influencer recomienda meter todo tu dinero en una meme coin que "va a hacer 1000x". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto antes de que sea tarde' },
            { id: 'b', text: 'Investigo la meme coin para ver si es legítima' },
            { id: 'c', text: 'Entiendo que las meme coins son apuestas especulativas, no inversiones. Si participo, uso solo dinero que puedo perder al 100%, nunca la base de mi portafolio' },
            { id: 'd', text: 'Si el influencer es famoso, es confiable' }
          ],
          correctAnswer: 'c',
          explanation: 'Las meme coins no tienen utilidad real—su valor depende 100% de la especulación y el hype. Los influencers frecuentemente reciben tokens gratis para promoverlos y venden cuando el precio sube con las compras de sus seguidores. Tu portafolio debería basarse en BTC/ETH/SOL, no en apuestas.'
        },
        {
          id: 'q3',
          question: 'Tienes $1,000 para empezar a invertir en cripto. Nunca has comprado antes. ¿Cómo distribuirías?',
          options: [
            { id: 'a', text: '$1,000 en la altcoin más barata para tener más monedas' },
            { id: 'b', text: '$600-700 en BTC, $150-200 en SOL, $100-150 en ETH, y $100 en stablecoins como reserva' },
            { id: 'c', text: '$500 en BTC, $500 en meme coins para maximizar potencial' },
            { id: 'd', text: 'Todo en USDC hasta que aprenda más' }
          ],
          correctAnswer: 'b',
          explanation: 'Como principiante, 60-70% en BTC te da una base sólida. ETH y SOL agregan exposición a ecosistemas con potencial. Las stablecoins son tu reserva para comprar oportunidades. Nunca bases un portafolio nuevo en meme coins o altcoins especulativas.'
        },
        {
          id: 'q4',
          question: '¿Por qué Bitcoin tiene menos riesgo que SOL o ETH como inversión a largo plazo?',
          options: [
            { id: 'a', text: 'Porque el precio nunca baja' },
            { id: 'b', text: 'Porque tiene escasez absoluta, máxima descentralización, 15+ años de historial, adopción institucional (ETFs), y no depende del éxito de ninguna empresa o equipo de desarrollo' },
            { id: 'c', text: 'Porque es más caro, entonces es mejor' },
            { id: 'd', text: 'Todos tienen el mismo riesgo' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin es la cripto más probada del mundo. Su valor no depende de que un equipo lance actualizaciones o de que un ecosistema crezca. SOL y ETH, aunque prometedores, dependen del éxito de sus plataformas y de que los desarrolladores sigan construyendo. Más dependencias = más riesgo.'
        },
        {
          id: 'q5',
          question: 'Si Bitcoin es "oro digital" y SOL/ETH son "plataformas", ¿por qué no poner todo en Bitcoin si es lo más seguro?',
          options: [
            { id: 'a', text: 'Deberías—Bitcoin es lo único que importa' },
            { id: 'b', text: 'Bitcoin no permite DeFi, staking ni aplicaciones. ETH y SOL dan acceso a herramientas financieras que pueden generar rendimiento adicional sobre tu capital. Un portafolio diversificado balancea seguridad (BTC) con crecimiento (ETH/SOL)' },
            { id: 'c', text: 'Porque SOL va a superar a Bitcoin en precio' },
            { id: 'd', text: 'Solo por diversificar, no hay otra razón' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin es tu ancla de seguridad y escasez. Pero ETH/SOL te dan acceso a DeFi, staking (ganas rendimiento), y un ecosistema en crecimiento. La combinación ideal es: BTC para preservar riqueza, ETH/SOL para hacerla crecer activamente.'
        }
      ]
    }
  },
  44: {
    id: 44,
    title: 'Tu Plan de Inversión Personal',
    level: 'Principiante',
    number: '19 de 19',
    duration: '22 minutos',
    type: 'Práctica',
    description: 'La lección final del nivel principiante. Junta todo lo que aprendiste en un plan de acción concreto: tu portafolio, tu estrategia DCA, tu seguridad, y tus metas. Sales de aquí con un plan real.',
    sections: [
      {
        type: 'intro',
        title: 'De Estudiante a Inversor: Tu Graduación',
        content: 'Felicidades. Si llegaste hasta aquí, ya sabes más sobre dinero, inflación y criptomonedas que el 95% de las personas. Entiendes **por qué** el sistema monetario actual te empobrece (Lecciones 1-3). Conoces **la solución** que Bitcoin representa (Lección 4). Sabes **cómo funciona** la tecnología (Lecciones 5-6). Tienes tu wallet configurada, has hecho transacciones, y sabes identificar estafas (Lecciones 7-15). Entiendes stablecoins, DCA, y la diferencia entre BTC y altcoins (Lecciones 16-18). Ahora falta lo más importante: **convertir todo ese conocimiento en acción**. Un plan sin ejecución es un sueño. Esta lección es tu hoja de ruta.',
        highlight: {
          title: 'El Momento de la Verdad',
          text: 'El conocimiento sin acción no vale nada. Después de esta lección, deberías tener un plan escrito con montos, fechas, y reglas claras. No un "algún día voy a invertir"—un PLAN concreto que ejecutas esta semana.'
        }
      },
      {
        type: 'main',
        title: 'Paso 1: Define tu Situación Financiera',
        content: 'Antes de invertir un solo peso en cripto, necesitas claridad brutal sobre tu realidad financiera. Sin esto, cualquier inversión es una apuesta irresponsable:',
        features: [
          { icon: PiggyBank, title: 'Fondo de Emergencia Primero', text: 'Antes de cripto, necesitas 3-6 meses de gastos en ahorros líquidos (efectivo o cuenta bancaria). Si mañana te quedas sin empleo, ¿puedes sobrevivir 3 meses? Si la respuesta es no, tu prioridad es ahorrar, no invertir. Cripto es volátil—no puede ser tu salvavidas.' },
          { icon: Banknote, title: 'Calcula tu Capacidad de Inversión', text: 'Ingresos mensuales - Gastos fijos - Gastos variables - Fondo de emergencia = Lo que PUEDES invertir. Si el número es $25 al mes, perfecto. Empieza con eso. Si es $0, enfócate primero en aumentar ingresos o reducir gastos. Invertir con dinero prestado o necesario es el error #1.' },
          { icon: Clock, title: 'Define tu Horizonte', text: '¿Cuánto tiempo puedes dejar ese dinero sin tocarlo? Si necesitas el dinero en 6 meses, no inviertas en cripto volátil. Cripto es para horizontes de 2+ años mínimo, idealmente 4-5+ años para maximizar la probabilidad de retorno positivo.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 2: Arma tu Portafolio Base',
        content: 'Basándote en lo que aprendiste en la lección anterior, define tu distribución. Aquí tienes un marco para principiantes que puedes ajustar según tu perfil:',
        features: [
          { icon: Lock, title: 'La Base: Bitcoin (50-70%)', text: 'Tu ancla. La posición que NO tocas. DCA semanal o mensual. Almacenado en cold wallet si supera los $5,000. Aquí va la mayor parte de tu inversión porque es lo más probado y resistente del ecosistema.' },
          { icon: Zap, title: 'Crecimiento: SOL + ETH (20-35%)', text: 'Tu exposición a ecosistemas en desarrollo. SOL para DeFi y experimentación (fees baratos). ETH como segunda capa de seguridad y madurez. También en DCA, con menor proporción que BTC.' },
          { icon: Wallet, title: 'Operativo: Stablecoins (5-15%)', text: 'Tu reserva en dólares digitales. Sirve para tres cosas: 1) Comprar caídas cuando se presenten, 2) Gastos con tarjeta cripto, 3) Estabilidad en tu portafolio. USDC + USDT diversificado.' },
          { icon: AlertTriangle, title: 'Opcional: Altcoins/Memes (0-5%)', text: 'SOLO si te sobra después de cubrir las tres categorías anteriores. Dinero que puedes perder al 100% sin que afecte tu vida. Nunca más del 5% de tu portafolio total. Si no entiendes el proyecto, no inviertas.' }
        ],
        highlight: {
          title: 'La Regla de Oro del Portafolio',
          text: 'Imagina que mañana todo tu portafolio cae 50%. ¿Puedes dormir tranquilo sabiendo que no necesitas ese dinero por años? Si la respuesta es no, estás invirtiendo demasiado. Reduce hasta que puedas dormir en paz durante un mercado bajista.'
        }
      },
      {
        type: 'main',
        title: 'Paso 3: Configura tu DCA',
        content: 'Ahora que tienes tu distribución, configura la ejecución automática para eliminar emociones:',
        features: [
          { icon: RefreshCw, title: 'Elige tu Frecuencia', text: 'Semanal es ideal para suavizar la volatilidad al máximo. Quincenal o mensual también funciona. Lo importante es que sea consistente y sostenible. Si cobras quincenal, DCA quincenal. Que coincida con tu flujo de dinero.' },
          { icon: Banknote, title: 'Elige tu Monto', text: 'Un monto que puedas mantener MÍNIMO 2 años sin sacrificar tu calidad de vida. $25/semana ($100/mes) es un punto de partida excelente. $50/semana ($200/mes) es agresivo pero viable con ingresos medios. Empieza pequeño—siempre puedes aumentar.' },
          { icon: Zap, title: 'Automatiza', text: 'Opción 1: Jupiter DCA (depositas USDC, configura compras automáticas de SOL/BTC). Opción 2: Alarma semanal en tu teléfono + compra manual. Opción 3: Exchange con compra recurrente. Lo automático es mejor porque elimina la tentación de "esperar un mejor precio".' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 4: Checklist de Seguridad',
        content: 'Antes de empezar a ejecutar tu plan, verifica que tu seguridad esté en orden. Un plan de inversión sin seguridad es como construir una casa sin cerraduras:',
        features: [
          { icon: Shield, title: 'Frase Semilla', text: '¿Está escrita en papel (o metal) y guardada en un lugar seguro FUERA de tu casa? ¿Nunca la has digitado en ningún sitio web ni tomado foto? Si la respuesta a cualquiera es NO, resuelve esto ANTES de invertir más.' },
          { icon: Lock, title: 'Autenticación', text: '¿Tu exchange tiene 2FA activado (Google Authenticator, NO SMS)? ¿Tu email principal tiene 2FA? ¿Tu wallet tiene contraseña o biometría? Si falta algo, actívalo ahora.' },
          { icon: Wallet, title: 'Distribución de Custodia', text: '¿Tienes claro qué va en exchange (temporal), qué en hot wallet (operativo), y qué en cold wallet (ahorros)? Si todo tu cripto está en un exchange, mueve la mayoría a tu wallet esta semana.' },
          { icon: AlertTriangle, title: 'Conocimiento Anti-Estafa', text: '¿Puedes identificar un sitio de phishing? ¿Sabes que NUNCA debes compartir tu frase semilla con nadie? ¿Sabes que "soporte de Phantom" NUNCA te escribe por DM? Si dudas, repasa la Lección 14.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 5: Define tus Reglas y Metas',
        content: 'Los mejores inversores tienen reglas escritas que siguen sin importar las emociones del momento. Define las tuyas AHORA, antes de que el mercado te ponga a prueba:',
        features: [
          { icon: CheckCircle, title: 'Reglas de Compra', text: 'Ejemplo: "Compro $50 de BTC y $25 de SOL cada lunes a las 8am, sin importar el precio. Si el mercado cae más de 30%, agrego una compra extra con mi reserva de stablecoins." Escríbelo. Literalmente.' },
          { icon: CheckCircle, title: 'Reglas de NO Hacer', text: 'Ejemplo: "No vendo en pánico. No invierto más del X% de mis ingresos. No compro tokens que no entiendo. No tomo decisiones financieras después de medianoche o después de ver un video de un influencer." Escríbelo.' },
          { icon: CheckCircle, title: 'Meta a 1 Año', text: '¿Cuánto quieres tener invertido en 12 meses? No en ganancias (eso no lo controlas)—en capital invertido. Si tu DCA es $100/mes, tu meta es $1,200 invertidos en 1 año. Eso SÍ lo controlas.' },
          { icon: CheckCircle, title: 'Revisión Trimestral', text: 'Cada 3 meses, revisa: ¿Seguí mi DCA? ¿Mi distribución sigue en balance? ¿Necesito ajustar montos? ¿Mi seguridad está en orden? 15 minutos cada 3 meses. No mires tu portafolio todos los días—es contraproducente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Plan de Acción: Ejecuta Esta Semana',
        items: [
          'PASO 1: Verifica que tienes fondo de emergencia (3-6 meses de gastos). Si no, prioriza eso.',
          'PASO 2: Define tu portafolio base: X% BTC + X% SOL + X% ETH + X% Stablecoins. Escríbelo.',
          'PASO 3: Configura tu DCA: monto fijo + frecuencia + método (automático o manual). Empieza esta semana.',
          'PASO 4: Completa el checklist de seguridad. Frase semilla segura, 2FA activo, custodia organizada.',
          'PASO 5: Escribe tus reglas de compra, reglas de NO hacer, meta a 1 año, y fecha de revisión trimestral.',
          'RECUERDA: El mejor plan es el que ejecutas consistentemente. Perfecto no existe. Empieza con algo simple y ajusta sobre la marcha.',
          'SIGUIENTE NIVEL: El nivel intermedio te enseñará a leer gráficos, analizar proyectos, y gestionar riesgo como un profesional. Pero primero, ejecuta este plan durante al menos 3 meses.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes $500 de ahorro y ganas $1,500 al mes con gastos de $1,300. No tienes fondo de emergencia. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto los $500 en BTC porque el mercado está bajando' },
            { id: 'b', text: 'Primero construyo un fondo de emergencia de 3 meses (~$3,900-4,000). Destino $100-150/mes de mi sobrante a eso. Solo DESPUÉS empiezo a invertir en cripto con lo que sobre' },
            { id: 'c', text: 'Invierto $250 y ahorro $250' },
            { id: 'd', text: 'Espero hasta tener más dinero para empezar' }
          ],
          correctAnswer: 'b',
          explanation: 'Sin fondo de emergencia, cualquier imprevisto (enfermedad, desempleo, reparación) te obligaría a vender tu cripto en el peor momento posible—probablemente en pérdida. El fondo de emergencia es la base de toda salud financiera.'
        },
        {
          id: 'q2',
          question: 'Es lunes a las 8am. Tu DCA es $50 semanales en BTC. Pero Bitcoin subió 25% esta semana. ¿Qué haces?',
          options: [
            { id: 'a', text: 'No compro, está muy caro. Espero a que baje' },
            { id: 'b', text: 'Compro el doble porque va a seguir subiendo' },
            { id: 'c', text: 'Compro mis $50 normales como dice mi plan. DCA funciona porque elimina las decisiones emocionales. Mi plan no depende del precio de esta semana' },
            { id: 'd', text: 'Cambio mi DCA de BTC a una altcoin que no haya subido todavía' }
          ],
          correctAnswer: 'c',
          explanation: 'DCA es disciplina, no reacción. Tu plan dice $50 los lunes, sin importar el precio. Si esta semana compras menos BTC porque está caro, la próxima semana que baje comprarás más. El promedio se encarga del resto.'
        },
        {
          id: 'q3',
          question: '¿Con qué frecuencia deberías revisar y rebalancear tu portafolio cripto?',
          options: [
            { id: 'a', text: 'Todos los días para maximizar ganancias' },
            { id: 'b', text: 'Cada 3 meses: verificar distribución, ajustar DCA si necesario, revisar seguridad. 15 minutos trimestrales. Mirar el portafolio diariamente es contraproducente y genera ansiedad' },
            { id: 'c', text: 'Nunca, una vez configurado no se toca' },
            { id: 'd', text: 'Solo cuando el mercado sube para tomar ganancias' }
          ],
          correctAnswer: 'b',
          explanation: 'Revisión trimestral es el equilibrio perfecto. Suficiente para ajustar si algo cambió (ingresos, distribución desbalanceada, nueva información), pero no tan frecuente como para generar decisiones emocionales. Los que miran diario tienden a hacer trading impulsivo.'
        },
        {
          id: 'q4',
          question: 'Llevas 6 meses haciendo DCA. Tu portafolio está en -20%. Un amigo dice "vendé todo antes de perder más". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo y espero a que baje más para recomprar' },
            { id: 'b', text: 'Sigo mi plan. Mis reglas dicen "no vendo en pánico". DCA en períodos negativos es cuando acumulo MÁS por el mismo precio. Históricamente, todos los períodos de 4+ años de DCA en BTC han terminado en positivo' },
            { id: 'c', text: 'Invierto el doble para promediar el precio más rápido' },
            { id: 'd', text: 'Cambio todo a meme coins que están subiendo' }
          ],
          correctAnswer: 'b',
          explanation: 'Este es el momento de verdad que separa inversores de apostadores. Tu plan tiene reglas escritas por una razón: para seguirlas cuando las emociones te digan lo contrario. -20% en 6 meses es normal en cripto. Lo que importa es dónde estarás en 3-5 años.'
        },
        {
          id: 'q5',
          question: 'Completaste el nivel principiante. ¿Cuál debería ser tu siguiente paso concreto?',
          options: [
            { id: 'a', text: 'Empezar a hacer trading diario para ganar más rápido' },
            { id: 'b', text: 'Comprar altcoins que están subiendo en Twitter' },
            { id: 'c', text: 'Ejecutar mi plan: verificar fondo de emergencia, configurar DCA esta semana, completar checklist de seguridad, escribir mis reglas, y operar mi plan durante 3 meses antes de pasar al nivel intermedio' },
            { id: 'd', text: 'Esperar al próximo bull market para empezar' }
          ],
          correctAnswer: 'c',
          explanation: 'El conocimiento sin ejecución no vale nada. Tu plan está listo—ahora ejecútalo. 3 meses de DCA disciplinado te darán la experiencia real que ninguna lección puede enseñar. Después, el nivel intermedio te dará herramientas para optimizar tu estrategia.'
        }
      ]
    }
  },
  40: {
    id: 40,
    title: 'Staking SOL: Gana por Asegurar la Red',
    level: 'Avanzado',
    number: '2 de 11',
    duration: '30 min',
    type: 'Tutorial + Concepto',
    description: 'El staking es la forma más simple de poner tu SOL a trabajar: delegas a un validador, ayudas a asegurar la red, y ganas recompensas pasivas (~5-6% APY). Aprende la mecánica de epochs, delegación y slashing, cómo elegir un validador óptimo, las diferencias entre staking nativo y liquid staking (mSOL, jitoSOL, bSOL), y sigue un tutorial paso a paso para empezar desde Phantom o Solflare.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Te Pagan por Hacer Staking?',
        content: 'Bitcoin tiene mineros que gastan electricidad para asegurar la red. Solana tiene **validadores** que ponen SOL como garantía. Si hacen trampa, pierden su dinero. **Proof of Stake** reemplaza energía por capital en riesgo. Cuando haces staking, estás diciendo: "Confío en este validador para que sea honesto". A cambio, recibes parte de las recompensas que la red paga por procesar transacciones. Es la forma más básica de rendimiento pasivo en cripto—no necesitas entender DeFi, pools de liquidez, ni estrategias complejas. Solo delegas y ganas.',
        highlight: {
          title: 'La Magia del Staking',
          text: 'Mientras tu banco te da 0.1% anual en una cuenta de ahorros, tu SOL en staking genera ~5-6% APY. Y lo mejor: nunca pierdes la custodia de tus tokens. Tu SOL sigue siendo tuyo—solo está "comprometido" con un validador que tú eliges.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Epochs, Delegación y Recompensas',
        content: 'Solana divide el tiempo en **epochs** (~2-3 días). Al final de cada epoch, se distribuyen las recompensas proporcionalmente al stake delegado. **Delegar** significa asignar tu SOL a un validador sin enviárselo. Tu SOL nunca sale de tu wallet, solo le das "peso de voto" al validador para que participe en el consenso.',
        features: [
          { icon: RefreshCw, title: 'Epochs y Distribución', text: 'Cada epoch dura aproximadamente 2-3 días (~432,000 slots). Al final de cada epoch, la red calcula las recompensas de cada validador basándose en su rendimiento (uptime, votos correctos) y las distribuye proporcionalmente a todos los delegadores. No necesitas hacer nada—las recompensas se acumulan automáticamente en tu cuenta de stake.' },
          { icon: Shield, title: 'Slashing: El Castigo por Hacer Trampa', text: 'En teoría, si un validador actúa maliciosamente (ej: vota por dos bloques conflictivos), pierde parte de su stake y el de sus delegadores. Solana aún no tiene slashing activo en producción, pero está en el roadmap. Aun sin slashing, los validadores con mal comportamiento pierden delegadores y comisiones—hay incentivo económico para ser honesto.' },
          { icon: Award, title: 'Comisión del Validador', text: 'Los validadores cobran una comisión sobre las recompensas que generan (típicamente 0-10%). Si un validador cobra 5% de comisión y genera 100 SOL en recompensas para tu delegación, recibes 95 SOL y el validador se queda con 5 SOL. Busca validadores con comisiones razonables (<5%) pero recuerda que 0% comisión puede significar que el validador no es económicamente sostenible.' },
          { icon: Percent, title: 'APY Real vs Nominal', text: 'El APY de staking en Solana es actualmente ~5-6% (varía por epoch y validador). Pero la inflación de SOL es ~5.5% y decreciente. Esto significa que tu rendimiento REAL (después de inflación) es bajo. Sin embargo, NO hacer staking significa que tu SOL se diluye por inflación. Stakear es la defensa mínima contra la dilución.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Elegir un Buen Validador',
        content: 'No todos los validadores son iguales. La diferencia entre un buen y un mal validador puede ser 1-2% de APY anual, además de los riesgos de centralización. Usa herramientas como **StakeWiz**, **Solana Beach**, o **validators.app** para analizar validadores:',
        features: [
          { icon: Zap, title: 'Uptime y Rendimiento', text: 'Busca validadores con >98% uptime y alto porcentaje de votos exitosos ("vote success rate"). Si el validador está offline, no produce bloques ni vota, y tus recompensas se reducen. Un validador con 95% uptime te genera significativamente menos que uno con 99.5%. StakeWiz muestra el APY estimado de cada validador—compara.' },
          { icon: Users, title: 'Stake y Descentralización', text: 'Delegar a validadores pequeños y medianos ayuda a descentralizar la red. Los "superminority" (top ~20 validadores que controlan 33% del stake) ya tienen demasiado poder. Delegar a un validador fuera del top 100 con buen rendimiento es bueno para ti (menos competencia por rewards) Y bueno para la red (más descentralización).' },
          { icon: PiggyBank, title: 'Comisión vs Calidad', text: 'No elijas solo por comisión más baja. Un validador con 2% comisión y 99.8% uptime te genera MÁS que uno con 0% comisión y 96% uptime. La comisión es solo un factor. Prioriza: (1) uptime >98%, (2) fuera de superminority, (3) comisión <7%, (4) historial estable de al menos 6 meses.' },
          { icon: Search, title: 'Herramientas de Análisis', text: 'StakeWiz (stakewiz.com) es la herramienta más completa: muestra APY estimado, uptime, comisión, ubicación geográfica, y concentración de stake. Solana Beach y validators.app son alternativas. También puedes filtrar validadores directamente en Phantom y Solflare—ambas wallets muestran métricas básicas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Staking Nativo vs Liquid Staking',
        leftSide: {
          title: 'Staking Nativo (Phantom/Solflare)',
          points: [
            'Delegas directamente a un validador específico que tú eliges',
            'Tu SOL está "bloqueado": no puedes usarlo en DeFi mientras está stakeado',
            'Retiro toma 1 epoch completo (~2-3 días de cooldown)',
            'Control total, sin intermediarios ni riesgo de smart contract',
            'Ideal para holders a largo plazo que no necesitan liquidez inmediata',
            'Cero comisión de protocolo—solo la comisión del validador'
          ]
        },
        rightSide: {
          title: 'Liquid Staking (Marinade, Jito, BlazeStake)',
          points: [
            'Recibes un token (mSOL, jitoSOL, bSOL) que representa tu stake',
            'Puedes usar ese token en DeFi: préstamos, liquidez, colateral',
            'Liquidez instantánea: puedes vender/swappear el token en Jupiter sin esperar',
            'Riesgo adicional: dependes del smart contract del protocolo de liquid staking',
            'Ideal para usuarios activos de DeFi que quieren composabilidad',
            'Comisión del protocolo (típicamente 0-10% sobre rewards) además del validador'
          ]
        }
      },
      {
        type: 'main',
        title: 'Liquid Staking en Detalle: mSOL, jitoSOL y bSOL',
        content: 'El liquid staking ha crecido enormemente en Solana. Cada protocolo tiene características únicas que debes entender antes de elegir:',
        features: [
          { icon: Layers, title: 'Marinade (mSOL)', text: 'El protocolo de liquid staking más antiguo y probado de Solana. Distribuye tu stake entre cientos de validadores automáticamente (favoreciendo la descentralización). mSOL sube de precio vs SOL a medida que acumula recompensas—no necesitas "reclamar" nada. Ampliamente aceptado como colateral en DeFi (Kamino, MarginFi, etc.).' },
          { icon: Zap, title: 'Jito (jitoSOL)', text: 'Además de las recompensas normales de staking, Jito captura valor de MEV (Maximal Extractable Value) y lo redistribuye a los stakers. Esto genera un APY ligeramente superior al staking nativo. jitoSOL es extremadamente líquido y aceptado en casi todos los protocolos DeFi de Solana.' },
          { icon: Globe, title: 'BlazeStake (bSOL)', text: 'Enfocado en descentralización: distribuye stake a validadores más pequeños. También ofrece su propio sistema de incentivos con tokens BLZE. Buena opción si priorizas la salud de la red además del rendimiento.' },
          { icon: AlertTriangle, title: 'Riesgos del Liquid Staking', text: 'Dependes del smart contract del protocolo—si tiene un bug, tus fondos están en riesgo. En escenarios de estrés extremo, el token liquid (mSOL, jitoSOL) puede perder su peg temporalmente. Y al usar el token en DeFi, acumulas capas de riesgo: riesgo de staking + riesgo del protocolo de liquid staking + riesgo del protocolo DeFi donde lo depositas.' }
        ]
      },
      {
        type: 'main',
        title: 'Tutorial: Hacer Staking Paso a Paso',
        content: 'Tanto Phantom como Solflare hacen el proceso muy sencillo. Aquí el procedimiento completo para ambas opciones:',
        features: [
          { icon: Wallet, title: 'Staking Nativo en Phantom', text: '1. Abre Phantom → Tu saldo de SOL → "Start Earning SOL". 2. Explora la lista de validadores (revisa comisión y uptime). 3. Selecciona un validador fuera del superminority con <5% comisión y >98% uptime. 4. Elige la cantidad de SOL (deja 0.1-0.5 SOL para fees futuros). 5. Confirma la transacción (~0.000005 SOL de fee). 6. Tus recompensas empiezan a acumularse automáticamente cada epoch.' },
          { icon: Smartphone, title: 'Liquid Staking en Jupiter/Marinade', text: '1. Ve a jup.ag (Jupiter) o marinade.finance. 2. Conecta tu wallet. 3. Selecciona SOL → mSOL (o jitoSOL/bSOL). 4. Ingresa la cantidad. 5. Confirma el swap. 6. Recibes mSOL en tu wallet. 7. Tus recompensas se acumulan automáticamente en el precio de mSOL (sube vs SOL con el tiempo).' },
          { icon: Clock, title: 'Tiempos y Expectativas', text: 'Staking nativo: tus recompensas empiezan a acumularse desde el siguiente epoch (~2-3 días). Si retiras, hay un cooldown de 1 epoch. Liquid staking: instantáneo en ambas direcciones (depósito y retiro vía swap). Las recompensas se reflejan en el precio del token continuamente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Staking es la forma más simple de rendimiento en Solana: delegas tu SOL a un validador, ayudas a asegurar la red, y ganas ~5-6% APY. Tu SOL nunca sale de tu wallet—solo le das peso de voto al validador.',
          'Elige validadores con cuidado: >98% uptime, comisión <5-7%, fuera del superminority, y al menos 6 meses de historial estable. Usa StakeWiz para comparar métricas antes de delegar.',
          'No hacer staking es perder dinero: la inflación de SOL (~5.5% y decreciente) diluye tu holdings. Stakear es la defensa mínima contra la dilución—esencialmente mantener tu porcentaje de la red constante.',
          'Liquid staking (mSOL, jitoSOL, bSOL) te da flexibilidad para usar tu SOL stakeado en DeFi, pero añade capas de riesgo: smart contract del protocolo, posible depeg en estrés extremo, y complejidad adicional.',
          'Jito ofrece APY ligeramente superior gracias a la captura de MEV. Marinade prioriza descentralización distribuyendo entre cientos de validadores. BlazeStake incentiva validadores pequeños con tokens BLZE.',
          'Siempre deja 0.1-0.5 SOL sin stakear para pagar fees de transacciones futuras. Y recuerda: el staking es un compromiso de largo plazo—el retiro nativo tiene cooldown de ~2-3 días.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Por qué Solana te paga por hacer staking?',
          options: [
            { id: 'a', text: 'Es un regalo de la Solana Foundation para incentivar la adopción' },
            { id: 'b', text: 'Porque estás ayudando a asegurar la red con tu capital como garantía en Proof of Stake' },
            { id: 'c', text: 'Porque tu computador está minando bloques en segundo plano' },
            { id: 'd', text: 'Es un esquema Ponzi donde los nuevos stakers pagan a los anteriores' }
          ],
          correctAnswer: 'b',
          explanation: 'En Proof of Stake, los validadores (y sus delegadores) ponen capital en riesgo para asegurar la red. Las recompensas de staking provienen de la inflación programada de SOL y de las fees de transacciones—compensan el servicio de procesar y validar transacciones honestamente.'
        },
        {
          id: 'q2',
          question: '¿Qué pasa con tu SOL cuando lo delegas a un validador?',
          options: [
            { id: 'a', text: 'Se lo envías al validador y confías en que te lo devuelva' },
            { id: 'b', text: 'Nunca sale de tu wallet—solo le das peso de voto al validador y puedes retirarlo cuando quieras' },
            { id: 'c', text: 'La red lo quema temporalmente y te lo devuelve con intereses' },
            { id: 'd', text: 'Se convierte automáticamente en mSOL' }
          ],
          correctAnswer: 'b',
          explanation: 'Delegación no es envío. Tu SOL sigue siendo tuyo, solo está "comprometido" con ese validador. Puedes retirar en cualquier momento (después del cooldown de ~2-3 días). El validador nunca tiene acceso directo a tus fondos.'
        },
        {
          id: 'q3',
          question: 'Validador A: 2% comisión, 99.5% uptime. Validador B: 0% comisión, 95% uptime. ¿Cuál genera más recompensas?',
          options: [
            { id: 'a', text: 'Validador B porque 0% comisión significa que te quedas con todo' },
            { id: 'b', text: 'Validador A porque su mayor uptime genera más rewards totales, incluso con 2% de comisión' },
            { id: 'c', text: 'Generan lo mismo porque la comisión y el uptime se cancelan' },
            { id: 'd', text: 'No se puede saber sin ver el APY en StakeWiz' }
          ],
          correctAnswer: 'b',
          explanation: 'El uptime tiene un impacto mayor que la comisión. Un validador con 99.5% uptime genera significativamente más recompensas brutas que uno con 95%. Incluso después de pagar 2% de comisión, recibes más. La comisión es solo un factor—prioriza uptime y rendimiento.'
        },
        {
          id: 'q4',
          question: 'Tienes 100 SOL y quieres usar DeFi mientras haces staking. ¿Cuál es la mejor opción?',
          options: [
            { id: 'a', text: 'Staking nativo en Phantom y esperar al cooldown cada vez que necesites usar DeFi' },
            { id: 'b', text: 'Liquid staking (mSOL, jitoSOL) para recibir un token que puedes usar en DeFi mientras ganas staking rewards' },
            { id: 'c', text: 'No es posible hacer staking y DeFi al mismo tiempo' },
            { id: 'd', text: 'Dividir 50/50 entre staking nativo y SOL líquido para DeFi' }
          ],
          correctAnswer: 'b',
          explanation: 'El liquid staking te da un token derivado (mSOL, jitoSOL, bSOL) que representa tu SOL stakeado. Puedes depositar ese token como colateral en préstamos, en pools de liquidez, o en otras estrategias DeFi—mientras sigues ganando staking rewards. Es la composabilidad de DeFi en acción.'
        },
        {
          id: 'q5',
          question: '¿Qué es un "epoch" en Solana y por qué importa para staking?',
          options: [
            { id: 'a', text: 'Un periodo de ~2-3 días al final del cual se calculan y distribuyen las recompensas de staking' },
            { id: 'b', text: 'El nombre del token de gobernanza de Solana' },
            { id: 'c', text: 'Una actualización de software que los validadores deben instalar' },
            { id: 'd', text: 'El tiempo que toma confirmar una transacción individual' }
          ],
          correctAnswer: 'a',
          explanation: 'Solana divide el tiempo en epochs (~432,000 slots, ~2-3 días). Al final de cada epoch, la red calcula el rendimiento de cada validador y distribuye recompensas proporcionalmente al stake delegado. Tus recompensas se acumulan automáticamente epoch tras epoch.'
        },
        {
          id: 'q6',
          question: '¿Por qué es importante hacer staking incluso si el APY real (descontando inflación) es bajo?',
          options: [
            { id: 'a', text: 'No es importante—si el APY real es bajo, mejor no stakear' },
            { id: 'b', text: 'Porque sin staking, la inflación de SOL diluye tu holdings. Stakear mantiene tu porcentaje de la red constante' },
            { id: 'c', text: 'Porque la Solana Foundation te penaliza si no stakeas' },
            { id: 'd', text: 'Solo para poder votar en la gobernanza de Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'La inflación de SOL (~5.5% y decreciente) crea nuevos tokens constantemente. Si no stakeas, tu porcentaje de la red total se reduce—estás siendo diluido. Stakear es la defensa mínima: tus recompensas compensan la inflación, manteniendo tu proporción de SOL en la red aproximadamente constante.'
        }
      ]
    }
  }
};