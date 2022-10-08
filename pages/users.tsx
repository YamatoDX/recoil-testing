import React from "react";
import { mainState } from "@/store/mainState";
import { useRecoilState } from "recoil";
import Link from "next/link";

export default function Home() {
  const [mainRecoilState, setRecoilState] = useRecoilState<any>(mainState);
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <button
        onClick={() => {
          const myRandomNumber = Math.floor(Math.random() * 1000);
          setRecoilState({
            ...mainRecoilState,
            users: [...mainRecoilState.users, myRandomNumber],
          });
        }}
      >
        Update Users {mainRecoilState.users.length}
      </button>
    </div>
  );
}
