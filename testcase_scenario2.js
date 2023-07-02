const { Builder, By, Key, until, Actions } = require('selenium-webdriver');

async function runTest() {
 
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    
    await driver.get('https://www.lambdatest.com/selenium-playground');

   
    const dragDropSlidersLink = await driver.findElement(By.linkText('Drag & Drop Sliders'));
    await dragDropSlidersLink.click();

   
    const slider = await driver.findElement(By.xpath('//input[@value="15"]'));

  
    const sliderWidth = await driver.manage().window().getRect();
    const targetValue = 95;
    const targetOffset = Math.round((targetValue / 100) * sliderWidth.width);

    const actions = new Actions(driver);
    await actions.dragAndDropBy(slider, targetOffset, 0).perform();

   
    const rangeValue = await slider.getAttribute('value');
    if (rangeValue == targetValue) {
      console.log('Slider validation passed.');
    } else {
      console.log('Slider validation failed.');
    }
  } finally {
   
    await driver.quit();
  }
}

runTest();
