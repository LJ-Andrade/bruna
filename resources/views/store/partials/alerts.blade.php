{{-- Errors --}}
@if(count($errors) > 0)
<div class="alert alert-danger alert-dismissible fade show text-center margin-bottom-1x">
    <span class="alert-close" data-dismiss="alert"></span>
    <ul>
    @foreach($errors->all() as $error)
        <li>{{ $error }}</li>
    @endforeach		
    </ul>
</div>
@endif

{{-- Messages --}}
@if(Session::has('message'))
<div class="alert alert-success alert-dismissible fade show text-center margin-bottom-1x">
    <span class="alert-close" data-dismiss="alert"></span>
    <strong>{{ Session::get('message') }}</strong>
</div>
@endif