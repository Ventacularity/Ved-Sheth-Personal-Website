import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { tableTennis } from "@/lib/content";

export const metadata: Metadata = {
  title: "Table tennis",
  description: tableTennis.headline,
};

export default function TableTennisPage() {
  return (
    <>
      <div className="page-head">
        <h1 className="page-title">Table tennis</h1>
        <p className="page-lead">{tableTennis.headline}</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <ImagePlaceholder label="Match action shot" wide />
      </div>

      <section className="section" aria-labelledby="results-title">
        <h2 id="results-title" className="section-title">
          Results
        </h2>
        <div className="section-body">
          <ul className="bullets" style={{ marginTop: 0, marginBottom: "2rem" }}>
            {tableTennis.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          {tableTennis.results.map((row) => (
            <div key={row.year} className="results-row">
              <h3 className="results-year">{row.year}</h3>
              <ul className="results-list">
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="bio-title">
        <h2 id="bio-title" className="section-title">
          Background
        </h2>
        <div className="section-body">
          <p className="note">
            The story of how I started playing and what the last ten years on the national team
            looked like is coming here.
          </p>
        </div>
      </section>
    </>
  );
}
