"use client";

import React, {
  useOptimistic,
  startTransition,
  useState,
  useEffect,
} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarItem,
  Input,
  Navbar,
} from "@nextui-org/react";

import { DeleteIcon } from "./DeleteIcon";
import { deleteContactAction } from "@/lib/actions";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "PHONE", uid: "phone" },
  { name: "ACTIONS", uid: "actions" },
];

export default function ContactTable({ contacts }) {
  const [data, setData] = useState(contacts);
  const [query, setQuery] = useState("");
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.fullName}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"></span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                {/* <DeleteIcon onClick={() => handleDelete(user.id)} /> */}
                <DeleteBtn onDelete={() => handleDelete(user.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [optimisticContacts, optimisticDelete] = useOptimistic(
    contacts,
    (curContacts, contactId) => curContacts.filter((c) => c.id !== contactId)
  );

  async function handleDelete(id) {
    startTransition(() => {
      optimisticDelete(id); // optimistic deletion
    });
    const displayToast = await deleteContactAction(id); // actual deletion (real)
    displayToast && toast.success("Contact deleted successfully");
  }

  useEffect(() => {
    if (query) {
      const filtered = contacts.filter(
        (contact) =>
          contact.fullName.toLowerCase().includes(query.toLowerCase()) ||
          contact.email.toLowerCase().includes(query.toLowerCase()) ||
          contact.phone.toString().includes(query.toLowerCase())
      );
      setData(filtered);
    } else {
      setData(contacts);
    }
  }, [query]);

  return (
    <div className="mt-40 mb-12 bg-white">
      <Navbar>
        <NavbarItem className="w-full">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-content2 dark:bg-content1",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            radius="full"
            startContent={
              <Icon
                className="text-default-500"
                icon="solar:magnifer-linear"
                width={20}
              />
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </NavbarItem>
      </Navbar>
      <Table
        className="p-12 text-black"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              // align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        {/* snappier but trickier in some cases (modal) */}
        {/* <TableBody items={query ? data : optimisticContacts}> */}
        <TableBody items={query ? data : contacts}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteBtn({ onDelete }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <DeleteIcon onClick={onOpen} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="text-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Wait... 🧐
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this contact?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
