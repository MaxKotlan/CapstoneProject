import smtplib, ssl

invite = """\
Subject: Dr.Ken Batcher Memorial Website Invite

You have been invited to be an administrator on the Dr.Ken Batcher Memorial Website.
Please go to http://localhost:5000/register/ to register."""

verification = """\
Subject: Dr.Ken Batcher Memorial Website Email Verification

Please go to http://localhost:5000/api/verify?key={}"""

class EmailHelper(object):
    @staticmethod
    def send_invite(email):
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login("drkenbatchermemorial@gmail.com", "changethispassword")
            server.sendmail("drkenbatchermemorial@gmail.com", email, invite)

    @staticmethod
    def send_verification(email, verification_key):
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login("drkenbatchermemorial@gmail.com", "changethispassword")
            server.sendmail("drkenbatchermemorial@gmail.com", email, verification.format(verification_key))