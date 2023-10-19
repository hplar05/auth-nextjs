"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function gotoRegister() {
    router.push("/signup");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-[700px] w-[800px] border rounded-md flex justify-center">
        <button className="" onClick={gotoRegister}>
          CLICK ME !
        </button>
      </div>
    </main>
  );
}
