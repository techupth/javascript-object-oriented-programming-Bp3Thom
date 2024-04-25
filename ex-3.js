//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList {
    constructor() {
        this.posts = [];
    }
    addpost(post) {
        this.posts.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content,
            comment: post.comment,
        });
    }
    sharePost(postId) {
        console.log(`You've shared post "${this.posts[postId-1].title}" to your friend.`)
    }
}
class Post {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comments) {
        this.comment.push(comments);
    }
}
class Comment {
    constructor(id, content, createdBy) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike() {
        this.like = this.like + 1;
    }
}
class Facebook {
    constructor() {
        this.groupList  = [];
        this.pageList = [];
    }
    addGroup(group) {
        this.groupList.push(group);
    }
    addPage(page) {
        this.pageList.push(page)
    }
}
class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}
class FacebookGrouop {
    constructor(name) {
        this.name = name;
    }
}
class Notification {
    constructor(id) {
        this.id = id;
    }
    send(comment,post) {
        console.log(`Notification: ${comment.createdBy.name} has just commented on this post-${post.title}`)
    }
}

//สร้าง User
const jane = new User("001", "Jane", "jane@gmail.com");

//สร้าง Post List
const postList = new PostList();

//สร้าง Post
const firstPost =  new Post(1, "My first post", "Hello !!");

//สร้าง Comment 
const firstComment = new Comment(1, "Greeting !!", jane);
//เพิ่ม Like ของ comment
firstComment.addLike();
firstComment.addLike();
//ดู Like ของ comment
console.log(firstComment.like)

//เพิ่ม Post เข้าไปใน Post list
postList.addpost(firstPost);

//ดูรายการ Post ทั้งหมด
console.log(postList.posts)

//เพิ่ม comment เข้าไปใน post
firstPost.addComment(firstComment);

// Share post ที่ไอดีเป็น (1)
postList.sharePost(1);

//สร้าง facebook
const facebook = new Facebook();

//สร้าง page
const firstpage = new FacebookPage("My first page");

//สร้าง group
const firstGroup = new FacebookGrouop("My first group");
//เพิ่ม firstpage เข้าไปใน facebook
facebook.addPage(firstpage);
//เพิ่ม firstgroup เข้าไปใใน facebook
facebook.addGroup(firstGroup);

//ดูรายการ facebook page และ facebook group
console.log(facebook.pageList)
console.log(facebook.groupList)

//สร้าง Notification 
const notification = new Notification(1);
//ส่ง Notification
notification.send(firstComment, firstPost);




