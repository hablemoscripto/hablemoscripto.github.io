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
        { id: 10, title: 'Redes y Fees: La Ventaja de Solana', description: 'Por qué usamos Solana: Velocidad, costos y comunidad.', duration: '20 min', type: 'Comparativa' },
        { id: 35, title: 'Obteniendo tus Primeros SOL', description: 'Cómo convertir tu dinero local a Cripto usando Exchanges.', duration: '25 min', type: 'Tutorial' },
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
        title: 'Del Trueque a la Deuda',
        content: 'El dinero no es riqueza; es una **tecnología** para transportar valor a través del tiempo y el espacio. Comenzamos con el trueque (ineficiente), pasamos a metales preciosos (difíciles de dividir) y llegamos al papel moneda.',
        highlight: { title: 'Concepto Clave', text: 'El dinero debe ser escaso, divisible, durable, portable y fungible. El oro cumplía esto. El papel moneda solo cumple algunos.' }
      },
      {
        type: 'main',
        title: 'La Ruptura de 1971',
        content: 'Hasta 1971, el dólar estaba respaldado por oro. Richard Nixon rompió esta promesa temporalmente (para siempre). Desde entonces, vivimos en un experimento de **Dinero Fiat**: dinero por decreto, respaldado solo por la confianza en los políticos.',
        features: [
          { icon: Anchor, title: 'Patrón Oro', text: 'El gobierno no podía imprimir más billetes si no tenía más oro.' },
          { icon: Scissors, title: 'Dinero Fiat', text: 'Se puede crear infinitamente con un botón. Su valor depende de que la gente confíe en él.' }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué respalda al dólar hoy en día?', options: [{ id: 'a', text: 'Oro en Fort Knox' }, { id: 'b', text: 'Nada, es Fiat (confianza)' }, { id: 'c', text: 'Petróleo' }], correctAnswer: 'b', explanation: 'Desde 1971, el dinero es Fiat, respaldado únicamente por la confianza en el gobierno emisor.' }
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
        title: 'El Impuesto Invisible',
        content: '¿Alguna vez te has preguntado por qué todo es más caro cada año? No es que las cosas valgan más, es que **tu dinero vale menos**. La inflación no es un accidente; es una característica del sistema fiat diseñada para incentivar el gasto y la deuda.',
        highlight: { title: 'Dato Real', text: 'El dólar ha perdido más del 96% de su poder adquisitivo desde la creación de la Reserva Federal en 1913.' }
      },
      {
        type: 'main',
        title: '¿Cómo se Crea el Dinero?',
        content: 'La mayoría de la gente cree que el gobierno imprime dinero basado en oro. Falso. El dinero se crea de la nada (Dinero Fiat) principalmente a través de deuda.',
        features: [
          { icon: Landmark, title: 'Bancos Centrales', text: 'Pueden "imprimir" trillones con un clic para comprar deuda del gobierno o rescatar bancos.' },
          { icon: Percent, title: 'Reserva Fraccionaria', text: 'Tu banco no tiene tu dinero. Por cada $100 que depositas, ellos prestan $90 a otros. Si todos retiran a la vez, el banco quiebra.' },
          { icon: TrendingDown, title: 'Oferta y Demanda', text: 'Al inundar el mercado con nuevos billetes, cada billete individual vale menos. Tus ahorros se diluyen.' }
        ]
      },
      {
        type: 'main',
        title: 'El Efecto Cantillon: ¿Quién Gana?',
        content: 'Cuando se imprime dinero nuevo, no se distribuye equitativamente. Los primeros en recibirlo (Grandes Bancos, Gobierno, Corporaciones cercanas) compran activos a precios viejos. Para cuando el dinero llega a ti (salarios), los precios ya subieron.',
        highlight: { title: 'La Injusticia', text: 'La impresión de dinero es una transferencia de riqueza de los ahorradores pobres a los dueños de activos ricos.' }
      },
      {
        type: 'takeaways',
        title: 'Por qué Crypto es Diferente',
        items: [
          'Bitcoin tiene un suministro fijo (21M). Nadie puede imprimir más.',
          'Solana permite mover valor globalmente sin permiso de bancos.',
          'Crypto es la salida pacífica de un sistema diseñado para devaluar tu trabajo.'
        ]
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Qué respalda al dólar o al peso hoy en día?', options: [{ id: 'a', text: 'Oro en bóvedas' }, { id: 'b', text: 'Nada, solo la confianza (Fiat)' }, { id: 'c', text: 'Petróleo' }], correctAnswer: 'b', explanation: 'Desde 1971, el dinero no tiene respaldo físico. Es dinero por decreto (Fiat).' },
        { id: 'q2', question: '¿Quién se beneficia primero de la impresión de dinero?', options: [{ id: 'a', text: 'Los trabajadores' }, { id: 'b', text: 'Los jubilados' }, { id: 'c', text: 'El gobierno y los grandes bancos (Efecto Cantillon)' }], correctAnswer: 'c', explanation: 'El dinero nuevo entra por la cima de la pirámide, inflando activos antes de llegar a los salarios.' }
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
        { id: 'q1', question: '¿Qué es el Efecto Cantillon?', options: [{ id: 'a', text: 'Una marca de vino' }, { id: 'b', text: 'El beneficio de recibir dinero nuevo primero' }, { id: 'c', text: 'Una criptomoneda' }], correctAnswer: 'b', explanation: 'Richard Cantillon describió cómo el dinero entra en la economía de forma desigual.' }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Bitcoin: La Salida',
    level: 'Principiante',
    number: '4 de 20',
    duration: '18 minutos',
    type: 'Video + Texto',
    description: 'Ante la corrupción del dinero Fiat, surge una solución matemática, descentralizada e inmutable.',
    sections: [
      {
        type: 'intro',
        title: 'Oro Digital',
        content: 'En 2008, durante la crisis financiera, Satoshi Nakamoto lanzó Bitcoin. No es una empresa, no tiene CEO. Es un protocolo matemático que garantiza **escasez digital**. Solo existirán 21 millones.',
        highlight: { title: 'La Solución', text: 'Bitcoin es la separación del dinero y el estado. Nadie puede imprimir más Bitcoin para pagar deudas políticas.' }
      }
    ],
    quiz: {
      questions: [
        { id: 'q1', question: '¿Cuál es el límite de suministro de Bitcoin?', options: [{ id: 'a', text: 'Infinito' }, { id: 'b', text: '21 Millones' }, { id: 'c', text: '100 Millones' }], correctAnswer: 'b', explanation: 'La escasez fija es lo que protege a Bitcoin de la inflación.' }
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
        { id: 'q1', question: '¿Se puede borrar una transacción de la Blockchain?', options: [{ id: 'a', text: 'Sí, el banco puede' }, { id: 'b', text: 'No, es inmutable' }, { id: 'c', text: 'Solo si pagas' }], correctAnswer: 'b', explanation: 'La inmutabilidad es la característica clave que genera confianza sin intermediarios.' }
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
        { id: 'q1', question: '¿Quién controla Bitcoin?', options: [{ id: 'a', text: 'El CEO de Bitcoin' }, { id: 'b', text: 'Nadie (es descentralizado)' }, { id: 'c', text: 'El gobierno' }], correctAnswer: 'b', explanation: 'No hay autoridad central.' }
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
        { id: 'q1', question: '¿Qué pasa si dejas tu dinero en un exchange y este quiebra?', options: [{ id: 'a', text: 'El gobierno te lo devuelve' }, { id: 'b', text: 'Probablemente lo pierdas' }, { id: 'c', text: 'No pasa nada' }], correctAnswer: 'b', explanation: 'En un exchange, eres un acreedor no garantizado. La autocustodia es vital.' }
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
        { id: 'q1', question: '¿Dónde es seguro guardar tu frase semilla?', options: [{ id: 'a', text: 'En Google Drive' }, { id: 'b', text: 'Escrita en papel en un lugar seguro' }, { id: 'c', text: 'En una foto en el celular' }], correctAnswer: 'b', explanation: 'Cualquier medio digital puede ser hackeado. El papel ("air-gapped") es lo más seguro para empezar.' }
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
        { id: 'q1', question: '¿De dónde debes descargar Phantom?', options: [{ id: 'a', text: 'Cualquier link de Google' }, { id: 'b', text: 'Sitio oficial phantom.app o App Stores oficiales' }, { id: 'c', text: 'Un archivo que te mandaron por Telegram' }], correctAnswer: 'b', explanation: 'Siempre verifica la fuente oficial para evitar versiones falsas que roban fondos.' }
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
        { id: 'q1', question: '¿Cuál es la principal ventaja de usuario de Solana sobre ETH?', options: [{ id: 'a', text: 'Es más viejo' }, { id: 'b', text: 'Costos de fracción de centavo y velocidad instantánea' }, { id: 'c', text: 'Es más difícil de usar' }], correctAnswer: 'b', explanation: 'La usabilidad (bajos costos + velocidad) hace que Solana sea viable para el uso diario masivo.' },
        { id: 'q2', question: '¿Qué herramienta de Solana reemplaza a Uniswap con mejores funciones?', options: [{ id: 'a', text: 'Jupiter (JUP)' }, { id: 'b', text: 'Pancakeswap' }, { id: 'c', text: 'Curve' }], correctAnswer: 'a', explanation: 'Jupiter es el agregador líder en Solana, ofreciendo DCA, órdenes límite y swaps con la mejor ruta.' }
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
        { id: 'q1', question: 'Al retirar SOL de Binance a Phantom, ¿qué red eliges?', options: [{ id: 'a', text: 'Ethereum (ERC20)' }, { id: 'b', text: 'Solana (SOL)' }, { id: 'c', text: 'Bitcoin' }], correctAnswer: 'b', explanation: 'Debes usar la red nativa de la wallet destino. Phantom es una wallet de Solana.' }
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
        { id: 'q1', question: '¿Qué debes hacer antes de enviar una cantidad grande?', options: [{ id: 'a', text: 'Rezar' }, { id: 'b', text: 'Enviar una transacción de prueba pequeña' }, { id: 'c', text: 'Enviar todo rápido' }], correctAnswer: 'b', explanation: 'Siempre prueba la dirección con un monto mínimo para asegurar que todo esté correcto.' }
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
        { id: 'q1', question: '¿Para qué sirve Solscan?', options: [{ id: 'a', text: 'Para minar' }, { id: 'b', text: 'Para verificar transacciones y cuentas en la blockchain' }, { id: 'c', text: 'Para chatear' }], correctAnswer: 'b', explanation: 'Es el explorador de bloques de Solana, la fuente de verdad de la red.' }
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
        { id: 'q1', question: 'Recibes un NFT gratis desconocido en tu wallet que dice "Visita esta web para reclamar $1000". ¿Qué haces?', options: [{ id: 'a', text: 'Visito la web rápido' }, { id: 'b', text: 'Lo ignoro y lo quemo/oculto (Es Scam)' }, { id: 'c', text: 'Se lo mando a un amigo' }], correctAnswer: 'b', explanation: 'Es una estafa común. Si interactúas con la web, drenarán tu wallet.' }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué indica una mecha larga superior?', options: [{ id: 'a', text: 'Fuerza compradora' }, { id: 'b', text: 'Rechazo de precios altos (presión vendedora)' }, { id: 'c', text: 'Indecisión' }], correctAnswer: 'b', explanation: 'Los vendedores empujaron el precio hacia abajo desde el máximo.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué pasa cuando una resistencia se rompe?', options: [{ id: 'a', text: 'Desaparece' }, { id: 'b', text: 'Suele convertirse en soporte' }, { id: 'c', text: 'El precio cae' }], correctAnswer: 'b', explanation: 'Flip S/R: El techo roto se convierte en el nuevo piso.' }] }
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
    quiz: { questions: [{ id: 'q1', question: 'Un RSI arriba de 70 indica...', options: [{ id: 'a', text: 'Sobreventa (barato)' }, { id: 'b', text: 'Sobrecompra (posible corrección)' }, { id: 'c', text: 'Tendencia lateral' }], correctAnswer: 'b', explanation: 'El precio ha subido muy rápido y podría necesitar un descanso.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué rompe una tendencia alcista?', options: [{ id: 'a', text: 'Un nuevo alto' }, { id: 'b', text: 'Hacer un bajo más bajo que el anterior (Lower Low)' }, { id: 'c', text: 'Una vela roja' }], correctAnswer: 'b', explanation: 'El cambio de estructura (Market Structure Break) señala posible reversión.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué significa un "Unlock" de tokens grande?', options: [{ id: 'a', text: 'El precio subirá' }, { id: 'b', text: 'Posible presión de venta (inflación repentina)' }, { id: 'c', text: 'Nada' }], correctAnswer: 'b', explanation: 'Más oferta en el mercado sin más demanda suele bajar el precio.' }] }
  },
  18: {
    id: 18,
    title: 'Ciclos de Mercado (Halving)',
    level: 'Intermedio',
    number: '6 de 12',
    duration: '26 min',
    type: 'Análisis',
    description: 'Todo en cripto se mueve al ritmo de Bitcoin. Entiende los ciclos de 4 años.',
    sections: [{ type: 'intro', title: 'El Director de Orquesta', content: 'Bitcoin dirige el mercado. Cuando BTC estornuda, las Altcoins se resfrían. Entiende el flujo de dinero: BTC -> ETH -> Alts (Solana).' }],
    quiz: { questions: [{ id: 'q1', question: '¿Qué es una "Altcoin Season"?', options: [{ id: 'a', text: 'Cuando BTC sube solo' }, { id: 'b', text: 'Cuando el capital rota de BTC a monedas más pequeñas (como SOL)' }, { id: 'c', text: 'Invierno' }], correctAnswer: 'b', explanation: 'Ocurre cuando los inversores buscan mayor riesgo/retorno después de que BTC ha subido.' }] }
  },
  19: {
    id: 19,
    title: 'Investigación de Proyectos',
    level: 'Intermedio',
    number: '7 de 12',
    duration: '30 min',
    type: 'Casos Prácticos',
    description: 'DYOR (Do Your Own Research). Cómo investigar antes de invertir tu dinero.',
    sections: [{ type: 'main', title: 'Herramientas', content: 'Usa DefiLlama para ver TVL, Token Terminal para ver ganancias reales, y Twitter para sentimiento.' }],
    quiz: { questions: [{ id: 'q1', question: '¿Qué indica un TVL (Total Value Locked) creciente?', options: [{ id: 'a', text: 'Nadie usa el protocolo' }, { id: 'b', text: 'Confianza y uso creciente del protocolo' }, { id: 'c', text: 'Es una estafa' }], correctAnswer: 'b', explanation: 'Más dinero depositado suele indicar salud en un protocolo DeFi.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué debes hacer cuando una narrativa está en todos los medios masivos?', options: [{ id: 'a', text: 'Comprar todo' }, { id: 'b', text: 'Considerar vender (ya es tarde)' }, { id: 'c', text: 'Esperar' }], correctAnswer: 'b', explanation: 'Cuando llega a las noticias generales, usualmente el movimiento explosivo ya pasó.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Por qué tener USDC en el portafolio?', options: [{ id: 'a', text: 'Para no ganar nada' }, { id: 'b', text: 'Para comprar oportunidades cuando el mercado cae' }, { id: 'c', text: 'Es obligatorio' }], correctAnswer: 'b', explanation: 'La liquidez ("pólvora seca") te permite aprovechar correcciones.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Cuándo defines tu Stop Loss?', options: [{ id: 'a', text: 'Cuando vas perdiendo mucho' }, { id: 'b', text: 'ANTES de entrar a la operación' }, { id: 'c', text: 'Nunca' }], correctAnswer: 'b', explanation: 'Debe ser parte de tu plan inicial, sin emociones involucradas.' }] }
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
    quiz: { questions: [{ id: 'q1', question: '¿Qué es vender escalonadamente?', options: [{ id: 'a', text: 'Vender todo de golpe' }, { id: 'b', text: 'Vender porcentajes (25%, 50%) a medida que el precio sube' }, { id: 'c', text: 'Vender cuando baja' }], correctAnswer: 'b', explanation: 'Aseguras ganancias pero dejas una parte por si sigue subiendo ("Moonbag").' }] }
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
    quiz: { questions: [{ id: 'q1', question: 'Ves una moneda subiendo verticalmente 100% en una hora. ¿Qué haces?', options: [{ id: 'a', text: 'Compro ya (FOMO)' }, { id: 'b', text: 'Espero un retroceso o busco otra oportunidad' }, { id: 'c', text: 'Pido un préstamo' }], correctAnswer: 'b', explanation: 'Nunca persigas velas verdes. El riesgo de comprar en el pico es máximo.' }] }
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
        { id: 'q1', question: '¿Qué ventaja tiene Jupiter sobre un DEX simple?', options: [{ id: 'a', text: 'Ninguna' }, { id: 'b', text: 'Busca la mejor ruta de precio entre todos los DEXs (Agregador)' }, { id: 'c', text: 'Es más caro' }], correctAnswer: 'b', explanation: 'Al agregar liquidez de todos lados, minimiza el impacto en el precio (Slippage).' }
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
        { id: 'q1', question: '¿De dónde salen los rendimientos (Yield) reales?', options: [{ id: 'a', text: 'Magia' }, { id: 'b', text: 'De las comisiones que pagan los traders por intercambiar tokens' }, { id: 'c', text: 'Del gobierno' }], correctAnswer: 'b', explanation: 'El "Real Yield" proviene de actividad económica real (fees), no de impresión de tokens.' }
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
        { id: 'q1', question: '¿Para qué sirve depositar colateral?', options: [{ id: 'a', text: 'Para guardarlo' }, { id: 'b', text: 'Para pedir un préstamo sobre él sin venderlo' }, { id: 'c', text: 'Para regalarlo' }], correctAnswer: 'b', explanation: 'Es la base de las finanzas descentralizadas y el apalancamiento.' }
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
        { id: 'q1', question: 'Si SOL se dispara un 100% mientras estás en un pool SOL-USDC, ¿qué pasa?', options: [{ id: 'a', text: 'Ganas más que holdeando' }, { id: 'b', text: 'Tienes menos SOL que al inicio (Impermanent Loss)' }, { id: 'c', text: 'Nada' }], correctAnswer: 'b', explanation: 'El AMM rebalancea vendiendo el activo ganador. Es el costo de oportunidad de ser LP.' }
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
        { id: 'q1', question: '¿Qué permite la tecnología de compresión de Solana (cNFTs)?', options: [{ id: 'a', text: 'Imágenes borrosas' }, { id: 'b', text: 'Crear millones de NFTs a costo casi cero' }, { id: 'c', text: 'Nada nuevo' }], correctAnswer: 'b', explanation: 'Esto habilita casos de uso masivos como tickets, recibos y gaming que antes eran muy caros.' }
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
        { id: 'q1', question: '¿Cuál es la mejor forma de calificar para airdrops?', options: [{ id: 'a', text: 'Crear 1000 wallets con $1' }, { id: 'b', text: 'Ser un usuario real, constante y con volumen orgánico' }, { id: 'c', text: 'Pedir al dev por DM' }], correctAnswer: 'b', explanation: 'Los protocolos filtran a los bots. El uso orgánico y real es lo que más se premia.' }
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
        { id: 'q1', question: '¿Qué es DePIN?', options: [{ id: 'a', text: 'Un memecoin' }, { id: 'b', text: 'Redes de infraestructura física descentralizada' }, { id: 'c', text: 'Un exchange' }], correctAnswer: 'b', explanation: 'Es el uso de crypto para coordinar construcción de infraestructura real (mapas, telecomunicaciones, etc).' }
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
        { id: 'q1', question: '¿Cuál es la ventaja de una chain Monolítica como Solana?', options: [{ id: 'a', text: 'Es más lenta' }, { id: 'b', text: 'Toda la liquidez y apps están en el mismo lugar (Componibilidad sincrónica)' }, { id: 'c', text: 'Es más cara' }], correctAnswer: 'b', explanation: 'Elimina la necesidad de bridges complejos y fragmentación que sufren los ecosistemas modulares.' }
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
        { id: 'q1', question: '¿Qué es Firedancer?', options: [{ id: 'a', text: 'Un nuevo token' }, { id: 'b', text: 'Un nuevo cliente de software para hacer Solana más rápida y segura' }, { id: 'c', text: 'Un juego' }], correctAnswer: 'b', explanation: 'Es una reescritura completa del código base de Solana optimizada para rendimiento extremo.' }
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
        { id: 'q1', question: '¿Para qué usar una "Burner Wallet"?', options: [{ id: 'a', text: 'Para quemar dinero' }, { id: 'b', text: 'Para interactuar con sitios de riesgo sin exponer tus ahorros principales' }, { id: 'c', text: 'Es ilegal' }], correctAnswer: 'b', explanation: 'Aísla el riesgo. Si la burner es hackeada, solo pierdes lo que tenía esa wallet, no tu patrimonio.' }
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
        { id: 'q1', question: '¿Qué ventaja tiene una tarjeta cripto?', options: [{ id: 'a', text: 'Es de metal' }, { id: 'b', text: 'Permite gastar tus activos sin pasar por un banco tradicional' }, { id: 'c', text: 'Es gratis' }], correctAnswer: 'b', explanation: 'Conectan el mundo DeFi con el sistema de pagos tradicional Visa/Mastercard.' }
      ]
    }
  }
};