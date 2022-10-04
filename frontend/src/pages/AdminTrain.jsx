import { useParams } from "react-router-dom";
import EditTrainForm from "../components/EditTrainForm";

function AdminTrain() {
  const params = useParams();
  return (
    <div>
      <EditTrainForm id={params.id} />
    </div>
  );
}

export default AdminTrain;
