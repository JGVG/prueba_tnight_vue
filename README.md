# Prueba para Travel & Night - José Gabriel Vázquez Gil

> [!NOTE]
> El objetivo de la prueba es crear un portal web usando VueJS para mostrar y añadir usuarios.
> El proyecto actualmente dispone de dos paginas:
> - Componente que devuelve lista de usuarios y se muestran en una tabla -> http://localhost:8080
> - Formulario para añadir un usuario -> http://localhost:8080/agregar-usuario


# Ejecución

> [!TIP]
> ES NECESARIO CLONAR Y ARRANCAR LA API DE USUARIOS (https://github.com/JGVG/prueba_tnight_php), DE LO CONTRARIO LA PAGINA NO MOSTRARÁ DATOS.
>
> Si ya se ha clonado el proyecto solo habrá que abrir una consola en el directorio del proyecto de la API y escribir el siguiente comando de Synfony CLI:
> 
> ```js
> symfony server:start
> ```

Una vez clonado el proyecto y despues de haber abierto el proyecto en Visual Studio Code solo habrá que ir a la consola que la IDE proporciona para ejecutar el comando que instala las dependencias necesarias para el proyecto:

```js
npm install
```

Finalmente ejecutamos el arranque de proyecto usando el siguiente comando de Vue CLI:

```js
npm run serve
```


> [!WARNING]
> Tenga en cuenta que el proyecto usa el puerto 8080 y la API el puerto 8000 de tu local, asegúrese que no tenga nada ejecutandose en dichos puertos.


# Listado de usuarios:

![image](https://github.com/JGVG/prueba_tnight_vue/assets/37996973/8715e3cd-7e41-4822-9257-fbf53f58443a)

# Agregar nuevo usuario:

> ![image](https://github.com/JGVG/prueba_tnight_vue/assets/37996973/f6439d8d-a42c-4d68-90ac-fdd2fd7aa13f)

