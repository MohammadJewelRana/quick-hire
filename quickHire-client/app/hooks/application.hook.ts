import toast from "react-hot-toast";
import { useCreateApplicationMutation } from "../services/application/application.api";

export const useCreateApplication = () => {
  const [createApplication, { isLoading, error }] =
    useCreateApplicationMutation();

  const apply = async (data: any) => {
    try {
      await createApplication(data).unwrap();
      toast.success("Application submitted successfully!");
      return true;
    } catch (err: any) {
      console.error(err);

      // ✅ If backend validation error exists
      const backendError =
        err?.data?.errorSources?.[0]?.message ||
        err?.data?.message ||
        "Failed to submit application!";

      toast.error(backendError);
      return false;
    }
  };

  return { apply, isLoading, error };
};