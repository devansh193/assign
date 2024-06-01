"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Link as LinkIcon,
  Plus,
  Rows3,
  ArrowUpFromLine,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog";

import CustomDialog from "./dialoge";

// Define types for the dialog props
interface DialogProps {
  header?: string;
  title?: string;
  buttonName?: string;
  displayName?: string;
}

// Define types for the menu item links
interface MenuItemLink {
  icon: React.ReactNode;
  label: string;
  dialogProps: DialogProps;
}

// CustomDialog component with types

const AppButton: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<DialogProps | null>(null);

  const menuItemLinks: MenuItemLink[] = [
    {
      icon: <Rows3 className="mr-2 h-4 w-4" />,
      label: "Course Module",
      dialogProps: {
        header: "Create a Module",
        title: "Module Name",
        buttonName: "Create",
      },
    },
    {
      icon: <LinkIcon className="mr-2 h-4 w-4" />,
      label: "Add a link",
      dialogProps: {
        header: "Add a new Link",
        title: "URL",
        buttonName: "Add",
        displayName: "Display Name",
      },
    },
    {
      icon: <ArrowUpFromLine className="mr-2 h-4 w-4" />,
      label: "Upload",
      dialogProps: { header: "Upload" },
    },
  ];

  return (
    <div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">
              <Plus className="size-4 mr-1" />
              Add
              <ChevronDown className="size-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {menuItemLinks.map(({ label, icon, dialogProps }) => (
                <DialogTrigger key={label} asChild>
                  <DropdownMenuItem onClick={() => setOpenDialog(dialogProps)}>
                    {icon}
                    <span>{label}</span>
                  </DropdownMenuItem>
                </DialogTrigger>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {openDialog && (
          <Dialog
            open={!!openDialog}
            onOpenChange={(isOpen) => !isOpen && setOpenDialog(null)}
          >
            <CustomDialog {...openDialog} />
          </Dialog>
        )}
      </Dialog>
    </div>
  );
};

export default AppButton;
