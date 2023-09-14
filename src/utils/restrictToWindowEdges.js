import { restrictToWindowEdges } from "@dnd-kit/modifiers";

export default function restrictToWindowEdgesMargin(props) {
  if (props.windowRect) {
    props.windowRect = {
      ...props.windowRect,
      top: props.windowRect.top + 25,
      height: props.windowRect.height - 50,
      left: props.windowRect.left + 25,
      width: props.windowRect.width - 67,
    };
  }

  return restrictToWindowEdges(props);
}
