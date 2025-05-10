export type informationForm = {
  title: string;
  evaluationByCheckbox: Array<{
    question: string;
  }>;
};

export interface StructureEvaluationProps {
  value: informationForm[];
  // onChange: (newValue: informationForm[]) => void;
}

const StrucutureEvaluation: React.FC<StructureEvaluationProps> = ({
  value,
}) => {
  return value.map((item, index) => (
    <div key={index}>
      <table className="w-full border-1 border-black">
        <thead>
          <tr>
            <th colSpan={3} className="bg-black text-center text-white">
              {item.title}
            </th>
          </tr>
        </thead>
        <tbody>
          {item.evaluationByCheckbox.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>
                si{" "}
                <input
                  type="checkbox"
                  className="w-fit border-2 border-black"
                />
              </td>
              <td>
                no{" "}
                <input
                  type="checkbox"
                  className="w-fit border-2 border-black"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
};

export default StrucutureEvaluation;
