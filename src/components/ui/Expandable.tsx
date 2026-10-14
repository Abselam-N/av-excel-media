"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

export function Expandable({
  header,
  children,
  defaultOpen = false,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-t border-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="block flex-1">{header}</span>
        <Plus
          aria-hidden="true"
          className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>
      <div id={id} className="expand" data-open={open}>
        <div>
          <div className="pb-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
