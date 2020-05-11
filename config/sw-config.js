module.exports = {
  cache: {
    cacheId: "large-react-app",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "large-react-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
