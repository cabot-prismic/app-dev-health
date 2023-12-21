import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';


const KeepInTouch = (
    {
        title,
        description,
        image,
        keepInTouch,
        
    })=>{
        return( 
          <section class="section_blog-post-header1">
          <div class="padding-global-2">
            <div class="container-large-2">
              <div class="padding-section-large-6">
                <div class="blog-post-header1_title-wrapper">
                  <div class="margin-bottom margin-large">
                    <h1 class="heading"><PrismicRichText field={title} /></h1>
                    <div class="text-size-medium-3 margintopminimun"><PrismicRichText field={description} /></div>
                  </div>  
                </div>
                <PrismicNextImage field={image} class="image customimgblock" />
                <div class="blog4_component customboard">
                  <div class="blog4_list-wrapper">
                    <div class="w-layout-grid blog4_list place_over_banner_image">


                {/* repeatable block */}
                {keepInTouch.map((item, index) => {
                  return(
                      <div class="blog4_item">
                        <a href="#" class="blog4_item-link w-inline-block">
                          <div class="blog4_image-wrapper"></div>
                          <div class="blog4_item-content">
                            <div class="blog4_item-content-top">
                              <div class="blog4_meta-wrapper">
                                <div class="blog4_category">
                                  <div class="text-size-small-2 text-weight-semibold"><PrismicRichText field={item.categoryname} /></div>
                                </div>
                              </div>
                              <div class="blog4_title-wrapper">
                                <h3 class="heading-style-h5-3"><PrismicRichText field={item.blocktitle} /></h3>
                              </div>
                              {/* <PrismicRichText  class="text-size-regular-2" field={item.blockdescription} /> */}
                              <div class="paragraph"><PrismicRichText field={item.blockdescription} /></div>

                            </div>
                            <div class="blog4_button-wrapper">
                              <div class="button-2 is-link is-icon">
                                <div>Read more</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                       )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
    };
    export default KeepInTouch;
