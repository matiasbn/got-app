
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Paginator from 'react-hooks-paginator';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Character from '../components/Character';


export default function List() {
  const pageLimit = 10;
  const [ charsData, setCharsData ] = useState([]);
  const [ offset, setOffset ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ currentData, setCurrentData ] = useState([]);
  const [ records, setRecords ] = useState(0);
  const filteredName = useSelector((state) => state.name);
  const filteredHouse = useSelector((state) => state.house);

  const getData = async () => {
    const { data } = await axios({ method: 'get', url: 'http://localhost:3001/characters' });
    setCharsData(data);
    setRecords(data.length);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setCurrentData(charsData.slice(offset, offset + pageLimit));
  }, [ offset, charsData ]);

  useEffect(() => {
    const nameRegexp = new RegExp(`${filteredName}`, 'i');
    const houseRegexp = new RegExp(`${filteredHouse}`, 'i');
    const filteredData = charsData
      .filter((char) => char.name.match(nameRegexp) && char.house.match(houseRegexp));
    setCurrentData(filteredData.slice(offset, offset + pageLimit));
    setRecords(filteredData.length);
  }, [ filteredName, filteredHouse ]);

  return (
    <div>
      <Row>
        { currentData.map((char) => (
          <Col
            xs={6}
            key={char.id}
          >
            <Character
              character={char}
            />
          </Col>
        ))}
      </Row>
      <Paginator
        totalRecords={records}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
