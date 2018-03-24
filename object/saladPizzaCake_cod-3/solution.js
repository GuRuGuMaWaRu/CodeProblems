function findAllRoutes(startPoint, B, C) {
  let routes = [];
  let finalRoutes = [];

  B.forEach(pizza => {
    if (pizza > startPoint) {
      routes.push([startPoint, pizza]);
    }
  });

  routes.forEach(route => {
    C.forEach(cake => {
      if (cake > route[route.length - 1]) {
        finalRoutes.push([...route, cake]);
      }
    });
  });

  return finalRoutes;
}

function solution(A, B, C) {
  return A.reduce(
    (allRoutes, start) => [...allRoutes, ...findAllRoutes(start, B, C)],
    []
  ).length;
}
