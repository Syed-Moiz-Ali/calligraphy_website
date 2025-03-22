export const trackPageView = (page) => {
    console.log(`Page View: ${page}`);
};

export const trackEvent = (category, action, label) => {
    console.log(`Event: ${category} - ${action} - ${label}`);
};