import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { text } from "stream/consumers";
import PlaidLink from "./PlaidLink";

type Props = {};

export default function NoAccountsAlert({}: Props) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>No linked accounts</AlertTitle>
      <AlertDescription className="flex justify-between items-center">
        You have yet to link accounts. Please add an account.
        <PlaidLink />
      </AlertDescription>
    </Alert>
  );
}
