"use client";
import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';


const  DropdownMenuWithDialog=()=> {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="btn btn-primary">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2">
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            Open Dialog
          </DropdownMenuItem>
          {/* Add more DropdownMenuItem components as needed */}
        </DropdownMenuContent>
      </DropdownMenu>
      </Dialog>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog content.
            </DialogDescription>
          </DialogHeader>
          {/* Add more content here */}
          <DialogClose>
            <button onClick={() => setIsDialogOpen(false)} className="btn btn-secondary">Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DropdownMenuWithDialog;
