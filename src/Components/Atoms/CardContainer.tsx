import styled from '@emotion/native'
import { colors } from '@Utils/Color/colors';

const CardConatiner = styled.View(({ width, height, z, direction, justify, align, bg, position, b, padd, shadow, paddingLeft }: any) => `
    height: ${height || null};
    position: ${position || "relative"};
    bottom: ${b || null};
    padding: ${padd || "2px"};
    paddingleft: ${paddingLeft || null}
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
