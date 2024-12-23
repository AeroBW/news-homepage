import Link from "next/link";
import { Button } from "./ui/button";

interface NavButtonProps {
  title: string;
  className?: string;
}

function NavButton({ title, className }: NavButtonProps) {
  return (
    <Button asChild variant="ghost" className={`text-base ${className}`}>
      <Link href="/">{title}</Link>
    </Button>
  );
}

export default NavButton;
