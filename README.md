# CapstoneProject

This is the final project for our Capstone Class at Kent State University

## Install the Required Dependencies

Make sure python3, pip3, node 13, npm, and angular-cli are installed on your system.

Install the neccisary python libraries

```bash
pip3 install pony flask flask-login 
```
Install the neccisary npm packages
```bash
cd angular/
npm i
```
For your system, you need to install angular cli globally
```bash
npm install -g @angular/cli
```

## Build for Production

Build the package for prod. 
```bash
cd angular/
ng build --prod
```
Change back to the root directory of the repository and run main.py
```bash
python3 ./main.py
```
## Build for Development

Building for development requires two terminals.
You will also need to install a chrome extension.

In the first terminal run the angular devserver:
```bash
cd angular/
ng serve
```

In the second terminal run the flask webserver:
```bash
python3 main.py
```

Now you will need to install and enable the following [chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en).
This will enable cross origin requests, which will allow the angular webserver (running by defaukt on port 4200), to communicate with the flask backend (running on port 5000)

Using the angular webserver for frontend development is much faster than building for prod each change.
