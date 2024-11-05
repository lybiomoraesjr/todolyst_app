import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";

const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <Avatar fallback="A" radius="full" variant="solid" size="1" />
          Lybio
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item color="red">Sair</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropDown;
