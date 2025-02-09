import { Dialog, Flex, Separator } from "@radix-ui/themes";
import { ReactElement, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  children: ReactElement | undefined;
  title: String | undefined;
  onClose: Function | undefined;
}

const PopupModal = (props: Props) => {
  const [open, setOpen] = useState(true);
  const _close = () => {
    setOpen(false);
    if (props.onClose != undefined) props.onClose();
  };
  return (
    <Dialog.Root open={open}>
      <Dialog.Content maxWidth="750px">
        <Flex gap="3" justify={"between"} align={"center"}>
          <Dialog.Title>{props.title}</Dialog.Title>
          <FaTimes className="cursor-pointer mb-1" onClick={() => _close()} />
        </Flex>
        <Separator size={"4"} mb={"8"} />
        <Flex direction="column" gap="3">
          {props.children}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default PopupModal;
