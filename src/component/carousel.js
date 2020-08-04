 import React from "react";
 import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
 "mdbreact";
import beachfront from './beachfront.jpg';
 const CarouselPage = () => {
   return (
     
       <MDBCarousel
         activeItem={1}
         length={3}
         showControls={true}
         showIndicators={true}
         className="center"
         slide
       >
         <MDBCarouselInner>
           <MDBCarouselItem itemId="1">
             <MDBView>
               <img
                 className="carousel-image"
                 src={beachfront}
                 alt="First slide"
               />
             </MDBView>
           </MDBCarouselItem>
           <MDBCarouselItem itemId="2">
             <MDBView>
               <img
                 className="carousel-image"
                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                 alt="Second slide"
               />
             </MDBView>
           </MDBCarouselItem>
           <MDBCarouselItem itemId="3">
             <MDBView>
               <img
                 className="carousel-image"
                 src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                 alt="Third slide"
               />
             </MDBView>
           </MDBCarouselItem>
         </MDBCarouselInner>
       </MDBCarousel>
     
   );
 }

 export default CarouselPage;
