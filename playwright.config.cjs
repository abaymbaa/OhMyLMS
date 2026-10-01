const {defineConfig}=require('@playwright/test');
module.exports=defineConfig({
 testDir:'tests/browser', timeout:90000, workers:1, fullyParallel:false,
 use:{baseURL:process.env.OHMYLMS_TEST_URL||'http://127.0.0.1:8099',channel:'chromium',headless:true,launchOptions:process.env.OHMYLMS_CHROMIUM_PATH?{executablePath:process.env.OHMYLMS_CHROMIUM_PATH}:{},viewport:{width:1440,height:1000},trace:'retain-on-failure',screenshot:'only-on-failure'},
 reporter:[['list'],['json',{outputFile:'test-results/browser-results.json'}]],
});
