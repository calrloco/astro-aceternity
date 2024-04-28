import { GridBackground } from "@/ui/GridBackground";
import { MeteorsDemo } from "./MeteorsDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { FollowingPointerDemo } from "./FollowingPointerDemo";
import { TextRevealCardPreview } from "./TextRevealCardPreview";

export default function Hero() {
  return (
    <GridBackground>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex pl-10 items-center">
          <p className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
            Make your websites look 10x awesome
          </p>
        </div>
        <div className="flex justify-end relative items-center">
          <div className="relative mb-5">
            <AnimatedTooltipPreview />
            <MeteorsDemo />
          </div>
          <div className="absolute -bottom-[80%] left-[20px]">
            <TextRevealCardPreview />
          </div>
        </div>
      </div>
    </GridBackground>
  );
}
