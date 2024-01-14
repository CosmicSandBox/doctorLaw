import React, { useState } from "react";
import styled from "styled-components";
import BeigeContainer from "./BeigeContainer";
import AnalyzeButton from "./ChoiceType/AnalyzeButton";
import FileUploadButton from "./ChoiceType/FileUploadeButton";
import ContainerRow from "../../../Components/Container/ContainerRow";
import LoadingSpinner from "./ChoiceType/LoadingSpinner";
import ContainerColumn from "../../../Components/Container/ContainerColumn";

const TextHeader = styled.h1`
    font-family: "LINE-Bd";
    font-size: 2rem;
`;

const RowContainer = styled(ContainerRow)`
    justify-content: space-around;
    width: 70%;
`;
const ColumnContainer = styled(ContainerColumn)`
    align-items: center;
`

export default function Component() {
    const [pdfFileName, setPdfFileName] = useState("");
    const [imageFileName, setImageFileName] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);

    // 파일 선택 핸들러 함수
    const handleFileSelect = (event, fileType) => {
        const file = event.target.files[0];
        if (!file){
            return;
        }
        setPdfFileName(fileType === "pdf" ? file.name : "");
        setImageFileName(fileType === "image" ? file.name : "");
    };

    // 3초 후 분석 완료로 변경
    const handleButtonClick = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setIsAnalysisComplete(true);
        }, 3000);
    };

    function renderDefault() {
        return (
            <>
                <TextHeader>계약서를 알려주세요!</TextHeader>
                <RowContainer>
                    <ColumnContainer>
                        <FileUploadButton
                            $fileType=".pdf" $label="PDF로 등록"
                            $onFileSelect={(e) => handleFileSelect(e, "pdf")}

                            $imgWidth="80px" $imgHeight="100px" $imgSrc="/img/type/pdf.png" />
                        {pdfFileName && <p>{pdfFileName}</p>}
                    </ColumnContainer>

                    {(pdfFileName || imageFileName) && (
                        <AnalyzeButton onClick={handleButtonClick}/>
                    )}
                    
                    <ColumnContainer>
                        <FileUploadButton
                            $fileType="image/*" $label="이미지로 등록"
                            $onFileSelect={(e) => handleFileSelect(e, "image")}

                            $imgWidth="140px" $imgHeight="100px" $imgSrc="/img/type/img.png" />
                        {imageFileName && <p>{imageFileName}</p>}
                    </ColumnContainer>

                </RowContainer>
            </>
        );
    }

    return (
        <BeigeContainer>
            {isAnalysisComplete ? (
                <TextHeader>분석 완료!</TextHeader>
            ) : isAnalyzing ? (
                <>
                    <TextHeader>분석중입니다...</TextHeader>
                    <LoadingSpinner />
                </>
            ) : (
                renderDefault()
            )}
        </BeigeContainer>
    );
}
