<!-- esc-Page esc-1 -->
<div class="col-lg-10 mx-auto esc-page esc-page-description" id="esc_page_land_description" style="display:block;">
    <h2 class="page-title">Land Description</h2>
    <p class="lead mb-5 page-description">
        This is where you enter information about the land.
    </p>
    <div class="text-left page-form">
        <hr>
        <div class="input-select">
            <label for="soil_type">Soil Type :</label>
            <select class="form-control text-right soils-input" data-cell="C4" id="soil_type">
                <option value="Loamy sand">Loamy sand</option>
                <option value="Sandy loam">Sandy loam</option>
                <option value="Loam">Loam</option>
                <option value="Silt loam">Silt loam</option>
                <option value="Silt">Silt</option>
                <option value="Sandy clay loam">Sandy clay loam</option>
                <option value="Clay loam" selected>Clay loam</option>
                <option value="Silty clay loam">Silty clay loam</option>
                <option value="Sandy clay">Sandy clay</option>
                <option value="Silty clay">Silty clay</option>
                <option value="Clay and heavy clay">Clay and heavy clay</option>
            </select>
        </div>

        <div class="input-number mt-3">
            <label class="w-100" for="slope">
                Slope :
                <span class="metric-options" style="float:right;">
                    <i class="btn btn-sm py-0 btn-dark" data-value="Degrees" data-target="B5" data-relate="C5">degrees</i>
                    <i class="btn btn-sm py-0 btn-light" data-value="Percent" data-target="B5" data-relate="C5">percent</i>
                </span>
            </label>
            <input type="text" class="form-control text-right slope-input" placeholder="0" data-cell="C5" id="slope">
        </div>
        <div class="input-number mt-3">
            <label class="w-100" for="length_of_slope">
                Length of Slope :
                <span style="float:right;"><b>meters</b></span>
            </label>
            <input type="text" class="form-control text-right slope-length-input" placeholder="0" data-cell="C6" id="length_of_slope">
        </div>
        <div class="input-select mt-3">
            <label for="soil_cover">Soil Cover</label>
            <select class="form-control text-right covers-input" data-cell="C7" id="soil_cover">
                <option value="Pasture">Pasture</option>
                <option value="Cropping">Cropping</option>
            </select>
        </div>
    </div>
    <hr>
    <div class="page-buttons">
        <a class="btn btn-default btn-xl btn-section" href="#esc_section_home">Home</a>
        <a class="btn btn-primary btn-xl btn-page" href="#esc_page_land_location">Continue</a>
    </div>
</div>