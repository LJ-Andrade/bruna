Recordar descomentar los $request->session()->invalidate();
en los LoginController tanto de admin como customers.

SISTEMA GEO
Tamaño de imágenes
750x500



Configurar la actualización de estado de portfolio. updateStatus es ahora una función generica.

BRUNA
Implementar
//---------------------------------------------------------

Mensajes personalizados en login de tienda. 
Ej: Cuando se registra un mayorista le avisa que queda en suspenso


Errores - Fallas - Bugs
//---------------------------------------------------------

Dar mensaje cuando se agrega item a carrom de compra






RESUELTOS
//---------------------------------------------------------

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
