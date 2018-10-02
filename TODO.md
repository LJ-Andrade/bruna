
Nuevos cambios subidos:

Filtros por populares y descuentos.
Arreglada paginacion
Arreglado busqueda por categoría desde input text
En tienda inicio puse un TOOL TIP con stock máximo, probar si gusta y sino poner selector.


# BRUNA

Por otra parte, respecto a la decisión del menú lateral, cuando esté eso eliminaríamos el mensaje que aparece cada vez que agrego un producto al carrito porque ya me aparece de costado (adjunto foto)

Ah, y algo que me quedó de un mail anterior, que tenía una clienta mayorista de la que no puedo ver sus datos de localidad (el tema puntual con ella ya lo resolví porque me contacto por whatsapp, pero no se si es un error que no me salga o que pasó), es nair quevedo



## Implementar


- En tienda inicio puse un TOOL TIP con stock máximo, probar si gusta y sino poner selector.

- Cuando se elije el primer producto en la tienda no está el disparador del dropdown del carro de compras.
- En Vadmin en la vista de un pedido en particular no cuenta bien la cantidad total de prendas.


Estadisticas
- Poder dar orden a articulos de listado

- Mas vendidos
- Mas favoritos

- Vadmin agregar seccion vendedores
- Usuarios no miembros solo ven: Pedidos y Clientes ()
- Mejorar carga de items desde vadmin
- Al cargar productos desde vadmin .. primero cargar solo items si cantidad una vez creada la lista, agregar todas las cantidades

- Vender producto similar
- Agregar vista de listado

## Hecho
- WhatsApp flotante
- Agregar paginacion con cookies
- Despues de paginar volver a la misma pagina
- Dividir checkout en 2
- Modificar cantidad de producto desde checkout
- Boton mostrar todos cambiar por: Volver al listado
- Agregar filtros por precio en web
- Paginacion que se haga click sobre el LI y no sobre el A
- Compra desde listado principal ?
- Agregar directamente desde listado
- Ocultar talle / color en listado
- Ocultar talle en listado en filtros de busqueda
- Artículos con 0 stock o menos que el mínimo se pausan? Salen en los listado ? No salen

# Errores - Fallas - Bugs - Glitches
- Busqueda por texto no pagina con los resultados encontrados
- No aparece foto generica en userbar

    -   

# Preguntas Bruna




# RESUELTOS
>(RESUELTO)
Cada cuando se recupera el stock que está en carros de compra activos ? 

>(RESUELTO)
Mensajes personalizados en login de tienda. 
Ej: Cuando se registra un mayorista le avisa que queda en suspenso

>(RESUELTO)
Cuando se borran carros en masa desde Vadmin devolver stock

>(RESUELTO)
Algunas páginas de error muestran el menu de Santa Osadía (roto)

>(RESUELTO)
Dar mensaje cuando se agrega item a carro de compra

>(RESUELTO)
ONLINE no filtra por categorías

>(RESUELTO)
Agregar producto vía ajax - No funciona - Ok

>(RESUELTO)
Cuando se quiere comprar si estar logueado tira 404

>(RESUELTO)
PDF en store que salga depende si es mayorista o minorista

>(RESUELTO)
Inventar algo para que sea más genérico cambiar valores desde inputs directamente

>(RESUELTO)
Los links arriba de redes tienen url de santa osadia

>(RESUELTO)
Tienda > register : 404

>(RESUELTO)
En AppServiceProvider se está mandando a todo el sitema, incluido a la tienda un monton de cosas
que no deberian estar ahi

>(RESUELTO)
En Vadmin precios mayoristas y min dependiendo customer

>(RESUELTO)
En store checkout no se pueden borrar items


# Dev Permisos 

### Local
- sudo chown -R javzero.www-data CARPETA
 
### Requerido por Laravel
- sudo chown -R $javzero:www-data storage;
- sudo chown -R $javzero:www-data bootstrap/cache;
- sudo chmod -R 775 storage;
- sudo chmod -R 775 bootstrap/cache;
