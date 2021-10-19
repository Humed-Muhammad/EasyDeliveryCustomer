import styled from '@emotion/native'

const CardConatiner = styled.View(({ width, height, z, direction, justify, align, bg, position, b, padd, shadow }: any) => `
    height: ${height || null};
    position: ${position || "relative"};
    bottom: ${b || null};
    padding: ${padd || "2px"};
    margin: 5px;
    z-index: ${z || 0};
    width: ${width || "100%"};
    display:flex;
    flex-direction: ${direction || "row"};
    justify-content: ${justify || "center"};
    align-items:${align || "center"};
    background-color: ${bg || "white"};
    shadowColor: ${shadow.color};
    shadoOffset: ${shadow.offSet};
    shadowOpacity: ${shadow.opacity};
    shadowRadius: ${shadow.radius};
    elevation: ${shadow.elevation};
    border-radius: 10px;
`)




export default CardConatiner;
