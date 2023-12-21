import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const SolutionsComponent = ({
    title,
    sub_title,
    primary_solution,
    primary_solution_description,
    primary_solution_link,
    primary_solution_image,
    solutions
}) => {

    return (
        <section class="section_layout6 secondary-section-background">
        <div class="padding-global-2">
          <div class="container-large-2">
            <div class="padding-section-large-2">
              <div class="margin-bottom margin-xxlarge mb-60">
                <div class="max-width-large">
                  <div class="margin-bottom margin-small">
                    <h2 class="heading"><PrismicRichText field={title} /></h2>
                  </div>
                  <div class="text-size-medium-3"><PrismicRichText field={sub_title} /></div>
                </div>
              </div>
              <div class="w-layout-grid layout6_component mb-60 solutions-block">
                <div class="layout6_content">
                  <div class="margin-bottom margin-small">
                    <h3 class="heading-4"><PrismicRichText field={primary_solution} /></h3>
                  </div>
                  <div class="margin-bottom margin-medium">
                    <div class="text-size-medium-2"><PrismicRichText field={primary_solution_description} /></div>
                  </div>
                  <a href="#" class="card_leran_more_button w-button">Start Building Your App </a>
                </div>
                <div class="layout6_image-wrapper"><PrismicNextImage field={primary_solution_image} class="layout6_image"/></div>
              </div>
              {solutions.map((item) => {
                  return(
                    <div class="w-layout-grid layout6_component mb-60 solutions-block solutions-block-top-border">
                      <div class="layout6_content">
                        <div class="margin-bottom margin-small">
                          <h3 class="heading-4"><PrismicRichText field={item.solution} /></h3>
                        </div>
                        <div class="margin-bottom margin-medium">
                          <div class="text-size-medium-2"><PrismicRichText field={item.description} /></div>
                        </div>
                        <a href="#" class="card_leran_more_button w-button">Start Building Your App </a>
                      </div>
                      <div class="layout6_image-wrapper"><PrismicNextImage field={item.image} class="layout6_image"/></div>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </section>
       
    )};

export default SolutionsComponent;