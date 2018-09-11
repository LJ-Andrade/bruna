@extends('vadmin.partials.main')

@section('title', 'Vadmin | Opciones del sistema')

@section('styles')
@endsection

@section('content')
	<div class="dashboard">
		<div class="content-body">
			
			<h1>Opciones</h1>
            <hr class="softhr">
            <div class="row">
                <div class="container-fluid">
                    {!! Form::open(['route' => 'updateSettings', 'method' => 'POST', 'class' => 'settings-form']) !!}	
                        {{ csrf_field() }}
                        <label for="">E-mail primario</label>
                        <input class="form-control" type="text" name="email_1" value="{{ $settings->email_1 }}">
                        <input class="btnSm btnBlue" type="submit" value="Actualizar">
                    {!! Form::close() !!}
                </div>
            </div>
            <div class="settings-options table-responsive">
                <table id="TableList" class="table">
                    <tbody>
                        <tr>
                            <td class="left">Notificaciones vía E-mail</tdc>
                            <td class="right">
                                <label class="switch">
                                    <input class="UpdateStatus switch-checkbox" type="checkbox" 
                                    data-model="Customer" data-id=""
                                    @if($settings->email_notifications == 1)
                                    checked
                                    @endif
                                    >
                                    <span class="slider round"></span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
	<div id="Error"></div>
@endsection

@section('scripts')
	
@endsection

@section('custom_js')

@endsection
