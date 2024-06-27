import React from 'react';
import { Box, Image, Card, CardBody, Heading, Text, CardFooter, Button, CardHeader, SimpleGrid } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import './HallsDetail.scss';
import EventsHeader from '../../components/EventsHeader/EventsHeader';

const HallsDetail = () => {
    return (

<div className="view-hall-container">
<div className="title">
  <h1>La Font Blanca</h1>
</div>

<div className="cards-info">
  <div className="card-1">
    <div className="img-card">
      <img src="" alt="" />
    </div>
    <div className="text-card">
      <div className="text-1">
        <p>Open LMS Showcase: Lo nuevo y lo que viene </p>
        <p>Jorge Montañez</p>
        <p>Open LMS</p>
      </div>
      <div className="date">26 mayo</div>
      <div className="hour">12.45hrs - 13.15hrs</div>
      <div className="pencil-and-number">
        <div className="pencil-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M0.677734 17.25H21.6777V18.6875H0.677734V17.25ZM18.2277 5.03125C18.8277 4.45625 18.8277 3.59375 18.2277 3.01875L15.5277 0.43125C14.9277 -0.14375 14.0277 -0.14375 13.4277 0.43125L2.17773 11.2125V15.8125H6.97773L18.2277 5.03125ZM14.4777 1.4375L17.1777 4.025L14.9277 6.18125L12.2277 3.59375L14.4777 1.4375ZM3.67773 14.375V11.7875L11.1777 4.6L13.8777 7.1875L6.37773 14.375H3.67773Z"
              fill="#1C1C24"
            />
          </svg>
        </div>
        <div className="number">20/25</div>
      </div>
    </div>
  </div>

  <div className="card-2">
    <div className="img-card">
      <img src="" alt="" />
    </div>
    <div className="text-card">
      <div className="text-1">
        <p>Formación con impacto en un mundo cambiante</p>
        <p>Mariana Robson</p>
        <p>Totara</p>
      </div>
      <div className="date">26 mayo</div>
      <div className="hour">12.00hrs - 12.30hrs</div>
      <div className="pencil-and-number">
        <div className="pencil-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M0.677734 17.25H21.6777V18.6875H0.677734V17.25ZM18.2277 5.03125C18.8277 4.45625 18.8277 3.59375 18.2277 3.01875L15.5277 0.43125C14.9277 -0.14375 14.0277 -0.14375 13.4277 0.43125L2.17773 11.2125V15.8125H6.97773L18.2277 5.03125ZM14.4777 1.4375L17.1777 4.025L14.9277 6.18125L12.2277 3.59375L14.4777 1.4375ZM3.67773 14.375V11.7875L11.1777 4.6L13.8777 7.1875L6.37773 14.375H3.67773Z"
              fill="#1C1C24"
            />
          </svg>
        </div>
        <div className="number">20/25</div>
      </div>
    </div>
  </div>

  <div className="card-3">
    <div className="img-card">
      <img src="" alt="" />
    </div>
    <div className="text-card">
      <div className="text1">
        <p>El poder de las evaluaciones digitales</p>
        <p>Rowan Van Swieten & Eretz Itzkovich</p>
        <p>Optimum Assessment</p>
      </div>
      <div className="date">26 mayo</div>
      <div className="hour">11.15hrs - 11.45hrs</div>
      <div className="pencil-and-number">
  
        <div className="pencil-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M0.677734 17.25H21.6777V18.6875H0.677734V17.25ZM18.2277 5.03125C18.8277 4.45625 18.8277 3.59375 18.2277 3.01875L15.5277 0.43125C14.9277 -0.14375 14.0277 -0.14375 13.4277 0.43125L2.17773 11.2125V15.8125H6.97773L18.2277 5.03125ZM14.4777 1.4375L17.1777 4.025L14.9277 6.18125L12.2277 3.59375L14.4777 1.4375ZM3.67773 14.375V11.7875L11.1777 4.6L13.8777 7.1875L6.37773 14.375H3.67773Z"
              fill="#1C1C24"
            />
          </svg>
        </div>
        <div className="number">20/25</div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default HallsDetail;