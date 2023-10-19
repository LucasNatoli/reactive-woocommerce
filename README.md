# Reactive Woo

App de integracion de tiendas WooCommerce

## Dominio

### Tienda
Representa cada instancia de WooCommerse a la que se conecta la app o es 
escuchada por la restapi.

#### Attributos
+ id
+ nombre
+ url (el endpoint de la api woocommerce se genera según la configuración de 
la app)
+ clave basiauth: Al dar de alta la tienda el usuario debe proporcionar las
claves cliente y secret para que se calcule la clave basicauth que es la 
que se almacena la restapi.
+ status
+ statistics: informacion estadistica de la tienda

#### Notificacion del sistema.

Mensaje que genera el sistema cuando ocurren eventos en cualquiera de las 
tiendas de la app. Se envian a los usuarios que correspondan a la 
configuración de la app.

## Notificaciones del Sistema (SystemNotifications)

Una vez logueado el usuario. Al realizarse el primer render de la Barra de App 
se cargan las notificaciones pendientes del sevidor (restapi) y se inicia la 
escucha del webhook para recibir nuevas notificaciones.

Los webhooks de cada tienda de la app generan por defecto una notificación del 
sistema.

Las notificaciones pueden accederse mediante el icono de campana que muestra un
popup con las últimas notificaciones no leidas. Tambien mediante una pagina de
notificaciones donde se muestren todas las notificaciones del usuario, algunos
filtros y el control de navegacion de resultados



## Webhooks (segun woo commerce)

- Cupón creado
- Cupón actualizado
- Cupón borrado
- Cupón restaurado

- Cliente creado
- Cliente actualizado
- Cliente borrado

- Pedido creado
- Pedido actualizado
- Pedido borrado
- Pedido restaurado

- Producto creado
- Producto actualizado
- Producto borrado
- Producto restaurado

- Acción
