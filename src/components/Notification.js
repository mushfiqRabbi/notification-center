import React from "react";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";

export default function Notification({
  content: { i, a, s, o, t, read, m, p },
}) {
  const [isRead, setIsRead] = useState(read);
  const { nCountRef, countSetRef, allRead, setAllRead } =
    useContext(AppContext);

  useEffect(() => {
    if (isRead) return;
    nCountRef.current++;
  }, []);

  const handleClick = (e) => {
    if (isRead || allRead) return;
    setIsRead(true);
    countSetRef.current((prev) => prev - 1);
  };

  return (
    <div
      className={`${
        isRead || allRead ? "" : "bg-slate-100"
      }  rounded-md flex gap-4 items-start px-4 py-3 cursor-default`}
      onClick={handleClick}
    >
      <img
        className="w-10 aspect-square mt-0.5"
        src={require(`../assets/images/${i}`)}
        alt=""
      />
      <div className="leading-5 text-sm">
        <span className="mr-1.5 font-bold hover:cursor-pointer hover:text-blue-900">
          {s}
        </span>
        {a}
        {o !== "" && (
          <span className="ml-1.5 font-bold hover:cursor-pointer hover:text-blue-900">
            {o}
          </span>
        )}
        {!isRead && !allRead && (
          <span className="bg-red-400 w-2 h-2 inline-block rounded-full ml-2"></span>
        )}
        <div>{t} ago</div>
        {m && (
          <div className="border-2 rounded-sm mt-2 p-2.5 text-gray-600 text-sm font-normal hover:bg-slate-200 cursor-pointer">
            {m}
          </div>
        )}
      </div>
      {p && (
        <img
          className="w-9 self-center ml-auto mr-1 outline outline-1 rounded outline-offset-1 outline-transparent hover:outline-blue-900"
          src={p}
          alt=""
        />
      )}
    </div>
  );
}
