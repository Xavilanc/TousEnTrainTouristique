import { useParams } from "react-router-dom";
import EditTrainForm from "../components/EditTrainForm";
import Header from "../components/Header";

function AdminTrain() {
  const params = useParams();
  return (
    <div>
      <Header />
      <EditTrainForm id={params.id} />
    </div>
  );
}

export default AdminTrain;
