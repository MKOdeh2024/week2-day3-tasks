const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products",
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users",
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts",
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments",
  },
];

const executeInSequenceWithPromises = (apis) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promises = apis.map((api) => fetch(api.apiUrl));

      promises.forEach((promise) => {
        promise
          .then((data) => resolve(data))
          .catch((error) => reject("Error: Failed to fetch data"));
      });
    }, 2000);
  });
};

executeInSequenceWithPromises(apis)
  .then((data) => {
    return processData(data, apis);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

function processData(data, api) {
  const res = [];
  api.forEach(({ apiName, apiUrl }) => {
    res.push({ apiName, apiUrl, apiData: data });
  });
  console.log(res); // Output the processed data
}
