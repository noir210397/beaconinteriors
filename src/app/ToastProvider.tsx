import { useContext, createContext, useState } from "react";
import { toast } from "sonner";

type ToastContextType = {};
const ToastContext = createContext<ToastContextType>({});
function useToast() {
  return useContext(ToastContext)!;
}
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
