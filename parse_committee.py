import json

def to_title_case(s):
    words = s.split(' ')
    return ' '.join([w.capitalize() for w in words])

with open("raw_committee.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

categories = []
current_category = None

for line in lines:
    line = line.strip()
    if not line: continue
    
    if line.startswith("●"):
        # Member line
        text = line.replace("●", "").strip()
        # split by first comma for name and desc
        if "," in text:
            parts = text.split(",", 1)
            name = parts[0].strip()
            desc = parts[1].strip()
        else:
            name = text.strip()
            desc = ""
        
        if current_category:
            current_category["members"].append({"name": name, "desc": desc})
    else:
        # Category line
        title = to_title_case(line.lower())
        current_category = {"title": title, "members": []}
        categories.append(current_category)

ts_output = "const committeeData: Category[] = [\n"
for c in categories:
    ts_output += "  {\n"
    ts_output += f'    title: "{c["title"]}",\n'
    ts_output += "    members: [\n"
    for i, m in enumerate(c["members"]):
        name = m["name"].replace('"', '\\"')
        desc = m["desc"].replace('"', '\\"')
        ts_output += f'      {{ name: "{name}", desc: "{desc}" }}'
        if i < len(c["members"]) - 1:
            ts_output += ",\n"
        else:
            ts_output += "\n"
    ts_output += "    ]\n"
    ts_output += "  },\n"
ts_output += "];\n"

# read original file, replace from 'const committeeData: Category[] = [' to '];\n' (at line 250)
with open("components/sections/CommitteeSimplified.tsx", "r", encoding="utf-8") as f:
    content = f.read()

import re
# find const committeeData: Category[] = [ ... ];
# using regex with DOTALL
new_content = re.sub(r'const committeeData: Category\[\] = \[.*?\];', ts_output.strip(), content, flags=re.DOTALL)

with open("components/sections/CommitteeSimplified.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement done.")
