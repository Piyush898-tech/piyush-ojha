interface ShimmerTextProps {
  text: string;
  className?: string;
}

const ShimmerText = ({ text, className = "" }: ShimmerTextProps) => {
  return (
    <span className={`shimmer-mask inline-block ${className}`}>
      <span className="text-silk-silver">{text}</span>
    </span>
  );
};

export default ShimmerText;
