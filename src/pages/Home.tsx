import React from "react";

function Home() {
  return (
    <div>
      {/* About Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 mb-6">
          Hey there! 👋 My name is Emma and I am a senior Student-Athlete at
          Stanford University studying Computer Science with a concentration in
          Human-Computer Interaction (HCI). After graduation, I’m excited to
          pursue a master’s degree to deepen my knowledge of how technology and
          design shape our everyday interactions.
        </p>
        <p className="text-gray-700 mb-6">
          My passion lies in using technology as a tool to improve people’s
          lives. Through my studies and hands-on projects, I’ve explored
          everything from mobile app development and data visualization to user
          research and interface design. I’m excited by the endless ways tech
          can be applied—whether it’s building intuitive products, exploring the
          future of social platforms, designing for behavior change, or even
          contributing to fields like education, health, or creative tools. No
          matter the direction, I’m driven by a desire to create thoughtful,
          impactful experiences that put people first.
        </p>
        <h2 className="text-xl font-semibold mb-4">Beyond the Classroom</h2>
        <p className="text-gray-700 mb-6">
          As a Division I Student-Athlete and team captain on Stanford's Beach
          Volleyball team, I’ve learned the importance of leadership, time
          management, and resilience. I’m also an Athlete-to-Athlete mentor,
          guiding younger student-athletes on balancing academics, athletics,
          and personal growth. These experiences have sharpened my ability to
          collaborate, lead, and adapt in high-pressure environments.
        </p>
        <p className="text-gray-700 mb-6">
          In my free time, I enjoy staying active outdoors - whether it's
          playing beach volleyball, going for a hike, or picking up a new hobby
          just for fun. You can also find me curled up with a good book or
          laughing at a corny joke!
        </p>
      </div>

      {/* Recently Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recently</h2>
        <ul className="space-y-4">
          <li>
            → I’ve been leading my Division I beach volleyball team as team
            captain, an experience that’s sharpened my communication,
            leadership, and decision-making skills under pressure. Balancing
            high-stakes competition with academics has taught me how to stay
            focused, adaptable, and team-oriented.
            <span className="text-gray-500 italic">(Sept 2021 - Present)</span>
          </li>
          <li>
            → As a private tutor, I work with beginner students to build
            confidence in python coding—focusing on core concepts, debugging,
            and problem-solving.
            <span className="text-gray-500 italic">(Dec 2024 - Present)</span>
          </li>
          <li>
            → My teammates and I built a prototype of a React Native app for
            CS147! Plated is a smart cooking app that tracks pantry items and
            recommends personalized recipes—check out our work{" "}
            <a
              href="https://docs.google.com/document/d/15xH0gE8ECTH-mK6WxRXLL6-WFBDb-P6N/export?format=pdf
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              here
            </a>
            .<span className="text-gray-500 italic"> (Sept 2024)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
