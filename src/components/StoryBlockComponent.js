import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const StoryBlockComponent = ({
    title,
    description,
    image,
    category,
    heading,
    subheading,
    author,
    publish_label,
    author_image,
    author_name,
    publish_date,
    slice_variation

}) => {
    return(
        <section class="blog-highlight">
        <div class="padding-global-2">
          
          <div class="container-large">
            <div class="padding-section-medium">
            <div class="blog-post-header1_title-wrapper">
                    <div class="margin-bottom margin-large">
                      <h1 class="heading"><PrismicRichText field={title} /></h1>
                      <div class="text-size-medium-3 margintopminimun"><PrismicRichText field={description} /></div>
                    </div>
                  </div>
              <div class=" header88_component">
                <div class="header88_card">
                  <div class="header88_background-image-wrapper">
                    <div class="image-overlay-layer"></div> <PrismicNextImage class="header88_background-image" field={image} />  
                   
                  </div>
                  <div class="card-overlay-content">
                    <div class="max-width-medium">
                      <div class="margin-bottom margin-small customsubheading">
                        <PrismicRichText class="text-size-medium-4 text-color-white subheading" field={category} />
                      </div>
                      <div class="margin-bottom margin-small">
                        <div class="margin-top margin-small">
                          <h1 class="text-color-white"><PrismicRichText field={heading} /></h1>
                          <a href="#" class="button-2 is-link is-icon w-inline-block">
                            <div class="icon-embed-xsmall-6 w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 24 24" fill="none" preserveaspectratio="xMidYMid meet" aria-hidden="true" role="img" >
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg></div>
                          </a>
                        </div>
                      </div>
                     <PrismicRichText class="text-size-medium-4 text-color-white custom-subtitle" field={subheading} />
                    </div>
                    
                    {/* slicevariation */}
                {slice_variation !== "withoutAuthor" && (

                    <div class="margin-top margin-medium">
                      <div class="blog45_author-wrapper">
                        <div class="blog45_author-image-wrapper">
                        <PrismicNextImage field={author_image} class="blog45_author-image" />
                            </div>
                        <div class="blog45_author-text">
                          <div class="text-size-small-2 text-weight-semibold"><PrismicRichText field={author} /></div>
                          <div class="blog45_date-wrapper">
                            <div class="text-size-small-2"><PrismicRichText field={author_name} /></div>
                          </div>
                        </div>
                      </div>
                      <div class="blog45_author-wrapper">
                        <div class="blog45_author-text">
                          <div class="text-size-small-2 text-weight-semibold"><PrismicRichText field={publish_label} /></div>
                          <div class="blog45_date-wrapper">
                            <div class="text-size-small-2"><>{publish_date}</></div>
                          </div>
                        </div>
                      </div>
                    </div>
                )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
    };
export default StoryBlockComponent
