import React from "react";

const sizes = {
  textxs: "text-[0.75rem] font-normal not-italic",
  texts: "text-[0.88rem] font-normal not-italic",
  textmd: "text-[0.94rem] font-normal not-italic",
  textlg: "text-[1.00rem] font-normal not-italic lg:text-[0.81rem]",
  textxl: "text-[1.25rem] font-normal not-italic lg:text-[1.06rem]",
  text2xl: "text-[1.50rem] font-normal not-italic lg:text-[1.25rem] md:text-[1.38rem]",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#7d7d7d] font-['Outfit'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
