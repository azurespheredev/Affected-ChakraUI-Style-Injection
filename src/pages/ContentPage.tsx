import { Button, Flex, Text } from "@chakra-ui/react";

export default function ContentPage() {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} gap={4} p={4}>
      <Text>{"Example Content Page"}</Text>

      <Button>{"Click Me"}</Button>
    </Flex>
  );
}
