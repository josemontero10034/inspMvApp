'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AccessDenied() {

  console.log(process.env.AZURE_AD_CLIENT_ID)
  console.log(process.env.AZURE_AD_TENANT_ID)
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link
          href="/api/auth/signin"
          onClick={async (e) => {
            e.preventDefault();
            await signIn();
          }}
        >
          You must be signed in to view this page
        </Link>
      </p>
    </>
  );
}
