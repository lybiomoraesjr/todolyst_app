import { Text, Select as RadixSelect, Flex } from "@radix-ui/themes";
import React, { ComponentProps } from "react";

type SelectProps = {
  label?: string;
  errorMessage?: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
} & ComponentProps<typeof RadixSelect.Root>;

const Select: React.FC<SelectProps> = ({
  label,
  options,
  onChange,
  value,
  errorMessage,
  placeholder = "Selecione uma opção",
  ...rest
}) => {
  return (
    <Flex direction="column" width="200px">
      {label && (
        <Text as="label" size="2" mb="1" weight="bold">
          {label}
        </Text>
      )}

      <RadixSelect.Root value={value} onValueChange={onChange} {...rest}>
        <RadixSelect.Trigger placeholder={placeholder} />
        <RadixSelect.Content position="popper">
          {options.map((option) => (
            <RadixSelect.Item value={option.value}>
              {option.label}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Content>
      </RadixSelect.Root>

      {errorMessage && (
        <Text color="red" size="1">
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export default Select;
