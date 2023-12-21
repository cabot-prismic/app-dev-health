import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next';

const Blogs = ({
    title,
    sub_title,
    blogs,
    slice_variation
}) => {
    return (
        <section class="section_blog41">
            <div class="padding-global secondary-section-background">
            <div class="container-large">
                <div class="padding-section-large">
                <div class="blog41_component">

                {/* checking block variant */}
                {slice_variation !== "blogItems" && (
                
                    <div class="margin-bottom margin-xxlarge">
                    <div class="blog41_heading-wrapper">
                        <div class="blog41_heading">
                        <div class="max-width-large">
                            <div class="margin-bottom margin-xsmall">
                            <h2 class="heading"><PrismicRichText field={title} /></h2>
                            </div>
                            <div class="text-size-medium cutom-feature-subtitle"><PrismicRichText field={sub_title} /></div>
                        </div>
                        </div>
                        <div class="blog41_button-row hide-mobile-landscape">
                        <a href="#" class="button-2 is-secondary blog-view-button w-button">View all</a>
                        </div>
                    </div>
                    </div>
                )}

                    <div class="blog41_list-wrapper">
                        <div class="w-layout-grid blog41_list blogitem" >
                            {blogs.map((item) => {
                                return(
                                    <div class="blog41_item">
                                        <a href="#" class="blog41_image-link w-inline-block">
                                            <div class="blog41_image-wrapper">
                                                <PrismicNextImage field={item.image} class="blog41_image"/>                                               
                                            </div>
                                        </a>
                                        <a href="#" class="blog41_category-link w-inline-block">
                                            <div class="text-size-medium card-custom-padding"><PrismicRichText field={item.category} /></div>
                                        </a>
                                        <a href="#" class="blog41_title-link w-inline-block">
                                            <h3 class="heading-style-h5 card-custom-spacing"><PrismicRichText field={item.title} /></h3>
                                        </a>
                                        <div class="text-size-regular paragraph card-custom-spacing"><PrismicRichText field={item.description} />
                                        
                                        <a href="#" class="card_leran_more_button w-button">Learn More </a></div>
                                        
                                    </div>
                                )})} 
                        </div>
                    </div>
                    <div class="blog41_button-row show-mobile-landscape">
                    <a href="#" class="button-2 is-secondary blog-view-button button-mobile-view w-button">View all</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
      
    )};
    export default Blogs;