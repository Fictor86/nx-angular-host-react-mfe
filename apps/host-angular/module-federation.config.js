const coreLibraries = new Set([
  '@angular/animations',
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/elements',
  '@angular/forms',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
]);

module.exports = {
  name: 'host-angular',
  remotes: [],

  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      console.log(libraryName, defaultConfig);

      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
