import { Box, Chip, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../component/appbar/CustomAppbar";
import themes from "../../constant/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../component/text/CustomHeader";
import Footer from "../../component/footer/Footer";

export default function Skill() {
    const listCodeEditor = [
        "Visual Studio Code"
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
                sx={{

                }}
            >
                {listItem.map((item: any, index: number) => {
                    return (
                        <Chip
                            key={"ITEM_SKILL_" + item.toUpperCase()}
                            sx={{
                                height: "30px",
                                mr: listItem.length - 1 !== index ? `${themes.marginComponent / 4}px` : "0px",
                                mb: `${themes.marginComponent / 4}px`,
                                backgroundColor: themes.color.main
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
            <Grid
                container
                item xs={12}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: `${themes.marginComponent / 2}px`,
                    padding: `${themes.marginComponent}px`,
                    borderRadius: themes.radius,
                    boxShadow: themes.shadow
                }}
            >
                {renderSubheader("Code Editor")}
                {renderItemSkill(listCodeEditor)}
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
        );
    }

    return (
        <Box sx={{ display: "flex", backgroundColor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, paddingTop: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingBottom: `${themes.marginComponent}px`}}>
                    <CustomHeader text={word().MENU_3} />
                    {renderSkill()}
                    <Footer />
                </Grid>
            </Box>
        </Box>
    );
}