import { MapPinCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        
            <p className='flex mt-4'><MapPinCheck className='mr-2'></MapPinCheck> {feature}</p>
        
    );
};

export default PricingFeature;