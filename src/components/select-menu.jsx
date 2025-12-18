import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
export default function SelectMenu() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Destination" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="aswan">Aswan</SelectItem>
        <SelectItem value="luxor">Luxor</SelectItem>
        <SelectItem value="paris">Paris</SelectItem>
        <SelectItem value="paris">Paris</SelectItem>
        <SelectItem value="cairo">Cairo</SelectItem>
      </SelectContent>
    </Select>
  );
}
