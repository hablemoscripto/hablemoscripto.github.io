import type { InfographicSpec } from '../components/lesson/infographics/spec';

// AUTO-ASSEMBLED from the approved brief (workflow) + bespoke/interactive overrides.
// Keyed by lesson id -> exact section title. lessonService attaches these at read
// time, so it works for free (bundled) and paid (DB) lessons with no re-seed.
export const LESSON_INFOGRAPHICS: Record<number, Record<string, InfographicSpec>> = {
  1: {
    "El Experimento de 5,000 Años: Del Trueque al Oro": {
      "kind": "steps",
      "steps": [
        { "title": "Conchas cowrie (África y Asia)", "detail": "Funcionaron por siglos, hasta que llegaron barcos llenos de conchas de otras costas. La oferta se multiplicó y perdieron valor. Falló la escasez.", "warning": true },
        { "title": "Sal", "detail": "Útil y divisible, pero se daña con la humedad y es fácil de producir donde hay mar. Fallaron la durabilidad y la escasez.", "warning": true },
        { "title": "Ganado", "detail": "Valioso, pero no se puede dividir para compras pequeñas ni llevar de un lado a otro. Fallaron la divisibilidad y la portabilidad.", "warning": true },
        { "title": "Oro y plata", "detail": "Escasos, durables, divisibles y fáciles de reconocer. Todo el oro extraído en la historia cabría en un cubo de unos 22 metros de lado." }
      ]
    },
    "Antes vs Después de 1971": {
      "kind": "component",
      "key": "gold-vs-fiat-1971"
    },
    "La Ruptura de 1971: El Día que Cambió Todo": {
      "kind": "component",
      "key": "inflation-calculator"
    },
    "Las 6 Propiedades del Dinero Perfecto": {
      "kind": "iconGrid",
      "columns": 3,
      "intro": "El buen dinero debe cumplir 6 propiedades. El oro las cumplió por milenios. El dinero fiat cumple casi todas, pero su oferta no tiene un límite fijo: depende de decisiones de política.",
      "items": [
        { "icon": "Gem", "title": "Escasez", "text": "Si no es escaso, pierde valor." },
        { "icon": "Scissors", "title": "Divisibilidad", "text": "Para compras pequeñas, no solo grandes." },
        { "icon": "Shield", "title": "Durabilidad", "text": "Si no, desaparece con el tiempo." },
        { "icon": "Wallet", "title": "Portabilidad", "text": "Fácil de llevar y de usar." },
        { "icon": "Coins", "title": "Fungibilidad", "text": "Cada unidad vale exactamente igual." },
        { "icon": "Search", "title": "Verificabilidad", "text": "Para que no te puedan engañar." }
      ]
    }
  },
  2: {
    "2. Los Bancos Multiplican (Reserva Fraccionaria)": {
      "kind": "component",
      "key": "deposit-multiplier"
    },
    "3. El Resultado Matemático": {
      "kind": "comparison",
      "left": {
        "title": "Si el dinero crece más que los bienes",
        "tone": "red",
        "points": [
          "Hay más dinero persiguiendo la misma cantidad de cosas",
          "Los precios tienden a subir",
          "Tu sueldo y tus ahorros compran menos si no suben al mismo ritmo"
        ]
      },
      "right": {
        "title": "Pero no es automático",
        "tone": "neutral",
        "points": [
          "Entre 2008 y 2019 se creó mucho dinero y la inflación al consumidor se mantuvo baja",
          "Gran parte se quedó en activos financieros: acciones, bonos e inmuebles (lo verás en la Lección 3)",
          "También influyen la productividad, la demanda y las expectativas"
        ]
      },
      "note": "La relación entre dinero y precios es más clara a largo plazo y cuando la inflación es alta."
    },
    "4. La Ilusión del Aumento de Sueldo": {
      "kind": "component",
      "key": "salary-illusion"
    },
    "El Robo Silencioso que Nadie Te Explicó": {
      "kind": "statCards",
      "intro": "El salario mínimo de EE. UU., medido en oro y en precios al consumidor:",
      "columns": 3,
      "cards": [
        { "value": "~7.9 oz", "label": "De oro al mes en 1971", "sublabel": "$1.60 la hora, con el oro a $35 la onza", "tone": "amber" },
        { "value": "~0.31 oz", "label": "De oro al mes hoy", "sublabel": "$7.25 la hora, con el oro cerca de $4,070 la onza", "tone": "red" },
        { "value": "−43%", "label": "Poder de compra real", "sublabel": "Frente a 1968, ajustado por inflación al consumidor (EPI)", "tone": "red" }
      ]
    },
    "Casos Reales: Cuando la Inflación Destruye Países": {
      "kind": "component",
      "key": "hyperinflation-cases"
    },
    "¿Y Colombia? ¿Y México? ¿Y el dólar?": {
      "kind": "statCards",
      "cards": [
        {
          "value": "≈ −50%",
          "label": "Peso colombiano vs dólar",
          "sublabel": "Desde 2000: de ~2,000 a 3,500-4,500 por dólar, con picos sobre 5,000 en 2022",
          "tone": "red",
          "flag": "🇨🇴"
        },
        {
          "value": "De 10 a 25",
          "label": "Pesos por dólar en México",
          "sublabel": "De ~10 en 2008 a más de 20 en 2016-2017 y ~25 en la pandemia de 2020",
          "tone": "amber",
          "flag": "🇲🇽"
        },
        {
          "value": "−96%",
          "label": "Poder adquisitivo del dólar",
          "sublabel": "Desde 1913, creación de la Reserva Federal",
          "tone": "red",
          "flag": "🇺🇸"
        }
      ],
      "intro": "No pasa solo en países con hiperinflación. Mira los datos.",
      "columns": 3
    },
    "Por Qué a los Gobiernos les Conviene la Inflación": {
      "kind": "component",
      "key": "govt-loves-inflation"
    },
    "1. El Banco Central Imprime": {
      "kind": "steps",
      "intro": "Cómo entra el dinero nuevo a la economía (versión simplificada):",
      "steps": [
        { "title": "El banco central compra bonos", "detail": "Paga con reservas que crea en ese momento. Ese dinero no existía antes." },
        { "title": "Los bancos reciben las reservas", "detail": "Con más reservas y tasas bajas, prestan más y más barato." },
        { "title": "El crédito llega a empresas y fondos", "detail": "Compran acciones, inmuebles y otros activos. Sus precios suben primero." },
        { "title": "Por último, los salarios", "detail": "Cuando el dinero llega a los sueldos, muchos precios ya subieron.", "warning": true }
      ]
    },
    "Por Qué Tu Inflación No Coincide con la Oficial": {
      "kind": "iconGrid",
      "columns": 2,
      "items": [
        { "icon": "Repeat", "title": "Sustitución", "text": "Si la carne sube mucho, el índice asume que parte de la gente cambia a pollo." },
        { "icon": "Cpu", "title": "Ajuste por calidad", "text": "Si un computador cuesta igual pero es mucho mejor, el índice registra una baja de precio." },
        { "icon": "Scissors", "title": "Inflación núcleo", "text": "Excluye alimentos y energía por volátiles. El IPC total sí los incluye: fíjate cuál citan." },
        { "icon": "Wallet", "title": "Tu canasta", "text": "Arriendo, comida y transporte pesan más en tu bolsillo que en el promedio nacional." }
      ]
    }
  },
  3: {
    "Una Idea de 300 Años que Ayuda a Explicar la Desigualdad": {
      "kind": "component",
      "key": "cantillon-flow"
    },
    "Cómo Funciona: El Camino del Dinero Nuevo": {
      "kind": "steps",
      "steps": [
        { "title": "El banco central crea reservas", "detail": "Compra bonos del gobierno o de los bancos y paga con dinero que crea en ese momento." },
        { "title": "Los bancos grandes lo reciben primero", "detail": "Son quienes le venden esos bonos. Con más reservas y tasas bajas, prestan más y más barato." },
        { "title": "Empresas y fondos compran activos", "detail": "Con crédito barato compran acciones, empresas e inmuebles. Esos precios suben primero." },
        { "title": "El dinero llega a la economía real", "detail": "Meses o años después, en forma de más empleo o salarios algo mayores." },
        { "title": "Tu sueldo se ajusta al final", "detail": "Cuando llega, muchos precios ya subieron. Por eso un aumento puede no alcanzar.", "warning": true }
      ]
    },
    "Los Ganadores vs Los Perdedores": {
      "kind": "comparison",
      "left": {
        "title": "Cerca del dinero nuevo (suelen ganar)",
        "points": [
          "Bancos que tratan con el banco central",
          "Gobiernos endeudados: su deuda pesa menos",
          "Grandes empresas con crédito barato",
          "Fondos de inversión y hedge funds",
          "Dueños de activos: acciones, casas, Bitcoin",
          "Deudas grandes a tasa fija"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Lejos del dinero nuevo (suelen perder)",
        "points": [
          "Asalariados: el sueldo se ajusta de último",
          "Pensionados con ingreso fijo",
          "Ahorradores en efectivo o con tasa baja",
          "Clase media sin activos significativos",
          "Jóvenes que buscan su primera vivienda",
          "Pequeños negocios sin crédito barato"
        ],
        "tone": "red"
      },
      "note": "El dinero nuevo no llega a todos a la vez: los primeros compran a precios de ayer."
    },
    "Ejemplo Concreto: La Pandemia 2020-2022": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "Marzo 2020",
          "detail": "Las bolsas caen más de 30%. El 23 de marzo la Fed anuncia compras de bonos sin límite y el S&P 500 toca fondo ese día."
        },
        {
          "label": "2020-2021",
          "detail": "El S&P 500 se duplica desde el piso, las casas en EE. UU. suben más de 30% y Bitcoin pasa de unos $5,000 a $69,000."
        },
        {
          "label": "Mientras tanto",
          "detail": "Desempleo de 14.7% en abril de 2020. Los cheques (hasta $3,200 por adulto) ayudaron a sobrevivir, no a comprar activos antes de que subieran."
        },
        {
          "label": "2022",
          "detail": "Inflación de 9.1% en junio, la más alta en 40 años. Los salarios suben menos que los precios."
        },
        {
          "label": "Resultado",
          "detail": "Según Oxfam, el 1% más rico se quedó con unos 26 de los 42 billones de dólares de riqueza nueva de 2020-2021.",
          "highlight": true
        }
      ]
    },
    "Bitcoin: Una Salida del Sistema Cantillon": {
      "kind": "iconGrid",
      "columns": 2,
      "items": [
        { "icon": "Clock", "title": "Emisión pública", "text": "El calendario de emisión se conoce desde 2009. No hay anuncios sorpresa." },
        { "icon": "Scale", "title": "Sin emisor que elija", "text": "Nadie decide a quién llega primero el dinero nuevo. Los mineros pagan su costo completo." },
        { "icon": "Globe", "title": "Acceso abierto", "text": "Cualquiera con internet puede usarlo, sin ser cliente preferencial de un banco." },
        { "icon": "AlertTriangle", "title": "Lo que no resuelve", "text": "Los primeros en adoptarlo concentran mucho BTC. Reglas iguales no significan punto de partida igual." }
      ]
    }
  },
  4: {
    "Bitcoin vs Oro vs Dólar": {
      "kind": "comparison",
      "left": {
        "title": "Oro (5,000 años de historia)",
        "points": [
          "Escaso, pero se sigue minando",
          "Difícil de dividir (no pagas café con pepitas)",
          "Costoso de almacenar y asegurar",
          "Imposible de enviar por internet",
          "Confiscable (EE. UU. obligó a entregarlo en 1933)",
          "Menos volátil y con milenios de historia"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Bitcoin (dinero del siglo XXI)",
        "points": [
          "Oferta fija de 21 millones, verificable",
          "Divisible hasta 8 decimales (satoshis)",
          "Almacenable con frase semilla + respaldo físico seguro",
          "Enviable a cualquier país en minutos",
          "Muy difícil de confiscar sin tu clave o sin coacción",
          "Muy volátil y con solo 17 años de historia"
        ],
        "tone": "green"
      },
      "note": "Y el dólar fiat no tiene un límite fijo de emisión: su poder de compra baja con el tiempo."
    },
    "Entendiendo la Escasez: ¿Por Qué Solo 21 Millones?": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "2009",
          "detail": "50 BTC cada 10 minutos"
        },
        {
          "label": "1er halving",
          "detail": "25 BTC cada 10 minutos"
        },
        {
          "label": "2do halving",
          "detail": "12.5 BTC cada 10 minutos"
        },
        {
          "label": "3er halving",
          "detail": "6.25 BTC cada 10 minutos"
        },
        {
          "label": "Abril 2024 (4to)",
          "detail": "3.125 BTC cada 10 minutos"
        },
        {
          "label": "2140",
          "detail": "0 BTC nuevos: tope alcanzado",
          "highlight": true
        }
      ],
      "intro": "Cada ~4 años el Bitcoin nuevo se reduce a la mitad. Emisión decreciente programada, no inflación discrecional."
    },
    "Las 4 Innovaciones que Cambian Todo": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Lock",
          "title": "Escasez digital absoluta",
          "text": "Solo 21 millones. Cambiarlo exigiría el acuerdo de casi toda la red."
        },
        {
          "icon": "Network",
          "title": "Descentralización real",
          "text": "Decenas de miles de computadoras en todo el mundo, sin CEO."
        },
        {
          "icon": "Shield",
          "title": "Inmutabilidad",
          "text": "Con suficientes confirmaciones, revertir una transacción es prácticamente imposible."
        },
        {
          "icon": "Globe",
          "title": "Sin fronteras ni permisos",
          "text": "De $1 a mil millones, a cualquier país, 24/7."
        }
      ],
      "intro": "Bitcoin combina innovaciones que, juntas, crean algo que nunca antes existió.",
      "columns": 2
    },
    "Bitcoin en Tiempos de Crisis: Casos Reales": {
      "kind": "statCards",
      "cards": [
        {
          "value": "−99.99%",
          "label": "Venezuela",
          "sublabel": "El bolívar perdió casi todo su valor; algunos emigraron con su frase de 12 palabras y un respaldo en el destino",
          "tone": "red",
          "flag": "🇻🇪"
        },
        {
          "value": "$100M+",
          "label": "Ucrania 2022",
          "sublabel": "En donaciones en criptomonedas (no solo Bitcoin) en las primeras semanas",
          "tone": "green",
          "flag": "🇺🇦"
        },
        {
          "value": "Congelado",
          "label": "Líbano",
          "sublabel": "Con los bancos cerrados, quien tenía Bitcoin en su propia wallet mantuvo el acceso",
          "tone": "amber",
          "flag": "🇱🇧"
        },
        {
          "value": "~211%",
          "label": "Argentina 2023",
          "sublabel": "Pico de 289% en abril de 2024; muchos pasaban el sueldo a stablecoins o Bitcoin el día de cobro",
          "tone": "amber",
          "flag": "🇦🇷"
        }
      ],
      "intro": "Casos en los que Bitcoin, y a veces otras criptomonedas, cumplieron una función real:",
      "columns": 4
    }
  },
  5: {
    "¿Qué es un \"Bloque\" y qué es la \"Cadena\"?": {
      "kind": "steps",
      "steps": [
        {
          "title": "Un bloque es una página del libro",
          "detail": "Agrupa transacciones: \"Ana envió 0.5 BTC a Carlos\", \"Pedro envió 1 BTC a María\"."
        },
        {
          "title": "Cada bloque guarda el hash del anterior",
          "detail": "El bloque 100 contiene el hash del 99, que contiene el del 98... hasta el bloque génesis."
        },
        {
          "title": "Eso los une en una cadena",
          "detail": "Bitcoin crea un bloque cada ~10 minutos; Solana, cada ~200 milisegundos."
        },
        {
          "title": "Si alteras el bloque 50, su hash cambia",
          "detail": "El bloque 51 guarda el hash viejo, ya no coincide y la cadena se rompe.",
          "warning": true
        },
        {
          "title": "Tendrías que rehacer todos los bloques siguientes",
          "detail": "Y más rápido que el resto de la red. En la práctica, imposible."
        }
      ],
      "intro": "Cómo se encadenan los bloques y por qué eso los hace tan difíciles de modificar."
    },
    "Proof of Work vs Proof of Stake": {
      "kind": "comparison",
      "left": {
        "title": "Proof of Work (Bitcoin)",
        "points": [
          "Seguridad respaldada por energía física real",
          "Más probado en el tiempo (17 años)",
          "Permissionless (ASICs en la práctica)",
          "Alto consumo energético",
          "Bloques cada ~10 minutos",
          "Usado por: Bitcoin, Litecoin, Dogecoin"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Proof of Stake (Solana)",
        "points": [
          "Seguridad respaldada por capital en riesgo",
          "99%+ menos energía",
          "Necesitas tokens para validar",
          "Mucho más rápido",
          "Bloques cada ~200 milisegundos en Solana",
          "Usado por: Solana, Ethereum, Cardano"
        ],
        "tone": "green"
      },
      "note": "Ambos logran lo mismo: que desconocidos se pongan de acuerdo sin confiar entre sí."
    },
    "Lo Que La Blockchain PUEDE y NO PUEDE Hacer": {
      "kind": "checklist",
      "good": {
        "title": "PUEDE",
        "items": [
          "Probar propiedad digital: registro muy difícil de alterar",
          "Ejecutar reglas solas con smart contracts: si pasa X, ocurre Y"
        ]
      },
      "bad": {
        "title": "NO PUEDE",
        "items": [
          "Garantizar la verdad del mundo real (garbage in, garbage out)",
          "Maximizar velocidad y descentralización a la vez: el trilema"
        ]
      }
    },
    "El Trilema de la Blockchain": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Shield",
          "title": "Seguridad",
          "text": "¿Qué tan difícil es atacar la red? Nadie ha atacado con éxito el consenso de Bitcoin."
        },
        {
          "icon": "Network",
          "title": "Descentralización",
          "text": "¿Cuántos nodos independientes mantienen la red y reparten el poder?"
        },
        {
          "icon": "Zap",
          "title": "Escalabilidad",
          "text": "¿Cuántas transacciones por segundo procesa y qué tan barato es?"
        }
      ],
      "intro": "Es muy difícil maximizar las tres a la vez. Cada red elige sus prioridades.",
      "columns": 3
    }
  },
  6: {
    "Centralizado vs Descentralizado: Comparación Directa": {
      "kind": "comparison",
      "left": {
        "title": "Centralizado (Tu Banco)",
        "points": [
          "Una entidad controla todo",
          "Puede congelar tu cuenta sin tu permiso",
          "Cambia las reglas unilateralmente",
          "Punto único de fallo: si el servidor cae, todo cae",
          "Debes confiar en la entidad central",
          "Tu propiedad es un permiso revocable"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Descentralizado (Bitcoin)",
        "points": [
          "Miles de participantes independientes",
          "Nadie puede congelar tu BTC en wallet propia",
          "Cambiar reglas requiere consenso casi imposible",
          "Sin punto único: si un nodo cae, quedan miles",
          "No confías en nadie específico",
          "Tu propiedad es TUYA si controlas tus llaves"
        ],
        "tone": "green"
      },
      "note": "El lado descentralizado puede ser más lento y no tiene soporte al cliente: ese es el trade-off honesto."
    },
    "El Espectro de la Descentralización": {
      "kind": "statCards",
      "cards": [
        {
          "value": "45",
          "label": "BNB Smart Chain",
          "sublabel": "validadores activos; solo 21 producen bloques en cada época",
          "tone": "red"
        },
        {
          "value": "~8,700",
          "label": "Ethereum",
          "sublabel": "nodos de ejecución, Proof of Stake, término medio",
          "tone": "amber"
        },
        {
          "value": "~660",
          "label": "Solana",
          "sublabel": "validadores con stake (noviembre de 2026), ~2,000 TPS de usuarios",
          "tone": "amber"
        },
        {
          "value": "~20,700",
          "label": "Bitcoin",
          "sublabel": "nodos accesibles (noviembre de 2026), ~$300 de equipo",
          "tone": "green"
        }
      ],
      "intro": "La descentralización no es un sí/no, es un espectro. Cada proyecto elige distintos trade-offs.",
      "columns": 4
    },
    "Casos Reales de Abuso Centralizado": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "Chipre 2013",
          "detail": "Confiscó hasta 47.5% de depósitos sobre €100,000"
        },
        {
          "label": "Grecia 2015",
          "detail": "Corralito: límite de €60/día en retiros"
        },
        {
          "label": "Nigeria 2021",
          "detail": "El banco central prohibió a los bancos procesar transacciones cripto"
        },
        {
          "label": "Canadá 2022",
          "detail": "Los bancos congelaron unas 280 cuentas ligadas a protestas, sin orden judicial",
          "highlight": true
        },
        {
          "label": "China (continuo)",
          "detail": "Lista negra judicial de morosos: vuelos, trenes rápidos y crédito"
        },
        {
          "label": "PayPal (frecuente)",
          "detail": "Congela cuentas y puede retener fondos hasta 180 días"
        }
      ],
      "intro": "No son hipótesis: una secuencia real y reciente de eventos documentados."
    },
    "El Coeficiente de Nakamoto": {
      "kind": "statCards",
      "cards": [
        {
          "value": "1",
          "label": "Tu Banco",
          "sublabel": "una sola entidad lo decide todo",
          "tone": "red"
        },
        {
          "value": "Pocos",
          "label": "BSC",
          "sublabel": "solo 21 de 45 validadores producen bloques, con fuerte peso de Binance",
          "tone": "red"
        },
        {
          "value": "18",
          "label": "Solana",
          "sublabel": "validadores reúnen un tercio del stake (noviembre de 2026)",
          "tone": "amber"
        },
        {
          "value": "~2-3",
          "label": "Bitcoin (pools)",
          "sublabel": "los 2 pools más grandes producen ~46% de los bloques; los 3 más grandes, ~63%. Los mineros pueden cambiar de pool",
          "tone": "amber"
        }
      ],
      "intro": "Coeficiente de Nakamoto: cuántas entidades deberían coordinarse para comprometer el sistema.",
      "columns": 4
    }
  },
  7: {
    "Exchange vs Wallet Propia: La Diferencia que Importa": {
      "kind": "comparison",
      "left": {
        "title": "Tu Cripto en un Exchange",
        "points": [
          "El exchange tiene las llaves, no tú",
          "Pueden congelar tu cuenta sin explicación",
          "Pueden pausar retiros cuando quieran",
          "Si quiebran, haces fila con los acreedores",
          "Pueden prestar TU cripto a otros",
          "Dependes de su seguridad: si los hackean, pierdes",
          "KYC: saben cuánto tienes y qué haces"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Tu Cripto en Tu Wallet",
        "points": [
          "TÚ tienes las llaves, nadie más",
          "Nadie puede congelar tu BTC o tus SOL (stablecoins sí)",
          "Retiras cuando quieras, 24/7, sin permiso",
          "Si Phantom quiebra, tus fondos siguen intactos",
          "Nadie lo toca sin tu firma",
          "Tu seguridad depende de ti (responsabilidad)",
          "Blockchain pública: quien conozca tu dirección ve tu saldo"
        ],
        "tone": "green"
      },
      "note": "Not your keys, not your coins: sin las llaves, solo tienes una promesa."
    },
    "Los 3 Tipos de Wallets: Elige Según tu Necesidad": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Landmark",
          "title": "Exchange (custodia de terceros)",
          "text": "Binance, Coinbase, Kraken. Para comprar, vender y operar. No es lugar para tus ahorros: retira a tu wallet."
        },
        {
          "icon": "Zap",
          "title": "Hot Wallet (conectada a internet)",
          "text": "Phantom, MetaMask, Trust Wallet. Ideal para uso diario, DeFi y NFTs. Riesgo si hackean tu dispositivo."
        },
        {
          "icon": "Lock",
          "title": "Cold Wallet (hardware/offline)",
          "text": "Ledger, Trezor. Las llaves nunca tocan internet. Para ahorros de unos miles de dólares o más ($50-150, solo en tienda oficial)."
        }
      ],
      "intro": "Cada tipo balancea conveniencia y seguridad de forma distinta.",
      "columns": 3
    },
    "Estrategia de Custodia: Cómo Organizar tus Fondos": {
      "kind": "statCards",
      "cards": [
        {
          "value": "80-90%",
          "label": "Ahorros de largo plazo",
          "sublabel": "Cold wallet (Ledger/Trezor): tu bóveda",
          "tone": "green"
        },
        {
          "value": "10-20%",
          "label": "Capital operativo",
          "sublabel": "Hot wallet (Phantom): DeFi, staking, NFTs",
          "tone": "amber"
        },
        {
          "value": "0-10%",
          "label": "Trading activo",
          "sublabel": "Exchange: retira ganancias regularmente",
          "tone": "red"
        }
      ],
      "intro": "Una forma de organizar un portafolio cripto significativo. Si apenas empiezas, una hot wallet bien protegida basta.",
      "columns": 3
    },
    "¿Qué es Realmente una Wallet?": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Key",
          "title": "Llave Privada",
          "text": "Código secreto que NUNCA compartes. Quien la tenga controla tus fondos. Sin recuperación."
        },
        {
          "icon": "Eye",
          "title": "Dirección Pública",
          "text": "La compartes libremente para recibir pagos. Como tu número de cuenta: otros envían, nadie saca."
        },
        {
          "icon": "Shield",
          "title": "Frase Semilla",
          "text": "12 o 24 palabras que generan todas tus llaves. El backup maestro: si la pierdes, pierdes todo."
        }
      ],
      "intro": "Tu wallet no guarda cripto: guarda las llaves que prueban que es tuyo. El cripto vive en la blockchain.",
      "columns": 3
    }
  },
  8: {
    "Anatomía de una Estafa de Seed Phrase": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "AlertCircle",
          "title": "El Falso Soporte Técnico",
          "text": "\"Soy de Phantom Support, detectamos actividad sospechosa.\" Phantom NUNCA te escribe primero."
        },
        {
          "icon": "Search",
          "title": "El Sitio Falso",
          "text": "phantom.com frente a imitadores como phantomm-wallet.com (con dos M). Idéntico, pero roba tu frase al \"importar\"."
        },
        {
          "icon": "Gem",
          "title": "El Airdrop Gratis",
          "text": "\"500 SOL gratis, verifica tu seed phrase para reclamar.\" Nadie regala $50,000."
        },
        {
          "icon": "Users",
          "title": "El DM del Influencer",
          "text": "\"Giveaway privado, envíame tu seed phrase.\" Los influencers reales NUNCA hacen esto."
        }
      ],
      "intro": "La mayoría de los robos no son hackeos sofisticados: es la víctima quien entrega la frase.",
      "columns": 2
    },
    "Las Reglas de Oro de la Seed Phrase": {
      "kind": "checklist",
      "good": {
        "title": "Haz siempre esto",
        "items": [
          "Escríbela en papel como mínimo; mejor en metal.",
          "Guarda múltiples copias en ubicaciones separadas.",
          "Verifica 3 veces cada palabra: un error la vuelve irrecuperable.",
          "Trátala como tu dinero: no se resetea como una contraseña."
        ]
      },
      "bad": {
        "title": "Nunca hagas esto",
        "items": [
          "Guardarla en digital: fotos, archivos, notas, emails, mensajes, nube.",
          "Dársela a soporte, airdrops o \"verificaciones de seguridad\".",
          "Confiar en quien te la pide: si te la piden, es estafa el 100%.",
          "Tener una sola copia: un incendio borra tu dinero para siempre."
        ]
      }
    },
    "Cómo Guardar tu Frase Semilla: Nivel Avanzado": {
      "kind": "steps",
      "steps": [
        {
          "title": "Placa de metal",
          "detail": "Cryptosteel o Billfodl: resiste incendios e inundaciones. Cuesta $50-100."
        },
        {
          "title": "Copias en múltiples ubicaciones",
          "detail": "2-3 copias en lugares distintos y discretos. Elimina el punto único de fallo."
        },
        {
          "title": "Passphrase adicional (palabra 25)",
          "detail": "Tu frase más una palabra secreta genera otra wallet. Phantom no la ofrece; si la olvidas, pierdes el acceso."
        },
        {
          "title": "Shamir Secret Sharing",
          "detail": "Divides en 3 partes, necesitas 2 para recuperar. Ninguna ubicación basta sola."
        }
      ],
      "intro": "Cuando tus ahorros en cripto crecen, sube de nivel de seguridad."
    },
    "Los Errores que Más se Repiten": {
      "kind": "iconGrid",
      "items": [
        { "icon": "Eye", "title": "La foto en la nube", "text": "Las fotos se sincronizan solas. Si hackean tu cuenta, encuentran la frase." },
        { "icon": "Lock", "title": "El archivo \"cifrado\"", "text": "Una contraseña débil se rompe. El archivo nunca debió existir." },
        { "icon": "Users", "title": "El mensaje a ti mismo", "text": "WhatsApp Web abierto en un equipo compartido basta para perderlo todo." },
        { "icon": "Flame", "title": "El único papel", "text": "Un incendio o una inundación y los fondos quedan inaccesibles para siempre." }
      ],
      "intro": "Casos ilustrativos de patrones que se repiten en denuncias reales.",
      "columns": 2
    }
  },
  9: {
    "Paso 1: Descarga SOLO desde Fuentes Oficiales": {
      "kind": "checklist",
      "good": {
        "title": "El sitio oficial",
        "items": [
          "phantom.com, sin guiones ni números (phantom.app redirige allí)",
          "Escríbelo tú mismo en la barra de direcciones",
          "Instala la extensión desde phantom.com/download",
          "Móvil solo desde App Store o Google Play",
          "Guárdalo en favoritos tras verificarlo"
        ]
      },
      "bad": {
        "title": "Ejemplos de dominios imitadores",
        "items": [
          "phantom-app.com",
          "phantomwallet.io",
          "phantom-wallet.app",
          "phantomm.com",
          "Cualquier variación con guiones, letras dobles u otra terminación"
        ]
      }
    },
    "Paso 2: Crear una Nueva Wallet": {
      "kind": "steps",
      "steps": [
        {
          "title": "Descarga desde fuente oficial",
          "detail": "Solo desde phantom.com/download, App Store o Google Play."
        },
        {
          "title": "Create a new wallet",
          "detail": "Si es tu primera wallet, elige crear una nueva en vez de importar."
        },
        {
          "title": "Crea tu contraseña de desbloqueo",
          "detail": "Desbloquea la app en tu dispositivo. NO es tu seed phrase."
        },
        {
          "title": "Phantom genera 12 palabras: DETENTE",
          "detail": "Escríbelas en PAPEL. Nunca al portapapeles ni en notas digitales.",
          "warning": true
        },
        {
          "title": "Verifica las palabras",
          "detail": "Phantom te pide confirmar algunas. Si fallas, revisa tu papel y repite."
        },
        {
          "title": "Wallet lista",
          "detail": "Tu wallet de Solana ya está creada y protegida."
        }
      ],
      "intro": "La ruta completa desde la descarga hasta tu wallet lista. El paso de la seed phrase es el punto crítico."
    },
    "Conectar vs Aprobar: La Diferencia Crítica": {
      "kind": "comparison",
      "left": {
        "title": "Conectar Wallet",
        "points": [
          "Solo da permiso para VER tu dirección y balance",
          "Como mostrar tu número de cuenta",
          "Pueden ver, pero NO sacar dinero",
          "Relativamente seguro, pero conéctate solo a sitios que conoces"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Aprobar Transacción",
        "points": [
          "Firma una acción concreta: swap, mint, transfer",
          "AQUÍ es donde debes prestar atención",
          "Lee exactamente qué estás firmando",
          "Puede mover tus fondos"
        ],
        "tone": "red"
      },
      "note": "Regla de oro: si la simulación muestra salidas de tokens que no esperabas, o en EVM pide acceso ilimitado a todos tus tokens, RECHAZA."
    },
    "Checklist Post-Instalación": {
      "kind": "checklist",
      "good": {
        "title": "Listo y seguro",
        "items": [
          "Descargué solo de fuente oficial, verificando el desarrollador",
          "Escribí mi seed phrase de 12 palabras en PAPEL",
          "Verifiqué la seed phrase correctamente en Phantom",
          "Creé una contraseña de desbloqueo fuerte y distinta",
          "Mi dirección pública es seguro compartir; la seed phrase NUNCA",
          "Conectar solo muestra mi dirección; Aprobar firma con mis fondos",
          "Antes de depositar grande, hago una prueba pequeña"
        ]
      },
      "bad": {
        "title": "NUNCA hagas esto",
        "items": [
          "Guardar la seed phrase en notas digitales o portapapeles",
          "Compartir tu seed phrase con cualquiera",
          "Depositar fondos grandes sin una prueba previa"
        ]
      }
    }
  },
  10: {
    "Los Números que Importan": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum (L1)",
        "points": [
          "~15-30 TPS en la red principal (las L2 suman mucho más)",
          "Costo: ~$0.002 por transferencia y ~$0.03 por swap, sube con la demanda",
          "Bloques cada ~12 segundos",
          "Gran parte del uso diario ocurre en L2s (Arbitrum, Base)",
          "Liquidez repartida entre L1 y L2s",
          "Bridges entre redes: un punto histórico de hackeos",
          "Muchos más validadores y nodos independientes"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana (L1)",
        "points": [
          "~1,750-2,300 TPS de usuarios, con capacidad para más",
          "Costo: 0.000005 SOL de base, menos de $0.001",
          "Confirmación en menos de un segundo",
          "Todo en una sola capa, sin L2s",
          "Liquidez unificada en un solo lugar",
          "Sin bridges internos: menos piezas que fallen",
          "Hardware caro: unos 660 validadores con stake"
        ],
        "tone": "green"
      },
      "note": "Datos de noviembre de 2026. Las comisiones de Ethereum están en mínimos históricos y pueden volver a subir."
    },
    "¿Qué Significa \"Monolítico\" vs \"Modular\"?": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum: Modular",
        "points": [
          "Se divide en capas separadas",
          "L1 = capa de seguridad, muy descentralizada",
          "L2s = capas de ejecución baratas (Arbitrum, Base)",
          "Tus fondos pueden quedar repartidos entre redes",
          "A veces necesitas bridges para moverlos"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana: Monolítico",
        "points": [
          "Todo en una sola capa",
          "Ejecución, consenso y datos juntos",
          "Sin L2s ni bridges internos",
          "Las apps se combinan sin fricción",
          "Toda la red depende de esa única capa"
        ],
        "tone": "green"
      },
      "note": "Ningún diseño gana en todo: el modular facilita validar con equipos modestos; el monolítico simplifica la experiencia a cambio de hardware caro."
    },
    "Caso Real: Hacer un Swap de $50": {
      "kind": "statCards",
      "cards": [
        {
          "value": "~$0.03",
          "label": "Ethereum L1 (Uniswap)",
          "sublabel": "Mínimo histórico; con congestión ha llegado a varios dólares",
          "tone": "amber"
        },
        {
          "value": "<$0.01",
          "label": "Ethereum L2 (Arbitrum o Base)",
          "sublabel": "Barato, pero cada L2 es una red con saldos separados",
          "tone": "amber"
        },
        {
          "value": "<$0.001",
          "label": "Solana (Jupiter)",
          "sublabel": "Comisión base fija, confirmación en menos de un segundo",
          "tone": "green"
        }
      ],
      "intro": "El mismo swap de $50 USDC por tres rutas distintas (noviembre de 2026).",
      "columns": 3
    },
    "El Ecosistema de Solana: Las Apps que Usarás": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "RefreshCw",
          "title": "Jupiter",
          "text": "Agregador DEX: busca el mejor precio entre exchanges, con DCA y órdenes límite."
        },
        {
          "icon": "Wallet",
          "title": "Phantom",
          "text": "Una de las wallets más usadas de Solana; MetaMask cumple ese papel en Ethereum."
        },
        {
          "icon": "Gem",
          "title": "Magic Eden / Tensor",
          "text": "Marketplaces de NFTs con comisiones de red de fracciones de centavo."
        },
        {
          "icon": "PiggyBank",
          "title": "Marinade / Jito",
          "text": "Liquid staking: ~4.8-5.1% anual (noviembre de 2026), en parte pagado con SOL nuevos."
        }
      ],
      "intro": "Algunas de las herramientas que vas a usar en Solana.",
      "columns": 2
    }
  },
  13: {
    "Anatomía de una Vela: Los 4 Datos Clave": {
      "kind": "component",
      "key": "candlestick-anatomy"
    },
    "Los 4 Patrones de Vela Individual que Debes Conocer": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Scale",
          "title": "Doji: Indecisión",
          "text": "Abrió y cerró casi al mismo precio: equilibrio total entre toros y osos. En soporte o resistencia puede anticipar reversión."
        },
        {
          "icon": "TrendingUp",
          "title": "Hammer (Martillo): Alcista",
          "text": "Cuerpo chico arriba, mecha inferior larga (≥2× el cuerpo). Los osos tiraron, los toros rescataron. Solo tiene sentido en soporte tras una caída."
        },
        {
          "icon": "TrendingDown",
          "title": "Shooting Star: Bajista",
          "text": "Lo opuesto al Hammer: cuerpo chico abajo, mecha superior larga. Solo tiene sentido en resistencia tras una subida."
        },
        {
          "icon": "Flame",
          "title": "Marubozu: Convicción Total",
          "text": "Cuerpo grande sin mechas. Verde: los toros dominaron todo el período; rojo: los osos aplastaron. Momentum fuerte."
        }
      ],
      "intro": "Una sola vela puede contarte una historia poderosa. Estos cuatro aparecen una y otra vez.",
      "columns": 2
    },
    "Patrones de Múltiples Velas: Cambios de Control": {
      "kind": "comparison",
      "left": {
        "title": "Reversión Alcista",
        "points": [
          "Engulfing Alcista: roja pequeña + verde que envuelve todo su cuerpo.",
          "Los toros absorben la presión vendedora y toman el control.",
          "Morning Star: roja grande, vela chica de indecisión, verde grande.",
          "La 3ª vela cierra dentro del cuerpo de la primera.",
          "Tiene más peso en soporte y con volumen creciente."
        ],
        "tone": "green"
      },
      "right": {
        "title": "Reversión Bajista",
        "points": [
          "Engulfing Bajista: verde pequeña + roja masiva que la envuelve.",
          "Los osos aplastan la última resistencia de los toros.",
          "Evening Star: verde grande, vela chica de indecisión, roja grande.",
          "La 3ª vela cierra dentro del cuerpo de la primera.",
          "Señal de distribución en resistencia o tras subida extendida."
        ],
        "tone": "red"
      },
      "note": "Espera a que la siguiente vela confirme antes de operar."
    },
    "Timeframes: ¿Cuál Deberías Usar?": {
      "kind": "comparison",
      "left": {
        "title": "Timeframes Bajos (1m - 1h)",
        "points": [
          "Mucho ruido y señales falsas",
          "Requieren pantalla constante",
          "Útiles solo para scalping profesional",
          "Patrones de velas poco fiables",
          "Estrés emocional extremo",
          "Fees de trading acumulan rápido"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Timeframes Altos (4h - Diario - Semanal)",
        "points": [
          "Menos ruido, señales más limpias",
          "Puedes revisar 1-2 veces al día",
          "Ideal para swing trading (días-semanas)",
          "Patrones con algo más de sentido, nunca infalibles",
          "Menos estrés, mejores decisiones",
          "Fees mínimos por menos operaciones"
        ],
        "tone": "green"
      },
      "note": "Usa 4 horas o diario como mínimo."
    }
  },
  14: {
    "El Flip: Cuando Soporte se Convierte en Resistencia (y Viceversa)": {
      "kind": "steps",
      "steps": [
        {
          "title": "$150 actúa como soporte",
          "detail": "Compraste SOL en $150. La demanda detiene la caída ahí."
        },
        {
          "title": "El precio rompe el soporte",
          "detail": "Cae a $120 con volumen. Tu soporte se quiebra y quedas perdiendo.",
          "warning": true
        },
        {
          "title": "El precio vuelve a $150",
          "detail": "Tú y miles más venden para salir sin pérdida. Ahora es resistencia."
        },
        {
          "title": "Retest: confirmación del flip",
          "detail": "Si la zona rechaza el precio desde abajo, el flip se está dando. Tu stop va al otro lado de la zona."
        }
      ],
      "intro": "El 'role reversal': la misma zona cambia de rol cuando se rompe."
    },
    "Fakeouts: Las Trampas del Mercado": {
      "kind": "steps",
      "steps": [
        {
          "title": "Soporte en $150, stops en $148",
          "detail": "Miles de traders colocan su stop loss justo debajo de la zona obvia."
        },
        {
          "title": "Alguien vende fuerte",
          "detail": "Una ballena o simple ruido empuja el precio a $147 y activa esos stops como ventas forzadas.",
          "warning": true
        },
        {
          "title": "Barrido de liquidez",
          "detail": "Quien compra en $147 aprovecha las ventas forzadas que liberaron esos stops.",
          "warning": true
        },
        {
          "title": "El precio se recupera a $155",
          "detail": "Una mecha larga inferior queda como huella del fakeout. Tú quedaste fuera."
        }
      ],
      "intro": "Una posible explicación de las rupturas falsas: la cacería de stops. Puede pasar, pero rara vez se demuestra."
    },
    "Soporte/Resistencia Fuerte vs Débil": {
      "kind": "comparison",
      "left": {
        "title": "Zonas Fuertes (Alta Fiabilidad)",
        "points": [
          "Respetada 2-3 veces con rechazos claros",
          "Visible en timeframes altos (diario, semanal)",
          "Coincide con números redondos psicológicos",
          "Alto volumen en los rebotes anteriores",
          "Confluencia con medias móviles (EMA 200)",
          "Se alinea con la tendencia general"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Zonas Débiles (Baja Fiabilidad)",
        "points": [
          "Solo un toque previo, podría ser coincidencia",
          "Solo visible en timeframes bajos (15min, 1h)",
          "No coincide con ningún nivel psicológico",
          "Volumen bajo en los rechazos",
          "Lejos de cualquier media móvil importante",
          "Va contra la tendencia dominante"
        ],
        "tone": "red"
      }
    },
    "Tu Framework Práctico: Cómo Usar S/R Para Operar": {
      "kind": "steps",
      "steps": [
        {
          "title": "Identifica las zonas clave",
          "detail": "En diario o semanal, dibuja zonas donde el precio rebotó 2-3 veces."
        },
        {
          "title": "Espera que el precio llegue a la zona",
          "detail": "No persigas el precio: que venga a ti. Ninguna zona garantiza un rebote."
        },
        {
          "title": "Busca confirmación",
          "detail": "Vela de reversión (Hammer, Engulfing) con volumen alto. Sin confirmación, no entres."
        },
        {
          "title": "Coloca tu stop loss fuera de la zona",
          "detail": "Debajo del mínimo de la zona + filtro de 1-2% para protegerte de fakeouts."
        }
      ],
      "intro": "Cuatro pasos para operar soportes y resistencias con disciplina."
    }
  },
  15: {
    "RSI: El Termómetro del Mercado": {
      "kind": "statCards",
      "cards": [
        {
          "value": "> 70",
          "label": "Sobrecompra",
          "sublabel": "Fiebre: momentum extremo, posible corrección",
          "tone": "red"
        },
        {
          "value": "50",
          "label": "Línea de tendencia",
          "sublabel": "Arriba = alcista, abajo = bajista",
          "tone": "amber"
        },
        {
          "value": "< 30",
          "label": "Sobreventa",
          "sublabel": "Hipotermia: posible suelo",
          "tone": "green"
        }
      ],
      "intro": "El RSI mide el momentum en una escala de 0 a 100. Configuración estándar: 14 períodos.",
      "columns": 3
    },
    "Divergencias: Cuando el Precio y el RSI No Coinciden": {
      "kind": "comparison",
      "left": {
        "title": "Divergencia Bajista",
        "points": [
          "Precio hace máximo más alto (Higher High)",
          "RSI hace máximo más bajo (Lower High)",
          "El precio sube, pero con menos fuerza",
          "Los toros se están agotando"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Divergencia Alcista",
        "points": [
          "Precio hace mínimo más bajo (Lower Low)",
          "RSI hace mínimo más alto (Higher Low)",
          "El precio cae, pero los osos pierden fuerza",
          "Señal de suelo, más fiable junto a soporte"
        ],
        "tone": "green"
      },
      "note": "Las divergencias en timeframe diario o semanal son las más significativas."
    },
    "Cruces de Medias (Golden / Death Cross)": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingUp",
          "title": "Golden Cross",
          "text": "La media rápida (50) cruza por encima de la lenta (200); el cruce clásico usa SMA. Señal alcista de mediano plazo; se confirma días después."
        },
        {
          "icon": "TrendingDown",
          "title": "Death Cross",
          "text": "La media rápida (50) cruza por debajo de la lenta (200). Señal bajista rezagada: unas veces precedió caídas y otras marcó el suelo (marzo 2020, agosto 2024)."
        },
        {
          "icon": "AlertTriangle",
          "title": "Señales falsas",
          "text": "En rangos laterales las EMAs se enredan como espagueti. Solo tienen sentido con tendencia clara: espera."
        }
      ],
      "intro": "Los cruces se desarrollan durante días o semanas, por eso llegan tarde: confirman tendencias, no las anticipan.",
      "columns": 3
    },
    "Cuándo Usar Cada Indicador": {
      "kind": "comparison",
      "left": {
        "title": "RSI (Momentum)",
        "points": [
          "Detecta extremos de sobrecompra/sobreventa",
          "Excelente para divergencias y cambios de tendencia",
          "Útil en cualquier timeframe (mejor en 4h+)",
          "En rangos, solo anclado a los extremos",
          "Te dice cuánta fuerza queda en el movimiento",
          "Ideal para timing de entradas y salidas"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "EMAs (Tendencia)",
        "points": [
          "Identifica la dirección general del mercado",
          "Excelentes como soporte/resistencia dinámicos",
          "Más fiables en 4 horas o más",
          "Solo funcionan con tendencia, NO en rangos",
          "Te dicen la posición del precio en la tendencia",
          "Ideal para operar a favor de la tendencia"
        ],
        "tone": "amber"
      },
      "note": "En rangos laterales el RSI sirve solo en los extremos; las señales de cruce de EMAs, casi nunca."
    }
  },
  16: {
    "Tendencia Alcista: Higher Highs + Higher Lows": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "$155",
          "detail": "Punto de partida del recorrido alcista"
        },
        {
          "label": "$180: HH",
          "detail": "Máximo más alto: los compradores empujan más arriba"
        },
        {
          "label": "$170: HL",
          "detail": "Mínimo más alto: la demanda aparece antes"
        },
        {
          "label": "$210: HH",
          "detail": "Nuevo máximo: los toros siguen dominando"
        },
        {
          "label": "$190: HL",
          "detail": "Retroceso superficial: compra los retrocesos, no la pelees",
          "highlight": true
        }
      ],
      "intro": "La escalera de SOL subiendo: cada máximo más alto (HH), cada mínimo más alto (HL)."
    },
    "Break of Structure (BOS): La Primera Señal de Alerta": {
      "kind": "comparison",
      "left": {
        "title": "BOS en Uptrend (debilidad)",
        "points": [
          "Secuencia previa: $155, $180, $170, $210 y $190",
          "El precio cae debajo de $190 (último Higher Low)",
          "La escalera dejó de subir",
          "No es bear market, pero la tendencia se debilitó",
          "Tu acción: ajusta stops y reduce tamaño"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "BOS en Downtrend (esperanza)",
        "points": [
          "Secuencia previa: $55K, $48K, $52K, $45K y $50K",
          "El precio supera $50K (último Lower High)",
          "La presión bajista se debilitó",
          "Primera señal de vida de los toros",
          "Tu acción: construye posición pequeña con stop"
        ],
        "tone": "amber"
      },
      "note": "El BOS es alerta, no confirmación. No entres en pánico ni compres todo de golpe."
    },
    "Mercado en Tendencia vs Mercado en Rango": {
      "kind": "comparison",
      "left": {
        "title": "Mercado en Tendencia",
        "points": [
          "Secuencia clara de HH + HL o LH + LL",
          "Las EMAs están separadas y ordenadas",
          "Seguir la tendencia tiene más sentido",
          "Los breakouts tienden a continuar",
          "Los indicadores de tendencia son más útiles",
          "Aun así, las tendencias terminan sin aviso"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Mercado en Rango",
        "points": [
          "Sin HH ni LL claros: rebota entre soporte y resistencia",
          "Las EMAs están enredadas y sin dirección",
          "Compra soporte, vende resistencia (trading de rango)",
          "Los breakouts falsos (fakeouts) son comunes",
          "Los indicadores generan muchas señales falsas",
          "Aquí la mayoría pierde por sobreoperar"
        ],
        "tone": "red"
      }
    },
    "Ejemplo Completo: De Análisis a Ejecución": {
      "kind": "steps",
      "steps": [
        {
          "title": "Lee el gráfico (estructura + contexto)",
          "detail": "Semanal y diario alcistas (HH + HL). El precio retrocedió al soporte de $160; en 4H, RSI en 32 y tocando la EMA 200 de 4 horas."
        },
        {
          "title": "Confirma con indicadores",
          "detail": "RSI en sobreventa, EMA 200 como soporte dinámico, volumen decreciente en el retroceso y un Hammer en 4H en $160."
        },
        {
          "title": "Define entrada, stop y objetivos",
          "detail": "Entrada $162, Stop $153 (bajo el último HL, ahí se invalida la tesis), TP1 $185 (1:2.5), TP2 $200. Riesgo: $9 por SOL."
        },
        {
          "title": "Calcula el tamaño de posición",
          "detail": "Arriesga máximo 1-2% de tu capital de trading (5-10% de tu porción cripto). Con $1,000, riesgo de $15 y $9 por SOL: unos 1.6 SOL (unos $260)."
        }
      ],
      "intro": "Un trade de ejemplo con SOL/USDC, paso a paso, antes de apretar un solo botón."
    }
  },
  17: {
    "Market Cap vs FDV: La Trampa del \"Token Barato\"": {
      "kind": "comparison",
      "left": {
        "title": "\"Token Barato\" a $0.001",
        "points": [
          "Precio unitario: $0.001 (parece regalado)",
          "100,000M en circulación = Market Cap $100M",
          "Supply total: 10 BILLONES (millones de millones)",
          "FDV $10,000M: como una empresa grande en bolsa",
          "Ratio MC/FDV < 0.10: 90% esperando para diluirte"
        ],
        "tone": "red"
      },
      "right": {
        "title": "\"Token Caro\" a $200",
        "points": [
          "Precio unitario: $200 (parece caro)",
          "1M en circulación = Market Cap $200M",
          "Casi todo el supply ya circula",
          "Poco supply oculto esperando para entrar",
          "Ratio MC/FDV alta: bajo riesgo de dilución"
        ],
        "tone": "green"
      },
      "note": "Ratio MC/FDV: <0.10 = riesgo alto de dilución · >0.70 = la mayoría del supply ya circula. Lo que importa es Market Cap y FDV, no el precio."
    },
    "Vesting y Unlocks: El Calendario de la Presión de Venta": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "TGE: lanzamiento del token",
          "detail": "Empieza a contar el calendario de vesting."
        },
        {
          "label": "Cliff Period (12-24 meses)",
          "detail": "Equipo no puede vender nada. Cliff corto (3-6 meses) = red flag."
        },
        {
          "label": "Vesting lineal (4 años)",
          "detail": "Se desbloquea 1/48 cada mes. Mejor que todo de golpe."
        },
        {
          "label": "Semanas previas al unlock",
          "detail": "El mercado suele anticipar los unlocks grandes: el precio tiende a debilitarse en las semanas previas."
        },
        {
          "label": "Unlock masivo (>10% del supply)",
          "detail": "Presión de venta tras el desbloqueo. No seas la liquidez de salida.",
          "highlight": true
        }
      ],
      "intro": "Cada unlock libera una ola de tokens. El calendario te avisa de dónde puede venir la presión de venta."
    },
    "Distribución: ¿Quién Tiene los Tokens?": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Users",
          "title": "Comunidad / Airdrop",
          "text": "Regla práctica: ≥40%. Uniswap (60%) es un referente. <30% favorece a insiders."
        },
        {
          "icon": "Cpu",
          "title": "Equipo / Founders",
          "text": "Regla práctica: 10-20%. >25% es red flag. <5% también es sospechoso."
        },
        {
          "icon": "Landmark",
          "title": "Inversores / VCs",
          "text": "Compraron con 50-90% de descuento. >20% es señal de precaución."
        },
        {
          "icon": "PiggyBank",
          "title": "Tesorería / Ecosistema",
          "text": "10-20% es razonable. Si es >30%, ¿quién controla esos fondos?"
        }
      ],
      "intro": "La distribución te dice quién tiene poder y motivación de vender.",
      "columns": 2
    },
    "Buenos vs Malos Tokenomics": {
      "kind": "checklist",
      "good": {
        "title": "Tokenomics Saludables",
        "items": [
          "Max supply definido o emisión decreciente",
          "Equipo ≤20% con vesting de 3-4 años",
          "VCs ≤20% con cliff de 12+ meses",
          "Comunidad ≥40% del supply total",
          "Ratio Market Cap/FDV > 0.50",
          "Mecanismo de quema o deflación",
          "Revenue real: fees pagados por usuarios"
        ]
      },
      "bad": {
        "title": "Red Flags de Tokenomics",
        "items": [
          "Supply infinito sin mecanismo de quema",
          "Equipo >30% con cliff corto (3-6 meses)",
          "VCs >30% comprados con 90%+ de descuento",
          "Comunidad <20% del supply",
          "Ratio Market Cap/FDV < 0.10 (90%+ sin desbloquear)",
          "Unlock masivo próximo (>10% del supply)",
          "Sin revenue real: solo especulación"
        ]
      }
    }
  },
  18: {
    "Las 4 Fases del Ciclo de Mercado": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "1. Bear Market (Invierno)",
          "detail": "12-18 meses. Precio cae -70% a -85%. Medios dicen \"crypto muerto\". Históricamente, el mejor momento para DCA paciente."
        },
        {
          "label": "2. Acumulación (Primavera)",
          "detail": "6-12 meses. Lateral, volumen bajo. El halving suele ocurrir aquí. Los pacientes siguen comprando."
        },
        {
          "label": "3. Bull Market (Verano)",
          "detail": "12-18 meses post-halving. Rompe el ATH. El múltiplo de BTC desde el precio del halving se reduce cada ciclo (~95×, ~30×, ~8× y ~2×); desde el mínimo del bear los números son otros. Las altcoins amplifican el movimiento."
        },
        {
          "label": "4. Distribución (Otoño)",
          "detail": "2-6 meses. El pico. Tu tía pregunta por Dogecoin. Los que compraron antes venden a los que llegan tarde.",
          "highlight": true
        }
      ],
      "intro": "Hasta ahora, el mercado crypto ha repetido un ciclo de 4 fases alrededor de cada halving. Solo se ve claro en retrospectiva."
    },
    "¿Qué es el Halving y Por Qué Importa?": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "2009: 50 BTC",
          "detail": "Recompensa inicial por bloque."
        },
        {
          "label": "2012: 25 BTC",
          "detail": "Primer halving."
        },
        {
          "label": "2016: 12.5 BTC",
          "detail": "Segundo halving."
        },
        {
          "label": "2020: 6.25 BTC",
          "detail": "Tercer halving."
        },
        {
          "label": "2024: 3.125 BTC",
          "detail": "Último halving (abril 2024)."
        },
        {
          "label": "2028: 1.5625 BTC",
          "detail": "Próximo halving aproximado."
        },
        {
          "label": "2140: 0 BTC",
          "detail": "Último Bitcoin minado. Emisión nueva cero.",
          "highlight": true
        }
      ],
      "intro": "Cada ~210,000 bloques (~4 años) la emisión nueva de Bitcoin se corta exactamente a la mitad."
    },
    "La Historia: 4 Halvings, 4 Bull Runs": {
      "kind": "statCards",
      "cards": [
        {
          "value": "95x",
          "label": "Ciclo 1: Halving Nov 2012",
          "sublabel": "De ~$12 a ~$1,150 en 12 meses. Luego -85%.",
          "tone": "green"
        },
        {
          "value": "30x",
          "label": "Ciclo 2: Halving Jul 2016",
          "sublabel": "De ~$650 a $19,700 en 17 meses. ICOs. Luego -84%.",
          "tone": "green"
        },
        {
          "value": "8x",
          "label": "Ciclo 3: Halving May 2020",
          "sublabel": "De ~$8,700 a $69,000 en 18 meses. DeFi + NFTs. Luego -77%.",
          "tone": "green"
        },
        {
          "value": "$126K",
          "label": "Ciclo 4: Halving Abr 2024",
          "sublabel": "De ~$64,000 a ~$126K en octubre de 2025, ~18 meses después del halving. Luego -53% hasta junio de 2026.",
          "tone": "amber"
        }
      ],
      "intro": "Cuatro ciclos con un patrón parecido hasta ahora. El multiplicador se reduce cada ciclo: es un patrón histórico, no una ley.",
      "columns": 4
    },
    "Bitcoin Dominance y la Altseason": {
      "kind": "steps",
      "steps": [
        {
          "title": "BTC Dominance sube (60%+)",
          "detail": "El capital entra primero a Bitcoin. Las altcoins rinden menos. Guion clásico: mayoría en BTC."
        },
        {
          "title": "Dominance cae (55-60%)",
          "detail": "El capital fluye a ETH y large caps (SOL, AVAX). Guion clásico: rotar gradualmente a altcoins grandes."
        },
        {
          "title": "Altseason (BTC Dom <50%)",
          "detail": "Algunas mid y small caps han hecho 10-50x, muchas otras desaparecieron. Dura semanas, no meses.",
          "warning": true
        },
        {
          "title": "Capital vuelve a BTC",
          "detail": "Las altcoins caen y la dominance sube: señal de fin. Guion clásico: volver a BTC o stablecoins."
        }
      ],
      "intro": "El guion clásico de la rotación según la Bitcoin Dominance. El ciclo 2024-25 no lo siguió: úsalo como mapa, no como promesa."
    }
  },
  19: {
    "El Framework DYOR: 5 Pasos para Evaluar Cualquier Proyecto": {
      "kind": "steps",
      "steps": [
        {
          "title": "¿Tiene producto real?",
          "detail": "En DefiLlama: busca TVL, fees y usuarios. Sin producto, solo es un whitepaper."
        },
        {
          "title": "¿Las métricas crecen?",
          "detail": "Busca growth mes a mes: TVL +20%, fees +30%. Planas o cayendo = pierde relevancia."
        },
        {
          "title": "¿Quién está detrás?",
          "detail": "Arkham: ¿fundadores con historial? VCs reputados (a16z, Multicoin) vs desconocidos. Ojo: FTX también tenía VCs de primer nivel."
        },
        {
          "title": "¿Cómo es el tokenomics?",
          "detail": "Tokenomist (tokenomist.ai): ideal >50% circulando y vesting 2-4 años. Cliff del 30% en 3 meses = bomba.",
          "warning": true
        },
        {
          "title": "¿Dónde están las red flags?",
          "detail": "TVL concentrado, fundadores vendiendo, fees solo por incentivos, auditoría no reputada.",
          "warning": true
        }
      ],
      "intro": "Antes de invertir un solo peso, pasa cada compuerta."
    },
    "Señales On-Chain: Bullish vs Bearish": {
      "kind": "comparison",
      "left": {
        "title": "Bullish (Acumulación)",
        "points": [
          "TVL sube mientras el precio baja (posible acumulación)",
          "Ballenas comprando post-caída en Arkham",
          "Fees creciendo mes a mes (demanda real)",
          "Exchange outflows masivos (suele leerse como HODL)",
          "Usuarios activos en tendencia alcista sostenida",
          "Fundadores y equipo no venden tokens"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Bearish (Distribución)",
        "points": [
          "TVL cae mientras el precio sube (posible distribución)",
          "Insiders y VCs moviendo tokens a exchanges",
          "Unlock grande próximo con presión de venta",
          "Exchange inflows masivos (posible venta)",
          "Usuarios cayendo o inflados por bots/incentivos",
          "Equipo y fundadores vendiendo regularmente"
        ],
        "tone": "red"
      },
      "note": "Son pistas para investigar, no garantías: cada dato puede tener una explicación aburrida."
    },
    "Métricas On-Chain que Importan": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Lock",
          "title": "TVL (Total Value Locked)",
          "text": "Capital depositado por usuarios. Sube = confianza; cae = retiran. Mídelo en USD y en moneda nativa."
        },
        {
          "icon": "Banknote",
          "title": "Fees / Revenue",
          "text": "Dinero real que pagan los usuarios. $10M mensuales = demanda probada. Compara Fees/Market Cap."
        },
        {
          "icon": "Users",
          "title": "Active Wallets",
          "text": "Wallets únicas interactuando. Busca crecimiento sostenido; cuidado con bots y Sybil attacks."
        },
        {
          "icon": "RefreshCw",
          "title": "Exchange Flows",
          "text": "Outflow suele leerse como acumulación; inflow, como posible venta. Hay excepciones."
        }
      ],
      "intro": "4 métricas básicas para empezar a evaluar un protocolo.",
      "columns": 2
    },
    "Arsenal de Herramientas On-Chain": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Flame",
          "title": "DefiLlama",
          "text": "Métricas DeFi: TVL, fees y revenue por cadena y categoría. Gratis, sin cuenta."
        },
        {
          "icon": "BarChart3",
          "title": "Dune Analytics",
          "text": "Dashboards on-chain de la comunidad: usuarios activos diarios, volumen real, holders."
        },
        {
          "icon": "Search",
          "title": "Arkham Intelligence",
          "text": "Rastrea wallets de VCs, fondos y ballenas. Sus etiquetas son estimaciones: verifica."
        },
        {
          "icon": "Clock",
          "title": "Tokenomist (tokenomist.ai)",
          "text": "Calendario de desbloqueos. Anticipa la presión de venta cuando se libera supply."
        }
      ],
      "intro": "Con 2-3 bien usadas ya tienes una base sólida.",
      "columns": 2
    }
  },
  20: {
    "El Ciclo de Vida de una Narrativa": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "1. Nacimiento (Insiders)",
          "detail": "Solo los más conectados hablan. Micro-caps, baja liquidez. Riesgo extremo: la mayoría va a cero."
        },
        {
          "label": "2. Crecimiento (Early Adopters)",
          "detail": "Suele tener mejor balance: algo de validación y todavía recorrido. Muchas mueren aquí.",
          "highlight": true
        },
        {
          "label": "3. Mainstream (Las Masas)",
          "detail": "Medios y amigos preguntan. Los líderes ya subieron muchísimo. Poco recorrido, mucha caída posible."
        },
        {
          "label": "4. Agotamiento (El Fin)",
          "detail": "No hay nuevos compradores. Si sigues aquí, eres la liquidez de salida."
        }
      ],
      "intro": "Muchas narrativas recorren 4 etapas parecidas. Casi siempre las reconoces cuando ya pasaron."
    },
    "Rotación: El Arte de Mover tu Capital": {
      "kind": "steps",
      "steps": [
        {
          "title": "Stablecoins",
          "detail": "El punto de partida: capital esperando entrar."
        },
        {
          "title": "BTC",
          "detail": "El dinero entra primero al activo considerado más seguro."
        },
        {
          "title": "ETH",
          "detail": "Rota a la segunda mayor cap cuando BTC se asienta."
        },
        {
          "title": "Large Cap Alts",
          "detail": "El capital busca más riesgo y retorno."
        },
        {
          "title": "Mid Cap Alts",
          "detail": "Subidas mayores, volumen creciente."
        },
        {
          "title": "Small Caps",
          "detail": "Máximo riesgo conforme avanza el ciclo."
        },
        {
          "title": "Memecoins",
          "detail": "Euforia final: el capital más especulativo."
        },
        {
          "title": "Crash y vuelta a stablecoins",
          "detail": "El ciclo colapsa y el capital vuelve a refugio.",
          "warning": true
        }
      ],
      "intro": "El guion clásico del flujo de capital. El ciclo 2024-25 no lo siguió: es un mapa, no una predicción."
    },
    "Narrativas con Sustancia vs Puro Vapor": {
      "kind": "comparison",
      "left": {
        "title": "Narrativas con Sustancia",
        "points": [
          "Catalizador real: ChatGPT, ETFs, nuevo protocolo",
          "Proyectos con producto funcionando y usuarios reales",
          "Métricas on-chain crecientes: TVL, wallets, fees",
          "Adoptada por traders reputados, no solo influencers",
          "Crecimiento sostenido de semanas a meses",
          "Los líderes tienen tokenomics sólidos"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Narrativas de Vapor",
        "points": [
          "Sin catalizador: solo \"alguien lo dijo en Twitter\"",
          "Solo whitepapers y promesas, sin producto real",
          "Sin métricas on-chain que respalden el hype",
          "Promovida por influencers pagados y grupos de Telegram",
          "Colapsa en horas o días",
          "Tokens sin utilidad real"
        ],
        "tone": "red"
      },
      "note": "Las personas no compran tokens, compran historias. Pero solo las historias con sustancia duran."
    },
    "Las Narrativas que Definieron Cada Ciclo": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "2017: ICOs",
          "detail": "\"Cualquiera puede crear un token sin bancos\". Ethereum como plataforma; la mayoría, basura."
        },
        {
          "label": "2020: DeFi Summer",
          "detail": "\"Sé tu propio banco\". Uniswap, Aave, Compound. TVL de ~$1B (2020) a más de $100B (2021)."
        },
        {
          "label": "2021: NFTs y Metaverso",
          "detail": "Bored Apes, CryptoPunks, Axie. Luego la gran mayoría perdió casi todo su valor."
        },
        {
          "label": "2024-2025: AI + Memecoins + Solana",
          "detail": "Agentes de IA, BONK/WIF/PEPE, Solana como cadena favorita. Pico en enero de 2025 y colapso tras LIBRA.",
          "highlight": true
        }
      ],
      "intro": "Cada ciclo tiene su narrativa dominante. Luego muere o se transforma."
    }
  },
  21: {
    "Núcleo-Satélite: El Framework del 85/10/5": {
      "kind": "statCards",
      "cards": [
        {
          "value": "85%",
          "label": "Core (Tu Base)",
          "sublabel": "BTC, ETH y SOL, repartidos según tu perfil. Ninguno es inmune a caídas fuertes",
          "tone": "green"
        },
        {
          "value": "10%",
          "label": "Satélites (Máximo)",
          "sublabel": "3-5 posiciones, incluido tu capital de trading. Asume que puedes perderlo entero",
          "tone": "amber"
        },
        {
          "value": "5%",
          "label": "Liquidez (Stablecoins)",
          "sublabel": "USDC: poder de compra cuando todos venden en pánico. No está libre de riesgo",
          "tone": "neutral"
        }
      ],
      "intro": "Una base grande, apuestas pequeñas y liquidez, dentro de tu porción cripto.",
      "columns": 3
    },
    "Portafolio Diversificado vs Concentrado": {
      "kind": "comparison",
      "left": {
        "title": "Diversificado (85/10/5)",
        "points": [
          "Un crash de -50% duele, pero no te saca del juego",
          "Un satélite en cero = pérdida de 2-3% como mucho",
          "Liquidez disponible para comprar en el pánico",
          "Sin promesas: tu resultado depende sobre todo de BTC",
          "Duermes mejor sin revisar el precio",
          "Decisiones racionales con base psicológica sólida"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Concentrado (1-2 tokens)",
        "points": [
          "Un crash de -50% borra la mitad de tu capital",
          "Hack o scam = lo pierdes TODO",
          "Sin liquidez: ves oportunidades que no puedes comprar",
          "Posible 100×, pero también posible -99%",
          "Estrés constante revisando el precio cada hora",
          "Decisiones emocionales por miedo a perderlo todo"
        ],
        "tone": "red"
      },
      "note": "Empareja cada fila por tema: supervivencia, riesgo de cero, liquidez, retorno y psicología."
    },
    "Correlación: El Enemigo Invisible": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingDown",
          "title": "10 altcoins ≠ diversificación",
          "text": "SOL, AVAX, ARB, JUP… se mueven igual. BTC cae 20% y todas caen 30-50% juntas."
        },
        {
          "icon": "Layers",
          "title": "Diversificación real",
          "text": "Mezcla clases: BTC + stablecoins + alts. Y dentro de alts, por sector: DeFi + AI + Gaming."
        },
        {
          "icon": "Shield",
          "title": "Stablecoins como hedge",
          "text": "5-10% en USDC suele mantener su valor cuando todo cae. No está libre de riesgo: USDC perdió la paridad en marzo de 2023."
        }
      ],
      "intro": "10 altcoins distintas NO son diversificación: en crypto casi todo cae junto cuando BTC cae.",
      "columns": 3
    }
  },
  22: {
    "La Matemática de la Ruina: Por Qué las Pérdidas Duelen Más": {
      "kind": "statCards",
      "cards": [
        {
          "value": "+11%",
          "label": "Para recuperar una pérdida de −10%",
          "sublabel": "Todavía manejable",
          "tone": "amber"
        },
        {
          "value": "+33%",
          "label": "Para recuperar una pérdida de −25%",
          "sublabel": "Ya es difícil",
          "tone": "amber"
        },
        {
          "value": "+100%",
          "label": "Para recuperar una pérdida de −50%",
          "sublabel": "Tienes que duplicar tu dinero",
          "tone": "red"
        },
        {
          "value": "+900%",
          "label": "Para recuperar una pérdida de −90%",
          "sublabel": "La ruina: capital muerto",
          "tone": "red"
        }
      ],
      "intro": "Las pérdidas exigen ganancias desproporcionadas para recuperarse. No es opinión, es matemática.",
      "columns": 4
    },
    "Tipos de Stop Loss": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "CheckCircle",
          "title": "Stop Técnico (Recomendado)",
          "text": "Bajo un soporte clave o el último Higher Low. El más profesional: sales donde tu tesis se invalida."
        },
        {
          "icon": "Percent",
          "title": "Stop Porcentual (Respaldo)",
          "text": "Distancia fija: −5%, −8%, −10%. Simple pero ignora la estructura. Regla práctica: no más de −10%."
        },
        {
          "icon": "TrendingUp",
          "title": "Trailing Stop (Dinámico)",
          "text": "Sube con el precio: de $100 a $150, tu stop pasa a $135. Captura tendencias largas."
        },
        {
          "icon": "X",
          "title": "Stop Mental (Peligroso)",
          "text": "Sin orden en el exchange. Las emociones gritan 'va a rebotar' y no vendes. NO funciona."
        }
      ],
      "intro": "El tipo de stop que uses depende de tu estrategia, el activo y el contexto del mercado.",
      "columns": 2
    },
    "Position Sizing: La Fórmula del 1-2%": {
      "kind": "steps",
      "steps": [
        {
          "title": "Define tu capital",
          "detail": "Tu capital de trading (como máximo el 5-10% de tu porción cripto): $2,000."
        },
        {
          "title": "Fija tu riesgo: 1-2%",
          "detail": "Con riesgo del 2%, la pérdida máxima en este trade es $40."
        },
        {
          "title": "Mide la distancia al stop",
          "detail": "Si tu stop está 10% debajo de la entrada, esa es tu distancia."
        },
        {
          "title": "Calcula la posición máxima",
          "detail": "$40 / 10% = $400. Esa es la posición más grande que puedes tomar."
        },
        {
          "title": "Tu pérdida queda cerca de $40",
          "detail": "Solo el 2% de tu capital de trading (algo más si hay slippage). Con 2% compuesto por trade, 20 pérdidas seguidas te dejan ~67% del capital; hasta 50 te dejan ~36%. Sobrevives para recuperarte."
        }
      ],
      "intro": "Tamaño de posición = (Capital de trading × % riesgo) / Distancia al stop. Nunca arriesgues más del 1-2% por operación."
    },
    "Dónde Colocar tu Stop Loss": {
      "kind": "checklist",
      "good": {
        "title": "Dónde SÍ colocarlo",
        "items": [
          "1-3% debajo de la zona de soporte, como filtro",
          "Compras en $150: stop en $145-146, no en $149",
          "Debajo del último Higher Low de la estructura alcista",
          "Donde tu razón para estar largo deja de existir"
        ]
      },
      "bad": {
        "title": "Dónde NUNCA colocarlo",
        "items": [
          "Justo en el soporte 'obvio' que todos marcan en Twitter",
          "En $99-100 donde hay miles de stops apilados",
          "A veces una mecha pasa por ahí antes de rebotar",
          "Pegado a la entrada, sin filtro contra el ruido"
        ]
      }
    }
  },
  23: {
    "Scaling Out: La Estrategia de los Profesionales": {
      "kind": "steps",
      "steps": [
        {
          "title": "Vende 25% en +2×",
          "detail": "Sacas la mitad de tu inversión original."
        },
        {
          "title": "Mueve tu stop a break-even",
          "detail": "Stop al precio de entrada: proteges tu inversión original. La ganancia sigue en riesgo."
        },
        {
          "title": "Vende 25% en +3-5×",
          "detail": "Aseguras ganancias reales."
        },
        {
          "title": "Vende 25% en +5-10×",
          "detail": "Capitalizas la explosión."
        },
        {
          "title": "Deja correr el 25% moonbag",
          "detail": "Sin límite. No necesitas adivinar el techo exacto."
        }
      ],
      "intro": "Muchos traders experimentados no venden todo de golpe: venden por tramos a medida que el precio sube."
    },
    "El Concepto del Moonbag": {
      "kind": "steps",
      "steps": [
        {
          "title": "El precio llega a $5",
          "detail": "Vendes 750 tokens = $3,750. Recuperas tu inversión y más."
        },
        {
          "title": "Te quedan 250 tokens (25%)",
          "detail": "Tu moonbag: hoy valen $1,250, y siguen siendo tuyos."
        },
        {
          "title": "Si suben a $50",
          "detail": "Valdrían $12,500."
        },
        {
          "title": "Si caen a cero",
          "detail": "Pierdes $1,250 que eran tuyos. No es dinero gratis."
        }
      ],
      "intro": "Compraste 1000 tokens a $1 = $1,000 invertido. Así funciona el moonbag."
    },
    "Vender Todo de Golpe vs Scaling Out": {
      "kind": "comparison",
      "left": {
        "title": "Vender Todo en un Punto",
        "points": [
          "Simple: una decisión, una acción",
          "Maximiza ganancia solo si aciertas el techo exacto",
          "Pero nadie acierta el techo consistentemente",
          "Demasiado temprano: pierdes upside masivo",
          "Demasiado tarde: devolviste ganancias",
          "Alto arrepentimiento sin importar cuándo vendas"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Scaling Out (Venta Escalonada)",
        "points": [
          "Más complejo: múltiples decisiones",
          "No maximiza la ganancia teórica perfecta",
          "Captura ganancias reales en cada nivel",
          "Si sigue subiendo, mantienes exposición (moonbag)",
          "Si cae, ya aseguraste la mayoría de tus ganancias",
          "Minimiza el arrepentimiento: siempre hiciste algo bien"
        ],
        "tone": "green"
      },
      "note": "No necesitas adivinar el techo. El scaling out elimina el problema del timing perfecto."
    },
    "Tu Plan de Salida: El Template Pre-Trade": {
      "kind": "checklist",
      "good": {
        "title": "Define ANTES de entrar",
        "items": [
          "Entry y razón: SOL a $160, soporte semanal, RSI en sobreventa",
          "Stop y tamaño: stop en $144 (-10%), 2% de riesgo sobre $2,000 de capital de trading = $400",
          "TP1: 25% en $200 (resistencia)",
          "TP2: 25% en $250 (número redondo)",
          "TP3: 25% en $300 (extensión Fib)",
          "Moonbag: 25% con trailing stop de 20%",
          "Registra cada venta: puede generar impuestos"
        ]
      },
      "bad": {
        "title": "La Regla de Hierro",
        "items": [
          "NO cambiar el plan después de entrar",
          "El plan se define con la mente fría, antes de las emociones",
          "Si cambias targets durante la operación, las emociones ganaron"
        ]
      }
    }
  },
  24: {
    "Trader Emocional vs Trader Disciplinado": {
      "kind": "comparison",
      "left": {
        "title": "Trader Emocional",
        "points": [
          "Compra por FOMO, sin plan de entrada ni salida",
          "Mueve el stop loss \"un poquito más\" para no salir",
          "Dobla la posición tras perder, para \"recuperar\"",
          "Opera por intuición, sin reglas escritas",
          "Mira gráficos 12 horas al día, agotado y estresado",
          "Gana a veces, pero pierde todo al final del ciclo"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Trader Disciplinado",
        "points": [
          "Solo entra si su checklist se cumple al 100%",
          "El stop loss es sagrado, se ejecuta sin moverlo",
          "Acepta la pérdida como costo del negocio y sigue",
          "Tiene un plan escrito con reglas claras",
          "Revisa en horarios definidos y vive su vida",
          "Sobrevive, que es el requisito para todo lo demás"
        ],
        "tone": "green"
      },
      "note": "Misma situación, dos respuestas. Con el mismo sistema, la disciplina cambia el resultado."
    },
    "Los 4 Demonios del Trading": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Rocket",
          "title": "FOMO",
          "text": "\"Si no compro ya, me pierdo la oportunidad de mi vida\". Te hace comprar en máximos, sin plan, en el peor momento."
        },
        {
          "icon": "Coins",
          "title": "Avaricia",
          "text": "\"¿Y si sube más?\". Convierte trades ganadores en perdedores: de +150% a 0% por no realizar la ganancia."
        },
        {
          "icon": "TrendingDown",
          "title": "Miedo",
          "text": "Una caída de -10% se siente como amenaza. Vendes en el peor momento, o nunca entras al trade correcto."
        },
        {
          "icon": "Flame",
          "title": "Revenge Trading",
          "text": "Tras perder -20%, doblas el tamaño para vengarte. Pierdes -25% más: ahora estás -45% y en espiral."
        }
      ],
      "intro": "Instintos de la sabana que te sabotean en los mercados.",
      "columns": 2
    },
    "La Varianza: Tu Amiga Incomprendida": {
      "kind": "statCards",
      "cards": [
        {
          "value": "60%",
          "label": "Win rate de 60%",
          "sublabel": "Aun así habrá rachas de 5-8 pérdidas seguidas",
          "tone": "green"
        },
        {
          "value": "100-200",
          "label": "Trades para juzgar",
          "sublabel": "Menos que eso no evalúa un sistema",
          "tone": "amber"
        },
        {
          "value": "−10%",
          "label": "Arriesgando 2% por trade",
          "sublabel": "5 pérdidas seguidas: recuperable",
          "tone": "green"
        },
        {
          "value": "−50%",
          "label": "Arriesgando 10% por trade",
          "sublabel": "5 pérdidas seguidas: necesitas +100% para volver a 0",
          "tone": "red"
        }
      ],
      "intro": "Con 60% de aciertos, las rachas de pérdidas son matemáticamente inevitables.",
      "columns": 4
    },
    "El Plan de Trading: Tu Escudo Anti-Emociones": {
      "kind": "checklist",
      "good": {
        "title": "Los 5 elementos de tu plan",
        "items": [
          "Criterios de entrada: qué señal abre el trade (técnica, on-chain, narrativa)",
          "Tamaño de posición: nunca arriesgues más del 1-2% de tu capital de trading por trade",
          "Stop loss: precio de salida si te equivocas, definido ANTES de entrar",
          "Take profit: ventas parciales por tramos (por ejemplo, de 25% en 25%)",
          "Estado mental: no opero si estoy enojado, cansado o ebrio"
        ]
      },
      "bad": {
        "title": "Sin plan escrito",
        "items": [
          "Cada decisión se toma en caliente",
          "El stop loss se mueve según el miedo del momento",
          "El tamaño lo decide el ego, no las reglas",
          "Las ganancias se evaporan esperando \"un poco más\"",
          "A largo plazo, casi siempre pierde dinero"
        ]
      }
    }
  },
  25: {
    "Cómo Funciona la Agregación de Liquidez": {
      "kind": "steps",
      "steps": [
        {
          "title": "Entra una orden: $5,000 USDC por SOL",
          "detail": "Sale de tu wallet (Phantom) sin entregar custodia a nadie."
        },
        {
          "title": "Descubrimiento de rutas",
          "detail": "Jupiter evalúa Raydium, Orca, Phoenix, Meteora y más en milisegundos."
        },
        {
          "title": "Divide la orden por mejor precio",
          "detail": "$3,000 vía Raydium + $2,000 vía Orca; el resto se descarta."
        },
        {
          "title": "Una sola transacción atómica",
          "detail": "Todo se ejecuta junto y el SOL vuelve directo a tu wallet."
        }
      ],
      "intro": "Una sola orden entra, Jupiter la divide entre los mejores pools y la devuelve en una transacción."
    },
    "Jupiter vs Exchange Centralizado (Binance)": {
      "kind": "comparison",
      "left": {
        "title": "Jupiter (DEX)",
        "points": [
          "Swaps sin custodia (las órdenes programadas guardan fondos)",
          "Sin KYC ni verificación de identidad",
          "Casi cualquier token, incluidas copias: verifica el mint",
          "DCA y Limit Orders sin intermediarios",
          "Riesgo: bugs de smart contract (mitigado por auditorías)",
          "Solo funciona con tokens en Solana"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Binance (CEX)",
        "points": [
          "Custodia centralizada: not your keys, not your coins",
          "KYC obligatorio y restricciones geográficas",
          "Solo tokens que Binance lista (proceso lento)",
          "DCA y órdenes avanzadas disponibles",
          "Riesgo: la empresa quiebra (FTX) o congela fondos",
          "Multi-chain pero retiros lentos y costosos"
        ],
        "tone": "red"
      },
      "note": "Filas alineadas por tema: custodia, identidad, tokens, órdenes, riesgo y cobertura."
    },
    "Tutorial: Tu Primer Swap en Jupiter": {
      "kind": "steps",
      "steps": [
        {
          "title": "Conecta tu wallet",
          "detail": "Escribe jup.ag y toca Connect Wallet. Nunca pide tu frase semilla, solo firmar."
        },
        {
          "title": "Selecciona tus tokens",
          "detail": "Arriba USDC, abajo SOL. Muestra precio, ruta óptima y slippage."
        },
        {
          "title": "Revisa y confirma",
          "detail": "Price impact bajo y firma en Phantom. Fee: modo Ultra (por defecto) 0-0.5% según el par; modo Manual 0%, sin protección MEV."
        },
        {
          "title": "Configuración avanzada",
          "detail": "Órdenes grandes: si el price impact supera ~1%, divide en el tiempo o usa una orden límite. Ultra envía privado contra MEV."
        }
      ],
      "intro": "Tres pasos en jup.ag y tu swap está listo en 1-2 segundos."
    },
    "Jupiter Perpetuals: Trading con Apalancamiento": {
      "kind": "statCards",
      "cards": [
        {
          "value": "10×",
          "label": "Apalancamiento",
          "sublabel": "$100 controlan $1,000",
          "tone": "amber"
        },
        {
          "value": "+100%",
          "label": "Si sube 10%",
          "sublabel": "Ganas $100 sobre tu capital",
          "tone": "green"
        },
        {
          "value": "Liquidado",
          "label": "Si baja 10%",
          "sublabel": "Pierdes todo tu capital",
          "tone": "red"
        }
      ],
      "intro": "Con 10× apalancamiento, $100 controlan $1,000. La volatilidad amplifica todo.",
      "columns": 3
    }
  },
  26: {
    "Impermanent Loss: El Riesgo que Debes Dominar": {
      "kind": "statCards",
      "cards": [
        {
          "value": "+50%",
          "label": "Cambio de precio",
          "sublabel": "IL ~2.0%",
          "tone": "green"
        },
        {
          "value": "+100%",
          "label": "El token hace 2×",
          "sublabel": "IL ~5.7%",
          "tone": "amber"
        },
        {
          "value": "+200%",
          "label": "El token hace 3×",
          "sublabel": "IL ~13.4%",
          "tone": "amber"
        },
        {
          "value": "+400%",
          "label": "El token hace 5×",
          "sublabel": "IL ~25.5%",
          "tone": "red"
        },
        {
          "value": "-50%",
          "label": "El token cae a la mitad",
          "sublabel": "IL ~5.7%",
          "tone": "amber"
        },
        {
          "value": "-90%",
          "label": "El token cae 90%",
          "sublabel": "IL ~42.5%, más la caída del precio",
          "tone": "red"
        }
      ],
      "intro": "Cuanto más se mueve el precio, en cualquier dirección, mayor es la pérdida frente a hacer HODL:",
      "columns": 3
    },
    "Pool Estándar vs Pool Concentrado": {
      "kind": "comparison",
      "left": {
        "title": "Pool Estándar (Raydium AMM)",
        "points": [
          "Liquidez distribuida en todo el rango de precios",
          "Siempre activo sin importar el precio",
          "Menor eficiencia de capital",
          "No requiere monitoreo activo",
          "Impermanent loss predecible y gradual",
          "Ideal para LPs pasivos y largo plazo"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Pool Concentrado (Meteora DLMM)",
        "points": [
          "Liquidez concentrada en un rango definido por ti",
          "Solo activo si el precio está en tu rango",
          "5-20× más fees por dólar invertido",
          "Requiere monitoreo y rebalanceo frecuente",
          "Impermanent loss puede ser severa",
          "Ideal para LPs activos con tiempo"
        ],
        "tone": "amber"
      },
      "note": "Más eficiencia de capital a cambio de más gestión y más riesgo de IL."
    },
    "¿Cómo Funcionan los Pools de Liquidez?": {
      "kind": "steps",
      "steps": [
        {
          "title": "Depositas dos tokens en proporción igual",
          "detail": "Ejemplo: $500 de SOL + $500 de USDC = $1,000 en el pool SOL-USDC."
        },
        {
          "title": "Un trader hace swap contra el pool",
          "detail": "Intercambia SOL↔USDC contra el pool, no contra otra persona, y paga una comisión (de 0.01% a 1% según el pool)."
        },
        {
          "title": "Los fees se reparten entre los LPs",
          "detail": "La comisión se distribuye proporcionalmente según la participación de cada uno."
        },
        {
          "title": "Los fees se acumulan en tu posición",
          "detail": "No llegan a tu wallet: $1,000 + $50 en fees = posición de $1,050."
        },
        {
          "title": "Cobras al retirar tu liquidez",
          "detail": "Más volumen del pool = más fees. El APY es variable y no incluye la impermanent loss."
        }
      ],
      "intro": "Tú te conviertes en la casa de cambio: depositas tokens y cobras una porción de cada swap."
    },
    "Las Plataformas de Solana para Proveer Liquidez": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Droplet",
          "title": "Raydium",
          "text": "El DEX más establecido: pools estándar (AMM) y concentrados (CLMM). Mucho volumen en SOL-USDC y memecoins. El más fácil para empezar."
        },
        {
          "icon": "BarChart3",
          "title": "Meteora",
          "text": "Especialista en DLMM concentrado. Rangos precisos y estrategias spot/curve/bid-ask. Para LPs con experiencia."
        },
        {
          "icon": "Layers",
          "title": "Orca",
          "text": "Interfaz clara con Whirlpools concentrados; también permite rango completo."
        }
      ],
      "intro": "Cada DEX de Solana tiene su nicho. Elige según tu nivel y estrategia:",
      "columns": 3
    }
  },
  27: {
    "Cómo Funciona: Colateral, LTV y Liquidación": {
      "kind": "statCards",
      "cards": [
        {
          "value": "$1,800",
          "label": "Colateral",
          "sublabel": "10 SOL a $180, bloqueados como garantía",
          "tone": "neutral"
        },
        {
          "value": "75%",
          "label": "LTV máximo",
          "sublabel": "Una caída de ~6% te liquida (umbral de liquidación 80%). Jugar con fuego.",
          "tone": "red"
        },
        {
          "value": "35-40%",
          "label": "LTV prudente",
          "sublabel": "Para empezar: con 35-40% LTV necesitas una caída de 50-56% para ser liquidado",
          "tone": "green"
        },
        {
          "value": "2-10%",
          "label": "Penalización al liquidar",
          "sublabel": "Según protocolo y activo. Vendes en el peor momento. Irreversible.",
          "tone": "red"
        }
      ],
      "intro": "Tres números mandan en una posición de lending. Domínalos antes de depositar.",
      "columns": 4
    },
    "Lending Conservador vs Agresivo": {
      "kind": "comparison",
      "left": {
        "title": "Conservador (Recomendado)",
        "points": [
          "LTV de 35-40% o menos",
          "Health Factor ≥ 2.0 (≈ 40% LTV o menos)",
          "Colateral en blue chips: SOL, ETH",
          "Revisión diaria y alertas",
          "Riesgo de liquidación: bajo, no cero",
          "Meta: liquidez sin vender tu posición"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Agresivo (Solo Expertos)",
        "points": [
          "LTV del 65-75%: cerca del máximo",
          "Health Factor de 1.2-1.5: zona de peligro",
          "Looping: pides, compras más, repites",
          "Requiere monitoreo constante 24/7",
          "Riesgo alto: con 75% LTV, ~6% de caída puede liquidarte",
          "Meta: apalancar para maximizar exposición"
        ],
        "tone": "red"
      },
      "note": "El espacio entre tu LTV y el umbral de liquidación es tu seguro de vida."
    },
    "Looping: La Estrategia de las Ballenas": {
      "kind": "steps",
      "steps": [
        {
          "title": "Depositas 10 SOL",
          "detail": "Tu posición de partida como colateral."
        },
        {
          "title": "Pides prestado 800 USDC",
          "detail": "Deuda moderada (~44% LTV sobre colateral a $180/SOL)."
        },
        {
          "title": "Compras más SOL",
          "detail": "Conviertes el USDC en más colateral."
        },
        {
          "title": "Depositas y repites",
          "detail": "Tras 3-4 loops moderados: ~1.8× apalancamiento (~17-18 SOL)."
        },
        {
          "title": "SOL sube 20%: ganas ~35%",
          "detail": "Con LTV moderado el looping amplifica sin ir a 2-4× (eso es LTV agresivo)."
        },
        {
          "title": "Caída fuerte: liquidación",
          "detail": "A LTV agresivo (cerca del máximo) una caída de ~6-15% puede liquidarte. Kamino Multiply lo hace con un clic: trátalo como un perpetuo apalancado.",
          "warning": true
        }
      ],
      "intro": "Con LTV moderado (~40-50% por vuelta), 10 SOL pasan a controlar ~17-18 SOL (~1.8×). A LTV agresivo el apalancamiento puede llegar a 2-4×."
    },
    "Ejemplo Práctico: Pedir Prestado Paso a Paso": {
      "kind": "steps",
      "steps": [
        {
          "title": "Deposita colateral",
          "detail": "10 SOL ≈ $1,800 (SOL a $180). Aparece en el dashboard en USD."
        },
        {
          "title": "Pide prestado conservador",
          "detail": "Solo $630 USDC = 35% LTV, no los $1,350 / 75% que permite el protocolo."
        },
        {
          "title": "Monitorea tu Health Factor",
          "detail": "Con 35% LTV y umbral 80%, HF ≈ 2.3. Revisa a diario; si baja de 1.5, deposita más o repaga."
        },
        {
          "title": "Repaga y recupera",
          "detail": "Devuelves $630 + intereses y liberas tus 10 SOL. Si SOL bajó, igual debes lo mismo."
        }
      ],
      "intro": "Pedir prestado en Kamino de forma segura, con cifras reales."
    }
  },
  28: {
    "Riesgos de DeFi: Probabilidad vs Impacto": {
      "kind": "comparison",
      "left": {
        "title": "Alta probabilidad, menor impacto",
        "points": [
          "Impermanent loss en pools (esperable y calculable)",
          "Fees de gas mal calculados (pierdes centavos)",
          "Slippage mayor al esperado en swaps",
          "APY variable: rendimientos menores a lo proyectado",
          "Token de reward (farming) pierde valor",
          "Posición de lending cerca de liquidación por volatilidad"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Baja probabilidad, alto impacto",
        "points": [
          "Smart contract hack: pierdes todo lo depositado",
          "Rug pull deliberado del equipo del proyecto",
          "Bridge hackeado: fondos robados",
          "Oracle manipulation: liquidaciones injustas",
          "Perder frase semilla: fondos irrecuperables",
          "Firmar transacción maliciosa: wallet drenada"
        ],
        "tone": "red"
      },
      "note": "Lo de la izquierda lo vigilas y calculas; lo de la derecha es lo que te puede arruinar."
    },
    "Riesgo #2: Rug Pulls y Estafas": {
      "kind": "checklist",
      "good": {
        "title": "Cómo verificar antes de entrar",
        "items": [
          "RugCheck.xyz para tokens de Solana",
          "Confirma que la liquidez esté bloqueada (locked LP)",
          "Solscan.io: revisa si pocas wallets controlan el supply",
          "Equipo anónimo + contrato no verificado: solo arriesga lo que puedas perder al 100%"
        ]
      },
      "bad": {
        "title": "Banderas rojas de un rug pull",
        "items": [
          "Equipo anónimo sin historial verificable",
          "Rendimientos absurdos (1,000%+ APY \"garantizado\")",
          "Smart contracts no verificados o sin auditoría",
          "Liquidez no bloqueada (pueden retirar el pool)",
          "Presión para invertir ya (\"solo quedan 2 horas\")",
          "La mayoría del supply en manos del equipo"
        ]
      }
    },
    "Riesgo #3: Exploits de Oráculos y Bridges": {
      "kind": "statCards",
      "cards": [
        {
          "value": "$625M",
          "label": "Ronin (Axie Infinity)",
          "sublabel": "El mayor hackeo de bridge",
          "tone": "red"
        },
        {
          "value": "$320M",
          "label": "Wormhole",
          "sublabel": "Solana ↔ Ethereum, feb 2022",
          "tone": "red"
        },
        {
          "value": "$190M",
          "label": "Nomad",
          "sublabel": "Bridge cross-chain",
          "tone": "red"
        }
      ],
      "intro": "Los bridges son el eslabón más débil del ecosistema multi-chain: concentran enormes fondos bloqueados.",
      "columns": 3
    },
    "Tu Framework de Gestión de Riesgo en DeFi": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Percent",
          "title": "Regla del 20-30%",
          "text": "Nunca más de un tercio de tu portafolio en un solo protocolo. Diversifica entre 3-5 establecidos."
        },
        {
          "icon": "Clock",
          "title": "Lindy Effect",
          "text": "Más tiempo resistiendo con mucho TVL suele significar menos bugs obvios. No protege de llaves mal controladas."
        },
        {
          "icon": "Search",
          "title": "Due diligence mínima",
          "text": "Auditorías, tiempo operando, código verificado, bug bounty, equipo doxxed. Si fallan 3 de 5, no deposites."
        },
        {
          "icon": "Wallet",
          "title": "Separa tus wallets",
          "text": "Cold (Ledger) para ahorros, hot (Phantom) para DeFi establecido, burner para experimentar."
        }
      ],
      "intro": "No puedes eliminar el riesgo en DeFi, pero sí gestionarlo con cuatro reglas.",
      "columns": 2
    }
  },
  29: {
    "NFTs en Solana vs NFTs en Ethereum": {
      "kind": "comparison",
      "left": {
        "title": "Solana",
        "points": [
          "Minteo regular: ~0.01+ SOL (~$1-3); los cNFTs cuestan fracciones de centavo",
          "cNFTs: millones de NFTs por centavos",
          "Confirmación en menos de un segundo",
          "Marketplaces: Magic Eden, Tensor (y OpenSea en algunas)",
          "Enfoque en utilidad y comunidades activas",
          "Mercado impulsado por utilidad y cNFTs (2026)"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Ethereum",
        "points": [
          "Minteo en L1: de centavos a varios dólares según congestión",
          "Sin compresión nativa (caro a escala)",
          "Transacciones lentas (~12s) y caras",
          "Marketplaces: OpenSea, Blur",
          "Colecciones históricas (Punks, Apes) y arte",
          "Maduro pero con volumen decreciente"
        ],
        "tone": "amber"
      },
      "note": "El golpe está en el costo a escala: un millón de cNFTs en Solana cuesta unos pocos SOL en total."
    },
    "El Ecosistema de NFTs en Solana": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Users",
          "title": "Colecciones PFP",
          "text": "Mad Lads, Claynosaurz, Tensorians. El valor está en la comunidad, no en la imagen."
        },
        {
          "icon": "Layers",
          "title": "cNFTs (Comprimidos)",
          "text": "DRiP.haus distribuyó millones gratis. Millones de NFTs por centavos."
        },
        {
          "icon": "Key",
          "title": "NFTs de Utilidad",
          "text": "Descuentos de fees, pases VIP, governance en DAOs. El valor está en la utilidad."
        },
        {
          "icon": "Gem",
          "title": "Arte Generativo y 1/1",
          "text": "Piezas por algoritmo o únicas. Exchange Art: arte 1/1 de artista a coleccionista (Formfunction, otra plataforma, cerró en 2023)."
        }
      ],
      "columns": 2
    },
    "Los Marketplaces: Dónde Comprar y Vender": {
      "kind": "checklist",
      "good": {
        "title": "Antes de comprar, revisa",
        "items": [
          "Floor price y su tendencia: ¿sube o baja?",
          "Volumen de trading real: ¿activo o muerto?",
          "Holders únicos: ¿cuántas personas distintas?",
          "Comunidad: ¿Discord y Twitter activos?",
          "Utilidad concreta: ¿qué beneficio te da?"
        ]
      },
      "bad": {
        "title": "Dónde operar",
        "items": [
          "Magic Eden: líder en volumen, ideal para tu primera compra",
          "Tensor: herramientas tipo exchange para traders",
          "OpenSea: algunas colecciones de Solana desde 2026",
          "Verifica la dirección de la colección oficial"
        ]
      }
    },
    "Riesgos y Realidades del Mercado de NFTs": {
      "kind": "checklist",
      "good": {
        "title": "Compra inteligente: razones válidas",
        "items": [
          "Quieres ser parte de la comunidad y participar",
          "La utilidad justifica el precio que pagas",
          "Te gusta el arte y compras como coleccionista",
          "Entiendes que es especulación con dinero que puedes perder"
        ]
      },
      "bad": {
        "title": "Señales de alerta",
        "items": [
          "90%+ de las colecciones terminan en floor cercano a cero",
          "Las que mantienen valor son la excepción, no la regla",
          "Wash trading: se compran y venden a sí mismos para inflar volumen",
          "NUNCA compres solo porque está subiendo"
        ]
      }
    }
  },
  30: {
    "Farming Legítimo vs Sybil Farming": {
      "kind": "comparison",
      "left": {
        "title": "Farming Legítimo",
        "points": [
          "Una wallet principal con historial orgánico",
          "Transacciones con propósito real: swaps y LP que necesitas",
          "Volumen proporcional a tu capital real",
          "Consistencia a lo largo de meses",
          "Resultado: airdrop generoso que premia tu uso real"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Sybil Farming (Penalizado)",
        "points": [
          "Cientos de wallets para simular muchos usuarios",
          "Transacciones vacías: circular el mismo capital entre wallets propias",
          "Scripts automatizados con patrones idénticos",
          "Actividad artificial concentrada en días específicos",
          "Resultado: wallet bloqueada, airdrop perdido, tiempo desperdiciado"
        ],
        "tone": "red"
      },
      "note": "Los protocolos usan análisis on-chain para detectar y EXCLUIR sybils."
    },
    "¿Cómo Funcionan los Airdrops?": {
      "kind": "steps",
      "steps": [
        {
          "title": "El Problema del Protocolo",
          "detail": "Necesita tracción, así que promete recompensar a los early adopters en su TGE (Token Generation Event)."
        },
        {
          "title": "El Snapshot",
          "detail": "En fecha sorpresa se congela toda la actividad on-chain: quién, cuánto volumen, qué frecuencia, cuánto tiempo."
        },
        {
          "title": "La Distribución",
          "detail": "Se anuncian los criterios y los elegibles claimean. Favorece: volumen, frecuencia, antigüedad y diversidad de funciones."
        }
      ],
      "intro": "Los airdrops siguen un patrón predecible que puedes entender y aprovechar."
    },
    "¿Vender o Holdear el Airdrop?": {
      "kind": "statCards",
      "cards": [
        {
          "value": "30-50%",
          "label": "Vender YA",
          "sublabel": "Asegurar ganancias reales",
          "tone": "green"
        },
        {
          "value": "30-40%",
          "label": "Holdear",
          "sublabel": "Solo si crees en el protocolo",
          "tone": "amber"
        },
        {
          "value": "Resto",
          "label": "Stop loss mental",
          "sublabel": "Si cae 50% desde aquí, vendo",
          "tone": "red"
        }
      ],
      "intro": "Estrategia híbrida: reparte el airdrop recibido en tres porciones para evitar codicia y arrepentimiento.",
      "columns": 3
    }
  },
  31: {
    "DePIN vs Infraestructura Tradicional": {
      "kind": "comparison",
      "left": {
        "title": "DePIN (Descentralizado)",
        "points": [
          "La construyen miles o millones de participantes",
          "Cada uno invierte $200-500 en hardware",
          "Tokens incentivan la participación orgánica",
          "Cobertura distribuida y resiliente",
          "El valor se reparte entre todos",
          "Escala rápido y orgánico por incentivos"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Infraestructura Tradicional",
        "points": [
          "La construye una sola corporación centralizada",
          "La empresa invierte miles de millones en capital",
          "Empleados y contratistas pagados con salario",
          "Cobertura concentrada en zonas rentables",
          "El valor lo capturan accionistas y ejecutivos",
          "Escala lento y costoso"
        ],
        "tone": "red"
      },
      "note": "DePIN invierte la lógica: la gente provee la red y comparte el valor."
    },
    "¿Cómo Funciona DePIN?": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "Más participantes",
          "detail": "Personas instalan hardware atraídas por los tokens"
        },
        {
          "label": "Mejor servicio",
          "detail": "Más cobertura, más datos, mejor calidad"
        },
        {
          "label": "Más usuarios y clientes",
          "detail": "El servicio se vuelve útil de verdad"
        },
        {
          "label": "Más demanda del token",
          "detail": "Pagar el servicio requiere el token"
        },
        {
          "label": "El token puede valorizarse",
          "detail": "Más valor para quienes participan"
        },
        {
          "label": "Vuelve a empezar con más participantes",
          "detail": "Helium: creció a ~1M de hotspots en 2022; hoy ~358,000 activos (nov. 2026). El flywheel también gira al revés.",
          "highlight": true
        }
      ],
      "intro": "El flywheel de DePIN: un ciclo que se retroalimenta, para bien o para mal."
    },
    "Los Proyectos DePIN Más Importantes de Solana": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Network",
          "title": "Helium (HNT)",
          "text": "Red descentralizada de IoT (LoRaWAN) y Wi-Fi. ~358,000 hotspots activos (nov. 2026, tras el pico de ~1M en 2022). Todo se paga en HNT. Planes móviles solo en EE. UU."
        },
        {
          "icon": "Globe",
          "title": "Bee Maps (antes Hivemapper)",
          "text": "Mapa descentralizado. Te pagan en USDC por km mapeado con su cámara. Por ahora solo EE. UU. y Puerto Rico."
        },
        {
          "icon": "Cpu",
          "title": "Render Network (RENDER)",
          "text": "Alquilas tu GPU NVIDIA para rendering 3D e IA. Alternativa descentralizada a AWS y Google Cloud."
        },
        {
          "icon": "Server",
          "title": "io.net",
          "text": "Agrega GPUs de data centers, mineros y usuarios. Supercomputador descentralizado para IA."
        }
      ],
      "columns": 2
    },
    "Riesgos y Realidades de DePIN": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingDown",
          "title": "Recompensas insostenibles",
          "text": "Si la demanda real no crece, las recompensas bajan y los operadores se van. Busca ingresos de clientes reales."
        },
        {
          "icon": "AlertTriangle",
          "title": "Riesgo de hardware",
          "text": "El equipo es costo hundido. Si el token cae 70%, tu payback pasa de 6 meses a 3 años."
        },
        {
          "icon": "Scale",
          "title": "Regulación",
          "text": "Telecom, mapeo y datos están regulados. Un cambio de reglas afecta proyectos por jurisdicción."
        }
      ],
      "columns": 3
    }
  },
  32: {
    "Monolítico (Solana) vs Modular (Ethereum + L2s)": {
      "kind": "comparison",
      "left": {
        "title": "Solana (Monolítico)",
        "points": [
          "Una sola cadena rápida: bloques cada ~200ms",
          "Toda la liquidez en un solo lugar",
          "Componibilidad sincrónica: operaciones atómicas complejas",
          "Sin bridges dentro del ecosistema",
          "Requiere hardware potente para validadores",
          "Si L1 falla, todo el ecosistema se detiene"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Ethereum + L2s (Modular)",
        "points": [
          "Múltiples cadenas especializadas conectadas a L1",
          "Liquidez fragmentada entre L2s",
          "Componibilidad asíncrona: bridges lentos entre L2s",
          "Necesita bridges (riesgosos) para mover entre capas",
          "Nodos L1 accesibles desde una laptop común",
          "Complejidad, fragmentación y dependencia de bridges"
        ],
        "tone": "amber"
      },
      "note": "Ninguno es 'mejor' en absoluto: cada uno sacrifica algo para ganar otra cosa."
    },
    "El Enfoque Monolítico: La Tesis de Solana": {
      "kind": "steps",
      "steps": [
        {
          "title": "Swap en Jupiter",
          "detail": "Cambias un token por otro como primer paso."
        },
        {
          "title": "Depósito en Kamino",
          "detail": "El resultado del swap se deposita de inmediato."
        },
        {
          "title": "Stake en Jito",
          "detail": "Stakeas lo depositado, todo en el mismo bloque."
        },
        {
          "title": "Si una falla, TODAS se revierten",
          "detail": "Es atómico. Entre L2s distintas, esa atomicidad se pierde.",
          "warning": true
        }
      ],
      "intro": "Componibilidad sincrónica: tres operaciones DeFi en una sola transacción atómica, en el mismo bloque y en menos de un segundo."
    },
    "El Problema de la Fragmentación": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum + L2s: con fricción",
        "points": [
          "Tu USDC está en Arbitrum, el protocolo está en Base",
          "Bridge obligatorio: de segundos a horas según el tipo",
          "Fees adicionales en cada salto",
          "Riesgo de hack: los bridges son los mayores targets",
          "Liquidez dividida entre 20+ L2s, cada pool con menos profundidad"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana: directo",
        "points": [
          "Todo en una sola cadena, sin elegir L2",
          "Conectas Phantom a Jupiter y ya",
          "Accedes a TODA la liquidez disponible",
          "Sin bridges internos, sin esperas, sin fees extra",
          "Mejor ejecución y menor slippage"
        ],
        "tone": "green"
      },
      "note": "La fragmentación de liquidez es la mayor debilidad práctica del enfoque modular."
    },
    "Las Debilidades de Cada Enfoque": {
      "kind": "comparison",
      "left": {
        "title": "Debilidades de Solana",
        "points": [
          "Episodios de congestión y degradación de rendimiento",
          "Validar cuesta ~$600-1,300 al mes más tarifas: pocos pueden",
          "Eso concentra los nodos y afecta la descentralización",
          "Sin 'escape': si L1 falla, todo el ecosistema cae a la vez"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Debilidades de Ethereum + L2s",
        "points": [
          "La fragmentación empeora con cada nueva L2",
          "Bridges: puntos de fallo costosos, miles de millones perdidos en hacks",
          "UX confusa para los novatos",
          "El sequencer suele estar en manos de una sola empresa"
        ],
        "tone": "amber"
      },
      "note": "La realidad: ambos evolucionan (Solana hacia resiliencia; Ethereum hacia based rollups y chain abstraction). El ganador no está decidido."
    }
  },
  33: {
    "Agave vs Firedancer: Comparación Técnica": {
      "kind": "comparison",
      "left": {
        "title": "Agave (Anza - Rust)",
        "points": [
          "Lenguaje: Rust, seguridad de memoria por compilador",
          "En producción desde 2020, años probado en mainnet",
          "TPS de usuarios: de cientos a unos pocos miles, según carga",
          "Equipo: Anza, expertos en blockchain",
          "Ventaja: estabilidad probada, herramientas maduras",
          "Limitación: techo de rendimiento por diseño original"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Firedancer (Jump - C)",
        "points": [
          "Lenguaje: C, control total de memoria y hardware",
          "En mainnet desde diciembre de 2025, ~17% del stake (nov. 2026)",
          "TPS en laboratorio: 1,000,000+ (teórico máximo)",
          "Equipo: Jump Crypto, expertos en trading HFT",
          "Ventaja: rendimiento extremo y diversidad real de código",
          "Limitación: gestión manual de memoria, más riesgo de bugs"
        ],
        "tone": "amber"
      },
      "note": "Un bug en el cliente minoritario no detiene la red; uno en el mayoritario todavía podría."
    },
    "El Futuro de Solana: Más Allá de Firedancer": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Lock",
          "title": "Token Extensions",
          "text": "Transferencias confidenciales, fees automáticos, metadatos on-chain y hooks para instituciones."
        },
        {
          "icon": "Network",
          "title": "La SVM Más Allá de Solana",
          "text": "Eclipse sobre Ethereum, Neon ejecutando contratos EVM. La SVM como estándar de ejecución."
        },
        {
          "icon": "Zap",
          "title": "Solana Mobile y Blinks",
          "text": "Ejecuta transacciones desde cualquier URL o QR, sin abrir la wallet."
        },
        {
          "icon": "Layers",
          "title": "Compresión de Estado",
          "text": "Almacenar datos on-chain cuesta 100-1000x menos. cNFTs por fracciones de centavo."
        }
      ],
      "intro": "Firedancer es solo una pieza. Solana evoluciona en varios frentes a la vez.",
      "columns": 2
    },
    "¿Qué Significa Firedancer Para Ti?": {
      "kind": "comparison",
      "left": {
        "title": "El problema antes",
        "points": [
          "Apagones en 2022 detenían la red por horas",
          "Picos de demanda: mints y airdrops la congestionaban",
          "Muchos \"transaction failed\" cuando más importaba",
          "Validar es caro: ~$600-1,300 al mes en servidor"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Lo que cambia para ti",
        "points": [
          "Dos clientes: menos riesgo de apagón total a medida que se reparte el stake",
          "Firedancer está diseñado para tolerar mejor los picos",
          "Hardware más eficiente: validar más barato a futuro",
          "Sin acción requerida: la transición ocurre \"debajo\" de ti"
        ],
        "tone": "green"
      },
      "note": "Validar más barato puede traer más validadores, y con eso, más descentralización."
    },
    "¿Qué Es la Diversidad de Clientes?": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Server",
          "title": "Agave (antes Solana Labs)",
          "text": "El cliente original en Rust, hoy mantenido por Anza. Probado, pero su bug era el bug de toda la red."
        },
        {
          "icon": "Cpu",
          "title": "Firedancer (Jump Crypto)",
          "text": "Reescritura completa en C. No comparte ni una línea con Agave: diversidad real."
        },
        {
          "icon": "Shield",
          "title": "La Lección de Ethereum",
          "text": "Geth, Nethermind, Besu, Erigon, Reth. Cuando Nethermind falló en enero de 2024, la red siguió funcionando."
        },
        {
          "icon": "RefreshCw",
          "title": "Frankendancer: el puente",
          "text": "Híbrido: networking de Firedancer con ejecución de Agave. Probó por partes en mainnet; ya se retiró."
        }
      ],
      "intro": "Múltiples implementaciones del mismo protocolo: si una falla, las otras mantienen la red.",
      "columns": 2
    }
  },
  34: {
    "Arquitectura de Wallets: El Modelo de 3 Niveles": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Lock",
          "title": "Nivel 1: Cold Storage (La Bóveda)",
          "text": "Hardware wallet (Ledger, Trezor) con la mayor parte de tus criptos (ej. 80-90%). Nunca se conecta a dApps ni firma smart contracts."
        },
        {
          "icon": "Wallet",
          "title": "Nivel 2: Hot Wallet Operativa",
          "text": "Phantom o Solflare con una parte pequeña (ej. 5-15%). Para swaps, staking y compras rutinarias. Solo lo que puedas perder."
        },
        {
          "icon": "Flame",
          "title": "Nivel 3: Burner (Desechables)",
          "text": "Wallets temporales con lo mínimo para mints, airdrops y dApps no verificadas. Si caen, pierdes centavos."
        }
      ],
      "intro": "Los profesionales no usan una sola wallet. Cada nivel tiene un propósito y un riesgo distinto, como las murallas concéntricas de una fortaleza.",
      "columns": 3
    },
    "Phishing vs Ataque Legítimo: Cómo Distinguirlos": {
      "kind": "comparison",
      "left": {
        "title": "Señales de Phishing/Scam",
        "points": [
          "URLs con errores sutiles: \"phantorn.com\" en vez de \"phantom.com\"",
          "DMs ofreciendo \"airdrops exclusivos\" o \"soporte técnico\"",
          "Pop-ups urgentes: \"Verifica en 24h o pierdes tus fondos\"",
          "Piden tu seed phrase bajo cualquier pretexto",
          "Aprobar un contrato desconocido en una URL sospechosa",
          "Retorno garantizado: \"Envía 1 SOL, recibe 2 de vuelta\""
        ],
        "tone": "red"
      },
      "right": {
        "title": "Interacciones Legítimas",
        "points": [
          "URLs que escribes tú o guardas en bookmarks",
          "Solo canales oficiales y verificados del proyecto",
          "Sin urgencia artificial: nadie serio te presiona",
          "Nunca piden seed phrase, solo firmas en tu wallet",
          "Puedes verificar el contrato en un explorador",
          "Código open source, auditorías públicas, equipo conocido"
        ],
        "tone": "green"
      },
      "note": "Regla absoluta: ningún servicio legítimo te pedirá jamás tu seed phrase."
    },
    "Checklist de Seguridad Diaria": {
      "kind": "checklist",
      "good": {
        "title": "Hábitos que te protegen",
        "items": [
          "Dispositivo o perfil de navegador dedicado solo a cripto",
          "VPN confiable siempre en redes públicas (cafés, aeropuertos)",
          "Verifica la URL a mano antes de cada transacción",
          "Lee la simulación de la wallet antes de firmar",
          "Confirma la dirección destino carácter por carácter",
          "Auditoría mensual: permisos, firmware y backups de seed"
        ]
      },
      "bad": {
        "title": "Lo que nunca debes hacer",
        "items": [
          "Operar en WiFi público sin VPN",
          "Hacer clic en links en vez de escribir la URL",
          "Firmar transacciones que no entiendes del todo",
          "Enviar montos grandes sin una transacción de prueba",
          "Dejar permisos viejos de dApps sin revisar"
        ]
      }
    },
    "Gestión de Permisos y Aprobaciones": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "AlertTriangle",
          "title": "Aprobaciones Infinitas",
          "text": "En Solana: lee la simulación (una firma puede vaciarte ya). En EVM: el unlimited approval deja gastar todos tus tokens después."
        },
        {
          "icon": "Eye",
          "title": "Lee la Simulación",
          "text": "Tu wallet muestra qué hará la transacción. Si dice \"Transfer all SOL a dirección desconocida\", no firmes. Blowfish detecta ataques."
        },
        {
          "icon": "RefreshCw",
          "title": "Revoca Permisos",
          "text": "En Ethereum usa revoke.cash. En Solana las aprobaciones delegadas son menos comunes, pero audita igual qué apps tienen acceso."
        },
        {
          "icon": "Search",
          "title": "Verifica el Contrato",
          "text": "¿Auditado por Certik/Ottersec? ¿Open source? ¿Cuánto TVL y tiempo en producción? $50M con auditoría no es lo mismo que algo de hace 2 horas."
        }
      ],
      "intro": "Cada aprobación le da permisos a un smart contract. Algunos son inofensivos; otros pueden drenar tu wallet completa.",
      "columns": 2
    }
  },
  35: {
    "El Error que Destruye Fondos: Red Incorrecta": {
      "kind": "comparison",
      "left": {
        "title": "Red correcta",
        "points": [
          "Solana (SOL) o \"Solana Network\"",
          "Dirección Solana (base58): verifica la red y 6-8 caracteres al inicio y al final",
          "Confirma y espera de 1 a 10 minutos",
          "Tus SOL llegan a tu Phantom"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Redes incorrectas",
        "points": [
          "ERC20 (Ethereum)",
          "BEP20 (BNB Chain)",
          "TRC20 (Tron)",
          "Llegan como otro token o a una dirección que no controlas"
        ],
        "tone": "red"
      },
      "note": "En blockchain no hay reversiones. Treinta segundos de verificación evitan el problema."
    },
    "El Proceso Paso a Paso": {
      "kind": "steps",
      "steps": [
        {
          "title": "Crear cuenta y KYC",
          "detail": "Registro con email y verificación de identidad (documento y selfie). Tarda de 10 minutos a 24 horas."
        },
        {
          "title": "Depositar pesos",
          "detail": "Transferencia o PSE (lo más barato), tarjeta (instantánea, 2-4% de comisión) o P2P."
        },
        {
          "title": "Comprar SOL",
          "detail": "Busca el par SOL/COP o SOL/USDT. Usa una orden de mercado (precio actual) o límite (precio que defines)."
        },
        {
          "title": "Retirar a Phantom",
          "detail": "Pega tu dirección de Phantom y selecciona la red SOLANA. Confirma y espera de 1 a 10 minutos.",
          "warning": true
        },
        {
          "title": "Guardar el registro",
          "detail": "Fecha, pesos, SOL, precio y comisión. Lo necesitarás para tu declaración (Lección 20)."
        }
      ],
      "intro": "El flujo es muy parecido en todos los exchanges."
    },
    "Eligiendo tu Exchange: Opciones para Latinoamérica": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Building2",
          "title": "Bitso, Buda y Wenia",
          "text": "Exchanges locales con pesos. Permiten retirar SOL y USDC por la red Solana."
        },
        {
          "icon": "Landmark",
          "title": "Binance",
          "text": "El más grande del mundo. En Colombia, depósitos en COP por PSE y Bre-B, más P2P."
        },
        {
          "icon": "Zap",
          "title": "Backpack",
          "text": "Especializado en Solana. No acepta pesos: úsalo para operar, no para entrar (enlace de referido)."
        },
        {
          "icon": "Shield",
          "title": "Coinbase y Kraken",
          "text": "Historial sólido de seguridad. Revisa qué métodos de pago ofrecen en tu país."
        }
      ],
      "intro": "Ninguna está supervisada por la Superintendencia Financiera: elige con criterio y no dejes fondos en ninguna (noviembre de 2026).",
      "columns": 2
    },
    "Fees: Lo Que Realmente Pagas": {
      "kind": "statCards",
      "cards": [
        {
          "value": "Gratis",
          "label": "Depósito por transferencia o PSE (normalmente)",
          "sublabel": "Tarjeta: 2-4% (evítalo si puedes)",
          "tone": "green"
        },
        {
          "value": "0.1-0.5%",
          "label": "Fee de trading",
          "sublabel": "En $100, pagas $0.10-$0.50",
          "tone": "neutral"
        },
        {
          "value": "0.001-0.01 SOL",
          "label": "Retiro (fee del exchange)",
          "sublabel": "Binance suele cobrar ~0.001-0.01 SOL (~$0.15-$1.50). Revisa su página de fees antes de retirar",
          "tone": "amber"
        },
        {
          "value": "~$0.001",
          "label": "Fee real de la red Solana",
          "sublabel": "~0.000005 SOL por transacción, una fracción de centavo",
          "tone": "green"
        }
      ],
      "intro": "Los fees del proceso, para no llevarte sorpresas. El de retiro es del exchange, no de Solana.",
      "columns": 4
    }
  },
  36: {
    "Paso a Paso: Enviar SOL desde Phantom": {
      "kind": "steps",
      "steps": [
        {
          "title": "Abre Phantom",
          "detail": "Verás tu balance de SOL. Haz clic en el token SOL."
        },
        {
          "title": "Haz clic en \"Send\"",
          "detail": "Aparece un campo para la dirección destino y el monto."
        },
        {
          "title": "Pega la dirección destino",
          "detail": "Pega la dirección (ej. \"7xK9p...\") y VERIFICA de 6 a 8 caracteres al inicio Y al final.",
          "warning": true
        },
        {
          "title": "Ingresa el monto",
          "detail": "Para la prueba, envía poco (al menos ~0.001 SOL si la dirección es nueva). Deja ~0.01 SOL para fees futuros."
        },
        {
          "title": "Confirma y observa",
          "detail": "Revisa el resumen y confirma. En 1-2 segundos verás \"Confirmed\"."
        }
      ],
      "intro": "Sigue estos pasos exactamente para enviar tu primer SOL."
    },
    "El Protocolo de Seguridad: Nunca Saltártelo": {
      "kind": "checklist",
      "good": {
        "title": "Haz siempre esto",
        "items": [
          "Compara de 6 a 8 caracteres al inicio Y al final; nunca copies direcciones de tu historial de transacciones (address poisoning).",
          "Si envías un monto importante, manda primero una prueba pequeña y espera a que llegue.",
          "Tómate 2 minutos de verificación: las transacciones legítimas pueden esperar."
        ]
      },
      "bad": {
        "title": "Señales de peligro",
        "items": [
          "Pegar la dirección sin revisarla: los clipboard hijackers la cambian.",
          "Una sola letra distinta puede significar perder tus fondos para siempre.",
          "Alguien que \"te urge\" a enviar rápido: presión artificial de estafadores."
        ]
      }
    },
    "El Momento Mágico": {
      "kind": "comparison",
      "left": {
        "title": "Banco tradicional",
        "points": [
          "Transferencia internacional",
          "Tarda de 1 a 5 días",
          "Cuesta $20-50, más el tipo de cambio",
          "Pide permiso a intermediarios"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Solana",
        "points": [
          "Misma función",
          "Tarda menos de 1 segundo",
          "La red cobra menos de $0.001",
          "Sin pedir permiso a nadie"
        ],
        "tone": "green"
      },
      "note": "La red cuesta una fracción de centavo. Comprar cripto y convertirla a pesos tiene costos aparte (alrededor de 1-3% en total)."
    }
  },
  37: {
    "Caso Práctico: Verificar una Transacción": {
      "kind": "steps",
      "steps": [
        {
          "title": "Obtén el TX Signature",
          "detail": "En Phantom, abre la transacción y copia su Signature (TX ID)."
        },
        {
          "title": "Abre Solscan",
          "detail": "Ve a solscan.io, verifica la URL, pega el Signature y presiona Enter."
        },
        {
          "title": "Lee el resultado",
          "detail": "Success: confirmada. Fail: falló y los fondos no se movieron (solo se cobra la comisión)."
        },
        {
          "title": "Verifica el destino",
          "detail": "Haz clic en la dirección de destino y revisa su balance actual."
        }
      ],
      "intro": "Enviaste SOL y quieres confirmar que llegó. El proceso exacto en Solscan."
    },
    "Verificar Tokens: Evita Estafas": {
      "kind": "comparison",
      "left": {
        "title": "Token real",
        "points": [
          "Nombre USDC, símbolo USDC",
          "CA: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          "CA coincide con CoinGecko o el sitio oficial",
          "El CA es el DNI del token"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Token falso",
        "points": [
          "Mismo nombre USDC, mismo símbolo",
          "Pero con un CA distinto: es una copia",
          "Suele llegarte por Discord o Telegram",
          "No coincide con la fuente oficial"
        ],
        "tone": "red"
      },
      "note": "Dos tokens pueden compartir nombre, NUNCA el mismo CA. Verifícalo en Solscan."
    },
    "Caso Práctico: Investigar una Wallet": {
      "kind": "checklist",
      "good": {
        "title": "Lo que puedes comprobar",
        "items": [
          "Balance de SOL y de cada token",
          "Ventas grandes o movimientos sospechosos en el historial",
          "Qué porcentaje del token controla cada wallet"
        ]
      },
      "bad": {
        "title": "Lo que Solscan no te dice",
        "items": [
          "Quién está realmente detrás de una wallet",
          "Si alguien cumplirá lo que promete",
          "Si un token es una buena inversión"
        ]
      }
    },
    "¿Qué Puedes Verificar en Solscan?": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Activity",
          "title": "Transacciones",
          "text": "Estado Success/Fail, monto, direcciones, fee, timestamp y bloque."
        },
        {
          "icon": "Wallet",
          "title": "Wallets/Cuentas",
          "text": "Balance de SOL y tokens, historial completo, NFTs y tokens SPL."
        },
        {
          "icon": "Coins",
          "title": "Tokens",
          "text": "Supply total, holders, distribución y contract address oficial."
        },
        {
          "icon": "Cpu",
          "title": "Contratos/Programas",
          "text": "Código verificado, historial de uso y estadísticas."
        }
      ],
      "intro": "El Google de Solana: todo lo público de la blockchain en un solo lugar.",
      "columns": 2
    }
  },
  38: {
    "Señales de Alerta vs Señales de Legitimidad": {
      "kind": "comparison",
      "left": {
        "title": "Red flags (probablemente estafa)",
        "points": [
          "Te contactan primero por DM",
          "Urgencia artificial: \"solo hoy\", \"actúa rápido\"",
          "Piden tu seed phrase bajo cualquier pretexto",
          "Prometen retornos garantizados o multiplicar dinero",
          "URLs con errores sutiles: phantomm, jupiter-swap",
          "Anuncios de Google para sitios cripto",
          "NFTs o tokens misteriosos en tu wallet"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Green flags (probablemente legítimo)",
        "points": [
          "TÚ inicias el contacto con soporte oficial",
          "URLs oficiales verificadas: phantom.com, jup.ag",
          "NUNCA te piden tu seed phrase",
          "No prometen retornos garantizados",
          "Tienen historial público y verificable",
          "Código abierto y auditorías (ayudan, no garantizan)",
          "La simulación coincide con lo que esperabas"
        ],
        "tone": "green"
      },
      "note": "La gran mayoría de las estafas siguen estos patrones. Conocerlos las vuelve mucho más fáciles de detectar."
    },
    "Las 10 Reglas de Oro Anti-Estafas": {
      "kind": "checklist",
      "good": {
        "title": "SIEMPRE haz esto",
        "items": [
          "Escribe las URLs manualmente, nunca desde anuncios de Google",
          "Verifica el Contract Address de cualquier token",
          "Lee las transacciones antes de firmar; Phantom las simula",
          "Usa wallets burner para probar dApps nuevas",
          "Ante cualquier duda, no firmes: investiga primero"
        ]
      },
      "bad": {
        "title": "NUNCA hagas esto",
        "items": [
          "Compartir tu seed phrase; nadie legítimo la necesita",
          "Confiar en quien te contacta primero ofreciendo ayuda o dinero",
          "Creer ofertas demasiado buenas; nadie regala dinero",
          "Interactuar con NFTs o tokens que no solicitaste",
          "Dejar abiertos los DMs de desconocidos en Discord o Telegram"
        ]
      }
    },
    "Estafa #6: Drainers en dApps": {
      "kind": "steps",
      "steps": [
        {
          "title": "Conectas tu wallet",
          "detail": "El sitio parece legítimo y te pide firmar una transacción."
        },
        {
          "title": "En Solana, una sola firma puede vaciarte",
          "detail": "No hace falta \"approve unlimited\": un contrato malicioso puede transferir SOL, tokens y NFTs en el mismo instante. En Ethereum/EVM el equivalente clásico es el allowance ilimitado.",
          "warning": true
        },
        {
          "title": "Lee la simulación de Phantom",
          "detail": "Si muestra salidas de tokens/NFTs/SOL que no esperabas, RECHAZA. Si no entiendes la simulación, no firmes."
        },
        {
          "title": "Usa una burner wallet",
          "detail": "Prueba dApps nuevas con fondos mínimos. Tu wallet principal queda intacta."
        }
      ],
      "intro": "Contratos maliciosos que vacían tu wallet cuando firmas. En Solana el momento crítico es la firma; lee siempre la simulación."
    },
    "Tu Privacidad en la Blockchain": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Eye",
          "title": "Todo es público",
          "text": "Con tu dirección, cualquiera ve en Solscan tu saldo, tu historial y con quién interactúas."
        },
        {
          "icon": "Users",
          "title": "El KYC te identifica",
          "text": "Las wallets que reciben desde tu exchange quedan vinculadas a tu nombre. Una wallet intermedia no rompe ese vínculo."
        },
        {
          "icon": "Layers",
          "title": "Separa por propósito",
          "text": "Una wallet de ahorro, una operativa y una burner. Así, quien conoce una dirección no ve todo lo demás."
        },
        {
          "icon": "EyeOff",
          "title": "No publiques tu dirección",
          "text": "Ni capturas de tu saldo, ni dominios SNS o ENS con tu nombre real en wallets con fondos importantes."
        },
        {
          "icon": "Lock",
          "title": "Discreción física",
          "text": "No cuentes cuánto tienes. Privacidad no es esconderte de la DIAN: es protegerte de los delincuentes."
        }
      ],
      "intro": "La blockchain es transparente por diseño. La privacidad es tu responsabilidad.",
      "columns": 2
    }
  },
  39: {
    "El Proceso: De tu Wallet a Gastos Reales": {
      "kind": "steps",
      "steps": [
        {
          "title": "Tienes USDC en Phantom",
          "detail": "Comprado directo o vendiendo SOL por USDC en Jupiter. Listo para gastar."
        },
        {
          "title": "Carga tu tarjeta cripto",
          "detail": "Envías USDC desde Phantom a la dirección de depósito de tu tarjeta, por la red correcta. Aparece en minutos."
        },
        {
          "title": "Usa tu tarjeta",
          "detail": "Pagas en comercios que aceptan Visa o Mastercard. La conversión a moneda local es automática."
        },
        {
          "title": "Verifica tu balance",
          "detail": "Ves historial de gastos y saldo restante en la app. Recargas cuando necesites más."
        }
      ],
      "intro": "De stablecoins en tu wallet a gastos reales, en cuatro pasos."
    },
    "¿Por Qué Gastar Stablecoins y NO Bitcoin/SOL?": {
      "kind": "comparison",
      "left": {
        "title": "LARGO PLAZO: BTC, SOL, ETH",
        "points": [
          "Activos volátiles: tu inversión de largo plazo.",
          "Si gastas 1 SOL ($150) en una cena...",
          "...y un mes después SOL vale $300...",
          "...pagaste $300 por una cena de $150.",
          "Es la 'pizza de 10.000 BTC' de Laszlo Hanyecz."
        ],
        "tone": "green"
      },
      "right": {
        "title": "GASTAR: USDC y stablecoins",
        "points": [
          "Diseñadas para valer ~$1.",
          "100 USDC hoy siguen siendo ~$100 mañana.",
          "Perfectos para gastos diarios.",
          "Conviertes a stablecoin solo lo que vas a gastar.",
          "Así nunca 'gastas' tu inversión."
        ],
        "tone": "amber"
      },
      "note": "Regla de oro: BTC y SOL son para el largo plazo, las stablecoins para gastar. No los mezcles."
    },
    "Opciones de Tarjetas para Latinoamérica": {
      "kind": "statCards",
      "cards": [
        {
          "value": "KAST",
          "label": "Custodial, virtual y física",
          "sublabel": "Plan Standard $0 al año, 0% al recargar con stablecoins, 0.5-1.75% en otras monedas. Acepta pesos desde abril de 2026.",
          "tone": "green"
        },
        {
          "value": "Avici",
          "label": "Smart wallet autocustodial",
          "sublabel": "Visa de crédito asegurada con USDC. Virtual desde $15 (pago único), 0% de recargo de Avici. Colombia es elegible.",
          "tone": "neutral"
        }
      ],
      "intro": "Dos opciones que operan en Colombia, con modelos de custodia distintos (noviembre de 2026). Ambas son enlaces de referido.",
      "columns": 2
    },
    "El Sueño: Vivir en Cripto": {
      "kind": "steps",
      "steps": [
        {
          "title": "Fiat",
          "detail": "Tu dinero de siempre, el punto de partida."
        },
        {
          "title": "Exchange",
          "detail": "Compras cripto con tu fiat."
        },
        {
          "title": "Cripto",
          "detail": "Tus activos digitales: BTC, SOL, USDC."
        },
        {
          "title": "Tu wallet",
          "detail": "Custodia propia, como Phantom."
        },
        {
          "title": "Tarjeta cripto",
          "detail": "Cargas stablecoins. El emisor de la tarjeta reemplaza a tu banco."
        },
        {
          "title": "Gastos reales",
          "detail": "Amazon, Netflix, gasolina, supermercado. Con KYC y tus impuestos al día."
        }
      ],
      "intro": "El ciclo completo: de fiat a gastos reales."
    }
  },
  40: {
    "Staking Nativo vs Liquid Staking": {
      "kind": "comparison",
      "left": {
        "title": "Staking Nativo (Phantom/Solflare)",
        "points": [
          "Delegas directo a un validador que tú eliges",
          "SOL bloqueado: no usable en DeFi mientras stakea",
          "Retiro al final del epoch (hoy ~1 día)",
          "Sin intermediarios ni riesgo de smart contract",
          "Solo pagas la comisión del validador",
          "Ideal para holders a largo plazo"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Liquid Staking (Marinade · Jito · BlazeStake)",
        "points": [
          "Recibes un token (mSOL, jitoSOL, bSOL)",
          "Úsalo en DeFi: colateral, préstamos, liquidez",
          "Liquidez instantánea vía swap en Jupiter",
          "Riesgo extra: dependes del smart contract",
          "Comisión del protocolo (0-10%) + la del validador",
          "Ideal para usuarios activos de DeFi"
        ],
        "tone": "amber"
      },
      "note": "El gran diferenciador es la liquidez: nativo bloquea tu SOL, liquid lo libera como token usable."
    },
    "Tutorial: Hacer Staking Paso a Paso": {
      "kind": "steps",
      "steps": [
        {
          "title": "Abre Phantom",
          "detail": "Toca tu saldo de SOL y luego 'Start Earning SOL'."
        },
        {
          "title": "Explora validadores",
          "detail": "Revisa comisión y uptime de cada uno."
        },
        {
          "title": "Elige bien",
          "detail": "Fuera del superminority, <5% comisión, >98% uptime."
        },
        {
          "title": "Define la cantidad",
          "detail": "Mínimo 1 SOL. Deja ~0.02-0.05 SOL libres para fees.",
          "warning": true
        },
        {
          "title": "Confirma",
          "detail": "Fee mínimo más un depósito de rent que recuperas al cerrar la cuenta."
        },
        {
          "title": "Listo",
          "detail": "Las recompensas se acumulan cada epoch automáticamente."
        }
      ],
      "intro": "Staking nativo en Phantom, paso a paso. Tus recompensas empiezan el siguiente epoch."
    },
    "Liquid Staking en Detalle: mSOL, jitoSOL y bSOL": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Shield",
          "title": "Marinade (mSOL)",
          "text": "El más antiguo y probado. Reparte tu stake entre cientos de validadores. Aceptado como colateral en DeFi."
        },
        {
          "icon": "Zap",
          "title": "Jito (jitoSOL)",
          "text": "Muy líquido y aceptado en casi todo DeFi. Hoy ya no rinde más que el staking nativo."
        },
        {
          "icon": "Network",
          "title": "BlazeStake (bSOL)",
          "text": "Enfocado en validadores pequeños. Incentivos extra con su token BLZE."
        },
        {
          "icon": "AlertTriangle",
          "title": "Riesgos apilados",
          "text": "Riesgo de staking + protocolo liquid + protocolo DeFi. El token puede perder su peg en estrés extremo."
        }
      ],
      "intro": "Cada protocolo de liquid staking tiene su propio súper poder.",
      "columns": 3
    },
    "Cómo Elegir un Buen Validador": {
      "kind": "checklist",
      "good": {
        "title": "Busca esto",
        "items": [
          "Uptime >98% y sin turnos de bloque perdidos",
          "Fuera del superminority (top ~20 = 33% del stake)",
          "Comisión <7% (pero 0% puede ser insostenible)",
          "Historial estable de al menos 6 meses",
          "Ejemplo: 2% comisión + 99.8% uptime gana MÁS"
        ]
      },
      "bad": {
        "title": "Evita esto",
        "items": [
          "Uptime bajo: 95% rinde mucho menos que 99.5%",
          "Dentro del superminority (concentra poder)",
          "Comisiones altas o un 0% sin sostenibilidad",
          "Validador nuevo, sin historial comprobado",
          "Ejemplo: 0% comisión + 96% uptime gana MENOS"
        ]
      }
    }
  },
  41: {
    "¿Cómo Funcionan? Los 3 Tipos de Stablecoins": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Banknote",
          "title": "Respaldadas por reservas (USDC, USDT)",
          "text": "$1 real en reserva por cada token. Circle quema el token y te da el dólar. El modelo más simple y usado."
        },
        {
          "icon": "Lock",
          "title": "Sobrecolateralizadas (DAI)",
          "text": "Depositas $150 en ETH para generar $100 en DAI. Si tu garantía cae, se liquida sola. Más descentralizada, más compleja."
        },
        {
          "icon": "TrendingDown",
          "title": "Algorítmicas (UST/Luna, colapsó)",
          "text": "Sin respaldo real, solo código. En mayo de 2022 perdió la paridad y cayó a centavos: unos $40 mil millones se evaporaron."
        }
      ],
      "intro": "De más segura a más peligrosa: el mecanismo que mantiene el precio define el riesgo.",
      "columns": 3
    },
    "USDC vs USDT: ¿Cuál Usar?": {
      "kind": "comparison",
      "left": {
        "title": "USDC (Circle)",
        "points": [
          "Atestaciones mensuales verificadas por Deloitte",
          "Reservas: bonos del Tesoro + efectivo",
          "Empresa regulada en USA",
          "Puede congelar direcciones por orden legal",
          "Más transparente: suele preferirse para ahorrar",
          "Algo menos de liquidez que USDT"
        ],
        "tone": "green"
      },
      "right": {
        "title": "USDT (Tether)",
        "points": [
          "Atestaciones trimestrales (BDO); nunca una auditoría completa",
          "Reservas diversificadas: bonos, BTC, oro, préstamos",
          "Con sede en El Salvador desde 2025, antes en las Islas Vírgenes Británicas",
          "También puede congelar direcciones",
          "Mayor liquidez y adopción global",
          "Historial de opacidad en reservas"
        ],
        "tone": "amber"
      },
      "note": "Ambas dependen de una empresa centralizada y ambas pueden congelar tokens, incluso en tu propia wallet."
    },
    "La Catástrofe de UST/Luna: La Lección Más Cara de la Historia": {
      "kind": "steps",
      "steps": [
        {
          "title": "Venta masiva de UST",
          "detail": "Una venta enorme rompió el mecanismo de arbitraje que sostenía el precio."
        },
        {
          "title": "UST pierde la paridad",
          "detail": "Dejó de valer $1. El ancla al dólar se quebró.",
          "warning": true
        },
        {
          "title": "Se imprime más LUNA para salvarla",
          "detail": "El protocolo acuñó LUNA sin parar para intentar recuperar la paridad."
        },
        {
          "title": "El precio de LUNA se desploma",
          "detail": "Más oferta destruyó el valor de LUNA y disparó el pánico.",
          "warning": true
        },
        {
          "title": "Unos $40 mil millones evaporados en una semana",
          "detail": "Personas perdieron los ahorros de toda su vida. La lección: si parece muy bueno para ser verdad, lo es.",
          "warning": true
        }
      ],
      "intro": "La espiral de muerte: cada paso alimentaba al siguiente hasta el colapso total."
    },
    "Remesas con Stablecoins: Envía Dinero Sin Fronteras": {
      "kind": "statCards",
      "cards": [
        {
          "value": "~$28",
          "label": "Costo promedio por cada $500",
          "sublabel": "5.64% en Latinoamérica y el Caribe, entre comisión y tipo de cambio (Banco Mundial)",
          "tone": "red"
        },
        {
          "value": "$5-15",
          "label": "Ruta con USDC por Solana",
          "sublabel": "Red: menos de $0.01. El costo real: comprar USDC y convertir a pesos (1-3%)",
          "tone": "green"
        },
        {
          "value": "$150-280",
          "label": "Ahorro posible al año",
          "sublabel": "Si recibes $500 al mes. Frente a las apps de remesas más baratas, la diferencia es menor",
          "tone": "green"
        }
      ],
      "intro": "Enviar $500 de Estados Unidos a Latinoamérica: el costo promedio frente a stablecoins por Solana (noviembre de 2026).",
      "columns": 3
    }
  },
  42: {
    "DCA vs Timing: ¿Qué Dice la Historia?": {
      "kind": "statCards",
      "cards": [
        {
          "value": "48 / 48",
          "label": "Ana (DCA disciplinado)",
          "sublabel": "Compra $100 el día 1 de cada mes. La mayoría de ventanas de 4+ años terminaron en positivo; depende de las fechas. El pasado no garantiza el futuro.",
          "tone": "green"
        },
        {
          "value": "15 / 48",
          "label": "Carlos (intenta timing)",
          "sublabel": "Espera la caída perfecta. Invirtió menos y se perdió buenas oportunidades.",
          "tone": "amber"
        },
        {
          "value": "$4,800",
          "label": "María (todo de una vez)",
          "sublabel": "Si el mercado sube, suele terminar con más. Si compró en un pico: hasta -50% y años en pérdida.",
          "tone": "red"
        }
      ],
      "intro": "Tres personas destinan $4,800 a Bitcoin a lo largo de 4 años.",
      "columns": 3
    },
    "¿Por Qué Funciona? La Matemática del Promedio": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingDown",
          "title": "Cuando el precio baja",
          "text": "Tu monto fijo compra MÁS cripto: el mismo dinero rinde más."
        },
        {
          "icon": "TrendingUp",
          "title": "Cuando el precio sube",
          "text": "Tu monto fijo compra menos, pero lo que ya tienes vale más."
        },
        {
          "icon": "Scale",
          "title": "El promedio juega a tu favor",
          "text": "Tu costo promedio queda igual o por debajo del promedio de tus precios de compra. No garantiza ganancias."
        }
      ],
      "intro": "Compras la misma cantidad fija; tu precio promedio se suaviza solo.",
      "columns": 3
    },
    "Cómo Configurar tu DCA en la Práctica": {
      "kind": "steps",
      "steps": [
        {
          "title": "Define el monto seguro",
          "detail": "Primero paga tus deudas caras y arma un fondo de emergencia. Invierte solo lo que no necesitas en 2+ años.",
          "warning": true
        },
        {
          "title": "Elige tu frecuencia",
          "detail": "Una cantidad fija cada semana o cada mes. Ejemplo: 100,000-200,000 pesos al mes."
        },
        {
          "title": "Manual o automatizado",
          "detail": "Manual en un exchange con pesos (Bitso, Buda, Binance) o automático en Jupiter con USDC."
        }
      ],
      "intro": "Arrancar tu DCA es más fácil de lo que piensas."
    }
  },
  43: {
    "Cómo Construir tu Primer Portafolio": {
      "kind": "statCards",
      "cards": [
        {
          "value": "60-70%",
          "label": "Base para empezar",
          "sublabel": "BTC, más 20-30% entre ETH y SOL y 5-10% en stablecoins",
          "tone": "green"
        },
        {
          "value": "45-55%",
          "label": "Moderado",
          "sublabel": "BTC, más 30-40% entre ETH y SOL, 5-10% stablecoins y hasta 5% altcoins",
          "tone": "amber"
        },
        {
          "value": "30-40%",
          "label": "Agresivo",
          "sublabel": "BTC, más 40-50% entre ETH y SOL, 5-10% stablecoins y hasta 10% altcoins. No es para principiantes",
          "tone": "red"
        }
      ],
      "intro": "Porcentajes dentro de tu porción cripto (para principiantes, una guía común es no más del 5-10% de tus ahorros invertibles).",
      "columns": 3
    },
    "El Universo de las Altcoins: Categorías que Debes Conocer": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Banknote",
          "title": "Stablecoins (USDC, USDT)",
          "text": "Ancladas al dólar. No son inversión: son herramienta de ahorro y operación."
        },
        {
          "icon": "Coins",
          "title": "Tokens de protocolo (JUP, RAY, RENDER)",
          "text": "Utilidad real: gobernanza, fees, servicios. Alto riesgo, alto potencial."
        },
        {
          "icon": "Flame",
          "title": "Meme coins (DOGE, SHIB, BONK)",
          "text": "Sin utilidad, pura especulación. La mayoría va a cero. Son apuestas, no inversiones."
        },
        {
          "icon": "AlertTriangle",
          "title": "Tokens dudosos (la gran mayoría)",
          "text": "Sin equipo, sin producto, sin auditoría. Creados para extraer dinero de incautos."
        }
      ],
      "intro": "Las categorías principales, de la más útil y segura a la más riesgosa.",
      "columns": 2
    },
    "Ethereum y Solana: Las Plataformas de Utilidad": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum (ETH) · la más establecida",
        "points": [
          "Primera y mayor plataforma de contratos inteligentes",
          "DeFi, NFTs y stablecoins nacieron aquí",
          "Ecosistema más maduro, más desarrolladores",
          "L1 ~15 TPS; hoy fees de centavos o menos, que suben con la demanda",
          "Dominante y probada, pero fragmentada entre capas"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana (SOL) · alta velocidad",
        "points": [
          "Rápida (~1,750-2,300 TPS de usuarios)",
          "Fees de fracciones de centavo",
          "Ecosistema DeFi: Jupiter, Raydium, Marinade",
          "Ideal para experimentar: los errores cuestan centavos",
          "Más joven y con más riesgo"
        ],
        "tone": "amber"
      },
      "note": "La diferencia clave con Bitcoin: ETH y SOL emiten tokens nuevos (cerca de 0.8% y 3.6% al año) y no tienen el límite fijo de 21M. Son apuestas a tecnología, no a escasez pura."
    }
  },
  44: {
    "Paso 2: Arma tu Portafolio Base": {
      "kind": "statCards",
      "cards": [
        {
          "value": "50-70%",
          "label": "Bitcoin: la base",
          "sublabel": "Tu ancla. DCA y hardware wallet cuando el monto sea importante",
          "tone": "green"
        },
        {
          "value": "20-30%",
          "label": "Crecimiento: SOL + ETH",
          "sublabel": "Ecosistemas en desarrollo, también en DCA",
          "tone": "amber"
        },
        {
          "value": "5-10%",
          "label": "Operativo: Stablecoins",
          "sublabel": "Liquidez, tarjeta cripto, estabilidad",
          "tone": "neutral"
        },
        {
          "value": "0-5%",
          "label": "Opcional: Altcoins/Memes",
          "sublabel": "Solo dinero que puedes perder al 100%",
          "tone": "red"
        }
      ],
      "intro": "Cómo repartir tu porción cripto (si empiezas, no más del 5-10% de tus ahorros invertibles).",
      "columns": 4
    },
    "Tu Plan de Acción: Escríbelo HOY, Ejecuta ESTA SEMANA": {
      "kind": "steps",
      "steps": [
        {
          "title": "Deudas y fondo de emergencia",
          "detail": "Paga tus deudas caras y ten 3-6 meses de gastos ahorrados antes de invertir."
        },
        {
          "title": "Define tu portafolio base",
          "detail": "Tu porción cripto y su reparto: % BTC, % SOL, % ETH, % stablecoins. Escríbelo en papel."
        },
        {
          "title": "Configura tu DCA",
          "detail": "Monto fijo, frecuencia y método. Empieza esta semana."
        },
        {
          "title": "Completa el checklist de seguridad",
          "detail": "Frase semilla segura, 2FA activo, custodia organizada."
        },
        {
          "title": "Escribe tus reglas y metas",
          "detail": "Reglas de compra, reglas de NO hacer, meta a 1 año, revisión trimestral."
        },
        {
          "title": "Tu primera acción AHORA",
          "detail": "Escribe los cuatro números, pon la alarma del lunes y da tu primer paso."
        }
      ],
      "intro": "Tu plan completo en 6 pasos. Escríbelo hoy, ejecuta esta semana."
    },
    "Paso 4: Checklist de Seguridad": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Key",
          "title": "Frase Semilla",
          "text": "Escrita en papel o metal, guardada fuera de casa, nunca digitada ni fotografiada."
        },
        {
          "icon": "Lock",
          "title": "Autenticación",
          "text": "2FA con Google Authenticator (no SMS) en exchange y email. Wallet con contraseña o biometría."
        },
        {
          "icon": "Shield",
          "title": "Distribución de Custodia",
          "text": "Claro qué va en exchange (temporal), hot wallet (operativo) y cold wallet (ahorros)."
        },
        {
          "icon": "Eye",
          "title": "Conocimiento Anti-Estafa",
          "text": "Identificas phishing y sabes que nadie pide tu frase semilla ni te escribe por DM."
        }
      ],
      "intro": "Antes de ejecutar tu plan, verifica que tu seguridad esté en orden.",
      "columns": 2
    },
    "Impuestos Cripto en LATAM": {
      "kind": "statCards",
      "cards": [
        {
          "value": "Hasta 39%",
          "label": "Colombia",
          "sublabel": "DIAN. 15% si las tuviste 2+ años; hasta 39% si menos. Los swaps cuentan. Exchanges reportan desde 2026",
          "tone": "amber",
          "flag": "🇨🇴"
        },
        {
          "value": "Hasta 35%",
          "label": "México",
          "sublabel": "SAT. ISR sobre enajenación (venta o intercambio)",
          "tone": "amber",
          "flag": "🇲🇽"
        },
        {
          "value": "Ganancias",
          "label": "Argentina",
          "sublabel": "ARCA (ex AFIP). Renta financiera y Bienes Personales sobre tenencias",
          "tone": "amber",
          "flag": "🇦🇷"
        }
      ],
      "intro": "Las cripto no son invisibles para el fisco. Panorama general por país (noviembre de 2026). Consulta a un contador.",
      "columns": 3
    }
  },
  47: {
    "Tu Primera Hardware Wallet: Configuración Segura": {
      "kind": "steps",
      "steps": [
        { "title": "Revisa la caja", "detail": "Sellada y sin señales de apertura. Si trae palabras ya escritas, no la uses." },
        { "title": "Instala la app oficial", "detail": "Escribe tú mismo la web del fabricante y actualiza el firmware antes de crear tu frase." },
        { "title": "Genera la frase en el dispositivo", "detail": "Anota las 12 o 24 palabras en papel o metal. Nunca en el computador ni en el celular." },
        { "title": "No importes tu frase de Phantom", "detail": "Una frase que ya estuvo en un celular trae todos sus riesgos. Usa siempre una nueva.", "warning": true },
        { "title": "Verifica la dirección en el dispositivo", "detail": "Compara inicio, medio y final con la de la app. Si no coinciden, no la uses." },
        { "title": "Prueba antes de llenarla", "detail": "Envía un monto pequeño, confirma que llegó y solo entonces mueve el resto." }
      ]
    },
    "Checklist Antes de Mover tu Bitcoin": {
      "kind": "checklist",
      "good": {
        "title": "Antes de enviar, confirma",
        "items": [
          "La dirección empieza por bc1 (o 1 o 3) y la comparé con el original.",
          "Elegí la red Bitcoin, no BEP20 ni otra red.",
          "Hice primero un envío pequeño y lo vi confirmado.",
          "Revisé la comisión de la red y la del exchange.",
          "Sé si tengo BTC nativo o un token envuelto en Solana.",
          "Mi frase está en papel o metal, fuera de internet."
        ]
      },
      "bad": {
        "title": "Detente si",
        "items": [
          "El exchange solo ofrece BEP20 u otra red para tu dirección bc1.",
          "La dirección del dispositivo no coincide con la de la app.",
          "Alguien te pide la frase para \"verificar\" o \"sincronizar\".",
          "Te apuran con una oferta que vence en minutos."
        ]
      }
    }
  },
  45: {
    "Ataques Sandwich: El Robo que No Ves": {
      "kind": "steps",
      "steps": [
        {
          "title": "PAN: el bot compra ANTES (front-run)",
          "detail": "Un validador o RPC con cliente modificado ve tu swap antes de ejecutarse y compra SOL primero, subiendo el precio.",
          "warning": true
        },
        {
          "title": "RELLENO: tu swap se ejecuta",
          "detail": "Con 3% de slippage, tus 100 USDC compran SOL al precio ya inflado: esperabas 0.67 SOL, recibes 0.65.",
          "warning": true
        },
        {
          "title": "PAN: el bot vende DESPUÉS (back-run)",
          "detail": "Captura la diferencia: ≈0.02 SOL (~$3) por operación, miles de veces por hora.",
          "warning": true
        }
      ],
      "intro": "El sándwich envuelve tu swap entre dos transacciones del bot, todo en el mismo bloque y en milisegundos."
    },
    "Front-Running y Back-Running": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingUp",
          "title": "Front-Running",
          "text": "Detecta una orden grande de $50,000 en camino (vía un RPC o validador con cliente modificado), compra antes y vende más caro. Te perjudica."
        },
        {
          "icon": "RefreshCw",
          "title": "Back-Running",
          "text": "Arbitra después: compra barato en un pool de Raydium, vende caro en Orca. Menos dañino, equilibra precios."
        },
        {
          "icon": "Scissors",
          "title": "Liquidation MEV",
          "text": "Bots compiten por liquidar posiciones en Kamino o Jupiter Lend para cobrar el bonus de liquidación."
        }
      ],
      "intro": "Tres formas de MEV según dónde actúa el bot respecto a la transacción objetivo.",
      "columns": 3
    },
    "Jito y la Solución de Solana": {
      "kind": "comparison",
      "left": {
        "title": "Sin protección MEV",
        "points": [
          "Validadores y RPCs con clientes modificados pueden ver tu swap antes de ejecutarlo",
          "Bots sandwich detectan y atacan tu orden",
          "Carrera ciega de fees por inclusión",
          "Las ganancias de MEV van a bots anónimos"
        ],
        "tone": "red"
      },
      "right": {
        "title": "CON Jito Bundle",
        "points": [
          "No se publica: solo lo ven el block engine de Jito y el líder",
          "Los bots públicos no lo ven antes de ejecutarse",
          "Orden de ejecución garantizado",
          "Parte del MEV vuelve a validadores y stakers"
        ],
        "tone": "green"
      },
      "note": "Solana no tiene mempool público: los sandwiches ocurren vía validadores y RPCs que filtran transacciones (Jito cerró su mempool público en marzo de 2024). Privado no es invisible: confías en el block engine y el líder."
    },
    "Cómo Protegerte: Guía Práctica": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Shield",
          "title": "Usa el modo Ultra de Jupiter",
          "text": "Envía tus swaps de forma privada por defecto. El modo Manual no trae protección MEV."
        },
        {
          "icon": "Percent",
          "title": "Configura bien el slippage",
          "text": "Verde 0.5-1% en SOL/USDC. Amarillo 2-3% en baja liquidez. Rojo: nunca más de 5%."
        },
        {
          "icon": "Lock",
          "title": "Transacciones protegidas",
          "text": "Usa wallets o DEXs con envío privado vía bundles de Jito, sin exponer tu orden."
        },
        {
          "icon": "Scissors",
          "title": "Divide en el tiempo",
          "text": "Si el price impact supera ~1%, compra por partes en días distintos (por ejemplo con DCA)."
        },
        {
          "icon": "Target",
          "title": "Usa limit orders",
          "text": "Precio fijo en Jupiter. Tu orden no viaja como swap inmediato visible, mucho más difícil de sandwichear."
        }
      ],
      "intro": "No puedes eliminar el MEV, pero estos 5 escudos reducen drásticamente cuánto te extraen.",
      "columns": 2
    }
  },
  46: {
    "Mecanismos de Votación": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Coins",
          "title": "Token-Weighted (1 token = 1 voto)",
          "text": "Simple y transparente, pero dominan las ballenas. Lo usan Jupiter y la mayoría de DAOs de Solana."
        },
        {
          "icon": "Scale",
          "title": "Votación Cuadrática (costo al cuadrado)",
          "text": "1 voto = 1 token, 2 votos = 4, 3 votos = 9. Frena a las ballenas, pero es vulnerable a ataques Sybil."
        },
        {
          "icon": "Clock",
          "title": "Conviction Voting (tiempo = poder)",
          "text": "Cuanto más tiempo mantienes tu voto, más peso acumula. Premia el compromiso real sobre la ganancia rápida."
        },
        {
          "icon": "Lock",
          "title": "Vote Escrow (veTokens)",
          "text": "Bloqueas tus tokens y a mayor plazo, más poder. Alinea incentivos. Popularizado por Curve (veCRV)."
        }
      ],
      "intro": "Cuatro formas de votar en una DAO, cada una con su propio equilibrio entre eficiencia, equidad y resistencia a manipulación.",
      "columns": 2
    },
    "Ataques de Gobernanza: El Lado Oscuro": {
      "kind": "checklist",
      "good": {
        "title": "Tu defensa como voter",
        "items": [
          "Lee CADA propuesta completa antes de votar",
          "Revisa quién la propone y su historial",
          "Analiza el impacto financiero real y a dónde van los fondos",
          "Exige time-lock: tokens bloqueados antes de poder votar",
          "Si algo no cuadra, vota en contra y alerta a la comunidad"
        ]
      },
      "bad": {
        "title": "Banderas rojas de una propuesta",
        "items": [
          "Flash loan: pedir millones, votar y devolver en 1 transacción",
          "Drenaje de tesorería disfrazado de 'fondo comunitario'",
          "Ataque Sybil: dividir tokens entre 100 wallets",
          "Votación acelerada con poca discusión",
          "Wallets desconocidas acumulando tokens justo antes",
          "Lenguaje vago que oculta transferencias o cambia oracles"
        ]
      }
    },
    "Gobernanza Centralizada vs Descentralizada": {
      "kind": "comparison",
      "left": {
        "title": "Centralizada (Empresas Tradicionales)",
        "points": [
          "El CEO y la junta directiva deciden todo",
          "Rápido pero opaco: no sabes qué se discute",
          "Los usuarios no tienen voz ni voto",
          "Incentivos de la empresa y del usuario desalineados",
          "Eficiente pero vulnerable a abuso de poder",
          "Si el CEO actúa mal, tu única opción es irte"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Descentralizada (DAOs)",
        "points": [
          "La comunidad de holders decide colectivamente",
          "Más lento pero 100% transparente y on-chain",
          "Cada holder puede proponer, votar y delegar",
          "Incentivos alineados: los voters son los usuarios",
          "Democrático pero vulnerable a baja participación",
          "Si la gobernanza falla, votas para cambiarla"
        ],
        "tone": "green"
      }
    },
    "Participa en Gobernanza de Solana": {
      "kind": "steps",
      "steps": [
        {
          "title": "Ten JUP en tu wallet",
          "detail": "Asegúrate de tener tokens JUP en tu wallet Phantom."
        },
        {
          "title": "Conecta en vote.jup.ag",
          "detail": "Entra a vote.jup.ag y conecta tu wallet Phantom."
        },
        {
          "title": "Stakea tus JUP",
          "detail": "Haz clic en 'Stake', ingresa la cantidad y confirma en Phantom."
        },
        {
          "title": "Revisa propuestas activas",
          "detail": "Abre la pestaña 'Vote' y mira las propuestas en curso."
        },
        {
          "title": "Lee cada propuesta completa",
          "detail": "Incluye las discusiones del foro antes de decidir tu voto."
        },
        {
          "title": "Vota For, Against o Abstain",
          "detail": "Emite tu voto, o delega a un delegado de confianza."
        },
        {
          "title": "Reclama tus ASR",
          "detail": "Dentro del plazo de cada trimestre, ve a 'Rewards'. Retirar del staking toma 7 días."
        }
      ],
      "intro": "Paso a paso para votar en Jupiter. Desde 2026 se vota solo sobre tokenomics y tesorería."
    }
  },
};
