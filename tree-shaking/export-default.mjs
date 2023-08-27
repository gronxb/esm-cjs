export const useEffect = () => {
  console.log("useEffect");
};

export const useState = () => {
  console.log("useState");
};

// 이렇게 되있는 경우도 꽤 있음. module.exports와 다를게 없다.
export default {
  useEffect,
  useState,
};
