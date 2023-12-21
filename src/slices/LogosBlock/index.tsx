import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from 'next/dynamic'
const Clients = dynamic(() => import('../../components/Clients'), { ssr: false })

/**
 * Props for `LogosBlock`.
 */
export type LogosBlockProps = SliceComponentProps<Content.LogosBlockSlice>;

/**
 * Component for "LogosBlock" Slices.
 */
const LogosBlock = ({ slice }: LogosBlockProps): JSX.Element => {
  return (
    <Clients
      title={slice.primary.title}
      sub_title={slice.primary.sub_title}
      clients={slice.items}
      backgroundColor={slice.primary.block_background} />
  );
};

export default LogosBlock;