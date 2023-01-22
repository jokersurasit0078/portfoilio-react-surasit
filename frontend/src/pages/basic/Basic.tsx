import { Box, Chip, Fade, Grid, Typography } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import Footer from "../../components/footer/Footer";

export default function Basic() {
    const fadeTime = 500;
    // NUMBER AND MATH
    const PI = 3.14;
    // STRING
    const hello = "Hello World";
    // ARRAY
    const arr = [4, 5, 6, 7];
    const arrStr = "[4, 5, 6, 7]";
    const arrPush = `[4, 5, 6, 7, 8]`;
    const arrPop = `[4, 5, 6]`;
    const arrFill = `[1, 1, 1, 1]`;
    const arrJoin = `"${arr.join("x")}"`;
    const arrShift = "[5, 6, 7]";
    const arrReverse = "[7, 6, 5 ,4]";
    const arrUnShift = "[3, 4 ,5, 6, 7]";
    const arrMap = "[8, 10 ,12, 14]";
    const arrFilter = "[6, 7]";
    // DATE
    const today = new Date();

    const CustomDivider = (prosp: any) => {
        return (
            <div style={{ backgroundColor: "white", width: "100%", height: "1px", marginTop: themes.marginComponent / 3, marginBottom: themes.marginComponent / 3 }} />
        );
    }

    const renderRowHeader = (header: string) => {
        return (
            <Grid item xs={12} sx={{ mb: `${themes.marginComponent / 3}px` }}>
                <Chip
                    sx={{ bgcolor: themes.color.main }}
                    label={
                        <Typography sx={{ fontSize: { xs: themes.fontsize.default, md: themes.fontsize.big }, color: themes.color.mainText, fontWeight: "bold" }}>
                            {header}
                        </Typography>
                    }
                />
            </Grid>
        );
    }

    const renderRowDetail = (xs: number, title: string, result: any, mb?: boolean) => {
        return (
            <Grid
                container
                item xs={xs}
                columns={{ xs: 2, md: 12 }}
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                wrap={"nowrap"}
                sx={{
                    pl: `${themes.marginComponent / 2}px`,
                    pr: `${themes.marginComponent / 3}px`,
                    mb: mb ? `${themes.marginComponent / 10}px` : 0,
                }}
            >
                <Typography sx={{ fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default }, color: themes.color.mainText }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: { xs: themes.fontsize.small, md: themes.fontsize.default }, color: themes.color.third, pl: `${themes.marginComponent / 3}px` }}>
                    {result ? `// ${result}` : ""}
                </Typography>
            </Grid>
        );
    }

    const renderJavaScriptMath = () => {
        return (
            <Fade in={true} timeout={{ enter: fadeTime, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent / 2}px`,
                        pt: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pb: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pl: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        pr: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderRowHeader("JavaScript Math")}
                    {renderRowDetail(12, "const PI = 3.14;", "", true)}
                    {renderRowDetail(6, "Math.round(PI);", Math.round(PI), true)}
                    {renderRowDetail(6, "Math.floor(PI);", Math.floor(PI), true)}
                    {renderRowDetail(6, "Math.ceil(PI);", Math.ceil(PI), true)}
                    {renderRowDetail(6, "Math.pow(2, 3);", Math.pow(2, 3), true)}
                    {renderRowDetail(6, "Math.sqrt(9);", Math.sqrt(9), true)}
                    {renderRowDetail(6, "Math.abs(-9);", Math.abs(-9), true)}
                    {renderRowDetail(6, "Math.min(1, 2, 3, 4, 5);", Math.min(1, 2, 3, 4, 5), true)}
                    {renderRowDetail(6, "Math.max(1, 2, 3, 4, 5);", Math.max(1, 2, 3, 4, 5), true)}
                    {renderRowDetail(6, "Math.random();", "0.01... - 0.99...", true)}
                    {renderRowDetail(6, "Math.floor(Math.random() * 10);", "0-9", true)}
                    {renderRowDetail(6, "Math.sin(90);", Math.sin(90), true)}
                    {renderRowDetail(6, "Math.cos(90);", Math.cos(90), true)}
                    {renderRowDetail(12, "Math.tan(90);", Math.tan(90))}
                </Grid>
            </Fade>
        );
    }

    const renderNumberInJavaScript = () => {
        return (
            <Fade in={true} timeout={{ enter: fadeTime * 2, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent}px`,
                        pt: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pb: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pl: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        pr: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderRowHeader("Number in JavaScript")}
                    {renderRowDetail(12, "const PI = 3.14;", "", true)}
                    {renderRowDetail(6, "PI.toFixed(0);", PI.toFixed(0), true)}
                    {renderRowDetail(6, "PI.toFixed(1);", PI.toFixed(1), true)}
                    {renderRowDetail(6, "PI.toFixed(2);", PI.toFixed(2), true)}
                    {renderRowDetail(6, "PI.toPrecision(1);", PI.toPrecision(1), true)}
                    {renderRowDetail(6, "PI.valueOf();", PI.valueOf(), true)}
                    {renderRowDetail(6, "Number(new Date());", Number(new Date()), true)}
                    {renderRowDetail(6, `parseInt("3.14");`, parseInt("3.14"), true)}
                    {renderRowDetail(6, `parseFloat("7.5 days");`, parseFloat("7.5 days"), true)}
                    {renderRowDetail(6, "Number.MAX_VALUE();", "1.7976931348623157e+308", true)}
                    {renderRowDetail(6, "Number.MIN_VALUE();", "5e-324", true)}
                    {renderRowDetail(6, "Number.POSITIVE_INFINITY();", "Infinity", true)}
                    {renderRowDetail(6, "Number.NEGATIVE_INFINITY();", "-Infinity")}
                </Grid>
            </Fade>
        );
    }

    const renderJavaScriptStringMethods = () => {
        return (
            <Fade in={true} timeout={{ enter: fadeTime * 3, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent}px`,
                        pt: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pb: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pl: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        pr: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderRowHeader("JavaScript String Methods")}
                    {renderRowDetail(6, `" Hello World ".trim();`, `"${" Hello World ".trim()}"`, true)}
                    {renderRowDetail(6, `"Hello World".length();`, hello.length, true)}
                    {renderRowDetail(6, `"Hello World".charAt(1);`, hello.charAt(1), true)}
                    {renderRowDetail(6, `"Hello World".startsWith("Hello");`, hello.startsWith("Hello"), true)}
                    {renderRowDetail(6, `"Hello World".endsWith("d");`, hello.endsWith("d"), true)}
                    {renderRowDetail(6, `"Hello World".includes("World");`, hello.includes("World"), true)}
                    {renderRowDetail(6, `"Hello World".indexOf("World");`, hello.indexOf("World"), true)}
                    {renderRowDetail(6, `"Hello World".match(/[A-Z]/g);`, `["H", "W"]`, true)}
                    {renderRowDetail(6, `"Hello World".repeat(2);`, `"${hello.repeat(2)}"`, true)}
                    {renderRowDetail(6, `"Hello World".replace("World", "Earth");`, `"${hello.replace("World", "Earth")}"`, true)}
                    {renderRowDetail(6, `"Hello World".slice(6, 10);`, `"${hello.slice(6, 10)}"`, true)}
                    {renderRowDetail(6, `"Hello World".split(" ");`, `["Hello", "World"]`, true)}
                    {renderRowDetail(6, `"Hello World".toLowerCase();`, `"${hello.toLowerCase()}"`, true)}
                    {renderRowDetail(6, `"Hello World".toUpperCase();`, `"${hello.toUpperCase()}"`)}
                </Grid>
            </Fade>
        );
    }

    const renderJavaScriptArrayMethods = () => {
        return (
            <Fade in={true} timeout={{ enter: fadeTime * 4, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent}px`,
                        pt: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pb: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pl: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        pr: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderRowHeader("JavaScript Array Methods")}
                    {renderRowDetail(6, `${arrStr}.at(1);`, arr.at(1), true)}
                    {renderRowDetail(6, `${arrStr}.push(8);`, arrPush, true)}
                    {renderRowDetail(6, `${arrStr}.pop();`, arrPop, true)}
                    {renderRowDetail(6, `${arrStr}.fill();`, arrFill, true)}
                    {renderRowDetail(6, `${arrStr}.join("x");`, arrJoin, true)}
                    {renderRowDetail(6, `${arrStr}.shift();`, arrShift, true)}
                    {renderRowDetail(6, `${arrStr}.reverse();`, arrReverse, true)}
                    {renderRowDetail(6, `${arrStr}.unshift(3);`, arrUnShift, true)}
                    {renderRowDetail(6, `${arrStr}.includes(6);`, arr.includes(6), true)}
                    {renderRowDetail(6, `${arrStr}.map(item => item * 2);`, arrMap, true)}
                    {renderRowDetail(6, `${arrStr}.filter(item => item > 5);`, arrFilter, true)}
                    {renderRowDetail(6, `${arrStr}.find(item => item > 5);`, `${arr.find(item => item > 5)} (first match)`, true)}
                    {renderRowDetail(6, `${arrStr}.every(item => item > 0);`, arr.every(item => item > 0), true)}
                    {renderRowDetail(6, `${arrStr}.findIndex(item => item === 5);`, arr.findIndex(item => item === 5), true)}
                    {renderRowDetail(12, `${arrStr}.reduce((prev, curr) => prev + curr, 0);`, arr.reduce((prev, curr) => prev + curr, 0))}
                </Grid>
            </Fade>
        );
    }

    const renderJavaScriptDateMethods = () => {
        return (
            <Fade in={true} timeout={{ enter: fadeTime * 5, exit: 200 }}>
                <Grid
                    container
                    item xs={12}
                    direction={"row"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                        width: { xs: "90%", lg: themes.containerWidth },
                        bgcolor: themes.color.hover,
                        mt: `${themes.marginComponent}px`,
                        pt: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pb: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                        pl: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        pr: { xs: `${themes.marginComponent / 3}px`, md: `${themes.marginComponent}px` },
                        borderRadius: themes.radius,
                        boxShadow: themes.shadow
                    }}
                >
                    {renderRowHeader("JavaScript Date Methods")}
                    {renderRowDetail(12, "const today = new Date();", "", true)}
                    {renderRowDetail(12, "today", today, true)}
                    {renderRowDetail(6, "today.getDate()", today.getDate(), true)}
                    {renderRowDetail(6, "today.getDay()", `${today.getDay()} (0 is Sunday)`, true)}
                    {renderRowDetail(6, "today.getMonth()", `${today.getMonth()} (0 is January)`, true)}
                    {renderRowDetail(6, "today.getFullYear()", today.getFullYear(), true)}
                    {/* {renderRowDetail(6, "today.getDate()", today.getYear(), true)} */}
                    {renderRowDetail(6, "today.getHours()", today.getHours(), true)}
                    {renderRowDetail(6, "today.getMinutes()", today.getMinutes(), true)}
                    {renderRowDetail(6, "today.getSeconds()", today.getSeconds(), true)}
                    {renderRowDetail(6, "today.getMilliseconds()", today.getMilliseconds(), true)}
                    {renderRowDetail(6, "today.getTime()", today.getTime(), true)}
                    {renderRowDetail(6, "today.getTimezoneOffset()", today.getTimezoneOffset())}
                    <CustomDivider />
                    {renderRowDetail(6, "today.getUTCDate()", today.getUTCDate(), true)}
                    {renderRowDetail(6, "today.getUTCDay()", `${today.getUTCDay()} (0 is Sunday)`, true)}
                    {renderRowDetail(6, "today.getUTCMonth()", `${today.getUTCMonth()} (0 is January)`, true)}
                    {renderRowDetail(6, "today.getUTCFullYear()", today.getUTCFullYear(), true)}
                    {renderRowDetail(6, "today.getUTCHours()", today.getUTCHours(), true)}
                    {renderRowDetail(6, "today.getUTCMinutes()", today.getUTCMinutes(), true)}
                    {renderRowDetail(6, "today.getUTCSeconds()", today.getUTCSeconds(), true)}
                    {renderRowDetail(6, "today.getUTCMilliseconds()", today.getUTCMilliseconds())}
                    <CustomDivider />
                    {renderRowDetail(12, "today.toString()", today.toString(), true)}
                    {renderRowDetail(6, `today.toLocaleString("th")`, today.toLocaleString("th"), true)}
                    {renderRowDetail(6, `today.toDateString()`, today.toDateString(), true)}
                    {renderRowDetail(6, `today.toLocaleDateString("th")`, today.toLocaleDateString("th"), true)}
                    {renderRowDetail(6, `today.toTimeString()`, today.toTimeString(), true)}
                    {renderRowDetail(6, `today.toLocaleTimeString("th")`, today.toLocaleTimeString("th"), true)}
                    {renderRowDetail(6, "today.toUTCString()", today.toUTCString())}
                </Grid>
            </Fade>
        );
    }

    return (
        <Box sx={{ display: "flex", bgcolor: themes.color.bg }}>
            <CustomAppbar />
            <Box sx={{ flexGrow: 1, width: { xs: "100%", sm: `calc(100% - ${themes.drawerWidth}px)` }, pt: themes.appbarHeight }}>
                <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ pb: `${themes.marginComponent}px` }}>
                    <CustomHeader text={word().MENU_6} />
                    {renderJavaScriptMath()}
                    {renderNumberInJavaScript()}
                    {renderJavaScriptStringMethods()}
                    {renderJavaScriptArrayMethods()}
                    {renderJavaScriptDateMethods()}
                    <Footer />
                </Grid>
            </Box>
        </Box>
    );
}