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
