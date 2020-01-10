jQuery(document).ready(function ($) {


    function prepareFields() {

        // Page 1
        for (type in data_model.soil_types) {
            $('.soils-input').append('<option>' + type + '</option>')
        }
        $('.label_1').html(DEFAULTS.soil_type.title + " : ");
        $('.soils-input').val(DEFAULTS.soil_type.default);

        $('.label_2').html(DEFAULTS.slope_angle.title + " : ");
        $('.slope-input').val(DEFAULTS.slope_angle.default);

        $('.label_3').html(DEFAULTS.slope_length.title + " : ");
        $('.slope-length-input').val(DEFAULTS.slope_length.default);

        for (type in data_model.cover_types) {
            $('.covers-input').append('<option>' + type + '</option>')
        }
        $('.label_4').html(DEFAULTS.cover_type.title + " : ");
        $('.covers-input').val(DEFAULTS.cover_type.default)

        for (city in data_model.RUSLE_factors) {
            $('.cities-input').append('<option>' + city + '</option>')
        }
        $('.label_5').html(DEFAULTS.city_profile.title + " : ");
        $('.cities-input').val(DEFAULTS.city_profile.default)


        // Page 2

        for (type in data_model.bools) {
            $('.boolean-input').append('<option>' + type + '</option>')
        }
        $('.label_6').html(DEFAULTS.crop_cover.title + " : ");
        $('.cover-crop-input').val(DEFAULTS.crop_cover.default);
        $('.label_7').html(DEFAULTS.crop_ripping.title + " : ");

        $('.wheel-track-input').val(DEFAULTS.crop_ripping.default)
        $('.label_8').html(DEFAULTS.crop_dyking.title + " : ");
        $('.cover-dyking-input').val(DEFAULTS.crop_dyking.default)

        for (type in data_model.cultivation_types) {
            $('.cultivations-input').append('<option>' + type + '</option>')
        }

        $('.label_9').html(DEFAULTS.cultivation.title + " : ");
        $('.cultivations-input').val(DEFAULTS.cultivation.default)

        for (type in data_model.retention_types) {
            $('.retentions-input').append('<option>' + type + '</option>')
        }

        $('.label_10').html(DEFAULTS.retentions.title + " : ");
        $('.retentions-input').val(DEFAULTS.retentions.default)
        $('.label_11').html(DEFAULTS.riparian_0.title + " : ");
        $('.planting-input').val(DEFAULTS.riparian_0.default)
        $('.label_12').html(DEFAULTS.riparian_1.title + " : ");
        $('.buffer-input').val(DEFAULTS.riparian_1.default)
        $('.label_13').html(DEFAULTS.riparian_2.title + " : ");
        $('.buffer-width-input').val(DEFAULTS.riparian_2.default)
        $('.label_14').html(DEFAULTS.riparian_3.title + " : ");
        $('.etimated-input').val(DEFAULTS.riparian_3.default)
    }

    // Converts from degrees to radians.
    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    };

    // Converts from radians to degrees.
    Math.degrees = function (radians) {
        return radians * 180 / Math.PI;
    };
    var algbr = {
        p_factor: 1,
        SDR: 1,
        phos_in_soil: 2.168,

        initial_soil_loss: function () {
            let selected_city = $('.cities-input').val();
            let selected_rusle_factor = data_model.RUSLE_factors[selected_city];
            let selected_soil = $('.soils-input').val();
            let selected_soil_factor = data_model.soil_types[selected_soil];
            let selected_cover = $('.covers-input').val();
            let selected_cover_factor = data_model.cover_types[selected_cover];

            return algbr.p_factor * selected_rusle_factor * selected_soil_factor * RUSLE_LS_Eq.ls() * algbr.SDR * selected_cover_factor;

        },
        initial_p_loss: function () {
            return algbr.initial() * algbr.phos_in_soil;
        },
        initial: function () {
            return algbr.initial_soil_loss() * 2.2417;
        },
        cover_crop: function () {

            let selected_cover_crop = $('.cover-crop-input').val();
            let selected_cover_crop_factor = data_model.cover_types[selected_cover_crop];
            let k14 = algbr.initial();
            if (selected_cover_crop == "Yes") {
                return k14 * (1 - data_model.reductions[0]);
            }
            else {
                return k14;
            }
        },
        wheel_track: function () {
            let selected_wheel_track = $('.wheel-track-input').val();
            let k15 = algbr.cover_crop();
            let e12 = data_model.reductions[1];
            if (selected_wheel_track == "Yes") {
                return k15 * (1 - (e12));
            }
            else {
                return k15;
            }
        },
        dyking: function () {
            let selected_wheel_dyking = $('.wheel-dyking-input').val();
            let k15 = algbr.cover_crop();
            let e13 = data_model.reductions[1];
            if (selected_wheel_dyking == "Yes") {
                return k15 * (1 - (e13));
            }
            else {
                return k15;
            }
        },
        cultivation: function () {
            let selected_cultivation = $('.cultivations-input').val();
            let k15 = Math.min(algbr.wheel_track(), algbr.dyking())
            let E14 = data_model.reductions[2];
            if (selected_cultivation == "Minimum") {
                return k15 * (1 - E14)
            }
            else {
                return k15;
            }
        },
        retention: function () {
            let selected_retention_pond = $('.retentions-input').val();
            if (selected_retention_pond == "None") {
                return algbr.cultivation();
            }
            else {
                let selected_retention_pond_factor = data_model.retention_types[selected_retention_pond].total;
                return algbr.cultivation() * (1 - selected_retention_pond_factor)
            }
        },
        reduction_percentage: function () {
            let C20 = $('.buffer-input').val() / 100
            let L21 = Math.exp(-0.35 * $('.buffer-width-input').val())
            let C22 = $('.etimated-input').val() / 100

            if (C20 >= 0.1) {
                return (((79.7 - (3.8 * C20 * 100) + (61.3 * (1 - L21))) * C22) / 100)
            }
            else {
                return (((21.7 + (2 * C20 * 100) + (61 * (1 - L21))) * C22) / 100)
            }

        },
        planting: function () {
            let selected_planting = $('.planting-input').val();
            let k19 = algbr.retention();
            if (selected_planting == "Yes") {
                return k19 * (1 - algbr.reduction_percentage());
            }
            else {
                return k19;
            }
        }
    }

    var RUSLE_LS_Eq = {
        angle: function (_input) {
            return Math.atan(RUSLE_LS_Eq.getSlope(RUSLE_LS_Eq.getSlopeSettings(), $('.slope-input').val()));
        },
        sin: function () {
            return Math.sin(RUSLE_LS_Eq.angle());
        },
        b: function () {
            return (RUSLE_LS_Eq.sin() / 0.0896) / (3 * (Math.pow(RUSLE_LS_Eq.sin(), 0.8)) + 0.56);
        },
        m: function () {
            return RUSLE_LS_Eq.b() / (1 + RUSLE_LS_Eq.b())
        },
        horizonatal: function () {
            return Math.cos(RUSLE_LS_Eq.angle()) * $('.slope-length-input').val()
        },
        l: function () {
            return Math.pow((RUSLE_LS_Eq.horizonatal() / 22.1), RUSLE_LS_Eq.m())
        },
        s: function () {
            if ($('.slope-input').val() > 9) {
                return 16.8 * RUSLE_LS_Eq.angle() - 0.5;
            }
            else {
                return 10.8 * RUSLE_LS_Eq.angle() + 0.03;
            }
        },
        ls: function () {
            return RUSLE_LS_Eq.s() * RUSLE_LS_Eq.l();
        },
        getSlopeSettings: function () {
            if ($('.metric-options .btn-dark').html() == 'degrees') {
                return true;
            }
            return false;
        },
        getSlope: function (degrees, C5) {
            if (!degrees) {
                return C5 / 100;
            }
            else {
                return Math.tan(Math.radians(C5))
            }
        }
    }


    var data_model = {
        reductions: [
            0.6 * (1 / 3),
            0.9 * (1 / 3),
            0.5 * (1 / 3)
        ],
        RUSLE_factors: {
            "Kaitaia": 165,
            "Auckland": 149,
            "Hamilton": 82,
            "Matamata": 122,
            "New Plymoth": 208,
            "Taupo": 105,
            "Gisborne": 209,
            "Napier": 46,
            "Whanganui": 67,
            "Palmerston North": 51,
            "Wellington": 75,
            "Nelson": 85,
            "Greymouth": 243,
            "Christchurch": 22.5,
            "Timaru": 25,
            "Alexandra": 15,
            "Dunedin": 19,
            "Invercargill": 36
        },
        soil_types: {
            "Sand": 0.02,
            "Loamy sand": 0.04,
            "Sandy loam": 0.13,
            "Loam": 0.30,
            "Silt loam": 0.38,
            "Silt": 0.60,
            "Sandy clay loam": 0.20,
            "Clay loam": 0.30,
            "Silty clay loam": 0.32,
            "Sandy clay": 0.14,
            "Silty clay": 0.26,
            "Clay and heavy clay": 0.22
        },
        cover_types: {
            "Pasture": 0.020,
            "Cropping": 0.330
        },
        bools: {
            "No": 0,
            "Yes": 1
        },
        cultivation_types: {
            "Minimum": 0,
            "Conventional": 1
        },
        retention_types: {
            "2%": {
                total: 1,
                suspended: 1
            },
            "1%": {
                total: 0.997,
                suspended: 0.86
            },
            "0.50%": {
                total: 0.991,
                suspended: 0.68
            },
            "None": {
                total: 0,
                suspended: 0
            },
        }
    }

    function getOutputs() {
        let data = {
            "initial_soil_loss": algbr.initial_soil_loss(),
            "initial_p_loss": algbr.initial_p_loss(),
            "initial": algbr.initial(),
            "cover_crop": algbr.cover_crop(),
            "wheel_track": algbr.wheel_track(),
            "dyking": algbr.dyking(),
            "cultivation": algbr.cultivation(),
            "retention": algbr.retention(),
            "planting": algbr.planting(),
        }
        return data;
    }

    function getResults() {
        let selected_retention_pond = $('.retentions-input').val();
        let selected_retention_pond_factor = selected_retention_pond ? data_model.retention_types[selected_retention_pond].suspended : 0;
        let data = {
            rate: algbr.planting(),
            p_loss: algbr.planting() * 2.168,
            reduction: 1 - (algbr.planting() / algbr.initial()),
            suspended: selected_retention_pond_factor
        }

        $('.result-rate .table-baseline').html(getOutputs().initial_soil_loss.toFixed(1));
        $('.result-rate .table-mitigated').html(data.rate.toFixed(1));
        let reduction1 = Math.max(0, Math.min(((getOutputs().initial_soil_loss - data.rate) / getOutputs().initial_soil_loss * 100).toFixed(1), 100));
        $('.result-rate .table-reduction').html(reduction1);

        $('.result-p-rate .table-baseline').html(getOutputs().initial_p_loss.toFixed(1));
        $('.result-p-rate .table-mitigated').html(data.p_loss.toFixed(1));
        let reduction2 = Math.max(0, Math.min(((getOutputs().initial_p_loss - data.p_loss) / getOutputs().initial_p_loss * 100).toFixed(1), 100));
        $('.result-p-rate .table-reduction').html(reduction2);

        $('.result-reduction-2').val(data.suspended);
        $('.result-reduction-2').parent().parent().show();
        if ($('.retentions-input').val() == "None") {
            $('.result-reduction-2').parent().parent().hide();
        }

        if ($('.planting-input').val() == 'Yes') {
            $('.planting-view').show();
        }
        else {
            $('.planting-view').hide();

        }

        return data;
    }
    function exportResults() {
        var textToWrite = '';
        textToWrite = textToWrite + 'Erosion_&_Sediment_Control';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Exported_Results for "';
        textToWrite = textToWrite + '' + $('.paddock-name-input').val() + '"';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + Date();
        textToWrite = textToWrite + '\n\n';
        textToWrite = textToWrite + '____________________________________';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Rate of soil erosion';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Baseline     : ' + $('.result-rate .table-baseline').html() + ' t/ha';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Mitigated    : ' + $('.result-rate .table-mitigated').html() + ' t/ha';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Reduction (%): ' + $('.result-rate .table-reduction').html() + ' %';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';
        textToWrite = textToWrite + '\n\n';
        textToWrite = textToWrite + '____________________________________';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'P loss';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Baseline     : ' + $('.result-p-rate .table-baseline').html() + ' kgP/ha';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Mitigated    : ' + $('.result-p-rate .table-mitigated').html() + ' kgP/ha';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Reduction (%): ' + $('.result-p-rate .table-reduction').html() + ' %';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';

        textToWrite = textToWrite + '\n\n';
        textToWrite = textToWrite + '____________________________________';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Reduction of suspended sediment by sediment pond';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + 'Reduction (%): ' + $('.result-reduction-2').val() + ' %';
        textToWrite = textToWrite + '\n';
        textToWrite = textToWrite + '------------------------------------';



        textToWrite = textToWrite.replace(/\n/g, "\r\n");

        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToWrite));
        pom.setAttribute('download', 'results');

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }

    // Initialization
    $('[data-toggle="popover"]').popover()
    $("html").on("mouseup", function (e) {
        var l = $(e.target);
        if (l[0].className.indexOf("popover") == -1) {
            $(".popover").each(function () {
                $(this).popover("hide");
            });
        }
    });
    $('.esc-page1').show();
    prepareFields();
    getResults();


    // Input Handler
    function handleInput() {
        getResults();
    }
    $('input').change(handleInput);
    $('select').change(handleInput)

    // Results Button

    $('.result-toggle').click(function (e) {
        let page = 4
        $('.esc-page:visible').fadeOut(200, function () {
            $('.esc-page' + page + '').fadeIn();
        });
    })

    // Page Controller
    $('.js-page-trigger').click(function (e) {
        e.preventDefault();
        let element = $(e.currentTarget);
        let page = element.attr('data-page');

        $('.esc-page:visible').hide();
        $('.esc-page' + page + '').show();
    });
    // Metric Options Handler
    $('.metric-options').children().click(function (e) {
        let element = $(e.currentTarget);
        console.log(element);
        if (element.hasClass('btn-light')) {
            $('.metric-options').children().removeClass('btn-dark').addClass('btn-light');
            element.addClass('btn-dark');
        }
    });
});