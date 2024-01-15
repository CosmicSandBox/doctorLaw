import styled from 'styled-components';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import CheckContractType from './CheckContractType';
import ContractCreateForm from './ContractCreateForm';
import { useState } from 'react';

const PageContainer = styled(ContainerColumn)`
    padding: 30px;
`

export default function Component() {
    const [type, setType] = useState();

    return (
        <ContainerColumn>
            <CheckContractType $setType={setType} />
            <PageContainer>
                <ContractCreateForm $type={type}/>
            </PageContainer>
        </ContainerColumn>
    );
};