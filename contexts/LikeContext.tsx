import React, { createContext, useContext, useState } from "react";

type LikeContextType = {
  likeCount: number;
  incrementLike: () => void;
  decrementLike: () => void;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider = ({ children }: { children: React.ReactNode }) => {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLike = () => setLikeCount((prev) => prev + 1);
  const decrementLike = () => setLikeCount((prev) => prev - 1);

  return (
    <LikeContext.Provider value={{ likeCount, incrementLike, decrementLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLikeContext must be used within a LikeProvider");
  }
  return context;
};
