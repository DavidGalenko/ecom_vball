import React from 'react';
import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';
import {Container, Description, HeroButton, HeroImage} from './styles'


const HeroBanner = ({heroBanner}) => {
  if(heroBanner[0] !== undefined){
    heroBanner = heroBanner[0]
  return (
    <Container>
      <div>
        <Typography variant='body2' style={{marginTop: '50px', fontSize: '20px'}}>{heroBanner.name}</Typography>
        <Typography variant='h3' style={{fontSize: '4rem', marginTop: '4px'}}>Summer Sale</Typography>
        <Typography variant='h1' style={{color: 'white', fontSize: '10em', marginLeft: '-20px', textTransform: 'uppercase'}}>Volleyball</Typography>
        <HeroImage src={heroBanner.image.url} alt="Volleyball" />

        <div>
          <Link to="/">
            <HeroButton type="button">Buy Now</HeroButton>
          </Link>
          <Description>
            <Typography variant='h5' style={{marginBottom: '12px', fontWeight: '700', fontSize: '16px', alignSelf: 'flex-end'}}>Description</Typography>
            <Typography variant='body2' style={{color: '#5f5f5f', textAlign: 'end'}} dangerouslySetInnerHTML={{__html: heroBanner.description}}></Typography>
          </Description>
        </div>
      </div>
    </Container>
  )
  }
  else
  return;
}

export default HeroBanner