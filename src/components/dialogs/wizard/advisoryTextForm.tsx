import { useAppState } from "../../../store/mainStore";
import { useResources } from "../../../store/resourcesStore";

export const AdvisoryTextForm = () => {
  const { advisory } = useAppState();
  const { basins } = useResources();

  return (
    <>
      <p>Advisory Text {basins.size}</p>
    </>
  );
};
