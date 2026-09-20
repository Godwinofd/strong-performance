import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'api-dev-server',
          configureServer(server) {
            server.middlewares.use(async (req: any, res: any, next: any) => {
              if (req.url && req.url.startsWith('/api/')) {
                try {
                  const url = new URL(req.url, `http://${req.headers.host || 'localhost:3000'}`);
                  const endpoint = url.pathname.replace(/^\/api\//, '');
                  const filePath = path.resolve(__dirname, `api/${endpoint}.js`);

                  // Parse request body for POST/PUT requests
                  let body: any = {};
                  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
                    const buffers = [];
                    for await (const chunk of req) {
                      buffers.push(chunk);
                    }
                    const text = Buffer.concat(buffers).toString();
                    if (text) {
                      try {
                        body = JSON.parse(text);
                      } catch (e) {
                        body = text;
                      }
                    }
                  }
                  req.body = body;

                  // Polyfill status and json methods for Vercel handler compatibility
                  if (!res.status) {
                    res.status = function (code: number) {
                      res.statusCode = code;
                      return res;
                    };
                  }
                  if (!res.json) {
                    res.json = function (data: any) {
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                    };
                  }

                  // Load API handler dynamically via Vite SSR module loader
                  const mod = await server.ssrLoadModule(filePath);
                  if (mod && mod.default) {
                    await mod.default(req, res);
                    return;
                  }
                } catch (err: any) {
                  console.error('API Dev Server Error:', err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message || 'Internal Dev Server Error' }));
                  return;
                }
              }
              next();
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
