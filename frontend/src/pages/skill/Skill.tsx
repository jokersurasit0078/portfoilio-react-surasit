import { Box, Chip, Fade, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import Footer from "../../components/footer/Footer";

export default function Skill() {
    const listCodeEditor = [
        "Visual Studio Code"
    ];
    const listVersionControl = [
        "Sourcetree (GitHub, BitBucket)"
    ];
    const listProgramingLanguageBase = [
        "Html", "CSS", "JavaScript / TypeScript", "Dart"
    ];
    const listProgramingLanguageBasic = [
        "Java", "PHP", "Python", "C++"
    ];
    const listFramework = [
        "React", "React Native", "Flutter",
    ]
    const listLibrary = [
        "MUI", "Tailwind CSS", "Redux", "Axios", "React Router", "Firebase hosting (Flutter / React)", "Firebase firestore (Flutter)"
    ];

    const CustomDivider = (prosp: any) => {
        return (
            <div style={{ backgroundColor: "white", width: "100%", height: "1px", marginTop: themes.marginComponent / 3, marginBottom: themes.marginComponent / 3 }} />
        );
    }

    const renderSubheader = (text: string) => {
        return (
            <Typography noWrap sx={{ fontSize: { xs: themes.fontsize.default, md: themes.fontsize.big }, color: themes.color.mainText, fontWeight: "bold", mb: `${themes.marginComponent / 6}px` }}>
                {text}
            </Typography>
        );
    }

    const renderItemSkill = (listItem: any) => {
        return (
            <Grid
                container
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
            >
                {listItem.map((item: any, index: number) => {
                    return (
                        <Chip
                            key={"ITEM_SKILL_" + item.toUpperCase()}
                            variant={"outlined"}
                            sx={{
                                height: "30px",
                                mr: listItem.length - 1 !== index ? `${themes.marginComponent / 4}px` : "0px",
                                mb: `${themes.marginComponent / 4}px`,
                                // bgcolor: themes.color.main
                            }}
                            label={
                                <Typography sx={{ fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default }, color: themes.color.mainText, fontWeight: "bold" }}>
                                    {item}
                                </Typography>
                            }
                        />
                    );
                })}
            </Grid>
        );
    }

    const renderSkill = () => {
        return (
            <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent / 2}px`,
                        p: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderSubheader("Code Editor / IDE")}
                    {renderItemSkill(listCodeEditor)}
                    <CustomDivider />
                    {renderSubheader("Git / Version Control")}
                    {renderItemSkill(listVersionControl)}
                    <CustomDivider />
                    {renderSubheader(`Programing Languages (${word().TEXT_BASE})`)}
                    {renderItemSkill(listProgramingLanguageBase)}
                    <CustomDivider />
                    {renderSubheader(`Programing Languages (${word().TEXT_BASIC})`)}
                    {renderItemSkill(listProgramingLanguageBasic)}
                    <CustomDivider />
                    {renderSubheader("Framework")}
                    {renderItemSkill(listFramework)}
                    <CustomDivider />
                    {renderSubheader("Library")}
                    {renderItemSkill(listLibrary)}
                </Grid>
            </Fade>
        );
    }

    return (
        <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, pt: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ pb: `${themes.marginComponent}px` }}>
                    <CustomHeader text={word().MENU_3} />
                    {renderSkill()}
                    <Footer />
                </Grid>
            </Box>
        </Box>
    );
}