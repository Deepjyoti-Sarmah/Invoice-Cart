import { Ban, PlusCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  buttontext: string;
  href: string;
}

export default function EmptyState() {
  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center rounded-md border-dashed p-8 text-center animate-in fade-in-50">
      <div className="flex items-center justify-center size-20 rounded-full bg-primary/10">
        <Ban className="size-10 text-primary" />
      </div>
      <h2>title</h2>
      <p>test</p>
      <Link href="" className={buttonVariants()}>
        <PlusCircle className="size-4 mr-2" />
      </Link>
    </div>
  )
}

