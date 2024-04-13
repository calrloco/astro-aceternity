import { ThreeDCardDemo } from "@/components/3d-card";
import AnimatedPinDemo from "./3d-pin";
import EvervaultCardDemo from "./EvervaultCardDemo";
import { FollowerPointerCard } from "@/ui/following-pointer";

export function ThreeDSection() {
  return (
    <FollowerPointerCard
      title={
        <TitleComponent
          title={"Awesome 3d components"}
          avatar={blogContent.authorAvatar}
        />
      }
    >
      <ThreeDCardDemo />
      <AnimatedPinDemo />
      <EvervaultCardDemo />
    </FollowerPointerCard>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
