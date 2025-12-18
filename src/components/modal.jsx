// import { Button } from "./ui/button"
// import DestinationForm from "./destination-form"
// import PackageForm from "./package-form"
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogTitle,
//     DialogHeader,
//     DialogTrigger } from "./ui/dialog"
// export default function Modal({title, description, createClassName, packages=false, children}) {
//     return(
//         <Dialog>
//             <form>
//                 <DialogTrigger asChild className={createClassName}>
//                     <Button variant="outline" className="px-2 py-1">{children}</Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                     <DialogHeader>
//                         <DialogTitle>{title}</DialogTitle>
//                         <DialogDescription>
//                             {description}
//                         </DialogDescription>
//                     </DialogHeader>
//                     <div className="grid gap-4 py-4">
//                         {packages ? <PackageForm /> : <DestinationForm />}
//                     </div>
//                     <DialogFooter>
//                         <DialogClose asChild>
//                             <Button variant="outline">Cancel</Button>
//                         </DialogClose>
//                         <Button type="submit">Save</Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </form>
//         </Dialog>
//     )
// }