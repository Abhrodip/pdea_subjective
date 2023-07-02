const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTestScenario() {

  const driver = await new Builder().forBrowser('chrome').build();

  try {
   
    await driver.get('https://www.lambdatest.com/selenium-playground');

   
    await driver.wait(until.elementLocated(By.linkText('Input Form Submit')), 5000);

   
    await driver.findElement(By.linkText('Input Form Submit')).click();

    
    await driver.wait(until.elementLocated(By.id('errormsg')), 5000);
    const errorMessage = await driver.findElement(By.id('errormsg')).getText();
    console.log('Error message:', errorMessage);   
    
    await driver.findElement(By.name('name')).sendKeys('John Doe');
    await driver.findElement(By.name('email')).sendKeys('john.doe@example.com');
    
    const countryDropdown = await driver.findElement(By.name('country'));
    await countryDropdown.click();
    const unitedStatesOption = await countryDropdown.findElement(By.xpath("//option[text()='United States']"));
    await unitedStatesOption.click();

    
    await driver.findElement(By.linkText('Submit'));

    await driver.wait(until.elementLocated(By.id('thanks')), 5000);
    const successMessage = await driver.findElement(By.id('thanks')).getText();
    console.log('Success message:', successMessage);
    
  } finally {
   
    await driver.quit();
  }
}


runTestScenario();
