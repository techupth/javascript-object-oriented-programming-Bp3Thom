class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

const emailNotification = new EmailNotification("001", "09.14", "Greeting!!", "thom@gmail.com");
emailNotification.send();
const smsNotification = new SMSNotification("001", "09.23", "Hello!!", "0899999999");
smsNotification.send();