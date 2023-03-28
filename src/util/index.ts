const debounce = (callback: () => void, timeout: number): (() => void) => {
  let timeId: NodeJS.Timeout;

  return () => {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      callback();
    }, timeout);
  };
};

export default { debounce };
