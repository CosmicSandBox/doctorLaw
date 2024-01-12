import styled from "styled-components";
import ContainerRow from "../../Components/Container/ContainerRow";
import ContainerColumn from "../../Components/Container/ContainerColumn";

// TextHeader에 스타일 적용
const TextHeader = styled.h1`
    width: 100%;
    flex-shrink: 0;
    color: #1f2937;
    text-align: center;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 752;
    line-height: normal;
    margin: 20px 0; /* 위아래 간격을 조절할 마진 설정 */
`;

const ImageContainer = styled(ContainerRow)`
    gap: 10px;
`;

// ImageDiv에 스타일 적용
const ImageDiv = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-image: url(/img/bannerCircle.svg);
    background-size: cover;
    margin: 20px 0; /* 위아래 간격을 조절할 마진 설정 */
`;

// ImageItem에 스타일 적용
const ImageItem = styled.img`
    width: 80%;
    height: 80%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// ImageType에 스타일 적용
const ImageType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// ImageText에 스타일 적용
const ImageText = styled.p`
    color: #1f2937;
    background-color: #d1d5db;
    border-radius: 16px;
    padding: 7px;
    color: #122033;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 752;
    line-height: normal;
    width: 50%;
`;

export default function Component() {
    return (
        <ContainerColumn>
            {/* TextHeader 컴포넌트 사용 */}
            <TextHeader>계약서 고민을 해결해 드립니다</TextHeader>

            <ImageContainer>
                <ImageType>
                    {/* ImageDiv와 ImageItem을 사용 */}
                    <ImageDiv>
                        <ImageItem src="/img/부동산계약서.svg" />
                    </ImageDiv>
                    {/* ImageText에 스타일 적용 */}
                    <ImageText>부동산계약서</ImageText>
                </ImageType>
                <ImageType>
                    <ImageDiv>
                        <ImageItem src="/img/근로계약서.svg" />
                    </ImageDiv>
                    <ImageText>근로계약서</ImageText>
                </ImageType>
                <ImageType>
                    <ImageDiv>
                        <ImageItem src="/img/유언장.svg" />
                    </ImageDiv>
                    <ImageText>유언장</ImageText>
                </ImageType>
            </ImageContainer>
        </ContainerColumn>
    );
}
