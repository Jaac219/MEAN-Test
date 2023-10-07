## Cuestionario

1. ¿Cuál es la diferencia entre Git y GitHub, y cómo se complementan en el desarrollo de software?
    
    **RESPUESTA:**

    Git es un sistema de gestión de versiones que permite hacer seguimiento y tener control de los cambios
    realizados sobre uno o varios archivos, adicional permite crear variaciones del proyecto inicial
    y hacer también seguimiento y control a estas variaciones gracias a las ramas. Github por otra parte
    es una plataforma en la nube que permite almacenar todo el control y seguimiento de los proyectos git (repositorio)
    además también permite colaborar y compartir los proyectos con otras personas.
    
    ***
3. Explica el concepto de "middleware" en Express.js y proporciona ejemplos de su uso.
    
    **RESPUESTA:**

    Un middleware es una función que se ejecuta antes de que se llegue a la función principal.
    Intercepta la solicitud del cliente y realiza acciones y/o validaciones para pasar al siguiente
    middleware o a la función principal.
    Por ejemplo se puede implementar para validar si un usuario tiene autorización para realizar
    acciones sobre un endPoint especifico

    ```
        const express = require('express');
        const app = express();
        const jwt = require('jsonwebtoken')

        app.use((req, res, next) => {
            const token = req.headers['x-token']
            const session = jwt.verify(token, proccess.env.SECRET)
    
            if (session?.userId) {
                next();
            } else {
                res.status(401).send('Acceso no autorizado');
            }
        });

        app.get('/', (req, res) => {
          res.send('¡Hola, mundo!');
        });

        app.listen(3000, () => {
          console.log('🚀 Escuchando ando en el pueto: 3000');
        });
    ```
    ***
5. ¿Qué es TypeScript y cuáles son las ventajas de su uso?
    
    **RESPUESTA:**

    TypeScript es javascript con super poderes, le permite tener estructura sólida y un tipado fuerte,
    gracias a lo cual se pueden prevenir errores en producción que muchas veces no se detectan en desarrollo
    además permite tener un código más ordenado lo que permite que pueda ser más legible y comprensible y esto
    conlleba a un código escalable además permite la autodocumentación de código y le implementación de nuevas
    caracteristicas de ecmascript

    ***
7. Explica qué es CORS (Cross-Origin Resource Sharing) y cómo se maneja en una aplicación web.
    
    **RESPUESTA:**

    Es una forma en que el navegador y el servidor pueden definir desde que dominio aceptan solicitudes
    y para que acciones o metodos(GET, POST, PUT, DELETE) específicos. en pocas palabras puedo crear una
    lista blanca o lista negra indicando desde que dominios acepto o rechazo solicitudes.
    En express se pueden manejar fácilmente con la librería cors y simplemente pasándola como un middleware.
    ```
        const cors = require('cors')
        app.use(cors())
    ```
    ***
9. ¿Qué es un API RESTful y cuál es su papel en el desarrollo web?
    
    **RESPUESTA:**

    Es una arquitectura que define un estándar de como se deben comunicar un clientes con servidores
    o servidores entre si a través del protocolo http.
    Dentro de las reglas más comunes que define el estándar esta la implementación de los métodos
    GET, POST, PUT, PATCH, DELETE, etc... y con función especifíca debe cumplir cada uno.
    también indica de que manera deben estar estructurados los endpoints por ejemplo:
     - cada endpoint debe iniciar con la nomenclatura /api/v1 y la acción a realizar
         - localhost:3000/api/v1/user -> en este caso debería ser solicitud por método get que trae todos los usuarios 

    ***
11. ¿Qué es un GUARD en Angular y qué función cumple?
    
    **RESPUESTA:**

    Es una funcionalidad de angular que permite proteger rutar y aplicar validaciones
    para especificar en que casos y quienes pueden acceder a estas.

    ***
