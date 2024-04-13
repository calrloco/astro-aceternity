import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
