// Club Data
const clubsData = [
    // Technology Clubs
    {
        id: 1,
        name: "VKU IT Club",
        shortDescription: "A community for IT enthusiasts to learn, share knowledge, and develop technical skills.",
        fullDescription: "The VKU IT Club is a vibrant community of technology enthusiasts dedicated to exploring and mastering various aspects of information technology. Our club provides a platform for students to enhance their technical skills, collaborate on innovative projects, and stay updated with the latest trends in the tech industry. Through workshops, coding competitions, and guest lectures from industry professionals, we aim to bridge the gap between academic learning and practical application.",
        category: "tech",
        logo: "images/clubs/it-club-logo.jpg",
        coverImage: "images/clubs/it-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Every Wednesday, 5:00 PM - 7:00 PM",
        location: "Building A, Room 305",
        email: "itclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuitclub",
        members: [
            { name: "Nguyen Van A", role: "President", avatar: "images/members/member1.jpg" },
            { name: "Tran Thi B", role: "Vice President", avatar: "images/members/member2.jpg" },
            { name: "Le Van C", role: "Technical Lead", avatar: "images/members/member3.jpg" },
            { name: "Pham Thi D", role: "Secretary", avatar: "images/members/member4.jpg" }
        ],
        activities: [
            "Weekly coding sessions",
            "Monthly tech talks",
            "Hackathons and coding competitions",
            "Industry visits",
            "Project collaborations"
        ],
        achievements: [
            "1st place in National Collegiate Programming Contest 2022",
            "Best Innovation Award at Da Nang Hackathon 2021",
            "Successfully organized VKU Tech Conference with 500+ attendees"
        ]
    },
    {
        id: 2,
        name: "VKU AI Research Club",
        shortDescription: "Exploring artificial intelligence, machine learning, and their applications in solving real-world problems.",
        fullDescription: "The VKU AI Research Club is dedicated to exploring the fascinating world of artificial intelligence and machine learning. Our members work on cutting-edge research projects, develop AI applications, and participate in competitions to solve real-world problems using AI technologies. Through regular workshops, study groups, and collaboration with faculty researchers, we aim to foster innovation and expertise in this rapidly evolving field.",
        category: "tech",
        logo: "images/clubs/ai-club-logo.jpg",
        coverImage: "images/clubs/ai-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Every Tuesday, 6:00 PM - 8:00 PM",
        location: "Building A, AI Lab, Room 401",
        email: "aiclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuaiclub",
        members: [
            { name: "Tran Minh K", role: "President", avatar: "images/members/member11.jpg" },
            { name: "Nguyen Thi L", role: "Vice President", avatar: "images/members/member12.jpg" },
            { name: "Pham Van M", role: "Research Coordinator", avatar: "images/members/member13.jpg" }
        ],
        activities: [
            "AI research projects",
            "Machine learning workshops",
            "Paper reading groups",
            "AI competitions",
            "Industry collaboration projects"
        ],
        achievements: [
            "Published research paper in International AI Conference 2022",
            "2nd place in Vietnam AI Challenge",
            "Developed AI solution for local healthcare provider"
        ]
    },
    {
        id: 3,
        name: "VKU Game Development Club",
        shortDescription: "Creating interactive games and exploring game design, development, and programming.",
        fullDescription: "VKU Game Development Club brings together students passionate about game design and development. We explore various aspects of game creation including programming, art design, storytelling, and sound engineering. Our members collaborate on game projects, participate in game jams, and learn industry-standard tools and techniques. Whether you're interested in mobile games, PC games, or VR/AR experiences, our club provides resources and mentorship to help you bring your creative ideas to life.",
        category: "tech",
        logo: "images/clubs/gamedev-club-logo.jpg",
        coverImage: "images/clubs/gamedev-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Every Thursday, 5:30 PM - 8:30 PM",
        location: "Building C, Game Lab, Room 205",
        email: "gamedev@vku.udn.vn",
        facebook: "https://www.facebook.com/vkugamedev",
        members: [
            { name: "Le Hoang N", role: "President", avatar: "images/members/member14.jpg" },
            { name: "Tran Thu O", role: "Vice President", avatar: "images/members/member15.jpg" },
            { name: "Nguyen Minh P", role: "Technical Director", avatar: "images/members/member16.jpg" }
        ],
        activities: [
            "Game development workshops",
            "Game jams and hackathons",
            "Industry guest speakers",
            "Collaborative game projects",
            "Game showcases and playtesting sessions"
        ],
        achievements: [
            "Winner of Vietnam Game Development Challenge 2022",
            "Published mobile game with over 10,000 downloads",
            "Hosted successful Game Jam with 100+ participants"
        ]
    },
    
    // Academic Clubs
    {
        id: 4,
        name: "VKU English Club",
        shortDescription: "Improve your English language skills through fun activities, discussions, and cultural exchange.",
        fullDescription: "VKU English Club provides a friendly and supportive environment for students to practice and improve their English language skills. Our club organizes a variety of engaging activities including conversation practice, debates, presentations, and cultural exchange events. We welcome students of all proficiency levels who are eager to enhance their communication abilities and gain confidence in using English in academic and professional settings.",
        category: "academic",
        logo: "images/clubs/english-club-logo.jpg",
        coverImage: "images/clubs/english-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Every Monday and Thursday, 6:00 PM - 8:00 PM",
        location: "Building B, Room 203",
        email: "englishclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuenglishclub",
        members: [
            { name: "Hoang Minh E", role: "President", avatar: "images/members/member5.jpg" },
            { name: "Nguyen Thu F", role: "Vice President", avatar: "images/members/member6.jpg" },
            { name: "Tran Van G", role: "Event Coordinator", avatar: "images/members/member7.jpg" }
        ],
        activities: [
            "English conversation practice",
            "Debate competitions",
            "Movie nights with discussions",
            "Cultural exchange events",
            "Public speaking workshops"
        ],
        achievements: [
            "Hosted the Regional English Speaking Contest 2022",
            "Published monthly English language newsletter",
            "Organized successful cultural exchange program with Korean students"
        ]
    },
    {
        id: 5,
        name: "VKU Mathematics Club",
        shortDescription: "Exploring the beauty of mathematics through problem-solving, competitions, and collaborative learning.",
        fullDescription: "VKU Mathematics Club is dedicated to fostering a deeper understanding and appreciation of mathematics beyond the classroom. We organize problem-solving sessions, math competitions, and study groups to help members develop strong analytical and logical thinking skills. Our club welcomes students from all disciplines who are interested in exploring mathematical concepts, preparing for competitions, or simply enjoying the beauty and elegance of mathematical thinking.",
        category: "academic",
        logo: "images/clubs/math-club-logo.jpg",
        coverImage: "images/clubs/math-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Every Wednesday, 4:00 PM - 6:00 PM",
        location: "Building B, Room 301",
        email: "mathclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkumathclub",
        members: [
            { name: "Pham Thanh Q", role: "President", avatar: "images/members/member17.jpg" },
            { name: "Nguyen Hai R", role: "Vice President", avatar: "images/members/member18.jpg" },
            { name: "Tran Minh S", role: "Competition Coordinator", avatar: "images/members/member19.jpg" }
        ],
        activities: [
            "Problem-solving sessions",
            "Mathematics competitions",
            "Research projects",
            "Math puzzle nights",
            "Preparation for national math olympiads"
        ],
        achievements: [
            "Top 10 in Vietnam Collegiate Mathematics Competition",
            "Published research paper in undergraduate mathematics journal",
            "Successfully organized VKU Mathematics Olympiad for high school students"
        ]
    },
    {
        id: 6,
        name: "VKU Research & Innovation Club",
        shortDescription: "Promoting research culture and innovation through collaborative projects and academic exploration.",
        fullDescription: "The VKU Research & Innovation Club aims to cultivate a strong research culture among undergraduate students. We provide guidance on research methodologies, academic writing, and project development across various disciplines. Our members work on innovative research projects, participate in academic conferences, and collaborate with faculty mentors to develop solutions to real-world problems. The club serves as a platform for students to explore their academic interests beyond the curriculum and prepare for graduate studies or research careers.",
        category: "academic",
        logo: "images/clubs/research-club-logo.jpg",
        coverImage: "images/clubs/research-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Every Friday, 3:00 PM - 5:00 PM",
        location: "Building A, Research Center, Room 501",
        email: "researchclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuresearch",
        members: [
            { name: "Le Van T", role: "President", avatar: "images/members/member20.jpg" },
            { name: "Nguyen Thi U", role: "Vice President", avatar: "images/members/member21.jpg" },
            { name: "Tran Hoang V", role: "Research Coordinator", avatar: "images/members/member22.jpg" }
        ],
        activities: [
            "Research methodology workshops",
            "Academic writing seminars",
            "Research project development",
            "Conference participation",
            "Faculty-student collaborative research"
        ],
        achievements: [
            "Published 5 research papers in international journals",
            "Won Best Undergraduate Research Award at National Science Conference",
            "Secured research grant from industry partner"
        ]
    },
    
    // Arts & Culture Clubs
    {
        id: 7,
        name: "VKU Dance Club",
        shortDescription: "Express yourself through various dance styles and performances in a supportive community.",
        fullDescription: "VKU Dance Club is a dynamic community that brings together students passionate about dance. We explore various dance styles including contemporary, hip-hop, K-pop, and traditional Vietnamese dance. Our club provides professional training, choreography workshops, and performance opportunities throughout the academic year. Whether you're a beginner or an experienced dancer, our inclusive environment welcomes everyone who shares a love for movement and artistic expression.",
        category: "arts",
        logo: "images/clubs/dance-club-logo.jpg",
        coverImage: "images/clubs/dance-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Tuesday and Friday, 5:30 PM - 7:30 PM",
        location: "Student Center, Dance Studio",
        email: "danceclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkudanceclub",
        members: [
            { name: "Le Thi H", role: "President", avatar: "images/members/member8.jpg" },
            { name: "Nguyen Van I", role: "Vice President", avatar: "images/members/member9.jpg" },
            { name: "Tran Minh J", role: "Choreographer", avatar: "images/members/member10.jpg" }
        ],
        activities: [
            "Weekly dance practice sessions",
            "Dance workshops with guest instructors",
            "Campus performances",
            "Annual dance showcase",
            "Flash mob events"
        ],
        achievements: [
            "1st place in Central Vietnam University Dance Competition 2022",
            "Performed at Da Nang International Festival",
            "Collaborated with professional dance companies for charity events"
        ]
    },
    {
        id: 8,
        name: "VKU Music Club",
        shortDescription: "Celebrating musical talents through performances, jam sessions, and musical education.",
        fullDescription: "VKU Music Club brings together students who share a passion for music in all its forms. Our club provides opportunities for musicians to perform, collaborate, and develop their skills in a supportive environment. From vocalists to instrumentalists, from classical to contemporary genres, we welcome all music enthusiasts. The club organizes regular jam sessions, concerts, music workshops, and collaborates with other clubs for campus events and community performances.",
        category: "arts",
        logo: "images/clubs/music-club-logo.jpg",
        coverImage: "images/clubs/music-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Monday and Thursday, 6:00 PM - 8:00 PM",
        location: "Student Center, Music Room",
        email: "musicclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkumusicclub",
        members: [
            { name: "Nguyen Thanh W", role: "President", avatar: "images/members/member23.jpg" },
            { name: "Tran Minh X", role: "Vice President", avatar: "images/members/member24.jpg" },
            { name: "Le Hoang Y", role: "Music Director", avatar: "images/members/member25.jpg" }
        ],
        activities: [
            "Weekly jam sessions",
            "Music theory and instrument workshops",
            "Campus concerts and performances",
            "Recording sessions",
            "Music competitions"
        ],
        achievements: [
            "Winner of Central Vietnam University Music Festival",
            "Released original song compilation album",
            "Performed at Da Nang Youth Cultural Exchange"
        ]
    },
    {
        id: 9,
        name: "VKU Photography Club",
        shortDescription: "Capturing moments and telling stories through the art of photography.",
        fullDescription: "VKU Photography Club is dedicated to the art and craft of photography. We provide a platform for photography enthusiasts to learn, practice, and showcase their work. Our activities include photography workshops, photo walks, exhibitions, and competitions. Members learn various photography techniques, editing skills, and visual storytelling. The club also documents campus events and contributes to university publications, helping members build professional portfolios while developing their creative vision.",
        category: "arts",
        logo: "images/clubs/photo-club-logo.jpg",
        coverImage: "images/clubs/photo-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Every Saturday, 2:00 PM - 4:00 PM",
        location: "Building C, Room 105",
        email: "photoclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuphotoclub",
        members: [
            { name: "Pham Van Z", role: "President", avatar: "images/members/member26.jpg" },
            { name: "Nguyen Thi AA", role: "Vice President", avatar: "images/members/member27.jpg" },
            { name: "Tran Hoang BB", role: "Exhibition Coordinator", avatar: "images/members/member28.jpg" }
        ],
        activities: [
            "Photography workshops",
            "Photo walks and field trips",
            "Photo exhibitions",
            "Photography competitions",
            "Event documentation"
        ],
        achievements: [
            "Best University Photography Club Award 2022",
            "Published photography book featuring student work",
            "Hosted successful exhibition at Da Nang Cultural Center"
        ]
    },
    
    // Sports Clubs
    {
        id: 10,
        name: "VKU Football Club",
        shortDescription: "Developing football skills, teamwork, and sportsmanship through training and competitions.",
        fullDescription: "VKU Football Club brings together students passionate about football (soccer). We provide regular training sessions, friendly matches, and participation in university tournaments. Our club focuses on developing technical skills, tactical understanding, physical fitness, and team spirit. Players of all levels are welcome to join, from beginners looking to learn the basics to experienced players aiming to compete at higher levels. We promote sportsmanship, healthy competition, and camaraderie among members.",
        category: "sports",
        logo: "images/clubs/football-club-logo.jpg",
        coverImage: "images/clubs/football-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Tuesday and Thursday, 4:00 PM - 6:00 PM",
        location: "VKU Sports Field",
        email: "footballclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkufootball",
        members: [
            { name: "Nguyen Van CC", role: "President & Captain", avatar: "images/members/member29.jpg" },
            { name: "Tran Minh DD", role: "Vice President", avatar: "images/members/member30.jpg" },
            { name: "Le Hoang EE", role: "Coach", avatar: "images/members/member31.jpg" }
        ],
        activities: [
            "Regular training sessions",
            "Friendly matches with other universities",
            "Inter-department tournaments",
            "University league participation",
            "Football skills workshops"
        ],
        achievements: [
            "Champions of Da Nang University Football League 2022",
            "Semi-finalists in Central Vietnam Collegiate Cup",
            "Organized successful charity football tournament"
        ]
    },
    {
        id: 11,
        name: "VKU Badminton Club",
        shortDescription: "Promoting badminton through regular practice, friendly competitions, and skill development.",
        fullDescription: "VKU Badminton Club is dedicated to promoting the sport of badminton among university students. We organize regular practice sessions, training workshops, and friendly tournaments. Our club welcomes players of all skill levels, from beginners to advanced players. We focus on developing technical skills, strategic gameplay, physical fitness, and sportsmanship. The club provides equipment for new members and creates a supportive environment for everyone to enjoy the sport and improve their abilities.",
        category: "sports",
        logo: "images/clubs/badminton-club-logo.jpg",
        coverImage: "images/clubs/badminton-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Monday, Wednesday, and Friday, 5:00 PM - 7:00 PM",
        location: "VKU Indoor Sports Hall",
        email: "badmintonclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkubadminton",
        members: [
            { name: "Pham Thi FF", role: "President", avatar: "images/members/member32.jpg" },
            { name: "Nguyen Van GG", role: "Vice President", avatar: "images/members/member33.jpg" },
            { name: "Tran Thu HH", role: "Training Coordinator", avatar: "images/members/member34.jpg" }
        ],
        activities: [
            "Regular practice sessions",
            "Technique and strategy workshops",
            "Friendly matches and tournaments",
            "Inter-university competitions",
            "Beginner training programs"
        ],
        achievements: [
            "Champions in Mixed Doubles at Central Vietnam University Games",
            "Runners-up in Da Nang City Open Tournament",
            "Successfully hosted VKU Badminton Open with 100+ participants"
        ]
    },
    {
        id: 12,
        name: "VKU Volleyball Club",
        shortDescription: "Promoting physical fitness, teamwork, and a healthy lifestyle through volleyball training and competitive play.",
        fullDescription: "VKU Volleyball Club is committed to promoting physical fitness, teamwork, and mental wellbeing among students through volleyball practice, competitive play, and team-building activities. We offer regular training sessions, friendly matches, and teamwork exercises that help members improve their skills, boost physical strength, and enhance collaboration. Our club fosters a positive and inclusive community where everyone, regardless of skill level, can enjoy the game, build friendships, and stay active. All levels are welcome, from beginners to experienced players.",
        category: "sports",
        logo: "images/clubs/yoga-club-logo.jpg",
        coverImage: "images/clubs/yoga-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Tuesday and Thursday, 7:00 AM - 8:00 AM; Saturday, 4:00 PM - 5:30 PM",
        location: "Student Center, Multipurpose Room",
        email: "yogaclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuyoga",
        members: [
            { name: "Le Thi II", role: "President", avatar: "images/members/member35.jpg" },
            { name: "Nguyen Minh JJ", role: "Vice President", avatar: "images/members/member36.jpg" },
            { name: "Tran Van KK", role: "Fitness Instructor", avatar: "images/members/member37.jpg" }
        ],
        activities: [
            "Yoga and meditation sessions",
            "Fitness workouts and training",
            "Wellness workshops",
            "Nutrition and healthy lifestyle seminars",
            "Stress management techniques"
        ],
        achievements: [
            "Organized campus-wide Wellness Week with 300+ participants",
            "Certified 10 student yoga instructors",
            "Established partnership with local fitness centers for member benefits"
        ]
    },
    
    // Community Service Clubs
    {
        id: 13,
        name: "VKU Volunteer Club",
        shortDescription: "Make a positive impact in the community through various volunteer and charity initiatives.",
        fullDescription: "VKU Volunteer Club is dedicated to making a positive impact in our community through service and outreach programs. Our members engage in various charitable activities including educational support for underprivileged children, environmental conservation efforts, blood donation drives, and disaster relief initiatives. We believe in the power of collective action and strive to instill a sense of social responsibility among VKU students while developing leadership skills and compassion.",
        category: "community",
        logo: "images/clubs/volunteer-club-logo.jpg",
        coverImage: "images/clubs/volunteer-club-cover.jpg",
        foundedYear: "2020",
        meetingSchedule: "Every second Saturday, 9:00 AM - 11:00 AM",
        location: "Building B, Room 101",
        email: "volunteerclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkuvolunteer",
        members: [
            { name: "Nguyen Thi LL", role: "President", avatar: "images/members/member38.jpg" },
            { name: "Tran Van MM", role: "Vice President", avatar: "images/members/member39.jpg" },
            { name: "Le Hoang NN", role: "Project Coordinator", avatar: "images/members/member40.jpg" }
        ],
        activities: [
            "Teaching underprivileged children",
            "Environmental clean-up campaigns",
            "Blood donation drives",
            "Charity fundraising events",
            "Community development projects"
        ],
        achievements: [
            "Recognized as Best Volunteer Organization by Da Nang Youth Union",
            "Raised over 100 million VND for charity initiatives",
            "Completed 50+ community service projects"
        ]
    },
    {
        id: 14,
        name: "VKU Green Club",
        shortDescription: "Promoting environmental awareness and sustainability through campus and community initiatives.",
        fullDescription: "VKU Green Club is committed to promoting environmental awareness, sustainability, and eco-friendly practices within the university and broader community. Our activities include campus greening projects, waste reduction campaigns, environmental education workshops, and conservation initiatives. We collaborate with local environmental organizations and government agencies to implement sustainable solutions and raise awareness about pressing environmental issues. Through our efforts, we aim to create a more environmentally conscious campus community and contribute to global sustainability goals.",
        category: "community",
        logo: "images/clubs/green-club-logo.jpg",
        coverImage: "images/clubs/green-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Every Friday, 2:00 PM - 4:00 PM",
        location: "Building A, Room 202",
        email: "greenclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkugreen",
        members: [
            { name: "Pham Thu OO", role: "President", avatar: "images/members/member41.jpg" },
            { name: "Nguyen Minh PP", role: "Vice President", avatar: "images/members/member42.jpg" },
            { name: "Tran Hoang QQ", role: "Project Manager", avatar: "images/members/member43.jpg" }
        ],
        activities: [
            "Campus recycling programs",
            "Tree planting initiatives",
            "Environmental awareness workshops",
            "Beach and forest clean-up events",
            "Sustainable living campaigns"
        ],
        achievements: [
            "Implemented successful campus-wide recycling system",
            "Planted 500+ trees in local community",
            "Received Green Campus Award from Ministry of Environment"
        ]
    },
    {
        id: 15,
        name: "VKU Mentorship Club",
        shortDescription: "Supporting student success through peer mentoring, academic guidance, and personal development.",
        fullDescription: "VKU Mentorship Club connects experienced students with newcomers to provide guidance, support, and resources for academic and personal success. Our mentors help first-year and international students navigate university life, develop effective study habits, and connect with campus resources. We organize workshops on time management, stress reduction, career planning, and other essential skills. Through one-on-one mentoring and group activities, we foster a supportive community that empowers students to achieve their full potential at VKU.",
        category: "community",
        logo: "images/clubs/mentor-club-logo.jpg",
        coverImage: "images/clubs/mentor-club-cover.jpg",
        foundedYear: "2021",
        meetingSchedule: "Every Wednesday, 3:00 PM - 5:00 PM",
        location: "Building B, Room 205",
        email: "mentorclub@vku.udn.vn",
        facebook: "https://www.facebook.com/vkumentors",
        members: [
            { name: "Le Van RR", role: "President", avatar: "images/members/member44.jpg" },
            { name: "Nguyen Thi SS", role: "Vice President", avatar: "images/members/member45.jpg" },
            { name: "Tran Minh TT", role: "Training Coordinator", avatar: "images/members/member46.jpg" }
        ],
        activities: [
            "One-on-one mentoring sessions",
            "Study skills workshops",
            "New student orientation support",
            "Academic success seminars",
            "Social integration activities"
        ],
        achievements: [
            "Mentored 200+ first-year students",
            "Improved retention rate among mentored students by 15%",
            "Developed comprehensive mentorship training program"
        ]
    }
];

