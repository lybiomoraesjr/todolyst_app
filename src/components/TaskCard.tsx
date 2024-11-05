import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

type TaskCardProps = {};

const TaskCard: React.FC<TaskCardProps> = ({}) => {
  return (
    <Box width="400px">
      <Card size="2">
        <Flex gap="4" align="center">
          <Avatar size="4" radius="full" fallback="T" color="indigo" />
          <Box>
            <Text as="div" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default TaskCard;
