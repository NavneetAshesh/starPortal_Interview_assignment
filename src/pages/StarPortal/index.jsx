import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import CryptoInfoSection from "../../components/CryptoInfoSection";
import Header from "../../components/Header";
import QuestCompletionOverlay from "../../components/QuestCompletionOverlay";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const cryptoGuidesList = [
  {
    userImage: "images/img_c7caa8a1de0d45f.png",
    thumbsUpButton: "images/img_thumbs_up.svg",
    additionalImage: "images/img_c7caa8a1de0d45f_140x282.png",
    retirementPlanText: (
      <>
        How to plan your
        <br />
        retirement with crypto?
      </>
    ),
  },
  {
    userImage: "images/img_58615645160e4aa.png",
    thumbsUpButton: "images/img_thumbs_up.svg",
    additionalImage: "images/img_58615645160e4aa_140x282.png",
    retirementPlanText: (
      <>
        How to plan your
        <br />
        retirement with crypto?
      </>
    ),
  },
  {
    userImage: "images/img_493018d95dd2409.png",
    thumbsUpButton: "images/img_thumbs_up.svg",
    additionalImage: "images/img_493018d95dd2409_140x282.png",
    retirementPlanText: (
      <>
        How to plan your
        <br />
        retirement with crypto?
      </>
    ),
  },
  {
    userImage: "images/img_a9e03cd73a494e0.png",
    thumbsUpButton: "images/img_thumbs_up.svg",
    additionalImage: "images/img_a9e03cd73a494e0_140x282.png",
    retirementPlanText: (
      <>
        How to plan your
        <br />
        retirement with crypto?
      </>
    ),
  },
];
const cryptoTasksList = [
  {
    mainImage: "images/img_4eeb6ff08f6640b.png",
    cryptoDescription: (
      <>
        #1: But what is crypto and…
        <br />
        web3?
      </>
    ),
    tasksCounterText: "11 Tasks",
    shadowImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
  {
    mainImage: "images/img_4eeb6ff08f6640b.png",
    cryptoDescription: (
      <>
        #1: But what is crypto and…
        <br />
        web3?
      </>
    ),
    tasksCounterText: "11 Tasks",
    shadowImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
  {
    mainImage: "images/img_4eeb6ff08f6640b.png",
    cryptoDescription: (
      <>
        #1: But what is crypto and…
        <br />
        web3?
      </>
    ),
    tasksCounterText: "11 Tasks",
    shadowImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
];
const airdropTasksList = [
  {
    userImage: "images/img_6bb30883bc50428.png",
    userDescription: (
      <>
        #1: What are airdrops, and ho…
        <br />
        can they change your life?
      </>
    ),
    tasksCounterText: "7 Tasks",
    taskImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
  {
    userImage: "images/img_c8d2455592d04b4.png",
    userDescription: "#2: Types of airdrops",
    tasksCounterText: "10 Tasks",
    taskImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
  {
    userImage: "images/img_d59b0ff5b37141b.png",
    userDescription: (
      <>
        #3: How to earn huge $$$ fro…
        <br />
        airdrops?
      </>
    ),
    tasksCounterText: "11 Tasks",
    taskImage: "images/img_overlay_shadow.svg",
    checkmarkButton: "images/img_checkmark.svg",
  },
];

export default function StarPortalPage() {
  return (
    <>
      <Helmet>
        <title>Web3 Earn Guide - Learn and Earn Crypto with Intract</title>
        <meta
          name="description"
          content="Join the Intract community and dive into our Web3 Earn Guide. Explore quests, earn crypto, and connect with top earners. Start your journey to earning over $100 million in web3 with exclusive benefits and rewards."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-[#ffffff]">
        <div className="flex flex-col items-center bg-[#080808]">
          {/* header section */}
          <Header />

          {/* hero section */}
          <div className="relative h-[179.88rem] self-stretch">
            {/* features section */}
            <div className="absolute left-0 right-0 top-[0.00rem] m-auto flex flex-1 flex-col items-center">
              {/* ambassador program section */}
              <div className="flex flex-col items-center self-stretch">
                {/* quests section */}
                <div className="self-stretch">
                  {/* certification section */}
                  <div className="flex flex-col items-end">
                    {/* community highlight section */}
                    <div className="flex flex-col items-center self-stretch">
                      <div className="flex flex-col items-end self-stretch">
                        <div className="flex h-[56.75rem] items-start justify-center self-stretch bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat py-[15.75rem] lg:h-auto lg:py-[2.00rem] md:h-auto md:py-[1.25rem] sm:py-[1.00rem]">
                          <div className="container-xs mb-[9.00rem] flex justify-center px-[3.50rem] lg:p-[1.25rem] md:p-[1.25rem] md:px-[1.25rem] sm:px-[1.00rem]">
                            <div className="flex w-[52%] flex-col items-center lg:w-full md:w-full">
                              <Img
                                src="images/academy-animated-logo-57b2ae61.gif"
                                alt="Animation Image"
                                className="h-[6.13rem] w-[40%] object-cover bg-transparent"
                              />
                              <Text
                                size="textxl"
                                as="p"
                                className="mt-[1.25rem] text-center leading-[1.50rem] !text-[#ffffffcc]"
                              >
                                <span className="text-[#ffffffcc]">
                                  Intract users
                                </span>
                                <span className="text-[#ffffff66]">
                                  &nbsp;have together made more than&nbsp;
                                </span>
                                <span className="text-[#ffffffcc]">
                                  $100 million
                                </span>
                                <span className="text-[#ffffff66]">
                                  <>
                                    &nbsp;in web3.
                                    <br />
                                    Join them and learn how to earn crypto!
                                  </>
                                </span>
                              </Text>
                              <Button
                                rightIcon={
                                  <Img
                                    src="images/img_arrowright1c96f4aesvg.svg"
                                    alt="Arrow-right-1c96f4ae.svg"
                                    className="h-[0.00rem] h-[0.75rem] w-[0.06rem] w-[1.00rem]"
                                  />
                                }
                                className="mt-[3.00rem] flex h-[2.38rem] min-w-[13.25rem] flex-row items-center justify-center gap-[0.38rem] rounded-lg border border-solid border-[#ffffff19] bg-[#6435e9] px-[2.06rem] text-center text-[0.88rem] text-[#ffffffcc] sm:px-[1.00rem]"
                              >
                                Get Started
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="relative mr-[1.00rem] mt-[-2.38rem] flex w-[16%] flex-col gap-[1.25rem] rounded-lg border border-solid border-[#ffffff33] bg-[#17171799] px-[0.50rem] py-[0.63rem] shadow-[0_4px_4px_0_#0000003f] lg:mr-0 lg:w-full md:mr-0 md:w-full">
                          <div className="flex items-start justify-between gap-[1.25rem]">
                            <div className="mt-[0.25rem] flex w-[80%] justify-center self-end">
                              <div className="flex w-full flex-col items-center">
                                <Text
                                  as="p"
                                  className="!font-medium leading-[1.31rem] !text-[#ffffff]"
                                >
                                  <span className="text-[#ffffff]">
                                    Exclusive benefits, rewards ?
                                  </span>
                                  <span className="font-light text-[#ffffffbf]">
                                    <>
                                      ? & a<br />
                                      chance to connect with a&nbsp;
                                    </>
                                  </span>
                                </Text>
                                <div className="relative mt-[-1.25rem] flex flex-col items-end self-stretch">
                                  <Text
                                    as="p"
                                    className="mr-[1.50rem] !font-medium !text-[#ffffff] lg:mr-0 md:mr-0"
                                  >
                                    10k+
                                  </Text>
                                  <div className="flex flex-col items-start self-stretch">
                                    <Text
                                      as="p"
                                      className="!font-medium !text-[#ffffff]"
                                    >
                                      ambassador community 🔥
                                    </Text>
                                    <Text
                                      as="p"
                                      className="relative mr-[3.00rem] mt-[-1.25rem] self-end !font-light !text-[#ffffffbf] lg:mr-0 md:mr-0"
                                    >
                                      .
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_button.svg"
                              alt="Button"
                              className="h-[1.25rem] w-[1.25rem]"
                            />
                          </div>
                          <div className="relative mx-[0.50rem] mb-[0.50rem] h-[4.00rem] lg:mx-0 lg:h-auto md:mx-0 md:h-auto">
                            <Text
                              as="p"
                              className="!font-light leading-[1.31rem] !text-[#ffffffbf]"
                            >
                              <>
                                The Intract Community Ambassador
                                <br />
                                Program with a NEW bounty board
                                <br />
                                is live on{" "}
                              </>
                            </Text>
                            <div className="absolute bottom-[0.00rem] left-0 right-0 m-auto flex flex-wrap items-center">
                              <Text
                                as="p"
                                className="!font-medium !text-[#ffffff]"
                              >
                                Discord{" "}
                              </Text>
                              <Img
                                src="images/img_link.svg"
                                alt="Link"
                                className="h-[0.75rem] w-[0.75rem]"
                              />
                              <Text
                                as="p"
                                className="!font-light !text-[#ffffffbf]"
                              >
                                .
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-xs relative z-[1] mt-[-5.88rem] flex flex-col items-center px-[3.50rem] lg:p-[1.25rem] md:p-[1.25rem] md:px-[1.25rem] sm:px-[1.00rem]">
                        <div className="flex w-[88%] items-center justify-end lg:w-full md:w-full md:flex-col">
                          <Img
                            src="images/img_svg.svg"
                            alt="Svg Image"
                            className="relative z-[2] h-[17.13rem] w-[72%] md:w-full"
                          />
                          <div className="relative mb-[1.00rem] ml-[-2.25rem] w-[16%] self-end rounded-[22px] border border-solid border-[#ffffff33] bg-[#131313] p-[0.38rem] md:ml-0 md:w-full md:self-auto">
                            <Img
                              src="images/img_1b1912563b96439.png"
                              alt="Decorative Image"
                              className="h-[10.25rem] w-full rounded-[20px] object-cover lg:h-auto md:h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[3] mr-[6.25rem] mt-[-5.00rem] flex h-[20.50rem] w-[42%] items-start justify-center bg-[url(/public/images/img_group_8.svg)] bg-cover bg-no-repeat px-[3.50rem] py-[5.00rem] lg:mr-0 lg:h-auto lg:w-full lg:py-[2.00rem] md:mr-0 md:h-auto md:w-full md:p-[1.25rem] sm:p-[1.00rem]">
                      <div className="mb-[2.25rem] flex w-[44%] flex-col items-start gap-[0.75rem] lg:w-full md:w-full">
                        <Text
                          size="textxl"
                          as="p"
                          className="#00000066] 2px 0px text-shadow-[0px !text-[#ffffff99]"
                        >
                          Intract Certified: Learner NFT
                        </Text>
                        <Text
                          as="p"
                          className="#00000066] 2px 0px text-shadow-[0px leading-[1.25rem] !text-[#ffffff33]"
                        >
                          <>
                            Your crypto black-belt
                            <br />
                            certificate
                          </>
                        </Text>
                        <Button className="flex h-[2.63rem] min-w-[10.00rem] flex-row items-center justify-center rounded-lg border border-solid border-[#ffffff0c] bg-[#ffffff0c] px-[2.06rem] text-center text-[1.00rem] text-[#ffffff66] lg:text-[0.81rem] sm:px-[1.00rem]">
                          Claim
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* quest details section */}
                  <div className="relative z-[4] mx-[6.63rem] mt-[-7.38rem] flex flex-col items-center lg:mx-0 md:mx-0">
                    {/* quest list section */}
                    <div className="relative h-[57.50rem] content-end self-stretch lg:h-auto md:h-auto">
                      <div className="flex flex-1 flex-col">
                        <Img
                          src="images/img_svg_black_900_02.svg"
                          alt="Svg Image"
                          className="ml-[24.63rem] h-[28.50rem] w-[20%] lg:ml-0 md:ml-0"
                        />
                        <div className="relative mt-[-2.63rem] flex flex-col px-[1.13rem]">
                          <Img
                            src="images/img_vector.svg"
                            alt="Vector Image"
                            className="mt-[1.63rem] h-[13.00rem] w-[14%]"
                          />
                          <div className="relative mt-[-7.63rem]">
                            <div className="flex flex-col items-start">
                              <Text
                                size="textxl"
                                as="p"
                                className="#00000066] 2px 0px text-shadow-[0px ml-[15.63rem] !text-[#ffffff99] lg:ml-0 md:ml-0"
                              >
                                Intract Certified: Earner NFT
                              </Text>
                              <Text
                                as="p"
                                className="#00000066] 2px 0px text-shadow-[0px ml-[15.63rem] mt-[0.50rem] leading-[1.25rem] !text-[#ffffff33] lg:ml-0 md:ml-0"
                              >
                                <>
                                  Your proof of
                                  <br />
                                  airdrop expertise
                                </>
                              </Text>
                              <div className="relative mt-[1.00rem] h-[10.50rem] self-stretch lg:h-auto md:h-auto">
                                <div className="flex flex-1 flex-col items-start">
                                  <Button className="relative z-[5] ml-[15.63rem] flex h-[2.63rem] min-w-[10.00rem] flex-row items-center justify-center rounded-lg border border-solid border-[#ffffff0c] bg-[#ffffff0c] px-[2.06rem] text-center text-[1.00rem] text-[#ffffff66] lg:ml-0 lg:text-[0.81rem] md:ml-0 sm:px-[1.00rem]">
                                    Claim
                                  </Button>
                                  <div className="relative mt-[-0.63rem] flex h-[8.50rem] w-[50%] items-end justify-center bg-[url(/public/images/img_group_9.svg)] bg-cover bg-no-repeat px-[3.50rem] lg:h-auto lg:w-full md:h-auto md:w-full md:px-[1.25rem] sm:px-[1.00rem]">
                                    <div className="mt-[5.50rem] flex w-[52%] flex-col gap-[0.38rem] lg:w-full md:w-full">
                                      <div className="flex items-center justify-end gap-[0.44rem]">
                                        <Img
                                          src="images/img_settings.svg"
                                          alt="Settings Image"
                                          className="h-[1.00rem] w-[16%]"
                                        />
                                        <Img
                                          src="images/img_television.svg"
                                          alt="Television Image"
                                          className="h-[1.13rem] w-[14%]"
                                        />
                                      </div>
                                      <div className="flex items-center justify-between gap-[1.25rem]">
                                        <Img
                                          src="images/img_arrow_right.svg"
                                          alt="Arrow Image"
                                          className="ml-[4.88rem] h-[1.13rem]"
                                        />
                                        <Img
                                          src="images/img_vector_white_a700.svg"
                                          alt="White Vector"
                                          className="h-[0.88rem] w-[42%] self-end"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute left-[31%] top-[1.38rem] m-auto w-[5%] rounded-[40px] bg-[#ffffff0c]">
                                  <div className="h-[4.88rem] bg-[url(/public/images/img_group_10.svg)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                                    <div className="h-[4.88rem] bg-[url(/public/images/img_group_11.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                                      <div className="h-[4.88rem] bg-[url(/public/images/img_group_11.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                                        <div className="relative h-[4.50rem] lg:h-auto md:h-auto">
                                          <Img
                                            src="images/img_vector_72x72.png"
                                            alt="Vector Five"
                                            className="h-[4.50rem] w-full rounded-[36px] object-cover"
                                          />
                                          <Img
                                            src="images/img_group_10.svg"
                                            alt="Contrast Image"
                                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[4.38rem] w-[4.38rem]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_vector_12x124.png"
                                alt="Vector Seven"
                                className="ml-[16.00rem] mt-[0.25rem] h-[0.75rem] w-[8%] object-cover lg:ml-0 md:ml-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-0 right-0 top-[10%] m-auto flex w-[40%] flex-col items-end">
                        <div className="flex w-[76%] justify-end rounded-tl-[24px] rounded-tr-[24px] bg-[#ffffff0c] lg:w-full lg:p-[1.25rem] md:w-full md:p-[1.25rem]">
                          <div className="flex w-full items-center justify-center rounded-tl-[24px] rounded-tr-[24px] border-l border-r border-t border-solid border-[#ffffff0c] p-[1.00rem] sm:flex-col">
                            <div className="relative my-[0.38rem] h-[11.25rem] w-[34%] rounded-[16px] border border-solid border-[#ffffff33] bg-[#ffffff0c] p-[0.50rem] lg:h-auto md:h-auto sm:w-full">
                              <Img
                                src="images/img_85903745c34d42d.png"
                                alt="Overlay Image"
                                className="h-[10.13rem] flex-1 rounded-[12px] object-cover"
                              />
                              <Button className="absolute bottom-[1.06rem] left-0 right-0 m-auto flex h-[2.50rem] min-w-[6.50rem] flex-row items-center justify-center rounded-[20px] border border-solid border-[#ffffff33] bg-[#00000066] px-[1.44rem] text-center text-[0.88rem] text-[#ffffff] shadow-[0_0_5px_0_#00000019] sm:px-[1.00rem]">
                                4 Quests
                              </Button>
                            </div>
                            <div className="ml-[1.50rem] flex flex-1 flex-col items-start sm:ml-0 sm:self-stretch">
                              <Text
                                size="text2xl"
                                as="p"
                                className="!text-[#ffffff]"
                              >
                                Introduction to Airdrops
                              </Text>
                              <Text
                                as="p"
                                className="mt-[0.50rem] !text-[#ffffff66]"
                              >
                                Your best bet to make it big in crypto!
                              </Text>
                              <div className="mt-[1.00rem] h-[0.06rem] self-stretch rounded-[1px] bg-gradient-to-r from-[#ffffff26] via-[#00000000] via-[#ffffff26] to-[#00000000]" />
                              <Button
                                leftIcon={
                                  <Img
                                    src="images/img_close.svg"
                                    alt="Close"
                                    className="h-[0.06rem] h-[1.00rem] w-[0.06rem] w-[1.13rem]"
                                  />
                                }
                                className="mt-[1.00rem] flex h-[2.00rem] min-w-[6.63rem] flex-row items-center justify-center gap-[0.25rem] rounded-[16px] border border-solid border-[#ffffff0c] bg-[#ffffff11] px-[0.69rem] text-center text-[0.88rem] text-[#ffffffcc]"
                              >
                                1040 XPs
                              </Button>
                            </div>
                            <Img
                              src="images/img_icon.svg"
                              alt="Triangle Icon"
                              className="ml-[0.63rem] h-[1.25rem] w-[1.25rem] self-start sm:ml-0 sm:w-full sm:self-auto"
                            />
                          </div>
                        </div>
                        <div className="flex w-[76%] flex-col gap-[0.50rem] rounded-bl-[24px] rounded-br-[24px] border-t border-solid border-[#ffffff19] bg-[#101010] px-[1.50rem] lg:w-full md:w-full sm:px-[1.00rem]">
                          <div className="mt-[1.50rem] flex flex-col gap-[0.50rem]">
                            <Suspense fallback={<div>Loading feed...</div>}>
                              {airdropTasksList.map((d, index) => (
                                <UserProfile
                                  {...d}
                                  key={"listOverlay" + index}
                                />
                              ))}
                            </Suspense>
                          </div>
                          <div className="h-[0.38rem] rounded-[3px] border border-solid border-[#ffffff0c] bg-[#ffffff0c]" />
                        </div>
                      </div>
                      <Button className="absolute left-[19%] top-[42%] m-auto flex h-[3.00rem] w-[3.00rem] items-center justify-center rounded-[24px] border border-solid border-[#ffffff33] bg-[#ffffff0c] px-[0.75rem]">
                        <Img src="images/img_checkmark.svg" />
                      </Button>
                      <div className="absolute bottom-[32%] left-[16%] m-auto w-[8%] rounded-[22px] border border-solid border-[#ffffff33] bg-[#131313] p-[0.38rem]">
                        <Img
                          src="images/img_83bd377d91ff441.png"
                          alt="Unique Image"
                          className="h-[10.25rem] w-full rounded-[20px] object-cover lg:h-auto md:h-auto"
                        />
                      </div>
                      <Button className="absolute bottom-[30%] left-[23%] m-auto flex h-[3.00rem] w-[3.00rem] items-center justify-center rounded-[24px] border border-solid border-[#ffffff33] bg-[#131313] px-[0.88rem]">
                        <Img src="images/img_location.svg" />
                      </Button>
                    </div>
                    <div className="relative z-[6] mt-[-4.00rem] flex w-[18%] flex-col gap-[1.00rem] rounded-[12px] border border-solid border-[#ffffff0c] bg-[#ffffff0c] px-[0.63rem] py-[0.75rem] lg:w-full md:w-full">
                      <div className="flex gap-[0.50rem]">
                        <Button className="flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-[10px] bg-[#fa892219] px-[0.13rem]">
                          <Img src="images/img_clock.svg" />
                        </Button>
                        <Text
                          as="p"
                          className="tracking-[0.00rem] !text-[#ffffff66]"
                        >
                          Reward unlocks in
                        </Text>
                      </div>
                      <div className="h-[0.13rem] rounded-[1px] bg-[#ffffff26]" />
                      <div className="relative h-[5.38rem] rounded-lg border border-solid border-[#ffffff19] bg-[#00000033] shadow-[inset_-2px_-2px_5px_1px_#00000066] lg:h-auto md:h-auto">
                        <Img
                          src="images/img_dotbg_149528a0_png.png"
                          alt="Background Image"
                          className="h-[5.25rem] flex-1 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-[1.25rem] px-[1.50rem] sm:px-[1.00rem]">
                          <div className="flex w-[18%] flex-col items-center">
                            <Heading
                              as="h1"
                              className="#0000007f] 1px 1px text-shadow-[0px w-[2.63rem] tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]"
                            >
                              00
                            </Heading>
                            <Text
                              as="p"
                              className="#0000007f] 1px 1px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff33]"
                            >
                              Days
                            </Text>
                          </div>
                          <div className="flex flex-col items-center">
                            <Heading
                              as="h2"
                              className="#0000007f] 1px 1px text-shadow-[0px tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]"
                            >
                              14
                            </Heading>
                            <Text
                              as="p"
                              className="#0000007f] 1px 1px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff33]"
                            >
                              Hrs
                            </Text>
                          </div>
                          <div className="flex w-[16%] flex-col items-center">
                            <Heading
                              as="h3"
                              className="#0000007f] 1px 1px text-shadow-[0px flex h-[2.50rem] w-[2.50rem] items-center justify-center text-center tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]"
                            >
                              40
                            </Heading>
                            <Text
                              as="p"
                              className="#0000007f] 1px 1px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff33]"
                            >
                              Mins
                            </Text>
                          </div>
                          <div className="flex w-[16%] flex-col items-center">
                            <Heading
                              as="h4"
                              className="#0000007f] 1px 1px text-shadow-[0px w-[2.13rem] tracking-[0.00rem] md:text-[1.63rem] sm:text-[1.50rem]"
                            >
                              36
                            </Heading>
                            <Text
                              as="p"
                              className="#0000007f] 1px 1px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff33]"
                            >
                              Sec
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* reward info section */}
                <div className="container-xs relative z-[7] mt-[-8.13rem] flex flex-col items-end pl-[3.50rem] pr-[3.63rem] lg:p-[1.25rem] md:p-[1.25rem] md:px-[1.25rem] sm:px-[1.00rem]">
                  <div className="flex w-[28%] flex-col items-center gap-[1.13rem] rounded-md border border-solid border-[#ffffff33] bg-[#131313] shadow-[0_2px_5px_0_#0000007f] lg:w-full md:w-full">
                    <div className="flex items-center self-stretch border-b border-solid border-[#ffffff0c] px-[1.00rem] py-[0.75rem]">
                      <Text
                        size="texts"
                        as="p"
                        className="!font-light !text-[#ffffff66]"
                      >
                        Reward info
                      </Text>
                      <Img
                        src="images/img_inbox.svg"
                        alt="Inbox Image"
                        className="h-[0.88rem] w-[0.88rem]"
                      />
                    </div>
                    <Text
                      size="textmd"
                      as="p"
                      className="leading-[1.19rem] !text-[#ffffffcc]"
                    >
                      <>
                        Free access to paid KOL (crypto earning)
                        <br />
                        communities!
                      </>
                    </Text>
                    <Text size="textmd" as="p" className="leading-[1.19rem]">
                      <>
                        Win access to exclusive earning
                        <br />
                        communities of some of the the greatest
                        <br />
                        earners in crypto for a month, every 24
                        <br />
                        hours. Get access to unmatched insights,
                        <br />a close-knit community of the best
                        <br />
                        airdrop earners, and more.
                      </>
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="mb-[1.00rem] leading-[1.19rem]"
                    >
                      <>
                        To win: make sure you&#39;ve connected your
                        <br />
                        Twitter and Discord accounts - and follow
                        <br />
                        our criteria!
                      </>
                    </Text>
                  </div>
                </div>
              </div>

              {/* reward path section */}
              <div className="container-xs relative z-[8] mt-[-1.13rem] flex flex-col items-end pl-[3.50rem] pr-[12.63rem] lg:p-[1.25rem] lg:pr-[2.00rem] md:p-[1.25rem] md:px-[1.25rem] sm:px-[1.00rem]">
                <Img
                  src="images/img_reward_info_path_571d6141_svg.svg"
                  alt="Reward Info"
                  className="h-[5.38rem] w-[24%]"
                />
              </div>
            </div>
            <Button className="absolute right-[28%] top-[34%] z-[9] m-auto flex h-[3.00rem] w-[3.00rem] items-center justify-center rounded-[24px] border border-solid border-[#ffffff33] bg-[#ffffff0c] px-[0.75rem]">
              <Img src="images/img_checkmark.svg" />
            </Button>
            <Button className="absolute right-[24%] top-[41%] z-10 m-auto flex h-[3.00rem] w-[3.00rem] items-center justify-center rounded-[24px] border border-solid border-[#ffffff33] bg-[#131313] px-[0.88rem]">
              <Img src="images/img_location.svg" />
            </Button>
            <div className="absolute left-0 right-0 top-[27%] z-[11] m-auto flex w-[72%] items-center md:relative md:flex-col">
              <Img
                src="images/img_svg_deep_purple_a100.svg"
                alt="Svg Image"
                className="relative z-[12] h-[1.13rem] w-[8%] md:w-full"
              />
              <div className="flex w-[36%] rounded-tl-[24px] rounded-tr-[24px] bg-[#ffffff0c] md:w-full md:p-[1.25rem]">
                <div className="flex w-full items-start gap-[1.50rem] rounded-tl-[24px] rounded-tr-[24px] border-l border-r border-t border-solid border-[#ffffff0c] p-[1.00rem] sm:flex-col">
                  <div className="relative my-[0.38rem] h-[11.25rem] w-[34%] self-center rounded-[16px] border border-solid border-[#ffffff33] bg-[#ffffff0c] p-[0.50rem] lg:h-auto md:h-auto sm:w-full">
                    <Img
                      src="images/img_2d1ac16ea7c9416.png"
                      alt="Stack Image"
                      className="h-[10.13rem] flex-1 rounded-[12px] object-cover"
                    />
                    <Button className="absolute bottom-[1.06rem] left-0 right-0 m-auto flex h-[2.50rem] min-w-[6.38rem] flex-row items-center justify-center rounded-[20px] border border-solid border-[#ffffff33] bg-[#00000066] px-[1.44rem] text-center text-[0.88rem] text-[#ffffff] shadow-[0_0_5px_0_#00000019] sm:px-[1.00rem]">
                      6 Quests
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-col items-start sm:self-stretch">
                    <Img
                      src="images/img_icon.svg"
                      alt="Triangle Icon"
                      className="h-[1.25rem] w-[1.25rem] self-end"
                    />
                    <Text
                      size="text2xl"
                      as="p"
                      className="mt-[0.38rem] !text-[#ffffff]"
                    >
                      Basics of Crypto
                    </Text>
                    <div className="flex self-stretch">
                      <Text
                        as="p"
                        className="w-[88%] leading-[1.25rem] !text-[#ffffff66]"
                      >
                        <>
                          The safest and easiest place to start
                          <br />
                          your crypto journey!
                        </>
                      </Text>
                    </div>
                    <div className="mt-[1.00rem] h-[0.06rem] self-stretch rounded-[1px] bg-gradient-to-r from-[#ffffff26] via-[#00000000] via-[#ffffff26] to-[#00000000]" />
                    <Button
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          alt="Close"
                          className="h-[0.06rem] h-[1.00rem] w-[0.06rem] w-[1.13rem]"
                        />
                      }
                      className="mt-[1.00rem] flex h-[2.00rem] min-w-[6.50rem] flex-row items-center justify-center gap-[0.25rem] rounded-[16px] border border-solid border-[#ffffff0c] bg-[#ffffff11] px-[0.69rem] text-center text-[0.88rem] text-[#ffffffcc]"
                    >
                      1490 XPs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-[35%] z-[13] m-auto flex w-[60%] items-start md:relative md:flex-col">
              <div className="flex w-[40%] flex-col gap-[0.50rem] self-center rounded-bl-[24px] rounded-br-[24px] border-t border-solid border-[#ffffff19] bg-[#101010] px-[1.50rem] md:w-full md:p-[1.25rem] sm:px-[1.00rem]">
                <div className="mt-[1.50rem] flex flex-col gap-[0.50rem]">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {cryptoTasksList.map((d, index) => (
                      <CryptoInfoSection {...d} key={"listContainer" + index} />
                    ))}
                  </Suspense>
                </div>
                <div className="h-[0.38rem] rounded-[3px] border border-solid border-[#ffffff0c] bg-[#ffffff0c]" />
              </div>
              <div className="relative ml-[-5.63rem] mt-[2.38rem] flex w-[24%] justify-center rounded-[18px] border border-solid border-[#ffffff11] bg-[#ffffff0c] shadow-[0_4px_10px_0_#00000019] md:ml-0 md:w-full md:p-[1.25rem]">
                <Button className="relative z-[14] flex h-[2.25rem] min-w-[9.50rem] flex-row items-center justify-center rounded-[18px] bg-[#ffffff26] px-[2.13rem] text-center text-[1.00rem] tracking-[0.00rem] text-[#ffffff] shadow-[inset_0_1px_1px_0_#ffffff26] lg:text-[0.81rem] sm:px-[1.00rem]">
                  Essentials
                </Button>
                <div className="relative ml-[-0.13rem] flex w-full justify-center">
                  <Text
                    as="p"
                    className="self-end tracking-[0.00rem] !text-[#ffffff66]"
                  >
                    Alpha Hub
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0.00rem] left-0 right-0 z-[15] m-auto w-[16%] rounded-[12px] border border-solid border-[#ffffff19] bg-[#ffffff0c] p-[0.75rem]">
              <div className="flex flex-col gap-[0.75rem]">
                <div className="relative h-[18.50rem] lg:h-auto md:h-auto">
                  <Img
                    src="images/img_kol_reward_12e6ae06_gif.png"
                    alt="Kol Reward Image"
                    className="h-[18.50rem] w-full flex-1 rounded-md object-cover"
                  />
                  <Text
                    as="p"
                    className="absolute right-[0.81rem] top-[0.75rem] m-auto rounded bg-[#00000099] p-[0.13rem] !text-[#ffffffcc]"
                  >
                    Lucky Draw
                  </Text>
                </div>
                <div className="flex justify-center">
                  <Text as="p" className="!text-[#ffffff66]">
                    Exclusive Community
                  </Text>
                  <div className="flex w-full items-center justify-end">
                    <Img
                      src="images/img_discord_50baa5cf_svg.png"
                      alt="Discord Image"
                      className="h-[1.00rem] w-[1.00rem] object-cover"
                    />
                    <Text as="p" className="!text-[#ffffff]">
                      Earndrop
                    </Text>
                  </div>
                </div>
                <div className="h-[0.06rem] rounded-[1px] bg-gradient-to-r from-[#ffffff26] via-[#00000000] via-[#ffffff26] to-[#00000000]" />
                <div className="flex flex-col gap-[0.75rem]">
                  <QuestCompletionOverlay />
                  <QuestCompletionOverlay completionText="Complete at least 1 Alpha Hub quest today" />
                </div>
                <Button
                  rightIcon={
                    <Img
                      src="images/img_arrowright1c96f4aesvg.svg"
                      alt="Arrow-right-1c96f4ae.svg"
                      className="h-[0.00rem] h-[0.75rem] w-[0.06rem] w-[1.00rem]"
                    />
                  }
                  className="flex h-[2.63rem] flex-row items-center justify-center gap-[0.38rem] self-stretch rounded-lg border border-solid border-[#ffffff11] bg-[#ffffff11] px-[2.06rem] text-center text-[1.00rem] text-[#ffffff99] lg:text-[0.81rem] sm:px-[1.00rem]"
                >
                  Claim Now
                </Button>
              </div>
            </div>
          </div>

          {/* additional info section */}
          <div className="mt-[3.00rem] self-stretch bg-gradient-to-r from-[#ffffff05] via-[#ffffff0a] via-[#ffffff0a] via-[#ffffff19] to-[#ffffff05] blur-[40.00px] backdrop-opacity-[0.5]">
            <div className="white_A700_05_white_A700_05_border h-[0.06rem] border-t border-solid bg-[#ffffff0c]" />
          </div>

          {/* top creators section */}
          <div className="container-xs mt-[1.75rem] lg:p-[1.25rem] md:p-[1.25rem]">
            <div className="flex flex-col items-center px-[0.63rem] py-[1.75rem] sm:py-[1.00rem]">
              <Text
                size="text2xl"
                as="p"
                className="tracking-[0.00rem] !text-[#ffffff]"
              >
                Top Crypto Creators and Projects to Follow
              </Text>
              <Text
                as="p"
                className="mt-[0.50rem] tracking-[0.00rem] !text-[#ffffff66]"
              >
                Answers to your crypto doubts, straight from the experts
              </Text>
              <div className="mb-[1.25rem] mt-[2.50rem] flex gap-[1.00rem] self-stretch md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {cryptoGuidesList.map((d, index) => (
                    <UserProfile1 {...d} key={"cryptoList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="white_A700_05_white_A700_05_border h-[0.06rem] self-stretch border-t border-solid bg-[#ffffff0c]" />

          {/* crypto dictionary section */}
          <div className="container-xs mt-[1.75rem] lg:p-[1.25rem] md:p-[1.25rem]">
            <div className="flex flex-col items-center gap-[0.50rem] px-[0.63rem] py-[1.75rem] sm:py-[1.00rem]">
              <Text
                size="text2xl"
                as="p"
                className="tracking-[0.00rem] !text-[#ffffff]"
              >
                Crypto Dictionary
              </Text>
              <Text as="p" className="tracking-[0.00rem] !text-[#ffffff66]">
                Your one-stop to catch up on all crypto terms
              </Text>
              <div className="self-stretch rounded-[16px] border border-solid border-[#ffffff33]">
                <div className="bg-[#ffffff0c]">
                  <div className="bg-[#00000019]">
                    <Img
                      src="images/img_vector_458x1178.png"
                      alt="Vector Image"
                      className="h-[28.63rem] w-full object-cover lg:h-auto md:h-auto"
                    />
                  </div>
                </div>
                <div className="relative mt-[-6.25rem] blur-[15.00px] backdrop-opacity-[0.5]">
                  <div className="bg-[#00000019]">
                    <div className="h-[7.63rem] bg-[url(/public/images/img_group_19.png)] bg-cover bg-no-repeat py-[0.38rem] lg:h-auto md:h-auto">
                      <div className="mb-[1.00rem] flex items-center justify-center p-[0.75rem]">
                        <div className="flex flex-1 flex-col items-start">
                          <Text
                            size="text2xl"
                            as="p"
                            className="text-white 5px 0px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff99]"
                          >
                            Web3 + Degen Glossary
                          </Text>
                          <Text
                            as="p"
                            className="#00000019] 5px 0px text-shadow-[0px tracking-[0.00rem] !text-[#ffffff66]"
                          >
                            Your own crypto dictionary
                          </Text>
                        </div>
                        <Button className="flex h-[4.00rem] w-[4.00rem] items-center justify-center rounded-[32px] border border-solid border-[#ffffff33] bg-[#00000066] px-[1.25rem]">
                          <Img src="images/img_icon_white_a700.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[8.50rem] h-[0.06rem] w-full self-stretch rounded-[1px] bg-[#ffffff26]" />
          <div className="flex items-center justify-center self-stretch bg-[#000000] px-[1.25rem] md:flex-col">
            {/* footer section */}
            <div className="flex flex-col items-center py-[1.75rem] md:py-[1.00rem]">
              <div className="flex w-full max-w-[66%] flex-col gap-[1.5rem] lg:max-w-full md:max-w-full">
                <div className="flex w-full flex-col lg:items-center lg:gap-[1.5rem]">
                  <div className="flex flex-1 flex-col gap-[1.50rem] mt-6">
                    <div className="flex flex-wrap justify-between gap-[2rem]">
                      <div className="flex flex-col items-start gap-[1.13rem] lg:w-full lg:items-start mb-6">
                        <Heading
                          size="text3xl"
                          as="h2"
                          className="!text-[#ffffff] md:text-[1.38rem]"
                        >
                          intract.
                        </Heading>
                        <Text
                          size="textmd"
                          as="p"
                          className="leading-[1.19rem] text-left"
                        >
                          We are your personal guide for exploring <br /> web3
                          projects & earning 100x rewards
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[0.75rem]">
                        <Text
                          size="textmd"
                          as="p"
                          className="uppercase !text-[#ffffff]"
                        >
                          Intract
                        </Text>
                        <Text size="textmd" as="p">
                          Explore Quests
                        </Text>
                        <Text size="textmd" as="p">
                          Communities
                        </Text>
                        <Text size="textmd" as="p">
                          Alpha Hub
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[0.75rem]">
                        <Text
                          size="textmd"
                          as="p"
                          className="uppercase !text-[#ffffff]"
                        >
                          Earn
                        </Text>
                        <Text size="textmd" as="p">
                          Refer & Earn
                        </Text>
                        <Text size="textmd" as="p">
                          Leaderboard
                        </Text>
                        <Text size="textmd" as="p">
                          Achievements
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[0.75rem]">
                        <Text
                          size="textmd"
                          as="p"
                          className="uppercase !text-[#ffffff]"
                        >
                          About
                        </Text>
                        <Text size="textmd" as="p">
                          Product Roadmap
                        </Text>
                        <Text size="textmd" as="p">
                          Affiliate Program
                        </Text>
                        <Text size="textmd" as="p">
                          Sign up Program
                        </Text>
                        <Text size="textmd" as="p">
                          Growth Community
                        </Text>
                        <Text size="textmd" as="p">
                          Blogs
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[0.75rem]">
                        <Text
                          size="textmd"
                          as="p"
                          className="uppercase !text-[#ffffff]"
                        >
                          Support
                        </Text>
                        <Text size="textmd" as="p">
                          Help Center
                        </Text>
                        <Text size="textmd" as="p">
                          Create your quest
                        </Text>
                        <Text size="textmd" as="p">
                          Terms of Service
                        </Text>
                        <Text size="textmd" as="p">
                          Privacy Policy
                        </Text>
                        <Text size="textmd" as="p">
                          Community Guidelines
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[2.50rem] w-full border-t border-solid border-[#2b2b2b]">
                  <div className="mt-[2.50rem] flex justify-start">
                    <Text
                      size="textmd"
                      as="p"
                      className="leading-[1.19rem] !text-[#ffffffbf] text-left"
                    >
                      <span className="text-[#ffffffbf]">
                        Disclaimer:&nbsp;
                      </span>
                      <span className="text-[#7d7d7d]">
                        <>
                          Crypto Products, Virtual Digital Assets, and NFTs are
                          unregulated and can be highly risky. There may be no
                          regulatory recourse for any loss from such
                          transactions. We advise the viewer to proceed with
                          caution. Nothing in this website or any communication
                          published by us amounts to, is intended to be, or
                          should be construed as investment or purchase advice
                          of any kind or financial advice or promotion under any
                          applicable laws. Any decision made based on the
                          content provided on this website or any communication
                          published by us shall not be attributable to us.
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="mt-[2.50rem] w-full flex justify-between items-center border-t border-solid border-[#2b2b2b] pt-[1rem]">
                  <div className="flex items-center">
                    <Text
                      size="textmd"
                      as="p"
                      className="uppercase !text-[#ffffff]"
                    >
                      Created by
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="ml-[0.5rem] uppercase !text-[#ffffff] underline"
                    >
                      Intract
                    </Text>
                  </div>
                  <div className="flex items-center gap-[1.00rem]">
                    <div className="rounded-lg bg-[#1a1a1a] p-[0.50rem]">
                      <Img
                        src="images/img_trash.svg"
                        alt="Trash Icon"
                        className="h-[1.00rem]"
                      />
                    </div>
                    <div className="rounded-lg bg-[#1a1a1a] p-[0.50rem]">
                      <Img
                        src="images/img_settings_cyan_600.png"
                        alt="Settings Icon"
                        className="h-[0.88rem] object-cover"
                      />
                    </div>
                    <div className="rounded-lg bg-[#1a1a1a] p-[0.50rem]">
                      <Img
                        src="images/img_save.svg"
                        alt="Save Icon"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                    </div>
                    <div className="rounded-lg bg-[#1a1a1a] p-[0.50rem]">
                      <Img
                        src="images/img_settings_green_a700.svg"
                        alt="Green Settings Icon"
                        className="h-[1.25rem] w-[1.25rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button className="mb-[1.25rem] flex h-[3.00rem] w-[3.00rem] items-center justify-center self-end rounded-[24px] bg-[#ffffff] px-[0.75rem] md:self-auto md:p-[1.25rem]">
              <Img src="images/img_menu.svg" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
