import { FileRoute, lazyFn, lazyRouteComponent } from "@tanstack/react-router"

import { Route as rootRoute } from "./routes/__root"
import { Route as ProfileImport } from "./routes/profile"
import { Route as LibraryImport } from "./routes/library"
import { Route as IndexImport } from "./routes"
import { Route as ServiceCreateImport } from "./routes/service/create"
import { Route as PartsHistoryImport } from "./routes/parts/history"
import { Route as PartsCreateImport } from "./routes/parts/create"
import { Route as AdministrationUsersImport } from "./routes/administration/users"
import { Route as AdministrationAddressbookImport } from "./routes/administration/addressbook"
import { Route as ServiceIndexImport } from "./routes/service"
import { Route as PartsIndexImport } from "./routes/parts"
import { Route as AdministrationIndexImport } from "./routes/administration"

const ProfileRoute = ProfileImport.update({
  path: "/profile",
  getParentRoute: () => rootRoute,
} as any)

const LibraryRoute = LibraryImport.update({
  path: "/library",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

const ServiceCreateRoute = ServiceCreateImport.update({
  path: "/service/create",
  getParentRoute: () => rootRoute,
} as any)

const PartsHistoryRoute = PartsHistoryImport.update({
  path: "/parts/history",
  getParentRoute: () => rootRoute,
} as any)

const PartsCreateRoute = PartsCreateImport.update({
  path: "/parts/create",
  getParentRoute: () => rootRoute,
} as any)

const AdministrationUsersRoute = AdministrationUsersImport.update({
  path: "/administration/users",
  getParentRoute: () => rootRoute,
} as any)

const AdministrationAddressbookRoute = AdministrationAddressbookImport.update({
  path: "/administration/addressbook",
  getParentRoute: () => rootRoute,
} as any)

const ServiceIndexRoute = ServiceIndexImport.update({
  path: "/service/",
  getParentRoute: () => rootRoute,
} as any)

const PartsIndexRoute = PartsIndexImport.update({
  path: "/parts/",
  getParentRoute: () => rootRoute,
} as any)

const AdministrationIndexRoute = AdministrationIndexImport.update({
  path: "/administration/",
  getParentRoute: () => rootRoute,
} as any)

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/library": {
      preLoaderRoute: typeof LibraryImport
      parentRoute: typeof rootRoute
    }
    "/profile": {
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    "/administration/": {
      preLoaderRoute: typeof AdministrationIndexImport
      parentRoute: typeof rootRoute
    }
    "/parts/": {
      preLoaderRoute: typeof PartsIndexImport
      parentRoute: typeof rootRoute
    }
    "/service/": {
      preLoaderRoute: typeof ServiceIndexImport
      parentRoute: typeof rootRoute
    }
    "/administration/addressbook": {
      preLoaderRoute: typeof AdministrationAddressbookImport
      parentRoute: typeof rootRoute
    }
    "/administration/users": {
      preLoaderRoute: typeof AdministrationUsersImport
      parentRoute: typeof rootRoute
    }
    "/parts/create": {
      preLoaderRoute: typeof PartsCreateImport
      parentRoute: typeof rootRoute
    }
    "/parts/history": {
      preLoaderRoute: typeof PartsHistoryImport
      parentRoute: typeof rootRoute
    }
    "/service/create": {
      preLoaderRoute: typeof ServiceCreateImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LibraryRoute,
  ProfileRoute,
  AdministrationIndexRoute,
  PartsIndexRoute,
  ServiceIndexRoute,
  AdministrationAddressbookRoute,
  AdministrationUsersRoute,
  PartsCreateRoute,
  PartsHistoryRoute,
  ServiceCreateRoute,
])
