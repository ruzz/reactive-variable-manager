Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.add_files('reactive-variable-manager.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('reactive-variable-manager');

  api.add_files('reactive-variable-manager_tests.js', ['client', 'server']);
});
