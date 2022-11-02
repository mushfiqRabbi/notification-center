import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function NotificatonCount({ getCountSetter }) {
  const [nCount, setNCount] = useState(0);

  const { allRead, setAllRead } = useContext(AppContext);

  useEffect(() => {
    getCountSetter(setNCount);
  }, []);

  useEffect(() => {});

  const handleAllRead = (e) => {
    e.preventDefault();
    if (allRead) return;
    setAllRead(true);
    setNCount(0);
  };

  return (
    <div className="flex justify-between  items-center">
      <div className="flex gap-2 items-center cursor-default">
        <div className="text-xl font-bold">Notifications</div>
        <div className="bg-blue-900 text-white font-bold text-base px-2.5  rounded-md">
          {nCount}
        </div>
      </div>
      <button
        onClick={handleAllRead}
        className="text-sm text-gray-600 font-semibold hover:text-blue-900"
      >
        Mark all as read
      </button>
    </div>
  );
}
