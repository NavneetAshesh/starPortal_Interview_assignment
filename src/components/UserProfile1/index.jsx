import { Text, Img, Button } from "./..";
import React from "react";

export default function UserProfile1({
  userImage = "images/img_c7caa8a1de0d45f.png",
  additionalImage = "images/img_c7caa8a1de0d45f_140x282.png",
  retirementPlanText = (
    <>
      How to plan your
      <br />
      retirement with crypto?
    </>
  ),
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[26.25rem] w-[24%] md:w-full border-[#ffffff33] border border-solid bg-[#ffffff0c] relative rounded-[16px]`}
    >
      <Img
        src={userImage}
        alt="Background Image"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[26.13rem] flex-1 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end gap-[13.88rem]">
        <Button className="mr-[1.00rem] flex h-[2.50rem] w-[2.50rem] items-center justify-center rounded-[20px] border border-solid border-[#ffffff33] bg-[#00000066] px-[0.63rem]">
          <Img src="images/img_thumbs_up.svg" />
        </Button>
        <div className="relative h-[8.75rem] self-stretch">
          <Img src={additionalImage} alt="Feature Image" className="h-[8.75rem] w-full flex-1 object-cover" />
          <Text
            size="text2xl"
            as="p"
            className="#00000019] 5px 0px text-shadow-[0px absolute bottom-[0.75rem] right-[0.00rem] m-auto leading-[1.88rem] tracking-[0.00rem] !text-[#ffffff99]"
          >
            {retirementPlanText}
          </Text>
        </div>
      </div>
    </div>
  );
}
