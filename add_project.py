import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("""
INSERT INTO projects (title, description)
VALUES (?, ?)
""", ("Portfolio Website", "A dynamic portfolio website built using Python and Flask."))

conn.commit()
conn.close()

print("Sample project added!")
