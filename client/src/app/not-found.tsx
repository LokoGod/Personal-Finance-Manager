import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@tremor/react";

export default function NotFound() {
  return (
    <div className="global">
      <h2 className="text-3xl font-semibold text-center">404 | Not Found</h2>
      <div className="flex justify-center mt-2">
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
