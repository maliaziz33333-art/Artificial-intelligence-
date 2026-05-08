from flask import Flask, render_template

app = Flask(__name__)

# Route to serve the main game page
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Debug mode enabled for easier development [cite: 45]
    app.run(debug=True)