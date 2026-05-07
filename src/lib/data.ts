export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  codeSnippet?: string;
  codeDescription?: string;
  screenshots?: string[];
  techStack: string[];
  challenges: string;
  reflection: string;
  color: string;
}

export const projectsData: Project[] = [
  {
    slug: "pop-hop",
    title: "Pop Hop",
    description: "A vibrant flea market web application for on-site vendors.",
    overview: "Pop Hop is a marketplace platform designed to bring the energy of a local flea market online. It offers an Avant Basic UI with seamless vendor profile management and an integrated chat system to facilitate real-time communication between buyers and sellers.",
    features: [
      "Vendor Profile Management",
      "Real-time Chat System",
      "Event Management & Scheduling",
      "Mobile-first Responsive Design"
    ],
    codeSnippet: `// Example Chat WebSocket Initialization
const initializeChat = (userId: string) => {
  const ws = new WebSocket(\`wss://api.pophop.dev/chat?user=\${userId}\`);
  ws.onmessage = (event) => {
    handleIncomingMessage(JSON.parse(event.data));
  };
  return ws;
};`,
    codeDescription: "This snippet demonstrates how the WebSocket connection is initialized to establish a real-time communication channel for the chat feature.",
    screenshots: [],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "WebSockets"],
    challenges: "Handling real-time synchronization of messages across different devices without causing performance bottlenecks was tricky. Implementing an optimistic UI pattern helped mask network latency.",
    reflection: "Building Pop Hop taught me how to manage complex state in a React application and the importance of a well-planned design system for maintaining visual consistency.",
    color: "bg-[oklch(0.85_0.12_340)]" // Pastel Pink
  },
  {
    slug: "live-pig-weight-estimator",
    title: "Live Pig Weight Estimator",
    description: "Computer vision mobile application for agricultural estimation.",
    overview: "This project uses a custom-trained machine learning model to estimate the weight of live pigs using just a smartphone camera. It aims to provide small-scale farmers with an accessible, non-stressful way to monitor livestock growth.",
    features: [
      "Real-time Camera Feed Processing",
      "On-device ML Model Inference",
      "Historical Weight Tracking",
      "Offline Mode Capabilities"
    ],
    codeSnippet: `# Example Inference Script
def estimate_weight(image_frame):
    processed = preprocess(image_frame)
    predictions = model.predict(processed)
    weight_kg = convert_to_weight(predictions)
    return weight_kg`,
    codeDescription: "This Python script illustrates the core inference loop where frames from the camera are preprocessed and fed into our TensorFlow Lite model.",
    screenshots: [],
    techStack: ["Python", "TensorFlow Lite", "React Native", "OpenCV"],
    challenges: "The biggest hurdle was optimizing the computer vision model to run smoothly on low-end mobile devices without draining the battery or overheating the phone.",
    reflection: "I gained a deep appreciation for the constraints of edge computing. Trimming down the model size while maintaining accuracy was a difficult but rewarding balancing act.",
    color: "bg-[oklch(0.88_0.1_240)]" // Pastel Blue
  },
  {
    slug: "java-cli-chatbot",
    title: "Java CLI Chatbot",
    description: "A lightweight conversational agent built entirely in Java.",
    overview: "A command-line interface chatbot designed to handle scheduling, simple mathematical queries, and note-taking. It uses rule-based parsing and basic natural language processing to understand user intent.",
    features: [
      "Natural Language Parsing",
      "Task Scheduling & Reminders",
      "Persistent Storage using JSON",
      "Modular Plugin Architecture"
    ],
    codeSnippet: `// Example Command Parser
public Command parseInput(String input) {
    if (input.startsWith("schedule")) {
        return new ScheduleCommand(input.substring(9));
    }
    return new UnknownCommand();
}`,
    codeDescription: "A snippet showing the Command Design Pattern implementation, used to parse raw user input strings and route them to the appropriate executable command dynamically.",
    screenshots: [],
    techStack: ["Java 17", "Gson", "JUnit", "Maven"],
    challenges: "Designing an extensible architecture where new commands could be added without modifying the core parsing logic required careful application of the Command Design Pattern.",
    reflection: "This project strengthened my grasp of Object-Oriented Design principles. I learned how interfaces and polymorphism make codebases much easier to maintain and extend.",
    color: "bg-[oklch(0.92_0.08_140)]" // Pastel Green
  }
];
