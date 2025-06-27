import type { FormDataStructure } from "./types";

export interface StructureEvaluationProps {
  value: FormDataStructure;
  onChange: (newValue: FormDataStructure) => void;
}

const StrucutureEvaluation: React.FC<StructureEvaluationProps> = ({
  value,
  onChange,
}) => {
  return value.evaluationInformationOptions.map((item, index) => (
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
          {item.evaluationByCheckbox.map((question, indexs) => (
            <tr key={indexs}>
              <td>{question.question}</td>
              <td>
                si{" "}
                <input
                  type="checkbox"
                  id="si"
                  name="si"
                  className="w-fit border-2 border-black"
                  checked={question.isTrue}
                  onChange={(e) => {
                    const updatedOptions =
                      value.evaluationInformationOptions.map((opt, optIndex) =>
                        optIndex === index
                          ? {
                              ...opt,
                              evaluationByCheckbox:
                                opt.evaluationByCheckbox.map((q, qIndex) =>
                                  qIndex === indexs
                                    ? {
                                        ...q,
                                        isTrue: e.target.checked,
                                        isFalse: false,
                                      }
                                    : q,
                                ),
                            }
                          : opt,
                      );
                    onChange({
                      ...value,
                      evaluationInformationOptions: updatedOptions,
                    });
                  }}
                />
              </td>
              <td>
                no{" "}
                <input
                  type="checkbox"
                  id="no"
                  name="no"
                  className="w-fit border-2 border-black"
                  checked={question.isFalse}
                  onChange={(e) => {
                    const updatedOptions =
                      value.evaluationInformationOptions.map((opt, optIndex) =>
                        optIndex === index
                          ? {
                              ...opt,
                              evaluationByCheckbox:
                                opt.evaluationByCheckbox.map((q, qIndex) =>
                                  qIndex === indexs
                                    ? {
                                        ...q,
                                        isTrue: false,
                                        isFalse: e.target.checked,
                                      }
                                    : q,
                                ),
                            }
                          : opt,
                      );
                    onChange({
                      ...value,
                      evaluationInformationOptions: updatedOptions,
                    });
                  }}
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
