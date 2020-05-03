Prueba Daniel Castro

En el archivo config se encuentran las variables de configuracion del proyecto.

Para la busqueda de vuelos, se deben rellenar todos los campos del formulario, y de ahi sera redirigido a la pagina "search",
en caso de no encontrar resultados la tabla se mostrara vacia una vez terminada la request.

Si en el formulario no logras dar con valores para conseguir resultados, dejo esta que si trae resultados!

search/US/USD/en-US/SFO-sky/JFK-sky/2020-06-21/2020-06-25

La aplicacion cuenta con un Context donde esta la data que sera compartida entre distintos componentes, como por ejemplo: paises y monedas.
Aunque en este ejmplo no hay mas componentes que usen esta data, lo use para demostrar el uso de context.

La razon por la que en el context use Class y no hook es porque no me gusta la sintaxis de hooks para manejar estados complejos.

En caso de que falle la obtencion de data necesario para el funcionamiento de la app, dispara un modal de que hubo un error y la da al usuario la opcion de recargar la pagina.