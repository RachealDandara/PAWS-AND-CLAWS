// Loads each Vega-Lite spec from vis/*.json into the matching <div class="chart" data-spec="...">
(async function () {
  let config = {};
  try { config = await (await fetch("vis/config.json?v=chocolate-v5")).json(); } catch (e) { console.warn("No shared config", e); }
  document.querySelectorAll(".chart[data-spec]").forEach(function (el) {
    vegaEmbed(el, "vis/" + el.dataset.spec + ".json?v=chocolate-v5", { config: config, actions: false, renderer: "svg" })
      .catch(function (err) {
        el.textContent = "This chart could not be loaded.";
        console.error(el.dataset.spec, err);
      });
  });
})();
