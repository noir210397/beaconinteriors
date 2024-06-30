import { useContext, createContext, useState } from "react";
type Toasts = {
  name: string;
};
type ToastContextType = {
  updateToasts: (val: Toasts) => void;
  toasts: Toasts[];
};
const ToastContext = createContext<ToastContextType>({
  updateToasts: () => {},
  toasts: [],
});
function useToast() {
  return useContext(ToastContext)!;
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toasts[]>([]);
  function updateToasts(val: Toasts) {
    setToasts((toast) => [...toast, val]);
  }

  return (
    <ToastContext.Provider value={{ updateToasts, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
