import React from "react";

const sizes = {
  text3xl: "text-[1.75rem] font-medium lg:text-[1.44rem] md:text-[1.63rem] sm:text-[1.50rem]",
  text4xl: "text-[2.00rem] font-medium lg:text-[1.69rem] md:text-[1.88rem] sm:text-[1.75rem]",
};

const Heading = ({ children, className = "", size = "text4xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#ffffff99] font-['Outfit'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
