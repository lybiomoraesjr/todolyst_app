import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, IconButton, Radio, Text } from "@radix-ui/themes";
import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import { formattedDate } from "../utils/dateUtils";

type TaskCardProps = {
  title: string;
  startDate: Date;
  endDate: Date;
  priority: string;
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  startDate,
  endDate,
  priority,
}) => {
  return (
    <Box width="400px">
      <Card size="2">
        <Flex gap="4" align="center">
          <Radio name="example" value="1" defaultChecked />

          <Box>
            <Text as="div" weight="bold">
              {title}
            </Text>

            <Flex gap="2">
              <Text as="div" color="gray">
                {/* {formattedDate(startDate)} - {formattedDate(endDate)} */}
                
              </Text>

              <Text as="div" color="red" weight="bold">
                {priority}
              </Text>
            </Flex>
          </Box>

          <IconButton>
            <Pencil1Icon />
          </IconButton>

          <ConfirmationDialog
            onConfirm={() => {}}
            button={
              <IconButton color="red">
                <TrashIcon />
              </IconButton>
            }
            description="Tem certeza que deseja excluir esta tarefa? Essa ação não pode ser desfeita."
          />
        </Flex>
      </Card>
    </Box>
  );
};

export default TaskCard;
