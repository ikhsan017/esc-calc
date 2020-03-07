<!-- esc-Page esc-2 -->
<div class="col-lg-10 mx-auto esc-page esc-page-location" id="esc_page_land_location" style="display:none;">
    <h2 class="page-title">Land Location</h2>
    <p class="lead mb-5 page-description">Click on the map to add marker to the land location.</p>
    <div class="text-left page-form">

        <div class="page-buttons" style="text-align: center">
            <a class="btn btn-primary" href="#" id="esc_calculator_get_location">Get my current location</a>
        </div>
        <input type="hidden" class="form-control text-right" data-cell="C8">
        <input type="hidden" class="form-control text-right" data-cell="C9">
        <div id="nz-map" style="height:800px; margin:15px 0">
            <div class="map" style="width:100%; height: 100%">Error rendering map!</div>
        </div>

        <div style="display: none">
            <img id="new_zealand_static_map" src="{$ModulePath}/img/nz_static_map.png" alt="">
        </div>
    </div>
    <hr>
    <div class="page-buttons">
        <a class="btn btn-light btn-xl btn-page" href="#esc_page_land_description">Previous</a>
        <a class="btn btn-primary btn-xl btn-page" href="#esc_page_infield_erosion_control">Continue</a>
    </div>
</div>