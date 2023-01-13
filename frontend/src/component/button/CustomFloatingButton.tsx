
import { Fab, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import themes from "../../constant/themes";
import CustomIcon from "../icon/CustomIcon";

export default function CustomFloatingButton() {
    const sizeButton = 40;
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fade in={scrollPosition > 0} timeout={{ enter: 500, exit: 500 }}>
            <Fab
                color="primary"
                aria-label="scroll to top"
                sx={{
                    position: "fixed",
                    bottom: `${themes.marginComponent}px`,
                    right: `${themes.marginComponent}px`,
                    width: `${sizeButton}px`,
                    height: `${sizeButton}px`,
                }}
                onClick={scrollToTop}
            >
                <CustomIcon name={"up"} sizeNumber={`${sizeButton / 2}px`} color={"white"} />
            </Fab>
        </Fade>
    );
}