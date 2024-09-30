import { defineSymbol } from "drawing/defineSymbol"
import svgJson from "assets/generated/volt_meter.json"

const { paths, texts, bounds, refblocks } = svgJson

export default defineSymbol({
  primitives: [
    ...Object.values(paths),
    { ...texts.top1, anchor: "middle_left" },
    { ...texts.bottom1, anchor: "middle_left" },
    { ...texts.bottom2, anchor: "middle_left" },
  ] as any,
  ports: [
    { ...refblocks.left1, labels: ["1"] }, // TODO add more "standard" labels
    { ...refblocks.right1, labels: ["2"] }, // TODO add more "standard" labels
  ],
  size: { width: bounds.width, height: bounds.height },
  center: { x: bounds.centerX, y: bounds.centerY },
})
