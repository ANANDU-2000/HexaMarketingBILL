"use client";

import { useEffect, useState } from "react";
import { featureDetails as initialDetails, FeatureDetailItem } from "@/content/en/features-detail.data";

type EditableFeature = FeatureDetailItem;

const ADMIN_TOKEN_HEADER = "x-features-admin-token";

export default function FeaturesAdminPage() {
  const [features, setFeatures] = useState<Record<string, EditableFeature>>(initialDetails);
  const [activeSlug, setActiveSlug] = useState<string | null>(Object.keys(initialDetails)[0] ?? null);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/features");
        if (res.ok) {
          const json = await res.json();
          setFeatures(json);
        }
      } catch {
        // ignore, fall back to initialDetails
      }
    }
    load();
  }, []);

  const active = activeSlug ? features[activeSlug] : null;

  async function handleSave() {
    if (!active) return;
    setStatus("saving");
    try {
      const res = await fetch("/api/features", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          [ADMIN_TOKEN_HEADER]: token,
        },
        body: JSON.stringify({ slug: active.slug, update: active }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      const json = await res.json();
      setFeatures((prev) => ({ ...prev, [active.slug]: json.feature }));
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
    }
  }

  function updateActive<K extends keyof EditableFeature>(field: K, value: EditableFeature[K]) {
    if (!active) return;
    setFeatures((prev) => ({
      ...prev,
      [active.slug]: {
        ...active,
        [field]: value,
      },
    }));
  }

  function updateList(field: "painBullets" | "solutionBullets", index: number, value: string) {
    if (!active) return;
    const next = [...active[field]];
    next[index] = value;
    updateActive(field, next as EditableFeature[typeof field]);
  }

  function addToList(field: "painBullets" | "solutionBullets") {
    if (!active) return;
    updateActive(field, [...active[field], ""] as EditableFeature[typeof field]);
  }

  if (!active) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-dm font-bold text-2xl text-text-primary mb-4">
            Features Admin
          </h1>
          <p className="text-text-secondary">No features found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-dm font-bold text-2xl text-text-primary">
              Features Admin
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              Update headings, bullets, and media URLs for each feature pillar.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label className="text-xs text-text-secondary">
              Admin token (from FEATURES_ADMIN_TOKEN env)
            </label>
            <input
              type="password"
              className="px-3 py-2 rounded border border-border bg-surface text-xs w-64"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <p className="text-xs text-text-muted">
              Needed to save changes. Leave blank to view only.
            </p>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          {Object.values(features).map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => setActiveSlug(f.slug)}
              className={`px-3 py-1 rounded-full text-xs border ${
                f.slug === active.slug
                  ? "bg-primary text-white border-primary"
                  : "bg-surface text-text-secondary border-border hover:border-primary"
              }`}
            >
              {f.title}
            </button>
          ))}
        </div>

        <section className="grid md:grid-cols-[60%_40%] gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Hero heading
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-sm"
                value={active.heroHeading}
                onChange={(e) => updateActive("heroHeading", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Hero subheading
              </label>
              <textarea
                rows={2}
                className="w-full px-3 py-2 rounded border border-border bg-surface text-sm"
                value={active.heroSubheading}
                onChange={(e) => updateActive("heroSubheading", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Pain bullets (owner problems)
              </label>
              <div className="space-y-2">
                {active.painBullets.map((p, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full px-3 py-2 rounded border border-border bg-surface text-sm"
                    value={p}
                    onChange={(e) => updateList("painBullets", idx, e.target.value)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addToList("painBullets")}
                  className="text-primary text-xs font-medium"
                >
                  + Add pain bullet
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Solution bullets (what HexaBill does)
              </label>
              <div className="space-y-2">
                {active.solutionBullets.map((s, idx) => (
                  <input
                    key={idx}
                    type="text"
                    className="w-full px-3 py-2 rounded border border-border bg-surface text-sm"
                    value={s}
                    onChange={(e) => updateList("solutionBullets", idx, e.target.value)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addToList("solutionBullets")}
                  className="text-primary text-xs font-medium"
                >
                  + Add solution bullet
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Desktop screenshot URL
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-xs"
                value={active.desktopScreenshot}
                onChange={(e) => updateActive("desktopScreenshot", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Tablet screenshot URL
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-xs"
                value={active.tabletScreenshot}
                onChange={(e) => updateActive("tabletScreenshot", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Mobile screenshot URL
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-xs"
                value={active.mobileScreenshot}
                onChange={(e) => updateActive("mobileScreenshot", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Video / GIF URL (optional)
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-xs"
                value={active.videoUrl ?? ""}
                onChange={(e) => updateActive("videoUrl", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-primary mb-1">
                Thumbnail URL
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded border border-border bg-surface text-xs"
                value={active.thumbnail}
                onChange={(e) => updateActive("thumbnail", e.target.value)}
              />
            </div>
          </div>
        </section>

        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-60"
            disabled={status === "saving"}
          >
            {status === "saving" ? "Saving…" : "Save changes"}
          </button>
          {status === "saved" && (
            <span className="text-green text-sm">Saved.</span>
          )}
          {status === "error" && (
            <span className="text-red text-sm">
              Error saving. Check token and try again.
            </span>
          )}
        </div>
      </div>
    </main>
  );
}

