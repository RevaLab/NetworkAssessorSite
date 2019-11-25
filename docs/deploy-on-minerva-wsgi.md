# how to use wsgi on minerva:

1. `mkdir ~/www/revalab`
* create a `revalab` subdirectory, which is where all of our python applications will live

2. `touch ~/www/revalab/.htaccess`
```
SetHandler wsgi-script
```
* In this `.htaccess` file, we are saying to use the `wsgi-script` handler, which will look for corresponding `.wsgi` file in which to run python code. For example, going to `.../revalab/app1` will look for a file named `app1` (no extension), which is a python file written to a special wsgi specification. In the file named `app1`, the method named `application` will be executed and the response from `application` is used to form the http request response.

3. `mkdir ~/www/revalab/networkassessor/`
Place `app.py` and the rest of the Flask source code, plus any required assets (css, javascript files, html files) within this new `networkassessor` directory. This should identically mirror how your directory is organized when running the application locally.

4. `touch ~/www/revalab/networkassessor`
```python
from networkassessor.app import app as application
```
* i.e. from `networkassessor/app.py` import the `app` function as the name `application`, which is the method name that a `wsgi` file expects to execute.

Sources:
* https://hpc.mssm.edu/docs/webservices
