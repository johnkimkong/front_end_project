import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

let blogPostData = {}; 

  app.get("/", (req, res) => {
    res.render('index.ejs', {blogPostData}); 
  });

  app.get("/write", (req, res) => {
    res.render('write.ejs'); 
    res.render('index.ejs', {blogPostData}); 
  });

  app.post("/submit", (req, res) => {
    const { postTitle, contentBox } = req.body;

    // Store the data in the blogPostData object
    // blogPostData = { title: postTitle, content: contentBox };

    blogPostData = { id: '1234', title: postTitle, content: contentBox };

    // Send the blog post to the / 
    res.render('index.ejs', {blogPostData}); 
    });

  app.get('/delete', (req,res) => {
    const postId = req.query.id; 

    if(blogPostData.id === postId) {
      blogPostData = {};
    }
    res.redirect('/'); 

  })
  

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  