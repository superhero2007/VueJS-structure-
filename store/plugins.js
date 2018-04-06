import { STORAGE_KEY } from './state'

const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        const syncedData = {
            startDate: state.startDate,
            endDate: state.endDate,
            dateRange: state.dateRange,
            selectedSites: state.selectedSites
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData));

        if (mutation.type === 'CLEAR_ALL_DATA') {
            localStorage.removeItem(STORAGE_KEY);
        }
    })
};

// export default process.env.NODE_ENV !== 'production' ? [localStoragePlugin] : [localStoragePlugin]
export default [localStoragePlugin];