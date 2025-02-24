import SubmitButton from "@/components/SubmitButton";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PaidGif from "@/public/paid-gif.gif"
import Image from "next/image";
import Link from "next/link";

export default function MarkAsPaid() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Mark as Paid?</CardTitle>
          <CardDescription>
            Are you sure that you want to mark this invoice as paid?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={PaidGif} alt="Paid Gif" className="rounded-lg" />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            href="/dashboard/invoices"
            className={buttonVariants({
              variant: "secondary"
            })}
          >Cancel</Link>
          <form action={}>
            <SubmitButton text="Delete Invoice" variant={"destructive"} />
          </form>
        </CardFooter>
      </Card>
    </div>)

}

