
# BRUNA
Implementar
//---------------------------------------------------------


## Errores - Fallas - Bugs
//---------------------------------------------------------

- Agregar exportaciones necesarias

## Preguntas Bruna
//--------------------------------------------------------
- Cada cuando se recupera el stock que está en carros de compra activos ?
- Artículos con 0 stock o menos que el mínimo se pausan? Salen en los listado ?


RESUELTOS
//---------------------------------------------------------

(RESUELTO)
Mensajes personalizados en login de tienda. 
Ej: Cuando se registra un mayorista le avisa que queda en suspenso

(RESUELTO)
Cuando se borran carros en masa desde Vadmin devolver stock

(RESUELTO)
Algunas páginas de error muestran el menu de Santa Osadía (roto)

(RESUELTO)
Dar mensaje cuando se agrega item a carro de compra

(RESUELTO)
ONLINE no filtra por categorías

(RESUELTO)
Agregar producto vía ajax - No funciona - Ok

(RESUELTO)
Cuando se quiere comprar si estar logueado tira 404

(RESUELTO)
PDF en store que salga depende si es mayorista o minorista

(RESUELTO)
Inventar algo para que sea más genérico cambiar valores desde inputs directamente

(RESUELTO)
Los links arriba de redes tienen url de santa osadia

(RESUELTO)
Tienda > register : 404

(RESUELTO)
En AppServiceProvider se está mandando a todo el sitema, incluido a la tienda un monton de cosas
que no deberian estar ahi

(RESUELTO)
En Vadmin precios mayoristas y min dependiendo customer

(RESUELTO)
En store checkout no se pueden borrar items


Dev Permisos 
//---------------------------------------------
1 - 
sudo chown -R javzero.www-data CARPETA
2 - 
sudo chown -R $javzero:www-data storage;
sudo chown -R $javzero:www-data bootstrap/cache;
sudo chmod -R 775 storage;
sudo chmod -R 775 bootstrap/cache;
