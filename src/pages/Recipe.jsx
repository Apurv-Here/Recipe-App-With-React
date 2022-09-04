import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import styled from "styled-components";



function Recipe() {

  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {

    let data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    if(data.ok === false){
      data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY2}`);
    }

    let detailData = await data.json();

    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
    <DetailWrapper>
      <div>
        <HeadingStart>{details.title}</HeadingStart>
        <img src={details.image} alt="Image is loading" />
      </div>
      </DetailWrapper>
      <ButtonInfo> 
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button> 
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() =>  setActiveTab("ingredients")}>
          Ingredients
        </Button> </ButtonInfo>

        {activeTab === 'instructions' && (
          <div>
          <Para dangerouslySetInnerHTML={{__html: details.summary}}></Para>
          <Para dangerouslySetInnerHTML={{__html: details.instructions}}></Para>
        </div>
        )}
        
        {activeTab === 'ingredients' && (
          <div><ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}><LiPara>{ingredient.original}</LiPara> </li>
            ))}
          </ul></div>
        )}
    </div>
  )
}




const HeadingStart = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  text-align: center;
`;
const Para = styled.div`
  underline: none;
  font-size: 1.2rem;
  line-height: 2.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const LiPara = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const DetailWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;


  h2 {
    margin-bottom: 2rem;
    font-weight: 1000;
  }

  

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    width: 26rem;
    border-radius: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const ButtonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const liDiv = styled.div`
  ul {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
`;



export default Recipe
