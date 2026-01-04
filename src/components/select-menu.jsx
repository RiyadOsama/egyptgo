import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function SelectMenu({ destinationsData, value, onChange }) {
  const destinations = destinationsData?.data || [];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Destination" />
      </SelectTrigger>
      <SelectContent>
        {destinations.map((d) => {
          const itemValue = String(d._id || d.id);
          return (
            <SelectItem key={itemValue} value={itemValue}>
              {d.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
