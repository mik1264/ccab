// Cloudflare Pages middleware — injects privacy-friendly Plausible analytics
// into every HTML page served from ccab.mkirsanov.com.
//
// Why a middleware instead of editing 4,874 HTML files:
//   - One place to maintain; automatically covers existing and future pages.
//   - Plausible is JavaScript-based, so crawlers (e.g. ClaudeBot) that don't
//     execute JS are NOT counted — the dashboard shows real humans only.
//
// Safe-by-design: only HTML responses are rewritten; everything else
// (JS, CSS, images, etc.) passes through untouched, and any unexpected
// error falls back to the original, unmodified response.

// Per-site tagged script for the ccab.mkirsanov.com Plausible property.
const PLAUSIBLE_SNIPPET = `
<script async src="https://plausible.io/js/pa-THusl251OZDoo_CR5HPvZ.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>`;

class PlausibleInjector {
  element(element) {
    // Append the snippet just before </head>.
    element.append(PLAUSIBLE_SNIPPET, { html: true });
  }
}

export async function onRequest(context) {
  const response = await context.next();

  try {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      return response;
    }
    return new HTMLRewriter()
      .on("head", new PlausibleInjector())
      .transform(response);
  } catch (err) {
    // Never let analytics injection break page delivery.
    return response;
  }
}
