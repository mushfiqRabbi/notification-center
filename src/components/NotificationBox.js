import React from "react";
import Notification from "./Notification";
import comcont from "./comcont";

const notificationContent = JSON.parse(comcont);
export default function NotificationBox() {
  return (
    <div className="mt-5 mb-4 flex flex-col gap-2">
      <Notification content={notificationContent.one}></Notification>
      <Notification content={notificationContent.two}></Notification>
      <Notification content={notificationContent.three}></Notification>
      <Notification content={notificationContent.four}></Notification>
      <Notification content={notificationContent.five}></Notification>
      <Notification content={notificationContent.six}></Notification>
      <Notification content={notificationContent.seven}></Notification>
    </div>
  );
}
