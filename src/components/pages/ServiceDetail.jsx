import React from 'react';
import useService from "../Data/serviceDb";
import Itmes from './Itmes';

const ServiceDetail = () => {
    const [services] = useService();
    return (
        <div className="row justify-content-around align-items-center my-4">
            {services.map((item) => (
              <Itmes key={item.title} item={item} />
            ))}
          </div>
    );
};

export default ServiceDetail;