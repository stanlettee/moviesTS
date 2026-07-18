import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import Film from "../types/Films";

interface MovieContextType {
  movies: Film[];
  setMovies: Dispatch<SetStateAction<Film[]>>;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [movies, setMovies] = useState<Film[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};