import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex self-stretch justify-center items-center p-[0.63rem] border-[#ffffff26] border-b border-solid bg-[#0000003f]`}
    >
      <div className="mx-auto flex w-full max-w-[78.25rem] items-center justify-between">
        <Img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[2.63rem] w-[6.00rem] object-contain"
        />
        <nav className="flex flex-1 items-center justify-between ml-[2.50rem] md:flex-col md:ml-0 md:self-stretch md:w-full">
          <ul className="flex items-center gap-[1.63rem] md:flex-col md:items-center md:gap-[1rem]">
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.00rem] !text-[#ffffffb2]">
                  Compass
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.00rem] !text-[#ffffffb2]">
                  Explore
                </Text>
              </a>
            </li>
            <li className="flex items-center gap-[0.38rem]">
              <Text as="p" className="tracking-[0.00rem] !text-[#ffffff]">
                Academy
              </Text>
              <Text
                size="textxs"
                as="p"
                className="flex justify-center rounded-lg bg-[#6435e9] px-[0.38rem] tracking-[0.00rem] !text-[#ffffff]"
              >
                New
              </Text>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.00rem] !text-[#ffffffb2]">
                  NFTs
                </Text>
              </a>
            </li>
            <li>
              <a href="#">
                <Text as="p" className="tracking-[0.00rem] !text-[#ffffffb2]">
                  For Projects
                </Text>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center w-full gap-[1rem] md:mt-4 md:flex-col md:w-auto">
            <Input
              name="Search Field"
              placeholder="Search for ecosystems, trending quests etc."
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e.target.value)}
              prefix={
                <div className="flex h-[1.00rem] w-[0.88rem] items-center justify-center">
                  <Img
                    src="images/img_rewind.png"
                    alt="Rewind"
                    className="h-[0.06rem] w-[0.06rem] cursor-pointer"
                  />
                </div>
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue("")}
                    height={16}
                    width={16}
                  />
                ) : null
              }
              className="h-[2.63rem] w-[60%] min-w-[300px] items-center justify-center gap-[0.63rem] rounded-[20px] border border-solid border-[#ffffff0c] bg-[#ffffff11] pl-[1.00rem] pr-[2.13rem] text-[0.88rem] tracking-[0.00rem] text-[#ffffff66] md:w-[80%]"
            />
            <a href="#">
              <Button className="flex h-[2.63rem] w-[2.63rem] items-center justify-center rounded-[20px] border border-solid border-[#fa8922] bg-[#3c208c33] px-[0.75rem]">
                <Img src="images/img_upload.svg" />
              </Button>
            </a>
            <Button className="flex h-[2.00rem] min-w-[5.75rem] flex-row items-center justify-center rounded bg-[#ffffff] px-[1.38rem] text-center text-[0.94rem] font-medium text-[#000000] sm:px-[1.00rem]">
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
