s = "<img src=trung onerror=alert(1) />"


from flask import escape


print(escape(s))