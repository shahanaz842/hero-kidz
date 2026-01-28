import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                [...Array(8)].map((_, i)=> <ProductSkeleton key={i}></ProductSkeleton>)
            }
        </div>
    );
};

export default loading;