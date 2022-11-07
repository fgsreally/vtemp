import type { RouteRecordRaw } from "vue-router";
import HelloWorld from "@/views/HelloWorld.vue";
const modules = import.meta.glob("./modules/**/*.ts", { eager: true }) as {
  [key: string]: { default: RouteRecordRaw };
};
const routeModuleList: RouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key]?.default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const basicRoutes = [
  {
    path: "/",
    name: "main",
    component: HelloWorld,
  },
];

export const allRoutes = [...basicRoutes];

// export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
//     path: '/error-log',
//     name: 'ErrorLog',
//     component: LAYOUT,
//     redirect: '/error-log/list',
//     meta: {
//       title: 'ErrorLog',
//       hideBreadcrumb: true,
//       hideChildrenInMenu: true,
//     },
//     children: [
//       {
//         path: 'list',
//         name: 'ErrorLogList',
//         component: () => import('/@/views/sys/error-log/index.vue'),
//         meta: {
//           title: t('routes.basic.errorLogList'),
//           hideBreadcrumb: true,
//           currentActiveMenu: '/error-log',
//         },
//       },
//     ],
//   };
