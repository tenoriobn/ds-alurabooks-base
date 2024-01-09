import React from "react";
import { AbCard } from '../src';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Componentes/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>;

export const AbCardComponent = () => {
  return(
    <AbCard>
      <h2>Olá, eu sou um Card</h2>
    </AbCard>
  )
}



