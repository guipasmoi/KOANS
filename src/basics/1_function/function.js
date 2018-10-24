export const exo_0 = () => {
  // please return the expected function
  return () => 42;
};

export const exo_1 = () => {
  // please return the expected function
  return (a, b) => a + b;
};

export const exo_10 = () => {
  // please return the expected function
  return function fibonacci(num) {
    var a = 0,
      b = 1,
      temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  };
};
