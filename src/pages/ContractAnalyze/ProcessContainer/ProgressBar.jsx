import styled from 'styled-components';
import BeigeContainer from './BeigeContainer';

const ProgColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const TextHeader = styled.h1`
    font-family: 'LINE-Bd';
    font-size: 2rem;
`
const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between; //컨테이너 사이의 공간을 균등하게 배분
    align-items: center;
    box-sizing: border-box; //padding과 border를 너비에 포함시키기
`

const ProgressBarWrapper = styled.div`
    flex: 3; // 프로그레스 바 부분
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const ContainerText = styled.div`
    flex: 1; // 텍스트 부분
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    background: lightgrey;
    height: 40px;
    border-radius: 20px;
    overflow: hidden; //내부 바가 컨테이너를 넘어가지 않도록
`;

const ProgressBarFiller = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #1CEC0A, #F5DE07, #FD0A0A); //안전에서 위험으로 그라데이션
    transition: width 0.5s ease-in-out;
`;

const PositionMarker = styled.div`
position: relative;
    top: 0; // 상단에 위치시킴
    left: ${props => props.riskValue}%; //위험수치를 퍼센테이지로 변환 -> left 값에 적용
    
    display: flex;
    align-items: center;
    height: 100%;
`;

const PositionImage = styled.img`
    width: 50px;
    height: 50px; //
`;

export default function Component({ riskValue }) {
    //riskValue는 서버로부터 받은 위험수치 (1 이상 100 이하의 자연수)


    return (
        <BeigeContainer>
            <TextHeader>3개의 조항이 위험해요!</TextHeader>
            <TypeContainer>
                <ContainerText>
                    <p style={{ fontWeight: 'bold' }}>안전</p>
                </ContainerText>
                <ProgressBarWrapper>
                    <ProgColumn>
                        <PositionMarker riskValue='20'>
                            <PositionImage src="img/risk_percent.svg" alt="위치" />
                        </PositionMarker>
                        <ProgressBarContainer>
                            <ProgressBarFiller />
                        </ProgressBarContainer>
                    </ProgColumn>
                </ProgressBarWrapper>
                <ContainerText>
                    <p style={{ fontWeight: 'bold' }}>위험</p>
                </ContainerText>
            </TypeContainer>
        </BeigeContainer>
    )
}