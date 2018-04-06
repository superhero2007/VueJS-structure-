export const UPDATE_USER_PERMISSIONS = (state, userPermissions) => {
    state.userPermissions = userPermissions;
};

export const UPDATE_USER_INFO = (state, userInfo) => {
    state.userInfo = userInfo;
};

export const UPDATE_USER_NOT_CREATED_COUNTS = (state, userNoCreatedCounts) => {
    state.userNoCreatedCounts = userNoCreatedCounts;
};

export const UPDATE_ARR_TRAFFICS = (state, arrTraffics) => {
    state.arrTraffics = arrTraffics;
};

export const UPDATE_ARR_TRAFFICS_LEFT_NAV = (state, arrTrafficsLeftNav) => {
    state.arrTrafficsLeftNav = arrTrafficsLeftNav;
};

export const UPDATE_ALLOWED = (state, allowed) => {
    state.allowed = allowed;
};

export const UPDATE_ARR_SOURCES = (state, arrSources) => {
    state.arrSources = arrSources;
};

export const UPDATE_ARR_PARTNERS = (state, arrPartners) => {
    state.arrPartners = arrPartners;
};

export const UPDATE_ARR_CUSTOM_PARTNERS = (state, arrCustomPartners) => {
    state.arrCustomPartners = arrCustomPartners;
};

export const UPDATE_SYS_INFORMATION = (state, sysInformation) => {
    state.sysInformation = sysInformation;
};

export const UPDATE_AVAILABLE_SITES = (state, availableSites) => {
    state.availableSites = availableSites;
};

export const UPDATE_DATE_SELECTOR = (state, dateRange) => {
    let arrDateRange = dateRange.split(' - ');

    state.startDate = arrDateRange[0];
    state.endDate = arrDateRange[1];
    state.dateRange = dateRange;
};

export const UPDATE_SITE_SELECTOR = (state, selectedSites) => {
    state.selectedSites = selectedSites;
};

export const UPDATE_CPC_SETTINGS = (state, settings) => {
    state.cpcSettings = settings;
};

export const UPDATE_BREADCRUMBS = (state, settings) => {
    state.breadcrumbs = settings;
};

export const UPDATE_PAGE_TITLE = (state, settings) => {
    state.pageTitle = settings;
};

export const CLEAR_ALL_DATA = (state) => {

    // Permissions
    state.userPermissions = [];

    // User
    state.userInfo = {};

    //not created counters
    state.userNoCreatedCounts = {};

    //arrTraffics
    state.arrTraffics = [];

    //arrTrafficsLeftNav
    state.arrTrafficsLeftNav = [];

    //allowed
    state.allowed = true;

    //arrSources
    state.arrSources = [];

    //arrPartners
    state.arrPartners = [];

    //arrCustomPartners
    state.arrCustomPartners = [];

    //sysInformation
    state.sysInformation = {};

    //availableSites
    state.availableSites = [];

    //start date
    state.startDate = moment().subtract(1, "days").format('MM/DD/YYYY');

    //end date
    state.endDate = moment().subtract(1, "days").format('MM/DD/YYYY');

    //date range
    state.dateRange = (moment().subtract(1, "days").format('MM/DD/YYYY')) + ' - ' + (moment().subtract(1, "days").format('MM/DD/YYYY'));

    //selectedSites
    state.selectedSites = [];

    //cpcSettings
    state.cpcSettings = {};

    //breadcrumbs
    state.breadcrumbs = [];

    //page title
    state.pageTitle = '';
};