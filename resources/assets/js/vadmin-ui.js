$('.btnClose').click(function(){
    // $(this).parent().addClass('Hidden');
    $(this).parent().hide();
});

var searchFilters = $('#SearchFilters');
searchFilters.hide();

$('#SearchFiltersBtn').on('click', function(){
    searchFilters.toggle(100);
});

$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 80) {
        $('.fixed-if-scroll').addClass('true');
        $('.fixed-if-scroll').removeClass('false');
    }
    else {
        $('.fixed-if-scroll').removeClass('true');
        $('.fixed-if-scroll').addClass('false');
    }
});
