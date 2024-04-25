class Notification {
    constructor(notification, createdTime, content, receiver) {
        this.notification = notification;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification {
    constructor(notification, createdTime, content, receiver) {
        super(notification, createdTime, content, receiver);
    }
    
}

class SMSNotification extends Notification {
    constructor(notification, createdTime, content, receiver) {
        super(notification, createdTime, content, receiver);
    }
}

const emailNotification = new EmailNotification("001", "10.22", "Greeting !!", "thom@gmail.com");
const smsNotification = new SMSNotification("001", "10.23", "Hello !!", "0899999999");
emailNotification.send();
smsNotification.send();