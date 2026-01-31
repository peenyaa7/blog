---
title: 'Sofle RGB v2.1: Guía completa de montaje desde cero'
summary: 'En esta guía te traigo una guía completa para montar el teclado custom Sofle RGB v2.1 desde cero, con todos los componentes, proceso de montaje, costes, trucos y solución de problemas.'
date: 2023-01-17T12:00:00+01:00
slug: 'sofle-rgb-build-guide-keyboard-from-scratch'
draft: false
tags: ["split keyboard", "hardware", "guía", "microsoldadura"]
folders: ["Sofle RGB"]
hideTableOfContent: false
---

¡Hola! Hoy quiero recuperar la guía de montaje de un teclado custom que hice en su día para tenerlo en el blog y que cualquiera pueda acceder a él de mejor forma.

![SofleRGBv2.1](./sofle_rgb_v21.jpg)

En esta guía encontrarás: los componentes necesarios, la guía de montaje (con fotos), coste, trucos y solución de problemas para hacer este teclado desde cero.

El nombre del teclado es *Sofle RGB v2.1*, aunque en la guía nos referiremos a él como *Sofle*.

# Antes de comenzar

## Conceptos utilizados en esta guía

Me gustaría empezar con esta sección para **dejar claro cada concepto** que se utiliza en la guía. La mayoría de los terminos utilizados en la guía se utiliza de forma estandarizada, pero no todos somos electrónicos con experiencia por lo que te dejo cada concepto con su definición para que cualquiera pueda hacer su propio teclado desde cero.

> **Cuando no sepas algún concepto, vuelve a esta sección 😉**

### Pads y Silkscreen

![Marcas pad y silkscreen](./pad_and_silkscreen_marks.png)

- **Pads**: Son los puntos de soldadura de la PCB.  
- **Silkscreen**: Es la serigrafía que aparece en la PCB y que nos indica la posición correcta de los componentes.

### Pin Header y Socket Header

![Diferencia entre Pin Header y Socket Header](./pin_header_and_socket_header_difference.png)

- **Pin Header**: Es el componente que comúnmente está soldado a un componente y nos permite conectarlo al Socket Header de la PCB.  
- **Socket Header**: Es el componente que comúnmente está soldado a la PCB y nos permite hacer que otro componente sea intercambiable. En este caso, el Socket Header nos permite conectar el promicro a la PCB sin tener que soldar. Esto nos permite poder cambiar el promicro en caso de que se estropee sin tener que desoldar nada.

### Parte superior e inferior de la PCB

![Diferencia entre parte superior e inferior](./upper_and_lower_parts_difference.png)

- **Parte superior de la PCB**: Es cara de la PCB que *no* está en "contacto" con la mesa cuando tenemos el teclado montado. Sobre esta cara se encuentran los componentes que se ven desde arriba (pantalla OLED, encoders, etc.).  
- **Parte inferior de la PCB**: Es cara de la PCB que *sí* está en "contacto" con la mesa cuando tenemos el teclado montado. Sobre esta cara se encuentran los componentes que no se ven desde arriba (diodos, LEDs, etc.).

## Formas de montar el teclado

Debido a que algunos componentes son más voluminosos que otros, podemos montar el teclado de dos formas distintas en base a lo cómodos que queramos estar:

- **La forma segura**: Consiste en *soldar primero los componentes imprescindibles*, instalar el firmware para verificar que todo está correcto, y luego soldar los componentes opcionales sobre algo que funciona. De esta forma puedes comprobar a mitad de camino que todo funciona correctamente y solventarlo en caso de ser necesario. Esta forma es más difícil de soldar por que el promicro estorba desde el principio, pero es la forma más segura de montar el teclado.  
- **La cómoda**: Consiste en soldar los componentes de forma que *la soldadura sea lo más sencilla posible*. De esta forma, puedes soldar los componentes opcionales sin tener que soldar el promicro. Es menos difícil de soldar, pero puede dar verdaderos dolores de cabeza en caso de error.

En mi caso, he seguido la **segunda (forma cómoda)**, ya que era la primera vez que soldaba y quería que el proceso fuera lo más sencillo posible.

## Mi configuración

El *Sofle* permite varias configuraciones (*te permite montar componentes opcionalmente*) y cada una de ellas puede requerir un proceso de montaje un poco diferente entre ellas. En mi caso he optado por la siguiente configuración:

