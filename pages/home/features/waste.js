import * as React from 'react';

import { Body, Text, Title } from '../../../styles/';

const WasteStats = () => {
  const [Amount, setAmount] = React.useState(0);

  React.useEffect(() => {
    setAmount(Amount + 1);
  }, []);

  for (let index = 10; Amount > index; Amount + 1) {
    console.log(index);
    setAmount(Amount + 1);
  }

  return (
    <Body>
      <Title> {Amount}% of Africa is littered with waste </Title>
    </Body>
  );
};

export default WasteStats;
