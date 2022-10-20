const express = require("express");
const app = express();
const path = require("path");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// for serving static files
app.use(`/static`, express.static(`static`));

// Set the template engine as pug
app.set("view engine", "pug");

//Set the view directory
app.set("views", "./views");

//pug endpoint
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.pug", params);
});

app.get("/layout", (req, res) => {
  const params = {};
  res.status(200).render("layout.pug", params);
});

app.route("/study-in-uk-admission-counseling").get((req, res) => {
  res.render("study-dest/study-in-uk-admission-counseling.pug");
});

app.route("/study-in-usa-admission-counseling").get((req, res) => {
  res.render("study-dest/study-in-usa-admission-counseling.pug");
});

app.route("/study-in-canada-admission-counseling").get((req, res) => {
  res.render("study-dest/study-in-canada-admission-counseling.pug");
});

app.route("/study-in-ireland-admission-counseling").get((req, res) => {
  res.render("study-dest/study-in-ireland-admission-counseling.pug");
});

app.route("/study-in-australia-admission-counseling").get((req, res) => {
  res.render("study-dest/study-in-australia-admission-counseling.pug");
});

app.route("/ielts-coaching-exam-preparation-online-offline").get((req, res) => {
  res.render("exams/ielts-coaching-exam-preparation-online-offline.pug");
});

app.route("/gre-coaching-exam-preparation-online-offline").get((req, res) => {
  res.render("exams/gre-coaching-exam-preparation-online-offline.pug");
});

app.route("/toefl-coaching-exam-preparation-online-offline").get((req, res) => {
  res.render("exams/toefl-coaching-exam-preparation-online-offline.pug");
});

app.get("/our-services", (req, res) => {
  const params = {};
  res.status(200).render("our-services.pug", params);
});
app.get("/blogs-list", (req, res) => {
  const params = {};
  res.status(200).render("blogs-list.pug", params);
});

app
  .route("/blog-page-10-tips-to-score-a-perfect-170-In-gre-quant").get((req, res) => {
    res.render("blogs/blog-page-10-tips-to-score-a-perfect-170-In-gre-quant.pug");
  });

app.route("/blog-page-10-tips-to-crack-the-IELTS-Exam").get((req, res) => {
  res.render("blogs/blog-page-10-tips-to-crack-the-IELTS-Exam.pug");
});

app
  .route(
    "/blog-page-10-Tips-to-remember-before-writing-a-professional-SOP-for-higher-Ranked-Universities"
  ).get((req, res) => {
    res.render(
      "blogs/blog-page-10-Tips-to-remember-before-writing-a-professional-SOP-for-higher-Ranked-Universities.pug"
    );
  });

app
  .route("/blog-page-Top-10-Programs-for-Data-Science-in-USA").get((req, res) => {
    res.render("blogs/blog-page-Top-10-Programs-for-Data-Science-in-USA.pug");
  });

app
  .route("/blog-page-Top-Universities-to-consider-to-study-in-Australia")
  .get((req, res) => {
    res.render(
      "blogs/blog-page-Top-Universities-to-consider-to-study-in-Australia.pug"
    );
  });

app
  .route("/blog-page-Why-study-in-Germany-Study-the-German-way")
  .get((req, res) => {
    res.render("blogs/blog-page-Why-study-in-Germany-Study-the-German-way.pug");
  });

app.get("/refund-policy", (req, res) => {
  const params = {};
  res.status(200).render("refund-policy.pug", params);
});
app.get("/terms-and-conditions", (req, res) => {
  const params = {};
  res.status(200).render("terms-and-conditions.pug", params);
});
app.get("/privacy-policy", (req, res) => {
  const params = {};
  res.status(200).render("privacy-policy.pug", params);
});

app.get("/testimonial", (req, res) => {
  const params = {};
  res.status(200).render("testimonial.pug", params);
});

app.get("/about-maxxcell-institute-and-overseas-education-services", (req, res) => {
  const params = {};
  res.status(200).render("about-maxxcell-institute-and-overseas-education-services.pug", params);
});

app.get("/", (req, res) => {
  res.send("This is my first app for Maxxcell Overseas");
});

app.get("/sitemap.xml", (req, res) => {
  const params = {};
  res.status(200).render("sitemap.pug", params);
});


// Landing pages

app
  .route("/profile-assessment-form")
  .get((req, res) => {
    res.render(
      "landing-pages/profile-assessment-form.pug"
    );
  });


//Start the server
app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
