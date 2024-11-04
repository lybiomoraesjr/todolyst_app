import { Box, Text, TextField } from "@radix-ui/themes";
import React, { ComponentProps } from "react";

type InputProps = {
  label?: string;
  placeholder: string;
  errorMessage?: string;
} & ComponentProps<typeof TextField.Root>;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  errorMessage,
  ...rest
}) => {
  return (
    <Box width="200px">
      {label && (
        <Text as="div" size="2" mb="1" weight="bold">
          {label}
        </Text>
      )}

      <TextField.Root size="1" placeholder={placeholder} {...rest} />

      {errorMessage && (
        <Text color="red" size="1">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default Input;
