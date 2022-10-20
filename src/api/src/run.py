from application.main import app
import os

app.run(host='0.0.0.0', port=80, debug=bool(os.getenv('DEBUG')), use_evalex=False)

