import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const CtaComponent = ({
    title,
    sub_title,
    image
}) => {
    return (
        <section class="section_cta39" style={{backgroundColor: '#ffffff'}}>
            <div class="padding-global-2">
            <div class="container-large">
                <div class="padding-section-large-2">
                <div class="w-layout-grid cta39_component">
                    <div class="w-layout-grid cta39_card-2">
                        <div class="cta39_card-content-2">
                            <div class="cta39_card-content-top">
                            <div class="margin-bottom margin-small">
                                <h2 class="heading"><PrismicRichText field={title} /></h2>
                            </div>
                            <div class="text-size-medium cutom-feature-subtitle"><PrismicRichText field={sub_title} /></div>
                            </div>
                            <div class="margin-top margin-medium">
                            <div class="button-group">
                                <a href="#" class="button w-button">Connect With Us</a>
                            </div>
                            </div>
                        </div>
                        <div class="cta39_image-wrapper-2">
                            <PrismicNextImage field={image} class="cta39_image" />
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
    )};
    export default CtaComponent;