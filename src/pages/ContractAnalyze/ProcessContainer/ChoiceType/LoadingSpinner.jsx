import styled from "styled-components";

export default styled.div`
    width: 30px;
    height: 30px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;

    animation: 
        from {transform: rotate(0deg);} 
        to {transform: rotate(360deg);} 
        1s linear infinite;
    margin-top: 20px;
    margin-right: 13px;
`;