import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Details({ info }) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!info.id) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
        );
        const parsedItems = await data.json();
        setData(parsedItems);
        setLoading(false);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }      
    };
    fetchData();

  }, [info.id]);
  return data.id && !isLoading ? (
    <div>
      <img src={data.avatar} alt="" />
      <h3>{data.name}</h3>
      <div>City: {data.details && data.details.city}</div>
      <div>Company: {data.details && data.details.company}</div>
      <div>Position: {data.details && data.details.position}</div>
    </div>
  ) : isLoading ? <div style={{fontSize: 25 }}>Loading...</div> : null;
}
  
Details.propTypes = {
  info: PropTypes.object.isRequired,
}
