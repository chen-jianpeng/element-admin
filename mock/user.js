export default [
  {
    url: "/users",
    type: "get",
    response: {
      code: 0,
      "data|10": [{ id: "@id()", name: "@cname()" }]
    }
  }
];
