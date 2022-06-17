const interval = () => {
  console.log("time" + "lo ");
  setInterval(() => {
    console.log("Hello");
  }, 1000);
};

const timeout = () => {
  console.log("time" + "Hello ");
  setTimeout(() => {
    console.log("Momina Arif");
  }, 2000);
};


timeout();
interval();

// module.exports = { interval, timeout }
