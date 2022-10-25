# TestLab
A single page app that helps software tester plan and structure the activity of exploratory testing ensuring that full coverage has been tested.

## Testing Account
Email: testlab@tester.com
Password: Pass1234Word

- Chart.js for data visualization  (npm i vue-chartjs chart.js)



# Functionalities
- Export to Excel
- Export to PDF
- Store on LocalStorage
- Save project file to desktop
- Upload project file
- Store screenshots
- Store screen recording
- QR code generator  
- Create list
- Bug write up


# How To Get Started with Firebase with Vue
- npm install --save firebase
- Go to the Firebase website and create new project 
- Register app with Add Firebase to web app config
- Copy Firebase configaration details
- Enable cloud fire store


# Storing API Keys or other sensitive data
Create a config.js file and add the following below
```
var config = {
    firebase : {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    }
}

export default config
```
This filename should already be added to the gitignore file but double check just incase before pushing to repo.