import { tasksData } from './data/tasks.js';

const searchBox = document.querySelector('#search-box');
const clearSearchBtn = document.querySelector('#clear-search');
const yearFilter = document.querySelector('#year-filter');
const statusFilter = document.querySelector('#status-filter');
const sortSelect = document.querySelector('#sort-order');
const statsPanel = document.querySelector('#stats-panel');
const resultsInfo = document.querySelector('#results-info');
const tasksList = document.querySelector('#tasks-list');
const taskTemplate = document.querySelector('#task-template');

const PROGRESS_OPTIONS = [
  { value: 'todo', label: 'Do zrobienia' },
  { value: 'in-progress', label: 'W trakcie' },
  { value: 'done', label: 'Zrobione' },
  { value: 'skipped', label: 'Pominięte' },
];

const STORAGE_KEY = 'arkusze_prob_progress_v1';

const state = {
  search: '',
  year: 'all',
  status: 'all',
  sort: 'year-desc',
};

let currentFiltered = [];
let progressState = loadProgressState();

init();

function init() {
  populateYearFilter();
  attachListeners();
  render();
}

function populateYearFilter() {
  const years = [...new Set(tasksData.map((task) => task.year).filter(Boolean))].sort((a, b) => a - b);
  years.forEach((year) => {
    const option = document.createElement('option');
    option.value = String(year);
    option.textContent = year;
    yearFilter.append(option);
  });
}

function attachListeners() {
  searchBox.addEventListener('input', () => {
    state.search = searchBox.value.trim().toLowerCase();
    render();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchBox.value = '';
    state.search = '';
    render();
    searchBox.focus();
  });

  yearFilter.addEventListener('change', () => {
    state.year = yearFilter.value;
    render();
  });

  statusFilter.addEventListener('change', () => {
    state.status = statusFilter.value;
    render();
  });

  sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    render();
  });

  tasksList.addEventListener('click', (event) => {
    const button = event.target.closest('.toggle-solution');
    if (!button) return;
    const container = button.nextElementSibling;
    if (!container) return;
    const expanded = !container.hasAttribute('hidden');
    if (expanded) {
      container.setAttribute('hidden', '');
      button.textContent = 'Pokaż rozwiązanie';
    } else {
      container.removeAttribute('hidden');
      button.textContent = 'Ukryj rozwiązanie';
    }
  });

  tasksList.addEventListener('change', (event) => {
    const select = event.target.closest('.progress-select');
    if (!select) return;
    const card = select.closest('.task-card');
    if (!card) return;
    const taskId = Number(card.dataset.taskId);
    const value = select.value;
    updateProgressState(taskId, value, card);
  });
}

function render() {
  currentFiltered = filterTasks();
  renderStats(currentFiltered);
  renderResultsInfo(currentFiltered.length);
  renderList(currentFiltered);
}

function filterTasks() {
  const term = state.search;
  return tasksData
    .filter((task) => {
      if (state.year !== 'all' && String(task.year) !== state.year) return false;
      if (state.status !== 'all' && task.status !== state.status) return false;
      if (!term) return true;
      const haystack = `${task.question}\n${task.solution}\n${task.source}\n${task.title}`.toLowerCase();
      return haystack.includes(term);
    })
    .sort((a, b) => {
      if (state.sort === 'year-asc') {
        return (a.year ?? 0) - (b.year ?? 0) || a.id - b.id;
      }
      if (state.sort === 'year-desc') {
        return (b.year ?? 0) - (a.year ?? 0) || a.id - b.id;
      }
      // alpha sort by source + title
      const textA = `${a.source} ${a.title}`.toLowerCase();
      const textB = `${b.source} ${b.title}`.toLowerCase();
      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return a.id - b.id;
    });
}

function renderStats(filtered) {
  const total = tasksData.length;
  const withSolutions = tasksData.filter((task) => task.status === 'complete').length;
  const flagged = total - withSolutions;
  const visibleFlagged = filtered.filter((task) => task.status !== 'complete').length;
  const overallProgress = countProgress(tasksData);
  const visibleProgress = countProgress(filtered);

  statsPanel.innerHTML = `
    ${createStatCard(total, 'Łącznie zadań')}
    ${createStatCard(filtered.length, 'Aktualnie widoczne')}
    ${createStatCard(withSolutions, 'Pełne rozwiązania')}
    ${createStatCard(flagged, 'Wymagają danych', visibleFlagged)}
    ${createProgressCard(overallProgress, visibleProgress)}
  `;
}

