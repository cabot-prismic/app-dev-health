import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const Overview = ({
    title,
    description,
    featureImage
}) => {
    return (    
        <section id="overiew-section" class="section_layout21">
            <div class="padding-global">
            <div class="container-large">
                <div class="padding-section-large">
                <h1 class="heading margin60-bottom"><PrismicRichText  field={title} /></h1>
                <div class="w-layout-grid layout21_component">
                    <div class="layout21_content">
                    <div class="margin-bottom margin-small"></div>
                    <div class="margin-bottom margin-small">
                        <div class="text-size-medium overview_para"> <PrismicRichText  field={description} /> </div>
                    </div>
                    </div>
                    <div class="layout21_image-wrapper">
                        <PrismicNextImage field={featureImage}  class='layout21_image' />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )};

export default Overview;