// Event Data
const eventsData = [
    {
        id: 1,
        title: "VKU Tech Conference 2023",
        date: "2023-11-15",
        time: "9:00 AM - 5:00 PM",
        location: "VKU Auditorium",
        description: "Annual technology conference featuring industry speakers, student projects, and networking opportunities.",
        image: "images/events/tech-conference.jpg",
        organizer: "VKU IT Club",
        category: "tech"
    },
    {
        id: 2,
        title: "Cultural Exchange Festival",
        date: "2023-12-02",
        time: "10:00 AM - 8:00 PM",
        location: "VKU Campus Square",
        description: "A celebration of cultural diversity featuring performances, food, traditional costumes, and interactive activities.",
        image: "images/events/cultural-festival.jpg",
        organizer: "VKU English Club",
        category: "academic"
    },
    {
        id: 3,
        title: "Dance Showcase: Rhythm Evolution",
        date: "2023-11-25",
        time: "7:00 PM - 9:00 PM",
        location: "VKU Performing Arts Center",
        description: "Annual dance performance showcasing various dance styles and choreographies by VKU Dance Club members.",
        image: "images/events/dance-showcase.jpg",
        organizer: "VKU Dance Club",
        category: "arts"
    },
    {
        id: 4,
        title: "Charity Run for Education",
        date: "2023-12-10",
        time: "6:30 AM - 10:00 AM",
        location: "VKU Sports Field",
        description: "Fundraising run to support educational resources for underprivileged children in rural areas.",
        image: "images/events/charity-run.jpg",
        organizer: "VKU Volunteer Club",
        category: "community"
    },
    {
        id: 5,
        title: "Inter-University Football Tournament",
        date: "2023-11-18",
        time: "8:00 AM - 6:00 PM",
        location: "VKU Sports Field",
        description: "Competitive football tournament featuring teams from universities across central Vietnam.",
        image: "images/events/football-tournament.jpg",
        organizer: "VKU Football Club",
        category: "sports"
    },
    {
        id: 6,
        title: "AI Workshop Series",
        date: "2023-11-22",
        time: "2:00 PM - 5:00 PM",
        location: "Building A, Room 401",
        description: "Hands-on workshop on machine learning algorithms and their practical applications.",
        image: "images/events/ai-workshop.jpg",
        organizer: "VKU AI Research Club",
        category: "tech"
    }
];
const galleryData = [
    {
        id: 1,
        image: "images/gallery/gallery1.jpg",
        title: "IT Club Hackathon",
        category: "tech"
    },
    {
        id: 2,
        image: "images/gallery/gallery2.jpg",
        title: "Dance Club Performance",
        category: "arts"
    },
    {
        id: 3,
        image: "images/gallery/gallery3.jpg",
        title: "Volunteer Club Community Service",
        category: "community"
    },
    {
        id: 4,
        image: "images/gallery/gallery4.jpg",
        title: "English Club Debate Competition",
        category: "academic"
    },
    {
        id: 5,
        image: "images/gallery/gallery5.jpg",
        title: "Football Tournament",
        category: "sports"
    },
    {
        id: 6,
        image: "images/gallery/gallery6.jpg",
        title: "Music Club Concert",
        category: "arts"
    },
    {
        id: 7,
        image: "images/gallery/gallery7.jpg",
        title: "AI Club Research Presentation",
        category: "tech"
    },
    {
        id: 8,
        image: "images/gallery/gallery8.jpg",
        title: "Green Club Tree Planting",
        category: "community"
    },
    {
        id: 9,
        image: "images/gallery/gallery9.jpg",
        title: "Badminton Tournament",
        category: "sports"
    },
    {
        id: 10,
        image: "images/gallery/gallery10.jpg",
        title: "Photography Exhibition",
        category: "arts"
    },
    {
        id: 11,
        image: "images/gallery/gallery11.jpg",
        title: "Yoga Session",
        category: "sports"
    },
    {
        id: 12,
        image: "images/gallery/gallery12.jpg",
        title: "Research Club Conference",
        category: "academic"
    }
];

