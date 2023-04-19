import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

function Papers() {
  const [papers, setPapers] = useState([]);
  const { sem } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/${sem}`);
      const data = await response.json();
      console.log(data);
      setPapers(data);
    }
    fetchData();
  }, [sem]);

  return (
    <>
      <div className='card-container'>
        {papers.length > 0 &&
          papers.map((paper, i) => {
            return (
              <Card name={paper.name} url={paper.url} code={paper.code} key={i} />
            )
          })}
      </div>
    </>
  );
}

export default Papers; 
