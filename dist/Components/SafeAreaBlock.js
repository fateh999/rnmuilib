import React, { forwardRef, memo } from "react";
import { SafeAreaView } from "react-native";
import useElevationStyles from "../Hooks/useElevationStyles";
function SafeAreaBlock(props, ref) {
    const { children, elevation = 0, style, onLayout, pointerEvents, testID, backgroundColor, shadowColor, ...styleProps } = props;
    const elevationStyles = useElevationStyles(elevation, shadowColor);
    return (<SafeAreaView ref={ref} testID={testID} onLayout={onLayout} pointerEvents={pointerEvents} style={[
            elevationStyles,
            styleProps,
            {
                backgroundColor: backgroundColor,
            },
            style,
        ]}>
      {children}
    </SafeAreaView>);
}
export default memo(forwardRef(SafeAreaBlock));
