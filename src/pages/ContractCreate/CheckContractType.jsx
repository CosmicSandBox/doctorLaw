
import React, { useState } from 'react';
import styled from 'styled-components';
import BeigeContainer from './BeigeContainer';

const Question = styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
`;

const OptionContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 10px;
`;

const Option = styled.label`
    display: flex; 
    align-items: center; 
    gap: 5px; 
    cursor: pointer;
    flex-basis: calc(20% - 10px);
`;


const Radio = styled.input.attrs({ type: 'radio', name: 'contractOption' })`
    accent-color: black;
`;

const options = [
'증여', '매매', '교환', '소비대차', '사용대차', 
'임대차', '고용', '도급', '여행', '현상광고', 
'위임', '임치', '조합', '종신정기금', '화해'
];

export default function Component({$setType}) {

    const handleChange = (event) => {
        $setType(event.target.nextSibling.nodeValue);
    };

    return (
        <BeigeContainer>
            <Question>어떤 계약서를 보고 싶으신가요?</Question>
            <OptionContainer>
                {options.map((option, index) => (
                        <Option key={index}>
                            <Radio onChange={handleChange}/>
                            {option}
                        </Option>
                ))}
            </OptionContainer>
        </BeigeContainer>
    );
};