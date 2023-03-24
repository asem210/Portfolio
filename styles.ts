const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font semibold xs: text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite tex-[18px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-15 px-5",
  paddingY: "sm:py-15 py-5",
  padding: "sm:px-15 px-5 sm:py-10 py-5",
  marginX: "sm:mx-15 mx-5",
  marginY: "sm:my-15 my-5",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
