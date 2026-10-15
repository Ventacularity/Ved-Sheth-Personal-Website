type Props = {
  label: string;
  wide?: boolean;
};

// Stands in for a real photo. Swap for <Image> once the pictures are added.
export default function ImagePlaceholder({ label, wide = false }: Props) {
  return (
    <div className={wide ? "ph ph-wide" : "ph"}>
      <span>Photo to come: {label}</span>
    </div>
  );
}
