//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList {
    constructor(posts) {
        this.posts = posts = [];
    }
    addpost() {
        this.posts.push(posts);
    }
    sharePost() {
        console.log(`You've shared post ${this.title} to your friend.`)
    }
}
class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = comment;
    }
    addComment() {
        this.comment.push(new Comment(this.id, this.title, this.content, this.comment))
    }
}
class Comment {
    constructor(id, content, createdBy, like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = like;
    }
    addLike() {
        const like = 1;
        this.like += like;
    }
}
class Facebook {
    constructor(groupList, pageList) {
        this.groupList  = groupList;
        this.pageList = pageList;
    }
    addGroup() {
        this.groupList.push(addGroup());
    }
    addPage() {
        this.pageList.push(addPage())
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
    send() {
        console.log(`Notification: ${this.createdBy} has just commented on this post-${this.title}`)
    }
}
