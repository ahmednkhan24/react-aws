declare type HigherOrderComponent = (Component: React.FC<T>) => React.FC<T>;

declare type Auth = {
  state: string;
  user: unknown;
};
