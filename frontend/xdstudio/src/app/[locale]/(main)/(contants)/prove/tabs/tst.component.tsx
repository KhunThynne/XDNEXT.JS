"use client";

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";

export const TestComponent = () => {
  const segment = useSelectedLayoutSegments();
  return <>{JSON.stringify(segment)}</>;
};
