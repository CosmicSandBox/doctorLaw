import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    position: relative;
    width: ${props => props.$width || "45rem"};
    height: 150px;
    background: #122033;
    border-radius: 20px;
    padding: 1.5rem;
    cursor: pointer;
    color: white;
`
const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 1.5rem;
`

const ShortcutContainer = styled.div`
    position: absolute;
    bottom: 0;
    right:0;

    display: flex;
    flex-direction: column;

    padding: 30px;
    gap: 10px;
`
const Image = styled.img`
    width: 150px;
    height: 90px;
`

export default function Component({$width}) {
    const navigate = useNavigate();

    return (
        <ButtonContainer $width={$width} onClick={() => navigate('/shop')}>
            <TextHeader>마일리지 쇼핑하러 가기</TextHeader>
            <ShortcutContainer>
                <Image src="/img/coins.png"/>
            </ShortcutContainer>
        </ButtonContainer>
    )
}