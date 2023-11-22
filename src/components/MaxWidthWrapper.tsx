import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  classNames?: string;
  children: ReactNode;
};

function MaxWidthWrapper({ classNames, children }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        classNames
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
