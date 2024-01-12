import { styled } from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #122033;
    color: white;
`;

const Logo = styled.div`
    width: 100px;
    height: 50px;
    padding-left: 20px;
    img {
        width: 100%;
        height: 100%;
    }
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
    return (
        <HeaderContainer>
            <Logo>
                <img src="img/로고.svg" alt="로고" />
            </Logo>
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