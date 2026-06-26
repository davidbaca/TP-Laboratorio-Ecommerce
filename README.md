Alumno: David Baca

Este proyecto consiste en una tienda web de comercio electrónico desarrollada para mostrar cómo crear una experiencia básica de compra en una aplicación web. Permite ver productos, agregarlos al carrito, modificar la cantidad de cada artículo y gestionar la compra de forma sencilla. La interfaz está pensada para ser clara y fácil de usar, ofreciendo una navegación simple para que el usuario pueda interactuar con los productos sin complicaciones.

En cuanto a las tecnologías utilizadas, el proyecto se desarrolló con HTML, CSS y JavaScript, utilizando una estructura organizada en componentes para separar la lógica de la interfaz y la gestión de la tienda. También se incorporaron funciones para manejar el carrito, mostrar mensajes de confirmación y trabajar con almacenamiento local para conservar la información del usuario durante la sesión. Este trabajo permite comprender de forma práctica cómo construir una aplicación web interactiva con funciones comunes de una tienda online.


1. Estructura de la página
La interfaz principal se construye en el archivo index.html. En este archivo se definen los elementos visuales del sitio, como la barra de navegación, el buscador, la sección donde se muestran los productos, el modal de detalle y el panel lateral del carrito.

2. Diseño y estilización
El archivo styles.css se encarga de dar estilo a la aplicación. Aquí se configuran los colores, tipografías, botones, tarjetas de productos y la apariencia general de la tienda para que sea más atractiva y fácil de usar.

3. Carga de productos
La lógica principal del proyecto se encuentra en src/index.js. Ahí se inicia la aplicación y se obtiene la lista de productos desde una API externa mediante fetch. Esto permite que los productos se carguen dinámicamente sin necesidad de escribirlos manualmente en el código.

4. Renderizado de tarjetas
El archivo cards.js se encarga de mostrar los productos en forma de tarjetas. Cada tarjeta contiene la imagen, el nombre del producto y un botón para ver más información. Esto hace que la interfaz sea dinámica y se actualice según los productos disponibles.

5. Búsqueda y filtros
En index.js también se implementan las funciones de búsqueda y filtrado por categoría. El usuario puede escribir texto en el buscador para encontrar productos específicos y, además, puede seleccionar categorías como electronics, jewelery o clothing para ver únicamente los productos correspondientes.

6. Modal de detalle
El archivo modal.js permite abrir un modal cuando el usuario selecciona un producto. En este modal se muestra información adicional, como la descripción, el precio y la opción de elegir la cantidad que desea comprar.

7. Carrito de compras
La gestión del carrito se realiza mediante el archivo storage/storage.js. Este archivo utiliza localStorage para guardar los productos agregados por el usuario. Gracias a esto, el carrito permanece disponible aunque se recargue la página.

8. Visualización del carrito
El archivo cartList.js se encarga de mostrar el contenido del carrito en un panel lateral. Ahí se pueden ver los productos agregados, su cantidad y la posibilidad de eliminarlos.

9. Notificaciones
Para mejorar la experiencia del usuario, se implementaron mensajes emergentes mediante el archivo src/components/toast.js. Estos mensajes informan cuando un producto fue agregado al carrito o cuando se realizó una compra.

10. Funcionalidad final
Finalmente, en index.js se agregan los eventos para vaciar el carrito y finalizar la compra. Al hacerlo, el carrito se limpia y el usuario recibe una confirmación visual de la acción realizada.
