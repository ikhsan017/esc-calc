<div class="container-fluid text-center">
    <div class="row">
        <!-- esc-Page esc-1 -->
        <div class="col-lg-10 col-lg-offset-1 mx-auto esc-page esc-page-description" id="esc_page_land_description" style="display:block;">
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
                            <i class="btn btn-xs py-0 btn-dark" data-value="Degrees" data-target="B5" data-relate="C5">degrees</i>
                            <i class="btn btn-xs py-0 btn-light" data-value="Percent" data-target="B5" data-relate="C5">percent</i>
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
                <a class="btn btn-default btn-xl btn-section" href="#" data-target="#esc_section_home">Home</a>
                <a class="btn btn-primary btn-xl btn-page" href="#" data-target="#esc_page_land_location">Continue</a>
            </div>
        </div>

        <!-- esc-Page esc-2 -->
        <div class="col-lg-10 col-lg-offset-1 mx-auto esc-page esc-page-location" id="esc_page_land_location" style="display:none;">
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
                    <img id="new_zealand_static_map" src="{$ModulePath}/images/nz_static_map.png" alt="">
                </div>
            </div>
            <hr>
            <div class="page-buttons">
                <a class="btn btn-light btn-xl btn-page" href="#" data-target="#esc_page_land_description">Previous</a>
                <a class="btn btn-primary btn-xl btn-page" href="#" data-target="#esc_page_infield_erosion_control">Continue</a>
            </div>
        </div>

        <!-- esc-Page esc-3 -->
        <div class="col-lg-10 col-lg-offset-1 mx-auto esc-page esc-page-infield-erosion-control"
            id="esc_page_infield_erosion_control"
            style="display:none;">
            <h2 class="page-title">Erosion Control Measures</h2>
            <p class="lead mb-5 page-description">This is where you enter your actual or planned infield erosion control measures.</p>
            <div class="text-left page-form">
                <hr>
                <div class="input-select">
                    <label for="cover_crop">Cover Crop :</label>
                    <select class="form-control text-right boolean-input cover-crop-input" data-cell="C11" id="cover_crop">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div class="input-select mt-3">
                    <label for="wheel_track_ripping">Wheel Track Ripping :</label>
                    <select class="form-control text-right boolean-input wheel-track-input" data-cell="C12" id="wheel_track_ripping">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div class="input-select mt-3">
                    <label for="wheel_dyking">Wheel Dyking :</label>
                    <select class="form-control text-right boolean-input wheel-dyking-input" data-cell="C13" id="wheel_dyking">
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div class="input-select mt-3">
                    <label for="cultivation_practice">Cultivation Practice :</label>
                    <select class="form-control text-right cultivations-input" data-cell="C14" id="cultivation_practice">
                        <option value="Minimum">Minimum</option>
                        <option value="Conventional">Conventional</option>
                    </select>
                </div>
                <hr>
            </div>
            <div class="page-buttons">
                <a class="btn btn-light btn-xl btn-page" href="#" data-target="#esc_page_land_location">Previous</a>
                <a class="btn btn-primary btn-xl btn-page" href="#" data-target="#esc_page_sediment_control_measure">Continue</a>
            </div>
        </div>

        <!-- esc-Page esc-4 -->
        <div class="col-lg-10 col-lg-offset-1 mx-auto esc-page esc-page-sediment-control-measure"
            id="esc_page_sediment_control_measure"
            style="display:none;">
            <h2 class="page-title">Sediment Control Measures</h2>
            <p class="lead mb-5 page-description">This is where you enter information about the sediment control measures.</p>
            <div class="text-left page-form">
                <hr>
                <div class="input-select">
                    <label for="sediment_retention_pond">
                        Sediment Retention Pond :
                        <i class="fa fa-fw fa-info-circle" data-toggle="popover"
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
                                <i class="btn btn-xs py-0 btn-dark" data-value="Degrees" data-target="D20" data-relate="C20">degrees</i>
                                <i class="btn btn-xs py-0 btn-light" data-value="Percent" data-target="D20" data-relate="C20">percent</i>
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
                            <i class="fa fa-fw fa-info-circle"
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
                <a class="btn btn-light btn-xl btn-page" href="#" data-target="#esc_page_infield_erosion_control">Previous</a>
                <a class="btn btn-primary btn-xl btn-page" href="#" data-target="#esc_page_result">View Results</a>
            </div>
        </div>

        <!-- esc-Page esc-5 -->
        <div class="col-lg-10 col-lg-offset-1 mx-auto esc-page esc-page-result" id="esc_page_result" style="display:none;">
            <h2 class="page-title">Results</h2>
            <div class="text-left page-form">
                <div class="text-left page-form">
                    <hr>

                    <div class="input-number mt-3">
                        <label class="w-100">Paddock Name </label>
                        <input type="text" class="form-control text-right paddock-name-input" id="esc_calculator_paddock_name" value="New Paddock">
                    </div>
                </div>

                <div class="input-select">
                    <hr>
                    <label>Rate of Soil Erosion</label>
                    <table class="table table-striped table-sm result-rate w-100">
                        <thead>
                            <tr>
                                <th scope="col" style="font-size: 12px; text-align: center;">
                                    Baseline
                                    <i class="fa fa-fw fa-info-circle"
                                        data-toggle="popover" title="Baseline result"
                                        data-content="No mitigation measures"></i>
                                </th>
                                <th scope="col" style="font-size: 12px; text-align: center;">Reduction</th>
                                <th scope="col" style="font-size: 12px; text-align: center;">Mitigated</th>
                                <th scope="col" style="font-size: 12px; text-align: center;">P Loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="text-align: center;">
                                    <span class="badge badge-light">
                                        <span class="table-baseline" data-cell="K14"></span> t/ha/year
                                    </span>
                                </td>
                                <td style="text-align: center;">
                                    <span class="badge badge-light">
                                        <span class="table-mitigated" data-cell="C27"></span>
                                    </span>
                                </td>
                                <td style="text-align: center;">
                                    <span class="badge badge-light">
                                        <span class="table-mitigated" data-cell="C25"></span> t/ha/year
                                    </span>
                                </td>
                                <td style="text-align: center;">
                                    <span class="badge badge-light">
                                        <span class="table-reduction" data-cell="C26"></span> kgP/ha/yr
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--
                <div class="input-select">
                    <label>Phosphate Loss</label>
                    <table class="table table-striped table-sm result-p-rate w-100">
                        <thead>
                            <tr>
                                <th scope="col" style="font-size: 10px; text-align: center;">Baseline</th>
                                <th scope="col" style="font-size: 10px; text-align: center;">Mitigated</th>
                                <th scope="col" style="font-size: 10px; text-align: center;">Reduction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="text-align: center;"><span class="badge badge-light"><span
                                            class="table-baseline"></span> kgP/ha</span>
                                </td>
                                <td style="text-align: center;"><span class="badge badge-light"><span
                                            class="table-mitigated"></span> kgP/ha</span>
                                </td>
                                <td style="text-align: center;"><span class="badge badge-light"><span
                                            class="table-reduction"></span> %</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr>
                <div class="input-select mt-3" id="sediment_pond_reduction">
                    <label>Reduction of suspended sediment by sediment pond</label>
                    <input type="text" class="form-control result-reduction-2 text-right" disabled data-cell="C29">
                </div>
                <hr>
                -->

            </div>
            <hr>
            <div class="page-buttons">
                <a class="btn btn-light btn-xl btn-page" href="#" data-target="#esc_page_sediment_control_measure">Previous</a>
                <a class="btn btn-primary btn-xl" href="#" id="esc_calculator_get_result">Download Results</a>
            </div>
        </div>
    </div>
</div>