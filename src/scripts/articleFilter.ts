import { t } from "@/i18n/utils";

/** Filters the article list by one category and one tag at most. */

interface FilterState {
  category: string;
  tag: string;
}

const state: FilterState = { category: "", tag: "" };

const filters = document.querySelector<HTMLElement>("[data-filters]");
const items = Array.from(document.querySelectorAll<HTMLElement>("[data-article-list] > li"));
const categoryButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-filter-category]"),
);
const tagButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter-tag]"));
const status = document.querySelector<HTMLElement>("[data-filter-status]");
const emptyState = document.querySelector<HTMLElement>("[data-filter-empty]");
const clearButton = document.querySelector<HTMLButtonElement>("[data-filter-clear]");

function matches(item: HTMLElement): boolean {
  const tags = (item.dataset.tags ?? "").split(",");
  const categoryMatches = !state.category || item.dataset.category === state.category;
  const tagMatches = !state.tag || tags.includes(state.tag);
  return categoryMatches && tagMatches;
}

function countLabel(count: number): string {
  return count === 1
    ? t("articles.countOne")
    : t("articles.countOther").replace("{count}", String(count));
}

function render(): void {
  let visible = 0;
  for (const item of items) {
    const shown = matches(item);
    item.hidden = !shown;
    if (shown) visible += 1;
  }
  for (const button of categoryButtons) {
    const pressed = (button.dataset.filterCategory ?? "") === state.category;
    button.setAttribute("aria-pressed", String(pressed));
  }
  for (const button of tagButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filterTag === state.tag));
  }
  if (emptyState) emptyState.hidden = visible > 0;
  if (status) status.textContent = visible > 0 ? countLabel(visible) : t("articles.noResults");
}

filters?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const categoryButton = event.target.closest<HTMLButtonElement>("[data-filter-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.filterCategory ?? "";
    render();
    return;
  }

  const tagButton = event.target.closest<HTMLButtonElement>("[data-filter-tag]");
  if (tagButton) {
    const tag = tagButton.dataset.filterTag ?? "";
    state.tag = state.tag === tag ? "" : tag;
    render();
  }
});

clearButton?.addEventListener("click", () => {
  state.category = "";
  state.tag = "";
  render();
  // The clear button disappears with the empty state: keep focus on the filters.
  categoryButtons[0]?.focus();
});

// From now on, rows revealed by a filter fade in (the initial render stays still).
const root = document.querySelector<HTMLElement>("[data-filter-root]");
if (root) root.dataset.ready = "";
