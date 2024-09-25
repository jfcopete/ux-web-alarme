# UxWebAlarme

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.5.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Andamiaje de código

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Instrucciones para ejecutar el proyecto descargado de GitHub

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/UxWebAlarme.git
   cd UxWebAlarme
   ```

2. **Instalar dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   ng serve
   ```
   Abre tu navegador y navega a `http://localhost:4200/`.

## Rutas de navegación

La aplicación tiene las siguientes rutas disponibles:

- `/`:Landing Page / Página principal.
- `/create-alarm`: Página de  crear alarmas.
- `/edit-profile`: Página de  editar perfil.
- `/forgot-password`: Página de  recuperar contraseña.
- `/view-detailed-medication`: Página de  ver detalles de la medicación.
- `/view-medication`: Página de  ver medicación.

## Componentes adicionales

Además de las rutas mencionadas, la aplicación cuenta con componentes adicionales que no están incluidos en las rutas de navegación. Estos componentes son:

- **Nav List**: Un componente que muestra una lista de navegación personalizada.
- **Footer**: Un componente que muestra el pie de página de la aplicación.

Estos componentes se utilizan en diferentes partes de la aplicación para mejorar la navegación y la experiencia del usuario, pero no tienen rutas específicas asociadas a ellos.

Cada ruta corresponde a un componente específico que maneja la lógica y la vista de esa sección de la aplicación.

¡Disfruta desarrollando con UxWebAlarme!