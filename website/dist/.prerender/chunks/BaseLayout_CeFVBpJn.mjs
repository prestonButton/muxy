import 'piccolore';
import { A as AstroError, I as InvalidComponentArgs, c as createRenderInstruction, m as maybeRenderHead, a as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot } from './prerender_DDhP9VAG.mjs';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-12 py-8"> <div class="flex items-center gap-2.5"> <img src="/assets/logo.svg" alt="Muxy" class="h-5 w-5"> <span class="text-sm font-semibold text-white">Muxy</span> <span class="text-xs text-white/30">MIT License</span> </div> <div class="flex gap-7 text-xs text-white/35"> <a href="https://github.com/muxy-app/muxy">GitHub</a> <a href="https://discord.gg/4eMXAmJQ2n">Discord</a> <a href="/docs">Docs</a> <a href="/download">Download</a> </div> </footer>`;
}, "/Users/prestonbutton/Developer/PB/muxy/website/src/components/Footer.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const { currentPath } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav id="site-nav" class="fixed left-0 right-0 top-0 z-50 h-[54px] border-b border-transparent bg-transparent px-10 transition-all duration-300"> <div class="mx-auto flex h-full max-w-7xl items-center justify-between"> <a href="/" class="flex items-center gap-2.5"> <img src="/assets/logo.svg" alt="Muxy" class="h-6 w-6"> <span class="text-[15px] font-bold tracking-[-0.02em] text-white">Muxy</span> </a> <div class="flex items-center gap-2"> <a href="/docs"${addAttribute([
    "rounded-md border px-3 py-1.5 text-[13px] transition-all duration-150",
    currentPath === "/docs" ? "border-accent/40 bg-accent/15 text-white" : "border-white/15 text-white/50 hover:text-white/80"
  ], "class:list")}>
Docs
</a> <a href="https://github.com/muxy-app/muxy" class="rounded-md border border-white/15 px-3 py-1.5 text-[13px] text-white/50">GitHub ↗</a> <a href="/download" class="rounded-md bg-muxy-gradient px-6 py-2 text-[13px] font-semibold text-white">Download</a> </div> </div> </nav> ${renderScript($$result, "/Users/prestonbutton/Developer/PB/muxy/website/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/prestonbutton/Developer/PB/muxy/website/src/components/Nav.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/assets/logo.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-bg text-fg"> <div class="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(ellipse_80%_50%_at_15%_-10%,rgba(34,211,238,0.165)_0%,transparent_55%),radial-gradient(ellipse_60%_70%_at_85%_10%,rgba(99,102,241,0.195)_0%,transparent_55%),radial-gradient(ellipse_50%_60%_at_5%_90%,rgba(236,72,153,0.12)_0%,transparent_55%),radial-gradient(ellipse_70%_50%_at_95%_80%,rgba(167,139,250,0.12)_0%,transparent_55%)]"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/prestonbutton/Developer/PB/muxy/website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Nav as a, $$Footer as b, createComponent as c, renderScript as r };
