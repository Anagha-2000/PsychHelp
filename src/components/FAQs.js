import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function FAQs(){
  return (
    <div>
<div id="FAQs">
    <h1 id="heading"><b> Frequently Asked Questions </b> </h1>
    <br/>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Sed iaculis justo ut nibh vehicula, at mattis orci interdum.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Nulla interdum nulla a felis iaculis malesuada.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Sed quis justo sit amet dolor cursus varius ut non metus.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Sed iaculis justo ut nibh vehicula, at mattis orci interdum.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Nulla interdum nulla a felis iaculis malesuada.</p>
    <p class = "lists"><img src="https://img.icons8.com/flat_round/30/000000/arrow-right.png"/>          Sed quis justo sit amet dolor cursus varius ut non metus.</p>

    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

</div>

  </div>
);
}

export default FAQs;
