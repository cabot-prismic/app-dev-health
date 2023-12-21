import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from '@prismicio/next';


/**
 * Props for `FooterInfo`.
 */
export type FooterInfoProps = SliceComponentProps<Content.FooterInfoSlice>;

/**
 * Component for "FooterInfo" Slices.
 */
const FooterInfo = ({ slice }: FooterInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="site-footer">
            <div className="padding-global-2">
                <div className="container-large-2">
                    <div className="padding-vertical padding-large">
                      <div className="footer5_newsletter-wrapper">
                          <div className="footer5_newsletter-text-wrapper">
                          <div className="footer-title"><PrismicRichText field={slice.primary.footer_title} /></div>
                          <div className="footer-sub-heading"><PrismicRichText field={slice.primary.footer_sub_title} /></div>
                          </div>
                          <PrismicNextLink  className="footer-button footer-button-mobile-view w-button" field={slice.primary.button_link}><PrismicRichText field={slice.primary.button_label} /></PrismicNextLink>
                      </div>               
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FooterInfo;
