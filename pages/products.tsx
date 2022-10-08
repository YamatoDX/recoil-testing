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
      <Link href="/users">
        <a>Users</a>
      </Link>
      <button
        onClick={() => {
          const myRandomNumber = Math.floor(Math.random() * 1000);
          setRecoilState({
            ...mainRecoilState,
            products: [...mainRecoilState.products, myRandomNumber],
          });
        }}
      >
        Update Products {mainRecoilState.products.length}
      </button>
    </div>
  );
}
