const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const homeRoutes = require("./routes/home");
const aboutUsMemoir = require("./routes/about/memoir/memoir.js");
const aboutUsMemoirConvocation = require("./routes/about/memoir/convocation.js");
const aboutUsMemoirFormerVcs = require("./routes/about/memoir/formerVc.js");
const aboutUsUniversityCalender = require("./routes/about/vcMessage.js");
const aboutUsVisionAndMission = require("./routes/about/visionAndMission.js");
const aboutUsVcMessage = require("./routes/about/vcMessage.js");
const aboutUsAnnualReport = require("./routes/about/annualReport/year.js");
const aboutUsGoverningBodies = require("./routes/about/governingBodies.js");
const aboutUsBrochure = require("./routes/about/brochure.js");
const aboutUsColleges = require("./routes/about/aboutColleges.js");
const aboutUsDisabledFriendliness = require("./routes/about/policies/disabledFriendliness.js");
const aboutUsPoliciesGreenPolicy = require("./routes/about/policies/greenPolicy.js");
const aboutUsPoliciesEgovernance = require("./routes/about/policies/egovernance.js");

app.use("/api/", homeRoutes);
app.use("/api/aboutUs/memoir", aboutUsMemoir);
app.use("/api/aboutUs/memoir/convocation", aboutUsMemoirConvocation);
app.use("/api/aboutUs/memoir/formerVcs", aboutUsMemoirFormerVcs);
app.use("/api/aboutUs/universityCalender", aboutUsUniversityCalender);
app.use("/api/aboutUs/vcMessage", aboutUsVcMessage);
app.use("/api/aboutUs/visionAndMission", aboutUsVisionAndMission);
app.use("/api/aboutUs/annualReport", aboutUsAnnualReport);
app.use("/api/aboutUs/governingBodies", aboutUsGoverningBodies);
app.use("/api/aboutUs/brochure", aboutUsBrochure);
app.use("/api/aboutUs/colleges", aboutUsColleges);
app.use(
  "/api/aboutUs/policies/disabledFriendliness",
  aboutUsDisabledFriendliness
);
app.use("/api/aboutUs/policies/greenPolicy", aboutUsPoliciesGreenPolicy);
app.use("/api/aboutUs/policies/egovernance", aboutUsPoliciesEgovernance);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
