import "./Title.css";

enum TitleAsHeader {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

interface TitleProps {
  content: string;
  as?: TitleAsHeader;
}

export const Title = ({
  as = TitleAsHeader.H1,
  content
}: TitleProps) => {
  const CustomHeaderTag = `${as}` as keyof JSX.IntrinsicElements;

  return (
    <CustomHeaderTag className="title">
      {content}
    </CustomHeaderTag>
  );
};
