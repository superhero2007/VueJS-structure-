export const updateSiteSelector = ({ commit }, selectedSites) => {
    commit('UPDATE_SITE_SELECTOR', selectedSites);
};

export const updateDateSelector = ({ commit }, dateRange) => {
    commit('UPDATE_DATE_SELECTOR', dateRange);
};

export const setBreadcrumbs = ({ commit }, breadcrumbs) => {
    commit('UPDATE_BREADCRUMBS', breadcrumbs);
};

export const setPageTitle = ({ commit }, pageTitle) => {
    commit('UPDATE_PAGE_TITLE', pageTitle);
};