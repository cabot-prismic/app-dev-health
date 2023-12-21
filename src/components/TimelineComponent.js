import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const TimelineComponent = ({title, description, time_lines}) => {
    return (       
        <section class="timeline_wrapper" > 
            <div class="section_layout352">    
            <div class="layout352_component">
                <div class="layout352_heading">
                <div class="padding-global-2">
                    <div class="container-small">
                    <div class="padding-section-large-5">
                        <div class="text-align-center">                       
                            <div class="margin-bottom margin-small">
                                <h2 class="heading"><PrismicRichText field={title} /></h2>
                            </div>
                            <div class="text-size-medium"><PrismicRichText field={description} /></div>                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="layout352_timeline">
                    <div class="padding-global-2">
                        <div class="container-large-3">
                            <div class="layout352_layout">
                                <div class="layout352_progress">
                                    <div class="layout352_progress-bar"></div>
                                    <div class="layout352_fade-overlay-top"></div>
                                    <div class="layout352_fade-overlay-bottom"></div>
                                </div>
                                {time_lines.map((item) => {
                                    return( 
                                        <div data-w-id="ebc5beb0-b003-8b46-16c2-cfdf964c4f41" class="layout352_item">
                                            <div id="w-node-ebc5beb0-b003-8b46-16c2-cfdf964c4f42-2607e3c3" class="layout352_left">
                                                <h3 class="layout352_date-text"><>{item.year}</></h3>
                                            </div>
                                            <div id="w-node-ebc5beb0-b003-8b46-16c2-cfdf964c4f45-2607e3c3" class="layout352_centre">
                                                <div class="layout352_circle"></div>
                                            </div>
                                            <div id="w-node-ebc5beb0-b003-8b46-16c2-cfdf964c4f47-2607e3c3" class="layout352_right">
                                                <div id="w-node-ebc5beb0-b003-8b46-16c2-cfdf964c4f48-2607e3c3" class="margin-bottom margin-xlarge">
                                                <div class="text-size-medium-2"><PrismicRichText field={item.description} /></div>
                                                <div class="margin-top margin-medium">
                                                </div>
                                                </div>
                                                <div class="layout352_image-wrapper"><img src="images/placeholder-image.svg" loading="lazy" alt="" /></div>
                                            </div>
                                        </div>
                                    )
                                })}     
                                <div class="layout352_progress">
                                    <div class="layout352_progress-bar"></div>
                                    <div class="layout352_fade-overlay-top"></div>
                                    <div class="layout352_fade-overlay-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default TimelineComponent;