# Prueba para Travel & Night - José Gabriel Vázquez Gil

> [!NOTE]
> El objetivo de la prueba es crear un portal web usando VueJS para mostrar y añadir usuarios.
> La proyecto actualmente dispone de dos paginas:
> - Componente que devuelve lista de usuarios y se muestran en una tabla -> http://localhost:8080
>
> ![image](https://github.com/JGVG/prueba_tnight_vue/assets/37996973/c438546b-b8cf-4f1d-b60f-3e7aae897084)

> - Formulario para añadir un usuario -> http://localhost:8080/agregar-usuario
>
> ![image](https://github.com/JGVG/prueba_tnight_vue/assets/37996973/ab239ac9-3741-4aa4-b8a2-39249926e85b)



# Ejecución

> [!TIP]
> ES NECESARIO CLONAR Y ARRANCARDE LA API  DE USUARIOS (https://github.com/JGVG/prueba_tnight_php), DE LO CONTRARIO LA PAGINA NO MOSTRARÁ DATOS.
>
> Si ya se ha clonado el proyecto solo habia que abrir una consola en la el directorio del proyecto de la API y escribir el siguiente comando de Synfony CLI:
> 
> ```js
> symfony server:start
> ```

Una vez clonado el proyecto y despues de haber abierto el proyecto en Visual Studio Code solo habrá que ir a la consola que la IDE proporciona para ejecutar el arranque de proyecto usando el siguiente comando de Vue CLI:

```js
npm run serve
```

> [!WARNING]
> Tenga en cuenta que el proyecto usa el puerto 8080 de tu local, asegúrese que no tenga nada ejecutandose en dicho puerto.
