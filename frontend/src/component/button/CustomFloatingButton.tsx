
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import themes from "../../constant/themes";
import CustomIcon from "../icon/CustomIcon";

export default function CustomFloatingButton() {
    const sizeButton = 40;
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        <Fab
            color="primary"
            aria-label="scroll to top"
            sx={{
                position: "fixed",
                display: scrollPosition > 0 ? "" : "none",
                bottom: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                right: { xs: `${themes.marginComponent / 2}px`, md: `${themes.marginComponent}px` },
                maxWidth: { xs: `${sizeButton - 4}px`, md: `${sizeButton}px` },
                maxHeight: { xs: `${sizeButton - 4}px`, md: `${sizeButton}px` },
            }}
            onClick={scrollToTop}
        >
            <CustomIcon name={"up"} sizeNumber={{ xs: `${(sizeButton - 5) / 2}px`, md: `${sizeButton / 2}px` }} color={"white"} />
        </Fab>
    );
}