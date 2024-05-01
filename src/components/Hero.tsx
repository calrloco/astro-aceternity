import { GridBackground } from "@/ui/GridBackground";
import { MeteorsDemo } from "./MeteorsDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { FollowingPointerDemo } from "./FollowingPointerDemo";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
import AnimatedPinDemo from "./3d-pin";
import { GlowingStarsBackgroundCardPreview } from "./GlowingStarsBackgroundCardPreview";

export default function Hero() {
  return (
    <GridBackground>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex pl-10 items-center">
          <p className="text-3xl text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
            Make your websites look 10x awesome
          </p>
        </div>
        <div className="lg:grid hidden grid-rows-2 gap-3 absolute left-1/2 pl-5">
          <div className="flex gap-3 items-center">
            <MeteorsDemo />
            <GlowingStarsBackgroundCardPreview />
          </div>
          <div className="row-start-2">
            <TextRevealCardPreview />
          </div>
        </div>
      </div>
    </GridBackground>
  );
}
