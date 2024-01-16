import styled from "styled-components";
import ContainerColumn from "../../../Components/Container/ContainerColumn";

const FreeTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: calc(100% - 60px);
    padding: 30px;
    margin: 15px 0;
    border-radius: 15px;

    background: ${(props) => props.$background};
`;
const FreeTypeHeader = styled(ContainerColumn)`
    gap: 1rem;
`;
const FreeMileageContainer = styled(ContainerColumn)``;

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    //font-size: 2rem;
    font-size: 25px;
    padding : 10px;
`;
const TextFreeHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`;
const TextFreeDescription = styled.h1`
    font-family: LINE-Rg;
    font-size: 1rem;
    color: ${(props) => props.$color || "gray"};
`;

const NavButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 300px;
    height: 90px;

    border: none;
    border-radius: 15px;

    background: ${(props) => props.$background};
`;
const ButtonImg = styled.img`
    flex: 3;
    object-fit: cover;
    width: 70px;
`;
const ButtonTextContainer = styled.div`
    flex: 7;
    color: white;
`;
export default function Comopnent() {
    return (
        <FreeMileageContainer>
            <TextHeader>무료 마일리지 받기</TextHeader>

            <FreeTypeContainer $background="#D6E4F7">
                <FreeTypeHeader>
                    <TextFreeHeader>광고 보고 무료 마일리지 받기</TextFreeHeader>
                    <TextFreeDescription> 30초 동영상 광고를 시청하고 1000 마일리지를 받으세요! </TextFreeDescription>
                </FreeTypeHeader>

                <NavButton $background="#122033">
                    <ButtonImg src="/img/charge/동영상아이콘 1.svg" />
                    <ButtonTextContainer>
                        <TextFreeHeader>광고 시청</TextFreeHeader>
                        <TextFreeDescription $color="white"> 1000 마일리지 적립 </TextFreeDescription>
                    </ButtonTextContainer>
                </NavButton>
            </FreeTypeContainer>

            <FreeTypeContainer $background="#FFE1D3">
                <FreeTypeHeader>
                    <TextFreeHeader>공유하고 무료 마일리지 받기</TextFreeHeader>
                    <TextFreeDescription> 법학박사를 친구들에게 공유하고 500 마일리지를 받으세요! </TextFreeDescription>
                </FreeTypeHeader>

                <NavButton $background="#FF7B3F">
                    <ButtonImg src="/img/charge/공유아이콘 1.svg" />
                    <ButtonTextContainer>
                        <TextFreeHeader>공유하기</TextFreeHeader>
                        <TextFreeDescription $color="white"> 500 마일리지 적립 </TextFreeDescription>
                    </ButtonTextContainer>
                </NavButton>
            </FreeTypeContainer>
        </FreeMileageContainer>
    );
}
