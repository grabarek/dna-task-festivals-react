import "./Image.css";

interface ImageProps {
  src: string;
  alt: string;
  fullWidth?: boolean;
}

export const Image = ({
  src,
  alt,
  fullWidth = false,
}: ImageProps) => {
  return (
    <img 
    src={src} 
    alt={alt}
    className={`image ${fullWidth ? "image--fullwidth" : ""}`}
    />
  );
};
