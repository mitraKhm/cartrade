export const useUtilities = () => {
  function toTitleCase(str) {
    return str.toUpperCase();
  }

  return {
    toTitleCase,
  };
};
