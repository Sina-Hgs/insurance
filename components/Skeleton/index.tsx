interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Skeleton = ({
  width = "w-full",
  height = "h-6",
  className = "",
}: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-secondary rounded-lg ${width} ${height} ${className}`}
    />
  );
};
