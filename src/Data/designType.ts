type designType = {
  color: string,
  borderColor: string,
  icon: string,
};

// Defining a data type which is a record of string keys mapped to 'generateDesignData'.
export type designDataType = Record<string, designType>;

// Defining a function to generate a data object of 'generateDesignData'.
export function generateDesignData(
  color: string,
  borderColor: string,
  icon: string,
): designType {
  // Returning an object with attributes corresponding to the provided parameters.
  return {
    color,
    borderColor,
    icon,
  };
}