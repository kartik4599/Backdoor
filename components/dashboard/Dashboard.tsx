import FileBoard from "./FileBoard";
import PasswordBoard from "./PasswordBoard";

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <PasswordBoard />
      <FileBoard />
    </div>
  );
}
