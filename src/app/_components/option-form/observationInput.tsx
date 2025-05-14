import React from "react";
import type { StructureEvaluationProps } from "./structure-evaluation";

const ObservationInput: React.FC<StructureEvaluationProps> = ({
  value: values,
  onChange,
}) => {
  const { observation } = values;
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
              <textarea
                className="h-32 w-full border-2 border-black"
                value={observation}
                onChange={(e) => {
                  onChange({
                    ...values,
                    observation: e.target.value,
                  });
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ObservationInput;
