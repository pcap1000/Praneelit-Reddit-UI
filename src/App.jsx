import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import PostsPage from "./pages/PostsPage";
import AboutPage from "./pages/AboutPage";

import "./styles/App.css";
import AppLayout from "./ui/AppLayout";
import AppLayoutProject from "./ui/AppLayoutProject";
import AppLayoutAbout from "./ui/AppLayoutAbout";
import AppLayoutPost from "./ui/AppLayoutPost";
import Posts from "./ui/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Layout */}
        <Route element={<AppLayout />}>
          <Route index element={<PostsPage />} />
        </Route>

        {/* Project Layout */}
        <Route element={<AppLayoutProject />}>
          <Route path="project" element={<PostsPage />} />
        </Route>

        {/* Blog Layout */}
        <Route element={<AppLayoutAbout />}>
          <Route path="about" element={<AboutPage />} />
        </Route>

        {/* Post Layout */}
        <Route element={<AppLayoutPost />}>
          <Route
            path="about-post-1"
            element={
              <>
                <PostsPage />
                <Posts
                  title="About Me"
                  content="I was born and raised in Bangalore, a city that has shaped my experiences, thoughts, and ambitions. While I wouldn’t say I love every aspect of it, there are parts of this city that I deeply appreciate—its energy, the people, and the ever-growing tech scene. Currently, I’m pursuing a degree in Electronics and Computer Engineering (EAC) at Amrita University, Bangalore. It’s a small college, and to be honest, I ended up here due to my not-so-great grades in 12th. But despite that, I’ve grown to like it. The system is decent, the environment is structured, and most of the students here are toppers from their respective schools. Everyone around me is incredibly focused, which sometimes makes it challenging, but it also pushes me to do better.

                  One of my biggest passions is cricket, but I firmly believe that playing is far more valuable than just watching. Except for the IPL, which is one of the few exceptions where I enjoy following the game. I also have a deep love for movies and TV shows, especially those that challenge storytelling norms. Some of my favorites include Birdman, Y Tu Mamá También, How to Sell Drugs Online (Fast), Breaking Bad, Amores Perros, City of God, and Interstellar. Each of these films and series has left a lasting impact on me, whether through their cinematography, storytelling, or sheer brilliance.

                  More than anything, I love building things—especially websites and digital experiences. The process of turning an idea into something tangible excites me. I’m always brainstorming new projects, exploring different technologies, and figuring out how to bring my ideas to life. At the core, I just want to create cool things—things that solve problems, improve experiences, or simply make life more interesting. That’s what keeps me motivated and constantly thinking about what’s next."
                  username="mouthwithnoteeth"
                  avatar="https://i.pinimg.com/474x/74/9d/48/749d48da0ae85583aee308f6947d5179.jpg"
                />
              </>
            }
          />
        </Route>
        <Route element={<AppLayoutPost />}>
          <Route
            path="project-post-1"
            element={
              <>
                <PostsPage />
                <Posts
                  title="My Projects"
                  content="Optimizing Time-Slotted Deliveries for Post Offices and Courier Companies

                            Managing time-window-based deliveries has always been a challenge for post offices and courier companies, especially when multiple customers select the same time slot. To address this, I developed a framework that optimizes delivery operations using clustering algorithms and time-based constraints. This system ensures equitable workload distribution among delivery personnel while efficiently managing delivery windows.

                            The process begins with identifying all delivery locations scheduled for a particular day. The geographical coordinates of these points are determined and clustered using K-means clustering. Here, K represents the number of available delivery personnel for that day. This clustering step ensures an optimal partitioning of delivery points across drivers. Once delivery points are assigned to drivers, the next step is to determine time constraints. The total number of deliveries is evenly distributed among the available drivers. The delivery day is divided into predetermined time slots with fixed durations. Each driver's deliveries are spread evenly across these slots to determine the average deliveries per slot. A time constraint per delivery is calculated by dividing the slot duration by the number of deliveries assigned to it. A buffer is incorporated to account for traffic or unforeseen delays, ensuring realistic and manageable schedules for drivers.

                            When multiple customers select the same time slot, the system evaluates the feasibility based on travel time. The first customer is automatically assigned to the slot. If a second customer selects the same slot, the system calculates travel time from the first customer, and if within the constraint, they share the slot. For subsequent customers, travel time is calculated for each new customer relative to existing assignments. If a new addition exceeds the time constraint, they are moved to a different slot. The system dynamically optimizes the delivery route each time a new customer is added, ensuring that the total travel time remains within the slot duration.

                            Once all customers are assigned and routes are optimized, drivers receive the final schedule, which includes delivery sequence, estimated travel times, and expected time windows. In case of last-minute changes, such as cancellations, the system recalculates and optimizes the route exclusively for the affected time slot, minimizing disruptions. For locations with multiple deliveries such as apartments or business complexes, the system allows more users to share a time slot as no travel time is involved. High-density areas have restricted time slots to minimize unnecessary travel, improving efficiency.

                            This methodology significantly improves efficiency by balancing workloads among drivers, reducing delivery delays, and optimizing routes in real time. It can be adapted for various logistics services, including food delivery and e-commerce shipments.

                            Another project I developed was a website that allowed users to generate and download course completion certificates. It was a simple idea but gained significant traction due to specific academic requirements. Users could enter details such as name, course title, and duration. The platform then generated a professional-looking certificate that users could download instantly. Despite no SEO efforts, the platform attracted 6,000-7,000 users per month. The primary reason for this success was an academic policy at Visvesvaraya Technological University (VTU), which required students to submit proof of completed courses each semester. Students found this platform an easy way to generate certificates for submission.

                            Understanding user needs is key to organic growth. Even simple tools can gain traction if they solve a real problem. Unexpected user behavior like VTU students' reliance on the platform can drive success in ways not initially anticipated. Both of these projects highlight my approach to problem-solving—leveraging technology to create efficient, impactful solutions. Whether optimizing postal deliveries or simplifying academic documentation, the goal remains the same: building tools that solve real-world problems effectively."
                  username="mouthwithnoteeth"
                  avatar="https://i.pinimg.com/474x/74/9d/48/749d48da0ae85583aee308f6947d5179.jpg"
                />
              </>
            }
          />
        </Route>


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
