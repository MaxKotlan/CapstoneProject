from pony.orm import *
from flask_login import UserMixin
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

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
    email = Required(str, unique=True)
    password = Required(str)
    email_verified = Required(bool)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Category(db.Entity):
    id = PrimaryKey(int, auto=True)
    title = Required(str)
    description = Optional(str)
    works = Set('Work')

class Work(db.Entity):
    id = PrimaryKey(int, auto=True)
    title = Required(str)
    path  = Required(str)
    description = Required(str)
    dateAdded = Required(datetime.datetime)
    category = Optional(Category)

class PendingUser(db.Entity):
    id = PrimaryKey(int, auto=True)
    email = Required(str, unique=True)
    validation_key = Required(str, unique=True)

db.generate_mapping(create_tables=True)

@db_session
def populate_database(config):
    w1 = Work(title="work", path="/documents", description="decription of things", dateAdded=datetime.datetime.now(), category=Category(title="star"))
    u1 = User(email=config.get("ADMIN_EMAIL"), email_verified=True, password="unhashed")
    u1.set_password(config.get("ADMIN_PASSWORD"))
    t1 = Text(title="section 1", text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t2 = Text(title="section 2", text="ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ", lastUpdated=datetime.datetime.now(), lastUpdatedBy="clay_james")
    t3 = Text(title="section 3 ye", text="fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")
    t4 = Text(title="section 4", text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut", lastUpdated=datetime.datetime.now(), lastUpdatedBy="max_kotlan")

@db_session
def reset_users(config):
    purge_table(User)
    u1 = User(email=config.get("ADMIN_EMAIL"), email_verified=True, password="unhashed")
    u1.set_password(config.get("ADMIN_PASSWORD"))

def purge_table(entity):
    # purge rows from the table
    sql1 = 'delete from "%s"' % entity._table_
    db.execute(sql1)

    # reset the autoincrement counter
    sql2 = "delete from sqlite_sequence where name='%s'" \
                            % entity._table_
    db.execute(sql2)
