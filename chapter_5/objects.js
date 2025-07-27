//object liretals

const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {title: 'my home rules', likes: 40},
];

console.log(blogs);
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    blogs: [
    {title: 'why mac & cheese rules', likes: 30},
    {title: 'my home rules', likes: 40}],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user);
console.log(user.name);
user.login();
user.logBlogs();
// user.age = 35;
console.log(user.age);

//console.log(this); -> window object