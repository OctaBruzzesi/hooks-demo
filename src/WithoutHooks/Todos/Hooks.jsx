import { useState, useEffect } from 'react';

const getFetchUrl = () => 'https://jsonplaceholder.typicode.com/todos/';

const useFetch = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(getFetchUrl());
      const json = await response.json();

      setTodos(json);
      setLoading(false);
    };
    fetchData();
  }, []);
  return [todos, loading, setTodos];
};
export { useFetch };