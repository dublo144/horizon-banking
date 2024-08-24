"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import { User } from "@/types/types";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  user?: User;
  variant?: "primary" | "ghost";
};

export default function PlaidLink({ variant = "primary", user }: Props) {
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
      // await data = await createLinkToken(user);
      // setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);

  const onSuccess = useCallback(
    async (public_token: string) => {
      // await exchangePublicToken({
      //   publicToken: public_token,
      //   user
      // })
      router.push("/");
    },
    [
      /*user*/
    ]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <Button
      className={cn(
        variant === "ghost" ? "plaidlink-ghost" : "plaidlink-primary"
      )}
      onClick={() => open()}
      disabled={!ready}
    >
      Link an account now
    </Button>
  );
}
