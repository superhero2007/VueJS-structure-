// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
export const STORAGE_KEY = 'dash-spinemedia';

let syncedData = {
    startDate: moment().subtract(1, "days").format('MM/DD/YYYY'),
    endDate: moment().subtract(1, "days").format('MM/DD/YYYY'),
    dateRange: (moment().subtract(1, "days").format('MM/DD/YYYY')) + ' - ' + (moment().subtract(1, "days").format('MM/DD/YYYY')),
    selectedSites: []
};

const notSyncedData = {
    userInfo: {
        avatar: "",
        email: "",
        name: "",
        roles: [],
        source: {},
        sources: []
    },
    userNoCreatedCounts: {
        errorCreatives: null,
        errorAdsets: null,
    },
    userPermissions: null,
    sysInformation: {},
    allowed: true,
    arrTraffics: [],
    arrTrafficsLeftNav: [],
    arrMonetizations: [],
    arrSources: [],
    arrPartners: [],
    arrCustomPartners: [],
    availableSites: [],
    cpcSettings: {},
    breadcrumbs: [],
    pageTitle: ''
};

// Sync with local storage.
if (localStorage.getItem(STORAGE_KEY)) {
    syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Merge data and export it.
export const state = Object.assign(syncedData, notSyncedData);