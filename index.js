async function justWait() {
  return new Promise((resolve, reject) => setTimeout(resolve, 100));
}

module.exports.sayHelloAsync = async (event) => {
  console.log("inside", event);
  await justWait();
};
