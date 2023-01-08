import { Box, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../component/appbar/CustomAppbar";
import themes from "../../constant/themes";
import profile from "../../image/profile.jpg";
import reactImg from "../../image/react.png";
import firebaseImg from "../../image/firebase.png";
import reduxImg from "../../image/redux.png";
import routerImg from "../../image/react_router.png";
import muiImg from "../../image/mui.png";
import { word } from "../../languages/Word";
import Footer from "../../component/footer/Footer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
    const listImg = [
        { src: reactImg, width: 40, height: 40 },
        { src: reduxImg, width: 60, height: 50 },
        { src: muiImg, width: 40, height: 40 },
        { src: routerImg, width: 75, height: 40 },
        { src: firebaseImg, width: 150, height: 40 },
    ];
    const profileImgSize = 220;
    const imgRef = useRef<HTMLDivElement | null>(null);
    const [overflowImg, setOverflowImg] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
    }, []);

    const updateDimensions = () => {
        isOverflowImgTools(imgRef.current);
    }

    const isOverflowImgTools = (event: any) => {
        const resultWidth = event.offsetHeight < event.scrollHeight;
        console.log(`${event.offsetWidth} < ${event.scrollWidth} result = ${resultWidth}`);
        setOverflowImg(resultWidth);
    }

    const renderTextProfile = (xs: string, md: string) => {
        return (
            <Grid item xs={7} container direction={"column"} columns={{ xs: 2, md: 12 }} sx={{ display: { xs: xs, md: md }, marginTop: { xs: `${themes.marginComponent / 2}px`, md: 0 } }}>
                <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", color: themes.color.mainText, marginBottom: `${themes.marginComponent / 6}px` }}>
                    {word().TEXT_PROFILE_NAME}
                </Typography>
                <Grid container direction={"row"} sx={{ marginBottom: `${themes.marginComponent / 4}px` }}>
                    <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", color: themes.color.mainText, backgroundColor: themes.color.main, paddingLeft: "10px", paddingRight: "10px", borderRadius: themes.radius }}>
                        Front-end
                    </Typography>
                    <Typography sx={{ fontSize: { xs: themes.fontsize.large, md: themes.fontsize.subHeader }, fontWeight: "bold", paddingLeft: "7px", color: themes.color.mainText }}>
                        Developer
                    </Typography>
                </Grid>
                <Typography sx={{ fontSize: themes.fontsize.default, color: themes.color.mainText, marginBottom: `${themes.marginComponent / 4}px` }}>
                    {word().TEXT_PROFILE_DETAIL_1}
                </Typography>
                <Typography sx={{ fontSize: themes.fontsize.small, color: themes.color.mainText, marginBottom: `${themes.marginComponent / 4}px` }}>
                    {word().TEXT_PROFILE_DETAIL_2}
                </Typography>
                <Grid container direction={"row"} wrap={"nowrap"} sx={{ maxWidth: "100%", overflow: "scroll", display: overflowImg ? "none" : "" }} ref={imgRef}>
                    {listImg.map((item: any, index: number) => {
                        return (
                            <Grid
                                key={"IMG_" + index}
                                container
                                direction={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                    padding: `${themes.marginComponent / 4}px`,
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    width: item.width + 20,
                                    height: 60,
                                    marginRight: index !== listImg.length - 1 ? `${themes.marginComponent / 4}px` : 0,
                                    marginBottom: index !== listImg.length - 1 ? `${themes.marginComponent / 4}px` : 0,
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
            </Grid>
        );
    }

    const renderProfile = () => {
        return (
            <Grid
                container
                item xs={12}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    width: { xs: "90%", lg: themes.containerWidth },
                    backgroundColor: themes.color.hover,
                    marginTop: `${themes.marginComponent / 2}px`,
                    padding: `${themes.marginComponent}px`,
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
            </Grid >
        );
    }

    return (
        <Box sx={{ display: "flex", backgroundColor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, paddingTop: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ paddingBottom: `${themes.marginComponent}px` }}>
                    {renderProfile()}
                    <Footer />
                </Grid>
            </Box>
        </Box >
    );
}