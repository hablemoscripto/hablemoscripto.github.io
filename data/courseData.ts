import type { LucideIcon } from 'lucide-react';
import {
  Banknote,
  Wallet,
  Search,
  Building2,
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
    duration: '17 minutos',
    type: 'Lectura + Historia',
    description: 'Para entender por qué existe Bitcoin, primero hay que entender qué es el dinero, por qué lo inventamos y qué cambió cuando dejó de estar anclado al oro. Aquí conocerás la historia, la tesis de este curso y lo que responden los economistas que no están de acuerdo.',
    sections: [
      {
        type: 'intro',
        title: 'El Invento Más Importante de la Humanidad',
        content: 'Imagina que eres un pescador en el año 3000 a.C. Tienes pescado fresco, pero necesitas sandalias. Vas donde el zapatero, pero él no quiere pescado, quiere trigo. Entonces buscas al agricultor, pero él quiere leña. Pasas el día entero buscando a alguien que quiera exactamente lo que tienes y tenga exactamente lo que necesitas. Este problema se llama la **"doble coincidencia de deseos"**, y frenó el progreso humano durante milenios. El dinero lo resolvió. No es solo "algo para comprar cosas". El dinero es una **tecnología para almacenar y transferir valor** a través del tiempo y el espacio. Es tan revolucionario como la rueda, la escritura o el internet.',
        highlight: {
          title: 'La Tesis de Este Curso',
          text: 'El dinero es tiempo humano guardado. Cada billete representa horas de trabajo de alguien. Por eso, cuando una moneda pierde valor, quien ahorró en ella pierde parte de las horas que ya trabajó y que no va a recuperar. Esa idea recorre todo el curso.'
        }
      },
      {
        type: 'main',
        title: 'Las 6 Propiedades del Dinero Perfecto',
        content: 'Durante 5,000 años de prueba y error, la humanidad descubrió que el buen dinero debe cumplir 6 propiedades fundamentales. Cualquier cosa que usemos como dinero será tan buena como su capacidad de cumplir estas características:',
      },
      {
        type: 'main',
        title: 'El Experimento de 5,000 Años: Del Trueque al Oro',
        content: 'La humanidad probó de todo antes de encontrar el oro:',
        image: '/images/lessons/lesson-1/lesson1-2.webp',
        imageAlt: 'El experimento de 5,000 años: del trueque al oro - conchas, sal, ganado y oro',
        imageSummary: 'Conchas, sal y ganado fallaron en alguna propiedad clave: las conchas dejaron de ser escasas cuando llegaron barcos llenos de ellas, la sal no era durable ni suficientemente escasa, y el ganado no se podía dividir ni transportar. El oro ganó porque las cumple todas y nadie puede imprimirlo. Los reyes acuñaron monedas con él, pero fue el uso de la gente, durante milenios, lo que lo convirtió en dinero.'
      },
      {
        type: 'main',
        title: 'El Papel Moneda: Una Promesa de Oro',
        content: 'Cargar oro era peligroso y poco práctico. En China (con los certificados de la dinastía Tang en el siglo IX y el primer papel moneda oficial de la dinastía Song en el siglo XI) y luego en Europa, surgió una solución elegante: los **certificados de depósito**. Depositabas tu oro en un banco seguro y recibías un papel que decía "Este papel es canjeable por X gramos de oro". El papel era más fácil de cargar, pero su valor dependía de una PROMESA: que el banco realmente tenía el oro. Este sistema funcionó durante siglos... hasta que los bancos descubrieron que podían imprimir más papeles de los que tenían oro para respaldar.',
        features: [
          { icon: Landmark, title: 'El Patrón Oro', text: 'Hasta 1971, el dólar estadounidense estaba respaldado por oro en Fort Knox. Pero ojo con el detalle que casi nadie cuenta: en 1933 el gobierno prohibió a sus propios ciudadanos canjear (e incluso poseer) oro monetario. De 1934 a 1971, solo los gobiernos extranjeros podían cambiar sus dólares por oro real.' },
          { icon: Globe, title: 'Bretton Woods (1944)', text: 'Después de la Segunda Guerra Mundial, el mundo acordó usar el dólar como moneda de reserva mundial, porque el dólar estaba respaldado por oro. Otras monedas se anclaban al dólar.' }
        ]
      },
      {
        type: 'main',
        title: 'La Ruptura de 1971: El Día que Cambió Todo',
        content: 'El 15 de agosto de 1971, el presidente Richard Nixon apareció en televisión y anunció que Estados Unidos "temporalmente" suspendía la convertibilidad del dólar en oro. Francia y otros países estaban exigiendo su oro (sabían que USA había impreso más dólares de los que podía respaldar), y las reservas de Fort Knox se vaciaban. Nixon rompió la promesa "temporalmente". Más de medio siglo después, sigue rota. Desde ese día, el dólar, y por extensión todas las monedas del mundo, no están respaldadas por nada tangible. Las respaldan la ley, los impuestos que hay que pagar en esa moneda y la confianza en el banco central que la emite.',
        highlight: {
          title: 'El Resultado Matemático',
          text: 'Desde 1971, el dólar ha perdido cerca del 87% de su poder adquisitivo: lo que costaba $1 en 1971 cuesta unos $8 hoy. Una casa mediana nueva en EE. UU. costaba unos $25,000 en 1971 y hoy pasa de $400,000. Ajustados por inflación, esos $25,000 serían unos $200,000: la mitad de la subida es pérdida de valor del dólar, y el resto viene de casas más grandes, suelo más caro y crédito más barato.'
        }
      },
      {
        type: 'comparison',
        title: 'Antes vs Después de 1971',
        leftSide: {
          title: 'Antes de 1971 (Patrón Oro)',
          points: [
            'El dólar se anclaba al oro para gobiernos extranjeros (ciudadanos ya no podían canjearlo desde 1933)',
            'La emisión estaba restringida por el ancla, no era libre',
            'Un salario mínimo mensual compraba ~8 onzas de oro',
            'Era más común que una familia viviera con un solo sueldo',
            'Precios estables a largo plazo, pero con crisis y deflaciones bruscas'
          ]
        },
        rightSide: {
          title: 'Después de 1971 (Dinero Fiat)',
          points: [
            'El dólar es un papel sin respaldo tangible',
            'Los bancos centrales pueden crear dinero sin un límite fijo',
            'Un salario mínimo mensual compra ~0.3 onzas de oro (noviembre de 2026), unas 25 veces menos',
            'Lo común son dos sueldos (por el costo de la vivienda, pero también por cambios sociales)',
            'Los precios suben casi todos los años (la meta oficial suele ser 2-3%)'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Qué es el Dinero Fiat?',
        content: '"Fiat" viene del latín y significa "hágase" o "por decreto". El dinero fiat es dinero que vale porque un gobierno DICE que vale, no porque esté respaldado por algo escaso. Tu billete de 50,000 pesos colombianos no representa oro, plata, ni nada tangible. Es un papel (o número digital) que tiene valor porque la ley obliga a aceptarlo, porque hay que pagar impuestos en esa moneda y porque todos confiamos en que mañana otros lo seguirán aceptando. Es, en el fondo, un acuerdo de confianza colectiva.',
        features: [
          { icon: AlertTriangle, title: 'El Problema Fundamental', text: 'Si el valor del dinero depende de la confianza en quienes lo emiten, ¿qué pasa cuando los gobiernos crean dinero para ganar elecciones, rescatar a sus amigos o financiar guerras? La historia está llena de casos en que lo hicieron, y el resultado fue destruir el valor de su moneda. No todos los países llegan a ese extremo, pero ninguna moneda fiat ha conservado su poder de compra durante generaciones.' },
          { icon: TrendingDown, title: 'Dato Histórico', text: 'Mucho antes del dinero fiat, los gobiernos ya devaluaban su dinero: Roma, el Imperio otomano, España e Inglaterra (con Enrique VIII) redujeron el oro o la plata de sus monedas para gastar más. El dinero fiat hace lo mismo más fácil y sin tocar el metal: el dólar ha perdido cerca del 87% de su poder adquisitivo desde 1971.' }
        ]
      },
      {
        type: 'counterpoint',
        title: '¿Volver al Patrón Oro? Lo Que Responden los Economistas',
        content: 'La mayoría de los economistas no quiere volver al patrón oro, y sus argumentos merecen conocerse:\n\n- **La cantidad de dinero dependería de la minería**, no de lo que necesita la economía. Un gran hallazgo de oro (o la falta de uno) movería los precios sin que nadie lo decida.\n- **En la Gran Depresión, los países que abandonaron el oro antes se recuperaron antes.** El patrón oro impidió a muchos bancos centrales responder a la crisis.\n- **Una inflación baja y estable** (la meta de la mayoría de bancos centrales es 2-3% anual) facilita ajustar salarios y evita que la gente posponga compras esperando precios más bajos.\n\nLa respuesta de quienes defienden el dinero sano: todo eso funciona solo si el banco central cumple su meta, y en Latinoamérica hay demasiados ejemplos de que no lo hizo. Este curso defiende esa segunda visión, pero vas a decidir mejor si conoces las dos.'
      },
      {
        type: 'takeaways',
        title: 'Por qué Esta Historia Importa para Bitcoin',
        items: [
          'El dinero es una tecnología para intercambiar y guardar valor a través del tiempo. Este curso sigue la visión de que la gente lo fue perfeccionando durante milenios, eligiendo lo que mejor funcionaba.',
          'El buen dinero debe cumplir 6 propiedades: escasez, divisibilidad, durabilidad, portabilidad, fungibilidad y verificabilidad.',
          'El oro dominó durante milenios porque cumple estas propiedades naturalmente. Nadie puede "imprimir" más oro.',
          'En 1971 se rompió la última conexión del dólar con algo escaso. Desde entonces, todas las monedas del mundo son dinero por decreto (fiat).',
          'La mayoría de economistas prefiere el dinero fiat con una inflación baja y estable. Este curso cree que ese sistema castiga a quien ahorra, y por eso estudia las alternativas.',
          'Nuestra tesis: Bitcoin es el primer dinero digital con una oferta fija (21 millones) que ninguna autoridad puede cambiar por decisión propia. Si la tesis es correcta, es un cambio monetario comparable a la invención del papel moneda. En la Lección 4 verás también sus riesgos.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un pescador necesita sandalias. El zapatero no quiere pescado. ¿Cómo se llama este problema que el dinero resolvió?',
          options: [
            { id: 'a', text: 'La falta de divisibilidad' },
            { id: 'b', text: 'La doble coincidencia de deseos' },
            { id: 'c', text: 'La escasez de bienes en el mercado' },
            { id: 'd', text: 'El problema de la portabilidad' }
          ],
          correctAnswer: 'b',
          explanation: 'La "doble coincidencia de deseos" requiere que dos personas quieran exactamente lo que la otra tiene. El dinero elimina este problema al servir como medio de intercambio universal.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'El dinero fiat moderno ya no está respaldado por oro: su valor depende de la confianza en el emisor y de la política monetaria.',
          correctAnswer: true,
          explanation: 'Correcto. Desde 1971 el dólar (y la mayoría de monedas) ya no está anclado al oro. Eso permite expandir la oferta monetaria, y es el trasfondo de las lecciones sobre inflación que vienen a continuación.'
        },
        {
          id: 'q-ms',
          type: 'multiple-select',
          question: '¿Cuáles de las siguientes son propiedades del buen dinero? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Escasez' },
            { id: 'b', text: 'Precio estable todos los días' },
            { id: 'c', text: 'Divisibilidad' },
            { id: 'd', text: 'Estar respaldado por un gobierno' },
            { id: 'e', text: 'Portabilidad' }
          ],
          correctAnswers: [0, 2, 4],
          explanation: 'Escasez, divisibilidad y portabilidad son tres de las seis propiedades del buen dinero. Un precio estable día a día es deseable, pero no es una de las seis (el oro también varía de precio), y el respaldo de un gobierno no es un requisito: el oro funcionó sin él durante miles de años.'
        },
        {
          id: 'q-ord',
          type: 'ordering',
          question: 'Ordena la evolución del dinero, de lo más antiguo a lo más reciente.',
          items: [
            'Trueque directo',
            'Conchas y mercancías',
            'Monedas de oro',
            'Papel respaldado en oro',
            'Dinero fiat sin respaldo'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'El dinero evolucionó del trueque a mercancías, luego al oro, después al papel respaldado en oro, y finalmente al dinero fiat sin respaldo que usamos hoy.'
        },
        {
          id: 'q-fb',
          type: 'fill-blank',
          question: 'Completa la frase sobre el fin del patrón oro.',
          textBefore: 'En 1971, el presidente Nixon rompió la conexión del dólar con el',
          textAfter: ', dando origen al dinero fiat moderno.',
          correctAnswer: 'oro',
          acceptableAnswers: ['oro', 'patrón oro', 'el oro'],
          explanation: 'En 1971 Nixon cerró la "ventanilla del oro": los dólares dejaron de ser canjeables por oro. Desde entonces el dinero no está respaldado por nada tangible.'
        },
        {
          id: 'q2',
          question: '¿Por qué el oro se convirtió en dinero durante 5,000 años mientras las conchas de mar dejaron de funcionar?',
          options: [
            { id: 'a', text: 'Porque los reyes de cada época decretaron que el oro sería el dinero oficial' },
            { id: 'b', text: 'Porque el oro brilla y la gente lo prefería como adorno para mostrar estatus' },
            { id: 'c', text: 'Porque el oro es escaso y costoso de producir; las conchas abundaban' },
            { id: 'd', text: 'Porque el oro era el metal más fácil de encontrar y extraer en grandes cantidades' }
          ],
          correctAnswer: 'c',
          explanation: 'El oro cumple las 6 propiedades del buen dinero, sobre todo la escasez: producir más cuesta mucho trabajo. Las conchas fallaron cuando llegaron barcos llenos de ellas desde otras costas. Los reyes acuñaron monedas de oro, pero no lo inventaron como dinero, y su uso como adorno no explica por qué sirvió para guardar valor durante milenios.'
        },
        {
          id: 'q3',
          question: '¿Qué pasó exactamente el 15 de agosto de 1971?',
          options: [
            { id: 'a', text: 'Se firmaron los acuerdos de Bretton Woods' },
            { id: 'b', text: 'Nixon suspendió el canje de dólares por oro' },
            { id: 'c', text: 'Comenzó la Gran Depresión en Estados Unidos' },
            { id: 'd', text: 'Se fundó la Reserva Federal de Estados Unidos' }
          ],
          correctAnswer: 'b',
          explanation: 'Ese día Nixon cerró la "ventanilla del oro": los gobiernos extranjeros ya no podían cambiar sus dólares por oro. EE. UU. tenía muchos más dólares en circulación que oro para respaldarlos. Bretton Woods fue en 1944, la Reserva Federal se fundó en 1913 y la Gran Depresión empezó en 1929.'
        },
        {
          id: 'q4',
          question: 'Un trabajador en Venezuela ahorró en bolívares durante 10 años. En 2016 sus ahorros equivalían a unos USD 50,000; en 2020 equivalían a menos de USD 50. ¿Qué propiedad del dinero falló catastróficamente?',
          options: [
            { id: 'a', text: 'Divisibilidad: no se podía dividir' },
            { id: 'b', text: 'Portabilidad: no se podía llevar' },
            { id: 'c', text: 'Escasez: se creó demasiado' },
            { id: 'd', text: 'Verificabilidad: era falsificable' }
          ],
          correctAnswer: 'c',
          explanation: 'El gobierno venezolano financió su déficit creando bolívares en cantidades enormes. Cuando el dinero deja de ser escaso, pierde su capacidad de guardar valor. Los billetes seguían siendo divisibles, portables y auténticos, pero compraban cada vez menos: el ahorro de toda una vida se evaporó.'
        },
        {
          id: 'q5',
          question: 'Si el dinero es "tiempo humano guardado", ¿qué le pasa a quien ahorró en una moneda cuando se crea mucho dinero nuevo y los precios suben?',
          options: [
            { id: 'a', text: 'Gana, porque hay más dinero en la economía' },
            { id: 'b', text: 'Nada, porque su saldo sigue siendo el mismo' },
            { id: 'c', text: 'Sus horas ahorradas compran menos que antes' },
            { id: 'd', text: 'Solo pierden los ricos, que tienen más dinero' }
          ],
          correctAnswer: 'c',
          explanation: 'Su saldo no cambia, pero cada peso compra menos: parte de las horas que trabajó y ahorró ya no valen lo mismo. Tener "más dinero en la economía" no lo hace más rico a él, y quienes más pierden suelen ser los que ahorran en efectivo, no los ricos, que tienen buena parte de su riqueza en activos. Por eso Bitcoin tiene un límite de 21 millones.'
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
    type: 'Lectura + Gráficos',
    description: 'Te han dicho que un poco de inflación es normal y hasta necesaria. Aquí verás cómo se crea el dinero, quién gana y quién pierde cuando los precios suben, y por qué este curso sostiene que la inflación es una decisión de política y no un fenómeno natural.',
    sections: [
      {
        type: 'intro',
        title: 'El Robo Silencioso que Nadie Te Explicó',
        content: 'Tu abuela pudo comprar casa con unos pocos años de sueldo. Hoy, en muchas ciudades, se necesitan muchos más. Hay varias razones: el suelo en las ciudades es más escaso, las casas son más grandes y el crédito cambió. Pero hay una que casi nadie explica: cuando se crea dinero nuevo, suele llegar antes a activos como la vivienda que a los salarios (lo verás en la Lección 3). Empecemos por lo básico: **tu dinero compra menos cada año**. Este curso sostiene que eso no es un fenómeno natural como el clima, sino el resultado de **decisiones de política monetaria** que, año tras año, transfieren riqueza de quienes ahorran en efectivo hacia quienes reciben primero el dinero nuevo.\n\nUn dato para dimensionarlo: en 1971, el salario mínimo federal de EE. UU. ($1.60 la hora) equivalía a unas 7.9 onzas de oro al mes. Hoy, los $7.25 la hora compran unas 0.31 onzas. Esa comparación exagera la pérdida, porque el oro también se revalorizó. Medido con el índice de precios al consumidor, que no depende del oro, el salario mínimo de EE. UU. vale cerca de 43% menos que en 1968. Menos dramático, pero igual de real: quien gana el mínimo compra mucho menos que hace 50 años.',
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'El Respaldo del Dinero: Una Promesa, No un Objeto',
        content: 'Pregúntale a cualquier persona en la calle: "¿Por qué el dinero tiene valor?" Casi todos responderán algo como "porque hay oro en algún banco" o "porque está respaldado por el gobierno". **La primera respuesta es incorrecta**: desde 1971 ningún billete se puede cambiar por oro. **La segunda es cierta solo en parte**: lo que respalda al dinero fiat es 1) la ley que obliga a aceptarlo, 2) la obligación de pagar impuestos en esa moneda y 3) la credibilidad del banco central que lo emite. Es una promesa institucional, no un objeto escaso.',
        features: [
          { icon: Landmark, title: 'El Mito del Respaldo', text: 'Fort Knox sigue guardando oro, pero ese oro ya no respalda los dólares que circulan. El respaldo real es la promesa de que el banco central no abusará de su poder de crear dinero. ¿Cuánto confías en esa promesa? En Latinoamérica tenemos buenas razones para dudar.' },
          { icon: AlertTriangle, title: 'La Prueba', text: 'Si el dinero estuviera respaldado por algo, los gobiernos no podrían crear billones (millones de millones) de la nada en cuestión de meses como hicieron entre 2020 y 2021. Simplemente NO TENDRÍAN ese "algo" para respaldar el dinero nuevo.' }
        ]
      },
      {
        type: 'main',
        title: 'La Máquina de Crear Dinero (Cómo Funciona Realmente)',
        content: 'Aquí es donde la mayoría se pierde, porque el sistema es complejo y casi nunca se explica. Vamos a simplificarlo. El dinero se crea principalmente de DOS formas:'
      },
      {
        type: 'main',
        title: '1. El Banco Central Imprime',
        content: 'Un banco central casi nunca imprime billetes para regalarlos. Lo que hace es **comprar bonos** (deuda del gobierno o de otros bancos) y pagarlos con reservas que crea en ese momento con un simple registro contable. No hay caja fuerte ni oro detrás. Entre marzo de 2020 y finales de 2021, la Reserva Federal de EE. UU. creó así unos **4.5 billones de dólares** (millones de millones), dinero que no existía antes. Ese dinero entra al sistema financiero y, con el tiempo, compite con el tuyo por los mismos bienes.'
      },
      {
        type: 'main',
        title: '2. Los Bancos Multiplican (Reserva Fraccionaria)',
        image: '/images/lessons/lesson-2/lesson2-2.webp',
        imageAlt: 'Sistema de reserva fraccionaria y multiplicación del dinero',
        imageSummary: 'Depositas $100. El banco guarda $10 y presta $90. Ese préstamo se deposita en otro banco, que guarda $9 y presta $81. Y así sucesivamente. Tus $100 "seguros" se convierten en $900+ de deuda circulando. Es un modelo simplificado (la banca moderna crea el crédito primero y busca las reservas después), pero la conclusión no cambia: si todos fueran a retirar su dinero mañana, no existe. Por eso existen los seguros de depósitos: en Colombia, Fogafín cubre hasta 50 millones de pesos por persona en cada entidad si un banco quiebra.'
      },
      {
        type: 'main',
        title: '3. El Resultado Matemático',
        image: '/images/lessons/lesson-2/lesson2-3.webp',
        imageAlt: 'El resultado matemático de la creación de dinero',
        imageSummary: 'La idea central es aritmética: si la cantidad de dinero crece más rápido que los bienes que se producen, los precios suben. No siempre es inmediato ni proporcional: entre 2008 y 2019 se creó mucho dinero y la inflación al consumidor se mantuvo baja, porque ese dinero se quedó sobre todo en activos financieros (justo el efecto que verás en la Lección 3). Los números de la imagen son ilustrativos.'
      },
      {
        type: 'main',
        title: '4. La Ilusión del Aumento de Sueldo',
        image: '/images/lessons/lesson-2/lesson2-4.webp',
        imageAlt: 'La ilusión del aumento de sueldo vs la inflación real',
        imageSummary: 'Te suben el sueldo 5% y te sientes bien. Pero si la inflación es 10%, tu poder de compra BAJÓ. La cuenta rápida de la imagen (5% menos 10%, unos -5%) es una aproximación. La exacta es $105,000 / 1.10 ≈ $95,455 en pesos del año anterior: perdiste cerca de 4.5% de poder de compra. Más pesos, menos cosas.'
      },
      {
        type: 'main',
        title: 'Por Qué a los Gobiernos les Conviene la Inflación',
        content: 'Nuestra tesis: la inflación no es un accidente. Los gobiernos tienen incentivos claros para tolerar una inflación moderada (y a veces no tan moderada):',
        features: [
          { icon: Landmark, title: 'Licuar la Deuda', text: 'La deuda de un gobierno está fijada en su moneda. Si los precios suben, esa deuda pesa menos en términos reales, y quienes le prestaron (y quienes ahorran en esa moneda) cargan con la diferencia.' },
          { icon: Users, title: 'Financiar Sin Impuestos Visibles', text: 'Subir impuestos es impopular. Crear dinero, en cambio, pasa casi desapercibido. Por eso se le llama "impuesto inflacionario": lo pagas aunque nadie lo haya votado.' },
          { icon: TrendingDown, title: 'Ganar Tiempo Político', text: 'Más dinero y tasas bajas impulsan el empleo y el consumo en el corto plazo, por ejemplo antes de unas elecciones. La factura de la inflación llega después, cuando ya es otro el que debe pagarla. Por eso muchos países dieron independencia a su banco central.' }
        ]
      },
      {
        type: 'counterpoint',
        title: 'Por Qué los Bancos Centrales Buscan 2% y No 0%',
        content: 'La visión dominante no defiende la inflación alta, pero sí una inflación **baja y estable**, de alrededor de 2-3% al año. Sus razones:\n\n- **Evitar la deflación.** Si los precios bajan, la gente pospone compras y las deudas pesan más. Japón en los años 90 y la Gran Depresión son los ejemplos clásicos.\n- **Ajustar salarios sin bajarlos.** Con algo de inflación, los salarios reales se pueden ajustar sin recortar el sueldo nominal de nadie.\n- **Margen para responder a crisis.** Con inflación y tasas en cero no queda espacio para bajar tasas cuando llega una recesión.\n\nLa respuesta desde el dinero sano: un 2% anual, sostenido 35 años, reduce a la mitad el poder de compra de tus ahorros en efectivo. La pregunta de fondo es quién debería cargar con ese costo.'
      },
      {
        type: 'main',
        title: 'Por Qué Tu Inflación No Coincide con la Oficial',
        content: 'El índice de precios al consumidor (IPC) mide una canasta **promedio** de todo el país. Tu canasta es otra: si gastas mucho en arriendo, comida y transporte, tu inflación personal puede ser bastante más alta (o más baja) que la oficial. Además, el índice usa métodos técnicos que generan debate. Los críticos dicen que hacen ver la inflación más baja de lo que se siente; los estadísticos responden que sin ellos el índice la exageraría. Lo que no se discute: **la inflación que importa para tus ahorros es la tuya**. En Colombia, el DANE publica el IPC por ciudad y por nivel de ingreso, así que puedes buscar el que más se parece a tu realidad.'
      },
      {
        type: 'main',
        title: 'Casos Reales: Cuando la Inflación Destruye Países',
        content: 'Esto no es teoría. No es algo que "podría pasar". Ha pasado decenas de veces en la historia, y varios de estos casos siguen frescos en la memoria de millones:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela (2016-2020)', text: 'En 2018 la inflación anual superó el 130,000% según el propio Banco Central de Venezuela (el FMI la estimó aún más alta). El salario mínimo mensual no alcanzaba para comprar un kilo de carne, y millones de venezolanos emigraron, muchos con lo puesto. La causa principal: el gobierno financió su déficit creando dinero mientras caía la producción de petróleo y controlaba los precios.' },
          { icon: AlertTriangle, title: 'Argentina (2023-2024)', text: 'La inflación cerró 2023 en 211% anual y tocó un pico de 289% en abril de 2024. Las pensiones perdieron buena parte de su poder de compra en meses. La gente corría a comprar el día de cobro porque mañana todo estaría más caro, y los supermercados remarcaban precios cada semana. Para septiembre de 2026 la inflación interanual había bajado a 33% según el INDEC, pero el poder de compra perdido en los ahorros en pesos no volvió.' },
          { icon: AlertTriangle, title: 'Turquía (2021-2023)', text: 'La lira perdió cerca del 75% de su valor frente al dólar entre 2021 y 2023, y la inflación llegó a 85% en 2022. El gobierno presionó al banco central para bajar las tasas de interés mientras los precios subían. La clase media turca, que había construido vidas estables, se encontró de pronto sin poder pagar la renta.' },
          { icon: AlertTriangle, title: 'Líbano (2020-2023)', text: 'El sistema bancario, que durante años pagó intereses altos con depósitos nuevos, colapsó en 2019. La gente no podía sacar su propio dinero de los bancos y la libra libanesa perdió 98% de su valor. Familias de clase media alta se volvieron pobres casi de la noche a la mañana.' }
        ]
      },
      {
        type: 'main',
        title: '¿Y Colombia? ¿Y México? ¿Y el dólar?',
        content: 'Quizás pienses: "Eso pasa en países con gobiernos locos, aquí no pasará." Pero mira los datos:',
        features: [
          { icon: TrendingDown, title: 'Colombia', text: 'El peso colombiano ha perdido cerca de la mitad de su valor frente al dólar desde el año 2000: pasó de unos 2,000 por dólar a moverse entre 3,500 y 4,500 en los últimos años (con picos por encima de 5,000 en 2022). Y el dólar TAMBIÉN pierde valor. Estás perdiendo contra una moneda que está perdiendo.' },
          { icon: TrendingDown, title: 'México', text: 'El peso mexicano ha vivido ciclos de devaluación: de alrededor de 10 por dólar en 2008 pasó a más de 20 hacia 2016-2017 y tocó cerca de 25 durante la pandemia de 2020. Tuvo periodos de recuperación, pero las crisis de 1994 y 2008 muestran que ninguna moneda LATAM es inmune a shocks externos.' },
          { icon: TrendingDown, title: 'El Dólar Mismo', text: 'El "rey" de las monedas ha perdido 96% de su poder adquisitivo desde 1913 (cuando se creó la Reserva Federal). Si el dólar se devalúa, ¿qué crees que pasa con las monedas ancladas a él?' }
        ],
        highlight: {
          title: 'La Pregunta Incómoda',
          text: 'Si tu moneda pierde valor año tras año, ¿qué le pasa a quien guarda sus ahorros en efectivo durante 20 o 30 años? Esa es la pregunta que este curso te invita a hacerte antes de decidir dónde guardar el fruto de tu trabajo.'
        }
      },
      {
        type: 'takeaways',
        title: 'La Verdad Incómoda y La Salida',
        items: [
          'Nuestra tesis: la inflación no es un fenómeno natural, sino el resultado de decisiones de política. Transfiere riqueza de quienes ahorran en efectivo hacia los deudores (empezando por el gobierno) y hacia quienes reciben primero el dinero nuevo.',
          'El efectivo y las cuentas de ahorro con tasa baja pierden poder de compra año tras año. Algunos instrumentos, como los CDT en Colombia, a veces pagan más que la inflación; en una crisis inflacionaria, casi nunca alcanzan.',
          'Desde 1971, NO existe ninguna moneda nacional respaldada por algo tangible. Todas dependen de la credibilidad de sus instituciones.',
          'El historial muestra que muchos gobiernos abusaron del poder de crear dinero, sobre todo en crisis, y que ninguna moneda fiat ha conservado su poder de compra durante generaciones.',
          'La visión dominante defiende una inflación baja y estable (2-3%) para evitar la deflación y tener margen ante las crisis. Conocer ambos lados te permite decidir con criterio.',
          'Bitcoin fue creado para ofrecer otra opción: solo existirán 21 millones. Cambiar ese límite exigiría el acuerdo de casi toda la red, y nunca ha ocurrido.',
          'No se trata de "invertir para hacerse rico". Se trata de PROTEGER el valor de tu trabajo de un dinero que pierde valor con el tiempo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu sueldo sube cada año al mismo ritmo que la inflación, 5%. Guardas $10 millones en efectivo durante 10 años. ¿Qué pasa con ese ahorro?',
          options: [
            { id: 'a', text: 'Conserva su valor, porque tu sueldo sube igual que los precios' },
            { id: 'b', text: 'Pierde exactamente la mitad: 5% por año durante 10 años' },
            { id: 'c', text: 'Compra cerca de 40% menos, aunque tu sueldo no haya perdido' },
            { id: 'd', text: 'Crece 5% por año, igual que tu sueldo nominal' }
          ],
          correctAnswer: 'c',
          explanation: 'Que tu sueldo siga a la inflación protege tu ingreso, no tus ahorros. Los $10 millones siguen siendo $10 millones mientras los precios suben 5% cada año. Después de 10 años compran lo que hoy compran 10 / 1.05^10 ≈ $6.1 millones: cerca de 39% menos. No es 50% exacto porque la inflación se compone sobre precios cada vez más altos.'
        },
        {
          id: 'q2',
          question: 'Tienes $100,000 pesos ahorrados en un país con 50% de inflación anual. El banco te paga 10% de interés. Después de 1 año, ¿cuánto PODER DE COMPRA tienes realmente?',
          options: [
            { id: 'a', text: '$110,000: los intereses te suman 10%' },
            { id: 'b', text: 'Unos $73,000: $110,000 divididos entre 1.5' },
            { id: 'c', text: 'Unos $60,000: 10% menos 50% da -40%' },
            { id: 'd', text: '$100,000: interés e inflación se compensan' }
          ],
          correctAnswer: 'b',
          explanation: 'Tienes $110,000 nominales, pero ahora cada cosa cuesta 1.5 veces más. $110,000 / 1.5 ≈ $73,333 de poder de compra: perdiste cerca de 27%. Restar porcentajes (10% menos 50%) solo funciona como aproximación cuando las cifras son pequeñas; con inflación alta exagera la pérdida.'
        },
        {
          id: 'q3',
          question: 'Entre 2020 y 2021, la Reserva Federal de EE. UU. creó unos 4.5 billones de dólares (millones de millones). ¿Cómo lo hizo?',
          options: [
            { id: 'a', text: 'Usó los impuestos que pagaron los ciudadanos' },
            { id: 'b', text: 'Vendió parte de las reservas de oro del país' },
            { id: 'c', text: 'Pidió préstamos a otros países, como China' },
            { id: 'd', text: 'Compró bonos y los pagó con reservas nuevas' }
          ],
          correctAnswer: 'd',
          explanation: 'La Fed compró bonos del gobierno y otros títulos, y los pagó con reservas que creó en ese momento con un registro contable. No usó impuestos, oro ni préstamos. Ese dinero nuevo no existía antes y, con el tiempo, se suma al que ya circula.'
        },
        {
          id: 'q-ord',
          type: 'ordering',
          question: 'Ordena el camino típico del dinero nuevo, desde que se crea hasta que llega a tu sueldo.',
          items: [
            'El banco central compra bonos con reservas nuevas',
            'Los bancos tienen más reservas y prestan más barato',
            'Empresas y fondos compran activos, que suben de precio',
            'Suben los precios de bienes y servicios',
            'Los salarios se ajustan'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'El dinero nuevo entra por el sistema financiero, pasa a los activos y a la economía, y llega de último a los salarios. Por eso, cuando tu sueldo se ajusta, muchos precios ya subieron. En la Lección 3 verás quién gana y quién pierde con este orden.'
        },
        {
          id: 'q4',
          question: 'Un gobierno debe 100 billones de pesos a tasa fija. Durante 5 años la inflación es 10% anual. ¿Qué pasa con el peso REAL de esa deuda?',
          options: [
            { id: 'a', text: 'Baja: la paga con pesos que compran menos' },
            { id: 'b', text: 'Sube: la inflación también infla la deuda' },
            { id: 'c', text: 'Nada: la deuda está fijada en pesos' },
            { id: 'd', text: 'Desaparece: la inflación la cancela sola' }
          ],
          correctAnswer: 'a',
          explanation: 'La deuda sigue siendo de 100 billones nominales, pero cada peso compra menos. En pesos de hoy, después de 5 años pesa unos 100 / 1.1^5 ≈ 62 billones. Ese es el incentivo de "licuar la deuda": la pérdida la absorben quienes prestaron y quienes ahorran en esa moneda.'
        },
        {
          id: 'q5',
          question: 'En Venezuela, Argentina, Turquía y Líbano, la clase media perdió gran parte de sus ahorros. ¿Qué tienen en común estos casos?',
          options: [
            { id: 'a', text: 'Guerras civiles que destruyeron la industria del país' },
            { id: 'b', text: 'Desastres naturales que dejaron escasez de alimentos' },
            { id: 'c', text: 'Políticas fiscales o monetarias que acabaron con la confianza' },
            { id: 'd', text: 'Sanciones internacionales, que fueron la única causa' }
          ],
          correctAnswer: 'c',
          explanation: 'Cada caso tiene matices: Venezuela financió su déficit creando dinero, Turquía bajó tasas mientras los precios subían y en Líbano colapsó un sistema bancario que pagaba intereses con depósitos nuevos. El hilo común es la pérdida de confianza en la moneda tras políticas insostenibles. Cuando esa confianza se rompe, la gente huye hacia dólares, bienes o cualquier cosa que conserve valor.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 6,
        title: 'Checkpoint: Inflación Real vs Nominal',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Te suben el sueldo 8% este año. La inflación del país es 5%. ¿Cuál es el cambio real en tu poder de compra?',
            options: [
              '+8%, recibes el aumento completo',
              'Cerca de +3%',
              '+13%, aumento más inflación',
              '-5%, la inflación anula el aumento'
            ],
            correctAnswer: 1,
            explanation: 'La cuenta exacta es 1.08 / 1.05 ≈ 1.029: tu poder de compra subió cerca de 2.9%. Restar (8% menos 5% = 3%) es una buena aproximación cuando las cifras son pequeñas. Si la inflación hubiera sido 8%, tu "aumento" solo te habría dejado igual.',
            hint: 'Divide (1 + aumento) entre (1 + inflación).'
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
    duration: '19 minutos',
    type: 'Concepto Clave',
    description: 'Cuando se crea dinero nuevo, no llega a todos al mismo tiempo. Quienes lo reciben primero pueden comprar antes de que suban los precios; quienes lo reciben al final pagan más caro. Aprende cómo funciona, qué dicen los economistas y dónde estás tú en esta cadena.',
    sections: [
      {
        type: 'intro',
        title: 'Una Idea de 300 Años que Ayuda a Explicar la Desigualdad',
        content: 'Hacia 1730, el economista irlandés-francés **Richard Cantillon** describió algo que hoy lleva su nombre: **el dinero nuevo no es neutral**. Cuando se crea dinero, no aparece en los bolsillos de todos al mismo tiempo. Alguien lo recibe PRIMERO, y tiene una ventaja: puede comprar a precios de ayer, antes de que suban. Para cuando el dinero llega a los demás (si llega), muchos precios ya subieron. No es una teoría marginal: los propios bancos centrales estudian los efectos distributivos de sus políticas. Lo que se debate es cuánto pesan.',
        image: '/images/lessons/lesson-3/lesson3-1.webp',
        imageAlt: 'La metáfora del río: el dinero nuevo fluye primero a bancos y corporaciones, y llega último a trabajadores y ahorradores',
        imageSummary: 'Piensa en el dinero nuevo como un río. Quienes están cerca de la naciente (bancos, gobierno, grandes empresas) lo reciben primero y en abundancia. Río abajo (trabajadores, pensionados, ahorradores) llega después y con menos fuerza. La imagen exagera para que la idea se entienda: el orden importa.'
      },
      {
        type: 'main',
        title: 'Cómo Funciona: El Camino del Dinero Nuevo',
        content: 'Sigamos, de forma simplificada, el camino que recorre el dinero cuando un banco central crea, por ejemplo, 1 billón de dólares (millones de millones) comprando bonos. Las cifras de la imagen son ilustrativas: lo importante es el orden en que llega el dinero, no los porcentajes exactos.',
        image: '/images/lessons/lesson-3/lesson3-2.webp',
        imageAlt: 'El camino del dinero nuevo en 5 pasos: banco central, bancos grandes, corporaciones, economía real y, por último, tú',
        imageSummary: 'Paso 1: el banco central crea reservas y compra bonos. Paso 2: los grandes bancos que le venden esos bonos reciben el dinero primero. Paso 3: con crédito más barato, empresas y fondos compran activos, y esos precios suben. Paso 4: con el tiempo, el dinero llega a la economía real. Paso 5: tu sueldo se ajusta al final, cuando muchos precios ya subieron. Los porcentajes de la imagen son un ejemplo, no datos reales.'
      },
      {
        type: 'comparison',
        title: 'Los Ganadores vs Los Perdedores',
        leftSide: {
          title: 'Quienes Suelen Ganar (Cerca del Dinero Nuevo)',
          points: [
            'Bancos y entidades que tratan directamente con el banco central',
            'Gobiernos endeudados (su deuda pesa menos con la inflación)',
            'Grandes empresas con acceso a crédito barato',
            'Fondos de inversión y hedge funds (fondos privados de grandes capitales)',
            'Dueños de activos: acciones, bienes raíces, Bitcoin',
            'Quienes tienen deudas grandes a tasa fija'
          ]
        },
        rightSide: {
          title: 'Quienes Suelen Perder (Lejos del Dinero Nuevo)',
          points: [
            'Trabajadores asalariados (el sueldo se ajusta de último)',
            'Pensionados con ingresos fijos',
            'Ahorradores en efectivo o en cuentas con tasa baja',
            'Clase media sin activos significativos',
            'Jóvenes tratando de comprar su primera vivienda',
            'Pequeños negocios sin acceso a crédito barato'
          ]
        }
      },
      {
        type: 'main',
        title: 'Ejemplo Concreto: La Pandemia 2020-2022',
        content: 'La pandemia es el ejemplo reciente más claro de este efecto en acción:',
        features: [
          { icon: Landmark, title: 'Marzo de 2020', text: 'Las bolsas caen más de 30% en un mes. El 23 de marzo, la Fed anuncia compras de bonos sin límite y ese día el S&P 500 toca fondo. Quienes tenían efectivo y acceso al mercado compraron con descuento.' },
          { icon: TrendingUp, title: '2020-2021', text: 'Desde ese piso hasta finales de 2021, el S&P 500 (las 500 empresas más grandes de la bolsa de EE. UU.) se duplica. Las casas en EE. UU. suben más de 30%. Bitcoin pasa de unos $5,000 a $69,000. Quienes ya tenían estos activos vieron crecer su riqueza.' },
          { icon: Users, title: 'Mientras Tanto', text: 'El desempleo en EE. UU. llega a 14.7% en abril de 2020. Los cheques de estímulo (hasta $3,200 por adulto en total) ayudaron a millones a sobrevivir y algunos los ahorraron, pero quien no tenía activos no participó en la gran subida de sus precios.' },
          { icon: TrendingDown, title: '2022', text: 'La inflación en EE. UU. llega a 9.1% en junio de 2022, la más alta en 40 años. Los salarios suben, pero menos que los precios: quien vive de su sueldo pierde poder de compra justo cuando los activos ya habían subido.' }
        ],
        highlight: {
          title: 'El Resultado',
          text: 'Según Oxfam, entre finales de 2019 y finales de 2021 el 1% más rico del mundo se quedó con cerca de dos tercios de toda la riqueza nueva creada: unos 26 billones de dólares de 42. No todo se debe al dinero nuevo (también influyeron la tecnología y los cierres), pero el patrón coincide con lo que describió Cantillon: quienes tenían activos llegaron primero.'
        }
      },
      {
        type: 'main',
        title: 'El Mapa de Cantillon: ¿Dónde Estás Tú?',
        content: 'Seamos honestos sobre tu posición en este sistema. Responde mentalmente:',
        features: [
          { icon: CheckCircle, title: '¿Tienes acceso a crédito grande y barato?', text: 'Un banco o una gran empresa se financia a tasas cercanas a la del banco central. En Colombia, una tarjeta de crédito puede cobrarte hasta la tasa de usura: 28.34% efectivo anual en noviembre de 2026. Parte de esa diferencia es riesgo, pero también es acceso.' },
          { icon: CheckCircle, title: '¿Puedes comprar activos ANTES de que suban?', text: 'Los fondos de inversión reaccionan en segundos a un anuncio del banco central. La mayoría de personas se entera después, cuando los precios ya se movieron.' },
          { icon: CheckCircle, title: '¿Tu ingreso se ajusta solo con la inflación?', text: 'Si eres asalariado, normalmente se ajusta una vez al año, y a veces menos que los precios. Los precios no esperan.' },
          { icon: CheckCircle, title: '¿Tu riqueza está en activos o en efectivo?', text: 'Si está en una cuenta con tasa baja, pierde poder de compra con el tiempo. Si está en vivienda, acciones o Bitcoin, sube con los precios de los activos, aunque con más volatilidad y riesgo.' }
        ],
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'Por Qué la Brecha de Riqueza Crece',
        content: 'Desde los años 80, la desigualdad de riqueza creció mucho en Estados Unidos y en otros países ricos. Nuestra tesis: el Efecto Cantillon es una de sus causas estructurales menos discutidas, acumulándose década tras década.',
        features: [
          { icon: TrendingUp, title: 'Los Activos Suben Más que los Salarios', text: 'Desde 1971, el S&P 500 se multiplicó decenas de veces, incluso sin contar dividendos. En el mismo período, el salario real de un trabajador típico en EE. UU. apenas creció. Si tenías activos, multiplicaste tu riqueza. Si solo tenías tu sueldo, te quedaste atrás.' },
          { icon: Landmark, title: 'La Vivienda se Alejó', text: 'En 1970, una casa en EE. UU. costaba unas 2 a 2.5 veces el ingreso anual de un hogar mediano. Hoy cuesta más de 5 veces. Influyen el suelo escaso, las normas de construcción y las tasas de interés, pero también el dinero barato que fluye hacia los bienes raíces.' },
          { icon: Users, title: 'Los Grandes Capitales Tienen Asesores', text: 'Cuando cambia la política monetaria, los grandes patrimonios reciben análisis el mismo día y ajustan sus inversiones. La mayoría de personas se entera por las noticias, mucho después.' }
        ],
        image: '/images/lessons/lesson-3/lesson3-3.webp',
        imageAlt: 'Ilustración: quienes están cerca de la fuente del dinero nuevo lo reciben primero; quienes están lejos reciben poco y tarde',
        imageSummary: 'La imagen resume nuestra tesis: quien está cerca de la fuente del dinero nuevo se beneficia primero, y quien está lejos recibe poco y tarde. No es que unos trabajen más duro que otros: su posición en el sistema los favorece. Es una ilustración, no una medición.'
      },
      {
        type: 'counterpoint',
        title: 'Lo Que Responden los Economistas',
        content: 'La mayoría de economistas acepta que la política monetaria tiene efectos distributivos, pero no ponen al Efecto Cantillon en el centro:\n\n- **La desigualdad tiene muchas causas.** Tecnología, globalización, impuestos, educación y el peso de los sindicatos explican buena parte de la brecha.\n- **El dinero barato también crea empleo.** Estudios de bancos centrales encuentran que, al evitar recesiones más profundas, estas políticas protegieron sobre todo los empleos de los trabajadores con menos ingresos.\n- **No todos los países siguen el patrón.** En América Latina, la desigualdad de ingresos bajó en la década de 2000, con monedas fiat y bancos centrales.\n\nNuestra respuesta: aunque no sea la única causa, el efecto existe y se acumula durante décadas. Conocerlo te ayuda a decidir dónde guardar tus ahorros, sin importar qué peso le dé cada economista.'
      },
      {
        type: 'main',
        title: 'Latinoamérica: El Efecto Cantillon con Devaluación',
        content: 'En LATAM el efecto se nota aún más, porque nuestras monedas suelen perder valor frente al dólar, y el dólar a su vez pierde poder de compra:',
        features: [
          { icon: AlertTriangle, title: 'Colombia', text: 'Cuando el peso se devalúa, quienes tienen dólares o activos dolarizados conservan su riqueza y quienes solo tienen pesos pierden poder de compra. Y comprar dólares o activos en el exterior es más fácil para las empresas grandes y los patrimonios altos que para un asalariado.' },
          { icon: AlertTriangle, title: 'Argentina', text: 'Durante el cepo y la crisis de 2023-2024, quienes podían comprar dólar blue (el dólar del mercado paralelo) protegían algo; quienes dependían del peso veían evaporarse sus ahorros. Tras la desregulación el mecanismo cambió, pero la lección se mantiene: el acceso desigual a una moneda de reserva es un privilegio.' },
          { icon: AlertTriangle, title: 'Venezuela', text: 'Durante años, quienes tenían conexiones con el gobierno accedían a dólares a la tasa oficial y los revendían a la tasa paralela, muchas veces más alta, con ganancias enormes. La mayoría recibía bolívares que perdieron casi todo su valor.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin: Una Salida del Sistema Cantillon',
        content: 'Bitcoin elimina la pieza central del Efecto Cantillon: un emisor que decide cuánto dinero crear y quién lo recibe primero. Los mineros reciben el BTC nuevo, sí, pero pagan su costo completo en equipos y electricidad, y el calendario de emisión es público desde 2009. Lo que Bitcoin no hace es repartir la riqueza por igual: los primeros en adoptarlo acumularon mucho BTC cuando era barato, y hoy una parte grande de las monedas está en pocas direcciones. Ofrece reglas iguales para todos desde el momento en que entras, no un punto de partida igual.'
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'El Efecto Cantillon: el dinero nuevo no llega a todos al mismo tiempo. Quienes lo reciben primero pueden comprar antes de que suban los precios.',
          'Si vives de un sueldo y ahorras en efectivo, normalmente estás al final de la cadena: cuando el dinero llega a tu ingreso, muchos precios ya subieron.',
          'Suelen ganar: bancos, gobiernos endeudados, grandes empresas, dueños de activos y quienes tienen deudas a tasa fija.',
          'Suelen perder: asalariados, pensionados, ahorradores en efectivo, jóvenes sin activos y buena parte de la clase media latinoamericana.',
          'Nuestra tesis: 50+ años de creación de dinero son una de las causas estructurales menos discutidas de la brecha de riqueza. Los economistas señalan además otras causas, como la tecnología y los impuestos.',
          'Bitcoin elimina el emisor que decide quién recibe primero el dinero nuevo. Sus reglas son iguales para todos, aunque los primeros en adoptarlo concentren mucho BTC.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un banco central crea dinero nuevo comprando bonos. ¿Quién tiene ese dinero en sus manos PRIMERO?',
          options: [
            { id: 'a', text: 'Los trabajadores, a través de sus sueldos' },
            { id: 'b', text: 'Los pensionados, a través de su mesada' },
            { id: 'c', text: 'Los bancos y fondos que le venden bonos' },
            { id: 'd', text: 'Todos los ciudadanos, en partes iguales' }
          ],
          correctAnswer: 'c',
          explanation: 'El banco central paga los bonos a quienes se los venden: grandes bancos y fondos. Ellos pueden usar ese dinero para comprar otros activos antes de que suban de precio. A los sueldos y las pensiones llega después, por el camino largo de la economía real.'
        },
        {
          id: 'q2',
          question: 'Entre marzo de 2020 y finales de 2021, el S&P 500 se duplicó y las casas en EE. UU. subieron más de 30%. Los salarios subieron mucho menos. ¿Quién quedó mejor parado?',
          options: [
            { id: 'a', text: 'Quienes ya tenían acciones o vivienda propia' },
            { id: 'b', text: 'Quienes guardaban sus ahorros en efectivo' },
            { id: 'c', text: 'Quienes dependían solo de su sueldo' },
            { id: 'd', text: 'Todos por igual, gracias a los cheques de estímulo' }
          ],
          correctAnswer: 'a',
          explanation: 'Los dueños de activos vieron subir su riqueza con los precios. Quienes dependían de su sueldo o de efectivo perdieron poder de compra relativo. Según Oxfam, el 1% más rico se quedó con unos 26 de los 42 billones de dólares de riqueza nueva creada en esos dos años. Los cheques de estímulo ayudaron, pero no compensaron esa diferencia.'
        },
        {
          id: 'q3',
          question: 'En 2015, Ana compró un apartamento con un crédito hipotecario a tasa fija. Luis, con el mismo ingreso, guardó en efectivo el dinero de la cuota inicial. En los 10 años siguientes hubo inflación y la vivienda subió. ¿Quién quedó en mejor posición?',
          options: [
            { id: 'a', text: 'Luis, porque el efectivo conserva su valor' },
            { id: 'b', text: 'Ana: su activo subió y su deuda pesa menos' },
            { id: 'c', text: 'Luis, porque no le debe nada a ningún banco' },
            { id: 'd', text: 'Ninguno: la inflación afecta a ambos igual' }
          ],
          correctAnswer: 'b',
          explanation: 'Ana tiene un activo que subió con los precios y una deuda fija que, con la inflación, pesa cada vez menos. El efectivo de Luis compra menos cada año. No siempre sale así: si la vivienda cae o Ana pierde su ingreso, el crédito puede volverse una carga. Pero el ejemplo muestra por qué la inflación favorece a quien tiene activos y deudas a tasa fija.'
        },
        {
          id: 'q4',
          question: 'El banco central baja las tasas de interés y crea dinero. ¿Quién puede aprovechar PRIMERO ese crédito barato?',
          options: [
            { id: 'a', text: 'Quien ya tiene acceso a crédito grande y barato' },
            { id: 'b', text: 'Quien paga 28% al año en su tarjeta de crédito' },
            { id: 'c', text: 'Quien recibe un subsidio del gobierno meses después' },
            { id: 'd', text: 'Quien guarda sus ahorros en efectivo en casa' }
          ],
          correctAnswer: 'a',
          explanation: 'Bancos, grandes empresas y fondos se financian a tasas cercanas a la del banco central y pueden comprar activos de inmediato. Una persona con tarjeta de crédito paga tasas mucho más altas (parte es riesgo, parte es acceso) y no recibe el beneficio de las tasas bajas hasta mucho después, si es que lo recibe.'
        },
        {
          id: 'q5',
          question: '¿Por qué se dice que Bitcoin reduce el Efecto Cantillon?',
          options: [
            { id: 'a', text: 'Su emisión es fija y pública: nadie recibe BTC nuevo gratis' },
            { id: 'b', text: 'Satoshi y los primeros usuarios reciben BTC nuevo antes' },
            { id: 'c', text: 'Los mineros pueden crear BTC extra cuando la red lo pide' },
            { id: 'd', text: 'Su precio siempre sube, así que todos ganan a la vez' }
          ],
          correctAnswer: 'a',
          explanation: 'No hay un emisor que decida cuánto crear ni a quién dárselo primero. Los mineros reciben el BTC nuevo, pero pagan su costo en equipos y electricidad, y el calendario lo conoce todo el mundo. Eso no hace que la riqueza en Bitcoin esté repartida por igual: los primeros en adoptarlo tienen mucho BTC. Y su precio no siempre sube: ha caído más de 70% varias veces.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Como Bitcoin elimina el Efecto Cantillon, la riqueza en Bitcoin está repartida de forma igualitaria.',
          correctAnswer: false,
          explanation: 'Falso. Bitcoin elimina al emisor que decide quién recibe primero el dinero nuevo, pero no reparte la riqueza por igual. Los primeros en adoptarlo compraron o minaron cuando era muy barato, y hoy una parte grande del BTC está en pocas direcciones (algunas son exchanges que guardan monedas de millones de usuarios). Bitcoin ofrece reglas iguales, no un punto de partida igual.'
        },
        {
          id: 'q7',
          question: 'Desde los años 80, la desigualdad de riqueza creció mucho en EE. UU. ¿Qué afirmación es más precisa?',
          options: [
            { id: 'a', text: 'Se debe solo a la creación de dinero; lo demás es distracción' },
            { id: 'b', text: 'Tiene varias causas, y el Efecto Cantillon es una de ellas' },
            { id: 'c', text: 'Se debe solo a la tecnología; el dinero nuevo no influye' },
            { id: 'd', text: 'Es puro mérito: los más ricos simplemente trabajan más' }
          ],
          correctAnswer: 'b',
          explanation: 'Tecnología, globalización, impuestos y educación influyen. El Efecto Cantillon es una causa adicional, poco discutida, que se acumula con cada ciclo de dinero barato: los activos suben antes y más que los salarios. Atribuirlo todo a una sola causa, sea cual sea, simplifica demasiado.'
        },
        {
          id: 'q8-review',
          question: 'Repaso de la Lección 2: el gobierno anuncia 2 billones de dólares nuevos "para llegar a todos". ¿Por qué no afecta a todos por igual?',
          options: [
            { id: 'a', text: 'Llega primero a unos, que compran antes de que suban los precios' },
            { id: 'b', text: 'El dinero nuevo es solo un número y no tiene efectos reales' },
            { id: 'c', text: 'Los políticos se quedan con una parte antes de repartirlo' },
            { id: 'd', text: 'Genera inflación, y la inflación afecta a todos por igual' }
          ],
          correctAnswer: 'a',
          explanation: 'En la Lección 2 viste cómo se crea el dinero nuevo. Aquí está la otra mitad: no llega a todos a la vez. Quienes lo reciben primero (bancos, fondos, grandes empresas) compran a precios de ayer. Para cuando llega a tu sueldo o a un subsidio, muchos precios ya subieron. La inflación no afecta a todos igual: depende de cuándo te llega el dinero y de si tienes activos.'
        }
      ]
    }
  },
  4: {
    id: 4,
    title: 'Bitcoin: La Salida',
    level: 'Principiante',
    number: '4 de 19',
    duration: '21 minutos',
    type: 'Lectura',
    description: 'Ya viste cómo el dinero fiat pierde valor con el tiempo. Aquí conocerás la alternativa que propone este curso: Bitcoin, el primer dinero digital escaso que no depende de ningún gobierno ni empresa. Verás por qué existe, qué lo hace diferente, sus casos reales y también sus riesgos.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Génesis: 3 de Enero de 2009',
        content: 'El mundo atravesaba la peor crisis financiera en décadas. Préstamos hipotecarios irresponsables y derivados que casi nadie entendía habían llevado a grandes bancos al borde de la quiebra. Los gobiernos respondieron con rescates de cientos de miles de millones de dólares, mientras millones de familias perdían sus casas. En medio de esa crisis, el 3 de enero de 2009, alguien bajo el seudónimo **Satoshi Nakamoto** minó el primer bloque de Bitcoin. En ese bloque dejó grabado un titular del periódico británico The Times: **"Chancellor on brink of second bailout for banks"** (el ministro de Hacienda, al borde de un segundo rescate para los bancos).',
        highlight: {
          title: 'El Mensaje Grabado',
          text: 'Ese titular quedó registrado en el primer bloque de Bitcoin y cualquiera puede leerlo hoy. Satoshi nunca lo explicó en detalle, pero semanas después escribió que el problema del dinero tradicional es la confianza que exige: hay que confiar en que el banco central no lo devalúe, y la historia está llena de casos en que esa confianza se rompió. Bitcoin nació como una respuesta a ese problema.'
        }
      },
      {
        type: 'main',
        title: 'No es Solo Tecnología: Es Una Propuesta Monetaria',
        content: 'Muchos ven a Bitcoin como "solo tecnología" o "una inversión". La idea de fondo es otra: por primera vez, alguien creó un dinero digital escaso sin una autoridad central que pueda emitir más. Para entender por qué importa, recuerda las lecciones anteriores:',
        features: [
          { icon: AlertTriangle, title: 'El Problema del Dinero Fiat', text: 'Su oferta depende de decisiones de política, y los gobiernos tienen incentivos para crear más. Ninguna moneda fiat ha conservado su poder de compra durante generaciones: la devaluación acumulada es la norma histórica.' },
          { icon: AlertTriangle, title: 'El Problema del Oro', text: 'Es difícil de transportar, dividir, verificar y guardar de forma segura. Los gobiernos lo han confiscado (EE. UU. obligó a entregarlo en 1933). Y no se puede enviar por internet.' },
          { icon: Zap, title: 'La Propuesta de Bitcoin', text: 'Escaso como el oro, pero completamente digital. Se puede enviar a cualquier lugar del mundo en minutos. Si controlas tus llaves y las resguardas bien, es muy difícil que alguien te lo quite sin tu clave o sin coacción.' }
        ]
      },
      {
        type: 'main',
        title: 'Las 4 Innovaciones que Cambian Todo',
        content: 'Bitcoin combina varias innovaciones que, juntas, crean algo que nunca antes existió:',
        features: [
          { icon: Lock, title: '1. Escasez Digital', text: 'Solo existirán **21 millones de Bitcoin**. El límite está en el código y lo verifica cada nodo de la red. Cambiarlo exigiría el acuerdo de casi toda la red y destruiría la promesa central del activo: por eso las reglas monetarias **nunca se han cambiado**. Antes de Bitcoin, todo lo digital podía copiarse sin límite.' },
          { icon: Network, title: '2. Descentralización', text: 'No hay CEO de Bitcoin, ni servidor central, ni empresa a la que demandar o presionar. Decenas de miles de computadoras en todo el mundo mantienen la red. Para "apagar" Bitcoin habría que apagarlas todas a la vez, y otras nuevas aparecerían.' },
          { icon: Shield, title: '3. Inmutabilidad', text: 'Una vez que una transacción tiene suficientes confirmaciones, revertirla es prácticamente imposible. Nadie la "edita" a voluntad: ni Satoshi ni un gobierno. Un ataque del 51% es posible en teoría, pero en Bitcoin costaría miles de millones de dólares en equipos y energía, y dañaría al propio atacante.' },
          { icon: Globe, title: '4. Sin Fronteras ni Permisos', text: 'Puedes enviar desde $1 hasta $1,000 millones a cualquier país, 24/7, sin pedir permiso a ningún banco. No hay horario bancario. La transacción se confirma en minutos, con una comisión que sube cuando la red está congestionada.' }
        ]
      },
      {
        type: 'main',
        title: 'Entendiendo la Escasez: ¿Por Qué Solo 21 Millones?',
        content: 'La escasez de Bitcoin no depende de la buena voluntad de nadie: la fija el código y la hacen cumplir los nodos de la red.',
        features: [
          { icon: Clock, title: 'El Halving (Reducción a la Mitad)', text: 'Aproximadamente cada 4 años, la cantidad de Bitcoin nuevo que se crea se reduce A LA MITAD. En 2009 se creaban 50 BTC cada 10 minutos. Hoy, después de 4 halvings, se crean 3.125 BTC. Hacia el año 2140 dejará de crearse Bitcoin nuevo.' },
          { icon: TrendingDown, title: 'Emisión Decreciente', text: 'La mayoría de monedas fiat crecen en cantidad año tras año. Bitcoin se emite cada vez MENOS, según un calendario conocido desde 2009. Nadie puede acelerar la emisión porque "la economía lo necesita".' },
          { icon: Lock, title: 'Verificación Distribuida', text: 'Miles de computadoras (nodos) verifican constantemente que se cumplan las reglas. Si alguien intentara crear más Bitcoin de lo permitido, la red rechazaría su versión.' }
        ],
        highlight: {
          title: 'La Matemática de la Escasez',
          text: 'Solo 21 millones de Bitcoin para 8 mil millones de personas, y se estima que unos 3 a 4 millones ya se perdieron para siempre por llaves extraviadas. Hay más millonarios en el mundo que bitcoins. Es la primera vez que existe algo digital con una escasez que cualquiera puede verificar.'
        }
      },
      {
        type: 'comparison',
        title: 'Bitcoin vs Oro vs Dólar',
        leftSide: {
          title: 'Oro (5,000 años de historia)',
          points: [
            'Escaso, pero se sigue minando',
            'Difícil de dividir (no puedes pagar un café con pepitas)',
            'Costoso de almacenar y asegurar',
            'Imposible de enviar por internet',
            'Confiscable (EE. UU. obligó a entregarlo en 1933)',
            'Difícil de verificar su autenticidad',
            'Menos volátil y con milenios de historia'
          ]
        },
        rightSide: {
          title: 'Bitcoin (Dinero del Siglo XXI)',
          points: [
            'Oferta fija de 21 millones, verificable',
            'Divisible hasta 8 decimales (satoshis)',
            'Se guarda con una frase semilla (siempre con respaldo físico seguro)',
            'Enviable a cualquier lugar en minutos',
            'Muy difícil de confiscar sin tu clave o sin coacción',
            'Verificable por cualquiera que corra un nodo',
            'Muy volátil y con solo 17 años de historia'
          ]
        }
      },
      {
        type: 'main',
        title: 'Por Qué Es Tan Difícil Prohibir Bitcoin',
        content: 'China prohibió a sus bancos operar con Bitcoin en 2013, cerró los exchanges en 2017 y en 2021 expulsó a los mineros y declaró ilegal todo negocio con criptomonedas. En India, el banco central prohibió a los bancos atender a empresas cripto en 2018, y la Corte Suprema anuló la medida en 2020. Nigeria impuso una restricción similar en 2021 y la levantó en diciembre de 2023, mientras seguía entre los países con más adopción del mundo. ¿Por qué estas medidas no lograron detener la red?',
        features: [
          { icon: Network, title: 'No Hay Servidor que Cerrar', text: 'En noviembre de 2026 se contaban unos 20,700 nodos de Bitcoin accesibles públicamente, y muchos más que no aparecen en esos conteos. No hay sede central, ni CEO, ni empresa. Un gobierno puede perseguir a quienes lo usan en su territorio, pero no puede apagar la red.' },
          { icon: Shield, title: 'Criptografía Muy Difícil de Romper', text: 'Una clave privada de Bitcoin es un número elegido entre unas 10^77 posibilidades (un 1 seguido de 77 ceros). Adivinarla por fuerza bruta es imposible en la práctica con la tecnología actual. La computación cuántica es un riesgo de largo plazo que la comunidad ya estudia. En la práctica, la gente pierde sus bitcoins por estafas y errores, no porque alguien rompa la criptografía.' },
          { icon: Users, title: 'Efecto de Red', text: 'Cada nuevo usuario, minero y empresa hace a la red más útil y más difícil de detener. Hoy hay fondos cotizados (ETFs) de Bitcoin en EE. UU., empresas que lo tienen en su balance y decenas de millones de usuarios en el mundo.' },
          { icon: Globe, title: 'Internet es Global', text: 'Mientras exista internet en algún lugar del mundo, la red puede seguir funcionando. Prohibirla en un país hace más difícil y riesgoso usarla allí, pero no la elimina.' }
        ],
        highlight: {
          title: 'El Precedente de China',
          text: 'Tras la expulsión de los mineros en 2021, la capacidad de minería de la red cayó cerca de 50%. La red nunca se detuvo: los mineros se mudaron a otros países y en pocos meses se recuperó. En noviembre de 2026, Bitcoin vale unas 100 veces su precio de finales de 2013. Eso no hace inofensivas las prohibiciones: para quien vive en un país que lo prohíbe, usarlo tiene costos y riesgos reales.'
        },
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'Bitcoin en Tiempos de Crisis: Casos Reales',
        content: 'Estos casos muestran para qué ha servido Bitcoin, y en algunos casos otras criptomonedas, cuando el sistema tradicional falló:',
        features: [
          { icon: AlertTriangle, title: 'Venezuela', text: 'Mientras el bolívar perdía casi todo su valor, quienes tenían Bitcoin conservaron mucho más poder de compra, aun con su volatilidad. Algunos emigraron llevando sus ahorros en una frase de 12 palabras memorizada, que nadie podía confiscar en la frontera. Eso sí: la memoria fue el vehículo del viaje, no la bóveda. Sin un respaldo físico seguro esperando en el destino, olvidar una sola palabra significa perderlo todo.' },
          { icon: AlertTriangle, title: 'Ucrania 2022', text: 'Tras la invasión rusa, el gobierno ucraniano recibió más de $100 millones en donaciones en criptomonedas (Bitcoin, Ether y stablecoins) en las primeras semanas. El dinero llegó directo y en minutos, sin depender de bancos ni de horarios.' },
          { icon: AlertTriangle, title: 'Líbano', text: 'Desde 2019, los bancos no dejaban a la gente retirar SU dinero. Quienes tenían Bitcoin en una wallet propia seguían teniendo acceso a sus fondos, igual que quienes guardaban dólares en efectivo en casa.' },
          { icon: AlertTriangle, title: 'Argentina', text: 'Durante la crisis inflacionaria de 2023-2024 (2023 cerró con 211% de inflación anual, con un pico de 289% en abril de 2024), muchos argentinos convertían sus pesos el mismo día de cobro. La mayoría lo hacía a dólares digitales (stablecoins), que verás en la Lección 12; otros, a Bitcoin.' }
        ]
      },
      {
        type: 'main',
        title: 'Lo Que Bitcoin NO Es',
        content: 'Despejemos algunos mitos, en ambas direcciones:',
        features: [
          { icon: AlertTriangle, title: 'NO es una forma de hacerse rico rápido', text: 'Bitcoin es muy volátil. Puede subir o bajar 50% en meses, y ha caído más de 70% varias veces, la última en 2022. NO es para el dinero que necesitas pronto. Quienes lo usan para ahorrar piensan en plazos de 5 a 10 años o más, y aun así no hay garantías.' },
          { icon: AlertTriangle, title: 'NO es principalmente "dinero de criminales"', text: 'Según Chainalysis, menos del 1% del volumen en criptomonedas en 2025 estuvo ligado a actividades ilícitas, y la mayor parte fue en stablecoins, no en Bitcoin. Es una estimación mínima que suele revisarse al alza. La ONU estima el lavado de dinero en el sistema tradicional en 2-5% del PIB mundial; no son cifras directamente comparables, pero muestran que el crimen no es exclusivo de cripto. Además, la blockchain de Bitcoin es pública, y muchas investigaciones han rastreado fondos gracias a ella.' },
          { icon: AlertTriangle, title: '¿Es una burbuja?', text: 'Ha sido declarado "muerto" cientos de veces desde 2010 y ha tenido caídas de 70-85%, pero sigue funcionando después de 17 años. Hoy lo compran fondos institucionales a través de ETFs, y El Salvador lo adoptó como moneda de curso legal en 2021 (desde 2025 su aceptación es voluntaria). Sobrevivir no garantiza el futuro: su precio podría volver a caer mucho.' },
          { icon: AlertTriangle, title: 'NO necesitas comprar un Bitcoin entero', text: 'Bitcoin es divisible hasta 8 decimales. Puedes empezar con montos pequeños. La unidad mínima, un satoshi, es 0.00000001 BTC.' }
        ]
      },
      {
        type: 'counterpoint',
        title: 'Los Riesgos y Críticas que Debes Conocer',
        content: 'Este curso sostiene que Bitcoin es una buena alternativa para proteger parte de tus ahorros. Para decidir con criterio, conoce también sus críticas más serias:\n\n- **Volatilidad.** En 2022 cayó cerca de 77% desde su máximo. Si necesitas el dinero en ese momento, la tesis de largo plazo no te ayuda.\n- **Concentración de la minería.** Los dos pools de minería más grandes producen cerca de la mitad de los bloques. Los mineros individuales pueden cambiar de pool, pero es un punto a vigilar.\n- **Consumo de energía.** La minería usa tanta electricidad como un país mediano. Sus defensores señalan que usa cada vez más energía renovable o sobrante; sus críticos, que sigue siendo un costo ambiental.\n- **Seguridad a futuro.** A medida que baja la emisión, la seguridad de la red dependerá cada vez más de las comisiones. Nadie sabe aún si alcanzarán.\n- **Riesgo personal.** Si pierdes tus llaves o caes en una estafa, nadie puede devolverte tus bitcoins.\n- **Regulación.** Los gobiernos pueden restringir el acceso, gravarlo o cerrar las cuentas bancarias de quienes lo usan.\n\nNada de esto invalida la tesis, pero explica por qué en las próximas lecciones insistimos en empezar con montos pequeños y aprender a custodiar bien.'
      },
      {
        type: 'main',
        title: 'Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas por qué Bitcoin es diferente al dinero que usas todos los días. ¿Qué problema resuelve que el peso o el dólar no pueden? ¿Y cuál es su riesgo principal?' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Investigaciones en psicología del aprendizaje (por ejemplo, Nestojko y colegas, 2014) encontraron que preparar una explicación para otros mejora el recuerdo de las ideas principales. El efecto es moderado, pero real: explicar te obliga a ordenar lo que sabes y te muestra lo que todavía no entiendes.'
        }
      },
      {
        type: 'takeaways',
        title: 'Por Qué Bitcoin Importa Para TU Vida',
        items: [
          'Por primera vez existe un dinero cuya emisión no depende de un gobierno, banco o empresa: el límite está en el código y lo hace cumplir la red.',
          'No necesitas permiso de nadie para guardar y mover valor en Bitcoin. Eso no elimina riesgos (volatilidad, errores de custodios, pérdida de llaves); elimina un tipo de censura y de devaluación unilateral.',
          'El halving reduce la emisión a la mitad cada 4 años; el cuarto fue en abril de 2024. Cada ciclo hay menos Bitcoin nuevo, pero la demanda no está garantizada.',
          'Bitcoin tiene riesgos reales: volatilidad extrema, concentración de la minería, dudas sobre su seguridad a largo plazo y la posibilidad de perder tus llaves.',
          'Para muchos es una tesis de protección frente a la inflación fiat. No es un consejo de compra: es un marco para entender por qué existe Bitcoin antes de decidir si te conviene.',
          'La pregunta útil no es "¿debería comprar Bitcoin ya?", sino "¿entiendo los riesgos, mi horizonte y cuánto puedo destinar sin tocar mi fondo de emergencia?" Empezar con seguridad importa más que empezar rápido.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué grabó Satoshi Nakamoto en el primer bloque de Bitcoin?',
          options: [
            { id: 'a', text: '"Hello World", la tradición de los programadores' },
            { id: 'b', text: 'Un titular sobre un nuevo rescate a los bancos' },
            { id: 'c', text: 'Su nombre real y el país donde vivía' },
            { id: 'd', text: 'Nada: el primer bloque no tenía mensaje' }
          ],
          correctAnswer: 'b',
          explanation: 'Satoshi grabó el titular de The Times del 3 de enero de 2009: "Chancellor on brink of second bailout for banks". Sirve como sello de fecha (prueba que el bloque no se creó antes) y casi siempre se lee como una crítica al sistema que rescataba bancos con dinero público.'
        },
        {
          id: 'q2',
          question: '¿Por qué se dice que Bitcoin tiene "escasez digital"?',
          options: [
            { id: 'a', text: 'Porque comprar Bitcoin es difícil y costoso' },
            { id: 'b', text: 'Porque cada nodo verifica el límite de 21 millones' },
            { id: 'c', text: 'Porque Satoshi puede ajustar el límite si hace falta' },
            { id: 'd', text: 'Porque los mineros votan cada año un nuevo límite' }
          ],
          correctAnswer: 'b',
          explanation: 'El límite de 21 millones está en el código y cada nodo rechaza cualquier bloque que lo viole. Cambiarlo exigiría que casi toda la red (nodos, mineros, usuarios, empresas) aceptara romper la promesa central de Bitcoin, algo que nunca ha estado cerca de ocurrir. Satoshi no tiene ese poder, y los mineros tampoco.'
        },
        {
          id: 'q3',
          question: '¿Qué es el "halving" de Bitcoin?',
          options: [
            { id: 'a', text: 'Cuando el precio cae 50% desde su máximo histórico' },
            { id: 'b', text: 'Cada ~4 años, la emisión de BTC nuevo baja a la mitad' },
            { id: 'c', text: 'Cuando los mineros reparten sus ganancias con los nodos' },
            { id: 'd', text: 'Un error del código que aparece cada cuatro años' }
          ],
          correctAnswer: 'b',
          explanation: 'El halving reduce a la mitad la recompensa por bloque. En 2009 eran 50 BTC cada 10 minutos; desde abril de 2024 son 3.125 BTC. Reduce la oferta nueva, pero no garantiza que el precio suba: eso depende de la demanda.'
        },
        {
          id: 'q4',
          question: 'China prohibió a sus bancos operar con Bitcoin en 2013, cerró los exchanges en 2017 y expulsó a los mineros en 2021. ¿Qué pasó con la red?',
          options: [
            { id: 'a', text: 'Se detuvo durante semanas hasta que volvieron los mineros' },
            { id: 'b', text: 'Siguió funcionando: la minería se mudó a otros países' },
            { id: 'c', text: 'Desapareció de China y el precio nunca se recuperó' },
            { id: 'd', text: 'Pasó a ser una versión controlada por el gobierno chino' }
          ],
          correctAnswer: 'b',
          explanation: 'En 2021 la capacidad de minería cayó cerca de 50%, pero la red nunca se detuvo: los bloques siguieron saliendo, los mineros se mudaron a EE. UU., Kazajistán y otros países, y en pocos meses se recuperó. Una prohibición no apaga la red, aunque sí hace más difícil y riesgoso usarla en ese país.'
        },
        {
          id: 'q5',
          question: 'Una persona venezolana debe emigrar y quiere llevar sus ahorros. ¿Qué opción es más difícil de confiscar en la frontera?',
          options: [
            { id: 'a', text: 'Dólares en efectivo escondidos en la ropa' },
            { id: 'b', text: 'Una transferencia bancaria internacional' },
            { id: 'c', text: 'Bitcoin, con un respaldo de la frase en el destino' },
            { id: 'd', text: 'Joyas de oro repartidas en varias maletas' }
          ],
          correctAnswer: 'c',
          explanation: 'El efectivo y el oro se pueden encontrar y confiscar, y una transferencia se puede bloquear. Bitcoin no viaja contigo: viaja la frase que da acceso. Pero memorizar NO reemplaza el respaldo físico: si olvidas una palabra, lo pierdes todo. Y Bitcoin tiene su propio riesgo: su precio puede caer mucho justo cuando necesitas venderlo.'
        },
        {
          id: 'q6',
          question: 'Bitcoin tiene una oferta fija de 21 millones. ¿Por qué entonces su precio es tan volátil?',
          options: [
            { id: 'a', text: 'Es una estafa que tarde o temprano va a colapsar' },
            { id: 'b', text: 'Con oferta fija, cada cambio de demanda mueve el precio' },
            { id: 'c', text: 'Satoshi y los mineros manipulan el precio todos los días' },
            { id: 'd', text: 'Su oferta total cambia mucho de un mes a otro' }
          ],
          correctAnswer: 'b',
          explanation: 'Como la oferta no puede crecer cuando sube la demanda, todo el ajuste ocurre en el precio. A eso se suman un mercado joven, mucha especulación y préstamos apalancados. La tendencia de largo plazo ha sido alcista, pero con caídas de 70-85% en el camino y sin garantía de que se repita.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Como Bitcoin ha sobrevivido a cientos de anuncios de su "muerte", está garantizado que su precio seguirá subiendo a largo plazo.',
          correctAnswer: false,
          explanation: 'Falso. Que haya sobrevivido 17 años y varias caídas de más de 70% muestra que es resistente, pero no garantiza su futuro. Este curso sostiene una tesis a favor de Bitcoin, y una tesis puede fallar. Por eso nunca debes invertir dinero que necesites pronto o que no puedas permitirte perder.'
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
            question: 'Imagina que proponen subir el límite de Bitcoin de 21 a 42 millones "solo esta vez", para pagar más a los mineros. ¿Cuál es el problema principal?',
            options: [
              '42 millones es demasiado: no alcanzaría la minería',
              'Ninguno: sigue habiendo un límite, solo que mayor',
              'Si el límite cambia una vez, puede volver a cambiar',
              'Ninguno: el precio se ajusta solo al nuevo total'
            ],
            correctAnswer: 2,
            explanation: 'Lo valioso no es el número 21 millones, sino que nadie pueda cambiarlo. Si se cambia "solo esta vez", el límite pasa a ser negociable y la escasez deja de ser creíble. Por eso la mayoría de nodos rechazaría un cambio así, aunque viniera de desarrolladores conocidos.',
            hint: 'Piensa en qué hace creíble una promesa de escasez.'
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
    duration: '21 minutos',
    type: 'Lectura',
    description: 'La blockchain es la tecnología que hace posible Bitcoin, pero ¿cómo funciona realmente? Aprende cómo miles de computadoras mantienen un registro que nadie puede falsificar, sin necesidad de confiar en ninguna autoridad central.',
    sections: [
      {
        type: 'intro',
        title: 'El Problema que Nadie Había Resuelto',
        content: 'Antes de la blockchain, había un problema fundamental en el mundo digital: **¿cómo pruebas que algo es tuyo si todo se puede copiar?** Si te mando una foto por email, yo sigo teniendo la foto y tú también la tienes. No puedo "enviarte" la foto de forma que yo deje de tenerla. Esto es un problema para el dinero digital. Si te "envío" un dólar digital, ¿cómo sabes que no me lo quedé también? ¿Cómo sabes que no se lo envié a otras 10 personas? Este es el famoso **"problema del doble gasto"** (double spending). Antes de Bitcoin, la única solución era un intermediario de confianza (un banco, PayPal, Visa) que lleva el registro de quién tiene qué. La blockchain resuelve esto sin intermediarios.',
        highlight: {
          title: 'El Avance Histórico',
          text: 'Durante décadas, criptógrafos e informáticos intentaron crear dinero digital sin un intermediario central (proyectos como eCash, b-money o bit gold). Satoshi Nakamoto combinó varias de esas ideas y logró algo que ninguno había conseguido funcionando en la práctica: escasez digital verificable sin necesidad de confiar en nadie.'
        }
      },
      {
        type: 'main',
        title: 'La Analogía del Libro Contable Mágico',
        content: 'Imagina un libro de contabilidad con propiedades mágicas:',
        features: [
          { icon: Users, title: 'Miles de Copias Idénticas', text: 'Este libro no existe en un solo lugar. Existen miles de copias exactamente iguales, cada una en una computadora diferente en todo el mundo. Cuando se agrega una página nueva, todas las copias la reciben y la verifican en segundos o minutos.' },
          { icon: Lock, title: 'Tinta Indeleble', text: 'Una vez que escribes algo en este libro y pasan suficientes confirmaciones, reescribirlo es tan caro que en la práctica no ocurre. La tinta se "fija" en minutos. Ni el creador del libro puede cambiar lo escrito a voluntad; solo un ataque masivo al sistema de consenso podría reescribir historia reciente, y normalmente se destruye a sí mismo al hacerlo.' },
          { icon: Link, title: 'Páginas Encadenadas', text: 'Cada página está matemáticamente conectada a la anterior. Si alguien intenta cambiar algo en la página 50, todas las páginas siguientes (51, 52, 53...) quedarían "rotas" y todos notarían la manipulación inmediatamente.' },
          { icon: Globe, title: 'Público y Transparente', text: 'Cualquier persona en el mundo puede ver el libro completo, verificar cualquier entrada, y confirmar que todo está en orden. No hay secretos.' }
        ],
        highlight: {
          title: '¿Ves el Poder?',
          text: 'Acabas de describir un sistema donde reescribir el historial compartido es extremadamente difícil y costoso, y donde cualquiera puede auditar las mismas reglas. Eso no significa que "nadie pueda robarte": si pierdes tus llaves, firmas un contrato malicioso o caen en un phishing, el daño es real. Blockchain protege el libro; tú tienes que proteger el acceso.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un "Bloque" y qué es la "Cadena"?',
        content: 'Vamos a descomponer el nombre "blockchain" (cadena de bloques):',
        features: [
          { icon: Layers, title: '¿Qué es un Bloque?', text: 'Un bloque es como una página del libro. Contiene un grupo de transacciones (por ejemplo: "Ana envió 0.5 BTC a Carlos", "Pedro envió 1 BTC a María"). En Bitcoin, un nuevo bloque se crea aproximadamente cada 10 minutos. En Solana, cada 200 milisegundos aproximadamente.' },
          { icon: Link, title: '¿Qué es la Cadena?', text: 'Cada bloque contiene una "huella digital" (hash) del bloque anterior. Esto los conecta en una CADENA. El bloque 100 contiene el hash del bloque 99, que contiene el hash del 98, y así hasta el bloque génesis (el primero).' },
          { icon: Shield, title: '¿Por Qué Esto Importa?', text: 'Si alguien intenta cambiar una transacción en el bloque 50, el hash de ese bloque cambia. Pero el bloque 51 tiene el hash VIEJO del bloque 50, así que ya no coincide. Tendrías que rehacer TODOS los bloques desde el 50 hasta el actual, y hacerlo más rápido que el resto de la red. En la práctica, imposible.' }
        ]
      },
      {
        type: 'main',
        title: 'El Hash: La Huella Digital Matemática',
        content: 'El **hash** es el concepto más importante para entender por qué la blockchain es segura. Es una función matemática que convierte CUALQUIER cantidad de datos en un código de longitud fija.',
        features: [
          { icon: Zap, title: 'Ejemplo de Hash', text: 'Si escribes "Hola" y lo pasas por el algoritmo SHA-256 (el que usa Bitcoin), obtienes: "e633f4fc79badea1dc5db970cf397c8248bac47cc3acf9915ba60b5d76b0e88f". Ese código ES el hash de "Hola".' },
          { icon: AlertTriangle, title: 'Cambio Mínimo = Hash Totalmente Diferente', text: 'Si cambias "Hola" por "hola" (solo la mayúscula), el hash es completamente diferente: "b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79". De 64 caracteres, solo uno coincide en la misma posición, y por pura casualidad.' },
          { icon: Lock, title: 'Irreversible', text: 'Con la tecnología actual, es imposible en la práctica reconstruir el dato original a partir del hash. Es fácil ir de "Hola" al hash, pero no del hash a "Hola". Por eso se le llama función de un solo sentido.' }
        ],
        highlight: {
          title: 'Aplicación en Blockchain',
          text: 'Cada bloque contiene el hash del bloque anterior. Esto significa que cada bloque está matemáticamente conectado a TODA la historia anterior. Cambiar algo del pasado obligaría a recalcular los hashes de TODOS los bloques siguientes. En Bitcoin, eso exige además repetir todo el trabajo de minería de esos bloques, algo inviable en la práctica.'
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
          text: 'Porque por primera vez, desconocidos pueden ponerse de acuerdo sobre quién tiene qué sin necesitar un intermediario. Para transferir valor digital, ya no hace falta que un banco valide cada transacción.'
        }
      },
      {
        type: 'comparison',
        title: 'Proof of Work vs Proof of Stake',
        leftSide: {
          title: 'Proof of Work (Bitcoin)',
          points: [
            'Seguridad respaldada por energía física real',
            'Más probado en el tiempo (17 años)',
            'Permissionless: cualquiera puede intentar minar (en la práctica compiten ASICs y granjas)',
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
            'Bloques cada ~200 milisegundos en Solana',
            'Usado por: Solana, Ethereum, Cardano'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Por Qué es Prácticamente Imposible Hackear?',
        content: 'Vamos a entender por qué atacar una blockchain como Bitcoin es económicamente absurdo:',
        features: [
          { icon: Shield, title: 'El Ataque del 51%', text: 'El ataque más conocido consiste en controlar más del 50% del poder de cómputo (en PoW) o del stake (en PoS). Así podrías reescribir bloques recientes más rápido que el resto de la red.' },
          { icon: TrendingDown, title: 'El Costo es Absurdo', text: 'Para atacar Bitcoin necesitarías más poder de cómputo que todos los mineros del mundo combinados. Hoy eso costaría miles de millones de dólares en equipos y electricidad. Y aun así solo podrías gastar dos veces tus propias monedas o bloquear transacciones ajenas: no podrías robar las monedas de otros, porque no tienes sus llaves.' },
          { icon: AlertTriangle, title: 'El Incentivo No Existe', text: 'Si gastas miles de millones de dólares para atacar Bitcoin, el ataque se vería de inmediato, la confianza y el precio probablemente caerían, y tu botín y tus equipos valdrían mucho menos. Con ese mismo poder de cómputo ganas más minando honestamente.' }
        ],
        highlight: {
          title: 'La Genialidad del Diseño',
          text: 'Satoshi diseñó un sistema donde, para quien tiene el poder de cómputo, el comportamiento honesto es más rentable que el deshonesto. Los incentivos económicos protegen la red, no la confianza en la buena voluntad de nadie.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Nodo?',
        content: 'Un **nodo** es simplemente una computadora que tiene una copia completa de la blockchain y verifica que todo esté correcto.',
        features: [
          { icon: Server, title: 'Full Node', text: 'Tiene toda la historia de la blockchain desde el bloque génesis. Verifica CADA transacción y CADA bloque. No confía en nadie más, verifica todo por sí mismo. En Bitcoin, cualquiera puede correr un full node en su casa con un computador modesto.' },
          { icon: Cpu, title: 'Nodo Minero/Validador', text: 'Además de verificar, también CREA nuevos bloques. Estos son los que compiten para agregar la siguiente página al libro. Reciben recompensas por su trabajo.' },
          { icon: Smartphone, title: 'Light Node', text: 'No tiene toda la blockchain, solo los headers de los bloques, y confía en otros nodos para las verificaciones detalladas. En la práctica, la mayoría de wallets móviles ni siquiera son light nodes: consultan servidores RPC de terceros que hacen la verificación por ti.' }
        ],
        highlight: {
          title: '¿Por Qué Importan los Nodos?',
          text: 'Mientras más nodos independientes existan, más descentralizada y resistente es la red. Bitcoin tiene unos 20,700 nodos accesibles públicamente (y más que no aparecen en los conteos). Ethereum, unos 8,700 nodos de ejecución. Solana, unos 660 validadores con stake, frente a unos 2,560 en marzo de 2023, más miles de nodos RPC. Cada nodo verifica las reglas por su cuenta y rechaza lo que las viole.'
        },
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'Lo Que La Blockchain PUEDE y NO PUEDE Hacer',
        content: 'Es importante entender los límites de esta tecnología:',
        features: [
          { icon: CheckCircle, title: 'PUEDE: Probar Propiedad Digital', text: 'La blockchain puede probar que ciertos tokens están en cierta dirección, y cualquiera puede comprobarlo. Es un registro de propiedad muy difícil de alterar.' },
          { icon: CheckCircle, title: 'PUEDE: Ejecutar Reglas Automáticamente', text: 'Los "smart contracts" son programas que se ejecutan en la blockchain. Si pasa X, automáticamente ocurre Y, sin un intermediario que pueda decir "no" (salvo que el creador del contrato se haya reservado ese poder).' },
          { icon: AlertTriangle, title: 'NO PUEDE: Garantizar Verdad del Mundo Real', text: 'La blockchain sabe que "Ana tiene 1 BTC". No sabe si "Ana dice la verdad sobre su producto". Si alguien mete datos falsos, la blockchain los guardará fielmente (garbage in, garbage out).' },
          { icon: AlertTriangle, title: 'NO PUEDE: Ser Perfectamente Rápida Y Descentralizada', text: 'Hay un "trilema": es muy difícil maximizar a la vez seguridad, descentralización y escalabilidad. Bitcoin elige seguridad y descentralización (lento). Solana elige escalabilidad y seguridad (menos descentralizado que Bitcoin).' }
        ]
      },
      {
        type: 'glossary',
        terms: [
          {
            term: 'Smart Contract (Contrato Inteligente)',
            definition: 'Un programa que vive en la blockchain y se ejecuta automáticamente cuando se cumplen sus condiciones. No es un contrato legal, es código. "Si el usuario X envía 1 SOL al programa, el programa envía 100 USDC al usuario X". Ejecuta las reglas mecánicamente, sin jueces, abogados, ni intermediarios. Ojo con un mito peligroso: un smart contract solo es inmutable si su creador renuncia a la autoridad de actualización. Muchos contratos SÍ pueden ser modificados por quien los desplegó, y en Solana los programas son actualizables por defecto.',
            whyItMatters: 'Toda la infraestructura de DeFi (préstamos, swaps, staking, NFTs) son smart contracts. Entender esto es la diferencia entre "usar cripto" y "confiar en el código que la hace funcionar". Y parte de tu seguridad es verificar si alguien puede cambiar ese código mañana.'
          }
        ]
      },
      {
        type: 'main',
        title: 'El Trilema de la Blockchain',
        content: 'Vitalik Buterin (cofundador de Ethereum) popularizó el **trilema de la blockchain**: es muy difícil que una blockchain maximice a la vez estas tres propiedades. Es una regla práctica, no una ley matemática, y cada red busca formas de acercarse:',
        features: [
          { icon: Shield, title: 'Seguridad', text: '¿Qué tan difícil es atacar la red? Nadie ha logrado atacar con éxito el consenso de Bitcoin. Su fallo más grave fue un error de código en 2010, corregido en horas.' },
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
        title: 'Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas cómo funciona una blockchain para que sea segura, sin usar las palabras \'hash\' o \'criptografía\'. Usa analogías.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Investigaciones en psicología del aprendizaje (por ejemplo, Nestojko y colegas, 2014) encontraron que preparar una explicación para otros mejora el recuerdo de las ideas principales. El efecto es moderado, pero real: explicar te obliga a ordenar lo que sabes.'
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
          'El ataque del 51% es posible en teoría, pero en Bitcoin costaría miles de millones y destruiría el valor de lo atacado: es más rentable ser honesto.',
          'Los nodos son las computadoras que verifican todo. Más nodos = más descentralización = más resistencia a censura.',
          'Existe un "trilema": es muy difícil que una blockchain sea máxima en seguridad, descentralización y escalabilidad a la vez. Cada red elige sus prioridades.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Antes de Bitcoin, ¿cómo se evitaba que alguien "gastara dos veces" el mismo dinero digital?',
          options: [
            { id: 'a', text: 'Con contraseñas cada vez más largas y seguras' },
            { id: 'b', text: 'Con un intermediario que llevaba el registro' },
            { id: 'c', text: 'Con archivos digitales que no se podían copiar' },
            { id: 'd', text: 'Con leyes que castigaban duplicar el dinero' }
          ],
          correctAnswer: 'b',
          explanation: 'Un banco, PayPal o Visa llevaba el registro de quién tenía qué y descontaba cada pago. Las contraseñas protegen el acceso, pero no evitan el doble gasto, y cualquier archivo digital se puede copiar. Bitcoin fue la primera solución sin intermediario que funcionó en la práctica: miles de nodos verifican que nadie gaste lo que no tiene.'
        },
        {
          id: 'q2',
          question: 'El hash de "Hola" es completamente diferente al hash de "hola". ¿Por qué esto es crucial para la seguridad de la blockchain?',
          options: [
            { id: 'a', text: 'Porque así los hashes ocupan menos espacio en disco' },
            { id: 'b', text: 'Porque cualquier cambio en un bloque cambia su hash' },
            { id: 'c', text: 'Porque así nadie puede leer las transacciones' },
            { id: 'd', text: 'Porque permite recuperar el texto original del hash' }
          ],
          correctAnswer: 'b',
          explanation: 'Si alguien altera aunque sea un carácter de un bloque, su hash cambia por completo y deja de coincidir con el que guarda el bloque siguiente. La manipulación queda a la vista. Los hashes no ocultan las transacciones (la blockchain es pública) y no permiten recuperar el texto original.'
        },
        {
          id: 'q-fb',
          type: 'fill-blank',
          question: 'Completa la frase sobre cómo se conectan los bloques.',
          textBefore: 'Cada bloque guarda el',
          textAfter: 'del bloque anterior, y así forman una cadena.',
          correctAnswer: 'hash',
          acceptableAnswers: ['hash', 'el hash', 'huella digital', 'la huella digital'],
          explanation: 'Cada bloque guarda el hash (la huella digital) del bloque anterior. Si cambias un bloque viejo, su hash cambia y la cadena se rompe desde ese punto.'
        },
        {
          id: 'q3',
          question: 'Alguien quiere modificar una transacción que ocurrió hace 100 bloques en Bitcoin. ¿Qué tendría que hacer?',
          options: [
            { id: 'a', text: 'Conseguir las llaves que dejó Satoshi en el código' },
            { id: 'b', text: 'Rehacer los 100 bloques más rápido que toda la red' },
            { id: 'c', text: 'Convencer a la mayoría de los usuarios por votación' },
            { id: 'd', text: 'Editar la transacción en la base de datos central' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada bloque contiene el hash del anterior, y en Bitcoin cada bloque exige trabajo de minería. Cambiar uno antiguo obliga a rehacer ese trabajo para todos los bloques siguientes y superar al resto de la red. No existen llaves maestras de Satoshi ni una base de datos central, y los usuarios no votan transacciones.'
        },
        {
          id: 'q4',
          question: 'Bitcoin usa Proof of Work y Solana usa Proof of Stake. ¿Cuál es la diferencia fundamental?',
          options: [
            { id: 'a', text: 'PoW usa energía; PoS usa tokens como garantía' },
            { id: 'b', text: 'PoW es para pagos; PoS es solo para juegos' },
            { id: 'c', text: 'PoW lo controla un banco; PoS, una fundación' },
            { id: 'd', text: 'PoW es más nuevo; PoS existe desde los años 90' }
          ],
          correctAnswer: 'a',
          explanation: 'Ambos permiten que desconocidos se pongan de acuerdo sin confiar entre sí. En PoW, los mineros demuestran compromiso gastando electricidad. En PoS, los validadores ponen sus tokens en riesgo y pueden perderlos si hacen trampa. PoW es el mecanismo más antiguo (Bitcoin, 2009).'
        },
        {
          id: 'q5',
          question: '¿Por qué no tiene sentido económico un ataque del 51% contra Bitcoin?',
          options: [
            { id: 'a', text: 'Costaría miles de millones y hundiría el valor de lo atacado' },
            { id: 'b', text: 'Satoshi puede revertirlo con una llave secreta de emergencia' },
            { id: 'c', text: 'Los exchanges devuelven siempre el dinero a los afectados' },
            { id: 'd', text: 'Es imposible: el código prohíbe tener más del 50% del poder' }
          ],
          correctAnswer: 'a',
          explanation: 'El atacante necesitaría más poder de cómputo que todos los demás mineros juntos. El ataque se vería de inmediato, la confianza y el precio probablemente caerían, y sus equipos y su botín valdrían mucho menos. No existe una llave de emergencia, nadie garantiza devoluciones y el código no impide acumular poder: lo que lo impide es el costo.'
        },
        {
          id: 'q6',
          question: '¿Qué describe el "trilema de la blockchain"?',
          options: [
            { id: 'a', text: 'Que toda blockchain termina controlada por tres entidades' },
            { id: 'b', text: 'Que cuesta maximizar seguridad, descentralización y escala' },
            { id: 'c', text: 'Que cada bloque debe validarse tres veces antes de agregarse' },
            { id: 'd', text: 'Que solo pueden existir tres blockchains grandes a la vez' }
          ],
          correctAnswer: 'b',
          explanation: 'Es muy difícil maximizar a la vez seguridad, descentralización y escalabilidad. Bitcoin prioriza seguridad y descentralización (unas 7 transacciones por segundo). Solana prioriza escalabilidad y seguridad, con validadores que necesitan equipos potentes. Es una regla práctica, no una ley: cada red busca mejorar sin sacrificar demasiado.'
        },
        {
          id: 'review_1',
          question: 'Repaso de la Lección 1: ¿cuál de las siguientes NO es una propiedad esencial del buen dinero?',
          options: [
            { id: 'a', text: 'Escasez: que no se pueda crear sin límite' },
            { id: 'b', text: 'Divisibilidad: que sirva para pagos pequeños' },
            { id: 'c', text: 'Que un gobierno controle su emisión' },
            { id: 'd', text: 'Portabilidad: que sea fácil de llevar' }
          ],
          correctAnswer: 'c',
          explanation: 'El buen dinero no necesita un gobierno que controle su emisión: el oro funcionó durante milenios sin uno, y Bitcoin cumple las propiedades del dinero sin una autoridad central. Escasez, divisibilidad y portabilidad sí están entre las seis propiedades que viste en la Lección 1.'
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
    type: 'Lectura',
    description: '¿Por qué importa que nadie tenga el control? La descentralización no es solo una palabra de moda: define si tu acceso a tu dinero depende del permiso de alguien. Entiende sus beneficios, sus costos y cómo medirla.',
    sections: [
      {
        type: 'intro',
        title: 'La Pregunta Fundamental: ¿Quién Tiene el Poder?',
        content: 'Cada sistema que usas para manejar tu dinero o tus datos tiene una arquitectura de poder. Alguien, en algún lugar, puede presionar un botón y cambiar las reglas. La pregunta es: **¿quién tiene ese botón?** En los sistemas tradicionales (tu banco, tu red social, tu gobierno), ese botón lo tiene una entidad central. Pueden congelar tu cuenta, censurar tu contenido, o cambiar las reglas sin tu permiso. En los sistemas descentralizados (Bitcoin, Solana), ese botón está distribuido entre miles de participantes. Nadie individualmente puede presionarlo. Esa distribución del poder es lo que llamamos **descentralización**.',
        highlight: {
          title: 'No es Teoría, Es Tu Realidad',
          text: 'En 2022, Canadá invocó su Ley de Emergencias y los bancos congelaron unas 280 cuentas (unos $8 millones) ligadas a las protestas de camioneros, sin orden judicial previa. En 2024, un tribunal federal dictaminó que invocar esa ley fue irrazonable, pero el fallo llegó dos años después de los congelamientos. Si esos fondos hubieran estado en Bitcoin en wallets propias, nadie habría podido congelarlos (aunque sí bloquearlos al intentar cambiarlos por dólares en un exchange). Esa es la diferencia práctica.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Significa Realmente "Centralizado"?',
        content: 'Un sistema centralizado tiene un único punto de control. Una autoridad que puede tomar decisiones unilaterales sobre todos los participantes.',
        features: [
          { icon: Landmark, title: 'Tu Banco', text: 'El banco puede congelar tu cuenta, rechazar transferencias, cambiar sus comisiones o cerrar tu cuenta "por política interna". Muchas de esas reglas existen por buenas razones, como prevenir el lavado de dinero, pero quien decide es el banco, no tú.' },
          { icon: Server, title: 'Facebook/Instagram', text: 'Meta puede borrar tu cuenta con 10 años de fotos, censurarte sin explicación, cambiar el algoritmo para que nadie vea tu contenido, o vender tus datos. Aceptaste los "términos y condiciones".' },
          { icon: Globe, title: 'Tu Gobierno', text: 'Puede devaluar tu moneda creando más, imponer controles de cambio que te impidan sacar tu dinero del país y, en casos extremos, congelar o confiscar activos.' },
          { icon: Smartphone, title: 'Apple/Google', text: 'Pueden eliminar apps de sus tiendas (y de tu teléfono), bloquearte de sus servicios, o cambiar las reglas de un día para otro.' }
        ],
        highlight: {
          title: 'El Patrón Común',
          text: 'En todos estos casos, TÚ eres un usuario con acceso REVOCABLE. Tienes derechos legales, pero en la práctica tu acceso a tu dinero o tus datos depende de que la entidad (y quien la regula) decida respetarlo.'
        }
      },
      {
        type: 'main',
        title: 'Casos Reales de Abuso Centralizado',
        content: 'Esto no es paranoia ni teoría conspirativa. Son eventos documentados que ya ocurrieron:',
        features: [
          { icon: AlertTriangle, title: 'Canadá 2022', text: 'El gobierno invocó la Ley de Emergencias y los bancos congelaron unas 280 cuentas con cerca de $8 millones, sin orden judicial. En 2024, un tribunal federal concluyó que la invocación fue irrazonable. Para los afectados, el fallo llegó dos años tarde: su dinero estuvo congelado por decisión ejecutiva.' },
          { icon: AlertTriangle, title: 'Grecia 2015', text: 'El gobierno impuso un "corralito": límite de €60/día en retiros. La gente hacía filas para sacar migajas de su propio dinero. Las cuentas estaban congeladas "temporalmente" durante semanas.' },
          { icon: AlertTriangle, title: 'Chipre 2013', text: 'El gobierno confiscó hasta 47.5% de los depósitos por encima de los €100,000 asegurados para "rescatar" a los bancos. Un día tenías €200,000; al siguiente tenías los €100,000 protegidos más unos €52,500 del excedente: unos €152,500, y el resto convertido en acciones del banco que valían casi nada. Así de simple.' },
          { icon: AlertTriangle, title: 'China (continuo)', text: 'El mecanismo real no es el mítico "social credit score" de las películas: es la lista negra judicial de deudores. Si un tribunal te declara moroso, pierdes acceso a vuelos, trenes rápidos y crédito. Millones de personas están en esa lista. Una autoridad central decide y el sistema financiero obedece.' },
          { icon: AlertTriangle, title: 'Nigeria 2021', text: 'El banco central prohibió a los bancos procesar transacciones cripto. De un día para otro, millones perdieron acceso a una industria completa. Por decreto. La prohibición fue revertida en diciembre de 2023, pero ya había demostrado lo frágil que es el acceso cuando depende de una autoridad central.' },
          { icon: AlertTriangle, title: 'PayPal (frecuente)', text: 'Congela cuentas por "actividad sospechosa" y puede retener fondos hasta 180 días. Reclamar es posible, pero lento, y mientras tanto no puedes usar tu dinero.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Significa Realmente "Descentralizado"?',
        content: 'Un sistema descentralizado distribuye el poder entre muchos participantes independientes. Ninguno individualmente puede controlar el sistema o cambiar las reglas unilateralmente.',
        features: [
          { icon: Network, title: 'Miles de Nodos', text: 'Bitcoin tiene unos 20,700 nodos accesibles públicamente, y muchos más que no aparecen en los conteos. Cada uno verifica por su cuenta TODAS las transacciones. Para cambiar las reglas a la fuerza, tendrías que comprometer miles de computadoras en decenas de países a la vez.' },
          { icon: Users, title: 'Nadie es "El Jefe"', text: 'No hay CEO de Bitcoin. No hay sede central. No hay servidor principal. Satoshi desapareció hace años y la red sigue funcionando perfectamente. El sistema no depende de ninguna persona o empresa.' },
          { icon: Lock, title: 'Reglas Monetarias Inmutables', text: 'Hay que distinguir dos cosas. El protocolo SÍ evoluciona con consenso amplio: mejoras técnicas como SegWit (2017) o Taproot (2021) se activaron tras años de debate. Pero las reglas monetarias (21 millones máximo, halving cada 4 años) nunca han cambiado: tocarlas destruiría la promesa central de Bitcoin, y ningún consenso lo ha intentado siquiera.' },
          { icon: Shield, title: 'Resistencia a Censura', text: 'Si el gobierno de EE. UU. ordena bloquear ciertas transacciones, algunos mineros de ese país pueden obedecer, pero los de otros países las seguirán incluyendo en sus bloques. Ninguna jurisdicción por sí sola puede censurar Bitcoin.' }
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
            'Nadie puede congelar tu BTC en una wallet propia',
            'Cambiar las reglas monetarias requiere un consenso casi imposible',
            'Sin punto único de fallo: si un nodo cae, quedan miles',
            'Puede ser más lento (pero mejorando)',
            'No necesitas confiar en nadie específico',
            'Tu propiedad es TUYA si controlas tus llaves'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Espectro de la Descentralización',
        content: 'La descentralización no es binaria, es un espectro. Diferentes proyectos hacen diferentes trade-offs:\n\n**¿Por qué debería importarte la descentralización?** Porque mientras más descentralizada sea una red, más difícil es que alguien congele tu cuenta, censure tus transacciones o cambie las reglas de emisión. Es la diferencia entre pedir permiso y no necesitarlo.',
        features: [
          { icon: Lock, title: 'Bitcoin: Máxima Descentralización', text: 'Unos 20,700 nodos accesibles. Cualquiera puede correr uno con unos $300 en equipo. Los cambios de protocolo requieren años de debate y un consenso muy amplio. Muy resistente a la censura y a la captura.' },
          { icon: Zap, title: 'Solana: Descentralización Pragmática', text: 'Unos 660 validadores con stake, frente a unos 2,560 en marzo de 2023. Validar exige servidores potentes (12 o más núcleos, 256 GB de RAM, conexión de 2 a 10 Gbps) que cuestan entre $600 y $1,300 al mes. Es más fácil coordinar cambios. Trade-off consciente: menos descentralización a cambio de unas 2,000 transacciones de usuarios por segundo y comisiones de fracciones de centavo.' },
          { icon: Server, title: 'Ethereum: Término Medio', text: 'Unos 8,700 nodos de ejecución. Hardware moderado. Usa Proof of Stake desde 2022 y lleva gran parte de su actividad a redes de segunda capa (L2). Busca un balance entre descentralización y escalabilidad.' },
          { icon: AlertTriangle, title: 'BNB Smart Chain: Más Centralizada', text: '45 validadores activos, de los cuales solo 21 producen bloques en cada época, elegidos por stake de BNB y con fuerte influencia del ecosistema Binance. Muy eficiente, pero un grupo tan pequeño y alineado puede coordinar cambios o censura con facilidad.' }
        ],
        highlight: {
          title: 'No Hay Respuesta "Correcta"',
          text: 'Bitcoin prioriza la máxima descentralización para ser un "oro digital" muy difícil de confiscar. Solana prioriza velocidad para aplicaciones de consumo masivo. Ethereum intenta un balance. Cada uno tiene su lugar.'
        },
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'El Coeficiente de Nakamoto',
        content: 'Para medir descentralización de forma objetiva, existe el **Coeficiente de Nakamoto**: el número mínimo de entidades que necesitarían coordinarse para comprometer el sistema. Un matiz importante que confunde a muchos: contar nodos no es lo mismo que medir concentración. Una red puede tener miles de nodos verificando las reglas y aun así tener el hashrate o el stake concentrado en pocas manos. Las dos cosas importan.',
        features: [
          { icon: Landmark, title: 'Tu Banco: Coeficiente = 1', text: 'Una sola entidad (el banco, o el gobierno que lo regula) puede hacer lo que quiera con tu cuenta.' },
          { icon: Network, title: 'Bitcoin: Alto en Nodos, Concentrado en Pools', text: 'Sus miles de nodos que verifican las reglas son muy difíciles de capturar. Pero la minería está más concentrada de lo que parece: en el último mes, los dos pools más grandes (Foundry y AntPool) produjeron cerca del 46% de los bloques, y los tres más grandes, cerca del 63%. El matiz honesto: los pools son coaliciones, no dueños del hashrate; los mineros individuales pueden cambiarse de pool en minutos si uno intenta algo raro.' },
          { icon: Zap, title: 'Solana: Coeficiente = 18', text: 'Bastarían 18 validadores coordinándose para reunir un tercio del stake (la medida habitual de lo necesario para detener la red), de unos 660 en total. En 2023 eran 31 a 34. Y cuenta validadores, no dueños: un mismo operador puede tener varios, así que el número real de entidades es menor.' },
          { icon: AlertTriangle, title: 'BSC: Coeficiente Bajo', text: 'Solo 21 validadores producen los bloques en cada época, elegidos por stake de BNB. Bastaría la coordinación de un puñado de ellos para comprometer la red. Y el ecosistema gira alrededor de una sola empresa. Mucho más centralizado.' }
        ],
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'Los Trade-offs Honestos de la Descentralización',
        content: 'Sería deshonesto decir que la descentralización no tiene costos. Tiene trade-offs reales que debes entender:',
        features: [
          { icon: TrendingDown, title: 'Puede Ser Más Lenta', text: 'Coordinar miles de nodos toma más tiempo que un servidor central. Bitcoin produce un bloque cada 10 minutos, mientras un pago con tarjeta se aprueba en segundos. Solana produce bloques cada ~200 ms y, desde la actualización Alpenglow (octubre de 2026), busca confirmaciones definitivas en fracciones de segundo, pero lo logra pidiendo más a sus validadores.' },
          { icon: TrendingDown, title: 'Puede Ser Más Cara', text: 'En momentos de congestión extrema (como en 2021), las comisiones de Ethereum llegaron a $50-100 por transacción. Hoy suelen costar centavos o menos, pero vuelven a subir cuando la demanda se dispara. Cuando el espacio en los bloques es limitado, los usuarios compiten por él.' },
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
          { icon: AlertTriangle, title: 'Las Críticas Válidas', text: 'Solana ha tenido varias "caídas" en las que la red se detuvo y los validadores tuvieron que reiniciarla de forma coordinada. Validar es costoso, lo que limita quién participa: el número de validadores cayó cerca de 74% desde 2023. Y cerca del 83% del stake usa el mismo software (Agave), así que un error grave en él afectaría a casi toda la red.' },
          { icon: CheckCircle, title: 'La Defensa Válida', text: 'Solana tiene unos 660 validadores en muchos países y jurisdicciones, y ninguna entidad única controla la red. Las caídas fueron errores técnicos, no censura deliberada, y no ha tenido una caída total desde febrero de 2024: más de 1,000 días en noviembre de 2026. Un segundo software de validación (Firedancer) ya maneja cerca del 17% del stake. La red sigue siendo abierta: cualquiera puede transaccionar.' },
          { icon: Zap, title: 'El Trade-off Consciente', text: 'Solana prioriza escalabilidad para aplicaciones de consumo masivo. Si quieres la descentralización máxima de Bitcoin, usa Bitcoin. Si quieres miles de TPS y fees de centavos para DeFi y pagos, usa Solana.' }
        ],
        highlight: {
          title: 'La Perspectiva Correcta',
          text: 'Solana no pretende ser Bitcoin. Busca ser una blockchain rápida y barata para aplicaciones de uso masivo. Es mucho más descentralizada que cualquier servicio tradicional (Visa, AWS) y bastante menos que Bitcoin. Para pagos y aplicaciones, este curso considera razonable ese trade-off; para guardar ahorros de largo plazo, Bitcoin sigue siendo la referencia.'
        },
        asOf: 'noviembre de 2026'
      },
      {
        type: 'main',
        title: 'Custodial vs No-Custodial: Donde La Descentralización Te Afecta',
        content: 'La descentralización de una red no importa si TÚ no controlas tus llaves. Aquí es donde esto se vuelve personal:',
        features: [
          { icon: AlertTriangle, title: 'Exchange Centralizado (Binance, Coinbase)', text: 'Aunque Bitcoin sea descentralizado, si tienes tu BTC en Binance, Binance tiene las llaves. Pueden congelarte, quebrar o ser hackeados. El colapso de FTX en 2022 lo demostró: sus clientes esperaron años y recibieron dólares calculados al precio de noviembre de 2022 (1 BTC se pagó a $16,871), una fracción de lo que esas monedas valían cuando se les pagó.' },
          { icon: CheckCircle, title: 'Wallet No-Custodial (Phantom, Ledger)', text: 'TÚ tienes las llaves. Nadie puede congelar tu BTC o tus SOL. La excepción: los tokens emitidos por una empresa, como USDC o USDT, pueden ser congelados por su emisor aunque estén en tu wallet. Si Phantom (la empresa) desaparece mañana, tus fondos siguen ahí; solo necesitas otra wallet compatible.' }
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
          'Descentralización distribuye ese poder entre muchos participantes independientes. Nadie por sí solo puede congelarte o censurarte.',
          'Los abusos de sistemas centralizados están documentados: Canadá 2022, Grecia 2015, Chipre 2013, la lista negra de morosos en China, congelamientos de PayPal.',
          'La descentralización es un espectro y se mide de varias formas (nodos, validadores, pools, Coeficiente de Nakamoto): Bitcoin está en un extremo, BSC en el otro y Solana en medio.',
          'Los costos de la descentralización son reales: puede ser más lenta, más cara y sin "soporte al cliente". Es el precio de no depender del permiso de nadie.',
          'Solana hace un trade-off consciente: menos descentralización que Bitcoin a cambio de velocidad y escalabilidad. Para sus casos de uso, es razonable.',
          '"Not your keys, not your coins": la descentralización de la red no te protege si tus llaves están en un exchange. Y recuerda que las stablecoins pueden ser congeladas por su emisor.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'En 2022, Canadá invocó una ley de emergencia y los bancos congelaron cientos de cuentas ligadas a unas protestas, sin orden judicial. ¿Por qué no podían hacer lo mismo con Bitcoin guardado en wallets propias?',
          options: [
            { id: 'a', text: 'Porque Bitcoin era ilegal en Canadá en ese momento' },
            { id: 'b', text: 'Porque no hay una entidad central que ejecute la orden' },
            { id: 'c', text: 'Porque los bancos canadienses no conocían Bitcoin' },
            { id: 'd', text: 'Porque los mineros votaron en contra de congelar esos fondos' }
          ],
          correctAnswer: 'b',
          explanation: 'Para congelar una cuenta bancaria basta una orden al banco. Con Bitcoin en una wallet propia no hay a quién dársela: las llaves las tiene el dueño y la red está repartida en miles de nodos de muchos países. El punto débil está en los bordes: un exchange sí puede bloquear esos fondos cuando alguien intenta cambiarlos por dinero tradicional.'
        },
        {
          id: 'q2',
          question: 'Tienes 10,000 USD en Bitcoin. ¿Dónde te protege MÁS la descentralización de la red?',
          options: [
            { id: 'a', text: 'En el exchange más grande del mundo' },
            { id: 'b', text: 'En un exchange regulado de tu país' },
            { id: 'c', text: 'En una hardware wallet con tus llaves' },
            { id: 'd', text: 'Repartido en partes iguales entre tres exchanges' }
          ],
          correctAnswer: 'c',
          explanation: '"Not your keys, not your coins". En cualquier exchange, grande, regulado o repartido entre varios, ELLOS tienen las llaves: pueden congelarte, quebrar o ser hackeados. Repartir entre exchanges reduce el riesgo de que uno falle, pero no te da el control. Con una hardware wallet, las llaves son tuyas, y también la responsabilidad de no perderlas.'
        },
        {
          id: 'q-ms',
          type: 'multiple-select',
          question: '¿Quiénes PUEDEN congelar o bloquear tus fondos en cada caso? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Tu banco, sobre tu cuenta de ahorros' },
            { id: 'b', text: 'Un exchange, sobre el BTC que guardas allí' },
            { id: 'c', text: 'Circle, sobre el USDC en tu wallet propia' },
            { id: 'd', text: 'Un minero, sobre el BTC en tu wallet propia' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'El banco y el exchange controlan los fondos que les confías. Circle, emisor de USDC, puede congelar los tokens de una dirección aunque esté en tu propia wallet: es la gran excepción de las stablecoins. Un minero, en cambio, no puede congelar tu BTC: como mucho puede dejar de incluir tus transacciones, y otros mineros las incluirán.'
        },
        {
          id: 'q3',
          question: '¿Por qué Solana tiene unos 660 validadores mientras Bitcoin tiene miles de nodos?',
          options: [
            { id: 'a', text: 'Porque validar exige equipos caros: un trade-off por velocidad' },
            { id: 'b', text: 'Porque la ley solo permite tener validadores en algunos países' },
            { id: 'c', text: 'Porque la Fundación Solana elige quién puede validar' },
            { id: 'd', text: 'Porque Solana es una red mucho más nueva que Bitcoin' }
          ],
          correctAnswer: 'a',
          explanation: 'Validar en Solana exige servidores potentes y una conexión rápida, con costos de cientos o miles de dólares al mes. Es el precio de su velocidad. Cualquiera puede ser validador si paga esos costos: nadie lo autoriza. Bitcoin hace el trade-off opuesto: correr un nodo cuesta unos $300.'
        },
        {
          id: 'q4',
          question: '¿Qué mide el Coeficiente de Nakamoto?',
          options: [
            { id: 'a', text: 'Cuántos bitcoins tiene Satoshi en sus direcciones' },
            { id: 'b', text: 'Cuántas entidades bastan para comprometer la red' },
            { id: 'c', text: 'Cuántas transacciones por segundo procesa una red' },
            { id: 'd', text: 'Cuántos nodos tiene una red en todo el mundo' }
          ],
          correctAnswer: 'b',
          explanation: 'Es el número mínimo de entidades que tendrían que coordinarse para comprometer el sistema. Tu banco: 1. Solana: 18 validadores. En Bitcoin depende de qué midas: sus nodos son miles, pero los dos pools de minería más grandes producen cerca de la mitad de los bloques (aunque los mineros pueden cambiar de pool). Por eso contar nodos no basta.'
        },
        {
          id: 'q5',
          question: 'Un crítico dice: "La descentralización es ineficiente, los sistemas centralizados son mejores". ¿Cuál es la respuesta más honesta?',
          options: [
            { id: 'a', text: 'Es falso: la descentralización siempre es mejor en todo' },
            { id: 'b', text: 'Tiene razón en los costos, pero ganas control y resistencia' },
            { id: 'c', text: 'Tiene toda la razón: los sistemas centralizados no fallan' },
            { id: 'd', text: 'No importa: la descentralización es solo para expertos' }
          ],
          correctAnswer: 'b',
          explanation: 'La descentralización TIENE costos: puede ser más lenta, más cara y sin soporte al cliente. A cambio, nadie puede congelar lo tuyo ni cambiar las reglas a su antojo. Es un trade-off, no una superioridad absoluta, y cada persona decide si le conviene para cada uso.'
        },
        {
          id: 'q6',
          question: 'FTX, un exchange "cripto", quebró en 2022. Años después, sus clientes recibieron dólares calculados al precio de noviembre de 2022. ¿Qué demuestra esto?',
          options: [
            { id: 'a', text: 'Que las criptomonedas son una estafa por definición' },
            { id: 'b', text: 'Que la red no te protege si otro guarda tus llaves' },
            { id: 'c', text: 'Que basta con usar siempre el exchange más grande' },
            { id: 'd', text: 'Que recuperar tu dinero en dólares es lo mismo' }
          ],
          correctAnswer: 'b',
          explanation: 'FTX era un intermediario centralizado con el mismo modelo que un banco: ellos tenían las llaves. Las blockchains siguieron funcionando sin problema. Quien tenía 1 BTC en FTX recibió unos $20,000 (el BTC se valoró a $16,871, más intereses), mientras que quien lo tenía en su propia wallet todavía tenía su bitcoin, que valía mucho más.'
        },
        {
          id: 'q-review',
          question: 'Repaso de la Lección 3: un banco grande se financia a tasas cercanas a la del banco central y tú pagas 28% en tu tarjeta. Según el Efecto Cantillon, ¿qué parte de esa diferencia tiene que ver con el dinero nuevo?',
          options: [
            { id: 'a', text: 'Ninguna: se explica solo por el riesgo de cada cliente' },
            { id: 'b', text: 'Toda: es ganancia pura por estar cerca del dinero nuevo' },
            { id: 'c', text: 'Una parte: el acceso al crédito barato llega primero' },
            { id: 'd', text: 'Ninguna: las tasas las fija cada año el gobierno' }
          ],
          correctAnswer: 'c',
          explanation: 'Parte de la diferencia es riesgo: prestarte a ti sin garantía es más riesgoso que prestarle a un banco. Pero otra parte es acceso: quien está cerca del banco central obtiene crédito barato primero y puede comprar activos antes de que suban. Decir que todo es riesgo, o que todo es privilegio, simplifica demasiado.'
        }
      ]
    }
  },
  7: {
    id: 7,
    title: 'Wallets: Tu Llave, Tu Dinero',
    level: 'Principiante',
    number: '7 de 19',
    duration: '15 minutos',
    type: 'Lectura',
    description: 'Entiende la diferencia crítica entre tener cripto en un exchange y tenerlo en tu propia wallet. Este conocimiento puede ser la diferencia entre conservar tus ahorros o perderlos.',
    sections: [
      {
        type: 'intro',
        title: 'Not Your Keys, Not Your Coins',
        content: 'En noviembre de 2022, FTX, el segundo exchange más grande del mundo, colapsó de la noche a la mañana. Millones de personas perdieron el acceso a sus "ahorros" en cripto. No era un hackeo. Era algo peor: **nunca fueron realmente dueños de su dinero**. Tras más de dos años de proceso de quiebra, la mayoría recuperó su dinero, pero en dólares calculados al precio de noviembre de 2022: quien tenía un Bitcoin recibió unos $20,000 (el BTC se valoró en $16,871, más intereses), no su Bitcoin, que en 2025 llegó a valer más de $100,000. Perdieron el control, perdieron años y se perdieron toda la recuperación del mercado. Cuando compras Bitcoin en Binance, Coinbase o cualquier exchange, lo que tienes es una PROMESA de que ellos tienen tu cripto. Es como tener un recibo de un banco, si el banco quiebra, tu recibo queda congelado en un proceso legal por años. Una **Wallet** cambia esto completamente. Con una wallet propia, TÚ controlas las llaves criptográficas. Nadie puede negar tu retiro ni "prestarse" tu dinero sin permiso, y nadie puede congelar tu BTC o tus SOL (las stablecoins como USDC son la excepción: su emisor puede congelarlas). Eres tu propio banco, con todo lo que eso implica.',
        highlight: {
          title: 'La Lección de FTX',
          text: 'Cuando FTX colapsó, faltaban unos $8 mil millones de fondos de clientes. Recuperar lo que quedaba tomó más de dos años, y se pagó en dólares al precio de 2022, sin la subida que vino después. ¿Quienes tenían su cripto en wallets propias? Conservaron sus monedas, con sus subidas y sus caídas. La autocustodia no es paranoia, es sentido común.'
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
            'KYC (la verificación de identidad que piden los exchanges): saben exactamente cuánto tienes y qué haces'
          ]
        },
        rightSide: {
          title: 'Tu Cripto en Tu Wallet',
          points: [
            'TÚ tienes las llaves, nadie más',
            'Nadie puede congelar tu BTC o tus SOL (las stablecoins sí)',
            'Retiras cuando quieras, 24/7, sin permiso',
            'Si Phantom quiebra, tus fondos siguen intactos',
            'Tu cripto es TUYO, nadie lo toca sin tu firma',
            'Tu seguridad depende de ti (responsabilidad)',
            'Más privacidad frente a empresas, pero la blockchain es pública: quien conozca tu dirección ve tu saldo'
          ]
        }
      },
      {
        type: 'main',
        title: 'Los 3 Tipos de Wallets: Elige Según tu Necesidad',
        content: 'No todas las wallets son iguales. Cada tipo tiene un balance diferente entre conveniencia y seguridad:',
        features: [
          { icon: Landmark, title: 'Exchange (Custodia de Terceros)', text: 'Binance, Coinbase, Kraken guardan tus llaves por ti. Conveniente para comprar, vender y hacer trading. No es un buen lugar para tus ahorros: úsalo para operar y retira a tu wallet. Mientras más dinero dejes y más tiempo, más expuesto estás si el exchange falla.' },
          { icon: Smartphone, title: 'Hot Wallet (Conectada a Internet)', text: 'Phantom, MetaMask, Trust Wallet. Las llaves están en tu celular o navegador. Perfecta para uso diario, DeFi, NFTs. Riesgo: si hackean tu dispositivo o firmas una transacción maliciosa, pierdes fondos. Ideal para montos que usas activamente.' },
          { icon: Shield, title: 'Cold Wallet (Hardware/Offline)', text: 'Ledger, Trezor. Las llaves NUNCA tocan internet. Solo se conectan para firmar. Máxima seguridad para ahorros de largo plazo. Si tus ahorros en cripto pasan de unos pocos miles de dólares, vale la pena tener una. Cuesta entre $50 y $150. Cómprala solo en la tienda oficial del fabricante, nunca usada ni en marketplaces: un dispositivo manipulado puede robar tus fondos.' }
        ]
      },
      {
        type: 'main',
        title: 'Estrategia de Custodia: Cómo Organizar tus Fondos',
        content: 'Los profesionales no ponen todos los huevos en una canasta. Así se puede organizar un portafolio cripto cuando ya tienes una cantidad significativa (si apenas empiezas con montos pequeños, una hot wallet bien protegida basta por ahora):',
        features: [
          { icon: PiggyBank, title: 'Ahorros de Largo Plazo (80-90%)', text: 'En cold wallet (Ledger/Trezor). Este dinero no lo tocas por meses o años. Es tu "bóveda". Aquí va la mayoría de tu BTC, ETH, SOL de largo plazo.' },
          { icon: Zap, title: 'Capital Operativo (10-20%)', text: 'En hot wallet (Phantom). Para DeFi, staking, NFTs, pagos. Solo lo que planeas usar activamente. Si pierdes esta wallet por un scam, duele pero no te arruina.' },
          { icon: Activity, title: 'Trading Activo (0-10%)', text: 'En exchange. SOLO si haces trading diario. Retira ganancias regularmente a tu hot o cold wallet. Nunca dejes dinero "descansando" en un exchange.' }
        ],
        highlight: {
          title: 'Regla del Sueño Tranquilo',
          text: 'Pregúntate: "Si mañana mi exchange pausa los retiros por 6 meses, ¿pierdo mis ahorros?" Si la respuesta es sí, tienes demasiado en exchanges. Antes de mover montos grandes, aprende a guardar tu frase semilla (la siguiente lección) y haz primero una prueba con un monto pequeño.'
        }
      },
      {
        type: 'main',
        title: 'Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas la diferencia entre una hot wallet y una cold wallet, y cuándo usarías cada una.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Investigaciones en psicología del aprendizaje (por ejemplo, Nestojko y colegas, 2014) encontraron que preparar una explicación para otros mejora el recuerdo de las ideas principales. El efecto es moderado, pero real: explicar te obliga a ordenar lo que sabes.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Una wallet no "guarda" cripto, guarda las LLAVES que prueban que eres dueño de fondos en la blockchain.',
          'Si no tienes las llaves, no tienes el cripto. Los exchanges son custodios, no bancos con seguro gubernamental.',
          'FTX, Mt. Gox, Celsius, BlockFi, Voyager: la lista de exchanges y plataformas que colapsaron y dejaron a sus usuarios atrapados en quiebras durante años es LARGA.',
          'Hot wallets (Phantom, MetaMask) son para uso diario. Cold wallets (Ledger, Trezor) son para ahorros serios.',
          'La autocustodia es una responsabilidad: si pierdes tu frase semilla, nadie puede ayudarte, y muchas personas han perdido fondos por errores propios. Esa responsabilidad es el precio de la verdadera propiedad.',
          'Tu wallet no te da anonimato: la blockchain es pública. Y las stablecoins como USDC o USDT pueden ser congeladas por su emisor aunque estén en tu wallet.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'FTX colapsó en noviembre de 2022. ¿Qué pasó con los clientes que tenían cripto ahí?',
          options: [
            { id: 'a', text: 'Un seguro del gobierno les devolvió todo en semanas' },
            { id: 'b', text: 'Años después recibieron dólares al precio de 2022' },
            { id: 'c', text: 'FTX les devolvió sus monedas exactas al reabrir' },
            { id: 'd', text: 'No les pasó nada: sus fondos estaban en la blockchain' }
          ],
          correctAnswer: 'b',
          explanation: 'Los clientes fueron acreedores en un proceso de quiebra que duró más de dos años. Recibieron dólares calculados al precio de noviembre de 2022 (1 BTC se valoró en $16,871), no sus monedas. No había seguro de depósitos, y sus fondos no estaban a su nombre en la blockchain: estaban en direcciones controladas por FTX.'
        },
        {
          id: 'q2',
          question: '¿Qué guarda realmente una wallet de criptomonedas?',
          options: [
            { id: 'a', text: 'Las monedas digitales, dentro del dispositivo' },
            { id: 'b', text: 'Una copia completa de toda la blockchain' },
            { id: 'c', text: 'Las llaves que prueban que eres el dueño' },
            { id: 'd', text: 'Un archivo con tu saldo, firmado por el banco' }
          ],
          correctAnswer: 'c',
          explanation: 'Las criptomonedas SIEMPRE viven en la blockchain. Tu wallet guarda las llaves privadas que demuestran que ciertos fondos son tuyos y te permiten moverlos. Por eso, con tu frase semilla puedes recuperar todo en otro dispositivo.'
        },
        {
          id: 'q3',
          question: 'Tienes el equivalente a $15,000 en SOL y no haces trading. ¿Cuál es la forma de custodia más segura?',
          options: [
            { id: 'a', text: 'Todo en un exchange grande, para vender rápido' },
            { id: 'b', text: 'La mayoría en cold wallet y una parte en Phantom' },
            { id: 'c', text: 'Todo en Phantom, para tenerlo siempre a mano' },
            { id: 'd', text: 'Repartido en cinco exchanges, para diversificar' }
          ],
          correctAnswer: 'b',
          explanation: 'La mayor parte en una cold wallet (máxima seguridad), una porción para operar en una hot wallet como Phantom, y el exchange solo para comprar o vender en el momento. Tener todo en una hot wallet expone más dinero a estafas y malware, y repartir entre exchanges no te protege de un colapso como el de FTX.'
        },
        {
          id: 'q4',
          question: 'Un amigo perdió su teléfono con Phantom instalado. ¿Perdió sus fondos?',
          options: [
            { id: 'a', text: 'Sí: el dinero estaba guardado dentro de ese teléfono' },
            { id: 'b', text: 'Solo si no contacta pronto al soporte de Phantom' },
            { id: 'c', text: 'No, si guardó su frase semilla en un lugar seguro' },
            { id: 'd', text: 'Depende de si tenía el Face ID activado' }
          ],
          correctAnswer: 'c',
          explanation: 'La app es solo una forma de acceder a la blockchain. Con la frase semilla puede restaurar la wallet en otro dispositivo y recuperar todo. Phantom no puede recuperarla por él, y el Face ID solo protege el teléfono. Si quien encontró el teléfono puede entrar, debe mover sus fondos a una wallet nueva cuanto antes.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia fundamental entre una hot wallet y una cold wallet?',
          options: [
            { id: 'a', text: 'La cold wallet guarda las llaves fuera de internet' },
            { id: 'b', text: 'La cold wallet solo sirve para guardar Bitcoin y nada más' },
            { id: 'c', text: 'La hot wallet guarda las monedas en el teléfono' },
            { id: 'd', text: 'La hot wallet la controla siempre una empresa' }
          ],
          correctAnswer: 'a',
          explanation: 'Una hot wallet tiene las llaves en un dispositivo conectado a internet: es cómoda, pero más expuesta a malware y phishing. Una cold wallet guarda las llaves en un dispositivo que firma sin exponerlas a internet. Ambas pueden manejar muchas criptomonedas, las monedas siempre están en la blockchain, y en ambas las llaves son tuyas.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Si guardas USDC en tu propia wallet de Phantom, nadie puede congelarlo.',
          correctAnswer: false,
          explanation: 'Falso. USDC lo emite una empresa (Circle), que puede congelar los tokens de cualquier dirección, por ejemplo por una orden judicial o sanciones, aunque esté en tu propia wallet. Lo mismo vale para USDT y Tether. Con BTC o SOL en tu wallet propia, en cambio, nadie puede congelar tus fondos.'
        }
      ]
    }
  },
  8: {
    id: 8,
    title: 'La Frase Semilla (Seed Phrase)',
    level: 'Principiante',
    number: '8 de 19',
    duration: '16 minutos',
    type: 'Práctica Obligatoria',
    description: 'El secreto más importante de tu vida financiera digital. Estas 12 o 24 palabras valen exactamente lo mismo que todo lo que guardes en tu wallet. Aprende a protegerlas del robo, de la pérdida y de las estafas.',
    sections: [
      {
        type: 'intro',
        title: '12 Palabras que Controlan Todo',
        content: 'Cuando creas una wallet, se genera algo extraordinario: una secuencia de 12 o 24 palabras en inglés aparentemente aleatorias. "apple river mountain dog...", parece un poema sin sentido, pero es la llave maestra de toda tu riqueza cripto. Estas palabras, llamadas **frase semilla** o **seed phrase**, son una forma legible de guardar el número secreto del que se derivan TODAS las llaves y direcciones de tu wallet. Quien tenga estas palabras tiene CONTROL TOTAL de tus fondos, puede vaciarlos en segundos desde cualquier parte del mundo. No necesita tu celular. No necesita tu contraseña. No necesita nada más.',
        highlight: {
          title: 'La Realidad Matemática',
          text: 'Una frase de 12 palabras tiene unas 2^128 combinaciones posibles (un número de 39 cifras). Aun con una capacidad de cálculo comparable a toda la red de minería de Bitcoin, probarlas todas tomaría miles de millones de años. Tu frase es prácticamente imposible de adivinar, pero muy fácil de robar si la expones.'
        }
      },
      {
        type: 'main',
        title: '¿Por Qué 12 Palabras en Vez de una Contraseña Normal?',
        content: 'Las contraseñas tradicionales tienen problemas: son difíciles de recordar, fáciles de hackear, y dependen de un servidor. La frase semilla resuelve todo esto:',
        features: [
          { icon: Lock, title: 'Estándar Universal (BIP-39)', text: 'Casi todas las wallets serias usan el mismo estándar de 2048 palabras, así que no dependes de una empresa. Dos matices importantes: al importar tu frase en otra wallet puede aparecer "vacía" hasta que selecciones la ruta de derivación correcta (la misma frase genera direcciones distintas según esa configuración). Y una hardware wallet como Ledger debe generar su PROPIA frase nueva en el dispositivo: nunca importes en ella la frase de tu hot wallet, porque perderías justo la protección que estás comprando.' },
          { icon: Shield, title: 'Backup Perfecto', text: 'Si tu celular explota, tu computadora se incendia, o la empresa de tu wallet desaparece, tus fondos siguen existiendo en la blockchain. Con tu frase semilla, los recuperas en minutos desde cualquier dispositivo nuevo.' },
          { icon: Network, title: 'Genera Infinitas Direcciones', text: 'De una sola frase semilla se derivan matemáticamente miles de direcciones. Puedes tener direcciones para SOL, ETH, BTC, y más, todo desde las mismas 12 palabras.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Guardar tu Frase Semilla: Nivel Básico',
        content: 'La regla de oro es simple: **tu frase semilla NUNCA debe existir en formato digital**. El momento en que la escribes en tu computadora, la tomas en foto, o la guardas en la nube, estás exponiendo tu riqueza.',
        features: [
          { icon: CheckCircle, title: 'Papel (Mínimo Aceptable)', text: 'Escríbela a mano en papel. Usa letra clara. Verifica 3 veces que cada palabra esté correcta. Guarda el papel en un lugar seguro y discreto, protegido del agua y del fuego, que solo tú (y quizás una persona de máxima confianza) conozcas.' },
          { icon: AlertTriangle, title: 'NUNCA en Digital', text: 'No en fotos. No en capturas de pantalla. No en notas del celular. No en Google Docs. No en emails. No en WhatsApp. No "encriptado" en la nube. Los hackers buscan activamente estas cosas.' },
          { icon: AlertTriangle, title: 'NUNCA la Digas en Voz Alta', text: 'Si hay un micrófono cerca (Alexa, Siri, tu celular), asume que puede estar grabando. Suena paranoico hasta que pierdes todo.' },
          { icon: Users, title: 'Discreción: No Cuentes lo que Tienes', text: 'No publiques capturas de tu saldo ni comentes cuánto tienes en cripto, ni siquiera con conocidos. En América Latina, la extorsión y el secuestro son riesgos reales, y quien sabe que tienes cripto puede presionarte para que entregues la frase. La mejor protección física es que nadie sepa que hay algo que robar.' }
        ],
        highlight: {
          title: '¿Por Qué Importa?',
          text: '12 palabras reemplazan a un banco entero. No necesitas sucursal, no necesitas aprobación, no necesitas confiar en nadie. Tu frase semilla es literalmente tu banco en el bolsillo.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Guardar tu Frase Semilla: Nivel Avanzado',
        content: 'Cuando tus ahorros en cripto crecen (digamos, más de unos miles de dólares), vale la pena subir de nivel:',
        features: [
          { icon: Shield, title: 'Placa de Metal', text: 'El papel se quema, se moja, se descompone. Productos como Cryptosteel o Billfodl te permiten grabar tu frase en acero inoxidable. Resiste incendios, inundaciones y décadas de tiempo. Cuesta entre $50 y $100.' },
          { icon: Layers, title: 'Copias en Múltiples Ubicaciones', text: 'Una sola copia es un punto único de fallo. Guarda 2-3 copias en ubicaciones diferentes, por ejemplo tu casa y la de un familiar de máxima confianza. Si un lugar se destruye, tienes respaldo. Cada copia extra es también un lugar más donde la pueden encontrar: elige pocos lugares, bien protegidos.' },
          { icon: Lock, title: 'Passphrase Adicional (Palabra 25)', text: 'Algunas wallets, sobre todo hardware wallets como Ledger o Trezor, permiten agregar una palabra extra personalizada (passphrase). Tu frase de 12 palabras más esa palabra genera wallets DIFERENTES: si roban tu frase, sin la passphrase no pueden acceder. Phantom no ofrece esta opción. Y si olvidas la passphrase, pierdes el acceso igual que si perdieras la frase: es solo para usuarios avanzados.' }
        ],
        highlight: {
          title: 'Shamir Secret Sharing',
          text: 'Para el máximo nivel de seguridad, puedes dividir tu frase en partes que requieren combinarse. Ejemplo: divides en 3 partes, necesitas 2 para recuperar. Guardas una en tu casa, otra con tu hermano, otra en el banco. Ninguna ubicación por sí sola es suficiente para robar. ADVERTENCIA: cortar tu frase en pedazos por tu cuenta NO es Shamir y es peligroso: cada pedazo filtra información al que lo encuentre, y perder un solo pedazo puede costarte todo. El esquema real requiere herramientas diseñadas para eso, como las que incluyen algunas hardware wallets.'
        }
      },
      {
        type: 'main',
        title: 'Los Errores que Más se Repiten',
        content: 'Aprende de los errores de otros. Estos casos son ilustrativos, pero cada uno sigue un patrón que se repite una y otra vez en denuncias reales:',
        features: [
          { icon: AlertTriangle, title: 'La Foto en iCloud', text: 'Alguien toma una foto de su frase "para no perderla". La foto se sincroniza sola con la nube. Meses después, su cuenta es hackeada y la wallet queda vacía en minutos.' },
          { icon: AlertTriangle, title: 'El Archivo en Google Drive', text: '"Está encriptado, es seguro". Su cuenta de Google es comprometida por phishing o por una contraseña reutilizada, el atacante encuentra el archivo y rompe la contraseña débil que lo protegía.' },
          { icon: AlertTriangle, title: 'El Mensaje a Sí Mismo', text: 'Se envía la frase por WhatsApp "para tenerla en el celular". Su sesión de WhatsApp Web queda abierta en una computadora compartida, y otra persona la lee.' },
          { icon: AlertTriangle, title: 'El Único Papel', text: 'Guarda su frase en un solo papel en casa. Hay un incendio o una inundación, y el papel se destruye. Los fondos siguen en la blockchain, pero nadie puede acceder a ellos nunca más.' }
        ]
      },
      {
        type: 'main',
        title: 'Anatomía de una Estafa de Seed Phrase',
        content: 'La gran mayoría de los robos de cripto no son "hackeos sofisticados", son ingeniería social donde TÚ entregas tu frase. Así operan:',
        features: [
          { icon: AlertTriangle, title: 'El Falso Soporte Técnico', text: '"Hola, soy de Phantom Support. Detectamos actividad sospechosa en tu cuenta. Para proteger tus fondos, necesitamos verificar tu frase semilla." MENTIRA. Phantom NUNCA te contactará primero. NUNCA te pedirá tu frase. NADIE legítimo lo hará.' },
          { icon: AlertTriangle, title: 'El Sitio Falso', text: 'Buscas "Phantom wallet" en Google. El primer resultado es un anuncio de un dominio imitador, por ejemplo "phantomm-wallet.com" (con dos M). El sitio se ve idéntico. Te pide "importar wallet" y escribes tu frase. La roban en tiempo real. El sitio oficial es phantom.com (el antiguo phantom.app redirige allí). Guárdalo en favoritos y no hagas clic en anuncios.' },
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
          'Tu frase solo se digita UNA vez fuera del papel: dentro de la app oficial de la wallet, cuando la recuperas. Jamás en una página web, un formulario o un chat.',
          'Si alguien te pide la frase semilla, es estafa. El 100% de las veces. Sin excepciones.',
          'Sé discreto: no cuentes cuánto tienes ni publiques tu saldo. Que nadie sepa que hay algo que robar es parte de tu seguridad.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu frase semilla de 12 palabras está escrita en un papel en tu casa. Un ladrón entra y la roba. ¿Qué puede hacer?',
          options: [
            { id: 'a', text: 'Nada, porque también necesita tu contraseña de Phantom' },
            { id: 'b', text: 'Vaciar todos tus fondos desde cualquier dispositivo' },
            { id: 'c', text: 'Solo ver tu saldo, sin poder mover ningún fondo' },
            { id: 'd', text: 'Nada, a menos que también tenga tu celular físico' }
          ],
          correctAnswer: 'b',
          explanation: 'La frase semilla es la llave maestra. Quien la tenga puede restaurar tu wallet en cualquier dispositivo y mover todo. La contraseña de la app solo protege ese teléfono. Si sospechas que alguien vio tu frase, crea una wallet nueva y mueve tus fondos de inmediato.'
        },
        {
          id: 'q2',
          question: '¿Por qué NUNCA debes guardar tu frase semilla en una foto, un archivo o en la nube?',
          options: [
            { id: 'a', text: 'Porque ocupa demasiado espacio en el teléfono' },
            { id: 'b', text: 'Porque puede sincronizarse y quedar expuesta' },
            { id: 'c', text: 'Porque las wallets no aceptan frases de fotos' },
            { id: 'd', text: 'Porque la ley prohíbe guardarla en digital' }
          ],
          correctAnswer: 'b',
          explanation: 'Las fotos y archivos se sincronizan solos con la nube, y el malware y los hackeos de cuentas buscan justamente eso. Si existe en formato digital, alguien puede robarla a distancia sin que te des cuenta.'
        },
        {
          id: 'q3',
          question: 'Te llega un mensaje de "Phantom Support": tu wallet está en riesgo y deben verificar tu frase semilla. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Envío la frase rápido para proteger mis fondos' },
            { id: 'b', text: 'Envío solo las 6 primeras palabras, por si acaso' },
            { id: 'c', text: 'Ignoro, bloqueo y reporto: es una estafa' },
            { id: 'd', text: 'Pido que me llamen para confirmar que son reales' }
          ],
          correctAnswer: 'c',
          explanation: 'Phantom nunca te escribe primero ni te pide la frase, y ninguna empresa legítima lo hará. Enviar la mitad tampoco sirve: con 6 palabras el estafador está mucho más cerca de adivinar el resto. Y una llamada no prueba nada: los estafadores también llaman.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la forma MÁS segura de guardar la frase semilla de una wallet con ahorros importantes?',
          options: [
            { id: 'a', text: 'Memorizarla sin escribirla en ningún lugar' },
            { id: 'b', text: 'Placa de metal y copias en 2 o 3 lugares seguros' },
            { id: 'c', text: 'Archivo cifrado en la nube con una contraseña fuerte' },
            { id: 'd', text: 'Un papel en la billetera que siempre llevas encima' }
          ],
          correctAnswer: 'b',
          explanation: 'El metal resiste fuego e inundaciones, y varias ubicaciones evitan un punto único de fallo. La memoria falla, los archivos digitales se pueden hackear y llevarla encima te expone a robos.'
        },
        {
          id: 'q5',
          question: 'Alguien guardó su única copia de la frase en un papel en casa. Hubo un incendio y el papel se destruyó. ¿Qué pasa con sus fondos?',
          options: [
            { id: 'a', text: 'El soporte de la wallet se los puede recuperar' },
            { id: 'b', text: 'Puede entrar con reconocimiento facial en otro equipo' },
            { id: 'c', text: 'Si no tiene otra copia ni la app, se pierden para siempre' },
            { id: 'd', text: 'Un juez puede ordenar a la red que se los devuelva' }
          ],
          correctAnswer: 'c',
          explanation: 'Si todavía tiene la app abierta en un teléfono, puede mover los fondos a una wallet nueva de inmediato. Si no, nadie puede ayudarle: no hay "olvidé mi contraseña" y ninguna autoridad puede revertir la blockchain. Los fondos seguirán ahí, inaccesibles para siempre. Por eso necesitas varias copias en lugares distintos.'
        },
        {
          id: 'q6',
          question: 'Quieres agregar una passphrase (la "palabra 25") a tu wallet. ¿Qué debes saber?',
          options: [
            { id: 'a', text: 'Phantom la pide al crear la wallet y la guarda por ti' },
            { id: 'b', text: 'Protege si roban tu frase, pero si la olvidas lo pierdes' },
            { id: 'c', text: 'Sirve para recuperar la wallet si pierdes las 12 palabras' },
            { id: 'd', text: 'Es obligatoria en todas las wallets desde hace años' }
          ],
          correctAnswer: 'b',
          explanation: 'La passphrase se suma a tu frase y genera una wallet distinta: si alguien roba solo las 12 palabras, no ve tus fondos. Pero si olvidas la passphrase, los pierdes. No reemplaza la frase, es opcional y Phantom no la ofrece: está disponible en hardware wallets como Ledger o Trezor, y es solo para usuarios avanzados.'
        },
        {
          id: 'review_1',
          type: 'multiple-select',
          question: 'Repaso de la Lección 7. ¿Cuáles son riesgos reales de dejar tu cripto en un exchange? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Puede pausar los retiros cuando quiera' },
            { id: 'b', text: 'Si quiebra, quedas como un acreedor más' },
            { id: 'c', text: 'La blockchain puede borrar tus monedas' },
            { id: 'd', text: 'Puede prestar tu cripto a terceros' }
          ],
          correctAnswers: [0, 1, 3],
          explanation: 'En un exchange, ellos tienen las llaves: pueden pausar retiros, prestar los fondos de sus clientes y, si quiebran, solo te queda reclamar como acreedor, como pasó con FTX. La blockchain, en cambio, no borra monedas de nadie: el riesgo está en el intermediario, no en la red.'
        }
      ]
    }
  },
  9: {
    id: 9,
    title: 'Instalando Phantom Wallet',
    level: 'Principiante',
    number: '9 de 19',
    duration: '16 minutos',
    type: 'Tutorial Práctico',
    description: 'Tu puerta de entrada al ecosistema Solana. Instalación paso a paso de una de las wallets más usadas, con todas las precauciones de seguridad que necesitas saber.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Phantom es la Wallet Recomendada?',
        content: 'Entre las wallets de Solana, Phantom es una de las más usadas, por su facilidad de uso y sus alertas de seguridad. No es solo una interfaz bonita: simula cada transacción antes de que la firmes, tiene una experiencia clara y un historial sólido en el ecosistema. No es infalible: ninguna wallet lo es. Phantom nació en Solana y hoy es multichain: desde una sola app maneja Solana, Bitcoin, Ethereum y otras redes compatibles con Ethereum, como Base o Polygon. La lista cambia con frecuencia (por ejemplo, dejó de soportar Sui en septiembre de 2026), así que revisa la app. En este curso la usamos como tu wallet de Solana. Si estás empezando en cripto, es un punto de partida sólido.',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Shield, title: 'Alertas de Seguridad Integradas', text: 'Phantom analiza cada transacción ANTES de que la firmes. Si detecta un contrato malicioso conocido o un sitio que intenta vaciar tu wallet, te advierte. Es una gran ayuda, pero no detecta todas las estafas nuevas.' },
          { icon: Zap, title: 'Velocidad de Solana', text: 'Transacciones confirmadas en menos de 1 segundo y comisiones de fracciones de centavo. Mucho más fluido que la red principal de Ethereum.' },
          { icon: Smartphone, title: 'Multi-Plataforma', text: 'Úsala en navegador (Chrome, Firefox, Brave, Edge) y en móvil (iOS, Android). Misma frase semilla, mismos fondos: tus balances viven en la blockchain, no en el dispositivo, así que ves exactamente lo mismo en todos lados.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 1: Descarga SOLO desde Fuentes Oficiales',
        content: 'Este paso parece obvio pero es donde MUCHOS pierden todo su dinero. Los estafadores crean sitios falsos que lucen idénticos a Phantom pero roban tu seed phrase en el momento que la ingresas.',
        features: [
          { icon: CheckCircle, title: 'Sitio Oficial', text: 'El sitio oficial es **phantom.com**, sin guiones, números ni variaciones (el antiguo phantom.app redirige allí). Escríbelo tú mismo en la barra de direcciones. NO hagas clic en anuncios de Google: los estafadores compran anuncios para aparecer primero.' },
          { icon: CheckCircle, title: 'Extensión de Navegador', text: 'Entra a phantom.com/download y elige tu navegador. Ese enlace te lleva a la extensión oficial en la tienda de tu navegador. No la busques directamente en la tienda: allí han aparecido extensiones falsas con el mismo nombre y logo.' },
          { icon: CheckCircle, title: 'App Móvil', text: 'Descarga SOLO desde App Store (iOS) o Google Play (Android), idealmente usando el enlace de phantom.com/download. Hay apps falsas con nombres similares: revisa el desarrollador y el número de descargas.' }
        ],
        highlight: {
          title: 'Ejemplos de Dominios Imitadores',
          text: 'Los imitadores usan nombres como phantom-app.com, phantomwallet.io, phantom-wallet.app o phantomm.com. Cualquier variación (guiones, letras dobles, otra terminación) debe hacerte desconfiar. El sitio oficial es phantom.com: guárdalo en favoritos después de verificarlo.'
        }
      },
      {
        type: 'main',
        title: 'Paso 2: Crear una Nueva Wallet',
        content: 'Una vez instalada la extensión o app, Phantom te dará opciones: crear una nueva wallet o importar una existente. Si es tu primera wallet, selecciona **"Create a new wallet"**. Ojo: Phantom también te ofrece crear la wallet con tu cuenta de Google o Apple. Es cómodo, pero tu acceso queda atado a esa cuenta: si la pierdes o te la roban sin haber exportado tu frase, pierdes la wallet. Para este curso, elige el camino clásico de frase semilla, que no depende de ninguna cuenta ni de la nube.',
        features: [
          { icon: Lock, title: 'Contraseña de Desbloqueo', text: 'Phantom te pedirá crear una contraseña. Esta contraseña desbloquea la app en TU dispositivo, NO es tu seed phrase. Si olvidas esta contraseña, puedes reinstalar Phantom e importar tu wallet con la seed phrase.' },
          { icon: Shield, title: 'Generación de Seed Phrase', text: 'Phantom generará 12 palabras aleatorias. DETENTE AQUÍ. No hagas clic en "siguiente" hasta que hayas escrito estas palabras en PAPEL. No las copies al portapapeles. No las escribas en notas digitales ni las guardes en la nube.' },
          { icon: CheckCircle, title: 'Verificación', text: 'Phantom te pedirá confirmar algunas palabras para asegurar que las guardaste correctamente. Si fallas, revisa tu papel y vuelve a intentarlo. Este paso existe porque muchas personas han perdido fondos por errores al escribir su frase.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 3: Entendiendo la Interfaz de Phantom',
        content: 'Ya tienes tu wallet creada. Ahora entiende qué estás viendo:',
        features: [
          { icon: Wallet, title: 'Tu Dirección Pública', text: 'En la parte superior verás algo como "ABC12...XYZ". Como Phantom es multichain, tienes una dirección para Solana, otra para Bitcoin y una sola dirección (que empieza por 0x) para todas las redes compatibles con Ethereum. Para recibir SOL, copia la dirección de SOLANA, no la de otra red. Es como un número de cuenta: puedes compartirla libremente para recibir pagos.' },
          { icon: Activity, title: 'Balance y Tokens', text: 'Verás tu saldo de SOL y cualquier otro token que recibas. Phantom muestra el valor en dólares automáticamente. Ojo: cualquiera puede enviarte tokens, incluidos tokens basura usados para estafas (lo verás en la lección sobre estafas). Si no sabes de dónde salió un token, no interactúes con él.' },
          { icon: Globe, title: 'Historial de Transacciones', text: 'Cada envío, recepción, o interacción con una dApp queda registrada. Puedes hacer clic en cualquier transacción para ver detalles en Solscan (el explorador de bloques).' },
          { icon: Network, title: 'Conexiones de Apps', text: 'En la configuración de Phantom, en la sección de apps conectadas, verás qué sitios tienen permiso para conectarse a tu wallet. Revisa periódicamente y desconecta los que no uses.' }
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
          { icon: Shield, title: 'La Regla de Oro', text: 'Antes de firmar, pregúntate: "¿Esto tiene sentido para lo que estoy intentando hacer?" En **Solana**, lee la simulación: si muestra salidas de SOL/tokens/NFTs que no esperabas, RECHAZA. En **Ethereum/EVM** (Phantom también maneja esas redes), un "Aprobar acceso ilimitado a todos tus tokens" en un sitio desconocido es una bandera roja clásica. Si no entiendes la simulación, no firmes.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist Post-Instalación',
        items: [
          'Descargaste Phantom ÚNICAMENTE desde phantom.com, App Store, o Google Play (verificando el desarrollador oficial).',
          'Elegiste el camino clásico de frase semilla, sin depender de una cuenta de Google o Apple.',
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
            { id: 'a', text: 'Hago clic, porque Google lo muestra de primero' },
            { id: 'b', text: 'Ignoro el anuncio y escribo phantom.com yo mismo' },
            { id: 'c', text: 'Descargo de ahí, porque el logo es el mismo' },
            { id: 'd', text: 'Lo abro, pero solo para comparar los dos sitios web' }
          ],
          correctAnswer: 'b',
          explanation: 'Los estafadores PAGAN anuncios para aparecer primero con dominios parecidos. Un logo idéntico no prueba nada, y abrir el sitio "solo para comparar" ya te expone. El sitio oficial es phantom.com: escríbelo tú mismo o usa un favorito que ya verificaste.'
        },
        {
          id: 'q2',
          question: 'Instalaste Phantom y te muestra 12 palabras. ¿Cuál es el paso correcto ANTES de continuar?',
          options: [
            { id: 'a', text: 'Tomar una captura de pantalla para no perderlas' },
            { id: 'b', text: 'Escribirlas en papel y verificar cada palabra' },
            { id: 'c', text: 'Copiarlas y pegarlas en una nota del celular' },
            { id: 'd', text: 'Continuar rápido y anotarlas después con calma' }
          ],
          correctAnswer: 'b',
          explanation: 'Las capturas se sincronizan con la nube y el portapapeles puede ser leído por malware. Solo el papel (o el metal) es seguro. Hazlo AHORA: aunque Phantom permite ver la frase después en su configuración, quien lo posterga suele terminar depositando fondos sin respaldo.'
        },
        {
          id: 'q3',
          question: 'Un sitio web te pide "Connect Wallet". ¿Qué estás autorizando exactamente?',
          options: [
            { id: 'a', text: 'Que mueva tus fondos cuando lo necesite' },
            { id: 'b', text: 'Que conozca tu frase semilla para operar' },
            { id: 'c', text: 'Que vea tu dirección pública y tu saldo' },
            { id: 'd', text: 'Nada: es solo una ventana informativa' }
          ],
          correctAnswer: 'c',
          explanation: 'Conectar solo comparte información pública, como mostrar tu número de cuenta. Para mover fondos, el sitio debe pedirte APROBAR una transacción concreta, y ahí está el peligro real. Conectar tampoco es "nada": el sitio ya sabe tu dirección y puede pedirte firmas. Conéctate solo a sitios que conoces.'
        },
        {
          id: 'q4',
          question: 'Phantom te muestra una transacción para aprobar y la simulación advierte en ROJO que puede ser maliciosa. ¿Qué haces?',
          options: [
            { id: 'a', text: 'La apruebo igual: seguro es un error de la wallet' },
            { id: 'b', text: 'La rechazo, cierro el sitio y no vuelvo a entrar' },
            { id: 'c', text: 'La apruebo, pero primero con un monto pequeño' },
            { id: 'd', text: 'Le pregunto al "soporte" del sitio si es seguro' }
          ],
          correctAnswer: 'b',
          explanation: 'Si Phantom muestra una advertencia en rojo, es porque detectó patrones de estafa conocidos. Aprobar "con poco" no sirve: una transacción maliciosa puede vaciar la wallet sin importar el monto que creías enviar. Y el "soporte" de un sitio malicioso siempre dirá que es seguro.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia entre la contraseña de Phantom y tu frase semilla?',
          options: [
            { id: 'a', text: 'Son lo mismo: dos nombres para una sola cosa' },
            { id: 'b', text: 'La contraseña abre la app; la frase recupera todo' },
            { id: 'c', text: 'La contraseña es más importante que la frase' },
            { id: 'd', text: 'Con la contraseña basta; la frase es algo opcional' }
          ],
          correctAnswer: 'b',
          explanation: 'La contraseña desbloquea la app en TU dispositivo. La frase semilla recupera tu wallet en CUALQUIER dispositivo. Si olvidas la contraseña, reinstalas e importas con la frase. Si pierdes la frase (y el dispositivo), pierdes todo, sin importar qué contraseña tengas.'
        },
        {
          id: 'q-ord',
          type: 'ordering',
          question: 'Ordena los pasos para crear tu wallet de forma segura.',
          items: [
            'Descargar desde phantom.com o la tienda oficial',
            'Elegir "Create a new wallet"',
            'Crear la contraseña de desbloqueo',
            'Escribir las 12 palabras en papel',
            'Confirmar las palabras que pide Phantom',
            'Hacer una prueba con un monto pequeño'
          ],
          correctOrder: [0, 1, 2, 3, 4, 5],
          explanation: 'Primero, la fuente oficial: si la app es falsa, todo lo demás da igual. Luego creas la wallet y la contraseña, escribes y confirmas tu frase, y solo entonces depositas, empezando por un monto pequeño para comprobar que todo funciona.'
        },
        {
          id: 'q-review',
          question: 'Repaso de la Lección 5. Tu amigo dice: "Mi banco me devolvió $200 que un hacker robó de mi cuenta. ¿Phantom puede hacer lo mismo si me roban cripto?" ¿Qué le respondes?',
          options: [
            { id: 'a', text: 'Sí: el soporte de Phantom puede revertir la transacción' },
            { id: 'b', text: 'No: nadie puede revertir una transacción confirmada' },
            { id: 'c', text: 'Depende del monto: los robos grandes sí se revierten' },
            { id: 'd', text: 'Sí, siempre que lo reporte en las primeras 24 horas' }
          ],
          correctAnswer: 'b',
          explanation: 'El banco puede devolver el dinero porque es un intermediario central que controla su registro. En una blockchain nadie tiene esa autoridad: una transacción confirmada es definitiva, sin importar el monto ni la rapidez del reporte. Es la otra cara de la autocustodia: nadie puede quitarte tus fondos, pero nadie puede recuperarlos por ti.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 2,
        title: 'Checkpoint: Tus 12 Palabras',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Acabas de crear tu wallet y Phantom te muestra las 12 palabras de tu frase semilla. Tienes prisa. ¿Qué haces?',
            options: [
              'Les tomo una captura rápida y las paso a papel después',
              'Las guardo en la nube para no perderlas nunca',
              'Me detengo, las escribo en papel y verifico cada una',
              'Sigo sin anotarlas: Phantom me deja verlas después'
            ],
            correctAnswer: 2,
            explanation: 'La frase solo debe existir en papel (o metal), nunca en formato digital: ni capturas, ni nube, ni notas. Y aunque Phantom permite verla después en su configuración, quien posterga el respaldo suele terminar con fondos depositados y sin respaldo. Este paso vale más que cualquier otra cosa que hagas hoy.',
            hint: 'Recuerda la regla de oro de la Lección 8: la frase nunca debe existir en formato digital.'
          }
        ]
      }
    ]
  },
  10: {
    id: 10,
    title: 'Solana vs Ethereum: La Guerra de L1s',
    level: 'Principiante',
    number: '10 de 19',
    duration: '18 min',
    type: 'Comparativa',
    description: 'Por qué enseñamos Solana primero: velocidad, costos y simplicidad, y también lo que Ethereum hace mejor. Dos diseños distintos para el mismo problema.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Existe Esta "Guerra"?',
        content: 'Ethereum fue la primera blockchain programable. Popularizó los smart contracts, DeFi (aplicaciones financieras que funcionan sin bancos), los NFTs y casi todo lo que hoy llamamos Web3. Su reto histórico fue escalar: cuando mucha gente quería usarlo, la red se congestionaba y las comisiones subían. En el pico de 2021, una transacción podía costar $50, $100 o más. Ethereum respondió con una estrategia por capas: la red principal (L1) se encarga de la seguridad y redes L2, como Arbitrum o Base, procesan gran parte de la actividad a bajo costo. Hoy, con poca demanda, una transferencia en la red principal cuesta alrededor de $0.002 y un swap (un intercambio de una cripto por otra) unos $0.03: mínimos históricos que pueden subir si vuelve la demanda. Solana nació en 2020 con otra pregunta: ¿y si construimos una sola blockchain, desde cero, optimizada para velocidad y bajo costo? El resultado es una red donde las transacciones cuestan una fracción de centavo y se confirman en menos de un segundo, sin capas adicionales. Hoy la diferencia principal ya no es solo el precio, sino el diseño.',
        asOf: 'noviembre de 2026',
        highlight: {
          title: 'La Metáfora',
          text: 'Ethereum es como una ciudad con un centro histórico muy seguro (la L1) y barrios nuevos a su alrededor (las L2): casi todo es posible, pero a veces debes moverte de un barrio a otro. Solana es una sola ciudad grande con un metro muy rápido: todo queda en el mismo lugar, pero toda la ciudad depende de que esa única red funcione.'
        }
      },
      {
        type: 'comparison',
        title: 'Los Números que Importan',
        asOf: 'noviembre de 2026',
        leftSide: {
          title: 'Ethereum (L1)',
          points: [
            'Transacciones por segundo en la red principal: ~15-30 (las L2 suman mucho más)',
            'Costo: ~$0.002 por transferencia y ~$0.03 por swap (sube con la demanda)',
            'Tiempo de bloque: ~12 segundos (finalidad completa en ~13 minutos)',
            'Gran parte del uso diario ocurre en L2s (Arbitrum, Base, Optimism)',
            'Liquidez repartida entre la L1 y varias L2s',
            'Bridges para mover fondos entre redes (un punto histórico de hackeos)',
            'Muchos más validadores y nodos independientes que Solana'
          ]
        },
        rightSide: {
          title: 'Solana (L1)',
          points: [
            'Transacciones por segundo: ~1,750-2,300 de usuarios, con capacidad para más',
            'Costo: 0.000005 SOL de base (menos de $0.001)',
            'Confirmación: menos de un segundo (bloques cada ~200 milisegundos)',
            'Todo ocurre en una sola capa (sin L2s necesarios)',
            'Toda la liquidez unificada en un solo lugar',
            'Sin bridges internos (menos piezas que pueden fallar)',
            'Validar exige hardware caro: unos 660 validadores con stake'
          ]
        }
      },
      {
        type: 'main',
        title: '¿Qué Significa "Monolítico" vs "Modular"?',
        content: 'Este es un debate técnico fundamental que afecta tu experiencia como usuario:',
        features: [
          { icon: Layers, title: 'Ethereum: Modular', text: 'Ethereum decidió dividirse en capas. La L1 es la capa de seguridad: más lenta, pero muy descentralizada. Las L2 son capas de ejecución, más baratas y rápidas. El costo: tus fondos pueden quedar repartidos entre redes, a veces necesitas bridges y la liquidez se fragmenta. Que muchos exchanges ya retiren directo a las L2 reduce esa fricción.' },
          { icon: Zap, title: 'Solana: Monolítico', text: 'Solana pone TODO en una sola capa: ejecución, consenso y disponibilidad de datos. No hay L2s ni bridges internos. Todas las apps comparten el mismo estado, así que pueden combinarse entre sí sin fricción (eso se llama componibilidad). Es más simple para el usuario, pero toda la red depende de que esa única capa funcione.' },
          { icon: AlertTriangle, title: 'El Trade-off', text: 'Ningún diseño gana en todo. El modular permite validar la red con equipos más modestos, a cambio de una experiencia más fragmentada. El monolítico da una experiencia más simple y rápida, a cambio de exigir hardware caro a los validadores, lo que reduce cuántos pueden participar.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Real: Hacer un Swap de $50',
        content: 'Veamos qué pasa en la práctica cuando quieres intercambiar $50 de USDC (un "dólar digital" que siempre vale ~$1; lo verás a fondo en la lección de stablecoins) por otro token:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: TrendingDown, title: 'En Ethereum L1', text: 'Abres Uniswap. Con la red poco congestionada, el swap te cuesta alrededor de $0.03 en gas. Es barato, pero el costo depende de la demanda: en momentos de congestión ha llegado a varios dólares, y en 2021 a $50-100.' },
          { icon: Network, title: 'En Ethereum L2 (Arbitrum o Base)', text: 'Muchos exchanges retiran directo a Arbitrum o Base, así que normalmente no necesitas un bridge. Ya en la L2, el swap cuesta menos de un centavo. El reto no es el precio, sino gestionar varias redes: tus USDC en Base no aparecen en Arbitrum ni en la L1.' },
          { icon: Zap, title: 'En Solana', text: 'Abres Jupiter y haces el swap. Pagas 0.000005 SOL de comisión base (menos de $0.001; con priority fees, típicamente $0.001-0.01). Se confirma en menos de un segundo, en la misma red donde está todo lo demás. El fee de red es igual de mínimo si intercambias $50 o $50,000 (en montos grandes lo que cambia es el slippage, el impacto de tu orden en el precio).' }
        ],
        highlight: {
          title: 'Por Esto Enseñamos Solana Primero',
          text: 'No es porque Ethereum sea malo. Es porque, para aprender, Solana te da costos bajos y previsibles, confirmaciones casi instantáneas y una sola red que entender. Puedes equivocarte 100 veces y pagar menos de $1 en total, sin preguntarte en qué red quedaron tus fondos. Las L2 de Ethereum también son baratas, pero suman una capa más de conceptos que preferimos dejar para después.'
        }
      },
      {
        type: 'glossary',
        terms: [
          {
            term: 'Gas',
            definition: 'Es el "combustible" que pagas para que una blockchain procese tu transacción. Cada operación (enviar, hacer un swap, interactuar con un protocolo) requiere que los validadores hagan trabajo computacional, y el gas paga ese trabajo. En Ethereum, el precio del gas sube cuando la red está congestionada: en noviembre de 2026 está en mínimos históricos, pero en épocas de alta demanda llegó a decenas de dólares por transacción. En Solana, la red cobra una base de 0.000005 SOL por transacción; con priority fees típicamente pagas $0.001-0.01, y puede subir en momentos de congestión.',
            whyItMatters: 'El costo del gas determina si una blockchain es usable para personas normales. En el Ethereum de 2021, un gas de $30 hacía inviable cualquier operación pequeña. Hoy es mucho más barato, pero sigue dependiendo de la demanda. En Solana, la comisión base es fija y casi siempre mínima.'
          }
        ]
      },
      {
        type: 'main',
        title: 'El Ecosistema de Solana: Las Apps que Usarás',
        content: 'La tecnología importa, pero lo que realmente usarás son las aplicaciones. Estas son algunas de las más usadas en Solana:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Zap, title: 'Jupiter', text: 'Uno de los agregadores DEX más usados. Busca el mejor precio entre los exchanges descentralizados de Solana. También ofrece DCA (compra automática), órdenes límite y perpetuos (estos últimos son de alto riesgo y no son para principiantes).' },
          { icon: Wallet, title: 'Phantom', text: 'Ya la conoces: una de las wallets más usadas de Solana. En Ethereum, MetaMask cumple un papel parecido. Las dos funcionan; muchos principiantes encuentran a Phantom más simple para empezar.' },
          { icon: Globe, title: 'Magic Eden / Tensor', text: 'Marketplaces de NFTs en Solana. Comprar o vender cuesta fracciones de centavo en comisiones de red (las comisiones del marketplace y de los creadores van aparte).' },
          { icon: Activity, title: 'Marinade / Jito', text: 'Plataformas de liquid staking. Pones tu SOL a trabajar y recibes a cambio un token (mSOL o JitoSOL) que puedes seguir usando. Rinden alrededor de 4.8-5.1% anual, una cifra que cambia con el tiempo. Ojo: buena parte de ese rendimiento viene de SOL nuevos que emite la red, así que no es dinero gratis.' }
        ]
      },
      {
        type: 'main',
        title: 'Seamos Honestos: Los Riesgos de Solana',
        content: 'No queremos darte solo la versión positiva. Estos son los argumentos en contra que escucharás, y por qué merecen tu atención:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: AlertTriangle, title: 'Centralización Relativa', text: 'Validar Solana requiere servidores caros (alrededor de $600-1,300 al mes). Por eso hay pocos validadores: unos 660 con stake, frente a cerca de 2,560 en su pico de marzo de 2023. El coeficiente de Nakamoto (el número mínimo de validadores que, de acuerdo entre sí, podrían detener la red) es 18. Los defensores responden que la red sigue siendo barata y usable para millones de personas; los críticos, que esa concentración es un riesgo real.' },
          { icon: AlertTriangle, title: 'Caídas Históricas', text: 'Solana tuvo varios "apagones" en 2022 y 2023, en los que la red se detuvo por completo durante horas. La última caída total fue en febrero de 2024: desde entonces lleva más de 1,000 días sin detenerse, gracias a mejoras técnicas y a un segundo cliente validador (Firedancer). Aun así, en agosto de 2026 una falla de un proveedor de hosting desconectó cerca del 29% del stake, aunque la red siguió produciendo bloques.' },
          { icon: AlertTriangle, title: 'Dependencia de un Software', text: 'Cerca del 83% del stake corre software de la misma familia (Agave). Si ese software tuviera un error grave, gran parte de la red se vería afectada al mismo tiempo. Firedancer, con cerca del 17%, reduce ese riesgo, pero todavía no lo elimina.' },
          { icon: AlertTriangle, title: 'Ecosistema Más Joven', text: 'Ethereum funciona desde julio de 2015 (~11 años). Solana, desde marzo de 2020 (~6 años). El ecosistema de Ethereum es más grande, tiene más liquidez total y más historial, y algunos protocolos importantes solo existen allí.' }
        ]
      },
      {
        type: 'main',
        title: 'El Futuro: Firedancer y Más Allá',
        content: 'Solana sigue evolucionando. Estas son algunas de las mejoras recientes y en camino:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Cpu, title: 'Firedancer', text: 'Jump Crypto (el brazo cripto de la firma de trading Jump) construyó Firedancer, un cliente de validador escrito desde cero. Su versión completa corre en la red principal desde finales de 2025 y hoy maneja cerca del 17% del stake. Importa porque reduce la dependencia de un solo software: si un cliente falla, el otro puede seguir. En pruebas de laboratorio mostró un rendimiento muy superior al actual, pero esas cifras no son las de la red real.' },
          { icon: Zap, title: 'Alpenglow', text: 'Un nuevo sistema de consenso (la forma en que los validadores se ponen de acuerdo) que se activó en octubre de 2026. Junto con bloques más cortos (~200 milisegundos), busca que las transacciones queden definitivas en una fracción de segundo. Es muy reciente: su desempeño real todavía se está midiendo.' },
          { icon: Smartphone, title: 'Saga/Seeker (Mobile)', text: 'Solana impulsa sus propios teléfonos (Saga y Seeker) con una wallet integrada. La apuesta es que interactuar con cripto sea tan fácil como usar cualquier app. Es una visión, no una certeza.' },
          { icon: Globe, title: 'Blinks', text: 'Acciones de blockchain que funcionaban directamente en X (antes Twitter) y otras apps: comprar un NFT o hacer un swap desde una publicación. En la práctica requerían una extensión de wallet y la iniciativa perdió fuerza, pero vale conocerla como ejemplo de hacia dónde apunta la experiencia de usuario en Solana.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Solana vs Ethereum: Nuestra Conclusión',
        items: [
          'Ethereum fue el pionero, tiene el ecosistema más grande y una red muy descentralizada. Merece respeto por todo lo que inventó.',
          'Hoy sus comisiones en la red principal están en mínimos históricos, pero dependen de la demanda, y para el uso diario suma capas (L2) que hay que entender.',
          'Solana eligió una sola capa rápida y barata. Es más simple para el usuario, a cambio de validadores más caros y menos numerosos.',
          'Para aprender y experimentar, creemos que Solana es un mejor punto de partida: costos mínimos y previsibles, y una sola red que entender.',
          'Esto no significa que Ethereum sea "malo". Son dos diseños con ventajas y riesgos distintos.',
          'Lo más probable es que ambas sigan existiendo. Aprende una bien primero; después entender la otra será mucho más fácil.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Quieres hacer un swap de $50 en noviembre de 2026. ¿Cuál descripción de las comisiones es más precisa?',
          options: [
            { id: 'a', text: 'Ethereum L1 cobra siempre $50 o más por cada swap' },
            { id: 'b', text: 'Ambas son baratas hoy, pero en Ethereum varía más' },
            { id: 'c', text: 'Solana cobra más porque confirma mucho más rápido' },
            { id: 'd', text: 'Cobran lo mismo, porque las dos usan el mismo gas' }
          ],
          correctAnswer: 'b',
          explanation: 'En noviembre de 2026, un swap en la red principal de Ethereum cuesta alrededor de $0.03 y en Solana menos de un centavo. Ambas son baratas, pero el gas de Ethereum depende de la demanda: en 2021 llegó a $50-100 por transacción. En Solana, la comisión base es fija y mínima.'
        },
        {
          id: 'q2',
          question: '¿Qué significa que Solana sea "monolítica" y Ethereum "modular"?',
          options: [
            { id: 'a', text: 'Solana es más lenta, porque usa una sola capa' },
            { id: 'b', text: 'Solana hace todo en una capa; Ethereum usa L1 y L2s' },
            { id: 'c', text: 'Modular significa que Ethereum no tiene smart contracts' },
            { id: 'd', text: 'Es solo marketing: técnicamente funcionan igual' }
          ],
          correctAnswer: 'b',
          explanation: 'Solana pone ejecución, consenso y datos en una sola capa, sin L2s. Ethereum separa la seguridad (L1) de la ejecución (L2s como Arbitrum o Base), lo que reduce costos pero reparte tus fondos entre redes. Ninguno es "lento" por diseño: son dos formas distintas de escalar.'
        },
        {
          id: 'q-ms',
          type: 'multiple-select',
          question: '¿Cuáles de estas críticas a Solana son reales y vale la pena tomar en serio? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Validar exige hardware caro, lo que reduce el número de validadores' },
            { id: 'b', text: 'Tuvo varias caídas totales de la red en 2022 y 2023' },
            { id: 'c', text: 'Gran parte del stake depende de una misma familia de software' },
            { id: 'd', text: 'No permite crear smart contracts' },
            { id: 'e', text: 'Sus comisiones son más altas que las de Ethereum en 2021' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'Las tres primeras son críticas reales: pocos validadores por el costo del hardware, un historial de caídas (aunque ninguna total desde febrero de 2024) y cerca del 83% del stake en software de la familia Agave. En cambio, Solana sí tiene smart contracts (los llama programas), y sus comisiones son mucho más bajas que las de Ethereum en 2021.'
        },
        {
          id: 'q4',
          question: '¿Qué es Jupiter en el ecosistema de Solana?',
          options: [
            { id: 'a', text: 'Una wallet para Solana, muy parecida a Phantom' },
            { id: 'b', text: 'Un agregador que busca el mejor precio entre DEXs' },
            { id: 'c', text: 'El marketplace de NFTs más grande de la red Solana' },
            { id: 'd', text: 'El token nativo con el que se pagan las comisiones' }
          ],
          correctAnswer: 'b',
          explanation: 'Jupiter es un agregador: consulta muchos exchanges descentralizados a la vez y arma la ruta con mejor precio para tu swap. También ofrece DCA (compra programada) y órdenes límite. Phantom es la wallet, Magic Eden y Tensor son marketplaces de NFTs, y el token nativo de Solana es SOL.'
        },
        {
          id: 'q5',
          question: '¿Por qué importa Firedancer para Solana?',
          options: [
            { id: 'a', text: 'Es un token nuevo para pagar comisiones más bajas' },
            { id: 'b', text: 'Es una wallet pensada para validadores profesionales' },
            { id: 'c', text: 'Suma un segundo cliente de validador independiente' },
            { id: 'd', text: 'Es una L2 que procesa transacciones fuera de Solana' }
          ],
          correctAnswer: 'c',
          explanation: 'Firedancer es un cliente de validador escrito desde cero por Jump Crypto. Corre en la red principal y maneja cerca del 17% del stake. Importa porque, si el software principal (Agave) tuviera un error grave, los validadores con Firedancer podrían seguir funcionando. No es un token, ni una wallet, ni una L2.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Como la red principal de Ethereum está barata en noviembre de 2026, ya no hay ninguna diferencia práctica entre usar Ethereum y usar Solana.',
          correctAnswer: false,
          explanation: 'Falso. Las comisiones de Ethereum dependen de la demanda y pueden volver a subir; además, gran parte del uso diario vive en L2s, con saldos y redes separadas. Solana ofrece costos previsibles y una sola capa. A cambio, Ethereum tiene muchos más validadores y un ecosistema más grande. Las diferencias siguen ahí; solo cambiaron de forma.'
        },
        {
          id: 'review_1',
          question: 'Repaso de la Lección 5. ¿Por qué es prácticamente imposible alterar una transacción pasada en una blockchain?',
          options: [
            { id: 'a', text: 'Porque los mineros lo impiden con vigilancia física' },
            { id: 'b', text: 'Porque cada bloque incluye el hash del anterior' },
            { id: 'c', text: 'Porque una autoridad central protege el registro' },
            { id: 'd', text: 'Porque las transacciones se borran al confirmarse' }
          ],
          correctAnswer: 'b',
          explanation: 'Cada bloque está encadenado al anterior mediante su hash. Alterar un bloque cambiaría su hash y rompería todos los siguientes, y la red rechazaría esa versión. No hay una autoridad central que lo impida: es la matemática más el consenso de miles de participantes.'
        }
      ]
    }
  },
  // Orphaned Lessons (Moved from 9-12)
  35: {
    id: 35,
    title: 'Obteniendo tus Primeros SOL',
    level: 'Principiante',
    number: '13 de 19',
    duration: '17 minutos',
    type: 'Tutorial',
    description: 'El puente entre el mundo tradicional y cripto. Cómo convertir pesos, dólares o tu moneda local a SOL y llevarlo a tu wallet.',
    referrals: [
      {
        title: 'Backpack Exchange',
        description: 'Exchange enfocado en Solana. Su entidad de Dubai tiene licencia VARA, pero a los usuarios de Colombia los atiende su entidad global. No acepta pesos: yo lo uso para operar en Solana después de comprar con pesos en otro exchange.',
        link: 'https://backpack.exchange/join/cbas',
        buttonText: 'Crear Cuenta en Backpack'
      }
    ],
    sections: [
      {
        type: 'intro',
        title: 'El Puente Entre Fiat y Cripto',
        content: 'Ya tienes tu wallet Phantom lista. Ahora necesitas llenarla. El problema: tu banco no te vende SOL directamente. Necesitas un intermediario, un **Exchange Centralizado (CEX)**, que acepte tu dinero tradicional (fiat) y te dé criptomonedas a cambio. Piensa en el exchange como una casa de cambio: entras con pesos colombianos, sales con dólares... pero en este caso, entras con pesos y sales con SOL. La diferencia clave: los exchanges también custodian tu cripto mientras está ahí. Por eso, una vez que compras, debes **retirar a tu wallet propia**.',
        highlight: {
          title: 'El Flujo Completo',
          text: '1) Creas tu cuenta en un exchange. 2) Depositas pesos (transferencia o PSE). 3) Compras SOL. 4) Retiras a tu Phantom. El paso 4 es CRÍTICO: no dejes tu cripto en el exchange más tiempo del necesario.'
        }
      },
      {
        type: 'main',
        title: 'Eligiendo tu Exchange: Opciones para Latinoamérica',
        content: 'No todos los exchanges operan en todos los países ni aceptan todas las monedas. Estas son algunas opciones conocidas en la región. Ninguna está supervisada por la Superintendencia Financiera de Colombia, porque aún no existe un régimen de licencias para estas plataformas: elige con criterio y no dejes fondos en ninguna.',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Building2, title: 'Exchanges Locales: Bitso, Buda y Wenia', text: 'Operan en Colombia con pesos: Bitso y Buda reciben y retiran COP (Buda por PSE, ACH o Bre-B), y Wenia, del Grupo Bancolombia, convierte tus pesos en su propio peso digital (COPW). Los tres permiten retirar SOL y USDC por la red Solana. Wenia solo deja enviar a wallets que sean tuyas.' },
          { icon: Landmark, title: 'Binance', text: 'El exchange más grande del mundo. En Colombia acepta depósitos directos en COP por PSE y Bre-B, y permite retirar pesos. Su P2P (Nequi, Bancolombia, Daviplata) sigue siendo popular, pero ya no es la única vía. Comisiones bajas.' },
          { icon: Shield, title: 'Backpack Exchange', text: 'Creado por el equipo detrás de Mad Lads (NFT top de Solana). Especializado en Solana. Su entidad de Dubai tiene licencia VARA y la europea licencias MiCA, pero a los usuarios de Colombia los atiende su entidad global. Ojo: sus rieles fiat son solo en USD (transferencia SWIFT, mínimo $100), no acepta COP. Úsalo para operar en el ecosistema Solana, no como puerta de entrada de tus pesos. Es un enlace de referido (ver abajo).' },
          { icon: Globe, title: 'Coinbase', text: 'El exchange más regulado y "tradicional". Ideal si valoras la seguridad institucional sobre todo. Más caro que otros, pero muy confiable. Revisa qué métodos de pago ofrece en tu país antes de abrir cuenta.' },
          { icon: Activity, title: 'Kraken', text: 'Excelente reputación de seguridad: sin pérdidas de fondos de usuarios en más de una década. Acepta varias monedas fiat (revisa si incluye la tuya). Buena opción si priorizas el historial de seguridad.' }
        ]
      },
      {
        type: 'main',
        title: 'El Proceso Paso a Paso',
        content: 'Vamos a recorrer el proceso completo. El flujo es muy parecido en Bitso, Buda, Binance o cualquier otro exchange:',
        features: [
          { icon: Users, title: 'Paso 1: Crear Cuenta y KYC', text: 'Regístrate con email. Te pedirán verificar identidad (KYC): foto de documento, selfie, a veces comprobante de domicilio. Esto es obligatorio por regulaciones anti-lavado. Tarda 10 minutos a 24 horas.' },
          { icon: Landmark, title: 'Paso 2: Depositar Fiat', text: 'Una vez verificado, deposita dinero. Opciones: transferencia bancaria o PSE (la más barata; puede tardar desde minutos hasta un día hábil), tarjeta de crédito o débito (instantánea, pero con 2-4% de comisión) o P2P (compras a otros usuarios directamente).' },
          { icon: Activity, title: 'Paso 3: Comprar SOL', text: 'Con fondos en el exchange, ve a "Trading" o "Comprar Cripto". Busca el par SOL/USD o SOL/tu-moneda. Puedes usar "Market Order" (compra al precio actual) o "Limit Order" (defines el precio que quieres pagar).' },
          { icon: Wallet, title: 'Paso 4: Retirar a Phantom', text: 'Busca la opción de retirar en tu billetera del exchange y elige SOL. Pega tu dirección de Phantom (la que copiaste de la app). IMPORTANTE: Selecciona la red SOLANA. Confirma y espera de 1 a 10 minutos.' },
          { icon: Search, title: 'Paso 5: Guarda el Registro', text: 'Desde tu primera compra, anota la fecha, el monto en pesos, la cantidad de SOL, el precio y la comisión (o descarga el historial del exchange cada año). En Colombia, los criptoactivos se declaran como parte de tu patrimonio y venderlos o intercambiarlos puede generar impuestos. Lo verás en la Lección 19.' }
        ]
      },
      {
        type: 'main',
        title: 'El Error que Destruye Fondos: Red Incorrecta',
        content: 'Este es el error más común y más caro para principiantes. Cuando retiras, el exchange te pregunta a QUÉ RED enviar. Para SOL, SIEMPRE debes elegir la red **Solana (SOL)**. Si eliges otra red (como ERC20 o BEP20), en el mejor de los casos el exchange rechaza la dirección. En el peor, tus fondos llegan a otra blockchain como un token distinto (por ejemplo, una versión "envuelta" de SOL en BNB Chain) o a una dirección que no controlas, y recuperarlos puede ser difícil o imposible.',
        features: [
          { icon: CheckCircle, title: 'Red Correcta', text: 'Solana (SOL) o "Solana Network" o simplemente "SOL". Las direcciones Solana son base58 (~32-44 caracteres). Un ejemplo puede empezar con "5xB7...", pero no confíes en el prefijo: verifica la red y 6-8 caracteres del inicio y del final (y un bloque del medio).' },
          { icon: AlertTriangle, title: 'Redes Incorrectas', text: 'ERC20 (Ethereum), BEP20 (BNB Chain), TRC20 (Tron). Si eliges una de estas, tus fondos viajan por otra blockchain: no llegan como SOL a tu dirección de Solana y, según el caso, pueden quedar fuera de tu alcance.' },
          { icon: Shield, title: 'Verificación Triple', text: 'Antes de confirmar: 1) ¿La red dice "Solana"? 2) ¿La dirección es la de mi Phantom? 3) ¿Verifiqué 6-8 caracteres al INICIO y 6-8 al FINAL de la dirección? Si todo está bien, procede.' },
          { icon: AlertTriangle, title: 'Cuidado: Address Poisoning', text: 'Existe un ataque donde generan direcciones que imitan los primeros Y últimos caracteres de las tuyas y "ensucian" tu historial con transferencias mínimas, esperando que copies la del atacante por error. NUNCA copies tu dirección desde un historial de transacciones: cópiala directo de Phantom (o usa el código QR) y verifica 6-8 caracteres en ambos extremos. En la Lección 14 lo vemos a fondo.' }
        ],
        highlight: {
          title: 'Por Qué Importa',
          text: 'En blockchain no existen las reversiones. Un envío por la red equivocada puede terminar en una dirección que no controlas o como un token distinto, y recuperarlo, si se puede, depende de terceros. Treinta segundos de verificación evitan ese problema.'
        }
      },
      {
        type: 'main',
        title: 'Fees: Lo Que Realmente Pagas',
        content: 'Hay varios fees en el proceso. Entiéndelos para no llevarte sorpresas:',
        features: [
          { icon: Percent, title: 'Fee de Depósito', text: 'Transferencia bancaria: usualmente gratis. Tarjeta de crédito: 2-4% (evítalo si puedes). P2P: varía según el vendedor.' },
          { icon: Percent, title: 'Fee de Trading', text: 'Cuando compras SOL, el exchange cobra 0.1-0.5% del monto. En $100, pagarías $0.10-$0.50. Pequeño.' },
          { icon: Percent, title: 'Fee de Retiro', text: 'El exchange cobra un fee FIJO por retirar, independiente del monto. En Binance es del orden de 0.001-0.01 SOL, revisa su página de fees actualizada antes de retirar. Este fee es del EXCHANGE, no de Solana. El fee real de la red Solana es 0.000005 SOL (~$0.001).' },
          { icon: CheckCircle, title: 'Estrategia Óptima', text: 'Deposita por transferencia o PSE (normalmente gratis) y retira a tu wallet. Si compras seguido, agrupa los retiros (por ejemplo, uno al mes) para que el fee fijo pese menos, sin dejar montos grandes en el exchange.' }
        ]
      },
      {
        type: 'main',
        title: 'Alternativa: Compra P2P (Peer-to-Peer)',
        content: 'Si tu banco no puede transferir a exchanges o prefieres pagar por Nequi o Daviplata, el P2P es una opción. Como comprador, estas son las reglas que te protegen:',
        features: [
          { icon: Users, title: 'Cómo Funciona', text: 'Dentro del exchange (Binance P2P, por ejemplo), compras directamente a OTRO usuario. Tú le transfieres pesos por Nequi/Bancolombia/etc, y él te envía USDT (la stablecoin de Tether: un token que vale ~1 dólar, ya la viste a fondo en la Lección 12) o SOL a tu cuenta del exchange. El exchange actúa como escrow: retiene el cripto del vendedor hasta que el pago se confirma.' },
          { icon: CheckCircle, title: 'Reglas del Comprador', text: 'Paga SOLO desde una cuenta bancaria a TU nombre (el mismo de tu KYC en el exchange). Guarda el comprobante de la transferencia. NUNCA marques "Pagado" sin haber pagado realmente. NUNCA aceptes mover el trato a WhatsApp o fuera de la plataforma. Si tu banco te pregunta por una transferencia, responde con la verdad: compraste criptoactivos. Tus comprobantes demuestran el origen de los fondos.' },
          { icon: AlertTriangle, title: 'Riesgos del Lado Fiat', text: 'Los estafadores también atacan la parte en pesos: comprobantes de pago falsos de Nequi/Bancolombia (contra vendedores), pagos que luego se reversan porque salieron de cuentas robadas, y el riesgo de "mula": si recibes dinero de origen ilícito, tu cuenta bancaria puede quedar congelada mientras investigan. Por eso: solo contrapartes con reputación y solo cuentas a tu propio nombre.' },
          { icon: Shield, title: 'Elige Bien la Contraparte', text: 'SOLO usa vendedores con 95%+ de calificación positiva y muchas órdenes completadas. Si algo se siente raro (presión, prisa, "mejor tasa por fuera"), cancela. Perder una buena tasa cuesta centavos; una estafa cuesta todo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Checklist para tu Primera Compra',
        items: [
          'Creaste cuenta en un exchange que acepte pesos (por ejemplo, Bitso, Buda, Wenia o Binance) y completaste la verificación KYC.',
          'Depositaste pesos con el método más barato disponible (transferencia o PSE antes que tarjeta).',
          'Compraste SOL usando una orden de mercado simple.',
          'Al retirar, seleccionaste la red SOLANA (no ERC20, no BEP20).',
          'Verificaste la dirección de tu Phantom: 6-8 caracteres al inicio y 6-8 al final, copiada directo de Phantom (nunca desde un historial de transacciones).',
          'Esperaste la confirmación y verificaste que llegó a tu Phantom.',
          'NO dejaste fondos en el exchange. Todo está en tu wallet propia.',
          'Guardaste el registro de tu compra: fecha, pesos, SOL, precio y comisión.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Al retirar SOL del exchange a Phantom, te muestran 3 opciones de red: SOL, ERC20 y BEP20. ¿Cuál eliges?',
          options: [
            { id: 'a', text: 'SOL, porque Phantom recibe SOL en la red Solana' },
            { id: 'b', text: 'ERC20, porque Ethereum es la red más conocida' },
            { id: 'c', text: 'BEP20, porque su fee de retiro es el más bajo' },
            { id: 'd', text: 'Cualquiera, porque todas llegan a la misma wallet' }
          ],
          correctAnswer: 'a',
          explanation: 'Elige la red que corresponde a la wallet destino: Phantom recibe SOL nativo en la red Solana. Por otra red, en el mejor caso el exchange rechaza la dirección; en el peor, los fondos llegan como un token distinto o a una dirección que no controlas. Un fee más bajo no compensa ese riesgo.'
        },
        {
          id: 'q2',
          question: 'Compraste el equivalente a 200,000 pesos en SOL en un exchange. ¿Qué debes hacer después?',
          options: [
            { id: 'a', text: 'Dejarlo en el exchange, porque allí está asegurado' },
            { id: 'b', text: 'Esperar a que suba de precio antes de moverlo' },
            { id: 'c', text: 'Moverlo a otro exchange para diversificar el riesgo' },
            { id: 'd', text: 'Retirarlo a mi Phantom y verificar que llegó' }
          ],
          correctAnswer: 'd',
          explanation: 'Mientras tus SOL estén en el exchange, dependes de él: puede congelar tu cuenta, ser hackeado o quebrar, como FTX. Los saldos en cripto de un exchange no tienen un seguro de depósito como el de un banco. Retira a tu wallet y confirma que llegaron. El precio no cambia por moverlos de lugar.'
        },
        {
          id: 'q3',
          question: 'El exchange cobra un fee fijo por retirar (del orden de 0.001-0.01 SOL), pero la red Solana cobra 0.000005 SOL. ¿Por qué la diferencia?',
          options: [
            { id: 'a', text: 'Solana subió sus comisiones de red ese mismo día' },
            { id: 'b', text: 'El exchange suma su propio cargo por el servicio' },
            { id: 'c', text: 'Es un error del exchange que debes reportar ya' },
            { id: 'd', text: 'Las comisiones de Solana cambian según la hora' }
          ],
          correctAnswer: 'b',
          explanation: 'El fee de retiro es un cargo del exchange, no de la red: Solana cobra una fracción de centavo y el resto es ingreso del exchange. Por eso, si compras seguido, conviene agrupar los retiros (por ejemplo, uno al mes) para que ese fee fijo pese menos, sin dejar montos grandes en el exchange.'
        },
        {
          id: 'q4',
          question: 'Vas a comprar SOL por P2P con pesos colombianos. El vendedor tiene 98% de calificación positiva y 500 órdenes completadas. ¿Es seguro comprarle?',
          options: [
            { id: 'a', text: 'No: el P2P siempre es una estafa, sin importar quién venda' },
            { id: 'b', text: 'Solo si antes le envío mi frase semilla para que verifique' },
            { id: 'c', text: 'Es buena señal, si pago desde mi cuenta y sigo las reglas' },
            { id: 'd', text: 'Sí, y con esa reputación puedo cerrar el trato por WhatsApp' }
          ],
          correctAnswer: 'c',
          explanation: 'Una buena reputación reduce el riesgo, pero no lo elimina. El escrow del exchange solo te protege si todo ocurre dentro de la plataforma: pagas desde una cuenta a tu nombre, guardas el comprobante y nunca mueves el trato a WhatsApp. Y nadie legítimo te pedirá tu frase semilla.'
        },
        {
          id: 'q5',
          question: 'Quieres depositar 500,000 pesos en el exchange. ¿Qué método suele ser el MÁS económico?',
          options: [
            { id: 'a', text: 'Tarjeta de crédito, porque el depósito es inmediato' },
            { id: 'b', text: 'Transferencia o PSE, aunque a veces tarda más' },
            { id: 'c', text: 'Un avance en efectivo de la tarjeta de crédito' },
            { id: 'd', text: 'Todos cuestan lo mismo, solo cambia la rapidez' }
          ],
          correctAnswer: 'b',
          explanation: 'Las transferencias bancarias y PSE suelen ser gratis o muy baratas. La tarjeta de crédito cobra 2-4% (de 10,000 a 20,000 pesos en 500,000) y, si no pagas el total a tiempo, intereses cercanos a la tasa de usura. Un avance en efectivo es todavía más caro. Si puedes esperar unas horas, la transferencia gana.'
        },
        {
          id: 'q-ord',
          type: 'ordering',
          question: 'Ordena los pasos de tu primera compra de SOL.',
          items: [
            'Crear tu cuenta y completar el KYC',
            'Depositar pesos por transferencia o PSE',
            'Comprar SOL con una orden de mercado',
            'Retirar a Phantom eligiendo la red Solana',
            'Verificar que los SOL llegaron a Phantom'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Sin KYC no puedes depositar, sin depósito no puedes comprar, y el retiro cierra la compra. El último paso es comprobar que llegó: hasta que no lo ves en Phantom, el proceso no ha terminado. Y desde el primer día, guarda el registro de cada compra.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 3,
        title: 'Checkpoint: Eligiendo la Red Correcta',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Vas a retirar tus SOL del exchange a tu Phantom. Te muestran las redes SOL, ERC20 y BEP20, y notas que BEP20 tiene el fee de retiro más bajo. ¿Qué haces?',
            options: [
              'Elijo BEP20, porque el fee es más bajo y llega igual',
              'Elijo ERC20, porque Ethereum es la red más conocida',
              'Elijo SOL y reviso el inicio y final de la dirección',
              'Elijo cualquiera; si no llega, pido que la reversen'
            ],
            correctAnswer: 2,
            explanation: 'La red debe coincidir con la wallet destino: Phantom espera SOL por la red Solana. Por otra red, tus fondos pueden llegar como un token distinto o a una dirección que no controlas, y recuperarlos puede ser imposible. Ningún fee "más barato" justifica ese riesgo, y en blockchain no existen las reversiones.',
            hint: 'Phantom es tu wallet de Solana. ¿Por qué red viaja el SOL?'
          }
        ]
      }
    ]
  },
  36: {
    id: 36,
    title: 'Tu Primera Transacción',
    level: 'Principiante',
    number: '14 de 19',
    duration: '12 minutos',
    type: 'Práctica',
    description: 'Envía valor a través del mundo en segundos, sin bancos ni intermediarios. Aprende a hacerlo con seguridad desde la primera vez.',
    sections: [
      {
        type: 'intro',
        title: 'El Momento Mágico',
        content: 'Hay un antes y un después de tu primera transacción cripto. Cuando envías valor a alguien del otro lado del mundo, en segundos, sin pedir permiso a nadie, y pagando menos de un centavo, algo hace "clic" en tu cabeza. Entiendes en carne propia por qué esto importa. Ya tienes SOL en tu Phantom. Ahora vamos a moverlo. Puedes enviar a un amigo, a una segunda wallet tuya, o incluso hacer un swap. Lo importante es que experimentes el proceso completo.',
        highlight: {
          title: 'Lo Que Estás a Punto de Experimentar',
          text: 'En el sistema bancario, una transferencia internacional puede tardar de 1 a 5 días y costar $20-50 más el tipo de cambio. En Solana, el envío tarda menos de 1 segundo y la red cobra menos de $0.001. Ojo: comprar cripto y volver a convertirla a pesos tiene sus propios costos (en total, alrededor de 1-3%). Aun así, la diferencia la vas a ver en los próximos 2 minutos.'
        }
      },
      {
        type: 'main',
        title: 'Anatomía de una Transacción en Solana',
        content: 'Antes de hacerlo, entiende qué está pasando bajo la superficie cuando envías cripto:',
        features: [
          { icon: Lock, title: 'Firmas Criptográficas', text: 'Cuando presionas "Enviar", tu wallet usa tu llave privada para "firmar" la transacción matemáticamente. Esta firma prueba que TÚ autorizaste el movimiento, sin revelar tu llave privada.' },
          { icon: Network, title: 'Propagación a la Red', text: 'Tu transacción firmada se envía al validador al que le toca producir el siguiente bloque (el "líder"). Él la incluye en el bloque y el resto de validadores, unos 660 con stake en todo el mundo, votan para confirmarlo. Todo ocurre en una fracción de segundo.' },
          { icon: CheckCircle, title: 'Confirmación', text: 'Una vez incluida en un bloque, la transacción es PERMANENTE. Queda grabada para siempre en la blockchain. Nadie puede revertirla ni borrarla. Y si una transacción falla, tus fondos nunca salen de tu wallet, aunque la red igual cobra el pequeño fee de procesamiento.' },
          { icon: Globe, title: 'Actualización del Estado', text: 'La blockchain actualiza los balances: tu cuenta tiene menos SOL, la cuenta destino tiene más. Solana produce un bloque cada ~200 milisegundos, y la confirmación suele llegar en menos de un segundo.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso a Paso: Enviar SOL desde Phantom',
        content: 'Vamos a hacerlo. Sigue estos pasos exactamente:',
        features: [
          { icon: Wallet, title: 'Paso 1: Abre Phantom', text: 'En la pantalla principal verás tu balance de SOL. Haz clic en el token SOL para ver opciones.' },
          { icon: Zap, title: 'Paso 2: Haz clic en "Send"', text: 'Verás un campo para ingresar la dirección destino y el monto a enviar.' },
          { icon: Shield, title: 'Paso 3: Pega la Dirección Destino', text: 'Pide a tu amigo que te envíe su dirección de Solana (algo como "7xK9p..."). Pégala en el campo. VERIFICA 6-8 caracteres al inicio y al final manualmente. Recuerda que Phantom es multichain: envía SOL por la red Solana, a una dirección de Solana.' },
          { icon: Activity, title: 'Paso 4: Ingresa el Monto', text: 'Para la primera prueba, envía algo pequeño (el equivalente a 5,000-20,000 pesos). Si la dirección destino nunca ha recibido SOL, el envío debe ser de al menos ~0.001 SOL, o la red lo rechazará. Y siempre deja algo de SOL para fees futuros (~0.01 SOL mínimo).' },
          { icon: CheckCircle, title: 'Paso 5: Confirma y Observa', text: 'Revisa el resumen, confirma. En 1-2 segundos verás "Confirmed". Pide a tu amigo que revise, ya debería ver los fondos.' }
        ]
      },
      {
        type: 'main',
        title: 'El Protocolo de Seguridad: Nunca Saltártelo',
        content: 'Las transacciones blockchain son IRREVERSIBLES. No hay "Ctrl+Z". No hay soporte técnico que las cancele. Estas precauciones son obligatorias:',
        features: [
          { icon: AlertTriangle, title: 'Verifica la Dirección', text: 'SIEMPRE compara 6-8 caracteres al INICIO y 6-8 al FINAL de la dirección con el original (o un bloque del medio). Los clipboard hijackers pueden cambiar la dirección cuando la copias. Una sola letra diferente puede significar perder los fondos para siempre.' },
          { icon: AlertTriangle, title: 'Address Poisoning: El Historial Envenenado', text: 'Los atacantes generan direcciones que coinciden en los PRIMEROS y ÚLTIMOS caracteres con las que usas, y te envían transferencias de polvo para que su dirección aparezca en tu historial. Si copias una dirección desde el historial, puedes estar copiando la del atacante. NUNCA copies direcciones del historial de transacciones: usa la libreta de direcciones de Phantom o un código QR, y verifica 6-8 caracteres en AMBOS extremos o un bloque del medio. La transacción de prueba también te protege de este ataque.' },
          { icon: Shield, title: 'Transacción de Prueba', text: 'Si vas a enviar un monto importante, SIEMPRE envía primero una prueba pequeña. Espera a que llegue. SOLO ENTONCES envía el resto. La segunda comisión cuesta una fracción de centavo; un error puede costarte todo.' },
          { icon: Lock, title: 'Confirma el Contexto', text: 'Si alguien "te urge" a enviar rápido, es red flag. Los estafadores crean presión artificial. Las transacciones legítimas pueden esperar 2 minutos de verificación.' }
        ],
        highlight: {
          title: 'Cómo Funciona un Clipboard Hijacker',
          text: 'Es un malware que vigila tu portapapeles: cuando copias una dirección de cripto, la reemplaza en silencio por la del atacante. Pegas, confirmas sin mirar y el dinero se va, sin reversión posible. Verificar visualmente los caracteres antes de confirmar es lo que te protege.'
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
          'La red te cobró menos de $0.001, comparado con $20-50 de una transferencia internacional (entrar y salir de cripto tiene costos aparte).',
          'La transacción tardó ~1 segundo, comparado con 1-5 días bancarios.',
          'Quedó grabada permanentemente en la blockchain, verificable por cualquiera, para siempre.',
          'Entiendes por qué las direcciones deben verificarse: las transacciones son IRREVERSIBLES.',
          'Tienes el poder de mover TU dinero, cuando TÚ quieras, donde TÚ quieras. Ese control también es una responsabilidad.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Vas a enviar 2 millones de pesos en SOL a un amigo. ¿Cuál es el protocolo correcto?',
          options: [
            { id: 'a', text: 'Enviar todo de una vez para no pagar dos comisiones' },
            { id: 'b', text: 'Enviar primero una prueba pequeña y luego el resto' },
            { id: 'c', text: 'Pedirle a mi amigo su frase semilla para verificar' },
            { id: 'd', text: 'Enviarlo dividido en diez partes iguales seguidas' }
          ],
          correctAnswer: 'b',
          explanation: 'Para montos importantes, envía primero una prueba pequeña, confirma con tu amigo que llegó y solo entonces envía el resto. La segunda comisión cuesta una fracción de centavo. Dividir en diez partes seguidas no sirve: si la dirección está mal, las diez se van al mismo lugar.'
        },
        {
          id: 'q2',
          question: 'Copiaste una dirección de Solana y la pegaste en Phantom. Antes de enviar, ¿qué debes verificar?',
          options: [
            { id: 'a', text: 'Que el primer carácter coincida con el original' },
            { id: 'b', text: 'Que la dirección tenga entre 32 y 44 caracteres en total' },
            { id: 'c', text: 'Que 6-8 caracteres al inicio y al final coincidan' },
            { id: 'd', text: 'Nada: copiar y pegar nunca cambia el texto' }
          ],
          correctAnswer: 'c',
          explanation: 'El malware de portapapeles puede reemplazar la dirección que copias, y el address poisoning siembra en tu historial direcciones parecidas a las tuyas. Una dirección falsa tiene el mismo formato y la misma longitud que la real, así que eso no prueba nada. Compara 6-8 caracteres en ambos extremos (o un bloque del medio).'
        },
        {
          id: 'q3',
          question: 'Tu amigo te quiere enviar SOL. ¿Qué información le das?',
          options: [
            { id: 'a', text: 'Mi dirección pública de Solana, que es segura' },
            { id: 'b', text: 'Mi frase semilla, para que pueda enviarme directo' },
            { id: 'c', text: 'Mi contraseña de Phantom, para que la autorice' },
            { id: 'd', text: 'Mi dirección de Ethereum, porque Phantom es multichain' }
          ],
          correctAnswer: 'a',
          explanation: 'Tu dirección pública es como un número de cuenta: otros pueden enviarte fondos, pero no retirarlos. Para recibir SOL, comparte la dirección de Solana, no la de Ethereum (la que empieza por 0x). Tu frase semilla y tu contraseña no se comparten nunca, con nadie.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Si envías SOL a una dirección equivocada, Phantom puede cancelar la transacción si lo contactas en las primeras 24 horas.',
          correctAnswer: false,
          explanation: 'Falso. Ni Phantom ni nadie puede revertir una transacción confirmada en Solana: no existe un "soporte de Solana" con ese poder. La única posibilidad es que el dueño de esa dirección, si lo conoces, decida devolverte los fondos. Por eso la verificación previa es CRÍTICA.'
        },
        {
          id: 'q5',
          question: '¿Cuánto cobra la red Solana, aproximadamente, por una transacción?',
          options: [
            { id: 'a', text: 'Entre $5 y $10, como una transferencia bancaria' },
            { id: 'b', text: 'El 1% del monto que envías, sin importar la red' },
            { id: 'c', text: 'Nada: las transacciones en Solana son gratis' },
            { id: 'd', text: 'Una fracción de centavo: 0.000005 SOL de base' }
          ],
          correctAnswer: 'd',
          explanation: 'La comisión base es de 5,000 lamports, es decir 0.000005 SOL (menos de $0.001). Con priority fees puede subir a $0.001-0.01, pero sigue siendo una fracción de centavo. No es gratis: si lo fuera, cualquiera podría saturar la red con transacciones basura.'
        }
      ]
    }
  },
  37: {
    id: 37,
    title: 'Exploradores de Bloques (Solscan)',
    level: 'Principiante',
    number: '15 de 19',
    duration: '12 minutos',
    type: 'Herramienta',
    description: '"Don\'t Trust, Verify", La filosofía central de cripto. Aprende a usar la herramienta que te permite verificar cualquier cosa en la blockchain.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué es un Explorador de Bloques?',
        content: 'La blockchain es un libro contable público. Cada transacción, cada balance, cada contrato, todo está ahí, visible para quien quiera verlo. Pero leer los datos crudos de una blockchain es muy difícil para una persona. Un **explorador de bloques** es una herramienta que traduce esos datos a formato legible. Para Solana, uno de los exploradores más usados es **Solscan.io**. Piénsalo como el "Google de Solana", puedes buscar cualquier dirección, cualquier transacción, cualquier token, y ver toda su historia.',
        highlight: {
          title: 'Don\'t Trust, Verify',
          text: 'Esta frase resume la filosofía cripto. ¿Tu amigo dice que envió el pago? Verifica en Solscan. ¿Un proyecto dice que tiene 100,000 holders? Verifica en Solscan. ¿Un exchange dice que procesó tu retiro? Verifica en Solscan. La blockchain registra lo que pasó, sin opiniones ni excusas.'
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
          { icon: Server, title: 'Contratos/Programas', text: 'Puedes ver cualquier programa (así se llaman los smart contracts en Solana): si su código fuente fue verificado, su historial de uso y sus estadísticas.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Práctico: Verificar una Transacción',
        content: 'Enviaste SOL y quieres confirmar que llegó. Aquí está el proceso exacto:',
        features: [
          { icon: Search, title: 'Paso 1: Obtén el TX Signature', text: 'En Phantom, después de enviar, haz clic en la transacción en tu historial. Verás un "Signature" o "TX ID", una cadena larga de letras y números. Cópialo.' },
          { icon: Globe, title: 'Paso 2: Abre Solscan', text: 'Ve a solscan.io (verifica la URL). En la barra de búsqueda, pega el Signature y presiona Enter.' },
          { icon: CheckCircle, title: 'Paso 3: Lee el Resultado', text: 'Verás el estado de la transacción. "Success" significa confirmada y completa. "Fail" significa que falló: los fondos no se movieron, aunque se cobró la comisión de red. También verás el monto, las direcciones de origen y destino, y el fee.' },
          { icon: Activity, title: 'Paso 4: Verifica el Destino', text: 'Haz clic en la dirección de destino para ver su balance actual. Si los fondos llegaron, aparecerán en el balance de esa wallet.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Práctico: Investigar una Wallet',
        content: 'Un proyecto nuevo dice que su equipo "nunca venderá" y que tiene pocos tokens. Un influencer presume una gran ganancia. Con Solscan puedes comprobar lo que dicen:',
        features: [
          { icon: Search, title: 'Busca la Dirección', text: 'Pega en solscan.io la dirección del equipo, del proyecto o de quien presume. Verás su balance de SOL y todos los tokens que tiene.' },
          { icon: Activity, title: 'Revisa el Historial', text: '¿La wallet vendió grandes cantidades del token justo antes de una caída? ¿Recibe fondos de muchas wallets recién creadas? El historial suele contar una historia distinta a la de las redes sociales.' },
          { icon: Users, title: 'Mira los Holders del Token', text: 'En la página del token, la pestaña de holders muestra qué porcentaje controla cada wallet. Si unas pocas wallets tienen la mayor parte del supply, pueden hundir el precio cuando vendan.' },
          { icon: AlertTriangle, title: 'Los Límites', text: 'Una wallet no tiene nombre: que alguien diga "esta es mi wallet" no prueba que lo sea, y un equipo puede repartir sus tokens en muchas wallets. Solscan te muestra QUÉ pasó, no QUIÉN está detrás ni qué hará después.' }
        ]
      },
      {
        type: 'main',
        title: 'Verificar Tokens: Evita Estafas',
        content: 'Cualquiera puede crear un token llamado "USDC" o "BONK". ¿Cómo sabes cuál es el real?',
        features: [
          { icon: Shield, title: 'El Contract Address (CA)', text: 'Cada token tiene una dirección única llamada "mint address" o "contract address". Es como el DNI del token. Dos tokens pueden tener el mismo nombre, pero NUNCA el mismo CA.' },
          { icon: CheckCircle, title: 'Fuentes Oficiales', text: 'Busca el CA oficial en CoinGecko, CoinMarketCap, o el sitio web oficial del proyecto. Nunca confíes en CAs que te mandan por Discord/Telegram.' },
          { icon: Search, title: 'Verificación en Solscan', text: 'Busca el token en Solscan y compara el CA. Si coincide con el oficial, es el token real (eso no significa que sea una buena inversión). Si no coincide, es una copia.' }
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
          'Solscan es tu ventana a la blockchain: la cadena es la fuente de verdad. El explorador puede fallar o ser clonado por phishing, así que verifica siempre la URL (solscan.io).',
          'Cualquier transacción puede verificarse usando su Signature/TX ID.',
          'Cualquier wallet es pública, puedes ver balance e historial de cualquier dirección.',
          'SIEMPRE verifica el Contract Address de tokens para evitar comprar falsificaciones.',
          'Antes de creerle a un proyecto o a un influencer, revisa sus wallets: el historial no se puede editar, aunque no te diga quién está detrás.',
          '"Don\'t Trust, Verify" no es paranoia, es el estándar profesional en cripto.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Enviaste SOL hace 10 minutos. Tu amigo dice que no le llegó. ¿Cuál es el paso correcto?',
          options: [
            { id: 'a', text: 'Confío en mi amigo y le reenvío el mismo monto' },
            { id: 'b', text: 'Contacto al soporte de Solana para que lo rastree' },
            { id: 'c', text: 'Espero 24 horas, porque Solana tarda en acreditar' },
            { id: 'd', text: 'Busco la transacción en Solscan: estado y destino' }
          ],
          correctAnswer: 'd',
          explanation: 'La blockchain es la fuente de verdad. Si Solscan dice "Success" y el destino es la dirección correcta, el dinero llegó: revisa con tu amigo que esté mirando la wallet y la red correctas. Si el destino es otra dirección, ya sabes dónde estuvo el error. Reenviar sin verificar puede duplicar la pérdida, y no existe un "soporte de Solana".'
        },
        {
          id: 'q2',
          question: 'Un proyecto nuevo asegura que su equipo tiene "apenas el 5% de los tokens". ¿Cómo lo compruebas?',
          options: [
            { id: 'a', text: 'Le pido al equipo una captura de su wallet en Discord' },
            { id: 'b', text: 'Reviso en Solscan los holders del token y sus wallets' },
            { id: 'c', text: 'Confío, porque el anuncio lo hizo la cuenta oficial' },
            { id: 'd', text: 'Leo los comentarios de la comunidad en Telegram' }
          ],
          correctAnswer: 'b',
          explanation: 'Las capturas se editan en minutos y los anuncios dicen lo que el equipo quiere. En Solscan, la pestaña de holders del token muestra cuánto controla cada wallet. Ojo: el equipo puede repartir tokens en muchas wallets, así que una distribución "sana" no es garantía, pero una concentración enorme sí es una señal clara de riesgo.'
        },
        {
          id: 'q3',
          question: 'Quieres comprar BONK. Hay 3 tokens llamados "BONK" en Jupiter. ¿Cómo sabes cuál es el real?',
          options: [
            { id: 'a', text: 'Elijo el que tenga el logo y el nombre más parecidos' },
            { id: 'b', text: 'Elijo el que aparezca primero en la lista de Jupiter' },
            { id: 'c', text: 'Comparo su CA con el de CoinGecko y lo verifico' },
            { id: 'd', text: 'Elijo el que tenga más compras en la última hora' }
          ],
          correctAnswer: 'c',
          explanation: 'Nombre y logo se copian en segundos, el orden de una lista no es garantía y las compras recientes se pueden simular con bots. El Contract Address (CA) es el único identificador único: búscalo en CoinGecko o en el sitio oficial del proyecto y compáralo en Solscan.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Si Solscan muestra "Fail" en tu transacción, perdiste los fondos que intentabas enviar.',
          correctAnswer: false,
          explanation: 'Falso. "Fail" significa que la transacción no se ejecutó: los fondos nunca salieron de tu wallet. Lo único que pierdes es la pequeña comisión de red. Revisa la causa (por ejemplo, no tener suficiente SOL para fees) e intenta de nuevo.'
        },
        {
          id: 'q5',
          question: '¿Qué información NO puedes ver en Solscan sobre una wallet pública?',
          options: [
            { id: 'a', text: 'Su balance de SOL y de cada uno de sus tokens' },
            { id: 'b', text: 'Su historial completo de transacciones' },
            { id: 'c', text: 'Los NFTs que tiene guardados en esa wallet' },
            { id: 'd', text: 'La frase semilla que protege esa wallet' }
          ],
          correctAnswer: 'd',
          explanation: 'La frase semilla nunca está en la blockchain: solo la conoce el dueño. Todo lo demás (balance, historial, tokens, NFTs) es público para cualquiera que busque la dirección. Lo que tampoco aparece es el nombre real del dueño, salvo que alguien lo vincule, por ejemplo a través de un exchange con KYC.'
        }
      ]
    }
  },
  38: {
    id: 38,
    title: 'Evitar Estafas en Web3',
    level: 'Principiante',
    number: '11 de 19',
    duration: '20 minutos',
    type: 'Seguridad Vital',
    description: 'La gran mayoría de los robos en cripto son evitables. Conoce las tácticas de los estafadores y protégete antes de perder el dinero que tanto te costó ganar.',
    sections: [
      {
        type: 'intro',
        title: 'La Realidad Brutal de Web3',
        content: 'Aquí no hay bancos que reviertan transacciones fraudulentas. No hay seguro de depósito. Casi nunca hay forma de recuperar lo robado: una transacción confirmada no se revierte. Pero aquí está la buena noticia: la gran mayoría de las estafas siguen los mismos patrones. Una vez que los conoces, son fáciles de detectar. Esta lección podría ser la más valiosa del curso: puede ahorrarte mucho dinero.',
        highlight: {
          title: 'Estadística Real',
          text: 'Según Chainalysis, solo en 2024 las estafas cripto recibieron al menos $9,900 millones de dólares (y la cifra real podría superar los $12,000 millones). El FBI reportó $9,300 millones en pérdidas por fraude cripto en Estados Unidos ese mismo año. En su gran mayoría no fueron hackeos sofisticados, sino ingeniería social: engaños en los que las VÍCTIMAS entregaron su dinero o sus llaves voluntariamente. Los estafadores no necesitan ser hackers genios. Solo necesitan que bajes la guardia una vez.'
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
          text: 'Si alguien te contacta primero ofreciendo "ayuda" con tu wallet, trátalo como estafa. Siempre. El soporte real de Phantom, Jupiter o cualquier exchange no inicia conversaciones por DM.'
        }
      },
      {
        type: 'main',
        title: 'Estafa #2: Phishing (Sitios Falsos)',
        content: 'Los estafadores crean copias EXACTAS de sitios legítimos para robarte:',
        features: [
          { icon: Globe, title: 'Cómo te Encuentran', text: 'Buscan "Phantom wallet" o "Jupiter swap" en Google. El primer resultado es un ANUNCIO de "phantomm.app" o "jupiter-swap.io". El sitio se ve IDÉNTICO al real.' },
          { icon: AlertTriangle, title: 'El Engaño', text: 'El sitio te pide "conectar wallet" o "importar wallet existente". Te pide tu seed phrase. Al ingresarla, la roban en tiempo real y vacían todo.' },
          { icon: Shield, title: 'La Defensa', text: 'NUNCA hagas clic en anuncios de Google para sitios cripto. Escribe la URL manualmente: phantom.com (antes phantom.app), jup.ag, solscan.io. Guarda los sitios oficiales en favoritos.' }
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
          { icon: Zap, title: 'El Setup', text: 'Alguien te ofrece vender "USDC" en P2P o te muestra un token "BONK" con buen precio en un DEX desconocido. Y ojo: en P2P el riesgo no es solo el token, también el pago fiat (comprobantes falsos, pagos reversados). Las reglas para comprar de forma segura las verás en la Lección 13.' },
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
          { icon: AlertTriangle, title: 'Cómo Funcionan', text: 'Conectas tu wallet a un sitio aparentemente legítimo y te pide firmar una transacción. En Solana no hacen falta "permisos ilimitados": una sola transacción maliciosa firmada puede transferir o reasignar tus tokens y NFTs en el mismo instante. La firma es el momento crítico.' },
          { icon: Shield, title: 'Las Defensas', text: 'LEE la simulación que Phantom te muestra antes de firmar. Si indica que tus tokens, NFTs o SOL van a SALIR de tu wallet y eso no era lo que esperabas, RECHAZA. Si el sitio no es 100% confiable, no conectes.' },
          { icon: CheckCircle, title: 'Usa Burner Wallets', text: 'Para probar dApps nuevas, usa una wallet "burner" con fondos mínimos. Si resulta ser estafa, pierdes poco. Tu wallet principal queda intacta.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Estafas Que No Necesitan Blockchain',
        content: 'Hasta aquí hablamos de estafas Web3: phishing, drainers, tokens falsos. Pero la mayor parte del dinero que la gente pierde "en cripto" se pierde en estafas que nunca tocan la blockchain. Ocurren por WhatsApp, Telegram y redes sociales, y la palabra "cripto" es solo el anzuelo. Estas son las cuatro que más víctimas cobran en Latinoamérica:',
        features: [
          { icon: Users, title: 'El "Cerdo Engordado" (Pig Butchering)', text: 'Alguien te escribe "por error" a WhatsApp o te contacta en redes. Semanas de conversación, amistad o romance. No te pide dinero... al principio. Luego te presenta "su plataforma de inversión". Depositas poco, ves ganancias (falsas), depositas más. Cuando intentas retirar, la plataforma te exige "pagar el impuesto para liberar tus fondos". Ese pago es la segunda estafa. Tu dinero nunca estuvo invertido.' },
          { icon: MessageSquare, title: 'Grupos de "Señales" en WhatsApp/Telegram', text: 'Te agregan a un grupo donde un "trader experto" comparte capturas de ganancias increíbles (se fabrican en minutos con cualquier editor). Ofrecen que un "gestor" invierta por ti. Los primeros pagos pequeños llegan puntuales: salen del dinero de las víctimas nuevas. Cuando dejan de entrar víctimas, los admins desaparecen con todo.' },
          { icon: Globe, title: 'Plataformas de Trading Falsas', text: 'Sitios y apps que imitan a un exchange real. Tu "balance" sube en pantalla, pero son números en una base de datos, no cripto real. El retiro siempre falla: "verificación pendiente", "paga una comisión", "sube a nivel VIP". Al final cierran el sitio y se van con los depósitos.' },
          { icon: TrendingDown, title: 'Ponzis y Piramidales Explícitos', text: '"Rendimiento fijo del 10% mensual garantizado" más "bonos por traer referidos". En Colombia ya vivimos esto con DMG y las captadoras ilegales: la fórmula es idéntica, solo cambiaron la palabra "divisas" por "cripto". La matemática no perdona: pagar rendimientos fijos exige que entren víctimas nuevas sin parar, y cuando el flujo se frena, colapsa. Siempre colapsa.' }
        ],
        highlight: {
          title: 'La Señal Universal',
          text: 'Nadie que realmente pueda generar retornos garantizados necesita tu dinero ni recluta desconocidos por WhatsApp. Rendimiento fijo prometido, urgencia y bonos por referidos: esa combinación es estafa. Sin excepciones.'
        }
      },
      {
        type: 'main',
        title: '¿Ya te Estafaron? Haz Esto',
        content: 'Si ya caíste, o sospechas que caíste, cada minuto cuenta. Sigue estos pasos en orden:',
        features: [
          { icon: AlertTriangle, title: '1. No Envíes Más Dinero JAMÁS', text: 'El "recovery scam" es la segunda ola: aparece gente que promete recuperar tus fondos a cambio de un pago adelantado. Son los mismos estafadores u otros que compraron tu contacto. Nadie recupera cripto robada cobrando un fee por adelantado.' },
          { icon: Lock, title: '2. Si Diste tu Frase Semilla, Actúa YA', text: 'Crea una wallet NUEVA con una frase nueva y mueve lo que quede de inmediato. La wallet comprometida está muerta para siempre: no le deposites nunca más, aunque parezca que no pasó nada.' },
          { icon: Shield, title: '3. Revoca Conexiones', text: 'Desde la wallet comprometida, revoca las conexiones y delegaciones de los sitios que autorizaste (en Phantom: Configuración, Aplicaciones conectadas). Reduce el daño que aún pueden hacerte.' },
          { icon: Search, title: '4. Guarda la Evidencia', text: 'Capturas de los chats, comprobantes de pago, direcciones de wallet, URLs de la plataforma. No borres nada por vergüenza: es lo único que permite investigar, reportar y advertir a otros.' },
          { icon: Landmark, title: '5. Denuncia', text: 'En Colombia: el CAI Virtual de la Policía Nacional y la Fiscalía. Reporta también la dirección del estafador en el exchange que usaste: si los fondos llegan ahí, pueden congelarlos.' },
          { icon: Users, title: '6. No te Avergüences', text: 'Los estafadores son profesionales que perfeccionan sus guiones con miles de víctimas. Esto le pasa a médicos, ingenieros y abogados. Contarlo protege a otros; callarlo solo protege al estafador.' }
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
            'URLs oficiales verificadas (phantom.com, jup.ag)',
            'NUNCA te piden seed phrase',
            'No prometen retornos garantizados',
            'Tienen historial público y verificable',
            'Código abierto y auditorías públicas (ayudan, pero no garantizan nada)',
            'Comunidad activa con moderación real',
            'La simulación de tu wallet coincide con lo que esperabas hacer'
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
          { icon: Wallet, title: 'Separa tus Wallets', text: 'Usa wallets diferentes para diferentes propósitos: una wallet principal para ahorros a largo plazo (mínima actividad), una wallet operativa para DeFi y experimentación, y una wallet burner para probar dApps nuevas o riesgosas. Ojo: pasar los fondos por una wallet intermedia no rompe el vínculo con tu identidad, porque cualquiera puede seguir la cadena de transacciones. Separar wallets limita lo que ve quien conoce UNA de tus direcciones, no lo que ve tu exchange.' },
          { icon: Shield, title: 'Prácticas Básicas de Privacidad', text: 'No publiques tu dirección de wallet en redes sociales. No uses ENS/SNS domains vinculados a tu identidad real para wallets con fondos importantes. No compartas capturas de pantalla que muestren tu balance o dirección. Y recuerda: en Web3, tu wallet ES tu identidad financiera, protégela como proteges tu número de cuenta bancaria.' },
          { icon: Lock, title: 'Discreción y Seguridad Física', text: 'La privacidad no es solo digital. Como viste en la Lección 8, no cuentes cuánto tienes en cripto ni presumas ganancias, ni en redes ni con conocidos. La extorsión existe, y quien sabe que tienes cripto puede presionarte para que entregues tu frase. Privacidad tampoco significa esconderte de la DIAN: tus criptoactivos se declaran igual. Se trata de protegerte de los delincuentes.' }
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
            { id: 'a', text: 'Les envío la frase para que protejan mis fondos' },
            { id: 'b', text: 'Les envío solo 6 palabras, para que no puedan robar' },
            { id: 'c', text: 'Bloqueo y reporto: Phantom nunca escribe primero' },
            { id: 'd', text: 'Les pido una llamada para confirmar que son reales' }
          ],
          correctAnswer: 'c',
          explanation: 'Phantom nunca inicia conversaciones por DM ni pide tu frase. Dar "solo una parte" tampoco es seguro: debilita mucho tu protección y el estafador simplemente te pedirá el resto. Y una llamada no prueba nada: los estafadores también llaman, con guiones muy convincentes.'
        },
        {
          id: 'q2',
          question: 'Buscas "Jupiter swap" en Google. El primer resultado es un anuncio de "jupiter-swap.io". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Hago clic, porque Google lo muestra de primero' },
            { id: 'b', text: 'Escribo jup.ag a mano o uso mi favorito guardado' },
            { id: 'c', text: 'Entro, pero solo conecto una wallet casi vacía' },
            { id: 'd', text: 'Entro si el sitio muestra HTTPS y el candado verde' }
          ],
          correctAnswer: 'b',
          explanation: 'Los estafadores PAGAN anuncios con dominios parecidos. El candado HTTPS solo indica que la conexión está cifrada, no que el sitio sea legítimo: los sitios falsos también lo tienen. Y entrar "con una wallet casi vacía" no te protege si el sitio te pide tu frase. Escribe la URL oficial o usa un favorito que ya verificaste.'
        },
        {
          id: 'q3',
          question: 'Aparece un NFT misterioso en tu wallet que dice "Reclama $5,000 en claim-crypto-rewards.xyz". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Visito el sitio para reclamar los $5,000 del premio' },
            { id: 'b', text: 'Lo vendo rápido en un marketplace antes de que baje' },
            { id: 'c', text: 'Lo ignoro y lo oculto: es un anzuelo para drenarme' },
            { id: 'd', text: 'Lo envío a otra wallet mía para revisarlo con calma' }
          ],
          correctAnswer: 'c',
          explanation: 'Los NFTs spam son anzuelos: el peligro está en visitar el sitio y firmar. Venderlo o moverlo también implica firmar transacciones con un contrato que no conoces. Lo más seguro es ocultarlo en tu wallet y olvidarlo.'
        },
        {
          id: 'q4',
          question: 'Quieres comprar USDC en un DEX. Hay 3 tokens llamados "USDC". ¿Cómo verificas cuál es el real?',
          options: [
            { id: 'a', text: 'Elijo el que tenga el logo y el nombre más oficial' },
            { id: 'b', text: 'Comparo su Contract Address con una fuente oficial' },
            { id: 'c', text: 'Elijo el que tenga más volumen de trading en el DEX' },
            { id: 'd', text: 'Pregunto en un grupo de Discord cuál es el verdadero' }
          ],
          correctAnswer: 'b',
          explanation: 'El Contract Address (CA) es lo único que identifica un token de forma única: nombre y logo se copian en segundos. El volumen puede servir como pista, pero también se infla artificialmente. El CA de USDC en Solana es EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: compáralo con el sitio de Circle o con CoinGecko.'
        },
        {
          id: 'q5',
          question: 'Un influencer de X te contacta por DM: "Estoy haciendo un giveaway privado. Envíame 0.5 SOL y te devuelvo 5 SOL". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Envío los 0.5 SOL, porque es una cuenta verificada' },
            { id: 'b', text: 'Le pido una prueba de identidad antes de enviar' },
            { id: 'c', text: 'Bloqueo: ningún regalo real te pide pagar antes' },
            { id: 'd', text: 'Envío 0.1 SOL primero, para ver si de verdad paga' }
          ],
          correctAnswer: 'c',
          explanation: 'Ningún giveaway legítimo te pide enviar dinero primero. Una cuenta verificada no prueba nada: las cuentas de influencers se hackean o se imitan con frecuencia. Y "probar con poco" es justo lo que el estafador espera: a veces devuelve una cantidad pequeña para ganarse tu confianza antes del golpe grande.'
        },
        {
          id: 'q6',
          question: 'Conectas tu wallet a una nueva dApp para hacer un swap pequeño. La simulación de Phantom muestra que TODOS tus tokens y tu SOL saldrán de tu wallet. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Firmo, porque necesito la dApp para hacer el swap' },
            { id: 'b', text: 'Rechazo: la simulación muestra que me vaciaría' },
            { id: 'c', text: 'Firmo, pero con un monto más pequeño esta vez' },
            { id: 'd', text: 'Pregunto al soporte de la dApp si eso es normal' }
          ],
          correctAnswer: 'b',
          explanation: 'En Solana, una sola transacción firmada puede transferir todos tus activos de una vez. Por eso la simulación de Phantom es tu última línea de defensa: léela SIEMPRE. Cambiar el monto no cambia lo que hace el contrato, y el "soporte" de un drainer siempre dirá que es normal. Si muestra salidas que no esperabas, rechaza.'
        },
        {
          id: 'q-ms',
          type: 'multiple-select',
          question: 'Un conocido te invita a una "plataforma de inversión cripto". ¿Cuáles de estas son señales de alerta? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Prometen un rendimiento fijo del 10% mensual' },
            { id: 'b', text: 'Te dan bonos por cada persona que invites' },
            { id: 'c', text: 'Para retirar, te piden pagar un "impuesto" primero' },
            { id: 'd', text: 'Te presionan: "el cupo se cierra hoy"' },
            { id: 'e', text: 'Puedes comprobar tus fondos en una wallet que solo tú controlas' }
          ],
          correctAnswers: [0, 1, 2, 3],
          explanation: 'Rendimiento fijo prometido, bonos por referidos, cobros para "liberar" tus fondos y urgencia artificial son las señales clásicas de un Ponzi o de una plataforma falsa. Que tus fondos estén en una wallet que solo tú controlas no es una alerta: es justo lo contrario de lo que estas plataformas permiten.'
        }
      ]
    }
  },
  39: {
    id: 39,
    title: 'Gasta tus Cripto',
    level: 'Principiante',
    number: '16 de 19',
    duration: '14 min',
    type: 'Herramientas',
    description: 'El círculo completo: de fiat a cripto, de cripto a gastos reales. Cómo usar tarjetas cripto, qué cuestan y qué riesgos tienen.',
    referrals: [
      {
        title: 'Kast',
        description: 'Tarjeta Visa virtual y física para gastar tus stablecoins (USDC/USDT). Es custodial: KAST guarda tus fondos mientras estén cargados. Plan Standard: $0 al año y 0% de fee al recargar con stablecoins.',
        link: 'https://app.kast.xyz/referral/NGUCNBNA',
        buttonText: 'Solicitar Tarjeta Kast'
      },
      {
        title: 'Avici',
        description: 'Smart wallet autocustodial con una tarjeta Visa de crédito asegurada con tu USDC como colateral. La virtual Platinum cuesta $15 (pago único), sin cuota anual y con 0% de recargo cambiario de Avici. Usa el código y obtén 10% de descuento en la emisión.',
        link: 'https://avici.money',
        buttonText: 'Ir a Avici',
        code: '9EULQP'
      }
    ],
    sections: [
      {
        type: 'intro',
        title: 'El Sueño: Vivir en Cripto',
        content: 'Aprendiste a comprar cripto. Aprendiste a guardarlo de forma segura. Aprendiste a moverlo. Ahora viene la pregunta final: ¿cómo lo USAS en el mundo real? La respuesta tradicional era: "vende en un exchange, retira a tu banco, y gasta el fiat". Pero esto tiene problemas: fees en cada paso, tiempos de espera de días, y límites bancarios que no controlas. Las **tarjetas cripto** reducen buena parte de esa fricción. Cargas tu tarjeta con USDC u otras stablecoins y la usas como cualquier Visa: Amazon, Netflix, gasolina, supermercado, en casi cualquier comercio que acepte tarjetas.',
        highlight: {
          title: 'El Ciclo Completo',
          text: 'Compras cripto en un exchange con tus pesos, la llevas a tu wallet, cargas tu tarjeta cripto y gastas. No eliminas a los intermediarios: el emisor de la tarjeta reemplaza a tu banco en el gasto diario. Eso sí: las tarjetas cripto también requieren verificación de identidad (KYC), y tus obligaciones fiscales siguen aplicando.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan las Tarjetas Cripto?',
        content: 'Las tarjetas cripto actúan como un puente entre el mundo blockchain y el sistema de pagos tradicional:',
        features: [
          { icon: Wallet, title: 'La Mecánica', text: 'Tú cargas la tarjeta con cripto (usualmente stablecoins como USDC). Cuando pagas en una tienda, la tarjeta convierte automáticamente tu cripto a la moneda local (pesos, dólares) al momento del pago. El comercio recibe fiat normal.' },
          { icon: Globe, title: 'Aceptación Universal', text: 'Estas tarjetas son Visa o Mastercard reales. Funcionan casi en cualquier lugar que acepte tarjetas: tiendas físicas, comercio online, pagos de servicios y suscripciones (algunas también en cajeros, con comisión).' },
          { icon: Zap, title: 'Otro Intermediario, No Ninguno', text: 'En algunos casos no necesitas cuenta bancaria: cargas la tarjeta directamente desde tu wallet. Pero detrás de cada tarjeta hay una empresa y un banco emisor. Cambias de intermediario, no lo eliminas, así que importa en quién confías.' },
          { icon: Shield, title: 'Sí Requieren KYC', text: 'Los emisores de estas tarjetas están regulados como cualquier emisor Visa/Mastercard: te pedirán tu documento de identidad y verificación completa (KYC) para emitirla. La autocustodia aplica a tus fondos, no a tu identidad. Y gastar cripto puede ser un evento fiscal en tu país: guarda tus registros.' }
        ]
      },
      {
        type: 'main',
        title: 'Opciones de Tarjetas para Latinoamérica',
        content: 'No todas las tarjetas cripto funcionan en LATAM. Estas son dos opciones que operan en Colombia, y funcionan de forma muy distinta (verifica disponibilidad y condiciones antes de solicitarlas; ambas son enlaces de referido):',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Banknote, title: 'KAST', text: 'Tarjeta Visa virtual y física que acepta USDC y USDT, con recarga directa desde Solana. Desde abril de 2026 también permite depositar y retirar pesos colombianos. Su plan Standard cuesta $0 al año, con 0% de fee al recargar con stablecoins (las compras en otra moneda pagan de 0.5% a 1.75%, y enviar la tarjeta física cuesta $40). Es custodial: mientras tus fondos estén cargados, los guarda KAST con custodios como BitGo y Fireblocks.' },
          { icon: Banknote, title: 'Avici', text: 'Smart wallet autocustodial (funciona en Solana y en redes compatibles con Ethereum). Su tarjeta Visa Platinum es una tarjeta de crédito asegurada: usas tu USDC como colateral, sin necesidad de historial crediticio. La virtual cuesta $15 (pago único), sin cuota anual y sin recargo cambiario de Avici (Visa puede sumar 0.4-1%). Colombia está en su lista de países elegibles. Ojo: el colateral vive en un contrato de préstamo en otra red, al que tus USDC de Solana se mueven automáticamente por un puente, con su propio riesgo.' },
          { icon: AlertTriangle, title: 'El Riesgo de Contraparte', text: 'En una tarjeta custodial, si la empresa falla o congela tu cuenta, tu saldo está en riesgo, como en un exchange. En una autocustodial dependes de contratos inteligentes y puentes que también pueden fallar. En ambos casos, la regla es la misma: carga solo lo que vas a gastar pronto.' }
        ]
      },
      {
        type: 'main',
        title: '¿Por Qué Gastar Stablecoins y NO Bitcoin/SOL?',
        content: 'Esta es una decisión estratégica importante que muchos nuevos usuarios no consideran:',
        features: [
          { icon: TrendingUp, title: 'El Problema de Gastar Activos Volátiles', text: 'Imagina que gastas 1 SOL ($150) en una cena. Un mes después, SOL vale $300: en la práctica pagaste $300 por esa cena. También puede pasar al revés (en 2022, SOL cayó más de 90% desde su máximo), pero en ambos casos estás mezclando tu inversión con tu gasto. El ejemplo más famoso es la "pizza de 10,000 BTC" de Laszlo Hanyecz.' },
          { icon: Shield, title: 'Stablecoins: El Dinero para Gastar', text: 'USDC está diseñado para valer ~$1. Gastar 100 USDC hoy es gastar unos $100, sin importar qué pase mañana con el precio de BTC o SOL. Por eso son prácticos para gastos diarios.' },
          { icon: PiggyBank, title: 'La Estrategia Óptima', text: 'Trata tus BTC, SOL o ETH como activos volátiles de largo plazo. Convierte a stablecoins SOLO lo que planeas gastar en el corto plazo, y carga tu tarjeta con eso. Así no "gastas" tu inversión sin darte cuenta.' }
        ],
        highlight: {
          title: 'Regla de Oro',
          text: 'Bitcoin y SOL son activos volátiles de LARGO PLAZO. Las stablecoins son para GASTAR. No mezcles los dos. Cuando necesites dinero para gastos, convierte una parte a stablecoins y de ahí a tu tarjeta, y guarda el registro de esa venta.'
        }
      },
      {
        type: 'main',
        title: 'El Proceso: De tu Wallet a Gastos Reales',
        content: 'Así funciona el flujo completo para gastar tu cripto:',
        features: [
          { icon: Wallet, title: 'Paso 1: Tienes USDC en Phantom', text: 'Ya sea porque compraste USDC directamente, o porque vendiste algo de SOL por USDC en Jupiter. Tienes stablecoins listos para gastar.' },
          { icon: Banknote, title: 'Paso 2: Carga tu Tarjeta Cripto', text: 'Desde la app de tu tarjeta obtienes una dirección de depósito. Envías USDC desde Phantom a esa dirección, por la red correcta y con una prueba pequeña la primera vez. En minutos, el balance aparece en tu tarjeta.' },
          { icon: Zap, title: 'Paso 3: Usa tu Tarjeta', text: 'Paga en comercios físicos u online que acepten Visa o Mastercard. La conversión a moneda local es automática, con el tipo de cambio y las comisiones de tu tarjeta.' },
          { icon: CheckCircle, title: 'Paso 4: Verifica tu Balance', text: 'En la app de la tarjeta ves el historial de gastos y el balance restante. Recarga cuando necesites más.' }
        ]
      },
      {
        type: 'main',
        title: 'Consideraciones Importantes',
        content: 'Antes de lanzarte a gastar, ten en cuenta estos puntos:',
        features: [
          { icon: AlertTriangle, title: 'Impuestos', text: 'En Colombia, cada vez que vendes o cambias cripto (también al gastarla) puede haber una ganancia que declarar. Lleva el registro desde tu primera compra, como viste en la Lección 13. Verás los detalles en la Lección 19.' },
          { icon: Percent, title: 'Fees', text: 'Las tarjetas pueden cobrar emisión, envío, recarga, transacción o conversión de moneda. Compara opciones. Algunas ofrecen cashback o puntos, pero esos programas cambian o terminan con frecuencia: no elijas solo por eso.' },
          { icon: Shield, title: 'Límites', text: 'Cada tarjeta tiene límites diarios/mensuales de gasto y retiro en cajeros. Verifica que se ajusten a tu uso esperado antes de elegir.' },
          { icon: Globe, title: 'Disponibilidad Geográfica', text: 'No todas las tarjetas funcionan en todos los países. Verifica disponibilidad en tu país antes de aplicar.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Cerrando el Ciclo',
        items: [
          'Las tarjetas cripto te permiten gastar tus activos digitales en el mundo real. El emisor de la tarjeta reemplaza a tu banco, no desaparece.',
          'Funcionan como Visa/Mastercard normales, aceptadas en millones de comercios mundialmente.',
          'Gasta STABLECOINS (USDC), no activos volátiles (BTC, SOL). Las stablecoins son para gastar; las criptos volátiles, para el largo plazo.',
          'Algunas tarjetas son custodiales (como KAST) y otras autocustodiales (como Avici). En ambas, carga solo lo que vas a gastar pronto.',
          'Todas requieren verificación de identidad (KYC). Considera impuestos, fees, y límites antes de elegir tu tarjeta.',
          'Con esto completas el ciclo: entrada al mundo cripto, custodia segura, y ahora salida práctica para uso diario.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes 1,000 USDC en tu Phantom y quieres comprar algo en Amazon. ¿Cuál es el camino más directo?',
          options: [
            { id: 'a', text: 'Pego mi dirección de wallet en el pago de Amazon' },
            { id: 'b', text: 'Cargo una tarjeta cripto con USDC y pago con ella' },
            { id: 'c', text: 'Vendo en un exchange y espero 5 días a mi banco' },
            { id: 'd', text: 'No se puede: la cripto no sirve para compras reales' }
          ],
          correctAnswer: 'b',
          explanation: 'La tarjeta cripto hace de puente: tú la cargas con USDC y ella le paga al comercio en moneda tradicional, como cualquier Visa. Vender en un exchange y retirar a tu banco también funciona, pero suele ser más lento. Amazon no acepta pagos directos a una dirección de wallet.'
        },
        {
          id: 'q2',
          question: 'Tienes 5 SOL que piensas guardar varios años. ¿Por qué no conviene usarlos para tus gastos diarios?',
          options: [
            { id: 'a', text: 'Porque la red Solana es demasiado lenta para pagar' },
            { id: 'b', text: 'Porque su precio varía mucho y es tu inversión' },
            { id: 'c', text: 'Porque ninguna tarjeta cripto acepta SOL jamás' },
            { id: 'd', text: 'Porque SOL no tiene valor fuera de su ecosistema' }
          ],
          correctAnswer: 'b',
          explanation: 'SOL es un activo volátil: en 2022 cayó más de 90% desde su máximo, y también ha subido mucho. Si lo gastas hoy y luego sube, pagaste más de lo que creías; si baja, quizás tuviste suerte, pero estás mezclando tu inversión con tu gasto. Mejor gasta stablecoins y deja SOL para el largo plazo. Además, cada venta puede tener implicaciones tributarias.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Cuando cargas tu tarjeta KAST, tus fondos siguen en autocustodia, igual que en Phantom.',
          correctAnswer: false,
          explanation: 'Falso. KAST es custodial: cuando la cargas, tus USDC pasan a estar bajo el control de la empresa y de sus custodios. Si la empresa falla o congela tu cuenta, tu saldo está en riesgo, como en un exchange. Por eso conviene cargar solo lo que vas a gastar pronto.'
        },
        {
          id: 'q4',
          question: 'Quieres empezar a usar una tarjeta cripto en Colombia. ¿Qué debes verificar primero?',
          options: [
            { id: 'a', text: 'Que acepte Bitcoin, porque es la cripto más conocida' },
            { id: 'b', text: 'Que me regale la mayor cantidad posible de puntos' },
            { id: 'c', text: 'Disponibilidad, custodia, comisiones y límites' },
            { id: 'd', text: 'Nada: todas funcionan igual en todos los países' }
          ],
          correctAnswer: 'c',
          explanation: 'Antes de elegir, revisa que opere en Colombia, quién guarda tus fondos (custodial o autocustodial), qué cobra (emisión, recarga, cambio de moneda) y qué límites tiene. Los puntos y recompensas cambian o terminan con frecuencia, y que acepte Bitcoin no dice nada sobre su riesgo.'
        },
        {
          id: 'q5',
          question: 'Tienes 10 SOL y 500 USDC. ¿Cuál es la forma más sensata de usarlos?',
          options: [
            { id: 'a', text: 'Gasto primero el SOL, porque es el que más vale' },
            { id: 'b', text: 'Convierto todo a USDC y lo voy gastando de a poco' },
            { id: 'c', text: 'Gasto los USDC y dejo el SOL para el largo plazo' },
            { id: 'd', text: 'Cargo todo en la tarjeta para tenerlo a la mano' }
          ],
          correctAnswer: 'c',
          explanation: 'Separar el dinero de inversión (SOL) del dinero para gastar (USDC) evita decisiones impulsivas. Cargar todo en la tarjeta te expone al riesgo del emisor, y convertir todo a USDC renuncia a tu inversión de largo plazo. Si necesitas más, convierte de a poco y guarda el registro para tus impuestos.'
        }
      ]
    }
  },
  41: {
    id: 41,
    title: 'Stablecoins: Tu Dólar Digital',
    level: 'Principiante',
    number: '12 de 19',
    duration: '19 minutos',
    type: 'Concepto Clave',
    description: 'Las stablecoins son la herramienta cripto más usada en Latinoamérica, pero la mayoría no entiende qué las respalda, ni los riesgos que esconden. Esta lección puede ahorrarte un desastre financiero.',
    sections: [
      {
        type: 'intro',
        title: 'El Dólar que Vive en la Blockchain',
        content: 'Tienes SOL, BTC, ETH... pero necesitas pagar el arriendo. El precio de tus criptos puede caer 30% mañana. ¿Cómo proteges tu dinero sin salir del ecosistema cripto? La respuesta son las **stablecoins**: tokens diseñados para mantener un valor estable, generalmente anclados 1:1 al dólar estadounidense. 1 USDC = 1 dólar. 1 USDT = 1 dólar. Esa es la promesa, y casi siempre se cumple, aunque no siempre (lo verás en esta lección). En Latinoamérica, las stablecoins se han convertido en algo más que una herramienta de trading. Son una de las formas más accesibles de **dolarizarse**: sin necesidad de una cuenta bancaria en Estados Unidos, sin límites de compra de dólares y, normalmente, con spreads menores que los bancarios. Un argentino que durante años convivió con controles de cambio (el llamado cepo), un venezolano con el bolívar destruido, un colombiano que quiere proteger sus pesos: muchos usan stablecoins como su cuenta de ahorro en dólares.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'Latinoamérica es una de las regiones donde más se usan stablecoins para la vida diaria. Muchas personas no las usan para especular, sino para protegerse. Cuando tu moneda local pierde valor cada semana, tener dólares digitales en tu wallet deja de ser un lujo.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan? Los 3 Tipos de Stablecoins',
        content: 'No todas las stablecoins son iguales. El mecanismo que mantiene su precio estable determina qué tan seguras son realmente:',
        features: [
          { icon: Landmark, title: 'Respaldadas por Reservas (USDC, USDT)', text: 'Una empresa tiene dólares reales (o bonos del tesoro) en un banco. Por cada token que emite, tiene $1 en reserva. Cuando quieres canjear tus USDC por dólares, Circle (la empresa detrás de USDC) quema el token y te da el dólar. Es el modelo más simple y el más usado.' },
          { icon: Lock, title: 'Sobrecolateralizadas (DAI)', text: 'No dependen de una empresa. Usas cripto como garantía (por ejemplo, depositas $150 en ETH para generar $100 en DAI). Si tu garantía baja de valor, se liquida automáticamente. Más descentralizadas, pero más complejas de usar. Ojo: hoy DAI (y su sucesor, USDS) también se respalda en buena parte con USDC y bonos, así que no es totalmente independiente de las empresas.' },
          { icon: AlertTriangle, title: 'Algorítmicas (UST/Luna, colapsó)', text: 'Usaban código y arbitraje de mercado para mantener el precio. Sin respaldo real. Cuando el mecanismo falló en mayo de 2022, UST perdió su paridad y cayó a centavos. Alrededor de $40 MIL MILLONES en valor desaparecieron en una semana. Personas perdieron los ahorros de toda su vida.' }
        ]
      },
      {
        type: 'main',
        title: 'USDC vs USDT: La Batalla de los Gigantes',
        content: 'Son las dos stablecoins más grandes del mundo. Las usarás constantemente. Pero tienen diferencias importantes que debes entender:',
        features: [
          { icon: Shield, title: 'USDC (Circle)', text: 'Emitido por Circle, empresa regulada en Estados Unidos. Atestaciones mensuales públicas verificadas por Deloitte (revisiones de reservas, no auditorías completas). Reservas en bonos del Tesoro de USA y efectivo en bancos regulados. Es la opción más transparente y la preferida por instituciones. Disponible en Solana, Ethereum, y múltiples redes.' },
          { icon: Globe, title: 'USDT (Tether)', text: 'El más usado del mundo por volumen. Emitido por Tether, que trasladó su sede a El Salvador en 2025 (antes operaba principalmente desde las Islas Vírgenes Británicas). Historial de controversias sobre la composición real de sus reservas: en 2021 pagó multas por declaraciones engañosas al respecto ($41 millones a la CFTC y $18.5 millones a la Fiscalía de Nueva York), y nunca ha completado una auditoría completa, solo atestaciones trimestrales de BDO. Han mejorado su transparencia, pero la confianza del mercado es menor que en USDC. La ventaja: tiene más liquidez y está en más exchanges y redes.' },
          { icon: AlertTriangle, title: 'El Riesgo de Ambas', text: 'Las dos dependen de una EMPRESA centralizada. Si Circle o Tether quiebran, si un regulador las cierra, o si los bancos donde tienen reservas fallan, tu stablecoin podría perder su paridad. En marzo 2023, USDC cayó temporalmente a $0.87 cuando Silicon Valley Bank (donde Circle tenía $3.3 mil millones) colapsó. Se recuperó en días, pero el susto fue real.' },
          { icon: Lock, title: 'Pueden Congelar tus Tokens', text: 'Circle y Tether pueden congelar direcciones específicas, por ejemplo por orden judicial o por sanciones, y lo hacen con frecuencia: Tether ha bloqueado miles de direcciones. Eso aplica aunque tengas los tokens en tu propia wallet. La autocustodia te protege de que un exchange quiebre o te bloquee la cuenta, pero no de una congelación del emisor. Para una persona común el riesgo es bajo, pero existe.' },
          { icon: Landmark, title: 'La Regulación Avanza', text: 'En Estados Unidos, la ley GENIUS (firmada en julio de 2025, vigente desde el 18 de enero de 2027) exige a los emisores de stablecoins una licencia, reservas de al menos 1 a 1 y la capacidad técnica de congelar tokens por orden legal. Más regulación suele significar reservas más seguras, pero también más control sobre los tokens.' }
        ]
      },
      {
        type: 'comparison',
        title: 'USDC vs USDT: ¿Cuál Usar?',
        leftSide: {
          title: 'USDC (Circle)',
          points: [
            'Atestaciones mensuales verificadas por Deloitte',
            'Reservas en bonos del Tesoro de corto plazo y efectivo',
            'Empresa regulada en USA',
            'Puede congelar direcciones por orden legal',
            'Más transparente: suele preferirse para ahorrar',
            'Ligeramente menos liquidez que USDT'
          ]
        },
        rightSide: {
          title: 'USDT (Tether)',
          points: [
            'Atestaciones trimestrales (BDO); nunca una auditoría completa',
            'Reservas diversificadas (bonos, BTC, oro, préstamos)',
            'Con sede en El Salvador (antes en las Islas Vírgenes Británicas)',
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
          { icon: TrendingDown, title: 'El Colapso', text: 'Una venta masiva de UST rompió el mecanismo de arbitraje. UST perdió su paridad con el dólar. El protocolo intentó salvar UST imprimiendo más LUNA, lo que destruyó el precio de LUNA. Fue una espiral de muerte: UST caía, se imprimía más LUNA, LUNA se desplomaba, crecía el pánico y UST caía todavía más. En cerca de una semana se evaporaron alrededor de $40 mil millones en valor.' },
          { icon: AlertTriangle, title: 'Las Víctimas', text: 'Hubo reportes de suicidios. Personas en Corea del Sur perdieron los ahorros de toda su familia. Jubilados que depositaron todo en Anchor por el 20% de "rendimiento seguro". El fundador, Do Kwon, fue arrestado en 2023 en Montenegro con un pasaporte falso y en 2025 se declaró culpable de fraude en Estados Unidos.' },
          { icon: Shield, title: 'La Lección Permanente', text: 'Si un rendimiento parece demasiado bueno para ser verdad, lo es. 20% anual "sin riesgo" no existe. Las stablecoins algorítmicas sin respaldo real son castillos de naipes. SIEMPRE pregunta: ¿qué respalda esto? Si la respuesta es "un mecanismo de código inteligente", aléjate.' }
        ],
        highlight: {
          title: 'Regla de Supervivencia',
          text: 'Antes de depositar dinero en CUALQUIER stablecoin, pregunta tres cosas: 1) ¿Qué la respalda exactamente? 2) ¿Puedo canjearla por dólares reales si quiero? 3) ¿Quién verifica sus reservas y con qué frecuencia? Si no puedes responder las tres, no deposites tus ahorros ahí.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Usar Stablecoins en tu Vida Diaria',
        content: 'En Latinoamérica, las stablecoins tienen usos prácticos que van mucho más allá del trading:',
        features: [
          { icon: PiggyBank, title: 'Ahorro en Dólares', text: 'Compra USDC con tus pesos y guárdalo en tu wallet. Es como tener una cuenta de ahorro en dólares sin necesidad de cuenta bancaria en USA. Sin controles de cambio y, normalmente, con menos spread que en el banco. Ojo: no es una cuenta bancaria. No tiene seguro de depósito y depende de que el emisor cumpla.' },
          { icon: Globe, title: 'Remesas', text: 'Enviar USDC de Estados Unidos a Colombia cuesta menos de $0.01 en comisión de red en Solana y llega en segundos. El costo real está en comprar los USDC y convertirlos a pesos. Aun así, el camino completo suele salir más barato que el promedio de las remesadoras tradicionales. Lo verás en detalle más abajo.' },
          { icon: Wallet, title: 'Tu Colchón Estable', text: 'Mantén en USDC el dinero que vas a necesitar pronto, para que no dependa del precio de BTC o SOL. Ojo: vender cada vez que todo cae y recomprar "cuando se estabilice" es intentar adivinar el mercado, y casi siempre sale mal (lo verás en la lección de DCA). Además, cada venta puede tener implicaciones tributarias.' },
          { icon: Zap, title: 'Pagos y Tarjetas Cripto', text: 'Las tarjetas cripto como KAST y Avici funcionan principalmente con stablecoins. Cargas USDC y pagas en comercios que aceptan Visa; el comercio recibe pesos. Algunas guardan tus fondos por ti y otras no: lo verás en la lección de pagos.' }
        ]
      },
      {
        type: 'main',
        title: 'Remesas con Stablecoins: Envía Dinero Sin Fronteras',
        content: 'Latinoamérica recibe más de $150 mil millones al año en remesas, dinero que trabajadores en USA, España y otros países envían a sus familias. Según el Banco Mundial, enviar remesas a Latinoamérica y el Caribe cuesta en promedio un 5.64% del envío entre comisión y tipo de cambio (alrededor de $28 por cada $500). Las apps de remesas digitales suelen ser más baratas que ese promedio, y el retiro en efectivo con remesadoras tradicionales puede llegar en minutos. Con stablecoins, la red casi no cobra: enviar $500 por Solana cuesta menos de **$0.01** y llega en segundos. El costo real está en los extremos: comprar USDC en el país de origen (0-2% según la plataforma y el método de pago) y convertirlo a pesos en el destino (alrededor de 1-2%). En total, suele quedar entre 1% y 3%.',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Banknote, title: 'Comparación de Costos', text: 'Enviar $500 con el costo promedio de la región: pierdes ~$28 (5.64%). Enviar $500 en USDC por Solana: menos de $0.01 de red, más 1-3% (~$5-15) entre comprar los USDC y convertirlos a pesos. Ahorro posible: ~$13-23 por cada $500. Si tu familia recibe $500 al mes, son unos $150-280 al año. Frente a las apps de remesas más baratas, la diferencia es menor y a veces desaparece: compara antes de decidir.' },
          { icon: Zap, title: 'Paso a Paso: Enviar Remesa con USDC', text: '1) El trabajador en USA compra USDC en un exchange (Coinbase, Kraken) o P2P. 2) Envía USDC a la wallet de Solana del familiar en LATAM (fee: $0.001, tiempo: ~2 segundos). 3) El familiar convierte USDC a moneda local usando un exchange local o plataforma P2P. 4) Retira a su cuenta bancaria o billetera digital. Todo el proceso puede completarse en minutos.' },
          { icon: Globe, title: 'Plataformas LATAM para Convertir', text: 'En Colombia: Bitso, Buda y Wenia permiten recibir USDC por la red Solana, venderlos por pesos y retirarlos a tu cuenta; Binance también, por P2P o con retiro en pesos. Ninguna está supervisada por la Superintendencia Financiera, porque en Colombia aún no existe un régimen de licencias para estas plataformas. En México: Bitso es la plataforma líder para convertir USDC a MXN con retiro bancario. En Argentina: plataformas P2P como Binance P2P o Lemon Cash permiten vender USDC al precio del dólar blue. En Venezuela: Binance P2P es la opción más usada. Investiga las opciones disponibles en tu país y verifica que acepten USDC en la red Solana antes de enviar.' },
          { icon: AlertTriangle, title: 'Consideraciones Importantes', text: 'La persona que recibe necesita saber usar una wallet cripto o tener una cuenta en un exchange local. La conversión a moneda local tiene un spread en la plataforma P2P (1-3%): es la mayor parte del costo total, y aun así el camino completo sigue siendo más barato que el promedio tradicional. En Colombia, guarda los comprobantes de cada envío y conversión: tu banco puede preguntar por el origen de los fondos y la DIAN considera los criptoactivos parte de tu patrimonio. En otros países, infórmate sobre las reglas locales.' }
        ],
        highlight: {
          title: 'El Impacto Real',
          text: 'Para una familia que recibe $500 mensuales en remesas, pasar del costo promedio a stablecoins puede significar unos $150-280 extra al año. Ese dinero es útiles escolares, medicinas o buena parte del mercado de un mes. Para millones de familias latinoamericanas, las stablecoins pueden ser mucho más que tecnología.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Las stablecoins son tokens anclados al dólar. Las principales son USDC (más transparente) y USDT (más líquida).',
          'Ambas dependen de empresas centralizadas, NO son descentralizadas como Bitcoin, y sus emisores pueden congelar tokens. Eso es un riesgo real.',
          'NUNCA uses stablecoins algorítmicas (sin respaldo real) para guardar ahorros. La catástrofe UST/Luna destruyó $40 mil millones.',
          'En Latinoamérica, las stablecoins son una de las formas más accesibles de dolarizarse sin depender de un banco.',
          'Diversifica: no tengas TODOS tus ahorros en una sola stablecoin. Si usas cantidades grandes, divide entre USDC y USDT.',
          'Si alguien te promete rendimientos "seguros" del 15-20% en stablecoins, corre. No existe el rendimiento alto sin riesgo alto.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué determina, sobre todo, qué tan segura es una stablecoin?',
          options: [
            { id: 'a', text: 'Su precio de hoy: si vale $1, es igual de segura que las demás' },
            { id: 'b', text: 'El mecanismo que la respalda: reservas, colateral o algoritmo' },
            { id: 'c', text: 'La red donde circula: en Solana todas son igual de seguras' },
            { id: 'd', text: 'Su popularidad: la más usada nunca puede perder su ancla' }
          ],
          correctAnswer: 'b',
          explanation: 'El mecanismo lo es todo. USDC tiene reservas en efectivo y bonos; UST solo tenía un algoritmo, y valió $1 hasta el día en que colapsó. La red solo define cómo se mueve el token, no qué lo respalda. Pregunta siempre: ¿qué respalda esto?'
        },
        {
          id: 'q2',
          question: 'En marzo de 2023, USDC cayó temporalmente a $0.87. ¿Qué lo causó?',
          options: [
            { id: 'a', text: 'Un hackeo a la red de Solana durante ese fin de semana' },
            { id: 'b', text: 'Circle tenía reservas en un banco que quebró (SVB)' },
            { id: 'c', text: 'Un error del algoritmo que mantiene el precio de USDC' },
            { id: 'd', text: 'Una prohibición temporal de USDC en Estados Unidos' }
          ],
          correctAnswer: 'b',
          explanation: 'Circle tenía unos $3.3 mil millones de sus reservas en Silicon Valley Bank, que quebró, y el mercado dudó de que las reservas estuvieran completas. USDC no tiene algoritmo: depende de reservas. Se recuperó cuando el gobierno garantizó los depósitos de SVB. Lección: incluso las stablecoins mejor respaldadas dependen de bancos y empresas.'
        },
        {
          id: 'q3',
          question: 'Un amigo te dice: "Encontré una plataforma que paga 25% anual en stablecoins, sin riesgo." ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto todo ya: 25% anual es una oportunidad única' },
            { id: 'b', text: 'Desconfío y pregunto de dónde sale ese rendimiento' },
            { id: 'c', text: 'Pongo una parte, porque es una stablecoin y no baja' },
            { id: 'd', text: 'Pruebo con poco para ver si los retiros funcionan' }
          ],
          correctAnswer: 'b',
          explanation: 'Anchor Protocol ofrecía cerca de 20% anual en UST y atrajo miles de millones antes del colapso. Que sea una stablecoin no elimina el riesgo de la plataforma que paga el rendimiento. Y "probar con poco" no sirve: los esquemas fraudulentos pagan los primeros retiros para ganarse tu confianza. Si nadie puede explicarte de dónde sale el rendimiento, el riesgo eres tú.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Si guardas tus USDC en tu propia wallet (autocustodia), nadie puede congelarlos.',
          correctAnswer: false,
          explanation: 'Falso. Circle (USDC) y Tether (USDT) pueden congelar direcciones específicas, por ejemplo por orden judicial o por sanciones, aunque los tokens estén en tu propia wallet. La autocustodia te protege de que un exchange quiebre o te bloquee la cuenta, pero no de una congelación del emisor. Para una persona común el riesgo es bajo, pero existe.'
        },
        {
          id: 'q4',
          question: 'Vives en un país con fuertes controles de cambio (como el cepo que tuvo Argentina durante años). ¿Cómo pueden ayudarte las stablecoins?',
          options: [
            { id: 'a', text: 'No ayudan: para dolarizarte necesitas billetes físicos' },
            { id: 'b', text: 'Te permiten ahorrar en dólares sin el cupo oficial' },
            { id: 'c', text: 'Te garantizan el mismo precio que el dólar oficial' },
            { id: 'd', text: 'Eliminan todos los riesgos de ahorrar en dólares' }
          ],
          correctAnswer: 'b',
          explanation: 'Las stablecoins permiten comprar y guardar dólares digitales sin depender del cupo oficial, normalmente a través de exchanges o P2P. Pero no te dan el precio oficial: se compran a precio de mercado (en Argentina, cerca del dólar paralelo). Y no eliminan los riesgos: el emisor puede congelar tokens y la plataforma que uses puede fallar. Revisa también las reglas de tu país.'
        },
        {
          id: 'q5',
          question: 'Tienes ahorros que quieres dolarizar con stablecoins. ¿Cuál es la estrategia más prudente?',
          options: [
            { id: 'a', text: 'Todo en USDT, porque es la que tiene más liquidez' },
            { id: 'b', text: 'Todo en la stablecoin que me pague más intereses' },
            { id: 'c', text: 'Dividir entre USDC y USDT, en una wallet propia' },
            { id: 'd', text: 'Una algorítmica, porque suele pagar más rendimiento' }
          ],
          correctAnswer: 'c',
          explanation: 'Diversificar reduce el riesgo de que un solo emisor tenga problemas, como USDC con SVB en 2023. Guardarlas en tu propia wallet te protege de la quiebra de un exchange, como pasó con FTX. Perseguir el mayor interés o usar algorítmicas es justo lo que llevó a la catástrofe de UST.'
        }
      ]
    }
  },
  42: {
    id: 42,
    title: 'DCA: Invierte Sin Estrés',
    level: 'Principiante',
    number: '17 de 19',
    duration: '16 minutos',
    type: 'Estrategia',
    description: 'Una de las formas más simples de invertir con constancia sin intentar adivinar el mercado. Qué hace bien, qué no hace, y cómo empezar con pesos.',
    sections: [
      {
        type: 'intro',
        title: 'Nadie Sabe Cuándo Es el Mejor Momento',
        content: '¿Cuándo es el mejor momento para comprar Bitcoin? La respuesta honesta es: **nadie lo sabe**. Ni los analistas, ni los traders con 20 años de experiencia, ni los "gurús" de X que aciertan una vez y te lo recuerdan por siempre (y olvidan las 50 veces que se equivocaron). Hay una estrategia que **reduce** el problema del timing: **Dollar Cost Averaging (DCA)**, o en español, inversión periódica. La idea es tan simple que parece tonta: compras una cantidad fija de cripto en intervalos regulares, sin importar el precio. 50,000 pesos cada semana. 200,000 cada mes. Lo que puedas. Llueva o truene. Sin mirar gráficos. Sin intentar predecir nada. Para la mayoría de las personas, que invierten una parte de su sueldo cada mes, es la forma natural de invertir. No elimina el riesgo de mercado: reduce el de comprar en mal momento por impulso. Porque el enemigo real no es solo el mercado, son tus emociones.',
        asOf: 'noviembre de 2026',
        highlight: {
          title: 'Un Ejemplo Real',
          text: 'Si hubieras invertido $50 cada semana en Bitcoin desde enero de 2019 hasta noviembre de 2026, habrías hecho 410 compras por ~$20,500 y acumulado ~1.036 BTC. Con BTC cerca de $75,860, eso vale ~$78,600: unas 3.8 veces lo invertido, después de atravesar varias caídas de más del 50% (y con el precio hoy ~40% por debajo de su máximo de octubre de 2025). Ojo: el resultado cambia mucho según las fechas de inicio y fin, no incluye comisiones, y el pasado no garantiza nada.'
        }
      },
      {
        type: 'main',
        title: '¿Por Qué Funciona? La Matemática del Promedio',
        content: 'DCA funciona por un principio matemático simple: al comprar a diferentes precios a lo largo del tiempo, tu **precio promedio** se suaviza. Compras más unidades cuando está barato (tu dinero rinde más) y menos cuando está caro (limitas tu exposición). No necesitas acertar el punto más bajo.',
        features: [
          { icon: TrendingDown, title: 'Cuando el Precio Baja', text: 'Tu monto fijo compra MÁS cripto. Con una caída de 50%, el mismo dinero compra el doble. Si confías en el activo a largo plazo, las caídas dejan de ser solo malas noticias.' },
          { icon: TrendingUp, title: 'Cuando el Precio Sube', text: 'Tu monto fijo compra menos cripto, pero lo que ya acumulaste vale más. El efecto neto: tus compras baratas anteriores compensan las compras caras actuales.' },
          { icon: Activity, title: 'El Promedio Juega a tu Favor', text: 'Como compras más unidades cuando el precio está bajo, tu costo promedio por unidad queda igual o por debajo del promedio de los precios de los días en que compraste. Eso no garantiza ganancias: si el activo cae y no se recupera, igual pierdes.' }
        ]
      },
      {
        type: 'main',
        title: 'DCA vs Timing: ¿Qué Dice la Historia?',
        content: 'Imagina 3 personas que destinan $4,800 a Bitcoin a lo largo de 4 años:',
        features: [
          { icon: Clock, title: 'Ana (DCA Disciplinado)', text: 'Compra $100 cada mes el día 1, sin importar el precio. No mira gráficos. No se estresa. En 4 años invirtió $4,800. En muchas ventanas de 4+ años hasta 2025 el DCA en BTC terminó en positivo, a veces con retornos de cientos de %; depende del inicio y del fin. No es un rango garantizado.' },
          { icon: AlertTriangle, title: 'Carlos (Intenta Hacer Timing)', text: 'Espera las caídas "perfectas" para comprar. Pero cuando cae, tiene miedo de que caiga más. Cuando sube, piensa que ya es muy tarde. En 4 años solo ejecutó 15 compras en lugar de 48. Invirtió menos y perdió las mejores oportunidades.' },
          { icon: TrendingDown, title: 'María (Compra Todo de Una Vez)', text: 'Invierte los $4,800 juntos al inicio. Si el mercado sube con los años, lo más probable es que termine con más que Ana, porque su dinero estuvo invertido más tiempo. Pero si compró en un pico, puede pasar AÑOS en pérdida, y ver -50% en sus ahorros hace que mucha gente venda en el peor momento.' }
        ],
        highlight: {
          title: 'Lo Que Muestra la Historia (Hasta Ahora)',
          text: 'En la historia de Bitcoin, quien hizo DCA durante 4 años o más y mantuvo la disciplina terminó en positivo en la gran mayoría de las ventanas, aunque con resultados muy distintos según las fechas. Acertar el momento de forma consistente es casi imposible. Pero Bitcoin es un activo joven y volátil: los rendimientos pasados no garantizan resultados futuros.'
        }
      },
      {
        type: 'counterpoint',
        title: 'Lo Que el DCA No Hace',
        content: '**Si ya tienes una suma grande, invertirla de una vez suele ganar.** Un estudio de Vanguard sobre mercados de acciones y bonos (actualizado en 2023) encontró que invertir todo de una vez superó a repartirlo en 12 meses cerca del 68% de las veces, porque en mercados que suben el dinero pasa más tiempo invertido. Repartir una suma grande sigue siendo válido si te ayuda a no arrepentirte por entrar justo antes de una caída, pero es una decisión de tranquilidad, no de rendimiento. El DCA de cada sueldo es otra cosa: simplemente inviertes a medida que ganas.\n\n**El DCA no arregla un mal activo.** Quien hizo DCA en LUNA durante 2021 y 2022 compró cada vez más barato... hasta que LUNA perdió casi todo su valor en mayo de 2022. Promediar un activo que va a cero sigue dando cero. El DCA decide cómo compras, no qué compras.'
      },
      {
        type: 'main',
        title: 'El Verdadero Enemigo: Tus Emociones',
        content: 'La razón por la que DCA es tan poderoso no es solo la matemática, es que **neutraliza tus emociones**, que son el mayor destructor de riqueza:',
        features: [
          { icon: AlertTriangle, title: 'FOMO (Fear Of Missing Out)', text: 'Bitcoin sube 40% en una semana. Todos tus amigos están comprando. Sientes urgencia de meter todo tu dinero AHORA. Con DCA: compras tu monto de siempre y sigues viviendo. Sin drama.' },
          { icon: AlertTriangle, title: 'Pánico en las Caídas', text: 'Bitcoin cae 35%. Los medios dicen que "se acabó". Tu instinto grita: ¡VENDE TODO! Con DCA: compras tu monto de siempre (que ahora compra más BTC) y sigues viviendo. Sin drama.' },
          { icon: CheckCircle, title: 'La Paz Mental', text: 'DCA convierte la inversión de una experiencia emocionalmente agotadora a un proceso automático. Como pagar Netflix cada mes. No piensas en ello. No te estresa. Y con el tiempo, acumulas sin desgastarte.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Configurar tu DCA en la Práctica',
        content: 'Configurar DCA es más fácil de lo que piensas. Puedes hacerlo manualmente o automatizarlo:',
        features: [
          { icon: Wallet, title: 'Manual (Semanal o Mensual)', text: 'Cada semana o mes, compras la cantidad fija que elegiste. En un exchange con pesos (por ejemplo, Bitso, Buda o Binance) o directamente en Jupiter si ya tienes stablecoins. Simple, sin complicaciones. Guarda el registro de cada compra.' },
          { icon: Zap, title: 'Automatizado con Jupiter', text: 'Jupiter en Solana tiene órdenes recurrentes (Recurring) integradas. Depositas USDC y configuras: comprar $X de SOL o BTC cada día/semana/mes. El protocolo ejecuta las compras automáticamente y cobra 0.1% por orden ejecutada. Ten en cuenta: el BTC en Solana es BTC envuelto (wrapped), con riesgo adicional del puente/custodio. Sin intervención humana = sin intervención emocional.' },
          { icon: PiggyBank, title: 'La Regla del Monto', text: 'Antes de empezar: si tienes deudas caras (tarjeta de crédito, créditos de consumo), pagarlas primero es el mejor retorno garantizado que vas a conseguir. Ten también un fondo de emergencia. Después, invierte solo lo que NO necesitas en los próximos 2 años o más. Ejemplo: si ganas 3,000,000 de pesos al mes y gastas 2,400,000, un DCA de 100,000 a 200,000 pesos al mes deja margen para ahorrar e imprevistos. Nunca inviertas el dinero del arriendo o la comida.' }
        ],
        highlight: {
          title: 'La Constancia Importa Más que el Monto',
          text: 'El mejor DCA es el que puedes mantener durante AÑOS sin afectar tu vida. 25,000 pesos semanales durante 5 años suman 6.5 millones invertidos; un aporte grande que no puedes repetir se queda en uno solo. Empieza con un monto que no te duela y súbelo cuando tus ingresos lo permitan.'
        }
      },
      {
        type: 'main',
        title: 'Antes de Cerrar: Lo Que Este Curso Es (y No Es)',
        content: 'Una aclaración importante que aplica a esta lección y a todo el curso. Aquí aprendes herramientas y criterios para decidir mejor, pero las decisiones son tuyas y el riesgo también.',
        highlight: {
          title: 'Educación, no asesoría',
          text: 'Todo lo que ves aquí es educación financiera general. No es asesoría personalizada ni una promesa de retornos. Los rendimientos pasados no garantizan resultados futuros. Invierte solo lo que puedas permitirte perder.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'DCA (Dollar Cost Averaging) = comprar una cantidad fija de cripto a intervalos regulares, sin importar el precio.',
          'Funciona porque tu precio promedio se suaviza: compras más cuando está barato, menos cuando está caro.',
          'En la historia de Bitcoin, el DCA de 4 años o más terminó en positivo en la gran mayoría de las ventanas. Los rendimientos pasados no garantizan resultados futuros.',
          'Si ya tienes una suma grande, invertirla de una vez suele rendir más. El DCA brilla cuando inviertes de tu sueldo y para controlar tus emociones.',
          'El DCA no arregla un mal activo: decide cómo compras, no qué compras.',
          'La ventaja principal no es solo matemática, es emocional. Elimina el FOMO, el pánico, y la parálisis de análisis.',
          'Puedes automatizarlo con las órdenes recurrentes (Recurring) de Jupiter en Solana para eliminar la intervención humana por completo.',
          'Regla de oro: paga primero tus deudas caras, invierte solo lo que no necesitas en los próximos 2 años o más, y no pares tu DCA por emociones del mercado.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin cae 40% en una semana. Los medios dicen que "se acabó". Tú haces DCA cada semana. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo antes de que caiga todavía más' },
            { id: 'b', text: 'Pauso mi DCA hasta que el precio se recupere' },
            { id: 'c', text: 'Compro mi monto normal, como cada semana' },
            { id: 'd', text: 'Meto todos mis ahorros porque está barato' }
          ],
          correctAnswer: 'c',
          explanation: 'DCA es disciplina, no emoción. Cuando el precio cae, tu monto fijo compra MÁS cripto y baja tu precio promedio. Pausar en las caídas es el error más común. Y meter todos tus ahorros rompe la regla del monto: el DCA no es una apuesta a que el precio ya tocó fondo.'
        },
        {
          id: 'q2',
          question: '¿Por qué el DCA suele dar mejores resultados que intentar "comprar barato y vender caro"?',
          options: [
            { id: 'a', text: 'Porque el mercado de cripto siempre termina subiendo' },
            { id: 'b', text: 'Porque evita que tus emociones decidan cuándo compras' },
            { id: 'c', text: 'Porque tiene una ventaja matemática que garantiza ganancias' },
            { id: 'd', text: 'Porque solo funciona con Bitcoin y no con otros activos' }
          ],
          correctAnswer: 'b',
          explanation: 'Nadie predice de forma consistente los puntos altos y bajos, y las emociones empujan a comprar caro (FOMO) y vender barato (pánico). El DCA quita esa decisión de tus manos. No garantiza ganancias: el mercado no siempre sube, y funciona igual con cualquier activo, bueno o malo.'
        },
        {
          id: 'q3',
          question: 'Ganas 3,000,000 de pesos al mes, gastas 2,400,000 y debes 2,000,000 en tu tarjeta de crédito, que cobra cerca de 28% anual. ¿Qué haces primero?',
          options: [
            { id: 'a', text: 'Pongo los 600,000 en DCA para maximizar ganancias' },
            { id: 'b', text: 'Pago la tarjeta y luego empiezo un DCA pequeño' },
            { id: 'c', text: 'Pido otro crédito para invertir más mientras baja' },
            { id: 'd', text: 'Hago DCA con todo y pago la tarjeta con ganancias' }
          ],
          correctAnswer: 'b',
          explanation: 'Pagar una deuda que cobra cerca de 28% anual equivale a un retorno garantizado de 28%: ninguna inversión te asegura eso. Primero la deuda cara y un pequeño fondo de emergencia; después, un DCA de 100,000 a 200,000 pesos al mes que puedas sostener durante años. Endeudarte para invertir multiplica el riesgo.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'Si recibes una herencia grande, repartir su inversión en 12 meses (DCA) casi siempre da más rendimiento que invertirla de una vez.',
          correctAnswer: false,
          explanation: 'Falso. Un estudio de Vanguard encontró que, en mercados que suben con el tiempo, invertir todo de una vez ganó cerca del 68% de las veces, porque el dinero pasa más tiempo invertido. Repartirlo sigue siendo válido si te ayuda a no arrepentirte, pero es una decisión de tranquilidad, no de rendimiento. El DCA de cada sueldo es otra cosa: es invertir a medida que ganas.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la mayor ventaja de automatizar tu DCA con las órdenes recurrentes (Recurring) de Jupiter?',
          options: [
            { id: 'a', text: 'Consigue mejores precios que comprar a mano' },
            { id: 'b', text: 'Evita que pauses por pánico o compres de más' },
            { id: 'c', text: 'Cobra menos que cualquier exchange del mundo' },
            { id: 'd', text: 'Garantiza ganancias, porque compra sin parar' }
          ],
          correctAnswer: 'b',
          explanation: 'La automatización es tu mejor defensa contra ti mismo: si el DCA corre solo, no puedes sabotearlo con decisiones emocionales. No consigue mejores precios ni garantiza ganancias, y Jupiter cobra 0.1% por orden. Ojo: el BTC en Solana es una versión envuelta (wrapped), con el riesgo adicional de su custodio o puente.'
        },
        {
          id: 'q5',
          question: 'Un amigo dice: "No voy a comprar Bitcoin ahora porque está muy caro. Voy a esperar a que baje." ¿Qué le responderías?',
          options: [
            { id: 'a', text: 'Tiene razón: mejor esperar a que el precio baje' },
            { id: 'b', text: 'Debería comprar todo hoy, antes de que suba más' },
            { id: 'c', text: 'Puede empezar un DCA pequeño en vez de adivinar' },
            { id: 'd', text: 'Bitcoin siempre baja tras subir, así que debe esperar' }
          ],
          correctAnswer: 'c',
          explanation: 'Nadie sabe si el precio bajará o subirá. Esperar el momento "perfecto" suele terminar en no invertir nunca, y comprar todo de golpe por miedo a quedarse fuera es la misma emoción al revés. Un DCA pequeño resuelve el dilema: si baja, compra más barato; si sube, ya tiene algo. Y si no está seguro del activo, tampoco tiene por qué comprarlo.'
        },
        {
          id: 'q-review',
          question: 'Repaso de la Lección 11. Alguien en Discord te dice: "¡Oportunidad única! Este token va a explotar en las próximas 2 horas, tengo información privilegiada. Solo quedan 50 cupos." ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro rápido, antes de que se acaben los cupos' },
            { id: 'b', text: 'Lo ignoro y lo reporto: son señales de estafa' },
            { id: 'c', text: 'Entro con poco, por si de verdad es una oportunidad' },
            { id: 'd', text: 'Pregunto en el mismo Discord si alguien ya ganó' }
          ],
          correctAnswer: 'b',
          explanation: 'Urgencia artificial ("2 horas"), escasez falsa ("50 cupos") e "información privilegiada" son señales clásicas de estafa, como viste en la Lección 11. Entrar "con poco" es justo lo que buscan, y en ese mismo Discord los "ganadores" suelen ser cómplices. Un DCA en activos que ya conoces no deja espacio para "oportunidades únicas de 2 horas".'
        }
      ]
    }
  },
  43: {
    id: 43,
    title: 'Bitcoin vs Altcoins: Qué Comprar Primero',
    level: 'Principiante',
    number: '18 de 19',
    duration: '15 minutos',
    type: 'Comparativa',
    description: 'Existen millones de tokens y casi ninguno vale la pena. Entiende por qué este curso propone BTC como base y cómo se diferencia de ETH, SOL y las demás.',
    sections: [
      {
        type: 'intro',
        title: 'No Todas las Criptomonedas Son Iguales',
        content: 'Cuando alguien dice "voy a invertir en cripto", es como decir "voy a invertir en internet". ¿En qué exactamente? ¿En Google? ¿En un blog random? ¿En una empresa que promete revolucionar todo y desaparece en 6 meses? El mundo cripto tiene millones de tokens (solo la plataforma pump.fun ha creado millones). La gran mayoría no vale nada y nunca lo valdrá. Pero hay categorías fundamentalmente diferentes que debes entender antes de poner un solo peso. **Bitcoin** no es lo mismo que **Ethereum**. Ethereum no es lo mismo que **Solana**. Y ninguno de los tres es lo mismo que DOGE, SHIB o la meme coin que tu primo te recomendó ayer. Esta lección te da el mapa para navegar este universo sin perderte.',
        highlight: {
          title: 'La Mayoría No Sobrevive',
          text: 'La gran mayoría de las criptomonedas que existen hoy probablemente no existirán en 10 años. De las 20 más grandes de hace una década, la mayoría ya no está en esa lista. Muchas eran experimentos, muchas eran estafas y muchas simplemente no resolvían ningún problema real. La selección importa enormemente.'
        }
      },
      {
        type: 'main',
        title: 'Bitcoin: La Reserva de Valor Digital',
        content: 'Bitcoin tiene un propósito claro: ser **oro digital**, una reserva de valor resistente a la censura. No intenta hacer todo. Intencionalmente, es lento y "limitado" en funcionalidades porque su prioridad es la **seguridad y la descentralización**.',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Lock, title: 'Escasez Absoluta', text: '21 millones máximo. Ninguna otra criptomoneda tiene un límite tan creíble. Cambiarlo requeriría que la gran mayoría de la red aceptara la modificación, algo que la comunidad ha rechazado de forma consistente: ningún desarrollador ni empresa puede hacerlo por su cuenta.' },
          { icon: Shield, title: 'Máxima Descentralización', text: 'Más de 20,000 nodos alcanzables en todo el mundo (y muchos más que no se ven). Ninguna persona, empresa o gobierno controla Bitcoin. Su punto débil: la minería se concentra en pocos pools (los dos más grandes encuentran cerca del 46% de los bloques), aunque los mineros pueden cambiarse de pool. Uptime de ~99.98% desde 2009 (las únicas interrupciones fueron en 2010 y 2013).' },
          { icon: Clock, title: 'Track Record', text: 'Desde 2009, Bitcoin ha sobrevivido prohibiciones, hackeos de exchanges, crisis financieras y cientos de declaraciones de "muerte". Ha caído más de 70% varias veces y siempre ha seguido funcionando. Ninguna otra cripto tiene un historial tan largo.' },
          { icon: Landmark, title: 'Adopción Institucional', text: 'Hay ETFs de Bitcoin aprobados en Estados Unidos, y la empresa Strategy (antes MicroStrategy) tiene 849,327 BTC en tesorería, aunque en 2026 también vendió una parte. El Salvador fue pionero al adoptarlo como moneda legal en 2021, aunque revirtió ese estatus a uso voluntario en 2025. Su adopción institucional es mayor que la de cualquier altcoin, aunque también existen ETFs de Ethereum.' }
        ]
      },
      {
        type: 'main',
        title: 'Ethereum y Solana: Las Plataformas de Utilidad',
        content: 'Si Bitcoin es oro digital, ETH y SOL son más como **sistemas operativos**: plataformas donde se construyen aplicaciones. No compiten directamente con Bitcoin, resuelven problemas diferentes.',
        features: [
          { icon: Layers, title: 'Ethereum (ETH)', text: 'La primera y más grande plataforma de contratos inteligentes. DeFi, NFTs, stablecoins, la mayoría nació aquí. Tiene el ecosistema más maduro y la mayor cantidad de desarrolladores. Su capa base es lenta (~15 TPS en L1) y hoy sus comisiones están en mínimos históricos: ~$0.002 por transferencia y ~$0.03 por swap en L1 (en sus L2, menos de un centavo), aunque suben con la demanda. Es la plataforma más establecida: dominante y probada, pero más fragmentada entre capas.' },
          { icon: Zap, title: 'Solana (SOL)', text: 'Plataforma rápida: ~1,750-2,300 transacciones de usuarios por segundo, con fees de fracciones de centavo. Ecosistema DeFi en crecimiento (Jupiter, Raydium, Marinade). Ideal para experimentar y aprender porque los errores cuestan centavos. Más joven y con más riesgo: menos validadores y un historial de caídas de red.' },
          { icon: Network, title: 'La Diferencia Clave con Bitcoin', text: 'ETH y SOL no tienen un límite fijo de 21 millones como Bitcoin. SOL emite nuevos tokens continuamente para pagar validadores (alrededor de 3.6% al año); ETH, desde el Merge, tiene una emisión baja (cerca de 0.8% en el último año), que solo fue deflacionaria en 2023. Son inversiones en tecnología y ecosistemas, no en escasez pura. Eso los hace más volátiles y más arriesgados.' }
        ],
        highlight: {
          title: 'Analogía Clara',
          text: 'Bitcoin = oro digital (reserva de valor, escasez). Ethereum = infraestructura financiera (DeFi maduro, lento pero seguro). Solana = infraestructura de alta velocidad (DeFi rápido, barato, pero más joven). Los tres pueden coexistir porque resuelven problemas diferentes.'
        }
      },
      {
        type: 'main',
        title: 'El Universo de las Altcoins: Categorías que Debes Conocer',
        content: 'Más allá de BTC, ETH y SOL, existen millones de tokens. Estas son las categorías principales que encontrarás:',
        features: [
          { icon: Landmark, title: 'Stablecoins (USDC, USDT)', text: 'Ya las conoces de la Lección 12 de este nivel. Ancladas al dólar. No son inversión, son herramienta de ahorro y operación. Esenciales para tu estrategia.' },
          { icon: Gem, title: 'Tokens de Protocolo (JUP, RAY, RENDER)', text: 'Tokens que representan proyectos específicos con utilidad real: gobernanza, acceso a servicios, descuentos en fees. Su valor depende del éxito del proyecto. Alto riesgo, alto potencial.' },
          { icon: AlertTriangle, title: 'Meme Coins (DOGE, SHIB, BONK)', text: 'Tokens sin utilidad real, impulsados por comunidad y especulación pura. Algunos generan retornos absurdos (1000x), pero la inmensa mayoría va a cero. Son apuestas, no inversiones. Si participas, hazlo con dinero que estés dispuesto a perder al 100%.' },
          { icon: AlertTriangle, title: 'Tokens Dudosos (la Gran Mayoría)', text: 'Proyectos sin equipo real, sin producto, sin auditoría. Tokens creados en 5 minutos para extraer dinero de incautos. Si no puedes explicar qué problema resuelve un token en una oración, probablemente no resuelve ninguno.' }
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
            'Base de tu porción cripto si empiezas (60-70%)',
            'Casi no se usa para DeFi ni apps'
          ]
        },
        rightSide: {
          title: 'Ethereum + Solana (ETH/SOL)',
          points: [
            'Plataformas para construir aplicaciones',
            'Ecosistemas DeFi, NFTs, staking',
            'Sin límite fijo de 21M como Bitcoin',
            'Mayor volatilidad y riesgo',
            'Complemento si empiezas (20-30% entre ambas)',
            'Necesarios para usar DeFi y apps Web3'
          ]
        }
      },
      {
        type: 'main',
        title: 'Cómo Construir tu Primer Portafolio',
        content: 'Antes de repartir, decide cuánto de tus ahorros va a cripto. Una guía educativa común para principiantes es no poner más del 5-10% de tus ahorros invertibles, es decir, lo que te queda después de pagar deudas caras y tener tu fondo de emergencia. Por ejemplo, con 10 millones de pesos invertibles, serían de 500,000 a 1,000,000 en cripto. Los porcentajes de abajo son **dentro de esa porción cripto**, no de todo tu dinero. Son marcos educativos para que veas la lógica, no recetas ni una recomendación personalizada.',
        features: [
          { icon: Shield, title: 'Base Para Empezar (Menor riesgo)', text: 'Dentro de tu porción cripto: 60-70% BTC + 20-30% entre ETH y SOL + 5-10% stablecoins. La mayoría en Bitcoin como ancla. Es el marco que usamos en la lección final para armar tu plan.' },
          { icon: Activity, title: 'Moderado (Más exposición a plataformas)', text: 'Dentro de tu porción cripto: 45-55% BTC + 30-40% entre ETH y SOL + 5-10% stablecoins + hasta 5% en altcoins que entiendas. Más exposición a ecosistemas de crecimiento. Requiere más conocimiento y atención.' },
          { icon: Zap, title: 'Agresivo (Mayor riesgo)', text: 'Dentro de tu porción cripto: 30-40% BTC + 40-50% entre ETH y SOL + 5-10% stablecoins + hasta 10% en altcoins. Alta exposición a caídas fuertes. No es para principiantes: solo si ya tienes experiencia y puedes ver -70% sin vender en pánico.' }
        ],
        highlight: {
          title: 'La Regla Para Principiantes',
          text: 'Si apenas empiezas, pon entre 60% y 70% de tu porción cripto en Bitcoin. Es tentador ir directo a altcoins que prometen 100x, pero Bitcoin es tu ancla. Aprende a caminar antes de correr: muchos de los que se saltaron Bitcoin para ir directo a meme coins terminaron perdiendo casi todo.'
        }
      },
      {
        type: 'main',
        title: 'Antes de Cerrar: Lo Que Este Curso Es (y No Es)',
        content: 'Una aclaración importante que aplica a esta lección y a todo el curso. Aquí aprendes herramientas y criterios para decidir mejor, pero las decisiones son tuyas y el riesgo también.',
        highlight: {
          title: 'Educación, no asesoría',
          text: 'Todo lo que ves aquí es educación financiera general. No es asesoría personalizada ni una promesa de retornos. Los rendimientos pasados no garantizan resultados futuros. Invierte solo lo que puedas permitirte perder.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Bitcoin es reserva de valor (oro digital). ETH y SOL son plataformas de utilidad (sistemas operativos). Resuelven problemas diferentes.',
          'Bitcoin tiene escasez fija (21M), una red muy descentralizada y más de 15 años de historial. Ninguna otra cripto reúne las tres cosas.',
          'ETH y SOL no tienen límite fijo de emisión, son más volátiles, pero permiten DeFi, staking, y aplicaciones que Bitcoin no puede.',
          'La gran mayoría de las altcoins no sobrevivirá. Solo invierte en tokens cuyo problema puedas explicar en una oración.',
          'Meme coins son apuestas, no inversiones. Si participas, usa solo dinero que puedas perder completamente.',
          'Decide primero cuánto de tus ahorros va a cripto (una guía común para principiantes: no más del 5-10%). Dentro de esa porción, empieza con 60-70% en BTC y agrega ETH y SOL a medida que aprendas.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la diferencia fundamental entre Bitcoin y Solana como inversión?',
          options: [
            { id: 'a', text: 'No hay diferencia real: las dos son criptomonedas' },
            { id: 'b', text: 'BTC busca ser reserva escasa; SOL, una plataforma' },
            { id: 'c', text: 'Solana es mejor en todo, porque es más rápida y barata' },
            { id: 'd', text: 'Bitcoin es mejor en todo, porque fue la primera en existir' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin optimiza para seguridad y escasez (busca ser oro digital). Solana optimiza para velocidad y aplicaciones, con emisión continua de nuevos SOL. Ninguna es "mejor en todo": tienen propósitos y riesgos distintos, y por eso un portafolio puede tener ambas.'
        },
        {
          id: 'q2',
          question: 'Un influencer recomienda meter todo tu dinero en una meme coin que "va a hacer 1000x". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto todo ya, antes de que sea demasiado tarde' },
            { id: 'b', text: 'Investigo el proyecto y, si parece serio, meto todo' },
            { id: 'c', text: 'Si participo, solo con dinero que puedo perder todo' },
            { id: 'd', text: 'Confío, porque el influencer tiene muchos seguidores' }
          ],
          correctAnswer: 'c',
          explanation: 'Las meme coins son apuestas especulativas: su precio depende del hype, no de un producto. Investigar no cambia eso, y "meter todo" nunca es razonable en una apuesta. Muchos influencers reciben tokens gratis para promoverlos y venden cuando sus seguidores compran. Si participas, que sea con una parte mínima que puedas perder al 100%.'
        },
        {
          id: 'q3',
          question: 'Decidiste destinar 1,000,000 de pesos a cripto y nunca has comprado antes. ¿Qué distribución sigue el marco de esta lección?',
          options: [
            { id: 'a', text: 'Todo en la altcoin más barata, para tener más monedas' },
            { id: 'b', text: '650,000 en BTC, 250,000 en SOL y ETH, 100,000 en USDC' },
            { id: 'c', text: '500,000 en BTC y 500,000 en meme coins para equilibrar' },
            { id: 'd', text: 'Todo en SOL, porque es la red que usamos en el curso' }
          ],
          correctAnswer: 'b',
          explanation: 'Para empezar, 60-70% en BTC te da una base sólida, 20-30% en ETH y SOL te da exposición a plataformas, y 5-10% en stablecoins te deja una reserva operativa. Una moneda "barata" no es una ganga: lo que importa es el valor total del proyecto, no el precio por unidad. Y usar Solana para aprender no significa concentrar tu inversión en SOL.'
        },
        {
          id: 'q4',
          question: '¿Por qué se considera que Bitcoin tiene menos riesgo que SOL o ETH a largo plazo?',
          options: [
            { id: 'a', text: 'Porque su precio nunca baja, como sí pasa con otras' },
            { id: 'b', text: 'Porque no depende del éxito de una empresa o equipo' },
            { id: 'c', text: 'Porque cuesta más, y lo caro siempre es más seguro' },
            { id: 'd', text: 'Porque tiene más aplicaciones que ETH y que SOL' }
          ],
          correctAnswer: 'b',
          explanation: 'Bitcoin tiene escasez fija, más de 15 años de historial y una red muy descentralizada, y su valor no depende de que un equipo lance actualizaciones o de que un ecosistema de apps crezca. Eso no significa que no baje: ha caído más de 70% en varios mercados bajistas. "Menos riesgo" no es "sin riesgo".'
        },
        {
          id: 'q-ms',
          type: 'multiple-select',
          question: '¿Cuáles son razones válidas para no poner el 100% de tu porción cripto en Bitcoin? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'ETH y SOL dan acceso a DeFi, staking y aplicaciones' },
            { id: 'b', text: 'Diversificar reduce la dependencia de un solo activo' },
            { id: 'c', text: 'Las stablecoins sirven como reserva para gastos o compras' },
            { id: 'd', text: 'SOL va a superar a Bitcoin en precio tarde o temprano' },
            { id: 'e', text: 'Bitcoin dejará de funcionar cuando se mine el último BTC' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'ETH y SOL dan acceso a aplicaciones que Bitcoin casi no tiene, diversificar reduce la dependencia de un solo activo y las stablecoins sirven como reserva. Pero nadie sabe si SOL superará a Bitcoin, y Bitcoin seguirá funcionando después del último BTC minado (alrededor del año 2140): los mineros vivirán de las comisiones. Diversificar también implica asumir el riesgo extra de esas plataformas.'
        },
        {
          id: 'review_1',
          question: 'Repaso de la Lección 12. ¿Cuál es el principal riesgo de las stablecoins algorítmicas frente a las respaldadas por reservas?',
          options: [
            { id: 'a', text: 'Sus transacciones son más lentas que las de USDC' },
            { id: 'b', text: 'Cobran comisiones de red más altas en cada envío' },
            { id: 'c', text: 'Pueden perder su paridad si el mecanismo falla' },
            { id: 'd', text: 'Solo funcionan en Ethereum y no en otras redes' }
          ],
          correctAnswer: 'c',
          explanation: 'Las algorítmicas dependen de un mecanismo de código y arbitraje, no de reservas reales. Cuando ese mecanismo falla, pueden perder su paridad y casi todo su valor, como UST en 2022. Las respaldadas por reservas (USDC, USDT) también tienen riesgos, pero de otro tipo: el emisor, sus bancos y las congelaciones.'
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
        content: 'Felicidades. Si llegaste hasta aquí, ya sabes más sobre dinero, inflación y criptomonedas que la mayoría de las personas. Entiendes **por qué** la inflación erosiona tus ahorros (Lecciones 1-3). Conoces **la propuesta** de Bitcoin, con sus riesgos (Lección 4). Sabes **cómo funciona** la tecnología (Lecciones 5-6). Tienes tu wallet configurada y sabes identificar estafas (Lecciones 7-11). Entiendes stablecoins, has hecho transacciones, y conoces el DCA y la diferencia entre BTC y altcoins (Lecciones 12-18). Ahora falta lo más importante: **convertir todo ese conocimiento en acción**. Un plan sin ejecución es un sueño. Esta lección es tu hoja de ruta.',
        highlight: {
          title: 'El Momento de la Verdad',
          text: 'El conocimiento sin acción no vale nada. Después de esta lección, deberías tener un plan escrito con montos, fechas y reglas claras. No un "algún día voy a invertir", sino un PLAN concreto. Y si tus números muestran deudas caras o falta de ahorro, tu plan empieza por ahí: eso también es avanzar.'
        }
      },
      {
        type: 'main',
        title: 'Paso 1: Define tu Situación Financiera',
        content: 'Antes de invertir un solo peso en cripto, necesitas claridad brutal sobre tu realidad financiera. Sin esto, cualquier inversión es una apuesta irresponsable:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Percent, title: 'Deudas Caras Primero', text: 'Si tienes deudas con intereses altos (tarjeta de crédito, créditos de consumo), pagarlas es una inversión con retorno garantizado igual a su tasa. En Colombia, la tasa de usura para consumo y tarjetas es 28.34% efectivo anual (cerca de 2.1% al mes), y muchas tarjetas cobran cerca de ese tope. Ninguna inversión te garantiza 28% al año: paga primero esas deudas. Un crédito de vivienda a tasa baja es otra historia.' },
          { icon: PiggyBank, title: 'Fondo de Emergencia', text: 'Antes de cripto, necesitas 3-6 meses de gastos en ahorros líquidos (efectivo o cuenta bancaria). Si tus gastos fijos son 2,000,000 de pesos al mes, tu fondo debería estar entre 6 y 12 millones. Si mañana te quedas sin empleo, ¿puedes sobrevivir 3 meses? Si la respuesta es no, tu prioridad es ahorrar, no invertir. Cripto es volátil, no puede ser tu salvavidas.' },
          { icon: Banknote, title: 'Calcula tu Capacidad de Inversión', text: 'Tus ingresos mensuales, menos tus gastos fijos y variables, menos lo que destinas a deudas y a tu fondo de emergencia: eso es lo que PUEDES invertir. Si el número es 50,000 pesos al mes, perfecto. Empieza con eso. Si es cero, enfócate primero en aumentar ingresos o reducir gastos. Invertir con dinero prestado o necesario es el error número uno.' },
          { icon: Clock, title: 'Define tu Horizonte', text: '¿Cuánto tiempo puedes dejar ese dinero sin tocarlo? Si necesitas el dinero en 6 meses, no inviertas en cripto volátil. Cripto es para horizontes de 2+ años mínimo, idealmente 4-5+ años para maximizar la probabilidad de retorno positivo.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 2: Arma tu Portafolio Base',
        content: 'Basándote en la lección anterior, primero decide cuánto de tus ahorros invertibles va a cripto: una guía educativa común para principiantes es no más del 5-10%. Con 10 millones invertibles, serían de 500,000 a 1,000,000 de pesos. Luego reparte esa porción cripto con este marco, que puedes ajustar según tu perfil:',
        features: [
          { icon: Lock, title: 'La Base: Bitcoin (50-70%)', text: 'Tu ancla. La posición que NO tocas. DCA semanal o mensual. Cuando el monto ya sea importante para ti, considera una hardware wallet. Aquí va la mayor parte de tu porción cripto porque es lo más probado y resistente del ecosistema.' },
          { icon: Zap, title: 'Crecimiento: SOL + ETH (20-30%)', text: 'Tu exposición a ecosistemas en desarrollo. SOL para DeFi y experimentación (fees baratos). ETH como segunda capa de seguridad y madurez. También en DCA, con menor proporción que BTC.' },
          { icon: Wallet, title: 'Operativo: Stablecoins (5-10%)', text: 'Tu reserva en dólares digitales. Sirve para tres cosas: 1) tener liquidez sin salir de cripto, 2) gastos con tarjeta cripto, 3) estabilidad en tu portafolio. Diversificada entre USDC y USDT.' },
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
          { icon: Banknote, title: 'Elige tu Monto', text: 'Un monto que puedas mantener MÍNIMO 2 años sin sacrificar tu calidad de vida. Con el salario mínimo de 2026 (1,750,905 pesos), cualquier monto es un esfuerzo: si ya cubriste lo básico y no tienes deudas caras, incluso 20,000 pesos a la semana cuentan. Con ingresos medios, de 50,000 a 200,000 pesos al mes es un rango razonable para empezar. Empieza pequeño, siempre puedes aumentar.' },
          { icon: Zap, title: 'Automatiza', text: 'Opción 1: las órdenes recurrentes (Recurring) de Jupiter (depositas USDC y configuras compras automáticas de SOL o BTC). Opción 2: Alarma semanal en tu teléfono + compra manual. Opción 3: Exchange con compra recurrente. Lo automático es mejor porque elimina la tentación de "esperar un mejor precio".' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 4: Checklist de Seguridad',
        content: 'Antes de empezar a ejecutar tu plan, verifica que tu seguridad esté en orden. Un plan de inversión sin seguridad es como construir una casa sin cerraduras:',
        features: [
          { icon: Shield, title: 'Frase Semilla', text: '¿Está escrita en papel (o metal), nunca digitada en un sitio web ni fotografiada, y con 2-3 copias en ubicaciones distintas (casa, familiar de confianza, y si puedes una caja de seguridad bancaria u otro sitio fuera de casa)? Si falta alguna pieza, resuélvelo ANTES de invertir más.' },
          { icon: Lock, title: 'Autenticación', text: '¿Tu exchange tiene 2FA activado (Google Authenticator, NO SMS)? ¿Tu email principal tiene 2FA? ¿Tu wallet tiene contraseña o biometría? Si falta algo, actívalo ahora.' },
          { icon: Wallet, title: 'Distribución de Custodia', text: '¿Tienes claro qué va en exchange (temporal), qué en hot wallet (operativo), y qué en cold wallet (ahorros)? Si todo tu cripto está en un exchange, mueve la mayoría a tu wallet esta semana.' },
          { icon: AlertTriangle, title: 'Conocimiento Anti-Estafa', text: '¿Puedes identificar un sitio de phishing? ¿Sabes que NUNCA debes compartir tu frase semilla con nadie? ¿Sabes que "soporte de Phantom" NUNCA te escribe por DM? Si dudas, repasa la Lección 11.' }
        ]
      },
      {
        type: 'main',
        title: 'Paso 5: Define tus Reglas y Metas',
        content: 'Los mejores inversores tienen reglas escritas que siguen sin importar las emociones del momento. Define las tuyas AHORA, antes de que el mercado te ponga a prueba:',
        features: [
          { icon: CheckCircle, title: 'Reglas de Compra', text: 'Ejemplo: "Compro 30,000 pesos de BTC y 15,000 de SOL cada lunes a las 8am, sin importar el precio." Escríbelo. Literalmente.' },
          { icon: CheckCircle, title: 'Reglas de NO Hacer', text: 'Ejemplo: "No vendo en pánico. No invierto más del X% de mis ingresos. No compro tokens que no entiendo. No tomo decisiones financieras después de medianoche o después de ver un video de un influencer." Escríbelo.' },
          { icon: CheckCircle, title: 'Meta a 1 Año', text: '¿Cuánto quieres tener invertido en 12 meses? No en ganancias (eso no lo controlas), en capital invertido. Si tu DCA es 100,000 pesos al mes, tu meta es 1,200,000 invertidos en 1 año. Eso SÍ lo controlas.' },
          { icon: CheckCircle, title: 'Revisión Trimestral', text: 'Cada 3 meses, revisa: ¿Seguí mi DCA? ¿Mi distribución sigue en balance? ¿Necesito ajustar montos? ¿Mi seguridad está en orden? 15 minutos cada 3 meses. No mires tu portafolio todos los días, es contraproducente.' }
        ]
      },
      {
        type: 'main',
        title: 'Impuestos Cripto en LATAM',
        content: 'Antes de ejecutar tu plan de inversión, debes conocer las obligaciones tributarias de tu país. Las criptomonedas **no son invisibles para las autoridades fiscales**, y la ignorancia no te exime de responsabilidad. Los exchanges reportan datos a las agencias tributarias, y las transacciones on-chain son rastreables. No declarar tus ganancias cripto puede resultar en multas, sanciones, e incluso problemas legales. Aquí te damos un panorama general por país, pero recuerda: las leyes cambian frecuentemente y cada situación es diferente.',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Landmark, title: 'Colombia', text: 'Para la DIAN, los criptoactivos son activos intangibles: si estás obligado a declarar renta, deben aparecer en tu patrimonio. Al venderlos, si los tuviste 2 años o más, la utilidad tributa como ganancia ocasional al 15%; si los tuviste menos de 2 años, como renta ordinaria con la tabla progresiva (0-39%). Ojo: intercambiar una cripto por otra (un swap) también puede generar impuesto, como si vendieras, y el staking y los airdrops pueden ser ingresos gravados. Desde el año gravable 2026, los exchanges y proveedores de servicios cripto deben reportar a la DIAN la información de sus usuarios (Resolución 000240 de 2025, que aplica el estándar internacional CARF); el primer reporte vence en mayo de 2027. Las reglas sobre costos y pérdidas son técnicas: un contador te ayuda a aplicarlas bien.' },
          { icon: Landmark, title: 'México', text: 'El SAT considera las criptomonedas como activos virtuales. Las ganancias por enajenación (venta o intercambio) de criptoactivos están sujetas al ISR (Impuesto Sobre la Renta). Se calcula sobre la diferencia entre el precio de compra y el de venta. La tasa marginal puede llegar hasta el 35% dependiendo de tu nivel de ingresos. Las plataformas que operan en México reportan ciertas operaciones a las autoridades bajo las reglas contra el lavado de dinero. Debes incluir tus operaciones cripto en tu declaración anual.' },
          { icon: Landmark, title: 'Argentina', text: 'Las ganancias por venta de criptoactivos pagan impuesto a las ganancias como renta financiera, con tasas que dependen de cómo se clasifique la operación. Además, si tus tenencias superan el mínimo no imponible, deben declararse en Bienes Personales (impuesto al patrimonio). ARCA (ex AFIP) ha requerido a exchanges locales información sobre operaciones de sus usuarios. La situación regulatoria cambia frecuentemente, mantente actualizado.' },
          { icon: Shield, title: 'Registro es Clave', text: 'Desde tu primera compra (Lección 13), mantén un registro detallado de TODAS tus transacciones, incluidos los swaps: fecha de compra, precio de compra, fecha de venta, precio de venta, fees pagados, y dirección de wallet. Herramientas como Koinly, CoinTracker, o incluso una hoja de cálculo simple te ayudan a calcular tus ganancias y pérdidas. Este registro es tu mejor defensa ante una auditoría y hace la declaración mucho más sencilla.' }
        ],
        highlight: {
          title: 'Importante',
          text: 'Esta información es orientativa y no constituye asesoría fiscal. Las leyes tributarias cambian frecuentemente y cada situación personal es diferente. Consulta SIEMPRE con un contador o profesional tributario de tu país antes de tomar decisiones fiscales. El costo de una consulta con un contador es mucho menor que el costo de una multa por no declarar.'
        }
      },
      {
        type: 'main',
        title: 'Paso 6: Tu Primera Acción AHORA (10 Minutos)',
        content: 'Acabas de leer todo lo anterior. Estás en el punto exacto donde muchos estudiantes se quedan: **inspirados pero inactivos**. Esta sección existe para romper eso. No necesitas "el momento perfecto" para empezar. No necesitas millones. No necesitas más lecciones. Necesitas escribir **cuatro números** en un papel, ahora, antes de cerrar esta lección.',
        highlight: {
          title: 'La Trampa del "Algún Día"',
          text: '"Voy a empezar cuando tenga más tiempo, más dinero o más confianza" es una de las excusas más caras. Mientras esperas el momento perfecto, la inflación no espera. Empezar pequeño es mejor que planear perfecto y no empezar nunca. Y "empezar" puede significar pagar tu tarjeta o armar tu fondo de emergencia: eso también cuenta.'
        },
        features: [
          { icon: Clock, title: 'Minuto 1-3: Los Cuatro Números', text: 'Toma un papel (sí, papel, no celular). Escribe:\n\n**Número 1:** tu ingreso neto mensual promedio.\n**Número 2:** tu fondo de emergencia actual (cuánto dinero líquido tienes que no necesitas este mes).\n**Número 3:** cuánto puedes invertir al mes sin que afecte tu vida (dinero que podrías perder mañana y seguir durmiendo).\n**Número 4:** cuánto debes en deudas caras (tarjetas, créditos de consumo) y a qué tasa.\n\nEstos cuatro números son tu realidad financiera. Sin ellos, cualquier plan es ficción.' },
          { icon: CheckCircle, title: 'Minuto 4-6: Tu Línea Base', text: 'Responde estas cuatro preguntas con SÍ o NO:\n\n**a)** ¿Mi Número 4 es cero (o solo tengo deudas baratas, como un crédito de vivienda)? Si la respuesta es no, tu prioridad es pagar esas deudas.\n\n**b)** ¿Mi Número 2 cubre al menos 3 meses de mis gastos fijos? Si la respuesta es no, tu prioridad no es cripto, es ahorrar.\n\n**c)** ¿Mi Número 3 es mayor a 20,000 pesos al mes? Si la respuesta es no, enfócate primero en aumentar ingresos o reducir gastos.\n\n**d)** ¿Tengo claridad sobre en qué gasto mi dinero cada mes? Si la respuesta es no, tu primer paso es hacer un presupuesto, no un portafolio.\n\nSi respondiste SÍ a las cuatro, estás listo para ejecutar. Si no, tienes algo más valioso: claridad sobre el verdadero primer paso.' },
          { icon: Zap, title: 'Minuto 7-10: El Compromiso Mínimo Viable', text: 'Abre tu celular. Pon una alarma recurrente para el **próximo lunes a las 9am** (o el día que recibas salario). Nombra la alarma: "**DCA: Mi futuro financiero**".\n\nSi tu línea base salió bien, cuando suene ejecutas tu primera compra de DCA, aunque sea de 20,000 pesos. Si no, ese día haces el primer pago a tu deuda o el primer aporte a tu fondo de emergencia. Da igual si estás cansado, si el mercado cayó, o si ese día tu amigo te dice que todo es una estafa. La alarma suena, tú ejecutas. Período.\n\nNo hace falta tener todo el plan perfecto ahora. Necesitas UN movimiento real antes de que el impulso se pierda.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Plan de Acción: Escríbelo HOY, Ejecuta ESTA SEMANA',
        items: [
          'PASO 1: Paga tus deudas caras y verifica que tienes fondo de emergencia (3-6 meses de gastos). Si no, prioriza eso antes que cripto.',
          'PASO 2: Decide tu porción cripto (si empiezas, no más del 5-10% de tus ahorros invertibles) y repártela: X% BTC + X% SOL + X% ETH + X% stablecoins. Escríbelo en papel.',
          'PASO 3: Configura tu DCA: monto fijo + frecuencia + método (automático o manual). Empieza esta semana.',
          'PASO 4: Completa el checklist de seguridad. Frase semilla segura, 2FA activo, custodia organizada.',
          'PASO 5: Escribe tus reglas de compra, reglas de NO hacer, meta a 1 año, y fecha de revisión trimestral.',
          'PASO 6: ANTES de cerrar esta lección: escribe los cuatro números, pon la alarma del lunes y comprométete con tu primer paso, sea un DCA o un pago a tu deuda.',
          'RECUERDA: El mejor plan es el que ejecutas consistentemente. Perfecto no existe. Empieza con algo simple y ajusta sobre la marcha.',
          'SIGUIENTE NIVEL: Tu plan corre solo: el DCA es automático y la revisión es trimestral. Mientras se ejecuta, el nivel intermedio te enseña a leer gráficos, analizar proyectos a fondo y gestionar el riesgo con más herramientas. Empieza tu plan esta semana y estudia en paralelo: ejecutar y aprender se complementan.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes 1,000,000 de pesos ahorrados, ganas 3,000,000 al mes y gastas 2,600,000. No tienes fondo de emergencia. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Invierto el millón en BTC, porque el mercado está bajando' },
            { id: 'b', text: 'Armo primero un fondo de emergencia y luego invierto' },
            { id: 'c', text: 'Invierto medio millón en cripto y ahorro el otro medio' },
            { id: 'd', text: 'No hago nada hasta que gane mucho más dinero al mes' }
          ],
          correctAnswer: 'b',
          explanation: 'Sin fondo de emergencia, cualquier imprevisto (enfermedad, desempleo, una reparación) te obligaría a vender tu cripto en el peor momento. Con gastos de 2,600,000 al mes, un fondo de 3 meses son unos 7.8 millones: destina tu sobrante a construirlo y, después, empieza a invertir. No necesitas ganar mucho más para avanzar; necesitas el orden correcto.'
        },
        {
          id: 'q2',
          question: 'Es lunes a las 8am y toca tu DCA semanal en BTC. Pero Bitcoin subió 25% esta semana. ¿Qué haces?',
          options: [
            { id: 'a', text: 'No compro esta semana: está caro, espero a que baje' },
            { id: 'b', text: 'Compro el doble, porque claramente va a seguir subiendo' },
            { id: 'c', text: 'Compro mi monto normal, como dice mi plan escrito' },
            { id: 'd', text: 'Cambio a una altcoin que todavía no haya subido' }
          ],
          correctAnswer: 'c',
          explanation: 'DCA es disciplina, no reacción. Tu plan dice un monto fijo cada lunes, sin importar el precio. Esta semana compras menos BTC porque está caro; cuando baje, comprarás más. Cambiar a una altcoin "que no ha subido" es perseguir precios, y nada garantiza que suba.'
        },
        {
          id: 'q3',
          question: '¿Con qué frecuencia conviene revisar y rebalancear tu portafolio cripto?',
          options: [
            { id: 'a', text: 'Todos los días, para no perderme ningún movimiento' },
            { id: 'b', text: 'Cada 3 meses: distribución, montos y seguridad' },
            { id: 'c', text: 'Nunca: una vez configurado, no se vuelve a tocar' },
            { id: 'd', text: 'Solo cuando el mercado sube, para tomar ganancias' }
          ],
          correctAnswer: 'b',
          explanation: 'Una revisión trimestral te permite ajustar si algo cambió (ingresos, una distribución desbalanceada, tu seguridad) sin caer en decisiones emocionales. Mirar a diario genera ansiedad y trading impulsivo; no revisar nunca deja que tu plan se desordene sin que lo notes.'
        },
        {
          id: 'q4',
          question: 'Llevas 6 meses haciendo DCA y tu portafolio está en -20%. Un amigo dice: "Vende todo antes de perder más". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo y recompro cuando haya bajado más' },
            { id: 'b', text: 'Invierto el doble para promediar más rápido' },
            { id: 'c', text: 'Sigo mi plan: mis reglas dicen que no vendo en pánico' },
            { id: 'd', text: 'Paso todo a meme coins, que son las que están subiendo' }
          ],
          correctAnswer: 'c',
          explanation: 'Tu plan tiene reglas escritas justo para este momento. Una caída de 20% en 6 meses es normal en cripto. Vender para "recomprar más abajo" exige acertar dos veces el momento, e invertir el doble rompe tu regla del monto. Lo que importa es dónde estarás en 3 a 5 años, siempre que el dinero invertido sea uno que no necesitas.'
        },
        {
          id: 'q-ord',
          type: 'ordering',
          question: 'Ordena los pasos de tu plan financiero, del primero al último.',
          items: [
            'Conocer tus ingresos, gastos y deudas',
            'Pagar deudas caras y armar tu fondo de emergencia',
            'Decidir cuánto de tus ahorros va a cripto',
            'Repartir esa porción entre BTC, ETH, SOL y stablecoins',
            'Configurar tu DCA y revisar tu seguridad'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Sin conocer tus números no sabes qué puedes hacer. Las deudas caras y el fondo de emergencia van antes de invertir, porque te protegen de tener que vender en el peor momento. Después decides cuánto va a cripto, cómo repartirlo y, por último, cómo ejecutarlo con seguridad.'
        },
        {
          id: 'q-tf',
          type: 'true-false',
          question: 'En Colombia, cambiar una cripto por otra (por ejemplo, SOL por USDC) no tiene implicaciones tributarias, porque no recibiste pesos.',
          correctAnswer: false,
          explanation: 'Falso. Según la doctrina de la DIAN, intercambiar un criptoactivo por otro se trata como una permuta: puede generar una ganancia que se declara, aunque nunca hayas recibido pesos. Por eso conviene registrar cada swap, no solo cada venta. Confirma tu caso con un contador.'
        },
        {
          id: 'q5',
          question: 'Completaste el nivel principiante. ¿Cuál debería ser tu siguiente paso concreto?',
          options: [
            { id: 'a', text: 'Empezar a hacer trading diario para ganar más rápido' },
            { id: 'b', text: 'Comprar las altcoins que están en tendencia en X' },
            { id: 'c', text: 'Esperar al próximo mercado alcista para empezar' },
            { id: 'd', text: 'Ejecutar mi plan esta semana y seguir aprendiendo' }
          ],
          correctAnswer: 'd',
          explanation: 'El conocimiento sin ejecución no vale nada: si tus números lo permiten, tu plan empieza esta semana, no "algún día". Y si tu línea base mostró deudas caras o falta de fondo de emergencia, ejecutar tu plan significa empezar por ahí. Mientras tanto, puedes seguir aprendiendo a tu ritmo.'
        },
        {
          id: 'q7',
          question: 'Un amigo te dice: "Empecé a invertir en cripto la semana pasada y ya perdí 15%, creo que esto no es para mí." Descubres que invirtió los 6 millones de pesos que tenía para el arriendo de los próximos 3 meses. ¿Cuál es el error fundamental?',
          options: [
            { id: 'a', text: 'Invirtió muy poco: debió invertir más para diversificar' },
            { id: 'b', text: 'Eligió mal: debió comprar altcoins con más potencial' },
            { id: 'c', text: 'Invirtió dinero que iba a necesitar en pocos meses' },
            { id: 'd', text: 'Compró en mal momento: debió esperar a que subiera' }
          ],
          correctAnswer: 'c',
          explanation: 'El error no fue el activo ni el momento: fue invertir dinero que necesitaba pronto. Cripto puede bajar 30-50% en semanas, y si ese dinero es para el arriendo, la caída lo obliga a vender en pérdida. La regla: **solo inviertes lo que puedes no tocar durante 2 años o más**. El Paso 1 del plan existe precisamente para evitar esto.'
        }
      ]
    }
  },
};
