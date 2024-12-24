import StatusBadge from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import Link from "next/link";
import React from "react";

const Loans = () => {
  // table of all submitted loans

  const loans = [
    { id: "LN001", status: "Pending", amount: "250000" },
    { id: "LN002", status: "Approved", amount: "150000" },
    { id: "LN003", status: "Declined", amount: "100000" },
    { id: "LN004", status: "Pending", amount: "100000" },
    { id: "LN005", status: "Declined", amount: "100000" },
    { id: "LN006", status: "Pending", amount: "100000" },
    { id: "LN007", status: "Approved", amount: "100000" },
  ];

  return (
    <Table>
      <TableCaption>This list shows all your loans</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Loan ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loans.map((loan) => (
          <TableRow key={loan.id}>
            <TableCell className="font-medium">{loan.id}</TableCell>
            {/* TODO: Add a status badge */}
            <TableCell>
              <StatusBadge status={loan.status} />
            </TableCell>
            <TableCell>{`RWF ${Number(
              loan.amount
            ).toLocaleString()}`}</TableCell>
            <TableCell className="text-right flex items-center justify-end gap-2">
              <Button size="sm" variant="outline">
                {/* <Link href={`/loans/${loan.id}`}>View</Link> */}
                View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Loans;
