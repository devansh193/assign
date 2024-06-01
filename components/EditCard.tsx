import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Stringifier } from "postcss"

type Props={
  label: string,
  header: string,
  button: string,

}
export function EditCard({label, header, button}:Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="card">{label}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
          
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center">
            <div className="mb-2">
            <Label htmlFor="name" className="item-right">
             <h1 className="text-gray-500">{label}</h1> 
            </Label>
            </div>
            <Input id="name" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
            <Button type="submit" variant={"outline"}>Cancel</Button>
          <Button type="submit" className={cn("bg-teal-600 hover:bg-teal-700")}>{button}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
