import smtplib, ssl

invite = """\
Subject: Dr.Ken Batcher Memorial Website Invite

You have been invited to be an administrator on the Dr.Ken Batcher Memorial Website.
Please go to {}register/ to register."""

verification = """\
Subject: Dr.Ken Batcher Memorial Website Email Verification

Please go to {}api/verify?key={}"""

class EmailHelper(object):
    @staticmethod
    def send_invite(email, config):
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(config.get('EMAIL'), config.get('EMAIL_PASSWORD'))
            server.sendmail("drkenbatchermemorial@gmail.com", email, invite.format(config.get('BASE_URL')))

    @staticmethod
    def send_verification(email, verification_key, config):
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(config.get('EMAIL'), config.get('EMAIL_PASSWORD'))
            server.sendmail("drkenbatchermemorial@gmail.com", email, verification.format(config.get('BASE_URL'), verification_key))