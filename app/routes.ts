import { type RouteConfig, index, prefix } from '@react-router/dev/routes'

export default [...prefix('/extend-apps-directory', [index('routes/home.tsx')])] satisfies RouteConfig
