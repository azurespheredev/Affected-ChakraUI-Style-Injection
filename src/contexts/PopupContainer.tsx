import type React from "react";

export default function PopupContainer({ children }: { children: React.ReactNode }) {
  return <div className="popup-container">{children}</div>;
}
