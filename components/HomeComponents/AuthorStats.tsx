import React from "react";

interface AuthorStatsProps {
  statDescription: string;
  statNumber: string;
}

export default function AuthorStats(props: AuthorStatsProps) {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-4xl sm:text-5xl text-primary font-bold">
        {props.statNumber}
      </span>
      <span className="text-sm text-black/40 leading-relaxed w-full overflow-hidden">
        {props.statDescription}
      </span>
    </div>
  );
}
