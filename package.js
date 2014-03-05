Package.describe({
  summary: "a manager class for for the meteor reactive variable class "
});

Package.on_use(function (api, where) {
  api.add_files('reactive-variable-manager.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('reactive-variable-manager');

  api.add_files('reactive-variable-manager_tests.js', ['client', 'server']);
});
