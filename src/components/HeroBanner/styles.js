import styled from 'styled-components';
   
export const Container = styled.div`
margin: 100px 40px;
padding: 25px 50px;
background-color: #dcdcdc;
border-radius: 15px;
position: relative;
height: 500px;
line-height: 0.9; 
`;

export const HeroButton = styled.button`
border-radius: 15px;
padding: 10px 16px;
background-color: #f02d34;
color: white;
border: none;
margin-top: 40px;
font-size: 18px;
font-weight: 500;
cursor: pointer;
z-index:10000 !important;
`;

export const HeroImage = styled.img`
position: absolute;
top: 10%;
right: 20%;
width: 400px;
height: 400px;
`;

export const Description = styled.div`
position: absolute;
right: 10%;
bottom: 5%;
width: 300px;
line-height: 1.3;
display: flex;
flex-direction: column;
color: #324d67;
`;
/*
  .hero-banner-container .beats-solo{
    font-size: 20px;
  }

  
  .hero-banner-container h3{
    font-size: 4rem;
    margin-top: 4px;
  }
  .hero-banner-container h1{
    color: white;
    font-size: 10em;
    margin-left: -20px;
    text-transform: uppercase;
  }  
  
  .desc p{
    color: #5f5f5f;
    font-weight: 100;
  text-align: end;
  }
  .desc h5{
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 16px;
    /* color: black; 
    align-self: flex-end;
  }
  */