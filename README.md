# To-Do List (CRUD) de Tareas y Categorías

# 🛑 Antes de Empezar
Hola, ¿Como estas?. Soy Daniel Pineda.

Agradezco mucho tu tiempo para que por favor veas el video y leas el markdown. Esto va permitir demostrarte mis conocimientos.

A continuación, voy a citar textualmente cada uno de los [enunciados del PDF](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/blob/main/docs/prueba_tecnica_desarrollador_movil_frontend.pdf) que tiene la prueba tecnica y seguido de ello voy a dar la respuesta.

# 🎥 Vídeo
> "Capturas de pantalla o grabaciones de video que muestren las nuevas funcionalidades en acción."

# ▶️ ¿Como Ejecutar Aplicación en Local Host?
> "incluyendo un archivo README que explique cómo ejecutar la aplicación"

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
Esto va a instalar Ionic, Capacitor, Angular, Tailwind y firebase SDK:

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

Instalar SDK de firebase:

```console
npm install firebase
```

![7_SDK_firebase](/docs/img/firebase_remote_config/7_SDK_firebase.png)

La app ya se encuentra registrada

![8_app_registrada.png](/docs/img/firebase_remote_config/8_app_registrada.png)

En `src\app\config\firebase` y `src\main.ts` cofigure firebase

Llamadas a la API de firebase:

![9_api_firebase.png](/docs/img/firebase_remote_config/9_api_firebase.png)

> [!IMPORTANT]
> En el "🎥 Vídeo" demuestro que la feature flag si funciona. Estas capturas de pantalla son solamente para mostrar la configuracion de Firebase.

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

# Persistencia de datos
> "utiliza almacenamiento local para guardar el estado de las tareas"

# Categorías Dinámicas

# Validaciones
INCOMPLETO - aqui explicar q validaciones hice

## Validaciones de formularios

## Mostrar filtros cuando SI hay tareas

@if (hasTasks()) {
  <app-tasks-search
    (categoriesIdsFilterChange)="onCategoriesIdsFilterChange($event)"
  ></app-tasks-search>

  <!-- aqui se pueden agregar mas componentes con filtros de busqueda -->
}

## "No hay tareas para las categorias X seleccionadas"
Cuando:
1. SI hay tareas tasks().length > 0

2. Se ha filtrado por categoria

Mostrar mensaje "No hay tareas para las categorias X seleccionadas"

"X" son las categorias seleccionadas

# Optimización de Rendimiento

## Infinite Scroll
[ion-infinite-scroll](https://ionicframework.com/docs/api/infinite-scroll) y [ion-infinite-scroll-content](https://ionicframework.com/docs/api/infinite-scroll-content)

* **En este proyecto**

* **En proyecto real de producción**

No signifca que la paginacion en este proyecto este mal

signifca que **INCOMPLETO**

## Signals

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

## ¿Porque NO Uso las Últimas Versiones de Angular, TypeScript y Node.js?
Al momento de escribir esto (Agosto 2026)

https://www.npmjs.com/package/@ionic/angular?activeTab=versions

https://ionicframework.com/docs/reference/support#ionic-angular

https://angular.dev/reference/versions

En produccion siempre es recomendable usar versiones estables porque usar las ultimas versiones puede generar bugs

## ¿Porque Uso Reactive Forms y NO Signal Forms?

## ¿Porque uso [Reactive Forms (`FormGroup`)](https://angular.dev/guide/forms/reactive-forms) y NO [Forms with signals](https://angular.dev/essentials/signal-forms)?

## ¿Porque Uso CSS y Tailwind y NO Sass ni Bootstrap?

## ¿Como Usar Juntos CSS, Tailwind e Ionic?
Tailwind **NO** puede acceder al shadow dom

Tailwind hace que no sea necesario importar esto en global.scss

@import "@ionic/angular/css/padding.css";
@import "@ionic/angular/css/float-elements.css";
@import "@ionic/angular/css/text-alignment.css";
@import "@ionic/angular/css/text-transformation.css";
@import "@ionic/angular/css/flex-utils.css";

[CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)

CREO QUE NO SE PUEDE ACCEDER AL SHADOW DOM USANDO CSS NESTING

## ¿Porque standalone components y no ngModules (`app.module.ts`)?

## ¿Porque Uso Estados Globales para las Tareas y Categorías?
Para evitar **prop drilling**

No siempre es necesario usar estados globales, **INCOMPLETO**

## ¿Porque Cuando Cree el Proyecto NO Instale Ionic de Forma Global?
La [documentación oficial](https://ionicframework.com/docs/intro/cli#install-the-ionic-cli) recomienda instalar ionic de forma global con la bandera `-g`

```console
npm install -g @ionic/cli
```

Sin embargo, cuando cree el proyecto hice esto:

```console
npx @ionic/cli@latest start to-do blank --type=angular --package-id=com.todo.com --no-git
```

* **`npx`**

* **`@ionic/cli@latest`**

* **`start to-do`** Crea un proyecto llamado "to-do"

* **`blank`** Crea un template en blanco sin estilos

* **`--type=angular`**

* **`--package-id=com.todo.com`**

* **`--no-git`**

```console
cd ruta/a/carpeta/raiz/del/proyecto
```

```console
npm i @ionic/cli --save-dev
```

```console
npx ionic --version
```

```console
npm i @capacitor/android
```

```console
npm i @capacitor/ios
```

```console
npm i @capacitor/preferences
```

**Razon:**
Instalar de forma local en `node_modules` permite tener varios proyectos ionic con diferentes versiones.

## `div` wrapper

## 🧪 ¿Porque Borre los Archivos `.spec.ts`?
Lo hice para simplificar, aunque es buena practica tener test de los procesos criticos de la app.
