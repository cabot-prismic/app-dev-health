import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const AboutDetails = ({
    title,
    description,
    countDetails
}) => {
    return (
        <section id="aboutOveriewSection" class="section_layout21" style={{backgroundColor: '#ffffff'}}>
        <div class="padding-global">
          <div class="container-large">
            <div class="padding-section-large">
              <h1 class="heading"><PrismicRichText field={title} /></h1>
              <div class="w-layout-grid layout21_component section1-aboutus">
                <div class="layout21_content"> 
                  <div class="margin-bottom margin-small"></div>
                  <div class="margin-bottom margin-small">
                    <div class="text-size-medium overview_para-height"><PrismicRichText field={description} /></div>
                  </div>
                </div>
                <div class="padding-section-large-3">
                  <div class="w-layout-grid layout25_component">
                    <div class="layout25_content">
                      <div class="w-layout-grid layout25_item-list">
                        {countDetails.map((item) => {
                            return( 
                                <div class="layout25_text-wrapper">
                                    <div class="margin-bottom margin-xxsmall">
                                        <div class="heading-style-h2 alignCenter"><>{item.count}</></div>
                                    </div>
                                    <div class="text-block-2"><PrismicRichText field={item.count_item_label} /></div>
                                </div>
                            )
                        })}                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    )};

export default AboutDetails;