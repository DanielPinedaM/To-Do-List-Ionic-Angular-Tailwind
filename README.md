# To-Do List (CRUD) de Tareas y Categorías

# 🛑 Antes de Empezar
Hola, ¿Como estas?. Soy Daniel Pineda.

Agradezco mucho tu tiempo para que por favor veas el video y leas el markdown. Esto va permitir demostrarte mis conocimientos.

A continuación, voy a citar textualmente cada uno de los enunciados del PDF que tiene la prueba tecnica y seguido de ello voy a dar la respuesta.

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
Esto va a instalar Ionic, Capacitor, Angular y Tailwind

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

[apk/app-debug.apk]()

![notificacion](/docs/img/apk/descargar_apk.png)

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

# Versionamiento de la Aplicación con Git y GitHub
> "Versionar la aplicación demo en un repositorio de Git:
>
> * Crea un repositorio público en GitHub o GitLab.
> * Sube la aplicación base al repositorio y realiza un commit inicial"

Para hacer commits use la [extension conventional commits de VS Code](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

Puedes ver los commits [aqui en GitHub](https://github.com/DanielPinedaM/To-Do-List-Ionic-Angular-Tailwind/commits/main/) o ejecutando

```console
git log --oneline
```

En la carpeta raiz del proyecto

# Persistencia de datos
> "utiliza almacenamiento local para guardar el estado de las tareas"

# Categorías Dinámicas

# Validaciones de formularios

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

# Validaciones
INCOMPLETO - aqui explicar q validaciones hice

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

## ¿Porque uso [`FormGroup` (Reactive Forms)](https://angular.dev/guide/forms/reactive-forms) y NO [Forms with signals](https://angular.dev/essentials/signal-forms)?

## ¿Porque Uso Estados Globales?
prop drilling

No siempre es necesario usar estados globales, **INCOMPLETO**

## `div` wrapper

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

## 🧪 ¿Porque Borre los Archivos `.spec.ts`?
Lo hice para simplificar, aunque es buena practica tener test de los procesos criticos de la app.
