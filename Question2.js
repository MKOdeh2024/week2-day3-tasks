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

const executeInParallelWithPromises = (apis) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promises = apis.map((api) => fetch(api.apiUrl));

      Promise.all(promises)
        .then((data) => resolve(data))
        .catch((error) => reject("Error: Failed to fetch data"));
    }, 2000);
  });
};

executeInParallelWithPromises(apis)
  .then((data) => {
    return processData(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

function processData(data) {
  const res = [];
  data.forEach((apiData, index) => {
    const { apiName, apiUrl } = apis[index];
    res.push({ apiName, apiUrl, apiData });
  });
  console.log(res); // Output the processed data
}
