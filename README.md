# pdea_subjective
Here are the steps of Selenium-Js PDEA Subjective assessment


TEST SCENARIO 1:-

  Click "Simple Form Demo" under Input Forms
 Validate that the URL contains "simple-form-demo"
 Create a variable for a string value
 Use the variable to enter values in the "Enter Message" text box
 Click "Get Checked Value"
 Validate whether the same text message is displayed in the right-hand panel
 Quit the driver after the test is complete

TEST SCENARIO 2:-
 Initialize the Selenium driver 
 Open the Selenium Playground
 Click "Drag & Drop Sliders" under "Progress Bars & Sliders"
 Select the slider "Default value 15"
 Drag the bar to make it 95
 const size = await driver.manage().window().getRect();
 Validate whether the range value shows 95
 Quit the driver after the test is complete

TEST SCENARIO 3:-
Set up the Selenium WebDriver
 1. Open the Selenium Playground page
 Wait for the page to load
 2. Click "Input Form Submit"
 3. Assert "Please fill in the fields" error message
 You can use an assertion library like Chai or assert to validate the error message
 4. Fill in Name, Email, and other fields
 Fill in other fields similarly
5. From the Country drop-down, select "United States" using the text property
6. Fill all fields and click "Submit"
7. Once submitted, validate the success message
You can use an assertion library to validate the success message
Quit the WebDriver
 Run the test scenario