// DOM Elements
const clubsContainer = document.getElementById('clubs-container');
const eventsContainer = document.getElementById('events-container');
const galleryContainer = document.getElementById('gallery-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const clubInterestSelect = document.getElementById('club-interest');
const contactForm = document.getElementById('contact-form');
const modalClubTitle = document.getElementById('modal-club-title');
const modalClubContent = document.getElementById('modal-club-content');
const modalJoinBtn = document.getElementById('modal-join-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display all clubs initially
    displayClubs('all');
    
    // Display events
    displayEvents();
    
    // Display gallery
    displayGallery();
    
    // Populate club interest dropdown
    populateClubInterestDropdown();
    
    // Set up event listeners
    setupEventListeners();
    
    // Smooth scrolling for navigation links
    setupSmoothScrolling();
});

// Display clubs based on category filter
function displayClubs(category) {
    clubsContainer.innerHTML = '';
    
    const filteredClubs = category === 'all' 
        ? clubsData 
        : clubsData.filter(club => club.category === category);
    
    filteredClubs.forEach(club => {
        const clubCard = document.createElement('div');
        clubCard.className = 'col-md-6 col-lg-4 club-item fade-in';
        clubCard.setAttribute('data-category', club.category);
        
        clubCard.innerHTML = `
            <div class="card club-card h-100">
                <div class="position-relative">
                    <img src="${club.coverImage || 'images/placeholder.jpg'}" class="card-img-top" alt="${club.name}">
                    <span class="club-category">${getCategoryName(club.category)}</span>
                </div>
                <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                        <img src="${club.logo || 'images/placeholder.jpg'}" alt="${club.name} Logo" class="rounded-circle me-3" width="50" height="50">
                        <h5 class="card-title mb-0">${club.name}</h5>
                    </div>
                    <p class="card-text">${club.shortDescription}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-sm btn-primary view-club-btn" data-club-id="${club.id}">View Details</button>
                        <small class="text-muted">Founded: ${club.foundedYear}</small>
                    </div>
                </div>
            </div>
        `;
        
        clubsContainer.appendChild(clubCard);
    });
    
    // Add event listeners to view club buttons
    document.querySelectorAll('.view-club-btn').forEach(button => {
        button.addEventListener('click', function() {
            const clubId = parseInt(this.getAttribute('data-club-id'));
            openClubDetailModal(clubId);
        });
    });
}

