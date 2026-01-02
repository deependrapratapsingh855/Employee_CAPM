const cds = require("@sap/cds");
// importing v2 adapter to convert v4 odata to v2 odata
const cov2ap = require("@cap-js-community/odata-v2-adapter");

// Importing process email for sending mail from table to CPI
// const { processEmailQueue } = require("./utils/processEmail");


cds.on("bootstrap", (app) => {

  // Add OData V2 Adapter middleware
  app.use(cov2ap());

  // using spawn processEmailQueue function will execute every minute
  // currently it is 60000ms means 1 minute
  cds.spawn({ every: 60000 }, async () => {
    try {
      
      console.log('Total CPI process Time:')
      
    } catch (err) {
      console.error("Job error:", err);
    }
  });
});

module.exports = cds.server;