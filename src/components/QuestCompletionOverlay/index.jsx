import { Img, Text } from "./..";
import React from "react";

export default function QuestCompletionOverlay({ completionText = "Complete all Essential quests", ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-[1.25rem] flex-1`}>
      <Text size="texts" as="p" className="!text-[#ffffff66]">
        {completionText}
      </Text>
      <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-[#ffffff19] bg-[#ffffff0c] px-[0.13rem] py-[0.25rem]">
        <Img src="images/img_checkmark.svg" alt="Checkmark Image" className="h-[0.38rem]" />
      </div>
    </div>
  );
}
