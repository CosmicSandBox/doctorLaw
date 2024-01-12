import { styled } from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: blue;
    color: white;
`;

const Logo = styled.div`
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Component() {
    return(
        <HeaderContainer>
            <Logo>로고 영역</Logo>
            <MenuContainer>
                <p>딴메뉴1</p>
                <p>딴메뉴2</p>
                <LoginContainer>
                    <p>로그인</p>
                    <p>|</p>
                    <p>회원가입</p>
                </LoginContainer>
            </MenuContainer>
        </HeaderContainer>
    )
};