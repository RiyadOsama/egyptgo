import { Label } from "./ui/label";
import { Input } from "./ui/input";
import SelectMenu from "./select-menu";

export default function PackageForm() {
  return (
    <>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="name">Package Name</Label>
        <Input id="name" type="text" placeholder="e.g. Safari Experience"/>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="grid gap-2 w-[48%]">
            <Label htmlFor="duration">Duration (Days)</Label>
            <Input id="duration" type="number" placeholder="e.g. 7"/>
        </div>
        <div className="grid gap-2 w-[48%]">
            <Label htmlFor="price">Price (USD)</Label>
            <Input id="price" type="number" placeholder="e.g. 2500" />
        </div>
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="destination">Destination</Label>
        <SelectMenu />
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="description">Activities</Label>
        <textarea id="description" className="border rounded-md p-2" rows="4" placeholder="Enter activities separated by commas.."/>
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="image">Image</Label>
        <Input id="image" type="file" />
      </div>
    </>
  );
}
