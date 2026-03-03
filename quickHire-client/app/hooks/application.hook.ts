import toast from "react-hot-toast";
import { useCreateApplicationMutation } from "../services/application/application.api";

// Create Application Hook
export const useCreateApplication = () => {
  const [createApplication, { isLoading, error }] =
    useCreateApplicationMutation();

  const apply = async (data: any) => {
    try {
      await createApplication(data).unwrap();
      toast.success("Application submitted successfully!");
      return true;
    } catch (err: any) {
      toast.error("Failed to submit application!");
      return false;
      console.error(err);
    }
  };

  return { apply, isLoading, error };
};
