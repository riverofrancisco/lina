import 'cookie';
import 'kleur/colors';
import { parse } from 'devalue';
import { D as DEFAULT_404_COMPONENT } from './astro/server_DzhRdlMD.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
const statusToCodeMap = Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);
class ActionError extends Error {
  type = "AstroActionError";
  code = "INTERNAL_SERVER_ERROR";
  status = 500;
  constructor(params) {
    super(params.message);
    this.code = params.code;
    this.status = ActionError.codeToStatus(params.code);
    if (params.stack) {
      this.stack = params.stack;
    }
  }
  static codeToStatus(code) {
    return codeToStatusMap[code];
  }
  static statusToCode(status) {
    return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
  }
  static fromJson(body) {
    if (isInputError(body)) {
      return new ActionInputError(body.issues);
    }
    if (isActionError(body)) {
      return new ActionError(body);
    }
    return new ActionError({
      code: "INTERNAL_SERVER_ERROR"
    });
  }
}
function isActionError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
  return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
class ActionInputError extends ActionError {
  type = "AstroActionInputError";
  // We don't expose all ZodError properties.
  // Not all properties will serialize from server to client,
  // and we don't want to import the full ZodError object into the client.
  issues;
  fields;
  constructor(issues) {
    super({
      message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
      code: "BAD_REQUEST"
    });
    this.issues = issues;
    this.fields = {};
    for (const issue of issues) {
      if (issue.path.length > 0) {
        const key = issue.path[0].toString();
        this.fields[key] ??= [];
        this.fields[key]?.push(issue.message);
      }
    }
  }
}
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ _astroAction: name });
  return `?${searchParams.toString()}`;
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    return { error: ActionError.fromJson(JSON.parse(res.body)), data: void 0 };
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse(res.body, {
      URL: (href) => new URL(href)
    }),
    error: void 0
  };
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"events/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/bepartof.DH6xsDGk.css"},{"type":"inline","content":"a[data-astro-cid-66bcrlrs]{width:100%;display:flex;justify-content:center}\n.container[data-astro-cid-zetdm5md]{position:relative;width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;text-align:center;z-index:10}.title[data-astro-cid-zetdm5md]{font-size:2.5rem;font-weight:700;margin-bottom:1rem}.description[data-astro-cid-zetdm5md]{font-size:1.2rem;margin-bottom:2rem}ButtonHome[data-astro-cid-zetdm5md]{z-index:20}body{margin:0;padding:0;font-family:sans-serif}.container[data-astro-cid-zetdm5md]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(/_astro/Toma1.AxrUBV4H.jpg);background-size:cover;background-position:center;filter:blur(8px);z-index:-1}.container[data-astro-cid-zetdm5md]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background:#00000080;z-index:-2}ButtonHome[data-astro-cid-zetdm5md] button[data-astro-cid-zetdm5md]{padding:.8rem 1.5rem;background-color:tomato;color:#fff;border:none;border-radius:5px;font-size:1rem;cursor:pointer;transition:background-color .3s ease}ButtonHome[data-astro-cid-zetdm5md] button[data-astro-cid-zetdm5md]:hover{background-color:#ff4500}\nhtml{font-family:Arial,Helvetica,sans-serif;background:#ffedd5;background-image:}code{font-family:Roboto,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/bepartof.DH6xsDGk.css"},{"type":"inline","content":"div[data-astro-cid-2kwnr3xf]{background-color:#000;display:flex;width:100%;padding-right:1%;padding-left:1%;justify-content:space-between;border-bottom:grey 1px}\nhtml{font-family:Arial,Helvetica,sans-serif;background:#ffedd5;background-image:}code{font-family:Roboto,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/bepartof","isIndex":false,"type":"page","pattern":"^\\/bepartof\\/?$","segments":[[{"content":"bepartof","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bepartof.astro","pathname":"/bepartof","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/bepartof.DH6xsDGk.css"},{"type":"inline","content":"div[data-astro-cid-2kwnr3xf]{background-color:#000;display:flex;width:100%;padding-right:1%;padding-left:1%;justify-content:space-between;border-bottom:grey 1px}\n.contact-section[data-astro-cid-qf4emcyz]{display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:2% 10%;box-sizing:border-box;gap:2rem}.contact-info[data-astro-cid-qf4emcyz]{flex:1}.contact-links[data-astro-cid-qf4emcyz]{list-style:none;padding:10%;margin:10px;display:flex;align-items:center;justify-content:space-between;align-self:center;gap:1rem;font-size:1.1rem;color:#333}.contact-links[data-astro-cid-qf4emcyz] a[data-astro-cid-qf4emcyz]{text-decoration:none;transition:color .3s ease,-webkit-text-decoration .3s ease;transition:color .3s ease,text-decoration .3s ease;transition:color .3s ease,text-decoration .3s ease,-webkit-text-decoration .3s ease}.contact-links[data-astro-cid-qf4emcyz] a[data-astro-cid-qf4emcyz]:hover{text-decoration:underline}.pic-container[data-astro-cid-qf4emcyz]{flex:1;display:flex;flex-direction:column;align-items:flex-end}.contact-pic[data-astro-cid-qf4emcyz]{max-width:100%;height:auto;border-radius:8px;box-shadow:0 4px 8px #0000001a}@media (max-width: 768px){.contact-section[data-astro-cid-qf4emcyz]{flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:5%;height:auto;gap:2rem}.contact-info[data-astro-cid-qf4emcyz]{order:2}.pic-container[data-astro-cid-qf4emcyz]{order:1;width:100%}.contact-pic[data-astro-cid-qf4emcyz]{max-width:80%;margin-bottom:2rem}}\nhtml{font-family:Arial,Helvetica,sans-serif;background:#ffedd5;background-image:}code{font-family:Roboto,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\na[data-astro-cid-66bcrlrs]{width:100%;display:flex;justify-content:center}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/bepartof.DH6xsDGk.css"},{"type":"inline","content":"h2[data-astro-cid-oqks27zs]{color:inherit;font-size:1.5rem;font-weight:700;font-family:sans-serif;margin-bottom:10px}.icon-link[data-astro-cid-oqks27zs]{display:flex;justify-content:center;align-items:center;margin-left:auto}.follow[data-astro-cid-oqks27zs]{display:flex;justify-content:center;color:#f5f5f5;background-color:#000;font-size:1rem;padding:10px 20px;border-radius:10px;margin-top:2px;margin-bottom:2px;transition:background .2s ease,color .2s ease}.follow[data-astro-cid-oqks27zs]:is(:hover,:focus-within){color:#000;background:#fff}p[data-astro-cid-oqks27zs]{margin-left:5px;font-weight:600}.media-insta[data-astro-cid-oqks27zs]{display:flex;align-items:center;background:;padding:10px;border-radius:15px;opacity:.8;width:100%;animation:fadeIn2 2s;transition:transform .5s ease,background .5s ease,color .5s ease,box-shadow .5s ease;box-shadow:1px 1px 1px 1px #000;color:#000}.media-insta[data-astro-cid-oqks27zs]:is(:hover,:focus-within){transform:scale(1.02);background:#8c114a;box-shadow:none;color:#000}.media-youtube[data-astro-cid-oqks27zs]{display:flex;align-items:center;padding:10px;border-radius:15px;opacity:.8;width:100%;animation:fadeIn2 2s;transition:transform .5s ease,background .5s ease,color .5s ease,box-shadow .5s ease;box-shadow:1px 1px 1px 1px #000;color:#000}.media-youtube[data-astro-cid-oqks27zs]:is(:hover,:focus-within){transform:scale(1.02);background:#8c030e;color:#000;box-shadow:none}.media-tiktok[data-astro-cid-oqks27zs]{display:flex;align-items:center;padding:10px;border-radius:15px;opacity:.8;width:100%;animation:fadeIn2 2s;transition:transform .5s ease,background .5s ease,color .5s ease,box-shadow .5s ease;box-shadow:1px 1px 1px 1px #000;color:#000}.media-tiktok[data-astro-cid-oqks27zs]:is(:hover,:focus-within){transform:scale(1.02);background:#018079;color:#000;box-shadow:none}.media-spoty2[data-astro-cid-oqks27zs]{display:flex;align-items:center;padding:10px;border-radius:15px;opacity:.8;width:100%;animation:fadeIn2 2s;transition:transform .5s ease,background .5s ease,color .5s ease,box-shadow .5s ease;box-shadow:1px 1px 1px 1px #000;color:#000}.media-spoty2[data-astro-cid-oqks27zs]:is(:hover,:focus-within){transform:scale(1.02);background:#3c5927;color:#000;box-shadow:none}@media (max-width: 300px){.follow[data-astro-cid-oqks27zs]{flex-direction:column;padding:10px;align-items:center}}@keyframes fadeIn2{0%{opacity:0}to{opacity:.8}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.nav[data-astro-cid-tzft54gn]{display:grid;width:100%;grid-template-columns:repeat(auto-fit,minmax(2ch,1fr));gap:1rem;padding:2%}.social-media-grid[data-astro-cid-tzft54gn]{display:grid;padding:2%;grid-template-columns:1fr;gap:1rem;width:100%}@media (min-width: 768px){.social-media-grid[data-astro-cid-tzft54gn]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 1024px){.social-media-grid[data-astro-cid-tzft54gn]{grid-template-columns:repeat(4,1fr)}}main[data-astro-cid-tzft54gn]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;width:100vw;min-height:100vh;color:#ffd0bf;font-size:20px;background:url(../../media/pictures/Toma1.jpg) no-repeat center center fixed;background-size:cover}\n.link-card[data-astro-cid-vg4hkzmw]{list-style:none;display:flex;flex-direction:row;padding:2px;background-size:400%;border-radius:7px;background-position:100%;transition:background-position 3s cubic-bezier(.22,1,.36,1);box-shadow:inset 2px 2px 1px 1px #fffefe1a}.link-card[data-astro-cid-vg4hkzmw]>a[data-astro-cid-vg4hkzmw]{width:100%;display:flex;justify-content:space-between;align-items:center;line-height:1.4;padding:calc(1.1rem - 1px);border-radius:8px;color:#ffd0bf;opacity:1}h2[data-astro-cid-vg4hkzmw]{font-size:1.25rem;text-shadow:1px 1px black;transition:color .6s cubic-bezier(.22,1,.36,1)}.link-card[data-astro-cid-vg4hkzmw]:is(:hover,:focus-within){background-position:0;background-image:linear-gradient(135deg,#794f40,#d29090,#533a2b)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n"}],"routeData":{"route":"/socialmedia","isIndex":false,"type":"page","pattern":"^\\/socialmedia\\/?$","segments":[[{"content":"socialmedia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/socialmedia.astro","pathname":"/socialmedia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D-2wbxhY.js"}],"styles":[{"type":"external","src":"/_astro/bepartof.DH6xsDGk.css"},{"type":"inline","content":".link-card[data-astro-cid-vg4hkzmw]{list-style:none;display:flex;flex-direction:row;padding:2px;background-size:400%;border-radius:7px;background-position:100%;transition:background-position 3s cubic-bezier(.22,1,.36,1);box-shadow:inset 2px 2px 1px 1px #fffefe1a}.link-card[data-astro-cid-vg4hkzmw]>a[data-astro-cid-vg4hkzmw]{width:100%;display:flex;justify-content:space-between;align-items:center;line-height:1.4;padding:calc(1.1rem - 1px);border-radius:8px;color:#ffd0bf;opacity:1}h2[data-astro-cid-vg4hkzmw]{font-size:1.25rem;text-shadow:1px 1px black;transition:color .6s cubic-bezier(.22,1,.36,1)}.link-card[data-astro-cid-vg4hkzmw]:is(:hover,:focus-within){background-position:0;background-image:linear-gradient(135deg,#794f40,#d29090,#533a2b)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#262626;background-image:}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.welcome[data-astro-cid-ecqwxofi]{position:relative;min-height:100vh}.title[data-astro-cid-ecqwxofi]{position:relative;z-index:20;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-shadow:1px 1px black;padding-top:15%}.capa[data-astro-cid-ecqwxofi]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1c1c1d;opacity:.5;mix-blend-mode:overlay;z-index:2}video[data-astro-cid-ecqwxofi]{position:absolute;left:0;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:2}h1[data-astro-cid-ecqwxofi]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.welcome[data-astro-cid-j7pv25f6]{margin:auto;position:relative;min-height:100vh;z-index:2;padding:1rem;font-size:20px}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;margin-top:20%;text-align:center;margin-bottom:1em;color:#ffd0bf;text-shadow:2px 2px 2px black;animation:fadeInTitle 1s}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0;animation:fadeIn 3s}@keyframes fadeInTitle{0%{opacity:0}to{opacity:1}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/socialmedia.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/bepartof.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/events.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/pages/home.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/bepartof@_@astro":"pages/bepartof.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/socialmedia@_@astro":"pages/socialmedia.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_DN4YPjVC.mjs","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Gallery/Carousel/Carousel":"_astro/Carousel.6uvi0-ir.js","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/General/Navbar":"_astro/Navbar.DbQSDlK_.js","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Contact/Forms/ContactForm":"_astro/ContactForm.CMEbZUlq.js","/astro/hoisted.js?q=0":"_astro/hoisted.D-2wbxhY.js","C:/Users/Pc/Documents/Trabajo/FreeLance/lina/v2/src/components/Events/Pages/EventsPageCont":"_astro/EventsPageCont.DKbExlRK.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Toma1.AxrUBV4H.jpg","/_astro/Logo.D3BJNREr.png","/_astro/Logodark.B_CPhm8u.png","/_astro/lacabeza.-ejAw0Qz.jpg","/_astro/holaguido.wSo8ofNm.jpg","/_astro/homeToma1.CDJxdmCx.mp4","/_astro/corrientes.W0le-c1I.jpg","/_astro/bepartof.DH6xsDGk.css","/favicon.svg","/LogoFoto.png","/_astro/Carousel.6uvi0-ir.js","/_astro/client.BIGLHmRd.js","/_astro/contact.681c370d.l0sNRNKZ.js","/_astro/ContactForm.CMEbZUlq.js","/_astro/events.BGv6rUns.css","/_astro/EventsPageCont.DKbExlRK.js","/_astro/hoisted.D-2wbxhY.js","/_astro/home.CLfpyH-M.css","/_astro/index.DhYZZe0J.js","/_astro/interfaces.BscqkDpT.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Navbar.DbQSDlK_.js","/media/icons/add.svg","/media/icons/back.svg","/media/icons/insta.svg","/media/icons/logov2.svg","/media/icons/mail.svg","/media/icons/mailout.svg","/media/icons/map.svg","/media/icons/share.svg","/media/icons/sing.svg","/media/icons/spoty.svg","/media/icons/spoty2.svg","/media/icons/tiktok.svg","/media/icons/wp.svg","/media/icons/youtube.svg","/media/pictures/Logo.png","/media/pictures/Logodark.png","/media/pictures/qnq.jpg","/media/pictures/Toma1.jpg","/media/videos/homeToma1.mp4","/media/pictures/carousel/corrientes.jpg","/media/pictures/carousel/guitarra.jpg","/media/pictures/carousel/holaguido.jpg","/media/pictures/carousel/lacabeza.jpg","/media/pictures/carousel/toma1.jpg","/events/index.html","/gallery/index.html","/home/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { DEFAULT_404_ROUTE as D, default404Instance as a, deserializeActionResult as d, ensure404Route as e, getActionQueryString as g, manifest as m };
