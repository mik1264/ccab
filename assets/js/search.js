/**
 * CCAB Gallery Search
 * Client-side search using demo-index.json
 */

(function() {
    'use strict';

    let demoIndex = null;
    let searchInput = null;
    let resultsContainer = null;
    let sortSelect = null;
    let currentSort = 'name';

    // Initialize search when DOM is ready
    document.addEventListener('DOMContentLoaded', init);

    async function init() {
        // Create search UI
        createSearchUI();

        // Load demo index
        try {
            const response = await fetch('/demo-index.json');
            demoIndex = await response.json();
            console.log(`CCAB Search: Loaded ${demoIndex.total_demos} demos`);
        } catch (err) {
            console.error('CCAB Search: Failed to load index', err);
        }
    }

    function createSearchUI() {
        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.id = 'ccab-search';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="search" id="search-input" placeholder="Search 1,530+ demos..." aria-label="Search demos">
                <select id="sort-select" aria-label="Sort results">
                    <option value="name">A-Z</option>
                    <option value="name-desc">Z-A</option>
                    <option value="gallery">Gallery</option>
                    <option value="size">Size</option>
                </select>
                <button id="search-clear" aria-label="Clear search">&times;</button>
            </div>
            <div id="search-results" class="search-results" aria-live="polite"></div>
        `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #ccab-search {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9998;
                font-family: 'Nunito', -apple-system, sans-serif;
            }
            .search-box {
                display: flex;
                background: rgba(254, 250, 224, 0.95);
                border: 2px solid rgba(138, 154, 91, 0.3);
                border-radius: 25px;
                padding: 0.5rem 1rem;
                box-shadow: 0 4px 15px rgba(96, 108, 56, 0.15);
            }
            #search-input {
                border: none;
                background: transparent;
                font-size: 1rem;
                width: 200px;
                outline: none;
                color: #3d4423;
            }
            #search-input::placeholder {
                color: #8A9A5B;
            }
            #sort-select {
                border: none;
                background: rgba(138, 154, 91, 0.15);
                font-size: 0.85rem;
                color: #606C38;
                padding: 0.25rem 0.5rem;
                border-radius: 12px;
                cursor: pointer;
                outline: none;
                margin-left: 0.5rem;
            }
            #sort-select:hover {
                background: rgba(138, 154, 91, 0.25);
            }
            #search-clear {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #BC6C25;
                padding: 0 0.5rem;
                display: none;
            }
            #search-input:not(:placeholder-shown) + #search-clear {
                display: block;
            }
            .search-results {
                margin-top: 0.5rem;
                background: rgba(254, 250, 224, 0.98);
                border-radius: 12px;
                max-height: 400px;
                overflow-y: auto;
                box-shadow: 0 8px 30px rgba(96, 108, 56, 0.2);
                display: none;
            }
            .search-results.active {
                display: block;
            }
            .search-result {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid rgba(138, 154, 91, 0.2);
                cursor: pointer;
                transition: background 0.2s;
            }
            .search-result:hover {
                background: rgba(138, 154, 91, 0.1);
            }
            .search-result:last-child {
                border-bottom: none;
            }
            .search-result-title {
                font-weight: 600;
                color: #606C38;
            }
            .search-result-path {
                font-size: 0.85rem;
                color: #8A9A5B;
            }
            .search-result-tech {
                display: inline-flex;
                gap: 0.25rem;
                margin-top: 0.25rem;
            }
            .search-tech-tag {
                font-size: 0.7rem;
                padding: 0.1rem 0.4rem;
                background: rgba(188, 108, 37, 0.2);
                color: #BC6C25;
                border-radius: 8px;
            }
            .search-no-results {
                padding: 1rem;
                text-align: center;
                color: #8A9A5B;
            }
            @media (max-width: 768px) {
                #ccab-search {
                    top: auto;
                    bottom: 80px;
                    right: 10px;
                    left: 10px;
                }
                #search-input {
                    width: 100%;
                }
            }
        `;

        document.head.appendChild(style);

        // Insert search UI after header or at top of body
        const header = document.querySelector('.header');
        if (header) {
            header.parentNode.insertBefore(searchContainer, header.nextSibling);
        } else {
            document.body.insertBefore(searchContainer, document.body.firstChild);
        }

        // Get references
        searchInput = document.getElementById('search-input');
        resultsContainer = document.getElementById('search-results');
        sortSelect = document.getElementById('sort-select');
        const clearBtn = document.getElementById('search-clear');

        // Event listeners
        searchInput.addEventListener('input', debounce(handleSearch, 200));
        sortSelect.addEventListener('change', handleSortChange);
        clearBtn.addEventListener('click', clearSearch);
        document.addEventListener('click', handleOutsideClick);
    }

    function handleSortChange() {
        currentSort = sortSelect.value;
        handleSearch();
    }

    function sortResults(results) {
        const sorted = [...results];
        switch (currentSort) {
            case 'name':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case 'name-desc':
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            case 'gallery':
                return sorted.sort((a, b) => a.gallery.localeCompare(b.gallery) || a.title.localeCompare(b.title));
            case 'size':
                return sorted.sort((a, b) => (b.size_kb || 0) - (a.size_kb || 0));
            default:
                return sorted;
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (!query || !demoIndex) {
            resultsContainer.classList.remove('active');
            return;
        }

        let results = demoIndex.demos.filter(demo => {
            return demo.title.toLowerCase().includes(query) ||
                   demo.path.toLowerCase().includes(query) ||
                   demo.gallery.toLowerCase().includes(query) ||
                   demo.technologies.some(t => t.includes(query)) ||
                   demo.categories.some(c => c.includes(query));
        });

        // Apply sort
        results = sortResults(results).slice(0, 20); // Limit to 20 results

        displayResults(results, query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            resultsContainer.innerHTML = `<div class="search-no-results">No demos found for "${query}"</div>`;
        } else {
            resultsContainer.innerHTML = results.map(demo => `
                <a href="${demo.path}" class="search-result">
                    <div class="search-result-title">${highlightMatch(demo.title, query)}</div>
                    <div class="search-result-path">${demo.gallery}</div>
                    ${demo.technologies.length ? `
                        <div class="search-result-tech">
                            ${demo.technologies.slice(0, 3).map(t => `<span class="search-tech-tag">${t}</span>`).join('')}
                        </div>
                    ` : ''}
                </a>
            `).join('');
        }
        resultsContainer.classList.add('active');
    }

    function highlightMatch(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function clearSearch() {
        searchInput.value = '';
        resultsContainer.classList.remove('active');
        searchInput.focus();
    }

    function handleOutsideClick(e) {
        if (!e.target.closest('#ccab-search')) {
            resultsContainer.classList.remove('active');
        }
    }

    function debounce(fn, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, args), delay);
        };
    }
})();
