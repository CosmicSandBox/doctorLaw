import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import BeigeContainer from "../BeigeContainer";
import ContainerRow from "../../../Components/Container/ContainerRow";
import { useParams } from "react-router-dom";
import CautionFacts from "./CautionFacts";

const TextHeader = styled.h1`
    font-family: "LINE-Bd";
    font-size: 2rem;
`;
const FileInfo = styled(TextHeader)`
    font-style: italic;
    margin-right: 1rem;
    color: orange;
`

const TextRowContainer = styled(ContainerRow)`
    justify-content: center;
`


export default function Component() {
    const [result, setResult] = useState({});
    const { dataIndex } = useParams();

    // 임시 더미 데이터셋. 현재 백엔드가 없어서 직접 처리하나, 실제로는 받아와야함.
    const data = useMemo(() => [
        {"type":"pdf","date":"24.01.10","name":"개판5분전 계약서","dataIndex":"0"},
        {"type":"image","date":"24.01.13","name":"급하게 찍은 계약서","dataIndex":"1"},
        {"type":"pdf","date":"24.01.15","name":"개똥이와 홍길동의 계약서","dataIndex":"2"},
    ], []);
    // 임시 더미 데이터에서 해당 자료 찾기. 마찬가지로 백엔드 작업
    useEffect(() => {
        const matchingData = data.find(item => item.dataIndex === dataIndex);
        setResult(matchingData);
    }, [dataIndex, data]);

    return (
        <>
            <BeigeContainer>
                <TextRowContainer>
                    <FileInfo>{result.date}</FileInfo>
                    <TextHeader>에 분석한&nbsp;&nbsp;</TextHeader>
                    <FileInfo>{result.name}</FileInfo>
                    <TextHeader>입니다</TextHeader>
                </TextRowContainer>
            </BeigeContainer>

            <CautionFacts />
        </>
    );
}
