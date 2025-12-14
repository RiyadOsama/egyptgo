import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogHeader,
    DialogTrigger } from "./ui/dialog"
export default function Modal({title, description, createClassName, packages=false, children}) {
    return(
        <Dialog>
            <form>
                <DialogTrigger asChild className={createClassName}>
                    <Button variant="outline" className="px-2 py-1">{children}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">name</Label>
                            <Input id="name" type="text" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">description</Label>
                            <Input id="description" type="text" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image">image</Label>
                            <Input id="image" type="file" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}