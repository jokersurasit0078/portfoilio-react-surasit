import { Box, Button, Fade, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import profile from "../../images/profile.jpg";
import reactImg from "../../images/react.png";
import firebaseImg from "../../images/firebase.png";
import reduxImg from "../../images/redux.png";
import routerImg from "../../images/react_router.png";
import muiImg from "../../images/mui.png";
import { word } from "../../languages/Word";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import CustomIcon from "../../components/icon/CustomIcon";

export default function Home() {
    const listImg = [
        { src: reactImg, width: 40, height: 40 },
        { src: reduxImg, width: 60, height: 50 },
        { src: muiImg, width: 40, height: 40 },
        { src: routerImg, width: 75, height: 40 },
        { src: firebaseImg, width: 150, height: 40 },
    ];
    const profileImgSize = 220;
    const urlGithub = "https://github.com/jokersurasit0078/portfoilio-react-surasit";
    // const imgRef = useRef<HTMLDivElement | null>(null);
    // const [overflowImg, setOverflowImg] = useState<boolean>(false);

    useEffect(() => {
        // window.addEventListener('resize', updateDimensions);
    }, []);

    // const updateDimensions = () => {
    //     isOverflowImgTools(imgRef.current);
    // }

    // const isOverflowImgTools = (event: any) => {
    //     const resultWidth = event.offsetWidth < event.scrollWidth;
    //     setOverflowImg(resultWidth);
    // }

    const renderTextProfile = (xs: string, md: string) => {
        return (
            <Grid item xs={7} container direction={"column"} columns={{ xs: 2, md: 12 }} sx={{ display: { xs: xs, md: md }, mt: { xs: `${themes.marginComponent / 2}px`, md: 0 } }}>
                <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", color: themes.color.mainText, mb: `${themes.marginComponent / 6}px` }}>
                    {word().TEXT_PROFILE_NAME}
                </Typography>
                <Grid container direction={"row"} sx={{ mb: `${themes.marginComponent / 4}px` }}>
                    <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", color: themes.color.mainText, bgcolor: themes.color.main, pl: "10px", pr: "10px", borderRadius: themes.radius }}>
                        Front-end
                    </Typography>
                    <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", pl: "7px", color: themes.color.mainText }}>
                        Developer
                    </Typography>
                </Grid>
                <Typography sx={{ fontSize: themes.fontsize.default, color: themes.color.mainText, mb: `${themes.marginComponent / 4}px` }}>
                    {word().TEXT_PROFILE_DETAIL_1}
                </Typography>
                <Typography sx={{ fontSize: themes.fontsize.small, color: themes.color.mainText, mb: `${themes.marginComponent / 4}px` }}>
                    {word().TEXT_PROFILE_DETAIL_2}
                </Typography>
                <Grid container direction={"row"} sx={{ maxWidth: "100%", mb: `${themes.marginComponent / 4}px` }}>
                    {listImg.map((item: any, index: number) => {
                        return (
                            <Grid
                                key={"IMG_" + index}
                                container
                                direction={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                    p: `${themes.marginComponent / 4}px`,
                                    bgcolor: "white",
                                    borderRadius: "10px",
                                    width: item.width + 20,
                                    height: 60,
                                    mr: index !== listImg.length - 1 ? `${themes.marginComponent / 4}px` : 0,
                                    mb: index !== listImg.length - 1 ? `${themes.marginComponent / 4}px` : 0,
                                    boxShadow: themes.shadow
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={"IMG_ALT_" + index}
                                    style={{
                                        width: item.width,
                                        height: item.height,
                                    }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container direction={"row"} alignItems={"center"} sx={{ maxWidth: "100%" }}>
                    <Typography sx={{ fontSize: themes.fontsize.small, color: themes.color.mainText, pr: `${themes.marginComponent / 4}px` }}>
                        {word().TEXT_PROFILE_DETAIL_3}
                    </Typography>
                    <Button
                        id={"BT_GITHUB"}
                        variant={"contained"}
                        size={"small"}
                        sx={{
                            textTransform: "none",
                            fontSize: themes.fontsize.small,
                            bgcolor: themes.color.bg,
                            "&:hover": {
                                bgcolor: themes.color.bg,
                                opacity: 0.8
                            }
                        }}
                        endIcon={<CustomIcon name={"url"} color={themes.color.mainText} sizeNumber={12} />}
                        onClick={() => window.open(urlGithub)}
                    >
                        {"GitHub"}
                    </Button>
                </Grid>
            </Grid>
        );
    }

    const renderProfile = () => {
        return (
            <Fade in={true} timeout={{ enter: 500, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent / 2}px`,
                        p: `${themes.marginComponent}px`,
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderTextProfile("none", "flex")}
                    <Grid item xs={5} container justifyContent={"center"} alignItems={"center"} columns={{ xs: 2, md: 12 }}>
                        <img
                            src={profile}
                            alt="profile"
                            style={{
                                width: `${profileImgSize}px`,
                                height: `${profileImgSize}px`,
                                borderRadius: `${profileImgSize / 2}px`,
                                border: `5px solid ${themes.color.main}`,
                                boxShadow: themes.shadow
                            }}
                        />
                    </Grid>
                    {renderTextProfile("flex", "none")}
                </Grid>
            </Fade>
        );
    }

    return (
        <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, pt: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingBottom: `${themes.marginComponent}px` }}>
                    {renderProfile()}
                    <Footer />
                </Grid>
            </Box>
        </Box >
    );
}