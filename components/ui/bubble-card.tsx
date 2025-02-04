import React, {FC, ReactNode } from "react";

interface BubbleCardProps {
  children: ReactNode;
  featureDescription?: any;
  featureTitle?: any;
}

const BubbleCard: FC<BubbleCardProps> =  ({children, featureTitle, featureDescription}) => {
    return (
    <div className="w-full h-full duration-500 group overflow-hidden relative rounded  text-neutral-50 p-4 flex flex-col justify-evenly">
      <div className="absolute blur opacity-30 duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-32 group-hover:translate-y-32 group-hover:opacity-50 bg-[var(--gradient-color-2)] right-1 -bottom-24"></div>
      <div className="absolute blur opacity-50 duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[var(--dark-bg)] right-1 -top-12"></div>
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-[var(--gradient-color-1)] rounded-full group-hover:-translate-x-12"></div>
      <div className="z-10 flex flex-col justify-evenly w-full h-full">
      <div className="flex justify-center">{children}</div>
        <span className="text-2xl font-bold">{featureTitle}</span>
        <p>
          {featureDescription}
        </p>
       
      </div>
    </div>
  );
};

export default BubbleCard;
