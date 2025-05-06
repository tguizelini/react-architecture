export default interface IModuleRoutes {
  name: string
  routes: IModuleRouteItem[]
}

export interface IModuleRouteItem {
  path: string
  private: boolean
  component: React.ComponentType<any>
}