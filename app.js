const express = require("express");
const app = express();
const path = require("path");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 80;
}

// for serving static files
app.use(`/static`, express.static(`static`));

// Set the template engine as pug
app.set("view engine", "pug");

//Set the view directory
app.set("views", path.join(__dirname, "views"));

//pug endpoint
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.pug", params);
});

app.get("/layout", (req, res) => {
  const params = {};
  res.status(200).render("layout.pug", params);
});

app.get("/study-in-uk", (req, res) => {
  const params = {};
  res.status(200).render("study-in-uk.pug", params);
});

app.get("/study-in-usa", (req, res) => {
  const params = {};
  res.status(200).render("study-in-usa.pug", params);
});

app.get("/study-in-canada", (req, res) => {
  const params = {};
  res.status(200).render("study-in-canada.pug", params);
});
app.get("/study-in-ireland", (req, res) => {
  const params = {};
  res.status(200).render("study-in-ireland.pug", params);
});
app.get("/study-in-australia", (req, res) => {
  const params = {};
  res.status(200).render("study-in-australia.pug", params);
});
app.get("/ielts", (req, res) => {
  const params = {};
  res.status(200).render("ielts.pug", params);
});
app.get("/gre", (req, res) => {
  const params = {};
  res.status(200).render("gre.pug", params);
});
app.get("/toefl", (req, res) => {
  const params = {};
  res.status(200).render("toefl.pug", params);
});
app.get("/our-services", (req, res) => {
  const params = {};
  res.status(200).render("our-services.pug", params);
});
app.get("/blogs-list", (req, res) => {
  const params = {};
  res.status(200).render("blogs-list.pug", params);
});
app.get(
  "/blog-page-10-tips-to-score-a-perfect-170-In-gre-quant",
  (req, res) => {
    const params = {};
    res
      .status(200)
      .render(
        "blog-page-10-tips-to-score-a-perfect-170-In-gre-quant.pug",
        params
      );
  }
);
app.get("/blog-page-10-tips-to-crack-the-IELTS-Exam", (req, res) => {
  const params = {};
  res
    .status(200)
    .render("blog-page-10-tips-to-crack-the-IELTS-Exam.pug", params);
});
app.get(
  "/blog-page-10-Tips-to-remember-before-writing-a-professional-SOP-for-higher-Ranked-Universities",
  (req, res) => {
    const params = {};
    res
      .status(200)
      .render(
        "blog-page-10-Tips-to-remember-before-writing-a-professional-SOP-for-higher-Ranked-Universities.pug",
        params
      );
  }
);
app.get("/blog-page-Top-10-Programs-for-Data-Science-in-USA", (req, res) => {
  const params = {};
  res
    .status(200)
    .render("blog-page-Top-10-Programs-for-Data-Science-in-USA.pug", params);
});
app.get(
  "/blog-page-Top-Universities-to-consider-to-study-in-Australia",
  (req, res) => {
    const params = {};
    res
      .status(200)
      .render(
        "blog-page-Top-Universities-to-consider-to-study-in-Australia.pug",
        params
      );
  }
);
app.get("/blog-page-Why-study-in-Germany-Study-the-German-way", (req, res) => {
  const params = {};
  res
    .status(200)
    .render("blog-page-Why-study-in-Germany-Study-the-German-way.pug", params);
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

app.get("/about", (req, res) => {
  const params = {};
  res.status(200).render("about.pug", params);
});

app.get("/", (req, res) => {
  res.send("This is my first app for Maxxcell Overseas");
});

app.get("/about", (req, res) => {
  res.send("This is About us for Maxxcell Overseas");
});

//Start the server
app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
