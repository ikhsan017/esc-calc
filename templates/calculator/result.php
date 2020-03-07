<!-- esc-Page esc-5 -->
<div class="col-lg-10 mx-auto esc-page esc-page-result" id="esc_page_result" style="display:none;">
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
                            <i class="fas fa-info-circle"
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
        <a class="btn btn-light btn-xl btn-page" href="#esc_page_sediment_control_measure">Previous</a>
        <a class="btn btn-primary btn-xl" href="#" id="esc_calculator_get_result">Download Results</a>
    </div>
</div>