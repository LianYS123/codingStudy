// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/FrontEndWorkspace/myWorkSpace/projects/liuli/browser-umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
