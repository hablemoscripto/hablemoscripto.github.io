import type { LucideIcon } from 'lucide-react';
import {
  Banknote,
  Wallet,
  Search,
  Zap,
  Gem,
  Cpu,
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
  Brain,
  Eye,
  MessageSquare,
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
  icon: LucideIcon;
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


// Loose shape for an entry in the lesson content bundle. Entries are shaped
// ad-hoc (sections/quizzes/referrals vary per lesson); consumers narrow the
// nested fields as they read (see `services/lessonService.ts`).
export interface LessonEntry {
  id: number;
  title: string;
  level?: string;
  number?: string;
  duration?: string;
  type?: string;
  description?: string;
  videoId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quiz?: { questions?: any[] };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkpointQuizzes?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  referrals?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const LESSONS_DATA: Record<number, LessonEntry> = {
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
        content: 'Imagina que eres un pescador en el año 3000 a.C. Tienes pescado fresco, pero necesitas sandalias. Vas donde el zapatero, pero él no quiere pescado, quiere trigo. Entonces buscas al agricultor, pero él quiere leña. Pasas el día entero buscando a alguien que quiera exactamente lo que tienes y tenga exactamente lo que necesitas. Este problema se llama la **"doble coincidencia de deseos"**, y frenó el progreso humano durante milenios. El dinero lo resolvió. No es solo "algo para comprar cosas". El dinero es una **tecnología para almacenar y transferir valor** a través del tiempo y el espacio. Es tan revolucionario como la rueda, la escritura o el internet.',
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
        imageSummary: 'Conchas, sal, ganado, todos fallaron por la misma razón: alguien encontró la forma de crear más. El oro ganó porque nadie puede imprimirlo. No fue decreto de ningún rey. Fue selección natural del mercado durante 5,000 años.'
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
        content: 'El 15 de agosto de 1971, el presidente Richard Nixon apareció en televisión y anunció que Estados Unidos "temporalmente" suspendía la convertibilidad del dólar en oro. Francia y otros países estaban exigiendo su oro (sabían que USA había impreso más dólares de los que podía respaldar), y las reservas de Fort Knox se vaciaban. Nixon rompió la promesa "temporalmente". Más de medio siglo después, sigue rota. Desde ese día, el dólar, y por extensión todas las monedas del mundo, no están respaldadas por nada tangible. Solo por la "confianza" en el gobierno emisor.',
        highlight: {
          title: 'El Resultado Matemático',
          text: 'Desde 1971, el dólar ha perdido aproximadamente el 87% de su poder adquisitivo. Una casa que costaba $25,000 en 1971 hoy cuesta $400,000+. Un auto que costaba $3,500 hoy cuesta $48,000. No es que las cosas sean mejores, es que tu dinero vale menos.'
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
          { icon: TrendingDown, title: 'Dato Histórico', text: 'A lo largo de la historia, ninguna moneda fiat ha mantenido su valor a largo plazo. Los imperios romano, otomano, español y británico todos degradaron sus monedas. El dólar actual lleva más de medio siglo sin respaldo en oro desde 1971, y ha perdido el 87% de su poder adquisitivo en ese periodo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Por qué Esta Historia Importa para Bitcoin',
        items: [
          'El dinero no es un invento del gobierno, es una tecnología que el mercado desarrolló durante milenios para resolver el problema del intercambio de valor.',
          'El buen dinero debe cumplir 6 propiedades: escasez, divisibilidad, durabilidad, portabilidad, fungibilidad y verificabilidad.',
          'El oro dominó 5,000 años porque cumple estas propiedades naturalmente. Nadie puede "imprimir" más oro.',
          'En 1971, los gobiernos rompieron la última conexión del dinero con algo escaso. Desde entonces, vivimos en un experimento de dinero por decreto (fiat).',
          'Bitcoin es el primer dinero en la historia que cumple las 6 propiedades del dinero perfecto de forma DIGITAL, con escasez ABSOLUTA (21 millones máximo), y que NADIE puede manipular.',
          'No es solo tecnología, es una revolución monetaria comparable a la invención del papel moneda o del propio concepto de dinero.'
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
        imageSummary: 'En 1971: $1.60/hora compraba 5 onzas de oro. Hoy: $7.25/hora compra 0.15 onzas. El sueldo subió 4.5x en números, pero tu poder REAL cayó 97%. No trabajamos menos, nos pagan en dinero que vale menos. Este es el robo silencioso de la inflación.'
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
        imageSummary: 'No hay caja fuerte. No hay oro. Solo un funcionario, un teclado, y la autoridad para agregar ceros. En 2020, la Fed creó $4.5 TRILLONES así, dinero que no existía el día anterior. Ese "dinero" ahora compite con el tuyo por los mismos bienes.'
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
        imageSummary: 'La inflación no es un fenómeno misterioso. Es aritmética: más dinero persiguiendo los mismos bienes = precios más altos. El ladrón no entra por tu ventana, entra por la impresora del banco central y te roba mientras duermes, año tras año.'
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
        content: 'La inflación no es un error, es una política deliberada. Los gobiernos tienen incentivos muy claros para mantener inflación moderada (y a veces no tan moderada):',
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
        imageSummary: 'Los gobiernos manipulan las cifras: si el bistec sube, dicen que "compraste pollo". Si la computadora es más rápida, dicen que "bajó de precio". Y excluyen comida y energía por ser "volátiles", justo lo que más compras. Tu supermercado no miente. Las estadísticas oficiales sí.'
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
          'La inflación no es natural ni inevitable, es una política deliberada que transfiere riqueza de ahorradores a deudores y de ciudadanos a gobiernos.',
          'El dinero que tienes en el banco está perdiendo valor cada día. Los intereses bancarios NUNCA compensan la inflación real.',
          'Desde 1971, NO existe ninguna moneda nacional respaldada por algo tangible. Todas dependen de promesas de políticos.',
          'El historial es claro: TODOS los gobiernos eventualmente abusan del poder de imprimir. Es solo cuestión de tiempo y grado.',
          'Bitcoin fue creado específicamente para resolver este problema: solo existirán 21 millones. Nadie, ni Satoshi, ni los mineros, ni ningún gobierno, puede crear más.',
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
            { id: 'd', text: 'De la nada, literalmente teclearon números en una computadora' }
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
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 3,
        title: 'Checkpoint: Inflación Real vs Nominal',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Ganas un aumento del 8% este año. La inflación oficial del país es del 5%. ¿Cuál es el cambio real en tu poder de compra?',
            options: [
              '+8% (ganaste el aumento completo)',
              '+3% (aumento menos inflación)',
              '-5% (la inflación anula tu aumento)',
              '0% (empataste con la inflación)'
            ],
            correctAnswer: 1,
            explanation: 'Poder de compra real = aumento nominal − inflación. 8% − 5% = 3%. Ganaste ese aumento, pero solo 3 puntos te acercan a más capacidad de compra real. Si la inflación hubiera sido 8%, tu "aumento" habría sido inflación disfrazada de mejora.',
            hint: 'Resta la inflación del aumento nominal.'
          }
        ]
      }
    ]
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
        imageSummary: 'El dinero nuevo es como un río. Los que están cerca de la naciente (bancos, gobierno, corporaciones) beben agua limpia y abundante. Para cuando llega río abajo (trabajadores, pensionados, ahorradores), está sucia y escasa. Mira la imagen: "Tú estás aquí", al final, recibiendo las sobras.'
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
        imageSummary: 'Mira el contraste: los ricos nadan en dinero fresco directo de la impresora, celebrando cada ronda de "estímulo". Mientras tanto, tú recibes un goteo de agua sucia cuando el dinero ya perdió valor. No es que trabajen más duro, están posicionados en el lugar correcto del sistema. El juego está estructuralmente amañado.'
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
        imageSummary: 'Bitcoin rompe el sistema Cantillon con 3 pilares: 1) NO hay banco central que imprima para los privilegiados, 21 millones máximo, para siempre. 2) Acceso igualitario, cualquiera con internet puede participar, sin ser cliente VIP. 3) Protección contra devaluación, cuando imprimen fiat, Bitcoin no se diluye. Por primera vez, el dinero es justo.'
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'El Efecto Cantillon explica por qué la desigualdad crece cuando se imprime dinero: los primeros en recibirlo ganan, los últimos pierden.',
          'Tú estás al FINAL de la cadena. Para cuando el dinero nuevo llega a tu sueldo, los precios ya subieron.',
          'Los ganadores del sistema actual: bancos, gobiernos, corporaciones, dueños de activos, ultra-ricos con acceso a crédito barato.',
          'Los perdedores: asalariados, pensionados, ahorradores en efectivo, jóvenes sin activos, clase media latinoamericana.',
          'La brecha de riqueza no es coincidencia, es el resultado matemático de 50+ años de impresión monetaria beneficiando siempre a los mismos.',
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
          explanation: 'Cada vez que se imprime dinero, fluye hacia activos (casas, acciones) antes que hacia salarios. Después de décadas de esto, los activos están fuera del alcance de quienes empiezan desde cero. No es falta de trabajo, es posición en el sistema.'
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
            { id: 'c', text: 'Porque NO HAY impresión privilegiada, los 21 millones de BTC se emiten según reglas matemáticas predecibles que nadie puede cambiar, sin "cercanos a la impresora"' },
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
          explanation: 'El S&P 500 subió 3000%+ desde 1971. Los salarios reales subieron menos de 19%. Si tenías activos, multiplicaste tu riqueza. Si dependías de tu sueldo, te quedaste atrás. No es coincidencia, es el Efecto Cantillon acumulándose durante 50 años.'
        },
        {
          id: 'q7-review',
          question: 'Repaso de la Lección 1: El gobierno anuncia que inyectará $2 trillones "para estimular la economía y llegar a todos". Conectando con lo que aprendiste sobre el dinero en la Lección 1, ¿por qué esto NO es redistribución neutral?',
          options: [
            { id: 'a', text: 'Porque el dinero no es real' },
            { id: 'b', text: 'Porque el dinero nuevo entra primero a bancos y activos financieros, los precios de esos activos suben ANTES de que el dinero llegue al resto. Cuando tú recibes tu parte, las cosas ya cuestan más' },
            { id: 'c', text: 'Porque los políticos roban una parte' },
            { id: 'd', text: 'No tiene efecto, es solo inflación' }
          ],
          correctAnswer: 'b',
          explanation: 'Aprendiste en la Lección 1 que la escasez es lo que da valor al dinero. Cuando un gobierno crea $2T nuevos, diluye el valor del dinero existente, pero no afecta a todos igual. Los primeros en recibir (bancos, fondos, corporaciones) compran activos a precios viejos. Para cuando el dinero llega a ti vía sueldo o subsidio, los activos ya subieron. Perdiste capacidad de compra relativa. Esto es el Efecto Cantillon en acción.'
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
    description: 'Después de entender cómo el sistema monetario te empobrece silenciosamente, es hora de conocer la solución. Bitcoin no es una "inversión especulativa", es la primera alternativa real al dinero corrupto en 5,000 años de historia.',
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
          { icon: Lock, title: '1. Escasez Digital Absoluta', text: 'Solo existirán **21 millones de Bitcoin**. NUNCA. JAMÁS. Esta cantidad está grabada en el código y nadie puede cambiarla, ni Satoshi, ni los mineros, ni ningún gobierno. Es la primera vez en la historia que existe algo verdaderamente escaso en el mundo digital. Antes de Bitcoin, todo lo digital podía copiarse infinitamente.' },
          { icon: Network, title: '2. Descentralización Real', text: 'No hay CEO de Bitcoin. No hay servidor central. No hay empresa que demandar o presionar. Miles de computadoras en más de 100 países mantienen la red simultáneamente. Para "apagar" Bitcoin, tendrías que apagar todas estas computadoras al mismo tiempo en todo el mundo, y otras nuevas aparecerían.' },
          { icon: Shield, title: '3. Inmutabilidad', text: 'Una vez que una transacción se confirma en la blockchain, es PERMANENTE. Nadie puede revertirla, censurarla, o modificarla. Ni Satoshi. Ni los mineros. Ni ningún gobierno. El historial de Bitcoin es matemáticamente inalterable.' },
          { icon: Globe, title: '4. Sin Fronteras ni Permisos', text: 'Puedes enviar $1 o $1 billón a cualquier país del mundo, 24/7, sin pedir permiso a nadie. No hay bancos que aprobar tu transacción. No hay límites arbitrarios. No hay "horario bancario". El dinero llega en minutos, no días.' }
        ]
      },
      {
        type: 'main',
        title: 'Entendiendo la Escasez: ¿Por Qué Solo 21 Millones?',
        content: 'La escasez de Bitcoin no es arbitraria, está matemáticamente garantizada por el código y el proceso de emisión:',
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
          { icon: Shield, title: 'Criptografía de Grado Militar', text: 'Tus bitcoins están protegidos por la misma matemática que protege secretos nucleares. Romper una clave privada de Bitcoin tomaría más energía de la que produce el sol en toda su vida. No es exageración, es matemática.' },
          { icon: Users, title: 'Efecto de Red Imparable', text: 'Cada nuevo usuario hace a Bitcoin más valioso y más resistente. Ya hay más de 100 millones de usuarios globales. Prohibirlo es como prohibir el email en 1995, solo te quedas atrás mientras el mundo avanza.' },
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
        content: 'Bitcoin no es teoría, está salvando vidas y fortunas ahora mismo:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela', text: 'Mientras el bolívar perdía 99.99% de su valor, los venezolanos que tenían Bitcoin preservaron su riqueza. Muchos pudieron emigrar llevando su dinero en una frase de 12 palabras memorizada, imposible de confiscar en la frontera.' },
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
          { icon: AlertTriangle, title: 'NO es "dinero de criminales"', text: 'Menos del 1% de transacciones de Bitcoin son ilícitas (vs 2-5% del sistema bancario tradicional). Y la blockchain es PÚBLICA, cada transacción queda registrada para siempre. Es el peor dinero posible para criminales.' },
          { icon: AlertTriangle, title: 'NO es "una burbuja"', text: 'Ha sido declarado "muerto" más de 450 veces desde 2010. Cada vez vuelve más fuerte. Las burbujas no sobreviven 15+ años, no son adoptadas por países como moneda legal, ni son compradas por fondos de inversión institucionales.' },
          { icon: AlertTriangle, title: 'NO necesitas comprar un Bitcoin entero', text: 'Bitcoin es divisible hasta 8 decimales. Puedes empezar con $10, $50, $100. Cada satoshi (0.00000001 BTC) es tuyo.' }
        ]
      },
      {
        type: 'main',
        title: '\u{1F9E0} Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas por qué Bitcoin es diferente al dinero que usas todos los días. ¿Qué problema resuelve que el peso o el dólar no pueden?' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Estudios científicos demuestran que explicar un concepto en tus propias palabras mejora la retención un 28% comparado con solo leerlo. No memorices, comprende.'
        }
      },
      {
        type: 'takeaways',
        title: 'Por Qué Bitcoin Importa Para TU Vida',
        items: [
          'Por primera vez en la historia, existe dinero que NINGÚN gobierno, banco o corporación puede devaluar, confiscar o censurar.',
          'No necesitas permiso de nadie para guardar y mover TU dinero. Tu banco puede cerrar. Tu gobierno puede colapsar. Tu Bitcoin sigue siendo tuyo.',
          'El halving reduce la emisión a la mitad cada 4 años. En abril 2024 fue el 4to halving. Cada vez hay menos Bitcoin nuevo, mientras la demanda crece.',
          'No es "inversión especulativa", es protección contra un sistema monetario diseñado para empobrecerte lentamente a través de la inflación.',
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
            { id: 'b', text: 'Porque el código garantiza matemáticamente que solo existirán 21 millones, verificado por miles de nodos, y nadie puede cambiar eso, a diferencia del dinero fiat que se imprime infinitamente' },
            { id: 'c', text: 'Porque Satoshi decidió ese número arbitrariamente y puede cambiarlo' },
            { id: 'd', text: 'Porque los mineros votan cada año sobre el límite' }
          ],
          correctAnswer: 'b',
          explanation: 'El límite de 21 millones está grabado en el código y verificado por más de 15,000 nodos globalmente. Cambiarlo requeriría que TODOS aceptaran, matemáticamente imposible. Es la primera vez que existe escasez absoluta en el mundo digital.'
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
            { id: 'c', text: 'Una frase semilla de 12 palabras memorizada que representa sus Bitcoin, imposible de confiscar porque existe solo en su mente' },
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
            { id: 'b', text: 'Porque está en fase de adopción temprana, como cualquier tecnología nueva, el precio fluctúa mientras el mercado descubre su valor real a largo plazo' },
            { id: 'c', text: 'Porque los creadores manipulan el precio' },
            { id: 'd', text: 'Porque no tiene valor real' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin está en fase de "price discovery". Como internet en los 90s, el mercado aún está descubriendo su valor real. La volatilidad es el precio de la adopción temprana. A largo plazo (5-10 años), la tendencia histórica ha sido consistentemente alcista.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 4,
        title: 'Checkpoint: ¿Por qué importa la escasez?',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Alguien crea "Bitcoin 2.0": idéntico a Bitcoin en todo excepto que el máximo es 42 millones en lugar de 21. ¿Cuál es el problema principal?',
            options: [
              '42 millones es demasiado, no habría suficiente minería',
              'La cantidad máxima no importa si está definida; sería igual de valioso',
              'Una vez que aceptas cambiar el máximo una vez, se puede cambiar de nuevo, pierde la credibilidad de escasez absoluta',
              'Sería igual de bueno porque igualmente está limitado'
            ],
            correctAnswer: 2,
            explanation: 'La clave no es el número, es la inmutabilidad del número. Bitcoin tiene 21M no porque 21M sea mágico, sino porque "nadie puede cambiarlo, ni siquiera Satoshi". Si existiera un Bitcoin 2.0, demostraría que el máximo es negociable, y por tanto no es verdaderamente escaso. La credibilidad del límite es lo que da valor, no el número.',
            hint: 'Piensa en qué hace que una promesa de escasez sea creíble.'
          }
        ]
      }
    ]
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
          text: 'Acabas de describir un sistema donde nadie puede mentir, nadie puede robar, y nadie puede censurar, porque TODOS tienen el mismo libro y TODOS pueden verificar. Eso es blockchain.'
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
          { icon: Zap, title: 'Ejemplo de Hash', text: 'Si escribes "Hola" y lo pasas por el algoritmo SHA-256 (el que usa Bitcoin), obtienes: "e633f4fc79badea1dc5db970cf397c8248bac47cc3acf9915ba60b5d76b0e88f". Ese código ES el hash de "Hola".' },
          { icon: AlertTriangle, title: 'Cambio Mínimo = Hash Totalmente Diferente', text: 'Si cambias "Hola" por "hola" (solo la mayúscula), el hash es completamente diferente: "b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79". Ni un solo carácter igual.' },
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
        content: 'Si miles de computadoras tienen el libro, ¿quién decide qué se escribe en la siguiente página? Aquí es donde entra el **mecanismo de consenso**, las reglas para que miles de desconocidos se pongan de acuerdo sin confiar entre sí.',
        features: [
          { icon: Cpu, title: 'Proof of Work (Bitcoin)', text: 'Los "mineros" compiten resolviendo un acertijo matemático extremadamente difícil. El primero en resolverlo gana el derecho de escribir el siguiente bloque (y recibir la recompensa). Esto requiere gastar electricidad real, es el "costo" de escribir en el libro.' },
          { icon: Lock, title: 'Proof of Stake (Solana, Ethereum)', text: 'En vez de gastar electricidad, los "validadores" ponen sus propias monedas como garantía. Si intentan hacer trampa, pierden su dinero. Es como un depósito de seguridad: "Apuesto mi dinero a que esta transacción es legítima".' },
          { icon: CheckCircle, title: 'El Resultado', text: 'Ambos sistemas logran lo mismo: un acuerdo entre desconocidos sin necesidad de confiar en nadie. Las reglas matemáticas reemplazan la confianza humana.' }
        ],
        highlight: {
          title: '¿Por Qué Importa?',
          text: 'Porque por primera vez en la historia, desconocidos pueden ponerse de acuerdo sobre la verdad sin necesitar un intermediario. Esto elimina la necesidad de bancos, notarios y gobiernos para validar transacciones.'
        }
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
          text: 'Satoshi diseñó un sistema donde el comportamiento honesto siempre es más rentable que el comportamiento deshonesto. Los incentivos económicos protegen la red, no la confianza en la buena voluntad de nadie.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Nodo?',
        content: 'Un **nodo** es simplemente una computadora que tiene una copia completa de la blockchain y verifica que todo esté correcto.',
        features: [
          { icon: Server, title: 'Full Node', text: 'Tiene toda la historia de la blockchain desde el bloque génesis. Verifica CADA transacción y CADA bloque. No confía en nadie más, verifica todo por sí mismo. Cualquiera puede correr un full node en su casa.' },
          { icon: Cpu, title: 'Nodo Minero/Validador', text: 'Además de verificar, también CREA nuevos bloques. Estos son los que compiten para agregar la siguiente página al libro. Reciben recompensas por su trabajo.' },
          { icon: Smartphone, title: 'Light Node', text: 'No tiene toda la blockchain, solo los headers de los bloques. Confía en otros nodos para verificaciones detalladas. Es lo que usa tu wallet móvil.' }
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
        type: 'glossary',
        terms: [
          {
            term: 'Smart Contract (Contrato Inteligente)',
            definition: 'Un programa que vive en la blockchain y se ejecuta automáticamente cuando se cumplen sus condiciones. No es un contrato legal, es código. "Si el usuario X envía 1 SOL al programa, el programa envía 100 USDC al usuario X". Una vez desplegado, nadie puede modificarlo ni detenerlo (ni siquiera quien lo creó). Ejecuta las reglas mecánicamente, sin jueces, abogados, ni intermediarios.',
            whyItMatters: 'Toda la infraestructura de DeFi (préstamos, swaps, staking, NFTs) son smart contracts. Entender esto es la diferencia entre "usar cripto" y "confiar en el código que la hace funcionar".'
          }
        ]
      },
      {
        type: 'main',
        title: 'El Trilema de la Blockchain',
        content: 'Vitalik Buterin (creador de Ethereum) describió el **trilema de la blockchain**: ninguna blockchain puede maximizar simultáneamente las tres propiedades:',
        features: [
          { icon: Shield, title: 'Seguridad', text: '¿Qué tan difícil es atacar la red? Bitcoin es extremadamente seguro, tiene 15 años sin un ataque exitoso.' },
          { icon: Network, title: 'Descentralización', text: '¿Cuántos nodos independientes mantienen la red? ¿Qué tan distribuido está el poder?' },
          { icon: Zap, title: 'Escalabilidad', text: '¿Cuántas transacciones por segundo puede procesar? ¿Qué tan barato es usarla?' }
        ],
        highlight: {
          title: 'Las Elecciones',
          text: 'Bitcoin maximiza seguridad y descentralización, sacrificando velocidad (~7 TPS). Solana maximiza escalabilidad y seguridad, requiriendo hardware más potente para los validadores (menos descentralizado). No hay solución perfecta, solo trade-offs.'
        }
      },
      {
        type: 'main',
        title: '\u{1F9E0} Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas cómo funciona una blockchain para que sea segura, sin usar las palabras \'hash\' o \'criptografía\'. Usa analogías.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Estudios científicos demuestran que explicar un concepto en tus propias palabras mejora la retención un 28% comparado con solo leerlo. No memorices, comprende.'
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
          'El ataque del 51% es teóricamente posible pero económicamente absurdo, es más rentable ser honesto.',
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
          explanation: 'La sensibilidad extrema del hash significa que cualquier manipulación, por pequeña que sea, es inmediatamente visible. Un solo bit cambiado produce un hash completamente diferente, alertando a toda la red.'
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
            { id: 'b', text: 'Que ninguna blockchain puede maximizar simultáneamente seguridad, descentralización y escalabilidad, debe sacrificar al menos una' },
            { id: 'c', text: 'Un tipo de ataque' },
            { id: 'd', text: 'Una criptomoneda nueva' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin elige seguridad y descentralización (lento, 7 TPS). Solana elige seguridad y escalabilidad (menos nodos, pero miles de TPS en producción). No hay blockchain perfecta, solo diferentes trade-offs para diferentes usos.'
        },
        {
          id: 'review_1',
          question: '📝 Repaso: ¿Cuál de las siguientes NO es una propiedad esencial del dinero sano?',
          options: [
            { id: 'a', text: 'Escasez' },
            { id: 'b', text: 'Divisibilidad' },
            { id: 'c', text: 'Emisión controlada por un gobierno' },
            { id: 'd', text: 'Portabilidad' }
          ],
          correctAnswer: 'c',
          explanation: 'El dinero sano no necesita un gobierno para funcionar. Bitcoin cumple todas las propiedades del dinero sin depender de ninguna autoridad central. (Recuerda la Lección 1: Historia del Dinero)'
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
    description: '¿Por qué importa que nadie tenga el control? La descentralización no es solo un buzzword técnico, es la diferencia entre libertad y permiso, entre propiedad real y acceso revocable. Entiende los trade-offs reales.',
    sections: [
      {
        type: 'intro',
        title: 'La Pregunta Fundamental: ¿Quién Tiene el Poder?',
        content: 'Cada sistema que usas para manejar tu dinero o tus datos tiene una arquitectura de poder. Alguien, en algún lugar, puede presionar un botón y cambiar las reglas. La pregunta es: **¿quién tiene ese botón?** En los sistemas tradicionales (tu banco, tu red social, tu gobierno), ese botón lo tiene una entidad central. Pueden congelar tu cuenta, censurar tu contenido, o cambiar las reglas sin tu permiso. En los sistemas descentralizados (Bitcoin, Solana), ese botón está distribuido entre miles de participantes. Nadie individualmente puede presionarlo. Esa distribución del poder es lo que llamamos **descentralización**.',
        highlight: {
          title: 'No es Teoría, Es Tu Realidad',
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
          text: 'En todos estos casos, TÚ eres un usuario con acceso REVOCABLE. Ellos son los dueños con control TOTAL. Tu relación con tu dinero/datos depende de su buena voluntad. No tienes derechos, tienes permisos.'
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
          { icon: AlertTriangle, title: 'PayPal (frecuente)', text: 'Congela cuentas por "actividad sospechosa" y retiene fondos durante meses. No hay recurso efectivo, estás a su merced.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Significa Realmente "Descentralizado"?',
        content: 'Un sistema descentralizado distribuye el poder entre muchos participantes independientes. Ninguno individualmente puede controlar el sistema o cambiar las reglas unilateralmente.',
        features: [
          { icon: Network, title: 'Miles de Nodos', text: 'Bitcoin tiene ~15,000 nodos en todo el mundo. Cada uno verifica independientemente TODAS las transacciones. Para "hackear" Bitcoin, necesitarías comprometer miles de computadoras en decenas de países simultáneamente.' },
          { icon: Users, title: 'Nadie es "El Jefe"', text: 'No hay CEO de Bitcoin. No hay sede central. No hay servidor principal. Satoshi desapareció hace años y la red sigue funcionando perfectamente. El sistema no depende de ninguna persona o empresa.' },
          { icon: Lock, title: 'Reglas Inmutables', text: 'Las reglas de Bitcoin (21 millones máximo, halving cada 4 años, etc.) están grabadas en el código que ejecutan TODOS los nodos. Cambiarlas requeriría que todos se pongan de acuerdo, algo que no pasa.' },
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
        content: 'La descentralización no es binaria, es un espectro. Diferentes proyectos hacen diferentes trade-offs:\n\n**¿Por qué debería importarte la descentralización?** Porque significa que NADIE puede congelar tu cuenta, censurar tus transacciones, o devaluar tus ahorros. Es la diferencia entre pedir permiso y ser libre.',
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
          text: '¿Estás dispuesto a aceptar estos trade-offs a cambio de propiedad real, resistencia a censura, y libertad de permiso? Para muchos, la respuesta es sí. Para otros, no. Ambas respuestas son válidas, lo importante es entender qué estás eligiendo.'
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
          { icon: CheckCircle, title: 'Wallet No-Custodial (Phantom, Ledger)', text: 'TÚ tienes las llaves. Nadie puede congelar tu wallet. Nadie puede confiscar tus fondos. Si Phantom (la empresa) desaparece mañana, tus fondos siguen ahí, solo necesitas otra wallet compatible.' }
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
            { id: 'b', text: 'Porque no hay entidad central que pueda ejecutar la orden, miles de nodos en 100+ países seguirían procesando transacciones' },
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
            { id: 'd', text: 'En cualquier exchange, todos son iguales' }
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
          explanation: 'FTX no era descentralizado, era un intermediario centralizado con el MISMO modelo de tu banco: ellos controlan las llaves, tú confías en ellos. La blockchain de Bitcoin siguió funcionando perfectamente. Los que perdieron fueron los que dejaron sus fondos en FTX en vez de en wallets propias.'
        },
        {
          id: 'q-review',
          question: 'Repaso del Efecto Cantillon (Lección 3): Un banco grande accede a crédito al 0.5%. Tú pagas 28% en tu tarjeta de crédito. Aplicando lo que aprendiste, ¿qué explica mejor esta diferencia?',
          options: [
            { id: 'a', text: 'Los bancos son más responsables' },
            { id: 'b', text: 'La proximidad a la fuente del dinero, estar "cerca de la impresora" te da acceso a crédito casi gratuito que puedes prestar a otros con márgenes enormes' },
            { id: 'c', text: 'Los bancos tienen mejor historial crediticio' },
            { id: 'd', text: 'Es pura casualidad y varía con el tiempo' }
          ],
          correctAnswer: 'b',
          explanation: 'El Efecto Cantillon no es solo sobre quién gana en una impresión específica, es sobre la estructura permanente del sistema. Los bancos centrales crean dinero que fluye primero a bancos comerciales. Esos bancos prestan ese dinero casi-gratuito a tu tarjeta al 28%. La diferencia es ganancia pura por estar "cerca de la impresora". Esta es la razón por la que los mismos actores ganan consistentemente década tras década.'
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
        content: 'En noviembre de 2022, FTX, el segundo exchange más grande del mundo, colapsó de la noche a la mañana. Millones de personas descubrieron que sus "ahorros" en cripto habían desaparecido. No era un hackeo. Era algo peor: **nunca fueron realmente dueños de su dinero**. Cuando compras Bitcoin en Binance, Coinbase o cualquier exchange, lo que tienes es una PROMESA de que ellos tienen tu cripto. Es como tener un recibo de un banco, si el banco quiebra, tu recibo no vale nada. Una **Wallet** cambia esto completamente. Con una wallet propia, TÚ controlas las llaves criptográficas. Nadie puede congelar tu cuenta. Nadie puede negar tu retiro. Nadie puede "prestarse" tu dinero sin permiso. Eres tu propio banco.',
        highlight: {
          title: 'La Lección de FTX',
          text: 'Más de $8 MIL MILLONES de dólares de clientes desaparecieron cuando FTX colapsó. Muchos perdieron los ahorros de toda su vida. ¿Los que tenían su cripto en wallets propias? No perdieron absolutamente nada. La autocustodia no es paranoia, es sentido común.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es Realmente una Wallet?',
        content: 'Aquí hay una confusión común: tu wallet NO "guarda" tus criptomonedas. Tus cripto siempre viven en la blockchain, nunca salen de ahí. Lo que tu wallet guarda son las **llaves privadas**: códigos criptográficos que DEMUESTRAN que eres el dueño de ciertos fondos y te permiten moverlos. Piénsalo así: la blockchain es como un libro contable público gigante que dice "la dirección ABC123 tiene 5 SOL". Tu wallet tiene la llave que demuestra que TÚ controlas la dirección ABC123.',
        features: [
          { icon: Lock, title: 'Llave Privada', text: 'Un código secreto que NUNCA debes compartir. Quien tenga tu llave privada controla tus fondos. Es como la combinación de una caja fuerte, pero para siempre y sin recuperación.' },
          { icon: Globe, title: 'Dirección Pública', text: 'Un código que puedes compartir libremente para recibir pagos. Es como tu número de cuenta bancaria, otros pueden enviarte dinero, pero no pueden sacar nada.' },
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
            'Dependes de su seguridad, si los hackean, pierdes',
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
            'Tu cripto es TUYO, nadie lo toca sin tu firma',
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
        type: 'main',
        title: '\u{1F9E0} Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas la diferencia entre una hot wallet y una cold wallet, y cuándo usarías cada una.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Estudios científicos demuestran que explicar un concepto en tus propias palabras mejora la retención un 28% comparado con solo leerlo. No memorices, comprende.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Una wallet no "guarda" cripto, guarda las LLAVES que prueban que eres dueño de fondos en la blockchain.',
          'Si no tienes las llaves, no tienes el cripto. Los exchanges son custodios, no bancos con seguro gubernamental.',
          'FTX, Mt. Gox, Celsius, BlockFi, Voyager, la lista de exchanges que colapsaron llevándose fondos de usuarios es LARGA y sigue creciendo.',
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
    description: 'El secreto más importante de tu vida financiera digital. Estas 12-24 palabras pueden valer millones o cero, todo depende de cómo las protejas.',
    sections: [
      {
        type: 'intro',
        title: '12 Palabras que Controlan Todo',
        content: 'Cuando creas una wallet, se genera algo extraordinario: una secuencia de 12 o 24 palabras en inglés aparentemente aleatorias. "apple river mountain dog...", parece un poema sin sentido, pero es la llave maestra de toda tu riqueza cripto. Estas palabras, llamadas **frase semilla** o **seed phrase**, son una representación legible de tu llave privada. A partir de ellas se derivan TODAS las direcciones y llaves de tu wallet. Quien tenga estas palabras tiene CONTROL TOTAL de tus fondos, puede vaciarlos en segundos desde cualquier parte del mundo. No necesita tu celular. No necesita tu contraseña. No necesita nada más.',
        highlight: {
          title: 'La Realidad Matemática',
          text: 'Una frase de 12 palabras tiene 2^128 combinaciones posibles. Es un número tan grande que si todas las computadoras del planeta intentaran adivinarlo, tardarían más tiempo que la edad del universo. Tu frase es prácticamente imposible de adivinar, pero trivial de robar si la expones.'
        }
      },
      {
        type: 'main',
        title: '¿Por Qué 12 Palabras en Vez de una Contraseña Normal?',
        content: 'Las contraseñas tradicionales tienen problemas: son difíciles de recordar, fáciles de hackear, y dependen de un servidor. La frase semilla resuelve todo esto:',
        features: [
          { icon: Lock, title: 'Estándar Universal (BIP-39)', text: 'Todas las wallets serias usan el mismo estándar de 2048 palabras en inglés. Tu frase de Phantom funciona en Ledger, MetaMask, Trust Wallet, o cualquier otra. No dependes de una empresa.' },
          { icon: Shield, title: 'Backup Perfecto', text: 'Si tu celular explota, tu computadora se incendia, o la empresa de tu wallet desaparece, tus fondos siguen existiendo en la blockchain. Con tu frase semilla, los recuperas en minutos desde cualquier dispositivo nuevo.' },
          { icon: Network, title: 'Genera Infinitas Direcciones', text: 'De una sola frase semilla se derivan matemáticamente miles de direcciones. Puedes tener direcciones para SOL, ETH, BTC, y más, todo desde las mismas 12 palabras.' }
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
        ],
        highlight: {
          title: '¿Por Qué Importa?',
          text: '12 palabras reemplazan a un banco entero. No necesitas sucursal, no necesitas aprobación, no necesitas confiar en nadie. Tu frase semilla es literalmente tu banco en el bolsillo.'
        }
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
          { icon: AlertTriangle, title: 'El Único Papel', text: 'Guardó su frase en un papel en casa. Hubo un incendio. El papel se quemó. $180,000 en Bitcoin perdidos para siempre, los fondos siguen en la blockchain, pero nadie puede accederlos nunca más.' }
        ]
      },
      {
        type: 'main',
        title: 'Anatomía de una Estafa de Seed Phrase',
        content: 'El 99% de los robos de cripto no son "hackeos sofisticados", son ingeniería social donde TÚ entregas tu frase. Así operan:',
        features: [
          { icon: AlertTriangle, title: 'El Falso Soporte Técnico', text: '"Hola, soy de Phantom Support. Detectamos actividad sospechosa en tu cuenta. Para proteger tus fondos, necesitamos verificar tu frase semilla." MENTIRA. Phantom NUNCA te contactará primero. NUNCA te pedirá tu frase. NADIE legítimo lo hará.' },
          { icon: AlertTriangle, title: 'El Sitio Falso', text: 'Buscas "Phantom wallet" en Google. El primer resultado es un anuncio de "phantomm-wallet.com" (con dos M). El sitio se ve idéntico. Te pide "importar wallet" y escribes tu frase. La roban en tiempo real.' },
          { icon: AlertTriangle, title: 'El Airdrop Gratis', text: '"Has sido seleccionado para recibir 500 SOL gratis. Conecta tu wallet y verifica tu seed phrase para reclamar." Nadie regala $50,000. Es estafa.' },
          { icon: AlertTriangle, title: 'El DM del Influencer', text: '"Hola, soy [YouTuber famoso]. Estoy haciendo un giveaway privado. Solo necesito verificar que eres holder real, envíame tu seed phrase." Los influencers reales NUNCA hacen esto.' }
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
        },
        {
          id: 'review_1',
          question: '📝 Repaso: ¿Cuál es la diferencia fundamental entre una hot wallet y una cold wallet?',
          options: [
            { id: 'a', text: 'El precio' },
            { id: 'b', text: 'La conexión a internet' },
            { id: 'c', text: 'El número de criptomonedas que soportan' },
            { id: 'd', text: 'La velocidad de transacción' }
          ],
          correctAnswer: 'b',
          explanation: 'La diferencia fundamental es que una hot wallet está conectada a internet (conveniente pero más vulnerable) y una cold wallet está desconectada (más segura para almacenamiento a largo plazo). (Recuerda la Lección 7: Wallets)'
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
        content: 'En el mundo de las wallets de Solana, Phantom se ha ganado la corona. No es solo una interfaz bonita, es una herramienta diseñada pensando en la seguridad Y la usabilidad. Millones de usuarios la usan diariamente, tiene el mejor historial de seguridad del ecosistema, y su equipo responde rápidamente ante cualquier vulnerabilidad. MetaMask domina Ethereum. Phantom domina Solana. Si estás empezando en cripto, Phantom es tu mejor aliado.',
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
          { icon: CheckCircle, title: 'Sitio Oficial', text: 'El ÚNICO sitio oficial es **phantom.app** (sin guiones, sin números, sin variaciones). Escríbelo tú mismo en la barra de direcciones. NO hagas clic en anuncios de Google, los estafadores compran ads para aparecer primero.' },
          { icon: CheckCircle, title: 'Extensión de Navegador', text: 'Ve a phantom.app → haz clic en "Download" → elige tu navegador. Te llevará a la Chrome Web Store, Firefox Add-ons, etc. Verifica que el desarrollador sea "Phantom Technologies Incorporated".' },
          { icon: CheckCircle, title: 'App Móvil', text: 'Descarga SOLO desde App Store (iOS) o Google Play (Android). Busca "Phantom" y verifica el desarrollador oficial. Hay apps falsas con nombres similares.' }
        ],
        highlight: {
          title: 'Lista de URLs Falsas Comunes',
          text: 'phantom-app.com, phantomwallet.io, phantom-wallet.app, phantomm.app, phantom.finance, TODAS son estafas. El sitio real es ÚNICAMENTE phantom.app. Guárdalo en favoritos después de verificar.'
        }
      },
      {
        type: 'main',
        title: 'Paso 2: Crear una Nueva Wallet',
        content: 'Una vez instalada la extensión o app, Phantom te dará dos opciones: crear una nueva wallet o importar una existente. Si es tu primera wallet, selecciona **"Create a new wallet"**.',
        features: [
          { icon: Lock, title: 'Contraseña de Desbloqueo', text: 'Phantom te pedirá crear una contraseña. Esta contraseña desbloquea la app en TU dispositivo, NO es tu seed phrase. Si olvidas esta contraseña, puedes reinstalar Phantom e importar tu wallet con la seed phrase.' },
          { icon: Shield, title: 'Generación de Seed Phrase', text: 'Phantom generará 12 palabras aleatorias. DETENTE AQUÍ. No hagas clic en "siguiente" hasta que hayas escrito estas palabras en PAPEL. No las copies al portapapeles. No las escribas en notas digitales.' },
          { icon: CheckCircle, title: 'Verificación', text: 'Phantom te pedirá confirmar algunas palabras para asegurar que las guardaste correctamente. Si fallas, vuelve a empezar. Este paso existe porque MILES de personas pierden fondos por errores de escritura.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 3: Entendiendo la Interfaz de Phantom',
        content: 'Ya tienes tu wallet creada. Ahora entiende qué estás viendo:',
        features: [
          { icon: Wallet, title: 'Tu Dirección Pública', text: 'En la parte superior verás algo como "ABC12...XYZ". Esta es tu dirección de Solana, como un número de cuenta. Puedes compartirla libremente para recibir pagos. Haz clic para copiarla.' },
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
          { icon: AlertTriangle, title: 'Lista Negra de Sitios', text: 'Phantom mantiene una base de datos de sitios de phishing conocidos. Si intentas conectarte a uno, te bloqueará o advertirá. NO significa que todos los sitios no-bloqueados son seguros, solo que los conocidos están marcados.' },
          { icon: Lock, title: 'Bloqueo Automático', text: 'La wallet se bloquea automáticamente después de cierto tiempo de inactividad. Puedes configurar este tiempo en Settings. Menor tiempo = más seguro pero menos conveniente.' },
          { icon: Smartphone, title: 'Biometría en Móvil', text: 'Activa Face ID o huella digital para desbloquear. Añade una capa extra de seguridad si alguien obtiene tu teléfono desbloqueado.' }
        ]
      },
      {
        type: 'main',
        title: 'Conectar vs Aprobar: La Diferencia Crítica',
        content: 'Muchos usuarios nuevos no entienden la diferencia entre "conectar" una wallet y "aprobar" una transacción. Esta confusión puede costarte caro:',
        features: [
          { icon: Link, title: 'Conectar Wallet', text: 'Cuando un sitio pide "Connect Wallet", solo le estás dando permiso para VER tu dirección pública y balance. Es como mostrar tu número de cuenta, pueden ver, pero NO pueden sacar dinero. Es relativamente seguro.' },
          { icon: AlertTriangle, title: 'Aprobar Transacción', text: 'Después de conectar, si el sitio quiere hacer algo con tus fondos (swap, mint, transfer), Phantom te pedirá APROBAR la transacción específica. AQUÍ es donde debes prestar atención. Lee qué estás firmando.' },
          { icon: Shield, title: 'La Regla de Oro', text: 'Antes de aprobar, pregúntate: "¿Esto tiene sentido para lo que estoy intentando hacer?" Si estás haciendo un swap de $100 y la transacción dice "Aprobar acceso ilimitado a todos tus tokens", RECHAZA. Algo está mal.' }
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
          explanation: 'Capturas de pantalla se sincronizan a la nube. El portapapeles puede ser leído por malware. Solo PAPEL físico es seguro. Y debes hacerlo ANTES de continuar, después no podrás ver la frase de nuevo en Phantom.'
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
          explanation: 'Conectar wallet es relativamente seguro, solo comparte información pública (como mostrar tu número de cuenta). El peligro real viene cuando te piden APROBAR transacciones después de conectar. Siempre lee qué estás firmando.'
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
          explanation: 'Si olvidas tu contraseña de Phantom, reinstala la app e importa tu wallet con la seed phrase. Si pierdes tu seed phrase, pierdes TODO para siempre, sin importar qué contraseña tengas. La seed phrase es infinitamente más importante.'
        },
        {
          id: 'q-review',
          question: 'Repaso de Blockchain (Lección 5): Tu amigo te dice: "Mi banco me devolvió $200 que un hacker robó de mi cuenta." Luego pregunta: "¿Phantom puede hacer lo mismo si me roban cripto?" ¿Qué le respondes?',
          options: [
            { id: 'a', text: 'Sí, Phantom tiene un servicio al cliente que puede revertir transacciones' },
            { id: 'b', text: 'No. En blockchain no hay autoridad central que pueda revertir transacciones, esa es precisamente la característica que la hace descentralizada. TÚ eres tu propio banco, lo que significa que TÚ eres responsable de tu seguridad. Una transacción firmada es irreversible' },
            { id: 'c', text: 'Depende de cuánto dinero sea' },
            { id: 'd', text: 'Solo si reporta rápidamente' }
          ],
          correctAnswer: 'b',
          explanation: 'Esta es la otra cara de la autocustodia que aprendiste en la Lección 5: nadie puede confiscar tus fondos, pero nadie puede recuperarlos si los pierdes. El banco tradicional devuelve el dinero porque es un intermediario centralizado, puede revertir decisiones. La blockchain no tiene esa autoridad. Por eso la educación en seguridad (frase semilla, evitar estafas) no es opcional, es la infraestructura mínima de sobrevivencia en cripto.'
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
    description: 'Por qué enseñamos Solana primero. Velocidad, costos, y la mejor experiencia de usuario en crypto, todo lo que necesitas saber para entender el debate L1.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Existe Esta "Guerra"?',
        content: 'Ethereum fue la primera blockchain programable. Inventó los smart contracts, DeFi, NFTs, todo lo que hoy conocemos como Web3 nació ahí. Es el "abuelo respetado" del espacio. Pero tiene un problema fundamental: **no escala para uso masivo**. Cuando mucha gente quiere usarlo, se congestiona. Los fees suben a $50, $100, incluso $500 por transacción en momentos de alta demanda. Para una persona en Latinoamérica que quiere probar DeFi con $100, esto es prohibitivo. Solana nació en 2020 con una pregunta: ¿y si construimos una blockchain desde cero, optimizada para velocidad y bajo costo? El resultado es una red donde las transacciones cuestan menos de un centavo y se confirman en menos de un segundo.',
        highlight: {
          title: 'La Metáfora',
          text: 'Ethereum es como un Mercedes clásico de 1990: revolucionario en su época, confiable, prestigioso, pero lento y caro de mantener. Solana es como un Tesla: diseñado para el mundo moderno, rápido, eficiente, y construido pensando en el futuro.'
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
        type: 'glossary',
        terms: [
          {
            term: 'Gas',
            definition: 'Es el "combustible" que pagas para que una blockchain procese tu transacción. Cada operación (enviar, hacer un swap, interactuar con un protocolo) requiere que los validadores hagan trabajo computacional, y el gas paga ese trabajo. En Ethereum, el gas sube cuando la red está congestionada, por eso los fees varían de $2 a $500. En Solana, el gas es casi constante (~$0.0002) porque la red está diseñada para procesar miles de transacciones por segundo.',
            whyItMatters: 'El costo de gas determina si la blockchain es usable para personas normales. En Ethereum L1, gas de $30 hace inviable cualquier operación menor a $500. En Solana, no tienes que pensarlo.'
          }
        ]
      },
      {
        type: 'main',
        title: 'El Ecosistema de Solana: Las Apps que Usarás',
        content: 'La tecnología importa, pero lo que realmente usarás son las aplicaciones. Solana tiene las mejores:',
        features: [
          { icon: Zap, title: 'Jupiter', text: 'El mejor agregador DEX del mundo. Te encuentra el mejor precio entre todos los exchanges descentralizados. Tiene DCA (compra automática), órdenes límite, y perpetuos. Es el "Uniswap de Solana" pero con superpoderes.' },
          { icon: Wallet, title: 'Phantom', text: 'Ya la conoces. La wallet más usada de Solana. Pero vale repetir: la experiencia de Phantom vs MetaMask es día y noche. MetaMask se siente como software de 2017.' },
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
          { icon: AlertTriangle, title: 'Outages Históricos', text: 'Solana tuvo varios "apagones" en 2022-2023 donde la red se detuvo. Esto generó dudas sobre su estabilidad. Sin embargo, las mejoras técnicas y el desarrollo de clientes validadores independientes (Firedancer) han mejorado significativamente la resiliencia de la red.' },
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
          'Esto no significa que Ethereum sea "malo", pero sí que Solana es mejor para empezar y para uso diario.',
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
            { id: 'b', text: 'El mejor agregador DEX, te encuentra el mejor precio entre todos los exchanges, con DCA y órdenes límite incluidos' },
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
        },
        {
          id: 'review_1',
          question: '📝 Repaso: ¿Por qué es prácticamente imposible alterar una transacción pasada en una blockchain?',
          options: [
            { id: 'a', text: 'Porque los mineros lo impedirían físicamente' },
            { id: 'b', text: 'Porque cada bloque contiene el hash del bloque anterior, creando una cadena inalterable' },
            { id: 'c', text: 'Porque Satoshi protege la red personalmente' },
            { id: 'd', text: 'Porque las transacciones se borran después de confirmarse' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada bloque está matemáticamente encadenado al anterior mediante hashes. Alterar un bloque requeriría recalcular todos los hashes siguientes, lo cual es computacionalmente imposible en la práctica. (Recuerda la Lección 5: Blockchain)'
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
        content: 'Ya tienes tu wallet Phantom lista. Ahora necesitas llenarla. El problema: tu banco no te vende SOL directamente. Necesitas un intermediario, un **Exchange Centralizado (CEX)**, que acepte tu dinero tradicional (fiat) y te dé criptomonedas a cambio. Piensa en el exchange como una casa de cambio: entras con pesos colombianos, sales con dólares... pero en este caso, entras con pesos y sales con SOL. La diferencia clave: los exchanges también custodian tu cripto mientras está ahí. Por eso, una vez que compras, debes **retirar a tu wallet propia**.',
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
        content: 'Hay un antes y un después de tu primera transacción cripto. Cuando envías valor a alguien del otro lado del mundo, en segundos, sin pedir permiso a nadie, y pagando menos de un centavo, algo hace "clic" en tu cabeza. Entiendes visceralmente por qué esto es revolucionario. Ya tienes SOL en tu Phantom. Ahora vamos a moverlo. Puedes enviar a un amigo, a una segunda wallet tuya, o incluso hacer un swap. Lo importante es que experimentes el proceso completo.',
        highlight: {
          title: 'Lo Que Estás a Punto de Experimentar',
          text: 'En el sistema bancario, una transferencia internacional tarda 3-5 días y cuesta $25-50. En Solana, tarda menos de 1 segundo y cuesta menos de $0.001. Misma función, 1000x más eficiente. Esto no es exageración, es la realidad que vas a vivir en los próximos 2 minutos.'
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
          { icon: CheckCircle, title: 'Paso 5: Confirma y Observa', text: 'Revisa el resumen, confirma. En 1-2 segundos verás "Confirmed". Pide a tu amigo que revise, ya debería ver los fondos.' }
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
          { icon: Globe, title: 'Cualquiera Puede Enviarte', text: 'No necesitas "aceptar" transacciones. Si alguien tiene tu dirección, puede enviarte tokens. Por eso a veces recibirás tokens spam/estafa, ignóralos.' },
          { icon: CheckCircle, title: 'Verifica en Phantom', text: 'Los fondos aparecen automáticamente en tu balance segundos después de que la transacción se confirma. No necesitas "reclamar" nada.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Acabas de Lograr',
        items: [
          'Enviaste valor a través del mundo sin pedir permiso a ningún banco, gobierno, o intermediario.',
          'Pagaste menos de $0.001 en fees, comparado con $25-50 en el sistema tradicional.',
          'La transacción tardó ~1 segundo, comparado con 3-5 días bancarios.',
          'Quedó grabada permanentemente en la blockchain, verificable por cualquiera, para siempre.',
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
    description: '"Don\'t Trust, Verify", La filosofía central de cripto. Aprende a usar la herramienta que te permite verificar cualquier cosa en la blockchain.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué es un Explorador de Bloques?',
        content: 'La blockchain es un libro contable público. Cada transacción, cada balance, cada contrato, todo está ahí, visible para quien quiera verlo. Pero leer datos crudos de blockchain es imposible para humanos normales. Un **explorador de bloques** es una herramienta que traduce esos datos a formato legible. Para Solana, el explorador más usado es **Solscan.io**. Piénsalo como el "Google de Solana", puedes buscar cualquier dirección, cualquier transacción, cualquier token, y ver toda su historia.',
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
          { icon: Search, title: 'Paso 1: Obtén el TX Signature', text: 'En Phantom, después de enviar, haz clic en la transacción en tu historial. Verás un "Signature" o "TX ID", una cadena larga de letras y números. Cópialo.' },
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
          { icon: Users, title: 'Pide la Dirección Pública', text: 'La otra persona te da su dirección de Solana. Esto es público y seguro de compartir, solo pueden ver, no sacar fondos.' },
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
          'Cualquier wallet es pública, puedes ver balance e historial de cualquier dirección.',
          'SIEMPRE verifica el Contract Address de tokens para evitar comprar falsificaciones.',
          'Antes de trades P2P, verifica que la contraparte realmente tenga los fondos que dice.',
          '"Don\'t Trust, Verify" no es paranoia, es el estándar profesional en cripto.'
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
            { id: 'b', text: 'La transacción falló, los fondos NO se movieron y probablemente volvieron a la wallet origen' },
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
        content: 'Aquí no hay bancos que reviertan transacciones fraudulentas. No hay seguro de depósito. No hay policía cripto que recupere tus fondos. Si te roban, perdiste, punto. Pero aquí está la buena noticia: el 99% de las estafas siguen los mismos patrones. Una vez que los conoces, son fáciles de detectar. Esta lección podría ser la más valiosa del curso, literalmente puede salvarte miles de dólares.',
        highlight: {
          title: 'Estadística Real',
          text: 'En 2023, los usuarios perdieron más de $2 MIL MILLONES en estafas cripto, no hackeos sofisticados, sino ingeniería social donde las VÍCTIMAS entregaron sus llaves voluntariamente. Los estafadores no necesitan ser hackers genios. Solo necesitan que bajes la guardia una vez.'
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
          { icon: Shield, title: 'Las Defensas', text: 'Lee lo que firmas en Phantom, te muestra simulación de lo que pasará. Si dice "Approve unlimited access to all tokens", RECHAZA. Si el sitio no es 100% confiable, no conectes.' },
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
        type: 'main',
        title: 'Tu Privacidad en la Blockchain',
        content: 'Toda transacción en blockchain es pública para siempre. Esto es bueno para la transparencia, pero terrible para tu privacidad si no tomas precauciones. Cuando alguien conoce tu dirección de wallet, puede ver CADA transacción que has hecho, tu balance actual, y con quién interactúas. Aquí tienes lo que necesitas saber para proteger tu información personal:',
        features: [
          { icon: Eye, title: 'Transacciones Públicas por Defecto', text: 'Cada swap, envío, compra de NFT y aprobación de contrato queda registrada para siempre en la blockchain. Cualquiera puede ir a Solscan, pegar tu dirección, y ver tu historial completo. Cuánto tienes, cuánto ganaste, a quién le enviaste, y qué protocolos usas. No hay "modo incógnito" en la blockchain.' },
          { icon: Users, title: 'KYC Vincula tu Identidad', text: 'Cuando usas un exchange centralizado (Binance, Coinbase) con verificación de identidad (KYC), tu wallet queda vinculada a tu nombre real. Si envías desde el exchange a tu wallet personal, ahora esa wallet también está asociada a ti. Los exchanges comparten datos con gobiernos cuando lo solicitan. Tu "anonimato" cripto termina en el momento que haces KYC.' },
          { icon: Wallet, title: 'Separa tus Wallets', text: 'Usa wallets diferentes para diferentes propósitos: una wallet principal para ahorros a largo plazo (mínima actividad), una wallet operativa para DeFi y experimentación, y una wallet burner para probar dApps nuevas o riesgosas. Nunca envíes directamente desde un exchange KYC a tu wallet principal de ahorro, usa una wallet intermedia.' },
          { icon: Shield, title: 'Prácticas Básicas de Privacidad', text: 'No publiques tu dirección de wallet en redes sociales. No uses ENS/SNS domains vinculados a tu identidad real para wallets con fondos importantes. No compartas capturas de pantalla que muestren tu balance o dirección. Y recuerda: en Web3, tu wallet ES tu identidad financiera, protégela como proteges tu número de cuenta bancaria.' }
        ],
        highlight: {
          title: 'Recuerda',
          text: 'La blockchain es transparente por diseño. Eso la hace confiable, pero también significa que la privacidad es TU responsabilidad. Con prácticas básicas de separación de wallets y consciencia sobre el rastro que dejas, puedes disfrutar de los beneficios de Web3 sin exponer toda tu vida financiera.'
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
  39: {
    id: 39,
    title: 'Gasta tus Cripto',
    level: 'Principiante',
    number: '16 de 19',
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
        content: 'Aprendiste a comprar cripto. Aprendiste a guardarlo de forma segura. Aprendiste a moverlo. Ahora viene la pregunta final: ¿cómo lo USAS en el mundo real? La respuesta tradicional era: "vende en un exchange, retira a tu banco, y gasta el fiat". Pero esto tiene problemas: fees de venta, tiempos de espera, límites bancarios, y preguntas incómodas de tu banco sobre "de dónde viene ese dinero". Las **tarjetas cripto** eliminan todo eso. Cargas tu tarjeta con USDC o stablecoins, y la usas como cualquier Visa/Mastercard. Amazon, Netflix, gasolina, supermercado, funciona en cualquier lugar.',
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
          'Funcionan como Visa/Mastercard normales, aceptadas en millones de comercios mundialmente.',
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
          explanation: 'Las tarjetas cripto actúan como puente: tú les cargas cripto, ellas pagan al comercio en fiat. Amazon nunca sabe que usaste cripto, reciben pesos/dólares normales de una tarjeta Visa/Mastercard.'
        },
        {
          id: 'q2',
          question: 'Tienes 5 SOL (valor actual $750). ¿Por qué NO es recomendable gastar SOL directamente?',
          options: [
            { id: 'a', text: 'SOL es muy lento para pagos' },
            { id: 'b', text: 'SOL es volátil, si gastas 1 SOL hoy y mañana vale el doble, efectivamente pagaste el doble por tu compra. Es mejor gastar stablecoins y guardar SOL como inversión.' },
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
          explanation: 'Retirar a banco puede tomar días, generar preguntas de compliance bancario, y tiene límites. Las tarjetas cripto eliminan al banco como intermediario, cargas y gastas en minutos.'
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
          explanation: 'Separar "dinero de inversión" (SOL) de "dinero de gasto" (USDC) es la estrategia profesional. Nunca gastas tu inversión directamente, solo conviertes lo necesario para gastos puntuales.'
        }
      ]
    }
  },
  41: {
    id: 41,
    title: 'Stablecoins: Tu Dólar Digital',
    level: 'Principiante',
    number: '15 de 19',
    duration: '22 minutos',
    type: 'Concepto Clave',
    description: 'Las stablecoins son la herramienta cripto más usada en Latinoamérica, pero la mayoría no entiende qué las respalda, ni los riesgos que esconden. Esta lección puede ahorrarte un desastre financiero.',
    sections: [
      {
        type: 'intro',
        title: 'El Dólar que Vive en la Blockchain',
        content: 'Tienes SOL, BTC, ETH... pero necesitas pagar el arriendo. El precio de tus criptos puede caer 30% mañana. ¿Cómo proteges tu dinero sin salir del ecosistema cripto? La respuesta son las **stablecoins**: tokens diseñados para mantener un valor estable, generalmente anclados 1:1 al dólar estadounidense. 1 USDC = 1 dólar. 1 USDT = 1 dólar. Siempre. Esa es la promesa. En Latinoamérica, las stablecoins se han convertido en algo más que una herramienta de trading. Son la forma más accesible de **dolarizarse** sin necesidad de una cuenta bancaria en Estados Unidos, sin límites de compra de dólares, y sin intermediarios que te cobren spreads abusivos. Un argentino con cepo cambiario, un venezolano con el bolívar destruido, un colombiano que quiere proteger sus pesos, todos usan stablecoins como su cuenta de ahorro en dólares.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'Latinoamérica es la región que más usa stablecoins per cápita en el mundo. No para especular, para SOBREVIVIR. Cuando tu moneda local pierde valor cada semana, tener dólares digitales en tu wallet no es un lujo, es una necesidad.'
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
          { icon: Globe, title: 'USDT (Tether)', text: 'El más usado del mundo por volumen. Emitido por Tether Limited (Hong Kong). Historial de controversias sobre la composición real de sus reservas, durante años se negaron a hacer auditorías completas. Han mejorado su transparencia, pero la confianza del mercado es menor que en USDC. La ventaja: tiene más liquidez y está en más exchanges y redes.' },
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
        type: 'main',
        title: 'Remesas con Stablecoins: Envía Dinero Sin Fronteras',
        content: 'Latinoamérica recibe más de $150 mil millones al año en remesas, dinero que trabajadores en USA, España y otros países envían a sus familias. Los servicios tradicionales como Western Union o MoneyGram cobran entre $25 y $50 por envío, más un spread cambiario desfavorable. Las stablecoins eliminan casi todo ese costo. Enviar $500 de USA a Colombia cuesta menos de **$0.01** en comisión de red usando Solana, y llega en segundos, no en 3-5 días hábiles.',
        features: [
          { icon: Banknote, title: 'Comparación de Costos', text: 'Enviar $500 con Western Union: $25-50 de comisión + 2-4% de spread cambiario = pierdes $35-70. Enviar $500 en USDC por Solana: $0.001 de fee de red. Eso es un ahorro de $35-70 por envío. Si tu familia recibe remesas mensuales, son $420-840 al año que SE QUEDAN en tu bolsillo en vez de pagárselo a intermediarios.' },
          { icon: Zap, title: 'Paso a Paso: Enviar Remesa con USDC', text: '1) El trabajador en USA compra USDC en un exchange (Coinbase, Kraken) o P2P. 2) Envía USDC a la wallet de Solana del familiar en LATAM (fee: $0.001, tiempo: ~2 segundos). 3) El familiar convierte USDC a moneda local usando un exchange local o plataforma P2P. 4) Retira a su cuenta bancaria o billetera digital. Todo el proceso puede completarse en minutos.' },
          { icon: Globe, title: 'Plataformas LATAM para Convertir', text: 'En Colombia: Bitso, Binance P2P, o CopperX permiten vender USDC por pesos colombianos. En México: Bitso es la plataforma líder para convertir USDC a MXN con retiro bancario. En Argentina: plataformas P2P como Binance P2P o Lemon Cash permiten vender USDC al precio del dólar blue. En Venezuela: Binance P2P es la opción más usada. Investiga las opciones disponibles en tu país.' },
          { icon: AlertTriangle, title: 'Consideraciones Importantes', text: 'La persona que recibe necesita saber usar una wallet cripto o tener una cuenta en un exchange local. La conversión a moneda local puede tener un pequeño spread en la plataforma P2P (1-3%), pero sigue siendo mucho menor que Western Union. Algunos países pueden tener regulaciones sobre la recepción de criptoactivos, infórmate sobre las reglas locales.' }
        ],
        highlight: {
          title: 'El Impacto Real',
          text: 'Para una familia que recibe $500 mensuales en remesas, cambiar de Western Union a stablecoins puede significar $500-800 extra al año. Ese dinero es un mes adicional de gastos, útiles escolares, o medicinas. Las stablecoins no son solo tecnología, son una herramienta de justicia económica para millones de familias latinoamericanas.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Las stablecoins son tokens anclados al dólar. Las principales son USDC (más transparente) y USDT (más líquida).',
          'Ambas dependen de empresas centralizadas, NO son descentralizadas como Bitcoin. Eso es un riesgo real.',
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
            { id: 'a', text: 'Magia del blockchain, todas funcionan igual' },
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
          explanation: 'Diversificación aplica también a stablecoins. Si USDC tiene un problema (como el incidente de SVB), tener parte en USDT te protege, y viceversa. Y siempre en tu propia wallet, la lección de FTX aplica para todo.'
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
        content: '¿Cuándo es el mejor momento para comprar Bitcoin? La respuesta honesta es: **nadie lo sabe**. Ni los analistas, ni los traders con 20 años de experiencia, ni los "gurús" de Twitter que aciertan una vez y te lo recuerdan por siempre (y olvidan las 50 veces que se equivocaron). Pero hay una estrategia que elimina el problema por completo: **Dollar Cost Averaging (DCA)**, o en español, inversión periódica. La idea es tan simple que parece tonta: compras una cantidad fija de cripto en intervalos regulares, sin importar el precio. $50 cada semana. $200 cada mes. Lo que puedas. Llueva o truene. Sin mirar gráficos. Sin intentar predecir nada. El resultado? Históricamente, DCA ha superado a la mayoría de inversores que intentan "comprar barato y vender caro". Porque el enemigo real no es el mercado, son tus emociones.',
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
          text: 'Un análisis de todos los períodos de 4 años en la historia de Bitcoin muestra que DCA ha generado retorno positivo en el 100% de los casos. Timing el mercado correctamente es casi imposible, pero DCA ha funcionado SIEMPRE para quien mantuvo la disciplina.'
        }
      },
      {
        type: 'main',
        title: 'El Verdadero Enemigo: Tus Emociones',
        content: 'La razón por la que DCA es tan poderoso no es solo la matemática, es que **neutraliza tus emociones**, que son el mayor destructor de riqueza:',
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
          'La ventaja principal no es solo matemática, es emocional. Elimina el FOMO, el pánico, y la parálisis de análisis.',
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
            { id: 'c', text: 'Compro mis $50 normales, ahora mi dinero compra más BTC que antes. Las caídas son descuento para mi DCA' },
            { id: 'd', text: 'Meto todos mis ahorros porque está barato' }
          ],
          correctAnswer: 'c',
          explanation: 'DCA es disciplina, no emoción. Cuando el precio cae, tus $50 compran MÁS cripto. Eso baja tu precio promedio. Parar durante caídas es el error más común, te pierdes las mejores oportunidades de acumulación.'
        },
        {
          id: 'q2',
          question: '¿Por qué DCA históricamente supera a la mayoría de personas que intentan "comprar barato y vender caro"?',
          options: [
            { id: 'a', text: 'Porque el mercado siempre sube' },
            { id: 'b', text: 'Porque es imposible predecir consistentemente los puntos altos y bajos, y las emociones (FOMO, pánico) hacen que la mayoría compre caro y venda barato, exactamente lo opuesto' },
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
          explanation: 'Nunca inviertas dinero que puedas necesitar pronto. De los $400 sobrantes, necesitas margen para emergencias, gastos variables, y calidad de vida. $100-200 es un DCA sostenible que puedes mantener durante años, que es lo que importa.'
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
          explanation: 'La automatización es la mejor defensa contra ti mismo. Si el DCA corre solo, no puedes sabotearlo con decisiones emocionales. Es como un débito automático de ahorro, lo configuras una vez y la disciplina está garantizada.'
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
        },
        {
          id: 'q-review',
          question: 'Repaso de Seguridad Web3 (Lección 38): Alguien en Discord te dice: "¡Oportunidad única! Este token va a explotar en las próximas 2 horas, tengo información privilegiada. Solo quedan 50 cupos." ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro rápido antes de que se acabe el cupo' },
            { id: 'b', text: 'Identifico 3 red flags: urgencia artificial ("2 horas", "50 cupos"), promesa de retornos garantizados ("va a explotar"), e "información privilegiada". Lo ignoro, lo reporto, y NUNCA comparto wallet ni fondos por mensajes directos' },
            { id: 'c', text: 'Investigo el token pero sin invertir mucho' },
            { id: 'd', text: 'Pregunto a otros en el Discord si es legítimo' }
          ],
          correctAnswer: 'b',
          explanation: 'Aprendiste en la Lección 38 que las estafas Web3 siguen patrones predecibles: urgencia, promesas garantizadas, e información "privilegiada" son las tres más comunes. DCA (esta lección) es la defensa estructural contra estas tácticas, si tu estrategia es "invertir X semanalmente en activos que ya conoces", no hay espacio mental para "oportunidades únicas de 2 horas". La disciplina del DCA es inmune al FOMO.'
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
        content: 'Bitcoin tiene un propósito claro y único: ser el **oro digital**, la reserva de valor más segura y resistente a la censura del mundo. No intenta hacer todo. Intencionalmente, es lento y "limitado" en funcionalidades porque su prioridad es la **seguridad y descentralización** absolutas.',
        features: [
          { icon: Lock, title: 'Escasez Absoluta', text: '21 millones máximo. Nunca habrá más. Ninguna otra criptomoneda tiene esta garantía tan fuerte. La política monetaria de Bitcoin es inmutable, ni siquiera los desarrolladores pueden cambiarla.' },
          { icon: Shield, title: 'Máxima Descentralización', text: 'Miles de nodos en 100+ países. Ninguna persona, empresa o gobierno controla Bitcoin. Es la red más descentralizada y resistente a la censura del mundo. 15 años sin caídas.' },
          { icon: Clock, title: 'Track Record', text: 'Desde 2009, Bitcoin ha sobrevivido prohibiciones, hackeos de exchanges, crisis financieras, y declaraciones de "muerte" más de 450 veces. Sigue más fuerte que nunca. Ninguna otra cripto tiene este historial.' },
          { icon: Landmark, title: 'Adopción Institucional', text: 'ETFs de Bitcoin aprobados, MicroStrategy con $15+ mil millones en BTC, fondos de pensiones comprando. El Salvador fue pionero al adoptarlo como moneda legal en 2021, aunque revirtió ese estatus a uso voluntario en 2025. Las instituciones confían en Bitcoin de una forma que no confían en ninguna altcoin.' }
        ]
      },
      {
        type: 'main',
        title: 'Ethereum y Solana: Las Plataformas de Utilidad',
        content: 'Si Bitcoin es oro digital, ETH y SOL son más como **sistemas operativos**: plataformas donde se construyen aplicaciones. No compiten directamente con Bitcoin, resuelven problemas diferentes.',
        features: [
          { icon: Layers, title: 'Ethereum (ETH)', text: 'La primera y más grande plataforma de contratos inteligentes. DeFi, NFTs, stablecoins, la mayoría nació aquí. Tiene el ecosistema más maduro y la mayor cantidad de desarrolladores. Pero es lento (~15 TPS) y caro (fees de $1-50+). Piénsalo como Windows: dominante, probado, pero pesado.' },
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
          { icon: Landmark, title: 'Stablecoins (USDC, USDT)', text: 'Ya las conoces de la lección anterior. Ancladas al dólar. No son inversión, son herramienta de ahorro y operación. Esenciales para tu estrategia.' },
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
            '21 millones, escasez absoluta',
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
        content: 'No existe un portafolio "perfecto", depende de tu tolerancia al riesgo y tu horizonte de tiempo. Pero estos son marcos de referencia probados:',
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
          explanation: 'Bitcoin optimiza para seguridad y escasez (oro digital). Solana optimiza para velocidad y aplicaciones (plataforma). No compiten directamente, son complementarias. Por eso un portafolio puede tener ambas.'
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
          explanation: 'Las meme coins no tienen utilidad real, su valor depende 100% de la especulación y el hype. Los influencers frecuentemente reciben tokens gratis para promoverlos y venden cuando el precio sube con las compras de sus seguidores. Tu portafolio debería basarse en BTC/ETH/SOL, no en apuestas.'
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
            { id: 'a', text: 'Deberías, Bitcoin es lo único que importa' },
            { id: 'b', text: 'Bitcoin no permite DeFi, staking ni aplicaciones. ETH y SOL dan acceso a herramientas financieras que pueden generar rendimiento adicional sobre tu capital. Un portafolio diversificado balancea seguridad (BTC) con crecimiento (ETH/SOL)' },
            { id: 'c', text: 'Porque SOL va a superar a Bitcoin en precio' },
            { id: 'd', text: 'Solo por diversificar, no hay otra razón' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin es tu ancla de seguridad y escasez. Pero ETH/SOL te dan acceso a DeFi, staking (ganas rendimiento), y un ecosistema en crecimiento. La combinación ideal es: BTC para preservar riqueza, ETH/SOL para hacerla crecer activamente.'
        },
        {
          id: 'review_1',
          question: '📝 Repaso: ¿Cuál es el principal riesgo de las stablecoins algorítmicas comparadas con las respaldadas por dólares reales?',
          options: [
            { id: 'a', text: 'Son más lentas' },
            { id: 'b', text: 'Cuestan más fees' },
            { id: 'c', text: 'Pueden perder su paridad con el dólar si el mecanismo falla (como UST/LUNA)' },
            { id: 'd', text: 'Solo funcionan en Ethereum' }
          ],
          correctAnswer: 'c',
          explanation: 'Las stablecoins algorítmicas mantienen su paridad mediante mecanismos matemáticos, no respaldo real. Cuando estos mecanismos fallan (como el colapso de UST/LUNA en 2022), pueden perder todo su valor. USDC y USDT están respaldadas por activos reales. (Recuerda la Lección 41: Stablecoins)'
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
          text: 'El conocimiento sin acción no vale nada. Después de esta lección, deberías tener un plan escrito con montos, fechas, y reglas claras. No un "algún día voy a invertir", un PLAN concreto que ejecutas esta semana.'
        }
      },
      {
        type: 'main',
        title: 'Paso 1: Define tu Situación Financiera',
        content: 'Antes de invertir un solo peso en cripto, necesitas claridad brutal sobre tu realidad financiera. Sin esto, cualquier inversión es una apuesta irresponsable:',
        features: [
          { icon: PiggyBank, title: 'Fondo de Emergencia Primero', text: 'Antes de cripto, necesitas 3-6 meses de gastos en ahorros líquidos (efectivo o cuenta bancaria). Si mañana te quedas sin empleo, ¿puedes sobrevivir 3 meses? Si la respuesta es no, tu prioridad es ahorrar, no invertir. Cripto es volátil, no puede ser tu salvavidas.' },
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
          { icon: Banknote, title: 'Elige tu Monto', text: 'Un monto que puedas mantener MÍNIMO 2 años sin sacrificar tu calidad de vida. $25/semana ($100/mes) es un punto de partida excelente. $50/semana ($200/mes) es agresivo pero viable con ingresos medios. Empieza pequeño, siempre puedes aumentar.' },
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
          { icon: CheckCircle, title: 'Meta a 1 Año', text: '¿Cuánto quieres tener invertido en 12 meses? No en ganancias (eso no lo controlas), en capital invertido. Si tu DCA es $100/mes, tu meta es $1,200 invertidos en 1 año. Eso SÍ lo controlas.' },
          { icon: CheckCircle, title: 'Revisión Trimestral', text: 'Cada 3 meses, revisa: ¿Seguí mi DCA? ¿Mi distribución sigue en balance? ¿Necesito ajustar montos? ¿Mi seguridad está en orden? 15 minutos cada 3 meses. No mires tu portafolio todos los días, es contraproducente.' }
        ]
      },
      {
        type: 'main',
        title: 'Impuestos Cripto en LATAM',
        content: 'Antes de ejecutar tu plan de inversión, debes conocer las obligaciones tributarias de tu país. Las criptomonedas **no son invisibles para las autoridades fiscales**, y la ignorancia no te exime de responsabilidad. Los exchanges reportan datos a las agencias tributarias, y las transacciones on-chain son rastreables. No declarar tus ganancias cripto puede resultar en multas, sanciones, e incluso problemas legales. Aquí te damos un panorama general por país, pero recuerda: las leyes cambian frecuentemente y cada situación es diferente.',
        features: [
          { icon: Landmark, title: 'Colombia', text: 'Las ganancias por venta de criptoactivos se consideran ganancia de capital y deben declararse en la renta anual. Si tus activos cripto superan ciertos umbrales, también deben reportarse como patrimonio. La DIAN (Dirección de Impuestos) ha intensificado el monitoreo de transacciones cripto desde 2022. La tarifa de renta varía según tu rango de ingresos (0-39%). Las pérdidas pueden compensarse con ganancias del mismo tipo en el mismo año fiscal.' },
          { icon: Landmark, title: 'México', text: 'El SAT considera las criptomonedas como activos virtuales. Las ganancias por enajenación (venta o intercambio) de criptoactivos están sujetas al ISR (Impuesto Sobre la Renta). Se calcula sobre la diferencia entre el precio de compra y el de venta. La tasa marginal puede llegar hasta el 35% dependiendo de tu nivel de ingresos. Los exchanges mexicanos regulados (como Bitso) reportan operaciones al SAT. Debes incluir tus operaciones cripto en tu declaración anual.' },
          { icon: Landmark, title: 'Argentina', text: 'Las ganancias de capital por venta de criptoactivos están gravadas con el impuesto cedular a la renta financiera (actualmente 15% sobre la ganancia neta en moneda extranjera). Además, si tus tenencias superan el mínimo no imponible, deben declararse en Bienes Personales (impuesto al patrimonio). La AFIP ha requerido a exchanges locales información sobre operaciones de sus usuarios. La situación regulatoria cambia frecuentemente, mantente actualizado.' },
          { icon: Shield, title: 'Registro es Clave', text: 'Mantén un registro detallado de TODAS tus transacciones: fecha de compra, precio de compra, fecha de venta, precio de venta, fees pagados, y dirección de wallet. Herramientas como Koinly, CoinTracker, o incluso una hoja de cálculo simple te ayudan a calcular tus ganancias y pérdidas. Este registro es tu mejor defensa ante una auditoría y hace la declaración mucho más sencilla.' }
        ],
        highlight: {
          title: 'Importante',
          text: 'Esta información es orientativa y no constituye asesoría fiscal. Las leyes tributarias cambian frecuentemente y cada situación personal es diferente. Consulta SIEMPRE con un contador o profesional tributario de tu país antes de tomar decisiones fiscales. El costo de una consulta con un contador es infinitamente menor que el costo de una multa por no declarar.'
        }
      },
      {
        type: 'main',
        title: 'Paso 6: Tu Primera Acción AHORA (10 Minutos)',
        content: 'Acabas de leer todo lo anterior. Estás en el punto exacto donde el 90% de los estudiantes de cualquier curso se queda: **inspirados pero inactivos**. Esta sección existe para romper eso. No necesitas "el momento perfecto" para empezar. No necesitas $1,000. No necesitas más lecciones. Necesitas escribir **tres números** en un papel, ahora, antes de cerrar esta lección, y la inercia se rompe para siempre.',
        highlight: {
          title: 'La Trampa del "Algún Día"',
          text: '"Voy a empezar cuando tenga más tiempo / más dinero / más confianza" es la excusa más cara del mundo. Mientras esperas el momento perfecto, la inflación no espera. Empezar mal pero empezar es infinitamente mejor que planear perfecto y no empezar nunca.'
        },
        features: [
          { icon: Clock, title: 'Minuto 1-3: Los Tres Números', text: 'Toma un papel (sí, papel, no celular). Escribe:\n\n**NÚMERO 1**, Tu ingreso neto mensual promedio.\n**NÚMERO 2**, Tu fondo de emergencia actual (cuánto dinero líquido tienes que no necesitas este mes).\n**NÚMERO 3**, Cuánto puedes invertir al mes sin que afecte tu vida (dinero que podrías perder mañana y seguir durmiendo).\n\nEstos tres números son tu realidad financiera. Sin ellos, cualquier plan es ficción.' },
          { icon: CheckCircle, title: 'Minuto 4-6: Tu Línea Base', text: 'Responde estas tres preguntas con SÍ o NO:\n\n**a)** ¿Mi Número 2 cubre al menos 3 meses de mis gastos fijos? Si NO → tu prioridad no es cripto, es ahorrar.\n\n**b)** ¿Mi Número 3 es mayor a $20/mes? Si NO → enfócate en aumentar ingresos o reducir gastos primero.\n\n**c)** ¿Tengo claridad sobre en qué gasto mi dinero cada mes? Si NO → tu primer paso es hacer un presupuesto, no un portafolio.\n\nSi respondiste SÍ a las tres, estás listo para ejecutar. Si no, tienes algo más valioso: claridad sobre el verdadero primer paso.' },
          { icon: Zap, title: 'Minuto 7-10: El Compromiso Mínimo Viable', text: 'Abre tu celular. Pon una alarma recurrente para el **próximo lunes a las 9am** (o el día que recibas salario). Nombra la alarma: "**DCA: Mi futuro financiero**".\n\nCuando suene: ejecutas tu primera compra de DCA, aunque sea $20. Da igual si estás cansado, si el mercado cayó, o si ese día tu amigo te dice que todo es una estafa. La alarma suena, tú ejecutas. Período.\n\nNo hace falta tener todo el plan perfecto ahora. Necesitas UN movimiento real antes de que el impulso se pierda.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Plan de Acción: Escríbelo HOY, Ejecuta ESTA SEMANA',
        items: [
          'PASO 1: Verifica que tienes fondo de emergencia (3-6 meses de gastos). Si no, prioriza eso antes que cripto.',
          'PASO 2: Define tu portafolio base: X% BTC + X% SOL + X% ETH + X% Stablecoins. Escríbelo en papel.',
          'PASO 3: Configura tu DCA: monto fijo + frecuencia + método (automático o manual). Empieza esta semana.',
          'PASO 4: Completa el checklist de seguridad. Frase semilla segura, 2FA activo, custodia organizada.',
          'PASO 5: Escribe tus reglas de compra, reglas de NO hacer, meta a 1 año, y fecha de revisión trimestral.',
          'PASO 6: ANTES de cerrar esta lección: escribe los tres números, pon la alarma del lunes, y comprométete con tu primer DCA. 10 minutos que cambian tu trayectoria.',
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
          explanation: 'Sin fondo de emergencia, cualquier imprevisto (enfermedad, desempleo, reparación) te obligaría a vender tu cripto en el peor momento posible, probablemente en pérdida. El fondo de emergencia es la base de toda salud financiera.'
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
          explanation: 'El conocimiento sin ejecución no vale nada. Tu plan está listo, ahora ejecútalo. 3 meses de DCA disciplinado te darán la experiencia real que ninguna lección puede enseñar. Después, el nivel intermedio te dará herramientas para optimizar tu estrategia.'
        },
        {
          id: 'q6',
          question: 'Llevas un año haciendo DCA disciplinado. Tu portafolio está en -40% por un mercado bajista prolongado. Tu pareja te dice: "Deberías vender antes de perder más, está claro que esto no funcionó." ¿Qué respondes y qué haces?',
          options: [
            { id: 'a', text: 'Tiene razón. Vendo todo y acepto la pérdida antes de que empeore' },
            { id: 'b', text: 'Sigo mi plan. -40% en un año es normal en cripto, los mercados bajistas históricamente duran 12-18 meses. Mis reglas escritas dicen "no vendo en pánico". De hecho, el DCA durante el bear es cuando acumulo más unidades por el mismo dinero. Lo que importa es dónde estaré en 3-5 años, no en 12 meses' },
            { id: 'c', text: 'Vendo la mitad para "asegurar" algo y mantengo la otra mitad' },
            { id: 'd', text: 'Cambio todo a stablecoins hasta que se "estabilice" el mercado' }
          ],
          correctAnswer: 'b',
          explanation: 'Este es EL momento que define tu trayectoria como inversor. Históricamente, cada período de 4+ años de DCA en BTC ha terminado en positivo, pero solo si no paras. Los que vendieron en -40% en 2018 perdieron el ciclo completo de 2020-2021. El DCA funciona precisamente porque acumula MÁS durante los bears. Vender en pánico convierte una volatilidad temporal en pérdida permanente. Tu plan escrito te salva de ti mismo.'
        },
        {
          id: 'q7',
          question: 'Un amigo te dice: "Empecé a invertir en cripto la semana pasada y ya perdí 15%, creo que esto no es para mí." Revisas su situación y descubre que invirtió los $3,000 que tenía guardados para la renta de los próximos 3 meses. ¿Cuál es el error fundamental?',
          options: [
            { id: 'a', text: 'Invirtió muy poco, debería haber invertido más para diversificar' },
            { id: 'b', text: 'No escogió las altcoins correctas' },
            { id: 'c', text: 'Invirtió dinero que necesitaba en el corto plazo. Cripto es para horizontes de 2+ años con dinero que puedes no tocar. Saltó el PASO 1 del plan (fondo de emergencia) y ahora cualquier caída de mercado lo obliga a vender en pérdida para pagar su vida. El problema no es cripto, es que violó la regla fundamental' },
            { id: 'd', text: 'Debió haber esperado a que el mercado subiera antes de comprar' }
          ],
          correctAnswer: 'c',
          explanation: 'Este es el error más común y costoso que cometen los principiantes: invertir dinero que necesitan pronto. Cripto es volátil, puede bajar 30-50% en semanas. Si necesitas ese dinero para vivir, te obliga a vender en el peor momento. La regla de oro: **solo inviertes lo que puedes no tocar durante 2+ años**. Esto no es "cautela excesiva", es la diferencia entre construir riqueza y destruirla. El PASO 1 del plan existe precisamente para evitar esto.'
        }
      ]
    }
  },
};
