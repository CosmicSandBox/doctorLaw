import styled from 'styled-components';

const BodyContainer = styled.div`
    position: relative;
`

const ChildrenContainer = styled.div`
    position:absolute;
    display: flex;
    width: 100%;
    height: calc(100vh- 3px);
`

const BeigeContainer = styled.div`
    position: absolute;
    display: flex;

    width: 100%;
    height: 300px;
    background-color: beige;

`;

export default function Component({$imgSrc, children}) {
    return (
        <BodyContainer>
            <BeigeContainer/>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </BodyContainer>
    )
}