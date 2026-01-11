from flask import Flask, render_template, request ,redirect ,session
import sqlite3

app = Flask(__name__)
app.secret_key = "mysecretkey"


# Get all projects
def get_projects():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM projects")
    projects = cursor.fetchall()
    conn.close()
    return projects

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/projects")
def projects():
    data = get_projects()
    return render_template("projects.html", projects=data)

@app.route("/contact", methods=["GET", "POST"])
def contact():
    success = None
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
                       (name, email, message))
        conn.commit()
        conn.close()

        success = "Message sent successfully!"
    return render_template("contact.html", success=success)

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username == "admin" and password == "admin123":
            session["admin"] = True
            return redirect("/admin")
        else:
            return render_template("login.html", error="Invalid credentials")

    return render_template("login.html")

@app.route("/admin", methods=["GET", "POST"])
def admin():
    if not session.get("admin"):
        return redirect("/login")

    if request.method == "POST":
        title = request.form["title"]
        description = request.form["description"]

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO projects (title, description) VALUES (?, ?)",
            (title, description)
        )
        conn.commit()
        conn.close()

    return render_template("admin.html")

@app.route("/logout")
def logout():
    session.pop("admin", None)
    return redirect("/")

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

