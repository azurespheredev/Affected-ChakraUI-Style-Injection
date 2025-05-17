import { Button, Flex, Text } from "@chakra-ui/react";

export default function ContentPage() {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} gap={4} p={4}>
      <Text fontSize={"2xl"}>{"Example Title"}</Text>
      <Text>{"Example Page Description"}</Text>

      <Button w={"full"}>{"Click Me"}</Button>
    </Flex>
  );
}
