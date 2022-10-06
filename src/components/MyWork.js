import React from "react"
import CampingModal from "../modals/campingModal";
import IDBFModal from "../modals/IDBFModal";
import SpaceBearModal from "../modals/spaceBearModal";
import SpookedModal from "../modals/spookedModal";
import TinycadeModal from "../modals/tinycadeModal";
import ComingSoon from "../modals/comingSoonModal";

export default class MyWork extends React.Component {
    render() {
        return (
            <section class="work" id="work">
                <h2 class="heading service-heading"> Recent Projects. </h2>

                <div class="work-section">
                    <div class="inner-width">
                        <div class="work">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h5>The Camping Project</h5>
                                    <CampingModal/>
                                </div>
                                <div class="col-sm-3">
                                    <h5>The Tinycade</h5>
                                    <TinycadeModal/>
                                </div>
                                <div class="col-sm-3">
                                    <h5>Spooked!</h5>
                                    <SpookedModal/>
                                </div>
                                <div class="col-sm-3">
                                    <h5>Space Bear Adventure</h5>
                                    <SpaceBearModal/>
                                </div>

                                {/* Next row */}
                                <div class="w-100"></div>

                                <div class="col-sm-3">
                                    <h5>Interdimensional Barfight</h5>
                                    <IDBFModal/>
                                </div>
                                <div class="col-sm-3">
                                    <h5>More coming soon!</h5>
                                    <ComingSoon/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}