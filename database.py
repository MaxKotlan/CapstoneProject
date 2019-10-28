import sqlite3
conn = sqlite3.connect('capstone-project.db')

c = conn.cursor()

# Create table
c.execute('''CREATE TABLE IF NOT EXISTS text
             (id INTEGER PRIMARY KEY, text text, lastChanged text, lastChangedBy text)''')

# Insert a row of data
c.execute('''INSERT INTO text VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'10-27-2019', 'Clay James')''')

# Save (commit) the changes
conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
conn.close()