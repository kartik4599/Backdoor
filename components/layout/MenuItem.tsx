import Link from "next/link";
import { IconType } from "react-icons";

const MenuItem = ({
  Icon,
  name,
  path,
}: {
  path: string;
  Icon: IconType;
  name: string;
}) => {
  return (
    <Link
      href={path}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      prefetch={false}>
      <Icon className="h-4 w-4" />
      <span>{name}</span>
    </Link>
  );
};

export default MenuItem;
