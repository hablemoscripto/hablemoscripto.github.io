// Paid (Intermedio + Avanzado) lesson content. Imported ONLY by scripts/seed.ts
// (build-time), never by any client module, so these bodies never ship in the
// browser bundle. They are served at runtime by the get-lesson-content Edge
// Function after a server-side premium check. See data/courseData.ts for the
// free lessons and the LessonEntry type.
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
  Crosshair,
  MessageSquare,
} from 'lucide-react';
import type { LessonEntry } from './courseData';

export const PAID_LESSONS: Record<number, LessonEntry> = {
  13: {
    id: 13,
    title: 'Velas Japonesas y Tendencias',
    level: 'Intermedio',
    number: '1 de 12',
    duration: '25 min',
    type: 'Lectura + Práctica',
    description: 'Aprende a leer el lenguaje visual del mercado. Cada vela cuenta una historia de batalla entre compradores y vendedores. Dominar este idioma es tu primera ventaja real.',
    sections: [
      {
        type: 'intro',
        title: 'El Lenguaje Secreto del Precio',
        content: 'En el siglo XVIII, un comerciante de arroz japonés llamado Munehisa Homma descubrió algo que los traders modernos seguimos usando 300 años después: **el precio cuenta una historia visual**. Mientras todos miraban números, Homma dibujaba velas. Cada vela le mostraba la batalla entre compradores (toros) y vendedores (osos) en un período de tiempo. ¿Quién abrió? ¿Quién cerró? ¿Hasta dónde lucharon? Con esta información, según cuenta la leyenda, Homma acumuló una fortuna en el mercado de arroz de Osaka. Hoy, las velas japonesas son la herramienta más usada en el mundo del trading. No importa si operas Bitcoin, acciones de Apple o futuros de petróleo, todos usan el mismo lenguaje. Y tú estás a punto de aprenderlo.',
        highlight: {
          title: 'La Ventaja Visual',
          text: 'Un gráfico de líneas te dice "el precio subió". Una vela te dice "el precio abrió aquí, los osos lo tiraron hasta acá, los toros pelearon y lo cerraron aquí arriba". Esa historia es la que te da ventaja.'
        }
      },
      {
        type: 'main',
        title: 'Antes de Empezar: El Trading y Tu Plan de Inversión',
        content: 'Si vienes del nivel Principiante, cerraste con un plan de inversión escrito: portafolio base, DCA automático, reglas claras. Ahora este nivel te habla de velas, tendencias y trading, y es normal preguntarse: ¿no habíamos quedado en que el trading diario era un error? La respuesta corta: **tu plan sigue intacto, y este nivel no lo reemplaza**. Aquí aprendes una capa nueva de habilidades encima de esa base. Aclaremos las reglas del juego antes de la primera vela:',
        features: [
          { icon: PiggyBank, title: 'Tu Plan DCA Sigue Siendo la Base', text: 'Nada de lo que aprendas en este nivel cambia tu portafolio base ni tu DCA. Eso sigue corriendo en automático, sin importar lo que hagas aquí. Lo que construyes ahora es capacidad de análisis: entender POR QUÉ el mercado hace lo que hace mientras tu plan se ejecuta solo.' },
          { icon: Shield, title: 'Si Decides Operar, Hazlo con Poco', text: 'El trading activo es opcional y tiene reglas propias: usa máximo el 5-10% de tu portafolio, con dinero que NO es tu DCA ni tu fondo de emergencia. Entre el 70% y el 90% de los traders retail pierde dinero. Ese dato no es para asustarte: es para que operes con un tamaño donde equivocarte sea aprendizaje, no tragedia.' },
          { icon: TrendingUp, title: 'Estas Habilidades Sirven Aunque Nunca Operes', text: 'Leer gráficos te ayuda a entender las caídas sin entrar en pánico. El análisis fundamental te enseña a evaluar proyectos antes de invertir. La gestión de riesgo y la psicología de mercado te protegen de tus propios impulsos. Todo eso te hace mejor inversor, hagas trading o no.' }
        ],
        highlight: {
          title: 'Inversor Primero, Trader Después (y Solo Si Quieres)',
          text: 'Este nivel te convierte en analista, no en apostador. Si al terminar decides que el trading activo no es para ti, igual saldrás leyendo el mercado mejor que la mayoría. Y tu plan de inversión seguirá corriendo, intacto.'
        }
      },
      {
        type: 'main',
        title: 'Anatomía de una Vela: Los 4 Datos Clave',
        content: 'Cada vela japonesa comprime 4 datos en una sola figura visual. Entender cada componente es como aprender las letras antes de leer palabras:',
        features: [
          { icon: BarChart3, title: 'El Cuerpo (Body)', text: 'El rectángulo central muestra la distancia entre el precio de apertura y el precio de cierre. **Cuerpo verde/blanco** = cerró más arriba de donde abrió (los toros ganaron). **Cuerpo rojo/negro** = cerró más abajo (los osos ganaron). Un cuerpo grande indica convicción. Un cuerpo pequeño indica indecisión.' },
          { icon: Activity, title: 'Las Mechas (Wicks/Shadows)', text: 'Las líneas que salen del cuerpo muestran los extremos del período. La **mecha superior** marca el precio máximo alcanzado, hasta donde los toros empujaron antes de perder fuerza. La **mecha inferior** marca el mínimo, hasta donde los osos tiraron antes de que los toros respondieran.' },
          { icon: TrendingUp, title: 'Apertura y Cierre', text: 'En una vela alcista (verde), la apertura está abajo y el cierre arriba. En una bajista (roja), es al revés. La relación entre apertura y cierre te dice **quién ganó la batalla** en ese período.' },
          { icon: Clock, title: 'El Timeframe', text: 'Cada vela representa un período de tiempo fijo: 1 minuto, 15 minutos, 1 hora, 4 horas, 1 día. Una vela diaria comprime toda la acción de 24 horas en una sola figura. A mayor timeframe, más significativa la información.' }
        ]
      },
      {
        type: 'main',
        title: 'Los 4 Patrones de Vela Individual que Debes Conocer',
        content: 'Una sola vela puede contarte una historia poderosa. Estos son los 4 patrones de vela individual que aparecen una y otra vez en los gráficos de crypto:',
        features: [
          { icon: Activity, title: 'Doji (Indecisión)', text: 'Cuerpo prácticamente inexistente, abrió y cerró al mismo precio. Las mechas pueden ser largas o cortas. Significa **equilibrio total** entre toros y osos. En zona de soporte o resistencia, un Doji puede ser señal de reversión. Solo no indica dirección.' },
          { icon: TrendingUp, title: 'Hammer (Martillo), Señal Alcista', text: 'Cuerpo pequeño en la parte superior, mecha inferior MUY larga (al menos 2× el cuerpo), poca o ninguna mecha superior. Significa: los osos tiraron el precio fuerte, pero los toros lo rescataron antes del cierre. **Solo es válido en zona de soporte tras una caída.** Es la mano fuerte diciendo "hasta aquí".' },
          { icon: TrendingDown, title: 'Shooting Star (Estrella Fugaz), Señal Bajista', text: 'Lo opuesto al Hammer: cuerpo pequeño abajo, mecha superior MUY larga. Los toros empujaron arriba pero fueron aplastados antes del cierre. **Solo es válido en zona de resistencia tras una subida.** Es el mercado diciendo "no pasarás".' },
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
          { icon: TrendingUp, title: 'Tendencia Alcista (Uptrend)', text: 'Serie de máximos cada vez más altos y mínimos cada vez más altos. Imagina una escalera subiendo. Cada peldaño es más alto que el anterior. Mientras la escalera siga subiendo, la tendencia es tu amiga, busca oportunidades de COMPRA en los retrocesos.' },
          { icon: TrendingDown, title: 'Tendencia Bajista (Downtrend)', text: 'Serie de máximos cada vez más bajos y mínimos cada vez más bajos. Escalera bajando. Cada rebote es más débil que el anterior. No intentes "atrapar el cuchillo cayendo", espera señales claras de reversión antes de comprar.' },
          { icon: Activity, title: 'Rango Lateral (Sideways/Consolidación)', text: 'El precio rebota entre un soporte y una resistencia sin tendencia clara. Aquí las señales de velas son menos fiables porque no hay dirección dominante. La paciencia es tu mejor herramienta, espera a que el precio rompa el rango antes de actuar.' }
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
            'Los patrones de velas son mucho más fiables (aunque nunca infalibles)',
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
        content: 'La mayoría de los traders que aprenden velas comete los mismos errores. Evítalos y ya estarás por delante:',
        features: [
          { icon: AlertTriangle, title: '1. Operar Cada Patrón que Ven', text: 'No todos los Hammers son señales de compra. El contexto (tendencia, soporte/resistencia, volumen) es más importante que el patrón en sí. Un Hammer en medio de una caída libre probablemente fallará.' },
          { icon: AlertTriangle, title: '2. Ignorar el Timeframe', text: 'Un Doji en vela de 1 minuto no significa nada. El mismo Doji en vela diaria después de una tendencia extendida es una señal poderosa. Siempre mira timeframes altos primero.' },
          { icon: AlertTriangle, title: '3. No Esperar Confirmación', text: 'Ves una Evening Star y vendes inmediatamente. Error. Espera a que la siguiente vela confirme la dirección. La paciencia de una vela extra puede salvarte de muchas trampas.' },
          { icon: AlertTriangle, title: '4. Memorizar sin Entender', text: 'Aprender 50 patrones de memoria no sirve si no entiendes la psicología detrás. Cada patrón refleja una batalla entre compradores y vendedores. Entiende la historia, no solo la forma.' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre el gráfico de SOL/USDT en 4 horas (tradingview.com, gratis). 1) Identifica la tendencia de las últimas 2 semanas. 2) Marca 3 velas que reconozcas: Doji, Hammer, Engulfing o Marubozu. 3) Revisa el volumen de cada una: ¿confirma la señal? 4) Anota qué hizo el precio en las 5 velas siguientes. Repítelo unos días: leer velas es un músculo.'
        }
      },
      {
        type: 'takeaways',
        title: 'Tu Nueva Forma de Leer el Mercado',
        items: [
          'Las velas japonesas no son predicciones mágicas, son un **lenguaje visual** que comprime la batalla entre compradores y vendedores en cada período de tiempo.',
          'Domina los patrones esenciales: Doji, Hammer, Shooting Star, Engulfing y Morning/Evening Star. Estos 5-6 patrones cubren el 80% de las señales útiles.',
          'El contexto lo es todo: un patrón solo funciona cuando aparece en el **lugar correcto** (soporte/resistencia) y en la **dirección correcta** (con la tendencia o en reversión clara).',
          'Usa timeframes de 4 horas o diarios como mínimo. Los timeframes bajos (1-15 minutos) generan más ruido que señales reales.',
          'El volumen es tu detector de mentiras. Un patrón sin volumen que lo confirme es como una promesa sin firma, puede ser falsa.',
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
            { id: 'a', text: 'Es una corrección normal dentro de la tendencia alcista, compra el dip' },
            { id: 'b', text: 'Es un Marubozu bajista: los osos dominaron todo el día sin resistencia' },
            { id: 'c', text: 'No significa nada, espera más velas' },
            { id: 'd', text: 'Es acumulación silenciosa de ballenas' }
          ],
          correctAnswer: 'b',
          explanation: 'Un Marubozu bajista (cuerpo grande sin mechas) después de una subida extendida indica que los vendedores tomaron el control total. No hubo pelea, los toros no aparecieron. Es una señal seria de posible techo.'
        },
        {
          id: 'q2',
          question: 'Ves un patrón de 3 velas en Bitcoin diario: (1) vela verde grande, (2) vela pequeña con cuerpo diminuto, (3) vela roja grande que cierra dentro del cuerpo de la primera vela. ¿Qué patrón es y qué significa?',
          options: [
            { id: 'a', text: 'Morning Star, señal de compra fuerte tras una caída extendida' },
            { id: 'b', text: 'Evening Star: posible reversión bajista, los osos tomaron el control' },
            { id: 'c', text: 'Three White Soldiers, tendencia alcista continúa' },
            { id: 'd', text: 'Doji pattern, indecisión, no actuar' }
          ],
          correctAnswer: 'b',
          explanation: 'Evening Star es uno de los patrones de reversión bajista más fiables: (1) última subida fuerte, (2) indecisión/duda, (3) los osos aplastaron. Es el mercado cambiando de manos.'
        },
        {
          id: 'q3',
          question: 'Encuentras un Hammer perfecto en ETH, pero el volumen de esa vela es el más bajo de las últimas 20 velas. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro inmediatamente, el patrón Hammer es señal suficiente por sí solo' },
            { id: 'b', text: 'Ignoro la señal: un Hammer con volumen bajo carece de convicción real' },
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
            { id: 'a', text: '1 minuto y 5 minutos, más datos, más oportunidades' },
            { id: 'b', text: '15 minutos, el balance perfecto entre velocidad y fiabilidad' },
            { id: 'c', text: '4 horas y diario, menos ruido, señales más limpias y fiables' },
            { id: 'd', text: 'Todos los timeframes son igualmente fiables' }
          ],
          correctAnswer: 'c',
          explanation: 'Los timeframes bajos están llenos de ruido y señales falsas. En 4h y diario, cada vela representa horas de acción real del mercado, filtrando el ruido y mostrando la intención verdadera de los grandes jugadores.'
        },
        {
          id: 'q5',
          question: 'Ves una vela con cuerpo prácticamente inexistente (apertura ≈ cierre) pero con mechas largas arriba y abajo, apareciendo en la parte alta de una subida de Bitcoin. ¿Qué es y qué significa?',
          options: [
            { id: 'a', text: 'Marubozu, la tendencia continúa con fuerza' },
            { id: 'b', text: 'Doji en resistencia: equilibrio total, posible agotamiento de la subida' },
            { id: 'c', text: 'Hammer, señal de compra inmediata en cualquier contexto' },
            { id: 'd', text: 'No es un patrón reconocible' }
          ],
          correctAnswer: 'b',
          explanation: 'Un Doji en zona de resistencia después de una subida indica que los toros ya no dominan, los osos están peleando de vuelta. No es señal de venta automática, pero sí de alerta: podría ser el inicio de una reversión.'
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
    type: 'Lectura + Práctica',
    description: 'El precio tiene memoria. Aprende a identificar los pisos y techos del mercado donde el precio rebota una y otra vez, y úsalos para tomar decisiones inteligentes de compra y venta.',
    sections: [
      {
        type: 'intro',
        title: 'La Memoria del Precio',
        content: '¿Te has preguntado por qué Bitcoin siempre parece rebotar en ciertos precios? ¿Por qué $60,000 fue un muro durante meses? ¿Por qué cuando lo rompió, se disparó? No es magia ni coincidencia. Es **psicología humana cristalizada en el gráfico**. Cuando miles de personas compraron a $60,000, ese precio se grabó en la memoria del mercado. Cada vez que el precio vuelve ahí, esas mismas personas toman decisiones: algunos venden para "salir en tablas", otros compran porque recuerdan que ahí rebotó antes. Estas zonas de memoria colectiva se llaman **soportes** y **resistencias**, y son la herramienta más poderosa del análisis técnico. La gran mayoría de los traders profesionales las tiene en cuenta al tomar decisiones.',
        highlight: {
          title: 'El Concepto Clave',
          text: 'Soporte y resistencia no son líneas mágicas en un gráfico, son zonas donde **la concentración de órdenes de compra o venta** es tan alta que el precio rebota. Son el campo de batalla donde toros y osos se encuentran.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Soporte?, El Piso del Precio',
        content: 'Un **soporte** es una zona de precio donde la demanda de compra es tan fuerte que detiene una caída. Imagina el suelo de tu casa: puedes lanzar una pelota hacia abajo, pero el suelo la hará rebotar. El soporte funciona igual, es el "piso" donde los compradores aparecen en masa.',
        features: [
          { icon: TrendingUp, title: 'Por Qué Existe', text: 'Cuando el precio cae a una zona donde antes rebotó, tres tipos de compradores aparecen: (1) los que compraron ahí antes y quieren más, (2) los que se perdieron la subida anterior y ahora tienen su oportunidad, (3) los traders que reconocen la zona como soporte técnico.' },
          { icon: Search, title: 'Cómo Identificarlo', text: 'Busca zonas donde el precio tocó un nivel y rebotó hacia arriba **al menos 2-3 veces**. No busques un precio exacto, busca una **zona**. Si el precio rebotó en $58,500, $59,100 y $58,800, tu soporte está en la zona de $58,500-$59,100.' },
          { icon: BarChart3, title: 'Soporte en la Práctica', text: 'En Solana, la zona de $120-$130 funcionó como soporte fuerte durante meses en 2024. Cada vez que el precio caía ahí, los compradores aparecían. Los traders que compraron en esa zona capturaron rebotes de +30% repetidamente.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué es una Resistencia?, El Techo del Precio',
        content: 'Una **resistencia** es el espejo del soporte: una zona donde la presión de venta es tan fuerte que detiene una subida. Es el "techo de cristal" que el precio no logra romper. Cada vez que el precio llega ahí, los vendedores lo empujan hacia abajo.',
        features: [
          { icon: TrendingDown, title: 'Por Qué Existe', text: 'Tres tipos de vendedores crean resistencia: (1) los que compraron a ese precio y llevan semanas perdiendo, quieren salir en "break-even", (2) los traders que vieron que el precio fue rechazado ahí antes, (3) instituciones que colocan órdenes de venta grandes en números redondos.' },
          { icon: Search, title: 'Cómo Identificarla', text: 'Busca zonas donde el precio subió, fue rechazado y cayó **al menos 2-3 veces**. Los rechazos suelen dejar mechas superiores largas en las velas, huellas visuales de que los vendedores ganaron la batalla.' },
          { icon: AlertTriangle, title: 'Los Números Redondos', text: 'Los niveles psicológicos como $100, $50,000 o $100,000 actúan como resistencias naturales. ¿Por qué? Porque miles de personas ponen órdenes de venta en números redondos: "Cuando Bitcoin llegue a $100,000, vendo". Esa acumulación de órdenes crea un muro real.' }
        ]
      },
      {
        type: 'main',
        title: 'Zonas, No Líneas, El Error Más Común',
        content: 'El error #1 de los principiantes es dibujar una línea exacta y esperar que el precio la respete al centavo. Eso no pasa en la realidad. El soporte y la resistencia son **ZONAS**, no líneas precisas. Piénsalo así: si miles de personas quieren comprar "alrededor de $60,000", algunas pondrán órdenes a $59,800, otras a $60,200, otras a $60,500. La "zona de compra" es un rango, no un punto.',
        features: [
          { icon: Layers, title: 'Cómo Dibujar Zonas Correctamente', text: 'En lugar de una línea, dibuja un **rectángulo** que cubra las mechas de los rebotes anteriores. Si el precio rebotó en $58,500, $59,100 y $58,800, tu zona es el rectángulo entre $58,500 y $59,100. Todo lo que toque esa zona es "soporte".' },
          { icon: Eye, title: 'Cuantos Más Toques, Más Fuerte (Hasta un Punto)', text: 'Una zona que ha sido tocada y respetada 2-3 veces es confiable. Con 4-5 toques, la zona es "famosa", pero cuidado: cada toque **gasta las órdenes** en esa zona. Es como un muro de ladrillos donde cada pelotazo rompe un ladrillo. Eventualmente, el muro cae.' }
        ]
      },
      {
        type: 'main',
        title: 'El Flip: Cuando Soporte se Convierte en Resistencia (y Viceversa)',
        content: 'Este es uno de los conceptos más elegantes y útiles del análisis técnico: cuando un soporte se rompe, **se convierte en resistencia**. Y cuando una resistencia se rompe, **se convierte en soporte**. Este fenómeno se llama **"role reversal"** o "flip", y tiene una explicación psicológica perfecta.',
        features: [
          { icon: RefreshCw, title: 'La Psicología del Flip', text: 'Imagina que compraste SOL a $150 (soporte). El precio cae a $120, rompiendo tu soporte. Ahora estás perdiendo. Cuando el precio vuelve a $150, ¿qué haces? **Vendes para salir sin pérdida.** Tú y miles como tú convierten el antiguo soporte ($150) en resistencia.' },
          { icon: CheckCircle, title: 'Cómo Operarlo', text: 'Cuando un soporte se rompe con volumen, espera un "retest", el precio suele volver a la zona rota desde abajo. Si la zona ahora actúa como resistencia (el precio es rechazado), tienes confirmación del flip. Es una de las entradas más fiables en trading.' },
          { icon: Zap, title: 'Ejemplo Real en Crypto', text: 'Bitcoin $69,000 fue resistencia (ATH de 2021) durante más de 2 años. En marzo de 2024 lo rompió y llegó a ~$73,700, pero el flip no fue limpio: de abril a octubre de 2024 el precio vivió POR DEBAJO de $69,000, con mínimos cerca de $50,000-53,000. La ruptura definitiva llegó en noviembre de 2024, y de ahí sí voló a $100,000+. La lección: los retests pueden ser profundos y durar meses. El flip se confirma con el tiempo, no con la primera ruptura.' }
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
            'Solo un toque previo, podría ser coincidencia',
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
        content: 'Si el soporte y la resistencia fueran perfectos, todos ganaríamos dinero. La realidad es que el mercado está lleno de **fakeouts** (rupturas falsas), movimientos que parecen romper un nivel pero inmediatamente revierten. Las fakeouts existen porque los grandes jugadores (instituciones, ballenas) necesitan tu liquidez para ejecutar sus órdenes.',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funciona la Trampa', text: 'Imagina un soporte en $150. Miles de traders tienen su stop loss en $148. Una ballena vende agresivamente y empuja el precio a $147, activando todos esos stops (ventas forzadas). Luego, la ballena compra toda esa liquidez barata. El precio vuelve a $155. Los stops fueron "barridos" y los traders perdieron sus posiciones.' },
          { icon: Shield, title: 'Cómo Protegerte', text: 'Nunca pongas tu stop loss justo debajo del soporte, eso es exactamente donde las ballenas cazan. Pon tu stop un poco más abajo, fuera de la zona "obvia". Y la regla de oro: **no compres el primer toque de soporte. Espera una vela de confirmación** (un cierre fuerte por encima de la zona).' },
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
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre BTC/USDT en gráfico diario. 1) Marca con rectángulos las 3 zonas donde el precio rebotó al menos 2 veces en los últimos 6 meses. 2) Busca un flip: una resistencia rota que después actuó como soporte. 3) Anota dónde pondrías el stop loss si compraras en la zona más cercana. 4) Vuelve en una semana y verifica si tus zonas se respetaron.'
        }
      },
      {
        type: 'takeaways',
        title: 'Dominando los Pisos y Techos del Mercado',
        items: [
          'Soporte y resistencia son **zonas de alta concentración de órdenes**, no líneas exactas. Dibuja rectángulos, no líneas.',
          'Existen por psicología humana: miles de personas toman decisiones en los mismos niveles de precio, creando "memoria del mercado".',
          'Cuando un soporte se rompe se convierte en resistencia, y viceversa (role reversal). Este concepto es una de las herramientas más fiables del trading.',
          'Cuantos más toques tiene una zona, más "famosa" es, pero también más débil se vuelve. Cada toque gasta las órdenes que la defienden.',
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
            { id: 'a', text: 'La resistencia sigue intacta y el precio será rechazado de nuevo hacia abajo' },
            { id: 'b', text: 'El nivel de $100,000 ahora actúa como soporte (role reversal) y debería rebotar' },
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
            { id: 'a', text: 'Justo en $140, si toca el soporte exacto, salgo' },
            { id: 'b', text: 'En $139, exactamente un dólar debajo del nivel de soporte' },
            { id: 'c', text: 'Debajo del mínimo de la zona de soporte, con un filtro extra de 1-2%' },
            { id: 'd', text: 'No uso stop loss en soporte porque siempre rebota' }
          ],
          correctAnswer: 'c',
          explanation: 'Las ballenas barren stops que están justo debajo del soporte. Tu stop debe estar donde REALMENTE se invalida tu tesis, debajo del mínimo de la zona completa con un filtro extra para evitar que te barran.'
        },
        {
          id: 'q3',
          question: 'Un soporte en ETH ha sido tocado exactamente 5 veces en $3,200. El precio se acerca por sexta vez. ¿Qué es más probable?',
          options: [
            { id: 'a', text: 'El sexto toque rebotará como los cinco anteriores, es un soporte más que probado' },
            { id: 'b', text: 'La zona está debilitada: cada toque gasta órdenes de compra y la ruptura se vuelve más probable' },
            { id: 'c', text: 'El número de toques no afecta la fortaleza del soporte' },
            { id: 'd', text: 'Siempre rompe exactamente en el cuarto toque' }
          ],
          correctAnswer: 'b',
          explanation: 'Según la lectura moderna de flujo de órdenes, cada toque de soporte "gasta" órdenes de compra en esa zona. Es como un muro que recibe pelotazos: cada golpe rompe ladrillos. Después de 4-5 toques, el muro está débil y la ruptura se vuelve más probable. No es una ley exacta, pero es la interpretación que usan los traders profesionales.'
        },
        {
          id: 'q4',
          question: 'El precio de BTC cae por debajo de un soporte en $90,000, toca $89,500, pero cierra la vela diaria de vuelta por encima de $90,000 con una mecha inferior larga. ¿Qué acaba de pasar?',
          options: [
            { id: 'a', text: 'El soporte se rompió al tocar $89,500, es una señal clara de venta' },
            { id: 'b', text: 'Es una fakeout: barrieron los stops debajo de $90K y el soporte sigue válido' },
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
            { id: 'b', text: 'Porque miles de personas colocan órdenes en números redondos ("cuando llegue a 100K, vendo"), creando concentración masiva' },
            { id: 'c', text: 'Los exchanges manipulan esos niveles para liquidar a los traders' },
            { id: 'd', text: 'Los números redondos no tienen significado en trading' }
          ],
          correctAnswer: 'b',
          explanation: 'Los niveles psicológicos son reales porque la psicología humana es predecible. Todos pensamos en números redondos. Esa acumulación de órdenes crea zonas de soporte/resistencia "naturales" antes de que el precio las visite.'
        },
        {
          id: 'review_1',
          question: '📝 Repaso: Una vela japonesa con cuerpo pequeño y mecha inferior muy larga en una zona de soporte indica:',
          options: [
            { id: 'a', text: 'Los vendedores están ganando control total' },
            { id: 'b', text: 'Los compradores rechazaron precios más bajos con fuerza, señal alcista' },
            { id: 'c', text: 'El mercado está completamente indeciso, sin ninguna dirección' },
            { id: 'd', text: 'Es momento de vender inmediatamente' }
          ],
          correctAnswer: 'b',
          explanation: 'Una mecha inferior larga significa que los compradores empujaron el precio de vuelta hacia arriba después de una caída. En una zona de soporte, esto es una señal de posible rebote alcista. (Recuerda la Lección 13: Velas Japonesas)'
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
    type: 'Lectura + Práctica',
    description: 'Los indicadores técnicos son herramientas matemáticas que confirman (o niegan) lo que ves en el precio. Domina el RSI y las Medias Móviles Exponenciales para tomar decisiones con datos, no con emociones.',
    sections: [
      {
        type: 'intro',
        title: 'Las Matemáticas al Servicio del Trader',
        content: 'Hasta ahora aprendiste a leer velas y a identificar soportes y resistencias. Esas herramientas se basan en lo que **ves**. Los indicadores técnicos agregan una capa de **matemáticas** que te ayuda a confirmar lo que ves, o a detectar lo que tus ojos no perciben. Una analogía: las velas son como mirar por la ventana para ver si llueve. Los indicadores son el pronóstico del clima. Ambos son útiles, pero juntos te dan un panorama mucho más completo. **Regla fundamental**: Los indicadores NO predicen el futuro. Son espejos retrovisores mejorados, te muestran lo que el precio HIZO con mayor claridad para que tomes mejores decisiones sobre lo que PODRÍA hacer.',
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
          { icon: TrendingUp, title: 'RSI > 70: Sobrecompra', text: 'Cuando el RSI supera 70, el mercado ha subido mucho y rápido. **No significa que debas vender inmediatamente**, en tendencias alcistas fuertes, el RSI puede quedarse en sobrecompra semanas. Pero sí indica que el momentum alcista es extremo y una corrección es cada vez más probable.' },
          { icon: TrendingDown, title: 'RSI < 30: Sobreventa', text: 'Cuando el RSI cae debajo de 30, el mercado ha caído fuerte y rápido. Es zona de "posible suelo". Combinado con un soporte fuerte, es una de las señales de compra más fiables. Pero en tendencias bajistas, el RSI puede quedarse en sobreventa mucho tiempo, no compres solo porque está bajo.' },
          { icon: Activity, title: 'RSI 50: La Línea de Tendencia', text: 'RSI por encima de 50 = momentum alcista. RSI por debajo de 50 = momentum bajista. En un bull market sano, el RSI tiende a rebotar en 40-50 (rara vez llega a 30). En un bear market, tiende a ser rechazado en 50-60 (rara vez llega a 70). Observar dónde rebota el RSI te dice quién domina.' }
        ]
      },
      {
        type: 'main',
        title: 'Medias Móviles Exponenciales (EMAs): La Brújula de la Tendencia',
        content: 'Las **EMAs (Exponential Moving Averages)** suavizan el ruido del precio y te muestran la dirección general de la tendencia. Son como miradores elevados que te permiten ver el bosque en lugar de los árboles individuales. Las EMAs dan más peso a los precios recientes, haciéndolas más sensibles a los cambios que las medias simples (SMA).',
        features: [
          { icon: Zap, title: 'EMA 21, El Pulso del Momentum', text: 'La EMA de 21 períodos es la más rápida de las tres esenciales. En una tendencia alcista sana, el precio tiende a respetar la EMA 21 como soporte dinámico. Cuando el precio cae a la EMA 21 y rebota, es señal de que el momentum sigue vivo. Ideal para swing traders.' },
          { icon: Activity, title: 'EMA 55, La Línea de Equilibrio', text: 'La EMA de 55 períodos marca la tendencia de mediano plazo. Cuando el precio está por encima de la EMA 55, la tendencia intermedia es alcista. Cuando cae por debajo, hay señal de debilidad. Es la "tierra de nadie", las batallas más importantes ocurren aquí.' },
          { icon: Landmark, title: 'EMA 200, La Frontera Bull/Bear', text: 'La media de 200 períodos en gráfico diario es **la referencia de largo plazo más seguida del mercado**. Las instituciones miran sobre todo la SMA 200 diaria (la versión simple); la EMA 200 es su variante más sensible y ambas cuentan la misma historia. Precio por encima = territorio bull. Precio por debajo = territorio bear. Cuando Bitcoin cruza la media de 200 diaria, es noticia mundial.' }
        ]
      },
      {
        type: 'main',
        title: 'Cruces de EMAs: Las Señales que Mueven Mercados',
        content: 'Cuando las medias móviles se cruzan entre sí, generan señales que los traders institucionales y algoritmos siguen de cerca. La forma canónica de estos cruces usa las SMA de 50 y 200 en gráfico diario; las versiones con EMAs son variantes más rápidas. Estos cruces no son instantáneos, se desarrollan durante días o semanas:',
        features: [
          { icon: TrendingUp, title: 'Golden Cross (Cruz Dorada)', text: 'Ocurre cuando la media rápida (50) cruza **por encima** de la media lenta (200) en diario. La definición canónica usa SMA 50/200. Es señal alcista de mediano plazo, pero retrasada: confirma tendencias ya en marcha. Varios Golden Cross de Bitcoin precedieron subidas importantes; otros llegaron cuando gran parte del movimiento ya había pasado.' },
          { icon: TrendingDown, title: 'Death Cross (Cruz de la Muerte)', text: 'Lo opuesto: la media rápida (50) cruza **por debajo** de la lenta (200). Suena aterrador, pero el historial real es mixto: por ser una señal retrasada, varios Death Cross de Bitcoin (marzo 2020, septiembre 2024) se imprimieron cerca del suelo, justo antes de rebotes fuertes. Úsalo como aviso para revisar tu riesgo y tus stops, no como orden automática de venta.' },
          { icon: AlertTriangle, title: 'Cuidado con las Señales Falsas', text: 'En mercados laterales (sin tendencia clara), las EMAs se cruzan constantemente generando señales falsas. No sigas cruces de EMAs ciegamente en un rango. Solo son fiables cuando el mercado tiene tendencia. Si las EMAs están enredadas como espagueti, el mercado está indeciso, espera.' }
        ]
      },
      {
        type: 'main',
        title: 'Divergencias: La Señal Más Poderosa del Análisis Técnico',
        content: 'Una **divergencia** ocurre cuando el precio dice una cosa y el indicador dice otra. Es como si el precio y el RSI se contradijeran. Las divergencias son de las señales más respetadas del análisis técnico porque detectan debilidad ANTES de que el precio la muestre. Pero no son infalibles: en tendencias fuertes, una divergencia puede persistir durante semanas mientras el precio sigue avanzando. Trátala como una alerta que exige confirmación, no como un gatillo automático.',
        features: [
          { icon: AlertTriangle, title: 'Divergencia Bajista', text: 'El precio hace un nuevo máximo (Higher High), pero el RSI hace un máximo más bajo (Lower High). ¿Qué significa? El precio subió, pero con **menos fuerza** que la vez anterior. Los toros se están agotando aunque el precio aún suba. Es como un corredor que sigue avanzando pero cada vez más lento, pronto se detendrá.' },
          { icon: TrendingUp, title: 'Divergencia Alcista', text: 'El precio hace un nuevo mínimo (Lower Low), pero el RSI hace un mínimo más alto (Higher Low). El precio cayó más, pero los osos perdieron fuerza. Los vendedores se están agotando. Es una de las señales de suelo más respetadas en crypto, especialmente cuando coincide con una zona de soporte.' },
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
            'En rangos funciona solo anclado a los extremos (soporte/resistencia)',
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
        content: 'La mayoría de las pérdidas por indicadores ocurre en un solo escenario: **operar señales de tendencia en un mercado lateral**. Cuando el precio está en rango, los cruces de medias generan señales constantemente, y casi todas son falsas. El RSI puede seguir siendo útil, pero solo anclado a los extremos del rango.',
        features: [
          { icon: AlertTriangle, title: 'El RSI en Rangos: Solo en los Extremos', text: 'En un rango, seguir cada oscilación del RSI te hace pagar comisiones sin llegar a ningún lado. Lo que sí funciona: combinar RSI en sobreventa con el soporte del rango (o sobrecompra con la resistencia). Los extremos del RSI + los extremos del rango pueden dar señales válidas; las señales de seguimiento de tendencia, no.' },
          { icon: AlertTriangle, title: 'Las EMAs se Cruzan Sin Parar', text: 'Sin tendencia, las EMAs se enredan y generan Golden Cross y Death Cross falsos cada semana. Sigues cada cruce y pierdes en ambas direcciones. Solución: si las tres EMAs (21, 55, 200) están muy cerca entre sí, el mercado no tiene tendencia, no sigas cruces.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Setup de Indicadores Recomendado',
        content: 'Menos es más. Los traders que ponen 10 indicadores en su gráfico terminan paralizados por señales contradictorias. Aquí tienes el setup mínimo y efectivo:',
        features: [
          { icon: BarChart3, title: 'El Setup del 80/20', text: '**En tu gráfico pon solo esto**: (1) EMA 21, EMA 55 y EMA 200 en el gráfico de precios, (2) RSI 14 en panel separado debajo, (3) Volumen en barras. Nada más. Estos tres elementos te dan el 80% de la información útil con el 20% de la complejidad.' },
          { icon: CheckCircle, title: 'La Confluencia es la Clave', text: 'La señal más poderosa es cuando **múltiples factores apuntan a la misma dirección**: precio en soporte + RSI en sobreventa + rebote en EMA 200 + vela de reversión + volumen alto. Eso es **confluencia**, y es donde debes poner tu capital.' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre ETH/USDT en 4 horas y agrega RSI 14 y las EMAs 21, 55 y 200. 1) Encuentra las 2 últimas veces que el RSI cruzó 30 o 70 y anota qué hizo el precio después. 2) Busca una divergencia entre precio y RSI en los últimos 3 meses. 3) Verifica si el precio respetó la EMA 200 como soporte o resistencia dinámica.'
        }
      },
      {
        type: 'takeaways',
        title: 'Los Indicadores como Herramientas, No como Muletas',
        items: [
          'Los indicadores NO predicen el futuro. Son herramientas matemáticas que te ayudan a **confirmar** lo que ya ves en el precio y las zonas de soporte/resistencia.',
          'RSI mide momentum: >70 sobrecompra, <30 sobreventa, 50 es la línea de tendencia. Las divergencias entre precio y RSI son señales anticipadas de cambio de tendencia.',
          'Las tres EMAs esenciales: 21 (momentum corto), 55 (tendencia media), 200 (frontera bull/bear). Las instituciones siguen sobre todo la SMA 200 diaria, que cuenta la misma historia: precio por encima = territorio bull.',
          'Golden Cross y Death Cross (canónicamente SMA 50/200 en diario) son señales retrasadas: confirman tendencias ya en marcha y tienen un historial mixto en techos y suelos. Solo tienen valor en mercados con tendencia.',
          'NUNCA operes indicadores en mercados laterales. Si las EMAs están enredadas y el RSI oscila sin dirección, espera a que se defina la tendencia.',
          'Busca **confluencia**: la señal más potente ocurre cuando precio + soporte/resistencia + RSI + EMAs + volumen + velas apuntan todos a la misma dirección.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin hace un nuevo máximo histórico ($110K), pero el RSI 14 en diario marca 68, más bajo que los 82 que marcó en el máximo anterior ($105K). ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'Todo normal, el precio sigue subiendo y la tendencia se mantiene alcista' },
            { id: 'b', text: 'Divergencia bajista: el precio subió más pero con menos momentum. Precaución' },
            { id: 'c', text: 'El RSI está roto, ignóralo' },
            { id: 'd', text: 'Es señal de compra porque el RSI no está en sobrecompra' }
          ],
          correctAnswer: 'b',
          explanation: 'Divergencia bajista clásica: precio hace Higher High pero RSI hace Lower High. Los toros empujan el precio arriba pero con menos fuerza cada vez. Es señal anticipada de agotamiento, no de venta inmediata, pero sí de precaución.'
        },
        {
          id: 'q2',
          question: '¿Qué media móvil usan como referencia las instituciones para determinar si estamos en bull o bear market?',
          options: [
            { id: 'a', text: 'EMA 9 en gráfico de 15 minutos' },
            { id: 'b', text: 'EMA 21 en gráfico de 4 horas' },
            { id: 'c', text: 'La media de 200 en gráfico diario (SMA o su variante EMA), la frontera clásica entre bull y bear' },
            { id: 'd', text: 'SMA 50 en gráfico semanal, la más usada por los fondos' }
          ],
          correctAnswer: 'c',
          explanation: 'La media de 200 días es la referencia de largo plazo más seguida del mercado. Las instituciones miran sobre todo la SMA 200 diaria; la EMA 200 es una variante más sensible que cuenta la misma historia. Precio por encima = territorio bull, por debajo = territorio bear.'
        },
        {
          id: 'q3',
          question: 'SOL cruza de abajo hacia arriba la EMA 200 en diario con volumen 3× superior al promedio. ¿Qué tipo de señal es?',
          options: [
            { id: 'a', text: 'Death Cross, señal bajista de mediano plazo confirmada' },
            { id: 'b', text: 'Señal alcista importante: el precio recupera territorio bull. Considerar long con stop debajo de la media' },
            { id: 'c', text: 'Señal sin importancia, las EMAs no sirven' },
            { id: 'd', text: 'Señal de venta, el precio está sobrecomprado' }
          ],
          correctAnswer: 'b',
          explanation: 'Cruzar la EMA 200 al alza con volumen fuerte es una de las señales alcistas más importantes. El precio pasa de territorio "bear" a "bull". El volumen alto confirma que el movimiento tiene participación institucional real.'
        },
        {
          id: 'q4',
          question: 'ETH tiene RSI en 25 (sobreventa) y el precio está tocando un soporte histórico en $2,800 que ya respetó 3 veces antes. ¿Cuál es la confluencia?',
          options: [
            { id: 'a', text: 'No hay confluencia: el RSI bajo significa que hay que vender de inmediato' },
            { id: 'b', text: 'Confluencia alcista fuerte: RSI en sobreventa + soporte histórico probado, zona de posible suelo' },
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
            { id: 'b', text: 'El mercado está en rango: las EMAs se cruzan sin parar y generan señales falsas. Espera tendencia clara' },
            { id: 'c', text: 'Necesitas agregar más indicadores a tu gráfico para filtrar el ruido' },
            { id: 'd', text: 'Debes usar timeframes más bajos para más precisión' }
          ],
          correctAnswer: 'b',
          explanation: 'La mayoría de las pérdidas por indicadores ocurre en mercados laterales. Sin tendencia, las EMAs se enredan y generan señales falsas. La solución NO es más indicadores, es reconocer que el mercado no tiene dirección y esperar a que se defina.'
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
    type: 'Lectura + Práctica',
    description: 'La habilidad más importante del análisis técnico: identificar objetivamente si el mercado está subiendo, bajando o lateral. Sin esto, cualquier otra herramienta pierde sentido.',
    sections: [
      {
        type: 'intro',
        title: 'El Mapa del Campo de Batalla',
        content: 'Imagina que estás en medio de una guerra y no tienes mapa. No sabes si tu ejército avanza o retrocede, si estás ganando o perdiendo. Así opera la mayoría de la gente en crypto: compran y venden sin saber si el mercado va a su favor o en su contra. La **estructura de mercado** es tu mapa. Es la herramienta que te dice objetivamente, sin opiniones, sin emociones, quién tiene el control: los toros o los osos. Todo lo que aprendiste hasta ahora (velas, S/R, indicadores) funciona 10× mejor cuando sabes en qué tipo de mercado estás. Una vela Hammer en soporte dentro de un uptrend es oro. La misma vela en un downtrend puede ser una trampa mortal.',
        highlight: {
          title: 'Antes de Cualquier Trade',
          text: 'Antes de buscar entradas, antes de mirar indicadores, antes de todo: **identifica la estructura**. ¿Estamos subiendo, bajando o laterales? Esta es la pregunta más importante y la que la mayoría de los traders ignora.'
        }
      },
      {
        type: 'main',
        title: 'Tendencia Alcista: Higher Highs + Higher Lows',
        content: 'Una tendencia alcista se define por UNA sola regla: el precio hace **máximos cada vez más altos (Higher Highs / HH)** y **mínimos cada vez más altos (Higher Lows / HL)**. Piensa en una escalera subiendo, cada peldaño está más arriba que el anterior.',
        features: [
          { icon: TrendingUp, title: 'Higher High (HH)', text: 'Cada vez que el precio sube, supera el máximo anterior. Esto muestra que los compradores tienen suficiente fuerza para empujar el precio más arriba cada vez. Ejemplo: SOL hace un máximo en $180, retrocede, y luego sube a $210 (nuevo HH). Los toros dominan.' },
          { icon: TrendingUp, title: 'Higher Low (HL)', text: 'Cada vez que el precio retrocede, no cae tanto como la vez anterior. Los compradores aparecen antes. Ejemplo: SOL cae de $180 a $155, sube a $210, retrocede solo hasta $170 (HL). Los compradores no esperan tanto para comprar, señal de demanda creciente.' },
          { icon: CheckCircle, title: 'Regla de Operación', text: 'En un uptrend confirmado: **compra los retrocesos** (cuando el precio cae a un nuevo HL). La tendencia es tu amiga. No la pelees. No intentes vender en corto un mercado que hace HH + HL.' }
        ]
      },
      {
        type: 'main',
        title: 'Tendencia Bajista: Lower Highs + Lower Lows',
        content: 'Una tendencia bajista es el espejo exacto: el precio hace **máximos cada vez más bajos (Lower Highs / LH)** y **mínimos cada vez más bajos (Lower Lows / LL)**. Escalera bajando, cada rebote es más débil que el anterior.',
        features: [
          { icon: TrendingDown, title: 'Lower High (LH)', text: 'Cada rebote alcanza menos que el anterior. Los vendedores atacan antes. Ejemplo: BTC sube a $60K, cae, rebota solo hasta $55K (LH). Los osos no dejan que los toros recuperen terreno.' },
          { icon: TrendingDown, title: 'Lower Low (LL)', text: 'Cada caída rompe el mínimo anterior. Los compradores no logran defender los pisos. Ejemplo: BTC cae a $52K, rebota, y luego cae a $48K (LL). Los vendedores tienen el control total.' },
          { icon: AlertTriangle, title: 'Regla de Operación', text: 'En un downtrend confirmado: **no intentes comprar cada dip**. "Buy the dip" solo funciona en uptrends. En un downtrend, cada rebote es una oportunidad de salida, no de compra. Espera a que la estructura cambie antes de comprar.' }
        ]
      },
      {
        type: 'main',
        title: 'Break of Structure (BOS): La Primera Señal de Alerta',
        content: 'Un **Break of Structure** ocurre cuando la secuencia de HH/HL o LH/LL se rompe por primera vez. Es como el primer crujido en un edificio antes de colapsar, todavía no cayó, pero algo cambió. En un uptrend, el BOS ocurre cuando **el precio rompe el último Higher Low**. En un downtrend, cuando **el precio supera el último Lower High**.',
        features: [
          { icon: AlertTriangle, title: 'BOS en Uptrend (Señal de Debilidad)', text: 'SOL venía haciendo HH + HL: $155 → $180 → $170 → $210 → $190. Si ahora el precio cae debajo de $190 (último HL), es BOS. La escalera dejó de subir. No significa que el bear market empezó, pero la tendencia alcista se debilitó.' },
          { icon: Shield, title: 'BOS en Downtrend (Señal de Esperanza)', text: 'BTC venía haciendo LH + LL: $55K → $48K → $52K → $45K → $50K. Si ahora el precio supera $50K (último LH), es BOS. La presión bajista se debilitó. Los toros mostraron la primera señal de vida.' },
          { icon: Crosshair, title: 'Tu Acción en un BOS', text: 'BOS alcista roto: **no vendas todo en pánico**, pero ajusta tus stops y reduce tamaño de posiciones. BOS bajista roto: **no compres todo de golpe**, pero empieza a construir una posición pequeña con stop definido. El BOS es alerta, no confirmación.' }
        ],
        highlight: {
          title: 'Nota de Terminología (Importante para Videos Externos)',
          text: 'En esta lección usamos BOS como la primera ruptura de la estructura y CHOCH como la inversión confirmada. Buena parte del contenido de Smart Money Concepts usa la convención opuesta: BOS = ruptura A FAVOR de la tendencia (continuación) y CHoCH = primera ruptura EN CONTRA. Antes de seguir a un creador externo, verifica qué convención usa. El concepto es el mismo; la etiqueta cambia.'
        }
      },
      {
        type: 'main',
        title: 'Change of Character (CHOCH): El Cambio de Manos Confirmado',
        content: 'Si el BOS es la primera alerta, el **CHOCH (Change of Character)** es la confirmación. Un CHOCH ocurre cuando la estructura **no solo se rompe, sino que se invierte**: de HH + HL a LH + LL (o viceversa). Es el momento donde el control del mercado cambia de manos, de toros a osos o de osos a toros.',
        features: [
          { icon: RefreshCw, title: 'CHOCH Bajista (De Bull a Bear)', text: 'El uptrend se rompe (BOS), y luego el precio confirma haciendo un Lower High seguido de un Lower Low. La escalera ya no sube, empezó a bajar. Esto confirma que no fue una corrección temporal, sino un cambio real de tendencia.' },
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
            'No hay HH ni LL claros, rebota entre soporte y resistencia',
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
          { icon: Layers, title: 'Top-Down Analysis (De Arriba Hacia Abajo)', text: '**Paso 1**: Mira el gráfico semanal, ¿cuál es la tendencia macro? **Paso 2**: Baja al diario, ¿la tendencia de mediano plazo está alineada? **Paso 3**: Baja a 4h, busca tu entrada táctica. Si semanal y diario son alcistas, en 4h solo busca compras. Nunca pelees la tendencia del timeframe superior.' },
          { icon: Target, title: 'Alineación = Probabilidad Alta', text: 'La operación de mayor probabilidad es cuando semanal, diario y 4h están TODOS alcistas (o todos bajistas). Cuando hay conflicto entre timeframes, la mejor acción es NO operar. Espera a que se alineen.' }
        ]
      },
      {
        type: 'main',
        title: 'Poniendo Todo Junto: Tu Framework de Estructura',
        content: 'Aquí tienes el proceso paso a paso que deberías seguir ANTES de cada operación. Esto toma 5 minutos y te ahorra semanas de pérdidas:',
        features: [
          { icon: Search, title: '1. ¿Cuál es la Estructura?', text: '¿El precio hace HH + HL (alcista), LH + LL (bajista), o rebota sin dirección (rango)? Si no puedes identificar la estructura en 30 segundos, probablemente estés en rango, y eso significa operar con precaución máxima.' },
          { icon: Eye, title: '2. ¿Hay BOS o CHOCH Reciente?', text: '¿La estructura se rompió recientemente? Si hay BOS, estás en alerta. Si hay CHOCH, la tendencia probablemente cambió. Ajusta tu sesgo alcista/bajista según esta información.' },
          { icon: Crosshair, title: '3. Opera a Favor de la Estructura', text: 'En uptrend: compra retrocesos a zonas de soporte. En downtrend: espera o vende rebotes a resistencia. En rango: compra soporte, vende resistencia, con stops ajustados. **Nunca pelees la estructura del timeframe superior.**' },
          { icon: Shield, title: '4. Tu Stop Loss Está en la Estructura', text: 'Si compraste porque la estructura es alcista, tu stop está donde la estructura se rompe, debajo del último HL. Si la estructura se invalida, tu tesis también, y debes salir. Es objetivo y elimina la emoción.' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre SOL/USDT en 4 horas. 1) Marca los últimos 4 máximos y 4 mínimos y clasifícalos: ¿HH, HL, LH o LL? 2) Define la estructura: alcista, bajista o rango. 3) Identifica el nivel exacto que la invalidaría (el último HL o LH). 4) Sube al gráfico diario y repite: ¿coinciden las dos lecturas? Si no puedes clasificarla en 30 segundos, probablemente es un rango.'
        }
      },
      {
        type: 'main',
        title: 'Ejemplo Completo: De Análisis a Ejecución',
        content: 'Vamos a poner en práctica TODO lo que aprendiste en este módulo con un ejemplo completo. Imagina que estás analizando SOL/USDC y quieres decidir si comprar, vender, o no hacer nada. Este es el proceso profesional paso a paso:',
        features: [
          { icon: BarChart3, title: '1. Lee el Gráfico (Estructura + Contexto)', text: 'Abres el gráfico semanal: SOL viene haciendo HH + HL desde hace 3 meses. Tendencia macro alcista confirmada. Bajas al diario: también alcista, pero el precio retrocedió al último soporte en $160 (zona de demanda que antes fue resistencia). Bajas a 4H: el RSI está en 32 (sobreventa) y el precio tocó la EMA de 200 periodos. Los tres timeframes dicen lo mismo: el contexto favorece una compra en este nivel.' },
          { icon: Activity, title: '2. Aplica tus Indicadores de Confirmación', text: 'RSI en 4H en sobreventa (32), señal de que la presión vendedora se agotó. El precio está en la EMA 200 diaria, históricamente actúa como soporte dinámico en tendencias alcistas. Volumen: la vela de retroceso tiene volumen decreciente (los vendedores están perdiendo fuerza). Buscas una vela de reversión: aparece un Hammer en 4H en la zona de $160. Todas las señales están alineadas.' },
          { icon: Crosshair, title: '3. Define tu Entrada, Stop Loss y Take Profit', text: 'Entrada: $162 (ligeramente por encima del cierre del Hammer para confirmar fuerza compradora). Stop Loss: $153 (debajo del último Higher Low y de la mecha del Hammer, si el precio llega ahí, la estructura alcista se rompe y tu tesis se invalida). Take Profit 1: $185 (resistencia reciente, relación riesgo/recompensa de 1:2.5). Take Profit 2: $200 (siguiente zona de resistencia para la mitad restante). Riesgo por acción: $162 - $153 = $9 de riesgo por SOL.' },
          { icon: Target, title: '4. Calcula tu Tamaño de Posición', text: 'Regla: nunca arriesgas más del 1-2% de tu capital total en una sola operación. Si tu portafolio es $5,000, tu riesgo máximo es $50-100 por trade. Con $9 de riesgo por SOL y $75 de riesgo máximo: puedes comprar ~8 SOL ($1,296 de posición). No todo tu portafolio, solo la cantidad donde si pierdes $75, duermes tranquilo. Esta es la diferencia entre un trader y un apostador: el apostador pone todo, el trader calcula su riesgo ANTES de entrar.' }
        ],
        highlight: {
          title: 'El Framework Completo',
          text: 'Estructura (macro) → Soporte/Resistencia (nivel) → Indicadores (confirmación) → Vela de entrada (timing) → Stop en estructura (riesgo) → Posición por % de capital (gestión). Sigue este proceso en cada operación y eliminarás la mayoría de las decisiones emocionales que destruyen cuentas.'
        }
      },
      {
        type: 'takeaways',
        title: 'La Estructura lo Es Todo',
        items: [
          'La estructura de mercado te dice **quién tiene el control**: toros (HH + HL), osos (LH + LL), o nadie (rango lateral).',
          'Break of Structure (BOS) es la primera señal de que algo cambió. No es confirmación, es alerta, ajusta tu riesgo pero no entres en pánico.',
          'Change of Character (CHOCH) es la confirmación de un cambio de tendencia. Cuando la estructura se invierte completamente (de HH/HL a LH/LL o viceversa), el control cambió de manos.',
          'Analiza siempre de arriba hacia abajo: semanal → diario → 4h. La operación ideal es cuando todos los timeframes están alineados.',
          'En mercados laterales, la mayoría de las señales son falsas. Si no puedes identificar la estructura en 30 segundos, probablemente no haya tendencia, y lo mejor es esperar.',
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
            { id: 'a', text: 'Bajista, el precio oscila demasiado entre niveles para ser confiable' },
            { id: 'b', text: 'Alcista: cada mínimo y cada máximo es más alto que el anterior (HH + HL)' },
            { id: 'c', text: 'Lateral, está en un rango' },
            { id: 'd', text: 'No se puede determinar con esta información' }
          ],
          correctAnswer: 'b',
          explanation: 'Mínimos: $120 → $135 → $150 (Higher Lows). Máximos: $155 → $175 (Higher Highs). Secuencia perfecta de HH + HL = tendencia alcista confirmada.'
        },
        {
          id: 'q2',
          question: 'Bitcoin viene subiendo (HH + HL) durante 4 meses. De repente, el precio cae debajo del último Higher Low. ¿Qué acaba de ocurrir y qué haces?',
          options: [
            { id: 'a', text: 'Nada, es una corrección normal dentro de la tendencia, HODL sin cambios' },
            { id: 'b', text: 'Break of Structure (BOS): ajusto stops, reduzco posición y observo si se forma un CHOCH' },
            { id: 'c', text: 'Vendo todo inmediatamente, el bear market empezó' },
            { id: 'd', text: 'Compro más, es un dip en tendencia alcista' }
          ],
          correctAnswer: 'b',
          explanation: 'Romper el último HL es un Break of Structure, primera señal de debilidad. No es confirmación de bear market (eso sería CHOCH), pero es alerta seria. Reduce riesgo y observa: si forma LH + LL, tendrás tu CHOCH. (Nota: buena parte del contenido SMC llama CHoCH a esta primera ruptura en contra de la tendencia y reserva BOS para rupturas a favor; aquí usamos BOS como primera alerta.)'
        },
        {
          id: 'q3',
          question: 'Estás analizando ETH. En gráfico semanal la tendencia es alcista. En diario es alcista. En 4 horas el precio retrocedió a un soporte con RSI en sobreventa. ¿Cuál es la operación?',
          options: [
            { id: 'a', text: 'Vender, el retroceso en 4h significa debilidad' },
            { id: 'b', text: 'Comprar el retroceso en 4h: semanal y diario alcistas, entrada con confluencia' },
            { id: 'c', text: 'Esperar a que cambie la tendencia semanal antes de tomar cualquier decisión' },
            { id: 'd', text: 'Operar en gráfico de 1 minuto para más precisión' }
          ],
          correctAnswer: 'b',
          explanation: 'Análisis top-down perfecto: semanal y diario alcistas = el panorama general está a tu favor. Un retroceso en 4h a soporte + RSI sobreventa es una entrada de alta probabilidad a favor de TODOS los timeframes.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la diferencia entre un Break of Structure (BOS) y un Change of Character (CHOCH)?',
          options: [
            { id: 'a', text: 'Son exactamente lo mismo, solo dos nombres distintos para el mismo evento' },
            { id: 'b', text: 'BOS es la primera ruptura (alerta); CHOCH es la inversión completa que confirma el cambio' },
            { id: 'c', text: 'BOS es bajista y CHOCH es alcista' },
            { id: 'd', text: 'BOS ocurre en timeframes bajos y CHOCH en timeframes altos' }
          ],
          correctAnswer: 'b',
          explanation: 'BOS = primera grieta en la estructura (alerta, no confirmación). CHOCH = la estructura se invierte por completo, de HH/HL a LH/LL o viceversa. Muchos traders actúan en el BOS cuando deberían esperar el CHOCH para mayor confirmación. Ojo al comparar con videos externos: la convención SMC más común usa BOS para rupturas A FAVOR de la tendencia y CHoCH para la primera ruptura EN CONTRA. Lo importante es el concepto, no la etiqueta.'
        },
        {
          id: 'q5',
          question: 'Llevas 2 semanas intentando operar un mercado donde el precio rebota entre $40K y $44K sin hacer Higher Highs ni Lower Lows. Todas tus operaciones pierden. ¿Qué tipo de mercado es y qué deberías hacer?',
          options: [
            { id: 'a', text: 'Es un bear market, deja de operar completamente' },
            { id: 'b', text: 'Es un rango: opera los extremos (comprar $40K, vender $44K) o espera la ruptura' },
            { id: 'c', text: 'Necesitas más indicadores en el gráfico para encontrar la tendencia oculta' },
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
    description: 'No compres solo por el logo o el hype. La economía de un token, su supply, distribución, inflación y calendario de desbloqueos, determina si ganas o pierdes. Aprende a leer las matemáticas antes de invertir.',
    sections: [
      {
        type: 'intro',
        title: 'No Compres un Logo, Compra Matemáticas',
        content: 'La gran mayoría de los inversores en crypto compra tokens basándose en: el logo es bonito, alguien en Twitter lo recomendó, o "suena a que va a subir". Luego ven cómo su inversión cae -80% y no entienden por qué. La respuesta casi siempre está en los **tokenomics**, la economía del token. ¿Cuántos tokens existen? ¿Cuántos más se van a crear? ¿Quién los tiene? ¿Cuándo van a poder vender? Estas preguntas simples determinan si un token tiene presión de compra o presión de venta. Es pura oferta y demanda, pero con mecanismos que la mayoría no se molesta en entender. Los que sí los entienden, VCs, fondos, traders profesionales, son los que consistentemente ganan dinero a costa de los que no.',
        highlight: {
          title: 'La Regla de Oro de los Tokenomics',
          text: 'Si no entiendes los tokenomics de un proyecto, eres la liquidez de salida de alguien más. Alguien que SÍ los leyó te está vendiendo sus tokens sabiendo que el supply se va a multiplicar 10×.'
        }
      },
      {
        type: 'main',
        title: 'Supply: La Oferta del Token',
        content: 'El concepto más fundamental es el **supply**, cuántos tokens existen y cuántos van a existir. Hay tres números que DEBES verificar antes de comprar cualquier token:\n\n**¿Por qué importa más el supply que el precio?** Porque un token a $0.01 con 100 mil millones de supply tiene un FDV de $1,000 millones. El precio sin contexto de supply es una ilusión.',
        features: [
          { icon: BarChart3, title: 'Circulating Supply (Supply Circulante)', text: 'Los tokens que AHORA MISMO están en el mercado, en manos de personas que pueden comprar y vender. Este es el número real. Si hay 100 millones de tokens circulando a $1, el **market cap real** es $100M. Este es el número que importa para evaluar el tamaño actual del proyecto.' },
          { icon: Layers, title: 'Total Supply (Supply Total)', text: 'Todos los tokens que existen, incluyendo los que están bloqueados (en vesting, en la tesorería, sin distribuir). Si el total es 1,000 millones pero solo circulan 100 millones, hay **900 millones esperando para entrar al mercado**. Cuando entren, diluirán tu posición.' },
          { icon: Lock, title: 'Max Supply (Supply Máximo)', text: 'El número máximo de tokens que existirán JAMÁS. Bitcoin tiene max supply de 21 millones, nunca habrá más. Algunos tokens no tienen max supply (emisión infinita como DOGE). Otros tienen max supply pero tardarán décadas en alcanzarlo. **Si no hay max supply, la inflación es eterna.**' }
        ]
      },
      {
        type: 'main',
        title: 'Market Cap vs FDV: La Trampa del "Token Barato"',
        content: '"¡Está a $0.001, es baratísimo!" Esto es una **trampa mortal** que atrapa a miles de novatos. El precio unitario de un token no significa NADA sin contexto. Lo que importa es la capitalización de mercado y, más importante aún, el **Fully Diluted Valuation (FDV)**.',
        features: [
          { icon: BarChart3, title: 'Market Cap = Precio × Supply Circulante', text: 'Si un token cuesta $0.001 pero hay 100,000 millones en circulación, el market cap es $100M. No es "barato", es un proyecto de $100M. Compara: otro token a $100 con 1 millón de supply circulante también tiene market cap de $100M. El precio por unidad es irrelevante.' },
          { icon: AlertTriangle, title: 'FDV = Precio × Supply Total', text: 'Aquí está la trampa real. Si ese token de $0.001 tiene 10 billones (millones de millones) de tokens de supply total, el FDV es $10,000 millones. ¿De verdad crees que un proyecto random vale lo mismo que las empresas más grandes del mundo? El FDV te dice: "para que este token mantenga su precio, necesitaría una valoración de $10B cuando todo el supply se desbloquee". Casi nunca pasa.' },
          { icon: Eye, title: 'La Ratio Market Cap/FDV', text: 'Divide el market cap entre el FDV. Si la ratio es menor a 0.10 (solo el 10% del supply circula), hay un 90% de tokens esperando para diluirte. Ratio baja = altísimo riesgo de dilución. Ratio alta (>0.70) = la mayoría del supply ya circula y hay poco riesgo de dilución adicional.' }
        ]
      },
      {
        type: 'main',
        title: 'Distribución: ¿Quién Tiene los Tokens?',
        content: 'No solo importa cuántos tokens hay, importa **QUIÉN los tiene**. Un proyecto donde el 50% de los tokens están en manos del equipo fundador es fundamentalmente diferente a uno donde el 80% fue distribuido a la comunidad. La distribución te dice quién tiene el poder y quién tiene la motivación de vender.',
        features: [
          { icon: Users, title: 'Team / Founders (Equipo)', text: 'Tokens asignados a los creadores del proyecto. Idealmente 10-20%. Más de 25% es red flag, el equipo podría vender masivamente. Menos de 5% es sospechoso también, ¿por qué el equipo no quiere tokens de su propio proyecto?' },
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
          { icon: AlertTriangle, title: 'Token Unlocks Masivos', text: 'Usa **Tokenomist** (antes TokenUnlocks), en tokenomist.ai, para ver el calendario de CADA proyecto. Si en 2 semanas se desbloquea el 15% del supply total, prepárate para presión de venta MASIVA. Los insiders que llevan meses esperando finalmente podrán vender. Esto aplasta precios consistentemente.' },
          { icon: Target, title: 'Qué Pasa con el Precio Antes de un Unlock', text: 'La investigación muestra que el precio suele DEBILITARSE en las semanas previas a un unlock grande: el mercado se adelanta a la dilución y vende antes. Los pumps pre-unlock existen (marketing que se intensifica, noticias convenientes), pero son la excepción, no la regla, y cuando ocurren suelen dar liquidez de salida a los insiders. La conclusión práctica es la misma: no compres con un unlock masivo encima.' }
        ]
      },
      {
        type: 'main',
        title: 'Inflación vs Deflación de Tokens',
        content: 'Así como los gobiernos imprimen dinero (inflación), los protocolos pueden crear nuevos tokens (emisión). Y así como Bitcoin quema fees, algunos protocolos destruyen tokens (deflación). La batalla entre emisión y destrucción determina si tu inversión se diluye o se concentra.',
        features: [
          { icon: TrendingDown, title: 'Inflación (Presión Bajista)', text: 'Nuevos tokens entran al mercado constantemente: emisiones para staking, recompensas de minería, unlocks de tesorería. Si un protocolo emite 10% de nuevo supply al año, tu posición se diluye 10% anual. Para mantener el mismo precio, la demanda debe crecer al mismo ritmo, raro.' },
          { icon: TrendingUp, title: 'Deflación / Quema (Presión Alcista)', text: 'Algunos protocolos "queman" (destruyen permanentemente) tokens cuando se pagan fees. Ethereum quema ETH en cada transacción. Si la quema supera la emisión, el supply DECRECE con el tiempo = más escasez = presión alcista natural. ETH puede ser deflacionario en picos de actividad, aunque desde 2024, con fees más bajas, su tendencia general ha sido levemente inflacionaria (~0.2-0.8% anual).' },
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
            'Sin revenue real, el token no tiene utilidad más allá de especulación'
          ]
        }
      },
      {
        type: 'main',
        title: 'Casos Reales: Tokenomics en Acción',
        content: 'La teoría cobra vida cuando miras proyectos reales. Estos ejemplos muestran cómo los tokenomics determinan el destino de un token:',
        features: [
          { icon: CheckCircle, title: 'Bitcoin (BTC), El Estándar Dorado', text: 'Max supply: 21 millones. Emisión decreciente (halving cada 4 años). Circulating/total: ~93%. Sin equipo con tokens bloqueados. Sin VCs. 100% distribución orgánica. Resultado: el activo más exitoso de la historia moderna.' },
          { icon: CheckCircle, title: 'Solana (SOL), Tokenomics Sólidos', text: 'Emisión inflacionaria que decrece ~15% por año. Staking rewards incentivan HODL (reduce supply circulante efectivo). Fees se queman parcialmente. Comunidad activa y descentralizada. Resultado: top 5 por capitalización.' },
          { icon: AlertTriangle, title: 'FTT (FTX Token), La Ilusión', text: 'El token de FTX parecía tener buenos tokenomics: quemas regulares, supply limitado. Pero Alameda Research (la empresa hermana) tenía miles de millones en FTT como "colateral". Cuando se descubrió, FTT colapsó -97% en días. Lección: los tokenomics en papel no sirven si hay concentración oculta.' },
          { icon: AlertTriangle, title: 'LUNA/UST, La Espiral de la Muerte', text: 'LUNA tenía un mecanismo "elegante": quemar LUNA para crear UST (stablecoin). Funcionó mientras había demanda. Cuando UST perdió el peg, el supply de LUNA pasó de ~350 millones a ~6.5 billones de tokens en cuestión de días, inflación infinita instantánea. De $80 a $0.00001. Los tokenomics pueden matar un proyecto de $40B en una semana.' }
        ]
      },
      {
        type: 'main',
        title: '\u{1F9E0} Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas por qué un token a $0.001 puede ser más caro que uno a $100. Usa los conceptos de supply y FDV.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Los estudios sobre aprendizaje muestran que explicar un concepto en tus propias palabras mejora significativamente la retención comparado con solo leerlo. No memorices, comprende.'
        }
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Tokenomics',
        items: [
          'NUNCA inviertas sin verificar el supply: circulante, total y máximo. Si la ratio circulante/total es baja (<10%), hay una montaña de tokens esperando para diluirte.',
          'El precio unitario es irrelevante, $0.001 puede ser "caro" y $200 puede ser "barato". Lo que importa es el Market Cap y el FDV (Fully Diluted Valuation).',
          'Verifica la distribución: ¿quién tiene los tokens? Si equipo + VCs > 50%, eres minoría en un juego controlado por insiders.',
          'Revisa el calendario de unlocks en Tokenomist (tokenomist.ai, antes TokenUnlocks) ANTES de comprar. Un unlock masivo próximo casi siempre genera presión de venta.',
          'Calcula la inflación neta: emisión anual − quema anual. Si es positiva, tu posición se diluye cada año. Compara con el crecimiento esperado de la demanda.',
          'Los tokenomics en papel no son suficientes, verifica la concentración real de wallets (en Arkham o Dune). Si 5 wallets tienen el 60% del supply, una sola venta puede destruir el precio.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Encuentras un token a $0.01. Supply circulante: 10M. Supply total: 10B. FDV: $100M. ¿Cuál es el market cap REAL y qué riesgo hay?',
          options: [
            { id: 'a', text: '$100M, ese es el valor real del proyecto según su FDV' },
            { id: 'b', text: '$100K (10M × $0.01): el 99.9% del supply está esperando para entrar y diluirte' },
            { id: 'c', text: 'No se puede calcular sin más datos' },
            { id: 'd', text: '$10M, es el promedio entre market cap y FDV' }
          ],
          correctAnswer: 'b',
          explanation: 'Market cap = supply circulante × precio = 10M × $0.01 = $100K. El FDV es $100M. La diferencia 1000× significa que el 99.9% del supply está por desbloquearse. Cada unlock diluye tu posición exponencialmente.'
        },
        {
          id: 'q2',
          question: 'Proyecto A: equipo 15%, 4 años vesting. Proyecto B: equipo 30%, 6 meses cliff. Tecnología similar. ¿Cuál tiene mejor alineación con holders?',
          options: [
            { id: 'a', text: 'B, el equipo tiene más "skin in the game" con 30%' },
            { id: 'b', text: 'A: menos tokens para insiders y el vesting largo alinea al equipo con el éxito de largo plazo' },
            { id: 'c', text: 'Son iguales, el porcentaje del equipo no importa en la práctica' },
            { id: 'd', text: 'B, más tokens para el equipo significa más motivación para construir' }
          ],
          correctAnswer: 'b',
          explanation: 'Vesting largo (4 años) alinea incentivos: el equipo solo gana si el proyecto es exitoso a largo plazo. 6 meses cliff = el equipo puede dumpearte todo en menos de un año. "Skin in the game" es quedarse comprometido, no tener muchos tokens que puedes vender pronto.'
        },
        {
          id: 'q3',
          question: 'Un protocolo emite 5% de nuevo supply anual pero quema 3% en fees. ¿Es inflacionario o deflacionario?',
          options: [
            { id: 'a', text: 'Deflacionario, porque quema tokens constantemente con cada transacción' },
            { id: 'b', text: 'Inflacionario al 2% neto (5% emisión − 3% quema). Cada año tu posición se diluye un 2%' },
            { id: 'c', text: 'Neutral, se cancelan mutuamente' },
            { id: 'd', text: 'Depende del precio del token' }
          ],
          correctAnswer: 'b',
          explanation: 'Lo que importa es la inflación NETA: 5% − 3% = 2% inflacionario. Se crean más tokens de los que se destruyen = el supply crece = presión bajista lenta pero constante. Para que el precio suba, la demanda debe crecer >2% al año.'
        },
        {
          id: 'q4',
          question: 'Tokenomist muestra que en 2 semanas se desbloquea el 15% del supply total. El precio ha subido 40% este mes. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'El mercado anticipa buenas noticias del proyecto, es momento de comprar más' },
            { id: 'b', text: 'Señal de peligro: una subida antes de un unlock grande suele terminar como liquidez de salida para los insiders' },
            { id: 'c', text: 'Los unlocks no afectan al precio, es pura coincidencia' },
            { id: 'd', text: 'El equipo está comprando más tokens antes del unlock' }
          ],
          correctAnswer: 'b',
          explanation: 'Los datos históricos muestran que el precio suele DEBILITARSE en las semanas previas a un unlock grande, porque el mercado se adelanta a la dilución. Cuando en cambio sube, como aquí, esa subida suele servir para que los insiders vendan sus tokens recién desbloqueados a mejor precio, con el retail como liquidez de salida. En ambos escenarios, comprar justo antes de un unlock del 15% del supply es mala idea.'
        },
        {
          id: 'q5',
          question: 'Un protocolo hace un airdrop masivo: regala tokens al 20% de sus usuarios activos. ¿Qué pasa normalmente con el precio en las semanas siguientes?',
          options: [
            { id: 'a', text: 'Sube, más gente tiene el token y lo promueve' },
            { id: 'b', text: 'Se mantiene estable, los airdrops son eventos neutrales para el precio' },
            { id: 'c', text: 'Cae fuerte: los farmers venden de inmediato sus tokens gratis, creando presión de venta masiva' },
            { id: 'd', text: 'Depende de la calidad del proyecto únicamente' }
          ],
          correctAnswer: 'c',
          explanation: 'La mayoría de receptores de airdrops venden inmediatamente, recibieron algo gratis y quieren convertirlo en dinero. Esto crea presión de venta enorme. La estrategia inteligente: espera el dump post-airdrop y compra después de la capitulación, no antes.'
        },
        {
          id: 'review_1',
          question: '📝 Repaso: Cuando un precio rompe un nivel de soporte con alto volumen y luego vuelve a tocarlo desde abajo, ese nivel se convierte en:',
          options: [
            { id: 'a', text: 'Un nuevo soporte más fuerte' },
            { id: 'b', text: 'Una señal de compra' },
            { id: 'c', text: 'Una nueva resistencia' },
            { id: 'd', text: 'Un indicador de baja volatilidad' }
          ],
          correctAnswer: 'c',
          explanation: 'Cuando un soporte se rompe, se convierte en resistencia (y viceversa). Este concepto de "flip" de niveles es fundamental en análisis técnico. (Recuerda la Lección 14: Soportes y Resistencias)'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 2,
        title: 'Checkpoint: La Trampa del Token "Barato"',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Token A cuesta $200 por unidad con 1M circulantes y 1M total. Token B cuesta $0.001 por unidad con 10B circulantes y 100B total. Un amigo dice "Token B está baratísimo". ¿Qué le respondes?',
            options: [
              'Tiene razón, $0.001 es muchísimo más barato que $200 por unidad',
              'Token A tiene market cap de $200M; Token B tiene market cap de $10M pero FDV de $100M: el 90% del supply está por desbloquearse y la dilución va a aplastar el precio',
              'Los dos son equivalentes porque el precio no importa',
              'Token B es mejor porque puedes comprar más unidades'
            ],
            correctAnswer: 1,
            explanation: 'El precio por unidad es irrelevante. Lo que importa es Market Cap (precio × supply circulante) y FDV (precio × supply total). Token B tiene ratio Market Cap / FDV de 0.1, solo 10% circula, 90% está esperando para diluirte. Token A tiene ratio 1.0, todo ya circula, sin riesgo de dilución. "Barato por unidad" es una ilusión psicológica que los insiders usan contra novatos.',
            hint: 'Calcula el FDV de cada uno.'
          }
        ]
      }
    ]
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
        content: 'Hay un patrón histórico en crypto que se ha repetido desde 2012: cada ~4 años, Bitcoin reduce su emisión a la mitad (halving), y 12-18 meses después ha llegado un bull market explosivo. La explicación clásica es la oferta y la demanda, aunque cada ciclo también coincidió con ciclos de liquidez global, y cuatro casos son un patrón, no una ley. Bitcoin dirige TODO el mercado crypto. El guion clásico dice que cuando BTC sube, el capital fluye en cascada: **BTC → ETH → Large Caps → Mid Caps → Small Caps → Memecoins** (aunque el ciclo 2024-25 rompió parte de ese guion). Cuando BTC cae, todo cae con él (las altcoins caen más fuerte). Entender en qué fase del ciclo estamos es probablemente la ventaja más grande que puedes tener. Los que compran en el bear y venden en la euforia acumulan riqueza generacional. Los que compran en la euforia y venden en el pánico pierden todo.',
        highlight: {
          title: 'El Patrón Que Se Repite',
          text: 'Desde 2012, cada halving ha sido seguido por un bull market 12-18 meses después: 2012 → 2013 bull, 2016 → 2017 bull, 2020 → 2021 bull, 2024 → 2025 bull. Cuatro de cuatro hasta ahora. Pero cuatro casos no hacen una ley: trátalo como brújula histórica, no como garantía.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es el Halving y Por Qué Importa?',
        content: 'Cada ~210,000 bloques (aproximadamente 4 años), la cantidad de Bitcoin nuevo que se crea por bloque se reduce exactamente a la **mitad**. Esto está programado en el código de Bitcoin y NADIE puede cambiarlo, ni gobiernos, ni Elon Musk, ni el creador de Bitcoin.',
        features: [
          { icon: Percent, title: 'La Matemática del Halving', text: '2009: se creaban **50 BTC** por bloque (cada 10 minutos). 2012 (1er halving): **25 BTC**. 2016: **12.5 BTC**. 2020: **6.25 BTC**. 2024: **3.125 BTC**. Cada halving la emisión nueva se corta a la mitad, mientras la demanda sigue creciendo. Oferta que decrece + demanda que crece = precio que sube.' },
          { icon: Lock, title: 'El Shock de Oferta', text: 'Imagina que todos los días se producen 900 BTC nuevos (pre-halving 2024). Los mineros venden la mayoría para pagar electricidad. De repente, la producción baja a 450 BTC diarios. Los compradores que antes absorbían 900 ahora compiten por solo 450. Misma demanda, mitad de oferta nueva: presión alcista. Eso sí, hoy la emisión nueva es menos del 1% del supply al año, así que el efecto directo es cada vez más pequeño; los ciclos también han coincidido con los ciclos de liquidez global.' },
          { icon: Clock, title: '¿Cuándo es el Próximo?', text: 'El último halving fue en **abril 2024**. El próximo será aproximadamente en **2028**. Para 2140, se habrá minado el último Bitcoin. Después de eso, cero emisión nueva, Bitcoin será puramente deflacionario.' }
        ]
      },
      {
        type: 'main',
        title: 'Las 4 Fases del Ciclo de Mercado',
        content: 'El mercado crypto se ha movido históricamente en un ciclo de 4 fases alrededor de cada halving. Reconocer en qué fase estamos te da una ventaja enorme sobre la mayoría del mercado que opera por emoción:',
        features: [
          { icon: TrendingDown, title: '1. Bear Market (Invierno Crypto)', text: 'Duración: 12-18 meses. El precio cae **-70% a -85%** desde el máximo. Los medios declaran "crypto muerto". Los novatos que compraron en la euforia venden en pánico con pérdidas masivas. Twitter crypto se vacía. Los exchanges despiden empleados. **Paradójicamente, este es el MEJOR momento para comprar.** Las fortunas de crypto se construyen en el bear market.' },
          { icon: Activity, title: '2. Acumulación (Primavera Silenciosa)', text: 'Duración: 6-12 meses. El precio se estabiliza y se mueve lateral. El volumen es bajo. Nadie habla de crypto. Los que quedaron empiezan a comprar silenciosamente. Las ballenas y fondos acumulan posiciones enormes. El halving generalmente ocurre en esta fase. **Si estás comprando aquí, estás con el dinero inteligente.**' },
          { icon: Zap, title: '3. Bull Market (Verano Explosivo)', text: 'Duración: 12-18 meses post-halving. El precio rompe el ATH anterior. Los medios empiezan a hablar de crypto otra vez. Los primeros novatos entran. Bitcoin ha subido con fuerza desde el mínimo del bear, pero cada ciclo el múltiplo se reduce: aproximadamente 90×, 30×, 21× y 8× desde el mínimo del bear en los cuatro ciclos. Las altcoins han explotado más fuerte en ciclos pasados, aunque en 2024-25 la mayoría nunca se acercó a sus máximos de 2021. La euforia crece exponencialmente.' },
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
          { icon: BarChart3, title: 'Ciclo 4: Halving Abr 2024', text: 'BTC en el halving: ~$64,000. Para finales de 2024 ya superó los $100K. ETFs de Bitcoin aprobados, adopción institucional masiva. Hasta ahora, el máximo de este ciclo fue en octubre de 2025: cerca de $126,000, unos 18 meses después del halving, dentro de la ventana histórica. Después vino la corrección: a mediados de 2026, BTC opera en la zona de $60,000-65,000, y solo el tiempo confirmará si ese fue el techo definitivo del ciclo.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin Dominance y la Altseason',
        content: 'Uno de los indicadores más seguidos del ciclo es la **Bitcoin Dominance**, el porcentaje del mercado total de crypto que corresponde a Bitcoin. Cuando BTC Dominance sube, Bitcoin se lleva el capital. Cuando baja, las altcoins tienden a brillar. Este es el guion clásico de la rotación, pero una advertencia importante: el ciclo 2024-25 lo rompió en gran parte (la dominancia se mantuvo por encima de 55-60% y la altseason amplia nunca llegó). Úsalo como mapa histórico, no como guion garantizado:',
        features: [
          { icon: BarChart3, title: 'Fase 1: BTC Dominance Sube (60%+)', text: 'Al inicio del bull market, el capital entra primero a Bitcoin (el más seguro). BTC Dominance sube a 60-65%. En esta fase, las altcoins rinden menos que BTC. **Estrategia: mantén la mayoría en BTC.**' },
          { icon: Zap, title: 'Fase 2: BTC Dominance Empieza a Caer (55-60%)', text: 'Bitcoin consolidó sus ganancias. El capital empieza a fluir a ETH y large caps (SOL, AVAX). BTC Dominance cae lentamente. **Estrategia: empieza a rotar gradualmente a altcoins de alta capitalización.**' },
          { icon: Activity, title: 'Fase 3: Altseason (BTC Dom <50%)', text: 'Bitcoin se estanca, el capital fluye masivamente a altcoins. Las mid caps y small caps hacen 10-50×. Los memecoins explotan. BTC Dominance cae por debajo del 50%. **Esta fase dura poco, semanas, no meses.** Es donde se hacen (y se pierden) fortunas.' },
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
          { icon: PiggyBank, title: 'Bear Market: ACUMULA', text: 'DCA (Dollar Cost Average) en BTC y, por ejemplo, alguna altcoin mayor como SOL (ojo: ninguna altcoin individual tiene garantizada la supervivencia de un ciclo al siguiente). No intentes encontrar el mínimo exacto, compra gradualmente cada semana/mes. Construye posiciones en proyectos con fundamentales fuertes que sobrevivirán al invierno. Mantén 30-40% en stablecoins para aprovechar oportunidades extremas.' },
          { icon: Clock, title: 'Acumulación: POSICIÓNATE', text: 'Aumenta tamaño de posiciones. Los precios están bajos y estables, es el mejor risk/reward del ciclo. Investiga proyectos para el próximo bull. Empieza a construir posiciones en altcoins selectas. Mantén 20% en stablecoins.' },
          { icon: Zap, title: 'Bull Market: CABALGA Y TOMA GANANCIAS', text: 'Deja correr tus posiciones pero EMPIEZA a tomar ganancias parciales en cada subida. Usa scaling out: vende 20-30% en cada nuevo máximo. Rota gradualmente de BTC a altcoins cuando BTC Dom empiece a caer. Nunca inviertas todo, mantén reservas.' },
          { icon: Shield, title: 'Distribución: PROTEGE Y SAL', text: 'Cuando veas señales de euforia extrema, toma ganancias agresivamente. Rota a stablecoins 50-70% del portafolio. No intentes encontrar el techo exacto, es mejor salir un mes antes que un día después. El 90% de las ganancias de altcoins se evaporan en el bear.' }
        ]
      },
      {
        type: 'main',
        title: '¿Se Romperá el Ciclo Algún Día?',
        content: 'La pregunta del millón. Cada ciclo, alguien dice "esta vez será diferente". Hay argumentos válidos para ambos lados:',
        features: [
          { icon: CheckCircle, title: 'A Favor de que el Ciclo Continúa', text: 'El halving es matemático e inmutable, siempre cortará la oferta. La naturaleza humana (euforia y pánico) no cambia. Los ciclos de deuda y liquidez global también son cíclicos. Mientras exista el halving y la naturaleza humana, habrá ciclos.' },
          { icon: AlertTriangle, title: 'A Favor de que Podría Cambiar', text: 'La adopción institucional (ETFs) podría suavizar la volatilidad. Los halvings reducen su impacto cada vez (de 50→25 es -50%, de 3.125→1.5625 es igual -50% pero en números más pequeños). El ciclo 2024-25 ya mostró señales de cambio: dominancia de BTC persistentemente alta, altseason amplia ausente y múltiplos cada vez menores. Los ciclos podrían volverse menos extremos, pero probablemente no desaparecerán.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Brújula de Ciclos',
        items: [
          'El halving reduce la emisión de Bitcoin a la mitad cada ~4 años. Es un shock de oferta programado que históricamente ha coincidido con bull markets 12-18 meses después, aunque cuatro casos son un patrón, no una ley.',
          'Las 4 fases del ciclo se repiten: Bear Market → Acumulación → Bull Market → Distribución. Las fortunas se construyen comprando en bear y vendiendo en distribución.',
          'Bitcoin Dominance es la brújula clásica de la rotación: alta (>60%) = mantén BTC; cayendo = rota gradualmente; bajo 50% = altseason. Pero el ciclo 2024-25 rompió ese guion (la dominancia se mantuvo alta y la altseason amplia no llegó): es una heurística histórica, no una garantía.',
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
          question: 'Imagina que es diciembre de 2025. El halving fue en abril 2024. Bitcoin ya superó su ATH anterior. ¿En qué fase del ciclo estarías probablemente?',
          options: [
            { id: 'a', text: 'Acumulación, todavía es muy temprano en el ciclo para hablar de un pico' },
            { id: 'b', text: 'Fase final del bull market o inicio de la corrección: a 20 meses post-halving, el pico histórico (12-18 meses) ya habría quedado atrás' },
            { id: 'c', text: 'Bear market, el halving ya pasó hace tiempo' },
            { id: 'd', text: 'No se puede determinar la fase actual' }
          ],
          correctAnswer: 'b',
          explanation: 'Abril 2024 + 18 meses = octubre de 2025, justo cuando este ciclo marcó su máximo (hasta ahora, cerca de $126,000). Para diciembre de 2025 estarías en la fase final del bull o en el inicio de la corrección, que es lo que efectivamente siguió: a mediados de 2026 BTC opera muy por debajo de ese máximo. Los ciclos hicieron pico 12-18 meses después del halving: no al inicio, sino cerca del final.'
        },
        {
          id: 'q2',
          question: 'Bitcoin Dominance está en 62%. Tu amigo te dice "las altcoins van a explotar, vende todo tu BTC por memecoins". ¿Qué le respondes?',
          options: [
            { id: 'a', text: '¡Tiene razón! Las altcoins siempre hacen más que BTC' },
            { id: 'b', text: 'Con Dom en 62% el capital aún fluye a Bitcoin; la altseason históricamente empezó bajo ~55%. Es temprano para rotar fuerte' },
            { id: 'c', text: 'Las altcoins nunca superan a Bitcoin en ninguna fase del ciclo' },
            { id: 'd', text: 'BTC Dominance no tiene ninguna relación con el rendimiento de las altcoins' }
          ],
          correctAnswer: 'b',
          explanation: 'BTC Dominance alta (>60%) = el capital sigue fluyendo a Bitcoin. Históricamente, altseason comienza cuando Dom cae bajo 55% y se acelera bajo 50%. Rotar antes de tiempo significa perder el rally de BTC sin capturar el de altcoins. Y ojo: en el ciclo 2024-25 la dominancia se mantuvo alta casi todo el tiempo y la altseason amplia nunca llegó; es una heurística histórica, no una garantía.'
        },
        {
          id: 'q3',
          question: 'Tu tía que nunca habló de inversiones te pregunta cómo comprar Dogecoin porque lo vio en TikTok. ¿Qué señal del ciclo es esta?',
          options: [
            { id: 'a', text: 'Señal alcista: el retail está entrando y la subida se va a acelerar con fuerza' },
            { id: 'b', text: 'Señal de techo cercano: cuando entra gente sin experiencia por FOMO, los informados suelen estar vendiendo' },
            { id: 'c', text: 'No significa nada para el mercado' },
            { id: 'd', text: 'Señal de suelo, tu tía siempre compra en el mejor momento' }
          ],
          correctAnswer: 'b',
          explanation: 'El "indicador del taxista/tía" es un clásico del mercado. Cuando personas sin conocimiento financiero quieren comprar crypto porque lo vieron en TikTok, estamos en fase de euforia máxima. Es cuando el dinero inteligente distribuye sus posiciones al retail.'
        },
        {
          id: 'q4',
          question: 'Bitcoin cae 35% en una semana durante un bull market confirmado (estructura alcista en semanal, post-halving). ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo de inmediato: el bear market comenzó y hay que cortar pérdidas' },
            { id: 'b', text: 'Corrección normal dentro de un bull market: evalúo comprar más si tengo liquidez, el contexto sigue alcista' },
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
            { id: 'a', text: 'HODL forever, nunca vender, SOL va a llegar a $1,000 este mismo ciclo' },
            { id: 'b', text: 'Tomar ganancias parciales: sacar la inversión inicial + algo de profit, y dejar el resto con stop en break-even' },
            { id: 'c', text: 'Vender el 100% y esperar el bear market' },
            { id: 'd', text: 'Meter más dinero, está subiendo, va a seguir subiendo' }
          ],
          correctAnswer: 'b',
          explanation: 'Nadie quebró tomando ganancias. Sacar tu inversión inicial + profit te deja jugando con "dinero gratis", cero riesgo de perder capital propio. El resto corre con stop en break-even. Si sube más, perfecto. Si cae, ya protegiste lo tuyo.'
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
    description: 'DYOR (Do Your Own Research) no es un meme, es una habilidad. Aprende a leer la blockchain como los profesionales, usar las herramientas que usan los fondos de inversión, y distinguir proyectos legítimos de estafas usando datos reales.',
    sections: [
      {
        type: 'intro',
        title: 'El Superpoder de las Blockchains Públicas',
        content: 'Imagina que pudieras ver exactamente qué están comprando y vendiendo los fondos de inversión de Wall Street. En los mercados tradicionales, eso es imposible, los grandes jugadores operan en la oscuridad con meses de retraso en reportes. Pero en crypto, **todo queda registrado en la blockchain en tiempo real**. Cada transacción, cada movimiento de capital, cada interacción con un protocolo es pública y verificable. Puedes ver exactamente qué hacen las ballenas, cuánto dinero entra a un protocolo, cuántos usuarios reales tiene, y dónde está la liquidez. Los que dominan el análisis on-chain tienen una ventaja brutal sobre los que solo miran gráficos o siguen influencers en Twitter. Es como jugar póker sabiendo las cartas de todos los demás.',
        highlight: {
          title: 'La Verdad en los Datos',
          text: 'El precio puede mentir (manipulación de mercado). Twitter puede mentir (marketing pagado). Los influencers pueden mentir (promueven lo que les pagan). La blockchain **no borra ni edita**: cada transacción queda registrada para siempre. Pero ojo: las métricas construidas sobre ella (TVL, usuarios activos, volumen) sí pueden inflarse. Por eso en esta lección aprenderás a filtrar.'
        }
      },
      {
        type: 'main',
        title: 'Arsenal de Herramientas On-Chain',
        content: 'Estas son las herramientas que usan los traders profesionales y fondos de inversión para tomar decisiones basadas en datos reales, no en opiniones de Twitter. Dominar aunque sea 2-3 de estas te pone por encima de la gran mayoría de los participantes del mercado:',
        features: [
          { icon: Search, title: 'DefiLlama', text: 'La herramienta número uno para datos DeFi. Muestra TVL (Total Value Locked), fees, revenue, y métricas de cada protocolo en cada blockchain. Gratis y sin necesidad de cuenta. Si un protocolo genera fees crecientes, tiene demanda real de usuarios, no solo hype. Usa los filtros por cadena (Solana, Ethereum) y por categoría (DEXs, Lending, Staking) para encontrar los protocolos con mejores fundamentales.' },
          { icon: Activity, title: 'Dune Analytics', text: 'Plataforma de dashboards con datos on-chain que cualquiera puede crear y compartir. Busca dashboards de proyectos específicos creados por analistas de la comunidad. Por ejemplo: dashboards de Solana DeFi que muestran usuarios activos diarios, volumen real, distribución de holders. La data es tan granular que puedes ver tendencias que ningún gráfico de precios te muestra.' },
          { icon: Users, title: 'Arkham Intelligence', text: 'Rastrea wallets de VCs (venture capital), fondos de inversión, ballenas, y figuras conocidas del ecosistema. Puedes ver exactamente qué están comprando los que manejan millones. Cuando 5 fondos de inversión acumulan el mismo token en silencio, es una señal poderosa. Cuando mueven tokens a exchanges, es señal de que van a vender.' },
          { icon: Clock, title: 'Tokenomist (tokenomist.ai)', text: 'Calendario de desbloqueos de tokens (antes conocido como TokenUnlocks). Los proyectos crypto distribuyen sus tokens gradualmente, cuando un bloque grande se desbloquea (por ejemplo, 15% del supply total), esos tokens entran al mercado y crean presión de venta. Saber cuándo vienen los unlocks grandes te permite anticipar movimientos de precio que la mayoría no ve venir.' }
        ]
      },
      {
        type: 'main',
        title: 'Métricas On-Chain que Importan',
        content: 'Con tantos datos disponibles, es fácil ahogarse en números. El secreto de los buenos analistas on-chain no es mirar todo, es saber qué mirar. Estas son las 4 métricas más importantes que resumen la salud real de un protocolo:',
        features: [
          { icon: Landmark, title: 'TVL (Total Value Locked)', text: 'El dinero total depositado por usuarios en el protocolo. Es la métrica más básica pero más reveladora. TVL subiendo consistentemente = los usuarios confían lo suficiente para depositar capital. TVL cayendo = los usuarios están retirando (pierden confianza o encontraron mejor oportunidad). **Importante**: mide TVL en USD y en la moneda nativa. Si el TVL sube en USD pero baja en tokens depositados, solo está subiendo porque el precio del token subió, no porque haya más usuarios.' },
          { icon: Zap, title: 'Fees / Revenue', text: 'Los fees son dinero REAL que los usuarios pagan por usar el protocolo. Revenue es la parte de esos fees que va al protocolo o a los holders del token. Un protocolo con $10M en fees mensuales tiene demanda real probada, alguien está pagando para usarlo. Compara el ratio Fees/Market Cap entre competidores: un protocolo con menor market cap pero mayores fees está potencialmente infravalorado.' },
          { icon: Users, title: 'Active Wallets (Usuarios Activos)', text: 'El número de wallets únicas interactuando con el protocolo. Más usuarios activos = más actividad orgánica y adopción real. Pero cuidado: esta métrica puede inflarse con bots y Sybil attacks (una persona con muchas wallets). Busca tendencias de crecimiento sostenido, no picos repentinos que huelen a farming.' },
          { icon: TrendingDown, title: 'Exchange Flows (Flujo a Exchanges)', text: 'Cuando grandes cantidades de tokens salen de exchanges hacia wallets privadas (outflow), significa que los holders están acumulando para largo plazo, señal bullish. Cuando grandes cantidades entran a exchanges (inflow), suele significar que se preparan para vender, señal bearish (con excepciones: market making, cambios de custodia). Este indicador ha anticipado correctamente muchas correcciones grandes del mercado.' }
        ]
      },
      {
        type: 'main',
        title: 'El Framework DYOR: 5 Pasos para Evaluar Cualquier Proyecto',
        content: 'Cuando encuentres un proyecto nuevo que te llame la atención, sigue estos 5 pasos antes de invertir un solo peso. Este framework te protege de la gran mayoría de las estafas y proyectos basura:',
        features: [
          { icon: Search, title: 'Paso 1: ¿Tiene Producto Real?', text: '¿El protocolo funciona hoy o es solo un whitepaper con promesas? Si es un protocolo DeFi, ve a DefiLlama y busca si tiene TVL, fees, y usuarios. Un proyecto con producto funcionando y usuarios pagando es fundamentalmente diferente de uno que solo tiene un token y un roadmap bonito. La mayoría de los proyectos que pierden el 99% de valor nunca tuvieron un producto real.' },
          { icon: BarChart3, title: 'Paso 2: ¿Las Métricas Crecen?', text: '¿El TVL, los fees, y los usuarios activos están en tendencia alcista o bajista? Un proyecto puede tener producto pero estar muriendo lentamente. Busca growth rate mes a mes. Un protocolo con TVL creciendo 20% mensual y fees creciendo 30% mensual está ganando tracción real. Uno con métricas planas o cayendo está perdiendo relevancia.' },
          { icon: Eye, title: 'Paso 3: ¿Quién Está Detrás?', text: 'Usa Arkham para ver qué wallets institucionales interactúan con el protocolo. ¿Los fundadores tienen historial? ¿Los VCs que invirtieron son reputados (a16z, Multicoin, Polychain) o desconocidos? Un equipo anónimo no es necesariamente malo (Bitcoin fue anónimo), pero combinado con tokenomics agresivos y promesas exageradas, es una red flag enorme.' },
          { icon: Clock, title: 'Paso 4: ¿Cómo es el Tokenomics?', text: 'Revisa en Tokenomist: ¿qué porcentaje del supply ya está en circulación? ¿Cuándo se desbloquean los tokens de inversores y equipo? Un token con solo 10% del supply circulando y un cliff unlock del 30% en 3 meses es una bomba de tiempo. Idealmente quieres >50% circulando y un schedule de vesting gradual a 2-4 años.' },
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
          { icon: AlertTriangle, title: 'Confundir TVL Incentivado con Orgánico', text: 'Muchos protocolos inflan su TVL regalando tokens a los que depositan (liquidity mining). El TVL puede ser de $500M pero el 90% está ahí solo por las recompensas. Cuando los incentivos terminan, el TVL desaparece. Busca protocolos donde el TVL se mantiene DESPUÉS de que los incentivos se reducen, eso es demanda orgánica real.' },
          { icon: AlertTriangle, title: 'Ignorar el Contexto del Mercado', text: 'En un bull market, TODAS las métricas se ven bien. TVL sube, usuarios suben, fees suben, porque todo el mercado está en euforia. La verdadera prueba de un protocolo es cómo se comporta en un bear market. ¿Mantiene usuarios cuando el mercado cae 50%? ¿Sigue generando fees? Los protocolos que sobreviven el bear son los que dominan el siguiente bull.' },
          { icon: AlertTriangle, title: 'Confiar Solo en una Métrica', text: 'TVL alto pero sin fees = capital mercenario buscando yield. Fees altos pero TVL bajo = producto útil pero pequeño. Usuarios altos pero fees bajos = bots o actividad no monetizable. Necesitas el CONJUNTO de métricas pintando una imagen coherente. Si solo una métrica se ve bien y las demás no, probablemente hay algo que no estás viendo.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Investigación On-Chain',
        items: [
          'La blockchain es pública y transparente. A diferencia de los mercados tradicionales, puedes ver exactamente qué hacen las ballenas, los fondos, y los insiders. Dominar el análisis on-chain te da una ventaja real sobre la gran mayoría del mercado que solo mira gráficos.',
          'Las 4 métricas fundamentales: TVL (capital depositado), Fees/Revenue (demanda real), Active Wallets (usuarios orgánicos), y Exchange Flows (dirección del capital). Si entiendes estas 4, puedes evaluar cualquier protocolo.',
          'El framework DYOR de 5 pasos: (1) ¿Tiene producto real? (2) ¿Las métricas crecen? (3) ¿Quién está detrás? (4) ¿Cómo es el tokenomics? (5) ¿Dónde están las red flags? Seguirlo te protege de la gran mayoría de las estafas.',
          'Divergencia entre precio y datos on-chain = oportunidad o peligro. Precio baja + TVL sube = acumulación (bullish). Precio sube + TVL baja = distribución (bearish). Los datos on-chain anticipan lo que el precio mostrará después.',
          'Cuidado con las métricas infladas: TVL incentivado desaparece cuando terminan las recompensas, usuarios activos pueden ser bots, y en bull markets todo se ve bien artificialmente. Busca demanda orgánica que sobreviva al bear market.',
          'Herramientas esenciales: DefiLlama (métricas DeFi), Dune Analytics (dashboards on-chain), Arkham Intelligence (rastreo de wallets), Tokenomist (calendario de desbloqueos, antes TokenUnlocks). Dominar 2-3 de estas te pone por encima de la mayoría.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Encontraste un token nuevo en DefiLlama. Genera $2M en fees mensuales con solo $50M de market cap. ¿Qué significa esto?',
          options: [
            { id: 'a', text: 'Está sobrevalorado porque los fees son demasiado altos para su tamaño' },
            { id: 'b', text: 'Posiblemente infravalorado: $24M anuales en ingresos reales con valoración baja. Compara con competidores' },
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
            { id: 'a', text: 'Compro el dip antes de que suban, los VCs saben lo que hacen' },
            { id: 'b', text: 'Alerta: mover tokens a exchanges casi siempre precede una venta. Reduzco exposición o ajusto mi stop' },
            { id: 'c', text: 'Es información irrelevante, los VCs mueven sus tokens por muchísimas razones' },
            { id: 'd', text: 'Espero a que caiga el precio y compro el dip' }
          ],
          correctAnswer: 'b',
          explanation: 'Mover tokens desde wallets privadas a exchanges casi siempre precede una venta, aunque hay excepciones (acuerdos de market making, cambios de custodia). Los VCs tienen acceso a información privilegiada y relaciones con los equipos. Cuando múltiples VCs hacen el mismo movimiento simultáneamente, la lectura de venta gana mucho peso. Actúa antes de que el precio refleje la venta.'
        },
        {
          id: 'q3',
          question: 'Tokenomist muestra que en 2 semanas se desbloquea el 15% del supply total de un token. El precio ha subido 40% este mes. ¿Cómo interpretas esto?',
          options: [
            { id: 'a', text: 'Perfecto timing para comprar más, el momentum es claramente alcista' },
            { id: 'b', text: 'Señal de peligro: una subida antes de un unlock grande suele terminar como liquidez de salida. Post-unlock suele corregir' },
            { id: 'c', text: 'Los unlocks no afectan el precio del token' },
            { id: 'd', text: 'El precio subirá más porque los nuevos tokens crean más demanda' }
          ],
          correctAnswer: 'b',
          explanation: 'Los estudios muestran que el precio suele DEBILITARSE en la antesala de unlocks grandes, porque el mercado se adelanta a la dilución. Cuando en cambio sube, la subida suele servir para que los insiders (equipo, VCs) vendan sus tokens recién desbloqueados a mejor precio, con el retail como liquidez de salida. En ambos escenarios, comprar justo antes de un unlock del 15% del supply es mala idea.'
        },
        {
          id: 'q4',
          question: 'Un nuevo DEX en Solana tiene $500M en TVL, pero en Dune ves que solo 200 wallets generan el 95% del volumen de trading. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'Los usuarios están muy comprometidos con el protocolo' },
            { id: 'b', text: 'Wash trading o farming de puntos: las métricas están artificialmente infladas' },
            { id: 'c', text: 'Es normal en DeFi que unas pocas wallets generen la mayoría del volumen total' },
            { id: 'd', text: 'El protocolo es exclusivo para ballenas, lo cual es buena señal' }
          ],
          correctAnswer: 'b',
          explanation: 'Concentración extrema de actividad en pocas wallets es una señal clara de wash trading (volumen falso) o farming de puntos/incentivos por bots. Un protocolo saludable tiene miles de usuarios activos con una distribución más diversa. Cuando los incentivos terminen o se lance el token, esas 200 wallets desaparecen junto con el TVL y el volumen.'
        },
        {
          id: 'q5',
          question: 'El precio de un token cae 30% en una semana, pero en DefiLlama ves que el TVL sube 20% en el mismo período. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'El proyecto está muriendo y los datos de TVL son claramente falsos' },
            { id: 'b', text: 'Divergencia bullish: alguien con convicción está acumulando mientras el retail vende' },
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
            { id: 'a', text: 'Excelente, $300M en TVL demuestra que el protocolo es exitoso y confiable' },
            { id: 'b', text: 'El TVL real es ~$60M (el 20% orgánico); el 80% incentivado se irá cuando terminen las recompensas' },
            { id: 'c', text: 'Los incentivos son irrelevantes, el TVL es TVL' },
            { id: 'd', text: 'Es bearish porque están regalando tokens' }
          ],
          correctAnswer: 'b',
          explanation: 'El TVL incentivado es "capital mercenario", está ahí solo por las recompensas y se irá cuando terminen. La métrica real es el TVL orgánico que queda sin incentivos. Un protocolo con $60M de TVL orgánico que crece es más valioso que uno con $300M inflados por incentivos temporales. Históricamente, el 60-90% del TVL incentivado desaparece cuando terminan los programas de rewards.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 3,
        title: 'Checkpoint: La Primera Herramienta',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Descubres un protocolo nuevo en Twitter y quieres evaluarlo seriamente. ¿Cuál es la PRIMERA herramienta que abres y por qué?',
            options: [
              'Twitter/X, para ver qué dice la comunidad sobre el proyecto',
              'DefiLlama: ahí veo si el protocolo tiene TVL real, fees reales y usuarios reales en tiempo real. Todo lo demás es opinión; esto son datos',
              'El sitio web del protocolo, para leer el whitepaper',
              'Dune, para buscar análisis on-chain sofisticados'
            ],
            correctAnswer: 1,
            explanation: 'Para protocolos DeFi, siempre empiezas por DefiLlama. Si el protocolo no aparece ahí con TVL y fees, es porque no tiene producto real, es solo un token y un roadmap bonito. La gran mayoría de los proyectos que pierden todo nunca pasó esta prueba. Para proyectos que no son DeFi (infraestructura, gaming) necesitarás otras fuentes, pero el principio es el mismo: datos antes que opiniones. Dune y análisis on-chain son herramientas 2 y 3.',
            hint: 'Piensa en qué fuente te da datos crudos antes que opiniones.'
          }
        ]
      }
    ]
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
        content: 'En los mercados tradicionales, el valor se mide en ingresos, clientes y flujo de caja. En crypto, hay una fuerza adicional que mueve billones de dólares: **la atención**. Cuando millones de personas empiezan a hablar de inteligencia artificial y crypto, los tokens de AI suben 500%. Cuando los NFTs son el tema del momento, todo lo relacionado explota. Cuando los memecoins capturan la imaginación de los traders, hacen 100× en días. No es irracional, es cómo funciona un mercado donde gran parte de los participantes son traders de corto plazo buscando la próxima gran oportunidad. La atención colectiva crea flujo de capital. El flujo de capital mueve precios. Los precios atraen más atención. Es un ciclo que se retroalimenta hasta que se agota. Tu trabajo como trader intermedio es **identificar estas narrativas temprano, surfearlas, y salir antes de que la música pare**.',
        highlight: {
          title: 'La Regla de las Narrativas',
          text: 'Si estás leyendo sobre una narrativa en los medios mainstream (CNBC, periódicos), ya llegas tarde. Las narrativas se gestan en Crypto Twitter semanas o meses antes. Cuando llegan al mainstream, los que entraron temprano ya están vendiendo.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es una Narrativa en Crypto?',
        content: 'Una narrativa es un **tema o historia** que captura la imaginación y el capital del mercado. No es solo un sector (como "DeFi" o "Gaming"), es la HISTORIA que el mercado se cuenta a sí mismo sobre por qué algo va a subir:',
        features: [
          { icon: Zap, title: 'Narrativa vs Sector', text: '"DeFi" es un sector. "DeFi va a reemplazar los bancos y democratizar las finanzas" es una narrativa. La narrativa tiene emoción, urgencia, y una visión del futuro. Las personas no compran tokens, compran historias. Y las historias que más dinero mueven son las que prometen un futuro transformador.' },
          { icon: Activity, title: 'El Motor de la Narrativa', text: 'Toda narrativa se alimenta de: (1) un evento catalizador (ChatGPT lanza → tokens AI explotan), (2) adopción temprana por traders influyentes, (3) resultados que validan la historia (tokens suben = "ves, tenía razón"), (4) FOMO masivo que amplifica todo.' },
          { icon: Clock, title: 'Las Narrativas son Temporales', text: 'Ninguna narrativa dura para siempre. Los ICOs dominaron 2017. DeFi Summer fue 2020. Los NFTs explotaron 2021. Memecoins y AI dominaron 2024-2025 (los memecoins hicieron pico en enero de 2025 y se desplomaron tras el caso LIBRA). Cada narrativa tiene su momento, y después muere o se transforma. Casarte con una narrativa pasada es la receta para perder dinero.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Narrativas que Definieron Cada Ciclo',
        content: 'Mirar hacia atrás revela un patrón claro: cada ciclo tiene sus narrativas dominantes, y los tokens que más suben son los que mejor capturan esa narrativa. Los que compraron ICOs en 2016, DeFi en 2020 o SOL en el bear de 2022 hicieron fortunas:',
        features: [
          { icon: BarChart3, title: '2017: ICOs (Initial Coin Offerings)', text: 'La narrativa: "Cualquiera puede crear un token y levantar millones sin bancos ni reguladores". Ethereum fue la plataforma. Miles de proyectos (casi todos basura) levantaron millones con un whitepaper. Los que filtraron el puñado bueno hicieron fortunas. Los que compraron el hype perdieron todo.' },
          { icon: BarChart3, title: '2020: DeFi Summer', text: 'La narrativa: "Puedes ser tu propio banco. Préstamos, swaps, yield farming sin intermediarios". Uniswap, Aave, Compound explotaron. Los que entendieron DeFi temprano multiplicaron 50-100×. TVL pasó de $1B a $100B en meses.' },
          { icon: BarChart3, title: '2021: NFTs y Metaverso', text: 'La narrativa: "La propiedad digital es el futuro. Arte, gaming, identidad, todo será NFT". Bored Apes, CryptoPunks, Axie Infinity. Algunos JPEGs se vendieron por millones. Cuando la narrativa se agotó, la gran mayoría de los NFTs perdió casi todo su valor.' },
          { icon: BarChart3, title: '2024-2025: AI + Memecoins + Solana', text: 'Narrativas múltiples: "La IA va a transformar crypto" (agentes autónomos, AI tokens). "Los memecoins son la nueva forma de expresión cultural" (BONK, WIF, PEPE). "Solana es la cadena ganadora" (velocidad, bajo costo, DeFi). La fiesta memecoin hizo pico en enero de 2025 con el token TRUMP y colapsó tras el caso LIBRA en febrero de 2025; a mediados de 2026 sigue muy por debajo de ese pico. Los que entraron temprano Y salieron a tiempo capturaron retornos masivos; los que llegaron tarde fueron la liquidez de salida.' }
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
        ],
        highlight: {
          title: 'El Caso LIBRA: Cuando la Narrativa es la Trampa',
          text: 'Febrero de 2025: el presidente de Argentina, Javier Milei, publicó un tuit promocionando LIBRA, un token que prometía financiar pymes argentinas. El precio se disparó en minutos y colapsó más de 90% en horas: los insiders retiraron la liquidez y las pérdidas superaron los $250 millones, muchas en LATAM. La lección quedó grabada: ni el aval de un presidente valida un token. Verifica liquidez, distribución y unlocks antes que cualquier historia.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Identificar la Próxima Narrativa Antes que Todos',
        content: 'No necesitas bola de cristal. Necesitas las fuentes correctas y un framework de evaluación:',
        features: [
          { icon: Search, title: 'Fuentes de Información', text: '**Crypto Twitter (X)**: Sigue a 20-30 cuentas de traders/analistas respetados. Cuando 5+ de ellos empiezan a hablar del mismo tema, presta atención. **Dune Analytics**: Busca dashboards de nuevos sectores con métricas crecientes. **DefiLlama**: Filtrar por sectores con TVL creciente que nadie cubre todavía.' },
          { icon: Eye, title: 'Las 3 Preguntas Filtro', text: '(1) ¿Hay un catalizador real? (evento tecnológico, regulatorio, o cultural que impulse la narrativa). (2) ¿Los tokens del sector tienen room to grow? (market caps bajos vs el potencial). (3) ¿La narrativa tiene "legs"? (¿puede durar meses, o es un meme de un día?).' },
          { icon: AlertTriangle, title: 'Red Flags de Narrativas Falsas', text: 'Narrativa creada artificialmente por insiders (grupos de Telegram que coordinan pumps). Sin catalizador real, solo hype en redes. Los tokens suben 1000% en horas sin volumen orgánico. Si suena demasiado bueno y aparece demasiado rápido, probablemente sea una trampa.' }
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
            'Sin catalizador claro, solo "alguien lo dijo en Twitter"',
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
          { icon: RefreshCw, title: 'El Flujo de Rotación', text: 'El guion clásico de los ciclos pasados: **Stablecoins → BTC → ETH → Large Cap Alts → Mid Cap Alts → Small Caps → Memecoins → (crash) → Stablecoins**. Pero trátalo como heurística histórica, no como ley: el ciclo 2024-25 lo rompió en gran parte (la dominancia de BTC se mantuvo alta y la altseason amplia nunca llegó). Úsalo como mapa de referencia sabiendo que puede fallar.' },
          { icon: Target, title: 'Cuándo Rotar', text: 'Rota cuando tu sector actual **pierde momentum** (las subidas son más pequeñas, el volumen cae) y otro sector **gana momentum** (volumen creciente, nuevos máximos). No esperes a que tu sector muera, rota cuando todavía está bien pero otro está mejor.' },
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
          'La rotación de capital ha seguido históricamente un patrón: Stablecoins → BTC → ETH → Large Caps → Mid/Small Caps → Memecoins. El ciclo 2024-25 rompió parte de ese guion: úsalo como referencia, no como garantía.',
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
            { id: 'a', text: 'Compro todo lo que pueda: dice "AI" en el nombre y la narrativa está caliente, va a subir' },
            { id: 'b', text: 'Aplico el filtro de 3 preguntas: ¿catalizador real? ¿room to grow? ¿tiene legs? Si pasa, entro solo con tamaño especulativo' },
            { id: 'c', text: 'AI es una moda, ignoro todo lo relacionado' },
            { id: 'd', text: 'Espero a que suba 10× para confirmar antes de entrar' }
          ],
          correctAnswer: 'b',
          explanation: 'Las narrativas calientes producen ganadores reales, pero también mucho vapor. El filtro de 3 preguntas separa oportunidades legítimas de trampas: catalizador real (sí, AI es real), room to grow (market cap bajo = sí), y durabilidad de la narrativa. Eso sí: un token de $5M de market cap tiene riesgo extremo de rug pull y de liquidez (LIBRA lo demostró). Si entras, hazlo con tamaño especulativo, 0.5-1% del portafolio como verás en la próxima lección, nunca más.'
        },
        {
          id: 'q2',
          question: '¿En qué etapa de la narrativa obtienes el mejor risk/reward?',
          options: [
            { id: 'a', text: 'Mainstream, cuando todos hablan de ella es más seguro comprar sin miedo' },
            { id: 'b', text: 'Crecimiento (etapa 2): Crypto Twitter ya la adoptó, hay validación, y aún no llegó al mainstream' },
            { id: 'c', text: 'Nacimiento, siempre hay que ser el primero' },
            { id: 'd', text: 'Agotamiento, los precios están bajos y pueden rebotar' }
          ],
          correctAnswer: 'b',
          explanation: 'El nacimiento tiene máximo upside pero riesgo extremo (puede no funcionar). El mainstream ya capturó la mayoría del movimiento. La etapa 2 (Crecimiento) ofrece el mejor balance: suficiente validación + upside masivo todavía disponible.'
        },
        {
          id: 'q3',
          question: '¿Cuál fue una de las narrativas dominantes del ciclo 2024-2025, y cómo terminó?',
          options: [
            { id: 'a', text: 'Metaverso: la gente quiere vivir en mundos virtuales y pagó por ello' },
            { id: 'b', text: 'Memecoins + atención retail, sobre todo en Solana: dominaron hasta enero de 2025 y colapsaron tras el caso LIBRA' },
            { id: 'c', text: 'ICOs, que volvieron con la misma fuerza que en 2017' },
            { id: 'd', text: 'Mining: el minado de Bitcoin fue la narrativa más caliente del ciclo' }
          ],
          correctAnswer: 'b',
          explanation: 'Los memecoins (BONK, WIF, y miles más) capturaron la atención y el capital retail de forma masiva en 2024, con Solana como cadena preferida por su velocidad y bajo costo. La narrativa hizo pico en enero de 2025 con el token TRUMP y se desplomó tras el colapso de LIBRA en febrero de 2025; a mediados de 2026 sigue lejos de ese pico. El metaverso y las ICOs quedaron en ciclos pasados.'
        },
        {
          id: 'q4',
          question: 'Tu portafolio está concentrado en tokens DeFi. El sector DeFi dejó de hacer nuevos máximos, el volumen baja, pero los tokens de AI están explotando con volumen creciente. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Me quedo 100% en DeFi, es mi sector favorito y confío en su regreso' },
            { id: 'b', text: 'Roto gradualmente: vendo parte de DeFi que perdió momentum y construyo posiciones selectas en AI' },
            { id: 'c', text: 'Vendo todo inmediatamente y compro 100% AI' },
            { id: 'd', text: 'Compro más DeFi, está "barato" comparado con AI' }
          ],
          correctAnswer: 'b',
          explanation: 'Rotación inteligente: cuando tu sector pierde momentum (subidas menores, volumen cayendo) y otro gana momentum (nuevos máximos, volumen creciente), es momento de rotar. Hazlo gradualmente, no todo de golpe, y solo a proyectos que hayas investigado.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la señal más temprana de que una nueva narrativa está naciendo?',
          options: [
            { id: 'a', text: 'Aparece en CNBC y Bloomberg' },
            { id: 'b', text: 'Tu amigo que no sabe de crypto te pregunta' },
            { id: 'c', text: 'Varios traders respetados de CT hablan del mismo tema, con micro caps y métricas on-chain creciendo' },
            { id: 'd', text: 'Un influencer grande de YouTube publica un video promocionando la narrativa' }
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
    description: 'Construye un portafolio que sobreviva a cualquier crash y capture los mejores retornos del ciclo. La estrategia núcleo-satélite combina seguridad, oportunismo y liquidez para maximizar tu ventaja.',
    sections: [
      {
        type: 'intro',
        title: 'El Seguro Contra tu Propia Ignorancia',
        content: 'Warren Buffett dijo: "La diversificación es protección contra la ignorancia. Tiene poco sentido para quien sabe lo que hace". La segunda mitad casi nunca se cita, pero en crypto refuerza la primera: aquí nadie sabe todo lo que necesitaría saber. En un mercado donde TODO puede pasar, un hack, un colapso regulatorio, un CEO que resulta ser un fraude, esa protección es 10× más relevante. El trader que pone el 100% de su capital en un solo token está jugando a la ruleta rusa con su patrimonio. No importa cuánta investigación hagas, siempre hay cosas que NO puedes saber. Luna era un "blue chip" con $40B de market cap antes de ir a cero en una semana. FTX era el exchange "más seguro" hasta que colapsó. La diversificación no es para personas inseguras, es para personas inteligentes que entienden que **no pueden predecir todo**. La pregunta no es SI habrá una sorpresa negativa, sino CUÁNDO. Y cuando llegue, la diversificación es la diferencia entre una mala semana y la ruina total.',
        highlight: {
          title: 'La Regla Fundamental',
          text: 'Nunca pongas en una sola posición más de lo que puedes perder sin que afecte tu sueño. Si perder esa inversión te quita el sueño, tu posición es demasiado grande.'
        }
      },
      {
        type: 'main',
        title: 'La Barbell Strategy Crypto: El Framework del 60/30/10',
        content: 'Este framework es, en esencia, la clásica estrategia núcleo-satélite: una base sólida, apuestas asimétricas pequeñas y liquidez. En redes la llaman "Barbell", aunque la barbell original de Nassim Taleb es más extrema (activos ultraseguros más apuestas salvajes, nada intermedio). Importante: estos porcentajes son la distribución DENTRO de tu asignación cripto, que a su vez debería ser solo dinero que puedes permitirte perder. En crypto, se traduce en tres bloques:',
        features: [
          { icon: Shield, title: '60%, Core (Base Segura)', text: 'BTC, ETH, SOL, los activos que sobreviven a cualquier bear market. Estos no van a hacer 100× pero tampoco van a cero. En el bull hacen 3-8×, en el bear caen pero se recuperan. **Este bloque protege tu capital.** Si todo lo demás falla, tu core te mantiene en el juego.' },
          { icon: Zap, title: '30%, Satélites (Apuestas Asimétricas)', text: 'Tokens de narrativas fuertes, mid caps con potencial alto y riesgo alto. Aquí es donde buscas los retornos extraordinarios. Divídelo en 5-8 posiciones para no depender de una sola. **Si alguna multiplica varias veces, compensa las que fallen.**' },
          { icon: PiggyBank, title: '10%, Liquidez (USDC/Stablecoins)', text: 'Cash es una posición. Tener 10-20% en stablecoins te da el poder de comprar cuando el mercado está en pánico. Las mejores oportunidades aparecen cuando todos venden. Sin liquidez, solo puedes ver cómo otros compran barato mientras tú ya estás 100% invertido.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Core: La Base Inquebrantable',
        content: 'El bloque core (60%) debería estar en activos que cumplan UNA condición: que **muy probablemente existan y valgan más en el próximo ciclo**. Esto limita tu universo a un puñado de proyectos:',
        features: [
          { icon: Lock, title: 'Bitcoin (BTC)', text: 'El rey. Más de 16 años de historia. Máxima descentralización. Efecto Lindy (cuanto más tiempo sobrevive, más probable que siga). ETFs institucionales. Es el "oro digital" y la base de cualquier portafolio crypto serio. **25-40% de tu portafolio total debería ser BTC.**' },
          { icon: Network, title: 'Ethereum (ETH)', text: 'La plataforma de smart contracts más grande. El ecosistema DeFi y NFT más maduro. EIP-1559 quema parte de las fees: desde 2024, con fees bajas post-Dencun, ETH ha sido levemente inflacionario (~0.2-0.8% anual) y puede ser deflacionario en picos de actividad. Transición a PoS completada. **10-20% del portafolio total.**' },
          { icon: Zap, title: 'Solana (SOL)', text: 'La cadena de mayor crecimiento en adopción real: transacciones por segundo, DeFi TVL, volumen de DEX. Ecosistema vibrante (Jupiter, Raydium, Marinade). **10-20% del portafolio total.** Mayor riesgo que BTC/ETH pero mayor potencial de crecimiento.' }
        ]
      },
      {
        type: 'main',
        title: 'Tus Apuestas Asimétricas: Donde se Hacen las Fortunas',
        content: 'El bloque satélite (30%) es donde buscas retornos extraordinarios. La clave es que no necesitas que TODAS funcionen, **con que una o dos hagan 10-20×, cubren todas las demás que fallen**:',
        features: [
          { icon: Search, title: 'Cómo Seleccionar', text: 'Busca tokens que: (1) estén en la narrativa dominante del momento, (2) tengan producto funcionando con usuarios reales, (3) tengan market cap bajo relativo a su sector, (4) tengan tokenomics sólidos. **No más de 5-8 posiciones** en este bloque.' },
          { icon: Percent, title: 'Sizing: No Todas Iguales', text: 'No pongas el mismo monto en cada apuesta. Tu convicción alta (3-5% del portafolio cada una). Tu convicción media (1-2% cada una). Apuestas especulativas (0.5-1% cada una). Así, tus mejores ideas tienen más capital sin arriesgar la ruina.' },
          { icon: AlertTriangle, title: 'La Regla del Moonbag', text: 'Si una posición satélite hace 5-10×, saca tu inversión original + algo de ganancia y deja el resto como "moonbag" (dinero gratis). Así eliminaste el riesgo y mantienes exposición al upside ilimitado.' }
        ]
      },
      {
        type: 'main',
        title: 'Correlación: El Enemigo Invisible',
        content: 'Aquí está el error que la mayoría comete: creer que tener 10 altcoins diferentes es "diversificación". **No lo es.** En crypto, cuando Bitcoin cae, el 95% de las altcoins caen igual o más fuerte. Esto se llama **correlación alta**, y destruye la ilusión de diversificación.',
        features: [
          { icon: AlertTriangle, title: '10 Altcoins ≠ Diversificación', text: 'Si tienes SOL, AVAX, POL, ARB, OP, JUP, RENDER, INJ, TIA, y PYTH, tienes 10 tokens que se mueven en la MISMA dirección. Cuando BTC cae 20%, todas caen 30-50%. No estás diversificado, estás concentrado en "altcoins" como clase de activo.' },
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
            'Retornos realistas del ciclo: 2-5× desde mínimos del bear, menos si entras a mitad de ciclo',
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
          'La estrategia núcleo-satélite 60/30/10 combina seguridad (core BTC/ETH/SOL), oportunismo (apuestas asimétricas en narrativas) y liquidez (stablecoins para oportunidades de pánico). Y aplica solo al dinero que puedes permitirte perder.',
          'Tu core (60%) protege tu capital. Tus satélites (30%) buscan retornos extraordinarios. Tu liquidez (10%) te da poder cuando todos venden.',
          'Correlación es el enemigo invisible: 10 altcoins diferentes NO son diversificación real. Diversifica por clase de activo (BTC + alts + stables) y por sector dentro de altcoins.',
          'No más de 8-12 posiciones totales. Más = imposible seguir, investigar y gestionar efectivamente. Menos = concentración excesiva.',
          'Tener stablecoins NO es cobardía, es estrategia. Las mejores oportunidades de compra aparecen durante crashes, y solo puedes aprovecharlas si tienes liquidez disponible.',
          'Rebalancea mensual o trimestralmente, o cuando una posición haga 5×+. Toma ganancias parciales de las ganadoras y refuerza tu core. La disciplina de rebalanceo es lo que protege tus ganancias a largo plazo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes $10,000 USD para invertir en crypto. ¿Cuál es la asignación más inteligente según la estrategia núcleo-satélite?',
          options: [
            { id: 'a', text: '100% en la memecoin del momento, puede hacer 100× si aciertas' },
            { id: 'b', text: '60% BTC/ETH/SOL, 30% narrativas fuertes, 10% USDC: base + apuestas + liquidez' },
            { id: 'c', text: '50% BTC, 50% USDC, lo más seguro posible' },
            { id: 'd', text: '100% distribuido en 30 altcoins diferentes para "máxima diversificación"' }
          ],
          correctAnswer: 'b',
          explanation: '60/30/10 es el balance óptimo: el core protege tu capital (BTC/ETH/SOL no van a cero), los satélites buscan retornos extraordinarios sabiendo que varios fallarán, y la liquidez en USDC te permite comprar cuando todos venden en pánico.'
        },
        {
          id: 'q2',
          question: 'Tienes 10 altcoins diferentes en tu portafolio. Bitcoin cae 20%. ¿Qué pasa probablemente con tus 10 altcoins?',
          options: [
            { id: 'a', text: 'Suben, porque están diversificadas y no correlacionadas con Bitcoin' },
            { id: 'b', text: 'Se mantienen estables, al final son diez proyectos diferentes' },
            { id: 'c', text: 'Caen 30-50%: las altcoins tienen correlación alta con Bitcoin y caen más fuerte' },
            { id: 'd', text: 'Algunas suben y otras bajan, resultado neutro' }
          ],
          correctAnswer: 'c',
          explanation: 'En crypto, la correlación entre altcoins y Bitcoin es altísima. Cuando BTC cae 20%, las altcoins típicamente caen 30-50%. Tener 10 altcoins diferentes NO es diversificación real, es concentración en "altcoins" como clase de activo.'
        },
        {
          id: 'q3',
          question: '¿Por qué mantener 10-20% de tu portafolio en USDC es una estrategia inteligente y no cobardía?',
          options: [
            { id: 'a', text: 'Porque USDC genera intereses' },
            { id: 'b', text: 'Porque el mercado siempre baja' },
            { id: 'c', text: 'Porque la liquidez te permite comprar en pánicos (crashes de 30-50%), cuando aparecen las mejores oportunidades' },
            { id: 'd', text: 'No es inteligente: tener cash en un bull market es perder dinero seguro' }
          ],
          correctAnswer: 'c',
          explanation: 'Cash is a position. Las mejores oportunidades de compra aparecen durante crashes, cuando los precios caen 30-50% en días. Si estás 100% invertido, solo puedes ver esas oportunidades sin poder actuar. La liquidez es opcionalidad pura.'
        },
        {
          id: 'q4',
          question: '¿Cuántas posiciones deberías tener como máximo en tu portafolio crypto?',
          options: [
            { id: 'a', text: '50+ posiciones para lograr la máxima diversificación posible' },
            { id: 'b', text: '1-2 para máxima concentración y convicción total' },
            { id: 'c', text: '8-12 máximo: suficientes para diversificar, pocas para investigar y seguir cada una' },
            { id: 'd', text: 'No existe un número óptimo' }
          ],
          correctAnswer: 'c',
          explanation: 'Con 50+ posiciones es imposible investigar, seguir noticias y gestionar cada una. Con 1-2 el riesgo de ruina es enorme. 8-12 es el sweet spot: diversificación suficiente para sobrevivir a sorpresas negativas, concentración suficiente para que las ganadoras impacten tu portafolio.'
        },
        {
          id: 'q5',
          question: 'Una de tus posiciones satélite hizo 10×. ¿Cuál es la mejor acción?',
          options: [
            { id: 'a', text: 'HODL, va a seguir subiendo, no vendo nada' },
            { id: 'b', text: 'Vendo el 100%, ya gané suficiente' },
            { id: 'c', text: 'Tomo parciales: saco mi inversión original más algo de profit y dejo el resto como moonbag' },
            { id: 'd', text: 'Meto más dinero: si ya hizo 10×, con la misma fuerza puede hacer 100×' }
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
        content: 'Imagina un trader que en 2022 invirtió $50,000 (los ahorros de toda su vida) en LUNA a $80. "Es un blue chip, no necesito stop loss", se dijo. Una semana después, LUNA estaba a $0.0001. Perdió el 99.999% de su capital. Ese dinero ya no existe. ¿Cuánto le habría costado un stop loss? Si hubiera puesto un stop en $60 (-25%), habría perdido $12,500. Doloroso, pero recuperable. Sin stop, perdió TODO. Un **stop loss** no es una pérdida, es el **costo de hacer negocios**. Es tu seguro de vida financiero. Los profesionales pierden operaciones constantemente, pero sobreviven porque sus pérdidas son pequeñas y controladas. Los amateurs ganan muchas operaciones pequeñas y luego pierden todo en UNA sola sin stop.',
        highlight: {
          title: 'La Regla Inquebrantable',
          text: 'Define tu stop loss ANTES de entrar a cualquier posición. Es no-negociable. Si no sabes dónde está tu stop, no deberías estar en esa operación. Mover el stop hacia abajo para "darle más espacio" es la forma más segura de arruinarte.'
        }
      },
      {
        type: 'main',
        title: 'La Matemática de la Ruina: Por Qué las Pérdidas Duelen Más',
        content: 'Existe una asimetría matemática cruel que la mayoría de traders ignoran: **las pérdidas requieren ganancias desproporcionadas para recuperarse.** Esto no es opinión, es matemáticas:',
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
          { icon: Percent, title: 'Stop Porcentual', text: 'Distancia fija del precio de entrada: -5%, -8%, -10%. Más simple pero menos preciso, no considera la estructura del gráfico. Útil como respaldo si no dominas el análisis técnico. **Nunca uses más de -10% como stop en una posición individual.**' },
          { icon: Activity, title: 'Trailing Stop (Stop Dinámico)', text: 'Se mueve con el precio a tu favor. Si pones un trailing de 10% y el precio sube de $100 a $150, tu stop sube automáticamente a $135. Si el precio cae 10% desde cualquier máximo, se ejecuta. **Excelente para capturar tendencias largas sin salir demasiado temprano.**' },
          { icon: Brain, title: 'Stop Mental (Peligroso)', text: '"Vendo si baja a $X." Sin orden puesta en el exchange. El problema: cuando el precio llega a tu "stop mental", las emociones gritan "va a rebotar" y no vendes. Luego cae más. Y más. **Los stops mentales NO funcionan.** Usa órdenes reales.' },
          { icon: AlertTriangle, title: 'Stop-Market vs Stop-Limit: La Letra Pequeña', text: 'Un **stop-market** vende al mejor precio disponible cuando se activa: garantiza salir, no el precio (en mechas rápidas habrá slippage). Un **stop-limit** solo ejecuta a tu precio límite o mejor: en un crash tipo LUNA puede no ejecutarse nunca y dejarte atrapado. Y una realidad clave: los DEXs spot como Jupiter (la próxima lección) no tienen stop loss nativo; los exchanges centralizados sí. Si tu posición vive en un DEX, tu plan de salida es manual o con órdenes límite.' }
        ]
      },
      {
        type: 'main',
        title: 'Dónde Colocar tu Stop Loss',
        content: 'El stop perfecto está en el punto donde tu tesis se invalida, pero lo suficientemente lejos para no ser activado por el ruido normal del mercado:',
        features: [
          { icon: Crosshair, title: 'Debajo del Soporte + Filtro', text: 'Si compras en soporte en $150, tu stop NO va en $150 ni en $149. Los stops apilados en niveles obvios actúan como imanes de liquidez y el precio suele buscarlos. Tu stop va en $145-146 (debajo del mínimo de la zona de soporte con un 1-2% de filtro extra). Si el precio llega ahí, el soporte realmente se rompió.' },
          { icon: Crosshair, title: 'Debajo del Último Higher Low', text: 'En un uptrend, tu stop va debajo del HL más reciente. Si la estructura alcista es $120 → $155 → $135 → $175 y estás largo, tu stop está debajo de $135 (el último HL). Si ese HL se rompe, la estructura alcista se invalida.' },
          { icon: AlertTriangle, title: 'NUNCA Debajo de Niveles "Obvios"', text: 'Si hay un soporte claro en $100 y todos los traders de Twitter lo marcan, hay MILES de stops en $99-100. Esos stops acumulados son liquidez esperando ser ejecutada, y el precio suele buscarla antes de rebotar: no hace falta un villano coordinándolo. Tu stop debería estar 2-3% debajo de la zona "obvia".' }
        ]
      },
      {
        type: 'main',
        title: 'Position Sizing: La Fórmula del 1-2%',
        content: 'El stop loss define DÓNDE sales. El position sizing define CUÁNTO compras. Juntos, controlan tu riesgo por operación. La regla profesional: **nunca arriesgues más del 1-2% de tu capital total en una sola operación.**',
        features: [
          { icon: Percent, title: 'La Fórmula', text: '**Tamaño de posición = (Capital × % riesgo) / Distancia al stop**. Ejemplo: Capital $10,000, riesgo 2% = $200 máximo de pérdida. Si tu stop está 10% debajo de tu entrada, tu posición máxima es $200 / 10% = $2,000. Esto limita tu pérdida a $200 (2% de $10K) sin importar qué pase. Nota la consecuencia: a stop más lejano, posición más pequeña. Un stop al 20% permite la mitad de posición que uno al 10% con el mismo riesgo en dólares.' },
          { icon: CheckCircle, title: 'Por Qué 1-2% Funciona', text: 'Con riesgo del 2% compuesto (recalculado sobre el capital restante), **20 pérdidas seguidas te dejan ~67% del capital, y hasta 50 pérdidas seguidas te dejan ~36%**: golpeado, pero sigues en el juego. Las rachas perdedoras de 5-10 trades son NORMALES incluso para traders rentables. El 1-2% garantiza que sobrevivas a la varianza.' },
          { icon: AlertTriangle, title: 'El Error del "All-In"', text: 'Arriesgar 10-20% en un solo trade significa que 5 pérdidas seguidas borran la mitad de tu capital. 10 pérdidas (que pasan más seguido de lo que crees) te dejan con casi nada. Los "all-in" que ves en redes sociales tienen sesgo de superviviente, solo muestran los que ganaron.' }
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
          { icon: Brain, title: '"Esta Vez es Diferente"', text: 'Tu análisis dice que el soporte debería aguantar. El precio rompe tu stop. Piensas "pero esto no debería pasar". Sí debería, TÚ estabas equivocado, no el mercado. El mercado SIEMPRE tiene la razón. Tu opinión es irrelevante, lo que importa es el precio.' },
          { icon: CheckCircle, title: 'La Mentalidad Correcta', text: 'Un stop ejecutado NO es un fracaso, es un éxito de gestión de riesgo. Protegiste tu capital. Puedes volver a entrar más tarde si las condiciones mejoran. El dinero que preservaste HOY es el dinero con el que ganarás MAÑANA.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'El Stop Loss Como Estilo de Vida',
        items: [
          'El stop loss no es una pérdida, es el costo de hacer negocios. Sin stop, una sola operación mala puede destruir meses o años de ganancias.',
          'La matemática es cruel: perder 50% requiere ganar 100% para recuperar. El stop loss existe para que tus pérdidas sean del 1-2%, no del 50%.',
          'Define tu stop ANTES de entrar. Colócalo debajo de donde tu tesis se invalida (soporte, último HL). No en niveles "obvios" donde las ballenas barren.',
          'Position sizing: nunca arriesgues más del 1-2% de tu capital por operación. Con 2% compuesto, incluso 20 pérdidas seguidas te dejan ~67% del capital (y 50 te dejan ~36%): sigues en el juego.',
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
            { id: 'a', text: 'Ponerlo solo cuando ya perdiste 20% y el dolor es demasiado grande' },
            { id: 'b', text: 'Definirlo ANTES de entrar a la operación y nunca moverlo hacia abajo' },
            { id: 'c', text: 'Usar siempre un stop mental para mayor flexibilidad' },
            { id: 'd', text: 'Solo poner stop loss en operaciones grandes' }
          ],
          correctAnswer: 'b',
          explanation: 'El stop se define ANTES de entrar, es parte de tu plan de operación. Moverlo hacia abajo es rendirse a las emociones. Los profesionales pierden trades constantemente pero sus pérdidas están controladas. Los amateurs ganan mucho y luego pierden todo en un trade sin stop.'
        },
        {
          id: 'q2',
          question: 'Tu capital es $10,000. Compras SOL a $180 con stop loss en $162 (10% debajo). Siguiendo la regla del 1-2%, ¿cuánto deberías arriesgar máximo y cuál sería tu posición?',
          options: [
            { id: 'a', text: 'Puedes arriesgar todo, SOL es seguro' },
            { id: 'b', text: 'Máximo $100-200 de riesgo (1-2%). Con stop 10% abajo, tu posición máxima es $1,000-2,000' },
            { id: 'c', text: '$1,000 de riesgo (10%), así la ganancia vale la pena' },
            { id: 'd', text: 'No hay fórmula, depende de cómo te sientas' }
          ],
          correctAnswer: 'b',
          explanation: 'Capital × 2% riesgo = $200 máximo de pérdida. Si tu stop está 10% debajo, posición = $200 / 0.10 = $2,000 máximo. Si SOL cae a tu stop, pierdes $200 (2% de tu capital). Y si recalculas el 2% sobre el capital restante, 20 pérdidas seguidas te dejan ~67% del capital y hasta 50 te dejan ~36%: sigues operando.'
        },
        {
          id: 'q3',
          question: 'El precio toca tu stop loss y rebotas fuerte: SOL cae a $162, activa tu stop, y luego sube a $200. Perdiste la operación. ¿Qué hiciste bien?',
          options: [
            { id: 'a', text: 'Nada, perdí dinero y el precio subió sin mí: el stop me costó la operación' },
            { id: 'b', text: 'Protegí mi capital con una pérdida controlada del 2%. Puedo volver a entrar cuando quiera' },
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
            { id: 'a', text: '+50%, igual que lo que perdiste' },
            { id: 'b', text: '+100%, necesitas DUPLICAR tu capital restante para volver al punto de partida' },
            { id: 'c', text: '+25%, las pérdidas se recuperan fácilmente' },
            { id: 'd', text: '+75%, un poco más de lo que perdiste' }
          ],
          correctAnswer: 'b',
          explanation: 'La asimetría matemática: -50% requiere +100% para recuperar. -25% requiere +33%. -10% requiere +11%. Por eso los stops son críticos, una pérdida grande requiere ganancias desproporcionalmente mayores. Es mucho más fácil recuperar un -2% (necesitas +2.04%) que un -50%.'
        },
        {
          id: 'q5',
          question: 'El precio se acerca a tu stop loss. Tu mente dice: "va a rebotar, mueve el stop más abajo para darle espacio". ¿Cuál es la respuesta correcta?',
          options: [
            { id: 'a', text: 'Mover el stop es razonable si mantienes convicción fuerte en tu tesis original' },
            { id: 'b', text: 'NUNCA moverlo hacia abajo: si se ejecuta, tu tesis estaba equivocada y el mercado tiene la razón' },
            { id: 'c', text: 'Eliminar el stop completamente, el precio siempre vuelve' },
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
        content: 'Imagina un trader que compró SOL a $3 a inicios de 2021. Para noviembre de 2021, el precio superaba los $250, un retorno de 80×. En pantalla era millonario. No vendió ni un solo token. "Va a llegar a $1,000", se dijo. Para 2022, SOL cayó a $8. Su ganancia de 80× se convirtió en un modesto 2.6×. Todavía ganó algo, pero perdió el **97% de sus ganancias** por no tomar nada. Esta historia se repite en CADA ciclo con MILES de personas. Ganan fortunas en papel y terminan con migajas porque nunca aprendieron la habilidad más difícil del trading: **vender**. Comprar es fácil, ves algo que sube y quieres entrar. Vender es doloroso, "¿y si sigue subiendo?" "¿y si pierdo el próximo 10×?". Por eso necesitas un PLAN de salida definido ANTES de entrar.',
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
          { icon: Shield, title: 'Break-Even Stop', text: 'Después de tu primera venta parcial (que debería cubrir al menos tu inversión original), mueve tu stop loss al precio de entrada (break-even). Ahora estás jugando con "dinero gratis", cero riesgo de perder capital propio.' }
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
        content: 'El **moonbag** es la porción de tu posición (10-25%) que dejas correr indefinidamente después de tomar ganancias en el resto. Es "dinero gratis", capital que ya recuperaste y más.',
        features: [
          { icon: Zap, title: 'Cómo Funciona', text: 'Compraste 1000 tokens a $1 ($1,000). El precio llega a $5. Vendes 600 tokens a $5 = $3,000 (3× tu inversión original). Te quedan 400 tokens que "no te costaron nada". Si suben a $50, tienes $20,000 extra. Si caen a cero, no perdiste capital.' },
          { icon: Shield, title: 'Sin Presión Emocional', text: 'El moonbag libera tu mente. No te importa si el precio cae porque ya ganaste. No sientes FOMO si sigue subiendo porque todavía tienes exposición. Es la posición perfecta emocionalmente: riesgo cero, upside ilimitado.' },
          { icon: AlertTriangle, title: 'Error Común', text: 'El error es tratar TODO el portafolio como moonbag. "No vendo nada, todo puede hacer 100×." Eso no es moonbag, es codicia. El moonbag es el 10-25% DESPUÉS de tomar ganancias significativas en el otro 75-90%.' }
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
            'Minimiza el arrepentimiento, siempre hiciste algo bien'
          ]
        }
      },
      {
        type: 'main',
        title: 'La Trampa del "Podría Subir Más"',
        content: 'La codicia es el enemigo #1 de la toma de ganancias. Cuando tu posición está +300%, tu cerebro no quiere vender porque "podría llegar a +500%". Y si llega a +500%, "podría llegar a +1000%". Es un ciclo infinito que termina cuando el precio se desploma y tus ganancias se evaporan.',
        features: [
          { icon: Brain, title: 'El Sesgo de la Codicia', text: 'Los estudios de Kahneman y Tversky sobre aversión a la pérdida sugieren que perder duele aproximadamente el doble de lo que agrada ganar lo mismo. En trading, "perder" una ganancia potencial (vender y ver que sigue subiendo) activa ese mismo dolor, y te hace aferrarte a posiciones más tiempo del que deberías.' },
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
          'Las ganancias en pantalla NO son reales hasta que vendes. La gran mayoría de las personas que "fueron millonarias en crypto" terminó con una fracción porque nunca vendió.',
          'Scaling out (venta escalonada) es superior a vender todo de golpe. Capturas ganancias en cada nivel, mantienes exposición con el moonbag, y minimizas el arrepentimiento.',
          'Después de tu primera venta parcial, mueve tu stop a break-even. Ahora juegas con dinero gratis, cero riesgo de perder capital propio.',
          'El moonbag (10-25% que dejas correr) es la posición perfecta: riesgo cero, upside ilimitado. Pero solo funciona DESPUÉS de tomar ganancias significativas en el otro 75-90%.',
          'Define tu plan de salida ANTES de entrar: entry, stop loss, targets de TP escalonados. No lo cambies durante la operación, las emociones no son consejeras de confianza.',
          'Cuando te encuentres tomando screenshots de ganancias, fantaseando sobre precios futuros, o sin poder dormir, VENDE al menos una parte. La euforia es la señal de salida más fiable.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu posición está +300% en 3 días. Tu cerebro dice "HODL hasta la luna". ¿Cuál es la jugada profesional?',
          options: [
            { id: 'a', text: 'HODL todo: si hizo 300% en tres días, puede hacer 1000% en una semana' },
            { id: 'b', text: 'Vendo 50-70% y muevo el stop a break-even: aseguro ganancias y dejo correr el resto' },
            { id: 'c', text: 'Vendo 100%, 300% es suficiente' },
            { id: 'd', text: 'Compro más, está subiendo fuerte' }
          ],
          correctAnswer: 'b',
          explanation: 'Tomas ganancias reales (dinero en tu bolsillo) y dejas el resto correr con stop en break-even. Si sube más, perfecto, todavía capturas upside. Si cae, ya aseguraste la mayoría de las ganancias. Best of both worlds.'
        },
        {
          id: 'q2',
          question: '¿Cuál es la estrategia de salida más usada por traders consistentemente rentables?',
          options: [
            { id: 'a', text: 'Vender todo cuando el precio llega a un target fijo' },
            { id: 'b', text: 'Scaling out: 25% en +2×, 25% en +3-5×, 25% en +5-10×, 25% moonbag' },
            { id: 'c', text: 'Nunca vender nada, HODL es siempre la mejor estrategia a largo plazo' },
            { id: 'd', text: 'Vender cuando un influencer dice que vendas' }
          ],
          correctAnswer: 'b',
          explanation: 'Scaling out elimina la necesidad de adivinar el techo exacto. Capturas ganancias reales en cada nivel y mantienes exposición con el moonbag. No maximiza el resultado teórico perfecto, pero maximiza las ganancias REALES consistentemente.'
        },
        {
          id: 'q3',
          question: 'Compraste 1000 tokens a $1 ($1,000 total). El precio llega a $5. Vendes 600 tokens a $5 ($3,000). ¿Cuál es tu situación actual?',
          options: [
            { id: 'a', text: 'Perdiste, porque vendiste demasiado temprano y dejaste ganancias sobre la mesa' },
            { id: 'b', text: 'Recuperaste 3× tu inversión y tienes 400 tokens gratis como moonbag: riesgo cero, upside abierto' },
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
            { id: 'a', text: 'No es peligroso, siempre hay que ajustar los targets según el momentum' },
            { id: 'b', text: 'Porque la codicia está decidiendo, no la lógica: tu plan se definió con la mente fría y cambiarlo reduce tu disciplina' },
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
            { id: 'a', text: 'Estás en una gran operación, relájate y disfruta el momento sin tocar nada' },
            { id: 'b', text: 'Euforia clara: es exactamente el momento de ejecutar tu plan y vender al menos una parte' },
            { id: 'c', text: 'Deberías comprar más, la emoción confirma que va bien' },
            { id: 'd', text: 'Es normal y no requiere acción' }
          ],
          correctAnswer: 'b',
          explanation: 'La euforia es la señal de salida más fiable. Cuando no puedes dormir, tomas screenshots, y fantaseas = tu cerebro está en modo FOMO máximo. Históricamente, estos son los momentos que preceden correcciones. Ejecuta tu plan de take profit, nadie quebró por tomar ganancias.'
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
    description: 'La mayor parte del éxito en trading no es técnica, es psicología. Aprende a controlar el FOMO, la avaricia, el miedo y la venganza para proteger tu capital y tomar mejores decisiones.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Mayor Enemigo Eres Tú',
        content: '¿Sabías que la mayoría de los traders que pierden dinero **tienen estrategias que funcionan**? El problema no es su sistema, es que no pueden seguirlo. Mueven el stop loss cuando no deberían. Entran por FOMO cuando su plan dice "espera". Cierran una posición ganadora demasiado pronto por miedo a perder las ganancias. Después de una pérdida, doblan el tamaño buscando recuperar rápido. Estos no son errores técnicos. Son errores **emocionales**. Y son exactamente los mismos errores que comete la gran mayoría de los participantes del mercado. En esta lección vas a aprender a identificar los sesgos psicológicos que te sabotean, a construir un sistema que te proteja de ti mismo, y a desarrollar la disciplina que separa a los traders consistentes de los que pierden todo.',
        highlight: {
          title: 'El Dato que Nadie Quiere Escuchar',
          text: 'Según estudios de brokers regulados, entre el **70% y el 90% de los traders retail pierden dinero**. No porque el mercado sea impredecible, sino porque las emociones humanas están diseñadas para tomar las peores decisiones posibles en los mercados financieros.'
        }
      },
      {
        type: 'main',
        title: 'Los 4 Demonios del Trading',
        content: 'Hay cuatro emociones que destruyen portafolios. No son debilidades tuyas, son instintos evolutivos que servían para sobrevivir en la sabana pero que te sabotean en los mercados. El primer paso para vencerlos es reconocerlos:',
        features: [
          { icon: Eye, title: 'FOMO (Fear Of Missing Out)', text: 'El pánico de quedarte fuera de una subida. Ves un token subiendo 50% y sientes una urgencia física de comprar. Tu cerebro grita: "¡Si no compras ahora, te pierdes la oportunidad de tu vida!". Es la misma respuesta que tenían tus ancestros cuando veían a otros corriendo, tu instinto asume que algo peligroso o valioso pasa y debes actuar YA. En trading, el FOMO te hace comprar en máximos, sin plan, sin stop loss, en el peor momento posible.' },
          { icon: Gem, title: 'Avaricia (Greed)', text: 'Tu posición sube 100% pero no vendes porque "puede subir más". Sigues esperando. Sube 150%. No vendes. "¿Y si llega a 200%?". Empieza a caer. "Es solo una corrección, va a rebotar". Cae a +50%. No vendes porque ya viste +150% y no quieres "perder". Cae a 0% de ganancia. La avaricia convierte trades ganadores en perdedores. El mercado no te debe nada, las ganancias no realizadas son solo números en pantalla.' },
          { icon: Shield, title: 'Miedo (Fear)', text: 'Tu posición cae -10% y entras en pánico. Tu cerebro interpreta la pérdida como una amenaza existencial, la misma respuesta que si vieras un depredador. Vendes en el peor momento. El precio rebota al día siguiente. O peor: tienes tanto miedo de perder que nunca entras, y ves desde afuera cómo el trade que analizaste correctamente sube 500%. El miedo paraliza y te hace tomar decisiones reactivas en lugar de estratégicas.' },
          { icon: Zap, title: 'Revenge Trading (Venganza)', text: 'Acabas de perder -20% en un trade. Estás enojado. Tu ego herido quiere "recuperar lo perdido" inmediatamente. Abres un trade el doble de grande, sin análisis, con más riesgo. Pierdes otro -25%. Ahora estás -45% y en espiral. El revenge trading es la forma más rápida de destruir una cuenta. Nace de la incapacidad de aceptar una pérdida y seguir adelante.' }
        ]
      },
      {
        type: 'main',
        title: 'Sesgos Cognitivos que Te Engañan',
        content: 'Más allá de las emociones puras, tu cerebro tiene "atajos mentales" que distorsionan tu percepción de la realidad. Estos sesgos cognitivos son invisibles, crees que estás pensando racionalmente cuando en realidad tu cerebro te está engañando:',
        features: [
          { icon: Brain, title: 'Sesgo de Confirmación', text: 'Buscas información que confirme lo que ya crees e ignoras la que lo contradice. Si estás bullish en SOL, solo lees threads positivos y descartas cualquier argumento bajista como "FUD". Esto te impide ver señales de peligro evidentes. **Antídoto**: Antes de entrar a un trade, dedica 10 minutos a buscar activamente la tesis contraria. Si no puedes encontrar argumentos en contra, no entiendes suficiente el activo.' },
          { icon: Anchor, title: 'Sesgo de Anclaje', text: '"Compré SOL a $250, no voy a vender a $150". Tu precio de compra es irrelevante para el mercado, pero tu cerebro lo usa como ancla. Te aferras a posiciones perdedoras esperando "recuperar tu precio". El mercado no sabe ni le importa a cuánto compraste. **Antídoto**: Pregúntate: "Si no tuviera esta posición, ¿la abriría hoy a este precio?". Si la respuesta es no, vende.' },
          { icon: Users, title: 'Sesgo de Manada', text: '"Todos están comprando X, no puede estar mal". La presión social te lleva a seguir a la multitud. Pero en trading, cuando "todos" están de un lado, es señal de peligro: ¿quién queda para comprar? Los movimientos más rentables ocurren cuando vas contra el consenso, y eso se siente terrible emocionalmente. **Antídoto**: Cuando sientas una convicción abrumadora compartida por todos, pregúntate quién está en el otro lado del trade.' }
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
            'No tiene reglas escritas, opera según "intuición"',
            'Mira gráficos 12 horas al día, estresado y agotado',
            'Gana a veces mucho, pero pierde todo al final del ciclo'
          ]
        },
        rightSide: {
          title: 'Trader Disciplinado',
          points: [
            'Solo entra cuando su checklist de entrada se cumple al 100%',
            'El stop loss es sagrado, se ejecuta sin dudar ni mover',
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
        content: 'Un plan de trading no es una sugerencia, es un **contrato contigo mismo**. Lo escribes cuando estás calmado y racional, y lo sigues cuando estás emocional y tentado. Sin un plan escrito, cada decisión se toma en caliente, y las decisiones en caliente en trading siempre pierden dinero a largo plazo.',
        features: [
          { icon: Target, title: 'Qué Debe Incluir tu Plan', text: '(1) **Criterios de entrada**: ¿Qué señales necesitas para abrir un trade? (patrón técnico, señal on-chain, narrativa). (2) **Tamaño de posición**: ¿Qué % de tu portafolio arriesgas? (nunca más de 1-2% por trade, la regla que ya conoces del stop loss). (3) **Stop loss**: ¿A qué precio sales si te equivocas? (definido ANTES de entrar). (4) **Take profit**: ¿A qué niveles tomas ganancias? (parciales: 1/3, 1/3, 1/3). (5) **Reglas de estado mental**: "No opero si estoy enojado, cansado o ebrio".' },
          { icon: BookOpen, title: 'El Diario de Trading', text: 'Después de cada trade, anota: qué compraste, por qué, a qué precio, stop loss, take profit, y cómo te sentías emocionalmente. Después de 50-100 trades, revisa tu diario. Vas a descubrir patrones: "siempre pierdo los viernes por la noche", "mis mejores trades son cuando estoy calmado", "el revenge trading me costó un 30% del portafolio". El diario convierte errores emocionales en datos accionables.' }
        ]
      },
      {
        type: 'main',
        title: 'Técnicas Prácticas de Control Emocional',
        content: 'La disciplina no es un rasgo de personalidad, es un sistema. Estas técnicas probadas por traders profesionales te ayudan a mantener el control cuando las emociones gritan:',
        features: [
          { icon: Clock, title: 'La Regla de las 24 Horas', text: 'Nunca actúes por impulso. Cuando sientas FOMO o urgencia, espera 24 horas. Si después de 24 horas el trade todavía tiene sentido según tu plan, ejecútalo. La mayoría de los impulsos desaparecen. Esta simple regla te salva de los peores errores.' },
          { icon: Lock, title: 'El Presupuesto de Riesgo Diario', text: 'Define un máximo de pérdida diaria (ejemplo: -3% del portafolio). Si llegas a ese límite, cierras todo y no operas más ese día. Sin excepciones. Los casinos ponen límites a los jugadores, tú debes ponerte límites a ti mismo.' },
          { icon: RefreshCw, title: 'La Desconexión Programada', text: 'Después de un trade grande (ganes o pierdas), aléjate de las pantallas mínimo 1-2 horas. Sal a caminar, haz ejercicio, llama a alguien. Los peores trades de tu vida se harán inmediatamente después de un trade emocional. Rompe el ciclo con distancia física.' },
          { icon: CheckCircle, title: 'El Checklist Pre-Trade', text: 'Antes de cada trade, responde estas preguntas en voz alta o escríbelas: "¿Esto está en mi plan?", "¿Cuánto pierdo si me equivoco?", "¿Estoy entrando por análisis o por emoción?", "¿Puedo dormir tranquilo con esta posición?". Si alguna respuesta te incomoda, no entres.' }
        ]
      },
      {
        type: 'main',
        title: 'La Varianza: Tu Amiga Incomprendida',
        content: 'Este es quizás el concepto más importante y menos entendido del trading. Un trader con un **60% de win rate** (gana 6 de cada 10 trades) va a tener rachas de 5, 7, incluso 10 pérdidas seguidas. Esto no significa que su estrategia esté rota, es **matemáticamente inevitable**. Se llama varianza, y entenderla cambia todo.',
        features: [
          { icon: BarChart3, title: 'Los Números No Mienten', text: 'Con un 60% de win rate (que es excelente), la probabilidad de sufrir una racha de 5 pérdidas seguidas en 100 trades es de ~46%: prácticamente una moneda al aire. En 200 trades sube a ~71%. Incluso una racha de 7 pérdidas aparece en ~18% de los casos con 200 trades (y de 8, en ~7%). Es decir: te va a pasar, y no significa que tu estrategia esté rota. Si cambias tu estrategia cada vez que pierdes 3 seguidos, nunca sabrás si funciona. Necesitas mínimo 100-200 trades para evaluar un sistema.' },
          { icon: PiggyBank, title: 'Gestión de Capital + Varianza', text: 'Si arriesgas el 2% por trade, 5 pérdidas seguidas = -10%. Recuperable. Si arriesgas el 10% por trade, 5 pérdidas seguidas = -50%. Casi imposible de recuperar (necesitas +100% solo para volver a 0). La gestión de riesgo no es opcional, es lo que te permite sobrevivir la varianza inevitable.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Armadura Psicológica',
        items: [
          'La mayoría de las pérdidas en trading viene de errores emocionales, no técnicos. FOMO, avaricia, miedo y revenge trading son los 4 demonios que debes controlar para ser rentable.',
          'Los sesgos cognitivos (confirmación, anclaje, manada) distorsionan tu percepción sin que te des cuenta. El antídoto es buscar activamente la tesis contraria antes de cada trade.',
          'Un plan de trading escrito es tu escudo anti-emociones. Lo creas en frío (racional) y lo sigues en caliente (emocional). Sin plan escrito, cada decisión es una apuesta.',
          'Técnicas prácticas: regla de 24 horas contra el FOMO, presupuesto de riesgo diario (-3% máximo), desconexión programada después de trades emocionales, y checklist pre-trade para validar cada entrada.',
          'La varianza es matemáticamente inevitable: con 60% win rate, tendrás rachas de 5-8 pérdidas seguidas. Por eso necesitas gestión de riesgo (1-2% por trade) y mínimo 100-200 trades para evaluar cualquier estrategia.',
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
            { id: 'b', text: 'Sigo exactamente igual, con 60% win rate, una racha de 5 pérdidas es estadísticamente normal' },
            { id: 'c', text: 'Cambio completamente de estrategia porque claramente no funciona' },
            { id: 'd', text: 'Dejo de operar por un mes porque "el mercado está en mi contra"' }
          ],
          correctAnswer: 'b',
          explanation: 'Con un 60% de win rate, la probabilidad de vivir una racha de 5 pérdidas seguidas en 100 trades es de ~46%: prácticamente una moneda al aire, y en 200 trades sube a ~71%. Es varianza normal, no una estrategia rota. Cambiar de estrategia o aumentar el tamaño por frustración es revenge trading disfrazado. La disciplina se demuestra exactamente en estos momentos.'
        },
        {
          id: 'q2',
          question: 'Ves que un token acaba de subir 80% en las últimas 4 horas. Crypto Twitter está lleno de mensajes de "🚀🚀🚀 to the moon". Sientes una urgencia intensa de comprar. ¿Cuál es la mejor respuesta?',
          options: [
            { id: 'a', text: 'Compro inmediatamente antes de que suba más, no quiero perderme esta oportunidad' },
            { id: 'b', text: 'Aplico la regla de las 24 horas: si mañana aún cumple mis criterios de entrada, considero entrar' },
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
            { id: 'a', text: 'Sesgo de manada, todos dicen que va a subir' },
            { id: 'b', text: 'FOMO, tienes miedo de perderte la recuperación' },
            { id: 'c', text: 'Sesgo de anclaje: tu precio de compra es irrelevante para el mercado, pero tu cerebro lo usa como referencia' },
            { id: 'd', text: 'Sesgo de confirmación, solo escuchas las opiniones alcistas que te convienen' }
          ],
          correctAnswer: 'c',
          explanation: 'El sesgo de anclaje hace que tu cerebro use tu precio de compra como referencia, aunque el mercado no sabe ni le importa cuánto pagaste. La pregunta correcta es: "Si no tuviera esta posición, ¿la abriría hoy a $160 con la tesis actual?". Si la respuesta es no, vende, independientemente de tu precio de entrada.'
        },
        {
          id: 'q4',
          question: 'Acabas de cerrar un trade con -15% de pérdida. Estás frustrado y ves otra "oportunidad" para recuperar lo perdido. ¿Qué deberías hacer?',
          options: [
            { id: 'a', text: 'Entrar con el doble de tamaño para recuperar más rápido' },
            { id: 'b', text: 'Entrar solo si cumple todos los criterios de mi plan escrito' },
            { id: 'c', text: 'Alejarme de las pantallas 1-2 horas y solo volver a evaluar trades cuando esté calmado' },
            { id: 'd', text: 'Llamar a un amigo trader con experiencia para que me diga qué hacer' }
          ],
          correctAnswer: 'c',
          explanation: 'Después de una pérdida significativa, tu estado emocional está comprometido. El revenge trading (buscar recuperar inmediatamente) es la forma más rápida de destruir una cuenta. La desconexión programada (1-2 horas lejos de pantallas) rompe el ciclo emocional. Ningún trade que tomes enojado o frustrado será bueno.'
        },
        {
          id: 'q5',
          question: '¿Cuántos trades necesitas para evaluar con confianza si tu estrategia de trading funciona?',
          options: [
            { id: 'a', text: '10-20 trades son suficientes para saber con certeza si funciona' },
            { id: 'b', text: 'Con 1 trade ganador bien ejecutado ya sé que funciona' },
            { id: 'c', text: 'Mínimo 100-200 trades, menos que eso es pura varianza (buena o mala suerte)' },
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
            { id: 'b', text: 'Un diario de trading: registra cada trade y tu estado emocional; tras 50-100 entradas los patrones son evidentes' },
            { id: 'c', text: 'Usar bots automáticos para eliminar completamente las emociones del proceso' },
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
    number: '1 de 13',
    duration: '35 min',
    type: 'Tutorial Práctico',
    description: 'Olvida los exchanges centralizados. Jupiter es el agregador de liquidez más poderoso de Solana: mejor precio, DCA automático, órdenes límite, y perpetuos, todo descentralizado, sin custodia, y con la mejor ejecución del mercado.',
    referrals: [
      {
        title: 'Jupiter',
        description: 'El agregador de DEXs líder de Solana: el mejor precio en tus swaps, DCA automático y órdenes límite, todo sin custodia.',
        link: 'https://jup.ag/?ref=6kg0a2qpd813',
        buttonText: 'Abrir Jupiter'
      }
    ],
    sections: [
      {
        type: 'intro',
        title: 'Por Qué Jupiter Cambió las Reglas del Juego',
        content: 'Imagina que quieres cambiar 1,000 USDC por SOL. En Binance, usas el orderbook de Binance y obtienes SU precio. En Jupiter, el protocolo busca **simultáneamente** en Raydium, Orca, Phoenix, Meteora, y docenas de otros pools de liquidez para encontrarte el mejor precio posible. Si dividir tu orden entre 3 pools diferentes te da un mejor precio, Jupiter lo hace automáticamente en una sola transacción. Esto se llama **agregación de liquidez**, y es la razón por la que Jupiter frecuentemente da mejor ejecución que exchanges centralizados para swaps de tamaño mediano. Pero Jupiter va mucho más allá de swaps simples. Es una plataforma completa de trading descentralizado con DCA automático, órdenes límite, perpetuos con apalancamiento, y un launchpad para nuevos tokens. Todo sin entregar la custodia de tus fondos a nadie.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'Jupiter procesa más volumen de trading que muchos exchanges centralizados combinados. En Solana, una gran parte del volumen de swaps pasa por Jupiter. Es el hub central de liquidez del ecosistema, si existe un token en Solana, Jupiter lo tiene.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona la Agregación de Liquidez',
        content: 'Cuando haces un swap en Jupiter, ocurre algo sofisticado detrás de escena que te beneficia enormemente como usuario:',
        features: [
          { icon: Search, title: 'Descubrimiento de Rutas', text: 'Jupiter analiza todos los pools de liquidez disponibles en Solana en milisegundos. Evalúa el precio, la profundidad de liquidez, y el slippage en cada uno. Si tienes una orden de $5,000, puede que el mejor precio sea dividirla: $3,000 por Raydium y $2,000 por Orca, Jupiter calcula esto automáticamente y ejecuta todo en una sola transacción atómica.' },
          { icon: Zap, title: 'Mejor Precio Garantizado', text: 'El resultado es que casi siempre obtienes mejor precio que usando cualquier DEX individual directamente. Para órdenes pequeñas (<$1,000), la diferencia puede ser mínima. Pero para órdenes de $5,000+, la diferencia puede ser del 0.5-2%, que en trading activo se acumula rápidamente.' },
          { icon: Shield, title: 'Sin Custodia, Sin Permisos', text: 'A diferencia de Binance o cualquier CEX, Jupiter nunca toca tus fondos. Conectas tu wallet, firmas la transacción, y los tokens van directamente de tu wallet al pool y de vuelta. Si Jupiter desapareciera mañana, tus fondos están intactos en tu wallet. No hay riesgo de "FTX" con un DEX.' }
        ],
        highlight: {
          title: '¿Por Qué Importa?',
          text: '¿Por qué usar un DEX en vez de Binance? Porque en un DEX, TÚ controlas tus fondos. No hay KYC, no hay congelamiento de cuentas, no hay "mantenimiento del sistema". Tu dinero, tus reglas.'
        }
      },
      {
        type: 'glossary',
        terms: [
          {
            term: 'Slippage',
            definition: 'La diferencia entre el precio que esperabas y el precio al que realmente se ejecutó tu orden. Ejemplo: ves SOL a $180 y haces un swap de 1,000 USDC. Para cuando tu transacción se confirma (medio segundo después), el precio subió a $181. Recibes menos SOL del que esperabas, eso es slippage. Ocurre porque entre que firmas la transacción y se ejecuta, otros traders pueden haber movido el precio, o tu propia orden puede haber afectado la liquidez del pool.',
            whyItMatters: '"Slippage tolerance" en Jupiter es el límite de slippage que aceptas antes de que la transacción falle. Demasiado bajo (0.1%) y órdenes fallan seguido. Demasiado alto (5%+) y los bots MEV pueden manipularte. Para tokens principales (SOL, USDC), 0.5% es razonable.'
          }
        ]
      },
      {
        type: 'main',
        title: 'Tutorial: Tu Primer Swap en Jupiter',
        content: 'Hacer un swap en Jupiter es más simple de lo que parece. Una vez que lo haces una vez, se vuelve segunda naturaleza:',
        features: [
          { icon: Globe, title: 'Paso 1: Conecta tu Wallet', text: 'Ve a jup.ag y haz clic en "Connect Wallet". Selecciona Phantom (o tu wallet preferida). Aprueba la conexión. Jupiter NO pide tu frase semilla ni permisos especiales, solo conexión básica para firmar transacciones.' },
          { icon: Wallet, title: 'Paso 2: Selecciona tus Tokens', text: 'Arriba: el token que quieres vender (ejemplo: USDC). Abajo: el token que quieres comprar (ejemplo: SOL). Ingresa la cantidad. Jupiter muestra automáticamente el precio, la ruta óptima, el slippage estimado, y cuántos tokens recibirás.' },
          { icon: Activity, title: 'Paso 3: Revisa y Confirma', text: 'Revisa el "Price Impact" (idealmente <0.5% para órdenes normales). Revisa el slippage tolerance (0.5% por defecto, adecuado para la mayoría de tokens). Haz clic en "Swap", firma la transacción en Phantom, y en 1-2 segundos los tokens aparecen en tu wallet. Sobre los fees: el modo Ultra (el que usa jup.ag por defecto) cobra un fee según el par, desde 0% en pares estables hasta 0.1% en la mayoría de tokens; el modo Manual (Lite) no cobra fee de Jupiter.' },
          { icon: AlertTriangle, title: 'Configuración Avanzada', text: 'Para órdenes grandes ($10,000+): reduce el slippage tolerance a 0.1-0.3%. En el modo Ultra, la protección contra bots MEV viene activada por defecto. Si usas el modo Manual, activa "MEV Protect" (envía tu transacción por la infraestructura de Jito) para que nadie pueda ver tu orden y adelantarse. Para tokens con baja liquidez: aumenta el slippage a 1-5% o usa Limit Orders.' }
        ]
      },
      {
        type: 'main',
        title: 'DCA Automático: Invierte Sin Emociones',
        content: 'Jupiter tiene una de las implementaciones de DCA más elegantes del ecosistema crypto. No necesitas bots, no necesitas recordar comprar cada semana, y tus fondos nunca salen de un smart contract auditable:',
        features: [
          { icon: Clock, title: 'Cómo Funciona', text: 'Depositas USDC (o cualquier token) en el contrato DCA de Jupiter. Configuras: qué comprar (SOL, BTC, etc.), con qué frecuencia (cada minuto, hora, día, semana), y por cuánto tiempo. Jupiter ejecuta las compras automáticamente al mejor precio disponible en cada intervalo. Los tokens comprados van directamente a tu wallet.' },
          { icon: PiggyBank, title: 'Ventajas vs DCA Manual', text: 'Cero intervención humana = cero emociones saboteando tu plan. No puedes pausar por pánico cuando el mercado cae. No puedes comprar de más por FOMO cuando sube. El protocolo ejecuta mecánicamente según tus instrucciones. El costo: Jupiter Recurring cobra 0.1% por cada orden ejecutada, más el fee de red de Solana (fracciones de centavo).' },
          { icon: Lock, title: 'Seguridad', text: 'Tus fondos están en un smart contract auditable, no en una empresa. Puedes cancelar tu DCA en cualquier momento y recuperar los fondos restantes instantáneamente. Los tokens comprados van a tu wallet automáticamente, no se quedan en el contrato.' }
        ]
      },
      {
        type: 'main',
        title: 'Limit Orders: Compra a Tu Precio',
        content: 'Las Limit Orders de Jupiter te permiten colocar órdenes que se ejecutan automáticamente cuando el precio llega a tu objetivo, exactamente como en un exchange centralizado, pero sin custodia:',
        features: [
          { icon: Target, title: 'Cómo Usarlas', text: 'Ejemplo: SOL está a $180 y quieres comprar a $160. Creas una Limit Order: "Comprar SOL con 500 USDC cuando el precio sea $160 o menos". La orden se queda activa hasta que se ejecute o la canceles. Si SOL baja a $160, Jupiter ejecuta automáticamente tu compra al mejor precio disponible.' },
          { icon: Crosshair, title: 'Casos de Uso', text: '(1) Comprar dips automáticamente, configuras la orden y te olvidas. (2) Tomar ganancias, "Vender 10 SOL si llega a $250". (3) Entrar en tokens nuevos a buen precio sin tener que monitorear constantemente. Las Limit Orders son la herramienta favorita de traders que no quieren estar pegados a la pantalla.' },
          { icon: AlertTriangle, title: 'Limitaciones', text: 'Las Limit Orders dependen de que haya liquidez al precio objetivo. Para tokens de muy baja liquidez, la orden puede ejecutarse parcialmente o con slippage. Para tokens principales (SOL, USDC, BTC) no hay problema. Además, hay un fee de ~0.1% en la ejecución de Limit Orders.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Jupiter vs Exchange Centralizado (Binance)',
        leftSide: {
          title: 'Jupiter (DEX)',
          points: [
            'Sin custodia, tus fondos siempre en tu wallet',
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
            'Custodia centralizada, "not your keys, not your coins"',
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
        content: 'Para traders avanzados, Jupiter ofrece contratos perpetuos (perps) que permiten operar con apalancamiento hasta 100× en SOL, ETH y BTC. Esto es para usuarios experimentados, el riesgo es extremo:',
        features: [
          { icon: TrendingUp, title: 'Qué Son los Perpetuos', text: 'Un contrato perpetuo te permite apostar a que un activo sube (long) o baja (short) con capital prestado. Con 10× apalancamiento, $100 controlan $1,000. Si el precio sube 10%, ganas $100 (100% de tu capital). Si baja 10%, pierdes todo. Es una herramienta de doble filo que amplifica tanto ganancias como pérdidas.' },
          { icon: AlertTriangle, title: 'El Riesgo Real', text: 'La inmensa mayoría de traders que usan apalancamiento alto pierden dinero. Con 10×, un movimiento de 10% en tu contra te liquida completamente. El mercado crypto es volátil, movimientos de 10% ocurren regularmente. Si recién empiezas, NO uses perpetuos. Domina primero el spot trading sin apalancamiento.' },
          { icon: BarChart3, title: 'Si Decides Usarlos', text: 'Máximo 2-3× apalancamiento para principiantes en perps. Siempre con stop loss definido ANTES de entrar. Nunca más del 5% de tu portafolio en una posición apalancada. Los perps son herramientas legítimas para hedging y trading direccional, pero solo para quienes entienden y aceptan el riesgo.' }
        ]
      },
      {
        type: 'main',
        title: '\u{1F9E0} Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas cómo funciona un swap en Jupiter, desde que haces clic hasta que los tokens llegan a tu wallet.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Estudios científicos demuestran que explicar un concepto en tus propias palabras mejora significativamente la retención comparado con solo leerlo. No memorices, comprende.'
        }
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
          'Configuración avanzada: el modo Ultra te protege de bots MEV por defecto (en modo Manual, activa MEV Protect), ajusta slippage según la liquidez del token, y siempre revisa el Price Impact antes de confirmar.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Quieres cambiar 5,000 USDC por SOL con la mejor ejecución posible. ¿Qué hace Jupiter que un DEX individual (como Raydium solo) no puede?',
          options: [
            { id: 'a', text: 'Nada, todos los DEXs dan el mismo precio' },
            { id: 'b', text: 'Jupiter divide tu orden entre múltiples pools (Raydium, Orca, Phoenix) para encontrar la ruta con menor slippage y mejor precio total' },
            { id: 'c', text: 'Jupiter siempre es más caro porque cobra comisión por agregar' },
            { id: 'd', text: 'Jupiter envía tu orden a Binance para conseguir mejor ejecución en su orderbook centralizado' }
          ],
          correctAnswer: 'b',
          explanation: 'La agregación de liquidez es el superpoder de Jupiter. Para una orden de $5,000, puede encontrar que dividirla 60/40 entre Raydium y Orca reduce el slippage significativamente. Esto se calcula y ejecuta automáticamente en una sola transacción. En el modo Manual el fee de Jupiter es 0%; el modo Ultra (por defecto) cobra entre 0% y 0.1% según el par, a cambio de mejor ejecución y protección MEV integrada.'
        },
        {
          id: 'q2',
          question: 'Configuras un DCA en Jupiter: $100 de USDC → SOL cada semana durante 6 meses. ¿Qué pasa con tus fondos?',
          options: [
            { id: 'a', text: 'Jupiter guarda todo el USDC en su cuenta bancaria' },
            { id: 'b', text: 'El USDC se deposita en un smart contract auditable. Cada semana, el contrato ejecuta la compra al mejor precio y envía el SOL a tu wallet. Puedes cancelar y recuperar el USDC restante en cualquier momento' },
            { id: 'c', text: 'Necesitas hacer las compras manualmente cada semana' },
            { id: 'd', text: 'El USDC se convierte todo a SOL inmediatamente en una sola compra al precio del momento' }
          ],
          correctAnswer: 'b',
          explanation: 'El DCA de Jupiter es verdaderamente automatizado y sin custodia. Tu USDC está en un smart contract (no en una empresa). Las compras se ejecutan mecánicamente. Los tokens comprados van a tu wallet directamente. Y puedes cancelar en cualquier momento, no hay lock-up ni penalidades.'
        },
        {
          id: 'q3',
          question: 'SOL está a $180 y quieres comprar más si cae a $150. ¿Cuál es la mejor herramienta en Jupiter?',
          options: [
            { id: 'a', text: 'Hacer un swap normal a $180 y esperar' },
            { id: 'b', text: 'Monitorear el precio manualmente y hacer el swap cuando llegue a $150' },
            { id: 'c', text: 'Crear una Limit Order: "Comprar SOL con X USDC cuando el precio sea $150 o menos". La orden se ejecuta automáticamente si llega a ese precio' },
            { id: 'd', text: 'No es posible en un DEX, solo los CEXs tienen órdenes límite' }
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
            { id: 'd', text: 'Jupiter tiene mejor soporte al cliente y una app móvil más completa que la de Binance' }
          ],
          correctAnswer: 'b',
          explanation: 'La diferencia fundamental es la custodia. En Binance, tus fondos están en poder de la empresa (riesgo FTX). En Jupiter, tus tokens están en tu wallet hasta el momento exacto del swap. Además, cualquier token nuevo en Solana está disponible en Jupiter inmediatamente, mientras que Binance puede tardar meses en listar.'
        },
        {
          id: 'q5',
          question: 'Vas a hacer un swap grande ($20,000 USDC → SOL). ¿Qué configuraciones avanzadas deberías usar en Jupiter?',
          options: [
            { id: 'a', text: 'Configuración por defecto, no necesito cambiar nada' },
            { id: 'b', text: 'Reducir slippage tolerance a 0.1-0.3% y asegurarme de tener protección MEV activa (Ultra la trae por defecto; en modo Manual se llama MEV Protect) contra bots que podrían adelantarse a mi orden' },
            { id: 'c', text: 'Aumentar slippage al máximo para que se ejecute más rápido' },
            { id: 'd', text: 'Dividir la orden manualmente en 20 swaps de $1,000' }
          ],
          correctAnswer: 'b',
          explanation: 'Para órdenes grandes, los bots MEV pueden detectar tu transacción (en Solana no hay mempool público, pero RPCs y clientes de validador modificados pueden filtrarla) y ejecutar antes que tú, empeorando tu precio. La protección MEV de Jupiter (activa por defecto en Ultra, toggle MEV Protect en Manual) envía tu transacción por canales privados vía Jito. Reducir el slippage te protege de aceptar un precio mucho peor que el cotizado. Jupiter hace la optimización de ruta automáticamente, no necesitas dividir manualmente.'
        },
        {
          id: 'q6',
          question: 'Un amigo quiere usar Jupiter Perpetuals con 50× de apalancamiento en SOL porque "va a subir seguro". ¿Qué le dices?',
          options: [
            { id: 'a', text: 'Buena idea, SOL siempre sube' },
            { id: 'b', text: 'Con 50× de apalancamiento, un movimiento de apenas 2% en contra lo liquida completamente. SOL puede moverse 5-10% en horas. La gran mayoría de traders con apalancamiento alto pierden todo. Si quiere usar perps, máximo 2-3× y con stop loss' },
            { id: 'c', text: 'Los perpetuos no tienen riesgo porque son descentralizados' },
            { id: 'd', text: 'Debería usar 100× para maximizar ganancias, las liquidaciones solo ocurren en mercados bajistas' }
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
    number: '3 de 13',
    duration: '42 min',
    type: 'Estrategias',
    description: 'Conviértete en el banco. Aprende a proveer liquidez en Raydium, Orca y Meteora para ganar comisiones por cada swap que otros hacen. Entiende la impermanent loss, los pools concentrados, y cuándo vale la pena (y cuándo no).',
    sections: [
      {
        type: 'intro',
        title: 'Conviértete en el Banco',
        content: 'En el mundo tradicional, cuando cambias pesos por dólares en una casa de cambio, la casa se queda con un spread (comisión). En DeFi, **tú puedes ser la casa de cambio**. Cuando alguien hace un swap de SOL por USDC en Raydium o Meteora, necesita que haya liquidez disponible, tokens depositados en un pool que faciliten esa transacción. Los que depositan esos tokens son los **Liquidity Providers (LPs)**, y a cambio reciben una porción de las comisiones que se cobran por cada swap. Es un negocio real: los pools más activos de Solana generan millones de dólares en fees al mes. Pero no es dinero gratis, hay riesgos reales que debes entender antes de depositar un solo dólar.',
        highlight: {
          title: 'El Negocio de la Liquidez',
          text: 'Los pools de Solana generan colectivamente **cientos de millones de dólares** en fees mensuales para los LPs. Es una de las formas más lucrativas de generar rendimiento en DeFi, pero también una de las más malentendidas. Esta lección te da las herramientas para participar inteligentemente.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan los Pools de Liquidez?',
        content: 'Un pool de liquidez es un smart contract que contiene dos tokens (por ejemplo, SOL y USDC). Los usuarios que quieren intercambiar uno por otro lo hacen contra el pool, no contra otra persona:',
        features: [
          { icon: Layers, title: 'La Mecánica Básica', text: 'Depositas dos tokens en proporción igual (ejemplo: $500 de SOL + $500 de USDC = $1,000 en el pool SOL-USDC). Cada vez que alguien hace un swap SOL↔USDC usando ese pool, paga una comisión (típicamente 0.25-1%). Esa comisión se distribuye proporcionalmente entre todos los LPs del pool según su participación.' },
          { icon: Zap, title: 'Los Fees se Acumulan', text: 'No recibes los fees en tu wallet, se acumulan automáticamente en tu posición del pool. Si depositaste $1,000 y se acumularon $50 en fees, tu posición ahora vale $1,050. Para cobrarlos, retiras tu liquidez del pool. Una excepción importante: en los pools concentrados (Orca Whirlpools, Meteora DLMM, Raydium CLMM) los fees se acumulan por separado y puedes reclamarlos sin retirar tu liquidez. Mientras más volumen de trading tenga el pool, más fees ganas.' },
          { icon: BarChart3, title: 'APY Variable', text: 'Los rendimientos fluctúan enormemente. Un pool SOL-USDC estable puede generar 10-30% APY. Un pool de un memecoin en pleno hype puede generar 500-2,000% APY, pero por horas o días, no permanentemente. Los APYs que ves son estimaciones basadas en los fees recientes, no garantías de rendimiento futuro.' }
        ]
      },
      {
        type: 'main',
        title: 'Impermanent Loss: El Riesgo que Debes Dominar',
        content: 'Este es el concepto más importante y malentendido de la provisión de liquidez. **Impermanent Loss (IL)** es la diferencia entre lo que ganarías haciendo HODL vs lo que ganas como LP cuando los precios de los tokens cambian:',
        features: [
          { icon: TrendingDown, title: 'Cómo Ocurre', text: 'Depositas $500 SOL + $500 USDC ($1,000 total). SOL sube 100% (de $150 a $300). Si solo hubieras hecho HODL, tendrías $1,500 ($1,000 SOL + $500 USDC). Pero el pool rebalancea automáticamente, vende SOL caro y compra USDC. Tu posición en el pool vale ~$1,414 en lugar de $1,500. Esa diferencia de ~$86 es la impermanent loss (~5.7%).' },
          { icon: BarChart3, title: 'La Tabla que Debes Memorizar', text: 'Cambio de precio +25% → IL ~0.6%. Cambio +50% → IL ~2.0%. Cambio +100% (2×) → IL ~5.7%. Cambio +200% (3×) → IL ~13.4%. Cambio +400% (5×) → IL ~25.5%. Si un token hace 5× mientras estás en el pool, pierdes ~25% comparado con simplemente haberlo guardado.' },
          { icon: CheckCircle, title: '¿Cuándo Vale la Pena?', text: 'IL se llama "impermanent" porque si el precio vuelve al punto original, la pérdida desaparece. Además, los fees que ganas pueden superar la IL. Si ganas 50% APY en fees pero tu IL es del 5%, estás +45% en ganancia neta. El cálculo es: Ganancia neta = Fees ganados - Impermanent Loss. Solo participa cuando los fees justifican el riesgo.' }
        ]
      },
      {
        type: 'main',
        title: 'Pools Estándar vs Pools Concentrados (DLMM)',
        content: 'Hay dos tipos fundamentales de pools, y entender la diferencia es crucial para tu estrategia como LP:',
        features: [
          { icon: Globe, title: 'Pools Estándar (Raydium AMM, Orca)', text: 'Tu liquidez se distribuye en TODO el rango de precios posible, de $0 a infinito. Ventaja: tu posición siempre está activa sin importar el precio. Desventaja: la mayoría de tu capital está "desperdiciado" en rangos de precio donde nunca se va a operar. Eficiencia de capital: baja. Rendimiento: moderado pero predecible.' },
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
          { icon: Crosshair, title: 'Meteora', text: 'Especializado en pools concentrados (DLMM). La interface más sofisticada para LPs avanzados. Permite configurar rangos con precisión extrema y diferentes estrategias de distribución (spot, curve, bid-ask). Los LPs de Meteora en pools de memecoins volátiles han generado rendimientos extraordinarios, pero requiere experiencia.' },
          { icon: Globe, title: 'Orca', text: 'DEX con excelente interface de usuario. Sus "Whirlpools" son pools concentrados bien diseñados. Menos volumen que Raydium pero experiencia de usuario superior. Buena opción para quien viene de DeFi en otras chains y quiere una interface familiar.' }
        ]
      },
      {
        type: 'main',
        title: 'Yield Farming: Incentivos Adicionales',
        content: 'Además de los fees por swaps, muchos protocolos ofrecen **recompensas adicionales** en forma de tokens para atraer liquidez. Esto se llama Yield Farming:',
        features: [
          { icon: Award, title: 'Cómo Funciona', text: 'Un protocolo nuevo necesita liquidez para funcionar. Para atraerla, regala sus propios tokens a los LPs. Ejemplo: depositas liquidez en un pool nuevo de Raydium y recibes fees del pool + tokens RAY adicionales como incentivo. El APY combinado puede ser muy atractivo, pero los tokens de reward frecuentemente pierden valor con el tiempo.' },
          { icon: AlertTriangle, title: 'El Riesgo del Farming', text: 'Si el token de reward pierde 80% de su valor, tu APY real es mucho menor que el mostrado. Además, el TVL del pool crece rápidamente (todos quieren el yield), lo que diluye las recompensas por persona. El farming más rentable ocurre en las primeras horas/días, después la oportunidad se evapora.' },
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
            { id: 'a', text: '$20,000, todo se duplicó' },
            { id: 'b', text: '$14,142, la impermanent loss hace que ganes ~$4,142 en lugar de los $5,000 que habrías ganado solo haciendo HODL' },
            { id: 'c', text: '$10,000, vuelves al punto de partida' },
            { id: 'd', text: '$7,500, pierdes dinero' }
          ],
          correctAnswer: 'b',
          explanation: 'Con un cambio de precio de 2×, el valor de tu posición en el pool es: valor inicial × √(cambio de precio) = $10,000 × √2 ≈ $14,142. Haciendo HODL tendrías $15,000. El cociente pool/HODL es 2√r/(1+r) ≈ 0.943, es decir, una impermanent loss de ~5.7% (~$858). Si los fees generados superan esa pérdida, proveer liquidez fue la mejor decisión.'
        },
        {
          id: 'q2',
          question: '¿En qué situación proveer liquidez es claramente mejor que hacer HODL?',
          options: [
            { id: 'a', text: 'Siempre es mejor proveer liquidez' },
            { id: 'b', text: 'Cuando los fees generados por el pool superan la impermanent loss. Esto ocurre típicamente en pools con alto volumen y baja volatilidad relativa (como stablecoin pools o pares principales con mucho trading)' },
            { id: 'c', text: 'Solo cuando un token va a subir mucho' },
            { id: 'd', text: 'Nunca vale la pena, la impermanent loss siempre termina siendo mayor que cualquier fee acumulado' }
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
            { id: 'c', text: 'Es un scam, los APYs de tres o cuatro cifras son siempre inventados por el protocolo' },
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
            { id: 'd', text: 'Los pools estándar pagan más fees porque llevan más tiempo operando en el mercado' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un trade-off entre eficiencia y mantenimiento. Los pools estándar son "set and forget", ideales para quien no quiere monitorear. Los pools concentrados son como un oficio activo: requieren atención constante pero recompensan con rendimientos mucho mayores cuando se gestionan correctamente. Elige según tu disponibilidad de tiempo y experiencia.'
        },
        {
          id: 'review_1',
          question: '📝 Repaso: ¿Por qué Jupiter es un "agregador" de liquidez en vez de un DEX simple?',
          options: [
            { id: 'a', text: 'Porque solo funciona en Solana' },
            { id: 'b', text: 'Porque busca el mejor precio entre múltiples DEXs y divide tu swap entre ellos' },
            { id: 'c', text: 'Porque cobra fees más altos que otros exchanges' },
            { id: 'd', text: 'Porque requiere KYC para operar' }
          ],
          correctAnswer: 'b',
          explanation: 'Jupiter no tiene su propia liquidez, compara precios en Raydium, Orca, Meteora y otros DEXs, y rutea tu swap por la mejor combinación posible. Por eso casi siempre obtienes mejor precio que yendo directo a un DEX individual. (Recuerda la Lección 25: Jupiter)'
        }
      ]
    }
  },
  27: {
    id: 27,
    title: 'Lending & Borrowing',
    level: 'Avanzado',
    number: '4 de 13',
    duration: '38 min',
    type: 'Tutorial Práctico',
    description: 'Accede a liquidez sin vender tus criptos. Deposita SOL como colateral, pide prestado USDC, y mantén tu exposición alcista. Pero cuidado: si no entiendes la liquidación, puedes perder todo.',
    sections: [
      {
        type: 'intro',
        title: 'El Banco Descentralizado',
        content: '¿Necesitas dinero pero crees que SOL va a subir y no quieres vender? En el mundo tradicional, pedirías un préstamo en el banco usando tu casa como garantía. En DeFi, haces exactamente lo mismo, pero sin banco, sin papeleo, sin aprobación de crédito, y en 30 segundos. Depositas tus SOL como **colateral** (garantía) en un protocolo como Kamino o MarginFi. A cambio, puedes pedir prestado USDC, USDT u otros tokens por un valor menor al de tu colateral. Mientras tu colateral valga significativamente más que tu deuda, todo funciona perfectamente. Si el precio de tu colateral cae demasiado... bueno, ahí es donde las cosas se ponen peligrosas.',
        highlight: {
          title: 'La Doble Cara del Lending',
          text: 'Lending & Borrowing es una de las herramientas más poderosas de DeFi, y una de las más peligrosas. Usado correctamente, te da acceso a capital sin vender activos que crees que van a subir. Usado incorrectamente, pierdes todo tu colateral en una liquidación. Esta lección te enseña a usarlo de forma segura.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Colateral, LTV y Liquidación',
        content: 'El lending en DeFi se basa en tres conceptos fundamentales que debes dominar antes de depositar un solo token:',
        features: [
          { icon: Lock, title: 'Colateral', text: 'El activo que depositas como garantía. Si depositas 10 SOL a $180 cada uno, tu colateral vale $1,800. El protocolo lo "bloquea" hasta que devuelvas tu préstamo. Tu colateral sigue siendo tuyo, pero si no pagas o si pierde demasiado valor, el protocolo puede venderlo para cubrir la deuda.' },
          { icon: Percent, title: 'LTV (Loan-to-Value)', text: 'El porcentaje de tu colateral que puedes pedir prestado. Si el LTV máximo es 75%, con $1,800 de colateral puedes pedir hasta $1,350 prestados. Pero NUNCA uses el máximo, es jugar con fuego. Con LTV de 75% y un umbral de liquidación de 80%, una caída de apenas ~6% en tu colateral te liquida (1 − 0.75/0.80 = 6.25%). Con LTV de 50%, necesitas una caída de ~35-40%. La regla profesional: mantén tu LTV por debajo del 50-60%.' },
          { icon: AlertTriangle, title: 'Liquidación', text: 'Si el valor de tu colateral cae tanto que tu LTV supera el umbral de liquidación, el protocolo vende automáticamente (parte de) tu colateral para pagar la deuda. No hay advertencia humana, es un bot que ejecuta en milisegundos. Pierdes tu colateral vendido más una penalización de liquidación (típicamente 5-10%). La liquidación es **irreversible**.' },
          { icon: Activity, title: 'Health Factor', text: 'Es el indicador clave que debes monitorear. Health Factor = Valor del Colateral × Factor de Liquidación / Deuda Total. Si baja de 1.0, te liquidan. A 1.5 estás en zona de peligro. A 2.0+ estás relativamente seguro. Los protocolos muestran esto claramente en su interface, no lo ignores.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Protocolos de Lending en Solana',
        content: 'Solana tiene varios protocolos de lending maduros y auditados. Cada uno tiene sus ventajas y diferencias:',
        features: [
          { icon: Landmark, title: 'Kamino Finance', text: 'El protocolo de lending más grande de Solana por TVL. Interface limpia y fácil de usar. Soporta múltiples colaterales (SOL, jitoSOL, mSOL, BONK, etc). Tasas de interés competitivas. Tiene un sistema de "multiply" que automatiza el looping (amplificar tu posición). Es la opción más popular y la recomendada para empezar.' },
          { icon: Shield, title: 'MarginFi', text: 'Protocolo con enfoque en seguridad y conservadurismo. Parámetros de riesgo más estrictos que Kamino (lo cual puede ser bueno para tu protección). Pionero en lending en Solana. Su token MRGN finalmente se lanzó en noviembre de 2025, honrando 1:1 los puntos acumulados por sus usuarios; hoy marginfi opera impulsado por Project 0.' },
          { icon: Zap, title: 'Save (antes Solend)', text: 'Uno de los primeros protocolos de lending de Solana, rebautizado como Save (save.finance) en 2024. Más simple y directo. Buena opción si quieres una experiencia básica sin las funciones avanzadas de Kamino. Menos TVL que los anteriores pero con historial probado.' }
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
            'Riesgo de liquidación: alto, con 75% LTV una caída de ~6% te liquida',
            'Estrategia: apalancar posición para maximizar exposición'
          ]
        }
      },
      {
        type: 'main',
        title: 'Looping: La Estrategia de las Ballenas',
        content: 'El "looping" o "leverage looping" es la estrategia avanzada más usada por traders grandes en Solana. Es poderosa pero peligrosa:',
        features: [
          { icon: RefreshCw, title: 'Cómo Funciona', text: 'Depositas 10 SOL → Pides prestado 800 USDC → Compras más SOL con esos USDC → Depositas ese SOL como colateral adicional → Pides prestado más USDC → Repites. Después de 3-4 loops con ese LTV moderado (~44% por vuelta), tus 10 SOL iniciales controlan una posición de ~17-18 SOL (~1.8× apalancamiento). Si SOL sube 20%, ganas ~35% en lugar de 20%. Con LTVs más agresivos por vuelta, el apalancamiento puede llegar a 2-4×.' },
          { icon: AlertTriangle, title: 'El Riesgo Amplificado', text: 'Si SOL cae 20%, una posición apalancada 3× pierde ~60% de tu capital. Y cada loop acerca tu LTV al umbral de liquidación: caídas que una posición simple sobrevive sin problema pueden liquidar completamente una posición loopeada y costarte TODOS tus SOL originales. El looping amplifica todo: ganancias Y pérdidas. Es por eso que solo traders con experiencia y capital que pueden perder deben usarlo.' },
          { icon: Zap, title: 'Kamino Multiply', text: 'Kamino tiene una función llamada "Multiply" que automatiza el looping con un clic. Seleccionas el multiplicador (1.5×, 2×, 3×) y el protocolo hace todos los loops automáticamente. Es conveniente pero peligroso si no entiendes los riesgos. Trata el Multiply con el mismo respeto que un perpetuo con apalancamiento.' }
        ]
      },
      {
        type: 'main',
        title: 'Errores Fatales que Debes Evitar',
        content: 'Estos errores han costado millones de dólares a usuarios de lending en DeFi. No cometas ninguno:',
        features: [
          { icon: AlertTriangle, title: 'Pedir Prestado al Máximo LTV', text: 'Si el protocolo te permite 75% LTV, NUNCA uses el 75%. Con un umbral de liquidación de 80%, una caída de apenas ~6% te liquida. Los profesionales se mantienen en 40-50% LTV. El espacio extra entre tu LTV y el umbral de liquidación es tu "seguro de vida" en mercados volátiles.' },
          { icon: AlertTriangle, title: 'No Monitorear en Mercados Volátiles', text: 'SOL puede caer 20-30% en horas durante eventos de pánico. Si tu Health Factor ya estaba bajo, puedes ser liquidado mientras duermes. Configura alertas automáticas o usa LTVs lo suficientemente conservadores para sobrevivir caídas del 40%+.' },
          { icon: AlertTriangle, title: 'Usar Colateral Volátil sin Margen', text: 'Usar SOL como colateral es razonable, es un activo blue chip con liquidez profunda. Usar un memecoin como colateral es suicida: puede perder 80% en un día. Algunos protocolos lo permiten, pero que puedas no significa que debas. Mantén tu colateral en activos que no van a desplomarse de la noche a la mañana.' }
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
            { id: 'd', text: 'Puedes ignorarlo tranquilamente porque el precio siempre termina recuperándose con el tiempo' }
          ],
          correctAnswer: 'b',
          explanation: 'La liquidación es automática y no espera a que el precio se recupere. Con colateral de $1,080 y deuda de $900, tu LTV es ~83%, muy por encima del umbral de liquidación (típicamente 75-80%). Los bots de liquidación ejecutan en milisegundos. Por eso la regla es mantener LTV bajo (40-50%) para tener margen en caídas fuertes.'
        },
        {
          id: 'q2',
          question: 'El protocolo muestra que puedes pedir prestado hasta $1,350 con tu colateral de $1,800 (75% LTV máximo). ¿Cuánto deberías pedir prestado?',
          options: [
            { id: 'a', text: '$1,350, el máximo disponible para aprovechar todo el capital' },
            { id: 'b', text: '$720-900 (40-50% LTV) para mantener un margen de seguridad amplio. Con 50% LTV, SOL tendría que caer ~35-40% para activar la liquidación, dándote tiempo de reaccionar' },
            { id: 'c', text: '$1,200, dejo un poquito de margen' },
            { id: 'd', text: 'No pido prestado nada, es muy riesgoso' }
          ],
          correctAnswer: 'b',
          explanation: 'Los traders profesionales se mantienen en 40-50% LTV por una razón: SOL puede caer 20-30% en horas durante eventos de pánico. Con 50% LTV y umbral de liquidación de 80%, necesitas una caída de ~35-40% para ser liquidado. Con 75% LTV, una caída de apenas ~6% te liquida. Ese margen extra es tu seguro de supervivencia.'
        },
        {
          id: 'q3',
          question: '¿Qué es el "looping" en lending y por qué lo usan las ballenas?',
          options: [
            { id: 'a', text: 'Es pedir prestado y repagar constantemente sin propósito' },
            { id: 'b', text: 'Depositar colateral → pedir prestado → comprar más colateral → depositar → repetir. Amplifica tu exposición 2-4× al activo. Si SOL sube 20%, ganas 40-80%. Pero si cae 20%, puedes perder todo' },
            { id: 'c', text: 'Es una forma de staking especial que combina rewards de varios validadores' },
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
          explanation: 'Este es el caso de uso más limpio y seguro del lending: acceder a liquidez temporal sin vender tu posición de largo plazo. Con 40-50% LTV, tienes margen amplio contra caídas. Cuando devuelves los $500 + intereses, recuperas todos tus SOL, que ojalá valgan más que cuando los depositaste.'
        },
        {
          id: 'q5',
          question: 'Tu Health Factor en Kamino bajó a 1.2 durante una caída del mercado. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Nada, 1.2 está bien' },
            { id: 'b', text: 'Actúo inmediatamente: deposito más colateral O devuelvo parte del préstamo para subir mi Health Factor a 2.0+. Un Health Factor de 1.2 significa que una caída adicional del 16-17% me liquida' },
            { id: 'c', text: 'Pido prestado más para comprar en el dip y promediar mi posición a la baja' },
            { id: 'd', text: 'Espero a que suba el precio' }
          ],
          correctAnswer: 'b',
          explanation: 'Health Factor de 1.2 es zona de peligro serio. Estás a ~16-17% de una caída de la liquidación. En crypto, caídas de 15-20% ocurren regularmente en minutos durante eventos de pánico. Tienes dos opciones: agregar más colateral (depositar más SOL/otros activos) o devolver parte del préstamo. Ambas suben tu Health Factor. No esperes, los mercados no esperan.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 1,
        title: 'Checkpoint: Health Factor en Peligro',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Depositaste 10 SOL ($1,800) y pediste prestado $1,200 USDC. SOL cae 25%. Ahora tu colateral vale $1,350. El umbral de liquidación del protocolo está en 80% LTV. ¿Qué pasa?',
            options: [
              'Te liquidan inmediatamente porque tu LTV subió',
              'Tu LTV ahora es ~89% ($1,200/$1,350), superaste el umbral del 80%, te liquidan parcialmente y pagas penalización',
              'No pasa nada porque tu colateral sigue valiendo más que tu deuda',
              'El protocolo te da 24 horas para añadir colateral'
            ],
            correctAnswer: 1,
            explanation: 'LTV = Deuda / Colateral = $1,200 / $1,350 = 89%. Cruzaste el umbral del 80%. La liquidación es automática, un bot vende parte de tu colateral en milisegundos. Pierdes la cantidad liquidada + penalización de 5-10%. Sin advertencias. Esta es la razón por la que los profesionales NUNCA empiezan cerca del máximo LTV. Con LTV inicial del 30-40%, SOL tendría que caer 50-60% antes de acercarse a liquidación.',
            hint: 'Calcula el nuevo LTV después de la caída.'
          }
        ]
      }
    ]
  },
  28: {
    id: 28,
    title: 'Riesgos de DeFi: La Guía Completa',
    level: 'Avanzado',
    number: '5 de 13',
    duration: '32 min',
    type: 'Seguridad',
    description: 'DeFi ofrece libertad financiera, pero la libertad viene con responsabilidad. Smart contract hacks, rug pulls, exploits de oráculos, y errores de usuario han costado más de $10 mil millones. Aprende a protegerte.',
    sections: [
      {
        type: 'intro',
        title: 'La Libertad Tiene un Precio',
        content: 'En DeFi, no hay banco que te reembolse si pierdes dinero. No hay "soporte al cliente" que revierta una transacción. No hay seguro de depósitos. **Tú eres responsable al 100% de tus fondos.** Esa es la belleza de la descentralización, y también su mayor riesgo. Desde 2020, más de $10 mil millones se han perdido en DeFi por hacks, exploits, rug pulls, y errores de usuario. Algunos de los protocolos más grandes y "seguros" del ecosistema han sido hackeados. Esto no significa que DeFi sea una estafa, significa que necesitas entender los riesgos para navegar este espacio de forma segura. En esta lección vas a aprender a identificar cada tipo de riesgo, cómo se manifiesta en la práctica, y qué puedes hacer para protegerte.',
        highlight: {
          title: 'La Estadística Que Importa',
          text: 'Solo en 2024, más de $1.7 mil millones se perdieron en hackeos y exploits de DeFi. El hack más grande de la historia crypto fue el de Bybit en 2025: cerca de **$1,400 millones** robados mediante ingeniería social, y eso que era un exchange con seguridad profesional. Entre los puentes, el de Ronin (Axie Infinity) se llevó **$625 millones**. Entender estos riesgos no es opcional, es requisito de supervivencia.'
        }
      },
      {
        type: 'main',
        title: 'Riesgo #1: Smart Contract Bugs',
        content: 'El riesgo más fundamental de DeFi. Los protocolos son código, y todo código puede tener errores. Un bug en el smart contract puede permitir que un hacker drene todos los fondos:',
        features: [
          { icon: Cpu, title: 'Cómo Ocurre', text: 'Un programador comete un error lógico en el código del smart contract. Puede ser algo tan sutil como un error de redondeo, una verificación faltante, o una interacción inesperada entre dos funciones. Un hacker encuentra este error, escribe un script que lo explota, y drena el protocolo en minutos. Para cuando los desarrolladores reaccionan, los fondos ya están en el mixer.' },
          { icon: Shield, title: 'Cómo Protegerte', text: '(1) Solo usa protocolos con múltiples auditorías de firmas reputadas (Halborn, OtterSec, Neodyme para Solana). (2) Prefiere protocolos con tiempo en el mercado, si llevan 1+ año sin hacks con TVL alto, su código está battle-tested. (3) Nunca pongas más del 20-30% de tu portafolio en un solo protocolo. (4) Revisa si el protocolo tiene un programa de bug bounty (recompensa por reportar vulnerabilidades).' },
          { icon: AlertTriangle, title: 'Caso Real: Wormhole ($320M)', text: 'En febrero 2022, un hacker encontró una vulnerabilidad en el bridge Wormhole que conectaba Solana con Ethereum. Explotó el bug y minteó 120,000 ETH falsos. Jump Crypto (inversor de Wormhole) reemplazó los fondos para salvar a los usuarios, pero no todos los protocolos tienen un "padrino" millonario.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #2: Rug Pulls y Estafas',
        content: 'Un rug pull ocurre cuando los creadores de un proyecto roban deliberadamente los fondos de los usuarios. Es diferente a un hack, aquí no hay vulnerabilidad técnica, sino intención criminal:',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funciona', text: 'El equipo crea un token/protocolo, genera hype, atrae depósitos de usuarios, y luego drena todos los fondos y desaparece. Puede ser tan simple como crear un pool de liquidez, esperar a que la gente compre el token, y retirar toda la liquidez (leaving holders con un token sin valor). O tan elaborado como construir un protocolo aparentemente legítimo durante meses y escapar con millones.' },
          { icon: Search, title: 'Red Flags de un Rug Pull', text: '(1) Equipo anónimo sin historial verificable. (2) Promesas de rendimientos absurdos (1,000%+ APY "garantizado"). (3) Smart contracts no verificados o sin auditoría. (4) Liquidez no bloqueada (el equipo puede retirar liquidez del pool en cualquier momento). (5) Presión para invertir rápido ("solo quedan 2 horas"). (6) La mayoría del supply en manos del equipo.' },
          { icon: Eye, title: 'Cómo Verificar', text: 'Usa herramientas como RugCheck.xyz para tokens de Solana. Verifica si la liquidez está bloqueada (locked LP). Revisa en el explorer (solscan.io) si pocas wallets controlan la mayoría del supply. Si el contrato no está verificado y el equipo es anónimo, no deposites tus ahorros, como máximo, una cantidad que puedas perder al 100%.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #3: Exploits de Oráculos y Bridges',
        content: 'Estos son los vectores de ataque más sofisticados y los que han causado las pérdidas más grandes en la historia de DeFi:',
        features: [
          { icon: Link, title: 'Oráculos Manipulados', text: 'Los protocolos DeFi necesitan saber el precio de los activos (para lending, liquidaciones, etc). Obtienen esta información de "oráculos" como Pyth o Switchboard. Si un hacker manipula el precio que reporta el oráculo (por ejemplo, hacer creer al protocolo que SOL vale $1,000 por un instante), puede pedir prestamos enormes contra colateral "inflado" y quedarse con los fondos. Los protocolos serios usan múltiples oráculos y tienen protecciones contra precio manipulation.' },
          { icon: Network, title: 'Bridges Hackeados', text: 'Los bridges conectan diferentes blockchains (Solana ↔ Ethereum). Son los targets favoritos de hackers porque contienen enormes cantidades de fondos "bloqueados". Wormhole ($320M), Ronin ($625M), Nomad ($190M), los bridges son el eslabón más débil del ecosistema multi-chain. Cuando uses bridges, mueve lo mínimo necesario y no dejes fondos en ellos.' },
          { icon: Shield, title: 'Cómo Minimizar el Riesgo', text: 'Quédate en una sola chain (Solana) tanto como sea posible para evitar bridges. Si necesitas bridge, usa Wormhole o deBridge (los más auditados de Solana). Para lending, prefiere protocolos que usan Pyth como oráculo (el principal de Solana, respaldado por Jump Crypto). Evita protocolos que usan un solo oráculo sin respaldo.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #4: Errores de Usuario',
        content: 'Irónicamente, la mayor causa de pérdida de fondos en DeFi no son los hackers, eres tú. Los errores de usuario son responsables de una porción enorme de fondos perdidos:',
        features: [
          { icon: Wallet, title: 'Enviar a Dirección Equivocada', text: 'Enviar SOL a una dirección de Ethereum, USDC a una wallet inexistente, o cualquier error de dirección. En blockchain, las transacciones son IRREVERSIBLES. No hay botón de "deshacer". Siempre envía una transacción de prueba pequeña primero (0.01 SOL) antes de enviar cantidades grandes.' },
          { icon: Lock, title: 'Aprobar Contratos Maliciosos', text: 'Al conectar tu wallet a un sitio fraudulento y firmar una transacción, puedes dar permisos para que drenen tu wallet. NUNCA firmes transacciones en sitios que no reconoces. Lee lo que estás firmando en Phantom, si dice "Approve unlimited spending" para un sitio desconocido, rechaza inmediatamente.' },
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
          { icon: Wallet, title: 'Separación de Wallets', text: 'Usa wallets diferentes para diferentes niveles de riesgo: (1) Cold wallet (Ledger) para ahorros que no tocas. (2) Hot wallet principal (Phantom) para DeFi en protocolos establecidos. (3) Burner wallet para experimentar con protocolos nuevos o desconocidos. Si tu burner es hackeada, solo pierdes lo que tenía, no tu patrimonio.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Sobrevivir y Prosperar en DeFi',
        items: [
          'Los 4 riesgos principales de DeFi: smart contract bugs (errores de código), rug pulls (estafas deliberadas), exploits de oráculos/bridges (ataques sofisticados), y errores de usuario (enviar a dirección equivocada, firmar transacciones maliciosas).',
          'Más de $10 mil millones se han perdido en DeFi. Los bridges (Wormhole, Ronin) han sido los targets más grandes. Quédate en una sola chain (Solana) cuando sea posible para minimizar este riesgo.',
          'Antes de depositar en cualquier protocolo: verifica auditorías, tiempo en el mercado, código verificado, y bug bounty. Si un protocolo es nuevo, sin auditoría, y con equipo anónimo, es una apuesta, no una inversión.',
          'Regla del 20-30%: nunca más de un tercio de tu portafolio en un solo protocolo. Si es hackeado, pierdes una parte, no todo. Diversifica entre 3-5 protocolos establecidos.',
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
          explanation: 'Los bridges son "honeypots" masivos: contienen cientos de millones en fondos bloqueados, y conectar dos blockchains diferentes crea complejidad adicional (más código = más posibilidades de bugs). Ronin ($625M), Wormhole ($320M), Nomad ($190M): tres de los mayores hacks de la historia de DeFi fueron bridges (Poly Network con $611M y BNB Bridge con $566M también están entre los más grandes). La mejor defensa: minimiza el uso de bridges y quédate en una sola chain cuando sea posible.'
        },
        {
          id: 'q3',
          question: 'Conectas tu wallet a un sitio que dice ser "Jupiter" pero la URL es jup-airdrop.com. Aparece un popup pidiendo que firmes una transacción. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Firmo, dice Jupiter y parece legítimo' },
            { id: 'b', text: 'Rechazo inmediatamente. La URL real de Jupiter es jup.ag. Esto es phishing, firmar esa transacción podría dar permisos para drenar toda mi wallet. Desconecto, cierro la pestaña, y revoco cualquier permiso que haya dado' },
            { id: 'c', text: 'Firmo pero con una cantidad pequeña para probar' },
            { id: 'd', text: 'Pregunto en el chat de soporte del sitio si es legítimo antes de firmar nada' }
          ],
          correctAnswer: 'b',
          explanation: 'Los sitios de phishing son la forma más común de robo en crypto. Replican interfaces conocidas con URLs similares. Al firmar, puedes aprobar permisos que permiten drenar TODOS los tokens de tu wallet, no solo los que ves en pantalla. Siempre verifica la URL exacta. Marca los sitios reales en tus favoritos. Si tienes dudas, no firmes nada.'
        },
        {
          id: 'q4',
          question: 'Tienes $50,000 en DeFi en Solana. ¿Cómo deberías distribuir tus fondos para gestionar el riesgo de smart contract?',
          options: [
            { id: 'a', text: 'Todo en un solo protocolo para simplificar' },
            { id: 'b', text: 'Distribuir entre 3-5 protocolos establecidos (máximo 20-30% en cada uno). Si un protocolo es hackeado, pierdes una porción, no todo. Usar protocolos con auditorías, historial probado, y TVL alto' },
            { id: 'c', text: 'Distribuir en 20 protocolos diferentes para máxima diversificación' },
            { id: 'd', text: 'Dejarlo todo en stablecoins en mi wallet' }
          ],
          correctAnswer: 'b',
          explanation: 'La diversificación entre protocolos es la defensa principal contra smart contract risk. 3-5 protocolos es el balance ideal: suficiente diversificación sin la complejidad de gestionar 20 posiciones. Cada protocolo debe ser establecido (1+ año), auditado, y con TVL significativo. Si uno es hackeado, pierdes 20-30%, doloroso pero recuperable.'
        },
        {
          id: 'q5',
          question: '¿Qué es un "rug pull" y cómo puedes identificarlo antes de que ocurra?',
          options: [
            { id: 'a', text: 'Es cuando el precio de un token baja naturalmente' },
            { id: 'b', text: 'Es cuando los creadores de un proyecto drenan deliberadamente los fondos de los usuarios y desaparecen. Red flags: equipo anónimo, sin auditoría, liquidez no bloqueada, promesas de rendimientos absurdos, presión para invertir rápido' },
            { id: 'c', text: 'Solo pasa en Ethereum, no en Solana' },
            { id: 'd', text: 'Es imposible de predecir, ni siquiera con herramientas de análisis on-chain' }
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
    number: '7 de 13',
    duration: '30 min',
    type: 'Mercado',
    description: 'Los NFTs en Solana van mucho más allá de "JPEGs caros". Son acceso a comunidades exclusivas, herramientas de identidad digital, compresión que permite mintear millones por centavos, y un mercado profesional con Tensor y Magic Eden.',
    sections: [
      {
        type: 'intro',
        title: 'Más Allá de los JPEGs',
        content: 'Si tu imagen de los NFTs se quedó en "monos caros en Ethereum" (Bored Apes) del 2021, necesitas actualizarte. Los NFTs en Solana han evolucionado en algo fundamentalmente diferente. Sí, existe el componente de arte y coleccionismo, pero lo más interesante es cómo los NFTs se han convertido en **herramientas de acceso, identidad y utilidad**. Un NFT de Mad Lads no es solo una imagen, es tu entrada a una de las comunidades más activas del ecosistema Solana, con acceso exclusivo a eventos, airdrops, y networking. Un NFT de Tensorians te da descuentos en fees del marketplace. Los cNFTs (NFTs comprimidos) permiten crear un millón de tokens por unos pocos SOL (varios cientos de dólares), abriendo casos de uso que en Ethereum son económicamente imposibles: tickets de eventos, certificados educativos, items de videojuegos, y más.',
        highlight: {
          title: 'La Ventaja de Solana',
          text: 'Mintear un NFT en Ethereum L1 cuesta hoy ~$1-5 en gas (llegó a costar $30-100+ en 2021). Un mint regular en Solana cuesta ~0.01 SOL más rent (unos $1-3). La verdadera diferencia son los cNFTs (comprimidos): cuestan fracciones de centavo cada uno, y un árbol para **1 millón de NFTs cuesta ~5-7 SOL** (varios cientos de dólares). Esa diferencia habilita categorías enteras de uso que de otra forma serían imposibles.'
        }
      },
      {
        type: 'main',
        title: '¿Qué son los NFTs? La Versión Real',
        content: 'Olvida las definiciones superficiales. Un NFT (Non-Fungible Token) es un certificado de propiedad digital único, registrado en la blockchain, que nadie puede falsificar ni duplicar:',
        features: [
          { icon: Gem, title: 'Propiedad Verificable', text: 'Cada NFT tiene un dueño verificable en la blockchain. No necesitas confiar en nadie, cualquiera puede verificar que TÚ eres el dueño legítimo. Esto es revolucionario: por primera vez en la historia de internet, puedes poseer algo digital de forma verificable y transferible sin intermediarios.' },
          { icon: Lock, title: 'Escasez Digital', text: 'Cada colección tiene un supply definido (por ejemplo, Mad Lads tiene exactamente 10,000 NFTs). No se pueden crear más. Esa escasez, combinada con la demanda de la comunidad, determina el precio. Un JPEG se puede copiar, pero el NFT que lo autentica como "original" es único e irrepetible.' },
          { icon: Zap, title: 'Programabilidad', text: 'Los NFTs no son estáticos, son programables. Pueden otorgar acceso a contenido exclusivo, desbloquear funciones en apps, evolucionar con el tiempo, o interactuar con protocolos DeFi. En gaming, un NFT puede ser una espada que mejora mientras juegas. Las posibilidades son limitadas solo por la creatividad de los desarrolladores.' }
        ]
      },
      {
        type: 'main',
        title: 'El Ecosistema de NFTs en Solana',
        content: 'Solana tiene un ecosistema de NFTs rico y diverso. Estas son las categorías principales que encontrarás:',
        features: [
          { icon: Users, title: 'Colecciones PFP (Profile Picture)', text: 'Mad Lads, Claynosaurz, Tensorians, son colecciones de imágenes únicas que la gente usa como foto de perfil en redes sociales. Pero son mucho más que imágenes: representan membresía en una comunidad exclusiva. Los holders de Mad Lads, por ejemplo, tuvieron acceso anticipado a múltiples airdrops y eventos. El valor no está en la imagen, está en la comunidad y los beneficios asociados.' },
          { icon: Cpu, title: 'cNFTs (Compressed NFTs)', text: 'La innovación más importante de Solana para NFTs. Usando "state compression", puedes crear millones de NFTs por una fracción del costo normal. DRiP.haus distribuyó millones de NFTs artísticos gratis usando esta tecnología. Los proyectos de gaming pueden crear items in-game como NFTs comprimidos. Las empresas pueden emitir tickets, certificados y collectibles a escala masiva.' },
          { icon: Award, title: 'NFTs de Utilidad', text: 'NFTs que dan acceso o beneficios concretos: descuentos en fees (Tensorians en Tensor), acceso a contenido premium, pases VIP para eventos, governance en DAOs, o bonificaciones en protocolos DeFi. El valor de estos NFTs está directamente vinculado a la utilidad que ofrecen, no a la especulación.' },
          { icon: Gem, title: 'Arte Generativo y 1/1', text: 'Artistas digitales usan Solana para crear y vender arte en formato NFT. Las colecciones generativas crean piezas únicas usando algoritmos. Los artistas 1/1 venden piezas individuales como obras de arte digital. Exchange Art es la plataforma curada de referencia para arte 1/1 en Solana y facilita la venta directa de artista a coleccionista (Formfunction, otra plataforma de arte que competía en el mismo nicho, cerró en marzo de 2023).' }
        ]
      },
      {
        type: 'glossary',
        terms: [
          {
            term: 'DAO (Organización Autónoma Descentralizada)',
            definition: 'Una "empresa" o comunidad que se gobierna por código y votos, no por jefes ni juntas directivas. Los miembros tienen tokens de gobernanza que les dan poder de voto. Cuando alguien propone un cambio (ej: "subir los fees del protocolo del 0.1% al 0.2%"), los miembros votan con sus tokens. Si pasa, el smart contract ejecuta la decisión automáticamente. No hay CEO que pueda anularlo. Ejemplos: Uniswap (decisiones sobre el DEX), MakerDAO (estabilidad del stablecoin DAI), Jupiter (decisiones sobre el agregador).',
            whyItMatters: 'Si tienes tokens de gobernanza (JUP, UNI, AAVE, etc.), tienes poder real sobre protocolos que manejan miles de millones. La mayoría nunca vota, por eso tu voto importa más de lo que crees. En la Lección 46 profundizamos en cómo participar.'
          }
        ]
      },
      {
        type: 'main',
        title: 'Los Marketplaces: Dónde Comprar y Vender',
        content: 'Para operar con NFTs en Solana, necesitas conocer los marketplaces principales:',
        features: [
          { icon: BarChart3, title: 'Tensor', text: 'El marketplace más profesional de Solana. Interface tipo exchange con orderbooks, gráficos de floor price, y herramientas analíticas avanzadas. Ideal para traders que quieren analizar datos antes de comprar. Permite hacer ofertas (bids) en colecciones enteras y tiene fees competitivos. A mediados de 2026 concentra la mayor parte del volumen de traders profesionales (~60-70% del volumen diario). Tensor es a los NFTs lo que Jupiter es a los tokens.' },
          { icon: Globe, title: 'Magic Eden', text: 'El marketplace más conocido y accesible. Interface amigable para principiantes. Lidera el volumen retail, y en febrero de 2026 anunció que se reenfoca 100% en Solana (cerró sus brazos de Bitcoin y EVM). Tiene launchpad para nuevas colecciones. Si es tu primera vez comprando un NFT, Magic Eden tiene la experiencia más suave.' },
          { icon: Search, title: 'Cómo Evaluar Antes de Comprar', text: 'Antes de comprar cualquier NFT, revisa: (1) Floor price (precio mínimo) y su tendencia, ¿sube o baja? (2) Volumen de trading, ¿hay actividad real o está muerto? (3) Holders únicos, ¿cuántas personas diferentes tienen NFTs de la colección? (4) Comunidad, ¿el Discord/Twitter está activo? (5) Utilidad, ¿qué beneficios concretos da tener el NFT? Y una regla de seguridad: antes de conectar tu wallet a un mint o marketplace nuevo, usa una burner wallet como enseña la lección de Seguridad Operacional Avanzada de este nivel.' }
        ]
      },
      {
        type: 'comparison',
        title: 'NFTs en Solana vs NFTs en Ethereum',
        leftSide: {
          title: 'Solana',
          points: [
            'Costo de minteo regular: ~0.01 SOL más rent (~$1-3)',
            'cNFTs: fracciones de centavo por NFT a escala masiva',
            'Transacciones instantáneas (~400ms)',
            'Marketplaces: Tensor, Magic Eden',
            'Enfoque en utilidad y comunidades activas',
            'Mercado más pequeño, enfocado en utilidad y cNFTs'
          ]
        },
        rightSide: {
          title: 'Ethereum',
          points: [
            'Costo de minteo: ~$1-5 en gas L1 (post-Dencun)',
            'Sin compresión nativa (costoso a escala)',
            'Transacciones L1 lentas (~12s)',
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
          { icon: TrendingDown, title: 'La Realidad del Mercado', text: 'El mercado NFT en su conjunto está más de 90% abajo de su pico de 2021-2022; la historia hoy es utilidad y cNFTs, no especulación con PFPs. Y el 90%+ de las colecciones de NFTs eventualmente llegan a floor price cercano a cero. Las colecciones que mantienen valor a largo plazo son la excepción, no la regla. Nunca trates un NFT como una "inversión segura", trata cualquier compra especulativa como dinero que puedes perder al 100%.' },
          { icon: AlertTriangle, title: 'Wash Trading', text: 'El volumen de trading de NFTs puede ser inflado artificialmente. Una persona puede comprar y vender el mismo NFT a sí misma repetidamente para simular actividad. Herramientas como Tensor muestran métricas de "organic volume" que intentan filtrar esto, pero no es perfecto. No te dejes impresionar solo por volumen alto.' },
          { icon: Shield, title: 'Criterios de Compra Inteligente', text: 'Compra NFTs por razones concretas: (1) Quieres ser parte de la comunidad y participar activamente. (2) La utilidad justifica el precio (descuentos, acceso, beneficios). (3) Te gusta genuinamente el arte y lo compras como coleccionista. (4) Entiendes que es especulación pura y usas dinero que puedes perder. NUNCA compres un NFT "porque está subiendo" sin entender qué estás comprando.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'NFTs: Lo Que Realmente Importa',
        items: [
          'Los NFTs son certificados de propiedad digital únicos en la blockchain. En Solana van más allá de "JPEGs": son acceso a comunidades, herramientas de identidad, items de gaming, y certificados verificables.',
          'cNFTs (NFTs comprimidos) son la gran innovación de Solana: un millón de NFTs por unos 5-7 SOL, fracciones de centavo por unidad. Esto habilita casos de uso masivos que en Ethereum son económicamente imposibles.',
          'Los marketplaces principales son Tensor (profesional, domina el volumen de traders) y Magic Eden (accesible, líder retail, 100% enfocado en Solana desde 2026). Usa Tensor si quieres analizar datos antes de comprar.',
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
            { id: 'd', text: 'Cualquier marketplace, todos son iguales y no necesito investigar' }
          ],
          correctAnswer: 'b',
          explanation: 'Tensor es el marketplace más profesional de Solana (con herramientas analíticas), y Magic Eden es el más accesible para principiantes. Investigar antes de comprar es CRUCIAL: un floor price descendente, volumen falso (wash trading), o una comunidad muerta son señales de que la colección no tiene futuro. Siempre haz tu investigación.'
        },
        {
          id: 'q3',
          question: 'Un amigo dice: "Los NFTs son una estafa, son solo JPEGs caros." ¿Cuál es la respuesta más precisa?',
          options: [
            { id: 'a', text: 'Tiene razón, todos los NFTs son una estafa diseñada para quitarle el dinero a los ingenuos' },
            { id: 'b', text: 'La mayoría de colecciones especulativas sí pierden valor, pero los NFTs como tecnología son mucho más que imágenes: representan propiedad digital verificable, acceso a comunidades, utilidad en protocolos, y habilitación de nuevos modelos de negocio' },
            { id: 'c', text: 'Todos los NFTs van a subir, solo necesita paciencia' },
            { id: 'd', text: 'Los NFTs reemplazan todo el sistema financiero' }
          ],
          correctAnswer: 'b',
          explanation: 'Es una respuesta matizada: sí, el 90%+ de colecciones especulativas pierden valor, eso es real. Pero la tecnología NFT (propiedad digital verificable) tiene aplicaciones genuinas: tickets, credenciales, gaming items, acceso a comunidades, y más. Los cNFTs de Solana especialmente habilitan casos de uso a escala masiva que antes eran imposibles.'
        },
        {
          id: 'q4',
          question: 'Ves una colección de NFTs en Tensor con mucho volumen de trading pero solo 150 holders únicos de 10,000 NFTs. ¿Qué indica esto?',
          options: [
            { id: 'a', text: 'Los holders son muy comprometidos' },
            { id: 'b', text: 'Probable wash trading: pocas personas están comprando y vendiendo entre sí para inflar el volumen artificialmente y atraer compradores reales' },
            { id: 'c', text: 'Es normal, las colecciones exitosas tienen pocos holders' },
            { id: 'd', text: 'Es una colección exclusiva para ballenas que acumulan posiciones grandes a propósito' }
          ],
          correctAnswer: 'b',
          explanation: 'La combinación de alto volumen + pocos holders es una señal clásica de wash trading. Si 10,000 NFTs están concentrados en 150 wallets, es probable que pocas personas estén manipulando el mercado. Una colección saludable tiene miles de holders únicos con distribución diversa. Siempre revisa el ratio holders/supply antes de comprar.'
        },
        {
          id: 'q5',
          question: '¿Por qué mintear NFTs en Solana cuesta una fracción de lo que cuesta en Ethereum?',
          options: [
            { id: 'a', text: 'Porque los NFTs de Solana son de menor calidad' },
            { id: 'b', text: 'Porque los fees de Solana son de centavos y los cNFTs bajan el costo a fracciones de centavo, mientras en Ethereum L1 el gas de un mint suele costar $1-5 y puede dispararse con congestión. Es resultado de la arquitectura, no de menor calidad' },
            { id: 'c', text: 'Porque Solana subsidia el minteo con su fundación' },
            { id: 'd', text: 'Los costos son iguales en ambas redes' }
          ],
          correctAnswer: 'b',
          explanation: 'La diferencia de costos es técnica: Solana procesa miles de transacciones por segundo con fees de fracciones de centavo, mientras Ethereum L1 procesa ~15 TPS con fees variables. Post-Dencun un mint en L1 suele costar $1-5 (en 2021 llegaba a $30-100+). Y la compresión de estado (cNFTs) lleva el costo en Solana a fracciones de centavo, lo que permite la experimentación a escala masiva que define el ecosistema NFT de Solana.'
        }
      ]
    }
  },
  30: {
    id: 30,
    title: 'Airdrops y Points Farming',
    level: 'Avanzado',
    number: '8 de 13',
    duration: '35 min',
    type: 'Estrategia',
    description: 'Los protocolos necesitan usuarios, y los recompensan con tokens de gobernanza. Solana ha tenido los airdrops más lucrativos de la historia: JTO, JUP, PYTH, W. Aprende a posicionarte como usuario temprano legítimamente.',
    sections: [
      {
        type: 'intro',
        title: 'Recompensas por Ser Temprano',
        content: 'En el mundo tradicional, los primeros clientes de una empresa no reciben nada especial. En crypto, los protocolos frecuentemente **regalan tokens de gobernanza** a sus primeros usuarios como recompensa por haber confiado en ellos cuando nadie más lo hacía. Estos "airdrops" han generado retornos extraordinarios. El airdrop de Jito (JTO) en diciembre de 2023 fue tan generoso que su asignación mínima elegible (~4,900 JTO) valía alrededor de $10,000 al momento del listado, solo por haber hecho staking de SOL a través de Jito. Jupiter (JUP) regaló tokens a quienes habían usado el DEX. Wormhole (W) recompensó a usuarios que habían hecho bridges. ¿La clave? No eran "inversores", eran **usuarios genuinos** que usaban estos protocolos como parte de su actividad normal en Solana. Los airdrops recompensan comportamiento orgánico, no especulación. Una advertencia honesta antes de empezar: la era dorada de los airdrops fue 2023-2024, los grandes protocolos de Solana ya lanzaron sus tokens, y las oportunidades de hoy son más competitivas y más modestas. Las estrategias de esta lección siguen aplicando, pero ajusta tus expectativas.',
        highlight: {
          title: 'Números Reales',
          text: 'El "Jupuary" de enero de 2024 distribuyó 1,000 millones de JUP, el 10% del supply de 10,000 millones (el 40% era el total multi-ronda reservado para la comunidad). El tier mínimo recibió ~200 JUP (~$130 al lanzamiento) y la mayoría de usuarios recibió bastante menos de 3,000 JUP, aunque los usuarios más activos sí recibieron miles de dólares. Solo por haber usado Jupiter como su DEX principal. Ese es el poder de ser temprano y genuino.'
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
        title: 'Cuidado: Los Estafadores También Aman los Airdrops',
        content: 'El momento del claim es el más peligroso de toda la estrategia de airdrops. Los drainers (contratos que vacían wallets) se disfrazan de páginas de reclamo, y cada airdrop grande viene acompañado de una ola de sitios falsos. Esta sección puede salvarte todo tu portafolio:',
        features: [
          { icon: AlertTriangle, title: 'Páginas de Claim Falsas', text: 'Cuando Jupiter lanzó JUP, apareció una ola de sitios de phishing imitando la página oficial de claim: dominios casi idénticos, interfaces clonadas, anuncios pagados en Google, y links en comentarios de X. Firmabas la "transacción de claim" y te drenaban la wallet completa. Este patrón se repite con CADA airdrop grande. La página de claim falsa es hoy una de las formas más comunes de robo en Solana.' },
          { icon: Search, title: 'Solo el Dominio Oficial', text: 'Reclama ÚNICAMENTE desde el dominio oficial del protocolo, verificado en su cuenta oficial de X o su Discord oficial (no en DMs, no en links de terceros, no en resultados de búsqueda pagados). Escribe la URL tú mismo o usa un favorito guardado. Si un supuesto airdrop te llega por DM o por un anuncio, asume que es una estafa.' },
          { icon: Shield, title: '"Paga una Fee para Desbloquear" = Estafa', text: 'Ningún airdrop legítimo te pide enviar tokens primero para "desbloquear", "verificar", o "activar" tu asignación. Si una página te pide pagar algo antes de recibir, es una estafa, siempre, sin excepciones. El único costo de un claim real es el fee de red de fracciones de centavo que pagas al firmar.' },
          { icon: Wallet, title: 'Usa una Burner Wallet', text: 'Reclama airdrops con una wallet separada de tus ahorros, y conecta solo esa wallet a páginas de claim. Si la página resulta maliciosa, pierdes lo que había en la burner, no tu portafolio. Aplica la arquitectura de wallets de la lección de Seguridad Operacional Avanzada de este nivel: cold storage para ahorros, hot wallet para operar, burner para claims y experimentos.' }
        ],
        highlight: {
          title: 'La Regla de Oro del Claim',
          text: 'Dominio oficial verificado + burner wallet + nunca pagar por recibir. Si cumples estas tres reglas, los drainers de airdrops no pueden tocarte.'
        }
      },
      {
        type: 'main',
        title: 'El Sistema de Puntos: La Nueva Norma',
        content: 'Desde 2024, la mayoría de protocolos han adoptado un sistema de "puntos" en lugar de airdrops sorpresa. Es más transparente pero también más competitivo:',
        features: [
          { icon: Target, title: 'Cómo Funcionan los Puntos', text: 'El protocolo anuncia públicamente: "Estamos dando puntos por usar nuestro producto". Cada acción (swap, depositar liquidez, hacer staking) acumula puntos. Cuando el protocolo lance su token, los puntos se convertirán en una asignación proporcional del airdrop. Más puntos = más tokens. Ejemplo: Kamino daba puntos por depositar en lending/borrowing antes de lanzar KMNO.' },
          { icon: BarChart3, title: 'La Economía de los Puntos', text: 'Los puntos crean un "mercado de expectativas". Si un protocolo tiene $500M en TVL acumulando puntos, y se espera que el token tenga un FDV (Fully Diluted Valuation) de $1B con un airdrop del 10% ($100M), entonces cada punto tiene un "valor estimado". Los farmers sofisticados calculan el ratio puntos/dólar para determinar si vale la pena.' },
          { icon: AlertTriangle, title: 'El Riesgo de los Puntos', text: 'No hay garantía de que los puntos se conviertan en tokens. El protocolo puede cambiar los criterios, reducir el porcentaje del airdrop, o añadir dilución con más temporadas de puntos. Además, si todos están farmeando el mismo protocolo, la asignación per cápita se diluye. No trates los puntos como dinero seguro, son una apuesta educada.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Posicionarte para Airdrops en Solana',
        content: 'La estrategia más efectiva no es "farmear" artificialmente, es ser un usuario genuino y activo del ecosistema:',
        features: [
          { icon: Zap, title: 'La Realidad de 2026: Los Grandes Ya Lanzaron', text: 'Jupiter, Jito, Kamino, Marinade, Drift, Tensor, Meteora y marginfi ya emitieron sus tokens: el primer airdrop grande de cada uno ya pasó. Pero usarlos sigue pagando, existen rondas secundarias y estacionales (el Jupuary de Jupiter continuó año tras año, aunque la DAO votó en abril de 2026 aplazarlo a mayo y recortarlo de 700M a 200M JUP), programas de puntos con temporadas nuevas, y protocolos jóvenes sin token que aparecen constantemente.' },
          { icon: Clock, title: 'Sé Consistente, No Puntual', text: 'Los criterios de airdrop favorecen la consistencia. Un usuario que hace 10 transacciones al mes durante 12 meses es más valioso que uno que hace 100 transacciones en un solo día. Los protocolos buscan usuarios genuinos, no bots que hacen bulk transactions para inflar actividad.' },
          { icon: Layers, title: 'Diversifica tus Actividades', text: 'No te limites a swaps. Haz staking, provee liquidez, usa lending, prueba nuevas funcionalidades. Los airdrops suelen dar bonificaciones por "breadth of usage" (diversidad de funciones usadas). Un usuario que usa 5 funciones diferentes es más valioso que uno que solo hace swaps repetitivos.' },
          { icon: Search, title: 'Identifica Protocolos Pre-Token', text: 'Los airdrops más lucrativos vienen de protocolos que TODAVÍA NO tienen token. Busca en DefiLlama protocolos de Solana con TVL alto y creciente pero sin token propio. Esos son los candidatos principales para un TGE futuro con airdrop. Cuanto antes empieces a usarlos, mayor será tu asignación. Eso sí: con el meta enfriado desde 2024, espera asignaciones más modestas que las de la era dorada.' }
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
          { icon: TrendingDown, title: 'La Estadística Incómoda', text: 'Históricamente, la mayoría de tokens de airdrop pierden valor en las semanas/meses posteriores al lanzamiento. ¿Por qué? Porque millones de personas reciben tokens gratis y muchos los venden inmediatamente, creando presión de venta masiva. JTO cayó 50% desde su máximo post-airdrop. W (Wormhole) cayó significativamente. Incluso JUP cotiza a mediados de 2026 alrededor de $0.25, ~60% por debajo de su precio de lanzamiento (~$0.65). La tendencia estadística es claramente bajista.' },
          { icon: Brain, title: 'La Estrategia Híbrida', text: 'Muchos traders experimentados usan una estrategia de 3 partes: (1) Vender 30-50% inmediatamente para "asegurar" ganancias reales. (2) Mantener 30-40% si crees en el protocolo a largo plazo. (3) Definir un stop loss mental para el resto ("si cae 50% desde aquí, vendo lo restante"). Esto te protege de la codicia ("puede subir más") y del arrepentimiento ("vendí todo y subió").' },
          { icon: CheckCircle, title: 'Factores a Considerar', text: '¿El token tiene utilidad real (governance, staking, descuentos)? ¿El protocolo tiene fundamentales sólidos (TVL creciente, fees altos, usuarios activos)? ¿La tokenomics es favorable (bajo supply circulante con vesting largo)? Si las respuestas son positivas, holdear una porción tiene sentido. Si el token es puro especulación sin utilidad, vender rápido suele ser la mejor estrategia.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Estrategia de Airdrops',
        items: [
          'Los airdrops recompensan a usuarios genuinos y tempranos con tokens de gobernanza. Los más lucrativos de Solana (JTO, JUP, PYTH, W) regalaron miles de dólares a usuarios activos. Esa era dorada fue 2023-2024: hoy las oportunidades son más modestas, pero el principio sigue vigente.',
          'El sistema de puntos es la nueva norma: los protocolos anuncian puntos por usar su producto, que luego se convierten en tokens. Es más transparente pero no garantizado, los criterios pueden cambiar.',
          'La mejor estrategia es ser un usuario genuino y diverso. Los protocolos grandes ya tienen token, así que apunta a programas de puntos, rondas estacionales, y protocolos nuevos sin token. Sé consistente durante meses.',
          'Seguridad primero: reclama airdrops SOLO desde el dominio oficial del protocolo (verificado en su X o Discord oficial), nunca pagues una "fee de desbloqueo", y usa una burner wallet para cada claim.',
          'Identifica protocolos sin token con TVL alto y creciente, son los candidatos principales para futuros airdrops. Cuanto antes empieces a usarlos, mayor será tu asignación potencial.',
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
            { id: 'a', text: 'Holdeo todo, "to the moon"' },
            { id: 'b', text: 'Vendo todo inmediatamente sin pensar' },
            { id: 'c', text: 'Estrategia híbrida: vendo 30-50% inmediatamente para asegurar $1,200-2,000 en ganancias reales, holdeo el resto si creo en los fundamentales del protocolo, y defino un stop loss mental para proteger lo restante' },
            { id: 'd', text: 'Lo deposito todo en un pool de liquidez del mismo token para ganar fees adicionales' }
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
            { id: 'd', text: 'Es imposible saber cuáles tendrán airdrop, los protocolos nunca dan señales anticipadas' }
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
    number: '9 de 13',
    duration: '28 min',
    type: 'Tendencias',
    description: 'Crypto sale del mundo digital al mundo físico. DePIN usa tokens para incentivar a millones de personas a construir infraestructura real: redes inalámbricas (Helium), mapas (Hivemapper), computación GPU (Render), y sensores ambientales. Solana es el epicentro.',
    sections: [
      {
        type: 'intro',
        title: 'Cuando Crypto Construye el Mundo Real',
        content: 'Hasta ahora, todo lo que hemos visto en crypto ocurre en el mundo digital: tokens, DeFi, NFTs, staking. Pero hay una categoría que está llevando blockchain al **mundo físico**, y Solana es su epicentro. **DePIN** (Decentralized Physical Infrastructure Networks) usa incentivos en tokens para motivar a personas comunes a construir infraestructura que normalmente solo construyen corporaciones gigantes. ¿Quieres un competidor de Google Maps? En lugar de que Google pague millones a flotas de autos con cámaras, Hivemapper paga tokens a cualquiera que instale una dashcam y conduzca. ¿Quieres una red inalámbrica global? En lugar de que AT&T invierta miles de millones, Helium paga tokens a personas que instalan hotspots de IoT (LoRaWAN) y radios 5G en sus casas. ¿Necesitas renderizado de video e IA? En lugar de depender solo de AWS, Render Network paga tokens a personas que comparten su GPU. El resultado: infraestructura construida por la gente, para la gente, incentivada por tokens. Es quizás la narrativa con mayor potencial de impacto real en el mundo.',
        highlight: {
          title: 'Por Qué DePIN en Solana',
          text: 'DePIN necesita procesar millones de micro-transacciones de sensores y dispositivos. Ethereum L1 a $1-5 por transacción (y mucho más en congestión) es imposible. Solana a $0.001 es perfecto. Por eso Helium migró de su propia chain a Solana, y la mayoría de proyectos DePIN nuevos eligen Solana desde el inicio.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funciona DePIN?',
        content: 'El modelo DePIN invierte la lógica tradicional de construcción de infraestructura:',
        features: [
          { icon: Globe, title: 'El Modelo Tradicional', text: 'Una corporación invierte miles de millones de dólares en infraestructura (torres de celular, centros de datos, flotas de mapeo). Cobra a los usuarios por el servicio. La empresa captura todo el valor. Los usuarios son clientes, no participantes. El problema: es lento, costoso, y concentrado en pocas empresas.' },
          { icon: Users, title: 'El Modelo DePIN', text: 'Un protocolo crea un token e incentiva a personas comunes a proveer la infraestructura. Cada participante invierte poco (una dashcam de $300, un hotspot de $400, su GPU existente). A cambio, recibe tokens por el servicio que provee. Millones de pequeños participantes construyen una red más grande y distribuida que cualquier corporación. Los costos son menores, la cobertura es mayor, y el valor se distribuye entre todos los participantes.' },
          { icon: Network, title: 'El Flywheel (Ciclo Virtuoso)', text: 'Más participantes → mejor servicio → más usuarios/clientes → más demanda del token → el token sube → más personas quieren participar → más participantes. Este ciclo virtuoso es lo que hace que DePIN escale exponencialmente una vez que alcanza masa crítica. Helium pasó de 0 a casi 1 millón de hotspots registrados en su pico de 2022 usando este modelo. Ojo: el flywheel también gira en reversa, cuando las recompensas caen, los operadores apagan sus equipos (a mediados de 2026 Helium tiene ~376,000 hotspots activos).' }
        ]
      },
      {
        type: 'main',
        title: 'Los Proyectos DePIN Más Importantes de Solana',
        content: 'Solana alberga los proyectos DePIN más grandes y maduros del ecosistema crypto:',
        features: [
          { icon: Smartphone, title: 'Helium (HNT)', text: 'La red inalámbrica descentralizada más grande del mundo. Personas instalan hotspots en sus casas/oficinas y ganan HNT por proveer cobertura IoT (LoRaWAN) y celular 5G. A mediados de 2026 tiene ~376,000 hotspots activos (llegó a registrar casi 1 millón en su pico de 2022). Desde HIP-138 (enero de 2025), las recompensas de IOT y MOBILE volvieron a pagarse en HNT: el experimento de tres tokens terminó. Helium Mobile vende planes celulares en USA ($15/mes por 10GB, $30/mes ilimitado) que combinan la red descentralizada con roaming. Es DePIN funcionando en la vida real, puedes llamar y navegar con una red construida por la gente.' },
          { icon: Eye, title: 'Hivemapper (HONEY)', text: 'Google Maps descentralizado. Instalas una dashcam especial en tu auto y ganas tokens HONEY por cada kilómetro que mapeas. Los datos de las cámaras crean un mapa global actualizado en tiempo real, algo que Google actualiza cada meses/años. Empresas de logística, navegación, y urbanismo pagan por acceder a estos datos frescos. Ya mapearon millones de kilómetros en todo el mundo.' },
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
            'La empresa invierte miles de millones en capital',
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
          { icon: BarChart3, title: 'Invertir en Tokens', text: 'Si no quieres operar hardware, puedes comprar los tokens de los proyectos DePIN (HNT, HONEY, RENDER, IO). Es una apuesta en que la red va a crecer y generar más demanda del token. Los tokens DePIN tienden a estar más vinculados a métricas reales (número de dispositivos, revenue generado) que los memecoins, pero siguen siendo volátiles.' },
          { icon: Search, title: 'Evaluar Proyectos DePIN', text: 'Antes de participar, evalúa: (1) ¿Hay demanda real por el servicio? (mapeo, WiFi, GPU sí tienen demanda). (2) ¿El modelo económico es sostenible? (¿los ingresos de clientes pagan las recompensas?). (3) ¿Cuántos dispositivos activos hay? (más dispositivos = red más valiosa). (4) ¿El payback period del hardware es razonable? (menos de 12-18 meses idealmente).' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgos y Realidades de DePIN',
        content: 'DePIN es una de las narrativas más prometedoras de crypto, pero no está libre de riesgos:',
        features: [
          { icon: AlertTriangle, title: 'Sostenibilidad de las Recompensas', text: 'Muchos proyectos DePIN empiezan con recompensas generosas en tokens para atraer participantes. Pero si la demanda real del servicio no crece lo suficiente, las recompensas disminuyen y los operadores de hardware dejan de participar. Busca proyectos donde los ingresos de clientes reales (no solo emisión de tokens) financien las recompensas.' },
          { icon: TrendingDown, title: 'Riesgo de Hardware', text: 'Compras un hotspot de $500 esperando recuperar la inversión en 6 meses. Pero el token cae 70%, o la red cambia sus criterios de recompensa, y ahora tu ROI es de 3 años. El hardware es un costo hundido, no puedes "vender" un hotspot de Helium por lo que pagaste si el proyecto no funciona.' },
          { icon: Brain, title: 'Regulación', text: 'DePIN opera en áreas que a veces están reguladas (telecomunicaciones, mapeo, almacenamiento de datos). Un cambio regulatorio puede afectar significativamente la viabilidad de ciertos proyectos en ciertos países. Helium Mobile, por ejemplo, necesita permisos de telecomunicaciones que varían por jurisdicción.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'DePIN: El Puente entre Crypto y el Mundo Real',
        items: [
          'DePIN usa tokens para incentivar a personas a construir infraestructura física: redes inalámbricas (Helium), mapas (Hivemapper), computación GPU (Render), y más. Es crypto resolviendo problemas reales del mundo físico.',
          'Solana es el hogar de DePIN porque puede procesar millones de micro-transacciones de dispositivos IoT a costo casi cero. Helium migró a Solana específicamente por esta capacidad.',
          'Los proyectos principales: Helium (~376,000 hotspots activos a mediados de 2026, tras un pico de casi 1 millón en 2022), Hivemapper (mapeo con dashcams), Render Network (GPU para rendering/IA), io.net (computación GPU para IA).',
          'Puedes participar operando hardware (comprar y operar dispositivos) o invirtiendo en tokens. Antes de comprar hardware, calcula el payback period y verifica que la demanda real del servicio justifique la inversión.',
          'El modelo DePIN crea un flywheel: más participantes → mejor servicio → más clientes → más demanda del token → más participantes. Pero el flywheel también funciona en reversa: si el token cae y las recompensas bajan, los operadores apagan sus equipos, como le pasó a Helium después de su pico de 2022.',
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
            { id: 'b', text: 'Son redes que usan incentivos en tokens para que personas comunes construyan infraestructura física real (redes inalámbricas, mapas, computación). A diferencia de DeFi o NFTs, DePIN crea valor en el mundo físico, no solo digital' },
            { id: 'c', text: 'Es un exchange descentralizado' },
            { id: 'd', text: 'Es solo un concepto teórico, no hay proyectos reales' }
          ],
          correctAnswer: 'b',
          explanation: 'DePIN es quizás la aplicación más concreta de blockchain en el mundo real. Helium tiene cientos de miles de hotspots activos dando cobertura IoT (LoRaWAN) y 5G. Hivemapper tiene millones de kilómetros mapeados. Render procesa trabajos de GPU reales para creadores y empresas de IA. Es infraestructura tangible construida por la gente, incentivada por tokens.'
        },
        {
          id: 'q2',
          question: '¿Por qué Solana es la blockchain preferida para proyectos DePIN?',
          options: [
            { id: 'a', text: 'Porque tiene el logo más bonito' },
            { id: 'b', text: 'Porque puede procesar millones de micro-transacciones de sensores y dispositivos IoT a costo casi cero ($0.001). Ethereum L1, con fees de $1-5 o más, haría imposible la coordinación de redes con millones de dispositivos' },
            { id: 'c', text: 'Porque es la única blockchain que existe' },
            { id: 'd', text: 'Porque DePIN no necesita blockchain realmente' }
          ],
          correctAnswer: 'b',
          explanation: 'DePIN genera volúmenes enormes de micro-transacciones (cada dispositivo reporta datos, recibe recompensas, coordina con la red). A $0.001 por transacción en Solana, esto es viable. A $1+ por transacción en Ethereum L1, sería económicamente imposible. Helium migró de su propia chain a Solana específicamente por esta ventaja de costos y velocidad.'
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
          explanation: 'El hardware es un costo hundido, no puedes devolverlo si el proyecto no funciona. Calcular el payback period te dice si la inversión tiene sentido económico. Si conduces poco, vives en una zona ya mapeada, o HONEY baja de precio, tu ROI puede ser mucho peor de lo esperado. Haz los números antes de comprar.'
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
    number: '10 de 13',
    duration: '30 min',
    type: 'Técnico',
    description: 'El debate más importante de la industria: ¿es mejor una blockchain monolítica ultra-rápida (Solana) o un ecosistema modular de capas especializadas (Ethereum + L2s)? Entiende los trade-offs para tomar mejores decisiones de inversión.',
    sections: [
      {
        type: 'intro',
        title: 'El Gran Debate de la Escalabilidad',
        content: 'Imagina que necesitas transportar a millones de personas por una ciudad. Hay dos filosofías: construir un **tren bala gigante** que lleva a todos en una sola línea ultra-rápida (Solana), o construir **muchas líneas de metro separadas** que se conectan entre sí con estaciones de transferencia (Ethereum + L2s). Cada enfoque tiene ventajas y desventajas fundamentales. Entender este debate no es solo académico, tiene implicaciones directas en tus decisiones de inversión y en qué ecosistema usas para DeFi. Solana apuesta por la arquitectura **monolítica**: una sola blockchain que hace todo (ejecución, consenso, almacenamiento) de forma ultra-rápida. Ethereum apuesta por la arquitectura **modular**: separar las funciones en capas especializadas (L2s para ejecución, L1 para seguridad). Ningún enfoque es "mejor" en absoluto, cada uno sacrifica algo para ganar algo diferente.',
        highlight: {
          title: 'Por Qué Importa para Ti',
          text: 'Como usuario de DeFi, la arquitectura afecta directamente tu experiencia: costos de transacción, velocidad, liquidez disponible, facilidad de uso, y riesgo de bridges. Como inversor, afecta qué ecosistema captura más valor a largo plazo. No es un debate teórico, es práctico.'
        }
      },
      {
        type: 'main',
        title: 'El Enfoque Monolítico: La Tesis de Solana',
        content: 'Solana cree que la mejor blockchain es una sola cadena que hace todo extraordinariamente rápido. En lugar de dividir el trabajo en capas, optimiza una sola capa para manejar todo:',
        features: [
          { icon: Zap, title: 'Velocidad Bruta', text: 'Solana procesa ~2,000-4,000 transacciones por segundo (TPS) en producción real, con una latencia de ~400 milisegundos. Un matiz honesto: esa cifra incluye los votos de consenso de los validadores; las transacciones de usuarios suelen rondar las ~800-1,500 TPS, aun así órdenes de magnitud más que Ethereum L1. El objetivo es llegar a cientos de miles de TPS con Firedancer. Todo esto en una sola capa, sin necesidad de L2s, rollups, ni bridges. La experiencia del usuario es instantánea: haces un swap en Jupiter y el resultado aparece en menos de un segundo.' },
          { icon: Layers, title: 'Componibilidad Sincrónica', text: 'Esta es quizás la ventaja más poderosa de Solana. En una sola transacción atómica, puedes: hacer un swap en Jupiter + depositar en Kamino + stakear el resultado en Jito. Las tres operaciones ocurren instantáneamente en el mismo bloque. Si alguna falla, TODAS se revierten. Esto permite construir operaciones DeFi complejas que son imposibles cuando las apps están en diferentes L2s.' },
          { icon: Server, title: 'La Apuesta en Hardware', text: 'La filosofía de Solana es que el hardware mejora constantemente (Ley de Moore). En lugar de diseñar software complejo para dividir la carga, Solana diseña software que aprovecha al máximo el hardware más potente disponible. A medida que los procesadores y la fibra óptica mejoran, Solana automáticamente se vuelve más rápida, sin necesidad de rediseños complejos.' },
          { icon: Activity, title: 'Mercados de Fees Localizados', text: 'Una crítica histórica a las cadenas monolíticas: si todo pasa en una sola cadena, un evento caliente (un mint masivo, un memecoin viral) congestiona a TODOS. Solana lo resolvió con mercados de fees localizados: los priority fees se calculan por cuenta, no globalmente. Si hay una guerra de fees por un token de moda, solo quienes compiten por ESE token pagan más; tu swap de SOL-USDC sigue costando fracciones de centavo. Es una ventaja arquitectónica que fortalece la tesis monolítica.' }
        ]
      },
      {
        type: 'main',
        title: 'El Enfoque Modular: La Tesis de Ethereum',
        content: 'Ethereum cree que una sola blockchain no puede escalar lo suficiente sin sacrificar descentralización. Su solución: separar las funciones en capas especializadas:',
        features: [
          { icon: Network, title: 'L1 + L2s: División del Trabajo', text: 'Ethereum L1 se especializa en seguridad y consenso. Las L2s (Arbitrum, Optimism, Base, zkSync) se especializan en ejecutar transacciones rápidamente y a bajo costo. Las L2s "publican" un resumen de sus transacciones en Ethereum L1, heredando su seguridad. Es como si cada L2 fuera una sucursal bancaria, y Ethereum L1 fuera la bóveda central.' },
          { icon: Shield, title: 'Máxima Descentralización en L1', text: 'Al mantener Ethereum L1 "lento" pero accesible (puedes correr un nodo en un laptop), maximizan la descentralización de la capa base. Cualquiera puede verificar la cadena. Los validadores de Solana necesitan hardware de $5,000-20,000+, lo que concentra la operación de nodos en manos de quienes pueden costear ese hardware.' },
          { icon: Layers, title: 'Rollups: El Mecanismo', text: 'Las L2s ejecutan miles de transacciones off-chain y luego comprimen un "proof" (prueba) que se publica en Ethereum L1. Hay dos tipos: Optimistic Rollups (Arbitrum, Base) que asumen que las transacciones son válidas a menos que alguien las dispute, y ZK Rollups (zkSync, StarkNet) que generan pruebas matemáticas de validez. Ambos reducen costos dramáticamente.' },
          { icon: Zap, title: 'Blobs (EIP-4844): Por Qué las L2 Cuestan Centavos', text: 'En marzo de 2024, la actualización Dencun introdujo los "blobs": un espacio de datos barato y temporal donde las L2s publican sus transacciones sin competir por el espacio permanente de Ethereum L1. El resultado fue dramático: los fees de las L2s cayeron de dólares a centavos. Un swap en Base o Arbitrum hoy cuesta centavos, no los $10-50 de 2021. Cualquier comparación honesta con Ethereum debe partir de esta realidad post-Dencun.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Monolítico (Solana) vs Modular (Ethereum + L2s)',
        leftSide: {
          title: 'Solana (Monolítico)',
          points: [
            'Una sola cadena rápida (miles de TPS, ~400ms)',
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
          { icon: AlertTriangle, title: 'Debilidades de Solana', text: 'Ha tenido episodios de congestión y degradación de rendimiento (aunque las caídas completas son cosa del pasado). Los requisitos de hardware para validadores limitan quién puede operar un nodo, lo que afecta la descentralización. Si Solana L1 tiene un problema, no hay "escape" a otra capa, todo el ecosistema se ve afectado simultáneamente.' },
          { icon: AlertTriangle, title: 'Debilidades de Ethereum + L2s', text: 'La fragmentación de liquidez empeora con cada nueva L2 que se lanza. Los bridges son puntos de fallo costosos (miles de millones de dólares perdidos en hacks, ~$2,500-3,000 millones acumulados). La experiencia de usuario es confusa para novatos. Y muchas L2s tienen centralization concerns: el "sequencer" que ordena transacciones a menudo es controlado por una sola empresa.' },
          { icon: Brain, title: 'La Realidad', text: 'Ambos enfoques están evolucionando. Solana trabaja en mejorar la resiliencia y descentralización. Ethereum trabaja en soluciones de interoperabilidad entre L2s (como "based rollups" y "chain abstraction"). El "ganador" no está decidido, y es posible que ambos coexistan sirviendo diferentes necesidades.' }
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
          'Solana es monolítica: una sola cadena ultra-rápida (miles de TPS) donde todo ocurre en un solo lugar. Ventaja: componibilidad sincrónica, liquidez unificada, sin bridges. Debilidad: requisitos de hardware altos, riesgo concentrado.',
          'Ethereum es modular: L1 para seguridad + L2s para ejecución rápida. Ventaja: máxima descentralización en la capa base, diversidad de L2s. Debilidad: fragmentación de liquidez, bridges riesgosos, UX compleja.',
          'La componibilidad sincrónica de Solana permite operaciones DeFi complejas en una sola transacción atómica (swap + deposit + stake). Esto es imposible cuando las apps están en diferentes L2s.',
          'La fragmentación de liquidez es el mayor problema práctico del enfoque modular. Los usuarios deben elegir entre 20+ L2s y usar bridges para mover fondos, cada bridge es un punto de riesgo.',
          'Para DeFi activo, Solana ofrece la mejor experiencia de usuario hoy: todo en un solo lugar, sin complejidad de L2s. Ethereum + L2s tiene sentido para acceso a protocolos específicos que no existen en Solana.',
          'No hay "ganador" definitivo, ambos enfoques están evolucionando. Como inversor, tener exposición a ambos ecosistemas es una estrategia válida. Lo importante es entender los trade-offs de cada uno.'
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
            { id: 'c', text: 'Ethereum es más caro que Solana en todas sus capas, incluidas las L2s' },
            { id: 'd', text: 'No tiene ningún problema, el enfoque modular es perfecto' }
          ],
          correctAnswer: 'b',
          explanation: 'Con 20+ L2s, la liquidez de Ethereum está dividida. Si un pool SOL-USDC tiene $100M de liquidez en Solana vs $20M repartidos entre Arbitrum ($8M), Base ($7M) y Optimism ($5M), los usuarios de Solana obtienen mejor ejecución. Además, mover fondos entre L2s requiere bridges, que son lentos, costosos, y el vector de ataque más explotado en crypto (Wormhole $320M, Ronin $625M).'
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
            { id: 'a', text: 'Es mucho más lenta que Ethereum L1 procesando transacciones' },
            { id: 'b', text: 'Los validadores necesitan hardware potente ($5,000-20,000+), lo que limita quién puede operar nodos y afecta la descentralización. Además, si L1 tiene un problema, todo el ecosistema se ve afectado simultáneamente' },
            { id: 'c', text: 'No tiene ninguna debilidad' },
            { id: 'd', text: 'Los fees son demasiado altos' }
          ],
          correctAnswer: 'b',
          explanation: 'Es un trade-off real: Solana prioriza velocidad y componibilidad sobre descentralización máxima. Los requisitos de hardware significan que hay alrededor de 800 validadores activos (frente a ~14,000 nodos físicos de Ethereum, que a su vez operan cientos de miles de llaves de validador), una cifra que de hecho ha bajado en los últimos años. Y al ser una sola cadena, si hay congestión o un problema técnico, todo DeFi de Solana se ve afectado al mismo tiempo. Ethereum mitiga esto con múltiples L2s independientes.'
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
          explanation: 'Ambas tesis de inversión son legítimas. Solana apuesta a que la experiencia de usuario superior y la liquidez unificada atraerán más usuarios y actividad económica. Ethereum apuesta a que la descentralización máxima y la flexibilidad de L2s ganarán a largo plazo. Muchos inversores sofisticados mantienen exposición a ambos, porque no hay certeza de cuál enfoque "ganará", y es posible que ambos coexistan.'
        }
      ]
    }
  },
  33: {
    id: 33,
    title: 'Firedancer & El Futuro de Solana',
    level: 'Avanzado',
    number: '11 de 13',
    duration: '25 min',
    type: 'Futuro',
    description: 'Firedancer es la reescritura completa del software validador de Solana, construida por Jump Crypto, la firma de trading de alta frecuencia más sofisticada del mundo. Entiende por qué la diversidad de clientes es crucial para la seguridad, hasta dónde empuja Firedancer el rendimiento teórico (1M+ TPS en laboratorio, aunque en producción real rinde bastante menos; Frankendancer ya corre en mainnet y Firedancer completo alcanzó testnet a mediados de 2026), y qué significa esto para el futuro del ecosistema Solana junto con innovaciones como token extensions, compresión de estado y la expansión de la SVM.',
    sections: [
      {
        type: 'intro',
        title: 'La Evolución Más Importante de Solana',
        content: 'Bitcoin tiene mineros. Ethereum tiene clientes diversos. Y Solana, durante sus primeros años, tuvo **un solo cliente de software**: el código original escrito por Solana Labs (ahora mantenido por Anza como "Agave"). Esto significaba que un solo bug podía tumbar toda la red, y de hecho ocurrió varias veces en 2022. La solución no era parchar el código existente, sino construir uno completamente nuevo desde cero. Ahí entra **Firedancer**: un segundo cliente validador escrito en C por Jump Crypto, una de las firmas de trading de alta frecuencia más grandes del mundo. No es una mejora incremental, es una reimaginación completa de cómo debería funcionar un validador de blockchain.',
        highlight: {
          title: 'Por Qué Importa',
          text: 'Firedancer no solo hace a Solana más rápida, la hace más segura. Dos clientes independientes significan que un bug en uno no puede tumbar la red entera. Es la diferencia entre tener un motor de respaldo y volar sin paracaídas.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Es la Diversidad de Clientes?',
        content: 'Un "cliente" en blockchain es el software que los validadores ejecutan para procesar transacciones y mantener el consenso. Si todos corren el mismo software y ese software tiene un bug, TODA la red se cae. La diversidad de clientes es tener múltiples implementaciones independientes del mismo protocolo:',
        features: [
          { icon: Server, title: 'Agave (antes Solana Labs)', text: 'El cliente original de Solana, escrito en Rust, ahora mantenido por Anza. Es el que ha corrido la red desde el inicio. Robusto y probado en producción durante años, pero como único cliente, sus bugs eran bugs de toda la red. Cada caída histórica de Solana fue un bug de este cliente. Un matiz: la mayoría del stake de la red corre Jito-Solana, un fork de Agave con soporte MEV, así que la diversidad real hoy es principalmente familia Agave más Frankendancer.' },
          { icon: Zap, title: 'Firedancer (Jump Crypto)', text: 'Reescritura completa en C, construida por ingenieros de trading de alta frecuencia que procesan millones de órdenes por segundo en mercados tradicionales. No comparte ni una línea de código con Agave, lo que significa que es virtualmente imposible que ambos tengan el mismo bug. Esto es diversidad real.' },
          { icon: Shield, title: 'La Lección de Ethereum', text: 'Ethereum tiene 5+ clientes (Geth, Nethermind, Besu, Erigon, Reth). En enero de 2024, un bug en Nethermind tumbó ~8% de los nodos de Ethereum, y la red siguió funcionando porque los demás clientes no compartían el error. Sin diversidad de clientes, habría sido un apagón total. Solana está aprendiendo esta lección.' },
          { icon: Network, title: 'Frankendancer: El Paso Intermedio', text: 'Antes de lanzar Firedancer completo, Jump desplegó "Frankendancer", una versión híbrida que usa el networking de Firedancer con la ejecución de Agave. Esto permitió probar componentes gradualmente en mainnet sin riesgo. Es como cambiar las ruedas de un auto en movimiento, una a la vez. A mediados de 2026, Frankendancer corre en mainnet con ~20-26% del stake.' }
        ]
      },
      {
        type: 'main',
        title: 'Por Qué Jump Crypto Eligió C (No Rust)',
        content: 'La decisión de escribir Firedancer en C en lugar de Rust fue deliberada y controversial. C es un lenguaje de los años 70, ¿por qué usarlo para la tecnología más avanzada de blockchain?',
        features: [
          { icon: Cpu, title: 'Control Total del Hardware', text: 'C permite acceso directo a la memoria y al hardware sin las abstracciones de lenguajes modernos. En trading de alta frecuencia, cada nanosegundo cuenta. Los ingenieros de Jump han pasado décadas optimizando código C para exprimir cada ciclo de CPU. Esa expertise ahora beneficia a Solana.' },
          { icon: Activity, title: 'Rendimiento Puro', text: 'En pruebas de laboratorio bajo condiciones ideales, Firedancer ha alcanzado más de 1 millón de transacciones por segundo, un orden de magnitud mayor que Agave. **Importante**: este es un benchmark de laboratorio con hardware optimizado y sin restricciones de red ni consenso. El rendimiento real en mainnet está sustancialmente por debajo de ese número, limitado por la velocidad de propagación entre validadores, el consenso global, y las restricciones del protocolo. Aun así, el headroom arquitectónico es enorme: Solana puede crecer mucho antes de encontrar un techo de diseño.' },
          { icon: Eye, title: 'Cero Dependencias Compartidas', text: 'Si Firedancer usara Rust (como Agave), podrían compartir librerías y dependencias, y también compartir bugs. Al usar C, cada bug de Firedancer es independiente de Agave y viceversa. Es diversidad de software en su forma más pura.' },
          { icon: Brain, title: 'Expertise de HFT', text: 'Jump Crypto mueve miles de millones en mercados financieros tradicionales. Su infraestructura de trading procesa información del mercado en microsegundos. El equipo de Firedancer incluye a los mismos ingenieros que construyen estos sistemas. Es como contratar a ingenieros de Fórmula 1 para construir tu motor.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Agave vs Firedancer: Comparación Técnica',
        leftSide: {
          title: 'Agave (Anza - Rust)',
          points: [
            'Lenguaje: Rust, seguridad de memoria garantizada por el compilador',
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
            'Lenguaje: C, control total de memoria y hardware, máximo rendimiento',
            'Frankendancer (híbrido) corre en mainnet con ~20-26% del stake; Firedancer completo (v1.0) alcanzó testnet en junio de 2026, mainnet sigue pendiente',
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
          { icon: Smartphone, title: 'Solana Mobile y Blinks', text: 'Solana Actions y Blinks permiten ejecutar transacciones blockchain desde cualquier URL o QR code, sin necesidad de abrir una wallet. Imagina pagar en un restaurante escaneando un código, comprar un NFT desde Twitter, o recibir tu salario con un click. Es llevar Web3 a donde está la gente.' },
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
          { icon: AlertTriangle, title: 'Centralización de Validadores', text: 'Aunque hay alrededor de 800 validadores activos (una cifra que ha venido bajando), una porción significativa del stake está concentrada en pocos operadores grandes. Fundaciones y exchanges controlan un porcentaje desproporcionado. La descentralización real requiere que miles de validadores independientes tengan stake significativo, y eso toma tiempo.' },
          { icon: Clock, title: 'Ejecución del Roadmap', text: 'Firedancer tardó años en construirse: Frankendancer corre en mainnet, pero la versión completa (v1.0) apenas alcanzó testnet en junio de 2026 y su llegada a mainnet sigue pendiente. Token Extensions están disponibles pero la adopción es gradual. Cada innovación prometida necesita no solo construirse, sino también adoptarse masivamente. La historia de cripto está llena de roadmaps ambiciosos que nunca se completaron.' },
          { icon: TrendingDown, title: 'Competencia Creciente', text: 'Solana no es la única blockchain de alto rendimiento. Aptos y Sui (basadas en Move), Monad (EVM paralela), y los Layer 2 de Ethereum compiten por los mismos usuarios y desarrolladores. La ventaja de Solana (ecosistema + liquidez) es fuerte pero no permanente.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Significa Firedancer Para Ti?',
        content: 'Has leído sobre clientes, consensos, C vs Rust, SIMDs. Todo muy técnico. Pero si eres usuario de Solana (no validador ni desarrollador), la pregunta honesta es: **¿qué cambia en mi día a día?** Aquí está la traducción directa:',
        features: [
          { icon: Shield, title: 'Transacciones Más Confiables', text: 'Los apagones de 2022 donde la red se detenía por horas eran un defecto crítico para los usuarios, si Solana se cae mientras tienes una posición abierta en un protocolo de lending, no puedes liquidar ni ajustar. Con dos clientes independientes (Agave + Firedancer), un bug en uno no tumba toda la red. La probabilidad de un apagón total cae dramáticamente. Esto no es teórico, es la diferencia entre un DeFi que puedes confiar y uno que no.' },
          { icon: Zap, title: 'Mejor UX en Picos de Demanda', text: 'Cuando hay un mint masivo de NFTs o un evento de airdrop muy esperado, la red se congestiona: transacciones fallan, los fees suben temporalmente, las confirmaciones tardan más. Firedancer mejora la tolerancia a esos picos. Para ti como usuario: menos "transaction failed" en momentos críticos cuando más importa.' },
          { icon: Users, title: 'Más Validadores = Más Descentralización', text: 'Los requisitos de hardware para Agave son caros (~$5,000+ en equipo). Firedancer está diseñado para usar el hardware más eficientemente, lo que podría bajar el costo de operar un validador con el tiempo. Más validadores asequibles = más descentralización de la red = más resistencia a censura. Tú no ves esto directamente, pero protege el valor de largo plazo de tu SOL.' },
          { icon: CheckCircle, title: 'Sin Acción Requerida', text: 'Firedancer es un upgrade a nivel de validador. Los usuarios regulares no necesitan hacer NADA, no actualices tu wallet, no migres tokens, no cambies apps. La transición ocurre "debajo" de ti. Un día notarás que Solana se siente más estable y más rápida, sin entender exactamente por qué. Ese es el buen diseño de infraestructura: invisible cuando funciona.' }
        ],
        highlight: {
          title: 'La Inversión en Infraestructura',
          text: 'Si tienes SOL o usas DeFi en Solana, Firedancer es parte de la tesis de inversión aunque no lo hayas pensado así. Cada mejora de confiabilidad y escalabilidad hace a Solana más atractiva para usuarios e instituciones. Más demanda = más valor del token. No hagas staking de SOL basado SOLO en Firedancer, pero entenderlo te da una razón adicional para la convicción de largo plazo.'
        }
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
          explanation: 'La diversidad de clientes protege contra fallas sistémicas. Si todos corren el mismo software y tiene un bug, toda la red se cae. Con dos clientes independientes, un bug en uno no afecta al otro. Ethereum demostró este principio en enero de 2024: un bug en Nethermind tumbó ~8% de los nodos, pero la red siguió funcionando gracias a los demás clientes.'
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
          explanation: 'Los SIMDs (Solana Improvement Documents) son propuestas públicas discutidas en GitHub. Los cambios de protocolo requieren que un porcentaje suficiente de validadores actualice su software. Esto da a los validadores, y por extensión a sus delegadores, poder real sobre la evolución de la red.'
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
    number: '12 de 13',
    duration: '30 min',
    type: 'Seguridad',
    description: 'La diferencia entre perder todo y dormir tranquilo es tu modelo de seguridad operacional. Aprende la arquitectura de wallets que usan los profesionales: cold storage para ahorros, hot wallets para operar, y burner wallets para experimentar. Domina la gestión de permisos, la simulación de transacciones, la protección contra phishing y social engineering, y las mejores prácticas de seed phrase que separan a los principiantes de los veteranos.',
    sections: [
      {
        type: 'intro',
        title: 'La Verdad Incómoda de la Custodia Propia',
        content: 'En finanzas tradicionales, si hackean tu banco, el banco responde. Si te roban la tarjeta, el banco cancela los cargos. Hay una red de seguridad institucional. En cripto, **tú eres tu propio banco**, y eso incluye ser tu propio departamento de seguridad. La custodia propia es libertad, pero esa libertad viene con responsabilidad total. No hay número 1-800 para llamar si pierdes tus fondos. No hay botón de "revertir transacción". Cada año se pierden miles de millones de dólares en hacks, phishing, y errores humanos. La buena noticia: con un modelo de seguridad adecuado, puedes protegerte contra la gran mayoría de las amenazas. La mala noticia: la mayoría de la gente no implementa casi ninguna de las medidas necesarias.',
        highlight: {
          title: 'La Regla de Oro',
          text: 'La seguridad no es un producto, es un proceso. No se trata de comprar un hardware wallet y olvidarte. Se trata de hábitos diarios, arquitectura de wallets, y paranoia sana. Los millonarios cripto que sobreviven a cada ciclo no son los más inteligentes, son los más paranoicos con su seguridad.'
        }
      },
      {
        type: 'main',
        title: 'Arquitectura de Wallets: El Modelo de 3 Niveles',
        content: 'Los profesionales no usan UNA wallet para todo. Usan un sistema de niveles donde cada wallet tiene un propósito específico y un nivel de riesgo diferente. Piensa en esto como una fortaleza medieval con murallas concéntricas:',
        features: [
          { icon: Lock, title: 'Nivel 1: Cold Storage (La Bóveda)', text: 'Hardware wallet (Ledger, Trezor) que almacena el 80-90% de tu patrimonio. NUNCA se conecta a dApps. NUNCA firma transacciones de smart contracts. Solo recibe y envía a direcciones verificadas. Es como una caja fuerte bancaria, la abres solo cuando es absolutamente necesario.' },
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
          { icon: Eye, title: 'Simulación de Transacciones', text: 'Antes de firmar cualquier transacción, Phantom y otras wallets te muestran una simulación de lo que hará. LEE ESTO. Si dice "Transfer all SOL to [dirección desconocida]", no firmes. La simulación de transacciones integrada de Phantom (que adquirió Blowfish, la empresa líder en esta tecnología, en 2024) detecta transacciones maliciosas automáticamente antes de que las firmes.' },
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
            'Sin urgencia artificial, los protocolos serios no te presionan por tiempo',
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
          { icon: Lock, title: 'Almacenamiento Físico', text: 'NUNCA digitalmente (no fotos, no notas del celular, no email, no cloud). Escríbela en papel y guárdala en un lugar seguro. Para cantidades significativas, usa placas de metal grabadas (resisten fuego e inundaciones). Haz 2-3 copias en ubicaciones físicas diferentes, una en tu casa, otra con un familiar de confianza.' },
          { icon: Shield, title: 'División de la Seed (Shamir\'s Secret)', text: 'Para grandes cantidades, puedes dividir tu seed en partes usando Shamir\'s Secret Sharing. Por ejemplo: 3 partes donde necesitas 2 para reconstruir. Guardas una parte en tu casa, otra en una caja de seguridad bancaria, y otra con un familiar. Ninguna parte por sí sola revela la seed completa.' },
          { icon: AlertTriangle, title: 'Social Engineering', text: 'El vector de ataque más subestimado. No publiques en redes sociales cuánto cripto tienes. No hables de tus holdings en público. El "ataque de llave de $5" (alguien te amenaza físicamente para que entregues tu seed) es real. La discreción es tu mejor defensa. Si nadie sabe que tienes cripto, nadie puede amenazarte por ello.' },
          { icon: Brain, title: 'Plan de Herencia', text: 'Si te pasa algo, ¿tu familia puede acceder a tus fondos? Sin un plan, tu cripto se pierde para siempre. Opciones: instrucciones selladas con un abogado, un familiar de confianza con una de las partes Shamir, o servicios como Casa que ofrecen planes de herencia para cripto. Es incómodo de pensar, pero es responsabilidad.' }
        ]
      },
      {
        type: 'main',
        title: 'Checklist de Seguridad Diaria',
        content: 'La seguridad no es un evento único, es un hábito. Estos son los chequeos y prácticas que debes incorporar a tu rutina cripto:',
        features: [
          { icon: Smartphone, title: 'Dispositivo Dedicado', text: 'Idealmente, usa un dispositivo separado (tablet vieja, computador secundario) exclusivamente para cripto. Sin redes sociales, sin descargas aleatorias, sin extensiones innecesarias del navegador. Si no es posible, al menos usa un perfil de navegador separado exclusivo para cripto con solo las extensiones de wallet necesarias.' },
          { icon: Globe, title: 'VPN y DNS', text: 'Usa una VPN confiable cuando operas desde redes públicas (cafeterías, aeropuertos). Considera un DNS privado. Nunca operes cripto desde WiFi público sin VPN. Un atacante en la misma red puede interceptar tu tráfico y redirigirte a sitios de phishing.' },
          { icon: CheckCircle, title: 'Verificación Pre-Transacción', text: 'Antes de CADA transacción significativa: (1) Verifica la URL manualmente, (2) Lee la simulación en tu wallet, (3) Confirma la dirección de destino carácter por carácter, (4) Empieza con una transacción pequeña de prueba. Sí, es tedioso. También lo es perder $50,000 por un typo.' },
          { icon: AlertTriangle, title: 'Address Poisoning: No Copies del Historial', text: 'Un ataque en crecimiento: el atacante genera una dirección casi idéntica a una que usas (mismos primeros y últimos caracteres) y te envía polvo (transacciones diminutas) para que aparezca en tu historial. Cuando copias "tu" dirección desde el historial, copias la del atacante. Defensa: nunca copies direcciones del historial de transacciones, verifica ambos extremos Y un fragmento del medio, y usa la libreta de direcciones de tu wallet para destinos frecuentes.' },
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
            { id: 'c', text: 'Ignoras completamente, los airdrops legítimos nunca se distribuyen por DM ni requieren conectar wallet a links aleatorios' },
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
            { id: 'd', text: 'Memorizada sin ningún respaldo físico, la mente es el lugar más seguro' }
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
            { id: 'a', text: 'Firmar rápido para que no expire la transacción ni cambie el precio cotizado' },
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
  40: {
    id: 40,
    title: 'Staking SOL: Gana por Asegurar la Red',
    level: 'Avanzado',
    number: '2 de 13',
    duration: '30 min',
    type: 'Tutorial + Concepto',
    description: 'El staking es la forma más simple de poner tu SOL a trabajar: delegas a un validador, ayudas a asegurar la red, y ganas recompensas pasivas (~5.5-6.5% APY a mediados de 2026). Aprende la mecánica de epochs, delegación y slashing, cómo elegir un validador óptimo, las diferencias entre staking nativo y liquid staking (mSOL, jitoSOL, bSOL), y sigue un tutorial paso a paso para empezar desde Phantom o Solflare.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Te Pagan por Hacer Staking?',
        content: 'Bitcoin tiene mineros que gastan electricidad para asegurar la red. Solana tiene **validadores** que ponen SOL como garantía. Si hacen trampa, pierden su dinero. **Proof of Stake** reemplaza energía por capital en riesgo. Cuando haces staking, estás diciendo: "Confío en este validador para que sea honesto". A cambio, recibes parte de las recompensas que la red paga por procesar transacciones. Es la forma más básica de rendimiento pasivo en cripto, no necesitas entender DeFi, pools de liquidez, ni estrategias complejas. Solo delegas y ganas.',
        highlight: {
          title: 'La Magia del Staking',
          text: 'Tu SOL en staking genera ~5.5-6.5% APY nativo (y ~6-7% efectivo con validadores que comparten MEV como Jito, a mediados de 2026). Una comparación honesta: un CDT en Colombia ha pagado ~8-12% EA en años recientes, pero ese rendimiento es en pesos; el staking rinde en SOL, y la volatilidad del precio de SOL domina el resultado final en tu moneda. Y lo mejor: nunca pierdes la custodia de tus tokens. Tu SOL sigue siendo tuyo, solo está "comprometido" con un validador que tú eliges.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Epochs, Delegación y Recompensas',
        content: 'Solana divide el tiempo en **epochs** (~2-3 días). Al final de cada epoch, se distribuyen las recompensas proporcionalmente al stake delegado. **Delegar** significa asignar tu SOL a un validador sin enviárselo. Tu SOL nunca sale de tu wallet, solo le das "peso de voto" al validador para que participe en el consenso.',
        features: [
          { icon: RefreshCw, title: 'Epochs y Distribución', text: 'Cada epoch dura aproximadamente 2-3 días (~432,000 slots). Al final de cada epoch, la red calcula las recompensas de cada validador basándose en su rendimiento (uptime, votos correctos) y las distribuye proporcionalmente a todos los delegadores. No necesitas hacer nada, las recompensas se acumulan automáticamente en tu cuenta de stake.' },
          { icon: Shield, title: 'Slashing: El Castigo por Hacer Trampa', text: 'En teoría, si un validador actúa maliciosamente (ej: vota por dos bloques conflictivos), pierde parte de su stake y el de sus delegadores. Solana aún no tiene slashing activo en producción, pero está en el roadmap. Aun sin slashing, los validadores con mal comportamiento pierden delegadores y comisiones, hay incentivo económico para ser honesto.' },
          { icon: Award, title: 'Comisión del Validador', text: 'Los validadores cobran una comisión sobre las recompensas que generan (típicamente 0-10%). Si un validador cobra 5% de comisión y genera 100 SOL en recompensas para tu delegación, recibes 95 SOL y el validador se queda con 5 SOL. Busca validadores con comisiones razonables (<5%) pero recuerda que 0% comisión puede significar que el validador no es económicamente sostenible.' },
          { icon: Percent, title: 'APY Real vs Nominal', text: 'El APY de staking nativo en Solana ronda el ~5.5-6.5% neto de comisión (a mediados de 2026), ~6-7% efectivo con validadores que comparten MEV (Jito), y varía por epoch y validador. La inflación del protocolo está en ~4.2% anual, bajando ~15% cada año hasta estabilizarse alrededor del 1.5% (ese calendario sigue vigente). Esto significa que tu rendimiento REAL (después de inflación) hoy es bajo, pero mejorará con el tiempo. Y lo más importante: NO hacer staking significa que tu SOL se diluye por la inflación del protocolo. Stakear es la defensa mínima contra la dilución.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Elegir un Buen Validador',
        content: 'No todos los validadores son iguales. La diferencia entre un buen y un mal validador puede ser 1-2% de APY anual, además de los riesgos de centralización. Usa herramientas como **StakeWiz**, **Solana Beach**, o **validators.app** para analizar validadores:',
        features: [
          { icon: Zap, title: 'Uptime y Rendimiento', text: 'Busca validadores con >98% uptime y alto porcentaje de votos exitosos ("vote success rate"). Si el validador está offline, no produce bloques ni vota, y tus recompensas se reducen. Un validador con 95% uptime te genera significativamente menos que uno con 99.5%. StakeWiz muestra el APY estimado de cada validador, compara.' },
          { icon: Users, title: 'Stake y Descentralización', text: 'Delegar a validadores pequeños y medianos ayuda a descentralizar la red. Los "superminority" (top ~20 validadores que controlan 33% del stake) ya tienen demasiado poder. Delegar a un validador fuera del top 100 con buen rendimiento es bueno para ti (menos competencia por rewards) Y bueno para la red (más descentralización).' },
          { icon: PiggyBank, title: 'Comisión vs Calidad', text: 'No elijas solo por comisión más baja. Un validador con 2% comisión y 99.8% uptime te genera MÁS que uno con 0% comisión y 96% uptime. La comisión es solo un factor. Prioriza: (1) uptime >98%, (2) fuera de superminority, (3) comisión <7%, (4) historial estable de al menos 6 meses.' },
          { icon: Search, title: 'Herramientas de Análisis', text: 'StakeWiz (stakewiz.com) es la herramienta más completa: muestra APY estimado, uptime, comisión, ubicación geográfica, y concentración de stake. Solana Beach y validators.app son alternativas. También puedes filtrar validadores directamente en Phantom y Solflare, ambas wallets muestran métricas básicas.' }
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
            'Cero comisión de protocolo, solo la comisión del validador'
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
          { icon: Layers, title: 'Marinade (mSOL)', text: 'El protocolo de liquid staking más antiguo y probado de Solana. Distribuye tu stake entre cientos de validadores automáticamente (favoreciendo la descentralización). mSOL sube de precio vs SOL a medida que acumula recompensas, no necesitas "reclamar" nada. Ampliamente aceptado como colateral en DeFi (Kamino, MarginFi, etc.).' },
          { icon: Zap, title: 'Jito (jitoSOL)', text: 'Además de las recompensas normales de staking, Jito captura valor de MEV (Maximal Extractable Value) y lo redistribuye a los stakers. Esto genera un APY ligeramente superior al staking nativo. jitoSOL es extremadamente líquido y aceptado en casi todos los protocolos DeFi de Solana.' },
          { icon: Globe, title: 'BlazeStake (bSOL)', text: 'Enfocado en descentralización: distribuye stake a validadores más pequeños. También ofrece su propio sistema de incentivos con tokens BLZE. Buena opción si priorizas la salud de la red además del rendimiento.' },
          { icon: AlertTriangle, title: 'Riesgos del Liquid Staking', text: 'Dependes del smart contract del protocolo, si tiene un bug, tus fondos están en riesgo. En escenarios de estrés extremo, el token liquid (mSOL, jitoSOL) puede perder su peg temporalmente. Y al usar el token en DeFi, acumulas capas de riesgo: riesgo de staking + riesgo del protocolo de liquid staking + riesgo del protocolo DeFi donde lo depositas.' }
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
          'Staking es la forma más simple de rendimiento en Solana: delegas tu SOL a un validador, ayudas a asegurar la red, y ganas ~5.5-6.5% APY (a mediados de 2026). Tu SOL nunca sale de tu wallet, solo le das peso de voto al validador.',
          'Elige validadores con cuidado: >98% uptime, comisión <5-7%, fuera del superminority, y al menos 6 meses de historial estable. Usa StakeWiz para comparar métricas antes de delegar.',
          'No hacer staking es perder dinero: la inflación de SOL (~4.2% y decreciente) diluye tu holdings. Stakear es la defensa mínima contra la dilución, esencialmente mantener tu porcentaje de la red constante.',
          'Liquid staking (mSOL, jitoSOL, bSOL) te da flexibilidad para usar tu SOL stakeado en DeFi, pero añade capas de riesgo: smart contract del protocolo, posible depeg en estrés extremo, y complejidad adicional.',
          'Jito ofrece APY ligeramente superior gracias a la captura de MEV. Marinade prioriza descentralización distribuyendo entre cientos de validadores. BlazeStake incentiva validadores pequeños con tokens BLZE.',
          'Siempre deja 0.1-0.5 SOL sin stakear para pagar fees de transacciones futuras. Y recuerda: el staking es un compromiso de largo plazo, el retiro nativo tiene cooldown de ~2-3 días.'
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
          explanation: 'En Proof of Stake, los validadores (y sus delegadores) ponen capital en riesgo para asegurar la red. Las recompensas de staking provienen de la inflación programada de SOL y de las fees de transacciones, compensan el servicio de procesar y validar transacciones honestamente.'
        },
        {
          id: 'q2',
          question: '¿Qué pasa con tu SOL cuando lo delegas a un validador?',
          options: [
            { id: 'a', text: 'Se lo envías al validador y confías en que te lo devuelva' },
            { id: 'b', text: 'Nunca sale de tu wallet, solo le das peso de voto al validador y puedes retirarlo cuando quieras' },
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
          explanation: 'El uptime tiene un impacto mayor que la comisión. Un validador con 99.5% uptime genera significativamente más recompensas brutas que uno con 95%. Incluso después de pagar 2% de comisión, recibes más. La comisión es solo un factor, prioriza uptime y rendimiento.'
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
          explanation: 'El liquid staking te da un token derivado (mSOL, jitoSOL, bSOL) que representa tu SOL stakeado. Puedes depositar ese token como colateral en préstamos, en pools de liquidez, o en otras estrategias DeFi, mientras sigues ganando staking rewards. Es la composabilidad de DeFi en acción.'
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
            { id: 'a', text: 'No es importante, si el APY real es bajo, mejor no stakear' },
            { id: 'b', text: 'Porque sin staking, la inflación de SOL diluye tu holdings. Stakear mantiene tu porcentaje de la red constante' },
            { id: 'c', text: 'Porque la Solana Foundation te penaliza si no stakeas' },
            { id: 'd', text: 'Solo para poder votar en la gobernanza de Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'La inflación de SOL (~4.2% y decreciente) crea nuevos tokens constantemente. Si no stakeas, tu porcentaje de la red total se reduce, estás siendo diluido. Stakear es la defensa mínima: tus recompensas compensan la inflación, manteniendo tu proporción de SOL en la red aproximadamente constante.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 2,
        title: 'Checkpoint: Elegir Validador',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Validador A: 0% comisión, 95% uptime. Validador B: 3% comisión, 99.5% uptime. Asumiendo que ambos hacen buen staking, ¿cuál genera más rendimiento para ti?',
            options: [
              'A, no paga comisión, así recibes todos los rewards',
              'B, el 4.5% extra de uptime más que compensa la comisión de 3%',
              'Son iguales matemáticamente',
              'A si haces staking corto plazo, B si es largo plazo'
            ],
            correctAnswer: 1,
            explanation: 'Uptime se traduce directamente en rendimiento. Validador A pierde el 5% del tiempo potencial de rewards. Validador B pierde solo 0.5% pero cobra 3% comisión. Rendimiento neto A ≈ 95% × 100% = 95% del máximo teórico. Rendimiento neto B ≈ 99.5% × 97% = 96.5%. B gana por ~1.5 puntos, además de ser más confiable. Comisiones bajas pueden ser una trampa si el validador es inconsistente.',
            hint: 'Uptime × (1 − comisión) = rendimiento neto relativo.'
          }
        ]
      }
    ]
  },
  45: {
    id: 45,
    title: 'MEV: El Impuesto Invisible',
    level: 'Avanzado',
    number: '6 de 13',
    duration: '28 min',
    type: 'DeFi Avanzado',
    description: 'Cada vez que haces un swap en un DEX, bots invisibles pueden extraer valor de tu transacción. Aprende qué es MEV, cómo te afecta, y las herramientas para protegerte.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué es MEV y Por Qué Te Importa?',
        content: 'Imagina que estás en una casa de cambio con un billete de $100 esperando tu turno. El cajero le susurra a un amigo lo que vas a hacer. El amigo compra dólares antes que tú (subiendo el precio) y luego te vende más caro. Eso es esencialmente lo que ocurre con **MEV (Maximal Extractable Value)**, el valor máximo que puede extraerse al reordenar, insertar, o censurar transacciones dentro de un bloque. Aquí hay un matiz crucial que la mayoría de cursos explica mal: a diferencia de Ethereum, **Solana no tiene un mempool público**. Gulf Stream envía tus transacciones directamente al validador líder de turno, no a un área de espera visible para todos. Entonces, ¿cómo te ven los bots? Por las goteras del sistema: operadores de RPC y validadores que corren clientes modificados y filtran las transacciones que pasan por sus manos, y líderes que colaboran con bots a cambio de una tajada. De hecho, Jito operó un pseudo-mempool público y lo cerró en marzo de 2024 precisamente porque facilitaba ataques sandwich. El resultado para ti es el mismo: bots extraen valor de usuarios regulares todos los días en Solana. Es un impuesto invisible que pagas cada vez que interactúas con DeFi sin protección, y la mayoría de usuarios ni siquiera sabe que existe.',
        highlight: {
          title: 'La Magnitud del Problema',
          text: 'En 2024, se estima que bots de MEV extrajeron más de **$1.5 mil millones** en valor de usuarios de DeFi a nivel global. En Solana, los tips que traders y bots pagan al block engine de Jito suman típicamente cientos de miles de dólares POR DÍA (con un récord de ~$14.7 millones en un solo día, en noviembre de 2024), evidencia directa de la escala de la actividad MEV en la red.'
        }
      },
      {
        type: 'main',
        title: 'Ataques Sandwich: El Robo que No Ves',
        content: 'El ataque sandwich es la forma más común y dañina de MEV que afecta a usuarios regulares. Funciona en tres pasos perfectamente sincronizados que ocurren en milisegundos:',
        features: [
          { icon: AlertTriangle, title: 'El Ataque Paso a Paso', text: '(1) Tú envías un swap: "Cambiar 100 USDC por SOL". Tu transacción pasa por un RPC con goteras o llega a un validador que corre un cliente modificado, y un bot la ve antes de que se ejecute. (2) El bot MEV envía una compra de SOL ANTES que la tuya (front-run), subiendo el precio. (3) Tu swap se ejecuta al precio ya inflado, recibes menos SOL del esperado. (4) El bot vende inmediatamente después de ti (back-run), capturando la diferencia como ganancia. Todo ocurre en el mismo bloque, en milisegundos.' },
          { icon: Eye, title: 'Cómo se Ve en la Práctica', text: 'Ejemplo concreto: Quieres cambiar 100 USDC por SOL. Sin MEV, al precio actual recibirías 0.67 SOL. Pero un bot sandwich interviene: compra SOL antes que tú (precio sube), tu swap se ejecuta y recibes solo 0.65 SOL, el bot vende y gana la diferencia (~0.02 SOL, unos $3). Parece poco, pero multiplica eso por miles de transacciones por hora. Para el bot, es una máquina de imprimir dinero.' },
          { icon: Target, title: 'Quién es Víctima', text: 'TODOS los usuarios que hacen swaps con slippage alto o transacciones grandes sin protección MEV son víctimas potenciales. Los más afectados: (1) Usuarios que configuran slippage alto (5-10%) para que su transacción "pase seguro". (2) Swaps grandes ($1,000+) donde la ganancia del bot justifica el costo del ataque. (3) Tokens con poca liquidez donde es fácil mover el precio. Si usas DEX sin protección, estás pagando este impuesto invisible.' },
          { icon: Shield, title: 'Por Qué Existe', text: 'MEV existe porque en blockchain, el orden de las transacciones dentro de un bloque lo decide quien lo produce: en Solana, el validador líder de turno. Quien controla el orden, controla quién gana y quién pierde. Los bots pagan tips (vía el block engine de Jito) para garantizar que sus transacciones se ejecuten en el orden exacto que necesitan. Es un problema estructural del diseño de blockchain, no un bug, es una característica del sistema que actores sofisticados explotan.' }
        ]
      },
      {
        type: 'main',
        title: 'Front-Running y Back-Running',
        content: 'Más allá del ataque sandwich, hay otras formas de MEV que operan en DeFi constantemente:',
        features: [
          { icon: Zap, title: 'Front-Running', text: 'Un bot ve una orden de compra grande pendiente (por ejemplo, alguien va a comprar $50,000 de un token). El bot compra ese token ANTES de que la orden grande se ejecute, sabiendo que la compra grande subirá el precio. Después, vende a precio más alto. Es como tener información privilegiada sobre la siguiente transacción del mercado, excepto que aquí la "información privilegiada" viene de infraestructura con goteras: RPCs que filtran transacciones o validadores que las comparten con bots.' },
          { icon: Activity, title: 'Back-Running', text: 'El bot ejecuta una transacción inmediatamente DESPUÉS de una transacción grande para capturar una oportunidad de arbitraje. Ejemplo: un swap grande mueve el precio de SOL en Jupiter por debajo del precio en Orca. Un bot de back-running compra en Jupiter (barato) y vende en Orca (caro) en el mismo bloque, capturando la diferencia. Este tipo de MEV es menos dañino, en realidad ayuda a equilibrar precios entre DEXs.' },
          { icon: AlertTriangle, title: 'Liquidation MEV', text: 'En protocolos de lending como Kamino o MarginFi, cuando una posición cae por debajo del colateral mínimo, cualquiera puede liquidarla y recibir un bonus. Es una carrera de latencia por liquidaciones legítimas: los bots compiten en microsegundos, conectándose directamente a validadores, por ser los primeros en ejecutar liquidaciones que el protocolo ya autorizó. (Nota: manipular oráculos para forzar liquidaciones que no deberían ocurrir es una clase de exploit distinta, la cubrimos en la lección de Riesgos de DeFi.)' },
          { icon: Brain, title: 'El Costo Real para Ti', text: 'Aunque no veas una línea que diga "fee de MEV" en tu transacción, lo pagas en peor ejecución de precio. Si todos tus swaps se ejecutan un 0.5-2% peor de lo esperado, estás perdiendo dinero silenciosamente. Un usuario activo que hace 10 swaps por semana puede perder cientos de dólares al mes sin darse cuenta. Es el impuesto más eficiente del mundo: la víctima ni siquiera sabe que está pagándolo.' }
        ]
      },
      {
        type: 'main',
        title: 'Jito y la Solución de Solana',
        content: 'Solana tiene un enfoque único para manejar MEV, centrado en Jito, el protocolo que ha transformado cómo se procesan transacciones en la red:',
        features: [
          { icon: Layers, title: 'Jito Bundles: La Clave', text: 'Jito permite agrupar transacciones en "bundles" (paquetes) que viajan por un canal privado hasta el validador líder, sin pasar por RPCs o relays donde podrían filtrarse. ¿Por qué importa? Si los bots nunca ven tu transacción antes de ejecutarse, no pueden atacarla. Los bundles además son atómicos: se ejecutan en el orden exacto que especificas y nadie puede insertar transacciones entre las tuyas. Dato clave: Jito llegó a operar un pseudo-mempool público donde los bots podían ver transacciones pendientes, y lo cerró en marzo de 2024 precisamente porque facilitaba ataques sandwich.' },
          { icon: Zap, title: 'Tips de Jito vs Priority Fees', text: 'No confundas dos mecanismos distintos. Los "priority fees" son el mercado de fees nativo de Solana: pagas más por unidad de cómputo para que el líder priorice tu transacción. Los "tips de Jito" son propinas que se pagan al block engine de Jito para entrar en un bundle protegido. Jupiter usa ambos: los priority fees aceleran tu transacción, y la protección MEV (vía Jito) la blinda contra sandwiches. Son palancas separadas con propósitos diferentes.' },
          { icon: RefreshCw, title: 'Redistribución de MEV', text: 'Jito redirige las ganancias de MEV de bots anónimos hacia validadores y sus stakers. Los validadores que usan el cliente Jito-Solana (más del 90% del stake de la red) reciben tips de MEV y los comparten con sus delegadores. Esto significa que si haces staking con un validador Jito (como jitoSOL liquid staking), parte de las ganancias de MEV te llegan como mayor APY: típicamente entre 0.5 y 1 punto porcentual más que el staking base.' },
          { icon: Network, title: 'El Ecosistema Jito en Números', text: 'Más del 90% de los validadores de Solana ejecutan el cliente Jito-Solana. jitoSOL es uno de los mayores tokens de liquid staking con miles de millones en TVL. Los tips de Jito representan una porción significativa de las recompensas de los validadores. El sistema no elimina MEV completamente, lo hace más transparente y redistribuye las ganancias hacia los participantes de la red en vez de solo los bots.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Protegerte: Guía Práctica',
        content: 'No puedes eliminar MEV completamente, pero puedes reducir drásticamente cuánto valor te extraen con estas estrategias:',
        features: [
          { icon: Shield, title: 'Protección MEV en Jupiter', text: 'El modo Ultra de Jupiter (el que usa jup.ag por defecto) incluye protección MEV siempre activa: tus transacciones se enrutan por canales privados sin exponerse a los bots. Si usas el modo Manual, activa el toggle "MEV Protect", que envía tu transacción por la infraestructura de Jito. En ambos casos, tu swap deja de ser visible para los atacantes antes de ejecutarse.' },
          { icon: Target, title: 'Configura el Slippage Correctamente', text: 'El slippage es el margen de variación de precio que aceptas. Si pones slippage de 10%, le estás diciendo a los bots: "acepto recibir hasta un 10% menos". Eso es una invitación abierta a un sandwich attack. Para tokens líquidos (SOL, USDC), usa 0.5-1% de slippage. Solo sube a 2-3% para tokens de baja liquidez. Nunca uses más de 5% excepto en emergencias.' },
          { icon: Lock, title: 'Transacciones Protegidas', text: 'Algunos wallets y DEXs ofrecen "transacciones privadas" o "protección MEV" que envían tu transacción por canales privados directamente al validador líder, sin exponerla a RPCs o relays con goteras. En Solana, esto se logra a través de los bundles de Jito. Verifica que tu wallet o DEX tenga esta opción habilitada por defecto.' },
          { icon: Scissors, title: 'Divide Swaps Grandes', text: 'Si necesitas cambiar $10,000 o más, no lo hagas en una sola transacción. Divídelo en 3-5 swaps más pequeños. Un swap de $2,000 es menos atractivo para bots que uno de $10,000 porque la ganancia potencial es menor y puede no justificar el costo del ataque. Además, el impacto de precio de cada swap individual es menor.' },
          { icon: Clock, title: 'Usa Limit Orders', text: 'En vez de hacer un market swap (que se ejecuta al precio actual y es vulnerable a MEV), usa órdenes límite en Jupiter. Con una limit order, especificas el precio exacto al que quieres comprar o vender. La orden se ejecuta solo cuando el precio llega a tu objetivo, y como no hay una transacción tuya "en vuelo" que los bots puedan anticipar, es mucho más difícil de sandwichear.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Protegiendo tu Valor en DeFi',
        items: [
          'MEV (Maximal Extractable Value) es el valor que bots extraen al reordenar transacciones en un bloque. En Solana NO hay mempool público (Gulf Stream envía tus transacciones directo al líder): los bots te ven a través de RPCs y clientes de validador modificados que filtran transacciones. El resultado es un impuesto invisible que pagas cada vez que haces un swap sin protección.',
          'El ataque sandwich es la forma más común: un bot compra antes de tu swap (subiendo el precio), tu swap se ejecuta a peor precio, y el bot vende después capturando la diferencia. Afecta especialmente a swaps con slippage alto y transacciones grandes.',
          'Jito es la pieza central del MEV en Solana: bundles privados y atómicos que viajan directo al líder, sin pasar por la infraestructura con goteras donde los bots ven transacciones. Jito incluso cerró su pseudo-mempool público en marzo de 2024 porque facilitaba sandwiches.',
          'Los stakers de Jito (jitoSOL) se benefician del MEV: las ganancias se redistribuyen como mayor APY en vez de quedarse en manos de bots anónimos. Más del 90% del stake de Solana corre el cliente Jito-Solana.',
          'Para protegerte en la práctica: usa el modo Ultra de Jupiter (protección MEV por defecto) o activa MEV Protect en modo Manual, usa slippage de 0.5-1% (nunca más de 5%), divide swaps grandes en partes, y prefiere limit orders sobre market swaps cuando sea posible.',
          'MEV no se puede eliminar completamente, es una propiedad estructural de las blockchains. Pero con las herramientas correctas (protección MEV vía Jito, slippage bajo, limit orders), puedes reducir tu exposición drásticamente y dejar de pagar el impuesto invisible.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es un ataque sandwich en DeFi?',
          options: [
            { id: 'a', text: 'Cuando un hacker roba fondos de un smart contract explotando un bug' },
            { id: 'b', text: 'Un bot detecta tu swap pendiente, compra antes que tú (subiendo el precio), tu swap se ejecuta a peor precio, y el bot vende después capturando la diferencia' },
            { id: 'c', text: 'Cuando dos personas intentan comprar el mismo token al mismo tiempo' },
            { id: 'd', text: 'Un tipo de phishing donde un sitio falso roba tus claves privadas' }
          ],
          correctAnswer: 'b',
          explanation: 'El ataque sandwich tiene tres pasos: (1) el bot front-runs tu transacción comprando antes, (2) tu swap se ejecuta al precio ya inflado, (3) el bot back-runs vendiendo lo que compró. Todo sucede en el mismo bloque. La víctima recibe menos tokens de los esperados sin saber por qué.'
        },
        {
          id: 'q2',
          question: 'Pones tu slippage en 10% para un swap en Jupiter. ¿Por qué esto te hace más vulnerable a MEV?',
          options: [
            { id: 'a', text: 'Porque el 10% se paga como comisión a Jupiter' },
            { id: 'b', text: 'Porque le estás diciendo a los bots que aceptas recibir hasta un 10% menos del precio esperado, dándoles un margen enorme para extraer valor con un sandwich attack' },
            { id: 'c', text: 'Slippage alto no tiene relación con MEV' },
            { id: 'd', text: 'Porque las transacciones con slippage alto son más lentas' }
          ],
          correctAnswer: 'b',
          explanation: 'El slippage define cuánta variación de precio aceptas. Al poner 10%, le dices al protocolo "ejecuta mi swap aunque reciba hasta un 10% menos". Los bots leen esto y saben que pueden moverte el precio hasta un 10% sin que tu transacción falle. Es como poner un cartel que dice "acepto pagar de más". Usa 0.5-1% para tokens líquidos.'
        },
        {
          id: 'q3',
          question: '¿Cómo protegen los bundles de Jito contra ataques MEV?',
          options: [
            { id: 'a', text: 'Encriptan la transacción de punta a punta para que nadie en la red pueda leerla' },
            { id: 'b', text: 'Viajan por un canal privado directo al validador líder (sin pasar por RPCs o relays con goteras) y son atómicos: nadie puede ver tu transacción antes de ejecutarse ni insertar nada entre las tuyas' },
            { id: 'c', text: 'Bloquean automáticamente a todos los bots de la red' },
            { id: 'd', text: 'Hacen que tu transacción sea gratuita para que los bots no puedan competir' }
          ],
          correctAnswer: 'b',
          explanation: 'Los bots sandwich necesitan VER tu transacción pendiente para atacarla. En Solana no hay mempool público; los bots la ven por las goteras de RPCs y validadores con clientes modificados. Los bundles de Jito evitan esa infraestructura y llegan por canal privado directo al líder, además de garantizar el orden interno del paquete. Si el bot no puede ver tu swap, no puede construir un sandwich alrededor de él. Es la defensa más efectiva contra MEV en Solana.'
        },
        {
          id: 'q4',
          question: 'Haces un swap de $5,000 USDC a SOL y recibes 2% menos SOL del precio que viste al confirmar. ¿Qué probablemente ocurrió?',
          options: [
            { id: 'a', text: 'Jupiter te cobró una comisión oculta del 2%' },
            { id: 'b', text: 'El precio de SOL subió naturalmente un 2% en el segundo exacto de tu swap' },
            { id: 'c', text: 'Un bot sandwich detectó tu transacción grande (vía un RPC o validador que filtra transacciones), compró SOL antes que tú (subiendo el precio ~2%), y vendió después de tu swap, extrayendo ~$100 de tu transacción' },
            { id: 'd', text: 'Es un error de la blockchain que se corregirá automáticamente' }
          ],
          correctAnswer: 'c',
          explanation: 'Un swap de $5,000 sin protección MEV es un objetivo atractivo para bots. La pérdida del 2% (~$100) es consistente con un ataque sandwich: el bot infló el precio antes de tu swap y lo vendió después. Para evitarlo: usa el modo Ultra o MEV Protect, configura slippage bajo (0.5-1%), y considera dividir swaps grandes en partes más pequeñas.'
        },
        {
          id: 'q5',
          question: '¿Cuál es el método MÁS efectivo para proteger tus swaps cotidianos en Jupiter contra MEV?',
          options: [
            { id: 'a', text: 'Hacer swaps solo a las 3am cuando hay menos bots activos' },
            { id: 'b', text: 'Usar el modo Ultra de Jupiter (protección MEV siempre activa) o el toggle MEV Protect en modo Manual, combinado con slippage de 0.5-1%' },
            { id: 'c', text: 'Usar siempre slippage de 0% para que los bots no puedan moverte el precio' },
            { id: 'd', text: 'Hacer todos los swaps por cantidades menores a $1 para que no valga la pena atacarte' }
          ],
          correctAnswer: 'b',
          explanation: 'La combinación de protección MEV + slippage bajo es la más práctica y efectiva. El modo Ultra de Jupiter la trae activada por defecto, y en modo Manual el toggle MEV Protect envía tu transacción por la infraestructura de Jito, sin exponerla a los bots. El slippage bajo limita cuánto pueden moverte el precio. Slippage de 0% causaría que muchas transacciones fallen, y esperar horarios específicos no te protege (los bots operan 24/7).'
        }
      ]
    }
  },
  46: {
    id: 46,
    title: 'Gobernanza DAO: Tu Voto Importa',
    level: 'Avanzado',
    number: '13 de 13',
    duration: '25 min',
    type: 'Concepto + Práctica',
    description: 'Los tokens de gobernanza te dan poder de decisión sobre protocolos que manejan miles de millones de dólares. Aprende a votar, delegar, y protegerte de ataques de gobernanza.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué Son los Tokens de Gobernanza?',
        content: 'Imagina que pudieras votar sobre las decisiones de tu banco: qué comisiones cobra, en qué invierte tu dinero, y cómo se distribuyen las ganancias. En finanzas tradicionales, eso es imposible. En DeFi, es la norma. Los **tokens de gobernanza** otorgan a sus holders el poder de votar sobre las decisiones que afectan un protocolo: cambios en fees, actualizaciones de código, distribución de tesorería, nuevas integraciones, y más. Si tienes tokens JUP de Jupiter, puedes votar sobre el futuro del mayor agregador DEX del ecosistema Solana. Si tienes MNDE de Marinade, decides cómo evoluciona el protocolo pionero del liquid staking en Solana (hoy Jito es el más grande, pero Marinade abrió el camino). Es como tener acciones en una empresa, pero con transparencia total, cada voto se registra on-chain, cada propuesta es pública, y cualquiera puede participar.',
        highlight: {
          title: 'El Poder Real',
          text: 'Los protocolos DeFi en Solana manejan miles de millones de dólares en valor. Los holders de tokens de gobernanza deciden cómo se usa ese capital. Tu voto no es simbólico, tiene consecuencias financieras reales para ti y para todo el ecosistema.'
        }
      },
      {
        type: 'main',
        title: 'Mecanismos de Votación',
        content: 'No todas las DAOs votan igual. El mecanismo de votación determina quién tiene poder real y cómo se toman las decisiones. Cada sistema tiene trade-offs entre eficiencia, equidad, y resistencia a la manipulación:',
        features: [
          { icon: Banknote, title: 'Token-Weighted (1 Token = 1 Voto)', text: 'El mecanismo más común y simple. Quien tiene más tokens tiene más poder de voto. Es transparente y fácil de implementar, pero tiene un problema fundamental: las ballenas (holders con millones de tokens) dominan las votaciones. Una sola wallet con el 5% del supply puede superar a miles de usuarios pequeños. Es democracia del capital, no de las personas. Jupiter y la mayoría de DAOs de Solana usan este modelo.' },
          { icon: Users, title: 'Votación Cuadrática (Costo Exponencial)', text: 'El costo de votos adicionales crece exponencialmente: 1 voto cuesta 1 token, 2 votos cuestan 4 tokens, 3 votos cuestan 9 tokens, y así sucesivamente. Esto reduce drásticamente el poder de las ballenas porque comprar influencia marginal se vuelve prohibitivamente caro. Es mucho más equitativo, pero vulnerable a ataques Sybil (crear múltiples wallets para dividir tu poder y votar "barato" desde cada una).' },
          { icon: Clock, title: 'Conviction Voting (Tiempo = Poder)', text: 'Cuanto más tiempo mantienes tu voto en una propuesta, más peso acumula. Es como un "staking de votos": demuestras compromiso real con tu decisión dejando tu capital bloqueado. Favorece a los que realmente creen en una propuesta sobre los que buscan ganancias rápidas. Usado por algunos protocolos en otras cadenas y en experimentación en Solana.' },
          { icon: Shield, title: 'Vote Escrow (veTokens)', text: 'Bloqueas tus tokens por un periodo (semanas, meses, años) y recibes mayor poder de voto cuanto más largo sea el bloqueo. Alinea los incentivos: los que más arriesgan (bloqueando capital) tienen más influencia. Modelo popularizado por Curve (veCRV) y adoptado por varios protocolos. Desincentiva la especulación de corto plazo con tokens de gobernanza.' }
        ]
      },
      {
        type: 'main',
        title: 'Delegación: Vota Sin Votar',
        content: 'La realidad es que la mayoría de holders de tokens de gobernanza **nunca votan**. Las tasas de participación en DAOs oscilan entre 1% y 15%. Esto es un problema grave: propuestas que afectan miles de millones de dólares se deciden con la participación de una pequeña minoría. La **delegación** es la solución. Puedes asignar tu poder de voto a un "delegado", alguien que investiga las propuestas y vota en tu nombre. No pierdes tus tokens, solo les prestas tu peso de voto. Puedes revocar la delegación en cualquier momento.',
        features: [
          { icon: Users, title: '¿Qué es un Delegado?', text: 'Un delegado es un miembro activo de la comunidad que se compromete a estudiar cada propuesta, publicar su razonamiento, y votar consistentemente. Pueden ser desarrolladores, investigadores, o usuarios activos que entienden profundamente el protocolo. Piénsalo como elegir un representante que defiende tus intereses, pero con la transparencia total que permite la blockchain.' },
          { icon: AlertTriangle, title: 'El Problema de la Apatía', text: 'Si solo el 5% de los holders votan, un grupo pequeño y coordinado puede controlar decisiones que afectan a todos. Propuestas que benefician a pocos a costa de muchos pueden pasar desapercibidas. La delegación combate esto: aunque no votes directamente, tu poder de voto cuenta a través de tu delegado.' },
          { icon: Award, title: 'Jupiter ASR: Gobernanza con Recompensas', text: 'Jupiter innovó con su programa de Active Staking Rewards (ASR). Los holders de JUP que stakean sus tokens y votan (o delegan) reciben recompensas al final de cada periodo de gobernanza. Esto crea un incentivo directo: participar en la gobernanza no solo es un deber cívico, sino que es financieramente rentable. Es uno de los modelos más exitosos para combatir la baja participación, y siguió activo (50M JUP por trimestre) incluso durante la pausa de gobernanza de 2025.' },
          { icon: Target, title: 'Cómo Elegir un Buen Delegado', text: 'Busca delegados con historial de participación consistente (votan en todas las propuestas), que publiquen su razonamiento antes de votar, que no tengan conflictos de interés obvios, y que estén alineados con tu visión del protocolo. En plataformas de gobernanza on-chain como Realms puedes revisar el historial de votación de un delegado antes de confiarle tu peso de voto.' }
        ]
      },
      {
        type: 'main',
        title: 'Ataques de Gobernanza: El Lado Oscuro',
        content: 'Con miles de millones de dólares en juego, los mecanismos de gobernanza son un objetivo atractivo para atacantes sofisticados. Entender estos vectores de ataque es esencial para detectar propuestas maliciosas antes de que sea demasiado tarde:',
        features: [
          { icon: AlertTriangle, title: 'Flash Loan Governance Attack', text: 'El atacante pide prestados millones de tokens de gobernanza mediante un flash loan (préstamo instantáneo sin colateral), vota en una propuesta maliciosa, y devuelve los tokens, todo en una sola transacción. El atacante nunca tuvo que "comprar" el poder de voto. Este ataque es posible cuando las DAOs no requieren que los tokens estén bloqueados antes de votar. Casos reales: Beanstalk (abril de 2022) perdió $182M cuando un atacante aprobó con un flash loan una propuesta que le enviaba la tesorería, y en Mango (octubre de 2022) el atacante votó con los propios tokens que acababa de robar. La defensa: exigir "time-lock" (los tokens deben estar stakeados por un periodo mínimo antes de poder votar). En Solana, Realms exige depositar los tokens en escrow antes de votar, lo que hace el voto con flash loan prácticamente inviable.' },
          { icon: AlertTriangle, title: 'Propuestas de Drenaje de Tesorería', text: 'Propuestas que parecen legítimas ("Fondo de desarrollo comunitario", "Programa de marketing", "Subsidio de liquidez") pero que en realidad transfieren fondos de la tesorería a wallets controladas por el proponente o sus cómplices. Son el equivalente cripto de la corrupción política. Cómo detectarlas: analiza a dónde van los fondos, quién propone, y si el monto es proporcional al beneficio esperado.' },
          { icon: AlertTriangle, title: 'Ataques Sybil en Votación Cuadrática', text: 'Si la votación cuadrática penaliza tener muchos votos en una wallet, la solución del atacante es simple: divide tus tokens entre 100 wallets y vota desde cada una. Así cada wallet paga el "precio barato" de los primeros votos. La defensa: mecanismos de verificación de identidad (Proof of Personhood), análisis on-chain de patrones sospechosos, o combinar cuadrática con requisitos de participación histórica.' },
          { icon: Eye, title: 'Cómo Identificar Propuestas Maliciosas', text: 'Red flags: propuestas que aparecen con poco tiempo de discusión y votación acelerada. Wallets desconocidas que acumulan tokens justo antes de una votación. Propuestas con lenguaje vago que ocultan transferencias de fondos. Proponentes sin historial en la comunidad. Cambios en parámetros técnicos que pocos entienden (cambiar oracle, modificar ratios de colateral, etc.).' }
        ],
        highlight: {
          title: 'Tu Defensa como Voter',
          text: 'Lee CADA propuesta antes de votar. Revisa quién la propone y su historial. Analiza el impacto financiero real. Si algo no cuadra, vota en contra y alerta a la comunidad. La gobernanza descentralizada solo funciona si los participantes están informados y vigilantes.'
        }
      },
      {
        type: 'comparison',
        title: 'Gobernanza Centralizada vs Descentralizada',
        leftSide: {
          title: 'Centralizada (Empresas Tradicionales)',
          points: [
            'El CEO y la junta directiva deciden todo',
            'Decisiones rápidas pero opacas, los usuarios no saben qué se discute',
            'Los usuarios no tienen voz ni voto sobre cambios que les afectan',
            'Los incentivos de la empresa no siempre se alinean con los del usuario',
            'Eficiente pero vulnerable a abuso de poder y corrupción',
            'Si el CEO actúa mal, tu única opción es irte'
          ]
        },
        rightSide: {
          title: 'Descentralizada (DAOs)',
          points: [
            'La comunidad de holders decide colectivamente',
            'Proceso más lento pero 100% transparente, todo es público y on-chain',
            'Cada holder puede proponer, votar, y delegar su poder',
            'Los incentivos se alinean: los voters son los usuarios del protocolo',
            'Más democrático pero vulnerable a baja participación y ataques de gobernanza',
            'Si la gobernanza falla, puedes votar para cambiarla'
          ]
        }
      },
      {
        type: 'main',
        title: 'Participa en Gobernanza de Solana',
        content: 'El ecosistema Solana tiene un sistema de gobernanza vibrante que va desde la evolución del propio protocolo hasta las decisiones de cada DApp. Aquí están las principales formas de participar y las herramientas que necesitas:',
        features: [
          { icon: Cpu, title: 'SIMDs: La Evolución de Solana', text: 'Los **Solana Improvement Documents (SIMDs)** son propuestas para cambiar el protocolo base de Solana. Son el equivalente de los BIPs de Bitcoin o los EIPs de Ethereum. Cualquiera puede escribir un SIMD, pero su implementación requiere consenso entre validadores. Se discuten públicamente en GitHub y en los foros de la comunidad. Seguir los SIMDs te da visibilidad sobre el futuro de la red donde inviertes.' },
          { icon: Zap, title: 'Jupiter Governance y ASR', text: 'Jupiter es el ejemplo más activo de gobernanza en Solana. Para participar: 1) Compra JUP en Jupiter. 2) Ve a vote.jup.ag y conecta tu wallet. 3) Stakea tus JUP en el panel de gobernanza. 4) Vota en las propuestas activas (o delega a un delegado de confianza). 5) Al final de cada periodo de gobernanza, reclama tus ASR rewards. Votar te da voz en el futuro de Jupiter Y te genera recompensas financieras.' },
          { icon: Layers, title: 'Marinade Governance', text: 'Marinade (el protocolo de liquid staking de SOL) tiene su propio sistema de gobernanza donde los holders de MNDE votan sobre la dirección de stake, los parámetros del protocolo, y la distribución de incentivos. Accede a través de marinade.finance/governance. Como usuario de mSOL, las decisiones de gobernanza de Marinade te afectan directamente, participar es proteger tu inversión.' },
          { icon: Globe, title: 'Realms: El Hub de DAOs de Solana', text: 'Realms (realms.today) es la plataforma principal para gobernanza on-chain en Solana. Desde ahí puedes explorar cientos de DAOs activas, ver propuestas en votación, y participar directamente. Es el equivalente de Snapshot para Ethereum, pero todo se ejecuta on-chain. Conecta tu wallet, explora las DAOs de los protocolos que usas, y empieza a votar.' },
          { icon: Award, title: 'Paso a Paso: Votar en Jupiter', text: '1) Asegúrate de tener JUP en tu wallet Phantom. 2) Ve a vote.jup.ag y conecta tu wallet. 3) Haz clic en "Stake" e ingresa la cantidad de JUP. 4) Confirma la transacción en Phantom. 5) Revisa las propuestas activas en la pestaña "Vote". 6) Lee cada propuesta completa, incluyendo discusiones en el foro. 7) Vota "For", "Against", o "Abstain". 8) Al cierre del periodo, ve a "Rewards" para reclamar tu ASR. Tiempo total: 10 minutos que te dan voz y recompensas.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso de Estudio: La Batalla por la Tokenomics de Jupiter',
        content: 'Toda la teoría que acabas de leer se prueba en eventos reales con consecuencias reales. El ejemplo más instructivo del ecosistema Solana: la saga de gobernanza de Jupiter entre 2024 y 2026. Incluye un airdrop masivo, una quema de 3,000 millones de tokens, una DAO que se pausó a sí misma, y un regreso con votaciones de alto impacto. Es la lección de gobernanza más completa que existe en Solana.',
        features: [
          { icon: BookOpen, title: 'El Contexto (2024-2025)', text: 'Tras el airdrop inicial de enero de 2024 (el "Jupuary"), Jupiter tenía miles de millones de JUP reservados en tesorería para futuros airdrops, equipo, y reservas comunitarias. La pregunta crítica para holders: ¿cuándo y cómo debería circular ese supply? En enero de 2025, en la conferencia Catstanbul, meow (cofundador de Jupiter) ANUNCIÓ una quema de 3,000 millones de JUP que recortó el supply de 10,000 a 7,000 millones. Detalle importante: eso fue un anuncio del equipo, no una decisión votada por la DAO, y esa diferencia es parte de la lección.' },
          { icon: Users, title: 'La Crisis (junio 2025)', text: 'En junio de 2025, Jupiter hizo algo inédito: PAUSÓ su propia gobernanza citando una "ruptura de confianza" entre equipo y comunidad. Las votaciones se detuvieron mientras se rediseñaba el sistema. Ojo al detalle: el staking con ASR continuó (50M JUP por trimestre), pero no hubo propuestas que votar durante meses. Una DAO que se suspende a sí misma para reestructurarse es, en sí misma, una lección de gobernanza: los sistemas de votación no son sagrados, son herramientas que se pueden rediseñar.' },
          { icon: Target, title: 'El Regreso (2026)', text: 'A comienzos de 2026 la gobernanza volvió a vote.jup.ag con votaciones de peso real. El 17 de febrero de 2026 pasó "Zero Net-New Emissions" con el 73.9% del peso de voto: el compromiso de no emitir supply neto nuevo. Y el 11 de abril de 2026, la DAO votó aplazar el Jupuary a mayo de 2026 y recortarlo de 700M a 200M JUP. La comunidad decidió, con votos on-chain verificables, sobre miles de millones de dólares en tokens.' },
          { icon: CheckCircle, title: 'Las Lecciones', text: '**1) Anuncio del equipo ≠ voto de la DAO**: la quema de 3B la anunció el equipo; el recorte del Jupuary sí lo votó la comunidad. Aprende a distinguirlos. **2) Las DAOs pueden suspenderse y rediseñarse**: la pausa de 2025 no mató a Jupiter, la reestructuró. **3) La participación importa**: el regreso funcionó porque los holders volvieron a votar. **4) Todo es verificable on-chain**: cada uno de estos eventos lo puedes auditar tú mismo. Este caso es por qué JUP vale estudiar aunque no lo tengas.' }
        ],
        highlight: {
          title: 'Lo Que Ganan los Voters Informados',
          text: 'Los holders que siguieron la saga de JUP no solo votaron, aprendieron a leer propuestas de tokenomics, a distinguir anuncios del equipo de decisiones de la DAO, y a evaluar trade-offs estratégicos. Esta educación se transfiere a CUALQUIER DAO que analices en el futuro. Votar una vez bien te hace mejor voter para siempre.'
        }
      },
      {
        type: 'takeaways',
        title: 'Tu Voz en el Futuro de DeFi',
        items: [
          'Los tokens de gobernanza te dan poder de decisión real sobre protocolos que manejan miles de millones de dólares. No son "meme tokens", son tu voz y voto en el futuro de las finanzas descentralizadas.',
          'Los mecanismos de votación varían: token-weighted (1 token = 1 voto), cuadrática (costo exponencial), conviction (tiempo = poder), y vote escrow (bloqueo = influencia). Cada uno tiene trade-offs entre eficiencia y equidad.',
          'La delegación es la herramienta más poderosa contra la baja participación. Si no tienes tiempo para investigar cada propuesta, delega tu voto a alguien que sí lo haga, pero elige bien y revisa periódicamente.',
          'Los ataques de gobernanza son reales: flash loans (Beanstalk perdió $182M en 2022), votos con tokens robados (Mango, 2022), propuestas de drenaje, y ataques Sybil. Lee cada propuesta, verifica quién propone, y vota en contra de lo sospechoso.',
          'Jupiter ASR es el mejor ejemplo de gobernanza con incentivos: votar te da recompensas financieras directas, creando un ciclo virtuoso de participación (y el programa sobrevivió incluso a la pausa de gobernanza de 2025).',
          'La saga de Jupiter 2024-2026 (airdrop, quema anunciada por el equipo, pausa de gobernanza, regreso con votos de alto impacto) demuestra que las DAOs son sistemas vivos: pueden fallar, suspenderse, y rediseñarse. Estudiar casos reales te hace mejor voter en cualquier protocolo.',
          'Empieza hoy: stakea tus JUP en vote.jup.ag, explora DAOs en realms.today, y sigue los SIMDs para entender hacia dónde va Solana. Tu voto importa más de lo que crees.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es el riesgo principal de la votación token-weighted (1 token = 1 voto)?',
          options: [
            { id: 'a', text: 'Es demasiado lenta porque hay muchos votos que contar' },
            { id: 'b', text: 'Las ballenas con grandes cantidades de tokens pueden dominar las decisiones, dejando sin voz efectiva a miles de holders pequeños' },
            { id: 'c', text: 'Los tokens pierden valor cuando se usan para votar' },
            { id: 'd', text: 'Solo funciona en Ethereum, no en Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'En votación token-weighted, quien más tokens tiene, más poder tiene. Una sola wallet con el 5% del supply puede superar a miles de usuarios. Es democracia del capital, no de las personas. Por eso existen alternativas como votación cuadrática y conviction voting.'
        },
        {
          id: 'q2',
          question: 'Un protocolo DeFi anuncia una votación urgente para "transferir 10M USDC de la tesorería a un fondo de crecimiento". La propuesta apareció hace 2 horas y la votación cierra en 6 horas. ¿Qué tipo de ataque podría ser esto?',
          options: [
            { id: 'a', text: 'Un ataque Sybil normal, no hay de qué preocuparse' },
            { id: 'b', text: 'Una propuesta de drenaje de tesorería, la urgencia artificial, el lenguaje vago, y el corto periodo de votación son red flags clásicas de una propuesta maliciosa' },
            { id: 'c', text: 'Es seguramente legítimo porque la comunidad lo propuso' },
            { id: 'd', text: 'Un flash loan attack' }
          ],
          correctAnswer: 'b',
          explanation: 'Las propuestas maliciosas de drenaje suelen disfrazarse con lenguaje positivo ("crecimiento", "comunidad") y usan urgencia artificial para que los voters no tengan tiempo de analizarla. Red flags: poco tiempo de discusión, montos grandes, wallets destino desconocidas, y proponentes sin historial.'
        },
        {
          id: 'q3',
          question: '¿Por qué la delegación es importante en gobernanza DAO, y cómo funciona en la práctica?',
          options: [
            { id: 'a', text: 'No es importante, cada persona debería votar por sí misma' },
            { id: 'b', text: 'Porque la mayoría de holders nunca votan (1-15% de participación), lo que permite que minorías coordinen las decisiones. La delegación permite que tu poder de voto cuente a través de un experto sin perder tus tokens' },
            { id: 'c', text: 'Delegación significa regalar tus tokens a otra persona permanentemente' },
            { id: 'd', text: 'Solo los validadores pueden delegar votos' }
          ],
          correctAnswer: 'b',
          explanation: 'Con tasas de participación del 1-15%, la baja participación es el mayor riesgo de las DAOs. La delegación permite que tu poder de voto cuente sin que investigues cada propuesta. No pierdes tus tokens, solo prestas tu peso de voto, y puedes revocarlo cuando quieras.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la diferencia fundamental entre gobernanza centralizada (empresa tradicional) y descentralizada (DAO)?',
          options: [
            { id: 'a', text: 'No hay diferencia real, ambas son controladas por unos pocos' },
            { id: 'b', text: 'En la centralizada, un CEO decide sin transparencia y los usuarios no participan. En la descentralizada, los holders votan públicamente en decisiones que afectan el protocolo, con total transparencia on-chain' },
            { id: 'c', text: 'La gobernanza descentralizada es siempre mejor porque es más rápida' },
            { id: 'd', text: 'La gobernanza centralizada usa blockchain y la descentralizada no' }
          ],
          correctAnswer: 'b',
          explanation: 'La gobernanza descentralizada no es perfecta (es más lenta y vulnerable a baja participación), pero ofrece transparencia total y participación de todos los stakeholders. En la centralizada, las decisiones son opacas y los usuarios solo pueden aceptar o irse. En una DAO, puedes votar para cambiar lo que no te gusta.'
        },
        {
          id: 'q5',
          question: 'Tienes 500 JUP y quieres participar en la gobernanza de Jupiter. ¿Cuáles son los pasos correctos?',
          options: [
            { id: 'a', text: 'Enviar mis JUP a la Solana Foundation para que voten por mí' },
            { id: 'b', text: 'Ir a vote.jup.ag, conectar mi wallet, stakear mis JUP, votar en las propuestas activas (o delegar a un delegado), y reclamar ASR rewards al final del periodo' },
            { id: 'c', text: 'Crear un NFT con mis JUP para tener derecho a voto' },
            { id: 'd', text: 'Publicar mi voto en Twitter y esperar a que lo cuenten' }
          ],
          correctAnswer: 'b',
          explanation: 'Jupiter tiene uno de los sistemas de gobernanza más accesibles: stakea JUP en vote.jup.ag, vota en propuestas o delega, y recibe ASR rewards. Todo el proceso toma ~10 minutos y te da voz real en el futuro del mayor DEX de Solana mientras ganas recompensas por participar.'
        },
        {
          id: 'q6',
          question: 'Un protocolo que usas lanza una propuesta: "Aumentar el multiplicador de rewards del token nativo al depositar en el pool X". Ves que la propuesta fue creada hace 18 horas, la votación cierra en 6 horas, y el proponente es una wallet que apareció hace 3 semanas con volumen alto de voto acumulado recientemente. Aplicando el framework de red flags, ¿qué haces?',
          options: [
            { id: 'a', text: 'Voto a favor, más rewards son buenos' },
            { id: 'b', text: 'Al menos cuatro red flags: (1) periodo de discusión muy corto (<24h), (2) votación acelerada (6h), (3) proponente sin historial (wallet reciente), (4) acumulación sospechosa de poder de voto antes de proponer. Voto en contra, alerto a la comunidad en el foro del protocolo, y investigo si hay lazos entre la wallet proponente y el pool X' },
            { id: 'c', text: 'Voto abstención para no meterme en problemas y dejo que decidan otros con más experiencia' },
            { id: 'd', text: 'Delego mi voto al delegado más popular sin leer la propuesta' }
          ],
          correctAnswer: 'b',
          explanation: 'Este escenario tiene el patrón clásico de un ataque de gobernanza dirigido. La acumulación reciente de poder de voto + propuesta acelerada + proponente sin historial + cambio de parámetros específicos a favor de un pool particular = probable extracción dirigida. La defensa pasiva (abstención) no ayuda, las propuestas se aprueban con los que votan. Los voters responsables activamente votan en contra Y alertan a la comunidad. La gobernanza descentralizada solo funciona con participantes vigilantes.'
        },
        {
          id: 'q7',
          question: 'Estás comparando dos sistemas de votación para una nueva DAO: Sistema A (conviction voting) requiere que tu voto acumule fuerza con el tiempo, mientras más tiempo lo mantienes, más pesa. Sistema B (vote escrow) requiere bloquear tus tokens por un período fijo (ej: 4 años) y recibes más poder de voto cuanto más largo es el bloqueo. ¿Cuál es la diferencia fundamental?',
          options: [
            { id: 'a', text: 'Son lo mismo con diferente nombre' },
            { id: 'b', text: 'Conviction voting penaliza cambiar de opinión (tu voto pierde peso si lo mueves), mientras vote escrow penaliza salir del protocolo (no puedes vender tus tokens durante el bloqueo). Ambos alinean incentivos con compromiso de largo plazo, pero conviction es más flexible; vote escrow es más brutal pero más difícil de manipular' },
            { id: 'c', text: 'Vote escrow es solo para Ethereum, conviction solo para Solana' },
            { id: 'd', text: 'Ambos son vulnerables a flash loan attacks por igual' }
          ],
          correctAnswer: 'b',
          explanation: 'Conviction voting y vote escrow resuelven el mismo problema (alinear poder de voto con compromiso real) pero por mecanismos distintos. Conviction = "demuestra compromiso manteniendo tu decisión". Vote escrow = "demuestra compromiso bloqueando capital". Para DAOs con decisiones largas y complejas, conviction puede funcionar mejor. Para protocolos donde el voto específico importa menos que tener "skin in the game", vote escrow es más robusto. Un DAO maduro a veces combina ambos.'
        }
      ]
    }
  }
};
