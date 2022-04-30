import { useMemo } from "react";
function useElevationStyles(elevation = 0, shadowColor = "black") {
    const shadowElevation = useMemo(() => elevation === 0
        ? {}
        : {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
                height: 0.6 * elevation,
                width: 0,
            },
            shadowColor,
            elevation,
        }, [elevation, shadowColor]);
    return shadowElevation;
}
export default useElevationStyles;