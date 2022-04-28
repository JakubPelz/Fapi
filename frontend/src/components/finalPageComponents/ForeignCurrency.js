import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForeignCurrency = () => {
  const [eur, setEur] = useState('');

  const URL = 'http://localhost:5000/';

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(URL);
      setEur(data);
    })();
  }, []);
  console.log(eur);
  return <div>ForeignCurrency</div>;
};

export default ForeignCurrency;
