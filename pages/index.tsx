import React from "react";
import { mainState } from "@/store/mainState";
import { useRecoilState } from "recoil";

export default function Home() {
  const [mainRecoilState, setRecoilState] = useRecoilState<any>(mainState);
  return (
    <div>
      <button
        onClick={() => {
          console.log("mainRecoilState is", mainRecoilState);
        }}
      >
        Click to see{" "}
      </button>
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
