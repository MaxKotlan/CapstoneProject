from pony.orm import *
import datetime


db = Database()
db.bind(provider='sqlite', filename='capstone-project.sqlite', create_db=True)

class Text(db.Entity):
    id = PrimaryKey(int, auto=True)
    text = Required(str)
    lastUpdated = Required(datetime.datetime)
    lastUpdatedBy = Required(str)

db.generate_mapping(create_tables=True)

@db_session
def populate_database():
    t1 = Text(text="test text 1", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t2 = Text(text="test text 2", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t3 = Text(text="test text 3", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")
    t4 = Text(text="test text 4", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")