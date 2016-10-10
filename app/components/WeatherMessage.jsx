'use strict';
import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} degrees in {location}</h3>
  );
}

export default WeatherMessage;