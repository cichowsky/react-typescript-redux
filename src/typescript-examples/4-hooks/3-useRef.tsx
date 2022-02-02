import React, { useRef, useEffect } from 'react';

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null); // passing type of HTML element

  useEffect(() => {
    inputRef.current?.focus();
  });

  return <input ref={inputRef} type="search" />;
};

export default Search;
