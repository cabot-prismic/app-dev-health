import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next'

const HeroComponent = ({mainTitle,
        subTitle,
        menuTitle,
        bannerImage,
        slice_variation
    }) => {
    const conditionClass = (slice_variation == 'heroNoButtonSmallBanner') ? 'header38_image small-banner' : 'header38_image'
    return (
        <header class='section_header38'>
          <div class="w-layout-grid header38_component secondary-section-background">
            <div id="w-node-e2cf71a4-5668-07d0-b740-14d05abc1223-943e1f6c" class="header38_content">
              <div class="margin-bottom margin-small">
                <h1 class="heading"><PrismicRichText field={mainTitle} /></h1>
              </div>
              <div class="text-size-medium">
                  <PrismicRichText  field={subTitle} />
              </div>
              {menuTitle != '' && (
                <div class="margin-top margin-medium">
                  <div class="header38_form-block w-form">
                    <a href="#" class="button w-button"><PrismicRichText field={menuTitle} /></a>                
                  </div>
                </div> 
              )}
            </div> 
            <div class="header38_image-wrapper">
              <PrismicNextImage field={bannerImage}  className={`${conditionClass}`}/>        
            </div> 
          </div>
        </header>
    
       
    );
};

export default HeroComponent;
