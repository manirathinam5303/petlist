import { useEffect, useState } from 'react';

import Header from './Header';
import List from './List';
import { apiRequest } from '../utils/apiService';
import Footer from './Footer';

const Mainscreen = () => {
  const [petList, setPetList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await apiRequest('get', 'pets');
      setPetList(data.pets);
      setFilterData(data.pets);
    } catch (error) {
      setPetList([]);
      setFilterData([]);
    }
  };
  const handleChangeSearch = async (event) => {
    const updatedData = filterData.filter((item) => {
      return (
        item.name.toLowerCase().includes(event) ||
        item.breed.toLowerCase().includes(event)
      );
    });
    setPetList(updatedData);
  };
  return (
    <div>
      <Header handleChangeSearch={handleChangeSearch} />
      <List petList={petList} />
      <Footer />
    </div>
  );
};

export default Mainscreen;
