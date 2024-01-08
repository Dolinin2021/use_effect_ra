import { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';
import './App.css'

export default function App() {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
      );
      const parsedItems = await data.json();
      setItems(parsedItems);
    }
    fetchData();
  }, []);

  const selected = (id) => {
    const index = items.findIndex((e) => e.id === id);
    setInfo(items[index]);
    setItems((prev) => {
      const newItems = prev.map((e) => {
        e.selected = false;
        return e;
      });
      newItems[index].selected = true;
      return newItems;
    });
  };

  return (
    <>
      <List items={items} clickHandler={selected} />
      <Details info={info} />
    </>
  );
}
