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
    duration: '22 min',
    type: 'Lectura + Práctica',
    description: 'Aprende a leer el lenguaje visual del mercado. Cada vela cuenta una historia de batalla entre compradores y vendedores. Es la base de todo el análisis técnico, con sus usos y sus límites.',
    sections: [
      {
        type: 'intro',
        title: 'El Lenguaje Secreto del Precio',
        content: 'En el siglo XVIII, un comerciante de arroz japonés llamado Munehisa Homma descubrió algo que los traders modernos seguimos usando 300 años después: **el precio cuenta una historia visual**. Mientras todos miraban números, Homma dibujaba velas. Cada vela le mostraba la batalla entre compradores (toros) y vendedores (osos) en un período de tiempo. ¿Quién abrió? ¿Quién cerró? ¿Hasta dónde lucharon? Con esta información, según cuenta la leyenda, Homma acumuló una fortuna en el mercado de arroz de Osaka. Hoy, las velas japonesas son la herramienta más usada en el mundo del trading. No importa si operas Bitcoin, acciones de Apple o futuros de petróleo, todos usan el mismo lenguaje. Y tú estás a punto de aprenderlo.',
        highlight: {
          title: 'La Ventaja Visual',
          text: 'Un gráfico de líneas te dice "el precio subió". Una vela te dice "el precio abrió aquí, los osos lo tiraron hasta acá, los toros pelearon y lo cerraron aquí arriba". Esa historia es la que vas a aprender a leer.'
        }
      },
      {
        type: 'main',
        title: 'Antes de Empezar: El Trading y Tu Plan de Inversión',
        content: 'Si vienes del nivel Principiante, cerraste con un plan de inversión escrito: portafolio base, DCA automático, reglas claras. Ahora este nivel te habla de velas, tendencias y trading, y es normal preguntarse: ¿no habíamos quedado en que el trading diario era un error? La respuesta corta: **tu plan sigue intacto, y este nivel no lo reemplaza**. Aquí aprendes una capa nueva de habilidades encima de esa base. Aclaremos las reglas del juego antes de la primera vela:',
        features: [
          { icon: PiggyBank, title: 'Tu Plan DCA Sigue Siendo la Base', text: 'Nada de lo que aprendas en este nivel cambia tu portafolio base ni tu DCA. Eso sigue corriendo en automático, sin importar lo que hagas aquí. Lo que construyes ahora es capacidad de análisis: entender POR QUÉ el mercado hace lo que hace mientras tu plan se ejecuta solo.' },
          { icon: Shield, title: 'Si Decides Operar, Hazlo con Poco', text: 'El trading activo es opcional y tiene reglas propias. Si decides operar, hazlo solo con tu **capital de trading**: como máximo el 5-10% de tu porción cripto, separado de tu base de DCA y de tu fondo de emergencia. Por ejemplo, si tu porción cripto es de 4 millones de pesos, tu capital de trading es de 200,000 a 400,000. Es la regla de todo este nivel: cada ejemplo de tamaño de posición se calcula sobre ese capital, no sobre todo tu portafolio. Donde el dato se publica, como en los CFDs en Europa, entre el 74% y el 89% de las cuentas retail pierde dinero (lo verás en Mentalidad de Trader). No es para asustarte: es para que operes con un tamaño donde equivocarte sea aprendizaje, no tragedia.' },
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
          { icon: Clock, title: 'El Timeframe', text: 'Cada vela representa un período de tiempo fijo: 1 minuto, 15 minutos, 1 hora, 4 horas, 1 día. Una vela diaria comprime toda la acción de 24 horas en una sola figura. A mayor timeframe, menos ruido.' }
        ]
      },
      {
        type: 'main',
        title: 'Los 4 Patrones de Vela Individual que Debes Conocer',
        content: 'Antes, dos palabras que vas a ver mucho. Un **soporte** es una zona de precio donde antes aparecieron compradores y el precio dejó de caer. Una **resistencia** es una zona donde antes aparecieron vendedores y el precio dejó de subir. Los verás a fondo en la lección Soportes y Resistencias. Ahora sí, estos son los 4 patrones de vela individual que aparecen una y otra vez en los gráficos de crypto:',
        features: [
          { icon: Activity, title: 'Doji (Indecisión)', text: 'Cuerpo prácticamente inexistente, abrió y cerró al mismo precio. Las mechas pueden ser largas o cortas. Significa **equilibrio total** entre toros y osos. En zona de soporte o resistencia, un Doji puede ser señal de reversión. Solo no indica dirección.' },
          { icon: TrendingUp, title: 'Hammer (Martillo), Señal Alcista', text: 'Cuerpo pequeño en la parte superior, mecha inferior MUY larga (al menos 2× el cuerpo), poca o ninguna mecha superior. Significa: los osos tiraron el precio fuerte, pero los toros lo rescataron antes del cierre. **Solo tiene sentido en zona de soporte tras una caída.** Es el mercado diciendo "hasta aquí", al menos por ahora.' },
          { icon: TrendingDown, title: 'Shooting Star (Estrella Fugaz), Señal Bajista', text: 'Lo opuesto al Hammer: cuerpo pequeño abajo, mecha superior MUY larga. Los toros empujaron arriba pero fueron aplastados antes del cierre. **Solo tiene sentido en zona de resistencia tras una subida.** Es el mercado diciendo "no pasarás".' },
          { icon: Zap, title: 'Marubozu (Convicción Total)', text: 'Cuerpo grande SIN mechas (o casi sin ellas). Marubozu verde = los toros dominaron desde el inicio hasta el final, sin dar espacio a los osos. Marubozu rojo = los osos aplastaron sin piedad. Indica **momentum fuerte** en la dirección de la vela.' }
        ]
      },
      {
        type: 'main',
        title: 'Patrones de Múltiples Velas: Cambios de Control',
        content: 'Si una sola vela cuenta una historia, dos o tres velas cuentan una película. Estos patrones de múltiples velas suelen considerarse más informativos que una vela sola porque muestran un **cambio de control** entre toros y osos:',
        features: [
          { icon: TrendingUp, title: 'Engulfing Alcista (Envolvente)', text: 'Una vela roja pequeña seguida por una vela verde que "envuelve" completamente el cuerpo de la roja. Significa que los toros absorbieron toda la presión vendedora y tomaron el control. **Tiene más peso cuando aparece en soporte con volumen creciente.**' },
          { icon: TrendingDown, title: 'Engulfing Bajista', text: 'Lo opuesto: vela verde pequeña seguida de una roja masiva que envuelve la anterior. Los osos aplastaron la última resistencia de los toros. **Señal de distribución cuando aparece en resistencia o después de una subida extendida.**' },
          { icon: AlertTriangle, title: 'Evening Star (Estrella Vespertina)', text: 'Patrón de 3 velas: (1) vela verde grande, (2) vela pequeña de cualquier color (cuerpo chico, indecisión), (3) vela roja grande que cierra dentro del cuerpo de la primera. Es una señal clásica de posible reversión bajista, que necesita confirmación.' },
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
            'Menos ruido, señales más limpias',
            'Puedes revisar 1-2 veces al día',
            'Ideal para swing trading (días-semanas)',
            'Los patrones tienen algo más de sentido (aunque nunca son infalibles)',
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
          { icon: CheckCircle, title: 'Patrón + Volumen Alto = Señal Fuerte', text: 'Si un Hammer aparece con volumen 3-5× superior al promedio, significa que **muchos compradores** están defendiendo ese nivel. La señal tiene más peso: hay participación real defendiendo el nivel. Aun así, puede fallar.' },
          { icon: AlertTriangle, title: 'Patrón + Volumen Bajo = Señal Débil', text: 'Si el mismo Hammer aparece con volumen bajo, podría ser solo ruido. Pocos participantes, poca convicción. No apuestes tu capital en señales sin volumen que las respalde.' }
        ]
      },
      {
        type: 'main',
        title: 'Los 4 Errores Fatales del Principiante',
        content: 'La mayoría de los traders que aprenden velas comete los mismos errores. Evítalos y ya estarás por delante:',
        features: [
          { icon: AlertTriangle, title: '1. Operar Cada Patrón que Ven', text: 'No todos los Hammers son señales de compra. El contexto (tendencia, soporte/resistencia, volumen) es más importante que el patrón en sí. Un Hammer en medio de una caída libre probablemente fallará.' },
          { icon: AlertTriangle, title: '2. Ignorar el Timeframe', text: 'Un Doji en vela de 1 minuto no significa nada. El mismo Doji en vela diaria después de una tendencia extendida merece atención. Siempre mira timeframes altos primero.' },
          { icon: AlertTriangle, title: '3. No Esperar Confirmación', text: 'Ves una Evening Star y vendes inmediatamente. Error. Espera a que la siguiente vela confirme la dirección. La paciencia de una vela extra puede salvarte de muchas trampas.' },
          { icon: AlertTriangle, title: '4. Memorizar sin Entender', text: 'Aprender 50 patrones de memoria no sirve si no entiendes la psicología detrás. Cada patrón refleja una batalla entre compradores y vendedores. Entiende la historia, no solo la forma.' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre el gráfico de SOL/USDT en 4 horas (tradingview.com, gratis). 1) Identifica la tendencia de las últimas 2 semanas. 2) Marca 3 velas que reconozcas: Doji, Hammer, Engulfing o Marubozu. 3) Revisa el volumen de cada una: ¿confirma la señal? 4) Anota qué hizo el precio en las 5 velas siguientes. Repítelo unos días: leer velas es un músculo.'
        }
      },
      {
        type: 'counterpoint',
        title: 'Otra Mirada: ¿Funciona el Análisis Técnico?',
        content: 'El análisis técnico es muy popular, pero la evidencia sobre su poder para predecir precios es mixta. Conviene que la conozcas antes de operar:\n\n- **Algunas reglas simples funcionaron en el pasado.** Un estudio clásico (Brock, Lakonishok y LeBaron, 1992) encontró que reglas de medias móviles tuvieron cierto poder predictivo en el índice Dow Jones durante casi un siglo.\n- **Pero esa ventaja suele desaparecer al probarla bien.** Cuando se corrige el sesgo de probar cientos de reglas hasta que una funcione, y se aplican a datos nuevos, las mejores reglas dejan de ganarle al mercado (Sullivan, Timmermann y White, 1999). Después de comisiones, la ventaja casi siempre se reduce o desaparece.\n- **Los patrones de velas tienen todavía menos respaldo.** Los estudios que los prueban de forma sistemática encuentran poco o ningún poder predictivo después de costos.\n- **En crypto pasa lo mismo.** Hay reglas que ganan en datos históricos, pero al probarlas con datos nuevos, comisiones y corrección por exceso de pruebas, rara vez sostienen una ventaja (Hudson y Urquhart, 2021).\n\nEntonces, ¿para qué aprenderlo? Para **planificar**: decidir dónde entrar, dónde poner el stop y dónde tomar ganancias, y definir tu riesgo antes de operar. También te ayuda a entender lo que miran millones de traders. Úsalo como mapa, no como bola de cristal. Y recuerda por qué pierde la mayoría de los traders retail: no solo por malos análisis, sino por comisiones, apalancamiento y emociones.'
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Tu Nueva Forma de Leer el Mercado',
        items: [
          'Las velas japonesas no son predicciones mágicas, son un **lenguaje visual** que comprime la batalla entre compradores y vendedores en cada período de tiempo.',
          'Domina los patrones esenciales: Doji, Hammer, Shooting Star, Engulfing y Morning/Evening Star. Con estos 5-6 patrones tienes lo esencial; no necesitas memorizar 50.',
          'El contexto lo es todo: un patrón solo tiene sentido cuando aparece en el **lugar correcto** (soporte/resistencia) y en la **dirección correcta** (con la tendencia o en reversión clara).',
          'Usa timeframes de 4 horas o diarios como mínimo. Los timeframes bajos (1-15 minutos) generan más ruido que señales reales.',
          'El volumen es tu detector de mentiras. Un patrón sin volumen que lo confirme es como una promesa sin firma, puede ser falsa.',
          'No operes cada patrón que veas. La paciencia y la selectividad son las armas más poderosas del trader. Mejor 3 operaciones buenas al mes que 30 mediocres.',
          'La evidencia sobre el análisis técnico es mixta: úsalo para planificar entradas, salidas y riesgo, no como bola de cristal. Y si operas, solo con tu capital de trading.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'En el gráfico diario de SOL ves una vela roja de cuerpo muy grande y casi sin mechas, justo después de tres semanas de subida. ¿Cómo la lees?',
          options: [
            { id: 'a', text: 'Una corrección normal dentro de la tendencia alcista, que conviene comprar ya' },
            { id: 'b', text: 'Una vela de indecisión, porque sin mechas no se sabe hacia dónde va el precio' },
            { id: 'c', text: 'Un Marubozu bajista: los vendedores dominaron todo el día, posible señal de techo' },
            { id: 'd', text: 'Acumulación de ballenas, porque las velas rojas grandes esconden compras muy fuertes' }
          ],
          correctAnswer: 'c',
          explanation: 'Un cuerpo grande sin mechas dice que los vendedores controlaron el precio de la apertura al cierre, sin que los compradores respondieran. Tras una subida larga, es una alerta de posible techo, no una certeza. Confundirla con indecisión es común: la indecisión se ve como un cuerpo pequeño (Doji), justo lo contrario.'
        },
        {
          id: 'q2',
          question: 'En el diario de Bitcoin ves tres velas: una verde grande, una de cuerpo diminuto y una roja grande que cierra dentro del cuerpo de la primera. ¿Qué patrón es?',
          options: [
            { id: 'a', text: 'Evening Star: un posible giro bajista que todavía necesita confirmación' },
            { id: 'b', text: 'Morning Star: una señal de compra fuerte tras una caída prolongada' },
            { id: 'c', text: 'Three White Soldiers: la tendencia alcista continúa con más fuerza' },
            { id: 'd', text: 'Un triple Doji: indecisión total, así que el patrón no te dice nada útil' }
          ],
          correctAnswer: 'a',
          explanation: 'Subida fuerte, indecisión y luego una vela bajista que borra buena parte de la primera: es una Evening Star. La Morning Star es su espejo, al final de una caída. Como cualquier patrón, puede fallar, por eso se confirma con la vela siguiente, el volumen y la zona donde aparece.'
        },
        {
          id: 'q3',
          question: 'Encuentras un Hammer bien formado en ETH, pero el volumen de esa vela es el más bajo de las últimas 20. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Espero confirmación: un Hammer con tan poco volumen tiene poca convicción' },
            { id: 'b', text: 'Compro ya, porque un Hammer bien formado es señal suficiente por sí solo' },
            { id: 'c', text: 'Vendo ya, porque el volumen bajo convierte al Hammer en una señal bajista' },
            { id: 'd', text: 'Lo opero igual, porque el volumen no influye en la lectura de las velas' }
          ],
          correctAnswer: 'a',
          explanation: 'El volumen muestra cuánta gente respaldó el movimiento. Un Hammer con poco volumen sugiere que el rechazo de precios bajos no tuvo mucha participación. No lo vuelve bajista: lo vuelve débil. La respuesta prudente es esperar una vela de confirmación.'
        },
        {
          id: 'q4',
          type: 'multiple-select',
          question: '¿Qué datos resume cada vela japonesa? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'El precio de apertura' },
            { id: 'b', text: 'El precio de cierre' },
            { id: 'c', text: 'El precio máximo' },
            { id: 'd', text: 'El precio mínimo' },
            { id: 'e', text: 'El número de compradores' },
            { id: 'f', text: 'La tendencia del mes' }
          ],
          correctAnswers: [0, 1, 2, 3],
          explanation: 'Cada vela resume cuatro precios del periodo: apertura, cierre, máximo y mínimo. El cuerpo va de la apertura al cierre y las mechas llegan al máximo y al mínimo. El número de participantes no aparece, y la tendencia se lee con muchas velas juntas, no con una.'
        },
        {
          id: 'q5',
          type: 'true-false',
          question: 'Un patrón de velas bien formado en el gráfico de 5 minutos es tan fiable como el mismo patrón en el gráfico diario.',
          correctAnswer: false,
          explanation: 'Falso. En timeframes bajos hay mucho más ruido: una vela de 5 minutos puede moverse por una sola orden grande. Una vela diaria resume todo un día de operaciones, y por eso sus patrones suelen ser más limpios, aunque tampoco son una garantía.'
        },
        {
          id: 'q6',
          question: 'En la parte alta de una subida de Bitcoin aparece una vela con apertura casi igual al cierre y mechas largas arriba y abajo. ¿Qué es y qué indica?',
          options: [
            { id: 'a', text: 'Un Marubozu alcista: los compradores siguen al mando y la subida sigue' },
            { id: 'b', text: 'Un Hammer: señal de compra inmediata, sin importar dónde aparezca' },
            { id: 'c', text: 'Un Doji en resistencia: señal segura de venta porque siempre anticipa caídas' },
            { id: 'd', text: 'Un Doji en resistencia: equilibrio de fuerzas y alerta de agotamiento' }
          ],
          correctAnswer: 'd',
          explanation: 'Cuerpo casi nulo con mechas a ambos lados es un Doji: compradores y vendedores quedaron empatados. Después de una subida y en resistencia, indica que los compradores perdieron fuerza. Es una alerta, no una orden de venta: muchos Doji terminan en continuación.'
        },
        {
          id: 'q7',
          question: 'Un amigo asegura que con las velas puede predecir el precio de mañana. ¿Qué dice la evidencia que viste en esta lección?',
          options: [
            { id: 'a', text: 'Es sólida: los patrones clásicos aciertan en la gran mayoría de los casos' },
            { id: 'b', text: 'Es nula: las velas no contienen información real sobre el precio del activo' },
            { id: 'c', text: 'Es sólida en cripto, porque allí todos los traders siguen los mismos patrones' },
            { id: 'd', text: 'Es mixta: sirven para planear entradas, salidas y riesgo, no para predecir' }
          ],
          correctAnswer: 'd',
          explanation: 'Los estudios sobre análisis técnico muestran resultados mixtos: algunas reglas funcionaron en ciertos periodos y dejaron de hacerlo, y los costos se comen buena parte de la ventaja. Las velas sí resumen información real (los precios del periodo); lo que no hacen es garantizar el siguiente movimiento.'
        },
        {
          id: 'q8',
          question: 'Si decides operar con velas, ¿con qué dinero deberías hacerlo según tu plan de inversión?',
          options: [
            { id: 'a', text: 'Solo con tu capital de trading, una parte pequeña que puedes perder' },
            { id: 'b', text: 'Con tus ahorros de largo plazo, que rinden más con buenas señales' },
            { id: 'c', text: 'Con tu fondo de emergencia, que se repone rápido con las ganancias' },
            { id: 'd', text: 'Con dinero prestado, porque el apalancamiento cubre las señales fallidas' }
          ],
          correctAnswer: 'a',
          explanation: 'Tu capital de trading es una parte pequeña y separada de tu portafolio, que puedes perder sin afectar tus metas. Los ahorros de largo plazo y el fondo de emergencia tienen otro trabajo, y operar con deuda multiplica las pérdidas cuando una señal falla, que es algo que pasa a menudo.'
        }
      ]
    }
  },
  14: {
    id: 14,
    title: 'Soportes y Resistencias',
    level: 'Intermedio',
    number: '2 de 12',
    duration: '19 min',
    type: 'Lectura + Práctica',
    description: 'El precio tiene memoria. Aprende a identificar los pisos y techos del mercado donde el precio rebota una y otra vez, y úsalos para tomar decisiones inteligentes de compra y venta.',
    sections: [
      {
        type: 'intro',
        title: 'La Memoria del Precio',
        content: '¿Te has preguntado por qué Bitcoin siempre parece rebotar en ciertos precios? ¿Por qué $60,000 fue un muro durante meses? ¿Por qué cuando lo rompió, se disparó? No es magia ni coincidencia. Es **psicología humana cristalizada en el gráfico**. Cuando miles de personas compraron a $60,000, ese precio se grabó en la memoria del mercado. Cada vez que el precio vuelve ahí, esas mismas personas toman decisiones: algunos venden para "salir en tablas", otros compran porque recuerdan que ahí rebotó antes. Estas zonas de memoria colectiva se llaman **soportes** y **resistencias**, y son una de las herramientas más usadas del análisis técnico. No predicen el futuro: te marcan dónde conviene prestar atención y dónde planear una entrada, una salida o un stop.',
        highlight: {
          title: 'El Concepto Clave',
          text: 'Soporte y resistencia no son líneas mágicas en un gráfico, son zonas donde suelen **concentrarse órdenes de compra o venta**, y por eso el precio a menudo reacciona ahí. A veces rebota, a veces las atraviesa: son el campo de batalla, no el resultado.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es un Soporte? El Piso del Precio',
        content: 'Un **soporte** es una zona de precio donde la demanda de compra es tan fuerte que detiene una caída. Imagina el suelo de tu casa: puedes lanzar una pelota hacia abajo, pero el suelo la hará rebotar. El soporte funciona igual, es el "piso" donde los compradores aparecen en masa.',
        features: [
          { icon: TrendingUp, title: 'Por Qué Existe', text: 'Cuando el precio cae a una zona donde antes rebotó, tres tipos de compradores aparecen: (1) los que compraron ahí antes y quieren más, (2) los que se perdieron la subida anterior y ahora tienen su oportunidad, (3) los traders que reconocen la zona como soporte técnico.' },
          { icon: Search, title: 'Cómo Identificarlo', text: 'Busca zonas donde el precio tocó un nivel y rebotó hacia arriba **al menos 2-3 veces**. No busques un precio exacto, busca una **zona**. Si el precio rebotó en $58,500, $59,100 y $58,800, tu soporte está en la zona de $58,500-$59,100.' },
          { icon: BarChart3, title: 'Soporte en la Práctica', text: 'En Solana, la zona de $120-$130 funcionó como soporte fuerte durante meses en 2024. Cada vez que el precio caía ahí, aparecían compradores y hubo varios rebotes fuertes. Pero ningún soporte dura para siempre: las zonas que funcionan por meses terminan rompiéndose, y quien compra ahí sin stop lo descubre tarde.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué es una Resistencia? El Techo del Precio',
        content: 'Una **resistencia** es el espejo del soporte: una zona donde la presión de venta es tan fuerte que detiene una subida. Es el "techo de cristal" que el precio no logra romper. Cada vez que el precio llega ahí, los vendedores lo empujan hacia abajo.',
        features: [
          { icon: TrendingDown, title: 'Por Qué Existe', text: 'Tres tipos de vendedores crean resistencia: (1) los que compraron a ese precio y llevan semanas perdiendo, quieren salir en "break-even", (2) los traders que vieron que el precio fue rechazado ahí antes, (3) instituciones que colocan órdenes de venta grandes en números redondos.' },
          { icon: Search, title: 'Cómo Identificarla', text: 'Busca zonas donde el precio subió, fue rechazado y cayó **al menos 2-3 veces**. Los rechazos suelen dejar mechas superiores largas en las velas, huellas visuales de que los vendedores ganaron la batalla.' },
          { icon: AlertTriangle, title: 'Los Números Redondos', text: 'Los niveles psicológicos como $100, $50,000 o $100,000 actúan como resistencias naturales. ¿Por qué? Porque miles de personas ponen órdenes de venta en números redondos: "Cuando Bitcoin llegue a $100,000, vendo". Esa acumulación de órdenes crea un muro real.' }
        ]
      },
      {
        type: 'main',
        title: 'Zonas, No Líneas: El Error Más Común',
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
          { icon: CheckCircle, title: 'Cómo Operarlo', text: 'Cuando un soporte se rompe con volumen, espera un "retest", el precio suele volver a la zona rota desde abajo. Si la zona ahora actúa como resistencia (el precio es rechazado), tienes una señal de que el flip se está dando. Muchos traders la usan porque define con claridad dónde estás equivocado: si el precio vuelve a meterse en la zona, la tesis falló.' },
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
        content: 'Si el soporte y la resistencia fueran perfectos, todos ganaríamos dinero. La realidad es que el mercado está lleno de **fakeouts** (rupturas falsas), movimientos que parecen romper un nivel pero inmediatamente revierten. Muchas son simple ruido: pocas órdenes en un momento de poco volumen. Otra explicación popular es la **caza de stops**: un jugador grande podría empujar el precio a la zona donde hay muchos stops para comprar más barato. Puede pasar, pero rara vez se puede demostrar en un caso concreto.',
        features: [
          { icon: AlertTriangle, title: 'Cómo Puede Funcionar la Trampa', text: 'Imagina un soporte en $150. Miles de traders tienen su stop loss en $148. Si alguien vende fuerte y empuja el precio a $147, esos stops se activan como ventas forzadas, y quien compró en $147 consigue precio barato. El precio vuelve a $155 y los que salieron por sus stops quedaron fuera. Sea por una ballena o por puro ruido, el efecto para ti es el mismo.' },
          { icon: Shield, title: 'Cómo Protegerte', text: 'Evita poner tu stop justo debajo del soporte: ahí se acumulan muchos stops y una mecha rápida suele activarlos. Ponlo un poco más abajo, fuera de la zona "obvia", y ajusta el tamaño de tu posición para que esa distancia no te haga arriesgar de más. Y la regla de oro: **no compres el primer toque de soporte. Espera una vela de confirmación** (un cierre fuerte por encima de la zona).' },
          { icon: Eye, title: 'Señales de que es un Fakeout', text: 'La ruptura ocurre con volumen bajo (poca participación real), la vela cierra de vuelta dentro de la zona rápidamente, o ves una mecha larga que "pincha" debajo del soporte pero cierra arriba. Estas son huellas de una trampa.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Framework Práctico: Cómo Usar S/R Para Operar',
        content: 'Ahora que entiendes la teoría, aquí tienes un framework paso a paso. Ninguna zona garantiza un rebote: estas reglas sirven para decidir de antemano dónde entras, dónde sales y cuánto arriesgas, no para adivinar el futuro.',
        features: [
          { icon: Search, title: '1. Identifica las Zonas Clave', text: 'Abre el gráfico en timeframe diario o semanal. Busca los niveles donde el precio rebotó al menos 2-3 veces. Dibuja zonas (no líneas) en esos niveles. Estos son tus "campos de batalla".' },
          { icon: Crosshair, title: '2. Espera que el Precio Llegue a la Zona', text: 'No persigas el precio. Espera a que venga a TI, a una de tus zonas marcadas. La paciencia es lo que separa al trader del apostador.' },
          { icon: Eye, title: '3. Busca Confirmación', text: 'Cuando el precio toque tu zona, busca una vela de reversión (Hammer, Engulfing) con volumen alto. Sin confirmación, no entres.' },
          { icon: Shield, title: '4. Coloca tu Stop Loss Fuera de la Zona', text: 'Un **stop loss** es la orden (o regla) que cierra tu posición si el precio se mueve en tu contra hasta un nivel donde tu tesis ya no vale. Si compras en soporte, tu stop va debajo del mínimo de la zona + un filtro de 1-2%. Si el precio llega ahí, tu tesis estaba equivocada y sales protegiendo capital. **Profundizamos tipos de stop, tamaño de posición (1-2%) y la realidad de los DEXs en la lección "El Arte del Stop Loss" de este nivel.**' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre BTC/USDT en gráfico diario. 1) Marca con rectángulos las 3 zonas donde el precio rebotó al menos 2 veces en los últimos 6 meses. 2) Busca un flip: una resistencia rota que después actuó como soporte. 3) Anota dónde pondrías el stop loss si compraras en la zona más cercana. 4) Vuelve en una semana y verifica si tus zonas se respetaron.'
        }
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Dominando los Pisos y Techos del Mercado',
        items: [
          'Soporte y resistencia son **zonas de alta concentración de órdenes**, no líneas exactas. Dibuja rectángulos, no líneas.',
          'Existen por psicología humana: miles de personas toman decisiones en los mismos niveles de precio, creando "memoria del mercado".',
          'Cuando un soporte se rompe se convierte en resistencia, y viceversa (role reversal). Es un concepto muy usado, pero los retests pueden ser profundos y durar meses.',
          'Cuantos más toques tiene una zona, más "famosa" es, pero también más débil se vuelve. Cada toque gasta las órdenes que la defienden.',
          'Las fakeouts son rupturas falsas: unas son ruido y otras, posibles cazas de stops. Por eso conviene esperar confirmación antes de actuar.',
          'Tu framework: identifica zonas, espera que el precio llegue, busca confirmación con velas y volumen, y coloca el stop loss fuera de la zona. La disciplina vale más que la intuición.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin rompe la resistencia de $100,000 con un volumen 5 veces mayor al promedio y cierra con fuerza por encima. Dos semanas después vuelve a $100,000. ¿Qué esperas?',
          options: [
            { id: 'a', text: 'Que lo rechace hacia abajo, porque una resistencia lo sigue siendo para siempre' },
            { id: 'b', text: 'Que pueda actuar como soporte por el cambio de rol, aunque espero confirmación' },
            { id: 'c', text: 'Que lo atraviese sin pausa, porque un nivel roto deja de importarle al mercado' },
            { id: 'd', text: 'Que rebote con seguridad, porque toda resistencia rota se vuelve un soporte firme' }
          ],
          correctAnswer: 'b',
          explanation: 'Una resistencia rota con volumen fuerte suele convertirse en soporte: quienes se perdieron la subida ven ahí una segunda oportunidad. Pero no es automático. En 2024, Bitcoin rompió $69,000 y pasó meses por debajo antes de confirmar el cambio. Por eso esperas una vela de confirmación y usas stop.'
        },
        {
          id: 'q2',
          question: 'Compras SOL en una zona de soporte que va de $138 a $142. ¿Dónde colocas tu stop loss?',
          options: [
            { id: 'a', text: 'Justo en $140, el centro de la zona, para salir apenas la toque' },
            { id: 'b', text: 'En $141, un dólar debajo de tu entrada, para perder lo mínimo' },
            { id: 'c', text: 'Sin stop: compraste en soporte, así que el precio va a rebotar ahí' },
            { id: 'd', text: 'Debajo del mínimo de la zona, en $138, con un margen extra de 1-2%' }
          ],
          correctAnswer: 'd',
          explanation: 'Justo debajo de los niveles obvios se acumulan muchos stops, y una mecha rápida los activa. Tu stop va donde tu idea queda invalidada: debajo de toda la zona, con un margen. Un stop muy ajustado te saca por ruido, y no tener stop supone que el soporte nunca falla, algo que ningún soporte cumple.'
        },
        {
          id: 'q3',
          question: 'Un soporte de ETH en $3,200 ha sido tocado cinco veces y el precio se acerca por sexta vez. ¿Qué es más probable?',
          options: [
            { id: 'a', text: 'Que rebote otra vez, porque cinco rebotes prueban que es muy sólida' },
            { id: 'b', text: 'Que nada cambie: el número de toques no afecta a una zona de precio' },
            { id: 'c', text: 'Que la zona esté más débil: cada toque consume órdenes de compra' },
            { id: 'd', text: 'Que se rompa con seguridad, porque los soportes caen al sexto toque' }
          ],
          correctAnswer: 'c',
          explanation: 'Según la lectura de flujo de órdenes que viste en la lección, cada toque gasta parte de las órdenes que defienden la zona, y la ruptura se vuelve más probable. No es una ley con número fijo, es una tendencia. El error tentador es pensar que más rebotes siempre significan un soporte más fuerte.'
        },
        {
          id: 'q4',
          question: 'BTC cae por debajo de un soporte en $90,000, toca $89,500 y cierra el día de vuelta por encima de $90,000 con una mecha inferior larga. ¿Qué pasó?',
          options: [
            { id: 'a', text: 'Una ruptura confirmada, porque el precio llegó a tocar los $89,500' },
            { id: 'b', text: 'Una fakeout: barrió los stops bajo $90K y el cierre volvió a la zona' },
            { id: 'c', text: 'Un cambio de tendencia, porque la mecha larga indica fuerza vendedora' },
            { id: 'd', text: 'Nada relevante, porque en una vela solo cuenta el cuerpo, no la mecha' }
          ],
          correctAnswer: 'b',
          explanation: 'Ruptura breve, mecha larga y cierre de vuelta dentro de la zona: son las señales de una fakeout. Pudo ser una caza de stops o simple ruido. Lo que cuenta es el cierre. Leer la mecha como fuerza vendedora es el error común: una mecha inferior larga muestra que los compradores rechazaron esos precios.'
        },
        {
          id: 'q5',
          question: '¿Por qué números redondos como $50,000 o $100,000 suelen funcionar como soporte o resistencia, incluso sin toques previos?',
          options: [
            { id: 'a', text: 'Porque mucha gente pone órdenes en cifras redondas y ahí se concentran' },
            { id: 'b', text: 'Porque los exchanges fijan esos niveles para liquidar a los apalancados' },
            { id: 'c', text: 'Porque a los algoritmos se les prohíbe operar en números no redondos' },
            { id: 'd', text: 'Por pura casualidad estadística, que la mente lee como un patrón real' }
          ],
          correctAnswer: 'a',
          explanation: 'Las personas piensan en cifras redondas: "vendo cuando llegue a 100K". Esa acumulación de órdenes crea zonas antes de que el precio las visite. No hay una regla de los exchanges ni de los algoritmos detrás; es comportamiento humano agregado.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Un soporte es un precio exacto: si el precio lo cruza por un dólar, el soporte quedó roto.',
          correctAnswer: false,
          explanation: 'Falso. Soportes y resistencias son zonas, no líneas. El precio puede entrar en la zona e incluso perforarla con una mecha sin romperla. Por eso se dibujan rectángulos y se espera el cierre antes de decidir.'
        },
        {
          id: 'q7',
          type: 'ordering',
          question: 'Ordena los pasos del framework para operar con soportes y resistencias.',
          items: [
            'Marcar las zonas importantes en el gráfico diario',
            'Esperar a que el precio llegue a una de esas zonas',
            'Buscar confirmación con una vela y con el volumen',
            'Entrar con el stop loss fuera de la zona',
            'Gestionar la salida según tu plan'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Primero el mapa, luego la paciencia, después la confirmación y solo entonces la entrada con el stop ya definido. La salida también se decide antes de entrar: así las emociones no la deciden por ti.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Velas Japonesas y Tendencias: en una zona de soporte aparece una vela de cuerpo pequeño con una mecha inferior muy larga. ¿Qué indica?',
          options: [
            { id: 'a', text: 'Los vendedores tomaron el control total y el precio va a seguir cayendo' },
            { id: 'b', text: 'El mercado está indeciso por completo, así que la vela no aporta información' },
            { id: 'c', text: 'Es la señal para vender ya, porque una mecha larga anticipa más caídas' },
            { id: 'd', text: 'Los compradores rechazaron precios más bajos: posible rebote por confirmar' }
          ],
          correctAnswer: 'd',
          explanation: 'Una mecha inferior larga muestra que el precio bajó y los compradores lo empujaron de vuelta. En una zona de soporte, es una posible señal de rebote, que se confirma con la vela siguiente y el volumen. (Lo viste en la lección Velas Japonesas y Tendencias.)'
        }
      ]
    }
  },
  15: {
    id: 15,
    title: 'Indicadores Clave (RSI, EMAs)',
    level: 'Intermedio',
    number: '3 de 12',
    duration: '19 min',
    type: 'Lectura + Práctica',
    description: 'Los indicadores técnicos son herramientas matemáticas que confirman (o niegan) lo que ves en el precio. Domina el RSI y las Medias Móviles Exponenciales para tomar decisiones con datos, no con emociones.',
    sections: [
      {
        type: 'intro',
        title: 'Las Matemáticas al Servicio del Trader',
        content: 'Hasta ahora aprendiste a leer velas y a identificar soportes y resistencias. Esas herramientas se basan en lo que **ves**. Los indicadores técnicos agregan una capa de **matemáticas** que te ayuda a confirmar lo que ves, o a detectar lo que tus ojos no perciben. Una analogía: las velas son como mirar por la ventana para ver si llueve. Los indicadores son el pronóstico del clima. Ambos son útiles, pero juntos te dan un panorama mucho más completo. **Regla fundamental**: Los indicadores NO predicen el futuro. Son espejos retrovisores mejorados, te muestran lo que el precio HIZO con mayor claridad para que tomes mejores decisiones sobre lo que PODRÍA hacer.',
        highlight: {
          title: 'La Regla de Oro',
          text: 'Nunca operes SOLO por indicadores. Úsalos para **confirmar** lo que ya ves en el precio y en las zonas de soporte/resistencia. Y recuerda lo que viste en Velas Japonesas sobre la evidencia: ningún indicador da ventaja por sí solo después de comisiones. Sirven para ordenar tu plan, no para adivinar.'
        }
      },
      {
        type: 'main',
        title: 'RSI: El Termómetro del Mercado',
        content: 'El **RSI (Relative Strength Index)** mide la velocidad y magnitud de los movimientos recientes del precio en una escala del 0 al 100. Es como un termómetro: te dice si el mercado está "con fiebre" (sobrecomprado) o "con hipotermia" (sobrevendido). La configuración estándar es RSI de 14 períodos.',
        features: [
          { icon: TrendingUp, title: 'RSI > 70: Sobrecompra', text: 'Cuando el RSI supera 70, el mercado ha subido mucho y rápido. **No significa que debas vender inmediatamente**, en tendencias alcistas fuertes, el RSI puede quedarse en sobrecompra semanas. Pero sí indica que el momentum alcista es extremo y que una pausa o corrección es posible.' },
          { icon: TrendingDown, title: 'RSI < 30: Sobreventa', text: 'Cuando el RSI cae debajo de 30, el mercado ha caído fuerte y rápido. Es zona de "posible suelo". Combinado con un soporte fuerte, mucha gente lo usa como zona para buscar entradas. Pero en tendencias bajistas, el RSI puede quedarse en sobreventa mucho tiempo, no compres solo porque está bajo.' },
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
          { icon: Landmark, title: 'EMA 200, La Frontera Bull/Bear', text: 'La media de 200 períodos en gráfico diario es **la referencia de largo plazo más seguida del mercado**. La versión más citada es la SMA 200 diaria (la media simple); la EMA 200 es su variante más sensible y ambas cuentan la misma historia. Precio por encima = territorio bull. Precio por debajo = territorio bear. Cuando Bitcoin cruza la media de 200 diaria, es noticia mundial.' }
        ]
      },
      {
        type: 'main',
        title: 'Cruces de Medias (Golden / Death Cross)',
        content: 'Cuando las medias móviles se cruzan entre sí, generan señales muy citadas en medios y redes. La forma canónica de estos cruces usa las SMA de 50 y 200 en gráfico diario; las versiones con EMAs son variantes más rápidas. Estos cruces no son instantáneos, se desarrollan durante días o semanas:',
        features: [
          { icon: TrendingUp, title: 'Golden Cross (Cruz Dorada)', text: 'Ocurre cuando la media rápida (50) cruza **por encima** de la media lenta (200) en diario. La definición canónica usa SMA 50/200. Es señal alcista de mediano plazo, pero retrasada: confirma tendencias ya en marcha. Varios Golden Cross de Bitcoin precedieron subidas importantes; otros llegaron cuando gran parte del movimiento ya había pasado.' },
          { icon: TrendingDown, title: 'Death Cross (Cruz de la Muerte)', text: 'Lo opuesto: la media rápida (50) cruza **por debajo** de la lenta (200). Suena aterrador, pero el historial real es mixto: por ser una señal retrasada, varios Death Cross de Bitcoin (marzo de 2020, agosto de 2024) se imprimieron cerca del suelo, justo antes de rebotes fuertes. Otros, como el de noviembre de 2025, sí precedieron caídas mayores. Úsalo como aviso para revisar tu riesgo y tus stops, no como orden automática de venta.' },
          { icon: AlertTriangle, title: 'Cuidado con las Señales Falsas', text: 'En mercados laterales (sin tendencia clara), las EMAs se cruzan constantemente generando señales falsas. No sigas cruces de EMAs ciegamente en un rango. Solo tienen sentido cuando el mercado tiene tendencia. Si las EMAs están enredadas como espagueti, el mercado está indeciso, espera.' }
        ]
      },
      {
        type: 'main',
        title: 'Divergencias: Cuando el Precio y el RSI No Coinciden',
        content: 'Una **divergencia** ocurre cuando el precio dice una cosa y el indicador dice otra. Es como si el precio y el RSI se contradijeran. Las divergencias son de las señales más respetadas del análisis técnico porque detectan debilidad ANTES de que el precio la muestre. Pero no son infalibles: en tendencias fuertes, una divergencia puede persistir durante semanas mientras el precio sigue avanzando. Trátala como una alerta que exige confirmación, no como un gatillo automático.',
        features: [
          { icon: AlertTriangle, title: 'Divergencia Bajista', text: 'El precio hace un nuevo máximo (Higher High), pero el RSI hace un máximo más bajo (Lower High). ¿Qué significa? El precio subió, pero con **menos fuerza** que la vez anterior. Los toros se están agotando aunque el precio aún suba. Es como un corredor que sigue avanzando pero cada vez más lento: puede estar por detenerse, o puede recuperar el aire.' },
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
            'Más fiables en timeframes altos (4 horas o más)',
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
          { icon: BarChart3, title: 'El Setup Mínimo', text: '**En tu gráfico pon solo esto**: (1) EMA 21, EMA 55 y EMA 200 en el gráfico de precios, (2) RSI 14 en panel separado debajo, (3) Volumen en barras. Nada más. Con esto tienes lo esencial sin llenarte de señales que se contradicen.' },
          { icon: CheckCircle, title: 'La Confluencia es la Clave', text: 'La señal más poderosa es cuando **múltiples factores apuntan a la misma dirección**: precio en soporte + RSI en sobreventa + rebote en EMA 200 + vela de reversión + volumen alto. Eso es **confluencia**, y es donde muchos traders concentran sus operaciones. Aun así puede fallar: por eso siempre hay stop y un tamaño de posición pequeño.' }
        ],
        highlight: {
          title: 'Práctica en TradingView',
          text: 'Abre ETH/USDT en 4 horas y agrega RSI 14 y las EMAs 21, 55 y 200. 1) Encuentra las 2 últimas veces que el RSI cruzó 30 o 70 y anota qué hizo el precio después. 2) Busca una divergencia entre precio y RSI en los últimos 3 meses. 3) Verifica si el precio respetó la EMA 200 como soporte o resistencia dinámica.'
        }
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Los Indicadores como Herramientas, No como Muletas',
        items: [
          'Los indicadores NO predicen el futuro. Son herramientas matemáticas que te ayudan a **confirmar** lo que ya ves en el precio y las zonas de soporte/resistencia.',
          'RSI mide momentum: >70 sobrecompra, <30 sobreventa, 50 es la línea de tendencia. Las divergencias entre precio y RSI son señales anticipadas de cambio de tendencia.',
          'Las tres EMAs esenciales: 21 (momentum corto), 55 (tendencia media), 200 (frontera bull/bear). Las instituciones siguen sobre todo la SMA 200 diaria, que cuenta la misma historia: precio por encima = territorio bull.',
          'Golden Cross y Death Cross (canónicamente SMA 50/200 en diario) son señales retrasadas: confirman tendencias ya en marcha y tienen un historial mixto en techos y suelos. Solo tienen valor en mercados con tendencia.',
          'Evita operar señales de tendencia en mercados laterales. Si las EMAs están enredadas y el RSI oscila sin dirección, espera a que se defina la tendencia.',
          'Busca **confluencia**: la señal más potente ocurre cuando precio + soporte/resistencia + RSI + EMAs + volumen + velas apuntan todos a la misma dirección.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Bitcoin marca un nuevo máximo de varias semanas en $82,000, pero el RSI 14 diario llega a 68, por debajo de los 82 que marcó en el máximo anterior de $79,000. ¿Qué está pasando?',
          options: [
            { id: 'a', text: 'Todo normal: el precio sigue subiendo y eso confirma la tendencia alcista' },
            { id: 'b', text: 'Señal de compra, porque el RSI todavía no llegó a la zona de sobrecompra' },
            { id: 'c', text: 'Divergencia bajista: el precio sube con menos momentum, señal de precaución' },
            { id: 'd', text: 'Divergencia bajista: señal de venta inmediata, porque el techo ya quedó formado' }
          ],
          correctAnswer: 'c',
          explanation: 'El precio hace un máximo más alto, pero el RSI hace uno más bajo: es una divergencia bajista. Los compradores empujan con menos fuerza. Es una alerta temprana de agotamiento, no una orden de venta: muchas divergencias se resuelven con el precio subiendo un poco más antes de corregir, o sin corregir.'
        },
        {
          id: 'q2',
          question: '¿Qué media móvil es la referencia más citada para decir si un mercado está en territorio alcista o bajista?',
          options: [
            { id: 'a', text: 'La EMA 9 en el gráfico de 15 minutos, la más rápida de todas' },
            { id: 'b', text: 'La EMA 21 en el gráfico de 4 horas, la que siguen los fondos' },
            { id: 'c', text: 'La media de 200 en el gráfico diario, sobre todo la SMA 200' },
            { id: 'd', text: 'La SMA 50 en el gráfico semanal, la que usan los bancos centrales' }
          ],
          correctAnswer: 'c',
          explanation: 'La media de 200 días es la frontera de largo plazo más citada: precio por encima suele leerse como territorio alcista, y por debajo como bajista. La EMA 200 es una variante más sensible que cuenta la misma historia. Es una convención útil, no una ley.'
        },
        {
          id: 'q3',
          question: 'SOL cruza al alza la EMA 200 en el gráfico diario con un volumen 3 veces mayor al promedio. ¿Qué tipo de señal es?',
          options: [
            { id: 'a', text: 'Un Death Cross: una señal bajista de mediano plazo que ya quedó confirmada' },
            { id: 'b', text: 'Una señal de venta, porque el volumen tan alto revela sobrecompra extrema' },
            { id: 'c', text: 'Una compra segura, porque los cruces de la EMA 200 con volumen no fallan' },
            { id: 'd', text: 'Una señal alcista: recupera territorio bull, con stop debajo de la media' }
          ],
          correctAnswer: 'd',
          explanation: 'Cruzar la media de 200 al alza con volumen fuerte es una señal alcista muy seguida: hubo participación real en el movimiento. Puede fallar como cualquier señal, por eso el stop va debajo de la media. Un Death Cross es otra cosa: el cruce de la media de 50 por debajo de la de 200.'
        },
        {
          id: 'q4',
          question: 'ETH tiene RSI en 25 y el precio toca un soporte en $2,800 que ya respetó varias veces. ¿Cómo lees la situación?',
          options: [
            { id: 'a', text: 'Ninguna confluencia: el RSI bajo indica que hay que vender cuanto antes' },
            { id: 'b', text: 'Confluencia alcista: sobreventa y soporte probado, zona de posible suelo' },
            { id: 'c', text: 'Solo cuenta el soporte, porque el RSI no aporta nada en esta situación' },
            { id: 'd', text: 'Una compra garantizada, porque dos señales distintas coinciden al mismo tiempo' }
          ],
          correctAnswer: 'b',
          explanation: 'Confluencia es que varias señales independientes apunten al mismo lado. Sobreventa más un soporte probado mejoran la lectura frente a una señal sola, pero no la vuelven segura. El stop debajo del soporte te protege si la idea falla.'
        },
        {
          id: 'q5',
          question: 'Llevas 3 semanas operando cruces de EMAs en Bitcoin, y cada vez que entras, el precio se da vuelta y pierdes. ¿Qué es lo más probable?',
          options: [
            { id: 'a', text: 'Las EMAs dejaron de funcionar en cripto desde que entraron los grandes fondos' },
            { id: 'b', text: 'Te faltan indicadores: con cinco o seis más filtrarías todo ese ruido extra' },
            { id: 'c', text: 'Necesitas un timeframe más bajo, como el de 1 minuto, para ganar precisión' },
            { id: 'd', text: 'El mercado está en rango: las EMAs se cruzan sin parar y dan señales falsas' }
          ],
          correctAnswer: 'd',
          explanation: 'Los indicadores de tendencia funcionan mal cuando no hay tendencia. En un rango, las EMAs se enredan y cada cruce es una señal falsa. Agregar indicadores es la reacción tentadora, pero casi todos miden lo mismo con otra fórmula. La solución es reconocer el rango y esperar.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Un RSI por encima de 70 significa que el precio va a caer pronto.',
          correctAnswer: false,
          explanation: 'Falso. Sobre 70 el RSI indica sobrecompra, es decir, mucho momentum alcista reciente. En tendencias fuertes el RSI puede pasar semanas sobre 70 mientras el precio sigue subiendo. Es una señal de contexto, no un aviso de caída.'
        },
        {
          id: 'q7',
          type: 'fill-blank',
          question: 'Completa la regla básica del RSI.',
          textBefore: 'En el RSI, una lectura por debajo de',
          textAfter: ' se considera zona de sobreventa.',
          correctAnswer: '30',
          acceptableAnswers: ['30', 'treinta', '30 puntos'],
          explanation: 'Por convención, el RSI bajo 30 indica sobreventa y sobre 70 sobrecompra, con 50 como línea media. Son referencias, no gatillos: en tendencias bajistas fuertes el RSI puede quedarse bajo 30 mucho tiempo.'
        },
        {
          id: 'q8',
          question: 'Ves un Golden Cross en el diario de Bitcoin: la SMA 50 cruza por encima de la SMA 200. ¿Qué te dice?',
          options: [
            { id: 'a', text: 'Anticipa con precisión el inicio de una tendencia alcista' },
            { id: 'b', text: 'Confirma con retraso una tendencia que ya estaba en marcha' },
            { id: 'c', text: 'Indica que el precio se va a duplicar en los próximos meses' },
            { id: 'd', text: 'Es una señal bajista, porque la media corta queda por encima' }
          ],
          correctAnswer: 'b',
          explanation: 'Las medias se calculan con precios pasados, así que sus cruces llegan tarde: confirman tendencias que ya empezaron. Su historial en techos y suelos es mixto. Creer que anticipan el giro es el error común; por eso se usan como confirmación, no como gatillo.'
        }
      ]
    }
  },
  16: {
    id: 16,
    title: 'Estructura de Mercado',
    level: 'Intermedio',
    number: '4 de 12',
    duration: '21 min',
    type: 'Lectura + Práctica',
    description: 'La habilidad más importante del análisis técnico: identificar objetivamente si el mercado está subiendo, bajando o lateral. Sin esto, cualquier otra herramienta pierde sentido.',
    sections: [
      {
        type: 'intro',
        title: 'El Mapa del Campo de Batalla',
        content: 'Imagina que estás en medio de una guerra y no tienes mapa. No sabes si tu ejército avanza o retrocede, si estás ganando o perdiendo. Así opera la mayoría de la gente en crypto: compran y venden sin saber si el mercado va a su favor o en su contra. La **estructura de mercado** es tu mapa. Es la herramienta que te dice objetivamente, sin opiniones, sin emociones, quién tiene el control: los toros o los osos. Todo lo que aprendiste hasta ahora (velas, S/R, indicadores) tiene mucho más sentido cuando sabes en qué tipo de mercado estás. Una vela Hammer en soporte dentro de un uptrend es una señal a favor de la corriente. La misma vela en un downtrend puede ser una trampa.',
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
          { icon: AlertTriangle, title: 'BOS en Uptrend (Señal de Debilidad)', text: 'SOL venía haciendo HH + HL: $155, $180, $170, $210 y $190. Si ahora el precio cae debajo de $190 (último HL), es BOS. La escalera dejó de subir. No significa que el bear market empezó, pero la tendencia alcista se debilitó.' },
          { icon: Shield, title: 'BOS en Downtrend (Señal de Esperanza)', text: 'BTC venía haciendo LH + LL: $55K, $48K, $52K, $45K y $50K. Si ahora el precio supera $50K (último LH), es BOS. La presión bajista se debilitó. Los toros mostraron la primera señal de vida.' },
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
          { icon: RefreshCw, title: 'CHOCH Alcista (De Bear a Bull)', text: 'El downtrend se rompe (BOS), y luego el precio confirma haciendo un Higher Low seguido de un Higher High. La escalera dejó de bajar y empezó a subir. Aun así, puede fallar: si decides operarlo, entra con tamaño pequeño y stop debajo del nuevo Higher Low.' },
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
            'Las estrategias de "seguir la tendencia" tienen más sentido',
            'Los breakouts de soporte/resistencia tienden a continuar',
            'Las señales de los indicadores de tendencia son más útiles',
            'Aun así, las tendencias terminan sin aviso'
          ]
        },
        rightSide: {
          title: 'Mercado en Rango (Lateral/Consolidación)',
          points: [
            'No hay HH ni LL claros, rebota entre soporte y resistencia',
            'Las EMAs están enredadas y sin dirección',
            'Se puede operar comprando soporte y vendiendo resistencia (trading de rango)',
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
          { icon: Target, title: 'Alineación = Mejor Contexto', text: 'El contexto más favorable es cuando semanal, diario y 4h están TODOS alcistas (o todos bajistas). Mejora tus probabilidades, pero no las garantiza. Cuando hay conflicto entre timeframes, la mejor acción es NO operar. Espera a que se alineen.' }
        ]
      },
      {
        type: 'main',
        title: 'Poniendo Todo Junto: Tu Framework de Estructura',
        content: 'Aquí tienes el proceso paso a paso que deberías seguir ANTES de cada operación. Toma unos 5 minutos y te ahorra muchas decisiones impulsivas:',
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
        content: 'Vamos a poner en práctica TODO lo que aprendiste en este módulo con un ejemplo completo. Imagina que estás analizando SOL/USDC y quieres decidir si comprar, vender, o no hacer nada. Este es el proceso paso a paso:',
        features: [
          { icon: BarChart3, title: '1. Lee el Gráfico (Estructura + Contexto)', text: 'Abres el gráfico semanal: SOL viene haciendo HH + HL desde hace 3 meses. Tendencia macro alcista confirmada. Bajas al diario: también alcista, pero el precio retrocedió al último soporte en $160 (zona de demanda que antes fue resistencia). Bajas a 4H: el RSI está en 32 (sobreventa) y el precio tocó la EMA 200 de 4 horas. Los tres timeframes dicen lo mismo: el contexto favorece una compra en este nivel.' },
          { icon: Activity, title: '2. Aplica tus Indicadores de Confirmación', text: 'RSI en 4H en sobreventa (32), señal de que la presión vendedora podría estar agotándose. El precio está en la EMA 200 de 4 horas, que a menudo actúa como soporte dinámico en tendencias alcistas. Volumen: la vela de retroceso tiene volumen decreciente (los vendedores están perdiendo fuerza). Buscas una vela de reversión: aparece un Hammer en 4H en la zona de $160. Las señales están alineadas, lo que no garantiza que funcione.' },
          { icon: Crosshair, title: '3. Define tu Entrada, Stop Loss y Take Profit', text: 'Entrada: $162 (ligeramente por encima del cierre del Hammer para confirmar fuerza compradora). Stop Loss: $153 (debajo del último Higher Low y de la mecha del Hammer, si el precio llega ahí, la estructura alcista se rompe y tu tesis se invalida). Take Profit 1: $185 (resistencia reciente, relación riesgo/recompensa de 1:2.5). Take Profit 2: $200 (siguiente zona de resistencia para la mitad restante). Riesgo por acción: $162 - $153 = $9 de riesgo por SOL.' },
          { icon: Target, title: '4. Calcula tu Tamaño de Posición', text: 'Primero, de dónde sale el dinero: tu **capital de trading**, como máximo el 5-10% de tu porción cripto y separado de tu base de DCA. Si tu porción cripto es $10,000, tu capital de trading es de $500 a $1,000. Regla: no arriesgas más del 1-2% de ese capital en una sola operación. Con $1,000, tu riesgo máximo es $10-20 por trade. Con $9 de riesgo por SOL y $15 de riesgo máximo: compras unos 1.6 SOL (unos $260 de posición). Si el stop salta, pierdes $15 y tu plan de largo plazo ni se entera. Esa es la diferencia entre un trader y un apostador: el apostador pone todo, el trader calcula su riesgo ANTES de entrar.' }
        ],
        highlight: {
          title: 'El Framework Completo',
          text: 'Estructura (macro), luego soporte o resistencia (nivel), indicadores (confirmación), vela de entrada (timing), stop en la estructura (riesgo) y posición por % de tu capital de trading (gestión). Sigue este proceso en cada operación y reducirás las decisiones emocionales que destruyen cuentas.'
        }
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'La Estructura lo Es Todo',
        items: [
          'La estructura de mercado te dice **quién tiene el control**: toros (HH + HL), osos (LH + LL), o nadie (rango lateral).',
          'Break of Structure (BOS) es la primera señal de que algo cambió. No es confirmación, es alerta, ajusta tu riesgo pero no entres en pánico.',
          'Change of Character (CHOCH) es la confirmación de un cambio de tendencia. Cuando la estructura se invierte completamente (de HH/HL a LH/LL o viceversa), el control cambió de manos.',
          'Analiza siempre de arriba hacia abajo: semanal, diario y luego 4h. El contexto más favorable es cuando todos los timeframes están alineados.',
          'En mercados laterales, la mayoría de las señales son falsas. Si no puedes identificar la estructura en 30 segundos, probablemente no haya tendencia, y lo mejor es esperar.',
          'Tu stop loss debe estar donde la estructura se invalida. Esto elimina la emoción de la ecuación y te protege objetivamente.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'SOL hace esta secuencia: mínimo $120, máximo $155, mínimo $135, máximo $175, mínimo $150. ¿Qué estructura de mercado es?',
          options: [
            { id: 'a', text: 'Bajista: el precio oscila demasiado entre niveles para confiar en él' },
            { id: 'b', text: 'Lateral: el precio se mueve dentro de un rango sin dirección clara' },
            { id: 'c', text: 'Alcista: cada mínimo y cada máximo superan al anterior (HH + HL)' },
            { id: 'd', text: 'No se puede saber: hace falta ver el RSI para definir la estructura' }
          ],
          correctAnswer: 'c',
          explanation: 'Mínimos en $120, $135 y $150 (Higher Lows) y máximos en $155 y $175 (Higher Highs): es la definición de tendencia alcista. La estructura se lee con el precio, sin indicadores. Que se cumpla hoy no garantiza que siga mañana.'
        },
        {
          id: 'q2',
          question: 'Bitcoin lleva 4 meses haciendo HH + HL, y de pronto cae por debajo del último Higher Low. ¿Qué ocurrió y qué haces?',
          options: [
            { id: 'a', text: 'Una corrección normal dentro de la tendencia, así que no cambio nada' },
            { id: 'b', text: 'El inicio confirmado del bear market, así que vendo todo de inmediato' },
            { id: 'c', text: 'Un BOS: ajusto stops, reduzco riesgo y observo si se forma un CHOCH' },
            { id: 'd', text: 'Un dip dentro de la tendencia, así que compro más sin mover el stop' }
          ],
          correctAnswer: 'c',
          explanation: 'Perder el último Higher Low es un Break of Structure: la primera grieta, no la confirmación. Reducir riesgo y observar es la respuesta proporcional. Vender todo trata una alerta como una certeza. (Ojo: buena parte del contenido SMC llama CHoCH a esta primera ruptura en contra; aquí usamos BOS como primera alerta.)'
        },
        {
          id: 'q3',
          question: 'En ETH, el semanal y el diario están en tendencia alcista. En 4 horas, el precio retrocede a un soporte con RSI en sobreventa. ¿Qué operación tiene más sentido?',
          options: [
            { id: 'a', text: 'Vender, porque el retroceso en 4h muestra que la tendencia mayor ya se rompió' },
            { id: 'b', text: 'Buscar compra en el soporte de 4h, con stop, a favor del semanal y el diario' },
            { id: 'c', text: 'Esperar a que cambie la tendencia semanal antes de tomar cualquier decisión' },
            { id: 'd', text: 'Bajar al gráfico de 1 minuto, donde el giro se ve con mucha más precisión' }
          ],
          correctAnswer: 'b',
          explanation: 'Análisis de arriba hacia abajo: los timeframes mayores te dan la dirección y el menor te da la entrada. Un retroceso a soporte dentro de una tendencia alcista es una entrada a favor del contexto. Sigue necesitando stop y tamaño pequeño: el contexto mejora las probabilidades, no las garantiza.'
        },
        {
          id: 'q4',
          question: 'Según la convención de esta lección, ¿cuál es la diferencia entre un Break of Structure (BOS) y un Change of Character (CHOCH)?',
          options: [
            { id: 'a', text: 'Son lo mismo: dos nombres distintos para describir un mismo evento' },
            { id: 'b', text: 'El BOS siempre es bajista y el CHOCH siempre es alcista, por definición' },
            { id: 'c', text: 'El BOS ocurre en timeframes bajos y el CHOCH solo en los timeframes altos' },
            { id: 'd', text: 'El BOS es la primera ruptura, una alerta; el CHOCH confirma la inversión' }
          ],
          correctAnswer: 'd',
          explanation: 'Aquí el BOS es la primera grieta y el CHOCH es la estructura invertida por completo (de HH/HL a LH/LL, o al revés). Si ves videos externos, la convención SMC más común usa BOS para rupturas a favor de la tendencia y CHoCH para la primera en contra. Lo importante es el concepto, no la etiqueta.'
        },
        {
          id: 'q5',
          question: 'Llevas 2 semanas operando un mercado que rebota entre $40K y $44K sin hacer nuevos máximos ni mínimos, y todas tus operaciones pierden. ¿Qué mercado es y qué haces?',
          options: [
            { id: 'a', text: 'Un bear market: dejo de operar por completo hasta el próximo ciclo' },
            { id: 'b', text: 'Una tendencia oculta, que se ve si agrego más indicadores al gráfico' },
            { id: 'c', text: 'Un mercado con ruido, que se lee mejor en el gráfico de 1 minuto' },
            { id: 'd', text: 'Un rango: opero los extremos con stops cortos o espero la ruptura' }
          ],
          correctAnswer: 'd',
          explanation: 'Sin máximos ni mínimos nuevos, el mercado está en rango, y las estrategias de tendencia pierden. Hay dos caminos: operar los extremos con stops ajustados, o esperar a que el precio rompa el rango con volumen. Un rango no es un bear market: es ausencia de dirección.'
        },
        {
          id: 'q6',
          type: 'ordering',
          question: 'Ordena un análisis de estructura de arriba hacia abajo.',
          items: [
            'Ver la tendencia en el gráfico semanal',
            'Confirmar la estructura en el gráfico diario',
            'Buscar la entrada en el gráfico de 4 horas',
            'Poner el stop donde la estructura se invalida'
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Del timeframe mayor al menor: el semanal da el contexto, el diario lo confirma y el de 4 horas afina la entrada. El stop se define al final, pero antes de entrar, en el punto donde tu lectura de la estructura deja de ser válida.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Un Break of Structure confirma por sí solo que comenzó una tendencia bajista.',
          correctAnswer: false,
          explanation: 'Falso. El BOS es una alerta: la estructura alcista se agrietó. La confirmación llega con el CHOCH, cuando el precio ya hace máximos y mínimos más bajos. Muchas tendencias alcistas tienen un BOS y luego continúan.'
        },
        {
          id: 'q8',
          question: 'En una tendencia alcista, compras después de un nuevo Higher Low en $150. ¿Dónde va tu stop según la estructura?',
          options: [
            { id: 'a', text: 'Un 1% debajo de tu entrada, sin mirar dónde quedó el último mínimo' },
            { id: 'b', text: 'Encima del último Higher High, para proteger la ganancia anterior' },
            { id: 'c', text: 'Sin stop, porque en una tendencia alcista los mínimos siempre suben' },
            { id: 'd', text: 'Debajo de ese Higher Low de $150, donde la estructura se invalida' }
          ],
          correctAnswer: 'd',
          explanation: 'Si el precio pierde ese Higher Low, la secuencia alcista se rompe y tu razón para comprar desaparece. Por eso el stop va ahí, un poco por debajo. Un porcentaje fijo ignora la estructura y te saca por ruido, o te deja demasiado expuesto.'
        }
      ]
    }
  },
  17: {
    id: 17,
    title: 'Tokenomics 101',
    level: 'Intermedio',
    number: '5 de 12',
    duration: '21 min',
    type: 'Concepto',
    description: 'No compres solo por el logo o el hype. La economía de un token, su supply, distribución, inflación y calendario de desbloqueos, determina si ganas o pierdes. Aprende a leer las matemáticas antes de invertir.',
    sections: [
      {
        type: 'intro',
        title: 'No Compres un Logo, Compra Matemáticas',
        content: 'La gran mayoría de los inversores en crypto compra tokens basándose en: el logo es bonito, alguien en Twitter lo recomendó, o "suena a que va a subir". Luego ven cómo su inversión cae -80% y no entienden por qué. La respuesta casi siempre está en los **tokenomics**, la economía del token. ¿Cuántos tokens existen? ¿Cuántos más se van a crear? ¿Quién los tiene? ¿Cuándo van a poder vender? Estas preguntas simples determinan si un token tiene presión de compra o presión de venta. Es pura oferta y demanda, pero con mecanismos que la mayoría no se molesta en entender. Los que sí los entienden, como VCs y fondos, juegan con ventaja frente a los que no.',
        highlight: {
          title: 'La Regla de Oro de los Tokenomics',
          text: 'Si no entiendes los tokenomics de un proyecto, puedes terminar siendo la liquidez de salida de alguien más: quien SÍ leyó el calendario de desbloqueos sabe cuándo viene la dilución, y te vende antes.'
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
          { icon: AlertTriangle, title: 'FDV = Precio × Supply Total', text: 'Aquí está la trampa real. Si ese token de $0.001 tiene 10 billones (millones de millones) de tokens de supply total, el FDV es $10,000 millones. ¿De verdad crees que un proyecto desconocido vale lo mismo que una empresa grande que cotiza en bolsa? El FDV te dice: "para que este token mantenga su precio, necesitaría una valoración de $10B cuando todo el supply se desbloquee". Casi nunca pasa.' },
          { icon: Eye, title: 'El Ratio Market Cap/FDV', text: 'Divide el market cap entre el FDV. Si el ratio es menor a 0.10 (solo el 10% del supply circula), hay un 90% de tokens esperando para diluirte. Ratio bajo = altísimo riesgo de dilución. Ratio alto (>0.70) = la mayoría del supply ya circula y hay poco riesgo de dilución adicional.' }
        ]
      },
      {
        type: 'main',
        title: 'Distribución: ¿Quién Tiene los Tokens?',
        content: 'No solo importa cuántos tokens hay, importa **QUIÉN los tiene**. Un proyecto donde el 50% de los tokens están en manos del equipo fundador es fundamentalmente diferente a uno donde el 80% fue distribuido a la comunidad. La distribución te dice quién tiene el poder y quién tiene la motivación de vender.',
        features: [
          { icon: Users, title: 'Team / Founders (Equipo)', text: 'Tokens asignados a los creadores del proyecto. Como regla práctica, 10-20%. Más de 25% es red flag, el equipo podría vender masivamente. Menos de 5% es sospechoso también, ¿por qué el equipo no quiere tokens de su propio proyecto?' },
          { icon: Landmark, title: 'Inversores / VCs (Capital de Riesgo)', text: 'Tokens vendidos a inversores privados antes del lanzamiento público, usualmente con descuento del 50-90%. Los VCs compraron a precios que tú NUNCA verás. Cuando sus tokens se desbloquean, tienen +500% o +1000% de ganancia y motivación enorme de vender. Más del 20% para VCs es señal de precaución.' },
          { icon: Globe, title: 'Comunidad / Airdrop / Público', text: 'Tokens distribuidos a usuarios reales del protocolo. A mayor porcentaje para la comunidad, más descentralizado y sano. Uniswap (60% para la comunidad) es un referente. Proyectos donde comunidad recibe <30% favorecen a insiders.' },
          { icon: PiggyBank, title: 'Tesorería / Ecosistema', text: 'Tokens reservados para financiar desarrollo futuro, grants, incentivos. Es un fondo de guerra controlado usualmente por gobernanza. 10-20% es razonable. Si es >30%, pregúntate quién realmente controla esa tesorería y cuáles son las reglas para gastarla.' }
        ]
      },
      {
        type: 'main',
        title: 'Vesting y Unlocks: El Calendario de la Presión de Venta',
        content: 'Los tokens del equipo, VCs e inversores no están disponibles inmediatamente. Tienen un calendario de **vesting** (consolidación) que define cuándo pueden venderlos. Este calendario es CRÍTICO porque cada unlock crea una ola potencial de presión de venta.',
        features: [
          { icon: Clock, title: 'Cliff Period (Período de Espera)', text: 'Tiempo que debe pasar antes de que se desbloquee el PRIMER token. Cliff de 1 año = el equipo no puede vender nada durante 12 meses. **Cliff corto (3-6 meses) = red flag.** Cliff largo (12-24 meses) = buena señal de compromiso a largo plazo.' },
          { icon: Activity, title: 'Vesting Schedule (Calendario)', text: 'Después del cliff, los tokens se desbloquean gradualmente. "4 años de vesting lineal" = cada mes se desbloquea 1/48 del total. Mejor que "todo se desbloquea de golpe" (cliff seguido de dump masivo).' },
          { icon: AlertTriangle, title: 'Token Unlocks Masivos', text: 'Usa **Tokenomist** (antes TokenUnlocks), en tokenomist.ai, para ver el calendario de CADA proyecto. Si en 2 semanas se desbloquea el 15% del supply total, prepárate para presión de venta fuerte. Los insiders que llevan meses esperando finalmente podrán vender. Con frecuencia eso empuja el precio a la baja.' },
          { icon: Target, title: 'Qué Pasa con el Precio Antes de un Unlock', text: 'Los análisis de miles de unlocks (por ejemplo, el de Keyrock en 2024) muestran que el precio suele DEBILITARSE en las semanas previas a un unlock grande: el mercado se adelanta a la dilución y vende antes. Los pumps pre-unlock existen (marketing que se intensifica, noticias convenientes), pero son la excepción, no la regla, y cuando ocurren suelen dar liquidez de salida a los insiders. La conclusión práctica es la misma: no compres con un unlock masivo encima.' }
        ]
      },
      {
        type: 'main',
        title: 'Inflación vs Deflación de Tokens',
        content: 'Así como los gobiernos imprimen dinero (inflación), los protocolos pueden crear nuevos tokens (emisión). Y así como Ethereum quema parte de cada fee desde 2021, algunos protocolos destruyen tokens (deflación). La batalla entre emisión y destrucción determina si tu inversión se diluye o se concentra.',
        features: [
          { icon: TrendingDown, title: 'Inflación (Presión Bajista)', text: 'Nuevos tokens entran al mercado constantemente: emisiones para staking, recompensas de minería, unlocks de tesorería. Si un protocolo emite 10% de nuevo supply al año, tu posición se diluye 10% anual. Para mantener el mismo precio, la demanda debe crecer al mismo ritmo, y eso es raro.' },
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
          { icon: CheckCircle, title: 'Bitcoin (BTC), El Estándar Dorado', text: 'Max supply: 21 millones. Emisión decreciente (halving cada 4 años). Más del 95% del máximo ya fue minado. Sin equipo con tokens bloqueados, sin preventa, sin VCs: todo se distribuyó por minería. Resultado: la criptomoneda más grande por capitalización.' },
          { icon: CheckCircle, title: 'Solana (SOL), Sólidos pero con Matices', text: 'Emisión inflacionaria que decrece ~15% por año. Las recompensas de staking incentivan a mantener (reduce el supply circulante efectivo). Parte de las fees se quema. El contrapunto: más del 40% del supply inicial fue a equipo, fundadores e inversores privados. Resultado: está entre las más grandes por capitalización, pese a una distribución inicial concentrada. Buenos tokenomics no tienen que ser perfectos.' },
          { icon: AlertTriangle, title: 'FTT (FTX Token), La Ilusión', text: 'El token de FTX parecía tener buenos tokenomics: quemas regulares, supply limitado. Pero Alameda Research (la empresa hermana) tenía miles de millones en FTT como "colateral". Cuando se descubrió, FTT cayó más de 90% en días. Lección: los tokenomics en papel no sirven si hay concentración oculta.' },
          { icon: AlertTriangle, title: 'LUNA/UST, La Espiral de la Muerte', text: 'LUNA tenía un mecanismo "elegante": quemar LUNA para crear UST (stablecoin). Funcionó mientras había demanda. Cuando UST perdió el peg, el supply de LUNA pasó de ~350 millones a ~6.5 billones de tokens en cuestión de días, inflación infinita instantánea. De $80 a $0.00001. Los tokenomics pueden matar un proyecto de $40B en una semana.' }
        ]
      },
      {
        type: 'main',
        title: 'Explícalo Tú: El Test de Feynman',
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
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Tokenomics',
        items: [
          'NUNCA inviertas sin verificar el supply: circulante, total y máximo. Si la ratio circulante/total es baja (<10%), hay una montaña de tokens esperando para diluirte.',
          'El precio unitario es irrelevante, $0.001 puede ser "caro" y $200 puede ser "barato". Lo que importa es el Market Cap y el FDV (Fully Diluted Valuation).',
          'Verifica la distribución: ¿quién tiene los tokens? Si equipo + VCs > 50%, eres minoría en un juego controlado por insiders.',
          'Revisa el calendario de unlocks en Tokenomist (tokenomist.ai, antes TokenUnlocks) ANTES de comprar. Un unlock masivo próximo suele generar presión de venta.',
          'Calcula la inflación neta: emisión anual − quema anual. Si es positiva, tu posición se diluye cada año. Compara con el crecimiento esperado de la demanda.',
          'Los tokenomics en papel no son suficientes, verifica la concentración real de wallets (en Arkham o Dune). Si 5 wallets tienen el 60% del supply, una sola venta puede destruir el precio.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un token cuesta $0.01, con 10 millones de unidades en circulación y 10,000 millones en total. ¿Cuál es su market cap y qué riesgo ves?',
          options: [
            { id: 'a', text: '$100M: ese es el valor real del proyecto, porque así lo dice su FDV' },
            { id: 'b', text: '$10M: es el promedio entre el market cap y el FDV de ese token' },
            { id: 'c', text: '$100K: el 99.9% del supply todavía no circula y puede diluirte' },
            { id: 'd', text: 'No se puede saber sin el volumen de trading de las últimas 24h' }
          ],
          correctAnswer: 'c',
          explanation: 'Market cap = supply circulante × precio = 10 millones × $0.01 = $100K. El FDV, con todo el supply, es $100M: mil veces más. Eso significa que casi todo el supply está por desbloquearse, y cada unlock diluye a quienes ya tienen el token. El FDV es tentador como "valor real", pero describe un futuro que todavía no circula.'
        },
        {
          id: 'q2',
          question: 'Proyecto A: el equipo tiene 15% con vesting de 4 años. Proyecto B: el equipo tiene 30% con un cliff de 6 meses. Tecnología similar. ¿Cuál está mejor alineado con los holders?',
          options: [
            { id: 'a', text: 'B: con 30% el equipo tiene más en juego, y eso lo alinea con los holders' },
            { id: 'b', text: 'Son iguales: lo que importa es la tecnología, no cómo se reparte el token' },
            { id: 'c', text: 'A: menos tokens para insiders y un vesting largo que los ata al proyecto' },
            { id: 'd', text: 'B: un cliff corto deja que el equipo cobre pronto y siga motivado a construir' }
          ],
          correctAnswer: 'c',
          explanation: 'Con vesting de 4 años, el equipo solo gana si el proyecto sigue valiendo dentro de 4 años. Con 30% y un cliff de 6 meses, puede empezar a vender en menos de un año. "Tener más en juego" no es tener muchos tokens, es tener que quedarse comprometido para cobrarlos.'
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: 'Calcula la inflación neta de un token.',
          textBefore: 'Un protocolo emite 5% de supply nuevo al año y quema 3% con las fees. Su inflación neta es de',
          textAfter: '% al año.',
          correctAnswer: '2',
          acceptableAnswers: ['2', '2%', 'dos', '+2', '2 %'],
          explanation: 'Inflación neta = emisión − quema = 5% − 3% = 2%. El supply crece, así que para que el precio se mantenga, la demanda tiene que crecer al menos 2% al año. Que el protocolo "queme tokens" no lo vuelve deflacionario si emite más de lo que quema.'
        },
        {
          id: 'q4',
          question: 'Tokenomist muestra que en 2 semanas se desbloquea el 15% del supply total, y el precio subió 40% este mes. ¿Cómo lo lees?',
          options: [
            { id: 'a', text: 'El mercado anticipa buenas noticias del proyecto, así que conviene comprar más' },
            { id: 'b', text: 'Nada: los unlocks no afectan el precio y la subida es una pura coincidencia' },
            { id: 'c', text: 'Alerta: una subida antes de un unlock grande suele dar salida a los insiders' },
            { id: 'd', text: 'El equipo recompra antes del unlock, así que no habrá ninguna presión de venta' }
          ],
          correctAnswer: 'c',
          explanation: 'Históricamente, el precio tiende a debilitarse antes de un unlock grande, porque el mercado se adelanta a la dilución. Si sube con fuerza justo antes, esa subida suele servir para que quienes reciben los tokens desbloqueados vendan a mejor precio. No es una regla fija, pero es una señal para ir con cuidado.'
        },
        {
          id: 'q5',
          question: 'Un protocolo reparte un airdrop al 20% de sus usuarios activos. ¿Qué suele pasar con el precio en las semanas siguientes?',
          options: [
            { id: 'a', text: 'Suele subir: más personas tienen el token y lo promueven en sus redes' },
            { id: 'b', text: 'Suele caer: muchos receptores venden pronto lo que recibieron gratis' },
            { id: 'c', text: 'Se queda estable: un airdrop no cambia la oferta ni la demanda' },
            { id: 'd', text: 'Sube si el proyecto es bueno, sin importar quién recibió el token' }
          ],
          correctAnswer: 'b',
          explanation: 'Muchos receptores convierten pronto el airdrop en dinero, y eso crea presión de venta. No es una ley: algunos tokens subieron tras su airdrop. Pero si te interesa el proyecto, esperar a que pase esa ola de ventas suele ser mejor que comprar el primer día.'
        },
        {
          id: 'q6',
          type: 'multiple-select',
          question: '¿Cuáles de estos datos de un proyecto son señales de alerta en sus tokenomics? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Equipo y VCs tienen más del 50% del supply' },
            { id: 'b', text: 'Solo el 5% del supply total está en circulación' },
            { id: 'c', text: 'Cinco wallets concentran el 60% del supply' },
            { id: 'd', text: 'El equipo tiene vesting de 4 años' },
            { id: 'e', text: 'La quema de fees supera a la emisión anual' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'Mucho supply en manos de insiders, poca circulación (mucha dilución por venir) y alta concentración en pocas wallets son las tres señales clásicas. Un vesting largo y una quema mayor que la emisión van en la dirección contraria: alinean al equipo y reducen el supply.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Un token que cuesta $0.001 por unidad está más barato que uno que cuesta $200 por unidad.',
          correctAnswer: false,
          explanation: 'Falso. El precio por unidad no dice nada sin el supply. Lo que compara proyectos es el market cap (precio × supply circulante) y el FDV (precio × supply total). Un token de $0.001 con billones de unidades puede valer mucho más que uno de $200.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Soportes y Resistencias: el precio rompe un soporte con volumen alto y luego vuelve a tocarlo desde abajo. ¿En qué suele convertirse ese nivel?',
          options: [
            { id: 'a', text: 'En un soporte más fuerte, porque ya resistió una ruptura antes' },
            { id: 'b', text: 'En una señal de compra, porque el precio vuelve a un nivel conocido' },
            { id: 'c', text: 'En un nivel sin valor: una vez roto, el mercado deja de mirarlo' },
            { id: 'd', text: 'En una posible resistencia: el soporte roto puede cambiar de rol' }
          ],
          correctAnswer: 'd',
          explanation: 'Un soporte roto suele convertirse en resistencia: quienes compraron ahí y quedaron perdiendo venden al recuperar su precio. Es un patrón muy usado, aunque no siempre se cumple. (Lo viste en la lección Soportes y Resistencias.)'
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
            question: 'Token A cuesta $200, con 1 millón de unidades en circulación y 1 millón en total. Token B cuesta $0.001, con 100,000 millones en circulación y 1 millón de millones en total. Un amigo dice: "B está baratísimo". ¿Qué le respondes?',
            options: [
              'Tiene razón: a $0.001 por unidad, B es muchísimo más barato que A',
              'B tiene market cap de $100M y FDV de $1,000M: diluido vale 5 veces A',
              'Son equivalentes: el precio por unidad no dice nada sobre su valor real',
              'B es mejor, porque con el mismo dinero compras muchas más unidades'
            ],
            correctAnswer: 1,
            explanation: 'A: $200 × 1 millón = $200M, todo en circulación. B: $0.001 × 100,000 millones = $100M de market cap, y $0.001 × 1 millón de millones = $1,000M de FDV. Solo circula el 10% de B, y totalmente diluido vale 5 veces más que A. Decir "son equivalentes" acierta en que el precio unitario no importa, pero ignora la diferencia de valor y de dilución.',
            hint: 'Calcula el market cap y el FDV de cada uno.'
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
    duration: '21 min',
    type: 'Análisis + Estrategia',
    description: 'Todo en crypto se mueve al ritmo de Bitcoin. Cada ~4 años su emisión se reduce a la mitad, y hasta ahora cada recorte coincidió con un bull market. Entiende el patrón, sus límites, y cómo evitar que el ciclo maneje tus emociones.',
    sections: [
      {
        type: 'intro',
        title: 'El Director de Orquesta',
        content: 'Hay un patrón histórico en crypto que se ha repetido desde 2012: cada ~4 años, Bitcoin reduce su emisión a la mitad (halving), y 12-18 meses después ha llegado un bull market explosivo. La explicación clásica es la oferta y la demanda, aunque cada ciclo también coincidió con ciclos de liquidez global, y cuatro casos son un patrón, no una ley. Bitcoin dirige TODO el mercado crypto. El guion clásico dice que cuando BTC sube, el capital fluye en cascada: **de BTC a ETH, luego a large caps, mid caps, small caps y memecoins** (aunque el ciclo 2024-25 rompió parte de ese guion). Cuando BTC cae, todo cae con él (las altcoins caen más fuerte). Entender en qué fase del ciclo podríamos estar te ayuda a no comprar en plena euforia ni vender en pleno pánico. Los que compran en la euforia y venden en el pánico suelen perder mucho; los que mantienen un plan aburrido suelen llegar más lejos.',
        highlight: {
          title: 'El Patrón Que Se Repite',
          text: 'Desde 2012, cada halving ha sido seguido por un bull market 12-18 meses después: halving en 2012 y bull en 2013, 2016 y 2017, 2020 y 2021, 2024 y 2025. Cuatro de cuatro hasta ahora. Pero cuatro casos no hacen una ley: trátalo como brújula histórica, no como garantía.'
        }
      },
      {
        type: 'main',
        title: '¿Qué es el Halving y Por Qué Importa?',
        content: 'Cada ~210,000 bloques (aproximadamente 4 años), la cantidad de Bitcoin nuevo que se crea por bloque se reduce exactamente a la **mitad**. Esto está programado en el código de Bitcoin. Cambiarlo exigiría que casi toda la red aceptara nuevas reglas, algo que ningún gobierno, empresa ni persona puede imponer por su cuenta.',
        features: [
          { icon: Percent, title: 'La Matemática del Halving', text: '2009: se creaban **50 BTC** por bloque (cada 10 minutos). 2012 (1er halving): **25 BTC**. 2016: **12.5 BTC**. 2020: **6.25 BTC**. 2024: **3.125 BTC**. Cada halving la emisión nueva se corta a la mitad. Históricamente eso ha coincidido con presión alcista **si** la demanda se mantiene o crece; no es una ecuación garantizada (liquidez global, ciclos macro y posición en el ciclo también pesan).' },
          { icon: Lock, title: 'El Shock de Oferta', text: 'Imagina que todos los días se producen 900 BTC nuevos (pre-halving 2024). Los mineros venden la mayoría para pagar electricidad. De repente, la producción baja a 450 BTC diarios. Los compradores que antes absorbían 900 ahora compiten por solo 450. Misma demanda, mitad de oferta nueva: presión alcista. Eso sí, hoy la emisión nueva es menos del 1% del supply al año, así que el efecto directo es cada vez más pequeño; los ciclos también han coincidido con los ciclos de liquidez global.' },
          { icon: Clock, title: '¿Cuándo es el Próximo?', text: 'El último halving fue en **abril 2024**. El próximo será aproximadamente en **2028**. Para 2140, se habrá minado el último Bitcoin. Después de eso, emisión nueva = 0; el supply circulante solo puede estancarse o bajar por monedas perdidas (no es "deflación de precios" automática).' }
        ]
      },
      {
        type: 'main',
        title: 'Las 4 Fases del Ciclo de Mercado',
        content: 'El mercado crypto se ha movido históricamente en un ciclo de 4 fases alrededor de cada halving. Reconocer en qué fase podríamos estar te ayuda a no operar por emoción. Ojo: las fases solo se ven con claridad en retrospectiva; en tiempo real casi nadie acierta.',
        features: [
          { icon: TrendingDown, title: '1. Bear Market (Invierno Crypto)', text: 'Duración: 12-18 meses. El precio cae **-70% a -85%** desde el máximo. Los medios declaran "crypto muerto". Los novatos que compraron en la euforia venden en pánico con pérdidas masivas. Twitter crypto se vacía. Los exchanges despiden empleados. **Históricamente, comprar con DCA en esta fase dio los mejores resultados a largo plazo**, pero solo para quien aguantó: en tiempo real nadie sabe cuánto más puede caer ni cuánto durará.' },
          { icon: Activity, title: '2. Acumulación (Primavera Silenciosa)', text: 'Duración: 6-12 meses. El precio se estabiliza y se mueve lateral. El volumen es bajo. Nadie habla de crypto. Los que quedaron siguen comprando en silencio. El halving generalmente ocurre en esta fase. **Comprar aquí con DCA históricamente rindió bien**, aunque solo lo sabrás después.' },
          { icon: Zap, title: '3. Bull Market (Verano Explosivo)', text: 'Duración: 12-18 meses post-halving. El precio rompe el ATH anterior. Los medios empiezan a hablar de crypto otra vez. Los primeros novatos entran. Cada ciclo el múltiplo de Bitcoin **desde el precio del día del halving** se ha reducido: aproximadamente **~95×, ~30×, ~8× y ~2×** en los cuatro ciclos (del halving al máximo). Desde el mínimo del bear anterior los números son otros (por ejemplo el ciclo 3: de ~$3,200 a $69k, unas 21 veces; el ciclo 4: de ~$15,500 a $126k, unas 8 veces). No mezcles las dos bases. Las altcoins han explotado más fuerte en ciclos pasados, aunque en 2024-25 la mayoría nunca se acercó a sus máximos de 2021. La euforia crece, pero el patrón no es una ley.' },
          { icon: AlertTriangle, title: '4. Distribución (Otoño de la Euforia)', text: 'Duración: 2-6 meses. El pico del ciclo. Tu tía te pregunta cómo comprar Dogecoin. Los taxistas hablan de crypto. "Esta vez es diferente" se repite en todos lados. Muchos de los que compraron en el bear venden a quienes llegan con FOMO. **Cuando la euforia es máxima, el techo suele estar cerca.**' }
        ]
      },
      {
        type: 'main',
        title: 'La Historia: 4 Halvings, 4 Bull Runs',
        asOf: 'noviembre de 2026',
        content: 'No te pedimos que creas en predicciones. Te pedimos que mires los datos. Cuatro ciclos, cuatro resultados similares:',
        features: [
          { icon: BarChart3, title: 'Ciclo 1: Halving Nov 2012', text: 'BTC pasó de ~$12 en el halving a **~$1,150** a fines de noviembre de 2013 (unas 95 veces en 12 meses). Luego cayó -85% hasta $170 en enero 2015. Primer ciclo completo: de $12 a más de mil dólares, y una caída de 85% para los que no vendieron.' },
          { icon: BarChart3, title: 'Ciclo 2: Halving Jul 2016', text: 'BTC pasó de ~$650 en el halving a **$19,700** en diciembre 2017 (30× en 17 meses). Luego cayó -84% hasta $3,200 en diciembre 2018. La era de las ICOs, la locura de las altcoins, y el crash que "mató" crypto (de nuevo).' },
          { icon: BarChart3, title: 'Ciclo 3: Halving May 2020', text: 'BTC pasó de ~$8,700 en el halving a **$69,000** en noviembre 2021 (8× en 18 meses). DeFi Summer, NFT mania, SOL pasó de $1 a $260. Luego el bear de 2022: Luna crash, FTX crash, BTC cayó -77% hasta $15,500.' },
          { icon: BarChart3, title: 'Ciclo 4: Halving Abr 2024', text: 'BTC en el halving: ~$64,000. Para finales de 2024 ya superó los $100K. ETFs de Bitcoin aprobados y fuerte entrada institucional. Hasta ahora, el máximo de este ciclo fue en octubre de 2025: cerca de $126,000, unos 18 meses después del halving, dentro de la ventana histórica. Después vino la corrección: a fines de junio de 2026 BTC llegó a cerrar cerca de $58,500 (unos -53%), y en noviembre de 2026 opera cerca de $75,000, unos 40% por debajo del máximo. Solo el tiempo confirmará si ese fue el techo definitivo del ciclo.' }
        ]
      },
      {
        type: 'main',
        title: 'Bitcoin Dominance y la Altseason',
        content: 'Uno de los indicadores más seguidos del ciclo es la **Bitcoin Dominance**, el porcentaje del mercado total de crypto que corresponde a Bitcoin. Cuando BTC Dominance sube, Bitcoin se lleva el capital. Cuando baja, las altcoins tienden a brillar. Este es el guion clásico de la rotación, pero una advertencia importante: el ciclo 2024-25 lo rompió en gran parte (la dominancia se mantuvo por encima de 55-60% y la altseason amplia nunca llegó). Úsalo como mapa histórico, no como guion garantizado. Y si decides rotar, hazlo solo con tu capital de trading: tu base de DCA no se toca.',
        features: [
          { icon: BarChart3, title: 'Fase 1: BTC Dominance Sube (60%+)', text: 'Al inicio del bull market, el capital entra primero a Bitcoin (el más seguro). BTC Dominance sube a 60-65%. En esta fase, las altcoins rinden menos que BTC. **Guion clásico: mantener la mayoría en BTC.**' },
          { icon: Zap, title: 'Fase 2: BTC Dominance Empieza a Caer (55-60%)', text: 'Bitcoin consolidó sus ganancias. El capital empieza a fluir a ETH y large caps (SOL, AVAX). BTC Dominance cae lentamente. **Guion clásico: rotar gradualmente a altcoins de alta capitalización.**' },
          { icon: Activity, title: 'Fase 3: Altseason (BTC Dom <50%)', text: 'Bitcoin se estanca, el capital fluye masivamente a altcoins. Algunas mid caps y small caps han hecho 10-50× (y muchas otras desaparecieron). Los memecoins explotan. BTC Dominance cae por debajo del 50%. **Esta fase dura poco, semanas, no meses.** Es donde más gente compra tarde y pierde.' },
          { icon: AlertTriangle, title: 'Fase 4: Capital Vuelve a BTC (Señal de Fin)', text: 'Las altcoins empiezan a caer mientras BTC se mantiene. BTC Dominance vuelve a subir. El capital "vuela a la seguridad". **Guion clásico: si estás en altcoins y BTC Dominance sube fuerte, rotar de vuelta a BTC o stablecoins.**' }
        ]
      },
      {
        type: 'comparison',
        title: 'Señales de Techo vs Señales de Suelo',
        leftSide: {
          title: 'Señales de Techo (Históricamente)',
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
          title: 'Señales de Suelo (Históricamente)',
          points: [
            'Los medios declaran "crypto ha muerto"',
            'Twitter crypto está desierto o depresivo',
            'Los exchanges despiden personal en masa',
            'Los mineros apagan máquinas por falta de rentabilidad',
            'Los volúmenes de trading están en mínimos de años',
            'Solo los convencidos de largo plazo siguen comprando',
            'Nadie quiere hablar de crypto en reuniones sociales'
          ]
        }
      },
      {
        type: 'main',
        title: 'Cómo Posicionarte en Cada Fase (Opcional)',
        content: 'Esta sección es **opcional** y no reemplaza tu plan base. Tu DCA en BTC sigue igual en todas las fases: es lo que te protege de equivocarte sobre en qué fase estamos (y casi todos se equivocan en tiempo real). Lo que sigue es una guía para tu **capital de trading**, como máximo el 5-10% de tu porción cripto:',
        features: [
          { icon: PiggyBank, title: 'Bear Market: ACUMULA', text: 'DCA (Dollar Cost Average) en BTC y, por ejemplo, alguna altcoin mayor como SOL (ojo: ninguna altcoin individual tiene garantizada la supervivencia de un ciclo al siguiente). No intentes encontrar el mínimo exacto, compra gradualmente cada semana o mes. Construye posiciones en proyectos con fundamentales fuertes que tengan buenas probabilidades de sobrevivir al invierno. Mantén parte de tu capital de trading en stablecoins para aprovechar oportunidades.' },
          { icon: Clock, title: 'Acumulación: POSICIÓNATE', text: 'Aumenta tamaño de posiciones. Los precios están bajos y estables; históricamente ha sido una de las mejores relaciones riesgo/recompensa del ciclo. Investiga proyectos para el próximo bull y, si quieres, construye posiciones pequeñas en altcoins selectas.' },
          { icon: Zap, title: 'Bull Market: CABALGA Y TOMA GANANCIAS', text: 'Deja correr tus posiciones pero EMPIEZA a tomar ganancias parciales en cada subida. Usa scaling out: vende una parte (por ejemplo 20-30% de la posición) en cada nuevo máximo. Si rotas a altcoins cuando BTC Dom empiece a caer, hazlo con tamaño pequeño. Cada venta puede generar impuestos: revisa la lección Tu Plan de Inversión Personal.' },
          { icon: Shield, title: 'Distribución: PROTEGE Y SAL', text: 'Cuando veas señales de euforia extrema, toma ganancias agresivamente. Rota a stablecoins buena parte de tu capital de trading (por ejemplo 50-70%). No intentes encontrar el techo exacto, es mejor salir un mes antes que un día después. En bears pasados, muchas altcoins perdieron 80-95% desde su máximo.' }
        ]
      },
      {
        type: 'main',
        title: '¿Se Romperá el Ciclo Algún Día?',
        content: 'La pregunta del millón. Cada ciclo, alguien dice "esta vez será diferente". Hay argumentos válidos para ambos lados:',
        features: [
          { icon: CheckCircle, title: 'A Favor de que el Ciclo Continúa', text: 'El halving es matemático e inmutable, siempre cortará la oferta. La naturaleza humana (euforia y pánico) no cambia. Los ciclos de deuda y liquidez global también son cíclicos. Mientras exista el halving y la naturaleza humana, habrá ciclos.' },
          { icon: AlertTriangle, title: 'A Favor de que Podría Cambiar', text: 'La adopción institucional (ETFs) podría suavizar la volatilidad. Los halvings pesan cada vez menos: el recorte siempre es del 50%, pero sobre una emisión que ya es menos del 1% del supply al año. El ciclo 2024-25 ya mostró señales de cambio: dominancia de BTC persistentemente alta, altseason amplia ausente y múltiplos cada vez menores. Los ciclos podrían volverse menos extremos, pero probablemente no desaparecerán.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Tu Brújula de Ciclos',
        items: [
          'El halving reduce la emisión de Bitcoin a la mitad cada ~4 años. Es un shock de oferta programado que históricamente ha coincidido con bull markets 12-18 meses después, aunque cuatro casos son un patrón, no una ley.',
          'Las 4 fases del ciclo se han repetido: bear market, acumulación, bull market y distribución. Comprar con DCA en el miedo y tomar ganancias en la euforia ha funcionado históricamente, aunque las fases solo se ven claras después.',
          'Bitcoin Dominance es la brújula clásica de la rotación: alta (>60%) = mantén BTC; cayendo = rota gradualmente; bajo 50% = altseason. Pero el ciclo 2024-25 rompió ese guion (la dominancia se mantuvo alta y la altseason amplia no llegó): es una heurística histórica, no una garantía.',
          'Las señales de techo son sociales: cuando gente sin conocimiento financiero quiere comprar crypto, los informados suelen estar vendiendo. Cuando nadie quiere crypto, suelen estar comprando.',
          'Correcciones del 30-40% han sido comunes en bull markets. No confundas una corrección saludable con un cambio de tendencia. El ciclo 2017 tuvo 6 correcciones de +30%.',
          'El principio es simple pero difícil emocionalmente: compra en el aburrimiento/miedo, vende en la euforia/excitación. Haz lo opuesto a lo que sientes.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Imagina que es diciembre de 2025. El halving fue en abril de 2024 y Bitcoin ya superó su máximo anterior. Según el patrón histórico, ¿en qué fase del ciclo estarías?',
          options: [
            { id: 'a', text: 'Acumulación: aún es muy temprano en el ciclo para pensar en un techo' },
            { id: 'b', text: 'Bear market profundo, porque el halving pasó hace más de un año' },
            { id: 'c', text: 'Inicio del bull market, porque el precio acaba de superar su máximo' },
            { id: 'd', text: 'Final del bull o inicio de la corrección, ~20 meses tras el halving' }
          ],
          correctAnswer: 'd',
          explanation: 'Históricamente, los picos llegaron 12-18 meses después del halving: abril de 2024 + 18 meses = octubre de 2025, cuando este ciclo marcó su máximo cerca de $126,000. Para diciembre ya estarías en el final del bull o en la corrección, que es lo que siguió. Recuerda que el patrón tiene solo cuatro ejemplos.'
        },
        {
          id: 'q2',
          question: 'La dominancia de Bitcoin está en 62%. Un amigo te dice: "las altcoins van a explotar, vende todo tu BTC por memecoins". ¿Qué le respondes?',
          options: [
            { id: 'a', text: 'Tiene razón: las altcoins siempre rinden más que BTC en esta fase del ciclo' },
            { id: 'b', text: 'Las altcoins nunca superan a Bitcoin en ninguna fase del ciclo' },
            { id: 'c', text: 'La dominancia no tiene relación con lo que hacen las altcoins' },
            { id: 'd', text: 'Con 62% el capital aún va a Bitcoin; las altseasons llegaron bajo ~55%' }
          ],
          correctAnswer: 'd',
          explanation: 'Dominancia alta significa que el capital sigue prefiriendo Bitcoin. En ciclos anteriores, la altseason empezó con la dominancia bajo ~55%. Es una heurística, no una ley: en 2024-25 la dominancia se mantuvo alta y la altseason amplia no llegó. Rotar todo a memecoins por una frase de un amigo es justo lo que la lección te enseña a evitar.'
        },
        {
          id: 'q3',
          question: 'Tu tía, que nunca habló de inversiones, te pregunta cómo comprar Dogecoin porque lo vio en TikTok. ¿Qué señal del ciclo es?',
          options: [
            { id: 'a', text: 'Posible euforia: cuando entra gente sin experiencia, los informados venden' },
            { id: 'b', text: 'Señal alcista: el retail apenas está entrando y la subida va a acelerarse más' },
            { id: 'c', text: 'Señal de suelo, porque la gente nueva suele comprar en el mejor momento' },
            { id: 'd', text: 'Nada: lo que hace la gente fuera del mercado no influye en el precio' }
          ],
          correctAnswer: 'a',
          explanation: 'Cuando personas sin experiencia quieren comprar por algo que vieron en redes, suele ser señal de euforia, y quienes compraron antes aprovechan para venderles. No marca el día exacto del techo, pero sí es momento de revisar tu plan de salida.'
        },
        {
          id: 'q4',
          question: 'En un bull market con estructura alcista en el semanal, Bitcoin cae 35% en una semana. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Vendo todo de inmediato, porque una caída así confirma que ya empezó el bear' },
            { id: 'b', text: 'Pido prestado para comprar más, porque los bull markets siempre terminan rebotando' },
            { id: 'c', text: 'Paso todo a memecoins, porque las altcoins rebotan más fuerte que BTC' },
            { id: 'd', text: 'Reviso mi plan: puede ser una corrección normal; solo uso liquidez de reserva' }
          ],
          correctAnswer: 'd',
          explanation: 'Correcciones de 30-40% han sido comunes en bull markets: el de 2017 tuvo seis. Si la estructura semanal sigue alcista, puede ser una oportunidad, pero a veces sí es el inicio del bear. Por eso, si compras, que sea con liquidez de reserva, sin deuda ni dinero que necesites.'
        },
        {
          id: 'q5',
          question: 'Compraste SOL a $20 en el bear market. Ahora está a $200 (10×) y Bitcoin marca un máximo histórico. ¿Qué opción es la más prudente?',
          options: [
            { id: 'a', text: 'Mantener todo sin vender, porque SOL va a llegar a $1,000 en este ciclo' },
            { id: 'b', text: 'Comprar más, porque si está subiendo con fuerza va a seguir subiendo' },
            { id: 'c', text: 'Recuperar la inversión y dejar el resto sin plan, porque ya es dinero gratis' },
            { id: 'd', text: 'Tomar ganancias parciales por niveles y fijar desde ya la salida del resto' }
          ],
          correctAnswer: 'd',
          explanation: 'Tomar ganancias por niveles convierte parte de la subida en dinero real sin apostar todo a acertar el techo. La opción tentadora es recuperar la inversión y dejar el resto sin plan. Pero lo que queda no es dinero gratis: es tu dinero, vale lo que vale hoy y puede caer 80% en un bear. Necesita su propio plan de salida.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Como los cuatro halvings anteriores vinieron seguidos de un bull market, el próximo halving traerá otro con seguridad.',
          correctAnswer: false,
          explanation: 'Falso. Cuatro casos son un patrón, no una ley. El mercado cambia: ETFs, instituciones y condiciones macro pesan cada vez más, y la emisión que recorta cada halving es cada vez más pequeña frente al supply total. Úsalo como contexto, no como calendario.'
        },
        {
          id: 'q7',
          type: 'ordering',
          question: 'Ordena las fases del ciclo de mercado, empezando por el bear market.',
          items: [
            'Bear market',
            'Acumulación',
            'Bull market',
            'Distribución'
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Tras el bear viene la acumulación (precios bajos y poco interés), luego el bull market, y en la cima la distribución, cuando quienes compraron temprano venden a los que llegan tarde. Las fases solo se ven con claridad después.'
        },
        {
          id: 'q8',
          question: '¿Qué cambia exactamente en un halving de Bitcoin?',
          options: [
            { id: 'a', text: 'La cantidad total de bitcoins que existirán baja a la mitad' },
            { id: 'b', text: 'El precio de Bitcoin se ajusta a la mitad durante unas semanas' },
            { id: 'c', text: 'La recompensa por bloque de los mineros se reduce a la mitad' },
            { id: 'd', text: 'Las comisiones de las transacciones bajan a la mitad para todos' }
          ],
          correctAnswer: 'c',
          explanation: 'Cada ~210,000 bloques (unos 4 años), la recompensa que reciben los mineros por bloque se corta a la mitad. El límite de 21 millones no cambia: lo que baja es la velocidad a la que se emiten los bitcoins nuevos.'
        }
      ]
    }
  },
  19: {
    id: 19,
    title: 'Investigación On-Chain y DYOR',
    level: 'Intermedio',
    number: '7 de 12',
    duration: '21 min',
    type: 'Casos Prácticos + Herramientas',
    description: 'DYOR (Do Your Own Research) no es un meme, es una habilidad. Aprende a leer la blockchain, usar las mismas herramientas que usan los fondos, y filtrar estafas con datos reales en vez de opiniones.',
    sections: [
      {
        type: 'intro',
        title: 'El Superpoder de las Blockchains Públicas',
        content: 'Imagina que pudieras ver exactamente qué están comprando y vendiendo los fondos de inversión de Wall Street. En los mercados tradicionales, eso es imposible, los grandes jugadores operan en la oscuridad con meses de retraso en reportes. Pero en crypto, **todo queda registrado en la blockchain en tiempo real**. Cada transacción, cada movimiento de capital, cada interacción con un protocolo es pública y verificable. Puedes ver mucho de lo que hacen las ballenas, cuánto dinero entra a un protocolo, cuántas wallets lo usan, y dónde está la liquidez. Eso no te dice el futuro, y no siempre sabes quién está detrás de cada wallet, pero te da algo que los que solo miran gráficos o siguen influencers no tienen: datos verificables.',
        highlight: {
          title: 'La Verdad en los Datos',
          text: 'El precio puede mentir (manipulación de mercado). Twitter puede mentir (marketing pagado). Los influencers pueden mentir (promueven lo que les pagan). La blockchain **no borra ni edita**: cada transacción queda registrada para siempre. Pero ojo: las métricas construidas sobre ella (TVL, usuarios activos, volumen) sí pueden inflarse. Por eso en esta lección aprenderás a filtrar.'
        }
      },
      {
        type: 'main',
        title: 'Arsenal de Herramientas On-Chain',
        content: 'Estas son las herramientas que usan los traders profesionales y fondos de inversión para tomar decisiones basadas en datos reales, no en opiniones de Twitter. Con que domines 2-3 de estas ya tienes una base sólida:',
        features: [
          { icon: Search, title: 'DefiLlama', text: 'Una de las herramientas más usadas para datos DeFi. Muestra TVL (Total Value Locked), fees, revenue, y métricas de cada protocolo en cada blockchain. Gratis y sin necesidad de cuenta. Si un protocolo genera fees crecientes, tiene demanda real de usuarios, no solo hype. Usa los filtros por cadena (Solana, Ethereum) y por categoría (DEXs, Lending, Staking) para encontrar los protocolos con mejores fundamentales.' },
          { icon: Activity, title: 'Dune Analytics', text: 'Plataforma de dashboards con datos on-chain que cualquiera puede crear y compartir. Busca dashboards de proyectos específicos creados por analistas de la comunidad. Por ejemplo: dashboards de Solana DeFi que muestran usuarios activos diarios, volumen real, distribución de holders. La data es tan granular que puedes ver tendencias que ningún gráfico de precios te muestra.' },
          { icon: Users, title: 'Arkham Intelligence', text: 'Rastrea wallets de VCs (venture capital), fondos de inversión, ballenas, y figuras conocidas del ecosistema. Puedes ver qué compran y venden wallets que manejan millones. Si varios fondos acumulan el mismo token, vale la pena investigar por qué; si mueven tokens a exchanges, puede ser señal de venta. Ojo: las etiquetas de Arkham son estimaciones y a veces fallan.' },
          { icon: Clock, title: 'Tokenomist (tokenomist.ai)', text: 'Calendario de desbloqueos de tokens (antes conocido como TokenUnlocks). Los proyectos crypto distribuyen sus tokens gradualmente, cuando un bloque grande se desbloquea (por ejemplo, 15% del supply total), esos tokens entran al mercado y crean presión de venta. Saber cuándo vienen los unlocks grandes te ayuda a no comprar justo antes de una ola de venta.' }
        ]
      },
      {
        type: 'main',
        title: 'Métricas On-Chain que Importan',
        content: 'Con tantos datos disponibles, es fácil ahogarse en números. El secreto de los buenos analistas on-chain no es mirar todo, es saber qué mirar. Estas son 4 métricas básicas para empezar a medir la salud de un protocolo:',
        features: [
          { icon: Landmark, title: 'TVL (Total Value Locked)', text: 'El dinero total depositado por usuarios en el protocolo. Es la métrica más básica pero más reveladora. TVL subiendo consistentemente = los usuarios confían lo suficiente para depositar capital. TVL cayendo = los usuarios están retirando (pierden confianza o encontraron mejor oportunidad). **Importante**: mide TVL en USD y en la moneda nativa. Si el TVL sube en USD pero baja en tokens depositados, solo está subiendo porque el precio del token subió, no porque haya más usuarios.' },
          { icon: Zap, title: 'Fees / Revenue', text: 'Los fees son dinero REAL que los usuarios pagan por usar el protocolo. Revenue es la parte de esos fees que va al protocolo o a los holders del token. Un protocolo con $10M en fees mensuales tiene demanda real probada, alguien está pagando para usarlo. Compara el ratio Fees/Market Cap entre competidores: un protocolo con menor market cap pero mayores fees está potencialmente infravalorado.' },
          { icon: Users, title: 'Active Wallets (Usuarios Activos)', text: 'El número de wallets únicas interactuando con el protocolo. Más usuarios activos = más actividad orgánica y adopción real. Pero cuidado: esta métrica puede inflarse con bots y Sybil attacks (una persona con muchas wallets). Busca tendencias de crecimiento sostenido, no picos repentinos que huelen a farming.' },
          { icon: TrendingDown, title: 'Exchange Flows (Flujo a Exchanges)', text: 'Cuando grandes cantidades de tokens salen de exchanges hacia wallets privadas (outflow), suele leerse como acumulación para largo plazo, señal bullish. Cuando grandes cantidades entran a exchanges (inflow), suele significar que se preparan para vender, señal bearish (con excepciones: market making, cambios de custodia). A veces se adelanta a correcciones grandes, pero también da muchas señales falsas: úsalo como pista, no como gatillo.' }
        ]
      },
      {
        type: 'main',
        title: 'El Framework DYOR: 5 Pasos para Evaluar Cualquier Proyecto',
        content: 'Cuando encuentres un proyecto nuevo que te llame la atención, sigue estos 5 pasos antes de invertir un solo peso. Este framework te ayuda a filtrar muchas estafas y proyectos basura (ninguna lista te protege de todo):',
        features: [
          { icon: Search, title: 'Paso 1: ¿Tiene Producto Real?', text: '¿El protocolo funciona hoy o es solo un whitepaper con promesas? Si es un protocolo DeFi, ve a DefiLlama y busca si tiene TVL, fees, y usuarios. Un proyecto con producto funcionando y usuarios pagando es fundamentalmente diferente de uno que solo tiene un token y un roadmap bonito. Muchos de los proyectos que pierden casi todo su valor nunca tuvieron un producto real.' },
          { icon: BarChart3, title: 'Paso 2: ¿Las Métricas Crecen?', text: '¿El TVL, los fees, y los usuarios activos están en tendencia alcista o bajista? Un proyecto puede tener producto pero estar muriendo lentamente. Busca growth rate mes a mes. Un protocolo con TVL creciendo 20% mensual y fees creciendo 30% mensual está ganando tracción real. Uno con métricas planas o cayendo está perdiendo relevancia.' },
          { icon: Eye, title: 'Paso 3: ¿Quién Está Detrás?', text: 'Usa Arkham para ver qué wallets institucionales interactúan con el protocolo. ¿Los fundadores tienen historial? ¿Los VCs que invirtieron son reputados (a16z, Multicoin, Polychain) o desconocidos? Pero el respaldo de VCs no es garantía: Sequoia, Temasek y otros fondos de primer nivel invirtieron en FTX y lo perdieron todo cuando colapsó en 2022 (Sequoia marcó a cero más de $200 millones). Un equipo anónimo no es necesariamente malo (Bitcoin fue anónimo), pero combinado con tokenomics agresivos y promesas exageradas, es una red flag enorme.' },
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
            'TVL creciendo mientras el precio baja (posible acumulación: verifica quién deposita)',
            'Ballenas comprando post-caída en Arkham',
            'Fees creciendo mes a mes (demanda orgánica real)',
            'Exchange outflows masivos (suele leerse como HODL)',
            'Usuarios activos en tendencia alcista sostenida',
            'Fundadores/equipo no están vendiendo tokens'
          ]
        },
        rightSide: {
          title: 'Bearish (Distribución)',
          points: [
            'TVL cayendo mientras el precio sube (posible distribución)',
            'Insiders y VCs moviendo tokens a exchanges (preparan venta)',
            'Unlock grande próximo con mucha presión de venta pendiente',
            'Exchange inflows masivos (posible venta)',
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
          { icon: AlertTriangle, title: 'Ignorar el Contexto del Mercado', text: 'En un bull market, TODAS las métricas se ven bien. TVL sube, usuarios suben, fees suben, porque todo el mercado está en euforia. La verdadera prueba de un protocolo es cómo se comporta en un bear market. ¿Mantiene usuarios cuando el mercado cae 50%? ¿Sigue generando fees? Los protocolos que sobreviven el bear suelen quedar mejor posicionados para el siguiente bull.' },
          { icon: AlertTriangle, title: 'Confiar Solo en una Métrica', text: 'TVL alto pero sin fees = capital mercenario buscando yield. Fees altos pero TVL bajo = producto útil pero pequeño. Usuarios altos pero fees bajos = bots o actividad no monetizable. Necesitas el CONJUNTO de métricas pintando una imagen coherente. Si solo una métrica se ve bien y las demás no, probablemente hay algo que no estás viendo.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Práctico: Revisa un Token en 10 Minutos',
        content: 'Antes de comprar cualquier token pequeño en Solana, haz esta revisión. Copia la dirección del token (mint address) desde el sitio oficial o desde CoinGecko, nunca desde un mensaje o un comentario: los estafadores crean copias con el mismo nombre.',
        features: [
          { icon: Search, title: '1. Solscan: ¿Quién Tiene el Token?', text: 'En **solscan.io** pega la dirección y abre la pestaña Holders. Descarta las wallets del pool de liquidez y de exchanges conocidos. Si aun así 10 wallets tienen más de la mitad del supply, unas pocas personas pueden hundir el precio cuando quieran.' },
          { icon: Shield, title: '2. RugCheck: ¿Qué Puede Hacer el Creador?', text: 'En **rugcheck.xyz** revisa dos permisos. Si la *mint authority* no está revocada, el creador puede imprimir tokens nuevos y diluirte. Si la *freeze authority* no está revocada, puede congelar tu saldo. Revisa también si la liquidez está bloqueada o quemada. Es una herramienta automática: un buen puntaje no garantiza nada, pero uno malo es motivo suficiente para pasar.' },
          { icon: Eye, title: '3. Bubblemaps: ¿Los Holders Son Personas Distintas?', text: 'En **bubblemaps.io** verás las principales wallets como burbujas conectadas. Si muchos holders "distintos" recibieron fondos de la misma wallet, probablemente son una sola persona fingiendo una comunidad.' },
          { icon: CheckCircle, title: '4. Decide por Escrito', text: 'Anota lo que encontraste: concentración, permisos, liquidez y conexiones. Si hay dos o más red flags, pasa. Hay miles de tokens; no necesitas este.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Tu Checklist de Investigación On-Chain',
        items: [
          'La blockchain es pública y transparente. A diferencia de los mercados tradicionales, puedes ver mucho de lo que hacen las ballenas, los fondos y los insiders. No predice el futuro, pero te da datos verificables en vez de opiniones.',
          'Las 4 métricas fundamentales: TVL (capital depositado), Fees/Revenue (demanda real), Active Wallets (usuarios orgánicos), y Exchange Flows (dirección del capital). Son un buen punto de partida para evaluar cualquier protocolo.',
          'El framework DYOR de 5 pasos: (1) ¿Tiene producto real? (2) ¿Las métricas crecen? (3) ¿Quién está detrás? (4) ¿Cómo es el tokenomics? (5) ¿Dónde están las red flags? Seguirlo te ayuda a filtrar muchas estafas.',
          'Una divergencia entre precio y datos on-chain es una pista para investigar. Precio baja y TVL sube puede ser acumulación; precio sube y TVL baja puede ser distribución. Pero muchas veces la explicación es aburrida: incentivos nuevos, una sola ballena o un cambio de custodia.',
          'Cuidado con las métricas infladas: TVL incentivado desaparece cuando terminan las recompensas, usuarios activos pueden ser bots, y en bull markets todo se ve bien artificialmente. Busca demanda orgánica que sobreviva al bear market.',
          'Herramientas esenciales: DefiLlama (métricas DeFi), Dune Analytics (dashboards on-chain), Arkham Intelligence (rastreo de wallets), Tokenomist (calendario de desbloqueos, antes TokenUnlocks). Con 2-3 de estas, más Solscan y RugCheck para tokens pequeños, ya tienes una base sólida.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'En DefiLlama ves que un protocolo genera $2M en fees al mes y tiene un market cap de $50M. ¿Cómo lo lees?',
          options: [
            { id: 'a', text: 'Sobrevalorado, porque unos fees tan altos terminan ahuyentando a los usuarios' },
            { id: 'b', text: 'Irrelevante: en crypto el valor depende solo de la narrativa del momento' },
            { id: 'c', text: 'Infravalorado con seguridad, porque $24M al año no pueden ser casualidad' },
            { id: 'd', text: 'Posiblemente infravalorado, si esos fees son orgánicos y no de incentivos' }
          ],
          correctAnswer: 'd',
          explanation: '$2M al mes son $24M al año: unas 2 veces sus fees, cuando protocolos similares pueden cotizar a 10-50 veces. Parece barato, pero antes de concluir revisa si los fees vienen de incentivos o de un pico puntual, y compáralo con competidores directos. Lo tentador es saltar de "parece barato" a "es seguro", y el dato solo no alcanza para eso.'
        },
        {
          id: 'q2',
          question: 'En Arkham ves que 5 wallets de VCs conocidos movieron sus tokens a Binance ayer. El precio todavía no cayó. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro más, porque si los VCs mueven tokens es que saben algo positivo' },
            { id: 'b', text: 'Lo tomo como alerta y reviso mi tamaño o mi stop antes de que vendan' },
            { id: 'c', text: 'Lo ignoro: mover tokens a un exchange nunca tiene relación con vender' },
            { id: 'd', text: 'Vendo todo ya, porque es seguro que esos VCs van a vender hoy mismo' }
          ],
          correctAnswer: 'b',
          explanation: 'Mover tokens a un exchange suele preceder una venta, aunque hay excepciones como acuerdos de market making o cambios de custodia. Cuando varios VCs lo hacen a la vez, la lectura de venta gana peso. Por eso es una alerta para revisar tu posición, no una certeza para vender todo en pánico.'
        },
        {
          id: 'q3',
          question: 'Revisas un token nuevo en RugCheck y ves que la mint authority NO está revocada. ¿Qué significa para ti como holder?',
          options: [
            { id: 'a', text: 'Que el token ya pasó una auditoría oficial de seguridad de su contrato' },
            { id: 'b', text: 'Que la liquidez del pool quedó bloqueada para siempre dentro del contrato' },
            { id: 'c', text: 'Que el creador puede congelar tu wallet y bloquear tus transferencias' },
            { id: 'd', text: 'Que el creador todavía puede crear tokens nuevos y diluir a los holders' }
          ],
          correctAnswer: 'd',
          explanation: 'La mint authority es el permiso para crear tokens nuevos: quien la controla puede imprimir millones y venderlos encima de ti. Congelar cuentas es otro permiso distinto, la freeze authority, que RugCheck también revisa. Ninguno de los dos tiene que ver con auditorías ni con la liquidez bloqueada.'
        },
        {
          id: 'q4',
          question: 'Un DEX nuevo en Solana tiene $500M de TVL, pero en Dune ves que solo 200 wallets generan el 95% del volumen. ¿Qué está pasando probablemente?',
          options: [
            { id: 'a', text: 'Usuarios muy comprometidos, que operan más aquí que en otros DEX' },
            { id: 'b', text: 'Es normal en DeFi y no cambia nada al evaluar la salud del protocolo' },
            { id: 'c', text: 'Es un protocolo para ballenas, lo que indica capital serio y estable' },
            { id: 'd', text: 'Wash trading o farming de puntos: las métricas están infladas' }
          ],
          correctAnswer: 'd',
          explanation: 'Una concentración tan extrema suele ser volumen falso (wash trading) o bots que farmean puntos e incentivos. Es cierto que en DeFi pocas wallets grandes mueven mucho volumen, pero un protocolo sano tiene miles de usuarios con una distribución más amplia. Cuando terminen los incentivos, esas 200 wallets se irán con el TVL.'
        },
        {
          id: 'q5',
          question: 'El precio de un token cae 30% en una semana, pero en DefiLlama su TVL sube 20% en el mismo período. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Compro ya, porque es una acumulación institucional segura antes de que suba' },
            { id: 'b', text: 'Lo tomo como pista: reviso quién deposita, qué activos y si hay incentivos' },
            { id: 'c', text: 'Asumo que el proyecto está muriendo y que los datos de TVL están mal' },
            { id: 'd', text: 'Lo ignoro: cuando el precio baja, el TVL deja de ser un dato relevante' }
          ],
          correctAnswer: 'b',
          explanation: 'Puede ser acumulación con convicción, pero hay explicaciones más aburridas: un programa de incentivos nuevo, una sola ballena depositando, o stablecoins que no tienen nada que ver con el token. La divergencia es una pista para investigar en DefiLlama y Dune, no una conclusión.'
        },
        {
          id: 'q6',
          type: 'fill-blank',
          question: 'Separa el TVL orgánico del incentivado.',
          textBefore: 'Un protocolo tiene $300M de TVL, pero el 80% llegó el último mes por un programa de recompensas. Su TVL orgánico es de unos $',
          textAfter: 'millones.',
          correctAnswer: '60',
          acceptableAnswers: ['60', '$60', '60m', '60 m', '60 millones', '$60m', '60mm', '60 mill'],
          explanation: 'El 20% orgánico de $300M son $60M. El resto es capital mercenario: está ahí por las recompensas y suele irse cuando terminan. $60M de TVL orgánico que crece es más sano que $300M inflados por incentivos temporales.'
        },
        {
          id: 'q7',
          type: 'ordering',
          question: 'Ordena los 5 pasos del framework DYOR de esta lección.',
          items: [
            '¿Tiene producto real?',
            '¿Las métricas crecen?',
            '¿Quién está detrás?',
            '¿Cómo son los tokenomics?',
            '¿Dónde están las red flags?'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Primero confirmas que hay un producto que la gente usa; sin eso, el resto sobra. Luego verificas que las métricas crezcan, quién construye, cómo se reparte el token y, al final, buscas activamente las red flags. Seguir siempre el mismo orden evita que te enamores de un proyecto antes de revisar lo básico.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Tokenomics 101: un token tiene un market cap de $50M y un FDV de $500M. ¿Qué te dice esa diferencia?',
          options: [
            { id: 'a', text: 'Que el token está barato, porque vale diez veces menos que su FDV' },
            { id: 'b', text: 'Que solo circula el 10% del supply; el resto puede entrar y diluirte' },
            { id: 'c', text: 'Que el proyecto ya vale $500M, porque el FDV es su valor real hoy' },
            { id: 'd', text: 'Nada útil: el FDV solo sirve para tokens que ya circulan por completo' }
          ],
          correctAnswer: 'b',
          explanation: 'Si el FDV es 10 veces el market cap, solo circula el 10% del supply. El otro 90% entrará con los unlocks y diluirá a los holders actuales. Leerlo como "barato" es justo la trampa del token barato. (Lo viste en la lección Tokenomics 101.)'
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
            question: 'Descubres un protocolo DeFi nuevo en X y quieres evaluarlo en serio. ¿Cuál es la primera herramienta que abres?',
            options: [
              'X, para ver qué opina la comunidad del proyecto antes que cualquier dato',
              'El sitio web del protocolo, porque el whitepaper explica cómo funciona',
              'Dune, porque sus dashboards on-chain son los más completos y detallados',
              'DefiLlama: muestra TVL, fees y uso reales antes que cualquier opinión'
            ],
            correctAnswer: 3,
            explanation: 'Para un protocolo DeFi, DefiLlama es el punto de partida: si no aparece con TVL y fees, o no tiene producto real o es demasiado pequeño para evaluarlo. Dune es muy útil, pero es para profundizar después, cuando ya sabes qué preguntar. Datos antes que opiniones.',
            hint: 'Piensa en qué fuente te da datos básicos antes que opiniones.'
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
    duration: '19 min',
    type: 'Estrategia',
    description: 'En crypto, la atención mueve el dinero. Las narrativas (IA, DeFi, Memes, Gaming) definen qué sube y qué baja en cada ciclo. Aprende a reconocerlas, a estimar en qué etapa podrían estar, y por qué la mayoría de quienes las persiguen terminan siendo la liquidez de salida.',
    sections: [
      {
        type: 'intro',
        title: 'La Economía de la Atención',
        content: 'En los mercados tradicionales, el valor se mide en ingresos, clientes y flujo de caja. En crypto, hay una fuerza adicional que mueve miles de millones de dólares: **la atención**. Cuando millones de personas empiezan a hablar de inteligencia artificial y crypto, los tokens de IA pueden multiplicar su precio en semanas. Cuando los NFTs son el tema del momento, todo lo relacionado explota. Cuando los memecoins capturan la imaginación de los traders, algunos hacen 100× en días, y la gran mayoría termina en cero. No es irracional, es cómo funciona un mercado donde gran parte de los participantes son traders de corto plazo buscando la próxima gran oportunidad. La atención colectiva crea flujo de capital. El flujo de capital mueve precios. Los precios atraen más atención. Es un ciclo que se retroalimenta hasta que se agota. Si decides operar narrativas, hazlo solo con tu **capital de trading** (como máximo el 5-10% de tu porción cripto), con posiciones pequeñas y sabiendo que la mayoría de esas apuestas no va a funcionar. Tu objetivo no es atrapar el 100×: es no terminar siendo la liquidez de salida.',
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
          { icon: Activity, title: 'El Motor de la Narrativa', text: 'Toda narrativa se alimenta de: (1) un evento catalizador (ChatGPT se lanza y los tokens de IA se disparan), (2) adopción temprana por traders influyentes, (3) resultados que validan la historia (tokens suben = "ves, tenía razón"), (4) FOMO masivo que amplifica todo.' },
          { icon: Clock, title: 'Las Narrativas son Temporales', text: 'Ninguna narrativa dura para siempre. Los ICOs dominaron 2017. DeFi Summer fue 2020. Los NFTs explotaron 2021. Memecoins y AI dominaron 2024-2025 (los memecoins hicieron pico en enero de 2025 y se desplomaron tras el caso LIBRA). Cada narrativa tiene su momento, y después muere o se transforma. Casarte con una narrativa pasada es la receta para perder dinero.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Narrativas que Definieron Cada Ciclo',
        content: 'Mirar hacia atrás revela un patrón: cada ciclo tiene sus narrativas dominantes, y los tokens que más suben son los que mejor capturan esa narrativa. En retrospectiva parece fácil; en su momento, por cada ganador hubo decenas de proyectos que terminaron en cero:',
        features: [
          { icon: BarChart3, title: '2017: ICOs (Initial Coin Offerings)', text: 'La narrativa: "Cualquiera puede crear un token y levantar millones sin bancos ni reguladores". Ethereum fue la plataforma. Miles de proyectos (casi todos basura) levantaron millones con un whitepaper. Un puñado sobrevivió; la mayoría de quienes compraron el hype perdió casi todo.' },
          { icon: BarChart3, title: '2020: DeFi Summer', text: 'La narrativa: "Puedes ser tu propio banco. Préstamos, swaps, yield farming sin intermediarios". Uniswap, Aave, Compound explotaron. El TVL de DeFi pasó de unos $1,000 millones a principios de 2020 a más de $100,000 millones a mediados de 2021. Y en el bear de 2022 esos mismos tokens cayeron más de 80% desde su máximo.' },
          { icon: BarChart3, title: '2021: NFTs y Metaverso', text: 'La narrativa: "La propiedad digital es el futuro. Arte, gaming, identidad, todo será NFT". Bored Apes, CryptoPunks, Axie Infinity. Algunos JPEGs se vendieron por millones. Cuando la narrativa se agotó, la gran mayoría de los NFTs perdió casi todo su valor.' },
          { icon: BarChart3, title: '2024-2025: AI + Memecoins + Solana', text: 'Narrativas múltiples: "La IA va a transformar crypto" (agentes autónomos, AI tokens). "Los memecoins son la nueva forma de expresión cultural" (BONK, WIF, PEPE). "Solana es la cadena ganadora" (velocidad, bajo costo, DeFi). La fiesta memecoin hizo pico en enero de 2025 con el token TRUMP y colapsó tras el caso LIBRA en febrero de 2025. Unos pocos entraron temprano y salieron a tiempo; la mayoría llegó tarde y fue la liquidez de salida.' }
        ]
      },
      {
        type: 'main',
        title: 'El Ciclo de Vida de una Narrativa',
        content: 'Muchas narrativas pasan por 4 etapas parecidas. El problema: casi siempre sabes en qué etapa estabas cuando ya pasó.',
        features: [
          { icon: Search, title: '1. Nacimiento (Insiders)', text: 'Solo los más conectados hablan de ella. Crypto Twitter (CT) empieza a mencionar un tema nuevo. Los tokens relacionados son micro-caps con baja liquidez. **Si entras aquí, el riesgo es extremo: la mayoría de estas apuestas va a cero y unas pocas multiplican mucho.** Casi nadie entra aquí porque "nadie habla de eso".' },
          { icon: TrendingUp, title: '2. Crecimiento (Early Adopters)', text: 'CT adopta la narrativa. Los threads y hilos se multiplican. Los tokens líderes suben con fuerza. Influencers empiezan a crear contenido. **Suele ser la etapa con mejor balance: algo de validación y todavía recorrido. Pero muchas narrativas mueren aquí sin llegar nunca al mainstream.**' },
          { icon: Globe, title: '3. Mainstream (Las Masas)', text: 'Los medios cubren la narrativa. YouTube, TikTok, Instagram. Tu amigo que no sabe de crypto te pregunta. Los tokens líderes ya subieron muchísimo. **Si entras aquí, el riesgo/recompensa suele invertirse: poco recorrido, mucha caída posible.**' },
          { icon: TrendingDown, title: '4. Agotamiento (El Fin)', text: 'Todos ya saben de la narrativa. No hay nuevos compradores. Los early adopters venden a los latecomers. El precio empieza a caer lentamente y luego se desploma. **Si todavía estás aquí, eres la liquidez de salida.**' }
        ],
        highlight: {
          title: 'El Caso LIBRA: Cuando la Narrativa es la Trampa',
          text: 'Febrero de 2025: el presidente de Argentina, Javier Milei, publicó un tuit promocionando LIBRA, un token que prometía financiar pymes argentinas. El precio se disparó en minutos y colapsó más de 90% en horas. Según análisis on-chain, wallets vinculadas al equipo retiraron más de $100 millones y el 86% de los traders perdió dinero, más de $250 millones en total, muchos en LATAM. En octubre de 2026 un juez argentino sobreseyó a los acusados, y la fiscalía apeló. La lección quedó grabada: ni el aval de un presidente valida un token. Verifica liquidez, distribución y unlocks antes que cualquier historia.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Identificar la Próxima Narrativa Antes que Todos',
        content: 'No necesitas bola de cristal. Necesitas las fuentes correctas y un framework de evaluación:',
        features: [
          { icon: Search, title: 'Fuentes de Información', text: '**Crypto Twitter (X)**: Sigue a 20-30 cuentas de traders y analistas que publiquen tesis con datos, reconozcan sus errores y digan cuándo tienen posición. Ojo: muchas cuentas cobran por promocionar tokens sin decirlo, y quien solo muestra ganancias te está vendiendo algo. Cuando 5+ cuentas serias e independientes empiezan a hablar del mismo tema, presta atención. **Dune Analytics**: Busca dashboards de nuevos sectores con métricas crecientes. **DefiLlama**: Filtrar por sectores con TVL creciente que nadie cubre todavía.' },
          { icon: Eye, title: 'Las 3 Preguntas Filtro', text: '(1) ¿Hay un catalizador real? (evento tecnológico, regulatorio, o cultural que impulse la narrativa). (2) ¿Los tokens del sector tienen espacio para crecer? (market caps bajos frente al potencial). (3) ¿La narrativa tiene recorrido? (¿puede durar meses, o es un meme de un día?).' },
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
        content: 'La rotación es mover capital de un sector o narrativa a otro cuando cambia el momentum. Bien hecha, te evita quedarte atrapado en una narrativa que murió; mal hecha, te hace pagar comisiones e impuestos para llegar tarde a todo. Y siempre dentro de tu capital de trading:',
        features: [
          { icon: RefreshCw, title: 'El Flujo de Rotación', text: 'El guion clásico de los ciclos pasados: **de stablecoins a BTC, luego ETH, large caps, mid caps, small caps y memecoins, y tras el crash, de vuelta a stablecoins**. Pero trátalo como heurística histórica, no como ley: el ciclo 2024-25 lo rompió en gran parte (la dominancia de BTC se mantuvo alta y la altseason amplia nunca llegó). Úsalo como mapa de referencia sabiendo que puede fallar.' },
          { icon: Target, title: 'Cuándo Rotar', text: 'Rota cuando tu sector actual **pierde momentum** (las subidas son más pequeñas, el volumen cae) y otro sector **gana momentum** (volumen creciente, nuevos máximos). No esperes a que tu sector muera, rota cuando todavía está bien pero otro está mejor.' },
          { icon: AlertTriangle, title: 'El Error de la Sobrerotación', text: 'Rotar demasiado seguido = pagar fees, generar eventos impositivos (cada venta puede pagar impuestos: revisa la lección Tu Plan de Inversión Personal), y llegar tarde a cada movimiento. La rotación ideal ocurre 2-4 veces por ciclo (no por semana). Cada rotación debe ser una decisión deliberada basada en datos, no en FOMO por el token del día.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Surfeando la Ola de la Atención',
        items: [
          'En crypto, la atención colectiva mueve capital. Las narrativas (IA, DeFi, Memes) definen qué sube en cada fase del ciclo. Entenderlas te ayuda, sobre todo, a no comprar en el pico de la euforia.',
          'Muchas narrativas pasan por 4 etapas: nacimiento, crecimiento, mainstream y agotamiento. La etapa 2 suele tener el mejor balance, pero solo se reconoce con claridad después, y la mayoría de los tokens de cada narrativa termina muy por debajo de su máximo.',
          'Las mejores narrativas tienen catalizador real, proyectos con producto, métricas on-chain crecientes y adopción por traders reputados. Las peores son puro hype sin sustancia.',
          'Crypto Twitter (X) ve las narrativas semanas o meses antes que los medios mainstream. Cuando lees sobre una narrativa en las noticias, ya llegaste tarde. Y muchas cuentas de CT cobran por promocionar sin decirlo.',
          'La rotación de capital ha seguido históricamente un patrón: de stablecoins a BTC, luego ETH, large caps, mid y small caps, y memecoins. El ciclo 2024-25 rompió parte de ese guion: úsalo como referencia, no como garantía.',
          'No te cases con ninguna narrativa ni token. Los mejores traders son flexibles: siguen la ola actual con tamaño pequeño y rotan cuando pierde momentum. La lealtad en trading es costosa.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'La narrativa de IA + crypto está caliente. Encuentras un token de IA con $5M de market cap y un producto que funciona. ¿Cómo lo evalúas?',
          options: [
            { id: 'a', text: 'Paso el filtro de 3 preguntas y, si lo supera, entro con tamaño especulativo' },
            { id: 'b', text: 'Compro fuerte, porque la narrativa está caliente y el token ya tiene producto' },
            { id: 'c', text: 'Lo ignoro: la IA en crypto es una moda sin proyectos que tengan producto real' },
            { id: 'd', text: 'Espero a que suba 10× para confirmar la tendencia y entonces entro con todo' }
          ],
          correctAnswer: 'a',
          explanation: 'El filtro (¿catalizador real?, ¿espacio para crecer?, ¿la narrativa tiene recorrido?) separa oportunidades de vapor. Aun si lo pasa, un token de $5M tiene riesgo extremo de rug pull y de liquidez, como mostró LIBRA. Por eso la posición es pequeña: que el token tenga producto no justifica un tamaño grande.'
        },
        {
          id: 'q2',
          question: '¿En qué etapa del ciclo de vida de una narrativa suele estar el mejor balance entre riesgo y recompensa?',
          options: [
            { id: 'a', text: 'Mainstream: cuando todos hablan de ella, comprar es más seguro que nunca' },
            { id: 'b', text: 'Nacimiento: entrar primero siempre da el mejor resultado de todo el ciclo' },
            { id: 'c', text: 'Crecimiento: ya hay validación en CT, pero todavía no llegó al mainstream' },
            { id: 'd', text: 'Agotamiento: los precios ya bajaron bastante y por eso tienen que rebotar' }
          ],
          correctAnswer: 'c',
          explanation: 'En el nacimiento el potencial es máximo pero también el riesgo, porque la narrativa puede no despegar. En el mainstream la mayor parte del movimiento ya pasó. El crecimiento suele dar el mejor balance, aunque solo se reconoce con claridad después y muchas narrativas mueren en esa etapa.'
        },
        {
          id: 'q3',
          question: '¿Cuál fue una de las narrativas dominantes del ciclo 2024-2025, y cómo terminó?',
          options: [
            { id: 'a', text: 'Metaverso: la gente pagó por vivir en mundos virtuales y la idea se asentó' },
            { id: 'b', text: 'Memecoins en Solana: dominaron hasta enero de 2025 y colapsaron tras LIBRA' },
            { id: 'c', text: 'ICOs, que volvieron con la misma fuerza que tuvieron en el ciclo de 2017' },
            { id: 'd', text: 'Minería de Bitcoin, que fue la narrativa más caliente y rentable del ciclo' }
          ],
          correctAnswer: 'b',
          explanation: 'Los memecoins capturaron el capital retail en 2024, con Solana como cadena preferida por velocidad y costo. La narrativa hizo pico en enero de 2025 con el token TRUMP y se desplomó tras el colapso de LIBRA en febrero. El metaverso y las ICOs fueron narrativas de ciclos anteriores.'
        },
        {
          id: 'q4',
          question: 'Tu portafolio está concentrado en DeFi. El sector dejó de hacer máximos y su volumen baja, mientras los tokens de IA marcan máximos con volumen creciente. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Roto de forma gradual hacia proyectos de IA que ya investigué a fondo' },
            { id: 'b', text: 'Me quedo 100% en DeFi, porque es mi sector y confío en que va a volver' },
            { id: 'c', text: 'Vendo todo DeFi hoy y paso el 100% del capital a cualquier token de IA' },
            { id: 'd', text: 'Compro más DeFi, porque está barato si lo comparo con los tokens de IA' }
          ],
          correctAnswer: 'a',
          explanation: 'Cuando tu sector pierde momentum y otro lo gana, rotar tiene sentido, pero de forma gradual y solo hacia proyectos investigados. Rotar todo de golpe cambia una apuesta concentrada por otra. Recuerda que cada venta puede generar impuestos.'
        },
        {
          id: 'q5',
          question: '¿Cuál suele ser la señal más temprana de que una narrativa nueva está naciendo?',
          options: [
            { id: 'a', text: 'Traders con historial en CT hablan del tema y las métricas on-chain crecen' },
            { id: 'b', text: 'El tema aparece en CNBC y en Bloomberg con varios reportajes en la misma semana' },
            { id: 'c', text: 'Un influencer grande de YouTube publica un video sobre esa narrativa' },
            { id: 'd', text: 'Muchas cuentas promocionan el mismo token el mismo día con entusiasmo' }
          ],
          correctAnswer: 'a',
          explanation: 'Las narrativas suelen nacer entre traders con historial verificable, y ganan peso cuando las métricas on-chain las respaldan. Los medios y los grandes influencers llegan tarde. Si muchas cuentas promocionan el mismo token el mismo día, sospecha de una campaña pagada, no de una narrativa naciendo.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Si una narrativa es real y tiene un catalizador sólido, la mayoría de sus tokens termina subiendo.',
          correctAnswer: false,
          explanation: 'Falso. Incluso en narrativas reales, la mayoría de los tokens termina muy por debajo de su máximo. La narrativa puede ser correcta y tu token, el equivocado. Por eso el tamaño pequeño y la selección importan más que acertar el tema.'
        },
        {
          id: 'q7',
          type: 'ordering',
          question: 'Ordena las etapas del ciclo de vida de una narrativa.',
          items: [
            'Nacimiento',
            'Crecimiento',
            'Mainstream',
            'Agotamiento'
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Nace entre pocos, crece cuando CT la valida, llega al mainstream cuando la cubren los medios y se agota cuando ya no entra capital nuevo. Saber en qué etapa estás te ayuda sobre todo a no comprar en el pico.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Ciclos de Mercado: la dominancia de Bitcoin está en 64% y subiendo. Según el patrón histórico, ¿qué suele indicar?',
          options: [
            { id: 'a', text: 'Que la altseason ya empezó y conviene pasar todo a altcoins pequeñas' },
            { id: 'b', text: 'Que el ciclo terminó y viene un bear market largo para todo el mercado' },
            { id: 'c', text: 'Que el capital aún prefiere BTC y la rotación a altcoins no empezó' },
            { id: 'd', text: 'Nada: la dominancia solo mide cuántos bitcoins están en circulación' }
          ],
          correctAnswer: 'c',
          explanation: 'La dominancia mide qué parte del valor total del mercado está en Bitcoin. Alta y subiendo indica que el capital todavía prefiere BTC. Es una heurística: en 2024-25 la dominancia se mantuvo alta y la altseason amplia no llegó. (Lo viste en la lección Ciclos de Mercado (Halving).)'
        }
      ]
    }
  },
  21: {
    id: 21,
    title: 'Diversificación Inteligente',
    level: 'Intermedio',
    number: '9 de 12',
    duration: '17 min',
    type: 'Estrategia',
    description: 'Construye un portafolio que aguante los crashes sin sacarte del juego. La estrategia núcleo-satélite combina una base grande, apuestas pequeñas y liquidez.',
    sections: [
      {
        type: 'intro',
        title: 'El Seguro Contra tu Propia Ignorancia',
        content: 'Warren Buffett dijo: "La diversificación es protección contra la ignorancia. Tiene poco sentido para quien sabe lo que hace". La segunda mitad casi nunca se cita, pero en crypto refuerza la primera: aquí nadie sabe todo lo que necesitaría saber. En un mercado donde TODO puede pasar, un hack, un colapso regulatorio, un CEO que resulta ser un fraude, esa protección es todavía más relevante. El trader que pone el 100% de su capital en un solo token está jugando a la ruleta rusa con su patrimonio. No importa cuánta investigación hagas, siempre hay cosas que NO puedes saber. Luna era un "blue chip" con $40B de market cap antes de ir a cero en una semana. FTX era el exchange "más seguro" hasta que colapsó. La diversificación no es para personas inseguras, es para personas inteligentes que entienden que **no pueden predecir todo**. La pregunta no es SI habrá una sorpresa negativa, sino CUÁNDO. Y cuando llegue, la diversificación es la diferencia entre una mala semana y la ruina total.',
        highlight: {
          title: 'La Regla Fundamental',
          text: 'Nunca pongas en una sola posición más de lo que puedes perder sin que afecte tu sueño. Si perder esa inversión te quita el sueño, tu posición es demasiado grande.'
        }
      },
      {
        type: 'main',
        title: 'Núcleo-Satélite: El Framework del 85/10/5',
        content: 'Este framework es, en esencia, la clásica estrategia núcleo-satélite: una base sólida, apuestas asimétricas pequeñas y liquidez. En redes la llaman "Barbell", aunque la barbell original de Nassim Taleb es más extrema (activos ultraseguros más apuestas salvajes, nada intermedio). Importante: estos porcentajes son la distribución DENTRO de tu porción cripto, que a su vez debería ser solo dinero que puedes permitirte perder. Y encajan con los perfiles de la lección Bitcoin vs Altcoins: el core es tu reparto entre BTC, ETH y SOL, y los satélites son el "hasta 10% en altcoins" del perfil más agresivo. En crypto, se traduce en tres bloques:',
        features: [
          { icon: Shield, title: '80-90%, Core (Tu Base)', text: 'BTC, ETH y SOL, los activos con más historial de sobrevivir bear markets. No son inmunes: ningún activo lo es, y SOL cayó más de 95% en 2022. Pero han sido los más resistentes del ecosistema. **Este bloque es tu base**, repartido según tu perfil, con BTC como la parte más grande si estás empezando. Si todo lo demás falla, tu core te mantiene en el juego.' },
          { icon: Zap, title: 'Hasta 10%, Satélites (Apuestas Asimétricas)', text: 'Tokens de narrativas fuertes, mid caps con potencial alto y riesgo alto. Si haces trading activo, tu capital de trading sale de este mismo bloque: entre los dos, no más del 10% de tu porción cripto. Divídelo en 3-5 posiciones para no depender de una sola. **Asume que puedes perder este bloque entero.** Si no tienes experiencia, 0-5% está perfecto.' },
          { icon: PiggyBank, title: '5-10%, Liquidez (USDC/Stablecoins)', text: 'El efectivo también es una posición. Tener 5-10% en stablecoins te da el poder de comprar cuando el mercado está en pánico. Las mejores oportunidades aparecen cuando todos venden. Sin liquidez, solo puedes ver cómo otros compran barato mientras tú ya estás 100% invertido.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Core: La Base Inquebrantable',
        content: 'El bloque core (80-90%) debería estar en activos que cumplan UNA condición: que tengan **las mejores probabilidades de seguir existiendo y siendo relevantes en el próximo ciclo**. Esto limita tu universo a un puñado de proyectos:',
        features: [
          { icon: Lock, title: 'Bitcoin (BTC)', text: 'El rey. Más de 17 años de historia. Máxima descentralización. Efecto Lindy (cuanto más tiempo sobrevive, más probable que siga). ETFs institucionales. Es el "oro digital" y la base de cualquier portafolio crypto serio. **Dentro de tu porción cripto, BTC es la parte más grande del core**: de 30% a 70% según tu perfil, como viste en Bitcoin vs Altcoins.' },
          { icon: Network, title: 'Ethereum (ETH)', text: 'La plataforma de smart contracts más grande. El ecosistema DeFi y NFT más maduro. EIP-1559 quema parte de las fees: desde 2024, con fees bajas post-Dencun, ETH ha sido levemente inflacionario (~0.2-0.8% anual) y puede ser deflacionario en picos de actividad. Transición a PoS completada. **Junto con SOL, de 20% a 50% de tu porción cripto según tu perfil.**' },
          { icon: Zap, title: 'Solana (SOL)', text: 'Una de las cadenas con más actividad real: transacciones, DeFi TVL, volumen de DEX. Ecosistema vibrante (Jupiter, Raydium, Marinade). Mayor potencial de crecimiento que BTC, pero con un historial de caídas más profundas: más de 95% en 2022.' }
        ]
      },
      {
        type: 'main',
        title: 'Tus Apuestas Asimétricas: Pequeñas a Propósito',
        content: 'El bloque satélite (máximo 10%) es donde tomas riesgo alto a propósito, con dinero que aceptas perder. La realidad: la mayoría de las altcoins termina muy por debajo de su máximo y muchas desaparecen. Que una o dos multipliquen y compensen al resto es una esperanza, no un plan. Por eso este bloque es pequeño:',
        features: [
          { icon: Search, title: 'Cómo Seleccionar', text: 'Busca tokens que: (1) estén en la narrativa dominante del momento, (2) tengan producto funcionando con usuarios reales, (3) tengan market cap bajo relativo a su sector, (4) tengan tokenomics sólidos. **No más de 3-5 posiciones** en este bloque.' },
          { icon: Percent, title: 'Sizing: No Todas Iguales', text: 'No pongas el mismo monto en cada apuesta. Convicción alta: 2-3% de tu porción cripto cada una. Convicción media: 1-2%. Especulativas: 0.5% o menos. Así, tus mejores ideas tienen más capital y ninguna puede arruinarte.' },
          { icon: AlertTriangle, title: 'La Regla del Moonbag', text: 'Si una posición satélite hace 5-10×, recuperar tu inversión original (y algo de ganancia) es prudente, y lo que dejas correr se llama "moonbag". Pero no es "dinero gratis": es tu dinero, vale lo que vale hoy, y si cae a cero pierdes esa ganancia. Decide de antemano a qué precio vendes el resto, y recuerda que cada venta puede generar impuestos.' }
        ]
      },
      {
        type: 'main',
        title: 'Correlación: El Enemigo Invisible',
        content: 'Aquí está el error que la mayoría comete: creer que tener 10 altcoins diferentes es "diversificación". **No lo es.** En crypto, cuando Bitcoin cae, casi todas las altcoins caen igual o más fuerte. Esto se llama **correlación alta**, y destruye la ilusión de diversificación.',
        features: [
          { icon: AlertTriangle, title: '10 Altcoins ≠ Diversificación', text: 'Si tienes SOL, AVAX, POL, ARB, OP, JUP, RENDER, INJ, TIA, y PYTH, tienes 10 tokens que se mueven en la MISMA dirección. Cuando BTC cae 20%, todas caen 30-50%. No estás diversificado, estás concentrado en "altcoins" como clase de activo.' },
          { icon: CheckCircle, title: 'Diversificación Real', text: 'Diversificación real en crypto incluye: BTC (diferente perfil de riesgo que altcoins), stablecoins (no siguen al mercado, aunque tienen sus propios riesgos: emisor, reservas y pérdida de paridad), y opcionalmente activos fuera de crypto (acciones, bonos). Dentro de altcoins, diversifica por sector: DeFi + AI + Gaming, no 5 tokens DeFi.' },
          { icon: Shield, title: 'Stablecoins como Hedge', text: 'Tener 5-10% en USDC es la forma más simple de "hedge" en crypto. Cuando todo cae, tus stablecoins normalmente mantienen su valor y te dan poder de compra en el pánico. No están libres de riesgo: en marzo de 2023, USDC perdió su paridad por unos días (llegó a ~$0.88) cuando quebró Silicon Valley Bank, donde Circle tenía parte de sus reservas.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Portafolio Diversificado vs Concentrado',
        leftSide: {
          title: 'Portafolio Diversificado (85/10/5)',
          points: [
            'Un crash de -50% duele, pero no te saca del juego',
            'Un satélite en cero = pérdida de 2-3% como mucho',
            'Liquidez disponible para oportunidades en pánico',
            'Sin promesas de retorno: tu resultado depende sobre todo de BTC',
            'Duermes mejor sin revisar el precio',
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
          { icon: RefreshCw, title: 'Rebalanceo por Tiempo', text: 'Cada mes o cada trimestre, revisa tu portafolio. Si algún bloque se desvió más de 10 puntos de tu objetivo (el core pasó de 85% a 72% porque los satélites explotaron), vende parcialmente las ganadoras y refuerza las rezagadas.' },
          { icon: Target, title: 'Rebalanceo por Evento', text: 'Rebalancea cuando: (1) una posición hace más de 5× (toma ganancias parciales), (2) el ciclo cambia de fase (de bull a distribución = aumenta stablecoins), (3) una narrativa se agota (rota capital a la nueva, dentro del bloque satélite). No rebalancees por ruido diario.' },
          { icon: AlertTriangle, title: 'No Sobrerebalancees', text: 'Cada trade tiene fees y puede generar impuestos (revisa la lección Tu Plan de Inversión Personal). Rebalancear cada semana es contraproductivo. Hazlo con disciplina pero no con obsesión. Si cada bloque está a menos de 10 puntos de su objetivo, déjalo en paz.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Construyendo un Portafolio que Aguante',
        items: [
          'La estrategia núcleo-satélite 85/10/5 combina una base grande (core BTC/ETH/SOL), apuestas pequeñas (satélites en narrativas) y liquidez (stablecoins para oportunidades de pánico). Y aplica solo a tu porción cripto, que debe ser dinero que puedes permitirte perder.',
          'Tu core (80-90%) es tu base. Tus satélites (máximo 10%, incluido tu capital de trading) son riesgo alto a propósito. Tu liquidez (5-10%) te da margen cuando todos venden.',
          'Correlación es el enemigo invisible: 10 altcoins diferentes NO son diversificación real. Diversifica por clase de activo (BTC + alts + stables) y por sector dentro de altcoins.',
          'No más de 6-10 posiciones totales. Más = imposible seguir, investigar y gestionar efectivamente. Menos = concentración excesiva.',
          'Tener stablecoins NO es cobardía, es estrategia (aunque tampoco están libres de riesgo). Las mejores oportunidades de compra aparecen durante crashes, y solo puedes aprovecharlas si tienes liquidez disponible.',
          'Rebalancea mensual o trimestralmente, o cuando una posición haga 5×+. Toma ganancias parciales de las ganadoras y refuerza tu core, teniendo en cuenta los impuestos. La disciplina de rebalanceo es lo que protege tus ganancias a largo plazo.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu porción cripto es de $10,000 y ya tienes experiencia. ¿Qué asignación sigue la estrategia núcleo-satélite de esta lección?',
          options: [
            { id: 'a', text: '100% en la memecoin del momento, porque puede hacer 100× si aciertas' },
            { id: 'b', text: '85% en BTC/ETH/SOL, 10% en narrativas que entiendo y 5% en USDC' },
            { id: 'c', text: 'Todo repartido en 30 altcoins distintas para la máxima diversificación' },
            { id: 'd', text: '85% en altcoins pequeñas, 10% en BTC/ETH/SOL y 5% en USDC para crecer' }
          ],
          correctAnswer: 'b',
          explanation: 'El core grande va en los activos con más historial (BTC, ETH, SOL), aunque ninguno es inmune a caídas fuertes. Los satélites son riesgo alto con un tamaño que puedes perder entero, y la liquidez te deja comprar en los pánicos. Invertir las proporciones mantiene los números pero convierte la base en la apuesta.'
        },
        {
          id: 'q2',
          question: 'Tienes 10 altcoins distintas en tu portafolio y Bitcoin cae 20% en una semana. ¿Qué pasa probablemente con tus altcoins?',
          options: [
            { id: 'a', text: 'Suben, porque al ser diez proyectos distintos no dependen de Bitcoin' },
            { id: 'b', text: 'Se mantienen estables, porque la diversificación compensa la caída' },
            { id: 'c', text: 'Caen justo 20%, lo mismo que Bitcoin, porque copian su movimiento' },
            { id: 'd', text: 'Caen más que BTC, porque su correlación con Bitcoin suele ser alta' }
          ],
          correctAnswer: 'd',
          explanation: 'Las altcoins se mueven muy correlacionadas con Bitcoin y, en las caídas, suelen caer más: 30-50% frente a un 20% de BTC no es raro. Por eso 10 altcoins no son diversificación real: es concentración en una sola clase de activo. Que "copien" a BTC es casi cierto en dirección, pero no en tamaño.'
        },
        {
          id: 'q3',
          question: '¿Por qué mantener 5-10% de tu porción cripto en stablecoins es una estrategia y no cobardía?',
          options: [
            { id: 'a', text: 'Te deja comprar en los pánicos, cuando suelen aparecer las mejores ofertas' },
            { id: 'b', text: 'Porque una stablecoin es un activo sin riesgo que protege toda tu cartera cripto' },
            { id: 'c', text: 'Porque genera intereses altos y garantizados en cualquier fase del ciclo' },
            { id: 'd', text: 'Porque el mercado siempre termina bajando y así esperas fuera de él' }
          ],
          correctAnswer: 'a',
          explanation: 'Las mejores oportunidades suelen llegar en caídas de 30-50% en pocos días, y solo puedes aprovecharlas si tienes liquidez. Ojo con el mito del activo "sin riesgo": una stablecoin depende de su emisor y de sus reservas, y puede perder la paridad.'
        },
        {
          id: 'q4',
          question: 'Revisas tu portafolio y tienes 35 posiciones, la mayoría de menos de $50 cada una. ¿Qué te recomienda la lección?',
          options: [
            { id: 'a', text: 'Sumar más posiciones, porque más tokens siempre reducen el riesgo total' },
            { id: 'b', text: 'Concentrar todo en 1 o 2 tokens para tener una convicción total en ellos' },
            { id: 'c', text: 'Consolidar en 6-10 posiciones que puedas investigar y seguir de verdad' },
            { id: 'd', text: 'Mantenerlas todas, porque el número de posiciones no influye en el riesgo' }
          ],
          correctAnswer: 'c',
          explanation: 'Con 35 posiciones es imposible investigar y seguir cada una, y las ganadoras son tan pequeñas que no mueven tu resultado. Con 1 o 2 el riesgo de ruina es enorme. 6-10 es un rango razonable: diversificas lo suficiente y todavía puedes gestionar cada posición.'
        },
        {
          id: 'q5',
          question: 'Una de tus posiciones satélite hizo 10× y ahora pesa el 30% de tu portafolio. ¿Cuál es la acción más prudente?',
          options: [
            { id: 'a', text: 'Tomo parciales, recupero mi inversión y fijo un plan de salida para el resto' },
            { id: 'b', text: 'Recupero mi inversión y dejo el resto sin plan, porque ya es dinero gratis' },
            { id: 'c', text: 'Meto más dinero, porque si ya hizo 10× puede hacer 100× con la misma fuerza aún' },
            { id: 'd', text: 'No vendo nada, porque vender un ganador antes de tiempo es el peor error' }
          ],
          correctAnswer: 'a',
          explanation: 'Un satélite que pesa 30% ya no es un satélite: rebalancear devuelve el riesgo al tamaño que elegiste. Recuperar la inversión está bien, pero lo que queda no es dinero gratis: es tuyo, vale lo que vale hoy y necesita su propio plan de salida. Y cada venta puede generar impuestos.'
        },
        {
          id: 'q6',
          type: 'multiple-select',
          question: '¿Cuáles de estas afirmaciones sobre el framework 85/10/5 son correctas? Selecciona todas las que apliquen.',
          options: [
            { id: 'a', text: 'Aplica solo a tu porción cripto, no a todo tu patrimonio' },
            { id: 'b', text: 'Diez altcoins de sectores distintos ya son diversificación real' },
            { id: 'c', text: 'La liquidez en stablecoins sirve para comprar durante los pánicos' },
            { id: 'd', text: 'Las stablecoins no tienen ningún riesgo y protegen todo tu capital' },
            { id: 'e', text: 'Tu capital de trading cuenta dentro del 10% de los satélites' }
          ],
          correctAnswers: [0, 2, 4],
          explanation: 'El framework reparte solo el dinero que destinas a cripto, que debe ser dinero que puedes permitirte perder. El capital de trading es riesgo alto, así que entra en los satélites. Las altcoins siguen muy correlacionadas aunque sean de sectores distintos, y las stablecoins tienen riesgo de emisor.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Rebalancear cuando un satélite hace 5× o más implica vender parte de lo que más subió para reforzar tu core.',
          correctAnswer: true,
          explanation: 'Verdadero. Rebalancear es vender parte de lo que creció por encima de su peso y llevarlo a la base. Se siente contraintuitivo, porque vendes al ganador, pero es lo que convierte una subida en ganancia protegida. Considera los impuestos de cada venta.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Narrativas y Rotación: ¿en qué etapa de una narrativa suele comprar quien llega tarde y termina siendo la liquidez de salida de los primeros?',
          options: [
            { id: 'a', text: 'En el nacimiento, cuando solo unos pocos traders hablan del tema en CT' },
            { id: 'b', text: 'En el mainstream, cuando los medios ya la cubren y todos hablan de ella' },
            { id: 'c', text: 'En el crecimiento, cuando CT ya la valida y las métricas on-chain suben' },
            { id: 'd', text: 'En el agotamiento, cuando ya casi nadie habla de ella y el volumen cae' }
          ],
          correctAnswer: 'b',
          explanation: 'Cuando una narrativa llega a los medios, la mayor parte del movimiento ya pasó, y quienes entraron antes aprovechan esa demanda nueva para vender. (Lo viste en la lección Narrativas y Rotación.)'
        }
      ]
    }
  },
  22: {
    id: 22,
    title: 'El Arte del Stop Loss',
    level: 'Intermedio',
    number: '10 de 12',
    duration: '20 min',
    type: 'Tutorial Práctico',
    description: 'Sobrevivir es más importante que ganar. El stop loss es tu seguro contra la ruina, tu herramienta para cortar pérdidas rápido y proteger tu capital para pelear otro día.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Seguro de Vida Financiero',
        content: 'Imagina un trader que en 2022 invirtió $50,000 (los ahorros de toda su vida) en LUNA a $80. "Es un blue chip, no necesito stop loss", se dijo. Una semana después, LUNA estaba a $0.0001. Perdió el 99.999% de su capital. Ese dinero ya no existe. ¿Cuánto le habría costado un stop loss? Si hubiera puesto un stop en $60 (-25%), habría perdido unos $12,500 (algo más con el slippage de ese pánico). Doloroso, pero recuperable. Sin stop, perdió TODO. Un **stop loss** no es una pérdida, es el **costo de hacer negocios**. Es tu seguro de vida financiero. Los profesionales pierden operaciones constantemente, pero sobreviven porque sus pérdidas son pequeñas y controladas. Los amateurs ganan muchas operaciones pequeñas y luego pierden todo en UNA sola sin stop. Ojo: esto aplica a tus operaciones de trading. Tu base de DCA a largo plazo se protege con el tamaño (solo dinero que puedes aguantar ver caer), no con stops.',
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
          { icon: Percent, title: '-10%: Necesitas +11% para Recuperar', text: 'Pierdes 10% de $10,000 = te quedan $9,000. Para volver a $10,000 necesitas ganar +11.1%. Todavía manejable.' },
          { icon: Percent, title: '-25%: Necesitas +33%', text: 'Pierdes 25% = te quedan $7,500. Para volver a $10,000 necesitas +33%. Ya es difícil. Un solo trade mal gestionado te pone en desventaja seria.' },
          { icon: Percent, title: '-50%: Necesitas +100%', text: 'Pierdes la mitad de tu capital. Para volver necesitas DUPLICAR tu dinero. ¿Cuántas veces has duplicado tu dinero? Exacto. Una pérdida del 50% puede tardar años en recuperarse.' },
          { icon: AlertTriangle, title: '-90%: Necesitas +900%', text: 'La ruina. Si pierdes el 90%, necesitas hacer un 9× solo para volver a donde empezaste. En la práctica, este capital está muerto. El stop loss existe para que NUNCA llegues aquí.' }
        ]
      },
      {
        type: 'main',
        title: 'Tipos de Stop Loss',
        content: 'No todos los stops son iguales. El tipo de stop que uses depende de tu estrategia, el activo y el contexto del mercado:',
        features: [
          { icon: Shield, title: 'Stop Técnico (Recomendado)', text: 'Colocado basado en la estructura del gráfico: debajo de un soporte clave, debajo del último Higher Low, o debajo de una zona de demanda. **El más profesional.** Tu stop está donde la tesis de tu operación se invalida. Si el soporte se rompe, tu razón para estar largo ya no existe.' },
          { icon: Percent, title: 'Stop Porcentual', text: 'Distancia fija del precio de entrada: -5%, -8%, -10%. Más simple pero menos preciso, no considera la estructura del gráfico. Útil como respaldo si no dominas el análisis técnico. **Como regla práctica, no más de -10%**; si la estructura pide un stop más lejano, reduce el tamaño de la posición (lo verás en Position Sizing).' },
          { icon: Activity, title: 'Trailing Stop (Stop Dinámico)', text: 'Se mueve con el precio a tu favor. Si pones un trailing de 10% y el precio sube de $100 a $150, tu stop sube automáticamente a $135. Si el precio cae 10% desde cualquier máximo, se ejecuta. **Excelente para capturar tendencias largas sin salir demasiado temprano.**' },
          { icon: Brain, title: 'Stop Mental (Peligroso)', text: '"Vendo si baja a $X." Sin orden puesta en el exchange. El problema: cuando el precio llega a tu "stop mental", las emociones gritan "va a rebotar" y no vendes. Luego cae más. Y más. **Los stops mentales NO funcionan.** Usa órdenes reales.' },
          { icon: AlertTriangle, title: 'Stop-Market vs Stop-Limit: La Letra Pequeña', text: 'Un **stop-market** vende al mejor precio disponible cuando se activa: garantiza salir, no el precio (en mechas rápidas habrá slippage). Un **stop-limit** solo ejecuta a tu precio límite o mejor: en un crash tipo LUNA puede no ejecutarse nunca y dejarte atrapado. Y una diferencia clave con los DEXs: agregadores como Jupiter ya ofrecen órdenes trigger (límite y, en versiones recientes, stop loss y take profit), pero no funcionan como en un exchange centralizado. Un servicio vigila el precio y lanza un swap cuando se cumple la condición. Mientras la orden está abierta, tus tokens quedan en una bóveda custodiada, fuera de tu wallet. Y la propia Jupiter advierte que un stop puede no ejecutarse si el precio salta o la liquidez es baja, algo común en memecoins. Lo verás en detalle en la lección Jupiter: El Rey de los DEXs, del nivel avanzado.' }
        ]
      },
      {
        type: 'main',
        title: 'Dónde Colocar tu Stop Loss',
        content: 'El stop perfecto está en el punto donde tu tesis se invalida, pero lo suficientemente lejos para no ser activado por el ruido normal del mercado:',
        features: [
          { icon: Crosshair, title: 'Debajo del Soporte + Filtro', text: 'Si compras en soporte en $150, tu stop NO va en $150 ni en $149. Muchos stops se apilan en los niveles obvios, y a veces una mecha pasa por ahí antes de rebotar. Tu stop va en $145-146 (debajo del mínimo de la zona de soporte con un 1-3% de filtro extra). Si el precio llega ahí, el soporte realmente se rompió.' },
          { icon: Crosshair, title: 'Debajo del Último Higher Low', text: 'En un uptrend, tu stop va debajo del HL más reciente. Si la estructura alcista es $120, $155, $135 y $175, y estás largo, tu stop está debajo de $135 (el último HL). Si ese HL se rompe, la estructura alcista se invalida.' },
          { icon: AlertTriangle, title: 'NUNCA Debajo de Niveles "Obvios"', text: 'Si hay un soporte claro en $100 y todos los traders de Twitter lo marcan, hay MILES de stops en $99-100. Esos stops acumulados son órdenes esperando ejecutarse, y a veces una mecha los activa antes de que el precio rebote. No hace falta un villano coordinándolo: es donde se juntan las órdenes. Tu stop debería estar 1-3% debajo de la zona "obvia".' }
        ]
      },
      {
        type: 'main',
        title: 'Position Sizing: La Fórmula del 1-2%',
        content: 'El stop loss define DÓNDE sales. El position sizing define CUÁNTO compras. Juntos, controlan tu riesgo por operación. La regla profesional: **nunca arriesgues más del 1-2% de tu capital de trading en una sola operación.** Recuerda: tu capital de trading es como máximo el 5-10% de tu porción cripto.',
        features: [
          { icon: Percent, title: 'La Fórmula', text: '**Tamaño de posición = (Capital × % riesgo) / Distancia al stop**. Ejemplo: capital de trading $2,000, riesgo 2% = $40 máximo de pérdida. Si tu stop está 10% debajo de tu entrada, tu posición máxima es $40 / 10% = $400. Esto limita tu pérdida a unos $40 (2% de tu capital de trading), salvo que el precio salte tu stop con slippage. Nota la consecuencia: a stop más lejano, posición más pequeña. Un stop al doble de distancia permite la mitad de posición con el mismo riesgo en dólares.' },
          { icon: CheckCircle, title: 'Por Qué 1-2% Funciona', text: 'Con riesgo del 2% compuesto (recalculado sobre el capital restante), **20 pérdidas seguidas te dejan ~67% del capital, y hasta 50 pérdidas seguidas te dejan ~36%**: golpeado, pero sigues en el juego. Las rachas perdedoras de 5-10 trades son NORMALES incluso para traders rentables. El 1-2% te da mucho margen para sobrevivir a la varianza.' },
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
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'El Stop Loss Como Estilo de Vida',
        items: [
          'El stop loss no es una pérdida, es el costo de hacer negocios. Sin stop, una sola operación mala puede destruir meses o años de ganancias.',
          'La matemática es cruel: perder 50% requiere ganar 100% para recuperar. El stop loss existe para que tus pérdidas sean del 1-2%, no del 50%.',
          'Define tu stop ANTES de entrar. Colócalo debajo de donde tu tesis se invalida (soporte, último HL), con un filtro de 1-3%. No justo en los niveles "obvios", donde las mechas suelen activar stops.',
          'Position sizing: nunca arriesgues más del 1-2% de tu capital de trading por operación. Con 2% compuesto, incluso 20 pérdidas seguidas te dejan ~67% del capital (y 50 te dejan ~36%): sigues en el juego.',
          'Los stops mentales NO funcionan. Usa órdenes reales en el exchange. Cuando las emociones gritan "va a rebotar", tu orden ya se ejecutó y tu capital está protegido.',
          'Mover el stop hacia abajo es la droga más destructiva del trading. Si defines un stop, RESPÉTALO. Es mejor perder un 2% 10 veces que perder un 50% una vez.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es la regla de oro del stop loss que separa a quien sobrevive en el trading de quien no?',
          options: [
            { id: 'a', text: 'Definirlo antes de entrar a la operación y nunca moverlo hacia abajo' },
            { id: 'b', text: 'Ponerlo cuando ya perdiste 20% y el dolor empieza a ser demasiado' },
            { id: 'c', text: 'Usar un stop mental, porque te da más flexibilidad que una orden real' },
            { id: 'd', text: 'Definirlo antes de entrar y bajarlo si tu convicción sigue siendo alta' }
          ],
          correctAnswer: 'a',
          explanation: 'El stop es parte del plan: se decide en frío, antes de entrar, donde tu tesis se invalida. La trampa es la versión casi correcta: definirlo bien y luego bajarlo "porque sigues convencido". La convicción no cambia lo que el precio ya te dijo.'
        },
        {
          id: 'q2',
          type: 'fill-blank',
          question: 'Calcula el tamaño máximo de tu posición.',
          textBefore: 'Tu capital de trading es $2,000 y arriesgas como máximo el 2% por operación. Compras SOL con el stop 10% debajo de tu entrada. Tu posición máxima es de $',
          textAfter: '.',
          correctAnswer: '400',
          acceptableAnswers: ['400', '$400', '400 usd', '400 usdc', '400 dolares', '400 dólares', '400.00', '400,00'],
          explanation: 'Riesgo máximo = $2,000 × 2% = $40. Posición = riesgo ÷ distancia al stop = $40 ÷ 10% = $400. Si el stop se ejecuta, pierdes unos $40, no $400. El error común es confundir el 2% de riesgo con el tamaño de la posición.'
        },
        {
          id: 'q3',
          question: 'SOL cae a tu stop en $162, la orden se ejecuta y luego el precio sube a $200. ¿Qué hiciste bien?',
          options: [
            { id: 'a', text: 'Limité la pérdida al tamaño que planeé y puedo volver a entrar con un plan' },
            { id: 'b', text: 'Nada: perdí dinero y el precio subió sin mí, así que el stop fue un error' },
            { id: 'c', text: 'Nada: debí poner el stop mucho más abajo para que nunca me sacara del trade' },
            { id: 'd', text: 'Aprendí que los stops sobran, porque el precio siempre termina rebotando' }
          ],
          correctAnswer: 'a',
          explanation: 'Esta vez el precio rebotó, pero otras veces seguirá cayendo 50%. El stop cambia esos desastres por pérdidas pequeñas a cambio de perder algún rebote. Juzgar un stop por una sola operación es el error: lo que importa es el resultado de muchas.'
        },
        {
          id: 'q4',
          question: 'Tu capital baja 50%, de $10,000 a $5,000. ¿Cuánto necesitas ganar para volver a $10,000?',
          options: [
            { id: 'a', text: '+50%: lo mismo que perdiste, porque los porcentajes son simétricos' },
            { id: 'b', text: '+75%: algo más de lo que perdiste, por el efecto del interés compuesto' },
            { id: 'c', text: '+100%: necesitas duplicar lo que te queda para volver a $10,000' },
            { id: 'd', text: '+25%: las pérdidas se recuperan rápido cuando el mercado se da vuelta' }
          ],
          correctAnswer: 'c',
          explanation: 'El porcentaje se calcula sobre lo que queda: de $5,000 a $10,000 hay que ganar $5,000, es decir +100%. Un -25% pide +33% y un -10% pide +11%. Por eso los stops buscan pérdidas del 1-2%: se recuperan con +2%, no con +100%.'
        },
        {
          id: 'q5',
          question: 'El precio se acerca a tu stop y tu mente dice: "va a rebotar, bájalo un poco para darle espacio". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Lo bajo un poco, porque es razonable si mi convicción en la tesis sigue' },
            { id: 'b', text: 'No lo bajo: si se ejecuta, mi tesis falló y la pérdida queda acotada' },
            { id: 'c', text: 'Quito el stop, porque el precio de un buen activo siempre termina volviendo' },
            { id: 'd', text: 'Depende de cuánto ya perdí: si es poco, puedo darle más espacio al trade' }
          ],
          correctAnswer: 'b',
          explanation: 'Bajar el stop es la primera vuelta de una espiral: un poco ahora, más después, y al final no hay stop y estás -40%. La versión "razonable" (bajarlo solo un poco por convicción) es justo como empieza. Si el stop se ejecuta, el mercado invalidó tu tesis.'
        },
        {
          id: 'q6',
          question: 'Tu tesis es que SOL respeta su último higher low en $160. ¿Dónde colocas el stop?',
          options: [
            { id: 'a', text: 'Un poco debajo de $160, con un filtro de 1-3% contra las mechas' },
            { id: 'b', text: 'Justo en $160, porque ese es el nivel exacto donde la tesis falla' },
            { id: 'c', text: 'En un 10% fijo bajo la entrada, sin mirar la estructura del gráfico' },
            { id: 'd', text: 'No pongo stop, porque un higher low confirma que la tendencia sigue' }
          ],
          correctAnswer: 'a',
          explanation: 'El stop va donde tu tesis se invalida, con un margen. Ponerlo justo en el nivel obvio es casi correcto, pero ahí se acumulan los stops y una mecha puede sacarte antes de seguir la tendencia. Un porcentaje fijo ignora la estructura, que es la que define si te equivocaste.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Si eres disciplinado, un stop mental funciona igual que una orden de stop real en el exchange.',
          correctAnswer: false,
          explanation: 'Falso. En el momento de la caída, las emociones gritan "va a rebotar" y el stop mental se negocia. Además, si estás dormido o sin conexión, no se ejecuta. Una orden real en el exchange actúa sin pedirte permiso.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Diversificación Inteligente: ¿por qué 10 altcoins distintas no son una diversificación real?',
          options: [
            { id: 'a', text: 'Porque diez son pocas: hacen falta al menos cincuenta posiciones' },
            { id: 'b', text: 'Porque suelen moverse con BTC, y en una caída bajan todas a la vez' },
            { id: 'c', text: 'Porque las altcoins no tienen correlación entre sí ni con BTC' },
            { id: 'd', text: 'Porque en cripto solo las stablecoins cuentan como diversificación' }
          ],
          correctAnswer: 'b',
          explanation: 'La correlación entre altcoins y Bitcoin es alta: cuando BTC cae, las altcoins suelen caer más y al mismo tiempo. Diversificar de verdad es combinar clases de activo distintas, no sumar tokens parecidos. (Lo viste en la lección Diversificación Inteligente.)'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 4,
        title: 'Checkpoint: El Tamaño de la Posición',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Tu capital de trading es $5,000 y arriesgas 1% por operación. Tu stop está 5% debajo de la entrada. ¿Cuál es tu posición máxima?',
            options: [
              '$50: es el 1% del capital, y eso es lo que puedes poner en la posición',
              '$250: es el 5% del capital, igual a la distancia que hay hasta el stop',
              '$1,000: son $50 de riesgo divididos por el 5% de distancia al stop',
              '$5,000: el stop ya limita la pérdida, así que puedes usar todo el capital'
            ],
            correctAnswer: 2,
            explanation: 'Riesgo = $5,000 × 1% = $50. Posición = $50 ÷ 5% = $1,000. Si el stop se ejecuta, pierdes $50, que es justo el 1% que elegiste. Poner $50 en la posición confunde el riesgo con el tamaño: arriesgarías solo $2.50.',
            hint: 'Divide el dinero que aceptas perder entre la distancia al stop.'
          }
        ]
      }
    ]
  },
  23: {
    id: 23,
    title: 'Toma de Ganancias (Take Profit)',
    level: 'Intermedio',
    number: '11 de 12',
    duration: '18 min',
    type: 'Tutorial Práctico',
    description: 'Las ganancias en pantalla no son reales hasta que vendes. Aprende a tomar ganancias escalonadamente, a definir targets antes de entrar, y a proteger lo que ganaste sin dejar que la codicia lo destruya.',
    sections: [
      {
        type: 'intro',
        title: 'Las Ganancias en Papel No Pagan el Alquiler',
        content: 'Imagina un trader que compró SOL a $3 a inicios de 2021. Para noviembre de 2021, el precio superaba los $250, un retorno de 80×. En pantalla era millonario. No vendió ni un solo token. "Va a llegar a $1,000", se dijo. Para 2022, SOL cayó a $8. Su ganancia de 80× se convirtió en un modesto 2.6×. Todavía ganó algo, pero perdió el **97% de sus ganancias** por no tomar nada. Esta historia se repite en CADA ciclo con MILES de personas. Ganan fortunas en papel y terminan con migajas porque nunca aprendieron la habilidad más difícil del trading: **vender**. Comprar es fácil, ves algo que sube y quieres entrar. Vender es doloroso, "¿y si sigue subiendo?" "¿y si pierdo el próximo 10×?". Por eso necesitas un PLAN de salida definido ANTES de entrar.',
        highlight: {
          title: 'Cuando Tomas el Screenshot',
          text: 'Cuando te encuentres tomando capturas de pantalla de tus ganancias para presumir en redes sociales, es una señal clara de euforia. Suele ser el momento de ejecutar tu plan de venta, no de celebrar.'
        }
      },
      {
        type: 'main',
        title: 'Scaling Out: La Estrategia de los Profesionales',
        content: 'La pregunta no es "¿vendo o no vendo?" Es "¿cuánto vendo y a qué precio?" Muchos traders experimentados evitan vender todo de golpe. Usan **scaling out** (venta escalonada): van vendiendo porciones de su posición a medida que el precio sube.',
        features: [
          { icon: Target, title: 'El Framework de Scaling', text: 'Un plan clásico: **25% en +2×** (sacas la mitad de tu inversión original), **25% en +3-5×** (aseguras ganancias reales), **25% en +5-10×** (capitalizas la explosión), **25% moonbag** (dejas correr sin límite). Ajusta los porcentajes según tu convicción y el contexto del mercado.' },
          { icon: CheckCircle, title: 'Por Qué Funciona', text: 'Scaling out elimina el problema de timing perfecto. No necesitas adivinar el techo exacto. Capturas ganancias en cada nivel. Si el precio hace 20× y vendiste parcialmente, capturaste una porción enorme. Si cae después de 3×, ya aseguraste ganancia real.' },
          { icon: Shield, title: 'Break-Even Stop', text: 'Después de tu primera venta parcial, puedes mover tu stop loss al precio de entrada (break-even). Así limitas la pérdida de tu inversión original (salvo slippage). Pero la ganancia acumulada sigue en riesgo, y es tan tuya como el capital inicial: no es "dinero gratis".' }
        ]
      },
      {
        type: 'main',
        title: 'Targets Basados en Análisis Técnico',
        content: 'Tus niveles de take profit no deberían ser arbitrarios. Deberían basarse en la estructura del mercado:',
        features: [
          { icon: BarChart3, title: 'Resistencias como Targets', text: 'Las zonas de resistencia que identificaste en la lección Soportes y Resistencias son targets naturales. Si compraste en soporte en $150 y la próxima resistencia fuerte está en $200, tu primer TP está ahí. La siguiente en $250. Vende donde es más probable que el mercado frene.' },
          { icon: Percent, title: 'Extensiones de Fibonacci', text: 'Las extensiones de Fibonacci (1.618, 2.618, 4.236) son niveles que muchos traders vigilan, así que a veces el precio pausa ahí. La evidencia de que funcionen por sí solas es débil: úsalas como referencia adicional, no como la razón principal de tu target.' },
          { icon: Landmark, title: 'Números Redondos Psicológicos', text: 'BTC a $100K, SOL a $200, ETH a $5K. Los números redondos suelen acumular muchas órdenes de venta. Si tu posición se acerca a un número redondo importante, es un buen lugar para tomar parciales.' }
        ]
      },
      {
        type: 'main',
        title: 'El Concepto del Moonbag',
        content: 'El **moonbag** es la porción de tu posición (10-25%) que dejas correr después de tomar ganancias en el resto. Mucha gente lo trata como si fuera gratis. No lo es: es una ganancia que ya es tuya, que vale lo que vale hoy, y que puedes perder.',
        features: [
          { icon: Zap, title: 'Cómo Funciona', text: 'Compraste 1000 tokens a $1 ($1,000). El precio llega a $5. Vendes 750 tokens a $5 = $3,750: recuperas tu inversión y más. Te quedan 250 tokens (25%), que hoy valen $1,250. Si suben a $50, valdrían $12,500. Si caen a cero, pierdes $1,250 que eran tuyos. Y la venta probablemente generó impuestos sobre la ganancia: revisa la lección Tu Plan de Inversión Personal.' },
          { icon: Shield, title: 'Sin Presión Emocional', text: 'El moonbag reduce la presión: ya aseguraste la mayor parte, y no sientes tanto FOMO si sigue subiendo porque todavía tienes exposición. Pero no es riesgo cero. Dale su propio plan (un trailing stop o un precio de venta), igual que a cualquier otra posición.' },
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
          { icon: Brain, title: 'Dos Sesgos Opuestos', text: 'La evidencia dice algo incómodo. El *efecto disposición* (Shefrin y Statman, 1985; Odean, 1998) muestra que la mayoría de los inversores vende sus ganadoras demasiado pronto y aguanta sus perdedoras demasiado tiempo, para no aceptar la pérdida. En crypto, con subidas extremas, también se ve el error contrario: aferrarse a una ganadora por codicia. Las dos fallas tienen la misma cura: un plan escrito antes de entrar.' },
          { icon: AlertTriangle, title: 'Las Señales de que Deberías Vender', text: 'Estás eufórico y tomando screenshots de ganancias. Tu posición hizo 3×+ en pocos días. Estás fantaseando con cuánto "vas a tener" si sigue subiendo. No puedes dormir porque estás mirando el precio. Si sientes alguna de estas cosas, VENDE AL MENOS UNA PARTE.' },
          { icon: CheckCircle, title: 'La Frase que Salva Portafolios', text: '**"Nadie quebró por tomar ganancias."** Puede que te pierdas el próximo 2× después de vender. Pero nunca perderás lo que ya aseguraste. Y ese capital asegurado vuelve a tu plan: a tu base de largo plazo, a tu fondo de emergencia o a tu capital de trading.' }
        ]
      },
      {
        type: 'main',
        title: 'Tu Plan de Salida: El Template Pre-Trade',
        content: 'Antes de CADA operación, define tu plan de salida por escrito. Aquí tienes el template que deberías completar:',
        features: [
          { icon: Target, title: '1. Entry Price y Razón', text: '¿A qué precio entras y POR QUÉ? "Compro SOL a $160 porque está en soporte semanal con RSI en sobreventa y la estructura sigue alcista."' },
          { icon: Shield, title: '2. Stop Loss y Tamaño', text: '¿Dónde sales si estás equivocado? "Stop en $144 (-10%). Con 2% de riesgo sobre $2,000 de capital de trading ($40), mi posición es $400."' },
          { icon: Zap, title: '3. Targets de Take Profit', text: '"TP1: vendo 25% en $200 (resistencia). TP2: vendo 25% en $250 (número redondo). TP3: vendo 25% en $300 (extensión Fib). Moonbag: 25% corre con trailing stop de 20%."' },
          { icon: Lock, title: '4. La Regla de Hierro', text: '**NO cambiar el plan después de entrar.** El plan se define con la mente fría, ANTES de que las emociones entren en juego. Si cambias targets durante la operación, las emociones ganaron.' },
          { icon: CheckCircle, title: '5. Registra Cada Venta', text: 'Anota fecha, cantidad, precio de compra y precio de venta. Cada toma de ganancias puede generar impuestos, y sin registro no podrás calcularlos. Lo viste en la lección Tu Plan de Inversión Personal.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Vendiendo con Estrategia, No con Emoción',
        items: [
          'Las ganancias en pantalla NO son reales hasta que vendes. Muchas personas que "fueron millonarias en crypto" en papel terminaron con una fracción porque nunca vendieron.',
          'Scaling out (venta escalonada) suele ser mejor que vender todo de golpe. Capturas ganancias en cada nivel, mantienes exposición con el moonbag, y minimizas el arrepentimiento.',
          'Después de tu primera venta parcial, puedes mover tu stop a break-even para proteger tu inversión original. La ganancia que queda sigue siendo tuya y sigue en riesgo: no es dinero gratis.',
          'El moonbag (10-25% que dejas correr) te deja exposición sin tanta presión emocional, pero no está libre de riesgo: dale su propio plan. Y solo tiene sentido DESPUÉS de tomar ganancias significativas en el otro 75-90%.',
          'Define tu plan de salida ANTES de entrar: entry, stop loss, targets de TP escalonados. No lo cambies durante la operación, y registra cada venta: puede generar impuestos.',
          'Cuando te encuentres tomando screenshots de ganancias, fantaseando sobre precios futuros, o sin poder dormir, VENDE al menos una parte. Tu propia euforia es una de las mejores alarmas para ejecutar tu plan.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tu posición está +300% en 3 días y tu cerebro dice "HODL hasta la luna". ¿Qué opción es la más prudente?',
          options: [
            { id: 'a', text: 'No vendo nada, porque si hizo 300% en tres días puede hacer 1000% más' },
            { id: 'b', text: 'Vendo una parte según mi plan y subo el stop a break-even para el resto' },
            { id: 'c', text: 'Compro más, porque una subida tan fuerte muestra que la tendencia sigue' },
            { id: 'd', text: 'Subo mis targets, porque el momentum es mayor de lo que había planeado' }
          ],
          correctAnswer: 'b',
          explanation: 'Vender una parte convierte ganancia en pantalla en dinero real, y el stop en break-even protege tu inversión en lo que queda. Subir los targets suena a ajuste profesional, pero es la codicia reescribiendo el plan en caliente. Recuerda que la venta puede generar impuestos.'
        },
        {
          id: 'q2',
          question: '¿Qué estrategia de salida propone esta lección para no depender de adivinar el techo?',
          options: [
            { id: 'a', text: 'Vender todo de una vez cuando el precio llegue al techo exacto del ciclo' },
            { id: 'b', text: 'No vender nunca, porque mantener siempre gana en el largo plazo en cripto' },
            { id: 'c', text: 'Vender solo cuando un influencer con buen historial diga que es momento' },
            { id: 'd', text: 'Vender por tramos en varios targets y dejar un moonbag pequeño al final' }
          ],
          correctAnswer: 'd',
          explanation: 'Scaling out reparte la salida en niveles (por ejemplo 25% en 2×, 25% en 3-5×, 25% en 5-10× y un moonbag), así no necesitas acertar el techo. No maximiza el resultado perfecto en teoría, pero asegura ganancias reales en el camino. Vender todo en el techo exacto exige saber dónde está, y nadie lo sabe.'
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: 'Calcula cuánto vale lo que dejaste correr.',
          textBefore: 'Compraste 1,000 tokens a $1 y vendiste 750 cuando llegaron a $5. Los 250 tokens que te quedan valen hoy $',
          textAfter: 'y siguen en riesgo.',
          correctAnswer: '1250',
          acceptableAnswers: ['1250', '1,250', '1.250', '$1250', '$1,250', '$1.250', '1250 usd', '1250 dolares', '1250 dólares'],
          explanation: '250 tokens × $5 = $1,250. Ya aseguraste $3,750, pero esos $1,250 no son "dinero de la casa": si el token cae a cero, pierdes $1,250 que eran tuyos. El moonbag necesita su propio plan de salida, como cualquier posición.'
        },
        {
          id: 'q4',
          question: '¿Por qué es peligroso subir tu take profit después de entrar a una operación que va ganando?',
          options: [
            { id: 'a', text: 'Porque los exchanges cobran más fees cuando modificas una orden abierta' },
            { id: 'b', text: 'Porque los targets originales siempre se cumplen si tienes paciencia' },
            { id: 'c', text: 'No lo es: ajustar al momentum es lo que hacen los traders profesionales' },
            { id: 'd', text: 'Porque lo decide la codicia, no el plan que hiciste con la mente fría' }
          ],
          correctAnswer: 'd',
          explanation: 'El plan se define antes de entrar, sin emociones en juego. Con una posición ganadora, la codicia pregunta "¿y si llega a 10×?", y subir el target es dejar que esa pregunta decida. El mito de que "los profesionales ajustan al momentum" suele ser la excusa para no vender nunca.'
        },
        {
          id: 'q5',
          question: 'Estás tomando capturas de tus ganancias, no puedes dormir por la emoción y fantaseas con cuánto "vas a tener". ¿Qué indica esto?',
          options: [
            { id: 'a', text: 'Euforia: es el momento de ejecutar tu plan y vender al menos una parte' },
            { id: 'b', text: 'Que vas bien: disfruta el momento y no toques nada hasta que se calme' },
            { id: 'c', text: 'Que deberías comprar más, porque la emoción confirma que la tesis va bien' },
            { id: 'd', text: 'Que es el techo seguro, así que vendes todo y no vuelves a ese token' }
          ],
          correctAnswer: 'a',
          explanation: 'Tu propia euforia es una buena alarma: es cuando más cuesta seguir el plan y cuando más tienta cambiarlo. Esos momentos a menudo coinciden con techos locales, pero no siempre, así que no es una señal de techo seguro: es una señal para ejecutar el plan y vender al menos una parte.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Después de recuperar tu inversión inicial, el moonbag que te queda ya no puede hacerte perder dinero.',
          correctAnswer: false,
          explanation: 'Falso. El moonbag vale lo que vale hoy y es tu dinero. Si cae a cero, pierdes ese valor aunque ya hayas recuperado lo que pusiste al principio. Pensar que es "gratis" lleva a dejarlo sin plan.'
        },
        {
          id: 'q7',
          type: 'ordering',
          question: 'Ordena los pasos de tu plan de salida, desde lo primero que defines hasta lo último que haces.',
          items: [
            'Defino la entrada y el stop loss',
            'Defino los targets escalonados de take profit',
            'Entro a la operación',
            'Vendo por tramos en cada target y registro cada venta'
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: 'Todo el plan se escribe antes de entrar: dónde entras, dónde te equivocaste y dónde vendes. Solo después abres la operación. Registrar cada venta te sirve para el diario y para los impuestos.'
        },
        {
          id: 'review_1',
          question: 'Repaso de El Arte del Stop Loss: un trader pierde 25% de su cuenta. ¿Cuánto necesita ganar para volver al punto de partida?',
          options: [
            { id: 'a', text: '+25%, lo mismo que perdió, porque los porcentajes son simétricos' },
            { id: 'b', text: '+33%, porque el porcentaje se calcula sobre lo que le queda' },
            { id: 'c', text: '+50%, el doble de lo que perdió, por el efecto de las comisiones' },
            { id: 'd', text: '+20%, porque con menos capital cada ganancia pesa más en la cuenta' }
          ],
          correctAnswer: 'b',
          explanation: 'Si tenía $100 y le quedan $75, necesita ganar $25 sobre $75: un 33%. Cuanto mayor la pérdida, peor la asimetría: -50% pide +100%. (Lo viste en la lección El Arte del Stop Loss.)'
        }
      ]
    }
  },
  24: {
    id: 24,
    title: 'Mentalidad de Trader',
    level: 'Intermedio',
    number: '12 de 12',
    duration: '21 min',
    type: 'Psicología',
    description: 'Sin disciplina, ninguna estrategia sobrevive. Aprende a controlar el FOMO, la avaricia, el miedo y la venganza, a medir si tu estrategia tiene ventaja real, y a proteger tu capital.',
    sections: [
      {
        type: 'intro',
        title: 'Tu Mayor Enemigo Eres Tú',
        content: 'Muchos traders saben lo que deberían hacer y aun así no lo hacen. Mueven el stop loss cuando no deberían. Entran por FOMO cuando su plan dice "espera". Cierran una posición ganadora demasiado pronto por miedo a perder las ganancias. Después de una pérdida, doblan el tamaño buscando recuperar rápido. Estos no son errores técnicos. Son errores **emocionales**. Y son exactamente los mismos errores que comete la gran mayoría de los participantes del mercado. En esta lección vas a aprender a identificar los sesgos psicológicos que te sabotean, a construir un sistema que te proteja de ti mismo, y a desarrollar la disciplina que separa a los traders consistentes de los que pierden todo. Una advertencia honesta: la disciplina es necesaria, pero no suficiente. Aunque domines tus emociones, la mayoría de quienes hacen trading activo pierde dinero.',
        highlight: {
          title: 'El Dato que Nadie Quiere Escuchar',
          text: 'Los datos más sólidos vienen de mercados regulados. En Europa, en 2018 la autoridad de mercados (ESMA) analizó los brokers de CFDs, productos apalancados, y encontró que **entre 74% y 89% de las cuentas retail pierde dinero**; desde entonces cada broker debe publicar su porcentaje. En Brasil, un estudio sobre day traders de futuros (Chague, De-Losso y Giovannetti) encontró que **el 97% de quienes persistieron más de 300 días perdió dinero**. En Taiwán, menos del 1% de los day traders fue rentable de forma predecible después de comisiones (Barber, Lee, Liu y Odean). Las causas se suman: costos y comisiones, apalancamiento, competir contra profesionales con mejor información y tecnología, y emociones. Para crypto no hay estadísticas tan buenas, pero no hay razón para pensar que sea más fácil.'
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
          { icon: Users, title: 'Sesgo de Manada', text: '"Todos están comprando X, no puede estar mal". La presión social te lleva a seguir a la multitud. Pero en trading, cuando "todos" están de un lado, es señal de peligro: ¿quién queda para comprar? Muchas de las mejores oportunidades aparecen cuando vas contra el consenso, y eso se siente terrible emocionalmente (aunque ir contra la multitud tampoco garantiza nada). **Antídoto**: Cuando sientas una convicción abrumadora compartida por todos, pregúntate quién está en el otro lado del trade.' }
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
            'Tiene más probabilidades de sobrevivir, que es el requisito para todo lo demás'
          ]
        }
      },
      {
        type: 'main',
        title: 'El Plan de Trading: Tu Escudo Anti-Emociones',
        content: 'Un plan de trading no es una sugerencia, es un **contrato contigo mismo**. Lo escribes cuando estás calmado y racional, y lo sigues cuando estás emocional y tentado. Sin un plan escrito, cada decisión se toma en caliente, y las decisiones en caliente en trading suelen perder dinero a largo plazo.',
        features: [
          { icon: Target, title: 'Qué Debe Incluir tu Plan', text: '(1) **Criterios de entrada**: ¿Qué señales necesitas para abrir un trade? (patrón técnico, señal on-chain, narrativa). (2) **Tamaño de posición**: ¿Qué % de tu capital de trading arriesgas? (nunca más de 1-2% por trade, la regla que ya conoces del stop loss). (3) **Stop loss**: ¿A qué precio sales si te equivocas? (definido ANTES de entrar). (4) **Take profit**: ¿A qué niveles tomas ganancias? (ventas parciales por tramos, como el plan de 25% en 25% de la lección Toma de Ganancias). (5) **Reglas de estado mental**: "No opero si estoy enojado, cansado o ebrio".' },
          { icon: BookOpen, title: 'El Diario de Trading', text: 'Después de cada trade, anota: qué compraste, por qué, a qué precio, stop loss, take profit, y cómo te sentías emocionalmente. Después de 50-100 trades, revisa tu diario. Anota también cuántos R ganaste o perdiste. Vas a descubrir patrones: "siempre pierdo los viernes por la noche", "mis mejores trades son cuando estoy calmado", "el revenge trading me costó un 30% de mi capital de trading". El diario convierte errores emocionales en datos accionables.' }
        ]
      },
      {
        type: 'main',
        title: 'Técnicas Prácticas de Control Emocional',
        content: 'La disciplina no es un rasgo de personalidad, es un sistema. Estas técnicas, que usan muchos traders, te ayudan a mantener el control cuando las emociones gritan:',
        features: [
          { icon: Clock, title: 'La Regla de las 24 Horas', text: 'Nunca actúes por impulso. Cuando sientas FOMO o urgencia, espera 24 horas. Si después de 24 horas el trade todavía tiene sentido según tu plan, ejecútalo. La mayoría de los impulsos desaparecen. Esta simple regla te salva de los peores errores.' },
          { icon: Lock, title: 'El Presupuesto de Riesgo Diario', text: 'Define un máximo de pérdida diaria (ejemplo: -3% de tu capital de trading). Si llegas a ese límite, cierras todo y no operas más ese día. Sin excepciones. Los casinos ponen límites a los jugadores, tú debes ponerte límites a ti mismo.' },
          { icon: RefreshCw, title: 'La Desconexión Programada', text: 'Después de un trade grande (ganes o pierdas), aléjate de las pantallas mínimo 1-2 horas. Sal a caminar, haz ejercicio, llama a alguien. Muchos de los peores trades se hacen justo después de un trade emocional. Rompe el ciclo con distancia física.' },
          { icon: CheckCircle, title: 'El Checklist Pre-Trade', text: 'Antes de cada trade, responde estas preguntas en voz alta o escríbelas: "¿Esto está en mi plan?", "¿Cuánto pierdo si me equivoco?", "¿Estoy entrando por análisis o por emoción?", "¿Puedo dormir tranquilo con esta posición?". Si alguna respuesta te incomoda, no entres.' }
        ]
      },
      {
        type: 'main',
        title: 'Expectativa: El Win Rate No Lo Es Todo',
        content: 'Un win rate alto no te dice si una estrategia gana dinero. Lo que importa es la **expectativa**: cuánto ganas o pierdes en promedio por trade, contando comisiones. Mídela en "R", la cantidad que arriesgas en cada operación (si tu stop te hace perder $40, 1R = $40).',
        features: [
          { icon: Percent, title: 'La Fórmula', text: '**Expectativa = (% de aciertos × ganancia promedio) − (% de fallos × pérdida promedio) − costos.** Si es positiva después de muchos trades, la estrategia tiene ventaja. Si es negativa, ninguna disciplina la salva.' },
          { icon: BarChart3, title: 'Tres Traders, Tres Resultados', text: 'Trader A: 70% de aciertos, gana 0.5R y pierde 1.5R: 0.35 − 0.45 = **−0.1R por trade**. Pierde dinero ganando casi siempre. Trader B: 40% de aciertos, gana 2.5R y pierde 1R: 1.0 − 0.6 = **+0.4R**. Gana perdiendo la mayoría de las veces. Trader C: 60% de aciertos, gana 1R y pierde 1R, pero paga 0.15R en comisiones y slippage por trade: 0.6 − 0.4 − 0.15 = **+0.05R**. Casi todo su margen se lo comen los costos.' },
          { icon: AlertTriangle, title: 'Por Qué Importa', text: 'La mayoría de las estrategias retail tiene expectativa cercana a cero antes de costos, y negativa después. Por eso el diario de trading debe registrar R ganados y perdidos, no solo si acertaste. Sin 100-200 trades registrados, no sabes cuál es tu expectativa real.' }
        ]
      },
      {
        type: 'main',
        title: 'La Varianza: Tu Amiga Incomprendida',
        content: 'Este es quizás el concepto más importante y menos entendido del trading. Un trader con un **60% de win rate** (gana 6 de cada 10 trades) va a tener rachas de 5, 7 y a veces 8 pérdidas seguidas. Esto no significa que su estrategia esté rota, es **matemáticamente inevitable**. Se llama varianza, y entenderla cambia todo.',
        features: [
          { icon: BarChart3, title: 'Los Números No Mienten', text: 'Con un 60% de win rate, la probabilidad de sufrir una racha de 5 pérdidas seguidas en 100 trades es de ~46%: prácticamente una moneda al aire. En 200 trades sube a ~71%. Incluso una racha de 7 pérdidas aparece en ~18% de los casos con 200 trades (y de 8, en ~7%). Es decir: te va a pasar, y no significa que tu estrategia esté rota. Si cambias tu estrategia cada vez que pierdes 3 seguidos, nunca sabrás si funciona. Necesitas mínimo 100-200 trades para evaluar un sistema.' },
          { icon: PiggyBank, title: 'Gestión de Capital + Varianza', text: 'Si arriesgas el 2% por trade, 5 pérdidas seguidas = -10%. Recuperable. Si arriesgas el 10% por trade, 5 pérdidas seguidas = -50%. Casi imposible de recuperar (necesitas +100% solo para volver a 0). La gestión de riesgo no es opcional, es lo que te permite sobrevivir la varianza inevitable.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Tu Armadura Psicológica',
        items: [
          'Muchas pérdidas en trading vienen de errores emocionales, y el resto de costos y apalancamiento. FOMO, avaricia, miedo y revenge trading son los 4 demonios que debes controlar para tener siquiera una oportunidad.',
          'Los sesgos cognitivos (confirmación, anclaje, manada) distorsionan tu percepción sin que te des cuenta. El antídoto es buscar activamente la tesis contraria antes de cada trade.',
          'Un plan de trading escrito es tu escudo anti-emociones. Lo creas en frío (racional) y lo sigues en caliente (emocional). Sin plan escrito, cada decisión es una apuesta.',
          'Técnicas prácticas: regla de 24 horas contra el FOMO, presupuesto de riesgo diario (-3% máximo), desconexión programada después de trades emocionales, y checklist pre-trade para validar cada entrada.',
          'Lo que importa es la expectativa, no el win rate: puedes ganar 70% de las veces y perder dinero. Mídela en R, con costos incluidos.',
          'La varianza es matemáticamente inevitable: con 60% win rate, tendrás rachas de 5-8 pérdidas seguidas. Por eso necesitas gestión de riesgo (1-2% por trade) y mínimo 100-200 trades para evaluar cualquier estrategia.',
          'El diario de trading es tu herramienta más poderosa. Convierte errores emocionales repetitivos en datos que puedes analizar y corregir. Después de 50-100 trades, los patrones son evidentes.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Llevas 5 trades perdedores seguidos respetando tu plan al pie de la letra, y tu stop se ejecutó bien en todos. Tu estrategia tiene 60% de win rate. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Subo el tamaño del próximo trade para recuperar las pérdidas más rápido' },
            { id: 'b', text: 'Sigo igual: con 60% de win rate, 5 pérdidas seguidas son varianza normal' },
            { id: 'c', text: 'Cambio de estrategia, porque 5 pérdidas seguidas prueban que no funciona' },
            { id: 'd', text: 'Sigo igual, pero sin stops, porque fueron los stops los que me sacaron' }
          ],
          correctAnswer: 'b',
          explanation: 'Con 60% de win rate, la probabilidad de una racha de 5 pérdidas en 100 trades es de ~46%, y en 200 trades sube a ~71%. Es varianza, no una estrategia rota. Subir el tamaño o cambiar de sistema por frustración es revenge trading disfrazado, y quitar los stops convierte una racha normal en una ruina.'
        },
        {
          id: 'q2',
          question: 'Un token subió 80% en 4 horas, Crypto Twitter está lleno de "to the moon" y sientes una urgencia intensa de comprar. ¿Cuál es la mejor respuesta?',
          options: [
            { id: 'a', text: 'Compro ya, antes de que siga subiendo, para no perderme esta oportunidad' },
            { id: 'b', text: 'Aplico la regla de 24 horas y entro solo si mañana cumple mis criterios' },
            { id: 'c', text: 'Compro la mitad ahora y la otra mitad mañana, como un punto intermedio' },
            { id: 'd', text: 'Dejo de mirar precios para siempre, porque así el FOMO nunca aparece' }
          ],
          correctAnswer: 'b',
          explanation: 'El FOMO empuja a comprar después de una subida enorme, cuando el riesgo es máximo. La regla de 24 horas deja pasar el impulso: si mañana el trade todavía cumple tus criterios escritos, es una entrada racional. Comprar "la mitad" parece un compromiso sensato, pero sigue siendo una decisión tomada por la urgencia.'
        },
        {
          id: 'q3',
          question: 'Compraste SOL a $250 y ahora está a $160. La tesis macro que te hizo comprar cambió, pero piensas: "aguanto hasta que vuelva a $250". ¿Qué sesgo está actuando?',
          options: [
            { id: 'a', text: 'Manada: decides solo porque otras personas te dicen que el precio va a subir' },
            { id: 'b', text: 'FOMO: tienes miedo de perderte la recuperación si decides vender ahora' },
            { id: 'c', text: 'Anclaje: tu precio de compra guía la decisión, aunque al mercado no le importa' },
            { id: 'd', text: 'Confirmación: buscas solo las opiniones que coinciden con lo que ya crees tú' }
          ],
          correctAnswer: 'c',
          explanation: 'Tu precio de compra es un dato solo para ti: el mercado no sabe cuánto pagaste. La pregunta útil es "si no tuviera esta posición, ¿la abriría hoy a $160 con la tesis actual?". Si la respuesta es no, el $250 no es una razón para quedarte.'
        },
        {
          id: 'q4',
          question: 'Acabas de cerrar un trade con -15%. Estás frustrado y ves otra "oportunidad" que parece cumplir tu plan. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Entro con el doble de tamaño para recuperar la pérdida lo antes posible hoy' },
            { id: 'b', text: 'Entro ya con tamaño normal: si el setup es bueno, la emoción no importa' },
            { id: 'c', text: 'Le pido a un trader con más experiencia que decida el trade por mí' },
            { id: 'd', text: 'Me alejo un par de horas y vuelvo a evaluar el setup cuando esté en calma' }
          ],
          correctAnswer: 'd',
          explanation: 'Después de una pérdida fuerte, tu estado emocional forma parte del riesgo. Entrar "con tamaño normal porque el setup es bueno" suena disciplinado, pero ignora que tu juicio está alterado. Si el setup es bueno de verdad, seguirá siéndolo en dos horas.'
        },
        {
          id: 'q5',
          question: '¿Cuántos trades necesitas, como mínimo, para evaluar con algo de confianza si tu estrategia funciona?',
          options: [
            { id: 'a', text: 'Entre 10 y 20 trades bastan para saber con certeza si la estrategia funciona' },
            { id: 'b', text: 'Uno solo, si es un trade ganador ejecutado exactamente según el plan' },
            { id: 'c', text: 'Cincuenta como máximo; si no gana para entonces, la descarto y cambio' },
            { id: 'd', text: 'Al menos 100-200, porque con menos el resultado se confunde con la suerte' }
          ],
          correctAnswer: 'd',
          explanation: 'Con 10-20 trades, cualquier resultado es indistinguible de la suerte. Con 100-200 ejecutados con disciplina puedes medir win rate, expectativa y drawdown real. Cambiar de estrategia cada pocos trades garantiza que nunca sabrás si alguna funcionaba.'
        },
        {
          id: 'q6',
          type: 'fill-blank',
          question: 'Calcula la expectativa de una estrategia en R.',
          textBefore: 'Ganas el 70% de tus trades con +1R y pierdes el 30% con -3R. Tu expectativa por trade es de',
          textAfter: 'R.',
          correctAnswer: '-0.2',
          acceptableAnswers: ['-0.2', '-0,2', '-0.20', '-0,20', '-.2', '- 0.2', '−0.2', '−0,2', '-0.2r', '-0,2r'],
          explanation: 'Expectativa = 0.70 × 1R − 0.30 × 3R = 0.70 − 0.90 = −0.2R por trade. Ganas 7 de cada 10 veces y aun así pierdes dinero, porque las pérdidas son tres veces más grandes que las ganancias. Por eso el win rate solo no dice nada.'
        },
        {
          id: 'q7',
          type: 'multiple-select',
          question: '¿Cuáles de estos son los 4 demonios del trading que describe esta lección? Selecciona todos los que apliquen.',
          options: [
            { id: 'a', text: 'FOMO' },
            { id: 'b', text: 'Paciencia' },
            { id: 'c', text: 'Avaricia' },
            { id: 'd', text: 'Miedo' },
            { id: 'e', text: 'Diversificación' },
            { id: 'f', text: 'Revenge trading' }
          ],
          correctAnswers: [0, 2, 3, 5],
          explanation: 'FOMO, avaricia, miedo y revenge trading son las cuatro emociones que más cuentas destruyen. La paciencia y la diversificación son justamente parte del antídoto.'
        },
        {
          id: 'q8',
          question: '¿Cuál es la herramienta más poderosa para mejorar tu psicología de trading a largo plazo?',
          options: [
            { id: 'a', text: 'Copiar los trades de traders famosos que publican sus entradas en X' },
            { id: 'b', text: 'Un bot automático, porque elimina por completo las emociones del proceso' },
            { id: 'c', text: 'Más indicadores en el gráfico, para que cada decisión sea más objetiva' },
            { id: 'd', text: 'Un diario de trading con cada operación y tu estado emocional al operar' }
          ],
          correctAnswer: 'd',
          explanation: 'El diario convierte errores repetidos en datos. Tras 50-100 trades registrados aparecen patrones como "pierdo cuando opero de noche" o "gano cuando no toco el plan". Un bot no elimina las emociones: las traslada a cuándo lo enciendes, lo apagas o lo modificas.'
        }
      ]
    }
  },
  25: {
    id: 25,
    title: 'Jupiter: El Rey de los DEXs',
    level: 'Avanzado',
    number: '2 de 13',
    duration: '21 min',
    type: 'Tutorial Práctico',
    description: 'Jupiter es el agregador de liquidez más usado de Solana: compara precios entre muchos pools y suma DCA, órdenes límite y perpetuos. Aprende a usarlo bien, a verificar tokens y a reconocer qué funciones guardan tus fondos y cuáles son riesgos, no ventajas.',
    sections: [
      {
        type: 'intro',
        title: 'Por Qué Jupiter Cambió las Reglas del Juego',
        content: 'Imagina que quieres cambiar 1,000 USDC por SOL. En Binance, usas el orderbook de Binance y obtienes SU precio. En Jupiter, el protocolo busca **simultáneamente** en Raydium, Orca, Phoenix, Meteora, y docenas de otros pools de liquidez para encontrarte el mejor precio posible. Si dividir tu orden entre 3 pools diferentes te da un mejor precio, Jupiter lo hace automáticamente en una sola transacción. Esto se llama **agregación de liquidez**, y es la razón por la que Jupiter puede competir en precio con exchanges centralizados en swaps de tamaño mediano. Pero Jupiter va mucho más allá de swaps simples. Es una plataforma completa de trading descentralizado con DCA automático, órdenes límite, perpetuos con apalancamiento, y un launchpad para nuevos tokens. En un swap no entregas la custodia de tus fondos a nadie. Las órdenes programadas sí guardan tus fondos mientras esperan; lo verás abajo.',
        highlight: {
          title: 'El Dato que Importa',
          text: 'En Solana, una gran parte del volumen de swaps pasa por Jupiter. Puede rutear casi cualquier token con liquidez, y eso incluye copias y estafas: que un token aparezca en Jupiter no lo valida. La insignia verde de verificado indica cuál es el token canónico para ese nombre, no que sea buena inversión. Para tokens nuevos, compara la dirección del mint (el identificador único del token) con la que publica el proyecto oficial.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona la Agregación de Liquidez',
        content: 'Cuando haces un swap en Jupiter, ocurre algo sofisticado detrás de escena que te beneficia enormemente como usuario:',
        features: [
          { icon: Search, title: 'Descubrimiento de Rutas', text: 'Jupiter analiza todos los pools de liquidez disponibles en Solana en milisegundos. Evalúa el precio, la profundidad de liquidez, y el slippage en cada uno. Si tienes una orden de $5,000, puede que el mejor precio sea dividirla: $3,000 por Raydium y $2,000 por Orca, Jupiter calcula esto automáticamente y ejecuta todo en una sola transacción atómica.' },
          { icon: Zap, title: 'Mejor Precio Habitual', text: 'El resultado es que casi siempre obtienes mejor precio que usando cualquier DEX individual directamente. Para órdenes pequeñas (<$1,000), la diferencia puede ser mínima. Pero para órdenes de $5,000+, la diferencia puede ser del 0.5-2%, que en trading activo se acumula rápidamente. No es una garantía absoluta: en tokens ilíquidos o con fallos de ruta, revisa el price impact antes de firmar.' },
          { icon: Shield, title: 'Sin Custodia, Sin Permisos', text: 'A diferencia de Binance o cualquier CEX, Jupiter nunca toca tus fondos. Conectas tu wallet, firmas la transacción, y los tokens van directamente de tu wallet al pool y de vuelta. Si Jupiter desapareciera mañana, tus fondos siguen en tu wallet. En un swap no hay riesgo tipo FTX, aunque sí riesgo de smart contract y de interfaz: un sitio falso o comprometido puede pedirte firmar otra cosa.' }
        ],
        highlight: {
          title: '¿Por Qué Importa?',
          text: '¿Por qué usar un DEX en vez de Binance? Porque en un DEX, TÚ controlas tus fondos. Nadie puede congelar tu cuenta de Jupiter, aunque algunos tokens sí pueden congelarse: Circle (USDC) y Tether (USDT) pueden congelar saldos de sus tokens en Solana. Y no hay KYC, lo que también significa que nadie te protege de tus propios errores.'
        }
      },
      {
        type: 'glossary',
        terms: [
          {
            term: 'Slippage',
            definition: 'La diferencia entre el precio que esperabas y el precio al que realmente se ejecutó tu orden. Ejemplo: ves SOL a $180 y haces un swap de 1,000 USDC. Para cuando tu transacción se confirma (medio segundo después), el precio subió a $181. Recibes menos SOL del que esperabas, eso es slippage. Ocurre porque entre que firmas la transacción y se ejecuta, otros traders pueden haber movido el precio, o tu propia orden puede haber afectado la liquidez del pool.',
            whyItMatters: '"Slippage tolerance" en Jupiter es el límite de slippage que aceptas antes de que la transacción falle. Demasiado bajo (0.1%) y las órdenes fallan seguido. Demasiado alto (5%+) y le das margen a un bot para hacerte un sandwich (lo verás en la próxima lección, MEV: El Impuesto Invisible). En modo Ultra, Jupiter calcula el slippage automáticamente; en modo Manual, 0.5% es un punto de partida razonable para tokens principales (SOL, USDC).'
          }
        ]
      },
      {
        type: 'main',
        title: 'Tutorial: Tu Primer Swap en Jupiter',
        content: 'Hacer un swap en Jupiter es más simple de lo que parece. Una vez que lo haces una vez, se vuelve segunda naturaleza:',
        features: [
          { icon: Globe, title: 'Paso 1: Conecta tu Wallet', text: 'Escribe jup.ag tú mismo (o usa un marcador guardado) y haz clic en "Connect Wallet". Selecciona Phantom (o tu wallet preferida). Aprueba la conexión. Jupiter NO pide tu frase semilla ni permisos especiales, solo conexión básica para firmar transacciones.' },
          { icon: Wallet, title: 'Paso 2: Selecciona tus Tokens', text: 'Arriba: el token que quieres vender (ejemplo: USDC). Abajo: el token que quieres comprar (ejemplo: SOL). Ingresa la cantidad. Jupiter muestra automáticamente el precio, la ruta, el slippage estimado y cuántos tokens recibirás. Si buscas un token por nombre, revisa la insignia de verificado y, si es nuevo, que la dirección del mint coincida con la oficial: hay copias con el mismo nombre y logo.' },
          { icon: Activity, title: 'Paso 3: Revisa y Confirma', text: 'Revisa el "Price Impact" (idealmente <0.5% para órdenes normales). Haz clic en "Swap", firma la transacción en Phantom, y en un par de segundos los tokens aparecen en tu wallet. Sobre los fees: el modo Ultra (el que usa jup.ag por defecto) cobra según el par, desde 0% en algunos pares estables, 0.1% en la mayoría de tokens y hasta 0.5% en tokens con menos de un día de vida. El modo Manual no cobra fee de Jupiter, pero tampoco trae protección contra MEV.' },
          { icon: AlertTriangle, title: 'Configuración Avanzada', text: 'Para órdenes grandes, mira primero el price impact: si supera ~1%, la liquidez no alcanza para tu tamaño. Divide la compra en el tiempo (por ejemplo con una orden DCA) o usa una orden límite. El modo Ultra envía tus transacciones de forma privada para reducir el MEV; el modo Manual no ofrece esa protección, así que ahí mantén el slippage bajo. Para tokens con poca liquidez, no subas el slippage a 5%: es invitar a un bot. Reduce el monto o usa una orden límite.' }
        ]
      },
      {
        type: 'main',
        title: 'DCA Automático: Invierte Sin Emociones',
        content: 'Jupiter ofrece órdenes DCA (en algún momento se llamaron Recurring): compras programadas que se ejecutan solas. No necesitas recordar comprar cada semana, pero sí entender dónde quedan tus fondos mientras tanto:',
        features: [
          { icon: Clock, title: 'Cómo Funciona', text: 'Depositas USDC (o cualquier token) en una orden DCA de Jupiter. Configuras: qué comprar (SOL, BTC, etc.), con qué frecuencia (cada minuto, hora, día, semana), y por cuánto tiempo. Jupiter ejecuta las compras automáticamente al mejor precio disponible en cada intervalo. Los tokens comprados van directamente a tu wallet.' },
          { icon: PiggyBank, title: 'Ventajas vs DCA Manual', text: 'Una vez configurada, no tienes que decidir cada semana, y eso reduce la tentación de pausar por pánico o comprar de más por FOMO. Puedes cancelar cuando quieras, así que la disciplina sigue siendo tuya. El costo: un fee por cada compra ejecutada (alrededor de 0.1%), más el fee de red de Solana.' },
          { icon: Lock, title: 'Seguridad', text: 'Mientras la orden está activa, el saldo pendiente sale de tu wallet y espera en una cuenta gestionada por Jupiter hasta ejecutarse. Eso suma un riesgo que un swap normal no tiene. Puedes cancelar en cualquier momento y recuperar lo no usado. No dejes ahí más de lo que piensas comprar en las próximas semanas.' }
        ]
      },
      {
        type: 'main',
        title: 'Limit Orders: Compra a Tu Precio',
        content: 'Las órdenes límite de Jupiter (parte de sus órdenes trigger, que también incluyen stop loss y take profit) se ejecutan automáticamente cuando el precio llega a tu objetivo, parecido a un exchange centralizado:',
        features: [
          { icon: Target, title: 'Cómo Usarlas', text: 'Ejemplo: SOL está a $180 y quieres comprar a $160. Creas una Limit Order: "Comprar SOL con 500 USDC cuando el precio sea $160 o menos". La orden se queda activa hasta que se ejecute o la canceles. Si SOL baja a $160, Jupiter ejecuta automáticamente tu compra al mejor precio disponible.' },
          { icon: Crosshair, title: 'Casos de Uso', text: '(1) Comprar dips automáticamente, configuras la orden y te olvidas. (2) Tomar ganancias, "Vender 10 SOL si llega a $250". (3) Entrar en tokens nuevos a buen precio sin tener que monitorear constantemente. Las Limit Orders son la herramienta favorita de traders que no quieren estar pegados a la pantalla.' },
          { icon: AlertTriangle, title: 'Limitaciones', text: 'Mientras la orden está abierta, tus tokens quedan en una bóveda custodiada, fuera de tu wallet. La orden depende de que haya liquidez al precio objetivo: en tokens poco líquidos puede ejecutarse parcialmente, con slippage o no ejecutarse. Y hay un fee pequeño en la ejecución.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Jupiter vs Exchange Centralizado (Binance)',
        leftSide: {
          title: 'Jupiter (DEX)',
          points: [
            'Swaps sin custodia (las órdenes programadas sí guardan tus fondos mientras esperan)',
            'Sin KYC ni verificación de identidad',
            'Acceso a casi cualquier token de Solana, incluidas copias y estafas: verifica el mint',
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
        content: 'Jupiter también ofrece contratos perpetuos (perps) con apalancamiento de hasta 250× en SOL, ETH y BTC. Que la plataforma lo permita no lo hace razonable: con 250×, un movimiento de 0.4% en tu contra te liquida. Trátalo como un riesgo que debes entender, no como una función que debas usar:',
        features: [
          { icon: TrendingUp, title: 'Qué Son los Perpetuos', text: 'Un contrato perpetuo te permite apostar a que un activo sube (long) o baja (short) con capital prestado. Con 10× apalancamiento, $100 controlan $1,000. Si el precio sube 10%, ganas $100 (100% de tu capital). Si baja 10%, pierdes todo. Es una herramienta de doble filo que amplifica tanto ganancias como pérdidas.' },
          { icon: AlertTriangle, title: 'El Riesgo Real', text: 'La inmensa mayoría de traders que usan apalancamiento alto pierden dinero. Con 10×, un movimiento de 10% en tu contra te liquida completamente. El mercado crypto es volátil, movimientos de 10% ocurren regularmente. Si recién empiezas, NO uses perpetuos. Domina primero el spot trading sin apalancamiento.' },
          { icon: BarChart3, title: 'Si Decides Usarlos', text: 'Usa solo tu capital de trading (lo definiste en Velas Japonesas y Tendencias), nunca tu base de DCA. Apalancamiento bajo (2-3× como máximo mientras aprendes), stop loss definido ANTES de entrar, y arriesga 1-2% de ese capital por operación. Además del precio, pagas fees de apertura y cierre y un costo por hora mientras la posición sigue abierta.' }
        ]
      },
      {
        type: 'main',
        title: 'Explícalo Tú: El Test de Feynman',
        content: 'Richard Feynman, premio Nobel de Física, decía: "Si no puedes explicar algo de forma simple, no lo entiendes realmente." Pon a prueba tu comprensión:',
        features: [
          { icon: Brain, title: 'El Reto', text: 'Explícale a CBas cómo funciona un swap en Jupiter, desde que haces clic hasta que los tokens llegan a tu wallet.' },
          { icon: MessageSquare, title: 'Usa CBas AI', text: 'Selecciona cualquier texto de esta lección y haz clic en "Explicar con CBas" para profundizar. O abre el chat y explícale el concepto en tus propias palabras, CBas te dirá si tu explicación es correcta.' }
        ],
        highlight: {
          title: 'Por Qué Funciona',
          text: 'Investigaciones en psicología del aprendizaje (por ejemplo, Nestojko y colegas, 2014) encontraron que preparar una explicación para otros mejora el recuerdo de las ideas principales. El efecto es moderado, pero real: explicar te obliga a ordenar lo que sabes y te muestra lo que todavía no entiendes.'
        }
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Dominando Jupiter',
        items: [
          'Jupiter es el agregador central de Solana: busca el mejor precio entre todos los DEXs y ejecuta swaps óptimos automáticamente. Para la mayoría de swaps, ofrece mejor ejecución que exchanges centralizados.',
          'Las órdenes DCA de Jupiter automatizan tus compras y reducen las decisiones emocionales. Mientras esperan, el saldo pendiente queda fuera de tu wallet: no dejes más de lo necesario.',
          'Limit Orders te permiten comprar dips y tomar ganancias automáticamente sin monitorear precios constantemente. Ideales para traders que no quieren estar pegados a la pantalla.',
          'Los swaps de Jupiter son sin custodia: no hay riesgo de quiebra tipo FTX. Pero las órdenes DCA y trigger guardan tus fondos mientras esperan, y cualquier token puede aparecer en Jupiter: verifica la insignia y el mint.',
          'Los perpetuos permiten hasta 250×, y eso es un riesgo, no una ventaja. Si los usas, solo con capital de trading, apalancamiento bajo y stop loss definido. Si eres nuevo, domina el spot primero.',
          'Usa el modo Ultra para tener protección contra MEV y slippage automático (el modo Manual no la trae), revisa siempre el price impact, y si es alto, divide la compra en el tiempo en vez de subir el slippage.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Vas a cambiar 5,000 USDC por SOL y Jupiter te muestra una ruta que pasa 60% por Raydium y 40% por Orca. ¿Por qué divide la orden?',
          options: [
            { id: 'a', text: 'Porque repartirla entre pools reduce el price impact total frente a usar uno solo' },
            { id: 'b', text: 'Porque cada DEX limita el tamaño de un swap y Jupiter debe partirlo en dos' },
            { id: 'c', text: 'Porque así cobra dos comisiones distintas, una por cada pool que usa la ruta' },
            { id: 'd', text: 'Porque envía una parte a un exchange centralizado para conseguirte un mejor precio' }
          ],
          correctAnswer: 'a',
          explanation: 'Cada pool mueve más el precio cuanto más le compras. Repartir la orden entre varios pools hace que ninguno se mueva demasiado, y el precio promedio queda mejor. Todo ocurre en una sola transacción. La idea de un "límite por DEX" es la confusión más común: los pools no tienen un tope fijo, solo se vuelven más caros a medida que les compras más.'
        },
        {
          id: 'q2',
          question: 'Programas una orden DCA en Jupiter: $100 USDC por SOL cada semana durante 6 meses, y depositas $2,600. ¿Dónde está el USDC que todavía no se ha usado?',
          options: [
            { id: 'a', text: 'En la cuenta de la orden DCA, fuera de tu wallet, hasta que se use o canceles' },
            { id: 'b', text: 'En tu wallet: Jupiter solo lo toma en el momento exacto de cada compra semanal' },
            { id: 'c', text: 'En una cuenta de Jupiter dentro de un exchange centralizado que lo custodia' },
            { id: 'd', text: 'Ya convertido en SOL, porque la orden compra todo el primer día y lo va liberando' }
          ],
          correctAnswer: 'a',
          explanation: 'Al crear la orden, el USDC sale de tu wallet y queda en la cuenta de la orden. Cada semana se usa una parte y el SOL llega a tu wallet. Puedes cancelar y recuperar lo que falta. Creer que el dinero sigue en tu wallet es el error tentador: mientras la orden está abierta, ese saldo depende del programa de Jupiter, así que no dejes más de lo necesario.'
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'Una orden límite de compra en Jupiter garantiza que compres al precio que fijaste en cuanto el mercado toque ese precio.',
          correctAnswer: false,
          explanation: 'Falso. La orden se ejecuta si hay liquidez suficiente a ese precio cuando llega. En tokens poco líquidos o en movimientos bruscos puede no ejecutarse, o hacerlo solo en parte. Y mientras espera, tus fondos están en una bóveda de Jupiter, no en tu wallet.'
        },
        {
          id: 'q4',
          question: 'Buscas JUP en Jupiter y aparecen dos tokens con el mismo nombre y el mismo logo. Uno tiene la insignia de verificado. ¿Qué haces antes de comprar?',
          options: [
            { id: 'a', text: 'Elijo el verificado y confirmo que su mint coincide con el que publica el proyecto' },
            { id: 'b', text: 'Elijo el de más volumen en 24 horas, porque las copias nunca tienen volumen real' },
            { id: 'c', text: 'Elijo cualquiera: si Jupiter los lista, los dos pasaron antes una revisión de seguridad' },
            { id: 'd', text: 'Elijo el más barato, porque la diferencia de precio entre ellos es solo arbitraje' }
          ],
          correctAnswer: 'a',
          explanation: 'La insignia indica cuál es el token canónico, y el mint (su dirección) es la prueba definitiva: compáralo con el que publica el proyecto en su web o su X oficial. Jupiter lista casi cualquier token, así que aparecer en la lista no es una revisión de seguridad. El volumen tampoco sirve de filtro: una copia puede inflarlo con operaciones entre sus propias wallets.'
        },
        {
          id: 'q5',
          question: 'Vas a cambiar $20,000 USDC por un token mediano y Jupiter te muestra un price impact de 3%. ¿Qué es lo más sensato?',
          options: [
            { id: 'a', text: 'Subir el slippage al 10% en modo Manual para que la transacción no llegue a fallar' },
            { id: 'b', text: 'Dividir la compra en varias órdenes a lo largo del tiempo o usar una orden límite' },
            { id: 'c', text: 'Hacer el swap de una vez, porque el price impact se recupera cuando el precio se calma' },
            { id: 'd', text: 'Pasar de Ultra a Manual, porque en Manual el price impact se calcula más bajo' }
          ],
          correctAnswer: 'b',
          explanation: 'Un price impact de 3% significa que la liquidez disponible no alcanza para tu tamaño: tu propia compra sube el precio. Dividirla en el tiempo deja que la liquidez se recupere entre compras. Subir el slippage es la tentación más peligrosa: no reduce el impacto y deja espacio para que un bot te haga un sandwich, sobre todo en Manual, que no tiene protección MEV.'
        },
        {
          id: 'q6',
          question: '¿Cuál es la diferencia que más te importa entre el modo Ultra y el modo Manual de Jupiter?',
          options: [
            { id: 'a', text: 'Ultra usa más pools en la ruta; Manual solo usa el pool más grande de toda Solana' },
            { id: 'b', text: 'Ultra envía tu swap en privado y ajusta el slippage; Manual no te protege del MEV' },
            { id: 'c', text: 'Ultra es custodial y guarda tus fondos; Manual los deja en tu wallet todo el tiempo' },
            { id: 'd', text: 'Ultra solo admite tokens verificados; Manual es el único que acepta tokens nuevos' }
          ],
          correctAnswer: 'b',
          explanation: 'Ultra (el modo por defecto) envía la transacción por un canal privado y calcula el slippage por ti, a cambio de una comisión de 0% a 0.5% según el par. Manual no cobra comisión de Jupiter, pero tu swap queda expuesto a bots MEV. En ambos modos el swap es sin custodia: tus tokens no salen de tu wallet hasta el momento del intercambio.'
        },
        {
          id: 'q7',
          question: 'Abres un largo en SOL con 25× en Jupiter Perps. ¿Qué caída del precio basta, aproximadamente, para liquidarte?',
          options: [
            { id: 'a', text: 'Algo menos de 4%: 100 / 25 = 4, y las comisiones te restan margen' },
            { id: 'b', text: 'Cerca de 25%, porque la pérdida tiene que igualar el apalancamiento' },
            { id: 'c', text: 'Cerca de 50%, porque el protocolo liquida al perder medio colateral' },
            { id: 'd', text: 'Ninguna: en un perp descentralizado solo cierras de forma voluntaria' }
          ],
          correctAnswer: 'a',
          explanation: 'Con 25× cada 1% que se mueve SOL es un 25% de tu margen, así que una caída de 4% lo consume entero, y las comisiones y el costo por hora de la posición adelantan la liquidación. SOL puede moverse 4% en una tarde normal. Por eso, si usas perps, que sea con capital de trading, apalancamiento bajo y stop loss.'
        },
        {
          id: 'q8',
          type: 'ordering',
          question: 'Ordena los pasos de un swap cuidadoso en Jupiter, del primero al último.',
          items: [
            'Entrar a jup.ag escribiendo la dirección y conectar tu wallet',
            'Elegir el token verificado y comprobar que el mint sea el oficial',
            'Revisar el price impact, la comisión y la ruta que propone Jupiter',
            'Leer lo que muestra la wallet y firmar solo si coincide',
            'Confirmar en el explorador que los tokens llegaron a tu wallet'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Primero te aseguras de estar en el sitio real, luego de comprar el token correcto, después de que el precio tenga sentido, y solo entonces firmas. Verificar en el explorador cierra el ciclo: si algo salió mal, lo sabes enseguida.'
        }
      ]
    }
  },
  26: {
    id: 26,
    title: 'Liquidez y Yield Farming',
    level: 'Avanzado',
    number: '5 de 13',
    duration: '20 min',
    type: 'Estrategias',
    description: 'Conviértete en el banco. Aprende a proveer liquidez en Raydium, Orca y Meteora para ganar comisiones por cada swap que otros hacen. Entiende la impermanent loss, los pools concentrados, y cuándo vale la pena (y cuándo no).',
    sections: [
      {
        type: 'intro',
        title: 'Conviértete en el Banco',
        content: 'En el mundo tradicional, cuando cambias pesos por dólares en una casa de cambio, la casa se queda con un spread (comisión). En DeFi, **tú puedes ser la casa de cambio**. Cuando alguien hace un swap de SOL por USDC en Raydium o Meteora, necesita que haya liquidez disponible, tokens depositados en un pool que faciliten esa transacción. Los que depositan esos tokens son los **Liquidity Providers (LPs)**, y a cambio reciben una porción de las comisiones que se cobran por cada swap. Es un negocio real: los pools más activos de Solana generan millones de dólares en fees al mes. Pero que un pool genere muchos fees no significa que sus LPs ganen: hay riesgos que debes entender antes de depositar un solo dólar.',
        highlight: {
          title: 'El Negocio de la Liquidez',
          text: 'Proveer liquidez es una de las formas de rendimiento más malentendidas de DeFi. Un estudio de 2021 sobre pools concentrados de Uniswap v3 encontró que, en conjunto, la impermanent loss superó a los fees, y que cerca de la mitad de los LPs habría ganado más simplemente guardando sus tokens. Esta lección te da las herramientas para calcular antes de entrar.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funcionan los Pools de Liquidez?',
        content: 'Un pool de liquidez es un smart contract que contiene dos tokens (por ejemplo, SOL y USDC). Los usuarios que quieren intercambiar uno por otro lo hacen contra el pool, no contra otra persona:',
        features: [
          { icon: Layers, title: 'La Mecánica Básica', text: 'Depositas dos tokens en proporción igual (ejemplo: $500 de SOL + $500 de USDC = $1,000 en el pool SOL-USDC). Cada vez que alguien hace un swap SOL↔USDC usando ese pool, paga una comisión. En pools estándar suele ser 0.25%; en pools concentrados de pares principales como SOL-USDC puede ser tan baja como 0.01-0.05%, y en tokens volátiles llega al 1% o más. Esa comisión se distribuye proporcionalmente entre todos los LPs del pool según su participación.' },
          { icon: Zap, title: 'Los Fees se Acumulan', text: 'No recibes los fees en tu wallet, se acumulan automáticamente en tu posición del pool. Si depositaste $1,000 y se acumularon $50 en fees, tu posición ahora vale $1,050. Para cobrarlos, retiras tu liquidez del pool. Una excepción importante: en los pools concentrados (Orca Whirlpools, Meteora DLMM, Raydium CLMM) los fees se acumulan por separado y puedes reclamarlos sin retirar tu liquidez. Mientras más volumen de trading tenga el pool, más fees ganas.' },
          { icon: BarChart3, title: 'APY Variable', text: 'Los rendimientos fluctúan enormemente. Un pool SOL-USDC puede mostrar 10-30% APY en fees en épocas activas, antes de restar la impermanent loss. Un pool de un memecoin en pleno hype puede generar 500-2,000% APY, pero por horas o días, no permanentemente. Los APYs que ves son estimaciones basadas en los fees recientes, no garantías de rendimiento futuro.' }
        ]
      },
      {
        type: 'main',
        title: 'Impermanent Loss: El Riesgo que Debes Dominar',
        content: 'Este es el concepto más importante y malentendido de la provisión de liquidez. **Impermanent Loss (IL)** es la diferencia entre lo que ganarías haciendo HODL vs lo que ganas como LP cuando los precios de los tokens cambian:',
        features: [
          { icon: TrendingDown, title: 'Cómo Ocurre', text: 'Depositas $500 SOL + $500 USDC ($1,000 total). SOL sube 100% (de $150 a $300). Si solo hubieras hecho HODL, tendrías $1,500 ($1,000 SOL + $500 USDC). Pero el pool rebalancea automáticamente, vende SOL caro y compra USDC. Tu posición en el pool vale ~$1,414 en lugar de $1,500. Esa diferencia de ~$86 es la impermanent loss (~5.7%).' },
          { icon: BarChart3, title: 'La Tabla que Debes Memorizar', text: 'Si el precio sube: +50%, IL ~2.0%; +100% (2×), IL ~5.7%; +200% (3×), IL ~13.4%; +400% (5×), IL ~25.5%. Si baja: -50%, IL ~5.7%; -90%, IL ~42.5%. Ojo, la IL se mide contra hacer HODL, y no incluye la caída del precio en sí. Si el token cae 90%, tus $1,000 en el pool quedan en ~$316, mientras que con HODL tendrías ~$550: pierdes por la caída y, además, por la IL, porque el pool te fue dando más del token que caía.' },
          { icon: CheckCircle, title: '¿Cuándo Vale la Pena?', text: 'IL se llama "impermanent" porque si el precio vuelve al punto original, la pérdida desaparece. Pero si retiras con el precio lejos de donde entraste, se vuelve permanente. Además, los fees que ganas pueden superar la IL. Si ganas 50% APY en fees pero tu IL es del 5%, estás +45% en ganancia neta. El cálculo es: Ganancia neta = Fees ganados - Impermanent Loss. Solo participa cuando los fees justifican el riesgo.' }
        ]
      },
      {
        type: 'main',
        title: 'Pools Estándar vs Pools Concentrados (DLMM)',
        content: 'Hay dos tipos fundamentales de pools, y entender la diferencia es crucial para tu estrategia como LP:',
        features: [
          { icon: Globe, title: 'Pools Estándar (por ejemplo, los AMM de Raydium)', text: 'Tu liquidez se distribuye en TODO el rango de precios posible, de $0 a infinito. Ventaja: tu posición siempre está activa sin importar el precio. Desventaja: la mayoría de tu capital está "desperdiciado" en rangos de precio donde nunca se va a operar. Eficiencia de capital: baja. Rendimiento: moderado pero predecible.' },
          { icon: Crosshair, title: 'Pools Concentrados (Meteora DLMM, Orca Whirlpools, Raydium CLMM)', text: 'Tú defines el rango de precios donde quieres proveer liquidez. Ejemplo: "Solo quiero ser LP de SOL-USDC entre $150 y $200". Tu capital se concentra en ese rango estrecho, generando MUCHO más fees por dólar invertido (potencialmente 5-20× más que un pool estándar). Pero si el precio sale de tu rango, dejas de ganar fees completamente.' },
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
          { icon: Zap, title: 'Raydium', text: 'El DEX más establecido de Solana. Tiene pools estándar (AMM) y pools concentrados (CLMM). Los pools estándar son los más fáciles de usar para quien empieza como LP. Mucho volumen en pares principales (SOL-USDC, SOL-USDT) y en memecoins nuevas, que son también donde más rug pulls ocurren.' },
          { icon: Crosshair, title: 'Meteora', text: 'Especializado en pools concentrados (DLMM). Una interfaz pensada para LPs avanzados. Permite configurar rangos con precisión y diferentes estrategias de distribución (spot, curve, bid-ask). También tiene pools DAMM v2, de rango completo. Ojo con el costo de abrir una posición DLMM: un depósito de unos 0.06 SOL que recuperas al cerrarla, y si tu rango usa una zona de precios que nadie ha abierto antes, unos 0.075 SOL adicionales que no se devuelven. Con $200 de capital, eso pesa. En pools de memecoins volátiles algunos LPs ganan mucho y muchos otros pierden: no es lugar para aprender.' },
          { icon: Globe, title: 'Orca', text: 'DEX conocido por su interfaz clara. Sus "Whirlpools" son pools concentrados, y al crear una posición también puedes elegir rango completo, que se comporta como un pool estándar. Su pool SOL-USDC más usado cobra 0.04% por swap. Buena opción para quien viene de DeFi en otras chains.' }
        ]
      },
      {
        type: 'main',
        title: 'Yield Farming: Incentivos Adicionales',
        content: 'Además de los fees por swaps, muchos protocolos ofrecen **recompensas adicionales** en forma de tokens para atraer liquidez. Esto se llama Yield Farming:',
        features: [
          { icon: Award, title: 'Cómo Funciona', text: 'Un protocolo nuevo necesita liquidez para funcionar. Para atraerla, regala sus propios tokens a los LPs. Ejemplo: depositas liquidez en un pool nuevo de Raydium y recibes fees del pool + tokens RAY adicionales como incentivo. El APY combinado puede ser muy atractivo, pero los tokens de reward frecuentemente pierden valor con el tiempo.' },
          { icon: AlertTriangle, title: 'El Riesgo del Farming', text: 'Si el token de reward pierde 80% de su valor, tu APY real es mucho menor que el mostrado. Además, el TVL del pool crece rápidamente (todos quieren el yield), lo que diluye las recompensas por persona. Los rendimientos más altos aparecen al inicio, justo cuando el riesgo también es mayor: contrato nuevo, poca liquidez y un token de reward sin precio estable.' },
          { icon: Brain, title: 'Farming Inteligente', text: 'Busca farming donde el token de reward tenga utilidad real (governance de un protocolo exitoso, no un token sin propósito). Calcula el APY neto: fees del pool + rewards de farming - impermanent loss - depreciación del token de reward. Si el resultado sigue siendo positivo y entiendes el riesgo del contrato, puede tener sentido con una parte pequeña de tu capital.' }
        ]
      },
      {
        type: 'counterpoint',
        title: 'Otra Mirada: ¿Los LPs Realmente Ganan?',
        content: '- **Muchos LPs pierden contra HODL.** El estudio de Loesch y colegas (2021) sobre Uniswap v3 encontró que en los pools analizados la impermanent loss sumó más que los fees.\n\n- **El APY no incluye todos los riesgos.** Un bug en el contrato, un rug pull en un pool de memecoins o una stablecoin que pierde su paridad pueden borrar meses de fees.\n\n- **Los pools concentrados exigen tiempo.** Si no puedes revisar tu rango varias veces por semana, un pool estándar o simplemente guardar tus tokens puede ser mejor.\n\n- **Cada retiro y rebalanceo puede tener efectos tributarios.** Lleva registro de tus depósitos y retiros (lo viste en Tu Plan de Inversión Personal).'
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Proveer Liquidez Como un Profesional',
        items: [
          'Proveer liquidez = depositar tokens en un pool para facilitar swaps. A cambio, recibes comisiones proporcionales a tu participación por cada transacción que usa tu pool.',
          'Impermanent Loss es el costo de ser LP: cuando los precios cambian, ganas menos que si hubieras hecho HODL. Con un cambio de precio de 2× (100%), la IL es ~5.7%. Solo participa cuando los fees justifican este riesgo.',
          'Pools estándar (Raydium AMM) son para LPs pasivos: menor rendimiento pero sin necesidad de monitoreo. Pools concentrados (Meteora DLMM, Orca Whirlpools) pueden generar 5-20× más fees por dólar mientras el precio está en rango, pero requieren gestión activa y rebalanceo.',
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
          question: 'Depositas $5,000 en SOL y $5,000 en USDC en un pool estándar. SOL sube 100% (2×). Sin contar fees, ¿cuánto vale tu posición aproximadamente?',
          options: [
            { id: 'a', text: '$20,000, porque todo lo que depositaste en el pool se duplicó de valor' },
            { id: 'b', text: '$15,000, lo mismo que si hubieras mantenido los dos tokens en tu wallet' },
            { id: 'c', text: '$10,000, porque el pool se rebalancea y siempre vuelve al valor inicial' },
            { id: 'd', text: 'Unos $14,142: ganas, pero ~$858 menos que los $15,000 de solo mantener' }
          ],
          correctAnswer: 'd',
          explanation: 'En un pool estándar, el valor sigue la raíz del cambio de precio: $10,000 × √2 ≈ $14,142. Manteniendo los dos tokens tendrías $5,000 × 2 + $5,000 = $15,000. La diferencia (~5.7%, unos $858) es la impermanent loss. Pensar que el pool vale lo mismo que mantener es el error más común: el pool vende SOL mientras sube.'
        },
        {
          id: 'q2',
          question: '¿En qué situación proveer liquidez termina siendo mejor que solo mantener los tokens?',
          options: [
            { id: 'a', text: 'Cuando los fees acumulados superan la impermanent loss de la posición' },
            { id: 'b', text: 'Siempre, porque los fees se suman y la impermanent loss nunca se realiza' },
            { id: 'c', text: 'Solo cuando uno de los tokens del par va a subir con muchísima fuerza' },
            { id: 'd', text: 'Nunca, porque la impermanent loss siempre supera a cualquier fee cobrado' }
          ],
          correctAnswer: 'a',
          explanation: 'Ganancia neta del LP = fees − impermanent loss. Suele salir a favor en pares con mucho volumen y poca divergencia de precio, como stablecoins o pares principales muy operados. La idea de que la IL "nunca se realiza" es tentadora, pero se vuelve real en cuanto retiras con los precios lejos de donde entraste.'
        },
        {
          id: 'q3',
          question: 'Estás en un pool concentrado (Meteora DLMM) de SOL-USDC con rango $150-$200, y SOL sube a $220. ¿Qué pasa con tu posición?',
          options: [
            { id: 'a', text: 'Quedas en 100% SOL y sigues ganando fees aunque el precio esté fuera' },
            { id: 'b', text: 'Quedas en 100% USDC y dejas de ganar fees hasta que vuelva al rango' },
            { id: 'c', text: 'El protocolo liquida tu posición, como en un préstamo con colateral' },
            { id: 'd', text: 'Sigues ganando fees normales, porque el rango es solo una referencia' }
          ],
          correctAnswer: 'b',
          explanation: 'Mientras SOL subía dentro de tu rango, el pool fue vendiendo tu SOL por USDC. Al salir por arriba, te quedas en 100% USDC y sin fees. Quedar en 100% SOL pasa cuando el precio sale por abajo. No hay liquidación: no hay deuda. Para volver a ganar, tienes que retirar y abrir un rango nuevo.'
        },
        {
          id: 'q4',
          question: 'Un pool de una memecoin nueva muestra "1,500% APY". ¿Cómo interpretas ese número?',
          options: [
            { id: 'a', text: 'Es un 1,500% garantizado si dejo el capital depositado un año entero' },
            { id: 'b', text: 'Extrapola fees de pocos días: el volumen caerá y además tendrás IL' },
            { id: 'c', text: 'Es siempre un scam: los APY de cuatro cifras los inventa el protocolo' },
            { id: 'd', text: 'Es real, pero solo para quien deposite antes de que entren más LPs' }
          ],
          correctAnswer: 'b',
          explanation: 'El APY mostrado proyecta a un año los fees de unas horas o días de hype. El volumen baja, más LPs diluyen los fees y, si la memecoin cae 90%, pierdes por la caída y por la impermanent loss (~42%), porque el pool te deja con más del token que cae. El número no es inventado: es una foto de un momento que no dura.'
        },
        {
          id: 'q5',
          question: '¿Cuál es la diferencia principal entre un pool estándar (Raydium AMM) y un pool concentrado (Meteora DLMM)?',
          options: [
            { id: 'a', text: 'El concentrado siempre rinde más, sin ningún costo ni trabajo adicional tuyo' },
            { id: 'b', text: 'El estándar paga más fees, porque lleva más tiempo operando en el mercado' },
            { id: 'c', text: 'El concentrado no tiene impermanent loss, porque fija el rango de precio' },
            { id: 'd', text: 'El estándar cubre todos los precios; el concentrado, un rango que eliges tú' }
          ],
          correctAnswer: 'd',
          explanation: 'El pool estándar reparte tu liquidez en todos los precios: rinde menos por dólar, pero no necesita mantenimiento. El concentrado pone tu liquidez en un rango: puede generar 5-20× más fees mientras el precio está dentro, pero exige vigilar y rebalancear, y la IL dentro del rango es mayor, no menor.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Un pool de USDC-USDT tiene una impermanent loss casi nula mientras las dos stablecoins mantengan su paridad.',
          correctAnswer: true,
          explanation: 'Verdadero. La impermanent loss aparece cuando los precios del par se separan. Si ambas valen $1, casi no hay divergencia. El riesgo cambia de forma: si una pierde la paridad, el pool te deja con más de la que cae.'
        },
        {
          id: 'q7',
          type: 'multiple-select',
          question: 'Un farm muestra 80% APY: 10% viene de fees y 70% se paga en su propio token de recompensa. ¿Qué riesgos tiene ese número? Selecciona todos los que apliquen.',
          options: [
            { id: 'a', text: 'Si el token de recompensa cae, el rendimiento real cae con él' },
            { id: 'b', text: 'Si entran más LPs, los fees se reparten entre más personas' },
            { id: 'c', text: 'El protocolo garantiza ese APY durante todo el año' },
            { id: 'd', text: 'La impermanent loss puede comerse parte del rendimiento' },
            { id: 'e', text: 'Los tokens de recompensa nunca se pueden vender' }
          ],
          correctAnswers: [0, 1, 3],
          explanation: 'La mayor parte de ese 80% depende del precio del token de recompensa, que suele bajar a medida que los farmers lo venden. Además, más LPs diluyen los fees y la IL resta. Ningún protocolo garantiza un APY variable, y los tokens de recompensa sí se pueden vender, que es justamente lo que presiona su precio.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Jupiter: El Rey de los DEXs: ¿por qué Jupiter es un agregador y no un DEX simple?',
          options: [
            { id: 'a', text: 'Tiene su propia liquidez, más profunda que la de cualquier otro DEX de Solana' },
            { id: 'b', text: 'Garantiza el precio de cada swap aunque el mercado se mueva al firmarlo' },
            { id: 'c', text: 'Busca el mejor precio entre varios DEX y puede dividir tu swap entre ellos' },
            { id: 'd', text: 'Opera en todas las blockchains a la vez y elige la más barata para ti' }
          ],
          correctAnswer: 'c',
          explanation: 'Jupiter no depende de un solo pool: compara precios en Raydium, Orca, Meteora y otros, y rutea tu swap por la mejor combinación. Por eso suele darte mejor precio que ir directo a un DEX. Lo que te protege de un movimiento durante el swap es tu slippage, no Jupiter. (Lo viste en la lección Jupiter: El Rey de los DEXs.)'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 2,
        title: 'Checkpoint: La Impermanent Loss en una Caída',
        questions: [
          {
            id: 'cp1-q1',
            question: 'SOL vale $100. Depositas $1,000 en SOL y $1,000 en USDC en un pool estándar, y SOL cae a $25. Sin contar fees, ¿cómo se compara el pool con solo mantener?',
            options: [
              'El pool vale ~$1,000 y mantener ~$1,250: la IL también aparece al bajar',
              'Los dos valen ~$1,250, porque la impermanent loss solo aparece al subir',
              'El pool vale ~$2,000, porque los LPs están protegidos de las caídas',
              'El pool vale ~$250, porque el AMM vende todo tu USDC para comprar SOL'
            ],
            correctAnswer: 0,
            explanation: 'Manteniendo: $250 en SOL + $1,000 en USDC = $1,250. En el pool: $2,000 × √0.25 = $1,000, porque mientras SOL caía, el pool fue comprándolo con tu USDC. La impermanent loss es de 20% y aparece con cualquier divergencia de precio, hacia arriba o hacia abajo.',
            hint: 'Calcula primero cuánto valdría mantener los dos tokens en tu wallet.'
          }
        ]
      }
    ]
  },
  27: {
    id: 27,
    title: 'Lending & Borrowing',
    level: 'Avanzado',
    number: '6 de 13',
    duration: '22 min',
    type: 'Tutorial Práctico',
    description: 'Accede a liquidez sin vender tus criptos, o presta tus dólares a cambio de interés. Entiende colateral, LTV y liquidación, y por qué pedir prestado contra un activo volátil exige márgenes amplios.',
    sections: [
      {
        type: 'intro',
        title: 'El Banco Descentralizado',
        content: '¿Necesitas dinero pero crees que SOL va a subir y no quieres vender? En el mundo tradicional, pedirías un préstamo en el banco usando tu casa como garantía. En DeFi, haces exactamente lo mismo, pero sin banco, sin papeleo, sin aprobación de crédito, y en 30 segundos. Depositas tus SOL como **colateral** (garantía) en un protocolo como Kamino o Jupiter Lend. A cambio, puedes pedir prestado USDC, USDT u otros tokens por un valor menor al de tu colateral. Mientras tu colateral valga significativamente más que tu deuda, todo funciona perfectamente. Si el precio de tu colateral cae demasiado... bueno, ahí es donde las cosas se ponen peligrosas.',
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
          { icon: Percent, title: 'LTV (Loan-to-Value)', text: 'El porcentaje de tu colateral que puedes pedir prestado. Si el LTV máximo es 75%, con $1,800 de colateral puedes pedir hasta $1,350 prestados. Pero NUNCA uses el máximo, es jugar con fuego. Con LTV de 75% y un umbral de liquidación de 80%, una caída de apenas ~6% en tu colateral te liquida (1 − 0.75/0.80 = 6.25%). Con LTV de 50%, basta una caída de ~37%, y SOL ha caído más que eso varias veces. Con LTV de 35-40%, necesitas una caída de 50-56%. Si estás empezando: no pases de 35-40% y configura alertas diarias.' },
          { icon: AlertTriangle, title: 'Liquidación', text: 'Si el valor de tu colateral cae tanto que tu LTV supera el umbral de liquidación, un bot liquidador paga parte de tu deuda y se lleva parte de tu colateral con descuento. No hay advertencia humana: ocurre en segundos. Esa porción de colateral se vende al precio del peor momento, más una penalización de liquidación (según el protocolo y el activo, suele estar entre 2% y 10%; en Kamino es dinámica y crece cuanto más se pasa tu posición del umbral). La liquidación es **irreversible**.' },
          { icon: Activity, title: 'Health Factor', text: 'Es el indicador clave que debes monitorear. Health Factor = Valor del Colateral × Factor de Liquidación / Deuda Total. Si baja de 1.0, te liquidan. Ejemplo: a 50% LTV con factor 80%, HF ≈ 1.6. A 1.5 estás en zona de precaución. Meta prudente: HF ≥ 2.0 (con umbral de 80%, implica ~40% LTV o menos). Los protocolos muestran esto en su interfaz: no lo ignores.' }
        ]
      },
      {
        type: 'main',
        title: 'Los Protocolos de Lending en Solana',
        asOf: 'noviembre de 2026',
        content: 'Solana tiene varios protocolos de lending con auditorías e historial. Auditado no significa a prueba de fallos: estos son ejemplos para que reconozcas los nombres, no recomendaciones:',
        features: [
          { icon: Landmark, title: 'Kamino Finance', text: 'De los protocolos de lending más grandes de Solana, con ~$1,200 millones en TVL a noviembre de 2026. Soporta múltiples colaterales (SOL, jitoSOL, mSOL y otros). En su documentación, el ejemplo para SOL usa un LTV máximo de 75% y un umbral de liquidación de 80%. Tiene una función "Multiply" que automatiza el looping (lo verás abajo).' },
          { icon: Shield, title: 'Jupiter Lend', text: 'El protocolo de lending de Jupiter, construido con Fluid, lanzado en 2025. Superó los ~$900 millones en TVL a noviembre de 2026. Que venga de un equipo conocido no elimina el riesgo de contrato: evalúalo con los mismos criterios que cualquier otro.' },
          { icon: AlertTriangle, title: 'marginfi y Project 0', text: 'marginfi, uno de los pioneros del lending en Solana, pasó a operar como Project 0 en 2025. A noviembre de 2026 no existe ningún token MRGN ni P0: cualquier sitio que te ofrezca "reclamar" uno es una estafa.' },
          { icon: Zap, title: 'Save (antes Solend)', text: 'Uno de los primeros protocolos de lending de Solana, rebautizado como Save (save.finance) en 2024. Más simple y directo. Una opción más básica, con menos TVL que los anteriores. Su historia incluye episodios de gobernanza y de oráculos en 2022 que vale la pena conocer antes de depositar.' }
        ]
      },
      {
        type: 'main',
        title: 'Ejemplo Práctico: Pedir Prestado Paso a Paso',
        content: 'Vamos a recorrer un ejemplo real de cómo pedir prestado en Kamino de forma segura:',
        features: [
          { icon: Wallet, title: 'Paso 1: Deposita Colateral', text: 'Conecta tu wallet a Kamino (app.kamino.finance). Selecciona "Lend" o "Supply". Deposita 10 SOL (valor: ~$1,800 si SOL = $180). Tu colateral aparece en el dashboard con su valor en USD actualizado en tiempo real.' },
          { icon: Banknote, title: 'Paso 2: Pide Prestado (Conservador)', text: 'Selecciona "Borrow" y luego USDC. Con $1,800 de colateral, el protocolo te permite pedir hasta ~$1,350 (75% LTV). Pero nosotros pedimos solo $630 (35% LTV). ¿Por qué? Porque SOL puede caer 30% en un día y más de 50% en un mal año: con 35% LTV, tendría que caer ~56% para liquidarte.' },
          { icon: Activity, title: 'Paso 3: Monitorea tu Health Factor', text: 'Con 35% LTV y umbral de liquidación del 80%, tu Health Factor ronda **~2.3** (fórmula: colateral × 0.80 / deuda). Revísalo cada día y configura alertas (algunos protocolos las tienen integradas). Si baja de 1.5, actúa: deposita más colateral o devuelve parte del préstamo. Recuerda también que la tasa de interés es variable: tu deuda crece cada día que no pagas.' },
          { icon: RefreshCw, title: 'Paso 4: Repaga y Recupera', text: 'Cuando quieras cerrar la posición, devuelve los $630 USDC + los intereses acumulados. El protocolo libera tu colateral (10 SOL) de vuelta a tu wallet. Si SOL subió, accediste a liquidez sin vender. Si bajó, igual debes los $630 más intereses: el préstamo no se ajusta al precio.' }
        ]
      },
      {
        type: 'main',
        title: 'Qué Cuesta una Liquidación: Un Ejemplo',
        content: 'Mucha gente cree que liquidar es "perder todo". En la mayoría de protocolos es parcial (en Kamino, por ejemplo, cada ronda liquida como máximo 20-25% de la deuda, salvo que la posición esté muy por encima del umbral), pero igual duele. Veamos un esquema típico con números redondos:',
        features: [
          { icon: Activity, title: 'El Punto de Partida', text: 'Tienes 10 SOL a $180 ($1,800) y pediste $900 (50% LTV). El umbral de liquidación es 80%. SOL cae a $110: tu colateral vale $1,100 y tu LTV sube a ~82%. Cruzaste la línea.' },
          { icon: Zap, title: 'Lo Que Hace el Liquidador', text: 'Un bot paga $300 de tu deuda y a cambio se lleva $315 en SOL (unos 2.9 SOL a $110). Esos $15 extra son la penalización del 5% en este ejemplo. Te quedan ~7.1 SOL ($785) y $600 de deuda: tu LTV baja a ~76% y sigues cerca del umbral.' },
          { icon: TrendingDown, title: 'El Costo Real', text: 'La multa de $15 es lo de menos. Lo caro es que vendiste casi 3 SOL a $110, en el peor momento, sin decidirlo tú. Si SOL vuelve a $180, esos 2.9 SOL valdrían ~$515. Y si el precio sigue cayendo, puede haber una segunda liquidación.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Lending Conservador vs Agresivo',
        leftSide: {
          title: 'Conservador (Recomendado)',
          points: [
            'LTV de 35-40% o menos',
            'Health Factor alto (≥2.0; con umbral de 80%, equivale a ~40% LTV o menos)',
            'Colateral en activos estables o blue chips (SOL, ETH)',
            'Revisión diaria y alertas configuradas',
            'Riesgo de liquidación: bajo, no cero (requiere caídas de más de 50%)',
            'Estrategia: acceder a liquidez sin vender posición de largo plazo'
          ]
        },
        rightSide: {
          title: 'Agresivo (Solo Expertos)',
          points: [
            'LTV del 65-75% (cerca del máximo permitido)',
            'Health Factor de 1.2-1.5 (zona de peligro)',
            'Looping: pedir prestado, comprar más colateral, depositarlo y repetir',
            'Requiere monitoreo constante (alertas 24/7)',
            'Riesgo de liquidación: alto, con 75% LTV una caída de ~6% te liquida',
            'Estrategia: apalancar posición para maximizar exposición'
          ]
        }
      },
      {
        type: 'main',
        title: 'Looping: La Estrategia de las Ballenas',
        content: 'El "looping" o "leverage looping" es una estrategia avanzada popular en Solana. Es poderosa pero peligrosa:',
        features: [
          { icon: RefreshCw, title: 'Cómo Funciona', text: 'Depositas 10 SOL, pides prestado 800 USDC, compras más SOL con esos USDC, depositas ese SOL como colateral adicional, pides prestado más USDC y repites. Después de 3-4 loops con ese LTV moderado (~44% por vuelta), tus 10 SOL iniciales controlan una posición de ~17-18 SOL (~1.8× apalancamiento). Si SOL sube 20%, ganas ~35% en lugar de 20%. Con LTVs más agresivos por vuelta, el apalancamiento puede llegar a 2-4×.' },
          { icon: AlertTriangle, title: 'El Riesgo Amplificado', text: 'Si SOL cae 20%, una posición apalancada 3× pierde ~60% de tu capital. Y cada loop acerca tu LTV al umbral de liquidación: caídas que una posición simple sobrevive sin problema pueden liquidar completamente una posición loopeada y costarte TODOS tus SOL originales. El looping amplifica todo: ganancias Y pérdidas. Es por eso que solo traders con experiencia y capital que pueden perder deben usarlo.' },
          { icon: Zap, title: 'Kamino Multiply', text: 'Kamino tiene una función llamada "Multiply" que automatiza el looping con un clic. Seleccionas el multiplicador (1.5×, 2×, 3×) y el protocolo hace todos los loops automáticamente. Es conveniente pero peligroso si no entiendes los riesgos. Trata el Multiply con el mismo respeto que un perpetuo con apalancamiento.' }
        ]
      },
      {
        type: 'main',
        title: 'El Otro Lado: Prestar Tus Dólares',
        content: 'En un protocolo de lending también puedes ser quien presta: depositas USDC y cobras el interés que pagan los que piden prestado. Para alguien en Colombia que ahorra en dólares digitales, suena atractivo. Antes de compararlo con un CDT (que en noviembre de 2026 pagaba ~8.5-13% EA a un año, con tasa fija), entiende qué riesgos asumes:',
        features: [
          { icon: Percent, title: 'La Tasa Es Variable', text: 'El rendimiento depende de cuánta gente pide prestado. Puede ser 8% un mes y 3% el siguiente. Un CDT te fija la tasa; un pool de lending, no.' },
          { icon: AlertTriangle, title: 'Riesgos que un CDT No Tiene', text: 'Un bug o hackeo del contrato, una stablecoin que pierde su paridad, o un oráculo que reporta mal un precio pueden costarte parte del depósito. No hay seguro de depósitos como el de Fogafín.' },
          { icon: Lock, title: 'Retiros que se Pausan', text: 'Si casi todo el pool está prestado (utilización cerca del 100%), puede que no puedas retirar hasta que otros devuelvan o entren nuevos depósitos. Justo en una crisis, cuando más lo necesitas.' },
          { icon: CheckCircle, title: 'Si Decides Probar', text: 'Usa protocolos con años de historial y auditorías, empieza con un monto pequeño, reparte entre más de uno y nunca deposites tu fondo de emergencia. Y lleva registro: los intereses pueden tener efectos tributarios.' }
        ]
      },
      {
        type: 'main',
        title: 'Errores Fatales que Debes Evitar',
        content: 'Estos errores han costado millones de dólares a usuarios de lending en DeFi. No cometas ninguno:',
        features: [
          { icon: AlertTriangle, title: 'Pedir Prestado al Máximo LTV', text: 'Si el protocolo te permite 75% LTV, NUNCA uses el 75%. Con un umbral de liquidación de 80%, una caída de apenas ~6% te liquida. Mantente en 35-40% LTV o menos. El espacio extra entre tu LTV y el umbral de liquidación es tu "seguro de vida" en mercados volátiles.' },
          { icon: AlertTriangle, title: 'No Monitorear en Mercados Volátiles', text: 'SOL puede caer 20-30% en horas durante eventos de pánico. Si tu Health Factor ya estaba bajo, puedes ser liquidado mientras duermes. Configura alertas automáticas y usa LTVs lo suficientemente conservadores para sobrevivir caídas de 50%.' },
          { icon: AlertTriangle, title: 'Usar Colateral Volátil sin Margen', text: 'Usar SOL como colateral es razonable, es un activo blue chip con liquidez profunda. Usar un memecoin como colateral es muy arriesgado: puede perder 80% en un día. Algunos protocolos lo permiten, pero que puedas no significa que debas. Mantén tu colateral en activos que no van a desplomarse de la noche a la mañana.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Lending Inteligente',
        items: [
          'Lending en DeFi = depositar colateral y pedir prestado contra él. Es como un préstamo bancario pero instantáneo, sin papeleo, y ejecutado por smart contracts. Kamino y Jupiter Lend están entre los más grandes de Solana.',
          'El LTV (Loan-to-Value) determina cuánto puedes pedir prestado. NUNCA uses el máximo permitido. Si estás empezando, mantén tu LTV en 35-40% o menos, con alertas diarias, para sobrevivir caídas de más de 50%.',
          'La liquidación es automática e irreversible. Si tu Health Factor cae debajo de 1.0, un bot vende tu colateral instantáneamente. Monitorea tu Health Factor y configura alertas.',
          'El looping (depositar, pedir prestado, comprar más y repetir) con LTV moderado (~40-50% por vuelta) da ~1.5-2× de exposición; con LTV agresivo puede llegar a 2-4×. Amplifica ganancias Y pérdidas. Solo para traders experimentados con capital que pueden perder.',
          'Errores fatales: pedir prestado al máximo LTV, no monitorear en mercados volátiles, usar colateral ultra-volátil (memecoins). Cualquiera de estos puede liquidarte completamente.',
          'Si pides prestado, que sea poco, por poco tiempo y con un plan para pagar: la deuda y sus intereses siguen ahí aunque SOL caiga. Y el otro lado del lending, prestar tus dólares, tiene sus propios riesgos: contrato, paridad de la stablecoin y retiros pausados cuando el pool está 100% prestado.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Depositas 10 SOL ($1,800) en Kamino y pides prestados 900 USDC (50% LTV). El umbral de liquidación es 80%. SOL cae 40%, a $108. ¿Qué pasa?',
          options: [
            { id: 'a', text: 'Tu LTV sube a ~83%, pasas el umbral y un bot liquida parte de tu SOL con un bono' },
            { id: 'b', text: 'Nada todavía: solo te liquidan cuando el colateral vale menos que toda la deuda' },
            { id: 'c', text: 'Kamino te da 24 horas para añadir colateral antes de vender cualquier parte de tu SOL' },
            { id: 'd', text: 'Tu deuda baja en proporción a la caída, así que tu LTV se mantiene cerca del 50%' }
          ],
          correctAnswer: 'a',
          explanation: 'Tu colateral ahora vale $1,080 y tu deuda sigue en ~$900: LTV = 900 / 1,080 ≈ 83%, por encima del 80%. Un bot paga parte de tu deuda y se lleva SOL con descuento, sin aviso previo. Pensar que solo liquidan cuando el colateral vale menos que la deuda es el error más caro: el umbral está mucho antes, justamente para que el protocolo nunca quede con deuda sin respaldo.'
        },
        {
          id: 'q2',
          type: 'fill-blank',
          question: 'Calcula cuánto pedir prestado para quedar en un LTV conservador.',
          textBefore: 'Tienes $1,800 de colateral y quieres un LTV de 35%. Debes pedir prestado como máximo $',
          textAfter: ' en USDC.',
          correctAnswer: '630',
          acceptableAnswers: ['630', '$630', '630 usdc', '630 usd', '630 dolares', '630 dólares', '630.00', '630,00'],
          explanation: 'Préstamo = colateral × LTV = $1,800 × 0.35 = $630. Con 35% de LTV y un umbral de 80%, SOL tendría que caer cerca de 56% para liquidarte. Y recuerda que los intereses suben tu deuda con el tiempo, así que el LTV no se queda quieto aunque SOL no se mueva.',
          hint: 'Multiplica el colateral por el LTV que quieres.'
        },
        {
          id: 'q3',
          question: 'Empiezas con un LTV de 40% y el umbral de liquidación es 80%. Sin contar intereses, ¿cuánto tendría que caer SOL para que te liquiden?',
          options: [
            { id: 'a', text: 'Cerca de 40%: es la diferencia entre el umbral y el LTV con el que empiezas' },
            { id: 'b', text: 'Cerca de 80%: el umbral te dice cuánto puede caer el colateral antes de vender' },
            { id: 'c', text: 'Cerca de 50%: tu LTV se duplica cuando el colateral pasa a valer la mitad' },
            { id: 'd', text: 'Cerca de 20%: el margen se reparte por igual entre la deuda y los intereses' }
          ],
          correctAnswer: 'c',
          explanation: 'La caída que aguantas es 1 − (LTV inicial / umbral) = 1 − 40/80 = 50%. Restar puntos (80 − 40 = 40) es la trampa habitual: el LTV es una división, no una resta, y por eso se mueve más rápido de lo que parece cuando el colateral cae.',
          hint: '¿Cuánto tiene que bajar el colateral para que la deuda pese el doble?'
        },
        {
          id: 'q4',
          question: 'En plena caída del mercado, tu Health Factor en Kamino baja a 1.2. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Pido más prestado para comprar el dip, así sube el valor total de mi colateral' },
            { id: 'b', text: 'Espero, porque mientras el Health Factor esté sobre 1.0 nadie puede liquidarme' },
            { id: 'c', text: 'Añado colateral o devuelvo parte de la deuda ya: otra caída de ~17% me liquida' },
            { id: 'd', text: 'Cambio mi colateral a un token más volátil que pueda recuperarse más rápido' }
          ],
          correctAnswer: 'c',
          explanation: 'Con un Health Factor de 1.2, una caída adicional de 1 − 1/1.2 ≈ 17% te lleva a 1.0, y en cripto eso puede pasar en minutos. Las dos salidas reales son añadir colateral o reducir deuda. Pedir más para comprar el dip parece lógico, pero sube tu deuda tanto como tu colateral y te deja aún más cerca de la liquidación.'
        },
        {
          id: 'q5',
          question: 'Haces looping: depositas SOL, pides USDC al 50% de LTV, compras SOL y lo depositas, hasta sumar tres préstamos. ¿Con qué quedas?',
          options: [
            { id: 'a', text: '~1.9× de exposición a SOL y más riesgo de liquidación si SOL cae' },
            { id: 'b', text: '~3× de exposición, porque cada vuelta suma otra vez tu depósito inicial' },
            { id: 'c', text: '1× de exposición: el SOL comprado con deuda no cuenta como tuyo' },
            { id: 'd', text: '~1.9× de exposición sin riesgo extra, porque todo el colateral es SOL' }
          ],
          correctAnswer: 'a',
          explanation: 'Cada vuelta compra la mitad de la anterior: 1 + 0.5 + 0.25 + 0.125 ≈ 1.9×. La exposición sube, pero también tu LTV total, así que una caída de SOL te golpea por los dos lados: baja el colateral y la deuda sigue igual. Que todo sea SOL no reduce el riesgo, lo concentra.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Si prestas USDC en Kamino, puedes retirarlo en cualquier momento, incluso cuando el pool está prestado al 100%.',
          correctAnswer: false,
          explanation: 'Falso. Si todo el USDC del pool está prestado, no hay liquidez para pagar retiros hasta que alguien devuelva un préstamo o entre más dinero. Las tasas suben para incentivar eso, pero mientras tanto tu retiro espera. Es uno de los riesgos de prestar que no aparece en el APY.'
        },
        {
          id: 'q7',
          question: 'Kamino paga 9% variable por prestar USDC y un CDT en pesos paga ~10% EA fijo. ¿Qué diferencia de riesgo pesa más al comparar?',
          options: [
            { id: 'a', text: 'El 9% es variable y sin Fogafín, con riesgo de contrato y de la paridad de la stablecoin' },
            { id: 'b', text: 'Ninguna relevante, porque un regulador garantiza los dos rendimientos de la misma forma' },
            { id: 'c', text: 'El CDT es más riesgoso porque el peso se devalúa y una stablecoin nunca pierde su paridad' },
            { id: 'd', text: 'Kamino es más seguro, porque un smart contract no puede quebrar como sí puede un banco' }
          ],
          correctAnswer: 'a',
          explanation: 'El rendimiento de Kamino cambia cada día, no tiene seguro de depósitos y depende de que el contrato funcione y de que USDC mantenga su paridad (en 2023 llegó a ~$0.87). El CDT tiene tasa fija y Fogafín. La moneda también cuenta: uno está en dólares y el otro en pesos. Creer que un contrato "no quiebra" ignora que los hackeos y los fallos de oráculo son justamente cómo se pierde dinero en DeFi.'
        },
        {
          id: 'q8',
          type: 'multiple-select',
          question: '¿Cuáles de estas decisiones aumentan de verdad tu riesgo de liquidación? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Pedir prestado hasta el LTV máximo que permite el protocolo' },
            { id: 'b', text: 'Usar un memecoin muy volátil como colateral' },
            { id: 'c', text: 'No configurar alertas de tu Health Factor' },
            { id: 'd', text: 'Mantener tu LTV en 35% con alertas diarias' },
            { id: 'e', text: 'Devolver parte del préstamo cuando SOL empieza a caer' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'Las tres primeras te acercan a la liquidación: no dejan margen, hacen que el colateral se mueva más, o te impiden reaccionar a tiempo. Un LTV de 35% con alertas y devolver deuda en una caída hacen lo contrario: te alejan del umbral.'
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
            question: 'Depositaste 10 SOL ($1,800) y pediste prestados $1,200 USDC. SOL cae 25% y tu colateral vale ahora $1,350. El umbral de liquidación es 80%. ¿Qué pasa?',
            options: [
              'No pasa nada: tu colateral todavía vale más que la deuda que tienes abierta',
              'Tu LTV pasa a ~89%, superas el 80% y te liquidan una parte con penalización',
              'El protocolo te da 24 horas para añadir colateral antes de hacer cualquier cosa',
              'Te liquidan todo el colateral de una vez y tu deuda queda en cero automáticamente'
            ],
            correctAnswer: 1,
            explanation: 'LTV = deuda / colateral = $1,200 / $1,350 ≈ 89%, por encima del 80%. Un bot repaga parte de tu deuda y se lleva SOL con un bono, sin advertencia. En Kamino suele ser una parte (20-25% por ronda), no todo de una vez, pero cada ronda te cuesta ese bono. Empezar en 35-40% de LTV te da margen para caídas de más de 50%.',
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
    number: '7 de 13',
    duration: '20 min',
    type: 'Seguridad',
    description: 'DeFi ofrece libertad financiera, pero la libertad viene con responsabilidad. Smart contract hacks, rug pulls, exploits de oráculos, y errores de usuario han costado más de $10 mil millones. Aprende a protegerte.',
    sections: [
      {
        type: 'intro',
        title: 'La Libertad Tiene un Precio',
        content: 'En DeFi, no hay banco que te reembolse si pierdes dinero. No hay "soporte al cliente" que revierta una transacción. No hay seguro de depósitos. **Tú eres responsable al 100% de tus fondos.** Esa es la belleza de la descentralización, y también su mayor riesgo. Desde 2020, más de $10 mil millones se han perdido en DeFi por hacks, exploits, rug pulls, y errores de usuario. Algunos de los protocolos más grandes y "seguros" del ecosistema han sido hackeados. Esto no significa que DeFi sea una estafa, significa que necesitas entender los riesgos para navegar este espacio de forma segura. En esta lección vas a aprender a identificar cada tipo de riesgo, cómo se manifiesta en la práctica, y qué puedes hacer para protegerte.',
        highlight: {
          title: 'Las Cifras Que Importan',
          text: 'En 2025 se robaron más de **$3,400 millones** en cripto, según Chainalysis, y cerca de $1,500 millones salieron de un solo incidente: **Bybit**, un exchange centralizado (CEX), atacado con ingeniería social, no con un bug de DeFi. En 2026 la cifra ya es mayor, empujada por un ataque a Binance en octubre que se reportó en unos $6,300 millones. Entre los puentes on-chain, el de Ronin (Axie Infinity) se llevó **$625 millones**. Distinguir superficie de ataque (CEX vs protocolo vs bridge vs error de usuario) es parte de protegerte.'
        }
      },
      {
        type: 'main',
        title: 'Riesgo #1: Smart Contract Bugs',
        content: 'El riesgo más fundamental de DeFi. Los protocolos son código, y todo código puede tener errores. Un bug en el smart contract puede permitir que un hacker drene todos los fondos:',
        features: [
          { icon: Cpu, title: 'Cómo Ocurre', text: 'Un programador comete un error lógico en el código del smart contract. Puede ser algo tan sutil como un error de redondeo, una verificación faltante, o una interacción inesperada entre dos funciones. Un hacker encuentra este error, escribe un script que lo explota, y drena el protocolo en minutos. Para cuando los desarrolladores reaccionan, los fondos ya están en el mixer.' },
          { icon: Shield, title: 'Cómo Protegerte', text: '(1) Solo usa protocolos con múltiples auditorías de firmas reputadas (Halborn, OtterSec, Neodyme para Solana). (2) Prefiere protocolos con tiempo en el mercado, si llevan 1+ año sin hacks con TVL alto, su código está battle-tested. (3) Nunca pongas más del 20-30% de tu portafolio en un solo protocolo. (4) Revisa si el protocolo tiene un programa de bug bounty (recompensa por reportar vulnerabilidades).' },
          { icon: AlertTriangle, title: 'Caso Real: Wormhole ($320M)', text: 'En febrero de 2022, un hacker encontró una falla en la verificación de firmas del lado de Solana del bridge Wormhole y emitió 120,000 wETH sin respaldo (~$320M). Jump Crypto (inversor de Wormhole) reemplazó los fondos para salvar a los usuarios, pero no todos los protocolos tienen un "padrino" millonario.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #2: Rug Pulls y Estafas',
        content: 'Un rug pull ocurre cuando los creadores de un proyecto roban deliberadamente los fondos de los usuarios. Es diferente a un hack, aquí no hay vulnerabilidad técnica, sino intención criminal:',
        features: [
          { icon: AlertTriangle, title: 'Cómo Funciona', text: 'El equipo crea un token/protocolo, genera hype, atrae depósitos de usuarios, y luego drena todos los fondos y desaparece. Puede ser tan simple como crear un pool de liquidez, esperar a que la gente compre el token, y retirar toda la liquidez (dejando a los holders con un token sin valor). O tan elaborado como construir un protocolo aparentemente legítimo durante meses y escapar con millones.' },
          { icon: Search, title: 'Red Flags de un Rug Pull', text: '(1) Equipo anónimo sin historial verificable. (2) Promesas de rendimientos absurdos (1,000%+ APY "garantizado"). (3) Smart contracts no verificados o sin auditoría. (4) Liquidez no bloqueada (el equipo puede retirar liquidez del pool en cualquier momento). (5) Presión para invertir rápido ("solo quedan 2 horas"). (6) La mayoría del supply en manos del equipo.' },
          { icon: Eye, title: 'Cómo Verificar', text: 'Usa herramientas como RugCheck.xyz para tokens de Solana. Verifica si la liquidez está bloqueada (locked LP). Revisa en el explorer (solscan.io) si pocas wallets controlan la mayoría del supply. Si el contrato no está verificado y el equipo es anónimo, no deposites tus ahorros, como máximo, una cantidad que puedas perder al 100%.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #3: Exploits de Oráculos y Bridges',
        content: 'Estos son los vectores de ataque más sofisticados y los que han causado las pérdidas más grandes en la historia de DeFi:',
        features: [
          { icon: Link, title: 'Oráculos Manipulados', text: 'Los protocolos DeFi necesitan saber el precio de los activos (para lending, liquidaciones, etc). Obtienen esta información de "oráculos" como Pyth o Switchboard. Si un hacker manipula el precio que reporta el oráculo (por ejemplo, hacer creer al protocolo que SOL vale $1,000 por un instante), puede pedir préstamos enormes contra colateral "inflado" y quedarse con los fondos. Los protocolos serios combinan fuentes de precio, usan precios promediados en el tiempo y limitan cuánto se puede pedir contra activos poco líquidos.' },
          { icon: Network, title: 'Bridges Hackeados', text: 'Los bridges conectan diferentes blockchains (Solana ↔ Ethereum). Son los targets favoritos de hackers porque contienen enormes cantidades de fondos "bloqueados". Wormhole ($320M), Ronin ($625M), Nomad ($190M), los bridges son el eslabón más débil del ecosistema multi-chain. Cuando uses bridges, mueve lo mínimo necesario y no dejes fondos en ellos.' },
          { icon: Shield, title: 'Cómo Minimizar el Riesgo', text: 'Quédate en una sola chain (Solana) tanto como sea posible para evitar bridges. Para mover USDC entre cadenas, prefiere CCTP de Circle, que quema el USDC en una cadena y lo emite nativo en la otra, sin dejarlo bloqueado en un puente. Para otros activos, usa puentes con historial largo y mueve solo lo necesario. Para lending, prefiere protocolos que usan oráculos establecidos (en Solana, sobre todo Pyth y Switchboard) y que no aceptan como colateral tokens con poca liquidez, que son los más fáciles de manipular.' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgo #4: Errores de Usuario',
        content: 'No todas las pérdidas vienen de hackers sofisticados. Una parte enorme viene de errores propios y de engaños que te llevan a firmar o enviar lo que no debías:',
        features: [
          { icon: Wallet, title: 'Enviar a Dirección Equivocada', text: 'Los errores reales más comunes: retirar de un exchange por la red equivocada (por ejemplo, elegir USDC en la red Ethereum cuando tu wallet espera Solana), olvidar el memo que exige un exchange para acreditar tu depósito, o pegar una dirección "envenenada" copiada del historial. En blockchain, las transacciones son IRREVERSIBLES. Siempre envía una transacción de prueba pequeña primero (0.01 SOL) antes de enviar cantidades grandes.' },
          { icon: Lock, title: 'Firmar Contratos Maliciosos', text: 'Al conectar tu wallet a un sitio fraudulento y firmar una transacción, puedes vaciar tu wallet en un instante. En **Solana** no hace falta un "approve unlimited": una sola firma maliciosa puede transferir tokens y NFTs. En **Ethereum/EVM** el patrón clásico es el allowance ilimitado ("Approve unlimited spending"). En ambos casos: NUNCA firmes en sitios que no reconoces. Lee la simulación de Phantom; si muestra salidas que no esperabas, rechaza.' },
          { icon: AlertTriangle, title: 'Perder la Frase Semilla', text: 'Si pierdes tu frase semilla y tu dispositivo falla, tus fondos se pierden PARA SIEMPRE. No hay soporte técnico, no hay "olvidé mi contraseña", no hay recuperación. Asegúrate de tener tu frase semilla respaldada en un medio físico seguro antes de depositar cantidades significativas en DeFi.' }
        ]
      },
      {
        type: 'main',
        title: 'Casos que Debes Conocer',
        content: 'Cada uno de estos casos enseña un tipo de riesgo distinto. Ninguno requirió que el usuario hiciera algo "mal":',
        features: [
          { icon: Users, title: 'Drift (abril de 2026): Llaves de Administrador', text: 'Unos $285M perdidos sin un bug en el código. Los atacantes engañaron a firmantes de una multisig de 2 de 5, sin timelock, para que firmaran por adelantado transacciones que les dieron el control. Lo viste en detalle en Seguridad Operacional Avanzada. Lección: revisa quién puede cambiar un protocolo y con cuántas firmas.' },
          { icon: Link, title: 'Mango Markets (octubre de 2022): Oráculo Manipulado', text: 'Un trader infló el precio del token MNGO en mercados con poca liquidez, usó esa posición "inflada" como colateral y retiró unos $110M. Lo condenaron en 2024, pero en mayo de 2025 un juez anuló las condenas. Lección: un protocolo que acepta como colateral tokens fáciles de mover está expuesto, sea o no legal lo que haga el atacante.' },
          { icon: TrendingDown, title: 'USDC (marzo de 2023): Una Stablecoin Pierde la Paridad', text: 'Circle tenía parte de sus reservas en Silicon Valley Bank cuando quebró, y durante un fin de semana USDC llegó a cotizar cerca de $0.87. Recuperó la paridad cuando se garantizaron los depósitos. Lección: "estable" no significa sin riesgo; si usas una stablecoin en pools o como colateral, su paridad es parte de tu riesgo.' },
          { icon: AlertTriangle, title: 'LIBRA (febrero de 2025): La Promoción No Es Garantía', text: 'Un token promocionado por el presidente de Argentina colapsó más de 90% en horas, mientras wallets vinculadas al equipo retiraban liquidez. Lo viste en Narrativas y Rotación. Lección: ninguna figura pública reemplaza revisar liquidez, distribución y quién controla el token.' }
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
          { icon: Clock, title: 'Regla del Lindy Effect', text: 'Cuanto más tiempo ha resistido un protocolo con mucho dinero dentro, más bugs obvios ya se habrían encontrado. Un protocolo con 2 años de historial y $500M en TVL que nunca ha sido explotado suele ser más confiable que uno lanzado hace 2 semanas. Pero el tiempo no protege de todo: Drift llevaba cinco años operando cuando perdió $285M en 2026, por la forma en que se controlaban sus llaves de administrador, no por un bug viejo.' },
          { icon: Search, title: 'Due Diligence Mínima', text: 'Antes de depositar en cualquier protocolo: (1) ¿Tiene auditorías de firmas reputadas? (2) ¿Cuánto tiempo lleva operando? (3) ¿El código está verificado y es open source? (4) ¿Tiene bug bounty program? (5) ¿Quién es el equipo (identificado públicamente o anónimo)? (6) ¿Quién puede cambiar el contrato (la upgrade authority) o mover los fondos del protocolo? ¿Es una multisig, hay un timelock que da tiempo de reaccionar? Si no puedes responder la mayoría, no deposites cantidades significativas.' },
          { icon: Wallet, title: 'Separación de Wallets', text: 'Usa wallets diferentes para diferentes niveles de riesgo: (1) Cold wallet (Ledger) para ahorros que no tocas. (2) Hot wallet principal (Phantom) para DeFi en protocolos establecidos. (3) Burner wallet para experimentar con protocolos nuevos o desconocidos. Si tu burner es hackeada, solo pierdes lo que tenía, no tu patrimonio.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Sobrevivir y Prosperar en DeFi',
        items: [
          'Los 4 riesgos principales de DeFi: smart contract bugs (errores de código), rug pulls (estafas deliberadas), exploits de oráculos/bridges (ataques sofisticados), y errores de usuario (enviar a dirección equivocada, firmar transacciones maliciosas).',
          'Más de $10 mil millones se han perdido en DeFi. Los bridges (Wormhole, Ronin) han sido de los targets más grandes; para USDC prefiere CCTP. Y casos como Drift muestran que el control de las llaves de administrador importa tanto como el código.',
          'Antes de depositar en cualquier protocolo: verifica auditorías, tiempo en el mercado, código verificado, y bug bounty. Si un protocolo es nuevo, sin auditoría, y con equipo anónimo, es una apuesta, no una inversión.',
          'Regla del 20-30%: nunca más de un tercio de tu portafolio en un solo protocolo. Si es hackeado, pierdes una parte, no todo. Diversifica entre 3-5 protocolos establecidos.',
          'Separa tus wallets por nivel de riesgo: cold wallet para ahorros, hot wallet para DeFi establecido, burner wallet para experimentar. La compartimentalización es tu mejor defensa.',
          'Muchas pérdidas vienen de errores y engaños, no de hackers sofisticados. Envía transacciones de prueba, lee lo que firmas, y NUNCA compartas tu frase semilla. En DeFi, tú eres tu propia seguridad.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Un protocolo DeFi nuevo en Solana ofrece 500% APY. Lleva 3 días, no tiene auditoría y su equipo es anónimo. ¿Cómo lo evalúas?',
          options: [
            { id: 'a', text: 'Vale la pena si el APY es real, porque compensa con creces cualquier riesgo' },
            { id: 'b', text: 'Es seguro si mucha gente ya lo usa, aunque no tenga ninguna auditoría' },
            { id: 'c', text: 'Es seguro porque el código nuevo todavía no tuvo tiempo de ser atacado' },
            { id: 'd', text: 'Es una apuesta: como mucho, una cantidad mínima desde una burner wallet' }
          ],
          correctAnswer: 'd',
          explanation: 'Sin auditoría nadie revisó el código, un equipo anónimo puede desaparecer, 3 días no son historial y un 500% APY no es sostenible. Juntas, esas señales hacen que perderlo todo sea un resultado probable. Que "mucha gente lo use" no reemplaza una auditoría: solo significa que hay más dinero para robar.'
        },
        {
          id: 'q2',
          question: '¿Por qué los bridges como Wormhole o Ronin han estado entre los protocolos más hackeados de DeFi?',
          options: [
            { id: 'a', text: 'Porque son más nuevos que casi todos los demás protocolos de DeFi' },
            { id: 'b', text: 'Porque ninguno de los bridges grandes tuvo nunca una auditoría seria' },
            { id: 'c', text: 'Guardan muchos fondos en un solo lugar y conectan dos cadenas distintas' },
            { id: 'd', text: 'Porque solo existen en cadenas pequeñas, con pocos nodos y poca seguridad' }
          ],
          correctAnswer: 'c',
          explanation: 'Un bridge concentra cientos de millones bloqueados, así que un solo exploit paga muchísimo. Y conectar dos blockchains suma complejidad y código, es decir, más lugares donde fallar. Ronin ($625M), Wormhole ($320M) y Nomad ($190M) están entre los mayores hacks de la historia. Varios de esos bridges sí tenían auditorías: no bastaron.'
        },
        {
          id: 'q3',
          question: 'Conectas tu wallet a un sitio que dice ser "Jupiter", pero la URL es jup-airdrop.com, y aparece un pedido para firmar una transacción. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Firmo, porque la página dice Jupiter y se ve igual a la versión real' },
            { id: 'b', text: 'Firmo con una cantidad pequeña primero, para probar si es legítimo' },
            { id: 'c', text: 'Rechazo, cierro la pestaña y reviso qué permisos pude haber dado' },
            { id: 'd', text: 'Pregunto en el chat de soporte del sitio antes de firmar cualquier cosa' }
          ],
          correctAnswer: 'c',
          explanation: 'La URL real de Jupiter es jup.ag. Esto es phishing: firmar puede dar permisos para vaciar todos los tokens de tu wallet, no solo una cantidad pequeña, así que "probar con poco" no limita nada. El chat de soporte de un sitio falso también es parte del engaño. Guarda los sitios reales en favoritos.'
        },
        {
          id: 'q4',
          question: 'Tienes $50,000 en DeFi en Solana. ¿Cómo los distribuyes para gestionar el riesgo de smart contract?',
          options: [
            { id: 'a', text: 'Todo en el protocolo más grande, porque su tamaño lo hace imposible de hackear' },
            { id: 'b', text: 'En 20 protocolos distintos, para que ningún hack me afecte de forma notable' },
            { id: 'c', text: 'Entre 3 y 5 protocolos establecidos, con un 20-30% como máximo en cada uno' },
            { id: 'd', text: 'Entre los protocolos que hoy ofrecen el APY más alto del mercado de Solana' }
          ],
          correctAnswer: 'c',
          explanation: 'Con 3-5 protocolos establecidos (auditados, con historial y TVL alto), un hack te cuesta una parte, no todo. Con 20 posiciones no puedes vigilar ninguna bien, y el tamaño de un protocolo no lo hace inmune: algunos de los mayores hacks fueron a protocolos grandes.'
        },
        {
          id: 'q5',
          type: 'true-false',
          question: 'Si un protocolo tiene una auditoría de una firma reconocida, ya no puede ser hackeado.',
          correctAnswer: false,
          explanation: 'Falso. Una auditoría reduce el riesgo, pero no lo elimina: revisa el código en un momento dado, puede pasar por alto errores y no cubre los cambios posteriores ni el control de las llaves de administrador. Varios protocolos auditados fueron hackeados.'
        },
        {
          id: 'q6',
          type: 'multiple-select',
          question: '¿Cuáles de estas son señales de alerta de un posible rug pull? Selecciona todas las que apliquen.',
          options: [
            { id: 'a', text: 'Equipo anónimo sin historial verificable' },
            { id: 'b', text: 'Varias auditorías publicadas y verificables' },
            { id: 'c', text: 'Liquidez del pool sin bloquear' },
            { id: 'd', text: 'Promesas de rendimientos absurdos' },
            { id: 'e', text: 'Años operando sin ningún incidente' },
            { id: 'f', text: 'Presión para invertir rápido' }
          ],
          correctAnswers: [0, 2, 3, 5],
          explanation: 'Un rug pull es una estafa deliberada, y las señales suelen estar a la vista: equipo anónimo que puede desaparecer, liquidez que pueden retirar cuando quieran, rendimientos imposibles y urgencia para que no investigues. RugCheck ayuda a revisar tokens de Solana. Las auditorías y el historial limpio apuntan en la dirección contraria.'
        },
        {
          id: 'q7',
          question: '¿Cuál de estos protocolos tiene, en general, menos riesgo?',
          options: [
            { id: 'a', text: 'Varias auditorías, años sin hacks, TVL alto sostenido y bug bounty' },
            { id: 'b', text: 'El que ofrece el APY más alto, porque así atrae más capital y seguridad' },
            { id: 'c', text: 'El más nuevo, porque usa la tecnología más reciente y mejor diseñada' },
            { id: 'd', text: 'El que promete reembolsar a sus usuarios cualquier pérdida por hackeo' }
          ],
          correctAnswer: 'a',
          explanation: 'Cuanto más tiempo resiste un protocolo con mucho dinero dentro sin ser hackeado, menos probable es que tenga errores obvios. Las auditorías reducen el riesgo y el bug bounty paga a hackers éticos por avisar antes. Una promesa de reembolso vale lo que vale quien la hace, y suele ser una táctica de marketing. Ningún protocolo es 100% seguro.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Lending & Borrowing: tu health factor baja de 1.5 a 1.05 tras una caída del mercado. ¿Qué significa?',
          options: [
            { id: 'a', text: 'Que tu préstamo está más seguro, porque un número más bajo es mejor' },
            { id: 'b', text: 'Estás muy cerca de la liquidación: reduce la deuda o suma colateral ya' },
            { id: 'c', text: 'Nada urgente: la liquidación solo empieza cuando el colateral vale cero' },
            { id: 'd', text: 'Que el protocolo te cobrará más interés, pero el riesgo sigue igual' }
          ],
          correctAnswer: 'b',
          explanation: 'Con un health factor de 1 empieza la liquidación. En 1.05, una caída pequeña más del colateral basta para que te liquiden y pierdas parte de él con penalización. Repagar deuda o sumar colateral sube el número. (Lo viste en la lección Lending & Borrowing.)'
        }
      ]
    }
  },
  29: {
    id: 29,
    title: 'NFTs en Solana',
    level: 'Avanzado',
    number: '8 de 13',
    duration: '18 min',
    type: 'Mercado',
    description: 'Los NFTs en Solana van mucho más allá de "JPEGs caros". Son acceso a comunidades exclusivas, herramientas de identidad digital, compresión que permite mintear millones por centavos, y un mercado profesional con Tensor y Magic Eden.',
    sections: [
      {
        type: 'intro',
        title: 'Más Allá de los JPEGs',
        content: 'Si tu imagen de los NFTs se quedó en "monos caros en Ethereum" (Bored Apes) del 2021, necesitas actualizarte. Los NFTs en Solana han evolucionado en algo fundamentalmente diferente. Sí, existe el componente de arte y coleccionismo, pero lo más interesante es cómo los NFTs se han convertido en **herramientas de acceso, identidad y utilidad**. Un NFT de Mad Lads no es solo una imagen, es tu entrada a una de las comunidades más activas del ecosistema Solana, con acceso exclusivo a eventos, airdrops, y networking. Otros NFTs dan beneficios dentro de una app o un protocolo. Los cNFTs (NFTs comprimidos) permiten crear un millón de tokens por unos pocos SOL, abriendo casos de uso que en Ethereum son económicamente imposibles: tickets de eventos, certificados educativos, items de videojuegos, y más.',
        highlight: {
          title: 'La Ventaja de Solana',
          text: 'Mintear un NFT en Ethereum L1 cuesta desde centavos hasta varios dólares en gas, según la congestión (en 2021 llegó a $30-100+). En Solana, un NFT con el estándar clásico cuesta alrededor de 0.01-0.02 SOL, casi todo en rent, un depósito que recuperas si quemas el NFT; con **Metaplex Core**, el estándar más nuevo, unos 0.002-0.003 SOL. La verdadera diferencia son los cNFTs (comprimidos): cuestan fracciones de centavo cada uno, y un árbol para **1 millón de NFTs cuesta entre ~2 y 9 SOL** según cómo se configure. Esa diferencia habilita categorías enteras de uso que de otra forma serían imposibles.'
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
          { icon: Cpu, title: 'cNFTs (Compressed NFTs)', text: 'La innovación más importante de Solana para NFTs. Usando "state compression", puedes crear millones de NFTs por una fracción del costo normal. DRiP.haus distribuyó millones de NFTs artísticos gratis usando esta tecnología. Los proyectos de gaming pueden crear items in-game como NFTs comprimidos. Las empresas pueden emitir tickets, certificados y collectibles a escala masiva. El lado oscuro: como son casi gratis, los cNFTs también son el canal favorito para enviar spam y enlaces a drainers.' },
          { icon: Award, title: 'NFTs de Utilidad', text: 'NFTs que dan acceso o beneficios concretos: descuentos en fees de una plataforma, acceso a contenido premium, pases VIP para eventos, governance en DAOs, o bonificaciones en protocolos DeFi. El valor de estos NFTs está directamente vinculado a la utilidad que ofrecen, no a la especulación.' },
          { icon: Gem, title: 'Arte Generativo y 1/1', text: 'Artistas digitales usan Solana para crear y vender arte en formato NFT. Las colecciones generativas crean piezas únicas usando algoritmos. Los artistas 1/1 venden piezas individuales como obras de arte digital. Exchange Art es la plataforma curada de referencia para arte 1/1 en Solana y facilita la venta directa de artista a coleccionista (Formfunction, otra plataforma de arte que competía en el mismo nicho, cerró en marzo de 2023).' }
        ]
      },
      {
        type: 'main',
        title: 'Los Marketplaces: Dónde Comprar y Vender',
        content: 'Para operar con NFTs en Solana, necesitas conocer los marketplaces principales:',
        features: [
          { icon: BarChart3, title: 'Tensor', text: 'El marketplace más orientado a traders. Interfaz tipo exchange con orderbooks, gráficos de floor price, y herramientas analíticas avanzadas. Permite hacer ofertas (bids) en colecciones enteras y tiene fees competitivos. Es la segunda plataforma por volumen, detrás de Magic Eden, aunque la proporción exacta cambia mucho según el tracker que consultes.' },
          { icon: Globe, title: 'Magic Eden', text: 'El marketplace más conocido y accesible, y el que más volumen mueve en Solana según la mayoría de trackers. Interfaz amigable para principiantes, y en febrero de 2026 anunció que se reenfoca 100% en Solana (cerró sus brazos de Bitcoin y EVM). Tiene launchpad para nuevas colecciones. OpenSea también lista NFTs de Solana desde septiembre de 2026, por ahora solo algunas colecciones.' },
          { icon: Search, title: 'Cómo Evaluar Antes de Comprar', text: 'Antes de comprar cualquier NFT, revisa: (1) Floor price (precio mínimo) y su tendencia, ¿sube o baja? (2) Volumen de trading, ¿hay actividad real o está muerto? (3) Holders únicos, ¿cuántas personas diferentes tienen NFTs de la colección? (4) Comunidad, ¿el Discord/Twitter está activo? (5) Utilidad, ¿qué beneficios concretos da tener el NFT? (6) Que sea la colección oficial: hay copias con el mismo nombre y la misma imagen, así que verifica la dirección de la colección en la web o el X oficial del proyecto. Y una regla de seguridad: antes de conectar tu wallet a un mint o marketplace nuevo, usa una burner wallet como enseña la lección de Seguridad Operacional Avanzada de este nivel.' }
        ]
      },
      {
        type: 'comparison',
        title: 'NFTs en Solana vs NFTs en Ethereum',
        leftSide: {
          title: 'Solana',
          points: [
            'Minteo: ~0.01-0.02 SOL (estándar clásico) o ~0.002-0.003 SOL (Metaplex Core), casi todo en rent recuperable',
            'cNFTs: fracciones de centavo por NFT a escala masiva',
            'Confirmación en menos de un segundo',
            'Marketplaces: Magic Eden, Tensor (y OpenSea en algunas colecciones)',
            'Enfoque en utilidad y comunidades activas',
            'Mercado más pequeño, enfocado en utilidad y cNFTs'
          ]
        },
        rightSide: {
          title: 'Ethereum',
          points: [
            'Costo de minteo en L1: desde centavos hasta varios dólares según la congestión',
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
          { icon: Lock, title: 'NFTs que No Pediste', text: 'Si aparece en tu wallet un NFT que no compraste, sobre todo uno que promete un premio o un airdrop, no lo abras ni visites el enlace que trae. Es la táctica más común para llevarte a un drainer: un sitio que te pide firmar una transacción que vacía tu wallet. Phantom oculta muchos como spam; tú solo ignóralos (o quémalos desde la wallet, que no requiere visitar ningún sitio).' },
          { icon: Shield, title: 'Criterios de Compra Inteligente', text: 'Compra NFTs por razones concretas: (1) Quieres ser parte de la comunidad y participar activamente. (2) La utilidad justifica el precio (descuentos, acceso, beneficios). (3) Te gusta genuinamente el arte y lo compras como coleccionista. (4) Entiendes que es especulación pura y usas dinero que puedes perder. NUNCA compres un NFT "porque está subiendo" sin entender qué estás comprando.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'NFTs: Lo Que Realmente Importa',
        items: [
          'Los NFTs son certificados de propiedad digital únicos en la blockchain. En Solana van más allá de "JPEGs": son acceso a comunidades, herramientas de identidad, items de gaming, y certificados verificables.',
          'cNFTs (NFTs comprimidos) son la gran innovación de Solana: un millón de NFTs por unos pocos SOL, fracciones de centavo por unidad. Habilitan casos de uso masivos, y también mucho spam: no abras NFTs que no pediste.',
          'Los marketplaces principales son Magic Eden (accesible, líder en volumen, 100% enfocado en Solana desde 2026) y Tensor (herramientas para traders). OpenSea volvió a Solana en 2026 con algunas colecciones. Sin importar dónde compres, verifica que la colección sea la oficial.',
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
          question: '¿Qué son los cNFTs (NFTs comprimidos) y por qué importan en Solana?',
          options: [
            { id: 'a', text: 'Son NFTs con imágenes de baja resolución, para ahorrar espacio dentro de la red' },
            { id: 'b', text: 'Son NFTs temporales, que se destruyen solos después de un tiempo fijo' },
            { id: 'c', text: 'Usan compresión de estado para crear millones de NFTs por muy poco dinero' },
            { id: 'd', text: 'Son NFTs normales con otro nombre: la diferencia es solo de marketing' }
          ],
          correctAnswer: 'c',
          explanation: 'La compresión de estado guarda los datos de muchos NFTs de forma mucho más barata: un millón cuesta unos pocos SOL. Eso habilita tickets, items de juegos y certificados a gran escala. La imagen no tiene nada que ver: lo que se comprime es el registro on-chain. La otra cara es el spam, porque enviar NFTs a miles de wallets casi no cuesta nada.'
        },
        {
          id: 'q2',
          question: 'Vas a comprar tu primer NFT en Solana. ¿Qué deberías verificar antes?',
          options: [
            { id: 'a', text: 'Que sea el NFT más barato de la colección, porque así arriesgo mucho menos' },
            { id: 'b', text: 'Que el floor haya subido 30% hoy, porque eso confirma que hay demanda' },
            { id: 'c', text: 'Nada: si está en un marketplace grande, el marketplace ya lo verificó' },
            { id: 'd', text: 'Que la colección sea la oficial, y su floor, holders y volumen orgánico' }
          ],
          correctAnswer: 'd',
          explanation: 'El marketplace importa menos que lo que verificas: que sea la colección oficial (hay copias), cómo evoluciona el floor, cuántos holders únicos tiene y si el volumen es real. Un marketplace grande lista muchas colecciones, incluidas copias, así que estar listado no es una verificación.'
        },
        {
          id: 'q3',
          question: 'Un amigo dice: "Los NFTs son una estafa, son solo JPEGs caros". ¿Cuál es la respuesta más precisa?',
          options: [
            { id: 'a', text: 'Casi todas las colecciones especulativas pierden valor, pero la tecnología sirve' },
            { id: 'b', text: 'Tiene razón: todos los NFTs son estafas pensadas para quitar dinero a ingenuos' },
            { id: 'c', text: 'Se equivoca: todos los NFTs suben con el tiempo si tienes la suficiente paciencia' },
            { id: 'd', text: 'Se equivoca: los NFTs van a reemplazar pronto todo el sistema financiero actual' }
          ],
          correctAnswer: 'a',
          explanation: 'Tu amigo acierta en algo: más del 90% de las colecciones especulativas pierde su valor. Pero la tecnología, una propiedad digital verificable, tiene usos reales como tickets, credenciales, items de juegos y acceso a comunidades. Separar la tecnología de la especulación es la respuesta matizada.'
        },
        {
          id: 'q4',
          question: 'Una colección de 10,000 NFTs en Tensor tiene mucho volumen de trading, pero solo 150 holders únicos. ¿Qué indica?',
          options: [
            { id: 'a', text: 'Holders muy comprometidos, que operan mucho porque creen en el proyecto' },
            { id: 'b', text: 'Probable wash trading: pocas wallets se compran y venden entre ellas' },
            { id: 'c', text: 'Es normal: las colecciones exitosas siempre tienen muy pocos holders' },
            { id: 'd', text: 'Que el precio va a subir pronto, porque hay mucho volumen de compra' }
          ],
          correctAnswer: 'b',
          explanation: 'Mucho volumen con pocos holders es una señal clásica de wash trading: unas pocas personas operan entre sí para inflar el volumen y atraer compradores reales. Una colección sana tiene miles de holders. Revisa siempre la relación entre holders y supply antes de comprar.'
        },
        {
          id: 'q5',
          question: '¿Por qué mintear un NFT en Solana cuesta una fracción de lo que cuesta en Ethereum L1?',
          options: [
            { id: 'a', text: 'Por la arquitectura: fees de centavos y compresión que los baja aún más' },
            { id: 'b', text: 'Porque los NFTs de Solana son de menor calidad que los NFTs de Ethereum L1' },
            { id: 'c', text: 'Porque la Fundación Solana subsidia cada minteo con su propio tesoro' },
            { id: 'd', text: 'Porque Solana guarda las imágenes completas dentro de cada bloque' }
          ],
          correctAnswer: 'a',
          explanation: 'Solana procesa muchas transacciones por segundo con fees de fracciones de centavo, y los cNFTs bajan aún más el costo. En Ethereum L1 el gas de un mint va de centavos a varios dólares y se dispara con la congestión. Ninguna red guarda las imágenes dentro de los bloques: el NFT apunta a un archivo guardado fuera de la cadena.'
        },
        {
          id: 'q6',
          type: 'true-false',
          question: 'Más del 90% de las colecciones de NFTs termina perdiendo su valor con el tiempo.',
          correctAnswer: true,
          explanation: 'Verdadero. Las que sobreviven suelen tener una comunidad activa, utilidad concreta y un equipo que sigue construyendo. Por eso un NFT nunca es una inversión segura: compra solo lo que puedas justificar más allá de "está subiendo".'
        },
        {
          id: 'q7',
          type: 'multiple-select',
          question: '¿Cuáles de estos beneficios suelen sostener el valor de un NFT con el tiempo? Selecciona todos los que apliquen.',
          options: [
            { id: 'a', text: 'Acceso exclusivo a una comunidad productiva' },
            { id: 'b', text: 'Que su imagen sea rara dentro de la colección' },
            { id: 'c', text: 'Descuentos en las fees de un protocolo' },
            { id: 'd', text: 'Que un influencer famoso lo haya comprado' },
            { id: 'e', text: 'Airdrops para quienes lo tienen' }
          ],
          correctAnswers: [0, 2, 4],
          explanation: 'El valor sostenido viene de beneficios concretos: acceso, descuentos, airdrops o membresía. La rareza de la imagen y la compra de un famoso mueven el precio un tiempo, pero no generan valor por sí mismas: el valor está en la utilidad, no en la imagen.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Riesgos de DeFi: La Guía Completa: ¿por qué conviene separar tus wallets por nivel de riesgo?',
          options: [
            { id: 'a', text: 'Porque cada wallet nueva recibe más airdrops que una wallet antigua' },
            { id: 'b', text: 'Porque así pagas menos fees en cada transacción que firmas en DeFi' },
            { id: 'c', text: 'Porque una sola wallet no puede guardar más de cierta cantidad de tokens' },
            { id: 'd', text: 'Si una wallet de pruebas se compromete, tus ahorros siguen a salvo' }
          ],
          correctAnswer: 'd',
          explanation: 'Una cold wallet para ahorros, una hot wallet para DeFi establecido y una burner para experimentar (como mintear o abrir cosas nuevas) limitan el daño de un error o de una firma maliciosa. (Lo viste en la lección Riesgos de DeFi: La Guía Completa.)'
        }
      ]
    }
  },
  30: {
    id: 30,
    title: 'Airdrops y Points Farming',
    level: 'Avanzado',
    number: '9 de 13',
    duration: '19 min',
    type: 'Estrategia',
    description: 'Los protocolos necesitan usuarios, y los recompensan con tokens de gobernanza. Solana tuvo algunos de los airdrops más comentados de 2023 y 2024: JTO, JUP, PYTH, W. Aprende a posicionarte como usuario temprano legítimamente.',
    sections: [
      {
        type: 'intro',
        title: 'Recompensas por Ser Temprano',
        content: 'En el mundo tradicional, los primeros clientes de una empresa no reciben nada especial. En crypto, los protocolos frecuentemente **regalan tokens de gobernanza** a sus primeros usuarios como recompensa por haber confiado en ellos cuando nadie más lo hacía. Algunos de estos "airdrops" entregaron montos grandes, aunque la mayoría de usuarios recibió poco. El airdrop de Jito (JTO) en diciembre de 2023 fue tan generoso que su asignación mínima elegible (~4,900 JTO) valía alrededor de $10,000 al momento del listado, solo por haber hecho staking de SOL a través de Jito. Jupiter (JUP) regaló tokens a quienes habían usado el DEX. Wormhole (W) recompensó a usuarios que habían hecho bridges. ¿La clave? No eran "inversores", eran **usuarios genuinos** que usaban estos protocolos como parte de su actividad normal en Solana. Los airdrops recompensan comportamiento orgánico, no especulación. Una advertencia honesta antes de empezar: la era dorada de los airdrops fue 2023-2024, los grandes protocolos de Solana ya lanzaron sus tokens, y las oportunidades de hoy son más competitivas y más modestas. Las estrategias de esta lección siguen aplicando, pero ajusta tus expectativas.',
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
          { icon: Wallet, title: 'Farmea Desde una Wallet de Actividad', text: 'El airdrop llega a la wallet que usó el protocolo, así que normalmente tendrás que reclamar desde esa misma wallet. Por eso conviene hacer toda tu actividad de farming desde una wallet operativa separada de tus ahorros y con poco saldo, nunca desde tu cold storage. Al reclamar, verifica el dominio dos veces y, apenas recibas los tokens, mueve lo que quieras conservar a una wallet más segura. Es la arquitectura de la lección Seguridad Operacional Avanzada: cold storage para ahorros, hot wallet para operar y farmear, burner para experimentos.' }
        ],
        highlight: {
          title: 'La Regla de Oro del Claim',
          text: 'Dominio oficial verificado + wallet de actividad con poco saldo + nunca pagar por recibir. Si cumples estas tres reglas, reduces muchísimo el riesgo, aunque ninguna regla lo elimina del todo: lee siempre la simulación antes de firmar.'
        }
      },
      {
        type: 'main',
        title: 'El Sistema de Puntos: La Nueva Norma',
        content: 'Desde 2024, la mayoría de protocolos han adoptado un sistema de "puntos" en lugar de airdrops sorpresa. Es más transparente pero también más competitivo:',
        features: [
          { icon: Target, title: 'Cómo Funcionan los Puntos', text: 'El protocolo anuncia públicamente: "Estamos dando puntos por usar nuestro producto". Cada acción (swap, depositar liquidez, hacer staking) acumula puntos. Cuando el protocolo lance su token, los puntos se convertirán en una asignación proporcional del airdrop. Más puntos = más tokens. Ejemplo: Kamino daba puntos por depositar en lending/borrowing antes de lanzar KMNO.' },
          { icon: BarChart3, title: 'La Economía de los Puntos', text: 'Los puntos crean un "mercado de expectativas". Si un protocolo tiene $500M en TVL acumulando puntos, y se espera que el token tenga un FDV (Fully Diluted Valuation) de $1B con un airdrop del 10% ($100M), entonces cada punto tiene un "valor estimado". Los farmers sofisticados calculan el ratio puntos/dólar para determinar si vale la pena.' },
          { icon: AlertTriangle, title: 'El Riesgo de los Puntos', text: 'No hay garantía de que los puntos se conviertan en tokens. El protocolo puede cambiar los criterios, reducir el porcentaje del airdrop, o añadir dilución con más temporadas de puntos. Además, si todos están farmeando el mismo protocolo, la asignación per cápita se diluye. No trates los puntos como dinero seguro, son una apuesta educada.' },
          { icon: Shield, title: 'Lo Que Arriesgas Mientras Farmeas', text: 'Para ganar puntos, depositas capital en protocolos jóvenes. Eso suma riesgos reales: un bug o hackeo del contrato, impermanent loss si das liquidez, liquidación si pides prestado, una stablecoin que pierde su paridad, y el costo de oportunidad de tener ese dinero quieto. Un airdrop de $300 no compensa perder $3,000 depositados.' },
          { icon: Globe, title: 'Lee los Términos', text: 'Muchos protocolos excluyen ciertos países en sus términos de uso o al momento del claim. Usar una VPN para saltarte esa restricción puede anular tu asignación. Y en Colombia, la DIAN trata los airdrops como ganancia ocasional (Concepto 18075 de 2023): lleva registro del valor al recibirlos y consúltalo con un contador (lo viste en Tu Plan de Inversión Personal).' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Posicionarte para Airdrops en Solana',
        content: 'La estrategia más efectiva no es "farmear" artificialmente, es ser un usuario genuino y activo del ecosistema:',
        features: [
          { icon: Zap, title: 'La Realidad de 2026: Los Grandes Ya Lanzaron', text: 'Jupiter, Jito, Kamino, Marinade, Drift, Tensor y Meteora ya emitieron sus tokens: el primer airdrop grande de cada uno ya pasó. Las rondas siguientes tampoco están garantizadas: Jupiter pagó su Jupuary en 2024 y 2025, pero en febrero de 2026 la DAO lo aplazó sin fecha y devolvió los 700 millones de JUP a una multisig comunitaria. Siguen existiendo programas de puntos con temporadas nuevas y protocolos jóvenes sin token, pero ajusta tus expectativas. (Y desconfía de quien te ofrezca reclamar un token que no existe: marginfi, hoy Project 0, no tiene token.)' },
          { icon: Clock, title: 'Sé Consistente, No Puntual', text: 'Los criterios de airdrop favorecen la consistencia. Un usuario que hace 10 transacciones al mes durante 12 meses es más valioso que uno que hace 100 transacciones en un solo día. Los protocolos buscan usuarios genuinos, no bots que hacen transacciones en masa para inflar actividad.' },
          { icon: Layers, title: 'Diversifica tus Actividades', text: 'No te limites a swaps. Haz staking, provee liquidez, usa lending, prueba nuevas funcionalidades. Los airdrops suelen dar bonificaciones por diversidad de uso (usar varias funciones del protocolo). Un usuario que usa 5 funciones diferentes es más valioso que uno que solo hace swaps repetitivos.' },
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
          { icon: TrendingDown, title: 'La Estadística Incómoda', text: 'Históricamente, la mayoría de tokens de airdrop pierden valor en las semanas/meses posteriores al lanzamiento. ¿Por qué? Porque millones de personas reciben tokens gratis y muchos los venden inmediatamente, creando presión de venta masiva. JTO cayó 50% desde su máximo post-airdrop. W (Wormhole) cayó significativamente. Incluso JUP cotizaba en noviembre de 2026 alrededor de $0.24, unos 64% por debajo de su precio de lanzamiento (~$0.65). La tendencia estadística es claramente bajista.' },
          { icon: Brain, title: 'La Estrategia Híbrida', text: 'Muchos traders experimentados usan una estrategia de 3 partes: (1) Vender 30-50% inmediatamente para "asegurar" ganancias reales. (2) Mantener 30-40% si crees en el protocolo a largo plazo. (3) Definir un stop loss mental para el resto ("si cae 50% desde aquí, vendo lo restante"). Esto te protege de la codicia ("puede subir más") y del arrepentimiento ("vendí todo y subió").' },
          { icon: CheckCircle, title: 'Factores a Considerar', text: '¿El token tiene utilidad real (governance, staking, descuentos)? ¿El protocolo tiene fundamentales sólidos (TVL creciente, fees altos, usuarios activos)? ¿La tokenomics es favorable (bajo supply circulante con vesting largo)? Si las respuestas son positivas, holdear una porción tiene sentido. Si el token es puro especulación sin utilidad, vender rápido suele ser la mejor estrategia.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Tu Estrategia de Airdrops',
        items: [
          'Los airdrops recompensan a usuarios genuinos y tempranos con tokens de gobernanza. Los más grandes de Solana (JUP, que está entre los mayores airdrops de la historia, y JTO, PYTH, W) dieron miles de dólares a algunos usuarios activos, aunque la mayoría recibió mucho menos. Esa era dorada fue 2023-2024: hoy las oportunidades son más modestas, pero el principio sigue vigente.',
          'El sistema de puntos es la nueva norma: los protocolos anuncian puntos por usar su producto, que luego se convierten en tokens. Es más transparente pero no garantizado, los criterios pueden cambiar.',
          'La mejor estrategia es ser un usuario genuino y diverso. Los protocolos grandes ya tienen token, así que apunta a programas de puntos, rondas estacionales, y protocolos nuevos sin token. Sé consistente durante meses.',
          'Seguridad primero: reclama airdrops SOLO desde el dominio oficial del protocolo (verificado en su X o Discord oficial), nunca pagues una "fee de desbloqueo", y farmea desde una wallet de actividad con poco saldo, separada de tus ahorros.',
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
          question: '¿Cuál es la forma más efectiva de posicionarte para futuros airdrops en Solana?',
          options: [
            { id: 'a', text: 'Crear 100 wallets y hacer al menos una transacción desde cada una' },
            { id: 'b', text: 'Empezar a usar el protocolo el mismo día en que anuncian el airdrop' },
            { id: 'c', text: 'Usar varios protocolos de forma real y constante durante meses' },
            { id: 'd', text: 'Mover mucho volumen en un solo día, justo antes de la fecha del snapshot' }
          ],
          correctAnswer: 'c',
          explanation: 'Los criterios suelen premiar antigüedad, constancia, volumen orgánico y variedad de funciones usadas. Quien aparece el día del snapshot con un pico de actividad se parece más a un farmer que a un usuario, y los protocolos lo saben. Y hoy las oportunidades son más modestas que en 2023-2024.'
        },
        {
          id: 'q2',
          question: '¿Qué es el "Sybil farming" y por qué conviene evitarlo?',
          options: [
            { id: 'a', text: 'Una estrategia legítima, porque cada wallet nueva cuenta como un usuario' },
            { id: 'b', text: 'Usar muchas wallets falsas; los protocolos las detectan y las excluyen' },
            { id: 'c', text: 'Un tipo de staking avanzado que multiplica los puntos de cada wallet' },
            { id: 'd', text: 'Usar varias wallets propias, algo que los protocolos no pueden rastrear' }
          ],
          correctAnswer: 'b',
          explanation: 'Simular muchos usuarios con wallets propias es justo lo que los protocolos buscan filtrar: agrupan wallets que se envían fondos entre sí, que actúan con los mismos tiempos o que se financian desde el mismo origen. Las excluyen o les dan cantidades mínimas, y pierdes el tiempo invertido.'
        },
        {
          id: 'q3',
          question: 'Recibes un airdrop valorado en $4,000 al momento del claim. ¿Cuál es la estrategia más prudente?',
          options: [
            { id: 'a', text: 'Mantengo todo, porque los tokens de airdrop suelen subir tras el lanzamiento' },
            { id: 'b', text: 'Lo pongo todo en un pool de liquidez del mismo token para cobrar más fees' },
            { id: 'c', text: 'Lo uso como colateral para pedir prestado y comprar más del mismo token' },
            { id: 'd', text: 'Vendo 30-50% pronto y le doy al resto un plan, si creo en el protocolo' }
          ],
          correctAnswer: 'd',
          explanation: 'Históricamente, la mayoría de los tokens de airdrop pierde valor tras el lanzamiento, porque muchos receptores venden a la vez. Vender una parte asegura dinero real. Lo que mantienes necesita su propio plan, con órdenes reales y no un stop mental. Y la venta puede generar impuestos.'
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Estima cuánto podría valer tu asignación.',
          textBefore: 'Un protocolo con $300M de TVL podría lanzar un token de $500M de FDV y dar el 10% al airdrop. Si tu depósito es el 0.01% del TVL y el reparto fuera proporcional, recibirías unos $',
          textAfter: '.',
          correctAnswer: '5000',
          acceptableAnswers: ['5000', '5,000', '5.000', '$5000', '$5,000', '$5.000', '5k', '5000 usd', '5000 dolares', '5000 dólares'],
          explanation: 'Airdrop total = $500M × 10% = $50M. Tu parte = $50M × 0.01% = $5,000. Es una estimación optimista: el FDV, el porcentaje y los criterios pueden cambiar, y el precio suele caer tras el lanzamiento. Si depositas capital que estaría mejor en otro lugar solo por los puntos, compara con ese costo.'
        },
        {
          id: 'q5',
          question: '¿Qué protocolos de Solana son los mejores candidatos para un airdrop futuro?',
          options: [
            { id: 'a', text: 'Los que ofrecen el APY más alto, porque reparten más a sus usuarios' },
            { id: 'b', text: 'Los más nuevos, porque todos los protocolos nuevos hacen algún airdrop' },
            { id: 'c', text: 'Los que tienen producto, TVL creciente y VCs, pero todavía sin token' },
            { id: 'd', text: 'Los que ya tienen token, porque pueden repartir más del mismo token' }
          ],
          correctAnswer: 'c',
          explanation: 'Un protocolo con producto real, TVL creciente y VCs que esperan un token para recuperar su inversión, pero sin token propio todavía, es el candidato clásico. Que sea nuevo no basta: muchos protocolos nuevos nunca lanzan token. DefiLlama te ayuda a filtrar.'
        },
        {
          id: 'q6',
          question: 'Te llega un DM: "Tu airdrop de JUP está listo. Paga 0.1 SOL de fee de desbloqueo en este enlace". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Pago, porque 0.1 SOL es muy poco comparado con lo que voy a recibir' },
            { id: 'b', text: 'Pago desde una wallet vacía, y así solo arriesgo la fee de desbloqueo' },
            { id: 'c', text: 'Respondo al DM para confirmar que es oficial antes de pagar la fee' },
            { id: 'd', text: 'Lo ignoro: un airdrop real nunca te pide pagar para poder reclamarlo' }
          ],
          correctAnswer: 'd',
          explanation: 'Una "fee de desbloqueo" es la firma clásica de una estafa. Y el riesgo no es solo el 0.1 SOL: el enlace suele pedir una firma que puede vaciar la wallet que conectes. Reclama solo desde el dominio oficial del protocolo, verificado en su X o Discord oficial.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Los puntos de un protocolo garantizan una cantidad fija de tokens cuando lance su airdrop.',
          correctAnswer: false,
          explanation: 'Falso. Los puntos son más transparentes que los airdrops sorpresa, pero no son una promesa: el protocolo puede cambiar los criterios, la conversión o incluso no lanzar token. Trátalos como un posible bonus, no como un pago.'
        },
        {
          id: 'review_1',
          question: 'Repaso de NFTs en Solana: aparece en tu wallet un NFT que no pediste, con un enlace para "reclamar un premio". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Abro el enlace para ver si es un airdrop valioso que pueda vender' },
            { id: 'b', text: 'Lo vendo enseguida en un marketplace antes de que pierda su valor' },
            { id: 'c', text: 'No lo abro ni interactúo: suele ser spam o un intento de phishing' },
            { id: 'd', text: 'Lo envío a otra wallet mía para que no quede registrado en esta' }
          ],
          correctAnswer: 'c',
          explanation: 'Como los cNFTs cuestan casi nada, los estafadores los envían en masa con enlaces a sitios falsos. Interactuar con ellos, incluso para venderlos, puede pedirte firmas peligrosas. Déjalo ahí u ocúltalo. (Lo viste en la lección NFTs en Solana.)'
        }
      ]
    }
  },
  31: {
    id: 31,
    title: 'DePIN: Infraestructura Física Descentralizada',
    level: 'Avanzado',
    number: '10 de 13',
    duration: '18 min',
    type: 'Tendencias',
    description: 'Crypto sale del mundo digital al mundo físico. DePIN usa tokens para incentivar a millones de personas a construir infraestructura real: redes inalámbricas (Helium), mapas (Bee Maps, antes Hivemapper), computación GPU (Render), y sensores ambientales. Solana es uno de sus centros principales.',
    sections: [
      {
        type: 'intro',
        title: 'Cuando Crypto Construye el Mundo Real',
        content: 'Hasta ahora, todo lo que hemos visto en crypto ocurre en el mundo digital: tokens, DeFi, NFTs, staking. Pero hay una categoría que está llevando blockchain al **mundo físico**, y Solana es uno de sus centros principales. **DePIN** (Decentralized Physical Infrastructure Networks) usa incentivos en tokens para motivar a personas comunes a construir infraestructura que normalmente solo construyen corporaciones gigantes. ¿Quieres un competidor de Google Maps? En lugar de que Google pague millones a flotas de autos con cámaras, Bee Maps (antes Hivemapper) paga a quien instale su cámara en el auto y conduzca. ¿Quieres una red inalámbrica global? En lugar de que AT&T invierta miles de millones, Helium paga tokens a personas que instalan en sus casas hotspots de IoT (LoRaWAN) y de Wi-Fi. ¿Necesitas renderizado de video e IA? En lugar de depender solo de AWS, Render Network paga tokens a personas que comparten su GPU. El resultado: infraestructura construida por la gente, para la gente, incentivada por tokens. Es una de las narrativas con más impacto potencial en el mundo físico, aunque la mayoría de proyectos todavía no demuestra que sus ingresos cubran sus recompensas.',
        highlight: {
          title: 'Por Qué DePIN en Solana',
          text: 'DePIN necesita procesar millones de micro-transacciones de sensores y dispositivos. En Ethereum L1, con fees que suben con la congestión, eso sale caro; en Solana cuesta fracciones de centavo. Por eso Helium migró de su propia chain a Solana en 2023, y varios de los proyectos más grandes (Helium, Bee Maps, Render) operan allí. No es la única opción: Filecoin, Akash o Bittensor funcionan en sus propias redes, y el sector completo vale unos $10,000 millones según Messari.'
        }
      },
      {
        type: 'main',
        title: '¿Cómo Funciona DePIN?',
        content: 'El modelo DePIN invierte la lógica tradicional de construcción de infraestructura:',
        features: [
          { icon: Globe, title: 'El Modelo Tradicional', text: 'Una corporación invierte miles de millones de dólares en infraestructura (torres de celular, centros de datos, flotas de mapeo). Cobra a los usuarios por el servicio. La empresa captura todo el valor. Los usuarios son clientes, no participantes. El problema: es lento, costoso, y concentrado en pocas empresas.' },
          { icon: Users, title: 'El Modelo DePIN', text: 'Un protocolo crea un token e incentiva a personas comunes a proveer la infraestructura. Cada participante invierte poco (una dashcam de $300, un hotspot de $400, su GPU existente). A cambio, recibe tokens por el servicio que provee. Millones de pequeños participantes construyen una red más grande y distribuida que cualquier corporación. Los costos son menores, la cobertura es mayor, y el valor se distribuye entre todos los participantes.' },
          { icon: Network, title: 'El Flywheel (Ciclo Virtuoso)', text: 'Más participantes dan mejor servicio, el mejor servicio atrae más clientes, más clientes pagan más por la red y eso puede atraer más participantes. Este ciclo virtuoso es lo que permite que una red DePIN crezca rápido una vez que alcanza masa crítica. Helium pasó de 0 a casi 1 millón de hotspots registrados en su pico de 2022 usando este modelo. Ojo: el flywheel también gira en reversa, cuando las recompensas caen, los operadores apagan sus equipos (en noviembre de 2026, helium.com reporta unos 358,000 hotspots activos).' }
        ]
      },
      {
        type: 'main',
        title: 'Los Proyectos DePIN Más Importantes de Solana',
        content: 'Solana alberga varios de los proyectos DePIN más grandes y maduros del ecosistema crypto:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Smartphone, title: 'Helium (HNT)', text: 'La red inalámbrica descentralizada más grande del mundo. Personas instalan hotspots en casas y oficinas y ganan HNT por dar cobertura IoT (LoRaWAN) o por llevar tráfico móvil por Wi-Fi. Tiene unos 358,000 hotspots activos (llegó a registrar casi 1 millón en 2022). Desde HIP-138 (enero de 2025) todo se paga en HNT, y en marzo de 2025 dejó de usar las radios 5G (CBRS) para concentrarse en Wi-Fi. Helium Mobile vende planes celulares solo en EE. UU., y en México Movistar ya descarga tráfico de sus clientes en hotspots de Helium. Si quieres un hotspot IoT en Colombia, debe ser de la banda AU915.' },
          { icon: Eye, title: 'Bee Maps (antes Hivemapper, token HONEY)', text: 'Un mapa descentralizado. Instalas su cámara en el auto y te pagan por los kilómetros que mapeas: desde agosto de 2026, en USDC. Los datos crean un mapa que se actualiza mucho más seguido que los mapas tradicionales, y empresas de logística, navegación y urbanismo pagan por acceder a él. Ya mapearon millones de kilómetros. Ojo: la cámara se consigue con un plan de unos $19 al mes por 24 meses, y por ahora solo en EE. UU. y Puerto Rico.' },
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
          { icon: Smartphone, title: 'Operar Hardware', text: 'Consigues el dispositivo del proyecto (un hotspot de Helium cuesta unos cientos de dólares, la cámara de Bee Maps va por suscripción, y para Render usas tu GPU). Verifica primero que el proyecto opere en tu país. Lo conectas y empiezas a ganar tokens. El ROI depende del proyecto, tu ubicación, y la demanda del servicio. Investiga el payback period (cuántos meses tarda en recuperar la inversión del hardware) antes de comprar.' },
          { icon: BarChart3, title: 'Invertir en Tokens', text: 'Si no quieres operar hardware, puedes comprar los tokens de los proyectos DePIN (HNT, HONEY, RENDER, IO). Es una apuesta a que la red va a crecer y a que ese crecimiento se traduzca en demanda por el token, que no siempre ocurre. Los tokens DePIN tienden a estar más vinculados a métricas reales (número de dispositivos, revenue generado) que los memecoins, pero siguen siendo volátiles.' },
          { icon: Search, title: 'Evaluar Proyectos DePIN', text: 'Antes de participar, evalúa: (1) ¿Hay demanda real por el servicio? (mapeo, conectividad IoT/celular, GPU sí tienen demanda). (2) ¿El modelo económico es sostenible? (¿los ingresos de clientes pagan las recompensas?). (3) ¿Cuántos dispositivos activos hay? (más dispositivos = red más valiosa). (4) ¿El payback period del hardware es razonable? (menos de 12-18 meses idealmente).' }
        ]
      },
      {
        type: 'main',
        title: 'Riesgos y Realidades de DePIN',
        content: 'DePIN es una de las narrativas más prometedoras de crypto, pero no está libre de riesgos:',
        features: [
          { icon: AlertTriangle, title: 'Sostenibilidad de las Recompensas', text: 'Muchos proyectos DePIN empiezan con recompensas generosas en tokens para atraer participantes. Pero si la demanda real del servicio no crece lo suficiente, las recompensas disminuyen y los operadores de hardware dejan de participar. Busca proyectos donde los ingresos de clientes reales (no solo emisión de tokens) financien las recompensas.' },
          { icon: TrendingDown, title: 'Riesgo de Hardware', text: 'Compras un hotspot de $500 esperando recuperar la inversión en 6 meses. Pero el token cae 70%, o la red cambia sus criterios de recompensa, y ahora tu ROI es de 3 años. El hardware es un costo hundido, no puedes "vender" un hotspot de Helium por lo que pagaste si el proyecto no funciona.' },
          { icon: Brain, title: 'Regulación', text: 'DePIN opera en áreas que a veces están reguladas (telecomunicaciones, mapeo, almacenamiento de datos). Un cambio regulatorio puede afectar significativamente la viabilidad de ciertos proyectos en ciertos países. Helium Mobile, por ejemplo, solo vende planes en EE. UU.: ofrecer telefonía requiere permisos que varían por país.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'DePIN: El Puente entre Crypto y el Mundo Real',
        items: [
          'DePIN usa tokens para incentivar a personas a construir infraestructura física: redes inalámbricas (Helium), mapas (Bee Maps), computación GPU (Render), y más. Es crypto resolviendo problemas reales del mundo físico.',
          'Solana es uno de los hogares principales de DePIN porque procesa millones de micro-transacciones a costo casi cero. Helium migró a Solana por esa capacidad, aunque hay DePIN grandes en otras redes.',
          'Los proyectos principales: Helium (~358,000 hotspots activos en noviembre de 2026, tras un pico de casi 1 millón en 2022), Bee Maps (mapeo con cámaras en autos), Render Network (GPU para rendering/IA), io.net (computación GPU para IA).',
          'Puedes participar operando hardware (comprar y operar dispositivos) o invirtiendo en tokens. Antes de comprar hardware, calcula el payback period y verifica que la demanda real del servicio justifique la inversión.',
          'El modelo DePIN busca un flywheel: más participantes, mejor servicio, más clientes y, con eso, más participantes. Pero el flywheel también funciona en reversa: si el token cae y las recompensas bajan, los operadores apagan sus equipos, como le pasó a Helium después de su pico de 2022.',
          'Riesgos principales: recompensas en tokens pueden disminuir si la demanda real no crece, el hardware es un costo hundido difícil de recuperar, y la regulación puede afectar ciertos proyectos. Evalúa la sostenibilidad de los ingresos reales antes de comprometerte.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es DePIN y en qué se diferencia de la mayoría de los proyectos crypto?',
          options: [
            { id: 'a', text: 'Un tipo de exchange descentralizado que opera con activos del mundo físico' },
            { id: 'b', text: 'Un concepto teórico que todavía no tiene ningún proyecto funcionando hoy' },
            { id: 'c', text: 'Redes de servidores que solo existen dentro de la nube de grandes empresas' },
            { id: 'd', text: 'Redes que pagan en tokens a personas que construyen infraestructura física' }
          ],
          correctAnswer: 'd',
          explanation: 'DePIN usa incentivos en tokens para que personas comunes instalen y operen infraestructura: hotspots inalámbricos (Helium), cámaras de mapeo (Bee Maps) o GPUs (Render, io.net). A diferencia de DeFi o los NFTs, el resultado existe en el mundo físico. Y hay proyectos funcionando hoy con cientos de miles de dispositivos.'
        },
        {
          id: 'q2',
          question: '¿Por qué varios proyectos DePIN grandes eligieron Solana?',
          options: [
            { id: 'a', text: 'Procesa muchas microtransacciones de recompensas a un costo casi nulo' },
            { id: 'b', text: 'Porque Solana garantiza que los tokens de DePIN suban de precio con el uso' },
            { id: 'c', text: 'Porque en Solana los dispositivos pueden operar sin conexión a internet' },
            { id: 'd', text: 'Porque es la única blockchain capaz de registrar datos del mundo físico' }
          ],
          correctAnswer: 'a',
          explanation: 'Una red DePIN genera un volumen enorme de pequeñas transacciones: cada dispositivo reporta, recibe recompensas y se coordina con la red. A fracciones de centavo por transacción, eso es viable en Solana. Helium migró a Solana por esa razón. No es la única opción: hay DePIN grandes en otras redes.'
        },
        {
          id: 'q3',
          question: 'Quieres comprar un hotspot de Helium de $300 para tu apartamento en Medellín. ¿Qué deberías revisar antes?',
          options: [
            { id: 'a', text: 'El payback según lo que ganan los hotspots cercanos, y que use la banda AU915' },
            { id: 'b', text: 'Solo el precio actual de HNT, porque es lo único que define cuánto vas a ganar' },
            { id: 'c', text: 'Nada: un hotspot es un ingreso pasivo que se paga solo en pocas semanas' },
            { id: 'd', text: 'Cuántos hotspots hay en el mundo, porque más red significa más pagos para ti' }
          ],
          correctAnswer: 'a',
          explanation: 'Lo que importa es lo que ganan hoy los hotspots de tu zona (revísalo en un explorador) y cuánto tardas en recuperar los $300. Colombia usa la banda AU915, así que un equipo de otra banda no sirve. El precio de HNT es solo una parte: si en tu zona ya hay muchos hotspots, cada uno gana menos.'
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Calcula el payback de un hotspot.',
          textBefore: 'Un hotspot cuesta $300 y los de tu zona ganan hoy unos $15 al mes. A ese ritmo, recuperas la inversión en',
          textAfter: 'meses.',
          correctAnswer: '20',
          acceptableAnswers: ['20', 'veinte', '20 meses', '~20'],
          explanation: '$300 ÷ $15 al mes = 20 meses. Es más que el rango de 12-18 meses que la lección sugiere como límite razonable, y supone que el precio del token y las recompensas se mantienen. Si el token cae, el payback se alarga todavía más.'
        },
        {
          id: 'q5',
          question: '¿Cuál es el mayor riesgo de participar en DePIN como operador de hardware?',
          options: [
            { id: 'a', text: 'Que el equipo se rompa, porque no tiene garantía ni piezas de repuesto' },
            { id: 'b', text: 'Ninguno: el protocolo garantiza un ingreso pasivo a cada operador' },
            { id: 'c', text: 'Que la red te cobre una fee mensual cada vez más alta por conectarte' },
            { id: 'd', text: 'Que el token de recompensa caiga y el payback pase de meses a años' }
          ],
          correctAnswer: 'd',
          explanation: 'Si compras un equipo de $500 y el token cae 80%, un payback de 6 meses puede convertirse en 3 años o más. Y a diferencia de un token, que puedes vender en segundos, el hardware especializado tiene poco valor de reventa: es un costo hundido. Ningún protocolo garantiza ingresos.'
        },
        {
          id: 'q6',
          question: '¿Qué diferencia a un proyecto DePIN sostenible de uno que probablemente fracasará?',
          options: [
            { id: 'a', text: 'El token con más hype, porque atrae operadores a la red más rápido' },
            { id: 'b', text: 'Clientes reales que pagan por el servicio, no solo emisión de tokens' },
            { id: 'c', text: 'El mayor número de dispositivos, sin importar los ingresos que generen' },
            { id: 'd', text: 'Recompensas altas, porque garantizan que nadie apague su equipo nunca' }
          ],
          correctAnswer: 'b',
          explanation: 'Si las recompensas vienen solo de imprimir tokens, la economía depende de que entre dinero nuevo. Un proyecto sostenible tiene clientes que pagan por cobertura, datos o cómputo. Muchos dispositivos sin demanda real solo reparten las mismas recompensas entre más gente, como le pasó a Helium tras su pico de 2022.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'El flywheel de DePIN también puede funcionar en reversa: si el token cae y las recompensas bajan, los operadores apagan sus equipos y el servicio empeora.',
          correctAnswer: true,
          explanation: 'Verdadero. Helium pasó de casi 1 millón de hotspots en 2022 a unos 358,000 activos en noviembre de 2026. El mismo mecanismo que hace crecer la red puede encogerla cuando las recompensas dejan de cubrir los costos.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Airdrops y Points Farming: ¿por qué conviene farmear desde una wallet de actividad, separada y con poco saldo?',
          options: [
            { id: 'a', text: 'Si firmas algo malicioso por error, el daño queda limitado a esa wallet' },
            { id: 'b', text: 'Porque los protocolos dan más puntos a las wallets que tienen poco saldo' },
            { id: 'c', text: 'Porque así puedes crear muchas wallets y multiplicar tu asignación' },
            { id: 'd', text: 'Porque las wallets con mucho saldo quedan excluidas de los airdrops' }
          ],
          correctAnswer: 'a',
          explanation: 'Farmear implica conectarte a protocolos nuevos y firmar muchas transacciones. Si una resulta maliciosa, solo pierdes lo que hay en esa wallet, no tus ahorros. Usarla para crear muchas wallets sería Sybil farming, que los protocolos penalizan. (Lo viste en la lección Airdrops y Points Farming.)'
        }
      ]
    }
  },
  32: {
    id: 32,
    title: 'Monolítico vs Modular: La Guerra de Arquitecturas',
    level: 'Avanzado',
    number: '11 de 13',
    duration: '20 min',
    type: 'Técnico',
    description: 'El debate más importante de la industria: ¿es mejor una blockchain monolítica ultra-rápida (Solana) o un ecosistema modular de capas especializadas (Ethereum + L2s)? Entiende los trade-offs para tomar mejores decisiones de inversión.',
    sections: [
      {
        type: 'intro',
        title: 'El Gran Debate de la Escalabilidad',
        content: 'Imagina que necesitas transportar a millones de personas por una ciudad. Hay dos filosofías: construir un **tren bala gigante** que lleva a todos en una sola línea ultra-rápida (Solana), o construir **muchas líneas de metro separadas** que se conectan entre sí con estaciones de transferencia (Ethereum + L2s). Cada enfoque tiene ventajas y desventajas fundamentales. Entender este debate no es solo académico, tiene implicaciones directas en tus decisiones de inversión y en qué ecosistema usas para DeFi. Para entender el debate, primero hay que saber que toda blockchain hace cuatro trabajos: **ejecución** (correr las transacciones), **liquidación** o settlement (donde un resultado se considera final y se resuelven disputas), **consenso** (acordar el orden) y **disponibilidad de datos** (publicar los datos para que cualquiera pueda verificar). Solana apuesta por la arquitectura **monolítica**: hacer los cuatro en una sola capa, lo más rápido posible. Ethereum apuesta por la arquitectura **modular**: las L2 ejecutan, y Ethereum L1 se encarga del consenso, la liquidación y la disponibilidad de datos. Ningún enfoque es "mejor" en absoluto, cada uno sacrifica algo para ganar algo diferente.',
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
          { icon: Zap, title: 'Velocidad Bruta', text: 'Solana procesa en producción de cientos a unos pocos miles de transacciones de usuarios por segundo, según la carga, y desde octubre de 2026 produce un bloque cada ~200 milisegundos (antes ~400). Ojo al leer exploradores: con la actualización Alpenglow, los votos de los validadores dejaron de contarse como transacciones, así que el TPS reportado bajó sin que la red se hiciera más lenta. Aun así, es mucho más que Ethereum L1. Firedancer apunta a bastante más capacidad, aunque las cifras de un millón de TPS vienen de pruebas, no de producción. Todo esto en una sola capa, sin L2s ni bridges. Un swap en Jupiter se confirma en menos de un segundo.' },
          { icon: Layers, title: 'Componibilidad Sincrónica', text: 'Esta es quizás la ventaja más poderosa de Solana. En una sola transacción atómica, puedes: hacer un swap en Jupiter + depositar en Kamino + stakear el resultado en Jito. Las tres operaciones ocurren instantáneamente en el mismo bloque. Si alguna falla, TODAS se revierten. Esto permite construir operaciones DeFi complejas que son imposibles cuando las apps están en diferentes L2s.' },
          { icon: Server, title: 'La Apuesta en Hardware', text: 'La filosofía de Solana es que el hardware mejora constantemente (Ley de Moore). En lugar de diseñar software complejo para dividir la carga, Solana diseña software que aprovecha al máximo el hardware más potente disponible. A medida que los procesadores y la fibra óptica mejoran, Solana puede volverse más rápida sin rediseños de fondo. El costo: cada salto exige que los validadores actualicen su hardware.' },
          { icon: Activity, title: 'Mercados de Fees Localizados', text: 'Una crítica histórica a las cadenas monolíticas: si todo pasa en una sola cadena, un evento caliente (un mint masivo, un memecoin viral) congestiona a TODOS. Solana lo mitiga con mercados de fees localizados: la competencia por prioridad se da sobre las cuentas que cada transacción toca, no sobre toda la red. Si hay una guerra de fees por un token de moda, quienes compiten por ESE token pagan más, y tu swap de SOL-USDC normalmente sigue costando fracciones de centavo. Funciona en buena medida, pero no es perfecto: si la demanda satura la red entera, o si tu transacción toca una cuenta muy disputada, también lo sientes.' }
        ]
      },
      {
        type: 'main',
        title: 'El Enfoque Modular: La Tesis de Ethereum',
        content: 'Ethereum cree que una sola blockchain no puede escalar lo suficiente sin sacrificar descentralización. Su solución: separar las funciones en capas especializadas:',
        features: [
          { icon: Network, title: 'L1 + L2s: División del Trabajo', text: 'Ethereum L1 se especializa en seguridad y consenso. Las L2s (Arbitrum, Optimism, Base, zkSync) se especializan en ejecutar transacciones rápidamente y a bajo costo. Las L2s publican los datos de sus transacciones en Ethereum L1, y de ahí heredan buena parte de su seguridad. Es como si cada L2 fuera una sucursal bancaria, y Ethereum L1 fuera la bóveda central.' },
          { icon: Shield, title: 'Máxima Descentralización en L1', text: 'Al mantener Ethereum L1 "lento" pero accesible (puedes correr un nodo en un laptop), maximizan la descentralización de la capa base. Cualquiera puede verificar la cadena. Operar un validador de Solana cuesta unos $600-1,300 al mes en un servidor dedicado, más unos 0.8 SOL por epoch en tarifas de votación, lo que concentra la operación de nodos en manos de quienes pueden costear ese hardware.' },
          { icon: Layers, title: 'Rollups: El Mecanismo', text: 'Las L2s ejecutan miles de transacciones fuera de L1 y publican en Ethereum los datos comprimidos de esas transacciones. Hay dos tipos. Los **Optimistic Rollups** (Arbitrum, Base) publican los datos y el nuevo estado, sin prueba: se asume válido salvo que alguien demuestre un fraude dentro de una ventana de disputa, y por eso retirar a L1 por el puente oficial tarda unos 7 días. Los **ZK Rollups** (zkSync, Starknet) publican además una prueba matemática de validez. Ambos reducen costos dramáticamente.' },
          { icon: Zap, title: 'Blobs (EIP-4844): Por Qué las L2 Cuestan Centavos', text: 'En marzo de 2024, la actualización Dencun introdujo los "blobs": un espacio de datos barato y temporal donde las L2s publican sus transacciones sin competir por el espacio permanente de Ethereum L1. El resultado fue dramático: los fees de las L2s cayeron de dólares a centavos. Un swap en Base o Arbitrum hoy cuesta centavos, no los $10-50 de 2021. Cualquier comparación honesta con Ethereum debe partir de esta realidad post-Dencun.' }
        ]
      },
      {
        type: 'comparison',
        title: 'Monolítico (Solana) vs Modular (Ethereum + L2s)',
        leftSide: {
          title: 'Solana (Monolítico)',
          points: [
            'Una sola cadena rápida (bloques cada ~200 ms)',
            'Toda la liquidez en un solo lugar',
            'Componibilidad sincrónica (operaciones atómicas complejas)',
            'Sin bridges dentro del ecosistema (para traer activos de otras cadenas, sí)',
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
          { icon: AlertTriangle, title: 'Liquidez Dividida', text: 'Si tienes USDC en Arbitrum pero quieres usar un protocolo en Base, necesitas un bridge. Un bridge tradicional puede tardar minutos u horas, cuesta fees adicionales y tiene riesgo de hack (los bridges han sido de los mayores targets de hackeos). Los bridges basados en intents (como Across o Relay) cruzan en segundos porque un intermediario te entrega los fondos en destino y luego se cobra, pero sumas un intermediario y un costo. La liquidez de Ethereum está dividida entre 20+ L2s, lo que significa que cada pool individual tiene menos profundidad que si todo estuviera junto.' },
          { icon: Users, title: 'UX Complicada', text: 'Un usuario nuevo de Ethereum necesita decidir: ¿cuál L2 uso? ¿Arbitrum? ¿Base? ¿Optimism? Luego necesita hacer bridge de sus fondos. Luego descubre que el protocolo que quiere usar está en otra L2. Es una experiencia fragmentada y confusa. En Solana, todo está en un solo lugar: conectas Phantom a Jupiter y ya.' },
          { icon: Zap, title: 'La Ventaja de Solana Aquí', text: 'En Solana, la liquidez de DeFi está en una sola cadena. Cuando haces un swap en Jupiter, accedes a toda la liquidez de la red. Eso no elimina los bridges por completo: para traer activos de otras cadenas se usan, y el de Wormhole fue hackeado en 2022 del lado de Solana por $320M. No hay que preocuparse por cuál L2 tiene más liquidez para tu par de tokens. Esta es una ventaja competitiva real que se traduce en mejor ejecución y menor slippage para los usuarios.' }
        ]
      },
      {
        type: 'main',
        title: 'Las Debilidades de Cada Enfoque',
        content: 'Ningún enfoque es perfecto. Ser honesto sobre las debilidades te hace un mejor inversor y usuario:',
        features: [
          { icon: AlertTriangle, title: 'Debilidades de Solana', text: 'Ha tenido episodios de congestión y degradación de rendimiento. La última caída completa fue en febrero de 2024 (casi cinco horas), y en agosto de 2026 hubo una degradación parcial que no detuvo la cadena. Los requisitos de hardware para validadores limitan quién puede operar un nodo, lo que afecta la descentralización. Si Solana L1 tiene un problema, no hay "escape" a otra capa, todo el ecosistema se ve afectado simultáneamente.' },
          { icon: AlertTriangle, title: 'Debilidades de Ethereum + L2s', text: 'La fragmentación de liquidez empeora con cada nueva L2 que se lanza. Los bridges son puntos de fallo costosos (miles de millones de dólares perdidos en hacks, ~$2,500-3,000 millones acumulados). La experiencia de usuario es confusa para novatos. Y muchas L2s tienen riesgos de centralización: el "sequencer" que ordena transacciones a menudo es controlado por una sola empresa.' },
          { icon: Brain, title: 'La Realidad', text: 'Ambos enfoques están evolucionando. Solana trabaja en mejorar la resiliencia y descentralización. Ethereum trabaja en soluciones de interoperabilidad entre L2s (como "based rollups" y "chain abstraction"). El "ganador" no está decidido, y es posible que ambos coexistan sirviendo diferentes necesidades.' }
        ]
      },
      {
        type: 'main',
        title: 'Implicaciones para tu Estrategia',
        content: 'Entender estas arquitecturas tiene implicaciones prácticas directas:',
        features: [
          { icon: Wallet, title: 'Como Usuario de DeFi', text: 'Según la tesis de este curso, para la mayoría de usuarios Solana ofrece hoy una experiencia más simple: todo en un solo lugar, fees de centavos, transacciones instantáneas, sin bridges. Si tu actividad principal es DeFi (swaps, LP, lending, staking), Solana elimina la complejidad. Ethereum + L2s tiene sentido si necesitas acceso a protocolos que solo existen allí (Aave, Uniswap v3 original, etc).' },
          { icon: BarChart3, title: 'Como Inversor', text: 'Si crees que la componibilidad y la liquidez unificada son las ventajas más importantes, te inclinarás por Solana. Si crees que la descentralización máxima de la capa base y la diversidad de L2s son más importantes, por Ethereum. La tesis de inversión depende de qué propiedad crees que captura más valor a largo plazo. Muchos inversores sofisticados tienen exposición a ambos.' },
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
          'Según la tesis de este curso, para DeFi activo Solana ofrece hoy una experiencia más simple: todo en un solo lugar, sin complejidad de L2s. Ethereum + L2s tiene sentido para acceso a protocolos específicos que no existen en Solana.',
          'No hay "ganador" definitivo, ambos enfoques están evolucionando. Como inversor, tener exposición a ambos ecosistemas es una estrategia válida. Lo importante es entender los trade-offs de cada uno.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Qué es la "componibilidad sincrónica" y por qué se considera la mayor ventaja de Solana?',
          options: [
            { id: 'a', text: 'Que Solana es compatible con Ethereum y puede ejecutar sus mismos contratos' },
            { id: 'b', text: 'Varias operaciones en una transacción atómica: si una falla, ninguna ocurre' },
            { id: 'c', text: 'Un tipo de consenso especial que solo usan los validadores de Solana' },
            { id: 'd', text: 'Que todas las apps de Solana se actualizan a la vez en una misma fecha' }
          ],
          correctAnswer: 'b',
          explanation: 'En una sola transacción de Solana, Jupiter puede encontrar la ruta, ejecutar el swap y depositar el resultado en Kamino. Si un paso falla, todo se revierte. Eso es posible porque todas las apps viven en el mismo estado; cuando están en L2s distintas, hacen falta bridges y transacciones separadas.'
        },
        {
          id: 'q2',
          question: '¿Cuál es el mayor problema práctico del enfoque modular de Ethereum (L1 + L2s)?',
          options: [
            { id: 'a', text: 'Transacciones más lentas en todas sus capas que en cualquier otra red' },
            { id: 'b', text: 'Fees más altos que Solana en todas sus capas, incluidas todas las L2s' },
            { id: 'c', text: 'Ninguno: el enfoque modular ya resolvió todos sus problemas prácticos' },
            { id: 'd', text: 'Liquidez fragmentada entre muchas L2s, unidas por bridges con riesgo' }
          ],
          correctAnswer: 'd',
          explanation: 'Con más de 20 L2s, la liquidez y los usuarios se reparten, y cada pool queda más pequeño que si todo estuviera junto. Mover fondos entre L2s exige bridges, uno de los objetivos más atacados de crypto. Las L2s en sí son rápidas y muchas son baratas: el problema es la división, no la velocidad.'
        },
        {
          id: 'q3',
          question: 'Quieres cambiar SOL por USDC y luego depositar el USDC en lending. ¿Cómo se compara Ethereum + L2s con Solana para esto?',
          options: [
            { id: 'a', text: 'Es igual en todos los casos, porque las L2s comparten estado en tiempo real' },
            { id: 'b', text: 'Ethereum siempre es más rápido, porque sus L2s procesan más que Solana' },
            { id: 'c', text: 'En una misma L2 también es atómico; entre L2s distintas necesitas un bridge' },
            { id: 'd', text: 'Solana necesita dos transacciones, porque cada app vive en su propia cadena' }
          ],
          correctAnswer: 'c',
          explanation: 'En Solana, swap y depósito caben en una transacción atómica de menos de un segundo. En Ethereum, si ambos protocolos están en la misma L2, también puedes combinarlos. Si están en L2s distintas, primero necesitas un bridge, con su riesgo y su espera, y la operación deja de ser atómica.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la principal debilidad del enfoque monolítico de Solana?',
          options: [
            { id: 'a', text: 'Es mucho más lenta que Ethereum L1 al procesar las transacciones normales' },
            { id: 'b', text: 'Sus fees son demasiado altos para hacer operaciones DeFi pequeñas cada día' },
            { id: 'c', text: 'No puede ejecutar contratos inteligentes tan complejos como los de Ethereum' },
            { id: 'd', text: 'Hardware caro para validar y un solo punto de falla para todo el ecosistema' }
          ],
          correctAnswer: 'd',
          explanation: 'Operar un validador exige servidores potentes y costos fijos altos, lo que limita quién puede hacerlo: hay unos 660 validadores activos en noviembre de 2026, una cifra que bajó en los últimos años. Y al ser una sola cadena, un problema en la L1 afecta a todo el ecosistema a la vez. Velocidad y fees son, al contrario, sus puntos fuertes.'
        },
        {
          id: 'q5',
          question: 'Como inversor, ¿cómo puede afectar el debate monolítico vs modular a tu estrategia?',
          options: [
            { id: 'a', text: 'Invertir solo en Solana, porque su arquitectura ya ganó el debate' },
            { id: 'b', text: 'Inclinar la exposición según la tesis que crees, o tener algo de ambas' },
            { id: 'c', text: 'Invertir solo en Ethereum, porque tener más historia garantiza ganar' },
            { id: 'd', text: 'Ignorarlo: la arquitectura de una red no influye en el valor de su token' }
          ],
          correctAnswer: 'b',
          explanation: 'Las dos tesis son legítimas: Solana apuesta a que la experiencia simple y la liquidez unificada atraen más actividad, y Ethereum, a que la descentralización máxima y la flexibilidad de las L2s ganan a largo plazo. Nadie sabe cuál capturará más valor, y pueden convivir. Por eso tener exposición a ambas es una estrategia válida.'
        },
        {
          id: 'q6',
          type: 'multiple-select',
          question: '¿Cuáles de estas características corresponden al enfoque monolítico de Solana? Selecciona todas las que apliquen.',
          options: [
            { id: 'a', text: 'Liquidez unificada en una sola cadena' },
            { id: 'b', text: 'Componibilidad sincrónica entre apps' },
            { id: 'c', text: 'Ejecución repartida entre muchas L2s' },
            { id: 'd', text: 'Requisitos de hardware altos para validar' },
            { id: 'e', text: 'Bridges para mover fondos entre apps' }
          ],
          correctAnswers: [0, 1, 3],
          explanation: 'Todo en una cadena significa liquidez unida y apps que se combinan en una transacción, a cambio de hardware exigente para los validadores. Repartir la ejecución en L2s y necesitar bridges entre ellas es lo propio del enfoque modular.'
        },
        {
          id: 'q7',
          type: 'true-false',
          question: 'Según esta lección, uno de los dos enfoques ya ganó de forma definitiva el debate de la escalabilidad.',
          correctAnswer: false,
          explanation: 'Falso. Los dos enfoques siguen evolucionando: Solana trabaja en más clientes de validador y en reducir su punto único de falla, y Ethereum en unir mejor sus L2s. Lo útil es entender los trade-offs, no elegir un equipo.'
        },
        {
          id: 'review_1',
          question: 'Repaso de DePIN: Infraestructura Física Descentralizada: ¿por qué Helium migró su red a Solana?',
          options: [
            { id: 'a', text: 'Porque la Fundación Solana le pagó a Helium para que trasladara su red' },
            { id: 'b', text: 'Por el costo casi nulo de las microtransacciones de millones de reportes' },
            { id: 'c', text: 'Porque su propia cadena fue hackeada y perdió todos los fondos de sus usuarios' },
            { id: 'd', text: 'Porque en Solana los hotspots pueden funcionar sin conexión a internet' }
          ],
          correctAnswer: 'b',
          explanation: 'Una red de cientos de miles de dispositivos genera un volumen enorme de pequeñas transacciones. Mantener su propia cadena era caro y complejo, y Solana podía procesarlas a fracciones de centavo. (Lo viste en la lección DePIN: Infraestructura Física Descentralizada.)'
        }
      ]
    }
  },
  33: {
    id: 33,
    title: 'Firedancer & El Futuro de Solana',
    level: 'Avanzado',
    number: '12 de 13',
    duration: '22 min',
    type: 'Futuro',
    description: 'Firedancer es un segundo software validador para Solana, escrito desde cero por Jump Crypto. Entiende por qué la diversidad de clientes es crucial para la seguridad, qué cambió con Firedancer en mainnet (desde diciembre de 2025) y con el nuevo consenso Alpenglow (octubre de 2026), y qué significa para el futuro del ecosistema junto con token extensions, compresión de estado y la expansión de la SVM.',
    sections: [
      {
        type: 'intro',
        title: 'La Evolución Más Importante de Solana',
        content: 'Bitcoin tiene mineros. Ethereum tiene clientes diversos. Y Solana, durante sus primeros años, tuvo **un solo cliente de software**: el código original escrito por Solana Labs (ahora mantenido por Anza como "Agave"). Esto significaba que un solo bug podía tumbar toda la red, y de hecho ocurrió varias veces en 2022. La solución no era parchar el código existente, sino construir uno completamente nuevo desde cero. Ahí entra **Firedancer**: un segundo cliente validador escrito en C por Jump Crypto, una firma de trading de alta frecuencia. No es una mejora incremental, es una reimaginación completa de cómo debería funcionar un validador de blockchain.',
        highlight: {
          title: 'Por Qué Importa',
          text: 'Firedancer no solo apunta a hacer a Solana más rápida, también más resistente. Con dos clientes independientes, un bug en uno ya no tiene por qué tumbar la red entera, siempre que ningún cliente concentre demasiado stake. Hoy no es el caso: Firedancer tiene ~17% del stake, y la red necesita dos tercios del stake activo para seguir avanzando, así que un bug grave en la familia Agave todavía podría detenerla. La diversidad está en camino, no completa.'
        }
      },
      {
        type: 'main',
        title: '¿Qué Es la Diversidad de Clientes?',
        content: 'Un "cliente" en blockchain es el software que los validadores ejecutan para procesar transacciones y mantener el consenso. Si todos corren el mismo software y ese software tiene un bug, TODA la red se cae. La diversidad de clientes es tener múltiples implementaciones independientes del mismo protocolo:',
        features: [
          { icon: Server, title: 'Agave (antes Solana Labs)', text: 'El cliente original de Solana, escrito en Rust, ahora mantenido por Anza. Es el que ha corrido la red desde el inicio. Robusto y probado en producción durante años, pero como único cliente, sus bugs eran bugs de toda la red. Las caídas históricas de Solana ocurrieron cuando era el único software de la red. Un matiz: la mayoría del stake corre Jito-Solana o sus variantes, forks de Agave con soporte MEV, así que la familia Agave sigue teniendo más del 80% del stake.' },
          { icon: Zap, title: 'Firedancer (Jump Crypto)', text: 'Reescritura completa en C, construida por ingenieros de trading de alta frecuencia que procesan millones de órdenes por segundo en mercados tradicionales. No comparte código con Agave, así que es muy improbable que ambos tengan el mismo bug. Corre completo en mainnet desde diciembre de 2025, con ~17% del stake a noviembre de 2026.' },
          { icon: Shield, title: 'La Lección de Ethereum', text: 'Ethereum tiene 5+ clientes (Geth, Nethermind, Besu, Erigon, Reth). En enero de 2024, un bug en Nethermind tumbó ~8% de los nodos de Ethereum, y la red siguió funcionando porque los demás clientes no compartían el error. Sin diversidad de clientes, habría sido un apagón total. Solana está aprendiendo esta lección.' },
          { icon: Network, title: 'Frankendancer: El Paso Intermedio', text: 'Antes de lanzar Firedancer completo, Jump desplegó "Frankendancer", una versión híbrida que usa el networking de Firedancer con la ejecución de Agave. Esto permitió probar componentes por partes en mainnet, con menos riesgo. Es como cambiar las ruedas de un auto en movimiento, una a la vez. Cumplió su función: con Firedancer completo en mainnet, Frankendancer quedó retirado.' }
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
            'En producción: de cientos a unos pocos miles de TPS de usuarios, según la carga',
            'Equipo: Anza (ex-Solana Labs), expertos en blockchain',
            'Ventaja: estabilidad probada y ecosistema de herramientas maduro',
            'Limitación: optimizaciones de rendimiento tienen techo por diseño original'
          ]
        },
        rightSide: {
          title: 'Firedancer (Jump - C)',
          points: [
            'Lenguaje: C, control total de memoria y hardware, máximo rendimiento',
            'En mainnet completo desde diciembre de 2025, con ~17% del stake (noviembre de 2026); el híbrido Frankendancer ya se retiró',
            'TPS en laboratorio: 1,000,000+ (rendimiento teórico máximo)',
            'Equipo: Jump Crypto, expertos en trading de alta frecuencia',
            'Ventaja: rendimiento extremo y diversidad real de código',
            'Limitación: C requiere gestión manual de memoria (más riesgo de bugs de seguridad)'
          ]
        }
      },
      {
        type: 'main',
        title: 'Alpenglow: Un Consenso Nuevo',
        content: 'Firedancer cambia el software. Alpenglow cambia las reglas: es un rediseño de cómo los validadores se ponen de acuerdo, y llegó por partes en 2026:',
        asOf: 'noviembre de 2026',
        features: [
          { icon: Clock, title: 'Bloques Cada ~200 ms', text: 'Desde el 9 de octubre de 2026, Solana produce un bloque (un "slot") cada ~200 milisegundos, la mitad que antes. Una consecuencia práctica: un epoch, el periodo que usa el staking, ahora dura alrededor de un día en lugar de dos.' },
          { icon: CheckCircle, title: 'Votor: Votos Fuera de la Cadena', text: 'Desde el 21 de octubre de 2026, los validadores votan con Votor, que reemplazó al sistema anterior. Sus votos ya no se registran como transacciones on-chain, y a cambio cada validador paga una tarifa de unos 0.8 SOL por epoch. El objetivo es llevar la finalidad de varios segundos a fracciones de segundo.' },
          { icon: Activity, title: 'El TPS "Bajó" (Sin Que la Red Fuera Más Lenta)', text: 'Antes, la mayoría de las transacciones de Solana eran votos de validadores. Al sacarlos de la cadena, el TPS que muestran los exploradores bajó de golpe. No es que la red procese menos: ahora cuentas sobre todo transacciones de usuarios. Si alguien compara TPS de antes y después sin decir esto, desconfía.' },
          { icon: Network, title: 'Lo Que Falta: Rotor', text: 'La otra mitad de Alpenglow, Rotor, cambia cómo se reparten los bloques entre validadores. A noviembre de 2026 no tiene fecha. Es un buen recordatorio de que los roadmaps llegan por partes, y tarde.' }
        ]
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
          { icon: AlertTriangle, title: 'Centralización de Validadores', text: 'Aunque hay alrededor de 660 validadores activos (noviembre de 2026, una cifra que ha venido bajando), una porción significativa del stake está concentrada en pocos operadores grandes. Fundaciones y exchanges controlan un porcentaje desproporcionado. La descentralización real requiere que miles de validadores independientes tengan stake significativo, y eso toma tiempo.' },
          { icon: Clock, title: 'Ejecución del Roadmap', text: 'Firedancer tardó más de tres años en llegar completo a mainnet (diciembre de 2025), y todavía tiene una minoría del stake. Alpenglow llegó por partes: Votor en octubre de 2026, y Rotor sigue sin fecha. Token Extensions están disponibles pero la adopción es gradual. Cada innovación prometida necesita no solo construirse, sino también adoptarse masivamente. La historia de cripto está llena de roadmaps ambiciosos que nunca se completaron.' },
          { icon: TrendingDown, title: 'Competencia Creciente', text: 'Solana no es la única blockchain de alto rendimiento. Aptos y Sui (basadas en Move), Monad (EVM paralela), y los Layer 2 de Ethereum compiten por los mismos usuarios y desarrolladores. La ventaja de Solana (ecosistema + liquidez) es fuerte pero no permanente.' }
        ]
      },
      {
        type: 'main',
        title: '¿Qué Significa Firedancer Para Ti?',
        content: 'Has leído sobre clientes, consensos, C vs Rust, SIMDs. Todo muy técnico. Pero si eres usuario de Solana (no validador ni desarrollador), la pregunta honesta es: **¿qué cambia en mi día a día?** Aquí está la traducción directa:',
        features: [
          { icon: Shield, title: 'Transacciones Más Confiables', text: 'Los apagones de 2022 donde la red se detenía por horas eran un defecto crítico para los usuarios, si Solana se cae mientras tienes una posición abierta en un protocolo de lending, no puedes liquidar ni ajustar. Con dos clientes independientes (Agave + Firedancer), el riesgo de un apagón total baja a medida que el stake se reparte mejor entre ellos. La última caída completa fue en febrero de 2024; desde entonces ha habido degradaciones, pero no paradas totales.' },
          { icon: Zap, title: 'Mejor UX en Picos de Demanda', text: 'Cuando hay un mint masivo de NFTs o un evento de airdrop muy esperado, la red se congestiona: transacciones fallan, los fees suben temporalmente, las confirmaciones tardan más. Firedancer está diseñado para tolerar mejor esos picos. Para ti como usuario: menos "transaction failed" en momentos críticos cuando más importa.' },
          { icon: Users, title: 'Más Validadores = Más Descentralización', text: 'Operar un validador es caro: unos $600-1,300 al mes en servidor, más las tarifas de votación. Firedancer está diseñado para usar el hardware más eficientemente, lo que podría bajar el costo de operar un validador con el tiempo. Más validadores asequibles = más descentralización de la red = más resistencia a censura. Tú no ves esto directamente, pero protege el valor de largo plazo de tu SOL.' },
          { icon: CheckCircle, title: 'Sin Acción Requerida', text: 'Firedancer es un upgrade a nivel de validador. Los usuarios regulares no necesitan hacer NADA, no actualices tu wallet, no migres tokens, no cambies apps. La transición ocurre "debajo" de ti. Un día notarás que Solana se siente más estable y más rápida, sin entender exactamente por qué. Ese es el buen diseño de infraestructura: invisible cuando funciona.' }
        ],
        highlight: {
          title: 'La Inversión en Infraestructura',
          text: 'Según la tesis de este curso, cada mejora de confiabilidad y escalabilidad hace a Solana más atractiva para usuarios e instituciones. Eso no se traduce automáticamente en precio: el valor de SOL depende también de la demanda real, la emisión y la competencia. Entender la infraestructura te ayuda a evaluar mejor, no a predecir.'
        }
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Firedancer es un validador nuevo, escrito desde cero en C por Jump Crypto. Corre completo en mainnet desde diciembre de 2025 (~17% del stake a noviembre de 2026). Su cifra de 1M+ TPS es de laboratorio, no de producción.',
          'La diversidad de clientes (Agave + Firedancer) es crítica para la seguridad: un bug en un cliente minoritario no detiene la red. Pero mientras la familia Agave tenga más de dos tercios del stake, un bug grave en ella todavía puede hacerlo.',
          'Frankendancer fue el paso intermedio: componentes de Firedancer integrados con Agave para probar en producción con menos riesgo. Ya se retiró.',
          'Alpenglow cambió el consenso en 2026: bloques cada ~200 ms y votos fuera de la cadena (por eso el TPS reportado bajó). Rotor, su otra mitad, sigue pendiente.',
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
            { id: 'a', text: 'Una actualización del cliente Agave, construida por Anza' },
            { id: 'b', text: 'Una Layer 2 de Solana, construida por la Solana Foundation en 2025' },
            { id: 'c', text: 'Un nuevo token de gobernanza para votar los cambios del protocolo' },
            { id: 'd', text: 'Un validador nuevo, escrito desde cero en C por Jump Crypto' }
          ],
          correctAnswer: 'd',
          explanation: 'Firedancer es un cliente validador independiente, escrito en C por Jump Crypto, sin código compartido con Agave. Corre completo en mainnet desde diciembre de 2025 (~17% del stake a noviembre de 2026). Su cifra de más de 1 millón de TPS es de laboratorio, no de producción.'
        },
        {
          id: 'q2',
          question: '¿Por qué importa tener dos clientes validadores independientes, como Agave y Firedancer?',
          options: [
            { id: 'a', text: 'Para que los validadores elijan el software más barato de operar' },
            { id: 'b', text: 'Para duplicar la velocidad de la red sumando la de los dos clientes' },
            { id: 'c', text: 'Si un cliente tiene un bug grave, la red puede seguir con el otro' },
            { id: 'd', text: 'Porque la Solana Foundation lo exige legalmente a cada validador' }
          ],
          correctAnswer: 'c',
          explanation: 'Con un solo software, un bug grave detiene toda la red. Con dos, un fallo en el minoritario no la para. Ethereum lo vivió en enero de 2024: un bug en Nethermind tumbó ~8% de los nodos y la red siguió. Dos clientes no suman velocidad: cada validador corre uno.'
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'Mientras la familia Agave tenga más de dos tercios del stake, un bug grave en Agave todavía puede detener Solana.',
          correctAnswer: true,
          explanation: 'Verdadero. La red necesita más de dos tercios del stake de acuerdo para avanzar. Si un cliente concentra más de eso y falla, el resto no alcanza para seguir. La diversidad protege de verdad cuando ningún cliente supera ese umbral.'
        },
        {
          id: 'q4',
          question: '¿Qué son las Token Extensions de Solana?',
          options: [
            { id: 'a', text: 'Tokens que solo funcionan en validadores que ejecutan el cliente Firedancer' },
            { id: 'b', text: 'Funciones nativas para tokens SPL, como transferencias confidenciales o fees' },
            { id: 'c', text: 'NFTs mejorados, con animaciones y sonido guardados dentro de la blockchain' },
            { id: 'd', text: 'Un sistema de préstamos para pedir tokens SPL prestados sin dar ningún colateral' }
          ],
          correctAnswer: 'b',
          explanation: 'Token Extensions suman capacidades nativas a los tokens: montos ocultos en transferencias confidenciales, fees de transferencia automáticos, metadatos on-chain y hooks programables. Por eso interesan a instituciones que necesitan cumplir reglas sin construir todo desde cero.'
        },
        {
          id: 'q5',
          question: '¿Cómo se deciden los cambios al protocolo de Solana?',
          options: [
            { id: 'a', text: 'Con SIMDs públicas, que se aplican cuando suficientes validadores actualizan' },
            { id: 'b', text: 'La Solana Foundation decide todos los cambios del protocolo por su cuenta' },
            { id: 'c', text: 'Cada holder de SOL vota cada cambio directamente desde su propia wallet' },
            { id: 'd', text: 'Los equipos de Jupiter y Phantom votan los cambios en nombre de sus usuarios' }
          ],
          correctAnswer: 'a',
          explanation: 'Los SIMDs se discuten en público en GitHub, y un cambio llega a la red cuando suficientes validadores actualizan su software. Algunos cambios grandes, como SIMD-0228 en 2025 o SGP-0002 en 2026, tuvieron además votos ponderados por stake, pero votan los validadores, no cada holder. Tu staking es un voto indirecto.'
        },
        {
          id: 'q6',
          question: '¿Cuál de estos es un desafío real que Solana todavía enfrenta?',
          options: [
            { id: 'a', text: 'Que no tiene desarrolladores activos construyendo en el ecosistema hoy' },
            { id: 'b', text: 'Que no puede procesar más de unas decenas de transacciones por segundo' },
            { id: 'c', text: 'Que el desarrollo de Firedancer se canceló antes de llegar a mainnet' },
            { id: 'd', text: 'La concentración del stake y ejecutar a tiempo un roadmap ambicioso' }
          ],
          correctAnswer: 'd',
          explanation: 'Los desafíos reales son la concentración del stake en pocos operadores, un roadmap que exige años de ejecución y la competencia de otras redes. Las otras opciones son falsas y fáciles de verificar. Optimismo informado es reconocer las fortalezas y los desafíos.'
        },
        {
          id: 'q7',
          question: 'Un amigo te muestra que desde finales de octubre de 2026 el TPS de Solana en los exploradores cayó mucho, y te dice: "La red se está muriendo". ¿Qué le respondes?',
          options: [
            { id: 'a', text: 'Tiene razón: si el TPS reportado cae, la red está perdiendo usuarios reales' },
            { id: 'b', text: 'Es porque Firedancer reemplazó a Agave y procesa menos transacciones' },
            { id: 'c', text: 'Es porque Alpenglow hizo los bloques más lentos, de unos 2 segundos' },
            { id: 'd', text: 'Con Alpenglow los votos salieron de la cadena, y el TPS dejó de contarlos' }
          ],
          correctAnswer: 'd',
          explanation: 'Antes de Alpenglow, la mayoría de las transacciones de Solana eran votos de consenso. Con Votor, esos votos ya no van on-chain, así que el TPS total bajó de golpe sin que cambiara la actividad de los usuarios. Para medir uso real, mira transacciones de usuarios, direcciones activas o fees. Y los bloques salen cada ~200 ms, más rápido que antes.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Monolítico vs Modular: La Guerra de Arquitecturas: ¿qué significa que una operación DeFi sea atómica?',
          options: [
            { id: 'a', text: 'Que se ejecuta en menos de un segundo, sin importar cuántos pasos tenga' },
            { id: 'b', text: 'Que no paga fees, porque todos sus pasos se combinan en un solo bloque' },
            { id: 'c', text: 'Que todos sus pasos ocurren juntos, o no ocurre ninguno de ellos' },
            { id: 'd', text: 'Que solo puede tener un paso, porque cada operación va por separado' }
          ],
          correctAnswer: 'c',
          explanation: 'Atómica quiere decir todo o nada: si un paso falla, la transacción entera se revierte y no quedas a medias, por ejemplo con el swap hecho pero sin el depósito. Es una propiedad de cómo se ejecuta, no de su velocidad ni de sus fees. (Lo viste en la lección Monolítico vs Modular: La Guerra de Arquitecturas.)'
        }
      ]
    }
  },
  34: {
    id: 34,
    title: 'Seguridad Operacional Avanzada',
    level: 'Avanzado',
    number: '1 de 13',
    duration: '21 min',
    type: 'Seguridad',
    description: 'La diferencia entre perder todo y dormir tranquilo es tu modelo de seguridad operacional. Aprende la arquitectura de wallets que usan los profesionales: cold storage para ahorros, hot wallets para operar, y burner wallets para experimentar. Domina la gestión de permisos, la simulación de transacciones, la protección contra phishing y social engineering, y las mejores prácticas de seed phrase que separan a los principiantes de los veteranos.',
    sections: [
      {
        type: 'intro',
        title: 'La Verdad Incómoda de la Custodia Propia',
        content: 'En finanzas tradicionales, si hackean tu banco, el banco responde. Si te roban la tarjeta, el banco cancela los cargos. Hay una red de seguridad institucional. En cripto, **tú eres tu propio banco**, y eso incluye ser tu propio departamento de seguridad. La custodia propia es libertad, pero esa libertad viene con responsabilidad total. No hay línea de atención que te devuelva los fondos si los pierdes. No hay botón de "revertir transacción". Cada año se pierden miles de millones de dólares en hacks, phishing, y errores humanos. La buena noticia: con un modelo de seguridad adecuado, puedes protegerte contra la gran mayoría de las amenazas. La mala noticia: la mayoría de la gente no implementa casi ninguna de las medidas necesarias.',
        highlight: {
          title: 'La Regla de Oro',
          text: 'La seguridad no es un producto, es un proceso. No se trata de comprar un hardware wallet y olvidarte. Se trata de hábitos diarios, arquitectura de wallets, y paranoia sana. Quienes sobreviven a cada ciclo no son los más inteligentes, sino los más disciplinados con su seguridad.'
        }
      },
      {
        type: 'main',
        title: 'Arquitectura de Wallets: El Modelo de 3 Niveles',
        content: 'Los profesionales no usan UNA wallet para todo. Usan un sistema de niveles donde cada wallet tiene un propósito específico y un nivel de riesgo diferente. Piensa en esto como una fortaleza medieval con murallas concéntricas:',
        features: [
          { icon: Lock, title: 'Nivel 1: Cold Storage (La Bóveda)', text: 'Hardware wallet (Ledger, Trezor) que guarda la mayor parte de tus criptos, por ejemplo el 80-90%. NUNCA se conecta a dApps. NUNCA firma transacciones de smart contracts. Solo recibe y envía a direcciones verificadas. Es como una caja fuerte bancaria, la abres solo cuando es absolutamente necesario.' },
          { icon: Wallet, title: 'Nivel 2: Hot Wallet Operativa', text: 'Phantom, Solflare, o similar en tu celular/computador con una parte pequeña de tus criptos, por ejemplo el 5-15%. La usas para operaciones rutinarias: swaps en Jupiter, staking, compras regulares. Si es comprometida, duele pero no es catastrófico. Trata de mantener solo lo que puedas permitirte perder.' },
          { icon: Zap, title: 'Nivel 3: Burner Wallets (Desechables)', text: 'Wallets temporales creadas para interactuar con dApps nuevas, mints de NFTs, airdrops sospechosos, o cualquier protocolo no verificado. Creas una, transfieres lo mínimo necesario, interactúas, y si todo sale bien, mueves los tokens a tu hot wallet. Si la burner es comprometida, pierdes centavos.' },
          { icon: Shield, title: 'La Separación es Clave', text: 'El error más común es usar la misma wallet para todo. Si tu wallet "de ahorro" aprueba un contrato malicioso en un mint de NFTs, pierdes TODOS tus ahorros. Con separación de niveles, cada interacción riesgosa solo expone una fracción de tu patrimonio. Es el principio del "compartimento estanco" de los submarinos.' }
        ]
      },
      {
        type: 'main',
        title: 'Gestión de Permisos y Aprobaciones',
        content: 'Cada vez que conectas tu wallet a una dApp y firmas una transacción, estás autorizando un movimiento de valor. En **Solana** el riesgo principal es una firma maliciosa que mueve activos en el acto. En **Ethereum/EVM** el riesgo clásico es el allowance (permiso de gasto) que queda vivo después. Entender ambos es la diferencia entre seguridad y catástrofe:',
        features: [
          { icon: AlertTriangle, title: 'Solana: La Firma Es el Momento Crítico', text: 'En Solana no hace falta un "unlimited approval" al estilo ERC-20: un contrato malicioso puede transferir SOL, tokens y NFTs en la misma transacción que firmas. La defensa es leer la **simulación** de Phantom (salidas inesperadas = rechaza) y usar burner wallets para dApps nuevas.' },
          { icon: AlertTriangle, title: 'Ethereum/EVM: Aprobaciones Ilimitadas', text: 'En redes EVM (también dentro de Phantom), muchas dApps piden "unlimited approval" para no firmar cada swap. Eso deja al contrato gastar TODOS tus tokens de ese tipo en el futuro. Si el contrato es hackeado o malicioso, puede drenarte sin una nueva acción tuya. Usa revocación (revoke.cash) y prefer allowances limitados cuando puedas.' },
          { icon: RefreshCw, title: 'Revocación y Auditoría', text: 'En Ethereum, revoke.cash (y similares) te permiten ver y revocar permisos antiguos. En Solana, las delegaciones de token son menos comunes; tu higiene principal es no firmar ciegamente y aislar fondos. Audita mensualmente qué apps usas y cierra cuentas de experimentación.' },
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
            'URLs con errores sutiles: "phantorn.com" o "phantomm.com" en lugar de "phantom.com"',
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
          { icon: Lock, title: 'Almacenamiento Físico', text: 'NUNCA digitalmente (no fotos, no notas del celular, no email, no cloud). Escríbela en papel y guárdala en un lugar seguro. Para cantidades significativas, usa placas de metal grabadas (resisten fuego e inundaciones). Haz 2-3 copias en ubicaciones físicas diferentes. Si dejas una copia completa con un familiar, recuerda que esa persona (o quien la encuentre) puede gastar tus fondos: guárdala en un sobre sellado y firmado que delate si lo abrieron, o usa un esquema de división como el de abajo.' },
          { icon: Shield, title: 'División de la Seed (Shamir\'s Secret)', text: 'Para grandes cantidades, algunas hardware wallets (como varios modelos de Trezor) generan el respaldo con Shamir de forma nativa, usando el estándar SLIP-39: en vez de una frase, obtienes varias, por ejemplo 3, y necesitas 2 para recuperar. Guardas una en tu casa, otra con un familiar y otra en un lugar seguro fuera de casa (las cajas de seguridad bancarias son escasas en Colombia). Ninguna parte por sí sola revela nada útil. Ojo: cortar tu frase de 24 palabras en pedazos por tu cuenta NO es Shamir; cada pedazo filtra parte del secreto y perder uno puede costarte todo.' },
          { icon: Lock, title: 'Passphrase: Una Capa Extra', text: 'Ledger y Trezor permiten sumar una passphrase (a veces llamada palabra 25) a tu frase. Con ella se generan wallets distintas: quien encuentre solo las 24 palabras no ve tus fondos. El costo: si olvidas la passphrase, pierdes el acceso. Guárdala separada de la frase, nunca en digital, y prueba la recuperación con un monto pequeño antes de confiarle ahorros.' },
          { icon: AlertTriangle, title: 'Social Engineering', text: 'El vector de ataque más subestimado. No publiques en redes sociales cuánto cripto tienes. No hables de tus holdings en público. El "ataque de llave de $5" (alguien te amenaza físicamente para que entregues tu seed) es real. La discreción es tu mejor defensa. Si nadie sabe que tienes cripto, nadie puede amenazarte por ello.' },
          { icon: Brain, title: 'Plan de Herencia', text: 'Si te pasa algo, ¿tu familia puede acceder a tus fondos? Sin un plan, tu cripto se pierde para siempre. Opciones: instrucciones selladas con un abogado o notario, un familiar de confianza con una de las partes Shamir, o una multisig (en Solana, por ejemplo Squads) donde un familiar tenga una de las llaves. Es incómodo de pensar, pero es responsabilidad.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso Real: Drift y las Firmas por Adelantado',
        content: 'El 1 de abril de 2026, Drift, uno de los exchanges de perpetuos más grandes de Solana, perdió unos **$285 millones** sin que hubiera un bug en su código. El ataque apuntó a las personas que controlaban el protocolo. Entenderlo te sirve tanto para tu propia seguridad como para evaluar cualquier protocolo antes de depositar:',
        features: [
          { icon: AlertTriangle, title: 'Qué Pasó', text: 'Durante semanas, los atacantes se ganaron la confianza del equipo. Luego lograron que 2 de los 5 firmantes del consejo de seguridad firmaran sin revisar dos transacciones que parecían rutinarias. Días antes, Drift había bajado su multisig a 2 de 5 y sin timelock. Las transacciones entregaron el control de administrador al atacante, que listó un token falso como colateral y retiró activos reales. Mandiant atribuyó el ataque a Corea del Norte.' },
          { icon: Clock, title: 'Durable Nonces: Firmar Hoy, Ejecutar Después', text: 'Una transacción normal de Solana incluye un blockhash reciente y vence en alrededor de un minuto. Con un durable nonce, la transacción no vence hasta que se use: puedes firmarla hoy y alguien puede ejecutarla semanas después. Es útil para custodios y multisigs, pero significa que una firma descuidada puede quedar "cargada" hasta que el atacante decida dispararla.' },
          { icon: Users, title: 'Lo Que Revisar en un Protocolo', text: 'Quién tiene la upgrade authority (el permiso para cambiar el programa) y la autoridad de administrador. Si es una multisig, cuántas firmas exige (2 de 5 es poco) y si hay un timelock que retrase los cambios para que los usuarios puedan reaccionar. Drift usaba Squads, la multisig estándar de Solana: la herramienta no falló, fallaron los firmantes.' },
          { icon: Shield, title: 'Lo Que Aplica a Ti', text: 'Nunca firmes algo que no entiendes, aunque venga de alguien de confianza o parezca urgente. Lee la simulación. Si usas una multisig propia (por ejemplo Squads con una Ledger), revisa cada propuesta en el dispositivo. Y desconfía de cualquiera que, tras semanas de relación, te pida firmar "solo una formalidad".' }
        ],
        highlight: {
          title: 'Después del Ataque',
          text: 'Drift relanzó su exchange con otro nombre y abrió reclamos en octubre de 2026, con pagos iniciales de apenas ~1% de las pérdidas. Si depositas en un protocolo, asume que una parte de ese riesgo es tuya y que la recuperación puede tardar años o no llegar.'
        }
      },
      {
        type: 'main',
        title: 'Checklist de Seguridad Diaria',
        content: 'La seguridad no es un evento único, es un hábito. Estos son los chequeos y prácticas que debes incorporar a tu rutina cripto:',
        features: [
          { icon: Smartphone, title: 'Dispositivo Dedicado', text: 'Idealmente, usa un dispositivo separado (tablet vieja, computador secundario) exclusivamente para cripto. Sin redes sociales, sin descargas aleatorias, sin extensiones innecesarias del navegador. Si no es posible, al menos usa un perfil de navegador separado exclusivo para cripto con solo las extensiones de wallet necesarias.' },
          { icon: Globe, title: 'VPN y DNS', text: 'Usa una VPN confiable cuando operas desde redes públicas (cafeterías, aeropuertos), o mejor, los datos de tu celular. En una red que no controlas, alguien puede intentar manipular tu conexión o el DNS para mandarte a un sitio falso. Considera un DNS privado.' },
          { icon: CheckCircle, title: 'Verificación Pre-Transacción', text: 'Antes de CADA transacción significativa: (1) Verifica la URL manualmente, (2) Lee la simulación en tu wallet, (3) Confirma la dirección de destino carácter por carácter, (4) Empieza con una transacción pequeña de prueba. Sí, es tedioso. También lo es perder $50,000 por un typo.' },
          { icon: AlertTriangle, title: 'Address Poisoning: No Copies del Historial', text: 'Un ataque en crecimiento: el atacante genera una dirección casi idéntica a una que usas (mismos primeros y últimos caracteres) y te envía polvo (transacciones diminutas) para que aparezca en tu historial. Cuando copias "tu" dirección desde el historial, copias la del atacante. Defensa: nunca copies direcciones del historial de transacciones, verifica ambos extremos Y un fragmento del medio, y usa la libreta de direcciones de tu wallet para destinos frecuentes.' },
          { icon: RefreshCw, title: 'Auditoría Periódica', text: 'Una vez al mes: revisa qué dApps tienen permisos sobre tus wallets, verifica que tu hardware wallet tiene firmware actualizado, confirma que tus backups de seed phrases están intactos y accesibles, y revisa si algún protocolo que usas ha sido comprometido recientemente.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Usa el modelo de 3 niveles: Cold Storage (la mayor parte, por ejemplo 80-90%, en hardware wallet), Hot Wallet (por ejemplo 5-15% para operaciones), Burner Wallets (mínimo para experimentar). La separación de fondos es tu defensa principal contra pérdidas catastróficas.',
          'En Solana, lee siempre la simulación antes de firmar (una firma maliciosa puede vaciarte al instante). En EVM, las aprobaciones ilimitadas son un vector grave: revoca permisos que no uses. Nunca firmes lo que no entiendas.',
          'Tu seed phrase es sagrada: almacenamiento físico (nunca digital), múltiples copias en ubicaciones diferentes, y para grandes cantidades considera Shamir (SLIP-39) en una hardware wallet que lo soporte, nunca cortando la frase a mano.',
          'Antes de depositar en un protocolo, revisa quién puede cambiarlo (upgrade authority), cuántas firmas exige su multisig y si hay timelock. El caso Drift (abril de 2026, ~$285M) no fue un bug: fueron firmas obtenidas con engaño.',
          'La discreción es seguridad. No publiques tus holdings, no hables de cripto con extraños, y ten un plan de herencia para que tus fondos no se pierdan si te pasa algo.',
          'Desarrolla hábitos de seguridad: dispositivo dedicado para cripto, VPN en redes públicas, verificación manual de cada URL y cada dirección, y transacciones de prueba antes de enviar montos grandes.',
          'El phishing es una de las amenazas más comunes para el usuario promedio. Nadie legítimo te pedirá tu seed phrase. Ningún airdrop real requiere que "conectes tu wallet" a un link de DM. Si suena demasiado bueno para ser verdad, es una estafa.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Tienes $80,000 en cripto. ¿Qué arquitectura de wallets sigue el modelo de 3 niveles?',
          options: [
            { id: 'a', text: 'Todo en Phantom en el celular, porque así tienes acceso rápido cuando quieras' },
            { id: 'b', text: 'Todo en un exchange grande, porque su seguro cubre cualquier pérdida tuya' },
            { id: 'c', text: '80-90% en hardware wallet, una hot wallet para operar y burners para probar' },
            { id: 'd', text: 'Repartido en partes iguales entre 20 wallets, para que ningún hack te afecte' }
          ],
          correctAnswer: 'c',
          explanation: 'Separar por nivel de riesgo hace que un error tenga un techo: si te vacían la burner, pierdes centavos; si te vacían la hot wallet, pierdes una parte pequeña. Veinte wallets iguales reparten el dinero pero no el riesgo, porque todas suelen vivir en el mismo dispositivo. Y el seguro de un exchange no cubre cualquier pérdida.'
        },
        {
          id: 'q2',
          question: 'En una red EVM, una dApp te pide una "unlimited approval" para gastar tus USDC. ¿Qué significa?',
          options: [
            { id: 'a', text: 'Solo puede usar los USDC que tú envíes de forma manual a esa dApp cada vez' },
            { id: 'b', text: 'Solo aprueba el gasto para esta transacción, y el permiso vence al terminar' },
            { id: 'c', text: 'Es un requisito técnico sin riesgo real, porque el contrato ya está auditado' },
            { id: 'd', text: 'El contrato puede gastar todos tus USDC de esa wallet sin volver a preguntar' }
          ],
          correctAnswer: 'd',
          explanation: 'Una aprobación ilimitada deja que el contrato mueva todos tus tokens de ese tipo cuando quiera. Si el contrato es hackeado o malicioso, puede vaciar tu saldo sin que firmes nada más. Revoca los permisos que no uses. En Solana el riesgo principal es otro: una sola firma maliciosa puede mover activos al instante.'
        },
        {
          id: 'q3',
          question: 'Recibes un DM en Discord: "Eres elegible para un airdrop exclusivo. Conecta tu wallet aquí". ¿Qué haces?',
          options: [
            { id: 'a', text: 'Conecto mi wallet principal para no perder el airdrop exclusivo que ofrecen' },
            { id: 'b', text: 'Lo ignoro: un airdrop real no llega por DM ni pide conectar la wallet ahí' },
            { id: 'c', text: 'Conecto una burner wallet, porque así no arriesgo nada si resulta ser falso' },
            { id: 'd', text: 'Le pido más información al remitente para verificar si el airdrop es real' }
          ],
          correctAnswer: 'b',
          explanation: 'Los "airdrops exclusivos" por DM son una de las formas más comunes de phishing. Los airdrops reales se reclaman en el sitio oficial del proyecto. Usar una burner suena prudente, pero igual entrenas el hábito de firmar en sitios desconocidos, y el remitente siempre va a decir que es real.'
        },
        {
          id: 'q4',
          question: '¿Cuál es la forma más segura de guardar tu frase semilla?',
          options: [
            { id: 'a', text: 'En una captura guardada en Google Photos, para tener respaldo en la nube' },
            { id: 'b', text: 'En papel o placa de metal, con 2-3 copias en lugares físicos distintos' },
            { id: 'c', text: 'En un documento cifrado en tu computador, protegido con una contraseña' },
            { id: 'd', text: 'Solo memorizada, sin ningún respaldo físico, para que nadie pueda robarla' }
          ],
          correctAnswer: 'b',
          explanation: 'La frase semilla se guarda de forma física, nunca digital. El metal resiste fuego e inundaciones, y varias copias en lugares distintos protegen de un desastre local. Un documento cifrado parece seguro, pero el computador puede tener malware. Y la memoria falla: si la olvidas, nadie puede recuperar tus fondos.'
        },
        {
          id: 'q5',
          question: '¿Qué es Shamir (SLIP-39) y cuándo conviene usarlo?',
          options: [
            { id: 'a', text: 'Cortar tu frase semilla a mano en tres partes y guardar cada una aparte' },
            { id: 'b', text: 'Un protocolo DeFi para compartir rendimientos entre varias wallets tuyas' },
            { id: 'c', text: 'Un servicio de custodia que guarda tu frase semilla en su servidor' },
            { id: 'd', text: 'Dividir el respaldo en N partes, de las que M bastan para recuperarlo' }
          ],
          correctAnswer: 'd',
          explanation: 'Shamir divide el respaldo en, por ejemplo, 3 partes de las que bastan 2. Ninguna parte sola revela nada, y perder una no te deja sin fondos. Conviene para montos grandes y se hace con una hardware wallet compatible. Cortar la frase a mano es la versión peligrosa: cada pedazo revela palabras y perder uno puede dejarte sin acceso.'
        },
        {
          id: 'q6',
          type: 'ordering',
          question: 'Ordena los pasos antes de enviar un monto grande desde tu wallet.',
          items: [
            'Verifico la URL a mano',
            'Leo la simulación de la wallet',
            'Confirmo la dirección de destino carácter por carácter',
            'Envío una transacción de prueba pequeña',
            'Envío el monto completo'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Primero confirmas que estás en el sitio correcto, luego qué hará la transacción y a quién va. Verificar carácter por carácter importa porque el address poisoning siembra direcciones parecidas en tu historial. La prueba pequeña confirma todo antes de arriesgar el monto completo.'
        },
        {
          id: 'q7',
          question: 'Según el caso Drift, ¿qué deberías revisar en un protocolo antes de depositar, además de sus auditorías?',
          options: [
            { id: 'a', text: 'Nada más: una auditoría reciente ya cubre todos los riesgos del protocolo' },
            { id: 'b', text: 'Que su APY sea estable, porque los hacks siempre empiezan con APY altos' },
            { id: 'c', text: 'Quién puede cambiarlo, cuántas firmas exige su multisig y si hay timelock' },
            { id: 'd', text: 'Que tenga muchos seguidores en X, porque eso prueba que es de confianza' }
          ],
          correctAnswer: 'c',
          explanation: 'En Drift (abril de 2026, ~$285M) no hubo un bug en el código: se obtuvieron firmas de administrador con engaño. Por eso importa quién controla la upgrade authority, cuántas firmas exige el multisig y si un timelock da tiempo para reaccionar. Una auditoría revisa el código, no quién tiene las llaves.'
        },
        {
          id: 'q8',
          type: 'true-false',
          question: 'En Solana, firmar una sola transacción maliciosa puede vaciar tu wallet al instante.',
          correctAnswer: true,
          explanation: 'Verdadero. A diferencia de las aprobaciones de EVM, que dejan un permiso abierto para después, en Solana una transacción puede transferir todos tus activos en el momento en que la firmas. Lee siempre la simulación y no firmes lo que no entiendes.'
        }
      ]
    }
  },
  40: {
    id: 40,
    title: 'Staking SOL: Gana por Asegurar la Red',
    level: 'Avanzado',
    number: '4 de 13',
    duration: '20 min',
    type: 'Tutorial + Concepto',
    description: 'El staking es la forma más simple de poner tu SOL a trabajar: delegas a un validador, ayudas a asegurar la red, y ganas recompensas en SOL (alrededor de 5% anual a noviembre de 2026). Aprende la mecánica de epochs, cuentas de stake y delegación, cómo elegir un validador óptimo, las diferencias entre staking nativo y liquid staking (mSOL, jitoSOL, bSOL), y sigue un tutorial paso a paso para empezar desde Phantom o Solflare.',
    sections: [
      {
        type: 'intro',
        title: '¿Por Qué Te Pagan por Hacer Staking?',
        content: 'Bitcoin tiene mineros que gastan electricidad para asegurar la red. Solana tiene **validadores** que ponen SOL como garantía. Si hacen trampa, pierden su dinero. **Proof of Stake** reemplaza energía por capital en riesgo. Cuando haces staking, estás diciendo: "Confío en este validador para que sea honesto". A cambio, recibes parte de las recompensas que la red paga por procesar transacciones. Es la forma más básica de rendimiento en cripto: no necesitas DeFi, pools de liquidez ni estrategias complejas. Pero ese rendimiento es en SOL, y el precio de SOL puede caer mucho más de lo que ganas.',
        highlight: {
          title: 'La Magia del Staking',
          text: 'A noviembre de 2026, el staking nativo de SOL rinde alrededor de 5.0-5.4% anual según la comisión del validador. Una comparación honesta: un CDT a un año en Colombia pagaba ~8.5-13% EA en noviembre de 2026, en pesos y con tasa fija; el staking rinde en SOL, y la volatilidad del precio de SOL domina el resultado final en tu moneda. A cambio, en el staking nativo nunca pierdes la custodia de tus tokens. Tu SOL sigue siendo tuyo, solo está "comprometido" con un validador que tú eliges.'
        }
      },
      {
        type: 'main',
        title: 'Cómo Funciona: Epochs, Delegación y Recompensas',
        asOf: 'noviembre de 2026',
        content: 'Solana divide el tiempo en **epochs** (hoy, alrededor de un día). Al final de cada epoch, se distribuyen las recompensas proporcionalmente al stake delegado. **Delegar** significa asignar tu SOL a un validador sin enviárselo. Tu SOL pasa a una **cuenta de stake** que controla tu wallet, no el validador: solo le das "peso de voto" para que participe en el consenso.',
        features: [
          { icon: RefreshCw, title: 'Epochs y Distribución', text: 'Cada epoch tiene 432,000 slots. Desde octubre de 2026 cada slot dura 200 milisegundos, así que un epoch dura alrededor de un día (antes eran 2-3 días). Al final de cada epoch, la red calcula las recompensas de cada validador según su participación y rendimiento, y las distribuye proporcionalmente a sus delegadores. Las recompensas se acumulan automáticamente en tu cuenta de stake.' },
          { icon: Lock, title: 'Tu Cuenta de Stake', text: 'Al delegar, tu wallet crea una cuenta de stake aparte. Tiene dos permisos: la autoridad de stake (quien puede delegar o desactivar) y la autoridad de retiro (quien puede sacar el SOL). Ambas son tu wallet. Crear la cuenta exige un depósito de rent pequeño (~0.0017 SOL a noviembre de 2026) que recuperas al cerrarla, y para delegar se necesita al menos 1 SOL.' },
          { icon: Shield, title: 'Slashing: El Castigo por Hacer Trampa', text: 'En teoría, si un validador actúa maliciosamente (ej: vota por dos bloques conflictivos), pierde parte de su stake y el de sus delegadores. A noviembre de 2026, Solana no aplica slashing automático en producción, aunque está en discusión. Aun sin slashing, los validadores con mal comportamiento pierden delegadores y comisiones, hay incentivo económico para ser honesto.' },
          { icon: Award, title: 'Comisión del Validador', text: 'Los validadores cobran una comisión sobre las recompensas que generan (típicamente 0-10%). Si un validador cobra 5% de comisión y genera 100 SOL en recompensas para tu delegación, recibes 95 SOL y el validador se queda con 5 SOL. Busca validadores con comisiones razonables (<5%) pero recuerda que 0% comisión puede significar que el validador no es económicamente sostenible.' },
          { icon: Percent, title: 'APY Real vs Nominal', text: 'El rendimiento del staking nativo ronda 5.0-5.4% anual, incluidos los tips de MEV que hoy también llegan a los stakers nativos, y varía por epoch y validador. La inflación del protocolo ronda **~3.6% anual**, y baja 15% cada año hasta estabilizarse en 1.5%. En agosto de 2026 los validadores aprobaron duplicar ese ritmo de reducción (SGP-0002), pero el cambio todavía no está activo. Tu rendimiento REAL (después de inflación) hoy es bajo, pero mejora a medida que cae la emisión. Y lo más importante: NO hacer staking significa que tu SOL se diluye por la inflación del protocolo. Stakear es la defensa mínima contra la dilución.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Elegir un Buen Validador',
        content: 'No todos los validadores son iguales. La diferencia entre un buen y un mal validador puede ser 1-2% de APY anual, además de los riesgos de centralización. Usa herramientas como **StakeWiz**, **Solana Beach**, o **validators.app** para analizar validadores:',
        features: [
          { icon: Zap, title: 'Uptime y Rendimiento', text: 'Busca validadores con >98% uptime que no se salten sus turnos de producir bloques. Si el validador está offline, no participa en el consenso y tus recompensas se reducen. Un validador con 95% uptime te genera significativamente menos que uno con 99.5%. Ojo: desde Alpenglow (octubre de 2026), los votos ya no son transacciones, así que algunas métricas antiguas como "vote success rate" cambiaron; usa el APY estimado que muestran las herramientas.' },
          { icon: Users, title: 'Stake y Descentralización', text: 'Delegar a validadores pequeños y medianos ayuda a descentralizar la red. Los "superminority" (top ~20 validadores que controlan 33% del stake) ya tienen demasiado poder. Delegar a un validador fuera de ese grupo, con buen rendimiento, te paga prácticamente lo mismo y es bueno para la red (más descentralización). Las recompensas no dependen de cuántos delegadores tenga el validador.' },
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
            'Para retirar, desactivas y esperas al final del epoch (hoy ~1 día)',
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
          { icon: Layers, title: 'Marinade (mSOL)', text: 'El protocolo de liquid staking más antiguo y probado de Solana. Distribuye tu stake entre cientos de validadores automáticamente (favoreciendo la descentralización). mSOL sube de precio vs SOL a medida que acumula recompensas, no necesitas "reclamar" nada. Ampliamente aceptado como colateral en DeFi (Kamino y otros).' },
          { icon: Zap, title: 'Jito (jitoSOL)', text: 'Jito nació capturando valor de MEV para sus stakers, y por años eso le dio un APY algo mayor. Hoy los tips de MEV también llegan al staking nativo, y a noviembre de 2026 jitoSOL rendía ~4.8-5.0%, algo menos que el staking directo. Su ventaja es la liquidez: jitoSOL es muy líquido y aceptado en casi todos los protocolos DeFi de Solana.' },
          { icon: Globe, title: 'BlazeStake (bSOL)', text: 'Enfocado en descentralización: distribuye stake a validadores más pequeños. También ofrece su propio sistema de incentivos con tokens BLZE. Buena opción si priorizas la salud de la red además del rendimiento.' },
          { icon: AlertTriangle, title: 'Riesgos del Liquid Staking', text: 'Dependes del smart contract del protocolo, si tiene un bug, tus fondos están en riesgo. En escenarios de estrés extremo, el token liquid (mSOL, jitoSOL) puede perder su peg temporalmente. Y al usar el token en DeFi, acumulas capas de riesgo: riesgo de staking + riesgo del protocolo de liquid staking + riesgo del protocolo DeFi donde lo depositas.' }
        ]
      },
      {
        type: 'main',
        title: 'Tutorial: Hacer Staking Paso a Paso',
        content: 'Tanto Phantom como Solflare hacen el proceso muy sencillo. Aquí el procedimiento completo para ambas opciones:',
        features: [
          { icon: Wallet, title: 'Staking Nativo en Phantom', text: '1. Abre Phantom, toca tu saldo de SOL y luego "Start Earning SOL". 2. Explora la lista de validadores (revisa comisión y uptime). 3. Selecciona un validador fuera del superminority con <5% comisión y >98% uptime. 4. Elige la cantidad (mínimo 1 SOL) y deja una reserva pequeña para fees, por ejemplo 0.02-0.05 SOL. 5. Confirma: pagas un fee mínimo más el depósito de rent de la cuenta de stake, que recuperas al cerrarla. 6. Tus recompensas empiezan a acumularse desde el siguiente epoch. Si tu SOL está en una Ledger, puedes hacer staking nativo desde Solflare o la extensión de Phantom (la app móvil de Phantom no lo permite).' },
          { icon: Smartphone, title: 'Liquid Staking en Jupiter/Marinade', text: '1. Ve a jup.ag (Jupiter) o marinade.finance. 2. Conecta tu wallet. 3. Elige cambiar SOL por mSOL (o jitoSOL/bSOL). 4. Ingresa la cantidad. 5. Confirma el swap. 6. Recibes mSOL en tu wallet. 7. Tus recompensas se acumulan automáticamente en el precio de mSOL (sube vs SOL con el tiempo).' },
          { icon: Clock, title: 'Tiempos y Expectativas', text: 'Staking nativo: tus recompensas empiezan a acumularse desde el siguiente epoch (hoy ~1 día). Si retiras, desactivas y esperas al final del epoch. Liquid staking: instantáneo en ambas direcciones (depósito y retiro vía swap). Las recompensas se reflejan en el precio del token continuamente.' }
        ]
      },
      {
        type: 'main',
        title: 'Educación, No Asesoría',
        content: 'Todo lo que ves en este nivel es educación financiera general, no asesoría personalizada ni una recomendación de compra o venta. El trading activo tiene alto riesgo y la mayoría de quienes lo practican pierde dinero. Si decides operar, usa solo tu capital de trading (máximo 5-10% de tu porción cripto) y nunca tu base de DCA, tu fondo de emergencia ni dinero que necesites.'
      },
      {
        type: 'takeaways',
        title: 'Lo Que Debes Recordar',
        items: [
          'Staking es la forma más simple de rendimiento en Solana: delegas tu SOL a un validador, ayudas a asegurar la red, y ganas alrededor de 5% anual en SOL (noviembre de 2026). Tu SOL queda en una cuenta de stake que controla tu wallet, no el validador.',
          'Elige validadores con cuidado: >98% uptime, comisión <5-7%, fuera del superminority, y al menos 6 meses de historial estable. Usa StakeWiz para comparar métricas antes de delegar.',
          'No hacer staking te diluye: la inflación de SOL (~3.6% a noviembre de 2026, y decreciente) reduce tu porcentaje de la red. Stakear es la defensa mínima contra la dilución, esencialmente mantener tu porcentaje de la red constante.',
          'Liquid staking (mSOL, jitoSOL, bSOL) te da flexibilidad para usar tu SOL stakeado en DeFi, pero añade capas de riesgo: smart contract del protocolo, posible depeg en estrés extremo, y complejidad adicional.',
          'jitoSOL destaca por su liquidez (hoy ya no rinde más que el staking nativo). Marinade prioriza descentralización distribuyendo entre cientos de validadores. BlazeStake incentiva validadores pequeños con tokens BLZE.',
          'Deja una reserva pequeña sin stakear (por ejemplo 0.02-0.05 SOL) para fees. El staking nativo exige mínimo 1 SOL, y retirar toma hasta el final del epoch (hoy ~1 día).'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿De dónde sale principalmente la recompensa de ~5% anual que recibes por stakear SOL?',
          options: [
            { id: 'a', text: 'De los intereses que pagan quienes piden SOL prestado en los protocolos de lending' },
            { id: 'b', text: 'De un fondo de la Solana Foundation que subsidia a todos los que deciden stakear su SOL' },
            { id: 'c', text: 'De la emisión nueva de SOL, más parte de las comisiones y el MEV que gana el validador' },
            { id: 'd', text: 'De las multas que pagan los validadores que se desconectan o fallan en sus votos' }
          ],
          correctAnswer: 'c',
          explanation: 'La mayor parte viene de la inflación programada de SOL (~3.6% al año a noviembre de 2026), y el resto de comisiones de prioridad y MEV que el validador comparte. Confundirlo con intereses de un préstamo es común: en staking nativo nadie pide prestado tu SOL, solo ayuda a votar.'
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Cuando delegas SOL en staking nativo, el validador que elegiste puede mover ese SOL a otra wallet.',
          correctAnswer: false,
          explanation: 'Falso. Tu SOL queda en una cuenta de stake cuyas autoridades controla tu wallet. El validador solo recibe el peso de voto. Por eso el riesgo principal del staking nativo no es que el validador se quede con tu SOL, sino que rinda poco o que tú pierdas el control de tu wallet.'
        },
        {
          id: 'q3',
          question: 'Un validador del top 10 por stake ofrece 0% de comisión y casi 100% de rendimiento de votos. ¿Por qué podría no ser tu mejor opción?',
          options: [
            { id: 'a', text: 'Porque sumar stake al superminority concentra la red en menos validadores' },
            { id: 'b', text: 'Porque los validadores grandes pagan menos recompensas por cada SOL delegado' },
            { id: 'c', text: 'Porque con 0% de comisión la red bloquea el pago de recompensas al delegador' },
            { id: 'd', text: 'Porque un validador grande puede retener tu SOL más tiempo cuando lo retiras' }
          ],
          correctAnswer: 'a',
          explanation: 'El superminority es el grupo de validadores que juntos tienen un tercio del stake: si se coordinan o fallan a la vez, pueden detener la red. Delegar a validadores fuera de ese grupo ayuda a repartir el poder. Lo tentador es pensar que el tamaño reduce tus recompensas; no es así, por eso la decisión depende de ti y no del APY.'
        },
        {
          id: 'q4',
          question: 'Tienes 100 SOL y quieres usarlos como colateral en Kamino sin dejar de ganar staking. ¿Qué opción encaja y qué riesgo agrega?',
          options: [
            { id: 'a', text: 'Un LST como jitoSOL o mSOL; no agrega riesgo, porque por dentro sigue siendo SOL' },
            { id: 'b', text: 'Staking nativo, porque la cuenta de stake se puede depositar en cualquier protocolo DeFi' },
            { id: 'c', text: 'Un LST como jitoSOL o mSOL; agrega riesgo de contrato y de perder la paridad con SOL' },
            { id: 'd', text: 'Ninguna: no es posible ganar staking y usar ese mismo capital en DeFi a la vez' }
          ],
          correctAnswer: 'c',
          explanation: 'Un token de liquid staking representa tu SOL stakeado y se puede usar en DeFi. Pero suma capas: el contrato del protocolo de staking, el del protocolo donde lo depositas y el precio del LST frente a SOL, que en momentos de estrés puede alejarse. "Sigue siendo SOL" es solo media verdad: lo que tienes es un derecho sobre ese SOL.'
        },
        {
          id: 'q5',
          question: 'Desactivas hoy tu stake nativo para usar ese SOL. ¿Cuándo puedes moverlo?',
          options: [
            { id: 'a', text: 'De inmediato, porque ese SOL nunca salió del control de tu wallet' },
            { id: 'b', text: 'Al terminar el epoch en curso, que hoy dura alrededor de un día' },
            { id: 'c', text: 'Después de 21 días, como en otras redes con Proof of Stake' },
            { id: 'd', text: 'Cuando el validador apruebe tu solicitud de retiro de fondos' }
          ],
          correctAnswer: 'b',
          explanation: 'El stake se desactiva al cierre del epoch, que con bloques de ~200 ms dura cerca de un día. Que tu wallet controle la cuenta de stake es cierto, y por eso la opción "de inmediato" tienta, pero el SOL está bloqueado hasta que termine la desactivación. El validador no aprueba nada: es una regla de la red.'
        },
        {
          id: 'q6',
          question: 'La inflación de SOL es ~3.6% al año y el staking rinde ~5%. Si pasas el año entero sin stakear, ¿qué le pasa a tu porción de la red?',
          options: [
            { id: 'a', text: 'Se mantiene igual, porque la cantidad de SOL en tu wallet no cambia nada' },
            { id: 'b', text: 'Baja, porque se crea SOL nuevo y lo reciben sobre todo quienes stakean' },
            { id: 'c', text: 'Sube, porque quienes stakean bloquean su SOL y queda menos en circulación' },
            { id: 'd', text: 'Baja a la mitad, porque la inflación se cobra de las wallets sin staking' }
          ],
          correctAnswer: 'b',
          explanation: 'Tu número de SOL no cambia, pero el total sí crece, y el SOL nuevo va a los que stakean. Tu porcentaje de la red baja. Esa es la dilución. Nadie te quita SOL de la wallet: lo que pierdes es participación relativa.'
        },
        {
          id: 'q7',
          question: '¿Qué esperas hoy del rendimiento de jitoSOL frente al staking nativo?',
          options: [
            { id: 'a', text: 'Bastante mayor, porque suma todas las propinas MEV sobre el stake' },
            { id: 'b', text: 'Exactamente igual siempre, porque jitoSOL es solo SOL renombrado' },
            { id: 'c', text: 'Cero, porque los LST dan liquidez pero no generan recompensas' },
            { id: 'd', text: 'Similar o algo menor, a cambio de liquidez para usarlo en DeFi' }
          ],
          correctAnswer: 'd',
          explanation: 'A noviembre de 2026, jitoSOL rinde ~4.8-5.0% y el staking nativo ~5.0-5.4%: el MEV ya se reparte también entre stakers nativos. Lo que pagas con un LST es la comisión del protocolo, y lo que ganas es liquidez. La idea de que jitoSOL "rinde más" viene de años anteriores.'
        },
        {
          id: 'q8',
          type: 'ordering',
          question: 'Ordena los pasos para hacer staking nativo desde Phantom.',
          items: [
            'Tener al menos 1 SOL, más una reserva pequeña para fees',
            'Elegir un validador revisando comisión, rendimiento y superminority',
            'Confirmar la delegación en tu wallet',
            'Esperar a que el stake se active al cambiar el epoch',
            'Revisar tus recompensas al final de cada epoch'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Primero el saldo (mínimo 1 SOL y algo para fees), luego la elección del validador, la firma, y la espera de activación. Las recompensas llegan epoch a epoch, así que revisarlas al final de cada uno te dice si el validador rinde lo que esperabas.'
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
            question: 'Validador A: 0% de comisión y 95% de rendimiento de votos. Validador B: 3% de comisión y 99.5%. Ambos fuera del superminority. ¿Cuál te rinde más?',
            options: [
              'B: 99.5% × 97% ≈ 96.5% del máximo, más que el 95% de A',
              'A: sin comisión recibes todo, y eso pesa más que el uptime',
              'Son iguales: lo que B cobra en comisión, A lo pierde en votos',
              'Depende del plazo: A rinde más al inicio y B a largo plazo'
            ],
            correctAnswer: 0,
            explanation: 'Rendimiento relativo ≈ uptime × (1 − comisión). A: 95% × 100% = 95%. B: 99.5% × 97% ≈ 96.5%. B gana por ~1.5 puntos y además es más confiable. Una comisión de 0% atrae, pero si el validador falla votos, pierdes más de lo que ahorras.',
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
    number: '3 de 13',
    duration: '21 min',
    type: 'DeFi Avanzado',
    description: 'Cada vez que haces un swap en un DEX, bots invisibles pueden extraer valor de tu transacción. Aprende qué es MEV, cómo te afecta, y las herramientas para protegerte.',
    sections: [
      {
        type: 'intro',
        title: '¿Qué es MEV y Por Qué Te Importa?',
        content: 'Imagina que estás en una casa de cambio con un billete de $100 esperando tu turno. El cajero le susurra a un amigo lo que vas a hacer. El amigo compra dólares antes que tú (subiendo el precio) y luego te vende más caro. Eso es esencialmente lo que ocurre con **MEV (Maximal Extractable Value)**, el valor máximo que puede extraerse al reordenar, insertar, o censurar transacciones dentro de un bloque. Aquí hay un matiz crucial que la mayoría de cursos explica mal: a diferencia de Ethereum, **Solana no tiene un mempool público**. Gulf Stream envía tus transacciones directamente al validador líder de turno, no a un área de espera visible para todos. Entonces, ¿cómo te ven los bots? Por las goteras del sistema: operadores de RPC y validadores que corren clientes modificados y filtran las transacciones que pasan por sus manos, y líderes que colaboran con bots a cambio de una tajada. De hecho, Jito operó un pseudo-mempool público y lo cerró en marzo de 2024 precisamente porque facilitaba ataques sandwich. Desde 2025 también crecen las vías privadas de envío y las subastas de order flow, que cambian quién ve tu transacción, pero no eliminan el problema. El resultado para ti es el mismo: bots extraen valor de usuarios regulares todos los días en Solana. Es un impuesto invisible que pagas cada vez que interactúas con DeFi sin protección, y la mayoría de usuarios ni siquiera sabe que existe.',
        highlight: {
          title: 'La Magnitud del Problema',
          text: 'Las estimaciones varían mucho según el método. Un rastreador especializado (sandwiched.me) estimó entre **$370 y $500 millones** extraídos con ataques sandwich en Solana en los 16 meses hasta mayo de 2025. Y en el pico de actividad, el 17 de noviembre de 2024, los tips pagados al block engine de Jito llegaron a ~$14.7 millones en un solo día. Ninguna cifra es exacta, pero todas apuntan a lo mismo: es mucho dinero, y sale de usuarios como tú.'
        }
      },
      {
        type: 'main',
        title: 'Ataques Sandwich: El Robo que No Ves',
        content: 'El ataque sandwich es la forma más común y dañina de MEV que afecta a usuarios regulares. Funciona en tres pasos perfectamente sincronizados que ocurren en milisegundos:',
        features: [
          { icon: AlertTriangle, title: 'El Ataque Paso a Paso', text: '(1) Tú envías un swap: "Cambiar 100 USDC por SOL". Tu transacción pasa por un RPC con goteras o llega a un validador que corre un cliente modificado, y un bot la ve antes de que se ejecute. (2) El bot MEV envía una compra de SOL ANTES que la tuya (front-run), subiendo el precio. (3) Tu swap se ejecuta al precio ya inflado, recibes menos SOL del esperado. (4) El bot vende inmediatamente después de ti (back-run), capturando la diferencia como ganancia. Todo ocurre en el mismo bloque, en milisegundos.' },
          { icon: Eye, title: 'Cómo se Ve en la Práctica', text: 'Ejemplo concreto: quieres cambiar 100 USDC por SOL y configuraste 3% de slippage. Sin MEV recibirías 0.67 SOL. Un bot sandwich ve ese margen y empuja el precio casi hasta tu límite: tu swap se ejecuta y recibes 0.65 SOL, y el bot vende y se queda con la diferencia (~0.02 SOL, unos $3). Con slippage de 0.5%, lo máximo que podría quitarte es ~0.003 SOL, y muchas veces ya no le conviene atacar. Parece poco, pero multiplica eso por miles de transacciones por hora.' },
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
          { icon: Activity, title: 'Back-Running', text: 'El bot ejecuta una transacción inmediatamente DESPUÉS de una transacción grande para capturar una oportunidad de arbitraje. Ejemplo: un swap grande deja el precio de SOL en un pool de Raydium por debajo del precio en Orca. Un bot de back-running compra en Raydium (barato) y vende en Orca (caro) en el mismo bloque, capturando la diferencia. Este tipo de MEV es menos dañino, en realidad ayuda a equilibrar precios entre DEXs.' },
          { icon: AlertTriangle, title: 'Liquidation MEV', text: 'En protocolos de lending como Kamino o Jupiter Lend, cuando una posición cae por debajo del colateral mínimo, cualquiera puede liquidarla y recibir un bonus. Es una carrera de latencia por liquidaciones legítimas: los bots compiten en microsegundos, conectándose directamente a validadores, por ser los primeros en ejecutar liquidaciones que el protocolo ya autorizó. (Nota: manipular oráculos para forzar liquidaciones que no deberían ocurrir es una clase de exploit distinta, la verás en la lección Riesgos de DeFi: La Guía Completa.)' },
          { icon: Brain, title: 'El Costo Real para Ti', text: 'Aunque no veas una línea que diga "fee de MEV" en tu transacción, lo pagas en peor ejecución de precio. Si tus swaps sin protección se ejecutan un 1% peor de lo esperado y mueves $2,000 al mes, pierdes ~$20 al mes, unos $240 al año, sin verlo en ningún recibo. La víctima ni siquiera sabe que está pagando.' }
        ]
      },
      {
        type: 'main',
        title: 'Jito y la Solución de Solana',
        asOf: 'noviembre de 2026',
        content: 'Solana tiene un enfoque único para manejar MEV, centrado en Jito, el protocolo que ha transformado cómo se procesan transacciones en la red:',
        features: [
          { icon: Layers, title: 'Jito Bundles: La Clave', text: 'Jito permite agrupar transacciones en "bundles" (paquetes) que no se publican: solo los ven el block engine de Jito y el validador líder de turno. ¿Por qué importa? Si los bots públicos no ven tu transacción antes de ejecutarse, no pueden atacarla. Pero "privado" no significa invisible: confías en que el block engine y el líder no abusen de lo que ven. Los bundles además son atómicos: se ejecutan en el orden exacto que especificas y nadie puede insertar transacciones entre las tuyas. Dato clave: Jito llegó a operar un pseudo-mempool público donde los bots podían ver transacciones pendientes, y lo cerró en marzo de 2024 precisamente porque facilitaba ataques sandwich.' },
          { icon: Zap, title: 'Tips de Jito vs Priority Fees', text: 'No confundas dos mecanismos distintos. Los "priority fees" son el mercado de fees nativo de Solana: pagas más por unidad de cómputo para que el líder priorice tu transacción. Los "tips de Jito" son propinas que se pagan al block engine de Jito para entrar en un bundle protegido. El modo Ultra de Jupiter combina ambos y envía tus transacciones de forma privada. Son palancas separadas con propósitos diferentes.' },
          { icon: RefreshCw, title: 'Redistribución de MEV', text: 'Jito redirige parte de las ganancias de MEV hacia validadores y sus stakers. Casi todo el stake de Solana recibe bloques del block engine de Jito, y los tips se reparten con los delegadores. Hoy eso le llega también al staking nativo, así que jitoSOL ya no rinde más por MEV: a noviembre de 2026, jitoSOL rendía ~4.8-5.0% y el staking nativo ~5.0-5.4%. Lo verás en Staking SOL: Gana por Asegurar la Red.' },
          { icon: Network, title: 'El Ecosistema Jito en Números', text: 'Los clientes de la familia Jito corren más de la mitad del stake de Solana, y ~98% del stake usa su block engine. Desde 2025, Jito despliega BAM (Block Assembly Marketplace), que arma los bloques en entornos aislados y ya cubre más de un tercio del stake. Al mismo tiempo crecen las vías privadas de envío y las subastas de order flow (Jupiter Ultra, Titan y otras). Nada de esto elimina el MEV: decide quién lo ve y quién se queda con él.' }
        ]
      },
      {
        type: 'main',
        title: 'Cómo Protegerte: Guía Práctica',
        content: 'No puedes eliminar MEV completamente, pero puedes reducir drásticamente cuánto valor te extraen con estas estrategias:',
        features: [
          { icon: Shield, title: 'Protección MEV en Jupiter', text: 'El modo Ultra de Jupiter (el que usa jup.ag por defecto) envía tus transacciones de forma privada, sin publicarlas donde los bots las vean. El modo Manual no ofrece esa protección: si lo usas, mantén el slippage bajo. La protección reduce mucho el riesgo, pero no lo elimina: siempre hay alguien en la cadena de envío que ve tu orden.' },
          { icon: Target, title: 'Configura el Slippage Correctamente', text: 'El slippage es el margen de variación de precio que aceptas. Si pones slippage de 10%, le estás diciendo a los bots: "acepto recibir hasta un 10% menos". Eso es una invitación abierta a un sandwich attack. Para tokens líquidos (SOL, USDC), usa 0.5-1% de slippage. Solo sube a 2-3% para tokens de baja liquidez. Nunca uses más de 5% excepto en emergencias.' },
          { icon: Lock, title: 'Transacciones Protegidas', text: 'Algunos wallets y DEXs ofrecen "transacciones privadas" o "protección MEV" que envían tu transacción por canales privados directamente al validador líder, sin exponerla a RPCs o relays con goteras. En Solana, esto se logra a través de los bundles de Jito. Verifica que tu wallet o DEX tenga esta opción habilitada por defecto, y recuerda que siempre confías en quien recibe tu transacción.' },
          { icon: Scissors, title: 'Divide Swaps Grandes', text: 'Jupiter ya divide tu orden entre pools dentro de una misma transacción. Si aun así el price impact supera ~1%, divide la compra en el tiempo (por ejemplo con una orden DCA): cada parte mueve menos el precio y deja menos margen a un bot. Partir un swap en varios seguidos, sin protección y con slippage alto, no te protege: cada parte puede ser atacada.' },
          { icon: Clock, title: 'Usa Limit Orders', text: 'En vez de hacer un market swap (que se ejecuta al precio actual y es vulnerable a MEV), usa órdenes límite en Jupiter. Con una limit order, especificas el precio exacto al que quieres comprar o vender. La orden se ejecuta solo cuando el precio llega a tu objetivo, y como no hay una transacción tuya "en vuelo" que los bots puedan anticipar, es mucho más difícil de sandwichear.' }
        ]
      },
      {
        type: 'takeaways',
        title: 'Protegiendo tu Valor en DeFi',
        items: [
          'MEV (Maximal Extractable Value) es el valor que se extrae al reordenar transacciones en un bloque. En Solana NO hay mempool público: los bots te ven a través de RPCs y validadores que filtran transacciones. El resultado es un impuesto invisible que pagas cada vez que haces un swap sin protección.',
          'El ataque sandwich es la forma más común: un bot compra antes de tu swap (subiendo el precio), tu swap se ejecuta a peor precio, y el bot vende después capturando la diferencia. Afecta especialmente a swaps con slippage alto y transacciones grandes.',
          'Jito es la pieza central del MEV en Solana: bundles atómicos que no se publican, aunque el block engine y el líder sí los ven. Jito cerró su pseudo-mempool público en marzo de 2024 porque facilitaba sandwiches, y hoy despliega BAM.',
          'Parte del MEV vuelve a validadores y stakers como tips. Hoy le llega también al staking nativo, así que jitoSOL ya no rinde más que el staking directo por ese motivo.',
          'Para protegerte en la práctica: usa el modo Ultra de Jupiter (envío privado por defecto; el modo Manual no lo trae), slippage de 0.5-1% en tokens líquidos (nunca más de 5%), divide en el tiempo las compras con price impact alto, y usa órdenes límite cuando no tengas prisa.',
          'MEV no se puede eliminar completamente, es una propiedad estructural de las blockchains. Pero con las herramientas correctas (envío privado, slippage bajo, órdenes límite), puedes reducir tu exposición drásticamente.'
        ]
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: 'Cambias $5,000 USDC por SOL en modo Manual y recibes 2% menos de lo esperado. En el explorador ves que, en el mismo bloque, una wallet compró SOL justo antes que tú y vendió justo después. ¿Qué ocurrió?',
          options: [
            { id: 'a', text: 'Una comisión oculta de Jupiter, que se cobra en una transacción por separado' },
            { id: 'b', text: 'Un sandwich: el bot subió el precio antes de tu swap y vendió justo después' },
            { id: 'c', text: 'Una subida natural de SOL justo en el segundo en que se ejecutó tu swap' },
            { id: 'd', text: 'Un arbitraje normal entre DEXs que no tuvo ningún efecto en tu precio' }
          ],
          correctAnswer: 'b',
          explanation: 'Compra antes, venta después, misma wallet, mismo bloque: es la firma de un sandwich. El bot se quedó con ~$100. Un arbitraje normal (back-run) solo opera después de tu swap; aquí la compra previa es la que empeoró tu precio. La protección: modo Ultra, slippage bajo y dividir compras grandes.'
        },
        {
          id: 'q2',
          question: 'Subes el slippage a 10% en modo Manual para que tu swap "no falle". ¿Qué cambia para un bot que vea tu transacción?',
          options: [
            { id: 'a', text: 'Nada: el slippage solo decide la comisión que Jupiter cobra por la ruta' },
            { id: 'b', text: 'Le cuesta más atacarte, porque tu swap entra con más prioridad al bloque' },
            { id: 'c', text: 'Nada: Solana no tiene mempool público, así que nadie ve tu transacción' },
            { id: 'd', text: 'Puede mover el precio casi 10% en tu contra y tu swap se ejecuta igual' }
          ],
          correctAnswer: 'd',
          explanation: 'El slippage es el máximo empeoramiento de precio que aceptas. Con 10%, un bot sabe que puede empujarte casi hasta ahí sin que tu swap falle. Lo de "no hay mempool" es la confusión peligrosa: no hay uno público, pero RPCs y validadores que filtran transacciones sí dejan que los bots vean la tuya.'
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'Como Solana no tiene un mempool público, los ataques sandwich no son posibles en la red.',
          correctAnswer: false,
          explanation: 'Falso. Sin mempool público los bots ven menos, pero siguen viendo transacciones a través de RPCs y validadores que las filtran o las venden. Por eso los sandwiches existen en Solana, y por eso el envío privado y el slippage bajo importan.'
        },
        {
          id: 'q4',
          question: '¿Qué protege realmente un bundle de Jito, y qué no?',
          options: [
            { id: 'a', text: 'Va cifrado de punta a punta, así que ni el líder del bloque puede leer su contenido' },
            { id: 'b', text: 'No se publica y se ejecuta completo o nada, pero el block engine y el líder lo ven' },
            { id: 'c', text: 'Bloquea a todos los bots de la red durante el slot en que se incluye tu transacción' },
            { id: 'd', text: 'Hace gratis tu transacción, así que los bots no tienen cómo competir por el orden' }
          ],
          correctAnswer: 'b',
          explanation: 'Un bundle no pasa por canales públicos y es atómico: nadie puede meter una transacción entre las tuyas. Pero no es invisible: el block engine de Jito y el validador líder lo ven, así que reduce el riesgo a cambio de confiar en ellos. La idea del cifrado total es el malentendido más común.'
        },
        {
          id: 'q5',
          question: 'Tu swap deja SOL más barato en Raydium que en Orca, y un bot hace arbitraje entre los dos justo después. ¿Te perjudicó?',
          options: [
            { id: 'a', text: 'Sí: se quedó con la diferencia de precio que te tocaba por haber movido el pool' },
            { id: 'b', text: 'No directamente: opera después de tu swap y no cambia el precio que obtuviste' },
            { id: 'c', text: 'Sí: todo MEV es un sandwich, aunque el bot solo opere después de tu transacción' },
            { id: 'd', text: 'Sí: el arbitraje revierte tu swap y te devuelve menos tokens de los esperados' }
          ],
          correctAnswer: 'b',
          explanation: 'Un back-run de arbitraje no toca tu ejecución: tu precio ya quedó fijado. Lo que hace es alinear los precios entre pools, algo que incluso ayuda al mercado. El daño viene cuando un bot actúa antes de ti. No todo MEV es un ataque, y distinguirlos te ahorra preocupaciones falsas.'
        },
        {
          id: 'q6',
          question: 'Vas a cambiar 2 SOL por USDC en modo Manual, un par muy líquido. ¿Qué slippage usas?',
          options: [
            { id: 'a', text: 'Entre 0.5% y 1%: alcanza para que pase y deja poco margen a un bot' },
            { id: 'b', text: '0%: así ningún bot puede mover el precio ni un centavo en tu contra' },
            { id: 'c', text: '5% o más: los pares líquidos se mueven rápido y no quiero que falle' },
            { id: 'd', text: 'Da igual el número, porque en un par líquido nunca hay bots atentos' }
          ],
          correctAnswer: 'a',
          explanation: 'En pares líquidos, 0.5-1% suele bastar. Con 0% la mayoría de swaps fallaría por movimientos normales del precio, y con 5% o más le das a un bot un margen amplio. Los bots buscan cualquier swap rentable, también en pares líquidos. (En modo Ultra, Jupiter calcula el slippage por ti.)'
        },
        {
          id: 'q7',
          type: 'multiple-select',
          question: '¿Cuáles de estas prácticas reducen de verdad tu exposición al MEV? Selecciona todas las correctas.',
          options: [
            { id: 'a', text: 'Usar el modo Ultra de Jupiter, que envía tu swap en privado' },
            { id: 'b', text: 'Usar slippage de 0.5-1% en tokens líquidos' },
            { id: 'c', text: 'Dividir en el tiempo una compra con price impact alto' },
            { id: 'd', text: 'Hacer tus swaps de madrugada, cuando hay menos bots' },
            { id: 'e', text: 'Usar slippage de 10% para que la transacción no falle' }
          ],
          correctAnswers: [0, 1, 2],
          explanation: 'Envío privado, slippage bajo y compras divididas reducen lo que un bot puede ver o extraer. Los bots operan las 24 horas, así que el horario no protege, y un slippage alto hace exactamente lo contrario: amplía el margen del atacante.'
        },
        {
          id: 'q8',
          question: 'Parte del MEV vuelve a la red como propinas a los validadores. ¿A quién le llega hoy esa parte?',
          options: [
            { id: 'a', text: 'Solo a quienes tienen jitoSOL, porque Jito reparte las propinas en su token' },
            { id: 'b', text: 'A las víctimas de sandwiches, que Jito identifica y compensa en cada epoch' },
            { id: 'c', text: 'A validadores y sus stakers, incluso en staking nativo, no solo en jitoSOL' },
            { id: 'd', text: 'A la Solana Foundation, que las usa para financiar la seguridad de la red' }
          ],
          correctAnswer: 'c',
          explanation: 'Las propinas van al validador líder, que comparte una parte con quienes le delegan, tengan jitoSOL o stake nativo. Por eso jitoSOL ya no rinde más que el staking nativo (~4.8-5.0% frente a ~5.0-5.4% en noviembre de 2026). Nadie compensa a las víctimas: el MEV que te extraen se pierde.'
        }
      ]
    },
    checkpointQuizzes: [
      {
        id: 1,
        sectionIndex: 1,
        title: 'Checkpoint: El Margen del Sandwich',
        questions: [
          {
            id: 'cp1-q1',
            question: 'Cambias 10 SOL por un token con slippage de 3%, en modo Manual. Un bot te hace un sandwich. ¿Cuánto puede quitarte como máximo, aproximadamente?',
            options: [
              'Cerca de 3% del swap, unos 0.3 SOL: tu slippage es su margen',
              'Nada, porque el slippage solo cubre cambios naturales de precio',
              'Todo el swap, porque el bot puede quedarse con tu transacción',
              'Unos 0.03 SOL, porque cada ataque está limitado a 0.3% del total'
            ],
            correctAnswer: 0,
            explanation: 'El bot puede empeorar tu precio hasta el límite que aceptaste. Con 3% sobre 10 SOL, eso es ~0.3 SOL. Con 0.5%, el máximo bajaría a ~0.05 SOL. El slippage no distingue entre un movimiento natural y uno provocado: por eso mantenerlo bajo es tu primera defensa.',
            hint: 'El slippage es el peor precio que aceptas.'
          }
        ]
      }
    ]
  },
  46: {
    id: 46,
    title: 'Gobernanza DAO: Tu Voto Importa',
    level: 'Avanzado',
    number: '13 de 13',
    duration: '24 min',
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
        type: 'glossary',
        terms: [
          {
            term: 'DAO (Organización Autónoma Descentralizada)',
            definition: 'Una "empresa" o comunidad que se gobierna por código y votos, no por jefes ni juntas directivas. Los miembros tienen tokens de gobernanza que les dan poder de voto. Cuando alguien propone un cambio (ej: "subir los fees del protocolo del 0.1% al 0.2%"), los miembros votan con sus tokens. Si pasa, se ejecuta según las reglas de la DAO: a veces el smart contract lo hace automáticamente, y otras veces depende de un equipo o una multisig que la ejecute. Ejemplos: Uniswap (decisiones sobre el DEX), MakerDAO (estabilidad del stablecoin DAI), Jupiter (decisiones sobre el agregador).',
            whyItMatters: 'Si tienes tokens de gobernanza (JUP, UNI, AAVE, etc.), tienes poder real sobre protocolos que manejan miles de millones. La mayoría nunca vota, por eso tu voto importa más de lo que crees. En esta lección ves cómo participar.'
          }
        ]
      },
      {
        type: 'main',
        title: 'Mecanismos de Votación',
        content: 'No todas las DAOs votan igual. El mecanismo de votación determina quién tiene poder real y cómo se toman las decisiones. Cada sistema tiene trade-offs entre eficiencia, equidad, y resistencia a la manipulación:',
        features: [
          { icon: Banknote, title: 'Token-Weighted (1 Token = 1 Voto)', text: 'El mecanismo más común y simple. Quien tiene más tokens tiene más poder de voto. Es transparente y fácil de implementar, pero tiene un problema fundamental: las ballenas (holders con millones de tokens) dominan las votaciones. Una sola wallet con el 5% del supply puede superar a miles de usuarios pequeños. Es democracia del capital, no de las personas. Jupiter y la mayoría de DAOs de Solana usan este modelo.' },
          { icon: Users, title: 'Votación Cuadrática (Costo al Cuadrado)', text: 'El costo de votos adicionales crece al cuadrado: 1 voto cuesta 1 token, 2 votos cuestan 4 tokens, 3 votos cuestan 9 tokens, y así sucesivamente. Esto reduce drásticamente el poder de las ballenas porque comprar influencia marginal se vuelve prohibitivamente caro. Es mucho más equitativo, pero vulnerable a ataques Sybil (crear múltiples wallets para dividir tu poder y votar "barato" desde cada una).' },
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
          { icon: Award, title: 'Jupiter ASR: Gobernanza con Recompensas', text: 'Jupiter creó el programa Active Staking Rewards (ASR) para premiar la participación. Al principio exigía votar; hoy reparte 50M JUP por trimestre según cuánto JUP tienes stakeado y por cuánto tiempo, sin exigir votos. Es un buen ejemplo de cómo cambian los incentivos: pagar por votar sube la participación, pero también puede atraer votos sin estudio. Si stakeas, recuerda que retirar toma 7 días.' },
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
          title: 'Tu Defensa como votante',
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
            'Los incentivos se alinean: los votantes son los usuarios del protocolo',
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
          { icon: Zap, title: 'Jupiter Governance y ASR', text: 'Jupiter es uno de los ejemplos más visibles de gobernanza en Solana. Si tienes JUP: 1) Ve a vote.jup.ag y conecta tu wallet. 2) Stakea tus JUP en el panel de gobernanza (retirar toma 7 días). 3) Cuando haya votaciones, vota o delega. 4) Reclama tus ASR dentro del plazo de cada trimestre. Desde 2026, las votaciones se limitan a temas de tokenomics y tesorería, así que puede haber meses sin propuestas.' },
          { icon: Layers, title: 'Marinade Governance', text: 'Marinade (el protocolo de liquid staking de SOL) tiene su propio sistema de gobernanza donde los holders de MNDE votan sobre la dirección de stake, los parámetros del protocolo, y la distribución de incentivos. Accede a través de marinade.finance/governance. Como usuario de mSOL, las decisiones de gobernanza de Marinade te afectan directamente, participar es proteger tu inversión.' },
          { icon: Globe, title: 'Realms: El Hub de DAOs de Solana', text: 'Realms (realms.today) es la plataforma principal para gobernanza on-chain en Solana. Desde ahí puedes explorar cientos de DAOs activas, ver propuestas en votación, y participar directamente. Es el equivalente de Snapshot para Ethereum, pero todo se ejecuta on-chain. Conecta tu wallet, explora las DAOs de los protocolos que usas, y empieza a votar.' },
          { icon: Award, title: 'Paso a Paso: Votar en Jupiter', text: '1) Asegúrate de tener JUP en tu wallet Phantom. 2) Ve a vote.jup.ag y conecta tu wallet. 3) Haz clic en "Stake" e ingresa la cantidad de JUP. 4) Confirma la transacción en Phantom. 5) Revisa las propuestas activas en la pestaña "Vote". 6) Lee cada propuesta completa, incluyendo discusiones en el foro. 7) Vota "For", "Against", o "Abstain". 8) Dentro del plazo de cada trimestre, ve a "Rewards" para reclamar tu ASR. Recuerda que para retirar tus JUP del staking hay una espera de 7 días.' }
        ]
      },
      {
        type: 'main',
        title: 'Caso de Estudio: La Batalla por la Tokenomics de Jupiter',
        content: 'Toda la teoría que acabas de leer se prueba en eventos reales con consecuencias reales. Un ejemplo instructivo del ecosistema Solana: la saga de gobernanza de Jupiter entre 2024 y 2026. Incluye un airdrop masivo, una quema de 3,000 millones de tokens, una DAO que se pausó a sí misma, y un regreso con votaciones de alto impacto, además de un rumor que conviene saber desmentir.',
        features: [
          { icon: BookOpen, title: 'El Contexto (2024-2025)', text: 'Tras el airdrop inicial de enero de 2024 (el "Jupuary", 1,000 millones de JUP), Jupiter tenía miles de millones de JUP reservados para futuros airdrops, equipo y reservas. La pregunta crítica para holders: ¿cuándo y cómo debería circular ese supply? El equipo propuso quemar 3,000 millones de JUP, y el 4 de agosto de 2024 la DAO lo aprobó con el 94.9% de los votos. La quema se ejecutó en enero de 2025, en la conferencia Catstanbul, y recortó el supply de 10,000 a 7,000 millones. Ese mismo enero, la DAO aprobó un segundo Jupuary de 700 millones.' },
          { icon: Users, title: 'La Crisis (junio 2025)', text: 'En junio de 2025, Jupiter hizo algo inédito: PAUSÓ su propia gobernanza citando una "ruptura de confianza" entre equipo y comunidad. Las votaciones generales se detuvieron mientras se rediseñaba el sistema, aunque el staking con ASR continuó (50M JUP por trimestre). En noviembre de 2025, la DAO votó quemar unos 130 millones de JUP recomprados con ingresos del protocolo. Una DAO que se suspende a sí misma para reestructurarse es, en sí misma, una lección de gobernanza: los sistemas de votación no son sagrados, son herramientas que se pueden rediseñar.' },
          { icon: Target, title: 'El Regreso (2026)', text: 'En 2026 la gobernanza volvió, con un alcance más acotado (tokenomics y tesorería). En febrero de 2026, con ~75% de los votos, la DAO aprobó "Net-Zero Emissions": aplazar el Jupuary de 2026 sin fecha, devolver sus 700 millones de JUP a una multisig comunitaria y pausar las emisiones al equipo. En abril circularon en redes mensajes que aseguraban que la DAO había movido el airdrop a mayo con 200 millones de JUP. No hubo tal votación: a noviembre de 2026, el Jupuary sigue sin fecha.' },
          { icon: CheckCircle, title: 'Las Lecciones', text: '**1) Propuesta del equipo y voto de la DAO son cosas distintas**: la quema de 3B la propuso el equipo y la aprobó la DAO. Lee siempre quién propone y qué se votó. **2) Verifica en la fuente**: el supuesto aplazamiento a mayo de 2026 nunca se votó; solo vote.jup.ag y el foro oficial lo confirman. **3) Las DAOs pueden suspenderse y rediseñarse**: la pausa de 2025 no mató a Jupiter, la reestructuró. **4) Todo es verificable on-chain**: cada uno de estos eventos lo puedes auditar tú mismo. Este caso es por qué JUP vale estudiar aunque no lo tengas.' }
        ],
        highlight: {
          title: 'Lo Que Ganan los votantes Informados',
          text: 'Los holders que siguieron la saga de JUP no solo votaron, aprendieron a leer propuestas de tokenomics, a distinguir anuncios del equipo de decisiones de la DAO, y a evaluar trade-offs estratégicos. Esta educación se transfiere a CUALQUIER DAO que analices en el futuro. Votar una vez bien te hace mejor votante para siempre.'
        }
      },
      {
        type: 'takeaways',
        title: 'Tu Voz en el Futuro de DeFi',
        items: [
          'Los tokens de gobernanza te dan poder de decisión real sobre protocolos que manejan miles de millones de dólares. No son "meme tokens", son tu voz y voto en el futuro de las finanzas descentralizadas.',
          'Los mecanismos de votación varían: token-weighted (1 token = 1 voto), cuadrática (el costo crece al cuadrado), conviction (tiempo = poder), y vote escrow (bloqueo = influencia). Cada uno tiene trade-offs entre eficiencia y equidad.',
          'La delegación es la herramienta más poderosa contra la baja participación. Si no tienes tiempo para investigar cada propuesta, delega tu voto a alguien que sí lo haga, pero elige bien y revisa periódicamente.',
          'Los ataques de gobernanza son reales: flash loans (Beanstalk perdió $182M en 2022), votos con tokens robados (Mango, 2022), propuestas de drenaje, y ataques Sybil. Lee cada propuesta, verifica quién propone, y vota en contra de lo sospechoso.',
          'Jupiter ASR muestra cómo cambian los incentivos: empezó pagando por votar y hoy paga por stakear en el tiempo. Pagar por participar sube la participación, pero no garantiza votos informados.',
          'La saga de Jupiter 2024-2026 (airdrop, quema propuesta por el equipo y aprobada por la DAO, pausa de gobernanza, Jupuary aplazado y rumores desmentidos) demuestra que las DAOs son sistemas vivos: pueden fallar, suspenderse, y rediseñarse. Estudiar casos reales te hace mejor votante en cualquier protocolo.',
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
            { id: 'a', text: 'Es demasiado lenta, porque hay que contar millones de votos uno por uno' },
            { id: 'b', text: 'Los tokens pierden valor cada vez que alguien los usa para votar en la DAO' },
            { id: 'c', text: 'Las ballenas pueden dominar las decisiones y dejar sin peso a los pequeños' },
            { id: 'd', text: 'Cualquiera puede crear muchas wallets y votar varias veces con un token' }
          ],
          correctAnswer: 'c',
          explanation: 'Quien tiene más tokens tiene más poder: una sola wallet con el 5% del supply puede superar a miles de holders. Crear muchas wallets no sirve aquí, porque el poder viene de los tokens, no de las wallets; eso sí es un problema en sistemas como la votación cuadrática. Por eso existen alternativas como conviction voting.'
        },
        {
          id: 'q2',
          question: 'Un protocolo anuncia una votación urgente para "transferir 10M USDC de la tesorería a un fondo de crecimiento". La propuesta apareció hace 2 horas y cierra en 6. ¿Qué podría ser?',
          options: [
            { id: 'a', text: 'Un posible drenaje de tesorería: urgencia, lenguaje vago y poco tiempo' },
            { id: 'b', text: 'Un ataque Sybil común, que no afecta en nada a la tesorería del protocolo' },
            { id: 'c', text: 'Una propuesta legítima, porque la propuso alguien de la misma comunidad' },
            { id: 'd', text: 'Un flash loan, porque el monto es grande y la votación es muy corta' }
          ],
          correctAnswer: 'a',
          explanation: 'Las propuestas de drenaje se disfrazan con palabras positivas ("crecimiento", "comunidad") y usan la urgencia para que nadie alcance a analizarlas. Señales: poco tiempo de discusión, montos grandes, wallets de destino desconocidas y proponentes sin historial. Un flash loan es una forma de conseguir votos, no un tipo de propuesta.'
        },
        {
          id: 'q3',
          question: '¿Qué pasa cuando delegas tu voto en una DAO?',
          options: [
            { id: 'a', text: 'Tu peso de voto cuenta a través de otra persona, sin entregar tus tokens' },
            { id: 'b', text: 'Le regalas tus tokens a otra persona de forma permanente para que vote' },
            { id: 'c', text: 'Solo los validadores de la red pueden recibir votos delegados de holders' },
            { id: 'd', text: 'Tus tokens quedan bloqueados y ya no puedes revocar la delegación nunca' }
          ],
          correctAnswer: 'a',
          explanation: 'Delegar presta tu peso de voto, no tus tokens: siguen en tu wallet y puedes revocar la delegación cuando quieras. Con participaciones del 1-15%, delegar en alguien que sí investiga evita que unas pocas wallets coordinadas decidan solas. Elige bien y revisa cómo vota tu delegado.'
        },
        {
          id: 'q4',
          type: 'true-false',
          question: 'En muchas DAOs vota solo una minoría de los holders, a menudo entre el 1% y el 15%.',
          correctAnswer: true,
          explanation: 'Verdadero. La baja participación es uno de los mayores riesgos de una DAO: con pocos votantes, un grupo pequeño y coordinado puede aprobar lo que quiera. Por eso existen la delegación y los incentivos para participar.'
        },
        {
          id: 'q5',
          type: 'ordering',
          question: 'Tienes 500 JUP y quieres participar en la gobernanza de Jupiter. Ordena los pasos.',
          items: [
            'Entro a vote.jup.ag escribiendo la URL',
            'Conecto mi wallet',
            'Stakeo mis JUP, sabiendo que retirar toma 7 días',
            'Voto o delego cuando hay propuestas',
            'Reclamo el ASR dentro del plazo'
          ],
          correctOrder: [0, 1, 2, 3, 4],
          explanation: 'Escribir la URL evita sitios falsos. Antes de stakear, recuerda que retirar toma 7 días y que el precio de JUP puede moverse mientras tanto. El ASR se reclama por periodo, así que revisa los plazos para no perderlo.'
        },
        {
          id: 'q6',
          question: 'Una propuesta quiere "aumentar el multiplicador de rewards del pool X". Se creó hace 18 horas, cierra en 6, y la propone una wallet de 3 semanas que acumuló mucho poder de voto hace poco. ¿Qué haces?',
          options: [
            { id: 'a', text: 'Voto en contra, alerto en el foro e investigo quién está detrás de la wallet' },
            { id: 'b', text: 'Voto a favor, porque más rewards para el pool siempre benefician a todos' },
            { id: 'c', text: 'Me abstengo y dejo que decidan otros con más experiencia que yo en este tema' },
            { id: 'd', text: 'Delego mi voto al delegado más popular sin leer la propuesta completa' }
          ],
          correctAnswer: 'a',
          explanation: 'Discusión corta, votación acelerada, proponente sin historial y acumulación reciente de votos: es el patrón de una extracción dirigida hacia el pool X. Abstenerse parece prudente, pero las propuestas se aprueban con los votos de quienes sí votan. Votar en contra y avisar a la comunidad es la defensa.'
        },
        {
          id: 'q7',
          question: 'Una DAO nueva compara conviction voting (tu voto gana fuerza cuanto más tiempo lo mantienes) con vote escrow (bloqueas tokens y ganas más poder cuanto más largo es el bloqueo). ¿Cuál es la diferencia de fondo?',
          options: [
            { id: 'a', text: 'Conviction premia mantener tu voto; vote escrow, bloquear tus tokens' },
            { id: 'b', text: 'Son el mismo mecanismo con otro nombre según el protocolo que lo use' },
            { id: 'c', text: 'Vote escrow solo existe en Ethereum y conviction solo existe en Solana' },
            { id: 'd', text: 'Conviction premia bloquear tus tokens; vote escrow, mantener tu voto' }
          ],
          correctAnswer: 'a',
          explanation: 'Los dos alinean el poder de voto con el compromiso, por caminos distintos. Conviction penaliza cambiar de opinión: si mueves tu voto, pierde fuerza. Vote escrow penaliza salir: no puedes vender durante el bloqueo, lo que lo hace más rígido pero más difícil de manipular. Es fácil cruzar las dos definiciones.'
        },
        {
          id: 'review_1',
          question: 'Repaso de Firedancer & El Futuro de Solana: en cambios grandes como SIMD-0228, ¿quién votó?',
          options: [
            { id: 'a', text: 'Cada holder de SOL, directamente desde su propia wallet y sin intermediarios' },
            { id: 'b', text: 'Los validadores, con votos ponderados por el stake que tienen delegado' },
            { id: 'c', text: 'La Solana Foundation, que decidió sola y luego publicó el resultado' },
            { id: 'd', text: 'Los holders de JUP, porque Jupiter es la DAO más grande de Solana' }
          ],
          correctAnswer: 'b',
          explanation: 'En Solana votan los validadores, con un peso según su stake. Si haces staking, tu voto es indirecto: llega a través del validador que elegiste. Por eso elegir validador también es una decisión de gobernanza. (Lo viste en la lección Firedancer & El Futuro de Solana.)'
        }
      ]
    }
  }
};
