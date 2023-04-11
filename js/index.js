document.addEventListener('DOMContentLoaded', function () {
  var kcConn = new KCConnection('ws://127.0.0.1:4455', '');

  // kcConn.on('connected', function() {
  // var data = {
  //   property: 'value'
  // };
  // kcConn.send('MyOtherCustomMessage', data);
  // });

  kcConn.on('error', err => {
    console.error(err);
  });

  kcConn.on('kcreset', () => {
    location.reload();
  });

  const triggerAdvancedSceneSwitcher = itemType => {
    console.log(`Triggering: ${itemType}`);

    kcConn.obs.call(
      // Request Type
      'CallVendorRequest',
      // Request Data
      {
        requestData: { message: itemType },
        requestType: 'AdvancedSceneSwitcherMessage',
        vendorName: 'AdvancedSceneSwitcher'
      }
    );
  };

  kcConn.on('ChatShowMenu', () => triggerAdvancedSceneSwitcher('ChatShowMenu'));
  kcConn.on('ChatShowRecipe', () => triggerAdvancedSceneSwitcher('ChatShowRecipe'));
});
