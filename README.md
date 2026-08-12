# To-Do List (CRUD) de Tareas y Categorías

![app](/docs/img/app.png)

# 🛑 Antes de Empezar
Hola, ¿Como estas?. Soy Daniel Pineda.

Agradezco mucho tu tiempo para que por favor veas el video y leas el markdown. Esto va permitir demostrarte mis conocimientos.

A continuación, voy a citar textualmente cada uno de los [enunciados del PDF](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/blob/main/docs/prueba_tecnica_desarrollador_movil_frontend.pdf) que tiene la prueba tecnica y seguido de ello voy a dar la respuesta.

# 🎥 Vídeo
> "Capturas de pantalla o grabaciones de video que muestren las nuevas funcionalidades en acción."

El video esta en el siguiente enlace de YouTube:

[https://youtu.be/8itIn1s2cbk](https://youtu.be/8itIn1s2cbk)

# ▶️ ¿Como Ejecutar Aplicación en Local Host?
> "incluyendo un archivo README que explique cómo ejecutar la aplicación"

Clonar repositorio

```console
git clone https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind.git
```

Siempre, antes de ejecutar cualquier comando, primero tienes que situar la terminal en la carpeta raiz donde hiciste `git clone` del proyecto:

```console
cd ruta/a/carpeta/raiz/del/proyecto
```

Reemplazar `ruta/a/carpeta/raiz/del/proyecto` por la carpeta raiz del proyecto

## 📦 Manejador de Paquetes
Este proyecto usa `npm` y `package-lock.json`

## 🟢 Administrador de Versiones para Node.js
Este proyecto usa Node.js 24.0.0. Esto significa que todos los comandos para hacer build, generar APK y ejecutar proyecto se tienen que ejecutar con Node.js 24.0.0

Instalar Node.js 24.0.0

```console
fnm install 24.0.0
```

En la carpeta raiz del proyecto hay un archivo [`.nvmrc`](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/blob/main/.nvmrc) que si tiene instalado `fnm` o `nvm`, cambia la versión de Node.js automaticamente.

Por lo tanto, cada vez que abras la terminal en la ruta del proyecto, no es necesario ejecutar:

```console
fnm use 24.0.0
```

## 📦 Instalar Paquetes
Esto va a instalar Ionic, Capacitor, Angular, Tailwind y firebase:

```console
npm i
```

## ▶️ Script de Desarrollo

```console
npm run start
```

En la salida de la terminal aparece algo similar a esto:

```console
Local: http://localhost:8100
External: http://192.168.X.X:8100
```

En el computador donde hiciste pull del proyecto abrir `http://localhost:8100/to-do-list`

Si tienes conectado el computador y celular al mismo wi fi, entonces en el navegador del celular puedes abrir:

```console
http://192.168.X.X:8100
```

Reemplazando `X.X` por los numeros de la direccion IP

`"start": "ionic serve --external"` en el `package.json` **NO** convierte en una app movil, solamente sirve para tener hot reload mientras se desarrolla en local host.

## 📱 ¿Como Generar APK e IPA?
> "En cuanto al archivo IPA, no hay problema que no lo presente, desde que si haga envío del APK"

> "5. Exportación de APK e IPA
> • Exporta un APK e IPA con la demo:
>
> * Genera un archivo APK para Android y un archivo IPA para iOS con la aplicación demo configurada.
>
> * Proporciona los archivos exportados para la evaluación final."

> "4. Archivos APK e IPA generados a partir de la aplicación demo."

El APK esta en este repositorio, en la carpeta INCOMPLETO - AQUI ESCRIBIR EN CUAL CARPETA ESTA

Los pasos siempre son iguales, lo que cambia son los comandos, dependiendo si estas en Windows para Android o macOS para iOS:

1. `build` compila la aplicacion Angular a archivos estaticos
2. `add` crea carpeta con el proyecto nativo en iOS o Android
3. `sync` sincronizar archivos compilados de Ionic con iOS o Android
4. `open` abre IDE Android Studio en Windows o Xcode en macOS
5. Generar el APK en Android Studio o el IPA en Xcode

Los pasos 1 hasta 4 sincronizan el proyecto con el IDE, es decir, sirven para emular, solo el paso 5 dentro del IDE es el que genera el APK e IPA

## 1. Compilar la Aplicación Web
En la carpeta raiz del proyecto se crea una nueva carpeta llamada `www` que contiene archivos compilados a HTML, CSS y JavaScript.

Ejecutar siempre en Windows y macOS:

```console
npm run build:ionic
```

## Android
Desde un Windows con Android Studio instalado

### 2. Crear el Proyecto Nativo de Android
En la carpeta raiz del proyecto se crea una nueva carpeta llamada `android` que es la aplicacion movil compilada a Android nativo

```console
npm run cap:add:android
```

### 3. Sincronizar Android

```console
npm run cap:sync:android
```

### 4. Abrir Android Studio

```console
npm run cap:open:android
```

### 5. Generar APK
Dentro de Android Studio dar click en:

> Build > Generate APP Bundles or APKs > Generate APKs

![generar_apk](/docs/img/apk/generar_apk.jpg)

En la notificacion que se muestra que dice "Build Completed" dar click en "locate"

![notificacion](/docs/img/apk/notificacion.png)

Android studio guarda el APK en la ruta:

```txt
android/app/build/outputs/apk/debug/app-debug.apk
```

## ⬇️ Descargar APK
> [!IMPORTANT]
> La carpeta `android` **NO** existe en el repositorio. El APK esta subido en el repositorio. Para **descargar** el APK debes abrir la siguiente ruta del proyecto:

[apk/app-debug.apk](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/tree/main/apk)

![descargar_apk](/docs/img/apk/descargar_apk.png)

## iOS
Desde un macOS  con Xcode instalado

### 2. Crear el Proyecto Nativo de iOS

En la carpeta raiz del proyecto se crea una nueva carpeta llamada `ios` que es la aplicacion movil compilada a iOS nativo

```console
npm run cap:add:ios
```

### 3. Sincronizar iOS

```console
npm run cap:sync:ios
```

### 4. Abrir Xcode

```console
npm run cap:open:ios
```

### 5. Generar IPA
Dentro de Xcode generar el IPA

# 📁 Estructura del Proyecto
**src\app\features\to-do\main:** Componente principal que llama a todos los componentes de tareas y categorias

La logica de tareas y categorias es similar

## Tareas

### components de tareas
* **src\app\features\to-do\tasks\components\form-edit-save-tasks:** Formulario para editar y guardar **tareas**

* **src\app\features\to-do\tasks\components\list-tasks-on-cards:** Lista las **tareas** en unas cards

* **src\app\features\to-do\tasks\components\tasks-search:** Formulario para filtrar **tareas** por categorias

### interfaces de tareas
* **src\app\features\to-do\tasks\interfaces\tasks.interface.ts** Tipo de dato de las **tareas** (id, description, completed, category)

### services de tareas
* **src\app\features\to-do\tasks\services\stores\tasks.store.ts:** Estado global con signal que guarda las **tareas**. Sirve para listar y setear las **tareas**

* **src\app\features\to-do\tasks\services\task-crud.service.ts:** Permite hacer el CRUD de las **tareas** (crear, actualizar y eliminar)

**Nota:** El estado global `tasks.store.ts` es el que lista las **tareas**, por eso es que `task-crud.service.ts` solo sirve para crear, actualizar y eliminar y NO para **listar**

## Categorias

### components de categorias
* **src\app\features\to-do\categories\components\form-edit-save-categories:**  Formulario para editar y guardar **categorias**

* **src\app\features\to-do\categories\components\list-categories-on-cards:** Lista las **categorias** en unas cards

### interfaces de categorias
* **src\app\features\to-do\categories\interfaces\categories.interface.ts** Tipo de dato de las **categorias** (id, description)

### services de categorias
* **src\app\features\to-do\categories\services\stores\categories.store.ts** Estado global con signal que guarda las **categorias**. Sirve para listar y setear las **categorias**

* **src\app\features\to-do\categories\services\categories-crud.service.ts** Permite hacer el CRUD de las **categorias** (crear, actualizar y eliminar)

**Nota:** El estado global `categories.store.ts` es el que lista las **categorias**, por eso es que `categories-crud.service.ts` solo sirve para crear, actualizar y eliminar y NO para **listar**

## Servicios Compartidos
Contiene logica que se usa en categorias y tareas

### Persistencia de datos
> "utiliza almacenamiento local para guardar el estado de las tareas"

El almacenamiento local de ionic es @capacitor/preferences

* **src\app\features\to-do\services\helpers\capacitor-preferences.helper.service.ts** Permite guardar array de objetos de las tareas y categorias en el @capacitor/preferences usando JSON.stringify y JSON.parse. Sirve para persistir los datos

### IDs unicos y auto-incrementables
* **src\app\features\to-do\services\helpers\to-do-id-generator.helper.service.ts**
Genera IDs unicos y auto-incrementables para las tareas y categorias

Los IDs permiten:
* Identificar cada categoria y tarea

* "Asignar una categoría a cada tarea"

* Buscar mediante el ID, cual categoria y tarea se va a crear, actualizar y eliminar.

# 🚩 Firebase Remote Config Feature Flag
> "3. Implementación de Firebase y Remote Config
>
> Implementa Firebase y Remote Config:
> * Configura Firebase en la aplicación desde una cuenta personal.
> * Implementa una funcionalidad de feature flag utilizando Remote Config
para activar o desactivar una característica específica de la aplicación.
> * Proporciona una breve demostración de cómo el feature flag afecta la
funcionalidad de la aplicación."

Basicamente es un servicio de Firebase para activar y desactivar features sin publicar nuevas versiones en las apps stores

Configure una feature flag para mostrar y ocultar el boton de eliminar categorias ubicado en el componente.

```txt
src\app\features\to-do\categories\components\list-categories-on-cards\list-categories-on-cards.component.html
```

El boton es el que señalo de rojo:

![boton_eliminar](/docs/img/firebase_remote_config/boton_eliminar.png)

Crear nuevo proyecto en Firebase:

![1_crear_proyecto](/docs/img/firebase_remote_config/1_crear_proyecto.png)

![2_crear_parametro](/docs/img/firebase_remote_config/2_crear_parametro.png)

![3_parametro_guardado](/docs/img/firebase_remote_config/3_parametro_guardado.png)

Publicar cambios

![4_publicar_cambios](/docs/img/firebase_remote_config/4_publicar_cambios.png)

Registrar app web

![5_registrar_app](/docs/img/firebase_remote_config/5_registrar_app.png)

![6_registrar_app](/docs/img/firebase_remote_config/6_registrar_app.png)

Instalar firebase:

```console
npm install firebase
```

![7_SDK_firebase](/docs/img/firebase_remote_config/7_SDK_firebase.png)

La app ya se encuentra registrada

![8_app_registrada.png](/docs/img/firebase_remote_config/8_app_registrada.png)

En [`src\app\config\firebase`](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/tree/main/src/app/config/firebase) y [`src\main.ts`](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/blob/main/src/main.ts) cofigure firebase

Llamadas a la API de firebase:

![9_api_firebase.png](/docs/img/firebase_remote_config/9_api_firebase.png)

> [!IMPORTANT]
> En el ["🎥 Vídeo"](https://youtu.be/8itIn1s2cbk) demuestro que la feature flag si funciona. Estas capturas de pantalla son solamente para mostrar la configuracion de Firebase.

# 🪾 Versionamiento de la Aplicación con Git y GitHub
> "Versionar la aplicación demo en un repositorio de Git:
>
> * Crea un repositorio público en GitHub o GitLab.
> * Sube la aplicación base al repositorio y realiza un commit inicial"

Para hacer commits use la [extension conventional commits de VS Code](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) que permite hacer commits semanticos. Los tipos de commits mas usados son:

| Tipo de commit | Emoji | Definición                                                  |
| ------------- | --- | -------------------------------------------------------------- |
| feat          | ✨ | Nueva funcionalidad (feature)                                   |
| fix           | 🐛 | Corrección de errores (bugs)                                    |
| style         | 💄 | Cambios de maquetacion o diseño (CSS, Tailwind, etiquetas HTML) |
| docs          | 📝 | Cambios de documentación (README.md)                            |
| refactor      | ♻️ | Refactorizacion: Mejorar legibilidad en el código               |
| wip           | 🚧 | Código o cambios no terminados (working in progress)            |
| merge         | 🔀 | Mesclar ramas (`git merge`) y solucion de conflictos              |

## Ver Historial de Commits
Hay dos formas de ver los commits:
1. [Dando click aqui **en GitHub**](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/commits/main/)

![commit-en-git-hub](/docs/img/git-commit/en-git-hub.png)

2. **En git**, ejecutando en la carpeta raiz del proyecto

```console
git log --oneline
```

![commit-en-git](/docs/img/git-commit/en-git.png)

## Commit Inicial
1. Para cambiar el HEAD de Git al primer commit ejecutar:

```console
git checkout c28ba79526c445e61dbcff3a9a904449c8a864b8
```

`c28ba79526c445e61dbcff3a9a904449c8a864b8` es el hash del primer commit

2. Tambien lo puedes ver en Github:

![commit-inicial](/docs/img/git-commit/commit-inicial.png)

## Aclaración
De forma intencional hice muchos commits, la razon es que cada vez que algo me funcionaba hacia commit para "guardar" los cambios, pero en un desarrollo real de producción lo correcto para no "ensuciar" el historial de Git es:

> 1 feature = 1 commit

Hacer un commit por cada feature o bug solucionado.

# Categorías Dinámicas
Las explico en el ["🎥 Vídeo"](https://youtu.be/8itIn1s2cbk)

Las categorias no estan quemadas en el frontend. Existe un formulario que permite guardar cualquier nombre de categoria

![form-categorias](/docs/img/form-categorias.png)

# Validaciones
Las validaciones las explico en el ["🎥 Vídeo"](https://youtu.be/8itIn1s2cbk)

Las validaciones son las siguientes:
* Cuando NO hay categorías guardadas entonces NO permitir guardar tareas

* Todos los campos (inputs) son obligatorios

* Para los campos de texto ("input categoría" y "input descripción") la longitud minima es de 3 caracteres.

* Mostrar filtrar por categoria cuando si hay tareas porque no es posible buscar cuando no hay tareas

* Para no romper la relacion de que 1 tarea pertenece a 1 categoría, entonces validar que NO se puede eliminar categorías asociadas a las tareas. Toca primero eliminar la tarea que esta asociada a la categoria y despues si se puede eliminar la categoria

# Experiencia de Usuario
En el ["🎥 Vídeo"](https://youtu.be/8itIn1s2cbk) explico como hice la maquetacion para mejorar la UX

# Preguntas
> "3. Respuestas a las siguientes preguntas:"

## ¿Cuáles fueron los principales desafíos que enfrentaste al implementar las nuevas funcionalidades?
Sincronizar los estados que guardar las tareas y categorias con @capacitor/preferences. 

**Ejemplo:**
Si se guarda una nueva tarea entonces el estado tiene que ser reactivo para iterarse y mostrarse en la UI, pero al mismo tiempo se tiene que guardar en @capacitor/preferences, por lo tanto las tareas en @capacitor/preferences y el estado siempre deberian ser las mismas

## Optimización de Rendimiento
> "4. Optimización de Rendimiento
>
> * Optimizar la aplicación para mejorar el rendimiento, considerando:
> * La carga inicial de la aplicación.
> * El manejo eficiente de grandes cantidades de tareas.
> * La minimización del uso de memoria."

> "Rendimiento: La aplicación debe ser rápida y eficiente en el manejo de datos."

> "¿Qué técnicas de optimización de rendimiento aplicaste y por qué?"

Cada uno de los siguientes subtitulos explica las optimizaciones de rendimiento que hice:

### Infinite Scroll
Use [ion-infinite-scroll](https://ionicframework.com/docs/api/infinite-scroll) y [ion-infinite-scroll-content](https://ionicframework.com/docs/api/infinite-scroll-content) para **simular** con un `setTimeout()` la carga de las tareas al hacer scroll vertical

Quiero aclarar que significa "simular":

* **En este proyecto:** Las tareas ya están cargadas en el frontend y permanecen en el estado, por lo que el Infinite Scroll es visual.

* **En un proyecto real de produccion:** Lo habitual sería consumir la API y cargar únicamente las próximas N tareas cada vez que el usuario hace scroll.

La diferencia es que en este proyecto los datos siempre estan guardados en el frontend, en cambio, al hacer peticiones HTTP puede guardarse en estado y renderizarse unicamente las tareas visibles

Esto signifca que la paginacion en este proyecto este mal, significa que como no existen peticiones HTTP, entonces no es posible guardar en el estado las N tareas visibles por el usuario al hacer scroll

**¿Por que?** Renderizar solamente los elementos visibles permite que la UI no se bloquee. Tener estados con muchos datos genera lentitud en la app

### Estados con Signals
**¿Por que?** Mejora el renderizado, permite que Angular sepa exactamente que estado cambio y cuales son los estados que dependen entre si

### Calidad
> "¿Cómo aseguraste la calidad y mantenibilidad del código?"
1. **Responsabilidad unica:** Ejemplo: El metodo para guardar tareas (CreateTask en task-crud.service) debe solamente guardar tareas, NO guardar y ademas actualizar

Cuando mesclas muchas responsabilidades en un mismo metodo terminas con un monton de `if else` para validar ¿donde y cual proceso ejecutar?, y al final tienes codigo que "nadie quiere tocar" porque cualquier modifcacion es muy probable de que rompa la app

Tener responsabiliades unicas garantiza de que solamente se modifique un proceso en especifico

2. **Componentizar:** Dividir cada parte de la app en componentes.

**Ejemplo:**
list-categories-on-cards lista las categorias, en cambio list-tasks-on-cards lista las tareas

Similar a como sucede en el punto 1 anterior. Cuando escribes todo el codigo en un componente ocasionas que al modificar ese componente "enorme" sea facil introducir errores

3. Separar los estilos CSS de la siguiente forma:

* **Tailwind** Para los estilos de cada uno de los componentes

* **Ionic** con etiquetas como ion-header, ion-content y ion-footer como contenedores padres para posicionar elementos en mobile, y ademas para formularios usando por ejemplo ion-text

* **CSS** Para estilos globales, CSS custom propierties y acceder al shadow dom

Esto evita que los estilos se sobrescriban debido a la [especificidad](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity), [herencia y cascada](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

# 🧠 Justificación de Desiciones Tecnicas
> "En general el uso de la versión de angular y los  features relacionados a cada uno como Signals, RxJs, ngmodules, Standalone, etc. Son criterio del desarrollador, ya que la idea es buscar elementos de optimización en el rendimiento y son parte de la prueba como decisiones técnicas tomadas por el candidato, por esa razon no se especifican requerimientos técnicos detallados."

En programación no existe una respuesta correcta o incorrecta, siempre existen diferentes formas de resolver el mismo problema. Esto es una justificación basado en mis conocimientos.

## 🅰️ Stack Frontend del Proyecto
* `@ionic/angular 8.0.0`

* `@ionic/cli 7.2.1`

* `@capacitor/cli 8.5.0`

* `"tailwindcss": "^4.3.3"`

* CSS

* `"@angular/cli": "20.3.28"`

* `"typescript": "~5.9.0"`

* Node.js 24.0.0

## Angular Moderno VS Angular Legacy
Angular a partir de la version 17 ha lanzado breaking change importantes. Esta es la lista de los principales breaking change

A partir de Angular 17 se han lanzado breaking changes. Esta tabla la tuve en cuenta para hacer la app

| Nombre de la feature        | Angular Moderno                                                                             | Angular Legacy                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Estados                     | estados con Signals                                                                         | estados sin signals                                                                         |
| Formularios                 | [Forms with signals](https://angular.dev/essentials/signal-forms)                           | [Reactive Forms (`FormGroup`)](https://angular.dev/guide/forms/reactive-forms)              |
| input y output              | input y output CON signals importados desde `import { input, output } from '@angular/core'` | input y output SIN signals importados desde `import { Input, Output } from '@angular/core'` |
| importar componentes        | standalone components                                                                       | ngModules (`app.module.ts`)                                                                 |
| Control Flow Directives     | `@for`, `@if`, `@switch`, `@case`, `@default`                                               | `*ngFor`, `*ngIf`, `ngSwitch`                                                               |
| Inyección de dependencias   | `inject()`                                                                                  | constructor injection                                                                       |

## ¿Porque NO Uso la Ultima Versión de Angular?
Al momento de escribir esto (Agosto 2026)

[Segun documentacion oficial de Ionic](https://ionicframework.com/docs/reference/support#ionic-angular) la ultima version de Ionic para Angular es la 8, que a su vez, es compatible con Angular 20

![versiones-ionic](/docs/img/versiones/ionic.png)

[Segun documentacion oficial de Angular](https://angular.dev/reference/versions), la ultima version de Angular es la 22

![versiones-angular](/docs/img/versiones/angular.png)

Debido a que Ionic solo soporta hasta la version 20 de Angular, tube que usar esa version

No use la ultima version (Angular 22) porque en produccion siempre es recomendable usar versiones estables porque usar las ultimas versiones (beta) pueden generar bugs

## ¿Porque uso [Reactive Forms (`FormGroup`)](https://angular.dev/guide/forms/reactive-forms) y NO [Forms with signals](https://angular.dev/essentials/signal-forms)?
Los Forms with signals son estables a partir de Angular 22, pero como la ultima version compatible de Ionic con Angular es la 20, por eso no pude usar Forms with signals y tuve que usar Reactive Forms 

## ¿Porque standalone components y no ngModules (`app.module.ts`)?
Permite importar los modulos de forma mas organizada

Cuando la app crece, `app.module.ts` tiende a convertirse en un archivo gigante lleno de importaciones

## ¿Porque Uso Estados Globales para las Tareas `tasks.store.ts` y Categorías `categories.store.ts`?
Para evitar prop drilling, es decir, tener que pasar el estado mediante input() a través de varios componentes asi:

> componente padre → componente hijo 1 → componente hijo 2

Los estados globales permiten acceder a los estados directamente usando inyeccion de dependencias, desde cualquier componente sin usar `input`

Esto no quiere decir que siempre es necesario usar estados globales, probablemente si tienes una app sencilla deberias de evitarlos para no agregar complejidad

Los tuve que usar porque cuando empece a crear componentes para separar el flujo de guardar y listar las tareas y categorias, me di cuenta que ambos componentes (de tareas y categorias) necesitan acceder a los mismos estados.

## ¿Porque Cuando Cree el Proyecto NO Instale Ionic de Forma Global?
Instalar de forma local en `node_modules` permite tener varios proyectos ionic con diferentes versiones.

La [documentación oficial](https://ionicframework.com/docs/intro/cli#install-the-ionic-cli) recomienda instalar ionic de forma global con la bandera `-g`

```console
npm install -g @ionic/cli
```

![instalar-ionic](/docs/img/instalar-ionic.png)

Sin embargo, cuando cree el proyecto hice esto:

```console
npx @ionic/cli@latest start to-do blank --type=angular --package-id=com.todo.com --no-git
```

* **`npx`** ejecutar @ionic/cli sin instalarlo globalmente

* **`@ionic/cli@latest`** usar la ultima version de @ionic/cli

* **`start to-do`** Crea un proyecto llamado "to-do"

* **`blank`** Crea un template en blanco sin estilos

* **`--type=angular`** Crear proyecto de Ionic con Angular

* **`--package-id=com.todo.com`** ID para Android y iOS.

* **`--no-git`** no crear respositorio de Git automaticamente

```console
cd ruta/a/carpeta/raiz/del/proyecto
```

Instalar @ionic/cli como dependencia de desarrollo, dentro del proyecto en local
```console
npm i @ionic/cli --save-dev
```

Verificar version de ionic instalada
```console
npx ionic --version
```

Instalar capacitor para android
```console
npm i @capacitor/android
```

Instalar capacitor para ios
```console
npm i @capacitor/ios
```

Instalar capacitor/preferences, necesario para persistir los datos
```console
npm i @capacitor/preferences
```

## `div` wrapper
Esta en src\app\app.component.html

```html
<ion-app>
  <!-- div wrapper -->
  <div class="relative mx-auto h-full w-full max-w-4xl">
    <ion-router-outlet></ion-router-outlet>
  </div>
</ion-app>
```

Es un contenedor padre global que sirve para:
1. centra en horizontal

2. limita el ancho de toda la aplicacion al tamaño de una tablet

## 🧪 ¿Porque Borre los Archivos `.spec.ts`?
Lo hice para simplificar, aunque es buena practica tener test de los procesos criticos de la app.
