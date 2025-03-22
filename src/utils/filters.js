export const applyFilters = (filters) => {
    const cleanFilters = {};
    if (filters.priceMin) cleanFilters.priceMin = Number(filters.priceMin);
    if (filters.priceMax) cleanFilters.priceMax = Number(filters.priceMax);
    if (filters.category) cleanFilters.category = filters.category;
    if (filters.style) cleanFilters.style = filters.style;
    if (filters.search) cleanFilters.search = filters.search;
    return cleanFilters;
};