# 🌟 Desafío Challenge en React 🌟

Este proyecto es una entrega para un desafío que implementa un sistema basado en el diseño de **Atomic Design**. A continuación, se presentan los detalles sobre la configuración y ejecución del proyecto.

## 🚀 Características

- **Atomic Design**: 
  El proyecto está estructurado utilizando un sistema de diseño basado en principios de Atomic Design, lo que permite crear interfaces más escalables y mantenibles. Este enfoque facilita la reutilización de componentes, optimizando así el desarrollo y mejorando la coherencia visual.

- **Envío de correos**: 
  Para ejecutar el script `sendEmail.js`, sigue estos pasos:
  1. Abre el archivo `sendEmail.js` y configura la API Key correspondiente a **RESEND**.
  2. Luego, ejecuta el siguiente comando en la terminal:
     ```bash
     node sendEmail.js
     ```
     Esto enviará los correos según la lógica definida en el script.

- **Estilos**: 
  Se utilizan **CSS Modules** para la gestión de estilos, permitiendo el encapsulamiento de los estilos a nivel de componente. Esto reduce la probabilidad de conflictos en los estilos y mejora la modularidad del código.

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [PNPM](https://pnpm.io/)

## 🔧 Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone git@github.com:MITdesarrollo/PruebaTecnica-CustomerScoops.git
   cd PruebaTecnica-CustomerScoops
   ```

2. Instala las dependencias del proyecto utilizando PNPM:
   ```bash
   pnpm install
   ```

3. Configura tu API Key de RESEND:
   - Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key de la siguiente manera:
     ```makefile
     RESEND_API_KEY=tu_api_key_aqui
     ```

## 🏁 Ejecución del Proyecto

Para iniciar el proyecto, ejecuta el siguiente comando:
```bash
pnpm run dev
```
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## 🤝 Contribuciones

Si deseas contribuir al proyecto, siéntete libre de abrir un issue o enviar un pull request.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
