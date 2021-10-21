import {useState} from "react";

export type FilterKeyType = 'All' | 'Open' | 'Close';

export const useFilterKey = () => {
  const [ filterKey, setFilterKey ] = useState<FilterKeyType>('All');

  const onUserSetFilterKey = (value: FilterKeyType) => {
    setFilterKey(value);
  };

  return {
    filterKey,
    onUserSetFilterKey
  }
};