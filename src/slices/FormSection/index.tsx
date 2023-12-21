import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FormSection`.
 */
export type FormSectionProps = SliceComponentProps<Content.FormSectionSlice>;

/**
 * Component for "FormSection" Slices.
 */
const FormSection = ({ slice }: FormSectionProps): JSX.Element => {
  return (
    <section className="section_contact6">
    <div className="padding-global-6">
      <div className="container-large">
        <div className="padding-section-large-9">
          <div className="w-layout-grid contact6_component">
            <div className="contact6_content">
              <div className="margin-bottom margin-medium">
                <div className="margin-bottom margin-small">
                  <h3 className="heading">Want to get your consulation?</h3>
                </div>
                <p className="text-size-medium-5 paragraph-5">Fill the form and we will get back to you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FormSection;
