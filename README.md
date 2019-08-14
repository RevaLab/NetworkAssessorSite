# NetworkAsessor

## Set up development environment


### Python backend

Create a local virtual environment with `virtualenv` and install the dependencies with `pip`.
```sh
pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
# Sets up FLASK_APP so flask run can work from anywhere
export FLASK_APP=$(pwd)/server/app.py

# Finally, to run...
flask run
```

### JavaScript Frontend

Install dependencies

```sh
cd client/
yarn install
yarn serve
```
