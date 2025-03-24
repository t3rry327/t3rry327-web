import React from "react";

export interface Route {
    path: string;
    component: React.ComponentType;
  }
  
  export function getRoutes(): Route[] {
    const pages: Record<string, { default: React.ComponentType }> = import.meta.glob('../pages/**/page.tsx', { eager: true });
    const routes: Route[] = [];
  
    for (const path in pages) {
      const match = path.match(/\.\/pages\/(.*?)\/page\.tsx$/);
      if (match) {
        const segments = match[1].split('/');
        const routePath = segments
          .map((segment) =>
            segment.startsWith('[') && segment.endsWith(']')
              ? `:${segment.slice(1, -1)}`
              : segment
          )
          .join('/');
  
        routes.push({
          path: routePath === 'home' ? '/' : `/${routePath}`,
          component: pages[path].default,
        });
      }
    }
  
    return routes;
  }
  