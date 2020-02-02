var map, marker, form;
function initMap() {
    map = new google.maps.Map(document.getElementById('nz-map'), {
        center: {lat: -41.237586562525074, lng: 172.58124892092542},
        zoom: 6,
        disableDefaultUI : true
    });

    function updateCoord(latLng) {
        form.calx('setValue', 'C8', latLng.lng());
        form.calx('setValue', 'C9', latLng.lat());
    }

    map.addListener('click', function(e) {
        updateCoord(e.latLng);

        if (!marker) {
            marker = new google.maps.Marker({
                map: map,
                position: e.latLng,
                draggable: true
            });

            marker.addListener('dragend', function(e){
                updateCoord(e.latLng);
            });
        } else {
            marker.setPosition(e.latLng);
        }
    });
}

jQuery(document).ready(function ($) {
    form = $('#esc_section_calculator');

    // Closes the sidebar menu
    $("#side-menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $("#side-menu-toggle > .fa-bars, #side-menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    $('[data-toggle="popover"]').popover();

    $("html").on("mouseup", function (e) {
        var l = $(e.target);
        if (typeof l[0].className == "string" && l[0].className.indexOf("popover") == -1) {
            $(".popover").each(function () {
                $(this).popover("hide");
            });
        }
    });

    $('#esc-section-home').show();

    $('#esc_app').on('click', '.btn-section', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        $('#esc_app')
            .find('section:visible')
            .removeClass('open')
            .addClass('open')
            .fadeOut(300, function(){
                $('section' + target).removeClass('close').addClass('open').fadeIn();
            });
    });

    $('#esc_section_calculator').on('click', '.btn-page', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        $('#esc_section_calculator').find('.esc-page:visible').fadeOut(300, function(){
            $(target).fadeIn();
        });
    })

    // Results Button
    $('#result-toggle').click(function (e) {
        let page = 4

        $('.esc-page:visible').fadeOut(200, function () {
            $('.esc-page' + page + '').fadeIn();
        });
    })

    // Page Controller
    $('#sidebar-wrapper').on('click', '.sidebar-nav-item a', function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass('active');
        $("#side-menu-toggle > .fa-bars, #side-menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    // Metric Options Handler
    $('.metric-options').on('click', 'i', function (e) {
        e.preventDefault();

        let element = $(e.currentTarget);
        let value   = element.attr('data-value');
        let target  = element.attr('data-target');
        let relate  = form.calx('getCell', element.attr('data-relate'));

        if (element.hasClass('btn-light')) {
            $('.metric-options').children().removeClass('btn-dark').addClass('btn-light');
            element.addClass('btn-dark');
        }

        if (value == 'Percent') {
            relate.setValue(relate.getValue() / 100).setFormat('0[.]00 %');
        } else {
            relate.setValue(relate.getValue() * 100).setFormat('0[.]00');
        }

        form.calx('setValue', target, value);
    });

    $('#vegetated_buffer_strip').change(function(){
        if ($(this).val() == 'No') {
            $('.planting-view').hide();
        } else {
            $('.planting-view').show();
        }
    }).change();

    $('#sediment_retention_pond').change(function(){
        if ($(this).val() == 'No') {
            $('#sediment_pond_reduction').hide();
        } else {
            $('#sediment_pond_reduction').show();
        }
    }).change();

    $.getJSON(escCalcDataUrl, function (workbook) {
        console.time('calc');
        form.calx({
            data : workbook.esc_sheet
        });
        console.timeEnd('calc');
    });
});