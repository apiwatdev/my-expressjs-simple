function RouteTable(method, path) {
  this.Method = method;
  this.Path = path;
}

const routesString = (router, prefix = "") => {
  return router.stack
    .filter((r) => r.route)
    .map(
      (r) =>
        Object.keys(r.route.methods)[0].toUpperCase().padEnd(7) +
        prefix +
        r.route.path
    )
    .join("\n");
};

const routesStringPrint = (router, prefix = "") => {
  console.log(routesString(router, prefix));
};

export const routesStringTable = (router, prefix = "") => {
  const routerTables = [];
  router.stack
    .filter((r) => r.route)
    .map((r) =>
      routerTables.push(
        new RouteTable(
          Object.keys(r.route.methods)[0].toUpperCase(),
          r.route.path
        )
      )
    );

  console.table(routerTables);
};

export default routesStringPrint;
