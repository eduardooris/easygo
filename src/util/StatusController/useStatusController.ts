import { useState } from "react";

export const useStatusController = () => {
  const [status, setStatus] = useState({
    success: false,
    loading: false,
    error: false,
  });

  const setStatusType = (type: string) => {
    setStatus({
      success: type === "success",
      loading: type === "loading",
      error: type === "error",
    });
  };

  return {
    ...status,
    handleSuccess: () => setStatusType("success"),
    handleLoading: () => setStatusType("loading"),
    handleError: () => setStatusType("error"),
  };
};
