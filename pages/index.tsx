import React from "react";
import { mainState } from "@/store/mainState";
import { useRecoilState } from "recoil";
import Link from "next/link";

export default function Home() {
  const [mainRecoilState, setRecoilState] = useRecoilState<any>(mainState);
  return (
    <div>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <button
        onClick={() => {
          console.log("mainRecoilState is", mainRecoilState);
        }}
      >
        Click to see{" "}
      </button>
    </div>
  );
}
