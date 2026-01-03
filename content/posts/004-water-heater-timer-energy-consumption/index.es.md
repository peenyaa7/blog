---
title: '¿Apagar el termo realmente ahorra dinero? Mi experimento'
summary: '¿Vale la pena ponerle un temporizador al termo de agua caliente? He comparado 4 configuraciones distintas, desde el "siempre encendido" hasta la programación por horas. En este post te muestro los gastos diarios reales para que descubras si estás ahorrando o tirando el dinero.'
date: 2025-12-29T10:12:05+01:00
slug: 'water-heater-timer-energy-consumption'
draft: false
tags: ["ahorro", "energía", "termo", "domótica"]
folders: ["Domótica"] # Max 1 folder
hideTableOfContent: false
---

Cada Navidad, en las redes sociales me aparecen los mismo tipos de videos con los mismos consejos virales:  “*¿Sabías que puedes ahorrar mucho si activas el termo de tu casa solo cuando lo necesitas?*” o “*Tu termo de agua te está vaciando la cartera y no lo sabes…*”.

Como apasionado de la tecnología y la eficiencia he decidido dejar de suponer y empezar a medir datos reales. He pasado semanas analizando datos reales en mi propia casa y aquí te dejo los resultados. **¿Cuánta verdad hay detrás de estos vídeos?**

# El laboratorio: Dispositivos utilizados

Para hacer las pruebas he comprado dos dispositivos sencillos pero eficaces:
- **Temporizador analógico**: que me permite programar las horas exactas de encendido y apagado del termo
- **Medidor de consumo**: que me permite saber cuánto gasta el termo.
  
Adjunto foto de los que he utilizado:

![Foto de los dispositivos](used-devices.jpg)

> Aunque los medidores de consumo suelen mostrar muchos datos, en este análisis nos centraremos exclusivamente en los **kilovatios por hora (kWh)** de cada día, que es lo que realmente pagamos en nuestra factura.

# El experimento: Configuraciones

Durante varias semanas, anoté el consumo diario a la misma hora. Fui rotando entre cuatro configuraciones distintas para ver cuál se adaptaba mejor a mi estilo de vida y, sobre todo, cuál era más eficiente.

Las cuatro configuraciones fueron:

![Las cuatro configuraciones](configurations.png)

# Resultados: Consumo diario y ahorro

Después de varias semanas de pruebas, estos son los resultados obtenidos:

![Calendario de consumo diario](calendar-values.png)

Tras procesar los datos, si calculamos el gasto medio por día y el coste de cada configuración, tendremos como resultado la siguiente tabla resumen:

| Configuración | Gasto medio (kWh) | Coste al día (€) | Coste al mes (€) | Coste al año (€) |
| :---- | :---- | :---- | :---- | :---- |
| **1** *(24h)* | 1'756 kWh | 0'246€ | 7'38€ | 89'73€ |
| **2** *(16h)* | 2'337 kWh | 0'327€ | 9'82€ | 119'42€ |
| **3** *(10h)* | 2'237 kWh | 0'313€ | 9'40€ | 114'31€ |
| **4** *(4h)*  | 2'008 kWh | 0'281€ | 8'43€ | 102'61€ |

> **Nota 1**: El coste por kWh utilizado en los cálculos es de **0'14€/kWh**, ya que el coste medio de mis últimas facturas de luz ha sido de 0'1393€/kWh. Puedes ver el precio de la luz en el siguiente enlace: https://tarifaluzhora.es/ 
> 
> **Nota 2**: Los costes mensuales y sobretodo, el anual, **son aproximados**. Ten en cuenta que los datos están basados en el gasto medio diario de los meses más fríos del año, por lo que el gasto anual real puede ser menor.

## ¿Qué configuración es más rentable?

Si observamos los resultados, curiosamente **la configuración más rentable es la configuración 1** (la de 24h), pero… ¿no debería ser la que gasta más si está las 24 horas funcionando? ¿qué está ocurriendo?

La clave de lo que está ocurriendo aquí está en cómo funcionan los termos.

Un termo no calienta agua sin parar. Solo se activa cuando la temperatura baja de un umbral. Si el aislamiento es bueno, solo da "pequeños empujones" de calor. Si el termo se apaga muchas horas, el agua se enfría del todo o casi del todo. Por lo que al encenderlo, necesita un pico de energía enorme y prolongado para calentar 50, 80 o 100 litros. En mi caso, ese pico consumió más que los pequeños mantenimientos diarios.

## Entonces... ¿merece la pena apagar el termo?

Cómo todo en esta vida no hay una respuesta correcta para todos los casos. Lo que para una casa supone un ahorro considerable, para otra puede ser una molestia constante sin beneficio económico.

La respuesta para tu caso dependerá de lo siguiente:
- **Personas que conviven en la casa**: Cuántas más personas vivan en casa, más demanda de agua caliente habrá y más tiempo deberá estar enchufado el termo.
- **El hábito de las personas**: Si las personas de la casa siguen siempre los mismos hábitos, un temporizador puede ser beneficioso, pero si en cambio no se siguen siempre los mismos hábitos, puede que alguien se duche con agua fría más de una vez.
- **Aislamiento del termo**: Es el factor técnico más importante. Los termos modernos tienen un muy buen aislamiento que puede mantener el agua caliente durante horas. Sin embargo, los termos más antiguos no aíslan tan bien y hacen que el agua se enfríe más rápidamente (esto puedes saberlo si el termo “quema” al tocarlo por fuera)
- **Tipo de contrato de luz**: Si tu contrato de luz tiene discriminación horaria, posponer el calentamiento del agua a las horas más económicas puede ser beneficioso. Sin embargo, si no tienes discriminación horaria, el ahorro puede ser mínimo o despreciable.
- **Tu umbral del confort**: ¿Estás dispuesto a sacrificar la inmediatez del agua caliente por unos euros al mes? Si no te importa planificar tus duchas o arriesgarte a quedarte sin agua caliente en un momento inesperado, la programación es para ti.

# Conclusión

En mi hogar (2 personas, hábitos regulares y contrato sin discriminación), **no merece la pena apagarlo**. El ahorro es inexistente o tan bajo que no compensa el riesgo de quedarte sin agua caliente a mitad de una ducha.

La *única ventaja* que he encontrado durante este tiempo es la de utilizar el reloj temporizador para que apague el termo en los momentos de más demanda eléctrica y así evitar cortes de luz.