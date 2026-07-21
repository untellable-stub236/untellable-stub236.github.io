export const analytics = {
  track(event: string, data?: Record<string, any>) {
    console.log("Analytics Event:", event, data || {});
  },

  pageView(url: string) {
    console.log("Page View:", url);
  }
};
