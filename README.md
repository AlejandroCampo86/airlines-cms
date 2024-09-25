### CMS

El CMS debe permitir la gestión de productos (SKU, precios, inventario), pero también la gestión de vuelos y tripulación. Debe incluir módulos para generar reportes detallados de ventas y alertas automáticas cuando el stock sea bajo, monitoreo de inventarios, asignación de productos a vuelos, y actualización de datos en tiempo real.

El equipo a cargo del CMS colabora con los proveedores de productos para optimizar el proceso de reabastecimiento y la sincronización del inventario entre vuelos y almacenes.

### competencia

PROS
DATALEX

### Dashboard.js

El Dashboard mostrará la vista general de las ventas, inventarios, y alertas importantes.

###### ProductManagement.js

Este componente permite gestionar los productos: listar, agregar, editar y eliminar productos.

## Descripción del Flujo:

Formulario para Nuevos Productos: El usuario puede ingresar los detalles del producto en un formulario que incluye campos como SKU, nombre, descripción, precio, cantidad en stock, categoría, peso y dimensiones.

## SKU proporcionado manualmente por el usuario

Este enfoque puede ser útil si el SKU sigue un patrón o convención interna que tiene significado dentro de la operación. Algunos aspectos a considerar:

Control y personalización: El equipo de operaciones puede querer usar un SKU que tenga sentido dentro de su sistema de inventario o logística (por ejemplo, usando códigos específicos para categorías o proveedores).

Integración con sistemas existentes: Si ya tienen un sistema de inventario que utiliza ciertos SKUs manuales, lo más lógico sería seguir permitiendo que el usuario los ingrese de forma personalizada.

Llamadas al Backend: Utilizamos los servicios de Axios para enviar los datos del nuevo producto al backend mediante una solicitud POST, y para eliminar productos mediante una solicitud DELETE.
Actualización Automática: Después de agregar o eliminar un producto, la lista de productos se actualiza automáticamente, mostrando los cambios sin necesidad de recargar la página.
Con este enfoque, el CMS ahora permite agregar nuevos productos al catálogo, alineándose con el controlador y las rutas del backend que ya tienes implementadas.

### FlightManagement.js

para gestionar los vuelos desde la interfaz del CMS. Este componente permitirá administrar los vuelos y asignar inventarios a cada vuelo.

### flightService.js

Este servicio utiliza Axios para interactuar con una API de backend que gestiona los datos de vuelos. Proporciona funciones para obtener, agregar, actualizar y eliminar vuelos.

### CrewManagement.js

Este componente permite manejar los miembros de la tripulación, mostrándolos en una tabla y permitiendo realizar operaciones como agregar, eliminar o actualizar información de cada miembro.

### crewService.js

Este componente permite al administrador gestionar a los miembros de la tripulación asignados a los vuelos de la aerolínea, agregando nuevas tripulaciones, eliminándolas o actualizando su información.

### reportService.js

Este servicio se encarga de interactuar con la API del backend para recuperar reportes detallados de las ventas y el desempeño en los vuelos.
