import { c as createComponent, $ as $$BaseLayout, a as $$Nav, b as $$Footer } from './BaseLayout_CeFVBpJn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_DDhP9VAG.mjs';

const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Download;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Download Muxy" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "currentPath": Astro2.url.pathname })} ${maybeRenderHead()}<main class="mx-auto mb-20 mt-[90px] max-w-[640px] px-12"> <h1 class="mb-5 text-[clamp(40px,6vw,64px)] font-black leading-[0.95] tracking-[-0.04em] text-white">Download<br>Muxy</h1> <p class="mb-12 text-base font-light leading-[1.65] text-white/50">A native macOS terminal that grows into a full project workspace. Requires macOS 14+. Free and open source. No account required.</p> <div class="flex flex-col gap-3"> <section class="rounded-[10px] border border-white/10 bg-white/5 px-7 py-6"> <p class="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">Homebrew</p> <div class="rounded-[7px] bg-black/30 px-4 py-3 font-mono text-[13px] leading-[1.7] text-white/70"> <div><span class="text-white/30">$ </span>brew tap muxy-app/tap</div> <div><span class="text-white/30">$ </span>brew install --cask muxy</div> </div> </section> <section class="flex items-center justify-between gap-6 rounded-[10px] border border-accent/20 bg-white/5 px-7 py-6"> <div> <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">Direct download</p> <p class="text-sm font-light text-white/65">Latest release · Apple Silicon & Intel</p> </div> <a href="https://github.com/muxy-app/muxy/releases" class="primary-btn shrink-0 rounded-[7px] bg-muxy-gradient px-6 py-2.5 text-sm font-semibold text-white">Download .dmg</a> </section> <section class="rounded-[10px] border border-white/10 bg-white/5 px-7 py-6"> <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">iOS (TestFlight)</p> <p class="mb-2.5 text-sm font-light text-white/55">Companion app — in active beta testing</p> <a href="https://testflight.apple.com/join/7t1AaYHW" class="text-[13px] text-accent">Join via TestFlight →</a> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/prestonbutton/Developer/PB/muxy/website/src/pages/download.astro", void 0);

const $$file = "/Users/prestonbutton/Developer/PB/muxy/website/src/pages/download.astro";
const $$url = "/download";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Download,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
