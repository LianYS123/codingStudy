// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "dashboard",
            "routes": [
              {
                "name": "analysis",
                "icon": "smile",
                "path": "/dashboard/analysis",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/dashboard/analysis'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "monitor",
                "icon": "smile",
                "path": "/dashboard/monitor",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/dashboard/monitor'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "workplace",
                "icon": "smile",
                "path": "/dashboard/workplace",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/dashboard/workplace'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/form",
            "icon": "form",
            "name": "form",
            "routes": [
              {
                "name": "basic-form",
                "icon": "smile",
                "path": "/form/basic-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/form/basic-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "step-form",
                "icon": "smile",
                "path": "/form/step-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/form/step-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "advanced-form",
                "icon": "smile",
                "path": "/form/advanced-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/form/advanced-form'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "icon": "table",
            "name": "list",
            "routes": [
              {
                "path": "/list/search",
                "name": "search-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/search'), loading: LoadingComponent}),
                "routes": [
                  {
                    "path": "/list/search",
                    "redirect": "/list/search/articles",
                    "exact": true
                  },
                  {
                    "name": "articles",
                    "icon": "smile",
                    "path": "/list/search/articles",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/search/articles'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "projects",
                    "icon": "smile",
                    "path": "/list/search/projects",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/search/projects'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "applications",
                    "icon": "smile",
                    "path": "/list/search/applications",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/search/applications'), loading: LoadingComponent}),
                    "exact": true
                  }
                ]
              },
              {
                "name": "table-list",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "basic-list",
                "icon": "smile",
                "path": "/list/basic-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/basic-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "card-list",
                "icon": "smile",
                "path": "/list/card-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/list/card-list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/profile",
            "name": "profile",
            "icon": "profile",
            "routes": [
              {
                "name": "basic",
                "icon": "smile",
                "path": "/profile/basic",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/profile/basic'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "advanced",
                "icon": "smile",
                "path": "/profile/advanced",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/profile/advanced'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "result",
            "icon": "CheckCircleOutlined",
            "path": "/result",
            "routes": [
              {
                "name": "success",
                "icon": "smile",
                "path": "/result/success",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__success' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/result/success'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "fail",
                "icon": "smile",
                "path": "/result/fail",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__fail' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/result/fail'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "exception",
            "icon": "warning",
            "path": "/exception",
            "routes": [
              {
                "name": "403",
                "icon": "smile",
                "path": "/exception/403",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__403' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/exception/403'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "404",
                "icon": "smile",
                "path": "/exception/404",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/exception/404'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "500",
                "icon": "smile",
                "path": "/exception/500",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__500' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/exception/500'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/account/center'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/account/settings'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "editor",
            "icon": "highlight",
            "path": "/editor",
            "routes": [
              {
                "name": "flow",
                "icon": "smile",
                "path": "/editor/flow",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__flow' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/editor/flow'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "mind",
                "icon": "smile",
                "path": "/editor/mind",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__mind' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/editor/mind'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "koni",
                "icon": "smile",
                "path": "/editor/koni",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__koni' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/editor/koni'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'D:/FrontEndWorkspace/myWorkSpace/projects/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
