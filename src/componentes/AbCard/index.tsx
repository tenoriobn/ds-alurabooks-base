//src/components/Card/index.tsx

import React, { ReactNode } from "react"
import styled from "styled-components";

export interface CardProps {
    children: ReactNode
}

const CardStyled = styled.div`
    padding: 48px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    h2 {
        color: #EB9B00;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`

export const AbCard = ({ children }: CardProps) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}