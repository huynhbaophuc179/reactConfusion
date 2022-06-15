// import React, { Component } from 'react';
// import { Media } from 'reactstrap';
// import {
//     Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle
// } from 'reactstrap';

// class Dishdetail extends Component {


//     onDishSelect(dish) {
//         this.setState({ selectedDish: dish });
//     }

//     renderDish(dish) {
//         if (dish != null)
//             return (
//                 <Card>
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         else
//             return (
//                 <div></div>
//             );
//     }
//     render() {

//         return (
//             <div className="col-12 col-md-5 m-1" >

//                 {this.renderDish(this.state.selectedDishes)}

//             </div >
//         );
//     }

// }
// export default Dishdetail;
