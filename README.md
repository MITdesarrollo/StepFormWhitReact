# Desafío Challenge en React

Este proyecto es una entrega para un desafío que implementa un sistema basado en el diseño de Atomic Design. A continuación, se presentan los detalles sobre la configuración y ejecución del proyecto.

## Características

- **Atomic Design**: El proyecto está estructurado utilizando un sistema de diseño basado en principios de Atomic Design.
- **Envío de correos**: Para ejecutar el script `sendEmail.js`, es necesario configurar la API Key correspondiente a **RESEND**.
- **Estilos**: Se utilizan **CSS Modules** para la gestión de estilos.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [PNPM](https://pnpm.io/)

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone git@github.com:MITdesarrollo/PruebaTecnica-CustomerScoops.git
   cd nombre-del-repositorio
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

## Ejecución del Proyecto

Para iniciar el proyecto, ejecuta el siguiente comando:
```bash
pnpm run dev
```
Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Contribuciones

Si deseas contribuir al proyecto, siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
