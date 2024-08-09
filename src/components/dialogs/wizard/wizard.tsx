import { useEffect } from "react";
import { useAppState } from "../../../store/mainStore";

import "./wizard.scss";
import { Header } from "./header";
import { useWizardState } from "../../../store/wizardStore";
import { AdvisoryForm } from "./advisoryForm";
import { TrackForm } from "./tracks/trackForm";
import { AdvisoryTextForm } from "./advisoryTextForm";

export const Wizard = () => {
  const { selectedAdvisoryId, loadAdvisory } = useAppState();
  const { currentPage, selectedSubPages } = useWizardState();

  useEffect(() => {
    if (selectedAdvisoryId) {
      loadAdvisory(selectedAdvisoryId);
    }
  }, [selectedAdvisoryId]);

  return (
    <div className="wizard">
      <Header />
      <div className="content">
        {currentPage === 1 && selectedSubPages[currentPage - 1] === 1 && <AdvisoryForm />}
        {currentPage === 1 && selectedSubPages[currentPage - 1] === 2 && <TrackForm />}
        {currentPage === 1 && selectedSubPages[currentPage - 1] === 3 && <AdvisoryTextForm />}
      </div>
    </div>
  );
};
