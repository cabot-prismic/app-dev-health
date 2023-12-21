import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TimelineComponent from "@/components/TimelineComponent";

/**
 * Props for `TimeLineBlock`.
 */
export type TimeLineBlockProps =
  SliceComponentProps<Content.TimeLineBlockSlice>;

/**
 * Component for "TimeLineBlock" Slices.
 */
const TimeLineBlock = ({ slice }: TimeLineBlockProps): JSX.Element => {
  return (
    <TimelineComponent 
      title={slice.primary.title}
      description={slice.primary.description}
      time_lines={slice.items}
    />
  );
};

export default TimeLineBlock;
