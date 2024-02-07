

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.YuFn1JNA.js","_app/immutable/chunks/scheduler.DhUwwyhf.js","_app/immutable/chunks/index.wcwbYvF5.js"];
export const stylesheets = [];
export const fonts = [];
