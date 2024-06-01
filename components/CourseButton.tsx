"use client";
import {
    EllipsisVertical,
    PencilLine,
    Trash2

  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { cn } from "@/lib/utils";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";


  export function CourseCardButton({id}: {id: string}) {

    return (
      <Dialog>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className={cn("text-black hover:bg-gray-100")}><EllipsisVertical className="size-4 ml-1"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DialogTrigger>
            <DropdownMenuItem>
              <PencilLine className="mr-2 h-4 w-4" />
              <span className="text-gray-500">Edit module name</span>
            </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4"  color="#e11d48"/>
              <span className="text-primary">Delete</span>
            </DropdownMenuItem>     
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      
      <DialogContent>
    <DialogHeader>
      <DialogTitle> <h1 className="text-lg font-semibold">Edit module</h1></DialogTitle>
    </DialogHeader>
      <Input />
    <DialogFooter>
      <Button type="submit" variant={"outline"}>Cancel</Button>
      <Button type="submit"className={cn("bg-teal-600 hover:bg-teal-700")}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
      </Dialog>
    )
  }
  