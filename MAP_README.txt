Three map idioms, each drawn as one Vega-Lite chart per council (vis/map_*_townsville|golden_plains|surf_coast.json):
 1. Proportional symbols - registered records per suburb
 2. Choropleth - cats as a % of records (suburbs with fewer than 20 records are greyed out)
 3. Dot density - 1 dot ~ 50 records, randomly placed inside each suburb (NOT pet addresses; seed 3179)
Why one chart per council: Vega-Lite shares a single projection across all panels of a concat chart,
so each council needs its own spec to get its own centre and scale.
Boundaries: ABS LGA 2025 and Suburbs and Localities 2021. Polygon rings in data/suburb_pet_boundaries.geojson
were rewound to the clockwise convention d3/Vega expects.
Serve over HTTP (GitHub Pages or `python3 -m http.server`); file:// blocks data fetches.
