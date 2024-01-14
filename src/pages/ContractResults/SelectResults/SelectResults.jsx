import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BeigeContainer from "../BeigeContainer";
import ContainerRow from "../../../Components/Container/ContainerRow";
import ContainerColumn from "../../../Components/Container/ContainerColumn";
import { useNavigate } from "react-router-dom";

const TextHeader = styled.h1`
    font-family: "LINE-Bd";
    font-size: 2rem;
`;
const TextH1 = styled.h1`
    font-family: "LINE-Bd";
    font-size: 1.5rem;
`;
const TextDate = styled(TextHeader)`
    font-style: italic;
    margin-right: 1rem;
`

const TextRowContainer = styled(ContainerRow)`
    justify-content: center;
`
const RowContainer = styled(ContainerRow)`
    cursor: pointer;
    border-bottom: 1px solid gray;
    padding: 5px 0;
`;
const ResultsContainer = styled(ContainerColumn)`
    width: 600px;
    padding: 1rem;
    border: 3px solid #122033;
    border-radius: 10px;
    background: white;
`

const Image = styled.img`
    height: 3rem;
    width: 40px;
`
const Text = styled.p`
`



export default function Component() {
    const [nowDate, setNowDate] = useState("<날짜 로드 실패>");
    const [dataSet, setDataSet] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const navigate = useNavigate();

    // 현재 날짜 계산
    useEffect(() => {
        let today=new Date();
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        setNowDate(year + '년' + month  + '월' + day + '일');
    }, [])
    
    //추후에 API로 받아올 더미 데이터
    useEffect(() =>{
        setDataSet([
            {"type":"pdf","date":"24.01.10.","name":"개판5분전 계약서","dataIndex":"0"},
            {"type":"image","date":"24.01.13.","name":"급하게 찍은 계약서","dataIndex":"1"},
            {"type":"pdf","date":"24.01.15.","name":"개똥이와 홍길동의 계약서","dataIndex":"2"},
        ]);
        
    },[])

    // 데이터 개수 갱신
    useEffect(()=>{
        setResultCount(dataSet.length);
    }, [dataSet.length])
    
    return (
        <BeigeContainer>
            <ContainerColumn>
                <TextRowContainer>
                    <TextDate>{nowDate}</TextDate>
                    <TextHeader>까지</TextHeader>
                </TextRowContainer>
                <TextHeader>분석했던 기록은 {resultCount}건 입니다.</TextHeader>
            </ContainerColumn>

            <ResultsContainer>
                <TextH1>자세히 보려면 원하는 항목을 선택하세요</TextH1>
                {
                    dataSet.map(result => {
                        return (
                            <RowContainer onClick={()=> navigate("/results/file/"+result.dataIndex)}>
                                <Image src={result.type === "pdf" ? "/img/type/pdf.png" : "/img/type/img.png"}/>
                                <Text>{result.date}</Text>
                                <Text>{result.name}</Text>
                            </RowContainer>
                        )
                    })
                }
            </ResultsContainer>
        </BeigeContainer>
    );
}
