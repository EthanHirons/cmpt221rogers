const filterButtons = [...document.querySelectorAll("[data-filter]")];
const eventRows = [...document.querySelectorAll("#event-body tr")];
const filterStatus = document.querySelector("#filter-status");

function filterEvents(filter) {
  let visibleCount = 0;

  eventRows.forEach((row) => {
    const shouldShow = filter === "all" || row.dataset.format === filter;
    row.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  filterButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      button.dataset.filter === filter ? "true" : "false",
    );
  });
  const label = visibleCount === 1 ? "event" : "events";
  filterStatus.textContent =
    filter === "all"
      ? `Showing all ${visibleCount} ${label}.`
      : `Showing ${visibleCount} ${label}.`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterEvents(button.dataset.filter);
  });
});
