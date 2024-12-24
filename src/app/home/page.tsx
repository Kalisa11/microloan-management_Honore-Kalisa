import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-2xl font-bold text-center">
        Welcome to the MicroLoan Management System
      </h1>
      <p className="text-sm text-gray-500">
        Please select an action to continue
      </p>
      <div className="flex gap-4">
        <Button
          size={"sm"}
          className="bg-blue-500 hover:bg-blue-600 hover:shadow text-white"
        >
          <Link href="/loanApplication">Apply for a loan</Link>
        </Button>
        <Button
          size={"sm"}
          className="bg-green-500 hover:bg-green-600 hover:shadow text-white"
        >
          <Link href="/loans">View Loans</Link>
        </Button>
      </div>
    </div>
  );
}
