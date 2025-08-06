import { Skeleton } from "@/components";

export const FormSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      {[...Array(2)].map((_, i) => (
        <Skeleton key={i} width="w-full" height="h-16" />
      ))}
    </div>
  );
};
