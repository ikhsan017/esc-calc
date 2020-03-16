var map, marker, form;

function updateCoord(latLng) {
    form.calx('setValue', 'C8', latLng.lng());
    form.calx('setValue', 'C9', latLng.lat());
}

function updateMarker(latLng) {
    updateCoord(latLng);

    if (!marker) {
        marker = new google.maps.Marker({
            map: map,
            position: latLng,
            draggable: true
        });

        marker.addListener('dragend', function(e){
            updateCoord(latLng);
        });
    } else {
        marker.setPosition(latLng);
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('nz-map'), {
        center: {lat: -41.237586562525074, lng: 172.58124892092542},
        zoom: 6,
        disableDefaultUI : false
    });

    map.addListener('click', function(e){
        updateMarker(e.latLng);
    });
}

jQuery(document).ready(function ($) {
    form = $('#esc_section_calculator');

    $('#esc_calculator_get_location').click(function(e){
        e.preventDefault();

        if (location.protocol !== 'https:') {
            alert('Location service only allowed on secure connetion (https)!');
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(loc){
                var pos = new google.maps.LatLng ({
                    lat : loc.coords.latitude,
                    lng : loc.coords.longitude
                });

                updateMarker(pos);
                map.setCenter(pos);
            });
        } else {
            alert("Unable to get your location.");
        }
    });

    // Closes the sidebar menu
    $("#side-menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $("#side-menu-toggle > .fa-bars, #side-menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    $('[data-toggle="popover"]').popover({container: 'body'});

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
        var target = $(this).attr('data-target').replace('/', '');

        if (target == '#esc_section_home') {
            $('#sidebar_nav').hide();
        } else {
            $('#sidebar_nav').show();
        }

        $('#section_title').text($(target).attr('data-title'));

        $('#esc_app')
            .find('section:visible')
            .removeClass('open')
            .addClass('open')
            .fadeOut(300, function(){
                $('section' + target).removeClass('close').addClass('open').fadeIn();
            });
    });

    $('.esc-app').on('click', '.btn-page', function(e) {
        e.preventDefault();
        var target = $(this).attr('data-target').replace('/', '');

        $('#esc_section_calculator').find('.esc-page:visible').fadeOut(300, function(){
            $(target).fadeIn();
        });

        if (target == '#esc_page_result') {
            form.calx('calculate');
        }
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

        if ($(this).hasClass('btn-dark')) {
            return;
        }

        let element = $(e.currentTarget);
        let value   = element.attr('data-value');
        let target  = element.attr('data-target');
        let relate  = form.calx('getCell', element.attr('data-relate'));

        if (element.hasClass('btn-light')) {
            $('.metric-options').children().removeClass('btn-dark').addClass('btn-light');
            element.addClass('btn-dark').removeClass('btn-light');
        }

        /*
        if (value == 'Percent') {
            relate.setValue(relate.getValue() / 100).setFormat('0[.]00 %');
        } else {
            relate.setValue(relate.getValue() * 100).setFormat('0[.]00');
        }
        */

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

    $('#esc_calculator_get_result').click(function(e){
        e.preventDefault();

        var pdf = new jsPDF('p', 'pt', 'a4'),
            lineHeight  = 20,
            currentLine = 70,
            sheet       = form.calx('getSheet'),
            paddock     = $('#esc_calculator_paddock_name').val(),
            image, canvas, cWidth, cHeight, maxWidth;

        function newLine(delta){
            if(typeof delta == 'undefined'){
                delta = 0;
            }

            currentLine += lineHeight + delta;
        }

        function getValue(cell, useBlank) {
            var cellValue = sheet.cells[cell].getFormattedValue();

            if (useBlank && (
                cellValue == 0 ||
                cellValue == '#DIV/0' ||
                typeof(cellValue) === 'boolean' ||
                cellValue.toString() == 'NaN'
            )) {
                cellValue = '';
            }

            return cellValue.toString();
        }

        /** draw the header */
        pdf.setTextColor(84, 130, 53);
        pdf.setFontSize(22);
        pdf.text(175, currentLine, 'Erosion & Sediment Control');
        //dim 186x151
        pdf.addImage($('#logo_vegetable_research_innovation')[0], 'PNG', 40, currentLine - 60, 60 / 151 * 186, 60);


        pdf.setFontSize(12);
        pdf.setLineWidth(1);
        pdf.setDrawColor(150,150,150);
        pdf.setTextColor(90,90,90);

        newLine(20);
        pdf.text(40, currentLine, 'Paddock Name : ' + paddock);
        var today = new Date();
        var months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        pdf.text(360, currentLine, 'Date : ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());


        pdf.text(40, currentLine, 'Paddock Name : ' + paddock);

        newLine(25);
        pdf.setTextColor(84, 130, 53);

        pdf.text(45, currentLine, 'Land Description');
        pdf.line(40, currentLine+5, 280, currentLine+5);

        /*
        pdf.text(305, currentLine, 'Land Location');
        pdf.line(300, currentLine+5, 550, currentLine+5);
        pdf.addImage($('#new_zealand_static_map')[0], 'PNG', 310, currentLine + 15, 230, 230/704 * 800);
        */

        //c4-c7
        pdf.setTextColor(90,90,90);
        pdf.setFontSize(10);

        newLine();
        pdf.text(45 , currentLine, 'Soil Type');
        pdf.text(180 , currentLine, ': ' + getValue('C4'));

        newLine();
        pdf.text(45 , currentLine, 'Slope');
        pdf.text(180 , currentLine, ': ' + getValue('C5') + ' ' + (getValue('B5').toLowerCase() == 'percent' ? '%' : 'deg'));

        newLine();
        pdf.text(45 , currentLine, 'Length of Slope');
        pdf.text(180 , currentLine, ': ' + getValue('C6'));

        newLine();
        pdf.text(45 , currentLine, 'Soil Cover');
        pdf.text(180 , currentLine, ': ' + getValue('C7'));

        newLine();
        pdf.text(45 , currentLine, 'Longitude');
        pdf.text(180 , currentLine, ': ' + parseFloat(getValue('C8')).toFixed(3));

        newLine();
        pdf.text(45 , currentLine, 'Latitude');
        pdf.text(180 , currentLine, ': ' + parseFloat(getValue('C9')).toFixed(3));

        // In field erosion control
        newLine(25);
        pdf.setTextColor(84, 130, 53);
        pdf.setFontSize(12);

        pdf.text(45, currentLine, 'Infield Erosion Control');
        pdf.line(40, currentLine+5, 280, currentLine+5);

        pdf.setTextColor(90,90,90);
        pdf.setFontSize(10);

        newLine();
        pdf.text(45, currentLine, 'Cover Crop');
        pdf.text(180, currentLine, ': ' + getValue('C11'));

        newLine();
        pdf.text(45, currentLine, 'Wheel Track Ripping');
        pdf.text(180, currentLine, ': ' + getValue('C12'));

        newLine();
        pdf.text(45, currentLine, 'Wheel Dyking');
        pdf.text(180, currentLine, ': ' + getValue('C13'));

        newLine();
        pdf.text(45, currentLine, 'Cultivation Practice');
        pdf.text(180, currentLine, ': ' + getValue('C14'));

        /** Sediment Control Measure */
        newLine(25);
        pdf.setTextColor(84, 130, 53);
        pdf.setFontSize(12);

        pdf.text(45, currentLine, 'Sediment Control Measure');
        pdf.line(40, currentLine+5, 550, currentLine+5);

        pdf.setTextColor(90,90,90);
        pdf.setFontSize(10);

        newLine();
        pdf.text(45, currentLine, 'Sediment Retention Pond');
        pdf.text(180, currentLine, ': ' + getValue('C17'));

        newLine();
        pdf.text(45, currentLine, 'Vegetated Buffer Strips');
        pdf.text(180, currentLine, ': ' + getValue('C18'));

        if (getValue('C18') == 'Yes') {
            newLine();
            pdf.text(55, currentLine, 'Buffer Slope');
            pdf.text(180, currentLine, ': ' + getValue('C20') + ' %');

            newLine();
            pdf.text(55, currentLine, 'Buffer Width (m)');
            pdf.text(180, currentLine, ': ' + getValue('C21') + ' m');

            newLine();
            pdf.text(55, currentLine, 'Channelisation factor');
            pdf.text(180, currentLine, ': ' + getValue('C22'));
        }


        /** draw the header */
        newLine(40);
        pdf.setTextColor(84, 130, 53);
        pdf.setFontSize(22);
        pdf.text(260, currentLine, 'Results');

        newLine(25);
        pdf.setFontSize(12);

        pdf.text(45, currentLine, 'Rate of  Soil Erosion');
        pdf.line(40, currentLine+5, 550, currentLine+5);

        newLine();

        pdf.setTextColor(90,90,90);
        pdf.setFontSize(10);
        pdf.text(60, currentLine, 'Baseline');
        pdf.text(200, currentLine, 'Reduction');
        pdf.text(360, currentLine, 'Mitigated');
        pdf.text(500, currentLine, 'P Loss');

        newLine();
        pdf.setFontSize(16);
        pdf.setTextColor(84, 130, 53);

        pdf.text(62, currentLine, getValue('K14'));
        pdf.text(207, currentLine, getValue('C27'));
        pdf.text(363, currentLine, getValue('C25'));
        pdf.text(505, currentLine, getValue('C26'));

        newLine();
        pdf.setTextColor(70, 70, 70);
        pdf.setFontSize(8);
        pdf.text(63, currentLine, 't/ha/year');
        //pdf.text(200, currentLine, '%');
        pdf.text(365, currentLine, 't/ha/year');
        pdf.text(495, currentLine, 'kgP/ha/year');

        /** footer */
        pdf.line(20, 790, 570, 790);
        //dim 260x77
        pdf.addImage($('#logo_agrilink')[0], 'JPEG', 20, 795, 25 / 77 * 260, 25);
        //dim 522x120
        pdf.addImage($('#logo_ministry_for_primary_industries')[0], 'JPEG', 570 - (25 / 120 * 522) , 795, 25 / 120 * 522, 25);

        pdf.save(paddock + '.pdf');

    });

    form.calx({
        data : esc_model.esc_sheet
    });
});