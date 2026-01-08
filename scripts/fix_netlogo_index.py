import os

directory = 'netlogo-simulations-2'
output_file = os.path.join(directory, 'index.html')

# HTML Header
html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NetLogo Simulations 2 - CCAB</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #2563eb; --bg: #f8fafc; --card-bg: #ffffff; --text: #1e293b; }
        body { font-family: 'Roboto', sans-serif; background: var(--bg); color: var(--text); margin: 0; padding: 20px; }
        .container { max-width: 1400px; margin: 0 auto; }
        header { text-align: center; margin-bottom: 40px; }
        h1 { color: var(--primary); font-size: 2.5rem; margin-bottom: 10px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .card { background: var(--card-bg); padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); text-decoration: none; color: inherit; transition: transform 0.2s; border: 1px solid #e2e8f0; display: flex; flex-direction: column; }
        .card:hover { transform: translateY(-5px); border-color: var(--primary); }
        .card-id { font-size: 0.8rem; color: #64748b; font-weight: bold; margin-bottom: 5px; }
        .card-title { font-size: 1.1rem; font-weight: 500; margin-bottom: 10px; text-transform: capitalize; }
        .back-btn { display: inline-block; padding: 10px 20px; background: white; border-radius: 20px; text-decoration: none; color: #64748b; font-weight: 500; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    </style>
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-btn">← Back to Main Gallery</a>
        <header>
            <h1>NetLogo Simulations Archive</h1>
            <p>A comprehensive collection of agent-based models.</p>
        </header>
        <div class="grid">
"""

# Get files
files = [f for f in os.listdir(directory) if f.endswith('.html') and f != 'index.html']
files.sort()

for f in files:
    # Extract ID and Title from filename (e.g., "053-brownian-motion.html")
    parts = f.replace('.html', '').split('-')
    
    # Check if first part is a number
    if parts[0].isdigit():
        sim_id = parts[0]
        title = ' '.join(parts[1:]).title()
    else:
        sim_id = "Demo"
        title = ' '.join(parts).title()
        
    html += f"""
            <a href="{f}" class="card">
                <span class="card-id">#{sim_id}</span>
                <span class="card-title">{title}</span>
            </a>"""

# HTML Footer
html += """
        </div>
    </div>
</body>
</html>
"""

with open(output_file, 'w') as f:
    f.write(html)

print(f"Generated index.html with {len(files)} links.")
