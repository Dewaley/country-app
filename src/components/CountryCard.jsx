import React from "react";

const CountryCard = ({ img, imgAlt, name, population, region, capital }) => {
  return (
    <div className='flex flex-col rounded element overflow-hidden shadow'>
      <img
        src={img}
        alt={imgAlt}
        className='h-48 w-full object-cover object-center'
      />
      <div className='flex flex-col p-4 gap-2'>
        <h4 className='text-xl font-extrabold'>{name}</h4>
        <div className='flex flex-col'>
          <p>
            <span className="font-semibold">Population: </span> {population}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