// Display events
function displayEvents() {
    eventsContainer.innerHTML = '';
    
    // Sort events by date (closest first)
    const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sortedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate();
        const month = eventDate.toLocaleString('default', { month: 'short' });
        
        const eventCard = document.createElement('div');
        eventCard.className = 'col-md-6 col-lg-4 fade-in';
        
        eventCard.innerHTML = `
            <div class="card event-card h-100">
                <div class="position-relative">
                    <img src="${event.image || 'images/placeholder.jpg'}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                    <div class="event-date">
                        <span class="day">${day}</span>
                        <span class="month">${month}</span>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="mt-3">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-clock text-primary me-2"></i>
                            <span>${event.time}</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-map-marker-alt text-primary me-2"></i>
                            <span>${event.location}</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-users text-primary me-2"></i>
                            <span>Organized by: ${event.organizer}</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <button class="btn btn-outline-primary w-100">Register</button>
                </div>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
}

// Display gallery
function displayGallery() {
    galleryContainer.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'col-md-4 col-lg-3 fade-in';
        
        galleryItem.innerHTML = `
            <div class="gallery-item rounded overflow-hidden">
                <img src="${item.image}" class="img-fluid" alt="${item.title}">
                <div class="gallery-overlay p-3">
                    <div class="text-center">
                        <h6 class="mb-1">${item.title}</h6>
                        <small>${getCategoryName(item.category)}</small>
                    </div>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Open club detail modal
function openClubDetailModal(clubId) {
    const club = clubsData.find(c => c.id === clubId);
    
    if (!club) return;
    
    modalClubTitle.textContent = club.name;
    
    modalClubContent.innerHTML = `
        <div class="row mb-4">
            <div class="col-md-4 text-center mb-3 mb-md-0">
                <img src="${club.logo || 'images/placeholder.jpg'}" alt="${club.name} Logo" class="modal-club-logo mb-3">
                <div class="d-flex justify-content-center gap-2">
                    <a href="${club.facebook || '#'}" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href="mailto:${club.email}" class="social-icon"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div class="col-md-8">
                <p>${club.fullDescription}</p>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-calendar-alt text-primary me-2"></i>
                            <span>Founded: ${club.foundedYear}</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-clock text-primary me-2"></i>
                            <span>Meetings: ${club.meetingSchedule}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-map-marker-alt text-primary me-2"></i>
                            <span>Location: ${club.location}</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="fas fa-envelope text-primary me-2"></i>
                            <span>Email: ${club.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <h5 class="border-bottom pb-2 mb-3">Activities</h5>
        <ul class="mb-4">
            ${club.activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
        
        <h5 class="border-bottom pb-2 mb-3">Achievements</h5>
        <ul class="mb-4">
            ${club.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
        
        <h5 class="border-bottom pb-2 mb-3">Club Members</h5>
        <div class="row">
            ${club.members.map(member => `
                <div class="col-md-4 mb-3">
                    <div class="card club-member text-center h-100">
                        <div class="card-body">
                            <img src="${member.avatar || 'images/placeholder.jpg'}" alt="${member.name}" class="member-avatar mb-3">
                            <h6 class="mb-1">${member.name}</h6>
                            <small class="text-muted">${member.role}</small>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Set the club for the join button
    modalJoinBtn.setAttribute('data-club-id', club.id);
    
    // Open the modal
    const clubDetailModal = new bootstrap.Modal(document.getElementById('clubDetailModal'));
    clubDetailModal.show();
}

// Populate club interest dropdown
function populateClubInterestDropdown() {
    if (!clubInterestSelect) return;
    
    clubsData.forEach(club => {
        const option = document.createElement('option');
        option.value = club.id;
        option.textContent = club.name;
        clubInterestSelect.appendChild(option);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Display filtered clubs
            displayClubs(filter);
        });
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Modal join button
    if (modalJoinBtn) {
        modalJoinBtn.addEventListener('click', function() {
            const clubId = this.getAttribute('data-club-id');
            if (clubInterestSelect) {
                clubInterestSelect.value = clubId;
                document.querySelector('a[href="#contact"]').click();
            }
        });
    }
    
    // Navbar active state on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
}

// Set up smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 75,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Helper function to get category display name
function getCategoryName(category) {
    const categories = {
        'tech': 'Technology',
        'academic': 'Academic',
        'arts': 'Arts & Culture',
        'sports': 'Sports',
        'community': 'Community Service'
    };
    
    return categories[category] || category;
}

// Create placeholder images for development
function createPlaceholderImage(text, width, height, bgColor = '#005baa') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// Create separate pages for each category
function setupCategoryPages() {
    // This function would be used if you want to create separate HTML pages for each category
    // For now, we're using the filter functionality on the main page
}

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });