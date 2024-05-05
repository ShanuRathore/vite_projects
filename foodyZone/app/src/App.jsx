import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult.jsx';

export const BASE_URL="http://localhost:9000"

const App = () => {

  const[data,setData]=useState();
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const[filterData,setFilterData]=useState(null);
  const[selectedBtn,setSelectedBtn]=useState("all");



  useEffect(()=>{

  },[]);

  const filterFood=(type)=>{
    if(type==='all'){
      setFilterData(data);
      setSelectedBtn('all');
      return;
    }
    const filter =data?.filter((food)=>(
      food.type.toLowerCase().includes(type.toLowerCase())
      //eska mtlb hai ki jo hmne input(search value) m type keya hai vo food.name m hai ya nhi
    ));
    setFilterData(filter);
    setSelectedBtn(type);
  }

  useEffect(()=>{
    const fetchFoodData=async()=>{
      setLoading(true);
      try {
        const response =await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        // setFilterData(json);
        // console.log(json);
        setLoading(false);
      } 
      catch (error) {
        setError('Unable to fetch data');
      }
    };
    fetchFoodData();
  },[]);

  const searchFood=(e)=>{
    const searchValue=e.target.value;
    // console.log(searchValue);
    if(searchValue===''){
      setFilterData(null);
    }

    const filter =data?.filter((food)=>(
      food.name.toLowerCase().includes(searchValue.toLowerCase())
      //eska mtlb hai ki jo hmne input(search value) m type keya hai vo food.name m hai ya nhi
    ));
    setFilterData(filter);
  }

  const filterBtns=[
    {
      name:'All',
      type:'all'
    },
    {
      name:'Breakfast',
      type:'breakfast'
    },
    {
      name:'Lunch',
      type:'lunch'
    },
    {
      name:'Dinner',
      type:'dinner'
    },
  ]

  if(error) return <div>{error}</div>;
  if(loading) return <div>Loading...</div>;

  return (
    <>
      <Container>

        <TopContainer>
          <div className='logo'>
            <img className='user' src="/chef.png" alt="" />
            <div className='head'>
              <img className='tagname' src="/FoodyZone.png" alt="" />
              <p>Order all kind of foods from here</p>
              <p>Breakfast | Lunch | Dinner</p>
            </div>
          </div>
          <div className='search'>
            <input onChange={searchFood} type="text"
              placeholder='Search Food' />
          </div>
        </TopContainer>

        <FilterContainer>
          {
            filterBtns.map((value,index)=>(
              <Button 
                isSelected={selectedBtn===value.type?true:false}
                key={value.name} 
                onClick={()=>filterFood(value.type)}>
                  {value.name}
              </Button>))
          }

          {/* <Button onClick={()=>filterFood("all")}>All</Button>
          <Button onClick={()=>filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
          <Button onClick={()=>filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>

        </Container>
        <SearchResult data={filterData}/>
    </>
    );
};

export default App;

export const Container = styled.div`
  margin: 0 auto;
`;

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between; 
  height:140px;
  padding:16px;
  align-items: center;

  .logo{
    display: flex;
    align-items: center;
    gap:20px;
  }

  .user{
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }

  .tagname{
    height:34px
  }

  .head {
    p{
    color:#FC4100;
    font-family:cursive;
    font-size:13px;
  }}

  .search {
    input{
    background-color:transparent;
    color:white;
    border:1px solid #FC4100;
    height:35px;
    border-radius:6px;
    padding:0 10px;
    &::placeholder {
        color: white;
      }
    }
  }

  @media(0<width<600px){
    flex-direction:column;
    height:120px;
    .user{
      display:none;
    }
    .head{
      p{
        display:none;
      }
    }
  }

`;

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap:15px;
    padding-bottom:20px;
`;

export const Button = styled.button`
    background:${({isSelected})=>(isSelected? "#FFCD4B":"#FC4100")};
    color:white;
    border:none;
    border-radius:5px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight:bold;

    &:hover{
      transition: .2s background ease-in;
      transform: translatey(-1px);
      cursor:pointer;
    }
`;
