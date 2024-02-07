

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5OY_hS_j.js","_app/immutable/chunks/scheduler.DhUwwyhf.js","_app/immutable/chunks/index.wcwbYvF5.js","_app/immutable/chunks/entry.DquY66ge.js"];
export const stylesheets = [];
export const fonts = [];
