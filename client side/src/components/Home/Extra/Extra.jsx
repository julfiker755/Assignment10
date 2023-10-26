import React from 'react';

const Extra = () => {
    return (
        <div className='bg-[#2ea8e013] py-5'>
            <div className='w-11/12 lg:max-w-7xl m-auto mb-5'>
          
          <div className='grid grid-cols-1 gap-3 lg:grid-cols-4'>
               {/* col 1 */}
             <div className='bg-[#E76D66] text-white flex p-2 rounded-md gap-3'>
               <img className='h-[60px]' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/icon-free.png" alt="" />
               <div>
                   <h1 className='text-xl font-semibold'>FREE SHIPPING</h1>
                   <p>Nulla vel metus scelerisque ante sollici.</p>
               </div>
             </div>
             {/* col 2 */}
             <div className='bg-[#95BB7A] text-white flex p-2 rounded-md gap-3'>
               <img className='h-[60px]' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/icon-money.png" alt="" />
               <div>
                   <h1 className='text-xl font-semibold'>MONEY BACK</h1>
                   <p>Cras purus odio, in tempus viverra turpis..</p>
               </div>
             </div>
              {/* col 3 */}
              <div className='bg-[#57A6B9] text-white flex p-2 rounded-md gap-3'>
               <img className='h-[60px]' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/icon-discounts.png" alt="" />
               <div>
                   <h1 className='text-xl font-semibold'>DISCOUNTS</h1>
                   <p>Cras sit amet nibh libero itudin commo.</p>
               </div>
             </div>
              {/* col 4 */}
              <div className='bg-[#36c6be] text-white flex p-2 rounded-md gap-3'>
               <img className='h-[60px]' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/icon-support.png" alt="" />
               <div>
                   <h1 className='text-xl font-semibold'>SUPPORT</h1>
                   <p>Cras sit amet nibh libero, in viverra turpis.</p>
               </div>
             </div>
           </div>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border rounded-md mt-2 p-3'>
               <div className='order-2 lg:order-1'>
               <h1 className='text-xl font-bold'>Ipad in education</h1>
               <p>Nulla vel metus scelerisque ante sollicitudin commodo sit amet nibh libero itudin commodoturpis</p>
               <h1 className='text-[red]'>Read more</h1>
               </div>
               <img className='m-auto order-1 lg:order-2' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/banner3.png" alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 border rounded-md mt-2 p-3'>
               <div className='order-2 lg:order-1'>
               <h1 className='text-xl font-bold'>MacBook Pro</h1>
               <p>Nulla vel metus scelerisque ante sollicitudin commodo sit amet nibh libero itudin commodoturpis</p>
               <h1 className='text-[red]'>Read more</h1>
               </div>
               <img className='m-auto order-1 lg:order-2' src="https://demo.apollotheme.com/demo/leo_digital/themes/leo_digital/assets/img/modules/appagebuilder/images/banner4.png" alt="" />
            </div>
          </div>
       </div>
        </div>
    );
};

export default Extra;