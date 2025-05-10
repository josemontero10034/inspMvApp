import React from "react";

const ObservationInput: React.FC = () => {
  return (
    <div>
      <table className="w-full border-1 border-black">
        <thead>
          <tr>
            <th colSpan={3} className="bg-black text-center text-white">
              {"6. OBSERVACIONES"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea className="border-2 border-black w-full h-32" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ObservationInput;
