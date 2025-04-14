// vite-logger-plugin.ts
import type { Plugin } from 'vite';

export default function viteLogger(): Plugin {
  return {
    name: 'vite-http-logger',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const start = Date.now();
        const originalEnd = res.end;
        
        res.end = function (chunk?: any, encodingOrCb?: BufferEncoding | (() => void), cb?: () => void) {
          const duration = Date.now() - start;
          console.log(
            `[Frontend] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`
          );
          if (typeof encodingOrCb === 'function') {
            return originalEnd.call(res, chunk, 'utf8', encodingOrCb);
          }
          return originalEnd.call(res, chunk, encodingOrCb || 'utf8', cb);
        };
        next();
      });
    }
  };
}