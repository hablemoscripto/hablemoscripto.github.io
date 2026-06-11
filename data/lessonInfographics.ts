import type { InfographicSpec } from '../components/lesson/infographics/spec';

// AUTO-ASSEMBLED from the approved brief (workflow) + bespoke/interactive overrides.
// Keyed by lesson id -> exact section title. lessonService attaches these at read
// time, so it works for free (bundled) and paid (DB) lessons with no re-seed.
export const LESSON_INFOGRAPHICS: Record<number, Record<string, InfographicSpec>> = {
  1: {
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
      "intro": "El buen dinero debe cumplir 6 propiedades. El oro las cumplió por milenios; el dinero fiat falla en la primera (escasez).",
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
    "Casos Reales: Cuando la Inflación Destruye Países": {
      "kind": "component",
      "key": "hyperinflation-cases"
    },
    "¿Y Colombia? ¿Y México? ¿Y España?": {
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
          "value": "10 → 25",
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
      "intro": "No pasa solo en países con gobiernos locos. Mira los datos.",
      "columns": 3
    },
    "Por Qué los Gobiernos AMAN la Inflación": {
      "kind": "component",
      "key": "govt-loves-inflation"
    }
  },
  3: {
    "Los Ganadores vs Los Perdedores": {
      "kind": "comparison",
      "left": {
        "title": "Cerca de la impresora (ganan)",
        "points": [
          "Bancos centrales y comerciales",
          "Gobierno: gasta el dinero nuevo primero",
          "Corporaciones con crédito barato",
          "Fondos de inversión y hedge funds",
          "Dueños de activos: acciones, casas, Bitcoin",
          "Endeudados grandes: la deuda se licúa"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Lejos de la impresora (pierden)",
        "points": [
          "Asalariados: tu sueldo se ajusta último",
          "Pensionados y jubilados con ingreso fijo",
          "Ahorradores en efectivo o cuenta bancaria",
          "Clase media sin activos significativos",
          "Jóvenes que buscan su primera casa",
          "Pequeños negocios sin crédito barato"
        ],
        "tone": "red"
      },
      "note": "El dinero nuevo no llega a todos igual: los primeros en la fila compran a precios viejos."
    },
    "Ejemplo Concreto: La Pandemia 2020-2022": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "Marzo 2020",
          "detail": "La Fed anuncia trillones. Tras caer 30%, los mercados rebotan ese mismo día."
        },
        {
          "label": "2020-2021",
          "detail": "S&P 500 +100%, casas en USA +30-40%, Bitcoin de $5,000 a $69,000."
        },
        {
          "label": "Mientras tanto",
          "detail": "Millones sin empleo. Los cheques de $1,200-$3,200 fueron a renta y comida, no a activos."
        },
        {
          "label": "2022-2023",
          "detail": "Inflación 9%+, salarios solo +3-5%. El estímulo ahora empobrece."
        },
        {
          "label": "Resultado",
          "detail": "Billonarios +$5 trillones; la clase media vio sus ahorros evaporarse.",
          "highlight": true
        }
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
          "Confiscable (USA lo hizo en 1933)",
          "Difícil de verificar su autenticidad"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Bitcoin (dinero del siglo XXI)",
        "points": [
          "Escasez absoluta: 21 millones, verificable",
          "Divisible hasta 8 decimales (satoshis)",
          "Almacenable gratis en tu frase semilla",
          "Enviable a cualquier país en minutos",
          "Imposible de confiscar sin tu clave",
          "Verificación instantánea y gratuita"
        ],
        "tone": "green"
      },
      "note": "Y el dólar fiat se imprime sin límite: inflación garantizada que erosiona tus ahorros."
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
      "intro": "Cada ~4 años el Bitcoin nuevo se reduce a la mitad. Deflación programada, no inflación."
    },
    "Las 4 Innovaciones que Cambian Todo": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Lock",
          "title": "Escasez digital absoluta",
          "text": "Solo 21 millones, jamás más. Grabado en el código."
        },
        {
          "icon": "Network",
          "title": "Descentralización real",
          "text": "Miles de computadoras en 100+ países, sin CEO."
        },
        {
          "icon": "Shield",
          "title": "Inmutabilidad",
          "text": "Transacción confirmada = permanente. Nadie la revierte."
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
          "sublabel": "Emigraron con 12 palabras en la cabeza",
          "tone": "green",
          "flag": "🇻🇪"
        },
        {
          "value": "$100M+",
          "label": "Ucrania 2022",
          "sublabel": "En donaciones en días, sin intermediarios",
          "tone": "green",
          "flag": "🇺🇦"
        },
        {
          "value": "Congelado",
          "label": "Líbano",
          "sublabel": "Los de Bitcoin mantuvieron el control",
          "tone": "amber",
          "flag": "🇱🇧"
        },
        {
          "value": "140%+",
          "label": "Argentina",
          "sublabel": "En la crisis de 2023 y 2024 convertían el sueldo el día de cobro",
          "tone": "amber",
          "flag": "🇦🇷"
        }
      ],
      "intro": "Bitcoin no es teoría: protege riqueza ahora mismo.",
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
          "detail": "Bitcoin crea un bloque cada ~10 minutos; Solana, cada ~400 milisegundos."
        },
        {
          "title": "Si alteras el bloque 50, su hash cambia",
          "detail": "El bloque 51 guarda el hash viejo, ya no coincide y la cadena se rompe.",
          "warning": true
        },
        {
          "title": "Tendrías que rehacer todos los bloques siguientes",
          "detail": "Y más rápido que toda la red junta. Prácticamente imposible."
        }
      ],
      "intro": "Cómo los bloques se encadenan y por qué eso los hace inmodificables."
    },
    "Proof of Work vs Proof of Stake": {
      "kind": "comparison",
      "left": {
        "title": "Proof of Work (Bitcoin)",
        "points": [
          "Seguridad respaldada por energía física real",
          "Más probado en el tiempo (15+ años)",
          "Cualquiera puede minar",
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
          "Bloques cada ~400 milisegundos",
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
          "Probar propiedad digital: registro incorruptible",
          "Ejecutar reglas solas con smart contracts: si pasa X, ocurre Y"
        ]
      },
      "bad": {
        "title": "NO PUEDE",
        "items": [
          "Garantizar la verdad del mundo real (garbage in, garbage out)",
          "Ser rápida Y descentralizada a la vez: el trilema"
        ]
      }
    },
    "El Trilema de la Blockchain": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Shield",
          "title": "Seguridad",
          "text": "¿Qué tan difícil es atacar la red? Bitcoin: 15 años sin ataque exitoso."
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
      "intro": "Ninguna blockchain maximiza las tres a la vez: solo puedes elegir 2 de 3.",
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
          "NADIE puede congelar tu wallet",
          "Cambiar reglas requiere consenso casi imposible",
          "Sin punto único: si un nodo cae, hay 14,999 más",
          "No confías en nadie específico",
          "Tu propiedad es TUYA si controlas tus llaves"
        ],
        "tone": "green"
      },
      "note": "El lado descentralizado puede ser más lento (pero está mejorando): ese es el trade-off honesto."
    },
    "El Espectro de la Descentralización": {
      "kind": "statCards",
      "cards": [
        {
          "value": "21",
          "label": "Binance Smart Chain",
          "sublabel": "validadores aprobados por Binance",
          "tone": "red"
        },
        {
          "value": "~10,000",
          "label": "Ethereum",
          "sublabel": "nodos, Proof of Stake, término medio",
          "tone": "amber"
        },
        {
          "value": "~3,000",
          "label": "Solana",
          "sublabel": "validadores, 2,000-4,000 TPS, fees de centavos",
          "tone": "amber"
        },
        {
          "value": "~15,000",
          "label": "Bitcoin",
          "sublabel": "nodos, ~$300 hardware, consenso casi unánime",
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
          "detail": "El banco central prohibió transacciones cripto por decreto"
        },
        {
          "label": "Canadá 2022",
          "detail": "Congeló cuentas de donantes sin orden judicial",
          "highlight": true
        },
        {
          "label": "China (continuo)",
          "detail": "El social credit score limita el acceso financiero"
        },
        {
          "label": "PayPal (frecuente)",
          "detail": "Congela cuentas y retiene fondos durante meses"
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
          "value": "~7",
          "label": "BSC",
          "sublabel": "de 21 validadores, todos de Binance",
          "tone": "red"
        },
        {
          "value": "~19-31",
          "label": "Solana",
          "sublabel": "validadores para frenar la red (33% del stake)",
          "tone": "amber"
        },
        {
          "value": "Muy Alto",
          "label": "Bitcoin",
          "sublabel": "4-5 pools en jurisdicciones distintas para el 51%",
          "tone": "green"
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
          "Nadie puede congelar ni censurar tu cuenta",
          "Retiras cuando quieras, 24/7, sin permiso",
          "Si Phantom quiebra, tus fondos siguen intactos",
          "Nadie lo toca sin tu firma",
          "Tu seguridad depende de ti (responsabilidad)",
          "Privacidad: solo tú sabes lo que tienes"
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
          "text": "Binance, Coinbase, Kraken. Solo para comprar y vender, nunca para ahorros. Retira de inmediato."
        },
        {
          "icon": "Zap",
          "title": "Hot Wallet (conectada a internet)",
          "text": "Phantom, MetaMask, Trust Wallet. Ideal para uso diario, DeFi y NFTs. Riesgo si hackean tu dispositivo."
        },
        {
          "icon": "Lock",
          "title": "Cold Wallet (hardware/offline)",
          "text": "Ledger, Trezor. Las llaves nunca tocan internet. Para ahorros: con más de $5,000-10,000, la necesitas ($70-150)."
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
      "intro": "Los profesionales no ponen todos los huevos en una canasta.",
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
          "text": "phantom.com vs phantomm-wallet.com (con dos M). Idéntico, pero roba tu frase al \"importar\"."
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
      "intro": "El 99% de los robos no son hackeos sofisticados: eres TÚ quien entrega la frase.",
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
          "detail": "Cryptosteel o Billfodl: sobrevive incendios e inundaciones. $50-100, protege fortunas."
        },
        {
          "title": "Copias en múltiples ubicaciones",
          "detail": "2-3 copias en casa, familiar de confianza y banco. Elimina el punto único de fallo."
        },
        {
          "title": "Passphrase adicional (palabra 25)",
          "detail": "Tu frase + palabra secreta genera wallets distintas. Sin ella no pueden acceder."
        },
        {
          "title": "Shamir Secret Sharing",
          "detail": "Divides en 3 partes, necesitas 2 para recuperar. Ninguna ubicación basta sola."
        }
      ],
      "intro": "Si tienes más de $5,000 en cripto, sube de nivel de seguridad."
    },
    "Los Errores que Han Costado Millones": {
      "kind": "statCards",
      "cards": [
        {
          "value": "-$2.4M",
          "label": "El archivo en Google Drive",
          "sublabel": "El \"archivo encriptado\" fue descifrado",
          "tone": "red"
        },
        {
          "value": "-$300K",
          "label": "La foto en iCloud",
          "sublabel": "Las fotos se sincronizan solas a la nube",
          "tone": "red"
        },
        {
          "value": "-$180K",
          "label": "El único papel + incendio",
          "sublabel": "Los fondos siguen en la blockchain, pero nadie puede accederlos",
          "tone": "red"
        },
        {
          "value": "-$50K",
          "label": "El mensaje por WhatsApp",
          "sublabel": "WhatsApp Web abierto en un PC público",
          "tone": "red"
        }
      ],
      "intro": "Errores reales que destruyeron fortunas. Aprende de las tragedias de otros.",
      "columns": 2
    }
  },
  9: {
    "Paso 1: Descarga SOLO desde Fuentes Oficiales": {
      "kind": "checklist",
      "good": {
        "title": "El único sitio real",
        "items": [
          "phantom.app, sin guiones ni números",
          "Escríbelo tú mismo en la barra de direcciones",
          "Verifica el desarrollador: Phantom Technologies Incorporated",
          "Móvil solo desde App Store o Google Play",
          "Guárdalo en favoritos tras verificarlo"
        ]
      },
      "bad": {
        "title": "URLs falsas: TODAS son estafas",
        "items": [
          "phantom-app.com",
          "phantomwallet.io",
          "phantom-wallet.app",
          "phantomm.app",
          "phantom.finance"
        ]
      }
    },
    "Paso 2: Crear una Nueva Wallet": {
      "kind": "steps",
      "steps": [
        {
          "title": "Descarga desde fuente oficial",
          "detail": "Solo phantom.app, App Store o Google Play. Verifica el desarrollador."
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
          "detail": "Phantom te pide confirmar algunas. Si fallas, vuelve a empezar."
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
          "Es relativamente seguro"
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
      "note": "Regla de oro: si haces un swap de $100 y pide acceso ilimitado a todos tus tokens, RECHAZA. Algo está mal."
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
          "~15-30 TPS",
          "Costo: desde menos de $1 hasta varios dólares, sube con la congestión",
          "Confirmación: ~12-15 segundos",
          "DeFi barato solo vía L2s (Arbitrum, Optimism)",
          "Liquidez fragmentada entre L1 y L2s",
          "Bridges entre capas: riesgo de hackeos",
          "Experiencia confusa para nuevos usuarios"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana (L1)",
        "points": [
          "~2,000-4,000 TPS (producción real)",
          "Costo: ~$0.00025 (fracción de centavo)",
          "Confirmación: ~400 milisegundos",
          "Todo en una sola capa, sin L2s",
          "Liquidez unificada en un solo lugar",
          "Sin bridges entre capas: menos riesgo",
          "Experiencia fluida, como una app normal"
        ],
        "tone": "green"
      },
      "note": "Las tres cifras de impacto: velocidad, costo y confirmación."
    },
    "¿Qué Significa \"Monolítico\" vs \"Modular\"?": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum: Modular",
        "points": [
          "Se divide en capas separadas",
          "L1 = capa de seguridad (cara y lenta)",
          "L2s = capas de ejecución (Arbitrum, Optimism)",
          "Mover fondos entre capas exige bridges",
          "Genera fricción, riesgo de hackeo y liquidez fragmentada"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana: Monolítico",
        "points": [
          "Todo en una sola capa",
          "Ejecución + consenso + disponibilidad de datos juntos",
          "Sin bridges, sin L2s, sin fragmentación",
          "Componible e interoperable",
          "Más simple, menos puntos de fallo"
        ],
        "tone": "green"
      },
      "note": "El trade-off: modular = más descentralización teórica pero peor UX; monolítico = mejor UX pero requiere hardware más potente para validadores."
    },
    "Caso Real: Hacer un Swap de $50": {
      "kind": "statCards",
      "cards": [
        {
          "value": "$1-3",
          "label": "Ethereum L1 (Uniswap)",
          "sublabel": "Mucho menos que en 2021, pero variable y sube con la congestión",
          "tone": "red"
        },
        {
          "value": "3+ pasos",
          "label": "Ethereum L2 (Arbitrum)",
          "sublabel": "Bridge de ida y vuelta + swap: más barato, pero con esperas y pasos extra",
          "tone": "amber"
        },
        {
          "value": "$0.0002",
          "label": "Solana (Jupiter)",
          "sublabel": "1 swap, 1 segundo, listo",
          "tone": "green"
        }
      ],
      "intro": "El mismo swap de $50 USDC por tres rutas distintas: costo y pasos.",
      "columns": 3
    },
    "El Ecosistema de Solana: Las Apps que Usarás": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "RefreshCw",
          "title": "Jupiter",
          "text": "El mejor agregador DEX: encuentra el mejor precio, con DCA, órdenes límite y perpetuos."
        },
        {
          "icon": "Wallet",
          "title": "Phantom",
          "text": "La wallet más usada de Solana. Su UX deja a MetaMask sintiéndose de 2017."
        },
        {
          "icon": "Gem",
          "title": "Magic Eden / Tensor",
          "text": "Marketplaces de NFTs con fees <$0.01, frente a $20-50 en OpenSea."
        },
        {
          "icon": "PiggyBank",
          "title": "Marinade / Jito",
          "text": "Liquid staking: ~6-7% anual y tu SOL sigue líquido."
        }
      ],
      "intro": "El mapa de herramientas que realmente vas a usar en Solana.",
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
          "title": "Doji — Indecisión",
          "text": "Abrió y cerró casi al mismo precio: equilibrio total entre toros y osos. En soporte o resistencia puede anticipar reversión."
        },
        {
          "icon": "TrendingUp",
          "title": "Hammer (Martillo) — Alcista",
          "text": "Cuerpo chico arriba, mecha inferior larga (≥2× el cuerpo). Los osos tiraron, los toros rescataron. Solo válido en soporte tras una caída."
        },
        {
          "icon": "TrendingDown",
          "title": "Shooting Star — Bajista",
          "text": "Lo opuesto al Hammer: cuerpo chico abajo, mecha superior larga. Solo válido en resistencia tras una subida."
        },
        {
          "icon": "Flame",
          "title": "Marubozu — Convicción Total",
          "text": "Cuerpo grande sin mechas. Verde: los toros dominaron todo el período; rojo: los osos aplastaron. Momentum fuerte."
        }
      ],
      "intro": "Una sola vela puede contarte una historia poderosa. Estos cuatro aparecen una y otra vez.",
      "columns": 2
    },
    "Patrones de Múltiples Velas: Las Combinaciones Ganadoras": {
      "kind": "comparison",
      "left": {
        "title": "Reversión Alcista",
        "points": [
          "Engulfing Alcista: roja pequeña + verde que envuelve todo su cuerpo.",
          "Los toros absorben la presión vendedora y toman el control.",
          "Morning Star: roja grande, vela chica de indecisión, verde grande.",
          "La 3ª vela cierra dentro del cuerpo de la primera.",
          "Más poderoso en soporte y con volumen creciente."
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
          "Señales más limpias y fiables",
          "Puedes revisar 1-2 veces al día",
          "Ideal para swing trading (días-semanas)",
          "Patrones de velas de alta fiabilidad",
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
          "detail": "Si la zona rechaza el precio desde abajo, tienes una de las entradas más fiables."
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
          "title": "La ballena vende agresivamente",
          "detail": "Empuja el precio a $147 y activa todos esos stops como ventas forzadas.",
          "warning": true
        },
        {
          "title": "Barrido de liquidez",
          "detail": "La ballena compra toda esa liquidez barata que tus stops liberaron.",
          "warning": true
        },
        {
          "title": "El precio se recupera a $155",
          "detail": "Una mecha larga inferior queda como huella del fakeout. Tú quedaste fuera."
        }
      ],
      "intro": "La cacería de stops: cómo las ballenas barren tu liquidez."
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
          "detail": "No persigas el precio: que venga a ti. Paciencia, no apuestas."
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
          "sublabel": "Fiebre: momentum extremo, corrección probable",
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
    "Divergencias: La Señal Más Poderosa del Análisis Técnico": {
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
    "Cruces de EMAs: Las Señales que Mueven Mercados": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingUp",
          "title": "Golden Cross",
          "text": "EMA rápida cruza por encima de la lenta. Señal alcista de mediano plazo; se confirma días después."
        },
        {
          "icon": "TrendingDown",
          "title": "Death Cross",
          "text": "EMA rápida cruza por debajo de la lenta. Señal bajista; históricamente precedió caídas de -30% a -50%."
        },
        {
          "icon": "AlertTriangle",
          "title": "Señales falsas",
          "text": "En rangos laterales las EMAs se enredan como espagueti. Solo fiables con tendencia clara: espera."
        }
      ],
      "intro": "Los cruces se desarrollan durante días o semanas, lo que los hace más fiables que las señales de corto plazo.",
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
          "Funciona con tendencia Y en rangos",
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
          "Solo fiables en timeframes altos (diario+)",
          "Solo funcionan con tendencia, NO en rangos",
          "Te dicen la posición del precio en la tendencia",
          "Ideal para operar a favor de la tendencia"
        ],
        "tone": "amber"
      },
      "note": "En rangos laterales el RSI sigue útil; las EMAs no. Ahí ocurre el 90% de las pérdidas por indicadores."
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
          "label": "$180 — HH",
          "detail": "Máximo más alto: los compradores empujan más arriba"
        },
        {
          "label": "$170 — HL",
          "detail": "Mínimo más alto: la demanda aparece antes"
        },
        {
          "label": "$210 — HH",
          "detail": "Nuevo máximo: los toros siguen dominando"
        },
        {
          "label": "$190 — HL",
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
          "Secuencia previa: $155 → $180 → $170 → $210 → $190",
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
          "Secuencia previa: $55K → $48K → $52K → $45K → $50K",
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
          "Seguir la tendencia funciona muy bien",
          "Los breakouts tienden a continuar",
          "Indicadores dan señales más fiables",
          "Aquí se gana la mayor parte del dinero"
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
          "detail": "Semanal y diario alcistas (HH + HL). El precio retrocedió al soporte de $160; en 4H, RSI en 32 y tocando la EMA 200."
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
          "detail": "Arriesga máximo 1-2% del capital. Con $5,000, riesgo de $75 y $9 por SOL: ~8 SOL ($1,296). El trader calcula su riesgo antes de entrar."
        }
      ],
      "intro": "Un trade profesional de SOL/USDC, paso a paso, antes de apretar un solo botón."
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
          "Supply total: 10 TRILLONES",
          "FDV $10,000M: vale como las mayores empresas",
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
          "label": "Pump Before Unlock",
          "detail": "Precio sube 30-50% antes: insiders necesitan precio alto."
        },
        {
          "label": "Unlock masivo (>10% del supply)",
          "detail": "Dump tras el desbloqueo. No seas la liquidez de salida.",
          "highlight": true
        }
      ],
      "intro": "Cada unlock libera una ola de tokens. El calendario predice la presión de venta."
    },
    "Distribución: ¿Quién Tiene los Tokens?": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Users",
          "title": "Comunidad / Airdrop",
          "text": "Ideal ≥40%. Uniswap (60%) es el estándar dorado. <30% favorece a insiders."
        },
        {
          "icon": "Cpu",
          "title": "Equipo / Founders",
          "text": "Ideal 10-20%. >25% es red flag. <5% también es sospechoso."
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
          "detail": "12-18 meses. Precio cae -70% a -85%. Medios dicen \"crypto muerto\". El MEJOR momento para comprar."
        },
        {
          "label": "2. Acumulación (Primavera)",
          "detail": "6-12 meses. Lateral, volumen bajo. El halving ocurre aquí. El dinero inteligente acumula."
        },
        {
          "label": "3. Bull Market (Verano)",
          "detail": "12-18 meses post-halving. Rompe el ATH. BTC sube 3-5x, luego altcoins 10-100x."
        },
        {
          "label": "4. Distribución (Otoño)",
          "detail": "2-6 meses. El pico. Tu tía pregunta por Dogecoin. Las ballenas venden a los novatos.",
          "highlight": true
        }
      ],
      "intro": "El mercado crypto repite el mismo ciclo de 4 fases con cada halving."
    },
    "¿Qué es el Halving y Por Qué Importa?": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "2009 — 50 BTC",
          "detail": "Recompensa inicial por bloque."
        },
        {
          "label": "2012 — 25 BTC",
          "detail": "Primer halving."
        },
        {
          "label": "2016 — 12.5 BTC",
          "detail": "Segundo halving."
        },
        {
          "label": "2020 — 6.25 BTC",
          "detail": "Tercer halving."
        },
        {
          "label": "2024 — 3.125 BTC",
          "detail": "Último halving (abril 2024)."
        },
        {
          "label": "2028 — 1.5625 BTC",
          "detail": "Próximo halving aproximado."
        },
        {
          "label": "2140 — 0 BTC",
          "detail": "Último Bitcoin minado. Emisión cero, deflacionario puro.",
          "highlight": true
        }
      ],
      "intro": "Cada ~210,000 bloques (~4 años) la emisión nueva de Bitcoin se corta exactamente a la mitad."
    },
    "La Historia: 4 Halvings, 4 Bull Runs": {
      "kind": "statCards",
      "cards": [
        {
          "value": "90x",
          "label": "Ciclo 1 — Halving Nov 2012",
          "sublabel": "~$12 → $1,100 en 13 meses. Luego -85%.",
          "tone": "green"
        },
        {
          "value": "30x",
          "label": "Ciclo 2 — Halving Jul 2016",
          "sublabel": "~$650 → $19,700 en 17 meses. ICOs. Luego -84%.",
          "tone": "green"
        },
        {
          "value": "8x",
          "label": "Ciclo 3 — Halving May 2020",
          "sublabel": "~$8,700 → $69,000 en 18 meses. DeFi + NFTs. Luego -77%.",
          "tone": "green"
        },
        {
          "value": "$126K",
          "label": "Ciclo 4 — Halving Abr 2024",
          "sublabel": "~$64,000 → pico de ~$126K en octubre 2025, ~18 meses después del halving. Luego la corrección.",
          "tone": "amber"
        }
      ],
      "intro": "Cuatro ciclos, cuatro resultados similares. El multiplicador decrece, pero el patrón se mantiene 4 de 4.",
      "columns": 4
    },
    "Bitcoin Dominance y la Altseason": {
      "kind": "steps",
      "steps": [
        {
          "title": "BTC Dominance sube (60%+)",
          "detail": "El capital entra primero a Bitcoin. Las altcoins rinden menos. Mantén la mayoría en BTC."
        },
        {
          "title": "Dominance cae (55-60%)",
          "detail": "El capital fluye a ETH y large caps (SOL, AVAX). Rota gradualmente a altcoins de alta cap."
        },
        {
          "title": "Altseason (BTC Dom <50%)",
          "detail": "Mid y small caps hacen 10-50x, los memecoins explotan. Dura semanas, no meses.",
          "warning": true
        },
        {
          "title": "Capital vuelve a BTC",
          "detail": "Las altcoins caen y la dominance sube: señal de fin. Rota de vuelta a BTC o stablecoins."
        }
      ],
      "intro": "El capital rota por fases según cae la Bitcoin Dominance. Sigue el flujo."
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
          "detail": "Arkham: ¿fundadores con historial? VCs reputados (a16z, Multicoin) vs desconocidos."
        },
        {
          "title": "¿Cómo es el tokenomics?",
          "detail": "TokenUnlocks: ideal >50% circulando y vesting 2-4 años. Cliff del 30% en 3 meses = bomba.",
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
          "TVL sube mientras el precio baja",
          "Ballenas comprando post-caída en Arkham",
          "Fees creciendo mes a mes (demanda real)",
          "Exchange outflows masivos (sacan tokens = HODL)",
          "Usuarios activos en tendencia alcista sostenida",
          "Fundadores y equipo no venden tokens"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Bearish (Distribución)",
        "points": [
          "TVL cae mientras el precio sube",
          "Insiders y VCs moviendo tokens a exchanges",
          "Unlock grande próximo con presión de venta",
          "Exchange inflows masivos (acumulan para vender)",
          "Usuarios cayendo o inflados por bots/incentivos",
          "Equipo y fundadores vendiendo regularmente"
        ],
        "tone": "red"
      },
      "note": "Los datos on-chain anticipan lo que el precio mostrará después."
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
          "text": "Outflow = acumulación (bullish). Inflow = preparan venta (bearish)."
        }
      ],
      "intro": "Domina estas 4 y puedes evaluar cualquier protocolo.",
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
          "text": "Rastrea wallets de VCs, fondos y ballenas. Ve qué compran los que manejan millones."
        },
        {
          "icon": "Clock",
          "title": "TokenUnlocks.app",
          "text": "Calendario de desbloqueos. Anticipa la presión de venta cuando se libera supply."
        }
      ],
      "intro": "Dominar 2-3 te pone por encima del 90% del mercado.",
      "columns": 2
    }
  },
  20: {
    "El Ciclo de Vida de una Narrativa": {
      "kind": "timeline",
      "milestones": [
        {
          "label": "1. Nacimiento (Insiders)",
          "detail": "Solo los más conectados hablan. Micro-caps, baja liquidez. Riesgo alto, reward 50-100x."
        },
        {
          "label": "2. Crecimiento (Early Adopters)",
          "detail": "Zona de oro: ya hay validacion, pero todavia 10-20x de upside.",
          "highlight": true
        },
        {
          "label": "3. Mainstream (Las Masas)",
          "detail": "Medios y amigos preguntan. Lideres ya hicieron 20-50x. Capturas migajas."
        },
        {
          "label": "4. Agotamiento (El Fin)",
          "detail": "No hay nuevos compradores. Si sigues aqui, eres la liquidez de salida."
        }
      ],
      "intro": "Toda narrativa recorre 4 etapas. Saber en cuál estás define si ganas o pierdes."
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
          "detail": "El dinero entra primero al activo mas seguro."
        },
        {
          "title": "ETH",
          "detail": "Rota a la segunda mayor cap cuando BTC se asienta."
        },
        {
          "title": "Large Cap Alts",
          "detail": "El capital busca mas riesgo y retorno."
        },
        {
          "title": "Mid Cap Alts",
          "detail": "Subidas mayores, volumen creciente."
        },
        {
          "title": "Small Caps",
          "detail": "Maximo riesgo y reward conforme avanza el ciclo."
        },
        {
          "title": "Memecoins",
          "detail": "Euforia final: el capital mas especulativo."
        },
        {
          "title": "Crash → Stablecoins",
          "detail": "El ciclo colapsa y el capital vuelve a refugio.",
          "warning": true
        }
      ],
      "intro": "El capital fluye en una secuencia predecible. Posiciónate un paso adelante del flujo."
    },
    "Narrativas con Sustancia vs Puro Vapor": {
      "kind": "comparison",
      "left": {
        "title": "Narrativas con Sustancia",
        "points": [
          "Catalizador real: ChatGPT, ETFs, nuevo protocolo",
          "Proyectos con producto funcionando y usuarios reales",
          "Metricas on-chain crecientes: TVL, wallets, fees",
          "Adoptada por traders reputados, no solo influencers",
          "Crecimiento sostenido de semanas a meses",
          "Los lideres tienen tokenomics solidos"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Narrativas de Vapor",
        "points": [
          "Sin catalizador: solo \"alguien lo dijo en Twitter\"",
          "Solo whitepapers y promesas, sin producto real",
          "Sin metricas on-chain que respalden el hype",
          "Promovida por influencers pagados y grupos de Telegram",
          "Colapsa en horas o dias",
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
          "detail": "\"Cualquiera puede crear un token sin bancos\". Ethereum como plataforma; 99% basura."
        },
        {
          "label": "2020: DeFi Summer",
          "detail": "\"Se tu propio banco\". Uniswap, Aave, Compound. TVL de $1B a $100B, 50-100x."
        },
        {
          "label": "2021: NFTs y Metaverso",
          "detail": "Bored Apes, CryptoPunks, Axie. Luego el 95% perdio el 99% de su valor."
        },
        {
          "label": "2024-2025: AI + Memecoins + Solana",
          "detail": "Agentes AI, BONK/WIF/PEPE, Solana como cadena ganadora.",
          "highlight": true
        }
      ],
      "intro": "Cada ciclo tiene su narrativa dominante. Luego muere o se transforma."
    }
  },
  21: {
    "La Barbell Strategy Crypto: El Framework del 60/30/10": {
      "kind": "statCards",
      "cards": [
        {
          "value": "60%",
          "label": "Core (Base Segura)",
          "sublabel": "BTC, ETH, SOL — hacen 3-8× en bull, protegen tu capital",
          "tone": "green"
        },
        {
          "value": "30%",
          "label": "Satélites (Apuestas Asimétricas)",
          "sublabel": "5-8 posiciones, potencial 10-50×; una que pegue cubre las que fallen",
          "tone": "amber"
        },
        {
          "value": "10%",
          "label": "Liquidez (Stablecoins)",
          "sublabel": "USDC — poder de compra cuando todos venden en pánico",
          "tone": "neutral"
        }
      ],
      "intro": "Combina seguridad extrema con apuestas asimétricas, repartido en tres bloques.",
      "columns": 3
    },
    "Portafolio Diversificado vs Concentrado": {
      "kind": "comparison",
      "left": {
        "title": "Diversificado (60/30/10)",
        "points": [
          "Sobrevive a crashes del -50% sin destruirse",
          "Una posición en cero = pérdida limitada al 3-5%",
          "Liquidez disponible para comprar en el pánico",
          "Retorno de ciclo: 5-15× del portafolio total",
          "Duermes tranquilo sin revisar el precio",
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
          "text": "10-20% en USDC mantiene su valor cuando todo cae. La anti-correlación más efectiva."
        }
      ],
      "intro": "10 altcoins distintas NO son diversificación: en crypto el 95% cae junto cuando BTC cae.",
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
          "text": "Distancia fija: −5%, −8%, −10%. Simple pero ignora la estructura. Nunca uses más de −10%."
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
          "detail": "Capital total disponible para operar: $10,000."
        },
        {
          "title": "Fija tu riesgo: 1-2%",
          "detail": "Con riesgo del 2% → pérdida máxima de $200 en este trade."
        },
        {
          "title": "Mide la distancia al stop",
          "detail": "Si tu stop está 10% debajo de la entrada, esa es tu distancia."
        },
        {
          "title": "Calcula la posición máxima",
          "detail": "$200 / 10% = $2,000. Esa es la posición más grande que puedes tomar."
        },
        {
          "title": "Tu pérdida queda en $200, pase lo que pase",
          "detail": "Solo el 2% del capital. Puedes perder 50 trades seguidos y seguir en el juego."
        }
      ],
      "intro": "Tamaño de posición = (Capital × % riesgo) / Distancia al stop. Nunca arriesgues más del 1-2% por operación."
    },
    "Dónde Colocar tu Stop Loss": {
      "kind": "checklist",
      "good": {
        "title": "Dónde SÍ colocarlo",
        "items": [
          "2-3% debajo de la zona de soporte, con filtro extra",
          "Compras en $150 → stop en $145-146, no en $149",
          "Debajo del último Higher Low de la estructura alcista",
          "Donde tu razón para estar largo deja de existir"
        ]
      },
      "bad": {
        "title": "Dónde NUNCA colocarlo",
        "items": [
          "Justo en el soporte 'obvio' que todos marcan en Twitter",
          "En $99-100 donde hay miles de stops apilados",
          "Las ballenas barren esas zonas antes de rebotar",
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
          "detail": "Stop al precio de entrada: ahora juegas con dinero gratis, cero riesgo."
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
      "intro": "Los profesionales nunca venden todo de golpe. Venden por tramos a medida que el precio sube."
    },
    "El Concepto del Moonbag": {
      "kind": "steps",
      "steps": [
        {
          "title": "El precio llega a $5",
          "detail": "Vendes 600 tokens = $3,000. Recuperas 3× tu inversión original."
        },
        {
          "title": "Te quedan 400 tokens",
          "detail": "Tu moonbag: ya no te costaron nada."
        },
        {
          "title": "Si suben a $50",
          "detail": "Tienes $20,000 extra."
        },
        {
          "title": "Si caen a cero",
          "detail": "No perdiste capital."
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
          "Stop y tamaño: stop en $144 (-10%), 2% de riesgo sobre $10K = $2,000",
          "TP1: 25% en $200 (resistencia)",
          "TP2: 25% en $250 (número redondo)",
          "TP3: 25% en $300 (extensión Fib)",
          "Moonbag: 25% con trailing stop de 20%"
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
          "Gana consistente porque sobrevive a los grandes movimientos"
        ],
        "tone": "green"
      },
      "note": "Misma situación, dos respuestas. La diferencia no es el sistema: es la disciplina."
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
          "label": "Win rate excelente",
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
          "Tamaño de posición: nunca más de 2-5% del portafolio",
          "Stop loss: precio de salida si te equivocas, definido ANTES de entrar",
          "Take profit: toma ganancias parciales 1/3, 1/3, 1/3",
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
          "A largo plazo, siempre pierde dinero"
        ]
      }
    }
  },
  25: {
    "Cómo Funciona la Agregación de Liquidez": {
      "kind": "steps",
      "steps": [
        {
          "title": "Entra una orden: $5,000 USDC → SOL",
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
          "Sin custodia: tus fondos siempre en tu wallet",
          "Sin KYC ni verificación de identidad",
          "Todos los tokens de Solana, incluso nuevos",
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
          "detail": "jup.ag → Connect Wallet. Nunca pide tu frase semilla, solo firmar."
        },
        {
          "title": "Selecciona tus tokens",
          "detail": "Arriba USDC, abajo SOL. Muestra precio, ruta óptima y slippage."
        },
        {
          "title": "Revisa y confirma",
          "detail": "Price Impact <0.5%, slippage 0.5%, firma en Phantom. Fee Jupiter 0%."
        },
        {
          "title": "Configuración avanzada",
          "detail": "Órdenes >$10,000: slippage 0.1-0.3%. Activa Jito Tips contra bots MEV."
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
          "value": "+25%",
          "label": "Cambio de precio",
          "sublabel": "IL ~0.6%",
          "tone": "green"
        },
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
        }
      ],
      "intro": "Cuanto más se mueve el precio, mayor es la pérdida frente a hacer HODL. La tabla que debes memorizar:",
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
          "detail": "Intercambia SOL↔USDC contra el pool, no contra otra persona, y paga 0.25-1% de comisión."
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
          "detail": "Más volumen del pool = más fees. El APY es variable: SOL-USDC 10-30%, memecoin en hype 500-2,000% por horas."
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
          "text": "Especialista en DLMM concentrado. Rangos precisos y estrategias spot/curve/bid-ask. Rendimientos extraordinarios, pero requiere experiencia."
        },
        {
          "icon": "Layers",
          "title": "Orca",
          "text": "Excelente UX con sus Whirlpools concentrados. Menos volumen que Raydium, familiar para quien viene de DeFi en otras chains."
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
          "sublabel": "Una caída del 33% te liquida. Jugar con fuego.",
          "tone": "red"
        },
        {
          "value": "40-60%",
          "label": "LTV profesional",
          "sublabel": "Aquí debes estar: margen amplio",
          "tone": "green"
        },
        {
          "value": "5-10%",
          "label": "Penalización al liquidar",
          "sublabel": "El bot vende tu colateral. Irreversible.",
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
          "LTV del 40-50%: pides menos de la mitad",
          "Health Factor de 2.0+ en todo momento",
          "Colateral en blue chips: SOL, ETH",
          "Monitoreo semanal es suficiente",
          "Riesgo de liquidación: muy bajo",
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
          "Riesgo alto si el mercado cae 15-20%",
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
          "detail": "Deuda contra ese colateral."
        },
        {
          "title": "Compras más SOL",
          "detail": "Conviertes el USDC en más colateral."
        },
        {
          "title": "Depositas y repites",
          "detail": "Vuelves a pedir prestado. Tras 3-4 loops: 2.5-3x apalancamiento."
        },
        {
          "title": "SOL sube 20% → ganas ~50-60%",
          "detail": "El looping amplifica las ganancias."
        },
        {
          "title": "SOL cae 33% → liquidación total",
          "detail": "Pierdes TODOS tus SOL. Kamino Multiply lo hace con un clic: trátalo como un perpetuo apalancado.",
          "warning": true
        }
      ],
      "intro": "Repites el ciclo 3-4 veces: 10 SOL pasan a controlar ~25-30 SOL (2.5-3x)."
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
          "detail": "Solo $900 USDC = 50% LTV, no los $1,350 / 75% que permite el protocolo."
        },
        {
          "title": "Monitorea tu Health Factor",
          "detail": "Debería estar en ~2.0. Si cae a 1.3, actúa: deposita más o repaga."
        },
        {
          "title": "Repaga y recupera",
          "detail": "Devuelves $900 + intereses, liberas tus 10 SOL. Accediste a liquidez sin vender."
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
          "text": "Mientras más tiempo lleva un protocolo sin ser hackeado, más confiable es. El tiempo es la mejor auditoría."
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
          "Minteo: menos de $0.01 por NFT",
          "cNFTs: millones de NFTs por centavos",
          "Transacciones instantáneas (~400ms)",
          "Marketplaces: Tensor, Magic Eden",
          "Enfoque en utilidad y comunidades activas",
          "Mercado joven en rápido crecimiento"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Ethereum",
        "points": [
          "Minteo: $30 a $100+ por NFT",
          "Sin compresión nativa (caro a escala)",
          "Transacciones lentas (~12s) y caras",
          "Marketplaces: OpenSea, Blur",
          "Colecciones históricas (Punks, Apes) y arte",
          "Maduro pero con volumen decreciente"
        ],
        "tone": "amber"
      },
      "note": "El golpe está en el costo: $0.01 frente a $100+ por NFT."
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
          "text": "Piezas por algoritmo o únicas. Exchange Art (FormFunction): artista a coleccionista."
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
          "Tensor: profesional, orderbooks y floor price",
          "Tensor es a los NFTs lo que Jupiter a los tokens",
          "Magic Eden: accesible y amigable, multi-chain",
          "Magic Eden: ideal para tu primera compra"
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
          "La empresa invierte billones en capital",
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
          "label": "El token sube",
          "detail": "Más valor para quienes participan"
        },
        {
          "label": "Vuelve a empezar con más participantes",
          "detail": "Helium: de 0 a 900,000+ hotspots en pocos años",
          "highlight": true
        }
      ],
      "intro": "El flywheel de DePIN: un ciclo virtuoso que se retroalimenta y escala exponencialmente."
    },
    "Los Proyectos DePIN Más Importantes de Solana": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Network",
          "title": "Helium (HNT/MOBILE/IOT)",
          "text": "Red inalámbrica descentralizada. 900,000+ hotspots en 180+ países. Plan celular de $20/mes en USA."
        },
        {
          "icon": "Globe",
          "title": "Hivemapper (HONEY)",
          "text": "Google Maps descentralizado. Ganas tokens por km mapeado con dashcam. Mapa global en tiempo real."
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
    "Monolítico (Solana) vs Ethereum + L2s (Modular)": {
      "kind": "comparison",
      "left": {
        "title": "Solana (Monolítico)",
        "points": [
          "Una sola cadena rápida: ~4,000 TPS, ~400ms",
          "Toda la liquidez en un solo lugar",
          "Componibilidad sincrónica: operaciones atómicas complejas",
          "Sin bridges ni fragmentación",
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
          "detail": "Es atómico: imposible cuando las apps viven en distintas L2s.",
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
          "Bridge obligatorio: tarda minutos u horas",
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
          "Sin bridges, sin esperas, sin fees extra",
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
          "Hardware de validador de $5,000-20,000+ limita quién corre nodo",
          "Eso concentra los nodos y afecta la descentralización",
          "Sin 'escape': si L1 falla, todo el ecosistema cae a la vez"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Debilidades de Ethereum + L2s",
        "points": [
          "La fragmentación empeora con cada nueva L2",
          "Bridges: puntos de fallo costosos, billones perdidos en hacks",
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
          "TPS real: ~2,000-4,000 por segundo",
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
          "En mainnet desde finales de 2025, adopción gradual",
          "TPS en laboratorio: 1,000,000+ (teórico máximo)",
          "Equipo: Jump Crypto, expertos en trading HFT",
          "Ventaja: rendimiento extremo y diversidad real de código",
          "Limitación: gestión manual de memoria, más riesgo de bugs"
        ],
        "tone": "amber"
      },
      "note": "Dos clientes independientes: un bug en uno no puede tumbar toda la red."
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
          "Hardware de validador caro: ~$5,000+ en equipo"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Lo que cambia para ti",
        "points": [
          "Dos clientes: un bug ya no tumba toda la red, DeFi confiable",
          "Firedancer mejora la tolerancia a los picos de demanda",
          "Hardware más eficiente: validar más barato a futuro",
          "Sin acción requerida: la transición ocurre \"debajo\" de ti"
        ],
        "tone": "green"
      },
      "note": "Más validadores asequibles = más descentralización = protege el valor de tu SOL a largo plazo."
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
          "text": "Geth, Nethermind, Besu, Erigon. Cuando Geth falló en 2023, los otros clientes salvaron la red."
        },
        {
          "icon": "RefreshCw",
          "title": "Frankendancer: el puente",
          "text": "Híbrido: networking de Firedancer con ejecución de Agave. Probar en mainnet sin riesgo."
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
          "text": "Hardware wallet (Ledger, Trezor) con el 80-90% del patrimonio. Nunca se conecta a dApps ni firma smart contracts."
        },
        {
          "icon": "Wallet",
          "title": "Nivel 2: Hot Wallet Operativa",
          "text": "Phantom o Solflare con 5-15% del portafolio. Para swaps, staking y compras rutinarias. Solo lo que puedas perder."
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
          "URLs con errores sutiles: \"phantorn.app\" en vez de \"phantom.app\"",
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
          "text": "El \"unlimited approval\" deja al contrato gastar TODOS tus tokens en cualquier momento. Si es malicioso, te vacía sin avisar."
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
          "La dirección de Phantom empieza con \"5xB7...\"",
          "Confirma y espera de 1 a 10 minutos",
          "Tus fondos llegan a tu Phantom"
        ],
        "tone": "green"
      },
      "right": {
        "title": "Redes incorrectas",
        "points": [
          "ERC20 (Ethereum)",
          "BEP20 (BNB Chain)",
          "TRC20 (Tron)",
          "Van a otra blockchain: el dinero se pierde para siempre"
        ],
        "tone": "red"
      },
      "note": "Caso real: un usuario envió $5,000 en SOL por la red ERC20. Llegaron a una dirección de Ethereum que nadie controla. 30 segundos de verificación lo habrían evitado."
    },
    "El Proceso Paso a Paso": {
      "kind": "steps",
      "steps": [
        {
          "title": "Crear cuenta y KYC",
          "detail": "Registro con email + verificación de identidad (documento y selfie). Tarda de 10 minutos a 24 horas."
        },
        {
          "title": "Depositar fiat",
          "detail": "Transferencia bancaria (más barata), tarjeta (instantánea, 2-4% de fee) o P2P."
        },
        {
          "title": "Comprar SOL",
          "detail": "Busca el par SOL/tu-moneda. Usa Market Order (precio actual) o Limit Order (precio que defines)."
        },
        {
          "title": "Retirar a Phantom",
          "detail": "Pega tu dirección de Phantom y selecciona la red SOLANA. Confirma y espera 1-10 minutos.",
          "warning": true
        }
      ],
      "intro": "Ejemplo con Binance, pero el flujo es igual en todos los exchanges."
    },
    "Eligiendo tu Exchange: Opciones para Latinoamérica": {
      "kind": "statCards",
      "cards": [
        {
          "value": "Binance",
          "label": "El más grande del mundo",
          "sublabel": "Transferencias locales LATAM + P2P, fees bajos",
          "tone": "amber"
        },
        {
          "value": "Backpack",
          "label": "Especializado en Solana",
          "sublabel": "Creado por el equipo de Mad Lads, regulado en Dubai",
          "tone": "neutral"
        },
        {
          "value": "Coinbase",
          "label": "El más regulado",
          "sublabel": "Seguridad institucional, más caro pero confiable",
          "tone": "neutral"
        },
        {
          "value": "Kraken",
          "label": "Nunca hackeado en 10+ años",
          "sublabel": "Mejor track record de seguridad",
          "tone": "green"
        }
      ],
      "intro": "Las opciones más confiables para la región y para qué destaca cada una.",
      "columns": 4
    },
    "Fees: Lo Que Realmente Pagas": {
      "kind": "statCards",
      "cards": [
        {
          "value": "Gratis",
          "label": "Depósito por transferencia",
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
          "value": "~$2-3",
          "label": "Retiro (fee del exchange)",
          "sublabel": "Binance ~0.01 SOL, fijo sin importar el monto",
          "tone": "amber"
        },
        {
          "value": "$0.0002",
          "label": "Fee real de la red Solana",
          "sublabel": "Lo que de verdad cuesta la transacción",
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
          "detail": "Pega la dirección (ej. \"7xK9p...\") y VERIFICA los primeros y últimos 4 caracteres.",
          "warning": true
        },
        {
          "title": "Ingresa el monto",
          "detail": "Para la prueba, envía $1-5. Deja ~0.01 SOL para fees futuros."
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
          "Compara los primeros 4 y últimos 4 caracteres de la dirección.",
          "Si envías $1,000+, manda primero una prueba de $1-5 y espera a que llegue.",
          "Tómate 2 minutos de verificación: las transacciones legítimas pueden esperar."
        ]
      },
      "bad": {
        "title": "Señales de peligro",
        "items": [
          "Pegar la dirección sin revisarla: los clipboard hijackers la cambian.",
          "Una sola letra distinta = fondos perdidos para siempre.",
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
          "Tarda 3-5 días",
          "Cuesta $25-50",
          "Pide permiso a intermediarios"
        ],
        "tone": "red"
      },
      "right": {
        "title": "Solana",
        "points": [
          "Misma función",
          "Tarda menos de 1 segundo",
          "Cuesta menos de $0.001",
          "Sin pedir permiso a nadie"
        ],
        "tone": "green"
      },
      "note": "Misma función, 1000x más eficiente."
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
          "detail": "Success = confirmada. Fail = falló, los fondos no se movieron."
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
          "Pero un CA distinto = estafa",
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
        "title": "Wallet confiable",
        "items": [
          "Balance de SOL y tokens visible",
          "Historial de transacciones consistente",
          "Actividad a lo largo del tiempo"
        ]
      },
      "bad": {
        "title": "Red flags",
        "items": [
          "Balance en cero",
          "Wallet creada hace 5 minutos",
          "Sin historial: posible wallet desechable"
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
          "URLs oficiales verificadas: phantom.app, jup.ag",
          "NUNCA te piden tu seed phrase",
          "No prometen retornos garantizados",
          "Tienen historial público y verificable",
          "Código abierto y auditorías públicas",
          "Transacciones simuladas muestran qué pasará"
        ],
        "tone": "green"
      },
      "note": "El 99% de las estafas siguen estos patrones. Conocerlos las vuelve fáciles de detectar."
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
          "detail": "El sitio parece legítimo y te pide aprobar una transacción."
        },
        {
          "title": "La firma esconde permisos ocultos",
          "detail": "\"Approve unlimited access to all tokens\" transfiere TODO. Si lo ves, RECHAZA.",
          "warning": true
        },
        {
          "title": "Lee la simulación de Phantom",
          "detail": "Phantom muestra qué pasará. Si no esperabas eso, no firmes."
        },
        {
          "title": "Usa una burner wallet",
          "detail": "Prueba dApps nuevas con fondos mínimos. Tu wallet principal queda intacta."
        }
      ],
      "intro": "Contratos maliciosos que vacían tu wallet cuando firmas. Así operan y cómo defenderte."
    },
    "Tu Privacidad en la Blockchain": {
      "kind": "steps",
      "steps": [
        {
          "title": "Exchange KYC (Binance, Coinbase)",
          "detail": "Vinculado a tu nombre real. Nunca envíes directo a tu wallet de ahorro.",
          "warning": true
        },
        {
          "title": "Wallet operativa o intermedia",
          "detail": "Para DeFi y experimentación. Úsala como puente desde el exchange."
        },
        {
          "title": "Wallet principal de ahorro",
          "detail": "Mínima actividad, fondos a largo plazo. La que más proteges."
        },
        {
          "title": "Wallet burner aparte",
          "detail": "Solo para probar dApps nuevas o riesgosas. Si es estafa, pierdes poco."
        }
      ],
      "intro": "Toda transacción es pública para siempre en Solscan. Separa tus wallets para no exponer toda tu vida financiera."
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
          "detail": "Envías USDC desde Phantom a la dirección de depósito de Kast/Avici. Aparece en minutos."
        },
        {
          "title": "Usa tu tarjeta",
          "detail": "Pagas en cualquier comercio Visa/Mastercard. Conversión a moneda local automática e instantánea."
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
        "title": "AHORRAR: BTC, SOL, ETH",
        "points": [
          "Tu inversión de largo plazo: HODL.",
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
          "Siempre valen ~$1, sin volatilidad.",
          "100 USDC hoy = $100, pase lo que pase.",
          "Perfectos para gastos diarios.",
          "Conviertes a stablecoin solo lo que vas a gastar.",
          "Así nunca 'gastas' tu inversión."
        ],
        "tone": "amber"
      },
      "note": "Regla de oro: BTC/SOL son para ahorrar, stablecoins para gastar. No los mezcles."
    },
    "Opciones de Tarjetas para Latinoamérica": {
      "kind": "statCards",
      "cards": [
        {
          "value": "Kast",
          "label": "Virtual y física",
          "sublabel": "USDC y USDT, recarga desde Solana sin fees. Buena para comenzar.",
          "tone": "green"
        },
        {
          "value": "Avici",
          "label": "Premium con beneficios",
          "sublabel": "Múltiples criptos y soporte en español. Varios países LATAM.",
          "tone": "neutral"
        }
      ],
      "intro": "No todas las tarjetas cripto sirven en LATAM. Estas son las mejores opciones.",
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
          "detail": "Cargas stablecoins. Aquí ya no pasas por el banco."
        },
        {
          "title": "Gastos reales",
          "detail": "Amazon, Netflix, gasolina, supermercado. Sin pedir permiso."
        }
      ],
      "intro": "El ciclo completo: de fiat a gastos reales sin volver a tu banco."
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
          "Retiro con cooldown de 1 epoch (~2-3 días)",
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
          "detail": "Tu saldo de SOL → 'Start Earning SOL'."
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
          "detail": "Deja 0.1-0.5 SOL libres para fees futuros.",
          "warning": true
        },
        {
          "title": "Confirma",
          "detail": "Fee de ~0.000005 SOL por la transacción."
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
          "text": "Captura MEV y lo reparte a stakers, dando un APY algo mayor. Extremadamente líquido."
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
          "Uptime >98% y alto vote success rate",
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
          "title": "Algorítmicas (UST/Luna - COLAPSÓ)",
          "text": "Sin respaldo real, solo código. En mayo 2022 perdió la paridad y cayó a $0. $40 mil millones se evaporaron."
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
          "Auditorías mensuales por Deloitte",
          "Reservas: bonos del Tesoro + efectivo",
          "Empresa regulada en USA",
          "Puede congelar direcciones por orden legal",
          "Mejor para ahorros y confianza",
          "Algo menos de liquidez que USDT"
        ],
        "tone": "green"
      },
      "right": {
        "title": "USDT (Tether)",
        "points": [
          "Auditorías trimestrales (más recientes)",
          "Reservas diversificadas: bonos, BTC, oro, préstamos",
          "Con sede en El Salvador desde 2025, antes en las Islas Vírgenes Británicas",
          "También puede congelar direcciones",
          "Mayor liquidez y adopción global",
          "Historial de opacidad en reservas"
        ],
        "tone": "amber"
      },
      "note": "Ambas dependen de una empresa centralizada: ese es el riesgo común."
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
          "title": "$40 mil millones evaporados en 72 horas",
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
          "value": "$35-70",
          "label": "Lo que pierdes con Western Union",
          "sublabel": "Comisión + spread, llega en 3-5 días",
          "tone": "red"
        },
        {
          "value": "$0.001",
          "label": "Fee de USDC por Solana",
          "sublabel": "Llega en ~2 segundos",
          "tone": "green"
        },
        {
          "value": "$420-840",
          "label": "Ahorro al año",
          "sublabel": "Si recibes remesas cada mes",
          "tone": "green"
        }
      ],
      "intro": "Enviar $500 de USA a LATAM: el método tradicional frente a stablecoins por Solana.",
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
          "sublabel": "Compra el día 1 cada mes. Retorno histórico 150-400%.",
          "tone": "green"
        },
        {
          "value": "15 / 48",
          "label": "Carlos (intenta timing)",
          "sublabel": "Espera la caída perfecta. Se perdió las mejores oportunidades.",
          "tone": "amber"
        },
        {
          "value": "$4,800",
          "label": "María (todo de una vez)",
          "sublabel": "Si compró en un pico: hasta -50% y años en pérdida.",
          "tone": "red"
        }
      ],
      "intro": "Tres personas invierten $100 al mes en Bitcoin durante 4 años.",
      "columns": 3
    },
    "¿Por Qué Funciona? La Matemática del Promedio": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "TrendingDown",
          "title": "Cuando el precio baja",
          "text": "Tus $50 compran MÁS cripto. La caída acumula más por menos."
        },
        {
          "icon": "TrendingUp",
          "title": "Cuando el precio sube",
          "text": "Tus $50 compran menos, pero lo que ya tienes vale más."
        },
        {
          "icon": "Scale",
          "title": "El promedio gana",
          "text": "Tu precio promedio queda bajo el del mercado: costo promedio ponderado."
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
          "detail": "Invierte solo lo que no necesitas en 12 meses. Nunca el arriendo ni la comida.",
          "warning": true
        },
        {
          "title": "Elige tu frecuencia",
          "detail": "Una cantidad fija cada semana o cada mes. Ejemplo: $100-200 al mes."
        },
        {
          "title": "Manual o automatizado",
          "detail": "Manual en Binance P2P o Backpack, o automático en Jupiter (Solana) con USDC."
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
          "label": "Conservador",
          "sublabel": "BTC base · 15-20% ETH · 10-15% SOL · 5-10% Stablecoins",
          "tone": "green"
        },
        {
          "value": "40-50%",
          "label": "Moderado",
          "sublabel": "BTC · 20-25% SOL · 15-20% ETH · 10-15% Stables · 5% Altcoins",
          "tone": "amber"
        },
        {
          "value": "30%",
          "label": "Agresivo",
          "sublabel": "BTC · 30% SOL · 15% ETH · 15% Altcoins · 10% Stablecoins",
          "tone": "red"
        }
      ],
      "intro": "Tres marcos de referencia probados según tu tolerancia al riesgo.",
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
          "title": "Tokens de protocolo (JUP, RAY, RNDR)",
          "text": "Utilidad real: gobernanza, fees, servicios. Alto riesgo, alto potencial."
        },
        {
          "icon": "Flame",
          "title": "Meme coins (DOGE, SHIB, BONK)",
          "text": "Sin utilidad, pura especulación. La mayoría va a cero. Son apuestas, no inversiones."
        },
        {
          "icon": "AlertTriangle",
          "title": "Tokens dudosos (99% del mercado)",
          "text": "Sin equipo, sin producto, sin auditoría. Creados para extraer dinero de incautos."
        }
      ],
      "intro": "Las categorías principales, de la más útil y segura a la más riesgosa.",
      "columns": 2
    },
    "Ethereum y Solana: Las Plataformas de Utilidad": {
      "kind": "comparison",
      "left": {
        "title": "Ethereum (ETH) · el \"Windows\"",
        "points": [
          "Primera y mayor plataforma de contratos inteligentes",
          "DeFi, NFTs y stablecoins nacieron aquí",
          "Ecosistema más maduro, más desarrolladores",
          "Lento (~15 TPS) y caro (fees $1-50+)",
          "Dominante y probado, pero pesado"
        ],
        "tone": "amber"
      },
      "right": {
        "title": "Solana (SOL) · alta velocidad",
        "points": [
          "Ultra-rápida (~4,000 TPS)",
          "Fees de fracciones de centavo",
          "Ecosistema DeFi: Jupiter, Raydium, Marinade",
          "Ideal para experimentar: los errores cuestan centavos",
          "Más joven, más riesgo, más potencial"
        ],
        "tone": "amber"
      },
      "note": "La diferencia clave con Bitcoin: ETH y SOL tienen inflación y no tienen el límite duro de 21M. Son apuestas a tecnología, no a escasez pura."
    }
  },
  44: {
    "Paso 2: Arma tu Portafolio Base": {
      "kind": "statCards",
      "cards": [
        {
          "value": "50-70%",
          "label": "Bitcoin: la base",
          "sublabel": "Tu ancla. DCA y cold wallet si supera $5,000",
          "tone": "green"
        },
        {
          "value": "20-35%",
          "label": "Crecimiento: SOL + ETH",
          "sublabel": "Ecosistemas en desarrollo, también en DCA",
          "tone": "amber"
        },
        {
          "value": "5-15%",
          "label": "Operativo: Stablecoins",
          "sublabel": "Comprar caídas, tarjeta cripto, estabilidad",
          "tone": "neutral"
        },
        {
          "value": "0-5%",
          "label": "Opcional: Altcoins/Memes",
          "sublabel": "Solo dinero que puedes perder al 100%",
          "tone": "red"
        }
      ],
      "intro": "Un marco de distribución para principiantes que puedes ajustar a tu perfil.",
      "columns": 4
    },
    "Tu Plan de Acción: Escríbelo HOY, Ejecuta ESTA SEMANA": {
      "kind": "steps",
      "steps": [
        {
          "title": "Verifica tu fondo de emergencia",
          "detail": "3-6 meses de gastos. Si no lo tienes, prioriza eso antes que cripto."
        },
        {
          "title": "Define tu portafolio base",
          "detail": "% BTC + % SOL + % ETH + % Stablecoins. Escríbelo en papel."
        },
        {
          "title": "Configura tu DCA",
          "detail": "Monto fijo + frecuencia + método. Empieza esta semana."
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
          "detail": "Escribe los tres números, pon la alarma del lunes, ejecuta tu primer DCA."
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
          "sublabel": "DIAN. Ganancia de capital en renta anual; monitoreo desde 2022",
          "tone": "amber",
          "flag": "🇨🇴"
        },
        {
          "value": "Hasta 35%",
          "label": "México",
          "sublabel": "SAT. ISR sobre enajenación; Bitso reporta operaciones",
          "tone": "amber",
          "flag": "🇲🇽"
        },
        {
          "value": "15%",
          "label": "Argentina",
          "sublabel": "AFIP. Renta financiera + Bienes Personales sobre tenencias",
          "tone": "amber",
          "flag": "🇦🇷"
        }
      ],
      "intro": "Las cripto no son invisibles para el fisco. Panorama general por país.",
      "columns": 3
    }
  },
  45: {
    "Ataques Sandwich: El Robo que No Ves": {
      "kind": "steps",
      "steps": [
        {
          "title": "PAN: el bot compra ANTES (front-run)",
          "detail": "Ve tu swap en el mempool y compra SOL primero, subiendo el precio.",
          "warning": true
        },
        {
          "title": "RELLENO: tu swap se ejecuta",
          "detail": "100 USDC → SOL al precio ya inflado. Esperabas 0.67 SOL, recibes 0.65 SOL.",
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
          "text": "Ve una orden grande de $50,000 pendiente, compra antes y vende más caro. Te perjudica."
        },
        {
          "icon": "RefreshCw",
          "title": "Back-Running",
          "text": "Arbitra después: compra barato en Jupiter, vende caro en Orca. Menos dañino, equilibra precios."
        },
        {
          "icon": "Scissors",
          "title": "Liquidation MEV",
          "text": "Bots compiten por liquidar posiciones en Kamino o MarginFi por el bonus, a veces manipulando oráculos."
        }
      ],
      "intro": "Tres formas de MEV según dónde actúa el bot respecto a la transacción objetivo.",
      "columns": 3
    },
    "Jito y la Solución de Solana": {
      "kind": "comparison",
      "left": {
        "title": "SIN Jito (mempool público)",
        "points": [
          "Tu swap es visible para todos los bots",
          "Bots sandwich detectan y atacan tu orden",
          "Carrera ciega de fees por inclusión",
          "Las ganancias de MEV van a bots anónimos"
        ],
        "tone": "red"
      },
      "right": {
        "title": "CON Jito Bundle",
        "points": [
          "Bundle directo al validador, fuera del mempool",
          "Invisible para bots: no pueden sandwichearte",
          "Orden de ejecución garantizado",
          "MEV redistribuido a validadores y stakers"
        ],
        "tone": "green"
      },
      "note": "+90% de validadores usan el cliente Jito-Solana. Stakers de jitoSOL ganan ~1-2% más APY por MEV."
    },
    "Cómo Protegerte: Guía Práctica": {
      "kind": "iconGrid",
      "items": [
        {
          "icon": "Shield",
          "title": "Activa Jito Tips en Jupiter",
          "text": "Un tip de 0.001-0.005 SOL envía tu swap como bundle directo a validadores, fuera del mempool."
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
          "title": "Divide swaps grandes",
          "text": "Un swap de $10,000 atrae bots. Divídelo en 3-5 partes de ~$2,000, menos atractivas."
        },
        {
          "icon": "Target",
          "title": "Usa limit orders",
          "text": "Precio fijo en Jupiter. No pasa por el mempool en tiempo real, mucho más difícil de sandwichear."
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
          "title": "Votación Cuadrática (costo exponencial)",
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
          "detail": "Al cierre del periodo, ve a 'Rewards' y reclama tus recompensas."
        }
      ],
      "intro": "Paso a paso para votar en Jupiter. Tiempo total: 10 minutos que te dan voz y recompensas."
    }
  },
};
