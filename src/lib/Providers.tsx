import React from "react";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      {children}
    </Provider>
  );
};

export default Providers;
