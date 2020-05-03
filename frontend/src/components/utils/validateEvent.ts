import { toast } from "react-toastify";
import moment from "moment";

interface EventDTO {
  name: string;
  birthDate: string;
  days: number;
  note: string;
}

export default (inputs: EventDTO) => {
  const { name, birthDate, days, note } = inputs;
  if (typeof days !== "number" || days % 1 !== 0 || days < 0)
    return toast.error("Days has to be a whole number!");
  if (!moment(birthDate, "MM/DD/YYYY", true).isValid())
    return toast.error("Incorrect date format!");
  if (name === "" || typeof name !== "string")
    return toast.error("Name is required!");
  if (note === "" || typeof note !== "string")
    return toast.error("Note is required!");
  return null;
};
