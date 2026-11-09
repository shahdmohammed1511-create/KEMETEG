import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";
import { images } from "./media.js";
import { filterProjects, getProjectCategories, projects } from "./projects.js";

const publicDirectory = fileURLToPath(
  new URL("../../public/", import.meta.url),
);

describe("project data", () => {
  it("preserves the ten portfolio projects", () => {
    assert.equal(projects.length, 10);
  });

  it("filters by category without mutating the source list", () => {
    const originalProjects = [...projects];
    const industrialProjects = filterProjects(projects, "Industrial");

    assert.equal(industrialProjects.length, 5);
    assert.ok(
      industrialProjects.every((project) => project.c === "Industrial"),
    );
    assert.deepEqual(projects, originalProjects);
  });

  it("returns all projects for the All category and none for unknown categories", () => {
    assert.deepEqual(filterProjects(projects, "All"), projects);
    assert.deepEqual(filterProjects(projects, "Unknown"), []);
  });

  it("includes each project category and the finishing placeholder", () => {
    assert.deepEqual(getProjectCategories(projects), [
      "All",
      "Industrial",
      "Administrative",
      "Medical",
      "Religious",
      "Interior",
      "Finishing",
    ]);
  });

  it("includes an existing local image for every project gallery entry", () => {
    const projectFolders = new Set();

    for (const project of projects) {
      assert.ok(images[project.v], `Missing cover image for ${project.t}`);
      const projectImageKeys = [project.v, ...project.i.map(([key]) => key)];
      const folders = new Set();

      for (const imageKey of projectImageKeys) {
        assert.ok(images[imageKey], `Missing image mapping for ${imageKey}`);
        assert.ok(
          existsSync(join(publicDirectory, images[imageKey].slice(1))),
          `Missing image file for ${imageKey}`,
        );
        assert.match(
          images[imageKey],
          /^\/assets\/projects\/[^/]+\/[^/]+\.jpg$/,
          `Project image ${imageKey} must be stored in its project folder`,
        );
        folders.add(images[imageKey].split("/")[3]);
      }

      assert.equal(
        folders.size,
        1,
        `${project.t} images must share one folder`,
      );
      const [folder] = folders;
      assert.ok(
        !projectFolders.has(folder),
        `${project.t} needs its own folder`,
      );
      projectFolders.add(folder);
    }

    assert.equal(projectFolders.size, projects.length);
  });

  it("includes the local favicon and hero video for production", () => {
    assert.ok(existsSync(join(publicDirectory, "assets", "favicon.png")));
    assert.ok(existsSync(join(publicDirectory, "assets", "hero.mp4")));
  });

  it("includes both hero carousel videos and their poster images", () => {
    for (const name of ["5", "6"]) {
      assert.ok(
        existsSync(join(publicDirectory, "assets", "Hero", `${name}.mp4`)),
        `Missing hero video ${name}.mp4`,
      );
      assert.ok(
        existsSync(
          join(publicDirectory, "assets", "Hero", `${name}-poster.webp`),
        ),
        `Missing hero video poster ${name}-poster.webp`,
      );
    }
  });

  it("includes social preview metadata and its share image", () => {
    const html = readFileSync(
      join(publicDirectory, "..", "index.html"),
      "utf8",
    );

    assert.match(
      html,
      /<link rel="canonical" href="https:\/\/kemetegconstruction\.vercel\.app\/"/,
    );
    assert.match(html, /property="og:image"/);
    assert.match(html, /name="twitter:image"/);
    assert.match(html, /property="og:image:width" content="1200"/);
    assert.match(html, /property="og:image:height" content="630"/);
    assert.ok(
      existsSync(join(publicDirectory, "assets", "kemet-share.jpg")),
      "Missing social sharing image",
    );
  });
});
