import React from 'react'
import './gallery.css'
import img1 from '../assets/assets/gallery01.png'
import img2 from '../assets/assets/gallery02.png'
import img3 from '../assets/assets/galleery03.png'
import img4 from '../assets/assets/gallery04.png'
import brand1 from '../assets/assets/brand01.png'
import brand2 from '../assets/assets/brand02.png'
import brand3 from '../assets/assets/brand03.png'
import brand4 from '../assets/assets/brand04.png'
import brand5 from '../assets/assets/brand05.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Gallery = () => {
  return (
             
           <div className='gallery'>
              <div className='gallery-heading'>
                <div className='gallery-head'>
                  <div className='galley'><h1>Hookah Gallery</h1></div>
                  </div>
                
                
              </div>
<Container>
      <Row>
        {/*<div className='grid-images'>
        <div className='big-img'>
          <div className='bigimg'>
          <Col >
        <img src={img1}/>
        </Col>
        <Col >
        <img src={img2}/>
        </Col>
       
             </div>
        </div>
        <div className='small-img'> 
        <Col>
        <img src={img3}/>
        </Col>
        <Col >
        <img src={img4}/>
        </Col>
 
        </div>
        
        
  </div>*/}
                
                <Col lg={1}></Col>
                <Col lg={10}>
                
                        <Row>
                          <Col lg={6} className='big-img'>
                            <div className='big-img1'>
                             <div className='bigsrc'> <img src={img1}/></div>
                            </div>
                            <div className='big-img1'>
                              <div className='bigsrc'><img src={img2}/></div>  
                            </div>
                          </Col>
                          <Col lg={6}  >
                            <div className='small-img'>
                              <div className='small-img1'><img src={img3}/></div>
                            </div>
                            <div className='small-img'>
                              <div className='small-img2'><img src={img4}/></div>
                            </div>
                          </Col>
                        
                        </Row>

                </Col>
                <Col lg={1}></Col>
             </Row>
    </Container>
   
    <Container>
               <Row>
                <Col>
                <div className='gallery-heading'>
                  <div className='gallery-head'>
                 <div className='brand'><h1>Brands we carry</h1></div>
        
                   </div>
                
                  </div>
    
                </Col>
               </Row>
               <Row className='brand-images'>
                    <Col><li><img src={brand1}/></li></Col>
                    <Col><li><img src={brand2}/></li></Col>
                    <Col><li><img src={brand3}/></li></Col>
                    <Col><li><img src={brand4}/></li></Col>
                    <Col><li><img src={brand5}/></li></Col>


               </Row>
           </Container>



           </div> 
           
       
            
          

    

       
  
  )
}

export default Gallery
