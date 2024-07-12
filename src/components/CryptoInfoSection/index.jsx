import { Button, Img, Text } from "./..";
import React from "react";

export default function CryptoInfoSection({
  cryptoDescription = (
    <>
      #1: But what is crypto and…
      <br />
      web3?
    </>
  ),
  tasksCounterText = "11 Tasks",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center p-[0.50rem] border-[#ffffff0c] border border-solid bg-[#ffffff0c] flex-1 rounded-[12px]`}
    >
      <div className="flex w-full items-center gap-[1.00rem]">
        <Img
          src="images/img_4eeb6ff08f6640b.png"
          alt="Main Image"
          className="h-[5.00rem] w-[26%] rounded-[12px] object-cover"
        />
        <div className="flex flex-1 flex-col items-start gap-[0.75rem] self-end">
          <div className="flex self-stretch">
            <Text
              size="textxl"
              as="p"
              className="#00000066] 2px 0px text-shadow-[0px w-[76%] leading-[1.50rem] !text-[#ffffffcc]"
            >
              {cryptoDescription}
            </Text>
          </div>
          <div className="h-[0.06rem] w-[86%] rounded-[1px] bg-gradient-to-r from-[#ffffff26] via-[#00000000] via-[#ffffff26] to-[#00000000]" />
          <div className="flex items-center self-stretch">
            <Text
              as="p"
              className="#00000066] 2px 0px text-shadow-[0px !font-light !text-[#ffffff99]"
            >
              {tasksCounterText}
            </Text>
            <Img
              src="images/img_overlay_shadow.svg"
              alt="Shadow Image"
              className="ml-[0.50rem] h-[1.13rem] w-[74%] self-start rounded-lg"
            />
            <Button className="ml-[0.88rem] flex h-[1.50rem] w-[1.50rem] items-center justify-center rounded-[12px] border border-solid border-[#ffffff19] bg-[#ffffff0c] px-[0.38rem]">
              <Img src="images/img_checkmark.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
