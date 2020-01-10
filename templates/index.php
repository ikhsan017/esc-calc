<div class="esc-calculator">
    <!-- Navigation -->
    <a class="side-menu-toggle rounded" href="#">
        <i class="fas fa-bars"></i>
    </a>
    <a class="result-toggle rounded" href="#">
        <i class="fas fa-poll"></i>
    </a>
    <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a class="js-scroll-trigger" href="#page-top">Erosion & Sediment Control</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="1" href="#1"><i class="fas fa-clipboard px-2"></i>
                    Land Description</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="2" href="#2"><i class="fas fa-clipboard px-2"></i>
                    Infield Erosion Control Measures</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="3" href="#3"><i class="fas fa-clipboard px-2"></i>
                    Sediment Control Measures</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="4" href="#4"><i class="fas fa-poll px-2"></i>
                    Results</a>
            </li>
            <hr>

            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="6" href="#6"><i
                        class="fas fa-info-circle px-2"></i>About Application</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="5" href="#5"><i class="fas fa-question px-2"></i>How
                    to Use</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-page-trigger js-scroll-trigger" data-page="7" href="#7"><i class="fas fa-file px-2"></i>More
                    Resources</a>
            </li>
        </ul>
    </nav>

    <div class="sidebar-nav" style="background:#1D809F; position: absolute !important; top: 0;z-index: 100;">
        <li class="sidebar-brand">
            <a class="js-scroll-trigger" href="#page-top">Erosion & Sediment Control</a>
        </li>
    </div>

    <!-- About -->
    <section class="content-section bg-light" id="about">
        <div class="container text-center">
            <div class="row">
                <!-- esc-Page esc-1 -->
                <div class="col-lg-10 mx-auto esc-page esc-page1" style="display:block;">
                    <h2 class="page-title">Land Description</h2>
                    <p class="lead mb-5 page-description">
                        This is where you enter information about the land. This is the
                        land description. Land description yeah?</p>
                    <div class="text-left page-form">
                        <hr>
                        <div class="input-select">
                            <label><span class="label_1"></span></label>
                            <select class="form-control text-right soils-input"></select>
                        </div>
                        <div class="input-number mt-3">
                            <label class="w-100"><span class="label_2"></span><span class="metric-options"
                                    style="float:right;">
                                    <l class="btn btn-sm py-0 btn-dark">degrees</l>
                                    <l class="btn btn-sm py-0 btn-light">percent</l>
                                </span> </label>
                            <input type="number" class="form-control text-right slope-input" placeholder="0" value="5">
                        </div>
                        <div class="input-number mt-3">
                            <label class="w-100"><span class="label_3"></span><span
                                    style="float:right;"><b>meters</b></span> </label>
                            <input type="number" class="form-control text-right slope-length-input" placeholder="0"
                                value="125">
                        </div>
                        <div class="input-select mt-3">
                            <label><span class="label_4"></span></label>
                            <select class="form-control text-right covers-input"></select>
                        </div>

                        <div class="input-select mt-3">
                            <label><span class="label_5"></span></label>
                            <select class="form-control text-right cities-input"></select>
                        </div>
                        <hr>
                        <div id="nz-map">
                            <div class="map" style="width:100%; height: 100%">Error rendering map!</div>
                        </div>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="2"
                            href="#continue">Continue</a>
                    </div>
                </div>
                <!-- esc-Page esc-2 -->
                <div class="col-lg-10 mx-auto esc-page esc-page2" style="display:none;">
                    <h2 class="page-title">Infield Erosion Control</h2>
                    <p class="lead mb-5 page-description">This is where you enter information about the Infield Erosion.</p>
                    <div class="text-left page-form">
                        <hr>
                        <div class="input-select">
                            <label><span class="label_6"></span></label>
                            <select class="form-control text-right boolean-input cover-crop-input"></select>
                        </div>
                        <div class="input-select mt-3">
                            <label><span class="label_7"></span></label>
                            <select class="form-control text-right boolean-input wheel-track-input"></select>
                        </div>
                        <div class="input-select mt-3">
                            <label><span class="label_8"></span></label>
                            <select class="form-control text-right boolean-input wheel-dyking-input"></select>
                        </div>
                        <div class="input-select mt-3">
                            <label><span class="label_9"></span></label>
                            <select class="form-control text-right cultivations-input"></select>
                        </div>
                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-light btn-xl js-page-trigger js-scroll-trigger" data-page="1"
                            href="#continue">Previous</a>
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="3"
                            href="#continue">Continue</a>
                    </div>
                </div>
                <!-- esc-Page esc-3 -->
                <div class="col-lg-10 mx-auto esc-page esc-page3" style="display:none;">
                    <h2 class="page-title">Sediment Control Measures</h2>
                    <p class="lead mb-5 page-description">This is where you enter information about the Sediment control
                        measures.</p>
                    <div class="text-left page-form">
                        <hr>
                        <div class="input-select">
                            <label><span class="label_10"></span><i class="fas fa-info-circle" data-toggle="popover"
                                    title="Retention Pond"
                                    data-content="Retention ponds should be a minimum size of 0.5% (50m³/ha)"></i></label>
                            <select class="form-control text-right retentions-input"></select>
                        </div>
                        <div class="input-select mt-3">
                            <label><span class="label_11"></span></label>
                            <select class="form-control text-right boolean-input planting-input"></select>
                        </div>
                        <div class="planting-view ml-4">
                            <div class="input-number mt-3">
                                <label class="w-100"><span class="label_12"></span><span
                                        style="float:right;"><b>percent</b></span> </label>
                                <input type="number" class="form-control text-right buffer-input" placeholder="0">
                            </div>
                            <div class="input-number mt-3">
                                <label class="w-100"><span class="label_12"></span><span
                                        style="float:right;"><b>meters</b></span> </label>
                                <input type="number" class="form-control text-right buffer-width-input" placeholder="0">
                            </div>
                            <div class="input-number mt-3">
                                <label class="w-100"><span class="label_13"></span><i class="fas fa-info-circle"
                                        data-toggle="popover" title="Channelization Factor"
                                        data-content="100% means no channelized flow through the strip. Values of less than 100% should be estimates of the percent of the buffer strip that is not being bypassed by channelized flow and is functioning normally."></i>
                                    <span style="float:right;"><b>percent</b></span> </label>
                                <input type="number" class="form-control text-right etimated-input" placeholder="0">
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-light btn-xl js-page-trigger js-scroll-trigger" data-page="2"
                            href="#previous">Previous</a>
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="4"
                            href="#continue">View Results</a>
                    </div>
                </div>
                <!-- esc-Page esc-4 -->
                <div class="col-lg-10 mx-auto esc-page esc-page4" style="display:none;">
                    <h2 class="page-title">Results</h2>
                    <div class="text-left page-form">
                        <hr>
                        <div class="text-left page-form">

                            <div class="input-number mt-3">
                                <label class="w-100">Paddock Name </label>
                                <input type="text" class="form-control text-right paddock-name-input" value="New Paddock">
                            </div>
                        </div>

                        <hr>
                        <div class="input-select">
                            <label>Rate of Soil Erosion</label>
                            <table class="table table-striped table-sm result-rate w-100">
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
                                                    class="table-baseline"></span> t/ha</span>
                                        </td>
                                        <td style="text-align: center;"><span class="badge badge-light"><span
                                                    class="table-mitigated"></span> t/ha</span>
                                        </td>
                                        <td style="text-align: center;"><span class="badge badge-light"><span
                                                    class="table-reduction"></span> %</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr>
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
                        <div class="input-select mt-3">
                            <label>Suspended sediment reduced by sediment pond</label>
                            <div class="input-group">
                                <input type="text" class="form-control result-reduction-2 text-right" disabled>
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        </div>

                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-light btn-xl js-page-trigger js-scroll-trigger" data-page="3" href="#previous">
                            <</a> <a class="btn btn-primary btn-xl js-scroll-trigger" data-page="4" href="#continue"
                                onclick="exportResults()">Download Results
                        </a>
                    </div>
                </div>
                <!-- esc-Page esc-5 -->
                <div class="col-lg-10 mx-auto esc-page esc-page5" style="display:none;">
                    <h2 class="page-title">How to Use</h2>
                    <p class="lead mb-5 page-description">This app calculates rates of “baseline” erosion and sediment
                        delivery to watercourses after mitigation for a given slope & location, crop and cover treatment,
                        and erosion and sediment mitigation. Enter the data for your slope, and then press the view results
                        tab to see the results.
                    </p>
                    <h6 class="page-title">Disclaimer</h6>
                    <p class="lead mb-5 page-description">For all erosion and sediment control measures it is assumed they
                        have been established and maintained correctly.</p>

                    <div class="text-left page-form">
                        <hr>
                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="1"
                            href="#previous">Ok</a>
                    </div>
                </div>
                <!-- esc-Page esc-6 -->
                <div class="col-lg-10 mx-auto esc-page esc-page6" style="display:none;">
                    <h2 class="page-title">About Application</h2>
                    <p class="lead mb-5 page-description">This app calculates rates of “baseline” erosion and sediment
                        delivery to watercourses after mitigation for a given slope & location, crop and cover treatment,
                        and erosion and sediment mitigation. Enter the data for your slope, and then press the view results
                        tab to see the results.
                    </p>
                    <h6 class="page-title">Application & Equations</h6>
                    <p class="lead mb-5 page-description">&copy; Agrilink NZ Ltd 2019</p>
                    <h6 class="page-title">Data and Equations</h6>
                    <p class="lead mb-5 page-description">Andrew Barber and Henry Stenning</p>
                    <h6 class="page-title">Web Application</h6>
                    <p class="lead mb-5 page-description">Joshua Caputo</p>

                    <div class="text-left page-form">
                        <hr>
                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="1"
                            href="#previous">Ok</a>
                    </div>
                </div>
                <!-- esc-Page esc-7 -->
                <div class="col-lg-10 mx-auto esc-page esc-page7" style="display:none;">
                    <h2 class="page-title">More Resources</h2>
                    <div class="text-left page-form">
                        <hr>
                        <ul class="nav flex-column text-right">
                            <h6 class="text-left">External Resources</h6>
                            <li class="nav-item">
                                <span class="nav-link badge-dark"><a download="true"
                                        href="http://hortnz.co.nz/assets/Natural-Resources-Documents/ES-Control-Guidelines-1-1.pdf"
                                        style="float: left;"
                                        class="text-primary fa fa-external-link-alt"></a>ES-Control-Guidelines-1-1.pdf</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link badge-secondary"><a
                                        href="http://www.hortnz.co.nz/assets/Natural-Resources-Documents/ErosionSedimentMgmtGuide-PrinterFriendly.pdf"
                                        style="float: left;" class="text-light fa fa-external-link-alt"></a>Soil and
                                    Drainage Management Guide</span>
                            </li>
                        </ul>
                        <hr>
                    </div>
                    <div class="page-buttons">
                        <a class="btn btn-primary btn-xl js-page-trigger js-scroll-trigger" data-page="1"
                            href="#previous">Ok</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>