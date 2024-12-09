import { Chip, Grid, Typography } from "@mui/material";
import themes from "../../../constants/themes";

interface ListSkillProps {
  items: string[];
}

export default function ListSkill(props: ListSkillProps) {
  const { items } = props;
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      {items.map((item: any, index: number) => {
        return (
          <Chip
            key={"ITEM_SKILL_" + item.toUpperCase()}
            variant={"outlined"}
            sx={{
              height: "30px",
              mr:
                items.length - 1 !== index
                  ? `${themes.marginComponent / 4}px`
                  : "0px",
              mb: `${themes.marginComponent / 4}px`,
              // bgcolor: themes.color.main
            }}
            label={
              <Typography
                sx={{
                  fontSize: {
                    xs: themes.fontsize.small,
                    md: themes.fontsize.default,
                  },
                  color: themes.color.mainText,
                  fontWeight: "bold",
                }}
              >
                {item}
              </Typography>
            }
          />
        );
      })}
    </Grid>
  );
}
