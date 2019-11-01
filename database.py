from pony.orm import *
from flask_login import UserMixin
import datetime


db = Database()
db.bind(provider='sqlite', filename='capstone-project.sqlite', create_db=True)

class Text(db.Entity):
    id = PrimaryKey(int, auto=True)
    title = Required(str)
    text = Required(str)
    lastUpdated = Required(datetime.datetime)
    lastUpdatedBy = Required(str)

class User(db.Entity, UserMixin):
    id = PrimaryKey(int, auto=True)
    username = Required(str)
    password = Required(str)

db.generate_mapping(create_tables=True)

@db_session
def populate_database():
    u1 = User(username="Admin", password="secret")
    t1 = Text(title="section 1", text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t2 = Text(title="section 2", text="ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t3 = Text(title="section 3 ye", text="fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")
    t4 = Text(title="section 4", text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")