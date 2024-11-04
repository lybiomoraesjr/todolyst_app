import { Box, Text, TextField } from "@radix-ui/themes";
import { ComponentProps } from "react";

type InputProps = {
    placeholder: string;
    errorMessage?: string;
  } & ComponentProps<typeof TextField.Root>;

const Input: React.FC<InputProps> = ({
  placeholder,
  errorMessage,
  ...rest
}) => {
  return (
    <Box width="200px">
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
