import React from "react";
import ScrollFloat from "@/utils/ScrollFloat";

export default function RewardHeader() {
  return (
    <ScrollFloat
      containerClassName="text-center text-[#ffffff] font-orbitron font-extrabold text-3xl"
      textClassName=""
      animationDuration={1}
      stagger={0.03}
      ease="back.inOut(2)"
    >
      REWARD
    </ScrollFloat>
  );
}