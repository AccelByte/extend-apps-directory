import { type RouteConfig, index, prefix } from "@react-router/dev/routes";

export default [
  ...prefix("/extend-apps-explorer", [
    index("routes/home.tsx"),
  ]),
] satisfies RouteConfig;
