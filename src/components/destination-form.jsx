import { Label } from "./ui/label";
import { Input } from "./ui/input";
export default function DestinationForm() {
  return (
    <>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="name">name</Label>
        <Input id="name" type="text" placeholder="e.g. Paris"/>
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="description">description</Label>
        <textarea id="description" className="border rounded-md p-2" rows="4" placeholder="Enter destination description here..."/>
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="location">location</Label>
        <Input id="location" type="text" placeholder="e.g. France"/>
      </div>
      <div className="grid gap-2 mb-4">
        <Label htmlFor="image">image</Label>
        <Input id="image" type="file" />
      </div>
    </>
  );
}
