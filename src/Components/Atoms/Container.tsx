import styled from '@emotion/native'

const Container = styled.View(({ width, height, z, direction, justify, align, bg, position, b, padd }: any) => `
    height: ${height || null};
    position: ${position || "relative"};
    bottom: ${b || null};
    padding: ${padd || "2px"};
    z-index: ${z || 0};
    width: ${width || "100%"};
    display:flex;
    flex-direction: ${direction || "row"};
    justify-content: ${justify || "center"};
    align-items:${align || "center"};
    background-color: ${bg || "white"};
`)





export default Container;