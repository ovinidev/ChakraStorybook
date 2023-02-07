import type { StoryObj, Meta } from "@storybook/react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const Button = () => {
  return <ChakraButton>Criar</ChakraButton>;
};

export default {
  title: "Button",
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj = {};