- ✅ Con pantallas OLED  
- ✅ Con encoders (potenciómetros rotatorios)  
- ❌ Sin LED indicador de capa  
- ✅ Con LEDs underglow  
- ✅ Con LEDs backlight

## Cómo soldar

Antes de aventurarte a soldar el *Sofle* te recomiendo que practiques tu técnica con una placa de prácticas como esta:

![Kit de práctica de soldadura](./soldering_practice_kit.jpeg)

Se puede adquirir por muy poco dinero y te puede ayudar a dar tus primeros pasos en el mundo de la microsoldadura.

La técnica más fiable que puedes utilizar para soldar los distintos componentes es la siguiente:

1. Aplicas un poco de estaño a un pad de la PCB y dejas que endurezca  
2. Acercas el componente (sujetándolo con una pinza o similar), apretando un poco con la patilla que queremos soldar al estaño recién puesto  
3. Aplicamos calor al estaño recién puesto hasta que se funda  
4. Una vez el componente esté en el lugar deseado, alejamos el soldador únicamente y seguimos sujetando el componente hasta que endurezca el estaño  
5. Ahora que el componente se queda sujeto por la primera patilla, aplicamos estaño a las demás patillas del componente

A la técnica de soldar a una sola pata primero se le llama "*tacking*".

> ⚠️ Si el componente es *eléctrico* (diodos, LEDs, promicro) hay que tener más cuidado ya que existe el riesgo de quemar el componente por dentro y que quede inservible. Intenta soldar siempre las patillas opuestas de los componentes para no sobrecalentar la misma zona.

