<template>
  <head>
    <meta charset="UTF-8">
    <title>Añadir empleado</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" th:href="@{/demo/v1/employees}">
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/15-512.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                Prueba para Travel & Night (VueJS - JGVG)
            </a>
        </div>
    </nav>

    <div class="m-4 row justify-content-center align-items-center">
        <div class="col-sm-6 mt-4">
            <form @submit.prevent="submitForm">
                <div class="card">
                    <div class="card-header">
                        <h3>Añadir usuario</h3>
                    </div>
                    <div class="card-body">
                        <div class="d-flex">
                          <div class="w-100 p-1">
                            <label class="m-2" for="nombre">Nombre:</label>
                            <input v-model="nombre" type="text" id="nombre" class="form-control form-control-sm" required>

                            <label class="m-2" for="apellido">Apellido:</label>
                            <input v-model="apellido" type="text" id="apellido" class="form-control form-control-sm" required>

                            <label class="m-2" for="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input v-model="fechaNacimiento" type="date" id="fechaNacimiento"  class="form-control form-control-sm" required>
                          </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <input type="submit" value="Guardar" class="btn btn-success"/>
                    </div>
                </div>
            </form>
        </div>
    </div>

</body>
</template>

<script>
  export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
    };
  },
  methods: {
    submitForm() {
      // Formatear la fecha antes de enviarla a la API
      const fechaFormateada = this.formatoFecha(this.fechaNacimiento);

      // Lógica para enviar la solicitud HTTP con los datos del formulario
      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: fechaFormateada,
      };

      // Enviar la solicitud HTTP a la API
      this.$axios.post('http://localhost:8000/api/addUsuario', usuario)
        .then(response => {
          console.log('Usuario creado con éxito:', response.data);

          // Redirigir a la lista de usuarios
          this.$router.push({ name: 'ListaUsuarios' });
        })
        .catch(error => {
          // Manejar errores en la solicitud HTTP
          console.error('Error al crear el usuario:', error);
        });
    },

    formatoFecha(fecha) {
      // Formatear la fecha en el formato deseado (año-mes-día)
      const fechaObj = new Date(fecha);
      const año = fechaObj.getFullYear();
      const mes = ('0' + (fechaObj.getMonth() + 1)).slice(-2); // Agregar 0 al mes si es necesario
      const dia = ('0' + fechaObj.getDate()).slice(-2); // Agregar 0 al día si es necesario

      return `${año}-${mes}-${dia}`;
    },
  },
};
</script>

<style scoped>
.m-2, h3{
  float: left;
}
.btn{
  float: right;
}
</style>
