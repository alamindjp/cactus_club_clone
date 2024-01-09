import React from 'react';

const TableBody = ({id,time,keno, somebody,bet,win}) => {
    console.log(id)
    return (
        <tr className="bg-orange-primary">
                
            <td className="text-center font-poppins font-semibold text-[10px] lg:text-[16px] uppercase table-font-color py-[20px] pl-[5px] md:py-[20px] lg:pl-[56px]  rounded-l-full">
                <div className="flex justify-between">
                  2023/04/14 14:58 <div className="td-broder"></div>
                </div>
              </td>
              <td className="text-center font-poppins font-semibold text-[10px] lg:text-[16px]    uppercase table-font-color py-[20px] pl-[5px] md:py-[20px] lg:pl-[56px]  border-primary-title">
                <div className="flex justify-between">
                  keno<div className="td-broder"></div>
                </div>
              </td>
              <td className="text-center font-poppins font-semibold text-[10px] lg:text-[16px] uppercase table-font-color py-[20px] pl-[5px] md:py-[20px] lg:pl-[56px]   ">
                <div className="flex justify-between">
                  somebody<div className="td-broder"></div>
                </div>
              </td>
              <td className="text-center font-poppins font-semibold text-[10px] lg:text-[16px] uppercase table-font-color py-[20px] pl-[5px] md:py-[20px] lg:pl-[56px]   ">
                <div className="flex justify-between">
                  0.1<div className="td-broder"></div>
                </div>
              </td>
              <td className="text-center font-poppins font-semibold text-[10px] lg:text-[16px] uppercase table-font-color md:py-[20px] p-[20px] md:px-[56px]  rounded-r-full">
                  0.2
              </td>
            </tr>
    );
};

export default TableBody;