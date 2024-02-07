const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.GNGMUutH.js","app":"_app/immutable/entry/app.XJ2POWC5.js","imports":["_app/immutable/entry/start.GNGMUutH.js","_app/immutable/chunks/entry.DquY66ge.js","_app/immutable/chunks/scheduler.DhUwwyhf.js","_app/immutable/entry/app.XJ2POWC5.js","_app/immutable/chunks/scheduler.DhUwwyhf.js","_app/immutable/chunks/index.wcwbYvF5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Zr3XhisC.js')),
			__memo(() => import('./chunks/1-wFaqQL4q.js')),
			__memo(() => import('./chunks/2-iBqbG1l8.js')),
			__memo(() => import('./chunks/3-duwQhhRj.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/svelteroute",
				pattern: /^\/svelteroute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
