import path from "path";
import { type Dirent, existsSync, promises as fs } from "fs";


const CONTENT_DIR = path.join(process.cwd(), "content");
const REGISTRY_DIR = path.join(process.cwd(), "src/__registry__");

interface StaticRoute {
  slug: string[];
};

export async function buildStaticRoutes(subPath: string): Promise<StaticRoute[]> {
  const dir = path.join(CONTENT_DIR, subPath);
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug: [slug],
      };
    });
}

export async function resolveStaticRoutes(files: Dirent[]) {
  return files.map((file) => {
    console.log(file.name);

    return new Promise<[string, StaticRoute[]]>((resolve, reject) => {
      if (file.isDirectory()) {
        const slug = file.name;
        buildStaticRoutes(slug).then((subroutes) => {

          resolve([slug, subroutes]);
        }).catch((err) => {
          reject(err);
        })
      }
    })
  })
}

export async function buildAllStaticRoutes(): Promise<Record<string, StaticRoute[]>> {
  return new Promise((resolve, reject) => {
    const routes: Record<string, StaticRoute[]> = {};

    fs.readdir(CONTENT_DIR, { withFileTypes: true })
      .then((files) => {
        resolveStaticRoutes(files).then((subroutes) => {
          Promise.all(subroutes).then((subroutes) => {
            subroutes.filter(Boolean).forEach(([slug, subroutes]) => {
              routes[slug] = subroutes;
            });
            resolve(routes);
          }).catch((err) => {
            reject(err);
          })
        })
      });

  })
}

try {
  console.log("💽 Building Static Routes...");
  if (!existsSync(CONTENT_DIR)) {
    console.error("content directory not found");
    process.exit(1);
  }

  await buildAllStaticRoutes()
    .then(async (routes) => {
      console.log("✅ Done!");
      const routesPath = path.join(REGISTRY_DIR, "static-routes.json");
      fs.writeFile(routesPath, JSON.stringify(routes, null, 2), "utf8");
    });
} catch (error) {
  console.error(error);
  process.exit(1);
}
