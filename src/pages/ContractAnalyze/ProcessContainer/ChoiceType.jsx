import React, { useState } from "react";
import styled from "styled-components";
import BeigeContainer from "./BeigeContainer";
import { keyframes } from "styled-components";

const TextHeader = styled.h1`
    font-family: "LINE-Bd";
    font-size: 2rem;
`;
const TypeContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; /* 요소 사이의 간격을 최대로 설정 */
    align-items: center;
`;

const TypeButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* 세로 방향으로도 가운데 정렬되도록 추가 */
    gap: 10px;
    flex: 1;
`;
const Image = styled.img`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
`;
const ImageDescription = styled.h1`
    font-family: "LINE-Bd";
    font-size: 1.5rem;
`;

//500포인트로 분석 시작하기 버튼 모양
const AnalyzeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #f48553;
    cursor: pointer; // 마우스 커서를 포인터로 변경
`;

//500포인트로 분석 시작하기 텍스트
const GoAnalyzeText = styled.text`
    display: flex;
    width: 227.93px;
    height: 58px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

//로딩 스피너 css
const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.div`
    width: 30px; // 로딩 스피너의 너비 설정
    height: 30px; // 로딩 스피너의 높이 설정
    border: 5px solid #f3f3f3; // 로딩 스피너 테두리 스타일링
    border-top: 5px solid #3498db; // 로딩 스피너의 윗 부분 색상 설정
    border-radius: 50%; // 로딩 스피너를 동그랗게 만듭니다.
    animation: ${spinAnimation} 1s linear infinite; // 로딩 스피너에 회전 애니메이션 적용
    margin-top: 20px;
    margin-right: 13px;
`;

const AlignColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function Component() {
    const [pdfFileName, setPdfFileName] = useState("");
    const [imageFileName, setImageFileName] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);

    const handleButtonClick = () => {
        setIsAnalyzing(true);

        // 3초 후에 분석 완료로 변경
        setTimeout(() => {
            setIsAnalyzing(false);
            setIsAnalysisComplete(true);
        }, 3000);
    };

    // 파일 선택 핸들러 함수
    const handleFileSelect = (event, setFileName) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <BeigeContainer>
            {isAnalysisComplete ? (
                // 분석 완료일 때의 컨텐츠
                <div>
                    <TextHeader>분석 완료!</TextHeader>
                    {/* 분석 완료에 대한 추가적인 UI나 로직을 여기에 추가할 수 있습니다. */}
                </div>
            ) : isAnalyzing ? (
                // Analyzing으로 변경되었을 때의 컨텐츠
                // 이 부분은 필요에 따라 수정해주셔야 합니다.
                <AlignColumnContainer>
                    <TextHeader>분석중입니다...</TextHeader>
                    <LoadingSpinner />
                </AlignColumnContainer>
            ) : (
                // ChoiceType일 때의 컨텐츠
                <div>
                    <AlignColumnContainer>
                        <TextHeader>계약서를 알려주세요!</TextHeader>
                        <TypeContainer>
                            <TypeButton>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    style={{ display: "none" }}
                                    onChange={(e) =>
                                        handleFileSelect(e, setPdfFileName)
                                    }
                                    id="pdf-upload"
                                />
                                <label htmlFor="pdf-upload">
                                    <Image
                                        $width="80px"
                                        $height="100px"
                                        src="/img/type/pdf.png"
                                        style={{ marginLeft: "15px" }}
                                    />
                                    <ImageDescription>
                                        PDF로 등록
                                    </ImageDescription>
                                </label>
                                {pdfFileName && <p>{pdfFileName}</p>}
                            </TypeButton>
                            {(pdfFileName || imageFileName) && (
                                <AnalyzeButton onClick={handleButtonClick}>
                                    <GoAnalyzeText>
                                        500 포인트로 <br /> 분석 시작하기
                                    </GoAnalyzeText>
                                </AnalyzeButton>
                            )}
                            <TypeButton>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) =>
                                        handleFileSelect(e, setImageFileName)
                                    }
                                    id="image-upload"
                                />
                                <label htmlFor="image-upload">
                                    <Image
                                        $width="140px"
                                        $height="100px"
                                        src="/img/type/img.png"
                                    />
                                    <ImageDescription>
                                        이미지로 등록
                                    </ImageDescription>
                                </label>
                                {imageFileName && <p>{imageFileName}</p>}
                            </TypeButton>
                        </TypeContainer>
                    </AlignColumnContainer>
                </div>
            )}
        </BeigeContainer>
    );
}