function createStatCard(value, label, highlightedValue) {
  const extra = highlightedValue === undefined ? '' : `<span class="extra">(w widoku: ${highlightedValue})</span>`;
  return `
    <div class="stats-card">
      <p class="label">${label}</p>
      <p class="value">${value}</p>
      ${extra}
    </div>
  `;
}

function renderResultsInfo(count) {
  const term = state.search ? ` dla zapytania „${state.search}”` : '';
  resultsInfo.textContent = `Wyświetlono ${count} z ${tasksData.length} zadań${term}.`;
}

function renderList(tasks) {
  tasksList.innerHTML = '';
  if (tasks.length === 0) {
    tasksList.innerHTML = '<p>Brak wyników dla podanych filtrów. Spróbuj zmienić kryteria.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const instance = taskTemplate.content.cloneNode(true);
    const card = instance.querySelector('.task-card');
    card.dataset.status = task.status;
    card.dataset.taskId = task.id;

    instance.querySelector('.task-source').textContent = `${task.source} • ${task.year ?? 'brak roku'}`;
    instance.querySelector('.task-title').textContent = task.title;
    instance.querySelector('.dataset-status').textContent =
      task.status === 'complete' ? 'Pełne rozwiązanie' : 'Brak danych w pliku';

    const questionEl = instance.querySelector('.task-question');
    questionEl.innerHTML = formatRichText(task.question, state.search);

    const solutionWrapper = instance.querySelector('.solution-content');
    if (task.status !== 'complete') {
      solutionWrapper.classList.add('solution-warning');
    }
    instance.querySelector('.task-answer').textContent = `Odpowiedź: ${task.answer}`;
    instance.querySelector('.task-solution').innerHTML = formatRichText(task.solution, state.search);

    const progress = getProgressFor(task.id);
    card.dataset.progress = progress;
    const progressBadge = instance.querySelector('.progress-status');
    progressBadge.textContent = getProgressLabel(progress);
    const select = instance.querySelector('.progress-select');
    select.value = progress;

    fragment.append(instance);
  });

  tasksList.append(fragment);
}

function formatRichText(text, term) {
  const escaped = escapeHtml(text ?? '');
  if (!term) {
    return escaped.replace(/\n/g, '<br />');
  }
  const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
  return escaped.replace(regex, '<mark>$1</mark>').replace(/\n/g, '<br />');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function loadProgressState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('Nie udało się odczytać statusów z localStorage.', error);
    return {};
  }
}

function persistProgressState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressState));
  } catch (error) {
    console.warn('Nie udało się zapisać statusów w localStorage.', error);
  }
}

function getProgressFor(taskId) {
  return progressState[taskId] || 'todo';
}

function getProgressLabel(value) {
  return PROGRESS_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

function updateProgressState(taskId, value, card) {
  progressState = { ...progressState, [taskId]: value };
  persistProgressState();
  if (card) {
    card.dataset.progress = value;
    const badge = card.querySelector('.progress-status');
    if (badge) {
      badge.textContent = getProgressLabel(value);
    }
  }
  const select = card?.querySelector('.progress-select');
  if (select && select.value !== value) {
    select.value = value;
  }
  renderStats(currentFiltered);
}

function countProgress(list) {
  const counts = {
    todo: 0,
    'in-progress': 0,
    done: 0,
    skipped: 0,
  };
  list.forEach((task) => {
    const status = getProgressFor(task.id);
    counts[status] = (counts[status] ?? 0) + 1;
  });
  return counts;
}

function createProgressCard(all, visible) {
  return `
    <div class="stats-card progress-breakdown">
      <p class="label">Status pracy</p>
      <ul>
        <li>Do zrobienia: ${all.todo} (widoczne: ${visible.todo})</li>
        <li>W trakcie: ${all['in-progress']} (widoczne: ${visible['in-progress']})</li>
        <li>Zrobione: ${all.done} (widoczne: ${visible.done})</li>
        <li>Pominięte: ${all.skipped} (widoczne: ${visible.skipped})</li>
      </ul>
    </div>
  `;
}
