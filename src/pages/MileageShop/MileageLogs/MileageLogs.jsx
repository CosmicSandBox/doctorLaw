import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    width: 300px;
    height: 100px;
    margin: 50px;
`

export default function Component() {
    const navigate = useNavigate();
    return (
        <div>
            <p>임시 마일리지 샵 입니다.</p>
            <Button onClick={() => navigate('/shop/charge')}>충전 페이지 바로가기</Button>
            <Button onClick={() => navigate('/shop/use')}>사용 페이지 바로가기</Button>
        </div>
    )
}