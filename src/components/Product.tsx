import React from 'react';

export const Product = (props: any) => {
  const { namePrice, thumbnailSrc, price, detail, sp } = props;
  return (
    <div className='flex justify-center py-6'>
      <div className='text-gray-500 bg-yellow-300 w-[428px]'>
        <div className='inline-flex'>
          <div className='flex justify-between'>
            <div>
              <img src={thumbnailSrc} alt='' />
            </div>
            <div className='p-6 text-center'>
              <h2>{namePrice}</h2>
              <h3>
                ราคา <span className='text-blue-500'>{price} บาท</span>
              </h3>
              <h3>{detail}</h3>
            </div>
          </div>
        </div>
        <div className='justify-end'>
          <button className='px-8 py-2 text-white bg-pink-500 rounded-md'>
            ซื้อ
          </button>
          {sp ? (
            <button className='px-8 py-2 text-white bg-green-500 rounded-md'>
              ตระกร้า
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
