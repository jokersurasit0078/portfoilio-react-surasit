import { Box, Fade, Grid } from "@mui/material";
import CustomAppbar from "../../components/appbar/CustomAppbar";
import themes from "../../constants/themes";
import { word } from "../../languages/Word";
import CustomHeader from "../../components/text/CustomHeader";
import Footer from "../../components/footer/Footer";
import RowHeader from "./components/RowHeader";
import RowDetail from "./components/RowDetail";
import CustomDivider from "./components/CustomDivider";

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

  const renderJavaScriptMath = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent / 2}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={"JavaScript Math"} />
          <RowDetail xs={12} title={"const PI = 3.14;"} result={""} mb={true} />
          <RowDetail
            xs={6}
            title={"Math.round(PI);"}
            result={Math.round(PI)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.floor(PI);"}
            result={Math.floor(PI)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.ceil(PI);"}
            result={Math.ceil(PI)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.pow(2, 3);"}
            result={Math.pow(2, 3)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.sqrt(9);"}
            result={Math.sqrt(9)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.abs(-9);"}
            result={Math.abs(-9)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.min(1, 2, 3, 4, 5);"}
            result={Math.min(1, 2, 3, 4, 5)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.max(1, 2, 3, 4, 5);"}
            result={Math.max(1, 2, 3, 4, 5)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.random();"}
            result={"0.01... - 0.99..."}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.sin(90);"}
            result={Math.sin(90)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Math.cos(90);"}
            result={Math.cos(90)}
            mb={true}
          />
          <RowDetail xs={12} title={"Math.tan(90);"} result={Math.tan(90)} />
        </Grid>
      </Fade>
    );
  };

  const renderNumberInJavaScript = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 2, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={"Number in JavaScript"} />
          <RowDetail xs={12} title={"const PI = 3.14;"} result={""} mb={true} />
          <RowDetail
            xs={6}
            title={"PI.toFixed(0);"}
            result={PI.toFixed(0)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"PI.toFixed(1);"}
            result={PI.toFixed(1)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"PI.toFixed(2);"}
            result={PI.toFixed(2)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"PI.toPrecision(1);"}
            result={PI.toPrecision(1)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"PI.valueOf());"}
            result={PI.valueOf()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Number(new Date());"}
            result={Number(new Date())}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`parseInt("3.14");`}
            result={parseInt("3.14")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`parseFloat("7.5 days");`}
            result={parseFloat("7.5 days")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Number.MAX_VALUE();"}
            result={"1.7976931348623157e+308"}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Number.MIN_VALUE();"}
            result={"5e-324"}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Number.POSITIVE_INFINITY();"}
            result={"Infinity"}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"Number.NEGATIVE_INFINITY();"}
            result={"-Infinity"}
          />
        </Grid>
      </Fade>
    );
  };

  const renderJavaScriptStringMethods = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 3, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={"JavaScript String Methods"} />
          <RowDetail
            xs={6}
            title={`" Hello World ".trim();`}
            result={`"${" Hello World ".trim()}"`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".length();`}
            result={hello.length}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".charAt(1);`}
            result={hello.charAt(1)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".startsWith("Hello");`}
            result={hello.startsWith("Hello")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".endsWith("d");`}
            result={hello.endsWith("d")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".includes("World");`}
            result={hello.includes("World")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".indexOf("World");`}
            result={hello.indexOf("World")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".match(/[A-Z]/g);`}
            result={`["H", "W"]`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".repeat(2);`}
            result={`"${hello.repeat(2)}"`}
            mb={true}
          />

          <RowDetail
            xs={6}
            title={`"Hello World".replace("World", "Earth");`}
            result={`"${hello.replace("World", "Earth")}"`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".slice(6, 10);`}
            result={`"${hello.slice(6, 10)}"`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".split(" ");`}
            result={`["Hello", "World"]`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".toLowerCase();`}
            result={`"${hello.toLowerCase()}"`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`"Hello World".toUpperCase();`}
            result={`"${hello.toUpperCase()}"`}
          />
        </Grid>
      </Fade>
    );
  };

  const renderJavaScriptArrayMethods = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 4, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={"JavaScript Array Methods"} />
          <RowDetail
            xs={6}
            title={`${arrStr}.at(1);`}
            result={arr.at(1)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.push(8);`}
            result={arrPush}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.pop();`}
            result={arrPop}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.fill();`}
            result={arrFill}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.join("x");`}
            result={arrJoin}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.shift();`}
            result={arrShift}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.reverse();`}
            result={arrReverse}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.unshift(3);`}
            result={arrUnShift}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.includes(6);`}
            result={arr.includes(6)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.map(item => item * 2);`}
            result={arrMap}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.filter(item => item > 5);`}
            result={arrFilter}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.find(item => item > 5)`}
            result={`${arr.find((item) => item > 5)} (first match)`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.every(item => item > 0);`}
            result={arr.every((item) => item > 0)}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`${arrStr}.findIndex(item => item === 5);`}
            result={arr.findIndex((item) => item === 5)}
            mb={true}
          />
          <RowDetail
            xs={12}
            title={`${arrStr}.reduce((prev, curr) => prev + curr, 0);`}
            result={arr.reduce((prev, curr) => prev + curr, 0)}
          />
        </Grid>
      </Fade>
    );
  };

  const renderJavaScriptDateMethods = () => {
    return (
      <Fade in={true} timeout={{ enter: fadeTime * 5, exit: 200 }}>
        <Grid
          container
          item
          xs={12}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            width: { xs: "90%", lg: themes.containerWidth },
            bgcolor: themes.color.hover,
            mt: `${themes.marginComponent}px`,
            pt: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pb: {
              xs: `${themes.marginComponent / 2}px`,
              md: `${themes.marginComponent}px`,
            },
            pl: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            pr: {
              xs: `${themes.marginComponent / 3}px`,
              md: `${themes.marginComponent}px`,
            },
            borderRadius: themes.radius,
            boxShadow: themes.shadow,
          }}
        >
          <RowHeader header={"JavaScript Date Methods"} />
          <RowDetail
            xs={12}
            title={"const today = new Date();"}
            result={""}
            mb={true}
          />
          <RowDetail xs={12} title={"today"} result={today} mb={true} />
          <RowDetail
            xs={6}
            title={"today.getDate()"}
            result={today.getDate()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getDay()"}
            result={`${today.getDay()} (0 is Sunday)`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getMonth()"}
            result={`${today.getMonth()} (0 is January)`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getFullYear()"}
            result={today.getFullYear()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getHours()"}
            result={today.getHours()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getMinutes()"}
            result={today.getMinutes()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getSeconds()"}
            result={today.getSeconds()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getMilliseconds()"}
            result={today.getMilliseconds()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getTime()"}
            result={today.getTime()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getTimezoneOffset()"}
            result={today.getTimezoneOffset()}
          />
          <CustomDivider />
          <RowDetail
            xs={6}
            title={"today.getUTCDate()"}
            result={today.getUTCDate()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCDay()"}
            result={`${today.getUTCDay()} (0 is Sunday)`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCMonth()"}
            result={`${today.getUTCMonth()} (0 is January)`}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCFullYear()"}
            result={today.getUTCFullYear()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCHours()"}
            result={today.getUTCHours()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCMinutes()"}
            result={today.getUTCMinutes()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCSeconds()"}
            result={today.getUTCSeconds()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.getUTCMilliseconds()"}
            result={today.getUTCMilliseconds()}
          />

          <CustomDivider />
          <RowDetail
            xs={12}
            title={"today.toString()"}
            result={today.toString()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`today.toLocaleString("th")`}
            result={today.toLocaleString("th")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.toDateString()"}
            result={today.toDateString()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`today.toLocaleDateString("th")`}
            result={today.toLocaleDateString("th")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.toTimeString()"}
            result={today.toTimeString()}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={`today.toLocaleTimeString("th")`}
            result={today.toLocaleTimeString("th")}
            mb={true}
          />
          <RowDetail
            xs={6}
            title={"today.toUTCString()"}
            result={today.toUTCString()}
          />
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
