"""
Element: is use to mod current parts of the html code
"""
from pyscript import Element

import platform
import datetime as dt

def display_hello():
    #display('hello', target = "helloDiv")
    Element('helloDiv').write("Hello")


Element('today').write(dt.date.today().strftime('%A %B %d, %Y'))

v = platform.python_version()

print(f"Version: {v}")

n = 10

for i in range(n):
    print(f'This is the {i} line')

Element('pi').write(f'π is approximately {3.14}')