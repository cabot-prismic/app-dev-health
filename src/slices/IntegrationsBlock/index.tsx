import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Integrations from "@/components/Integrations";

/**
 * Props for `IntegrationsBlock`.
 */
export type IntegrationsBlockProps =
  SliceComponentProps<Content.IntegrationsBlockSlice>;

/**
 * Component for "IntegrationsBlock" Slices.
 */
const IntegrationsBlock = ({ slice }: IntegrationsBlockProps): JSX.Element => {
  return (
    <Integrations
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      integrations={slice.items} />
  );
};

export default IntegrationsBlock;
