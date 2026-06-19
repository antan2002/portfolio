"use client";

import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="fixed top-4 right-4 z-50 text-sm text-muted-foreground font-mono">
      {time}
    </div>
  );
}
