import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const OurServices = ({
    title,
    sub_title,
    service_Image,
    services,
    slice_variation
}) => {
    return (
        <section id="services-section" class="section_layout399">
        <div class="padding-global secondary-section-background">
          <div class="container-large">
            <div class="padding-section-large">
                <div class="margin-bottom margin-xxlarge">
                    <div class="max-width-large">
                    <div class="margin-bottom margin-small">
                        <h2 class="heading"><PrismicRichText field={title} /></h2>
                    </div>
                    <div class="text-size-medium"><PrismicRichText field={sub_title} /></div>
                    </div>
                </div>
                <div class="layout142_image-wrapper" >
                    <PrismicNextImage field={service_Image} class="layout142_image"/>
                    {/* Keeping the first card block seperate as per design - for the first slice variation*/}
                    {slice_variation === "default" && (
                        <div class="w-layout-grid layout399_row overlay-card-tp">
                        <div class="layout399_card">
                            <div class="layout399_card-content">
                                <div class="layout399_card-content-top">
                                    <div class="margin-bottom margin-xxsmall">
                                        <div class="text-weight-semibold"><PrismicRichText field={services[0].service_category} /></div>
                                    </div>
                                    <div class="margin-bottom margin-xxsmall">
                                        <h3 class="heading-style-h5 card-heading-styles"><PrismicRichText field={services[0].service_name} /></h3>
                                    </div>
                                    <div class="paragraph"><PrismicRichText field={services[0].description} /></div>
                                </div>
                                <a href="#" class="card_leran_more_button w-button">Learn More </a>
                            </div>
                            <div id="w-node-_5cd1230e-2005-7d27-2ab9-47a15c8cdeee-943e1f6c" class="layout399_card-image-wrapper"></div>
                        </div>
                        </div>
                    )}
                </div>
                {/* Showing only if its default variation */}
                {slice_variation === "default" && (
                    <div class="w-layout-grid layout399_row">
                        {services.map((item, index) => {
                            return(
                                
                                <div class="layout399_card">
                                    <div class="layout399_card-content">
                                        <div class="layout399_card-content-top">
                                            <div class="margin-bottom margin-xxsmall">
                                                <div class="text-weight-semibold"><PrismicRichText field={item.service_category} /></div>
                                            </div>                                        
                                            <div class="margin-bottom margin-xxsmall">
                                                <h3 class="heading-style-h5 card-heading-styles"><PrismicRichText field={item.service_name} /></h3>
                                            </div>
                                            <div class="paragraph"><PrismicRichText field={item.description} /></div>
                                        </div>
                                        <a href="#" class="card_leran_more_button w-button">Learn More </a>                                    
                                    </div>
                                    <div id="w-node-e52d77b3-c6f7-cd61-3c51-1dfbb0bde279-943e1f6c" class="layout399_card-image-wrapper"></div>
                                </div>
                            )
                        })}  
                    </div>
                )}
                {/* Variation without overlap card */}
                {slice_variation === "blockWithoutOverlapCard" && (
                    <div class="w-layout-grid layout399_row">
                        {services.map((item, index) => {
                            return(
                                <div class="layout399_card">
                                    <div class="layout399_card-content">
                                        <div class="layout399_card-content-top">                                       
                                            <div class="margin-bottom margin-xxsmall">
                                                <h3 class="heading-style-h5 card-heading-styles"><PrismicRichText field={item.service_name} /></h3>
                                            </div>
                                            <div class="paragraph"><PrismicRichText field={item.description} /></div>
                                        </div>                                       
                                    </div>
                                    <div id="w-node-e52d77b3-c6f7-cd61-3c51-1dfbb0bde279-943e1f6c" class="layout399_card-image-wrapper"></div>
                                </div>
                            )
                        })}  
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>
    )};

export default OurServices;