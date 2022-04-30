import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import useElevationStyles from "../Hooks/useElevationStyles";
function Block(props, ref) {
    const { children, elevation = 0, style, onLayout, pointerEvents, testID, shadowColor, ...styleProps } = props;
    const elevationStyles = useElevationStyles(elevation, shadowColor);
    return (<View ref={ref} testID={testID} onLayout={onLayout} pointerEvents={pointerEvents} style={[elevationStyles, styleProps, style]}>
      {children}
    </View>);
}
export default memo(forwardRef(Block));
