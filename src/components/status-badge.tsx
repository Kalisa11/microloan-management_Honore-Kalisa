import { Label } from "@radix-ui/react-label";
import React from "react";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div>
      <Label
        className={`text-white rounded-lg px-2 py-1 text-xs ${
          status === "Pending"
            ? "bg-yellow-500"
            : status === "Approved"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {status}
      </Label>
    </div>
  );
};

export default StatusBadge;
