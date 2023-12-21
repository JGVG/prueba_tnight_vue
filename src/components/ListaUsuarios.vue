<template>
  <head>
    <meta charset="UTF-8">
    <title>Lista de empleados</title>
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

        <div class="mt-4">
          <div class="card">
            <div class="card-header">
                <h3>Listado de usuarios</h3>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>EDAD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="usuario in usuarios" :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.apellido }}</td>
                    <td>{{ calcularEdad(usuario.fechaNacimiento) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>

    <router-link class="btn btn-primary mb-4" to="/agregar-usuario">Añadir</router-link>

</body>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    calcularEdad(fechaNacimiento) {
      const fechaNacimientoDate = new Date(fechaNacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
      const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
      }

      return edad;
    },

    async fetchUserList() {
      try {
        const response = await this.$axios.get('http://localhost:8000/api/listaUsuarios');
        this.usuarios = response.data;
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  float: right;
  margin-right: 35px;
}
h3 {
  float: left;
}
</style>
