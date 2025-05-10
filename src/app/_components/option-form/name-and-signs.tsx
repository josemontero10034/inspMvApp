import React from 'react';

const NameAndSigns: React.FC = () => {
    return (
       <table className="w-full border-1 border-black">
         <thead>
              <tr>
                 <th colSpan={5} className="bg-black text-center text-white">
                {"5. NOMBRE Y FIRMA DEL SUPERVISOR"}
                 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                 <td>{"  "}</td>
                 <td>Nombre(s) y Apellidos(s)</td>
                 <td>Firma</td>
                 <td>Codia</td>
                 <td>Fecha</td>
              </tr>
              <tr>
                <td className='border-2 border-black'>{"Director o encargado de obra"}</td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='date' /></td>
              </tr>
              <tr>
                <td rowSpan={3} className='border-2 border-black'>{"Inspectores"}</td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='date' /></td>
              </tr>
              <tr>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='date' /></td>
              </tr>
              <tr>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='text' /></td>
                 <td><input className="w-[90%] border-2 border-black" type='date' /></td>
              </tr>
            </tbody>
            </table>
    );
};

export default NameAndSigns;