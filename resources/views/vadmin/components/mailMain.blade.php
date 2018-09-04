@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            Sistema VADMIN
        @endcomponent
    @endslot

    Nombre: {{ $content['fullname']}}<br>
    E-Mail: {{ $content['email']}}<br>
    Teléfono: {{ $content['contact']}}<br>
    Mensaje: {{ $content['comment']}}<br>

    @slot('subcopy')
        @component('mail::subcopy')
            <!-- subcopy here -->
        @endcomponent
    @endslot


    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            Mensaje enviado desde el sistema Vadmin ?>
        @endcomponent
    @endslot
@endcomponent
