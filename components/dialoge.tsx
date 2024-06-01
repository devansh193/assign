import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useSetRecoilState } from "recoil";
import { inputState } from "@/store/atoms/input";
import { dataState } from "@/store/atoms/data";
import React, { useState } from "react";

interface DialogProps {
  header?: string;
  title?: string;
  buttonName?: string;
  displayName?: string;
}

const CustomDialog: React.FC<DialogProps> = ({
  header,
  title,
  buttonName,
  displayName,
}) => {
  const setInput = useSetRecoilState(inputState);
  const setData = useSetRecoilState(dataState);
  const [name, setName] = useState("");
  const [displayNameValue, setDisplayNameValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newData = { name, displayName: displayNameValue };
    setData((prevData) => [...prevData, newData]);
    setInput("");
    setName("");
    setDisplayNameValue("");
  };

  if (!displayName) {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2">
              <Label htmlFor="name" className="text-right">
                {title}
              </Label>
              <div className="mt-2">
                <Input
                  id="name"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setInput(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
            </DialogClose>
            <Button
              type="submit"
              className={cn("bg-teal-600 hover:bg-teal-700")}
            >
              {buttonName}
            </Button>
            
          </DialogFooter>
        </form>
      </DialogContent>
    );
  } else {
    return (
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2">
              <Label htmlFor="name" className="text-right">
                {title}
              </Label>
              <div className="mt-2">
                <Input
                  type="link"
                  id="name"
                  className="col-span-3"
                  value={displayNameValue}
                  onChange={(e) => setDisplayNameValue(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-2">
              <Label htmlFor="displayName" className="text-right">
                {displayName}
              </Label>
              <div className="mt-2">
                <Input
                  id="displayName"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
            </DialogClose>
            <Button
              type="submit"
              className={cn("bg-teal-600 hover:bg-teal-700")}
            >
              {buttonName}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    );
  }
};

export default CustomDialog;
