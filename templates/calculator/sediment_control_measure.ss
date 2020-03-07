<!-- esc-Page esc-4 -->
<div class="col-lg-10 mx-auto esc-page esc-page-sediment-control-measure"
    id="esc_page_sediment_control_measure"
    style="display:none;">
    <h2 class="page-title">Sediment Control Measures</h2>
    <p class="lead mb-5 page-description">This is where you enter information about the sediment control measures.</p>
    <div class="text-left page-form">
        <hr>
        <div class="input-select">
            <label for="sediment_retention_pond">
                Sediment Retention Pond :
                <i class="fas fa-info-circle" data-toggle="popover"
                    title="Retention Pond"
                    data-content="Retention ponds should be a minimum size of 0.5% (50m³/ha)">
                </i>
            </label>
            <select class="form-control text-right retentions-input" data-cell="C17" id="sediment_retention_pond">
                <option value="No">No</option>
                <option value="0.02">2%</option>
                <option value="0.01">1%</option>
                <option value="0.005">0.50%</option>
                <option value="0.0025">0.25%</option>
            </select>
        </div>
        <div class="input-select mt-3">
            <label for="vegetated_buffer_strip">Vegetated buffer strips :</label>
            <select class="form-control text-right boolean-input planting-input" data-cell="C18" id="vegetated_buffer_strip">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select>
        </div>
        <div class="planting-view ml-4">
            <div class="input-number mt-3">
                <label class="w-100">
                    Buffer Slope :

                    <span class="metric-options" style="float:right;">
                        <i class="btn btn-sm py-0 btn-dark" data-value="Degrees" data-target="D20" data-relate="C20">degrees</i>
                        <i class="btn btn-sm py-0 btn-light" data-value="Percent" data-target="D20" data-relate="C20">percent</i>
                    </span>
                </label>
                <input type="text" class="form-control text-right buffer-input" placeholder="0" data-cell="C20">
            </div>
            <div class="input-number mt-3">
                <label class="w-100">
                    Buffer Width (m) :
                    <span style="float:right;"><b>meters</b></span>
                </label>
                <input type="text" class="form-control text-right buffer-width-input" placeholder="0" data-cell="C21">
            </div>
            <div class="input-number mt-3">
                <label class="w-100">
                    Channelisation factor :
                    <i class="fas fa-info-circle"
                        data-toggle="popover" title="Channelisation Factor"
                        data-content="100% means no channelised flow through the strip. Values of less than 100% should be estimates of the percent of the buffer strip that is not being bypassed by channelized flow and is functioning normally."></i>
                    <span style="float:right;"><b>percent</b></span>
                </label>
                <input type="text" class="form-control text-right etimated-input" placeholder="0" data-cell="C22">
            </div>
        </div>
        <hr>
    </div>
    <div class="page-buttons">
        <a class="btn btn-light btn-xl btn-page" href="#esc_page_infield_erosion_control">Previous</a>
        <a class="btn btn-primary btn-xl btn-page" href="#esc_page_result">View Results</a>
    </div>
</div>