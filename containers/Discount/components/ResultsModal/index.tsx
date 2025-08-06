import { useMemo } from "react";
import { Modal } from "@/components";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

import { generateBulletPoints } from "../../utils/generateBulletPoints";

interface ResultsModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ResultsModal = ({ onClose, visible }: ResultsModalProps) => {
  const submittedState = useSelector((state: RootState) => state.form);

  const bulletPoints = useMemo(
    () => generateBulletPoints(submittedState),
    [submittedState]
  );

  return (
    <Modal visible={visible} onClose={onClose}>
      <h3 className="font-bold text-text-primary text-center py-4">
        اطلاعات وارد شده
      </h3>
      <ul className="list-disc list-inside text-right space-y-4 text-sm leading-6 text-text-primary">
        {bulletPoints.map(({ label, value }) => (
          <li key={label}>
            <span className="font-semibold text-primary">{label}:</span>{" "}
            {value ?? "-"}
          </li>
        ))}
      </ul>
    </Modal>
  );
};
