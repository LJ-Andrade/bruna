@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            {{ APP_BUSSINESS_NAME }} Indumentaria
        @endcomponent
    @endslot


#<center>Hola {{ $data->name }}, <br></center>
##<center>¿Necesitás ayuda para finalizar tu compra? </center>
##<center>
Si tenés dudas con el proceso de compra podés escribirnos al (11)6761-8867 así podemos asistirte (Estamos online de lunes a viernes 10-19hs y sábados de 14 a 16hs). <br><br>
Te contamos que podés pagar tu pedido por transferencia o con tarjetas a través de <b>Mercadopago</b> y recibirlo por el medio de transporte que elijas en sucursal o a domicilio. <br><br>

Queremos recordarte que los carritos con más de 48hs abiertos serán eliminados automáticamente por el sistema. <br>
<br>
¡Esperamos tu compra! <br>
Saludos<br>
<b>Noelia</b><br>
<b>Bruna Indumentaria</b>
</center>


    @slot('subcopy')
        @component('mail::subcopy')
            <!-- subcopy here -->
        @endcomponent
    @endslot

    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
        Mensaje enviado desde <b>Vadmin</b> | Desarrollado por <a href="https://vimana.studio/es">Vimana Studio</a>
        @endcomponent
    @endslot
@endcomponent