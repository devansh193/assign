"use client";
import {
    Link,
    User,
    ArrowUpFromLine,
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
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { cn } from "@/lib/utils";
  

  export function CourseCardButton() {
        const [isDialogOpen, setIsDialogOpen]= useState(false);
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className={cn("text-black")}><EllipsisVertical className="size-4 ml-1"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <PencilLine className="mr-2 h-4 w-4" />
              <span className="text-gray-500">Edit module name</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="mr-2 h-4 w-4"  color="#e11d48"/>
              <span className="text-primary">Delete</span>
            </DropdownMenuItem>     
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  