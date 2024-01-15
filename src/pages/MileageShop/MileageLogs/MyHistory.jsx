import React from 'react';
import styled from 'styled-components';
import ContainerColumn from '../../../Components/Container/ContainerColumn';

const HistoryContainer = styled.div`
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
`;

const HistoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #dee2e6;

    &:last-child {
        border-bottom: none;
    }
`;

const HistoryDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const PointContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

const TextHeader = styled.h1`
    font-family: LINE-Bd;
    font-size: 1.5rem;
`
const HistoryType = styled.span`
    font-size: 1.2rem;
    color: #495057;
`;

const HistoryDate = styled.span`
    font-size: 1rem;
    color: #adb5bd;
`;

const PointsChange = styled.span`
    font-family: LINE-Bd;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${props => props.isPositive ? '#51cf66' : '#fa5252'};
`;
const PointsDetail = styled.span`

`

const PointsHistory = ({ history }) => {
    return (
        <HistoryContainer>
            {history.map((item, index) => (
                <HistoryItem key={index}>
                    <HistoryDetails>
                        <HistoryType>{item.type}</HistoryType>
                        <HistoryDate>{item.date}</HistoryDate>
                    </HistoryDetails>
                    <PointContainer>
                        <PointsChange isPositive={item.points > 0}>
                            {item.points > 0 ? `+${item.points}` : item.points} P
                        </PointsChange>
                        <PointsDetail>
                            {item.points > 0 ? "충전" : "사용"}
                        </PointsDetail>
                    </PointContainer>
                </HistoryItem>
            ))}
        </HistoryContainer>
    );
};

// 예시 데이터
const historyData = [
    { type: '1회 이용권 구매', date: '24.01.07 18:15', points: -1000 },
    { type: '5회 이용권 구매', date: '24.01.06 13:42', points: -4000 },
    { type: '10,000 마일리지 충전', date: '24.01.06 12:30', points: +4000 },
];

const App = () => {
    return (
        <ContainerColumn>
            <TextHeader>마일리지 사용 내역</TextHeader>
            <PointsHistory history={historyData} />
        </ContainerColumn>
    );
};

export default App;
