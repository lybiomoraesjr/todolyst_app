import { Button as RadixButton } from "@radix-ui/themes";
import React, { ComponentProps } from "react";

type ButtonProps = {
  title: string;
  variant?: "solid" | "outline";
} & ComponentProps<typeof RadixButton>;

const Button: React.FC<ButtonProps> = ({ title, variant = "solid", style, ...rest }) => {
  return (
    <RadixButton
      style={{ width: "200px", ...style }}
      variant={variant}
      {...rest}
    >
      {title}
    </RadixButton>
  );
};

export default Button;
