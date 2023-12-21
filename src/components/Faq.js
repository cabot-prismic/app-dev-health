import { PrismicRichText } from "@prismicio/react";


const Faq = ({
    title,
    sub_title,
    qa
}) => {
    return(
<section class="sec_faq5">
    <div class="padding-global-8">
      <div class="container-large">
        <div class="padding-section-large-11">
          <div class="margin-bottom margin-xxlarge">
            <div class="max-width-large-6">
              <div class="margin-bottom margin-small">
                <h3 class="heading"><PrismicRichText field={title} /></h3>
              </div>
              <PrismicRichText class="text-size-medium-7 text-size-medium" field={sub_title} />
            </div>
          </div>
          <div class="faq5_component">
            <div class="w-layout-grid faq5_list">
                
            {/* repeatable block */}    
            {qa.map((item, index) => {
                  return(
              <div class="faq5_accordion-2">
                <div data-w-id="e5adf380-8efa-f262-94d1-a8b0c7f0670d" class="faq5_question-2">
                  <div class="faq5_icon-wrapper-2">
                    <div class="icon-embed-small w-embed"><svg width="100%" height="100%" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                      </svg></div>
                  </div>
                  <div class="text-block-5"><PrismicRichText field={item.question} /></div>
                </div>
                <div style={{height:'0px'}} class="faq5_answer-2">
                  <div class="margin-bottom margin-small">
                    <div class="max-width-large-6">
                      <PrismicRichText class="paragraph" field={item.answer} />
                    </div>
                  </div>
                </div>
              </div>
              )
            })}

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
    )
}
export default Faq;
