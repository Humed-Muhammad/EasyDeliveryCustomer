import styled from '@emotion/native'

const Container = styled.View((props:any)=>`
    height: ${props.height};
    width:100%;
    display:flex;
    flex-direction: ${props.direction?props.direction:"row"};
    justify-content: ${props.justify};
    align-items:center;
    background-color: ${props.bg};
`)
    


        
 
export default Container;
