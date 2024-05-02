"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Service from "/public/img/services.jpg";
import { StaticImageData } from "next/image";

type ServiceContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

type ServiceContextType = {
  title: string | null;
  image: StaticImageData;
  handleTitle: (title: string | null) => void;
  setImage: (image: StaticImageData) => void;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

export const ServiceProvider = ({ children }: ServiceContextProviderProps) => {
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<StaticImageData | null>(null);

  const handleTitle = useCallback((titleSent: string | null) => {
    setTitle(titleSent);
  }, []);

  /* useEffect(() => {
    console.log("TITLE", title);
    if (title === null) {
      setTitle("Service");
      setImage(Service);
    }
  }, [title, image]); */

  return (
    <ServiceContext.Provider value={{ handleTitle, title, image, setImage }}>
      {console.log("TITLECONTEXT", title)}
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error(
      "useServiceContext must be used within a ServiceContextProvider"
    );
  }

  return context;
};
