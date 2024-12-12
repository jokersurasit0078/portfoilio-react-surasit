import { Box, Fade, Grid } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import Footer from "../../components/footer/Footer";
import CustomDivider from "./components/CustomDivider";
import SubHeader from "./components/SubHeader";
import ListSkill from "./components/ListSkill";

export default function Skill() {
  const listCodeEditor = ["Visual Studio Code, XCode, Android Studio"];
  const listVersionControl = ["Sourcetree (GitHub, BitBucket, GitLab)"];
  const listProgramingLanguageBase = [
    "Html",
    "CSS",
    "JavaScript / TypeScript",
    "Dart",
  ];
  const listFramework = ["React", "React Native", "Flutter"];
  const listLibrary = [
    "MUI",
    "Tailwind CSS",
    "Redux",
    "Axios",
    "React Router",
    "Firebase Hosting (Flutter / React)",
    "Firebase Firestore (Flutter)",
    "Firebase Notification (Flutter)",
    "Firebase Remoteconfig",
    "Bloc/Cubit",
  ];

  const renderSkill = () => {
    return (
      <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent / 2}px`,
            p: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <SubHeader text={"Code Editor / IDE"} />
          <ListSkill items={listCodeEditor} />
          <CustomDivider />
          <SubHeader text={"Git / Version Control"} />
          <ListSkill items={listVersionControl} />
          <CustomDivider />
          <SubHeader text={`Programing Languages (${word().TEXT_BASE})`} />
          <ListSkill items={listProgramingLanguageBase} />
          <CustomDivider />
          <SubHeader text={"Framework"} />
          <ListSkill items={listFramework} />
          <CustomDivider />
          <SubHeader text={"Library"} />
          <ListSkill items={listLibrary} />
        </Grid>
      </Fade>
    );
  };

  return (
    <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
      <CustomAppbar />
      <Box
        sx={{
          flexGrow: 1,
          width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` },
          pt: themes.appbarHeight,
        }}
      >
        <Grid
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ pb: `${themes.marginComponent}px` }}
        >
          <CustomHeader text={word().MENU_3} />
          {renderSkill()}
          <Footer />
        </Grid>
      </Box>
    </Box>
  );
}
