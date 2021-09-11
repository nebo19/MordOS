import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => setItems(data))
          .then(console.log(items));
      } catch (err) {
        setError(err);
      }
    };

    fetchItems();
  }, [url, items]);

  return { items, error };
};

export default useFetch;
