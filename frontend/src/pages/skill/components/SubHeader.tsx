import { Typography } from "@mui/material";
import themes from "../../../constants/themes";

interface SubHeaderProps {
    text: string;
}

export default function SubHeader(props: SubHeaderProps) {
  const { text } = props;
  return (
    <Typography
      noWrap
      sx={{
        fontSize: { xs: themes.fontsize.default, md: themes.fontsize.big },
        color: themes.color.mainText,
        fontWeight: "bold",
        mb: `${themes.marginComponent / 6}px`,
      }}
    >
      {text}
    </Typography>
  );
}
