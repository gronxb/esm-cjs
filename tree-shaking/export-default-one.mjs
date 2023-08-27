export const useEffect = () => {
  console.log("useEffect");
};

export const useState = () => {
  console.log("useState");
};

export default () => {
  useEffect();
  console.log("default");
};
