import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const Clients = ({
    title,
    sub_title,
    clients,
    backgroundColor
}) => {
    const conditionClass = (backgroundColor == 'GrayTheme') ? 'secondary-section-background' : ''

    return (
        <section id="clients-section"  className={`section_logo1 ${conditionClass}`}>
        <div class="padding-global">
          <div class="container-large">
            <div class="padding-section-large">
              <div class="margin-bottom margin-xxlarge">
                <div>
                  <div class="margin-bottom margin-small">
                    <h2 class="heading"><PrismicRichText  field={title} /></h2>
                  </div>
                  <p class="text-size-medium"><PrismicRichText  field={sub_title} /></p>
                </div>
              </div>
              <div class="logo1_component">
              {clients.map((item) => {
                    return(
                        
                        <PrismicNextImage field={item.client_logo}  class='logo1_logo' />

                    )})}     
                    
                </div>
            </div>
          </div>
        </div>
      </section>
       
    )};

export default Clients;