En internet hay muchos videotutoriales que te pueden ayudar de forma gráfica cómo hacer el proceso. En el apartado [Referencias](#referencias) te dejo un par de enlaces con buenas prácticas de microsoldadura. **Échale un ojo**.

## Consejos

Los consejos que voy a dejar son muy obvios, pero no está de más recordarlos. Estos consejos son los que yo he seguido y que me han ayudado a no equivocarme en el montaje del teclado.

- **Marcalo todo**: Es muy recomendable marcar cada mitad del teclado (parte superior izquierda, superior derecha, etc.). Este teclado tiene PCBs reversibles para que sea más económico el proceso de fabricación, pero hace que el montaje sea lioso debido a que cada mitad tiene los agujeros y marcas de ambas partes. Seguir este consejo te ayudará a no equivocarte a la hora de montar el teclado.  
- **No te apresures**: Toma tu tiempo para montar el teclado y no te precipites. Equivocarte en una soldadura puede ser un problema irreversible.  
- **Verifica todo**: Antes de comenzar a soldar algo, verifica que todo esté bien. Si no estás seguro, no lo hagas.  
- **Investiga**: Antes de comenzar a hacer algo, no dudes en investigar. De nuevo, si no estás seguro de algo, no lo hagas.

# Componentes y coste

Durante el proceso de compra de los componentes, varias personas nos hemos unido para comprar los componentes por volumen y así abaratar el precio. Por ello, verás que en los comentarios los identifico como parte de una '**compra conjunta**'.

Los precios que verás en la siguiente tabla **NO** tienen incluido el coste de envío.

| # | Obligatorio | Componente | Cantidad | Precio total | Comentarios |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | ✅ | **PCB, plate superior y plate inferior** | 2 | 4’32€ | Adquirido en compra conjunta en [JLCPCB](https://jlcpcb.com/) |
| 2 | ✅ | **Tornillo M2 (3mm)** | 28 | 0’66€ | Adquirido en compra conjunta |
| 3 | ✅ | **Separador M2 (3mm)** | 14 | 0’95€ | Adquiridas 50 unidades en AliExpress |
| 4 | ✅ | **Diodo 1N4148W** | 60 | 0’92€ | Adquirido en compra conjunta |
| 5 | ❌ | **LED SK6812 Mini (3535)** | 72 | 4,44€ | Adquirido en compra conjunta |
| 6 | ✅ | **Kailh Hotswap Socket** | 58 | 8’44€ | Pedido en AliExpress. |
| 7 | ✅ | **Switch Akko CS Lavanda (tactile)** | 58 | 24’51€ | Pedido en AliExpress. El precio es de 2 cajas de 45 switches cada una. |
| 8 | ✅ | **Keycap** | 58 | 20’05€ | Pedido en AliExpress. El precio es de un pack completo de keycaps en inglés. |
| 9 | ✅ | **Promicro USB-C con pin header** | 2 | 11’03€ | Pedido en AliExpress. |
| 10 | ❌ | **Socket Header para el promicro (12 pines)** | 4 | 0’45€ | Pedido en AliExpress. |
| 11 | ✅ | **Cable USB-C magnético** | 1 | 2€ | Pedido en AliExpress. Puedes utilizar cualquier simple cable que tengas por casa. |
| 12 | ✅ | **Pantalla OLED 128x32 con pin header** | 2 | 3’53€ | Pedido en AliExpress. |
| 13 | ❌ | **Socket Header para la pantalla OLED (4 pines)** | 2 | 1’00€ | Comprado en tienda local. Tuve que cortar uno más largo. |
| 14 | ❌ | **Botón RESET** | 2 | 0’33€ | Adquirido en compra conjunta. |
| 15 | ❌ | **Potenciómetro/Encoder EC11** | 2 | 2’20€ | Pedido en AliExpress. El precio es de 5 potenciómetros. |
| 16 | ❌ | **KNOB para encoder EC11** | 2 | 0’70€ | Pedido en AliExpress. El precio es 5 KNOBs. |
| 17 | ✅ | **Conector TRRS** | 2 | 0’54€ | Adquirido en compra conjunta. |
| 18 | ✅ | **Cable TRRS** | 1 | 1’51€ | Pedido en AliExpress. |
| 19 | ❌ | **Pata de goma** | 10 | 1€ | Comprado en bazar local. |
| 20 | ❌ | **Funda** | 1 | 12’64€ | Pedido en AliExpress. |
|    |     | *TOTAL* | | *101’22€* |     |

# Proceso

Cómo ya he mencionado, he optado por montar el teclado de la **forma cómoda**. Si quieres seguir la forma segura, tendrás que adaptar un poco el proceso. Dicho esto, ¡comencemos!

## 01. Diodos

Los diodos son pequeños componentes que permiten el paso de la corriente en un solo sentido. En los teclados, los diodos se utilizan para *evitar el efecto ghosting*, es decir, que se pulsen varias teclas a la vez y el teclado no lo detecte correctamente.

![Diodo](./diode_component.jpg)

Los diodos van soldados en la **parte inferior** de las PCBs. Hay que tener en cuenta que los diodos tienen **una única posición correcta**, ya que si se colocan al revés, no funcionarán correctamente.

Cada diodo suele tener una pequeña marca que indica el *cátodo* del diodo; te dejo un esquema resumen de la posición correcta de los diodos:

![Esquema del diodo](./diode_schema.jpg)

En la PCB, en cada posición de diodo, hay una pequeña marca que indica la posición correcta del diodo:

![Marcas silkscreen del diodo](./diode_silkscreen_marks.png)

En la guía oficial aparece que son necesarios 58 diodos, pero en mi caso he utilizado 60 diodos (30 en cada mitad), no se si esto es un error de la guía oficial.

Cómo consejo, recomiendo separar 30 diodos por mitad antes de comenzar a soldar, ya que es muy fácil confundirse y soldar un diodo de menos o de más.

## 02. LEDs

> ⚠️ Si no vas a poner LEDs en tu *Sofle* puedes ir al apartado [Puentes LED](#03-puentes-leds) directamente.

Los LEDs son esas pequeñas luces que le dan el toque estético a nuestro teclado.

![Orden de los LEDs](./sofle_rgb_leds_order.png)

En esta guía se diferencia entre 3 tipos de LEDs:

- **LED indicador** (🔴): Hay 1 LED por cada mitad y se marca en color rojo en la imagen anterior. Se sitúa en la parte superior de la PCB, justo al lado del TRRS. En mi caso he optado por no utilizarlo, ya que no lo veo necesario (toda la información que ofrece me la puede ofrecer la pantalla OLED).  
- **LEDs underglow** (🔵): Hay 6 LEDs por cada mitad y se marcan en color azul en la imagen anterior. Se sitúan en la parte inferior de la PCB. Tienen un montaje superficial, lo que hace más complicado el proceso de soldadura.  
- **LEDs backlight** (🟠): Hay 29 LEDs por cada mitad y se marcan en color naranja en la imagen anterior. Se sitúa en los huecos de la PCB, justo debajo de cada switch. Tienen un montaje incrustado, lo que facilita el proceso de soldadura. Estos LED también son conocidos como *in-switch LEDs* o *per-key LEDs*.

Los LEDs que utiliza el *Sofle* son los SK6812 Mini, pero ten cuidado por que hay distintas variantes, por lo que te tienes que asegurar que los que adquieras siguen el siguiente esquema:

![Esquema LED SK6812 Mini](./led_sk6812_mini_schema.jpg)

### Antes de soldar los LEDs

Este apartado lo considero muy necesario en los LEDs, y lo utilizaré para dar unos avisos importantes:

- La silkscreen de la PCB marca el **pin DOUT**, así que no te confundas pensando que marca el pin VCC. Además, no tiene por qué coincidir con la muesca del LED: 
    ![Silkscreen DOUT del LED](./led_silkscreen_dout_mark.png) 
- Antes de soldar un LED, verifica dos veces que está en la posición correcta. Créeme, es muy fácil confundirse pensar que un LED está en la posición correcta cuando en realidad no lo está.  
- Los LEDs son muy sensibles a la temperatura, es muy fácil quemarlos si no se tiene cuidado (una temperatura de 240/260ºC es suficiente)  
- En ocasiones, un LED puede llegar con dos esquinas rotas y confundir dicha esquina con la muesca del LED. Es recomendable no utilizar este tipo de LEDs si tenemos LEDs de sobra.

### Soldadura de los LEDs backlight

Estos LEDs son los que iluminan cada una de las teclas. Están situados en la **parte inferior de la PCB** (mirando hacia la parte superior) justo debajo de cada switch y son los más fáciles de soldar, ya que no hay que sujetarlos (se encajan en el hueco de la PCB).

![LEDs backlight](./leds_backlight_placement.png)

Para soldar estos LEDs tienes que seguir un método un poco distinto al normal. Una vez tienes el LED encajado en el hueco de la PCB (en la posición correcta) tenemos que aplicar suficiente soldadura en uno de los pads de la PCB y, acto seguido, arrastrar la punta del soldador desde el pad con el estaño hasta el LED (sin soltar la punta del soldador). De esta forma "arrastramos" el estaño desde el pad hasta el LED, haciendo como una especie de gota:

![Soldadura LED backlight](./led_backlight_soldering.png)

> Es recomendable que solo hagamos un pad de cada LED, ya que si hacemos dos pads a la vez, es muy probable que se nos queme el LED. Una vez tengamos el primer pad de cada LED, podemos hacer el segundo pad de cada LED (en el mismo orden).

### Soldadura de los LEDs underglow

Estos LEDs son los que iluminan la parte de abajo del teclado (iluminan la mesa). Están situados en la **parte inferior de la PCB** y, a diferencia de los anteriores, son los más difíciles de soldar ya que van soldados de forma superficial y hay que sujetarlos con una pinza.

![LEDs underglow](./leds_underglow_placement.png)

Estos LEDs siguen el proceso normal de soldadura, pero se hacen dificiles al tener las patillas muy cortas.

> **🦸 Pro tip**: Si el primer pad que soldamos en cada uno de los LED es el pad DOUT, nos estamos asegurando de que, si en un futuro, un LED no enciende correctamente, se debe al pin DIN del LED que no funciona correctamente.

## 03. Puentes LEDs

Como el *Sofle* nos permite decidir si queremos unos LEDs u otros de forma opcional, tenemos que cerrar los puentes LED en base a la configuración de LEDs que hayamos elegido.

![Ubicación de los puentes LED](./led_jumper_bridges.png)

> ⚠️ En la foto se ven los puentes fotografiados desde la parte superior, pero los puentes **están soldados en la parte inferior** de la PCB.

Cómo se muestra en la imagen anterior, en cada mitad del *Sofle* hay un total de 3 puentes (`j6`, `j4` y `j5`):

- **Indicator bypass (`j6`)**: Se sitúa justo al lado del Promicro. Siempre debe ser soldado (excepto si no queremos ningún LED en nuestro *Sofle*). Con este puente indicamos si queremos o no queremos el LED indicador.  
- **Light Selector (`j4`)**: Se sitúa en el centro de la PCB. Con este puente indicamos si queremos o no queremos LEDs underglow.  
- **Backlight Enable (`j5`)**: Se sitúa en el centro de la PCB. Con este puente indicamos si queremos o no queremos LEDs backlight. Este puente no es necesario que sea soldado si no tenemos LEDs underglow.

A continuación, te dejo una tabla con las conexiones que se deben hacer en cada uno de los puentes según la configuración de LEDs deseada (si no hay conexión, no se debe soldar nada):

| ¿Quiere LED indicador? | ¿Quiere LED underglow? | ¿Quiere LED backlight? | Puente `j6` | Puente `j4` | Puente `j5` |
| :---- | :---- | :---- | :---- | :---- | :---- |
| ❌ | ❌ | ❌ |  |  |  |
| ❌ | ❌ | ✅ | 1-2 | 1-2 |  |
| ❌ | ✅ | ❌ | 1-2 | 2-3 |  |
| ❌ | ✅ | ✅ | **1-2** | **2-3** | **2-3** |
| ✅ | ❌ | ❌ | 2-3 |  |  |
| ✅ | ❌ | ✅ | 2-3 | 1-2 |  |
| ✅ | ✅ | ❌ | 2-3 | 2-3 |  |
| ✅ | ✅ | ✅ | 2-3 | 2-3 | 1-2 |

He dejado marcada mi configuración en la tabla anterior, y, en la imagen de esta sección también están marcados los puentes que he soldado siguiendo las instrucciones de mi configuración.

> **🦸 Pro tip**: Recomiendo utilizar un trozo de alambre cortado a la medida (con forma de U) para realizar las conexiones en cada uno de los puentes. Esto nos permitirá hacer conexiones más limpias, más fáciles y más seguras.

## 04. Kailh Hotswap

Este componente es el que nos permite poner y quitar los switches de nuestro teclado tantas veces queramos sin tener que soldarlos. Se sitúa justo donde van colocados los switches, y son soldados en la **parte inferior de la PCB**.

Son muy fáciles de soldar, ya que no se trata de un componente electrónico y tiene una gran superficie de contacto con la PCB. Te recomiendo que apliques estaño en el pad, pongas el hotswap encima y aprietes la patilla del hotswap con el soldador hasta que se funda el estaño que queda debajo del componente.

Pero, aunque son fáciles de soldar, también es fácil confundirse por dos motivos:

- Debido a que las PCBs son reversibles.  
- Debido a que podemos tapar el hueco donde irán los switches por error.

A continuación, te dejo un *pequeño esquema* de como colocar el componente (en la parte derecha como ejemplo) y para qué sirve cada agujero:

![Ubicación correcta de los Hotswap](./hotswap_placement_schema.jpg)

## 05. Botón RESET

Este componente es totalmente **opcional**, pero lo recomiendo encarecidamente, sobre todo si nunca hemos tenido un teclado como este o nunca hemos configurado *QMK*.

Este botón va soldado en la **parte superior de la PCB** y nos permite entrar en modo RESET para poder cargar nuestros propios firmwares en el teclado. Si no queremos poner el botón por el motivo que sea, siempre podemos hacer un pequeño puente con un alambre cada vez que queramos cambiar la configuración del teclado.

Cada mitad del *Sofle* requiere de 1 botón de RESET, y se sitúa justo encima del TRRS:

![Ubicación de los botones RESET](./reset_button_locations.png)

Es un componente muy sencillo de soldar, pero es muy probable que se quede torcido si no se hace con cuidado. Si se queda torcido no ocurre nada, pero no se queda todo lo bonito que podría quedar.

## 06. TRRS

Este componente es el que nos permite conectar las dos mitades del teclado. Se sitúa en la **parte superior de la PCB**, justo al lado del botón de reset.

![Ubicación de los TRRSs](./trrs_locations.png)

Los TRRS son muy fáciles de soldar, ya que no se trata de un componente electrónico y tiene una gran superficie de contacto con la PCB. Aunque hay que tener en cuenta que, como la PCB es reversible, hay que soldarlos en la posición correcta. Fijate bien como quedan totalmente opuestos:

![Posición correcta de los TRRSs](./trrs_placement_schema.png)

Te recomiendo que, a la hora de soldar, utilices una pinza para sujetar el componente con la PCB y así poder soldar las patillas por debajo sin mayor problema.

## 07. Puentes OLED

Los puentes OLED nos indican en qué parte (superior o inferior) irá la pantalla OLED conectada(recuerda que la PCB es reversible), por lo que se deben soldar **únicamente en la parte superior de la PCB**, que es la parte donde irá la pantalla OLED.

![Ubicación de los puentes OLED](./oled_bridges_location.png)

Dado que estos puentes quedarán ocultos bajo el promicro y la pantalla OLED, es mejor realizar esta conexión ahora.

![Puentes OLED soldados](./oled_bridges_soldered.png)

## 08. Socket Headers del promicro

Los Socket Headers del promicro es un componente **opcional**, pero que recomiendo encarecidamente. Nos permiten conectar el promicro a la PCB sin tener que soldar, permitiendo su reemplazo en caso de que éste se estropee sin desoldar nada.

Los Socket Headers del promicro se sitúan en la **parte superior de la PCB**, y vienen bien marcados en la siguiente zona:

![Posición correcta del Socket Header](./right_socket_header_location.png)

En la imagen anterior he marcado qué línea de pads debe ser soldada. Aunque es muy sencillo de soldar ya que no hay riesgo de quemar ningún componente eléctrico, si que es muy fácil equivocarse, sobretodo por que al soldar por el otro lado, estarías soldando visualmente en el “lado equivocado” aunque no sea cierto.

Para evitar confundirte, ten en cuenta que los *Socket Headers deben ocultar el silkscreen de la PCB*, tal y como se muestra en la siguiente imagen:

![Socket Headers del promicro ocultando el silkscreen](./promicro_socket_headers_hiding_silkscreen.png)

Y por el otro lado, como ya he mencionado, las soldaduras deben quedar en el “lado equivocado”.

## 09. Promicro

El promicro es el controlador o cerebro de nuestro teclado, el que recibirá todas las órdenes y se pondrá en contacto con el ordenador de forma correcta.

![Promicro y pin header](./promicro_with_pin_header_components.jpg)

Se sitúa en la **parte superior de la PCB**, justo donde hemos puesto los Socket Headers del promicro anteriormente.

> ⚠️ Verifica que tipo de USB utiliza el promicro que has adquirido. En mi caso es de tipo USB-C.

### Modificación del Pin Header del promicro

Si queremos tener una pantalla OLED extraible y que quede bien fijado en nuestro *Sofle* debemos hacer una pequeña modificación del Pin Header del promicro.

Los pasos son los siguientes:

1. Para ello, debemos extraer todos los pins del Pin Header:
   ![Extracción de los pins del Pin Header](./extracting_pins_from_pin_header.png) 
2. Colocar todos todos los pins extraídos en el Socket Header del promicro  
   ![Ubicación de los pins en el Socket Header](./placing_pins_in_socket_header.png)
3. Colocar el promicro, con todos los chips ocultos y soldar los pines de uno en uno en el promicro (soldando pines opuestos cada vez para evitar el sobrecalentamiento)  
   ![Pins modificados soldados en el Promicro](./promicro_with_modified_pins_soldered.png)
4. (Opcional) Cortar el sobresaliente de los pines del promicro para que quede más estético.  
5. Extraer el promicro del Socket Header para que no nos moleste en los pasos siguientes.

## 10. Socket Headers de la pantalla OLED

Tal y como ocurre con los demás Socket Headers, es un componente **opcional** pero muy recomendable (aunque *si has puesto los Socket Headers del promicro, este paso se convierte en obligatorio*).

Se sitúa en la **parte superior de la PCB**, justo debajo del promicro:

![Posición de los Socket Headers de la pantalla OLED](./oled_screen_socket_header_location.png)

El proceso de soldadura es trivial y tiene poco margen de error. Tras su soldado debe quedar algo como esto:

![Socket Header de la pantalla OLED soldado](./oled_screen_socket_header_soldered.png)

## 11. Pantalla OLED

La pantalla OLED es el componente donde podemos mostrar todo tipo de información que queramos (ya veremos como hacer esto en próximos artículos).

![Pantalla OLED](./oled_screen_component.png)

Se sitúa en la **parte superior de la PCB**, encajando la pantalla en el Socket Header de la pantalla OLED.

Normalmente, al adquirir una pantalla OLED, ya viene con los pines soldados, por lo que no requiere soldar nada. Si tu pantalla OLED viene sin pines, deberás hacer la operación de soldado con el pin header correspondiente.

## 12. Encoders

Los encoders son un componente que nos añade funcionalidad extra al teclado. Además, *no perdemos la pulsación* ya que los encoders tienen pulsación. En mi caso los utilizaré para:

- Cambiar el color y el brillo de los LEDs
- Modificar el volumen del ordenador
- Reproducir/Pausar música al pulsar el encoder
- Sacar captura de pantalla al pulsar el otro encoder
- Moverse entre caracteres/palabras dentro de un texto
- ...

Se sitúa en la **parte superior de la PCB**, justo debajo de los TRRS:

![Posición de los potenciómetros](./encoder_locations.png)

El proceso de soldadura de los encoders es muy sencillo ya que tienen unas patillas muy grandes y no se trata de un componente electrónico. El truco reside en **doblar las patas** de manera que el encoder quede sujeto a la PCB, de modo que no se mueva durante el proceso de soldadura.

## 13. Plate superior e inferior

Una vez aquí ya *hemos acabado con el soldador* 👏. Para este siguiente paso debemos poner los tornillos y los separadores en la plate inferior:

![Tornillos y separadores en la plate inferior](./plate_with_screws_and_standoffs.png)

Ahora debemos poner nuestra PCB de manera que los separadores pasen a través de ella:

![PCB colocada sobre la plate inferior](./pcb_placed_on_lower_plate.png)

Y por último, atornillar la plate superior:

![Plate superior atornillada](./upper_plate_screwed_on.png)

Notarás que la *PCB se queda un poco suelta*, no te preocupes, *es algo normal* que solventaremos en el siguiente paso.

## 14. Switches y KNOBs

![Switch Akko CS Lavanda](./akko_cs_lavender_switch.jpeg)

El siguiente paso es poner nuestros switches en cada slot, teniendo cuidado de no doblar ninguna patilla de los switches.

> ⚠️ Ten en cuenta que el switch ubicado debajo de los encoders está ligeramente rotado

![Switch rotado debajo del encoder](./rotated_switch_below_encoder.png)

Una vez tenemos los switches colocados, podemos poner los KNOBs, que no es más que la perilla de la parte superior de los potenciómetros:

![KNOBs puestos en los encoders](./knobs_placed_on_encoders.png)

## 15. Keycaps

Ahora ya por fín viene el turno de la parte más llamativa de cualquier teclado, los *keycaps*:

![Keycaps](./keycaps_image.png)

En mi caso, he adquirido unos keycaps en AliExpress que se ajustan perfectamente al teclado. Recomiendo verificar que el set de keycaps que vayamos a adquirir tenga suficientes teclas (y con el tamaño correcto) para nuestro teclado.

Para colocar los keycaps solo tenemos que apretar un poco la keycap sobre el switch e ir rellenando como deseemos:

![Colocando los keycaps](./placing_keycaps_on_switches.jpg)

## 16. Patas de goma

Las patas de gomas son las que nos permiten que el teclado no se mueva cuando lo utilizamos. No son obligatorias, pero sí muy recomendables.

Las puedes encontrar en cualquier bazar local de tu ciudad.

La posición de las patas de goma es totalmente a gusto del consumidor, pero recomiendo colocar una en cada esquina y otra en mitad, quedando de la siguiente forma:

![Posición de las patas de goma](./rubber_feet_placement.png)

## 17. Cable USB-C

El cable USB-C es el que nos permite conectar el teclado al ordenador. En mi caso es un cable USB-C por que el promicro que he adquirido tiene ese tipo de USB.

Puedes utilizar cualquier tipo de cable USB-C. En mi caso he adquirido un cable USB-C magnético en AliExpress que se ajusta perfectamente al teclado. El sistema magnético es muy cómodo, ya que permite conectar y desconectar el cable sin tener que forzar el conector. Además, protege el conector del teclado en caso de tirón accidental.

![Cable USB-C magnético](./magnetic_usb_c_cable.gif)

## 18. Funda

La funda es **totalmente opcional**, pero complementa muy bien el teclado en caso de que lo quieras llevar de un lado a otro. En mi caso, he adquirido una funda en AliExpress que se ajusta perfectamente al teclado.

Esta funda tiene un pequeño bolsillo donde llevar todos los cables y permite cortar la gomaespuma para que se ajuste perfectamente al teclado:

![Funda del SofleRGB](./sofle_keyboard_case.png)

# El resultado

El resultado es el que ya habeis visto en la introducción de esta guía, pero os lo dejo aquí de nuevo:

![Sofle RGB finalizado](./sofle_rgb_v21.jpg)

Y para que podais saborear mejor el resultado, os dejo un pequeño vídeo del teclado en funcionamiento:

{{< youtube 9V_w-tnDfxI >}}

---

# Solución de problemas

Este apartado contiene la resolución de errores comunes (o por lo menos los que me he tenido que enfrentar) durante el montaje del teclado.

## 1. El promicro no se enciende

Este apartado está enfocado a intentar resolver cuando el promicro, cuando está enchufado a la PCB, no enciende.

Lo primero que debemos hacer es descartar que el promicro en cuestión no está defectuoso. Comprobar esto es tan sencillo como desenchufar el promicro de la PCB, conectar el promicro a cualquier ordenador y comprobar si el LED que viene en el promicro se enciende. Si no se enciende el LED incorporado, el promicro puede estar defectuoso.

Si el promicro enciende cuando no está conectado a la PCB, pero no enciende cuando está conectado a la PCB, es muy probable que tengas un **cortocircuito** en la PCB.

El siguiente paso que debemos hacer es buscar ese cortocircuito en nuestra PCB. Para esto, debemos verificar todas las soldaduras de una en una, comprobando:

- Que no hay ningún componente soldado en corto (una soldadura que toca dos pads distintos)  
- Que no hay ningún componente soldado en la posición incorrecta (por ejemplo, un diodo al revés). Este motivo es el más común, sobre todo en los LEDs.

Si no encuentras el problema, puedes hacer un pequeño truco para encontrar el problema. Este truco consiste en utilizar un papel térmico (el que se utiliza para las cajas registradoras) y cubrir toda la PCB con él. Los cortocircuitos, normalmente, donde se produce el cortocircuito, al no haber resistencia, hace que la conexión que provoca el cortocircuito se ponga muy caliente.

Si no encuentras el problema, un truco útil para localizar el fallo es cubrir la PCB con papel térmico (el que se utiliza para las cajas registradoras), conectar el promicro a la PCB y conectar el teclado a un ordenador. Como los cortocircuitos carecen de resistencia, generan un calor intenso que se transfiere al papel, permitiéndote identificar visualmente donde se encuentra el componente defectuoso:

![Papel térmico con la marca del corto circuito](./paper_thermal_short_circuit_detection.png)

> ⚠️ Ten mucho cuidado al hacer este proceso, ya que si el cortocircuito es muy intenso puede dañar las pistas de cobre. No dejes el teclado conectado más de 1 o 2 segundos.

## 2. Solo funcionan algunos LEDs

Si solo funcionan algunos LEDs, es muy probable que tengas un LED mal soldado.

Para solucionar este problema debemos entender como funcionan los LEDs de nuestro teclado. Los LEDs del *Sofle* están conectados en serie, lo que provoca que un LED mal soldado apague los demás LEDs en la serie de LEDs.

Esta conexión en serie nos da la pista de que el error de soldadura se encuentra en uno de estos puntos:

- El pin de salida del LED (DOUT) del último LED encendido  
- El pin de entrada del LED (DIN) del primer LED apagado

![Esquema de LEDs en serie](./leds_in_series_schema.png)

En este punto solo necesito saber el orden de los LEDs, el cual es el siguiente:

![Orden de los LEDs](./sofle_rgb_leds_order.png)

# Referencias

En este tipo de guías/proyectos toda información es poca, así que te dejo unos cuantos enlaces a recursos externos que te ayudarán a solventar las dudas que no se solventan en esta guía:

- [Guía oficial de Josefadamcik](https://josefadamcik.github.io/SofleKeyboard/build_guide_rgb.html): Es la guía que ofrece el creador del teclado.  
- [Guía oficial traducida al español](https://zonekeyboards.cl/assembly-sofle-rgb): Es la guía que ofrece el creador del teclado, pero traducida al español  
- [Guía paso a paso con fotos](https://docs.beekeeb.com/build-guide/sofle-rgb-v2.1-soflekeyboard-build-log-guide-with-photos): Es una guía como esta, pero hecha por otro usuario.  
- [Gerbers de la PCB](https://github.com/josefadamcik/SofleKeyboard/tree/master/Gerbers/RGB): Los gerbers son archivos que nos permiten ver que conexiones tiene la PCB internamente y que podemos visualizar en algunos software online. A mi me ha ayudado bastante durante el proceso de montaje.  
- [Guía visual de buenas prácticas en soldadura](https://hacedores.com/13-problemas-de-soldadura-de-pcbs/): Guía visual para hacer mejor nuestro proceso de soldadura y tener un buen acabado.  
- [Tamaños de los componentes SMD](https://eulerprecision.com/es/nuestra-tarjeta-de-visita-para-ingenieros/): En el proceso de compra de componentes debemos ser muy cautos en cada componente. Este enlace te puede ayudar a verificar que el tamaño de los componentes sea realmente el que quieres.